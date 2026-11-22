(function(){var k="lang",h=document.documentElement,s;
try{s=localStorage.getItem(k)}catch(e){}
var l=s||((navigator.language||"vi").toLowerCase().indexOf("vi")===0?"vi":"en");
function set(v){h.lang=v;try{localStorage.setItem(k,v)}catch(e){}
var b=document.getElementById("lang");if(b)b.textContent=v==="vi"?"English":"Tiếng Việt";
document.title=(document.body&&document.body.dataset["t"+v])||document.title}
set(l);document.addEventListener("DOMContentLoaded",function(){set(h.lang);
var b=document.getElementById("lang");if(b)b.onclick=function(){set(h.lang==="vi"?"en":"vi")}})})();
