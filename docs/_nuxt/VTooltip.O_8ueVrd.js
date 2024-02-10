import{ax as Ce,ay as Re,O as U,r as W,X as j,$ as fe,H as k,T as N,az as je,c as S,W as ee,a0 as L,U as ge,F as ve,aA as Te,Y as de,aj as ke,aB as he,Q as I,aC as qe,S as q,R as Ue,o as Ge,as as Be,ak as Xe,aD as Ye,al as Ze,a6 as Ke,P as Fe,ab as Me,a7 as Qe,a3 as Je,Z as et,e as tt,z as H,aE as nt,ac as ot,ae as at,ad as rt,N as it,ah as st,ar as lt,am as ct}from"./entry.pWU9ejTJ.js";import{p as ye,f as oe,c as ae,d as be,g as we,e as ut,h as ft}from"./delay.r_j5DrNm.js";import{a as Q,h as vt,g as dt}from"./getScrollParent.hBWoeeaY.js";import{B as mt,A as gt,C as ht,M as yt,D as bt}from"./ssrBoot.E1WRWEtf.js";import{m as wt,a as xt,b as St,u as Le}from"./dimensions.PJRCoCi9.js";class ${constructor(n){let{x:t,y:o,width:r,height:a}=n;this.x=t,this.y=o,this.width=r,this.height=a}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function xe(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function Et(e){return Array.isArray(e)?new $({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Ot(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),o=t.transform;if(o){let r,a,s,i,u;if(o.startsWith("matrix3d("))r=o.slice(9,-1).split(/, /),a=+r[0],s=+r[5],i=+r[12],u=+r[13];else if(o.startsWith("matrix("))r=o.slice(7,-1).split(/, /),a=+r[0],s=+r[3],i=+r[4],u=+r[5];else return new $(n);const c=t.transformOrigin,d=n.x-i-(1-a)*parseFloat(c),g=n.y-u-(1-s)*parseFloat(c.slice(c.indexOf(" ")+1)),b=a?n.width/a:e.offsetWidth+1,h=s?n.height/s:e.offsetHeight+1;return new $({x:d,y:g,width:b,height:h})}else return new $(n)}function Pt(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(r=>{o.onfinish=()=>{r(o)}})),o}const Z=new WeakMap;function pt(e,n){Object.keys(n).forEach(t=>{if(Ce(t)){const o=Re(t),r=Z.get(e);if(n[t]==null)r==null||r.forEach(a=>{const[s,i]=a;s===o&&(e.removeEventListener(o,i),r.delete(a))});else if(!r||![...r].some(a=>a[0]===o&&a[1]===n[t])){e.addEventListener(o,n[t]);const a=r||new Set;a.add([o,n[t]]),Z.has(e)||Z.set(e,a)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function At(e,n){Object.keys(n).forEach(t=>{if(Ce(t)){const o=Re(t),r=Z.get(e);r==null||r.forEach(a=>{const[s,i]=a;s===o&&(e.removeEventListener(o,i),r.delete(a))})}else e.removeAttribute(t)})}function We(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const Ct="cubic-bezier(0.4, 0, 0.2, 1)",ln="cubic-bezier(0.0, 0, 0.2, 1)",cn="cubic-bezier(0.4, 0, 1, 1)";function Rt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function re(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Tt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Se(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,r=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,a=t==="top"?0:t==="bottom"?n.height:t;return re({x:r,y:a},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,r=t==="left"?0:t==="right"?n.width:t,a=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return re({x:r,y:a},n)}return re({x:n.width/2,y:n.height/2},n)}const Ve={static:Ft,connected:Lt},kt=U({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ve},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Bt(e,n){const t=W({}),o=W();j&&fe(()=>!!(n.isActive.value&&e.locationStrategy),a=>{var s,i;k(()=>e.locationStrategy,a),N(()=>{window.removeEventListener("resize",r),o.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(i=Ve[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function r(a){var s;(s=o.value)==null||s.call(o,a)}return{contentStyles:t,updateLocation:o}}function Ft(){}function Mt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ot(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Lt(e,n,t){(Array.isArray(e.target.value)||Rt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:a}=je(()=>{const v=ye(n.location,e.isRtl.value),f=n.origin==="overlap"?v:n.origin==="auto"?oe(v):ye(n.origin,e.isRtl.value);return v.side===f.side&&v.align===ae(f).align?{preferredAnchor:be(v),preferredOrigin:be(f)}:{preferredAnchor:v,preferredOrigin:f}}),[s,i,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>S(()=>{const f=parseFloat(n[v]);return isNaN(f)?1/0:f})),d=S(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const v=n.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const b=new ResizeObserver(()=>{g&&h()});k([e.target,e.contentEl],(v,f)=>{let[p,R]=v,[E,w]=f;E&&!Array.isArray(E)&&b.unobserve(E),p&&!Array.isArray(p)&&b.observe(p),w&&b.unobserve(w),R&&b.observe(R)},{immediate:!0}),N(()=>{b.disconnect()});function h(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const v=Et(e.target.value),f=Mt(e.contentEl.value,e.isRtl.value),p=Q(e.contentEl.value),R=12;p.length||(p.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=p.reduce((P,x)=>{const m=x.getBoundingClientRect(),y=new $({x:x===document.documentElement?0:m.x,y:x===document.documentElement?0:m.y,width:x.clientWidth,height:x.clientHeight});return P?new $({x:Math.max(P.left,y.left),y:Math.max(P.top,y.top),width:Math.min(P.right,y.right)-Math.max(P.left,y.left),height:Math.min(P.bottom,y.bottom)-Math.max(P.top,y.top)}):y},void 0);E.x+=R,E.y+=R,E.width-=R*2,E.height-=R*2;let w={anchor:r.value,origin:a.value};function z(P){const x=new $(f),m=Se(P.anchor,v),y=Se(P.origin,x);let{x:B,y:M}=Tt(m,y);switch(P.anchor.side){case"top":M-=d.value[0];break;case"bottom":M+=d.value[0];break;case"left":B-=d.value[0];break;case"right":B+=d.value[0];break}switch(P.anchor.align){case"top":M-=d.value[1];break;case"bottom":M+=d.value[1];break;case"left":B-=d.value[1];break;case"right":B+=d.value[1];break}return x.x+=B,x.y+=M,x.width=Math.min(x.width,u.value),x.height=Math.min(x.height,c.value),{overflows:xe(x,E),x:B,y:M}}let F=0,C=0;const l={x:0,y:0},T={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:P,y:x,overflows:m}=z(w);F+=P,C+=x,f.x+=P,f.y+=x;{const y=we(w.anchor),B=m.x.before||m.x.after,M=m.y.before||m.y.after;let G=!1;if(["x","y"].forEach(A=>{if(A==="x"&&B&&!T.x||A==="y"&&M&&!T.y){const D={anchor:{...w.anchor},origin:{...w.origin}},X=A==="x"?y==="y"?ae:oe:y==="y"?oe:ae;D.anchor=X(D.anchor),D.origin=X(D.origin);const{overflows:V}=z(D);(V[A].before<=m[A].before&&V[A].after<=m[A].after||V[A].before+V[A].after<(m[A].before+m[A].after)/2)&&(w=D,G=T[A]=!0)}}),G)continue}m.x.before&&(F+=m.x.before,f.x+=m.x.before),m.x.after&&(F-=m.x.after,f.x-=m.x.after),m.y.before&&(C+=m.y.before,f.y+=m.y.before),m.y.after&&(C-=m.y.after,f.y-=m.y.after);{const y=xe(f,E);l.x=E.width-y.x.before-y.x.after,l.y=E.height-y.y.before-y.y.after,F+=y.x.before,f.x+=y.x.before,C+=y.y.before,f.y+=y.y.before}break}const ne=we(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:L(ie(C)),left:e.isRtl.value?void 0:L(ie(F)),right:e.isRtl.value?L(ie(-F)):void 0,minWidth:L(ne==="y"?Math.min(s.value,v.width):s.value),maxWidth:L(Ee(ge(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:L(Ee(ge(l.y,i.value===1/0?0:i.value,c.value)))}),{available:l,contentBox:f}}return k(()=>[r.value,a.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>h()),ee(()=>{const v=h();if(!v)return;const{available:f,contentBox:p}=v;p.height>f.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ce=!0;const J=[];function Wt(e){!ce||J.length?(J.push(e),ue()):(ce=!1,e(),ue())}let Oe=-1;function ue(){cancelAnimationFrame(Oe),Oe=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?ue():ce=!0})}const K={none:null,close:Ht,block:It,reposition:Nt},Vt=U({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in K}},"VOverlay-scroll-strategies");function _t(e,n){if(!j)return;let t;ve(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Te(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=K[e.scrollStrategy])==null||o.call(K,n,e,t)}))}),N(()=>{t==null||t.stop()})}function Ht(e){function n(t){e.isActive.value=!1}_e(e.targetEl.value??e.contentEl.value,n)}function It(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Q(e.targetEl.value,n.contained?t:void 0),...Q(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,a=(i=>vt(i)&&i)(t||document.documentElement);a&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",L(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",L(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",L(r)),i.classList.add("v-overlay-scroll-blocked")}),N(()=>{o.forEach((i,u)=>{const c=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),g=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-c,i.scrollTop=-d,i.style.scrollBehavior=g}),a&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Nt(e,n,t){let o=!1,r=-1,a=-1;function s(i){Wt(()=>{var d,g;const u=performance.now();(g=(d=e.updateLocation).value)==null||g.call(d,i),o=(performance.now()-u)/(1e3/60)>2})}a=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{_e(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{s(i)})})):s(i)})})}),N(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(a),cancelAnimationFrame(r)})}function _e(e,n){const t=[document,...Q(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),N(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const zt=Symbol.for("vuetify:v-menu"),Dt=U({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ut()},"VOverlay-activator");function $t(e,n){let{isActive:t,isTop:o}=n;const r=de("useActivator"),a=W();let s=!1,i=!1,u=!0;const c=S(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=S(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:g,runCloseDelay:b}=ft(e,l=>{l===(e.openOnHover&&s||c.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),h=W(),v={onClick:l=>{l.stopPropagation(),a.value=l.currentTarget||l.target,t.value||(h.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var T;(T=l.sourceCapabilities)!=null&&T.firesTouchEvents||(s=!0,a.value=l.currentTarget||l.target,g())},onMouseleave:l=>{s=!1,b()},onFocus:l=>{qe(l.target,":focus-visible")!==!1&&(i=!0,l.stopPropagation(),a.value=l.currentTarget||l.target,g())},onBlur:l=>{i=!1,l.stopPropagation(),b()}},f=S(()=>{const l={};return d.value&&(l.onClick=v.onClick),e.openOnHover&&(l.onMouseenter=v.onMouseenter,l.onMouseleave=v.onMouseleave),c.value&&(l.onFocus=v.onFocus,l.onBlur=v.onBlur),l}),p=S(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,g()},l.onMouseleave=()=>{s=!1,b()}),c.value&&(l.onFocusin=()=>{i=!0,g()},l.onFocusout=()=>{i=!1,b()}),e.closeOnContentClick){const T=ke(zt,null);l.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return l}),R=S(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,g())},l.onMouseleave=()=>{s=!1,b()}),l});k(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!i)||c.value&&!i&&(!e.openOnHover||!s))&&(t.value=!1)}),k(t,l=>{l||setTimeout(()=>{h.value=void 0})},{flush:"post"});const E=W();ve(()=>{E.value&&ee(()=>{a.value=he(E.value)})});const w=W(),z=S(()=>e.target==="cursor"&&h.value?h.value:w.value?he(w.value):He(e.target,r)||a.value),F=S(()=>Array.isArray(z.value)?void 0:z.value);let C;return k(()=>!!e.activator,l=>{l&&j?(C=Te(),C.run(()=>{jt(e,r,{activatorEl:a,activatorEvents:f})})):C&&C.stop()},{flush:"post",immediate:!0}),N(()=>{C==null||C.stop()}),{activatorEl:a,activatorRef:E,target:z,targetEl:F,targetRef:w,activatorEvents:f,contentEvents:p,scrimEvents:R}}function jt(e,n,t){let{activatorEl:o,activatorEvents:r}=t;k(()=>e.activator,(u,c)=>{if(c&&u!==c){const d=i(c);d&&s(d)}u&&ee(()=>a())},{immediate:!0}),k(()=>e.activatorProps,()=>{a()}),N(()=>{s()});function a(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&pt(u,I(r.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&At(u,I(r.value,c))}function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=He(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function He(e,n){var o,r;if(!e)return;let t;if(e==="parent"){let a=(r=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:r.parentNode;for(;a!=null&&a.hasAttribute("data-no-activator");)a=a.parentNode;t=a}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function qt(){if(!j)return q(!1);const{ssr:e}=Ue();if(e){const n=q(!1);return Ge(()=>{n.value=!0}),n}else return q(!0)}const Ut=U({eager:Boolean},"lazy");function Gt(e,n){const t=q(!1),o=S(()=>t.value||e.eager||n.value);k(n,()=>t.value=!0);function r(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:r}}function Ie(){const n=de("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Pe=Symbol.for("vuetify:stack"),Y=Be([]);function Xt(e,n,t){const o=de("useStack"),r=!t,a=ke(Pe,void 0),s=Be({activeChildren:new Set});Xe(Pe,s);const i=q(+n.value);fe(e,()=>{var g;const d=(g=Y.at(-1))==null?void 0:g[1];i.value=d?d+10:+n.value,r&&Y.push([o.uid,i.value]),a==null||a.activeChildren.add(o.uid),N(()=>{if(r){const b=Ze(Y).findIndex(h=>h[0]===o.uid);Y.splice(b,1)}a==null||a.activeChildren.delete(o.uid)})});const u=q(!0);r&&ve(()=>{var g;const d=((g=Y.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>u.value=d)});const c=S(()=>!s.activeChildren.size);return{globalTop:Ye(u),localTop:c,stackStyles:S(()=>({zIndex:i.value}))}}function Yt(e){return{teleportTarget:S(()=>{const t=e.value;if(t===!0||!j)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let r=o.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function Zt(){return!0}function Ne(e,n,t){if(!e||ze(e,t)===!1)return!1;const o=We(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof t.value=="object"&&t.value.include||(()=>[]))();return r.push(n),!r.some(a=>a==null?void 0:a.contains(e.target))}function ze(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Zt)(e)}function Kt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ne(e,n,t)&&setTimeout(()=>{ze(e,t)&&o&&o(e)},0)}function pe(e,n){const t=We(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Qt={mounted(e,n){const t=r=>Kt(r,e,n),o=r=>{e._clickOutside.lastMousedownWasOutside=Ne(r,e,n)};pe(e,r=>{r.addEventListener("click",t,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(pe(e,t=>{var a;if(!t||!((a=e._clickOutside)!=null&&a[n.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Jt(e){const{modelValue:n,color:t,...o}=e;return H(st,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&H("div",I({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const De=U({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Dt(),...wt(),...xt(),...Ut(),...kt(),...Vt(),...Ke(),...mt()},"VOverlay"),Ae=Fe()({name:"VOverlay",directives:{ClickOutside:Qt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...De()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:r}=n;const a=Me(e,"modelValue"),s=S({get:()=>a.value,set:O=>{O&&e.disabled||(a.value=O)}}),{teleportTarget:i}=Yt(S(()=>e.attach||e.contained)),{themeClasses:u}=Qe(e),{rtlClasses:c,isRtl:d}=Je(),{hasContent:g,onAfterLeave:b}=Gt(e,s),h=gt(S(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:v,localTop:f,stackStyles:p}=Xt(s,et(e,"zIndex"),e._disableGlobalStack),{activatorEl:R,activatorRef:E,target:w,targetEl:z,targetRef:F,activatorEvents:C,contentEvents:l,scrimEvents:T}=$t(e,{isActive:s,isTop:f}),{dimensionStyles:te}=St(e),ne=qt(),{scopeId:P}=Ie();k(()=>e.disabled,O=>{O&&(s.value=!1)});const x=W(),m=W(),{contentStyles:y,updateLocation:B}=Bt(e,{isRtl:d,contentEl:m,target:w,isActive:s});_t(e,{root:x,contentEl:m,targetEl:z,isActive:s,updateLocation:B});function M(O){r("click:outside",O),e.persistent?V():s.value=!1}function G(){return s.value&&v.value}j&&k(s,O=>{O?window.addEventListener("keydown",A):window.removeEventListener("keydown",A)},{immediate:!0}),tt(()=>{j&&window.removeEventListener("keydown",A)});function A(O){var _,me;O.key==="Escape"&&v.value&&(e.persistent?V():(s.value=!1,(_=m.value)!=null&&_.contains(document.activeElement)&&((me=R.value)==null||me.focus())))}const D=ht();fe(()=>e.closeOnBack,()=>{bt(D,O=>{v.value&&s.value?(O(!1),e.persistent?V():s.value=!1):O()})});const X=W();k(()=>s.value&&(e.absolute||e.contained)&&i.value==null,O=>{if(O){const _=dt(x.value);_&&_!==document.scrollingElement&&(X.value=_.scrollTop)}});function V(){e.noClickAnimation||m.value&&Pt(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ct})}function $e(){b(),r("afterLeave")}return Le(()=>{var O;return H(it,null,[(O=t.activator)==null?void 0:O.call(t,{isActive:s.value,props:I({ref:E,targetRef:F},C.value,e.activatorProps)}),!e.disabled&&ne.value&&g.value&&H(nt,{disabled:!i.value,to:i.value},{default:()=>[H("div",I({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[p.value,{top:L(X.value)},e.style],ref:x},P,o),[H(Jt,I({color:h,modelValue:!!e.scrim&&s.value},T.value),null),H(yt,{appear:!0,persisted:!0,transition:e.transition,target:w.value,onAfterLeave:$e},{default:()=>{var _;return[ot(H("div",I({ref:m,class:["v-overlay__content",e.contentClass],style:[te.value,y.value]},l.value,e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:s})]),[[at,s.value],[rt("click-outside"),{handler:M,closeConditional:G,include:()=>[R.value]}]])]}})])]})])}),{activatorEl:R,target:w,animateClick:V,contentEl:m,globalTop:v,localTop:f,updateLocation:B}}}),se=Symbol("Forwarded refs");function le(e,n){let t=e;for(;t;){const o=Reflect.getOwnPropertyDescriptor(t,n);if(o)return o;t=Object.getPrototypeOf(t)}}function en(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return e[se]=t,new Proxy(e,{get(r,a){if(Reflect.has(r,a))return Reflect.get(r,a);if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const s of t)if(s.value&&Reflect.has(s.value,a)){const i=Reflect.get(s.value,a);return typeof i=="function"?i.bind(s.value):i}}},has(r,a){if(Reflect.has(r,a))return!0;if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,a))return!0;return!1},set(r,a,s){if(Reflect.has(r,a))return Reflect.set(r,a,s);if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const i of t)if(i.value&&Reflect.has(i.value,a))return Reflect.set(i.value,a,s);return!1},getOwnPropertyDescriptor(r,a){var i;const s=Reflect.getOwnPropertyDescriptor(r,a);if(s)return s;if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const u of t){if(!u.value)continue;const c=le(u.value,a)??("_"in u.value?le((i=u.value._)==null?void 0:i.setupState,a):void 0);if(c)return c}for(const u of t){const c=u.value&&u.value[se];if(!c)continue;const d=c.slice();for(;d.length;){const g=d.shift(),b=le(g.value,a);if(b)return b;const h=g.value&&g.value[se];h&&d.push(...h)}}}}})}const tn=U({id:String,text:String,...lt(De({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),un=Fe()({name:"VTooltip",props:tn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Me(e,"modelValue"),{scopeId:r}=Ie(),a=ct(),s=S(()=>e.id||`v-tooltip-${a}`),i=W(),u=S(()=>e.location.split(" ").length>1?e.location:e.location+" center"),c=S(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),d=S(()=>e.transition?e.transition:o.value?"scale-transition":"fade-transition"),g=S(()=>I({"aria-describedby":s.value},e.activatorProps));return Le(()=>{const b=Ae.filterProps(e);return H(Ae,I({ref:i,class:["v-tooltip",e.class],style:e.style,id:s.value},b,{modelValue:o.value,"onUpdate:modelValue":h=>o.value=h,transition:d.value,absolute:!0,location:u.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:g.value,_disableGlobalStack:!0},r),{activator:t.activator,default:function(){var p;for(var h=arguments.length,v=new Array(h),f=0;f<h;f++)v[f]=arguments[f];return((p=t.default)==null?void 0:p.call(t,...v))??e.text}})}),en({},i)}});export{un as V,Pt as a,cn as b,Ae as c,ln as d,en as f,Et as g,De as m,Ot as n,Ct as s,Ie as u};
