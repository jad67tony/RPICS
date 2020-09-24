
function JB(x){
  return "jb/"+x+".js";}
function SC(x){
  return '<script src="'+x+'.js"></scr'+"ipt>";}
function BINLOADER(x){
  return "PL_"+plLangue()+"/binloader/"+x+".js";}
function SCMIRA(x){
  return "PL_"+plLangue()+"/mirahen/"+x+".js";}
function PAYLOAD(x){
  return "PL_"+plLangue()+"/"+x+".js";}
function checkBlock(elem){if(elem&&elem.style.display=="block")
 return true;
 else return false}
function displayBlock(elem){if(elem){elem.style.display="block";}}
function displayNone(elem){if(elem){elem.style.display="none";}}
function setInnerHTML(elem,str){if(elem)elem.innerHTML=str;}
function addInnerHTML(elem,str){if(elem)elem.innerHTML+=str;}
function setInnerText(elem,str){if(elem)elem.innerHTML=str;}
function languncheck(elem){if(elem)elem.checked=false;}
function plLangue(){let pl_langue;switch(defaultLangue){
 case 0:
 return(pl_langue="FR");
 case 1:
 return(pl_langue="EN");}}
function readCookie(name){const cookieValue=document.cookie.split("; ").find((row) => row.startsWith(name)).split("=")[1];
 return cookieValue;}
function addDays(days){let result = new Date();result.setDate(result.getDate()+days)
 return result;}
function createCookie(name, value) {
  let expire = addDays(30);
  document.cookie = name+"="+value+";expires="+expire.toUTCString();
}
function getCookie(name) {let dc=document.cookie;let prefix=name+"=";let begin=dc.indexOf("; "+prefix);if(begin== -1){begin=dc.indexOf(prefix);if(begin!=0)
 return null;}
  else 
 return readCookie(name);}
function readCookie(name) {const cookieValue = document.cookie.split("; ").find((row) => row.startsWith(name)).split("=")[1];
 return cookieValue;}
function deleteCookie(cname){let d=new Date();d.setTime(d.getTime()-1000*60*60*24);let expires="expires="+d.toGMTString();window.document.cookie=cname+"="+"; "+expires;}
function modifyCookie(name,value){let expire=addDays(30);document.cookie=name+"="+value+";expires="+expire.toUTCString();}
function addDays(days) {let result = new Date();result.setDate(result.getDate() + days)
 return result;}
function removeScript(){let head=document.getElementsByTagName("head")[0],scripts=head.getElementsByTagName("script");for(let i=scripts.length;i>0;i--){head.removeChild(scripts[i-1]);}}
function newScript(func) {let element=document.createElement("script");element.src=func;
 return document.getElementsByTagName("head")[0].appendChild(element);}
function createTempDefault(value){let expire=addDays(30);if(document.cookie.indexOf("fancontrol=")== -1){document.cookie="fancontrol="+value+";expires="+expire.toUTCString();document.cookie="levelTemp="+value+";expires="+expire.toUTCString();}}
function requestLangueServer() {const url="http://"+location.host;fetch(url,{headers:{Accept:"application/json","Content-Type":"application/json",},method:"post",body:JSON.stringify({langue:defaultLangue }),}).then(function (response) {console.log(response);});}
function selectLang(){switch(readCookie("language")){case "french":defaultLangue=0;break;case "english":defaultLangue=1;break;}if (user_agent()==="PlayStation 4")loadHTML();else {setInnerHTML(menuRpi, buildRPI());getTitleId();}requestLangueServer();display_bubble();}
function loadPayload(payload){let tab = [payload, "c-code"];for (let i=0;i<tab.length;i++){let element=document.createElement("script");if (i==0)element.src=PAYLOAD(tab[i]);else element.src = SCMIRA(tab[i]);document.getElementsByTagName("head")[0].appendChild(element);}}
function checklang(langue){let french = null,english = null;if(document.getElementById("french"))french = document.getElementById("french");if (document.getElementById("english"))english = document.getElementById("english");switch(langue){case "french":languncheck(english);createCookie("language", "french");break;case "english":languncheck(french);createCookie("language", "english");break;}selectLang();}
function displayCheckBox() {if (displayLangue) {setInnerHTML(displayLangue,'<label for="french">Français:</label><input type="checkbox" class="checkbox" id="french" onclick="checklang(\'french\')"><label for="english">English:</label><input type="checkbox" class="checkbox" id="english" onclick="checklang(\'english\')"></input>');}
  choiceLang.addEventListener("mouseover",function(){displayLangue.classList.remove("hidelanguage");displayLangue.classList.add("showlanguage");});choiceLang.addEventListener("mouseout",function(){displayLangue.classList.remove("showlanguage");displayLangue.classList.add("hidelanguage");});displayLangue.addEventListener("mouseover",function(){displayLangue.classList.remove("hidelanguage");displayLangue.classList.add("showlanguage");});displayLangue.addEventListener("mouseout",function(){displayLangue.classList.remove("showlanguage");displayLangue.classList.add("hidelanguage");});
}





















