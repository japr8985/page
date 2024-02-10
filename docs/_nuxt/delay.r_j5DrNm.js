import{aH as v,O as y,Y as S,am as B,ak as w,aj as V,Z as C,c as p,e as D,H as E,as as A,ab as N,o as M,a5 as U,aI as $,at as q,aJ as H,aK as F}from"./entry.pWU9ejTJ.js";const G=["top","bottom"],J=["start","end","left","right"];function Z(e,r){let[i,t]=e.split(" ");return t||(t=v(G,i)?"start":v(J,i)?"top":"center"),{side:I(i,r),align:I(t,r)}}function I(e,r){return e==="start"?r?"right":"left":e==="end"?r?"left":"right":e}function j(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function z(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function L(e){return{side:e.align,align:e.side}}function Q(e){return v(G,e.side)?"y":"x"}const T=y({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),X=y({value:null,disabled:Boolean,selectedClass:String},"group-item");function _(e,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=S("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const n=B();w(Symbol.for(`${r.description}:id`),n);const l=V(r,null);if(!l){if(!i)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${r.description}`)}const d=C(e,"value"),g=p(()=>!!(l.disabled.value||e.disabled));l.register({id:n,value:d,disabled:g},t),D(()=>{l.unregister(n)});const c=p(()=>l.isSelected(n)),b=p(()=>c.value&&[l.selectedClass.value,e.selectedClass]);return E(c,h=>{t.emit("group:selected",{value:h})}),{id:n,isSelected:c,toggle:()=>l.select(n,!c.value),select:h=>l.select(n,h),selectedClass:b,value:d,disabled:g,group:l}}function R(e,r){let i=!1;const t=A([]),n=N(e,"modelValue",[],s=>s==null?[]:P(t,$(s)),s=>{const u=W(t,s);return e.multiple?u:u[0]}),l=S("useGroup");function d(s,u){const o=s,a=Symbol.for(`${r.description}:id`),m=q(a,l==null?void 0:l.vnode).indexOf(u);H(o.value)==null&&(o.value=m),m>-1?t.splice(m,0,o):t.push(o)}function g(s){if(i)return;c();const u=t.findIndex(o=>o.id===s);t.splice(u,1)}function c(){const s=t.find(u=>!u.disabled);s&&e.mandatory==="force"&&!n.value.length&&(n.value=[s.id])}M(()=>{c()}),D(()=>{i=!0});function b(s,u){const o=t.find(a=>a.id===s);if(!(u&&(o!=null&&o.disabled)))if(e.multiple){const a=n.value.slice(),f=a.findIndex(k=>k===s),m=~f;if(u=u??!m,m&&e.mandatory&&a.length<=1||!m&&e.max!=null&&a.length+1>e.max)return;f<0&&u?a.push(s):f>=0&&!u&&a.splice(f,1),n.value=a}else{const a=n.value.includes(s);if(e.mandatory&&a)return;n.value=u??!a?[s]:[]}}function h(s){if(e.multiple,n.value.length){const u=n.value[0],o=t.findIndex(m=>m.id===u);let a=(o+s)%t.length,f=t[a];for(;f.disabled&&a!==o;)a=(a+s)%t.length,f=t[a];if(f.disabled)return;n.value=[t[a].id]}else{const u=t.find(o=>!o.disabled);u&&(n.value=[u.id])}}const x={register:d,unregister:g,selected:n,select:b,disabled:C(e,"disabled"),prev:()=>h(t.length-1),next:()=>h(1),isSelected:s=>n.value.includes(s),selectedClass:p(()=>e.selectedClass),items:p(()=>t),getItemIndex:s=>O(t,s)};return w(r,x),x}function O(e,r){const i=P(e,[r]);return i.length?e.findIndex(t=>t.id===i[0]):-1}function P(e,r){const i=[];return r.forEach(t=>{const n=e.find(d=>U(t,d.value)),l=e[t];(n==null?void 0:n.value)!=null?i.push(n.id):l!=null&&i.push(l.id)}),i}function W(e,r){const i=[];return r.forEach(t=>{const n=e.findIndex(l=>l.id===t);if(~n){const l=e[n];i.push(l.value!=null?l.value:n)}}),i}const K=y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function ee(e,r){let i=()=>{};function t(d){i==null||i();const g=Number(d?e.openDelay:e.closeDelay);return new Promise(c=>{i=F(g,()=>{r==null||r(d),c(d)})})}function n(){return t(!0)}function l(){return t(!1)}return{clearDelay:i,runOpenDelay:n,runCloseDelay:l}}export{X as a,_ as b,z as c,L as d,K as e,j as f,Q as g,ee as h,T as m,Z as p,R as u};