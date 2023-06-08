from abc import ABC
from typing import Any, Iterable, List, Mapping, MutableMapping, Optional, Tuple

import requests
from airbyte_cdk.sources import AbstractSource
from airbyte_cdk.sources.streams import Stream
from airbyte_cdk.sources.streams.http import HttpStream
from airbyte_cdk.sources.streams.http.auth import TokenAuthenticator

class JfrogClient:

    def __init__(self, jfrogServerUrl, jfrogUsername, jfrogPassword, logger):
        self.jfrogServerUrl = jfrogServerUrl
        self.jfrogUsername = jfrogUsername
        self.jfrogPassword = jfrogPassword
        self.logger = logger

    def get_repositories(self):
        session = requests.Session()
        session.auth = (self.jfrogUsername,self.jfrogPassword)
        try:
            response = session.get(self.jfrogServerUrl + '/artifactory/api/repositories')
            response.raise_for_status()

            self.logger.info(response.text)
            self.logger.info(f'Managed to connected to artifactory at {self.jfrogServerUrl}')

            json_data = response.json()
            property_list = list(map(lambda item: item['key'], json_data))
            self.logger.info(f'Repositories extracted are: ${property_list}')

        except Exception as e:
            self.logger.error(f'Exception when calling get repositories: {e}')
            raise e

class JfrogStream(HttpStream, ABC):
    url_base = '' # The URL changes between clients, and therefore is derived from the config rather than being set here

    def next_page_token(self, response: requests.Response) -> Optional[Mapping[str, Any]]:
        """
        TODO: Override this method to define a pagination strategy. If you will not be using pagination, no action is required - just return None.

        This method should return a Mapping (e.g: dict) containing whatever information required to make paginated requests. This dict is passed
        to most other methods in this class to help you form headers, request bodies, query params, etc..

        For example, if the API accepts a 'page' parameter to determine which page of the result to return, and a response from the API contains a
        'page' number, then this method should probably return a dict {'page': response.json()['page'] + 1} to increment the page count by 1.
        The request_params method should then read the input next_page_token and set the 'page' param to next_page_token['page'].

        :param response: the most recent response from the API
        :return If there is another page in the result, a mapping (e.g: dict) containing information needed to query the next page in the response.
                If there are no more pages in the result, return None.
        """
        return None

    def request_params(
        self, stream_state: Mapping[str, Any], stream_slice: Mapping[str, any] = None, next_page_token: Mapping[str, Any] = None
    ) -> MutableMapping[str, Any]:
        """
        TODO: Override this method to define any query parameters to be set. Remove this method if you don't need to define request params.
        Usually contains common params e.g. pagination size etc.
        """
        return {}

    def parse_response(self, response: requests.Response, **kwargs) -> Iterable[Mapping]:
        """
        TODO: Override this method to define how a response is parsed.
        :return an iterable containing each record in the response
        """
        yield {}


class Vulnerabilities(JfrogStream):
    primary_key = None

    def path(
        self, stream_state: Mapping[str, Any] = None, stream_slice: Mapping[str, Any] = None, next_page_token: Mapping[str, Any] = None
    ) -> str:
        """
        TODO: Override this method to define the path this stream corresponds to. E.g. if the url is https://example-api.com/v1/customers then this
        should return "customers". Required.
        """
        return "vulnerabilities"

# Source
class SourceJfrog(AbstractSource):
    def check_connection(self, logger, config) -> Tuple[bool, any]:
        """
        See https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-stripe/source_stripe/source.py#L232
        for an example.

        :param config:  the user-input config object conforming to the connector's spec.yaml
        :param logger:  logger object
        :return Tuple[bool, any]: (True, None) if the input config can be used to connect to the API successfully, (False, error) otherwise.
        """

        jfrogServerUrl, jfrogUsername, jfrogPassword = config['jfrogServerUrl'], config['jfrogUsername'], config['jfrogPassword']
        session = requests.Session()
        session.auth = (jfrogUsername, jfrogPassword)
        try:
            client = JfrogClient(jfrogServerUrl, jfrogUsername, jfrogPassword, logger)
            client.get_repositories()
            return True, None
        except Exception as e:
            return False, f"Exception during connection validation to JFrog: {e}"


    def streams(self, config: Mapping[str, Any]) -> List[Stream]:
        return [Vulnerabilities(**config)]
