webpackJsonp([5],{DCTh:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticClass:"title"},[t._v("目录")]),t._v(" "),n("div",{staticClass:"router-item"},[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.$router.push({name:"pdf"})}}},[t._v("pdf")])],1)])},staticRenderFns:[]};e.a=r},HLhn:function(t,e,n){"use strict";var r=n("T2D6"),o=n.n(r),i=n("DCTh");var c=function(t){n("kGPF")},u=n("C7Lr")(o.a,i.a,!1,c,null,null);e.default=u.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("kV13"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("C7Lr")({name:"App"},o,!1,function(t){n("vE36")},null,null).exports,c=n("wUgx"),u=n("HLhn"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf",staticStyle:{"text-align":"center"}},[n("el-button",{staticStyle:{position:"fixed",top:"50%",left:"0","z-index":"100"},attrs:{icon:"el-icon-arrow-right",circle:"",plain:""},on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),n("el-drawer",{attrs:{visible:t.drawer,"with-header":!1,direction:"ltr"},on:{"update:visible":function(e){t.drawer=e}}},[n("h2",{staticStyle:{"margin-top":"100px"}},[t._v("pdf预览打印demo!")]),t._v(" "),n("div",[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.$router.push({name:"pdfDemo1"})}}},[t._v("分页预览")])],1),t._v(" "),n("div",[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.$router.push({name:"pdfDemo2"})}}},[t._v("多页预览")])],1),t._v(" "),n("div",[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.$router.push({name:"pdfDemo3"})}}},[t._v("多pdf、多页预览")])],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var l=n("C7Lr")({data:function(){return{drawer:!1}}},a,!1,function(t){n("cDjn")},"data-v-a8212426",null).exports;r.default.use(c.a);var s=new c.a({routes:[{path:"/",name:"index",component:u.default},{path:"/pdf",name:"pdf",redirect:{name:"pdfDemo1"},component:l,children:[{path:"pdfDemo1",name:"pdfDemo1",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"E3dO"))}},{path:"pdfDemo2",name:"pdfDemo2",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"nK77"))}},{path:"pdfDemo3",name:"pdfDemo3",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"DBjI"))}}]}]}),d=n("bQIR"),p=n.n(d),f=(n("gFLX"),n("hRKE")),m=n.n(f),h=function t(e,n){if(!(this instanceof t))return new t(e,n);this.options=this.extend({noPrint:".no-print"},n),"string"==typeof e?this.dom=document.querySelector(e):(this.isDOM(e),this.dom=this.isDOM(e)?e:e.$el),this.init()};h.prototype={init:function(){var t=this.getStyle()+this.getHtml();this.writeIframe(t)},extend:function(t,e){for(var n in e)t[n]=e[n];return t},getStyle:function(){for(var t="",e=document.querySelectorAll("style,link"),n=0;n<e.length;n++)t+=e[n].outerHTML;return t+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>"},getHtml:function(){for(var t=document.querySelectorAll("input"),e=document.querySelectorAll("textarea"),n=document.querySelectorAll("select"),r=0;r<t.length;r++)"checkbox"==t[r].type||"radio"==t[r].type?1==t[r].checked?t[r].setAttribute("checked","checked"):t[r].removeAttribute("checked"):(t[r].type,t[r].setAttribute("value",t[r].value));for(var o=0;o<e.length;o++)"textarea"==e[o].type&&(e[o].innerHTML=e[o].value);for(var i=0;i<n.length;i++)if("select-one"==n[i].type){var c=n[i].children;for(var u in c)"OPTION"==c[u].tagName&&(1==c[u].selected?c[u].setAttribute("selected","selected"):c[u].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe:function(t){var e,n,r=document.createElement("iframe"),o=document.body.appendChild(r);r.id="myIframe",r.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;"),e=o.contentWindow||o.contentDocument,(n=o.contentDocument||o.contentWindow.document).open(),n.write(t),n.title="cesh",n.close();var i=this;r.onload=function(){i.toPrint(e),setTimeout(function(){},100)}},toPrint:function(t){try{setTimeout(function(){t.focus();try{t.document.execCommand("print",!1,null)||t.print()}catch(e){t.print()}t.close()},10)}catch(t){console.log("err",t)}},isDOM:"object"===("undefined"==typeof HTMLElement?"undefined":m()(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"===(void 0===t?"undefined":m()(t))&&1===t.nodeType&&"string"==typeof t.nodeName}};var v={install:function(t,e){t.prototype.$print=h}},y=v;r.default.use(p.a),r.default.use(y),r.default.config.productionTip=!1,new r.default({el:"#app",router:s,components:{App:i},template:"<App/>"})},T2D6:function(t,e){},cDjn:function(t,e){},gFLX:function(t,e){},kGPF:function(t,e){},vE36:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9b1df388e5b533f4e9f7.js.map