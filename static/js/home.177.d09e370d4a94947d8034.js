(self.webpackChunkts_react_webpack=self.webpackChunkts_react_webpack||[]).push([[177],{60491:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>q}),r(21249),r(73431);var n=r(16373),a=r(67294),l=r(73727),o=r(5977);var i=r(90162),s=(r(41539),r(88674),r(40684)),c=r(812),u=r(89366),p=r(99400),h=e=>(0,s.ZP)(e,{fallback:a.createElement(p.Z,null)}),m={SocketDebugger:h((()=>Promise.all([r.e(403),r.e(290),r.e(744),r.e(938)]).then(r.bind(r,41349)))),Users:h((()=>Promise.all([r.e(403),r.e(645),r.e(290),r.e(855),r.e(681)]).then(r.bind(r,6410))))};const d=[{id:1,path:"/",title:"SocketDebugger",icon:a.createElement(c.Z,null),component:"SocketDebugger",exact:!0},{id:2,path:"/users",title:"Users",icon:a.createElement(u.Z,null),component:"Users",exact:!0}];var f=r(6559),g=r(1351),v=r(76629),y=r(78874),b=r(55035);const E="rightIcon--34774XX2";var S=r(32051),k=r(24842);const C=(0,f.Pi)((function(){var e=(0,S.Z)(),t=e.globalStore,r=e.authStore,l=t.sideBarCollapsed?g.Z:v.Z;return a.createElement(n.Z.Header,{className:"header--3-VAJqNh"},a.createElement(l,{className:"trigger--azCEfSVs",onClick:t.toggleSideBarCollapsed}),a.createElement("div",{className:"right--3WsjOOCS"},a.createElement(y.Z,{className:E,onClick:()=>window.open(k.$t)}),a.createElement(b.Z,{className:E,onClick:r.logout})))}));r(48145);var O=r(40987),w=r(94184),P=r.n(w),Z=r(49434);const A="dark--3S2mXy9f";r(92222),r(26699),r(66992),r(32023),r(33948),r(54214);var T,B,j=r(12386),K=r(68949),M=r(51068),N=r(10268),x=r(72258);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function D(e,t,r,n,a){var l={};return Object.keys(n).forEach((function(e){l[e]=n[e]})),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),l),a&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(a):void 0,l.initializer=void 0),void 0===l.initializer&&(Object.defineProperty(e,t,l),l=null),l}var R=j.default.SubMenu,_=(0,f.Pi)((D((B=class extends a.Component{constructor(){super(...arguments),this.levelMap={},this.goto=e=>{var t=this.props.routerStore.history,r=d.find((t=>String(t.id)===e.key));r&&r.path&&r.path!==this.currentRoute&&t.push(r.path)},this.onOpenChange=e=>{var t=this.props,r=t.navOpenKeys,n=t.setOpenKeys,a=e.find((e=>!r.includes(e))),l=r.find((t=>!e.includes(t))),o=[];a&&(o=this.getAncestorKeys(a).concat(a)),l&&(o=this.getAncestorKeys(l)),n(o)},this.getPathArray=(e,t)=>{var r=[String(t.id)],n=t=>{t&&t.pid&&(r.unshift(String(t.pid)),n((0,x.lg)(e,String(t.pid),"id")))};return n(t),r},this.getAncestorKeys=e=>{var t={},r=e=>{var t=[String(this.levelMap[e])];return this.levelMap[t[0]]&&t.unshift(r(t[0])[0]),t};for(var n in this.levelMap)({}).hasOwnProperty.call(this.levelMap,n)&&(t[n]=r(n));return t[e]||[]},this.getMenus=e=>e.map((e=>e.children?(e.pid&&(this.levelMap[e.id]=e.pid),a.createElement(R,{key:String(e.id),title:a.createElement("span",null,e.icon,a.createElement("span",null,e.title))},this.getMenus(e.children))):a.createElement(j.default.Item,{key:String(e.id)},e.icon,a.createElement("span",null,e.title))))}get currentRoute(){return this.props.routerStore.location.pathname}get menuTree(){return(0,x.wT)(d,"id","pid")}get menuProps(){var e=this.props,t=e.sideBarCollapsed,r=e.navOpenKeys;return t?{}:{onOpenChange:this.onOpenChange,openKeys:r}}render(){this.levelMap={};var e,t=this.props.sideBarTheme,r=this.getMenus(this.menuTree),n=null,l=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,l=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw l}}}}(d);try{for(l.s();!(e=l.n()).done;){var o=e.value;if(o.path&&(0,M.Bo)(o.path).exec(this.currentRoute)){n=o;break}}}catch(e){l.e(e)}finally{l.f()}var i=null;return n&&(i=this.getPathArray(d,n)),i||(i=["1"]),a.createElement(j.default,z({className:"menu--lHPfBHq1",theme:t,mode:"inline",selectedKeys:i,onClick:this.goto},this.menuProps),r)}}).prototype,"currentRoute",[K.computed],Object.getOwnPropertyDescriptor(B.prototype,"currentRoute"),B.prototype),D(B.prototype,"menuTree",[K.computed],Object.getOwnPropertyDescriptor(B.prototype,"menuTree"),B.prototype),D(B.prototype,"menuProps",[K.computed],Object.getOwnPropertyDescriptor(B.prototype,"menuProps"),B.prototype),T=B))||T;const U=function(){return a.createElement(N.wA,null,(e=>{var t=e.routerStore,r=e.authStore,n=e.globalStore;return a.createElement(_,{routerStore:t,userInfo:r.userInfo,sideBarCollapsed:n.sideBarCollapsed,sideBarTheme:n.sideBarTheme,navOpenKeys:n.navOpenKeys,setOpenKeys:n.setOpenKeys})}))},H=(0,f.Pi)((function(){var e=(0,S.Z)().globalStore,t=e.sideBarCollapsed,r=e.sideBarTheme,l=e.changeSiderTheme,o=a.createElement("div",{className:P()("changeTheme--2_h2fmum","dark"===r&&A)},"Switch Theme",a.createElement(O.Z,{checkedChildren:"dark",unCheckedChildren:"light",checked:"dark"===r,onChange:e=>l(e?"dark":"light")}));return a.createElement(n.Z.Sider,{className:"sider--1q_jEs1L",trigger:null,theme:r,collapsible:!0,collapsed:t},a.createElement("div",{className:P()("logoBox--1kbAH9v1","dark"===r&&A)},a.createElement(Z.Z,null)),a.createElement(U,null),!t&&o)})),q=function(){return a.createElement(n.Z,null,a.createElement(H,null),a.createElement(n.Z,null,a.createElement(C,null),a.createElement(n.Z.Content,{className:"content--2C0RuexV"},a.createElement(l.UT,null,a.createElement(o.rs,null,d.map((e=>e.path?a.createElement(o.AW,{key:e.id,exact:e.exact,path:e.path,component:e.component?m[e.component]:null}):null)),a.createElement(o.AW,{component:i.Z}))))))}},32051:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r(10268);function l(){return(0,n.useContext)(a.Ti)}}}]);
//# sourceMappingURL=home.177.d09e370d4a94947d8034.js.map