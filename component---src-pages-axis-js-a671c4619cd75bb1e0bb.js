(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{209:function(e,A,a){"use strict";a.r(A);a(19),a(17);var t=a(212),n=a(0),r=a.n(n),c=a(37),i=a(203),l=(a(204),a(205),function(e,A){e.data.site.siteMetadata.title;return r.a.createElement(i.a,{title:"Axis Build Calculator"},r.a.createElement("article",{className:"post-content page-template no-image"},r.a.createElement("div",{className:"post-content-body"},r.a.createElement("p",null,"Enter your funds below and select your build to see how many units you can buy. "),r.a.createElement("form",{id:"frm1",method:"post",action:"#"},r.a.createElement("input",{className:"axis-radio",type:"radio",id:"inf",name:"unit",value:"inf"}),r.a.createElement("label",{for:"inf"},"Infantry (Support heavy)"),r.a.createElement("input",{className:"axis-radio",type:"radio",id:"ainf",name:"unit",value:"ainf"}),r.a.createElement("label",{for:"ainf"},"Infantry (Pure Assuault + medic)"),r.a.createElement("input",{className:"axis-radio",type:"radio",id:"sinf",name:"unit",value:"sinf"}),r.a.createElement("label",{for:"sinf"},"Infantry (Pure Support + medic)"),r.a.createElement("input",{className:"axis-radio",type:"radio",id:"tungsbrem",name:"unit",value:"tungsbrem"}),r.a.createElement("label",{for:"tungsbrem"},"Tungs/Brem (Tanks Anti-Air)"),r.a.createElement("input",{className:"axis-radio",type:"radio",id:"suireb",name:"unit",value:"suireb"}),r.a.createElement("label",{for:"suireb"},"Suirebs"),r.a.createElement("input",{className:"axis-radio",type:"radio",id:"vod",name:"unit",value:"vod"}),r.a.createElement("label",{for:"vod"},"Vodniks/MLR (Jeeps Anti-Infantry)"),r.a.createElement("input",{className:"axis-radio",type:"radio",id:"blk",name:"unit",value:"blk"}),r.a.createElement("label",{for:"blk"},"Black Eagles/Brem"),r.a.createElement("input",{className:"axis-radio",type:"radio",id:"t98",name:"unit",value:"t98"}),r.a.createElement("label",{for:"t98"},"Type 98/Brem"),"Funds: ",r.a.createElement("input",{type:"text",name:"funds",id:"funds"})),r.a.createElement("button",{className:"button axis",onClick:o},"Submit"),r.a.createElement("p",{id:"demo"}),r.a.createElement("p",{id:"demo2"}),r.a.createElement("p",{className:"note"}," *Please note this an early version so it may be a bit buggy. Let Natty_Boh know about any issues. Thanks to Jorn and Synth for build ratios.  "))))}),o=function(){var e,A=document.getElementById("frm1"),a="";for(e=0;e<A.length;e++){if(document.getElementById("inf").checked){var t=1625e3+6e5+25e4,n=A.elements[e].value.replace(/,/g,"")/t;a=Math.floor(13*n)+" support <br>"+Math.floor(6*n)+" \tassault <br>"+Math.floor(1*n)+" medic <br>"}if(document.getElementById("tungsbrem").checked)a=s(A,e,35e5,"tungs");if(document.getElementById("suireb").checked)t=29e4,n=A.elements[e].value.replace(/,/g,"")/t,a=Math.floor(1*n)+" suicide bombers <br>"+Math.floor(4*n)+" \trebels <br>";if(document.getElementById("vod").checked)t=39e5,n=A.elements[e].value.replace(/,/g,"")/t,a=Math.floor(3*n)+" vodnik <br>"+Math.floor(1*n)+" \tMLR <br>";if(document.getElementById("blk").checked)a=s(A,e,8e6,"black eagles");if(document.getElementById("t98").checked)a=s(A,e,215e4,"type 98");if(document.getElementById("ainf").checked)t=19e5+25e4,n=A.elements[e].value.replace(/,/g,"")/t,a=Math.floor(19*n)+" assault <br>"+Math.floor(1*n)+" medic <br>";if(document.getElementById("sinf").checked)t=2375e3+25e4,n=A.elements[e].value.replace(/,/g,"")/t,a=Math.floor(19*n)+" support <br>"+Math.floor(1*n)+" medic <br>"}document.getElementById("demo").innerHTML=a};function s(e,A,a,t){var n=e.elements[A].value.replace(/,/g,""),r=a,c=n/(19*r+5e6),i=Math.floor(19*c),l=Math.floor(c);return n-(5e6*l+i*r)>=r?i-1+" "+t+" <br>"+(l+1)+" \tbrem <br>":i-2+" "+t+"<br>"+(l+1)+" \tbrem <br>"}A.default=function(e){return r.a.createElement(c.StaticQuery,{query:"1728515469",render:function(A){return r.a.createElement(l,Object.assign({location:e.location,data:A},e))},data:t})}},212:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Final Earth Tools"}},"benchAccounting":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAEDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHcRAWBB//EABgQAAIDAAAAAAAAAAAAAAAAAAARAQIQ/9oACAEBAAEFAtko2f/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAABAgMf/aAAgBAQAGPwJKP//EABkQAAIDAQAAAAAAAAAAAAAAAAEQABEhMf/aAAgBAQABPyEviaLIr//aAAwDAQACAAMAAAAQQM//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAACAwADAAAAAAAAAAAAAAAAAREhMRBh8P/aAAgBAQABPxDhIt7gbXLm/dCw/9k=","aspectRatio":1.5003750937734435,"src":"/static/5e80cb2f67c2a4804561f9d0ccaa9685/10fb1/bench-accounting-49909-unsplash.jpg","srcSet":"/static/5e80cb2f67c2a4804561f9d0ccaa9685/467b3/bench-accounting-49909-unsplash.jpg 340w,\\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/e1ddd/bench-accounting-49909-unsplash.jpg 680w,\\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/10fb1/bench-accounting-49909-unsplash.jpg 1360w,\\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/883ab/bench-accounting-49909-unsplash.jpg 2000w","sizes":"(max-width: 1360px) 100vw, 1360px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-axis-js-a671c4619cd75bb1e0bb.js.map