(this["webpackJsonpclaims-dashboard"]=this["webpackJsonpclaims-dashboard"]||[]).push([[0],{14:function(e,n,t){e.exports=t(23)},19:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),c=t.n(o),i=(t(19),t(1)),s=t.n(i),u=t(3),l=t(2),d="https://my-json-server.typicode.com/mithuniverse/claims-dashboard";function f(e){if(null==e)return"";for(var n="?",t=0,a=Object.entries(e);t<a.length;t++){var r=Object(l.a)(a[t],2),o=r[0],c=r[1];n+="".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(c),"&")}return n}var p=function(){var e=Object(u.a)(s.a.mark((function e(n){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/claims",n);case 2:return t=e.sent,a=function(e){var n=new Date,t=new Date(e.updatedAt);return Math.abs(t-n)/36e5},e.abrupt("return",t.sort((function(e,n){return a(n)-a(e)})));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function h(e,n){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(s.a.mark((function e(n,t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d).concat(n).concat(f(t)));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=t(4),w=t(5);function g(){var e=Object(v.a)(["\n  margin: 0 12px;\n  min-width: 140px;\n"]);return g=function(){return e},e}var b=w.a.div.attrs((function(){return{className:"col"}}))(g());function E(){var e=Object(v.a)(["\n  margin: 12px 0;\n\n  font-weight: ",";\n\n  & .col {\n    display: inline-block;\n  }\n"]);return E=function(){return e},e}var y=w.a.div.attrs((function(){return{className:"row"}}))(E(),(function(e){return e.header?"900":"300"}));function k(e){var n=new Date(e),t=Intl.DateTimeFormat("en",{year:"2-digit",month:"2-digit",day:"2-digit"}).formatToParts(n),a=Object(l.a)(t,5),r=a[0].value,o=a[2].value,c=a[4].value;return"".concat(o,"-").concat(r,"-").concat(c)}var j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,p();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{header:!0},r.a.createElement(b,null,"Claimant"),r.a.createElement(b,null,"Assigned"),r.a.createElement(b,null,"Status"),r.a.createElement(b,null,"Created"),r.a.createElement(b,null,"Updated")),t.map((function(e){return r.a.createElement(y,{key:e.id},r.a.createElement(b,null,e.claimant),r.a.createElement(b,null,e.assignedTo),r.a.createElement(b,null,e.status),r.a.createElement(b,null,k(e.createdAt)),r.a.createElement(b,null,k(e.updatedAt)))})))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/claims-dashboard",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/claims-dashboard","/service-worker.js");x?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.73cf3fdf.chunk.js.map