# bot_1

Tampermonkey®
v4.9 by Jan Biniok
	
New Userscript
by You

// ==UserScript==

// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You7
// @match        https://yandex.ru/search/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let yandexInput=document.getElementsByName ('id')[0];
let btnK =document.getElementsByName('btnK')[1];
let searchword= 'Гобой';
let i = 0;

let links=document.links;
if (btnK!= undefined){
let timerId = setInterval(()=>{
    yandexInput.value += searchword[i];
    i++;
    if ( i==searchword.length){
        clearInterval(timerId);
        btnK.click();}
},500);
}
else if (location.hostname=="www.google.com"){
    for (let i=0; i <links.length; i++ ){
     if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
         links[i].click();
         break;
        }
      }
    }
else{
    setInterval(()=>{let index=getRandom(0,links.length)
    links[index].click();
    if(getRandom(0,100)<30)location.href="https://www.google.com/";        
    },5000);
  }

function getRandom(min,max){
 return Math.floor(Math.random()*(max-min)+min);
  }



