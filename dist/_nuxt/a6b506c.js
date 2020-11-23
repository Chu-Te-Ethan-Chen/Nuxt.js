(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(t,e,n){"use strict";n.r(e);var o={name:"TheHeader",components:{TheSideNavToggle:n(117).default}},r=(n(233),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("header",{staticClass:"the-header"},[n("TheSideNavToggle",{on:{toggle:function(e){return t.$emit("sidenavToggle")}}}),t._v(" "),n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("WD BLOG")])],1),t._v(" "),n("div",{staticClass:"spacer"}),t._v(" "),n("div",{staticClass:"navigation-items"},[n("ul",{staticClass:"nav-list"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1)])])],1)])}),[],!1,null,"38af0dea",null);e.default=component.exports;installComponents(component,{TheSideNavToggle:n(117).default})},115:function(t,e,n){"use strict";n.r(e);var o={name:"TheSidenav",props:{show:{type:Boolean,default:!1}}},r=(n(235),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidenav-container"},[t.show?n("div",{staticClass:"sidenav-backdrop",on:{click:function(e){return t.$emit("close")}}}):t._e(),t._v(" "),n("transition",{attrs:{name:"slide-side"}},[t.show?n("div",{staticClass:"sidenav"},[n("ul",{staticClass:"nav-list",on:{click:function(e){return t.$emit("close")}}},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1)])]):t._e()])],1)}),[],!1,null,"51314e58",null);e.default=component.exports},116:function(t,e,n){"use strict";n.r(e);var o={name:"PostPreview",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},previewText:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/admin/".concat(this.id):"/posts/".concat(this.id)}}},r=(n(263),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"post-preview",attrs:{to:t.postLink}},[n("article",[n("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+")"}}),t._v(" "),n("div",{staticClass:"post-content"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.previewText))])])])])}),[],!1,null,"1b38df63",null);e.default=component.exports},117:function(t,e,n){"use strict";n.r(e);n(231);var o=n(6),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawer-toggle",attrs:{role:"button"},on:{click:function(e){return t.$emit("toggle")}}},[n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"})])}),[],!1,null,"9952f350",null);e.default=component.exports},120:function(t,e,n){"use strict";var o=n(1),r=n(125),c=n(123),l=n(124);o.a.component("AppButton",c.default),o.a.component("AppControlInput",l.default),o.a.component("PostList",r.default)},121:function(t,e,n){"use strict";n(33);var o=n(1),r=["January","February","March","April","May","June","July","August","September","October","November","December"];o.a.filter("date",(function(t){return e=new Date(t),n=e.getFullYear(),o=e.getMonth(),e.getDate()+". "+r[o]+" "+n;var e,n,o}))},122:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)},r=[]},123:function(t,e,n){"use strict";n.r(e);var o={name:"AppButton",props:{btnStyle:{type:String,default:""}}},r=(n(267),n(6)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",this._g(this._b({staticClass:"button",class:this.btnStyle},"button",this.$attrs,!1),this.$listeners),[this._t("default")],2)}),[],!1,null,"090e8f02",null);e.default=component.exports},124:function(t,e,n){"use strict";n.r(e);var o={name:"AppInputControl",props:{controlType:{type:String,default:"input"},value:{type:String,default:""}}},r=(n(269),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-control"},[n("label",[t._t("default")],2),t._v(" "),"input"===t.controlType?n("input",t._b({domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)):t._e(),t._v(" "),"textarea"===t.controlType?n("textarea",{attrs:{rows:"10"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):t._e()])}),[],!1,null,"2cfc7d8e",null);e.default=component.exports},125:function(t,e,n){"use strict";n.r(e);var o={components:{PostPreview:n(116).default},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!0}}},r=(n(265),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"posts-list"},t._l(t.posts,(function(e){return n("PostPreview",{key:e.id,attrs:{id:e.id,"is-admin":t.isAdmin,thumbnail:e.thumbnail,title:e.title,previewText:e.previewText}})})),1)}),[],!1,null,"48c540dd",null);e.default=component.exports;installComponents(component,{PostPreview:n(116).default})},160:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("ea7c0f6e",content,!0,{sourceMap:!1})},162:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("938f3782",content,!0,{sourceMap:!1})},163:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("34a8a5d2",content,!0,{sourceMap:!1})},164:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5c77e7cd",content,!0,{sourceMap:!1})},165:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("dd5a82be",content,!0,{sourceMap:!1})},166:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("56b15182",content,!0,{sourceMap:!1})},175:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("073100c1",content,!0,{sourceMap:!1})},176:function(t,e,n){var content=n(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("58358480",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("13a47fa1",content,!0,{sourceMap:!1})},178:function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("494a78bb",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var o=n(122),r=n(84),c=(n(229),n(6)),component=Object(c.a)(r.default,o.a,o.b,!1,null,null,null);e.default=component.exports},185:function(t,e,n){"use strict";var o=n(114),r=n(115),c={components:{TheHeader:o.default,TheSidenav:r.default},data:function(){return{displaySidenav:!1}}},l=(n(237),n(6)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TheHeader",{on:{sidenavToggle:function(e){t.displaySidenav=!t.displaySidenav}}}),t._v(" "),n("TheSidenav",{attrs:{show:t.displaySidenav},on:{close:function(e){t.displaySidenav=!1}}}),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{TheHeader:n(114).default,TheSidenav:n(115).default})},186:function(t,e,n){n(187),t.exports=n(188)},209:function(t,e,n){"use strict";n.r(e),e.default=function(t){console.log("[Middleware] just auth"),t.store.getters.isAuthenticated||t.redirect("/admin/auth")}},210:function(t,e,n){"use strict";n.r(e),e.default=function(t){console.log("[Middleware] check auth"),t.store.dispatch("initAuth",t.req)}},211:function(t,e,n){"use strict";n.r(e),e.default=function(t){console.log("[Middleware] The Log Middleware is running")}},225:function(t,e,n){"use strict";n(160)},226:function(t,e,n){(e=n(17)(!1)).push([t.i,".error-page[data-v-1aac2ed8]{text-align:center}.error-page a[data-v-1aac2ed8]{text-decoration:none;color:red}.error-page a[data-v-1aac2ed8]:active,.error-page a[data-v-1aac2ed8]:hover{color:salmon}",""]),t.exports=e},229:function(t,e,n){"use strict";n(162)},230:function(t,e,n){(e=n(17)(!1)).push([t.i,'html{font-family:"Open Sans",sans-serif}body{margin:0}',""]),t.exports=e},231:function(t,e,n){"use strict";n(163)},232:function(t,e,n){(e=n(17)(!1)).push([t.i,".drawer-toggle[data-v-9952f350]{display:flex;flex-direction:column;justify-content:space-around;height:50%;width:35px;cursor:pointer}@media (min-width:768px){.drawer-toggle[data-v-9952f350]{display:none}}.drawer-toggle .bar[data-v-9952f350]{width:90%;height:2px;background-color:#fff}",""]),t.exports=e},233:function(t,e,n){"use strict";n(164)},234:function(t,e,n){(e=n(17)(!1)).push([t.i,".header-container[data-v-38af0dea]{height:60px}.the-header[data-v-38af0dea]{width:100%;position:fixed;height:60px;display:flex;justify-content:space-around;align-items:center;background-color:#000;z-index:100;box-sizing:border-box;padding:0 20px}.logo[data-v-38af0dea]{margin:0 10px;font-size:1.3rem}.logo a[data-v-38af0dea]{text-decoration:none;color:#fff}.spacer[data-v-38af0dea]{flex:1}.navigation-items[data-v-38af0dea]{display:none}@media (min-width:768px){.navigation-items[data-v-38af0dea]{display:block}}.nav-list[data-v-38af0dea]{list-style:none;padding:0;margin:0;display:flex}.nav-item[data-v-38af0dea]{margin:0 10px}.nav-item a[data-v-38af0dea]{text-decoration:none;color:#fff}.nav-item a.nuxt-link-active[data-v-38af0dea],.nav-item a[data-v-38af0dea]:active,.nav-item a[data-v-38af0dea]:hover{color:red}",""]),t.exports=e},235:function(t,e,n){"use strict";n(165)},236:function(t,e,n){(e=n(17)(!1)).push([t.i,".sidenav-container[data-v-51314e58]{height:100%;width:100%}.sidenav-backdrop[data-v-51314e58]{width:100%;background-color:rgba(0,0,0,.7);z-index:1000}.sidenav[data-v-51314e58],.sidenav-backdrop[data-v-51314e58]{height:100%;position:fixed;top:0;left:0}.sidenav[data-v-51314e58]{width:300px;background-color:#fff;z-index:10000;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-51314e58],.slide-side-leave-active[data-v-51314e58]{transition:all .3s ease-out}.slide-side-enter[data-v-51314e58],.slide-side-leave-to[data-v-51314e58]{transform:translateX(-100%)}.nav-list[data-v-51314e58]{list-style:none;padding:0;margin:0}.nav-item[data-v-51314e58]{margin:20px 0}.nav-item a[data-v-51314e58]{text-decoration:none;color:#000;font-size:1.5rem}.nav-item a[data-v-51314e58]:active,.nav-item a[data-v-51314e58]:hover{color:red}",""]),t.exports=e},237:function(t,e,n){"use strict";n(166)},238:function(t,e,n){(e=n(17)(!1)).push([t.i,'html{font-family:"Open Sans",sans-serif}body{margin:0}',""]),t.exports=e},239:function(t,e,n){"use strict";n.r(e);n(32),n(98),n(33),n(240),n(241),n(34),n(30),n(242),n(243),n(66),n(67),n(45),n(41),n(110),n(111),n(245),n(35);var o=n(16),r=n(38),c=n(64),l=n.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.default=function(){var t;return new r.a.Store({state:{loadedPosts:[],token:null},mutations:{setPosts:function(t,e){t.loadedPosts=e},addPost:function(t,e){t.loadedPosts.push(e)},editPost:function(t,e){var n=t.loadedPosts.findIndex((function(t){return t.id===e.id}));t.loadedPosts[n]=e},setToken:function(t,e){t.token=e},clearToken:function(t){t.token=null}},actions:(t={nuxtServerInit:function(t,e){return e.app.$axios.$get("/posts.json").then((function(data){var e=[];for(var n in data)e.push(f(f({},data[n]),{},{id:n}));t.commit("setPosts",e)})).catch((function(t){e.error(t)}))},setPosts:function(t,e){t.commit("setPosts",e)},addPost:function(t,e){var n=f(f({},e),{},{updatedDate:new Date});return this.$axios.$post("/posts.json?auth=".concat(t.state.token),n).then((function(data){t.commit("addPost",f(f({},n),{},{id:data.name}))})).catch((function(t){console.log(t)}))},editPost:function(t,e){return this.$axios.put("/posts/".concat(e.id,".json?auth=").concat(t.state.token),e).then((function(n){t.commit("editPost",e)})).catch((function(t){return console.log(t)}))}},Object(o.a)(t,"setPosts",(function(t,e){t.commit("setPosts",e)})),Object(o.a)(t,"authenticateUser",(function(t,e){var n="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyDhrpB2eJhPxuBeplBk0SF7lV_uTBTjmpc");return e.isLogin||(n="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyDhrpB2eJhPxuBeplBk0SF7lV_uTBTjmpc")),this.$axios.$post(n,{email:e.email,password:e.password,returnSecureToken:!0}).then((function(e){console.log(e);var n=(new Date).getTime()+1e3*Number.parseInt(e.expiresIn);t.commit("setToken",e.idToken),localStorage.setItem("token",e.idToken),localStorage.setItem("tokenExpiration",n),l.a.set("jwt",e.idToken),l.a.set("expirationDate",n)})).catch((function(t){console.log(t.response.data.error.message)}))})),Object(o.a)(t,"initAuth",(function(t,e){var n,o;if(e){if(!e.headers.cookie)return;var r=e.headers.cookie.split(";").find((function(t){t.trim().startsWith("jwt=")}));if(!r)return;n=r.split("=")[1],o=e.headers.cookie.split(";").find((function(t){t.trim().startsWith("expirationDate=").split("=")[1]}))}else n=localStorage.getItem("token"),o=localStorage.getItem("tokenExpiration");if((new Date).getTime()>+o||!n)return console.log("No token or invalid token."),void t.dispatch("logout");t.commit("setToken",n)})),Object(o.a)(t,"logout",(function(t){t.commit("clearToken"),l.a.remove("jwt"),l.a.remove("expirationDate"),localStorage.removeItem("token"),localStorage.removeItem("tokenExpiration")})),t),getters:{loadedPosts:function(t){return t.loadedPosts},isAuthenticated:function(t){return null!=t.token}}})}},263:function(t,e,n){"use strict";n(175)},264:function(t,e,n){(e=n(17)(!1)).push([t.i,"@media (min-width:850px){.post-preview[data-v-1b38df63]{width:400px;margin:10px}}.post-thumbnail[data-v-1b38df63]{width:100%;height:200px;background-position:50%;background-size:cover}.post-content[data-v-1b38df63]{padding:10px;text-align:center}a:active .post-content[data-v-1b38df63],a:hover .post-content[data-v-1b38df63]{background-color:#ccc}",""]),t.exports=e},265:function(t,e,n){"use strict";n(176)},266:function(t,e,n){(e=n(17)(!1)).push([t.i,".post-preview[data-v-48c540dd]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}@media (min-width:850px){.post-preview[data-v-48c540dd]{width:400px;margin:10px}}a[data-v-48c540dd]{text-decoration:none;color:#000}.posts-list[data-v-48c540dd]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=e},267:function(t,e,n){"use strict";n(177)},268:function(t,e,n){(e=n(17)(!1)).push([t.i,".button[data-v-090e8f02]{font:inherit;background-color:#000;color:#fff;padding:5px;cursor:pointer;border:1px solid #000}.button[data-v-090e8f02]:active,.button[data-v-090e8f02]:hover{background-color:#333;border:1px solid #000}.inverted[data-v-090e8f02]{color:#000}.inverted[data-v-090e8f02],.inverted[data-v-090e8f02]:active,.inverted[data-v-090e8f02]:hover{background-color:#fff;border:1px solid transparent}.inverted[data-v-090e8f02]:active,.inverted[data-v-090e8f02]:hover{color:#ccc}.cancel[data-v-090e8f02]{background-color:red}.cancel[data-v-090e8f02],.cancel[data-v-090e8f02]:active,.cancel[data-v-090e8f02]:hover{color:#fff;border:1px solid transparent}.cancel[data-v-090e8f02]:active,.cancel[data-v-090e8f02]:hover{background-color:salmon}",""]),t.exports=e},269:function(t,e,n){"use strict";n(178)},270:function(t,e,n){(e=n(17)(!1)).push([t.i,".input-control[data-v-2cfc7d8e]{margin:10px 0}.input-control label[data-v-2cfc7d8e]{display:block;font-weight:700}.input-control input[data-v-2cfc7d8e],.input-control textarea[data-v-2cfc7d8e]{display:block;width:100%;box-sizing:border-box;font:inherit;border:1px solid #ccc;padding:5px}.input-control input[data-v-2cfc7d8e]:focus,.input-control textarea[data-v-2cfc7d8e]:focus{background-color:#eee;outline:none}",""]),t.exports=e},31:function(t,e,n){"use strict";n(225);var o=n(6),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"error-page"},[e("h1",[this._v("Oops, something went wrong!")]),this._v(" "),e("p",[this._v("Back to "),e("a",{attrs:{href:"/"}},[this._v("safety")]),this._v("!")])])}],!1,null,"1aac2ed8",null);e.a=component.exports},84:function(t,e,n){"use strict";var o=n(85),r=n.n(o);e.default=r.a},85:function(t,e){}},[[186,10,1,11]]]);