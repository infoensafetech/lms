(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const vt=String.raw,St=()=>vt` <div class="container-xxl container-p-y">
    <div class="misc-wrapper">
      <h2 class="mb-2 mx-2">Page Not Found :(</h2>
      <p class="mb-4 mx-2">
        Oops! 😖 The requested URL was not found on this
        server.
      </p>
      <a href="/" class="btn btn-primary">Back to home</a>
      <div class="mt-3">
        <img
          src="/assets/img/illustrations/page-misc-error-light.png"
          alt="page-misc-error-light"
          width="500"
          class="img-fluid"
          data-app-dark-img="illustrations/page-misc-error-dark.png"
          data-app-light-img="illustrations/page-misc-error-light.png"
        />
      </div>
    </div>
  </div>`,xt=()=>{document.getElementById("pageLoader").classList.remove("d-none")},Rt=()=>{document.getElementById("pageLoader").classList.add("d-none")},Ct=()=>{document.querySelector("#search_students").addEventListener("click",()=>{const t=document.querySelector("#student_search_result_card");xt(),t.classList.add("show"),t.classList.remove("d-none"),Rt()})},Ot=String.raw,Tt=()=>Ot` <div class="content-wrapper">
    <!-- Content -->

    <div class="card mb-4">
      <h5 class="card-header">Dashboard</h5>
      <div class="card-body">
        <div class="row gx-3 gy-2 align-items-center">
          <div class="col-md-3">
            <label class="form-label" for="academicYear"
              >Academic Year</label
            >
            <select
              id="academicYear"
              class="form-select color-dropdown"
            >
              <option value="2025-2026" selected>
                2025-2026
              </option>
              <option value="2024-2025">2024-2025</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label" for="collegeType"
              >College Type</label
            >
            <select
              class="form-select placement-dropdown"
              id="collegeType"
            >
              <option value="Engineering College">
                Engineering College
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label" for="courseName"
              >College Type</label
            >
            <select
              class="form-select placement-dropdown"
              id="courseName"
            >
              <option value="Skill Development">
                Skill Development
              </option>
              <option value="Fire and Safety Measures">
                Fire and Safety Measures
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label" for="university"
              >University</label
            >
            <select
              class="form-select placement-dropdown"
              id="university"
            >
              <option value="Anna University">
                Anna University
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label" for="district"
              >District</label
            >
            <select
              class="form-select placement-dropdown"
              id="district"
            >
              <option value="Tiruchirapalli">
                Tiruchirapalli
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label" for="college"
              >College</label
            >
            <select
              class="form-select placement-dropdown"
              id="college"
            >
              <option value="M.A.M College of Engineering">
                M.A.M College of Engineering
              </option>
              <option
                value="M.A.M College of Engineering and Technology"
              >
                M.A.M College of Engineering and Technology
              </option>
              <option
                value="Shri Angallaman College of Engineering and Technology"
              >
                Shri Angallaman College of Engineering and
                Technology
              </option>
              <option value="SRM TRP Engineering College">
                SRM TRP Engineering College
              </option>
              <option value="Surya College of Engineering">
                Surya College of Engineering
              </option>
              <option value="Trichy Engineering College">
                Trichy Engineering College
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label" for="branch"
              >Branch</label
            >
            <select
              class="form-select placement-dropdown"
              id="branch"
            >
              <option value="B.E Civil Engineering">
                B.E Civil Engineering
              </option>
              <option
                value="B.E Computer Science and Engineering"
              >
                B.E Computer Science and Engineering
              </option>
              <option
                value="B.E Electrical and ELectronics Engineering"
              >
                B.E Electrical and ELectronics Engineering
              </option>
              <option
                value="B.E Electronics and Communication Engineering"
              >
                B.E Electronics and Communication
                Engineering
              </option>
              <option value="B.E Mechanical Engineering">
                B.E Mechanical Engineering
              </option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label" for="search_students"
              >&nbsp;</label
            >
            <button
              id="search_students"
              class="btn btn-primary d-block"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card mb-4 d-none"
      id="student_search_result_card"
    >
      <h5 class="card-header">Registered Students 60</h5>
    </div>
    <!---Content-->
  </div>`,At=String.raw,Lt=e=>{const t=At`
    <div
      class="bs-toast toast fade show bg-danger"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <i class="bx bx-x me-2 fs-2"></i>
        <div class="me-auto fw-semibold">Error</div>

        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
        ></button>
      </div>
      <div class="toast-body">${e}</div>
    </div>
  `,n=document.querySelector(".toast-container");n&&n.insertAdjacentHTML("beforeend",t)},kt=String.raw,Ft=e=>{const t=kt`
    <div
      class="bs-toast toast fade show bg-success"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <i class="bx bx-check me-2 fs-2"></i>
        <div class="me-auto fw-semibold">Success</div>

        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
        ></button>
      </div>
      <div class="toast-body">${e}</div>
    </div>
  `,n=document.querySelector(".toast-container");n&&n.insertAdjacentHTML("beforeend",t)};function Ge(e,t){return function(){return e.apply(t,arguments)}}const{toString:Nt}=Object.prototype,{getPrototypeOf:ye}=Object,{iterator:se,toStringTag:Ye}=Symbol,re=(e=>t=>{const n=Nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),F=e=>(e=e.toLowerCase(),t=>re(t)===e),oe=e=>t=>typeof t===e,{isArray:q}=Array,j=oe("undefined");function z(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Qe=F("ArrayBuffer");function _t(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Qe(e.buffer),t}const Pt=oe("string"),C=oe("function"),et=oe("number"),J=e=>e!==null&&typeof e=="object",Bt=e=>e===!0||e===!1,Q=e=>{if(re(e)!=="object")return!1;const t=ye(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ye in e)&&!(se in e)},Ut=e=>{if(!J(e)||z(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Dt=F("Date"),Mt=F("File"),It=e=>!!(e&&typeof e.uri<"u"),jt=e=>e&&typeof e.getParts<"u",qt=F("Blob"),$t=F("FileList"),Ht=e=>J(e)&&C(e.pipe);function zt(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Fe=zt(),Ne=typeof Fe.FormData<"u"?Fe.FormData:void 0,Jt=e=>{let t;return e&&(Ne&&e instanceof Ne||C(e.append)&&((t=re(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},Vt=F("URLSearchParams"),[Wt,Kt,Xt,Zt]=["ReadableStream","Request","Response","Headers"].map(F),Gt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function V(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let s,r;if(typeof e!="object"&&(e=[e]),q(e))for(s=0,r=e.length;s<r;s++)t.call(null,e[s],s,e);else{if(z(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(s=0;s<i;s++)l=o[s],t.call(null,e[l],l,e)}}function tt(e,t){if(z(e))return null;t=t.toLowerCase();const n=Object.keys(e);let s=n.length,r;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const U=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,nt=e=>!j(e)&&e!==U;function me(){const{caseless:e,skipUndefined:t}=nt(this)&&this||{},n={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const i=e&&tt(n,o)||o;Q(n[i])&&Q(r)?n[i]=me(n[i],r):Q(r)?n[i]=me({},r):q(r)?n[i]=r.slice():(!t||!j(r))&&(n[i]=r)};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&V(arguments[r],s);return n}const Yt=(e,t,n,{allOwnKeys:s}={})=>(V(t,(r,o)=>{n&&C(r)?Object.defineProperty(e,o,{value:Ge(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),e),Qt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),en=(e,t,n,s)=>{e.prototype=Object.create(t.prototype,s),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tn=(e,t,n,s)=>{let r,o,i;const l={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)i=r[o],(!s||s(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ye(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const s=e.indexOf(t,n);return s!==-1&&s===n},sn=e=>{if(!e)return null;if(q(e))return e;let t=e.length;if(!et(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},rn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ye(Uint8Array)),on=(e,t)=>{const s=(e&&e[se]).call(e);let r;for(;(r=s.next())&&!r.done;){const o=r.value;t.call(e,o[0],o[1])}},an=(e,t)=>{let n;const s=[];for(;(n=e.exec(t))!==null;)s.push(n);return s},ln=F("HTMLFormElement"),cn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),_e=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),un=F("RegExp"),st=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),s={};V(n,(r,o)=>{let i;(i=t(r,o,e))!==!1&&(s[o]=i||r)}),Object.defineProperties(e,s)},dn=e=>{st(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=e[n];if(C(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},fn=(e,t)=>{const n={},s=r=>{r.forEach(o=>{n[o]=!0})};return q(e)?s(e):s(String(e).split(t)),n},pn=()=>{},mn=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function hn(e){return!!(e&&C(e.append)&&e[Ye]==="FormData"&&e[se])}const bn=e=>{const t=new Array(10),n=(s,r)=>{if(J(s)){if(t.indexOf(s)>=0)return;if(z(s))return s;if(!("toJSON"in s)){t[r]=s;const o=q(s)?[]:{};return V(s,(i,l)=>{const p=n(i,r+1);!j(p)&&(o[l]=p)}),t[r]=void 0,o}}return s};return n(e,0)},gn=F("AsyncFunction"),yn=e=>e&&(J(e)||C(e))&&C(e.then)&&C(e.catch),rt=((e,t)=>e?setImmediate:t?((n,s)=>(U.addEventListener("message",({source:r,data:o})=>{r===U&&o===n&&s.length&&s.shift()()},!1),r=>{s.push(r),U.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",C(U.postMessage)),wn=typeof queueMicrotask<"u"?queueMicrotask.bind(U):typeof process<"u"&&process.nextTick||rt,En=e=>e!=null&&C(e[se]),a={isArray:q,isArrayBuffer:Qe,isBuffer:z,isFormData:Jt,isArrayBufferView:_t,isString:Pt,isNumber:et,isBoolean:Bt,isObject:J,isPlainObject:Q,isEmptyObject:Ut,isReadableStream:Wt,isRequest:Kt,isResponse:Xt,isHeaders:Zt,isUndefined:j,isDate:Dt,isFile:Mt,isReactNativeBlob:It,isReactNative:jt,isBlob:qt,isRegExp:un,isFunction:C,isStream:Ht,isURLSearchParams:Vt,isTypedArray:rn,isFileList:$t,forEach:V,merge:me,extend:Yt,trim:Gt,stripBOM:Qt,inherits:en,toFlatObject:tn,kindOf:re,kindOfTest:F,endsWith:nn,toArray:sn,forEachEntry:on,matchAll:an,isHTMLForm:ln,hasOwnProperty:_e,hasOwnProp:_e,reduceDescriptors:st,freezeMethods:dn,toObjectSet:fn,toCamelCase:cn,noop:pn,toFiniteNumber:mn,findKey:tt,global:U,isContextDefined:nt,isSpecCompliantForm:hn,toJSONObject:bn,isAsyncFn:gn,isThenable:yn,setImmediate:rt,asap:wn,isIterable:En};let b=class ot extends Error{static from(t,n,s,r,o,i){const l=new ot(t.message,n||t.code,s,r,o);return l.cause=t,l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),i&&Object.assign(l,i),l}constructor(t,n,s,r,o){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),s&&(this.config=s),r&&(this.request=r),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}};b.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";b.ERR_BAD_OPTION="ERR_BAD_OPTION";b.ECONNABORTED="ECONNABORTED";b.ETIMEDOUT="ETIMEDOUT";b.ERR_NETWORK="ERR_NETWORK";b.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";b.ERR_DEPRECATED="ERR_DEPRECATED";b.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";b.ERR_BAD_REQUEST="ERR_BAD_REQUEST";b.ERR_CANCELED="ERR_CANCELED";b.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";b.ERR_INVALID_URL="ERR_INVALID_URL";const vn=null;function he(e){return a.isPlainObject(e)||a.isArray(e)}function it(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(r,o){return r=it(r),!n&&o?"["+r+"]":r}).join(n?".":""):t}function Sn(e){return a.isArray(e)&&!e.some(he)}const xn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ie(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,f){return!a.isUndefined(f[h])});const s=n.metaTokens,r=n.visitor||c,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(r))throw new TypeError("visitor must be a function");function d(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(a.isBoolean(u))return u.toString();if(!p&&a.isBlob(u))throw new b("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?p&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,h,f){let w=u;if(a.isReactNative(t)&&a.isReactNativeBlob(u))return t.append(ue(f,h,o),d(u)),!1;if(u&&!f&&typeof u=="object"){if(a.endsWith(h,"{}"))h=s?h:h.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Sn(u)||(a.isFileList(u)||a.endsWith(h,"[]"))&&(w=a.toArray(u)))return h=it(h),w.forEach(function(E,x){!(a.isUndefined(E)||E===null)&&t.append(i===!0?ue([h],x,o):i===null?h:h+"[]",d(E))}),!1}return he(u)?!0:(t.append(ue(f,h,o),d(u)),!1)}const m=[],g=Object.assign(xn,{defaultVisitor:c,convertValue:d,isVisitable:he});function v(u,h){if(!a.isUndefined(u)){if(m.indexOf(u)!==-1)throw Error("Circular reference detected in "+h.join("."));m.push(u),a.forEach(u,function(w,T){(!(a.isUndefined(w)||w===null)&&r.call(t,w,a.isString(T)?T.trim():T,h,g))===!0&&v(w,h?h.concat(T):[T])}),m.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function we(e,t){this._pairs=[],e&&ie(e,this,t)}const at=we.prototype;at.append=function(t,n){this._pairs.push([t,n])};at.toString=function(t){const n=t?function(s){return t.call(this,s,Pe)}:Pe;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Rn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function lt(e,t,n){if(!t)return e;const s=n&&n.encode||Rn,r=a.isFunction(n)?{serialize:n}:n,o=r&&r.serialize;let i;if(o?i=o(t,r):i=a.isURLSearchParams(t)?t.toString():new we(t,r).toString(s),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Be{constructor(){this.handlers=[]}use(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Ee={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Cn=typeof URLSearchParams<"u"?URLSearchParams:we,On=typeof FormData<"u"?FormData:null,Tn=typeof Blob<"u"?Blob:null,An={isBrowser:!0,classes:{URLSearchParams:Cn,FormData:On,Blob:Tn},protocols:["http","https","file","blob","url","data"]},ve=typeof window<"u"&&typeof document<"u",be=typeof navigator=="object"&&navigator||void 0,Ln=ve&&(!be||["ReactNative","NativeScript","NS"].indexOf(be.product)<0),kn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fn=ve&&window.location.href||"http://localhost",Nn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ve,hasStandardBrowserEnv:Ln,hasStandardBrowserWebWorkerEnv:kn,navigator:be,origin:Fn},Symbol.toStringTag,{value:"Module"})),S={...Nn,...An};function _n(e,t){return ie(e,new S.classes.URLSearchParams,{visitor:function(n,s,r,o){return S.isNode&&a.isBuffer(n)?(this.append(s,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function Pn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Bn(e){const t={},n=Object.keys(e);let s;const r=n.length;let o;for(s=0;s<r;s++)o=n[s],t[o]=e[o];return t}function ct(e){function t(n,s,r,o){let i=n[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(r)?r.length:i,p?(a.hasOwnProp(r,i)?r[i]=[r[i],s]:r[i]=s,!l):((!r[i]||!a.isObject(r[i]))&&(r[i]=[]),t(n,s,r[i],o)&&a.isArray(r[i])&&(r[i]=Bn(r[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(s,r)=>{t(Pn(s),r,n,0)}),n}return null}function Un(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}const W={transitional:Ee,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return r?JSON.stringify(ct(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(s.indexOf("application/x-www-form-urlencoded")>-1)return _n(t,this.formSerializer).toString();if((l=a.isFileList(t))||s.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return ie(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||r?(n.setContentType("application/json",!1),Un(t)):t}],transformResponse:[function(t){const n=this.transitional||W.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(s&&!this.responseType||r)){const i=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t,this.parseReviver)}catch(l){if(i)throw l.name==="SyntaxError"?b.from(l,b.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{W.headers[e]={}});const Dn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mn=e=>{const t={};let n,s,r;return e&&e.split(`
`).forEach(function(i){r=i.indexOf(":"),n=i.substring(0,r).trim().toLowerCase(),s=i.substring(r+1).trim(),!(!n||t[n]&&Dn[n])&&(n==="set-cookie"?t[n]?t[n].push(s):t[n]=[s]:t[n]=t[n]?t[n]+", "+s:s)}),t},Ue=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function ee(e){return e===!1||e==null?e:a.isArray(e)?e.map(ee):String(e)}function In(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(e);)t[s[1]]=s[2];return t}const jn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function de(e,t,n,s,r){if(a.isFunction(s))return s.call(this,t,n);if(r&&(t=n),!!a.isString(t)){if(a.isString(s))return t.indexOf(s)!==-1;if(a.isRegExp(s))return s.test(t)}}function qn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,s)=>n.toUpperCase()+s)}function $n(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+n,{value:function(r,o,i){return this[s].call(this,t,r,o,i)},configurable:!0})})}let O=class{constructor(t){t&&this.set(t)}set(t,n,s){const r=this;function o(l,p,d){const c=H(p);if(!c)throw new Error("header name must be a non-empty string");const m=a.findKey(r,c);(!m||r[m]===void 0||d===!0||d===void 0&&r[m]!==!1)&&(r[m||p]=ee(l))}const i=(l,p)=>a.forEach(l,(d,c)=>o(d,c,p));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!jn(t))i(Mn(t),n);else if(a.isObject(t)&&a.isIterable(t)){let l={},p,d;for(const c of t){if(!a.isArray(c))throw TypeError("Object iterator must return a key-value pair");l[d=c[0]]=(p=l[d])?a.isArray(p)?[...p,c[1]]:[p,c[1]]:c[1]}i(l,n)}else t!=null&&o(n,t,s);return this}get(t,n){if(t=H(t),t){const s=a.findKey(this,t);if(s){const r=this[s];if(!n)return r;if(n===!0)return In(r);if(a.isFunction(n))return n.call(this,r,s);if(a.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const s=a.findKey(this,t);return!!(s&&this[s]!==void 0&&(!n||de(this,this[s],s,n)))}return!1}delete(t,n){const s=this;let r=!1;function o(i){if(i=H(i),i){const l=a.findKey(s,i);l&&(!n||de(s,s[l],l,n))&&(delete s[l],r=!0)}}return a.isArray(t)?t.forEach(o):o(t),r}clear(t){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const o=n[s];(!t||de(this,this[o],o,t,!0))&&(delete this[o],r=!0)}return r}normalize(t){const n=this,s={};return a.forEach(this,(r,o)=>{const i=a.findKey(s,o);if(i){n[i]=ee(r),delete n[o];return}const l=t?qn(o):String(o).trim();l!==o&&delete n[o],n[l]=ee(r),s[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=t&&a.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const s=new this(t);return n.forEach(r=>s.set(r)),s}static accessor(t){const s=(this[Ue]=this[Ue]={accessors:{}}).accessors,r=this.prototype;function o(i){const l=H(i);s[l]||($n(r,i),s[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};O.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(O.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[n]=s}}});a.freezeMethods(O);function fe(e,t){const n=this||W,s=t||n,r=O.from(s.headers);let o=s.data;return a.forEach(e,function(l){o=l.call(n,o,r.normalize(),t?t.status:void 0)}),r.normalize(),o}function ut(e){return!!(e&&e.__CANCEL__)}let K=class extends b{constructor(t,n,s){super(t??"canceled",b.ERR_CANCELED,n,s),this.name="CanceledError",this.__CANCEL__=!0}};function dt(e,t,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function zn(e,t){e=e||10;const n=new Array(e),s=new Array(e);let r=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const d=Date.now(),c=s[o];i||(i=d),n[r]=p,s[r]=d;let m=o,g=0;for(;m!==r;)g+=n[m++],m=m%e;if(r=(r+1)%e,r===o&&(o=(o+1)%e),d-i<t)return;const v=c&&d-c;return v?Math.round(g*1e3/v):void 0}}function Jn(e,t){let n=0,s=1e3/t,r,o;const i=(d,c=Date.now())=>{n=c,r=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const c=Date.now(),m=c-n;m>=s?i(d,c):(r=d,o||(o=setTimeout(()=>{o=null,i(r)},s-m)))},()=>r&&i(r)]}const ne=(e,t,n=3)=>{let s=0;const r=zn(50,250);return Jn(o=>{const i=o.loaded,l=o.lengthComputable?o.total:void 0,p=i-s,d=r(p),c=i<=l;s=i;const m={loaded:i,total:l,progress:l?i/l:void 0,bytes:p,rate:d||void 0,estimated:d&&l&&c?(l-i)/d:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(m)},n)},De=(e,t)=>{const n=e!=null;return[s=>t[0]({lengthComputable:n,total:e,loaded:s}),t[1]]},Me=e=>(...t)=>a.asap(()=>e(...t)),Vn=S.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,S.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(S.origin),S.navigator&&/(msie|trident)/i.test(S.navigator.userAgent)):()=>!0,Wn=S.hasStandardBrowserEnv?{write(e,t,n,s,r,o,i){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];a.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),a.isString(s)&&l.push(`path=${s}`),a.isString(r)&&l.push(`domain=${r}`),o===!0&&l.push("secure"),a.isString(i)&&l.push(`SameSite=${i}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Kn(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Xn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ft(e,t,n){let s=!Kn(t);return e&&(s||n==!1)?Xn(e,t):t}const Ie=e=>e instanceof O?{...e}:e;function M(e,t){t=t||{};const n={};function s(d,c,m,g){return a.isPlainObject(d)&&a.isPlainObject(c)?a.merge.call({caseless:g},d,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function r(d,c,m,g){if(a.isUndefined(c)){if(!a.isUndefined(d))return s(void 0,d,m,g)}else return s(d,c,m,g)}function o(d,c){if(!a.isUndefined(c))return s(void 0,c)}function i(d,c){if(a.isUndefined(c)){if(!a.isUndefined(d))return s(void 0,d)}else return s(void 0,c)}function l(d,c,m){if(m in t)return s(d,c);if(m in e)return s(void 0,d)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(d,c,m)=>r(Ie(d),Ie(c),m,!0)};return a.forEach(Object.keys({...e,...t}),function(c){if(c==="__proto__"||c==="constructor"||c==="prototype")return;const m=a.hasOwnProp(p,c)?p[c]:r,g=m(e[c],t[c],c);a.isUndefined(g)&&m!==l||(n[c]=g)}),n}const pt=e=>{const t=M({},e);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:o,headers:i,auth:l}=t;if(t.headers=i=O.from(i),t.url=lt(ft(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&i.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),a.isFormData(n)){if(S.hasStandardBrowserEnv||S.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(a.isFunction(n.getHeaders)){const p=n.getHeaders(),d=["content-type","content-length"];Object.entries(p).forEach(([c,m])=>{d.includes(c.toLowerCase())&&i.set(c,m)})}}if(S.hasStandardBrowserEnv&&(s&&a.isFunction(s)&&(s=s(t)),s||s!==!1&&Vn(t.url))){const p=r&&o&&Wn.read(o);p&&i.set(r,p)}return t},Zn=typeof XMLHttpRequest<"u",Gn=Zn&&function(e){return new Promise(function(n,s){const r=pt(e);let o=r.data;const i=O.from(r.headers).normalize();let{responseType:l,onUploadProgress:p,onDownloadProgress:d}=r,c,m,g,v,u;function h(){v&&v(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(c),r.signal&&r.signal.removeEventListener("abort",c)}let f=new XMLHttpRequest;f.open(r.method.toUpperCase(),r.url,!0),f.timeout=r.timeout;function w(){if(!f)return;const E=O.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:E,config:e,request:f};dt(function(A){n(A),h()},function(A){s(A),h()},k),f=null}"onloadend"in f?f.onloadend=w:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(w)},f.onabort=function(){f&&(s(new b("Request aborted",b.ECONNABORTED,e,f)),f=null)},f.onerror=function(x){const k=x&&x.message?x.message:"Network Error",P=new b(k,b.ERR_NETWORK,e,f);P.event=x||null,s(P),f=null},f.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const k=r.transitional||Ee;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),s(new b(x,k.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,f)),f=null},o===void 0&&i.setContentType(null),"setRequestHeader"in f&&a.forEach(i.toJSON(),function(x,k){f.setRequestHeader(k,x)}),a.isUndefined(r.withCredentials)||(f.withCredentials=!!r.withCredentials),l&&l!=="json"&&(f.responseType=r.responseType),d&&([g,u]=ne(d,!0),f.addEventListener("progress",g)),p&&f.upload&&([m,v]=ne(p),f.upload.addEventListener("progress",m),f.upload.addEventListener("loadend",v)),(r.cancelToken||r.signal)&&(c=E=>{f&&(s(!E||E.type?new K(null,e,f):E),f.abort(),f=null)},r.cancelToken&&r.cancelToken.subscribe(c),r.signal&&(r.signal.aborted?c():r.signal.addEventListener("abort",c)));const T=Hn(r.url);if(T&&S.protocols.indexOf(T)===-1){s(new b("Unsupported protocol "+T+":",b.ERR_BAD_REQUEST,e));return}f.send(o||null)})},Yn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let s=new AbortController,r;const o=function(d){if(!r){r=!0,l();const c=d instanceof Error?d:this.reason;s.abort(c instanceof b?c:new K(c instanceof Error?c.message:c))}};let i=t&&setTimeout(()=>{i=null,o(new b(`timeout of ${t}ms exceeded`,b.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:p}=s;return p.unsubscribe=()=>a.asap(l),p}},Qn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let s=0,r;for(;s<n;)r=s+t,yield e.slice(s,r),s=r},es=async function*(e,t){for await(const n of ts(e))yield*Qn(n,t)},ts=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:s}=await t.read();if(n)break;yield s}}finally{await t.cancel()}},je=(e,t,n,s)=>{const r=es(e,t);let o=0,i,l=p=>{i||(i=!0,s&&s(p))};return new ReadableStream({async pull(p){try{const{done:d,value:c}=await r.next();if(d){l(),p.close();return}let m=c.byteLength;if(n){let g=o+=m;n(g)}p.enqueue(new Uint8Array(c))}catch(d){throw l(d),d}},cancel(p){return l(p),r.return()}},{highWaterMark:2})},qe=64*1024,{isFunction:Y}=a,ns=(({Request:e,Response:t})=>({Request:e,Response:t}))(a.global),{ReadableStream:$e,TextEncoder:He}=a.global,ze=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ss=e=>{e=a.merge.call({skipUndefined:!0},ns,e);const{fetch:t,Request:n,Response:s}=e,r=t?Y(t):typeof fetch=="function",o=Y(n),i=Y(s);if(!r)return!1;const l=r&&Y($e),p=r&&(typeof He=="function"?(u=>h=>u.encode(h))(new He):async u=>new Uint8Array(await new n(u).arrayBuffer())),d=o&&l&&ze(()=>{let u=!1;const h=new n(S.origin,{body:new $e,method:"POST",get duplex(){return u=!0,"half"}}).headers.has("Content-Type");return u&&!h}),c=i&&l&&ze(()=>a.isReadableStream(new s("").body)),m={stream:c&&(u=>u.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!m[u]&&(m[u]=(h,f)=>{let w=h&&h[u];if(w)return w.call(h);throw new b(`Response type '${u}' is not supported`,b.ERR_NOT_SUPPORT,f)})});const g=async u=>{if(u==null)return 0;if(a.isBlob(u))return u.size;if(a.isSpecCompliantForm(u))return(await new n(S.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(a.isArrayBufferView(u)||a.isArrayBuffer(u))return u.byteLength;if(a.isURLSearchParams(u)&&(u=u+""),a.isString(u))return(await p(u)).byteLength},v=async(u,h)=>{const f=a.toFiniteNumber(u.getContentLength());return f??g(h)};return async u=>{let{url:h,method:f,data:w,signal:T,cancelToken:E,timeout:x,onDownloadProgress:k,onUploadProgress:P,responseType:A,headers:le,withCredentials:X="same-origin",fetchOptions:Ce}=pt(u),Oe=t||fetch;A=A?(A+"").toLowerCase():"text";let Z=Yn([T,E&&E.toAbortSignal()],x),$=null;const B=Z&&Z.unsubscribe&&(()=>{Z.unsubscribe()});let Te;try{if(P&&d&&f!=="get"&&f!=="head"&&(Te=await v(le,w))!==0){let _=new n(h,{method:"POST",body:w,duplex:"half"}),I;if(a.isFormData(w)&&(I=_.headers.get("content-type"))&&le.setContentType(I),_.body){const[ce,G]=De(Te,ne(Me(P)));w=je(_.body,qe,ce,G)}}a.isString(X)||(X=X?"include":"omit");const R=o&&"credentials"in n.prototype,Ae={...Ce,signal:Z,method:f.toUpperCase(),headers:le.normalize().toJSON(),body:w,duplex:"half",credentials:R?X:void 0};$=o&&new n(h,Ae);let N=await(o?Oe($,Ce):Oe(h,Ae));const Le=c&&(A==="stream"||A==="response");if(c&&(k||Le&&B)){const _={};["status","statusText","headers"].forEach(ke=>{_[ke]=N[ke]});const I=a.toFiniteNumber(N.headers.get("content-length")),[ce,G]=k&&De(I,ne(Me(k),!0))||[];N=new s(je(N.body,qe,ce,()=>{G&&G(),B&&B()}),_)}A=A||"text";let Et=await m[a.findKey(m,A)||"text"](N,u);return!Le&&B&&B(),await new Promise((_,I)=>{dt(_,I,{data:Et,headers:O.from(N.headers),status:N.status,statusText:N.statusText,config:u,request:$})})}catch(R){throw B&&B(),R&&R.name==="TypeError"&&/Load failed|fetch/i.test(R.message)?Object.assign(new b("Network Error",b.ERR_NETWORK,u,$,R&&R.response),{cause:R.cause||R}):b.from(R,R&&R.code,u,$,R&&R.response)}}},rs=new Map,mt=e=>{let t=e&&e.env||{};const{fetch:n,Request:s,Response:r}=t,o=[s,r,n];let i=o.length,l=i,p,d,c=rs;for(;l--;)p=o[l],d=c.get(p),d===void 0&&c.set(p,d=l?new Map:ss(t)),c=d;return d};mt();const Se={http:vn,xhr:Gn,fetch:{get:mt}};a.forEach(Se,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Je=e=>`- ${e}`,os=e=>a.isFunction(e)||e===null||e===!1;function is(e,t){e=a.isArray(e)?e:[e];const{length:n}=e;let s,r;const o={};for(let i=0;i<n;i++){s=e[i];let l;if(r=s,!os(s)&&(r=Se[(l=String(s)).toLowerCase()],r===void 0))throw new b(`Unknown adapter '${l}'`);if(r&&(a.isFunction(r)||(r=r.get(t))))break;o[l||"#"+i]=r}if(!r){const i=Object.entries(o).map(([p,d])=>`adapter ${p} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=n?i.length>1?`since :
`+i.map(Je).join(`
`):" "+Je(i[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r}const ht={getAdapter:is,adapters:Se};function pe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new K(null,e)}function Ve(e){return pe(e),e.headers=O.from(e.headers),e.data=fe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ht.getAdapter(e.adapter||W.adapter,e)(e).then(function(s){return pe(e),s.data=fe.call(e,e.transformResponse,s),s.headers=O.from(s.headers),s},function(s){return ut(s)||(pe(e),s&&s.response&&(s.response.data=fe.call(e,e.transformResponse,s.response),s.response.headers=O.from(s.response.headers))),Promise.reject(s)})}const bt="1.13.6",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const We={};ae.transitional=function(t,n,s){function r(o,i){return"[Axios v"+bt+"] Transitional option '"+o+"'"+i+(s?". "+s:"")}return(o,i,l)=>{if(t===!1)throw new b(r(i," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!We[i]&&(We[i]=!0,console.warn(r(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};ae.spelling=function(t){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${t}`),!0)};function as(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let r=s.length;for(;r-- >0;){const o=s[r],i=t[o];if(i){const l=e[o],p=l===void 0||i(l,o,e);if(p!==!0)throw new b("option "+o+" must be "+p,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+o,b.ERR_BAD_OPTION)}}const te={assertOptions:as,validators:ae},L=te.validators;let D=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Be,response:new Be}}async request(t,n){try{return await this._request(t,n)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const o=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?o&&!String(s.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+o):s.stack=o}catch{}}throw s}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=M(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:o}=n;s!==void 0&&te.assertOptions(s,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean),legacyInterceptorReqResOrdering:L.transitional(L.boolean)},!1),r!=null&&(a.isFunction(r)?n.paramsSerializer={serialize:r}:te.assertOptions(r,{encode:L.function,serialize:L.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),te.assertOptions(n,{baseUrl:L.spelling("baseURL"),withXsrfToken:L.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=O.concat(i,o);const l=[];let p=!0;this.interceptors.request.forEach(function(h){if(typeof h.runWhen=="function"&&h.runWhen(n)===!1)return;p=p&&h.synchronous;const f=n.transitional||Ee;f&&f.legacyInterceptorReqResOrdering?l.unshift(h.fulfilled,h.rejected):l.push(h.fulfilled,h.rejected)});const d=[];this.interceptors.response.forEach(function(h){d.push(h.fulfilled,h.rejected)});let c,m=0,g;if(!p){const u=[Ve.bind(this),void 0];for(u.unshift(...l),u.push(...d),g=u.length,c=Promise.resolve(n);m<g;)c=c.then(u[m++],u[m++]);return c}g=l.length;let v=n;for(;m<g;){const u=l[m++],h=l[m++];try{v=u(v)}catch(f){h.call(this,f);break}}try{c=Ve.call(this,v)}catch(u){return Promise.reject(u)}for(m=0,g=d.length;m<g;)c=c.then(d[m++],d[m++]);return c}getUri(t){t=M(this.defaults,t);const n=ft(t.baseURL,t.url,t.allowAbsoluteUrls);return lt(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,s){return this.request(M(s||{},{method:t,url:n,data:(s||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(s){return function(o,i,l){return this.request(M(l||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});let ls=class gt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const s=this;this.promise.then(r=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](r);s._listeners=null}),this.promise.then=r=>{let o;const i=new Promise(l=>{s.subscribe(l),o=l}).then(r);return i.cancel=function(){s.unsubscribe(o)},i},t(function(o,i,l){s.reason||(s.reason=new K(o,i,l),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=s=>{t.abort(s)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new gt(function(r){t=r}),cancel:t}}};function cs(e){return function(n){return e.apply(null,n)}}function us(e){return a.isObject(e)&&e.isAxiosError===!0}const ge={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ge).forEach(([e,t])=>{ge[t]=e});function yt(e){const t=new D(e),n=Ge(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return yt(M(e,r))},n}const y=yt(W);y.Axios=D;y.CanceledError=K;y.CancelToken=ls;y.isCancel=ut;y.VERSION=bt;y.toFormData=ie;y.AxiosError=b;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=cs;y.isAxiosError=us;y.mergeConfig=M;y.AxiosHeaders=O;y.formToJSON=e=>ct(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=ht.getAdapter;y.HttpStatusCode=ge;y.default=y;const{Axios:Ns,AxiosError:_s,CanceledError:Ps,isCancel:Bs,CancelToken:Us,VERSION:Ds,all:Ms,Cancel:Is,isAxiosError:js,spread:qs,toFormData:$s,AxiosHeaders:Hs,HttpStatusCode:zs,formToJSON:Js,getAdapter:Vs,mergeConfig:Ws}=y,ds=(e,t)=>{localStorage.setItem("token",e),localStorage.setItem("user",JSON.stringify(t))},xe=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},fs=async(e,t)=>{const n=new FormData;n.set("email",e),n.set("password",t),await y.post("/api/login.php",n,{headers:{"Content-Type":"multipart/form-data"}}).then(s=>{ds(s.data.token,s.data.user),Ft("Login Successfully"),setTimeout(()=>{Re(s.data.user.role)},2e3)}).catch(s=>{console.log(s.response.data),Lt(s.response.data.message)})},ps=()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.href="/login"},Re=e=>{switch(e){case"admin":window.location.href="/admin/dashboard";break;case"instructor":window.location.href="/instructor/dashboard";break;case"student":window.location.href="/student/dashboard";break;default:window.location.href="/login"}},Ke=()=>{const e=document.querySelector("#loginForm");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=document.querySelector("#email"),s=document.querySelector("#password"),r=n.value.trim(),o=s.value.trim();let i=!0;!r||!ms(r)?(n.classList.add("is-invalid"),i=!1):n.classList.remove("is-invalid"),o?s.classList.remove("is-invalid"):(s.classList.add("is-invalid"),i=!1),i&&await fs(r,o)})},ms=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),hs=()=>{const e=document.querySelector("#logoutBtn");e&&e.addEventListener("click",t=>{t.preventDefault(),ps()})},bs=String.raw,gs=()=>{const e=xe();return e?(Re(e.role),""):bs`
    <h4 class="mb-2">Welcome to LMS! 👋</h4>

    <p class="mb-4">
      Please sign-in to your account and start the adventure
    </p>

    <form id="loginForm" class="mb-3">
      <div class="mb-3">
        <label for="email" class="form-label"
          >Email or Username</label
        >
        <input
          type="text"
          class="form-control"
          id="email"
          name="email-username"
          placeholder="Enter your email or username"
          autofocus
        />
      </div>
      <div class="mb-3 form-password-toggle">
        <div class="d-flex justify-content-between">
          <label class="form-label" for="password"
            >Password</label
          >
          <a href="/forget-password">
            <small>Forgot Password?</small>
          </a>
        </div>
        <div class="input-group input-group-merge">
          <input
            type="password"
            id="password"
            class="form-control"
            name="password"
            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
            aria-describedby="password"
          />
          <span class="input-group-text cursor-pointer"
            ><i class="bx bx-hide"></i
          ></span>
        </div>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="remember-me"
          />
          <label class="form-check-label" for="remember-me">
            Remember Me
          </label>
        </div>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-primary d-grid w-100"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>

    <p class="text-center">
      <span>New on our platform?</span>
      <a href="/register">
        <span>Create an account</span>
      </a>
    </p>
  `},ys=String.raw,ws=()=>{const e=xe();return e&&Re(e.role),ys` <h4 class="mb-2">
      Adventure starts here 🚀
    </h4>
    <p class="mb-4">
      Make your app management easy and fun!
    </p>

    <form id="formAuthentication" class="mb-3">
      <div class="mb-3">
        <label for="username" class="form-label"
          >Username</label
        >
        <input
          type="text"
          class="form-control"
          id="username"
          name="username"
          placeholder="Enter your username"
          autofocus
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-3 form-password-toggle">
        <label class="form-label" for="password"
          >Password</label
        >
        <div class="input-group input-group-merge">
          <input
            type="password"
            id="password"
            class="form-control"
            name="password"
            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
            aria-describedby="password"
          />
          <span class="input-group-text cursor-pointer"
            ><i class="bx bx-hide"></i
          ></span>
        </div>
      </div>

      <div class="mb-3">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="terms-conditions"
            name="terms"
          />
          <label
            class="form-check-label"
            for="terms-conditions"
          >
            I agree to
            <a href="javascript:void(0);"
              >privacy policy & terms</a
            >
          </label>
        </div>
      </div>
      <button class="btn btn-primary d-grid w-100">
        Sign up
      </button>
    </form>

    <p class="text-center">
      <span>Already have an account?</span>
      <a href="auth-login-basic.html">
        <span>Sign in instead</span>
      </a>
    </p>`},Es=String.raw,vs=()=>Es`
    <!-- Navbar -->
    <nav
      class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div
        class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
      >
        <a
          class="nav-item nav-link px-0 me-xl-4"
          href="javascript:void(0)"
        >
          <i class="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div
        class="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <!-- Search -->
        <div class="navbar-nav align-items-center">
          <div class="nav-item d-flex align-items-center">
            <i class="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              class="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        <!-- /Search -->

        <ul
          class="navbar-nav flex-row align-items-center ms-auto"
        >
          <!-- User -->
          <li
            class="nav-item navbar-dropdown dropdown-user dropdown"
          >
            <a
              class="nav-link dropdown-toggle hide-arrow"
              href="javascript:void(0);"
              data-bs-toggle="dropdown"
            >
              <div class="avatar avatar-online">
                <img
                  src="/assets/img/avatars/1.png"
                  alt
                  class="w-px-40 h-auto rounded-circle"
                />
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar avatar-online">
                        <img
                          src="/assets/img/avatars/1.png"
                          alt
                          class="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <span class="fw-semibold d-block"
                        >John Doe</span
                      >
                      <small class="text-muted"
                        >Admin</small
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-user me-2"></i>
                  <span class="align-middle"
                    >My Profile</span
                  >
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-cog me-2"></i>
                  <span class="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href=""
                  id="logoutBtn"
                >
                  <i class="bx bx-power-off me-2"></i>
                  <span class="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
          <!--/ User -->
        </ul>
      </div>
    </nav>
  `,Ss=String.raw,xs=()=>Ss`
  <!-- Menu -->

  <aside
    id="layout-menu"
    class="layout-menu menu-vertical menu bg-menu-theme"
  >
    <div class="app-brand demo">
      <a href="/" class="app-brand-link">
        <span class="app-brand-logo demo">
          <svg
            width="25"
            viewBox="0 0 25 42"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                id="path-1"
              ></path>
              <path
                d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                id="path-3"
              ></path>
              <path
                d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                id="path-4"
              ></path>
              <path
                d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                id="path-5"
              ></path>
            </defs>
            <g
              id="g-app-brand"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Brand-Logo"
                transform="translate(-27.000000, -15.000000)"
              >
                <g
                  id="Icon"
                  transform="translate(27.000000, 15.000000)"
                >
                  <g
                    id="Mask"
                    transform="translate(0.000000, 8.000000)"
                  >
                    <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                    </mask>
                    <use
                      fill="#696cff"
                      xlink:href="#path-1"
                    ></use>
                    <g id="Path-3" mask="url(#mask-2)">
                      <use
                        fill="#696cff"
                        xlink:href="#path-3"
                      ></use>
                      <use
                        fill-opacity="0.2"
                        fill="#FFFFFF"
                        xlink:href="#path-3"
                      ></use>
                    </g>
                    <g id="Path-4" mask="url(#mask-2)">
                      <use
                        fill="#696cff"
                        xlink:href="#path-4"
                      ></use>
                      <use
                        fill-opacity="0.2"
                        fill="#FFFFFF"
                        xlink:href="#path-4"
                      ></use>
                    </g>
                  </g>
                  <g
                    id="Triangle"
                    transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                  >
                    <use
                      fill="#696cff"
                      xlink:href="#path-5"
                    ></use>
                    <use
                      fill-opacity="0.2"
                      fill="#FFFFFF"
                      xlink:href="#path-5"
                    ></use>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </span>
        <span
          class="app-brand-text text-capitalize demo menu-text fw-bolder ms-2"
          >LMS</span
        >
      </a>

      <a
        href="javascript:void(0);"
        class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
      >
        <i
          class="bx bx-chevron-left bx-sm align-middle"
        ></i>
      </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <!-- Dashboard -->
      <li class="menu-item active">
        <a href="/admin/dashboard" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </a>
      </li>

      <!-- Tables -->
      <li class="menu-item">
        <a href="/admin/students" class="menu-link">
          <i class="menu-icon tf-icons bx bx-group"></i>
          <div data-i18n="Students">Students</div>
        </a>
      </li>
    </ul>
  </aside>
  <!-- / Menu -->
`,Rs=String.raw,Cs=e=>Rs`
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <!-- Menu -->

        ${xs()}
        <!-- / Menu -->
        <!-- Layout container -->
        <div class="layout-page">
          ${vs()}
          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->

            <div
              class="container-xxl flex-grow-1 container-p-y"
            >
              ${e}
            </div>
          </div>
        </div>
      </div>

      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
  `,Os=String.raw,Xe=e=>Os` <div class="container-xxl">
    <div
      class="authentication-wrapper authentication-basic container-p-y"
    >
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">
              <a href="/" class="app-brand-link gap-2">
                <span class="app-brand-logo demo">
                  <svg
                    width="25"
                    viewBox="0 0 25 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path
                        d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                        id="path-1"
                      ></path>
                      <path
                        d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                        id="path-3"
                      ></path>
                      <path
                        d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                        id="path-4"
                      ></path>
                      <path
                        d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                        id="path-5"
                      ></path>
                    </defs>
                    <g
                      id="g-app-brand"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Brand-Logo"
                        transform="translate(-27.000000, -15.000000)"
                      >
                        <g
                          id="Icon"
                          transform="translate(27.000000, 15.000000)"
                        >
                          <g
                            id="Mask"
                            transform="translate(0.000000, 8.000000)"
                          >
                            <mask id="mask-2" fill="white">
                              <use
                                xlink:href="#path-1"
                              ></use>
                            </mask>
                            <use
                              fill="#696cff"
                              xlink:href="#path-1"
                            ></use>
                            <g
                              id="Path-3"
                              mask="url(#mask-2)"
                            >
                              <use
                                fill="#696cff"
                                xlink:href="#path-3"
                              ></use>
                              <use
                                fill-opacity="0.2"
                                fill="#FFFFFF"
                                xlink:href="#path-3"
                              ></use>
                            </g>
                            <g
                              id="Path-4"
                              mask="url(#mask-2)"
                            >
                              <use
                                fill="#696cff"
                                xlink:href="#path-4"
                              ></use>
                              <use
                                fill-opacity="0.2"
                                fill="#FFFFFF"
                                xlink:href="#path-4"
                              ></use>
                            </g>
                          </g>
                          <g
                            id="Triangle"
                            transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                          >
                            <use
                              fill="#696cff"
                              xlink:href="#path-5"
                            ></use>
                            <use
                              fill-opacity="0.2"
                              fill="#FFFFFF"
                              xlink:href="#path-5"
                            ></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span
                  class="app-brand-text demo text-capitalize text-body fw-bolder"
                  >LMS</span
                >
              </a>
            </div>
            <!-- /Logo -->
            ${e}
          </div>
        </div>
        <!-- /Register -->
      </div>
    </div>
  </div>`,Ts=[{path:"/admin/dashboard",roles:["admin"],component:()=>Cs(Tt()),events:Ct},{path:"/instructor/dashboard",roles:["instructor"],component:()=>"<h1>Instructor Dashboard</h1>"},{path:"/student/dashboard",roles:["student"],component:()=>"<h1>Student Dashboard</h1>"},{path:"/login",roles:["public"],component:()=>Xe(gs()),events:Ke},{path:"/register",roles:["public"],component:()=>Xe(ws()),events:Ke}],wt=()=>{const e=window.location.pathname,t=xe(),n=document.getElementById("app");if(e==="/"){window.location.replace(t?`/${t.role}/dashboard`:"/login");return}const s=Ts.find(r=>r.path===e);if(!s){n.innerHTML=St();return}if(s.roles.includes("public")){if(t){window.location.replace(`/${t.role}/dashboard`);return}Ze(n,s);return}if(!t){window.location.replace("/login");return}if(!s.roles.includes(t.role)){n.innerHTML="<h1>403 Forbidden</h1>";return}Ze(n,s)},Ze=(e,t)=>{e.innerHTML=t.component(),As(),t.events&&t.events(),hs()},As=()=>{const e=document.querySelectorAll(".layout-menu-toggle"),t=document.querySelector(".layout-overlay");e.forEach(n=>{n.addEventListener("click",()=>{document.documentElement.classList.toggle("layout-menu-expanded"),t&&t.classList.toggle("d-block")})}),t&&t.addEventListener("click",()=>{document.documentElement.classList.remove("layout-menu-expanded"),t.classList.remove("d-block")})};window.addEventListener("popstate",wt);document.addEventListener("DOMContentLoaded",wt);
