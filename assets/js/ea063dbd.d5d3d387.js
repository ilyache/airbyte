"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[58356],{20340:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},o="Instagram",l={unversionedId:"integrations/sources/instagram",id:"integrations/sources/instagram",title:"Instagram",description:"This page contains the setup guide and reference information for the Instagram source connector.",source:"@site/../docs/integrations/sources/instagram.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/instagram",permalink:"/integrations/sources/instagram",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/instagram.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Insightly",permalink:"/integrations/sources/insightly"},next:{title:"Instatus",permalink:"/integrations/sources/instatus"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Guide",id:"setup-guide",level:2},{value:"Set up the Instagram connector in Airbyte",id:"set-up-the-instagram-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Rate Limiting and Performance Considerations",id:"rate-limiting-and-performance-considerations",level:3},{value:"Data type map",id:"data-type-map",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:s},c="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"instagram"},"Instagram"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Instagram source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com"},"Meta for Developers account")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.facebook.com/business/help/898752960195806"},"Instagram business account")," to your Facebook page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/"},"Instagram Graph API")," to your Facebook app"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-basic-display-api/reference"},"Facebook OAuth Reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.facebook.com/business/help/1492627900875762"},"Facebook ad account ID number")," (you'll use this to configure Instagram as a source in Airbyte)")),(0,n.kt)("h2",{id:"setup-guide"},"Setup Guide"),(0,n.kt)("h3",{id:"set-up-the-instagram-connector-in-airbyte"},"Set up the Instagram connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Instagram")," from the ",(0,n.kt)("strong",{parentName:"li"},"Source type")," dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your source."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Authenticate your Instagram account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and authorize the Instagram account."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Start Date")," in YYYY-MM-DDTHH:mm:ssZ format. All data generated after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your Airbyte Open Source account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Instagram")," from the ",(0,n.kt)("strong",{parentName:"li"},"Source type")," dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your source."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Authenticate your Instagram account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and authorize the Instagram account."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Start Date")," in YYYY-MM-DDTHH:mm:ssZ format. All data generated after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Instagram source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Incremental sync modes are only available for the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/insights"},"User Insights")," stream.")),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"The Instagram source connector supports the following streams. For more information, see the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/instagram-api/"},"Instagram Graph API")," and ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/instagram-api/guides/insights/"},"Instagram Insights API documentation"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user"},"User"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/insights"},"User Insights")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/media"},"Media"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-media/insights"},"Media Insights")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-user/stories/"},"Stories"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/instagram-api/reference/ig-media/insights"},"Story Insights"))))),(0,n.kt)("h3",{id:"rate-limiting-and-performance-considerations"},"Rate Limiting and Performance Considerations"),(0,n.kt)("p",null,"Instagram limits the number of requests that can be made at a time, but the Instagram connector gracefully handles rate limiting. See Facebook's ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/overview/rate-limiting/#instagram-graph-api"},"documentation on rate limiting")," for more information."),(0,n.kt)("h2",{id:"data-type-map"},"Data type map"),(0,n.kt)("p",null,"AirbyteRecords are required to conform to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/understanding-airbyte/supported-data-types/"},"Airbyte type")," system. This means that all sources must produce schemas and records within these types and all destinations must handle records that conform to this type system."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24634"},"24634")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add user-friendly message for no instagram_business_accounts case")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23671"},"23671")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add info about main permissions in spec and doc links in error message to navigate user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24043"},"24043")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Do not emit incomplete records for ",(0,n.kt)("inlineCode",{parentName:"td"},"user_insights")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24042"},"24042")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Test publish flow")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21602"},"21602")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Handle abnormally large state values")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17110"},"17110")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove custom read function and migrate to per-stream state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16428"},"16428")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix requests metrics for Reels media product type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16340"},"16340")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update to latest version of the CDK (v0.1.81)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6438"},"6438")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotate Oauth2 flow initialization parameters in connector specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5354"},"5354")),(0,n.kt)("td",{parentName:"tr",align:"left"},"added check for empty state and fixed tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4805"},"4805")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add support for previous format of STATE.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4210"},"4210")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Refactor connector to use CDK: - improve error handling. - fix sync fail with HTTP status 400. - integrate SAT.")))))}d.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=s(a),u=n,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?r.createElement(k,o(o({ref:e},m),{},{components:a})):r.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);