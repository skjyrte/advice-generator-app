(()=>{var e={549:function(){var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function c(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}u((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},n=this,r=document.querySelector(".adviceBox__adviceContent"),o=document.querySelector(".adviceBox__adviceNumber");document.querySelector(".adviceBox__diceImageButton").addEventListener("click",(function(){return e(n,void 0,void 0,(function(){var e,n,a,c;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch("https://api.adviceslip.com/advice",{cache:"no-cache"})];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),n=e.slip,a=n.id,c=n.advice,r.classList.remove("adviceBox__adviceContent_error"),o.innerHTML="ADVICE #".concat(a),r.innerHTML='"'.concat(c,'"'),r.classList.remove("adviceBox__adviceContent_textSize"),c.length>80&&r.classList.add("adviceBox__adviceContent_textSize"),[3,4];case 3:return t.sent(),r.innerHTML="We have an error. Please try again later.",o.innerHTML="",r.classList.add("adviceBox__adviceContent_error"),[3,4];case 4:return[2]}}))}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(549)})()})();