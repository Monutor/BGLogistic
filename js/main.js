(()=>{var t={474:()=>{try{var t=new Swiper(".reviews-slider",{slidesPerView:"auto",spaceBetween:40,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),e=document.querySelector(".reviews__arrows .slider-arrows__arrow--left"),n=document.querySelector(".reviews__arrows .slider-arrows__arrow--right");e.addEventListener("click",(function(){t.slidePrev()})),n.addEventListener("click",(function(){t.slideNext()}))}catch(t){}},259:()=>{var t=document.querySelectorAll(".faq__btn");t.forEach((function(e){e.addEventListener("click",(function(e){e.target.classList.contains("faq__btn--active")?e.target.classList.remove("faq__btn--active"):(t.forEach((function(t){t.classList.remove("faq__btn--active")})),e.target.classList.add("faq__btn--active"))}))})),document.querySelector(".services__list").addEventListener("click",(function(t){var e=t.target.closest("button").nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"rem"}))},782:(t,e,n)=>{window.WOW=n(541).WOW,new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0}).init()},598:()=>{function t(t){var e=!0,n=!1,i=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function r(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function l(t){e=!1}function a(){document.addEventListener("mousemove",u),document.addEventListener("mousedown",u),document.addEventListener("mouseup",u),document.addEventListener("pointermove",u),document.addEventListener("pointerdown",u),document.addEventListener("pointerup",u),document.addEventListener("touchmove",u),document.addEventListener("touchstart",u),document.addEventListener("touchend",u)}function u(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mousedown",u),document.removeEventListener("mouseup",u),document.removeEventListener("pointermove",u),document.removeEventListener("pointerdown",u),document.removeEventListener("pointerup",u),document.removeEventListener("touchmove",u),document.removeEventListener("touchstart",u),document.removeEventListener("touchend",u))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(s(t.activeElement)&&r(t.activeElement),e=!0)}),!0),document.addEventListener("mousedown",l,!0),document.addEventListener("pointerdown",l,!0),document.addEventListener("touchstart",l,!0),document.addEventListener("visibilitychange",(function(t){"hidden"===document.visibilityState&&(n&&(e=!0),a())}),!0),a(),t.addEventListener("focus",(function(t){var n,i,l;s(t.target)&&(e||(i=(n=t.target).type,"INPUT"===(l=n.tagName)&&o[i]&&!n.readOnly||"TEXTAREA"===l&&!n.readOnly||n.isContentEditable))&&r(t.target)}),!0),t.addEventListener("blur",(function(t){var e;s(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1}),100),(e=t.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)},541:function(){(function(){var t,e,n,i,o,s=function(t,e){return function(){return t.apply(e,arguments)}},r=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(e=n=0,i=(o=this.keys).length;n<i;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,s;for(n=i=0,o=(s=this.keys).length;i<o;n=++i)if(s[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,(function(t,e){return e.toUpperCase()})),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=s(this.scrollCallback,this),this.scrollHandler=s(this.scrollHandler,this),this.resetAnimation=s(this.resetAnimation,this),this.start=s(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o,s;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.element.querySelectorAll("."+this.config.boxClass)).length;t<n;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.boxes).length;t<n;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(n=0,i=(o=this.boxes).length;n<i;n++)e=o[n],this.applyStyle(e,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t((s=this,function(t){var e,n,i,o,r;for(r=[],e=0,n=t.length;e<n;e++)o=t[e],r.push(function(){var t,e,n,s;for(s=[],t=0,e=(n=o.addedNodes||[]).length;t<e;t++)i=n[t],s.push(this.doSync(i));return s}.call(s));return r})).observe(document.body,{childList:!0,subtree:!0})},o.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},o.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},o.prototype.doSync=function(t){var e,n,i,o,s;if(null==t&&(t=this.element),1===t.nodeType){for(s=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n<i;n++)e=o[n],r.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),s.push(this.scrolled=!0)):s.push(void 0);return s}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o,s;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((s=this,function(){return s.customStyle(t,e,i,n,o)}))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){var t,e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;e<n;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,s;for(n in i=[],e)o=e[n],t[""+n]=o,i.push(function(){var e,i,r,l;for(l=[],e=0,i=(r=this.vendors).length;e<i;e++)s=r[e],l.push(t[""+s+n.charAt(0).toUpperCase()+n.substr(1)]=o);return l}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,s,r,l,a;for(r=(l=i(t)).getPropertyCSSValue(e),n=0,o=(s=this.vendors).length;n<o;n++)a=s[n],r=r||l.getPropertyCSSValue("-"+a+"-"+e);return r},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;e<n;e++)(t=i[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,s;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(s=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,i<=o&&e>=s},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this)}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}(()=>{"use strict";n(598);const t={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var e,i,o,s,r,l,a=function(){var e,n=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".fixed-block"),i=(document.body,parseInt(t.bodyEl.dataset.position,10));n.forEach((function(t){t.style.paddingRight="0px"})),t.bodyEl.style.paddingRight="0px",t.bodyEl.style.top="auto",t.bodyEl.classList.remove("dis-scroll"),window.scroll({top:i,left:0}),t.bodyEl.removeAttribute("data-position"),t.htmlEl.style.scrollBehavior="smooth"};s=null===(e=document)||void 0===e?void 0:e.querySelector("[data-burger]"),r=null===(i=document)||void 0===i?void 0:i.querySelector("[data-menu]"),l=null===(o=document)||void 0===o?void 0:o.querySelectorAll("[data-menu-item]"),null==s||s.addEventListener("click",(function(e){null==s||s.classList.toggle("burger--active"),null==r||r.classList.toggle("menu--active"),null!=r&&r.classList.contains("menu--active")?(null==s||s.setAttribute("aria-expanded","true"),null==s||s.setAttribute("aria-label","Закрыть меню"),function(){var e,n=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".fixed-block"),i=window.scrollY,o="".concat(window.innerWidth-t.bodyEl.offsetWidth,"px");t.htmlEl.style.scrollBehavior="none",n.forEach((function(t){t.style.paddingRight=o})),t.bodyEl.style.paddingRight=o,t.bodyEl.classList.add("dis-scroll"),t.bodyEl.dataset.position=i,t.bodyEl.style.top="-".concat(i,"px")}()):(null==s||s.setAttribute("aria-expanded","false"),null==s||s.setAttribute("aria-label","Открыть меню"),a())})),null==l||l.forEach((function(t){t.addEventListener("click",(function(){s.classList.remove("burger--active"),r.classList.remove("menu--active"),a()}))})),n(782),n(259),n(474)})()})();