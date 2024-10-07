(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function St(){return HTMLTemplateElement.prototype.hasOwnProperty("shadowRoot")}St()||function n(t){t.querySelectorAll("template[shadowroot]").forEach(e=>{const i=e,s=i.getAttribute("shadowroot")||"open",o=i.parentNode.attachShadow({mode:s});o.appendChild(i.content),i.remove(),n(o)})}(document);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const M=window,b=M.trustedTypes,Y=b?b.createPolicy("lit-html",{createHTML:n=>n}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,K="?"+$,Ct=`<${K}>`,E=document,x=(n="")=>E.createComment(n),O=n=>n===null||typeof n!="object"&&typeof n!="function",ht=Array.isArray,ct=n=>ht(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,v=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,dt=/^(?:script|style|textarea|title)$/i,Pt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ut=Pt(1),_=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),it=new WeakMap,pt=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new w(t.insertBefore(x(),a),a,void 0,e!=null?e:{})}return r._$AI(n),r},g=E.createTreeWalker(E,129,null,!1),ft=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=S;for(let l=0;l<e;l++){const h=n[l];let u,c,d=-1,f=0;for(;f<h.length&&(r.lastIndex=f,c=r.exec(h),c!==null);)f=r.lastIndex,r===S?c[1]==="!--"?r=Q:c[1]!==void 0?r=X:c[2]!==void 0?(dt.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=v):c[3]!==void 0&&(r=v):r===v?c[0]===">"?(r=s!=null?s:S,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,u=c[1],r=c[3]===void 0?v:c[3]==='"'?et:tt):r===et||r===tt?r=v:r===Q||r===X?r=S:(r=v,s=void 0);const R=r===v&&n[l+1].startsWith("/>")?" ":"";o+=r===S?h+Ct:d>=0?(i.push(u),h.slice(0,d)+"$lit$"+h.slice(d)+$+R):h+$+(d===-2?(i.push(void 0),l):R)}const a=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Y!==void 0?Y.createHTML(a):a,i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,l=this.parts,[h,u]=ft(t,e);if(this.el=T.createElement(h,i),g.currentNode=this.el.content,e===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(s=g.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith($)){const f=u[r++];if(c.push(d),f!==void 0){const R=s.getAttribute(f.toLowerCase()+"$lit$").split($),U=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:U[2],strings:R,ctor:U[1]==="."?vt:U[1]==="?"?_t:U[1]==="@"?mt:N})}else l.push({type:6,index:o})}for(const d of c)s.removeAttribute(d)}if(dt.test(s.tagName)){const c=s.textContent.split($),d=c.length-1;if(d>0){s.textContent=b?b.emptyScript:"";for(let f=0;f<d;f++)s.append(c[f],x()),g.nextNode(),l.push({type:2,index:++o});s.append(c[d],x())}}}else if(s.nodeType===8)if(s.data===K)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf($,c+1))!==-1;)l.push({type:7,index:o}),c+=$.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function m(n,t,e=n,i){var s,o,r,a;if(t===_)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const h=O(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,i)),i!==void 0?((r=(a=e)._$Cl)!==null&&r!==void 0?r:a._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=m(n,l._$AS(n,t.values),l,i)),t}class $t{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(i,!0);g.currentNode=o;let r=g.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new w(r,r.nextSibling,this,t):h.type===1?u=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(u=new yt(r,this,t)),this.v.push(u),h=s[++l]}a!==(h==null?void 0:h.index)&&(r=g.nextNode(),a++)}return o}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class w{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=m(this,t,e),O(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==_&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):ct(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=t:this.k(E.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{const r=new $t(o,this),a=r.p(this.options);r.m(i),this.k(a),this._$AH=r}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new T(t)),e}O(t){ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new w(this.S(x()),this.S(x()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class N{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=m(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{const a=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=m(this,a[i+l],e,l),h===_&&(h=this._$AH[l]),r||(r=!O(h)||h!==this._$AH[l]),h===p?t=p:t!==p&&(t+=(h!=null?h:"")+o[l+1]),this._$AH[l]=h}r&&!s&&this.P(t)}P(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class vt extends N{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===p?void 0:t}}const xt=b?b.emptyScript:"";class _t extends N{constructor(){super(...arguments),this.type=4}P(t){t&&t!==p?this.element.setAttribute(this.name,xt):this.element.removeAttribute(this.name)}}class mt extends N{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=m(this,t,e,0))!==null&&i!==void 0?i:p)===_)return;const s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class yt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){m(this,t)}}const Ot={A:"$lit$",M:$,C:K,L:1,R:ft,D:$t,V:ct,I:m,H:w,N,U:_t,B:mt,F:vt,W:yt},st=M.litHtmlPolyfillSupport;st==null||st(T,w),((L=M.litHtmlVersions)!==null&&L!==void 0?L:M.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=n=>n===null||typeof n!="object"&&typeof n!="function",Ht=(n,t)=>t===void 0?(n==null?void 0:n._$litType$)!==void 0:(n==null?void 0:n._$litType$)===t,Nt=n=>n.strings===void 0;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Rt,V:Ut,I:gt,H:P,W:kt}=Ot,Mt=(n,t,e={})=>{if(t._$litPart$!==void 0)throw Error("container already contains a live render");let i,s;const o=[],r=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT,null,!1);let a;for(;(a=r.nextNode())!==null;){const l=a.data;if(l.startsWith("lit-part")){if(o.length===0&&i!==void 0)throw Error("there must be only one root part per container");s=It(n,a,o,e),i!=null||(i=s)}else if(l.startsWith("lit-node"))Dt(a,o,e);else if(l.startsWith("/lit-part")){if(o.length===1&&s!==i)throw Error("internal error");s=Lt(a,s,o)}}console.assert(i!==void 0,"there should be exactly one root part in a render container"),t._$litPart$=i},It=(n,t,e,i)=>{let s,o;if(e.length===0)o=new P(t,null,void 0,i),s=n;else{const r=e[e.length-1];if(r.type==="template-instance")o=new P(t,null,r.instance,i),r.instance.v.push(o),s=r.result.values[r.instancePartIndex++],r.templatePartIndex++;else if(r.type==="iterable"){o=new P(t,null,r.part,i);const a=r.iterator.next();if(a.done)throw s=void 0,r.done=!0,Error("Unhandled shorter than expected iterable");s=a.value,r.part._$AH.push(o)}else o=new P(t,null,r.part,i)}if(s=gt(o,s),s===_)e.push({part:o,type:"leaf"});else if(Tt(s))e.push({part:o,type:"leaf"}),o._$AH=s;else if(Ht(s)){const r="lit-part "+jt(s);if(t.data!==r)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{const a=P.prototype._$AC(s),l=new Rt(a,o);e.push({type:"template-instance",instance:l,part:o,templatePartIndex:0,instancePartIndex:0,result:s}),o._$AH=l}}else Ut(s)?(e.push({part:o,type:"iterable",value:s,iterator:s[Symbol.iterator](),done:!1}),o._$AH=[]):(e.push({part:o,type:"leaf"}),o._$AH=s==null?"":s);return o},Lt=(n,t,e)=>{if(t===void 0)throw Error("unbalanced part marker");t._$AB=n;const i=e.pop();if(i.type==="iterable"&&!i.iterator.next().done)throw Error("unexpected longer than expected iterable");if(e.length>0)return e[e.length-1].part},Dt=(n,t,e)=>{var i;const s=/lit-node (\d+)/.exec(n.data),o=parseInt(s[1]),r=(i=n.previousElementSibling)!==null&&i!==void 0?i:n.parentElement;if(r===null)throw Error("could not find node for attribute parts");r.removeAttribute("defer-hydration");const a=t[t.length-1];if(a.type!=="template-instance")throw Error("internal error");{const l=a.instance;for(;;){const h=l._$AD.parts[a.templatePartIndex];if(h===void 0||h.type!==C.ATTRIBUTE&&h.type!==C.ELEMENT||h.index!==o)break;if(h.type===C.ATTRIBUTE){const u=new h.ctor(r,h.name,h.strings,a.instance,e),c=Nt(u)?a.result.values[a.instancePartIndex]:a.result.values,d=!(u.type===C.EVENT||u.type===C.PROPERTY);u._$AI(c,u,a.instancePartIndex,d),a.instancePartIndex+=h.strings.length-1,l.v.push(u)}else{const u=new kt(r,a.instance,e);gt(u,a.result.values[a.instancePartIndex++]),l.v.push(u)}a.templatePartIndex++}}},jt=n=>{const t=new Uint32Array(2).fill(5381);for(const e of n.strings)for(let i=0;i<e.length;i++)t[i%2]=33*t[i%2]^e.charCodeAt(i);return btoa(String.fromCharCode(...new Uint8Array(t.buffer)))};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */globalThis.litElementHydrateSupport=({LitElement:n})=>{const t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(n),"observedAttributes").get;Object.defineProperty(n,"observedAttributes",{get(){return[...t.call(this),"defer-hydration"]}});const e=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(r,a,l){r==="defer-hydration"&&l===null&&i.call(this),e.call(this,r,a,l)};const i=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||i.call(this)};const s=n.prototype.createRenderRoot;n.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):s.call(this)};const o=Object.getPrototypeOf(n.prototype).update;n.prototype.update=function(r){const a=this.render();o.call(this,r),this._$AG?(this._$AG=!1,Mt(a,this.renderRoot,this.renderOptions)):pt(a,this.renderRoot,this.renderOptions)}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=window,F=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),nt=new WeakMap;class At{constructor(t,e,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&nt.set(e,t))}return t}toString(){return this.cssText}}const Bt=n=>new At(typeof n=="string"?n:n+"",void 0,G),zt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new At(e,n,G)},Vt=(n,t)=>{F?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=k.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},ot=F?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Bt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const I=window,rt=I.trustedTypes,Wt=rt?rt.emptyScript:"",lt=I.reactiveElementPolyfillSupport,W={toAttribute(n,t){switch(t){case Boolean:n=n?Wt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},bt=(n,t)=>t!==n&&(t==t||n==n),j={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:bt};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ot(s))}else t!==void 0&&e.push(ot(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Vt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=j){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:W).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:W;this._$El=o,this[o]=a.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||bt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},lt==null||lt({ReactiveElement:y}),((D=I.reactiveElementVersions)!==null&&D!==void 0?D:I.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,z;class A extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return _}}A.finalized=!0,A._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:A});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:A});((z=globalThis.litElementVersions)!==null&&z!==void 0?z:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function Z(n){return(t,e)=>e!==void 0?((i,s,o)=>{s.constructor.createProperty(o,i)})(n,t,e):qt(n,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;((V=window.HTMLSlotElement)===null||V===void 0?void 0:V.prototype.assignedElements)!=null;const Kt="/vite-lit-ssr/assets/lit.c8dae599.svg";var Ft=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,wt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Gt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ft(t,e,s),s};let q=class extends A{constructor(){super(...arguments),this.name=""}_click(){this.name+="!"}render(){return ut`<button @click=${this._click}>Hello ${this.name}</button>`}};wt([Z({type:String})],q.prototype,"name",2);q=wt([Et("my-child")],q);var Zt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,J=(n,t,e,i)=>{for(var s=i>1?void 0:i?Jt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Zt(t,e,s),s};let H=class extends A{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return ut`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${Kt} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
      <my-child name="World!"></my-child>
    `}_onClick(){this.count++}};H.styles=zt`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;J([Z()],H.prototype,"docsHint",2);J([Z({type:Number})],H.prototype,"count",2);H=J([Et("my-element")],H);
