(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7e8d510"],{"2f14":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("99af"),a("fb6a");var i=a("d4ec"),r=a("bee2"),n=function(){function t(){Object(i["a"])(this,t)}return Object(r["a"])(t,[{key:"queryString",value:function(t){var e="";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");return e.slice(0,-1)}}]),t}(),s=new n},"99af":function(t,e,a){"use strict";var i=a("23e7"),r=a("d039"),n=a("e8b5"),s=a("861d"),o=a("7b0b"),c=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),f=a("b622"),v=a("2d00"),p=f("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",b=v>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=u("concat"),C=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:n(t)},x=!b||!m;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,i,r,n,s=o(this),u=l(s,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(n=-1===e?s:arguments[e],C(n)){if(r=c(n.length),f+r>g)throw TypeError(h);for(a=0;a<r;a++,f++)a in n&&d(u,f,n[a])}else{if(f>=g)throw TypeError(h);d(u,f++,n)}return u.length=f,u}})},a434:function(t,e,a){"use strict";var i=a("23e7"),r=a("23cb"),n=a("a691"),s=a("50c4"),o=a("7b0b"),c=a("65f0"),d=a("8418"),l=a("1dde"),u=a("ae40"),f=l("splice"),v=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,e){var a,i,l,u,f,v,m=o(this),C=s(m.length),x=r(t,C),y=arguments.length;if(0===y?a=i=0:1===y?(a=0,i=C-x):(a=y-2,i=g(p(n(e),0),C-x)),C+a-i>h)throw TypeError(b);for(l=c(m,i),u=0;u<i;u++)f=x+u,f in m&&d(l,u,m[f]);if(l.length=i,a<i){for(u=x;u<C-i;u++)f=u+i,v=u+a,f in m?m[v]=m[f]:delete m[v];for(u=C;u>C-i+a;u--)delete m[u-1]}else if(a>i)for(u=C-i;u>x;u--)f=u+i-1,v=u+a-1,f in m?m[v]=m[f]:delete m[v];for(u=0;u<a;u++)m[u+x]=arguments[u+2];return m.length=C-i+a,l}})},be7a:function(t,e,a){},bee2:function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}a.d(e,"a",(function(){return r}))},cf2a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("van-nav-bar",{attrs:{title:"我的订单","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),a("div",{staticClass:"order-bg"}),a("div",{staticClass:"tab-box"},[a("van-tabs",{staticClass:"tabs-box",attrs:{color:"#0C34BA","line-height":"2px","title-active-color":"#0C34BA"},on:{change:t.taggleOrderStatus},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.tagItemData,(function(e,i){return a("van-tab",{key:i,attrs:{title:e.title}},[t.orderDatas.length>0?a("div",t._l(t.orderDatas,(function(e,i){return a("div",{key:i,staticClass:"tab-item"},[a("div",{staticClass:"clearfix tab-item-box"},[a("div",{staticClass:"fl no"},[t._v(t._s(e.orderId))]),a("div",{staticClass:"fr"},[1==e.status?a("div",{staticClass:"text",on:{click:function(a){return t.ConfirmReceive(e,i)}}},[t._v("确认收货")]):a("div",{staticClass:"text-box-tab"},[a("div",{staticClass:"finished"},[t._v("已完成")]),a("div",{staticClass:"remove",on:{click:function(a){return t.removeOrder(e.orderId,i)}}},[a("van-icon",{attrs:{name:"delete"}})],1)])])]),a("div",{staticClass:"order-box"},[a("div",t._l(e.products,(function(e,i){return a("div",{key:i,staticClass:"clearfix cell-box"},[a("div",{staticClass:"fl pro-img"},[a("img",{staticClass:"auto-img",attrs:{src:e.smallImg,alt:""}})]),a("div",{staticClass:"fl pro-info"},[a("div",{staticClass:"text-box"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"fl text-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"fl text-rule"},[t._v(t._s(e.rule))])]),a("div",{staticClass:"text-enname"},[t._v(t._s(e.enname))])]),a("div",{staticClass:"price-box"},[a("div",{staticClass:"fl price"},[t._v("￥"+t._s(e.price))]),a("div",{staticClass:"fr count"},[t._v("x"+t._s(e.count))])])])])})),0),a("div",{staticClass:"pro-box"},[a("div",{staticClass:"pro-boxing"},[a("div",{staticClass:"date"},[t._v(t._s(t._f("formatDate")(e.date,"yyyy-MM-dd hh:mm:ss")))]),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"fl pro-count"},[t._v("共计 "+t._s(e.count)+" 件商品")]),a("div",{staticClass:"fr pro-total"},[t._v("合计 ￥"+t._s(e.total))])])]),a("div",{staticClass:"left-box left"}),a("div",{staticClass:"left-box right"})])])])})),0):a("div",[a("van-empty",{attrs:{description:"订单数据空空如也，去逛一逛!"}},[a("van-button",{staticClass:"bottom-button",attrs:{round:"",type:"danger"},on:{click:t.goMenu}},[t._v("去逛一逛")])],1)],1)])})),1)],1)],1)},r=[],n=(a("d81d"),a("a434"),a("be7a"),a("2f14")),s={data:function(){return{n:"2020-08-13T02:18:50.000Z",tabIndex:0,tagItemData:[{title:"全部"},{title:"进行中"},{title:"已完成"}],orderDatas:[]}},created:function(){this.getOrderData(0)},methods:{back:function(){this.$router.go(-1)},goMenu:function(){this.$router.push({name:"Menu"})},getOrderData:function(t){var e=this,a=localStorage.getItem("CSTK");a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findOrder",params:{appkey:this.appkey,tokenString:a,status:t}}).then((function(t){if(e.$toast.clear(),e.orderDatas=[],7e4==t.data.code){var a={};for(var i in t.data.result.map((function(t){a[t.oid]?(a[t.oid].count+=t.count,a[t.oid].total+=t.count*t.price,a[t.oid].products.push(t)):a[t.oid]={orderId:t.oid,date:t.createdAt,count:t.count,total:t.count*t.price,products:[t],status:t.status}})),a)e.orderDatas.push(a[i]);e.orderDatas.sort((function(t,e){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}})).catch((function(t){e.$toast.clear()})))},taggleOrderStatus:function(t,e){this.getOrderData(t)},ConfirmReceive:function(t,e){var a=this,i=localStorage.getItem("CSTK");if(i){var r=n["a"].queryString({appkey:this.appkey,tokenString:i,oid:t.orderId});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/receive",data:r}).then((function(t){a.$toast.clear(),8e4==t.data.code&&(a.$toast(t.data.msg),1==a.tabIndex&&a.orderDatas.splice(e,1))})).catch((function(t){a.$toast.clear()}))}},removeOrder:function(t,e){var a=this,i=localStorage.getItem("CSTK");if(i){var r=n["a"].queryString({appkey:this.appkey,tokenString:i,oid:t});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/removeOrder",data:r}).then((function(t){a.$toast.clear(),9e4==t.data.code&&(a.$toast(t.data.msg),a.orderDatas.splice(e,1))})).catch((function(t){a.$toast.clear()}))}}}},o=s,c=a("2877"),d=Object(c["a"])(o,i,r,!1,null,null,null);e["default"]=d.exports},d4ec:function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return i}))},d81d:function(t,e,a){"use strict";var i=a("23e7"),r=a("b727").map,n=a("1dde"),s=a("ae40"),o=n("map"),c=s("map");i({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-f7e8d510.b8416365.js.map