(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-664fe55a"],{"2f14":function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));o("99af"),o("fb6a");var a=o("d4ec"),n=o("bee2"),r=function(){function t(){Object(a["a"])(this,t)}return Object(n["a"])(t,[{key:"queryString",value:function(t){var e="";for(var o in t)e+="".concat(o,"=").concat(t[o],"&");return e.slice(0,-1)}}]),t}(),s=new r},"305b":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"secure"},[o("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),o("div",{staticClass:"secure-bg"}),o("div",{staticClass:"secure-box"},[o("div",[o("van-cell",{attrs:{title:"修改密码",isLink:""},on:{click:t.openPasswordPopup}}),o("van-cell",{attrs:{title:"注销账号",isLink:""},on:{click:t.destroyAccount}})],1)]),o("div",{staticClass:"btn-box"},[o("van-button",{attrs:{round:"",block:"",color:"#0C34BA"},on:{click:t.logout}},[t._v("退出登录")])],1),o("van-popup",{staticClass:"popup-box",attrs:{closeable:"",position:"bottom"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[o("div",{staticClass:"popup-item"},[o("div",{staticClass:"password-text"},[t._v("修改密码")]),o("van-form",[t._l(t.passwords,(function(e,a){return o("van-field",{key:a,attrs:{type:e.isPassword?"password":"text",label:e.title,placeholder:"6-16位密码且以字母开头","right-icon":e.isPassword?"closed-eye":"eye-o"},on:{"click-right-icon":function(o){return t.viewPassword(e,a)}},model:{value:e.password,callback:function(o){t.$set(e,"password",o)},expression:"item.password"}})})),o("div",{staticClass:"login-btn"},[o("van-button",{attrs:{round:"",block:"",color:"#0C34BA","native-type":"submit"},on:{click:t.confirmPassword}},[t._v("确认修改")])],1)],2)],1)])],1)},n=[],r=(o("d42c"),o("2f14")),s=o("e3a8"),i={data:function(){return{isOpen:!1,passwords:{old:{password:"",isPassword:!0,title:"旧密码"},new:{password:"",isPassword:!0,title:"新密码"}}}},methods:{back:function(){this.$router.go(-1)},viewPassword:function(t,e){t.isPassword=!t.isPassword},logout:function(){var t=this;this.$dialog.confirm({title:"退出登录",message:"是否确认退出登录！",confirmButtonColor:"#0C34BA"}).then((function(){var e=localStorage.getItem("CSTK");e||t.$router({name:"Login"});var o=r["a"].queryString({appkey:t.appkey,tokenString:e});t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),t.axios({method:"POST",url:"/logout",data:o}).then((function(e){t.$toast.clear(),t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))})).catch((function(){}))},openPasswordPopup:function(){this.isOpen=!0},confirmPassword:function(){var t=this,e=localStorage.getItem("CSTK");if(!e)return this.$router.push({name:"Login"});var o={oldPassword:{value:this.passwords.old.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"旧密码支持字母数字_组合"},password:{value:this.passwords.new.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"新密码支持字母数字_组合"}};if(s["a"].valid(o)){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var a=r["a"].queryString({appkey:this.appkey,tokenString:e,oldPassword:this.passwords.old.password,password:this.passwords.new.password});this.axios({method:"POST",url:"/updatePassword",data:a}).then((function(e){t.$toast.clear(),"E001"==e.data.code?(localStorage.removeItem("CSTK"),t.$router.push({name:"Login"})):t.$notify({type:"warning",message:e.data.msg})})).catch((function(e){t.$toast.clear()}))}},destroyAccount:function(){var t=this;this.$dialog.confirm({title:"注销账号",message:"是否确认注销号，一旦确认无法恢复！",confirmButtonColor:"#0C34BA"}).then((function(){var e=localStorage.getItem("CSTK");if(!e)return t.$router.push({name:"Login"});t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var o=r["a"].queryString({appkey:t.appkey,tokenString:e});t.axios({method:"POST",url:"/destroyAccount",data:o}).then((function(e){t.$toast.clear(),t.$toast(e.data.msg),"G001"==e.data.code&&(localStorage.removeItem("CSTK"),setTimeout((function(){t.$router.push({name:"Login"})}),600))})).catch((function(e){t.$toast.clear()}))})).catch((function(){}))}}},c=i,u=o("2877"),l=Object(u["a"])(c,a,n,!1,null,"5638a9aa",null);e["default"]=l.exports},"99af":function(t,e,o){"use strict";var a=o("23e7"),n=o("d039"),r=o("e8b5"),s=o("861d"),i=o("7b0b"),c=o("50c4"),u=o("8418"),l=o("65f0"),d=o("1dde"),f=o("b622"),p=o("2d00"),g=f("isConcatSpreadable"),v=9007199254740991,w="Maximum allowed index exceeded",h=p>=51||!n((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=d("concat"),m=function(t){if(!s(t))return!1;var e=t[g];return void 0!==e?!!e:r(t)},k=!h||!b;a({target:"Array",proto:!0,forced:k},{concat:function(t){var e,o,a,n,r,s=i(this),d=l(s,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?s:arguments[e],m(r)){if(n=c(r.length),f+n>v)throw TypeError(w);for(o=0;o<n;o++,f++)o in r&&u(d,f,r[o])}else{if(f>=v)throw TypeError(w);u(d,f++,r)}return d.length=f,d}})},bee2:function(t,e,o){"use strict";function a(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),t}o.d(e,"a",(function(){return n}))},d42c:function(t,e,o){},d4ec:function(t,e,o){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}o.d(e,"a",(function(){return a}))},e3a8:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var a=o("d4ec"),n=o("bee2"),r=(o("9a83"),o("f564")),s=o("2b0e");s["a"].use(r["a"]);var i=function(){function t(){Object(a["a"])(this,t)}return Object(n["a"])(t,[{key:"valid",value:function(t){for(var e in t)if(!t[e].reg.test(t[e].value))return Object(r["a"])({type:"warning",message:t[e].errorMsg}),!1;return!0}}]),t}(),c=new i}}]);
//# sourceMappingURL=chunk-664fe55a.124c8b57.js.map