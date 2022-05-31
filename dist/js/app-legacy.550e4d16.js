(function(){"use strict";var t={3971:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var a=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navigation"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"navbar"},[n("router-link",{staticClass:"navbar__link",attrs:{tag:"li",exact:"","active-class":"navbar__link_active",to:"/"}},[n("a",{staticClass:"link"},[t._v("Все котики")])]),n("router-link",{staticClass:"navbar__link",attrs:{tag:"li","active-class":"navbar__link_active",to:"/likes"}},[n("a",{staticClass:"link"},[t._v("Любимые котики")])])],1)])]),n("section",{staticClass:"content"},[n("div",{staticClass:"container"},[n("router-view"),t.loading?n("img",{staticClass:"loading",attrs:{src:"assets/load.svg",alt:"loading"}}):t._e()],1)])])},i=[],s=n(3019),o=(n(8309),n(4665)),c={computed:(0,s.Z)({},(0,o.Se)(["loading"])),methods:(0,s.Z)((0,s.Z)((0,s.Z)({},(0,o.OI)(["updateNumberCats","updateLoading"])),(0,o.nv)(["getPost"])),{},{roundPX:function(t){return Math.round(t/100*100)},scroll:function(){var t=this;window.addEventListener("scroll",(function(){t.roundPX(document.documentElement.scrollTop+window.innerHeight)==t.roundPX(document.documentElement.offsetHeight)&&"home"===t.$router.currentRoute.name&&t.getPost()}))}}),updated:function(){"home"!==this.$router.currentRoute.name&&this.updateLoading(),window.innerHeight!=document.documentElement.scrollHeight||this.loading||"home"!==this.$router.currentRoute.name||this.getPost()},mounted:function(){this.$router.push("/").catch((function(){})),this.scroll()},created:function(){switch(!0){case document.documentElement.clientWidth<992&&document.documentElement.clientWidth>576:this.updateNumberCats(15);break;case document.documentElement.clientWidth<576:this.updateNumberCats(10);break}this.getPost()}},u=c,l=n(1001),d=(0,l.Z)(u,r,i,!1,null,null,null),f=d.exports,m=n(2809),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__wrapper"},t._l(t.allPostsCats,(function(t,e){return n("CardCat",{key:e,attrs:{url:t.url,text:"cat",item:t}})})),1)},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("img",{staticClass:"card__image",attrs:{src:t.url,alt:t.text}}),n("div",{staticClass:"like",class:{like_active:t.item.like},on:{click:function(e){return t.likePost(t.item)}}},[n("img",{attrs:{src:"assets/like.svg",alt:"like"}})])])},g=[],C={props:{url:String,text:String,item:Object},methods:(0,s.Z)({},(0,o.OI)(["likePost"]))},k=C,_=(0,l.Z)(k,v,g,!1,null,"380f6ab3",null),b=_.exports,w={components:{CardCat:b},computed:(0,s.Z)({},(0,o.Se)(["allPostsCats"]))},P=w,Z=(0,l.Z)(P,h,p,!1,null,null,null),O=Z.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__wrapper"},[t._l(t.likeCats,(function(t,e){return n("CardCat",{key:e,attrs:{url:t.url,text:"cat",item:t}})})),0===t.likeCats.length?n("h1",{staticClass:"title"},[t._v("Нет любимых котиков")]):t._e()],2)},E=[],y={components:{CardCat:b},computed:(0,s.Z)({},(0,o.Se)(["likeCats"]))},j=y,$=(0,l.Z)(j,x,E,!1,null,"4e7994cf",null),S=$.exports;a.Z.use(m.Z);var H=[{path:"/",name:"home",component:O},{path:"/likes",name:"likes",component:S}],L=new m.Z({mode:"history",base:"/frontend-challenge/dist/",routes:H}),N=L,T=n(7906),R=n(6198);n(7327),n(1539),n(4747);a.Z.use(o.ZP);var W=new o.ZP.Store({state:{allPostsCats:[],loading:!0,numberOfCats:25},getters:{allPostsCats:function(t){return t.allPostsCats},likeCats:function(t){return t.allPostsCats.filter((function(t){return t.like}))},loading:function(t){return t.loading}},mutations:{updatePostsCats:function(t,e){e.forEach((function(e){var n=Object.assign({like:!1},e);t.allPostsCats.push(n)}))},likePost:function(t,e){e.like=!e.like},updateNumberCats:function(t,e){t.numberOfCats=e},updateLoading:function(t){t.loading=!1}},actions:{getPost:function(t){return(0,R.Z)((0,T.Z)().mark((function e(){var n,a,r,i;return(0,T.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,a.loading=!0,e.next=4,fetch("https://api.thecatapi.com/v1/images/search?api_key=79cb7318-dbad-4af1-adef-424a80eed64b&limit=".concat(a.numberOfCats));case 4:if(r=e.sent,200!=r.status){e.next=11;break}return e.next=8,r.json();case 8:i=e.sent,n("updatePostsCats",i),a.loading=!1;case 11:case"end":return e.stop()}}),e)})))()}}});a.Z.config.productionTip=!1,new a.Z({router:N,store:W,render:function(t){return t(f)}}).$mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],r=t[l][1],i=t[l][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,i<s&&(s=i));if(o){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[a,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,s=a[0],o=a[1],c=a[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var l=c(n)}for(e&&e(a);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},a=self["webpackChunkfrontend_challenge"]=self["webpackChunkfrontend_challenge"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3971)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.550e4d16.js.map