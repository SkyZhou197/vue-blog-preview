webpackJsonp([4],{"15vT":function(e,n){},OpX7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("Dd8w"),s=t.n(r),o=t("NYxO"),a={data:function(){return{username:"",password:""}},methods:s()({},Object(o.b)(["login"]),{onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}})},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"login"}},[t("h4",[e._v("用户名")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),e._v(" "),t("h4",[e._v("密码")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.onLogin(n)},input:function(n){n.target.composing||(e.password=n.target.value)}}}),e._v(" "),t("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录")]),e._v(" "),t("p",{staticClass:"notice"},[e._v("\n    没有账号？\n    "),t("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)},staticRenderFns:[]};var u=t("VU/8")(a,i,!1,function(e){t("15vT")},null,null);n.default=u.exports}});
//# sourceMappingURL=4.0d2af51d502b8c36a698.js.map