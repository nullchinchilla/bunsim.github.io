var TongWen=function(){function t(){}function u(a){for(var b in a)k=Math.max(k,a[b].length),p[b]=a[b]}function v(a){for(var b in a)m=Math.max(m,a[b].length),q[b]=a[b]}function f(a,b){var d,e;"simplified"==b?(e=q,d=Math.min(m,a.length)):(e=p,d=Math.min(k,a.length));a=a.split("");for(var g=0,n=a.length;g<n;g++)a[g]=e[a[g]]||a[g];a=a.join("");for(var c="",f,h,g=0,n=a.length;g<n;){h=!0;for(var l=d;1<l;l--)if(f=a.substr(g,l),f in e){c+=e[f];g+=l;h=!1;break}h&&(c+=a.substr(g,1),g++)}""!=c&&(a=c);return a}
function w(a,b){function d(){if(0>=e.length){if(0>=g.length)return;h(g.shift(),b)}var a=e.shift(),c;switch(a.nodeType){case 1:switch(a.nodeName.toLowerCase()){case "frame":case "iframe":"undefined"!=typeof a.contentDocument?h(a.contentDocument,b):"undefined"!=typeof a.contentWindow&&"undefined"!=typeof a.contentWindow.document&&h(a.contentWindow.document,b);break;case "embed":case "object":case "script":case "style":case "title":case "br":case "hr":case "noscript":case "script":break;case "img":c=
a.getAttribute("title");null!=c&&a.setAttribute("title",f(c,b));c=a.getAttribute("alt");null!=c&&a.setAttribute("alt",f(c,b));break;case "input":switch(a.type.toLowerCase()){case "button":case "submit":case "reset":0<a.value.length&&(a.value=f(a.value,b))}break;case "option":0<a.text.length&&(a.text=f(a.text,b));break;default:if(c=a.getAttribute("title"),null!=c&&a.setAttribute("title",f(c,b)),a.hasChildNodes()){c=0;for(var k=a.childNodes.length;c<k;c++)0>"139".indexOf(a.childNodes[c].nodeType)||
e.push(a.childNodes[c])}}break;case 3:c=a.nodeValue;0<c.length&&(a.nodeValue=f(c,b));d();break;case 9:if(a.hasChildNodes())for(c=0,k=a.childNodes.length;c<k;c++)0>"139".indexOf(a.childNodes[c].nodeType)||e.push(a.childNodes[c])}(0<e.length||0<g.length)&&setTimeout(d,1)}var e=[],g=[];e.push(a);setTimeout(d,1)}function h(a,b){d=b;a.documentElement.setAttribute("zhtongwen",b);a.title=f(a.title,b);w(a,b)}function x(a){h(a||document,"traditional")}function y(a){h(a||document,"simplified")}function z(a){var b=
a||document,f=b.characterSet.toLowerCase(),e="";a&&a.documentElement&&(e=a.documentElement.getAttribute("zhtongwen"),null==e&&(e=""));d=e;if(""==d){a=b.documentElement.getAttribute("lang");if(null!=a)switch(a.toLowerCase()){case "zh-tw":case "zh-hk":d="simplified";break;case "zh-cn":d="traditional"}""==d&&0<=A.indexOf(f)&&(d=0<=r.indexOf(f)?"simplified":"traditional")}else d="traditional"==d?"simplified":"traditional";""!=d&&h(b,d)}var r=["big5","big5-hkscs","x-euc-tw"],A="gb2312 gbk x-gbk gb18030 hz-gb-2312 iso-2022-cn".split(" ").concat(r,
["utf-7","utf-8","utf-16le","x-user-defined"]),q={},p={},k=1,m=1,d="";return function(){toolbarId="tongwen-"+Math.ceil(1E6*Math.random());document.addEventListener?document.addEventListener("DOMContentLoaded",function(){},!1):window.attachEvent&&window.attachEvent("onload",t);return{version:"0.2",flagSimp:"simplified",flagTrad:"traditional",addS2TTable:u,addT2STable:v,convert:f,transPage:h,trans2Trad:x,trans2Simp:y,transAuto:z}}()}();
