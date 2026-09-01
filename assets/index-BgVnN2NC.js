const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./plannerMap-Box1mzen.js","./plannerMap-GRinvwPn.css"])))=>i.map(i=>d[i]);
var Ap=Object.defineProperty;var Rp=(n,e,t)=>e in n?Ap(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Qe=(n,e,t)=>Rp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="166",yp=0,ah=1,Tp=2,pd=1,bp=2,qn=3,Ri=0,Yt=1,Tn=2,Dt=0,Ws=1,lh=2,ch=3,Ll=4,md=5,bn=100,wp=101,Cp=102,Np=103,Ip=104,Mr=200,Dp=201,Lp=202,Pp=203,Pl=204,Ol=205,Ul=206,Op=207,Fl=208,Up=209,Fp=210,kp=211,Bp=212,Gp=213,zp=214,Hp=0,Vp=1,Wp=2,Yo=3,Xp=4,$p=5,Kp=6,Yp=7,Lc=0,qp=1,Zp=2,Jn=0,_d=1,gd=2,Md=3,Ed=4,jp=5,vd=6,xd=7,Sd=300,qs=301,Zs=302,kl=303,Bl=304,ua=306,Qi=1e3,Hi=1001,Gl=1002,zt=1003,Jp=1004,Xr=1005,Zt=1006,ba=1007,Vi=1008,Un=1009,Ad=1010,Rd=1011,Dr=1012,Pc=1013,es=1014,On=1015,Qn=1016,Oc=1017,Uc=1018,ts=1020,yd=35902,Td=1021,bd=1022,_n=1023,wd=1024,Cd=1025,Xs=1026,ns=1027,Fc=1028,kc=1029,Nd=1030,Bc=1031,Gc=1033,Lo=33776,Po=33777,Oo=33778,Uo=33779,zl=35840,Hl=35841,Vl=35842,Wl=35843,Xl=36196,$l=37492,Kl=37496,Yl=37808,ql=37809,Zl=37810,jl=37811,Jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,Fo=36492,lc=36494,cc=36495,Id=36283,hc=36284,uc=36285,dc=36286,Qp=3200,em=3201,zc=0,tm=1,_i="",an="srgb",Ti="srgb-linear",Hc="display-p3",da="display-p3-linear",qo="linear",pt="srgb",Zo="rec709",jo="p3",as=7680,hh=519,nm=512,im=513,sm=514,Dd=515,rm=516,om=517,am=518,lm=519,uh=35044,fc=35048,dh="300 es",Zn=2e3,Jo=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fh=1234567;const Rr=Math.PI/180,Lr=180/Math.PI;function er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function Vc(n,e){return(n%e+e)%e}function cm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function hm(n,e,t){return n!==e?(t-n)/(e-n):0}function yr(n,e,t){return(1-t)*n+t*e}function um(n,e,t,i){return yr(n,e,1-Math.exp(-t*i))}function dm(n,e=1){return e-Math.abs(Vc(n,e*2)-e)}function fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _m(n,e){return n+Math.random()*(e-n)}function gm(n){return n*(.5-Math.random())}function Mm(n){n!==void 0&&(fh=n);let e=fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Em(n){return n*Rr}function vm(n){return n*Lr}function xm(n){return(n&n-1)===0&&n!==0}function Sm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Am(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rm(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wa={DEG2RAD:Rr,RAD2DEG:Lr,generateUUID:er,clamp:$t,euclideanModulo:Vc,mapLinear:cm,inverseLerp:hm,lerp:yr,damp:um,pingpong:dm,smoothstep:fm,smootherstep:pm,randInt:mm,randFloat:_m,randFloatSpread:gm,seededRandom:Mm,degToRad:Em,radToDeg:vm,isPowerOfTwo:xm,ceilPowerOfTwo:Sm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:Rm,normalize:Wt,denormalize:Fs};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,s,r,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],M=s[0],m=s[3],p=s[6],S=s[1],v=s[4],x=s[7],L=s[2],R=s[5],A=s[8];return r[0]=o*M+a*S+l*L,r[3]=o*m+a*v+l*R,r[6]=o*p+a*x+l*A,r[1]=c*M+h*S+u*L,r[4]=c*m+h*v+u*R,r[7]=c*p+h*x+u*A,r[2]=d*M+f*S+_*L,r[5]=d*m+f*v+_*R,r[8]=d*p+f*x+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=t*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=u*M,e[1]=(s*c-h*i)*M,e[2]=(a*i-s*o)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=f*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new st;function Ld(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ym(){const n=Qo("canvas");return n.style.display="block",n}const ph={};function Pd(n){n in ph||(ph[n]=!0,console.warn(n))}function Tm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const mh=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_h=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[Ti]:{transfer:qo,primaries:Zo,toReference:n=>n,fromReference:n=>n},[an]:{transfer:pt,primaries:Zo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[da]:{transfer:qo,primaries:jo,toReference:n=>n.applyMatrix3(_h),fromReference:n=>n.applyMatrix3(mh)},[Hc]:{transfer:pt,primaries:jo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(_h),fromReference:n=>n.applyMatrix3(mh).convertLinearToSRGB()}},bm=new Set([Ti,da]),dt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=$r[e].toReference,s=$r[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $r[n].primaries},getTransfer:function(n){return n===_i?qo:$r[n].transfer}};function $s(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Na(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class wm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Qo("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$s(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($s(t[i]/255)*255):t[i]=$s(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cm=0;class Od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ia(s[o].image)):r.push(Ia(s[o]))}else r=Ia(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nm=0;class Ht extends Qs{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Hi,s=Hi,r=Zt,o=Vi,a=_n,l=Un,c=Ht.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=er(),this.name="",this.source=new Od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Sd;Ht.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(f+1)/2,L=(p+1)/2,R=(h+d)/4,A=(u+M)/4,w=(_+m)/4;return v>x&&v>L?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=A/i):x>L?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=w/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=w/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-M)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Im extends Qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ht(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Od(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Im{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ud extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dm extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=M;return}if(u!==M||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*M,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const L=Math.sqrt(v),R=Math.atan2(L,p*S);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const x=a*S;if(l=l*m+d*x,c=c*m+f*x,h=h*m+_*x,u=u*m+M*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,i=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new ue,gh=new Bn;class ss{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kr.copy(i.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Yr.subVectors(this.max,or),cs.subVectors(e.a,or),hs.subVectors(e.b,or),us.subVectors(e.c,or),ii.subVectors(hs,cs),si.subVectors(us,hs),wi.subVectors(cs,us);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-wi.z,wi.y,ii.z,0,-ii.x,si.z,0,-si.x,wi.z,0,-wi.x,-ii.y,ii.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!La(t,cs,hs,us,Yr)||(t=[1,0,0,0,1,0,0,0,1],!La(t,cs,hs,us,Yr))?!1:(qr.crossVectors(ii,si),t=[qr.x,qr.y,qr.z],La(t,cs,hs,us,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],En=new ue,Kr=new ss,cs=new ue,hs=new ue,us=new ue,ii=new ue,si=new ue,wi=new ue,or=new ue,Yr=new ue,qr=new ue,Ci=new ue;function La(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ci.fromArray(n,r);const a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),h=i.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Lm=new ss,ar=new ue,Pa=new ue;class rs{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Pa)),this.expandByPoint(ar.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new ue,Oa=new ue,Zr=new ue,ri=new ue,Ua=new ue,jr=new ue,Fa=new ue;class Pm{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Oa.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=ri.dot(this.direction),l=-ri.dot(Zr),c=ri.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const M=1/h;u*=M,d*=M,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oa).addScaledVector(Zr,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){Ua.subVectors(t,e),jr.subVectors(i,e),Fa.crossVectors(Ua,jr);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(jr.crossVectors(ri,jr));if(l<0)return null;const c=a*this.direction.dot(Ua.cross(ri));if(c<0||l+c>o)return null;const h=-a*ri.dot(Fa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,_,M,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,_,M,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,_,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,_=a*h,M=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,_=c*h,M=c*u;t[0]=d+M*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,_=c*h,M=c*u;t[0]=d-M*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,_=a*h,M=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+M,t[1]=l*u,t[5]=M*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,M=a*c;t[0]=l*h,t[4]=M-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-M*u}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,M=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+M,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Om,e,Um)}lookAt(e,t,i){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),oi.crossVectors(i,Qt),oi.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),oi.crossVectors(i,Qt)),oi.normalize(),Jr.crossVectors(Qt,oi),s[0]=oi.x,s[4]=Jr.x,s[8]=Qt.x,s[1]=oi.y,s[5]=Jr.y,s[9]=Qt.y,s[2]=oi.z,s[6]=Jr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],M=i[6],m=i[10],p=i[14],S=i[3],v=i[7],x=i[11],L=i[15],R=s[0],A=s[4],w=s[8],y=s[12],E=s[1],T=s[5],P=s[9],z=s[13],O=s[2],B=s[6],V=s[10],ee=s[14],Y=s[3],j=s[7],J=s[11],he=s[15];return r[0]=o*R+a*E+l*O+c*Y,r[4]=o*A+a*T+l*B+c*j,r[8]=o*w+a*P+l*V+c*J,r[12]=o*y+a*z+l*ee+c*he,r[1]=h*R+u*E+d*O+f*Y,r[5]=h*A+u*T+d*B+f*j,r[9]=h*w+u*P+d*V+f*J,r[13]=h*y+u*z+d*ee+f*he,r[2]=_*R+M*E+m*O+p*Y,r[6]=_*A+M*T+m*B+p*j,r[10]=_*w+M*P+m*V+p*J,r[14]=_*y+M*z+m*ee+p*he,r[3]=S*R+v*E+x*O+L*Y,r[7]=S*A+v*T+x*B+L*j,r[11]=S*w+v*P+x*V+L*J,r[15]=S*y+v*z+x*ee+L*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],M=e[7],m=e[11],p=e[15];return _*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+M*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],M=e[13],m=e[14],p=e[15],S=u*m*c-M*d*c+M*l*f-a*m*f-u*l*p+a*d*p,v=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,x=h*M*c-_*u*c+_*a*f-o*M*f-h*a*p+o*u*p,L=_*u*l-h*M*l-_*a*d+o*M*d+h*a*m-o*u*m,R=t*S+i*v+s*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=S*A,e[1]=(M*d*r-u*m*r-M*s*f+i*m*f+u*s*p-i*d*p)*A,e[2]=(a*m*r-M*l*r+M*s*c-i*m*c-a*s*p+i*l*p)*A,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*A,e[4]=v*A,e[5]=(h*m*r-_*d*r+_*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*p-t*l*p)*A,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=x*A,e[9]=(_*u*r-h*M*r-_*i*f+t*M*f+h*i*p-t*u*p)*A,e[10]=(o*M*r-_*a*r+_*i*c-t*M*c-o*i*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*A,e[12]=L*A,e[13]=(h*M*s-_*u*s+_*i*d-t*M*d-h*i*m+t*u*m)*A,e[14]=(_*a*s-o*M*s-_*i*l+t*M*l+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,M=o*h,m=o*u,p=a*u,S=l*c,v=l*h,x=l*u,L=i.x,R=i.y,A=i.z;return s[0]=(1-(M+p))*L,s[1]=(f+x)*L,s[2]=(_-v)*L,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(_+v)*A,s[9]=(m-S)*A,s[10]=(1-(d+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Zn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,_;if(a===Zn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Jo)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Zn){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h;let _,M;if(a===Zn)_=(o+r)*u,M=-2*u;else if(a===Jo)_=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ds=new ue,vn=new at,Om=new ue(0,0,0),Um=new ue(1,1,1),oi=new ue,Jr=new ue,Qt=new ue,Mh=new at,Eh=new Bn;class Fn{constructor(e=0,t=0,i=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fm=0;const vh=new ue,fs=new Bn,Hn=new at,Qr=new ue,lr=new ue,km=new ue,Bm=new Bn,xh=new ue(1,0,0),Sh=new ue(0,1,0),Ah=new ue(0,0,1),Rh={type:"added"},Gm={type:"removed"},ps={type:"childadded",child:null},ka={type:"childremoved",child:null};class Ot extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new ue,t=new Fn,i=new Bn,s=new ue(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new st}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qr.copy(e):Qr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(lr,Qr,this.up):Hn.lookAt(Qr,lr,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Hn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gm),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new ue(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new ue,Vn=new ue,Ba=new ue,Wn=new ue,ms=new ue,_s=new ue,yh=new ue,Ga=new ue,za=new ue,Ha=new ue;class Pn{constructor(e=new ue,t=new ue,i=new ue){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Vn.subVectors(i,t),Ba.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Vn),l=xn.dot(Ba),c=Vn.dot(Vn),h=Vn.dot(Ba),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Vn.subVectors(e,t),xn.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),xn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ms.subVectors(s,i),_s.subVectors(r,i),Ga.subVectors(e,i);const l=ms.dot(Ga),c=_s.dot(Ga);if(l<=0&&c<=0)return t.copy(i);za.subVectors(e,s);const h=ms.dot(za),u=_s.dot(za);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ms,o);Ha.subVectors(e,r);const f=ms.dot(Ha),_=_s.dot(Ha);if(_>=0&&f<=_)return t.copy(r);const M=f*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(_s,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return yh.subVectors(r,s),a=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(yh,a);const p=1/(m+M+d);return o=M*p,a=d*p,t.copy(i).addScaledVector(ms,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Vc(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Va(o,r,e+1/3),this.g=Va(o,r,e),this.b=Va(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=an){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return dt.fromWorkingColorSpace(Ft.copy(this),e),Math.round($t(Ft.r*255,0,255))*65536+Math.round($t(Ft.g*255,0,255))*256+Math.round($t(Ft.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=an){dt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,s=Ft.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(eo);const i=yr(ai.h,eo.h,t),s=yr(ai.s,eo.s,t),r=yr(ai.l,eo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Xe;Xe.NAMES=kd;let zm=0;class tr extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Ws,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Ol,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ol&&(i.blendDst=this.blendDst),this.blendEquation!==bn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class fa extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new ue,to=new et;class ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}}class Bd extends ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gd extends ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hm=0;const un=new at,Wa=new Ot,gs=new ue,en=new ss,cr=new ss,wt=new ue;class xt extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Gd:Bd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(en.min,cr.min),en.expandByPoint(wt),wt.addVectors(en.max,cr.max),en.expandByPoint(wt)):(en.expandByPoint(cr.min),en.expandByPoint(cr.max))}en.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),wt.add(gs)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new ue,l[w]=new ue;const c=new ue,h=new ue,u=new ue,d=new et,f=new et,_=new et,M=new ue,m=new ue;function p(w,y,E){c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,E),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const T=1/(f.x*_.y-_.x*f.y);isFinite(T)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(T),a[w].add(M),a[y].add(M),a[E].add(M),l[w].add(m),l[y].add(m),l[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,y=S.length;w<y;++w){const E=S[w],T=E.start,P=E.count;for(let z=T,O=T+P;z<O;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new ue,x=new ue,L=new ue,R=new ue;function A(w){L.fromBufferAttribute(s,w),R.copy(L);const y=a[w];v.copy(y),v.sub(L.multiplyScalar(L.dot(y))).normalize(),x.crossVectors(R,y);const T=x.dot(l[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,T)}for(let w=0,y=S.length;w<y;++w){const E=S[w],T=E.start,P=E.count;for(let z=T,O=T+P;z<O;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new ue,r=new ue,o=new ue,a=new ue,l=new ue,c=new ue,h=new ue,u=new ue;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new at,Ni=new Pm,no=new rs,bh=new ue,Ms=new ue,Es=new ue,vs=new ue,Xa=new ue,io=new ue,so=new et,ro=new et,oo=new et,wh=new ue,Ch=new ue,Nh=new ue,ao=new ue,lo=new ue;class vt extends Ot{constructor(e=new xt,t=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Xa.fromBufferAttribute(u,e),o?io.addScaledVector(Xa,h):io.addScaledVector(Xa.sub(t),h))}t.add(io)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(no.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(no,bh)===null||Ni.origin.distanceToSquared(bh)>(e.far-e.near)**2))&&(Th.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,L=v;x<L;x+=3){const R=a.getX(x),A=a.getX(x+1),w=a.getX(x+2);s=co(this,p,e,i,c,h,u,R,A,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=co(this,o,e,i,c,h,u,S,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,L=v;x<L;x+=3){const R=x,A=x+1,w=x+2;s=co(this,p,e,i,c,h,u,R,A,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const S=m,v=m+1,x=m+2;s=co(this,o,e,i,c,h,u,S,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Vm(n,e,t,i,s,r,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ri,a),l===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ms),n.getVertexPosition(l,Es),n.getVertexPosition(c,vs);const h=Vm(n,e,t,i,Ms,Es,vs,ao);if(h){s&&(so.fromBufferAttribute(s,a),ro.fromBufferAttribute(s,l),oo.fromBufferAttribute(s,c),h.uv=Pn.getInterpolation(ao,Ms,Es,vs,so,ro,oo,new et)),r&&(so.fromBufferAttribute(r,a),ro.fromBufferAttribute(r,l),oo.fromBufferAttribute(r,c),h.uv1=Pn.getInterpolation(ao,Ms,Es,vs,so,ro,oo,new et)),o&&(wh.fromBufferAttribute(o,a),Ch.fromBufferAttribute(o,l),Nh.fromBufferAttribute(o,c),h.normal=Pn.getInterpolation(ao,Ms,Es,vs,wh,Ch,Nh,new ue),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new ue,materialIndex:0};Pn.getNormal(Ms,Es,vs,u.normal),h.face=u}return h}class nr extends xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function _(M,m,p,S,v,x,L,R,A,w,y){const E=x/A,T=L/w,P=x/2,z=L/2,O=R/2,B=A+1,V=w+1;let ee=0,Y=0;const j=new ue;for(let J=0;J<V;J++){const he=J*T-z;for(let Ae=0;Ae<B;Ae++){const pe=Ae*E-P;j[M]=pe*S,j[m]=he*v,j[p]=O,c.push(j.x,j.y,j.z),j[M]=0,j[m]=0,j[p]=R>0?1:-1,h.push(j.x,j.y,j.z),u.push(Ae/A),u.push(1-J/w),ee+=1}}for(let J=0;J<w;J++)for(let he=0;he<A;he++){const Ae=d+he+B*J,pe=d+he+B*(J+1),re=d+(he+1)+B*(J+1),X=d+(he+1)+B*J;l.push(Ae,pe,X),l.push(pe,re,X),Y+=6}a.addGroup(f,Y,y),f+=Y,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=js(n[t]);for(const s in i)e[s]=i[s]}return e}function Wm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const gi={clone:js,merge:Xt};var Xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xm,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new ue,Ih=new et,Dh=new et;class mn extends Hd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Ih,Dh),t.subVectors(Dh,Ih)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ss=1;class Km extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(xs,Ss,e,t);s.layers=this.layers,this.add(s);const r=new mn(xs,Ss,e,t);r.layers=this.layers,this.add(r);const o=new mn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const a=new mn(xs,Ss,e,t);a.layers=this.layers,this.add(a);const l=new mn(xs,Ss,e,t);l.layers=this.layers,this.add(l);const c=new mn(xs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Vd extends Ht{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ym extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nr(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Dt});r.uniforms.tEquirect.value=t;const o=new vt(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Zt),new Km(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const $a=new ue,qm=new ue,Zm=new st;class ki{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$a.subVectors(i,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($a),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zm.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new rs,ho=new ue;class Wc{constructor(e=new ki,t=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],M=s[10],m=s[11],p=s[12],S=s[13],v=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-f,x-p).normalize(),i[1].setComponents(l+r,d+c,m+f,x+p).normalize(),i[2].setComponents(l+o,d+h,m+_,x+S).normalize(),i[3].setComponents(l-o,d-h,m-_,x-S).normalize(),i[4].setComponents(l-a,d-u,m-M,x-v).normalize(),t===Zn)i[5].setComponents(l+a,d+u,m+M,x+v).normalize();else if(t===Jo)i[5].setComponents(a,u,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jm(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let f=0,_=d.length;f<_;f++){const M=d[f];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class kr extends xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],M=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let v=0;v<c;v++){const x=v*u-r;_.push(x,-S,0),M.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,x=S+c*(p+1),L=S+1+c*(p+1),R=S+1+c*p;f.push(v,x,R),f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(M,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,x0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,__=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,og=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Jm,alphahash_pars_fragment:Qm,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:s0,aomap_pars_fragment:r0,batching_pars_vertex:o0,batching_vertex:a0,begin_vertex:l0,beginnormal_vertex:c0,bsdfs:h0,iridescence_fragment:u0,bumpmap_pars_fragment:d0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:_0,color_fragment:g0,color_pars_fragment:M0,color_pars_vertex:E0,color_vertex:v0,common:x0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:y0,emissivemap_fragment:T0,emissivemap_pars_fragment:b0,colorspace_fragment:w0,colorspace_pars_fragment:C0,envmap_fragment:N0,envmap_common_pars_fragment:I0,envmap_pars_fragment:D0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:W0,envmap_vertex:P0,fog_vertex:O0,fog_pars_vertex:U0,fog_fragment:F0,fog_pars_fragment:k0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:G0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:H0,lights_pars_begin:V0,lights_toon_fragment:X0,lights_toon_pars_fragment:$0,lights_phong_fragment:K0,lights_phong_pars_fragment:Y0,lights_physical_fragment:q0,lights_physical_pars_fragment:Z0,lights_fragment_begin:j0,lights_fragment_maps:J0,lights_fragment_end:Q0,logdepthbuf_fragment:e_,logdepthbuf_pars_fragment:t_,logdepthbuf_pars_vertex:n_,logdepthbuf_vertex:i_,map_fragment:s_,map_pars_fragment:r_,map_particle_fragment:o_,map_particle_pars_fragment:a_,metalnessmap_fragment:l_,metalnessmap_pars_fragment:c_,morphinstance_vertex:h_,morphcolor_vertex:u_,morphnormal_vertex:d_,morphtarget_pars_vertex:f_,morphtarget_vertex:p_,normal_fragment_begin:m_,normal_fragment_maps:__,normal_pars_fragment:g_,normal_pars_vertex:M_,normal_vertex:E_,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:R_,opaque_fragment:y_,packing:T_,premultiplied_alpha_fragment:b_,project_vertex:w_,dithering_fragment:C_,dithering_pars_fragment:N_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:D_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:P_,shadowmap_vertex:O_,shadowmask_pars_fragment:U_,skinbase_vertex:F_,skinning_pars_vertex:k_,skinning_vertex:B_,skinnormal_vertex:G_,specularmap_fragment:z_,specularmap_pars_fragment:H_,tonemapping_fragment:V_,tonemapping_pars_fragment:W_,transmission_fragment:X_,transmission_pars_fragment:$_,uv_pars_fragment:K_,uv_pars_vertex:Y_,uv_vertex:q_,worldpos_vertex:Z_,background_vert:j_,background_frag:J_,backgroundCube_vert:Q_,backgroundCube_frag:eg,cube_vert:tg,cube_frag:ng,depth_vert:ig,depth_frag:sg,distanceRGBA_vert:rg,distanceRGBA_frag:og,equirect_vert:ag,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:hg,meshbasic_vert:ug,meshbasic_frag:dg,meshlambert_vert:fg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:_g,meshnormal_vert:gg,meshnormal_frag:Mg,meshphong_vert:Eg,meshphong_frag:vg,meshphysical_vert:xg,meshphysical_frag:Sg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:yg,points_frag:Tg,shadow_vert:bg,shadow_frag:wg,sprite_vert:Cg,sprite_frag:Ng},He={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Dn={basic:{uniforms:Xt([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Xt([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Xe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Xt([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Xt([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Xt([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Xe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Xt([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Xt([He.points,He.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Xt([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Xt([He.common,He.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Xt([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Xt([He.sprite,He.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Xt([He.common,He.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Xt([He.lights,He.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Dn.physical={uniforms:Xt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const uo={r:0,b:0,g:0},Di=new Fn,Ig=new at;function Dg(n,e,t,i,s,r,o){const a=new Xe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function M(S){let v=!1;const x=_(S);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,v){const x=_(v);x&&(x.isCubeTexture||x.mapping===ua)?(h===void 0&&(h=new vt(new nr(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:js(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(v.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Di)),h.material.toneMapped=dt.getTransfer(x.colorSpace)!==pt,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new vt(new kr(2,2),new Pt({name:"BackgroundMaterial",uniforms:js(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(uo,zd(n)),i.buffers.color.setClear(uo.r,uo.g,uo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:M,addToRenderList:m}}function Lg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,T,P,z,O){let B=!1;const V=u(z,P,T);r!==V&&(r=V,c(r.object)),B=f(E,z,P,O),B&&_(E,z,P,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(E,T,P,z),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function u(E,T,P){const z=P.wireframe===!0;let O=i[E.id];O===void 0&&(O={},i[E.id]=O);let B=O[T.id];B===void 0&&(B={},O[T.id]=B);let V=B[z];return V===void 0&&(V=d(l()),B[z]=V),V}function d(E){const T=[],P=[],z=[];for(let O=0;O<t;O++)T[O]=0,P[O]=0,z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:P,attributeDivisors:z,object:E,attributes:{},index:null}}function f(E,T,P,z){const O=r.attributes,B=T.attributes;let V=0;const ee=P.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const J=O[Y];let he=B[Y];if(he===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function _(E,T,P,z){const O={},B=T.attributes;let V=0;const ee=P.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let J=B[Y];J===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(J=E.instanceColor));const he={};he.attribute=J,J&&J.data&&(he.data=J.data),O[Y]=he,V++}r.attributes=O,r.attributesNum=V,r.index=z}function M(){const E=r.newAttributes;for(let T=0,P=E.length;T<P;T++)E[T]=0}function m(E){p(E,0)}function p(E,T){const P=r.newAttributes,z=r.enabledAttributes,O=r.attributeDivisors;P[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),O[E]!==T&&(n.vertexAttribDivisor(E,T),O[E]=T)}function S(){const E=r.newAttributes,T=r.enabledAttributes;for(let P=0,z=T.length;P<z;P++)T[P]!==E[P]&&(n.disableVertexAttribArray(P),T[P]=0)}function v(E,T,P,z,O,B,V){V===!0?n.vertexAttribIPointer(E,T,P,O,B):n.vertexAttribPointer(E,T,P,z,O,B)}function x(E,T,P,z){M();const O=z.attributes,B=P.getAttributes(),V=T.defaultAttributeValues;for(const ee in B){const Y=B[ee];if(Y.location>=0){let j=O[ee];if(j===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){const J=j.normalized,he=j.itemSize,Ae=e.get(j);if(Ae===void 0)continue;const pe=Ae.buffer,re=Ae.type,X=Ae.bytesPerElement,se=re===n.INT||re===n.UNSIGNED_INT||j.gpuType===Pc;if(j.isInterleavedBufferAttribute){const W=j.data,Q=W.stride,oe=j.offset;if(W.isInstancedInterleavedBuffer){for(let ie=0;ie<Y.locationSize;ie++)p(Y.location+ie,W.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<Y.locationSize;ie++)m(Y.location+ie);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ie=0;ie<Y.locationSize;ie++)v(Y.location+ie,he/Y.locationSize,re,J,Q*X,(oe+he/Y.locationSize*ie)*X,se)}else{if(j.isInstancedBufferAttribute){for(let W=0;W<Y.locationSize;W++)p(Y.location+W,j.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let W=0;W<Y.locationSize;W++)m(Y.location+W);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let W=0;W<Y.locationSize;W++)v(Y.location+W,he/Y.locationSize,re,J,he*X,he/Y.locationSize*W*X,se)}}else if(V!==void 0){const J=V[ee];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(Y.location,J);break;case 3:n.vertexAttrib3fv(Y.location,J);break;case 4:n.vertexAttrib4fv(Y.location,J);break;default:n.vertexAttrib1fv(Y.location,J)}}}}S()}function L(){w();for(const E in i){const T=i[E];for(const P in T){const z=T[P];for(const O in z)h(z[O].object),delete z[O];delete T[P]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const T=i[E.id];for(const P in T){const z=T[P];for(const O in z)h(z[O].object),delete z[O];delete T[P]}delete i[E.id]}function A(E){for(const T in i){const P=i[T];if(P[E.id]===void 0)continue;const z=P[E.id];for(const O in z)h(z[O].object),delete z[O];delete P[E.id]}}function w(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Pg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let M=0;M<u;M++)_+=h[M];for(let M=0;M<d.length;M++)t.update(_,i,d[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Og(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==_n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Un&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==On&&!A)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:M,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:x,maxSamples:L}}function Ug(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ki,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,v=S*4;let x=p.clippingState||null;l.value=x,x=h(_,d,v,f);for(let L=0;L!==v;++L)x[L]=t[L];p.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=f+M*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==M;++v,x+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function Fg(n){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=qs:a===Bl&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Bl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ym(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Xc extends Hd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,Lh=[.125,.215,.35,.446,.526,.582],Gi=20,Ka=new Xc,Ph=new Xe;let Ya=null,qa=0,Za=0,ja=!1;const Bi=(1+Math.sqrt(5))/2,As=1/Bi,Oh=[new ue(-Bi,As,0),new ue(Bi,As,0),new ue(-As,0,Bi),new ue(As,0,Bi),new ue(0,Bi,-As),new ue(0,Bi,As),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)];class Uh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,qa,Za),this._renderer.xr.enabled=ja,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Qn,format:_n,colorSpace:Ti,depthBuffer:!1},s=Fh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Bg(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,i,s){const a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ph),h.toneMapping=Jn,h.autoClear=!1;const f=new fa({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new vt(new nr,f);let M=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,M=!0):(f.color.copy(Ph),M=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;fo(s,S*v,p>2?v:0,v,v),h.setRenderTarget(s),M&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qs||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oh[(s-r-1)%Oh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new vt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),M=r/_,m=isFinite(r)?1+Math.floor(h*M):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let S=0;for(let A=0;A<Gi;++A){const w=A/M,y=Math.exp(-w*w/2);p.push(y),A===0?S+=y:A<m&&(S+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const x=this._sizeLods[s],L=3*x*(s>v-Bs?s-v+Bs:0),R=4*(this._cubeSize-x);fo(t,L,R,3*x,2*x),l.setRenderTarget(t),l.render(u,Ka)}}function kg(n){const e=[],t=[],i=[];let s=n;const r=n-Bs+1+Lh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Bs?l=Lh[o-n+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,M=3,m=2,p=1,S=new Float32Array(M*_*f),v=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,w=R>2?0:-1,y=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];S.set(y,M*_*R),v.set(d,m*_*R);const E=[R,R,R,R,R,R];x.set(E,p*_*R)}const L=new xt;L.setAttribute("position",new ot(S,M)),L.setAttribute("uv",new ot(v,m)),L.setAttribute("faceIndex",new ot(x,p)),e.push(L),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fh(n,e,t){const i=new wn(n,e,t);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Bg(n,e,t){const i=new Float32Array(Gi),s=new ue(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function kh(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function Bh(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dt,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===Bl,h=l===qs||l===Zs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Uh(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Uh(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Pd("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Hg(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const M=d.morphAttributes[_];for(let m=0,p=M.length;m<p;m++)e.remove(M[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const M=f[_];for(let m=0,p=M.length;m<p;m++)e.update(M[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let M=0;if(f!==null){const S=f.array;M=f.version;for(let v=0,x=S.length;v<x;v+=3){const L=S[v+0],R=S[v+1],A=S[v+2];d.push(L,R,R,A,A,L)}}else if(_!==void 0){const S=_.array;M=_.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const L=v+0,R=v+1,A=v+2;d.push(L,R,R,A,A,L)}}else return;const m=new(Ld(d)?Gd:Bd)(d,1);m.version=M;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Vg(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*o,_),t.update(f,i,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function u(d,f,_,M){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,M,0,_);let p=0;for(let S=0;S<_;S++)p+=f[S];for(let S=0;S<M.length;S++)t.update(p,i,M[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Xg(n,e,t){const i=new WeakMap,s=new rt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),_===!0&&(v=2),M===!0&&(v=3);let x=a.attributes.position.count*v,L=1;x>e.maxTextureSize&&(L=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*L*4*u),A=new Ud(R,x,L,u);A.type=On,A.needsUpdate=!0;const w=v*4;for(let E=0;E<u;E++){const T=m[E],P=p[E],z=S[E],O=x*L*4*E;for(let B=0;B<T.count;B++){const V=B*w;f===!0&&(s.fromBufferAttribute(T,B),R[O+V+0]=s.x,R[O+V+1]=s.y,R[O+V+2]=s.z,R[O+V+3]=0),_===!0&&(s.fromBufferAttribute(P,B),R[O+V+4]=s.x,R[O+V+5]=s.y,R[O+V+6]=s.z,R[O+V+7]=0),M===!0&&(s.fromBufferAttribute(z,B),R[O+V+8]=s.x,R[O+V+9]=s.y,R[O+V+10]=s.z,R[O+V+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new et(x,L)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function $g(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Kc extends Ht{constructor(e,t,i,s,r,o,a,l,c,h=Xs){if(h!==Xs&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xs&&(i=es),i===void 0&&h===ns&&(i=ts),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xd=new Ht,Gh=new Kc(1,1),$d=new Ud,Kd=new Dm,Yd=new Vd,zh=[],Hh=[],Vh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pa(n,e){let t=Hh[e];t===void 0&&(t=new Int32Array(e),Hh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),bt(t,i)}}function Jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Wh.set(i),n.uniformMatrix3fv(this.addr,!1,Wh),bt(t,i)}}function Qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Vh.set(i),n.uniformMatrix4fv(this.addr,!1,Vh),bt(t,i)}}function eM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function sM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function lM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=Dd,r=Gh):r=Xd,t.setTexture2D(e||r,s)}function cM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Kd,s)}function hM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Yd,s)}function uM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$d,s)}function dM(n){switch(n){case 5126:return Kg;case 35664:return Yg;case 35665:return qg;case 35666:return Zg;case 35674:return jg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return sM;case 36294:return rM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}function fM(n,e){n.uniform1fv(this.addr,e)}function pM(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function mM(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function _M(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function gM(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MM(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function EM(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vM(n,e){n.uniform1iv(this.addr,e)}function xM(n,e){n.uniform2iv(this.addr,e)}function SM(n,e){n.uniform3iv(this.addr,e)}function AM(n,e){n.uniform4iv(this.addr,e)}function RM(n,e){n.uniform1uiv(this.addr,e)}function yM(n,e){n.uniform2uiv(this.addr,e)}function TM(n,e){n.uniform3uiv(this.addr,e)}function bM(n,e){n.uniform4uiv(this.addr,e)}function wM(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xd,r[o])}function CM(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kd,r[o])}function NM(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Yd,r[o])}function IM(n,e,t){const i=this.cache,s=e.length,r=pa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$d,r[o])}function DM(n){switch(n){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return _M;case 35674:return gM;case 35675:return MM;case 35676:return EM;case 5124:case 35670:return vM;case 35667:case 35671:return xM;case 35668:case 35672:return SM;case 35669:case 35673:return AM;case 5125:return RM;case 36294:return yM;case 36295:return TM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return IM}}class LM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dM(t.type)}}class PM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DM(t.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function $h(n,e){n.seq.push(e),n.map[e.id]=e}function UM(n,e,t){const i=n.name,s=i.length;for(Ja.lastIndex=0;;){const r=Ja.exec(i),o=Ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$h(t,c===void 0?new LM(a,n,e):new PM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new OM(a),$h(t,u)),t=u}}}class ko{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);UM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Kh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const FM=37297;let kM=0;function BM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function GM(n){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(n);let i;switch(e===t?i="":e===jo&&t===Zo?i="LinearDisplayP3ToLinearSRGB":e===Zo&&t===jo&&(i="LinearSRGBToLinearDisplayP3"),n){case Ti:case da:return[i,"LinearTransferOETF"];case an:case Hc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+BM(n.getShaderSource(e),o)}else return s}function zM(n,e){const t=GM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HM(n,e){let t;switch(e){case _d:t="Linear";break;case gd:t="Reinhard";break;case Md:t="OptimizedCineon";break;case Ed:t="ACESFilmic";break;case vd:t="AgX";break;case xd:t="Neutral";break;case jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function VM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function WM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Er(n){return n!==""}function qh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(n){return n.replace($M,YM)}const KM=new Map;function YM(n,e){let t=it[e];if(t===void 0){const i=KM.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const qM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(n){return n.replace(qM,ZM)}function ZM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function JM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case Zs:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function eE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case qp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function tE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nE(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jM(t),c=JM(t),h=QM(t),u=eE(t),d=tE(t),f=VM(t),_=WM(r),M=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?it.tonemapping_pars_fragment:"",t.toneMapping!==Jn?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,zM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=pc(o),o=qh(o,t),o=Zh(o,t),a=pc(a),a=qh(a,t),a=Zh(a,t),o=jh(o),a=jh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+o,x=S+p+a,L=Kh(s,s.VERTEX_SHADER,v),R=Kh(s,s.FRAGMENT_SHADER,x);s.attachShader(M,L),s.attachShader(M,R),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(T){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(M).trim(),z=s.getShaderInfoLog(L).trim(),O=s.getShaderInfoLog(R).trim();let B=!0,V=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,R);else{const ee=Yh(s,L,"vertex"),Y=Yh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+ee+`
`+Y)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(z===""||O==="")&&(V=!1);V&&(T.diagnostics={runnable:B,programLog:P,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(L),s.deleteShader(R),w=new ko(s,M),y=XM(s,M)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,FM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=R,this}let iE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rE(e),t.set(e,i)),i}}class rE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function oE(n,e,t,i,s,r,o){const a=new Fd,l=new sE,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,T,P,z){const O=P.fog,B=z.geometry,V=y.isMeshStandardMaterial?P.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),Y=ee&&ee.mapping===ua?ee.image.height:null,j=_[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=J!==void 0?J.length:0;let Ae=0;B.morphAttributes.position!==void 0&&(Ae=1),B.morphAttributes.normal!==void 0&&(Ae=2),B.morphAttributes.color!==void 0&&(Ae=3);let pe,re,X,se;if(j){const Ue=Dn[j];pe=Ue.vertexShader,re=Ue.fragmentShader}else pe=y.vertexShader,re=y.fragmentShader,l.update(y),X=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);const W=n.getRenderTarget(),Q=z.isInstancedMesh===!0,oe=z.isBatchedMesh===!0,ie=!!y.map,de=!!y.matcap,D=!!ee,le=!!y.aoMap,U=!!y.lightMap,F=!!y.bumpMap,k=!!y.normalMap,$=!!y.displacementMap,te=!!y.emissiveMap,ce=!!y.metalnessMap,I=!!y.roughnessMap,b=y.anisotropy>0,q=y.clearcoat>0,fe=y.dispersion>0,ve=y.iridescence>0,xe=y.sheen>0,Oe=y.transmission>0,Ie=b&&!!y.anisotropyMap,Le=q&&!!y.clearcoatMap,Be=q&&!!y.clearcoatNormalMap,ne=q&&!!y.clearcoatRoughnessMap,_e=ve&&!!y.iridescenceMap,Te=ve&&!!y.iridescenceThicknessMap,Ce=xe&&!!y.sheenColorMap,ye=xe&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,Pe=!!y.specularColorMap,ae=!!y.specularIntensityMap,N=Oe&&!!y.transmissionMap,K=Oe&&!!y.thicknessMap,C=!!y.gradientMap,G=!!y.alphaMap,Z=y.alphaTest>0,Me=!!y.alphaHash,we=!!y.extensions;let De=Jn;y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(De=n.toneMapping);const Ge={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:pe,fragmentShader:re,defines:y.defines,customVertexShaderID:X,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:oe,batchingColor:oe&&z._colorsTexture!==null,instancing:Q,instancingColor:Q&&z.instanceColor!==null,instancingMorph:Q&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ti,alphaToCoverage:!!y.alphaToCoverage,map:ie,matcap:de,envMap:D,envMapMode:D&&ee.mapping,envMapCubeUVHeight:Y,aoMap:le,lightMap:U,bumpMap:F,normalMap:k,displacementMap:d&&$,emissiveMap:te,normalMapObjectSpace:k&&y.normalMapType===tm,normalMapTangentSpace:k&&y.normalMapType===zc,metalnessMap:ce,roughnessMap:I,anisotropy:b,anisotropyMap:Ie,clearcoat:q,clearcoatMap:Le,clearcoatNormalMap:Be,clearcoatRoughnessMap:ne,dispersion:fe,iridescence:ve,iridescenceMap:_e,iridescenceThicknessMap:Te,sheen:xe,sheenColorMap:Ce,sheenRoughnessMap:ye,specularMap:Ne,specularColorMap:Pe,specularIntensityMap:ae,transmission:Oe,transmissionMap:N,thicknessMap:K,gradientMap:C,opaque:y.transparent===!1&&y.blending===Ws&&y.alphaToCoverage===!1,alphaMap:G,alphaTest:Z,alphaHash:Me,combine:y.combine,mapUv:ie&&M(y.map.channel),aoMapUv:le&&M(y.aoMap.channel),lightMapUv:U&&M(y.lightMap.channel),bumpMapUv:F&&M(y.bumpMap.channel),normalMapUv:k&&M(y.normalMap.channel),displacementMapUv:$&&M(y.displacementMap.channel),emissiveMapUv:te&&M(y.emissiveMap.channel),metalnessMapUv:ce&&M(y.metalnessMap.channel),roughnessMapUv:I&&M(y.roughnessMap.channel),anisotropyMapUv:Ie&&M(y.anisotropyMap.channel),clearcoatMapUv:Le&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Be&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&M(y.sheenRoughnessMap.channel),specularMapUv:Ne&&M(y.specularMap.channel),specularColorMapUv:Pe&&M(y.specularColorMap.channel),specularIntensityMapUv:ae&&M(y.specularIntensityMap.channel),transmissionMapUv:N&&M(y.transmissionMap.channel),thicknessMapUv:K&&M(y.thicknessMap.channel),alphaMapUv:G&&M(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(k||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(ie||G),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ae,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:ie&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)E.push(T),E.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(S(E,y),v(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function S(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),y.push(a.mask)}function x(y){const E=_[y.type];let T;if(E){const P=Dn[E];T=gi.clone(P.uniforms)}else T=y.uniforms;return T}function L(y,E){let T;for(let P=0,z=h.length;P<z;P++){const O=h[P];if(O.cacheKey===E){T=O,++T.usedTimes;break}}return T===void 0&&(T=new nE(n,E,y,r),h.push(T)),T}function R(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:w}}function aE(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function lE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,_,M,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:M,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=M,p.group=m),e++,p}function a(u,d,f,_,M,m){const p=o(u,d,f,_,M,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,_,M,m){const p=o(u,d,f,_,M,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||lE),i.length>1&&i.sort(d||Qh),s.length>1&&s.sort(d||Qh)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new eu,n.set(i,[o])):s>=r.length?(o=new eu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new Xe};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return n[e.id]=t,t}}}function uE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dE=0;function fE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pE(n){const e=new hE,t=uE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ue);const s=new ue,r=new at,o=new at;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,_=0,M=0,m=0,p=0,S=0,v=0,x=0,L=0,R=0,A=0;c.sort(fE);for(let y=0,E=c.length;y<E;y++){const T=c[y],P=T.color,z=T.intensity,O=T.distance,B=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=P.r*z,u+=P.g*z,d+=P.b*z;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],z);A++}else if(T.isDirectionalLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const ee=T.shadow,Y=t.get(T);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=T.shadow.matrix,S++}i.directional[f]=V,f++}else if(T.isSpotLight){const V=e.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(P).multiplyScalar(z),V.distance=O,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[M]=V;const ee=T.shadow;if(T.map&&(i.spotLightMap[L]=T.map,L++,ee.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[M]=ee.matrix,T.castShadow){const Y=t.get(T);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.spotShadow[M]=Y,i.spotShadowMap[M]=B,x++}M++}else if(T.isRectAreaLight){const V=e.get(T);V.color.copy(P).multiplyScalar(z),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=V,m++}else if(T.isPointLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const ee=T.shadow,Y=t.get(T);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,Y.shadowCameraNear=ee.camera.near,Y.shadowCameraFar=ee.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=T.shadow.matrix,v++}i.point[_]=V,_++}else if(T.isHemisphereLight){const V=e.get(T);V.skyColor.copy(T.color).multiplyScalar(z),V.groundColor.copy(T.groundColor).multiplyScalar(z),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const w=i.hash;(w.directionalLength!==f||w.pointLength!==_||w.spotLength!==M||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==S||w.numPointShadows!==v||w.numSpotShadows!==x||w.numSpotMaps!==L||w.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,w.directionalLength=f,w.pointLength=_,w.spotLength=M,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=S,w.numPointShadows=v,w.numSpotShadows=x,w.numSpotMaps=L,w.numLightProbes=A,i.version=dE++)}function l(c,h){let u=0,d=0,f=0,_=0,M=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=i.hemi[M];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function tu(n){const e=new pE(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mE(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new tu(n),e.set(s,[a])):r>=o.length?(a=new tu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class _E extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gE extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ME=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vE(n,e,t){let i=new Wc;const s=new et,r=new et,o=new rt,a=new _E({depthPacking:em}),l=new gE,c={},h=t.maxTextureSize,u={[Ri]:Yt,[Yt]:Ri,[Tn]:Tn},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:ME,fragmentShader:EE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new xt;_.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new vt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(R,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),E=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Dt),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const z=p!==qn&&this.type===qn,O=p===qn&&this.type!==qn;for(let B=0,V=R.length;B<V;B++){const ee=R[B],Y=ee.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const j=Y.getFrameExtents();if(s.multiply(j),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,Y.mapSize.y=r.y)),Y.map===null||z===!0||O===!0){const he=this.type!==qn?{minFilter:zt,magFilter:zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wn(s.x,s.y,he),Y.map.texture.name=ee.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const J=Y.getViewportCount();for(let he=0;he<J;he++){const Ae=Y.getViewport(he);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),P.viewport(o),Y.updateMatrices(ee,he),i=Y.getFrustum(),x(A,w,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===qn&&S(Y,w),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,E,T)};function S(R,A){const w=e.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,w,d,M,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,w,f,M,null)}function v(R,A,w,y){let E=null;const T=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)E=T;else if(E=w.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const P=E.uuid,z=A.uuid;let O=c[P];O===void 0&&(O={},c[P]=O);let B=O[z];B===void 0&&(B=E.clone(),O[z]=B,A.addEventListener("dispose",L)),E=B}if(E.visible=A.visible,E.wireframe=A.wireframe,y===qn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const P=n.properties.get(E);P.light=w}return E}function x(R,A,w,y,E){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const z=e.update(R),O=R.material;if(Array.isArray(O)){const B=z.groups;for(let V=0,ee=B.length;V<ee;V++){const Y=B[V],j=O[Y.materialIndex];if(j&&j.visible){const J=v(R,j,y,E);R.onBeforeShadow(n,R,A,w,z,J,Y),n.renderBufferDirect(w,null,z,J,R,Y),R.onAfterShadow(n,R,A,w,z,J,Y)}}}else if(O.visible){const B=v(R,O,y,E);R.onBeforeShadow(n,R,A,w,z,B,null),n.renderBufferDirect(w,null,z,B,R,null),R.onAfterShadow(n,R,A,w,z,B,null)}}const P=R.children;for(let z=0,O=P.length;z<O;z++)x(P[z],A,w,y,E)}function L(R){R.target.removeEventListener("dispose",L);for(const w in c){const y=c[w],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function xE(n){function e(){let N=!1;const K=new rt;let C=null;const G=new rt(0,0,0,0);return{setMask:function(Z){C!==Z&&!N&&(n.colorMask(Z,Z,Z,Z),C=Z)},setLocked:function(Z){N=Z},setClear:function(Z,Me,we,De,Ge){Ge===!0&&(Z*=De,Me*=De,we*=De),K.set(Z,Me,we,De),G.equals(K)===!1&&(n.clearColor(Z,Me,we,De),G.copy(K))},reset:function(){N=!1,C=null,G.set(-1,0,0,0)}}}function t(){let N=!1,K=null,C=null,G=null;return{setTest:function(Z){Z?se(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(Z){K!==Z&&!N&&(n.depthMask(Z),K=Z)},setFunc:function(Z){if(C!==Z){switch(Z){case Hp:n.depthFunc(n.NEVER);break;case Vp:n.depthFunc(n.ALWAYS);break;case Wp:n.depthFunc(n.LESS);break;case Yo:n.depthFunc(n.LEQUAL);break;case Xp:n.depthFunc(n.EQUAL);break;case $p:n.depthFunc(n.GEQUAL);break;case Kp:n.depthFunc(n.GREATER);break;case Yp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}C=Z}},setLocked:function(Z){N=Z},setClear:function(Z){G!==Z&&(n.clearDepth(Z),G=Z)},reset:function(){N=!1,K=null,C=null,G=null}}}function i(){let N=!1,K=null,C=null,G=null,Z=null,Me=null,we=null,De=null,Ge=null;return{setTest:function(Ue){N||(Ue?se(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(Ue){K!==Ue&&!N&&(n.stencilMask(Ue),K=Ue)},setFunc:function(Ue,qe,ze){(C!==Ue||G!==qe||Z!==ze)&&(n.stencilFunc(Ue,qe,ze),C=Ue,G=qe,Z=ze)},setOp:function(Ue,qe,ze){(Me!==Ue||we!==qe||De!==ze)&&(n.stencilOp(Ue,qe,ze),Me=Ue,we=qe,De=ze)},setLocked:function(Ue){N=Ue},setClear:function(Ue){Ge!==Ue&&(n.clearStencil(Ue),Ge=Ue)},reset:function(){N=!1,K=null,C=null,G=null,Z=null,Me=null,we=null,De=null,Ge=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,M=null,m=null,p=null,S=null,v=null,x=null,L=null,R=new Xe(0,0,0),A=0,w=!1,y=null,E=null,T=null,P=null,z=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=V>=2);let Y=null,j={};const J=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Ae=new rt().fromArray(J),pe=new rt().fromArray(he);function re(N,K,C,G){const Z=new Uint8Array(4),Me=n.createTexture();n.bindTexture(N,Me),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<C;we++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,G,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(K+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return Me}const X={};X[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),se(n.DEPTH_TEST),r.setFunc(Yo),F(!1),k(ah),se(n.CULL_FACE),le(Dt);function se(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function W(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Q(N,K){return h[N]!==K?(n.bindFramebuffer(N,K),h[N]=K,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=K),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=K),!0):!1}function oe(N,K){let C=d,G=!1;if(N){C=u.get(K),C===void 0&&(C=[],u.set(K,C));const Z=N.textures;if(C.length!==Z.length||C[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,we=Z.length;Me<we;Me++)C[Me]=n.COLOR_ATTACHMENT0+Me;C.length=Z.length,G=!0}}else C[0]!==n.BACK&&(C[0]=n.BACK,G=!0);G&&n.drawBuffers(C)}function ie(N){return f!==N?(n.useProgram(N),f=N,!0):!1}const de={[bn]:n.FUNC_ADD,[wp]:n.FUNC_SUBTRACT,[Cp]:n.FUNC_REVERSE_SUBTRACT};de[Np]=n.MIN,de[Ip]=n.MAX;const D={[Mr]:n.ZERO,[Dp]:n.ONE,[Lp]:n.SRC_COLOR,[Pl]:n.SRC_ALPHA,[Fp]:n.SRC_ALPHA_SATURATE,[Fl]:n.DST_COLOR,[Ul]:n.DST_ALPHA,[Pp]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[Up]:n.ONE_MINUS_DST_COLOR,[Op]:n.ONE_MINUS_DST_ALPHA,[kp]:n.CONSTANT_COLOR,[Bp]:n.ONE_MINUS_CONSTANT_COLOR,[Gp]:n.CONSTANT_ALPHA,[zp]:n.ONE_MINUS_CONSTANT_ALPHA};function le(N,K,C,G,Z,Me,we,De,Ge,Ue){if(N===Dt){_===!0&&(W(n.BLEND),_=!1);return}if(_===!1&&(se(n.BLEND),_=!0),N!==md){if(N!==M||Ue!==w){if((m!==bn||v!==bn)&&(n.blendEquation(n.FUNC_ADD),m=bn,v=bn),Ue)switch(N){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lh:n.blendFunc(n.ONE,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ll:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,S=null,x=null,L=null,R.set(0,0,0),A=0,M=N,w=Ue}return}Z=Z||K,Me=Me||C,we=we||G,(K!==m||Z!==v)&&(n.blendEquationSeparate(de[K],de[Z]),m=K,v=Z),(C!==p||G!==S||Me!==x||we!==L)&&(n.blendFuncSeparate(D[C],D[G],D[Me],D[we]),p=C,S=G,x=Me,L=we),(De.equals(R)===!1||Ge!==A)&&(n.blendColor(De.r,De.g,De.b,Ge),R.copy(De),A=Ge),M=N,w=!1}function U(N,K){N.side===Tn?W(n.CULL_FACE):se(n.CULL_FACE);let C=N.side===Yt;K&&(C=!C),F(C),N.blending===Ws&&N.transparent===!1?le(Dt):le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const G=N.stencilWrite;o.setTest(G),G&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),te(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function k(N){N!==yp?(se(n.CULL_FACE),N!==E&&(N===ah?n.cullFace(n.BACK):N===Tp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),E=N}function $(N){N!==T&&(B&&n.lineWidth(N),T=N)}function te(N,K,C){N?(se(n.POLYGON_OFFSET_FILL),(P!==K||z!==C)&&(n.polygonOffset(K,C),P=K,z=C)):W(n.POLYGON_OFFSET_FILL)}function ce(N){N?se(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function I(N){N===void 0&&(N=n.TEXTURE0+O-1),Y!==N&&(n.activeTexture(N),Y=N)}function b(N,K,C){C===void 0&&(Y===null?C=n.TEXTURE0+O-1:C=Y);let G=j[C];G===void 0&&(G={type:void 0,texture:void 0},j[C]=G),(G.type!==N||G.texture!==K)&&(Y!==C&&(n.activeTexture(C),Y=C),n.bindTexture(N,K||X[N]),G.type=N,G.texture=K)}function q(){const N=j[Y];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(N){Ae.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ae.copy(N))}function ye(N){pe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),pe.copy(N))}function Ne(N,K){let C=l.get(K);C===void 0&&(C=new WeakMap,l.set(K,C));let G=C.get(N);G===void 0&&(G=n.getUniformBlockIndex(K,N.name),C.set(N,G))}function Pe(N,K){const G=l.get(K).get(N);a.get(K)!==G&&(n.uniformBlockBinding(K,G,N.__bindingPointIndex),a.set(K,G))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Y=null,j={},h={},u=new WeakMap,d=[],f=null,_=!1,M=null,m=null,p=null,S=null,v=null,x=null,L=null,R=new Xe(0,0,0),A=0,w=!1,y=null,E=null,T=null,P=null,z=null,Ae.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:se,disable:W,bindFramebuffer:Q,drawBuffers:oe,useProgram:ie,setBlending:le,setMaterial:U,setFlipSided:F,setCullFace:k,setLineWidth:$,setPolygonOffset:te,setScissorTest:ce,activeTexture:I,bindTexture:b,unbindTexture:q,compressedTexImage2D:fe,compressedTexImage3D:ve,texImage2D:_e,texImage3D:Te,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Be,texStorage3D:ne,texSubImage2D:xe,texSubImage3D:Oe,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Le,scissor:Ce,viewport:ye,reset:ae}}function nu(n,e,t,i){const s=SE(i);switch(t){case Td:return n*e;case wd:return n*e;case Cd:return n*e*2;case Fc:return n*e/s.components*s.byteLength;case kc:return n*e/s.components*s.byteLength;case Nd:return n*e*2/s.components*s.byteLength;case Bc:return n*e*2/s.components*s.byteLength;case bd:return n*e*3/s.components*s.byteLength;case _n:return n*e*4/s.components*s.byteLength;case Gc:return n*e*4/s.components*s.byteLength;case Lo:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Wl:return Math.max(n,16)*Math.max(e,8)/4;case zl:case Vl:return Math.max(n,8)*Math.max(e,8)/2;case Xl:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fo:case lc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Id:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SE(n){switch(n){case Un:case Ad:return{byteLength:1,components:1};case Dr:case Rd:case Qn:return{byteLength:2,components:1};case Oc:case Uc:return{byteLength:2,components:4};case es:case Pc:case On:return{byteLength:4,components:1};case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function AE(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return f?new OffscreenCanvas(I,b):Qo("canvas")}function M(I,b,q){let fe=1;const ve=ce(I);if((ve.width>q||ve.height>q)&&(fe=q/Math.max(ve.width,ve.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const xe=Math.floor(fe*ve.width),Oe=Math.floor(fe*ve.height);u===void 0&&(u=_(xe,Oe));const Ie=b?_(xe,Oe):u;return Ie.width=xe,Ie.height=Oe,Ie.getContext("2d").drawImage(I,0,0,xe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+xe+"x"+Oe+")."),Ie}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==zt&&I.minFilter!==Zt}function p(I){n.generateMipmap(I)}function S(I,b,q,fe,ve=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe=b;if(b===n.RED&&(q===n.FLOAT&&(xe=n.R32F),q===n.HALF_FLOAT&&(xe=n.R16F),q===n.UNSIGNED_BYTE&&(xe=n.R8)),b===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(xe=n.R8UI),q===n.UNSIGNED_SHORT&&(xe=n.R16UI),q===n.UNSIGNED_INT&&(xe=n.R32UI),q===n.BYTE&&(xe=n.R8I),q===n.SHORT&&(xe=n.R16I),q===n.INT&&(xe=n.R32I)),b===n.RG&&(q===n.FLOAT&&(xe=n.RG32F),q===n.HALF_FLOAT&&(xe=n.RG16F),q===n.UNSIGNED_BYTE&&(xe=n.RG8)),b===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(xe=n.RG8UI),q===n.UNSIGNED_SHORT&&(xe=n.RG16UI),q===n.UNSIGNED_INT&&(xe=n.RG32UI),q===n.BYTE&&(xe=n.RG8I),q===n.SHORT&&(xe=n.RG16I),q===n.INT&&(xe=n.RG32I)),b===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(xe=n.RGB9_E5),b===n.RGBA){const Oe=ve?qo:dt.getTransfer(fe);q===n.FLOAT&&(xe=n.RGBA32F),q===n.HALF_FLOAT&&(xe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(xe=Oe===pt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)}return(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function v(I,b){let q;return I?b===null||b===es||b===ts?q=n.DEPTH24_STENCIL8:b===On?q=n.DEPTH32F_STENCIL8:b===Dr&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===es||b===ts?q=n.DEPTH_COMPONENT24:b===On?q=n.DEPTH_COMPONENT32F:b===Dr&&(q=n.DEPTH_COMPONENT16),q}function x(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==zt&&I.minFilter!==Zt?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function L(I){const b=I.target;b.removeEventListener("dispose",L),A(b),b.isVideoTexture&&h.delete(b)}function R(I){const b=I.target;b.removeEventListener("dispose",R),y(b)}function A(I){const b=i.get(I);if(b.__webglInit===void 0)return;const q=I.source,fe=d.get(q);if(fe){const ve=fe[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&w(I),Object.keys(fe).length===0&&d.delete(q)}i.remove(I)}function w(I){const b=i.get(I);n.deleteTexture(b.__webglTexture);const q=I.source,fe=d.get(q);delete fe[b.__cacheKey],o.memory.textures--}function y(I){const b=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let ve=0;ve<b.__webglFramebuffer[fe].length;ve++)n.deleteFramebuffer(b.__webglFramebuffer[fe][ve]);else n.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)n.deleteFramebuffer(b.__webglFramebuffer[fe]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=I.textures;for(let fe=0,ve=q.length;fe<ve;fe++){const xe=i.get(q[fe]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(q[fe])}i.remove(I)}let E=0;function T(){E=0}function P(){const I=E;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),E+=1,I}function z(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function O(I,b){const q=i.get(I);if(I.isVideoTexture&&$(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(q,I,b);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+b)}function B(I,b){const q=i.get(I);if(I.version>0&&q.__version!==I.version){pe(q,I,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+b)}function V(I,b){const q=i.get(I);if(I.version>0&&q.__version!==I.version){pe(q,I,b);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+b)}function ee(I,b){const q=i.get(I);if(I.version>0&&q.__version!==I.version){re(q,I,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+b)}const Y={[Qi]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[Gl]:n.MIRRORED_REPEAT},j={[zt]:n.NEAREST,[Jp]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[ba]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},J={[nm]:n.NEVER,[lm]:n.ALWAYS,[im]:n.LESS,[Dd]:n.LEQUAL,[sm]:n.EQUAL,[am]:n.GEQUAL,[rm]:n.GREATER,[om]:n.NOTEQUAL};function he(I,b){if(b.type===On&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Zt||b.magFilter===ba||b.magFilter===Xr||b.magFilter===Vi||b.minFilter===Zt||b.minFilter===ba||b.minFilter===Xr||b.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Y[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Y[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Y[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,j[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,j[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zt||b.minFilter!==Xr&&b.minFilter!==Vi||b.type===On&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ae(I,b){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",L));const fe=b.source;let ve=d.get(fe);ve===void 0&&(ve={},d.set(fe,ve));const xe=z(b);if(xe!==I.__cacheKey){ve[xe]===void 0&&(ve[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ve[xe].usedTimes++;const Oe=ve[I.__cacheKey];Oe!==void 0&&(ve[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&w(b)),I.__cacheKey=xe,I.__webglTexture=ve[xe].texture}return q}function pe(I,b,q){let fe=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=n.TEXTURE_3D);const ve=Ae(I,b),xe=b.source;t.bindTexture(fe,I.__webglTexture,n.TEXTURE0+q);const Oe=i.get(xe);if(xe.version!==Oe.__version||ve===!0){t.activeTexture(n.TEXTURE0+q);const Ie=dt.getPrimaries(dt.workingColorSpace),Le=b.colorSpace===_i?null:dt.getPrimaries(b.colorSpace),Be=b.colorSpace===_i||Ie===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ne=M(b.image,!1,s.maxTextureSize);ne=te(b,ne);const _e=r.convert(b.format,b.colorSpace),Te=r.convert(b.type);let Ce=S(b.internalFormat,_e,Te,b.colorSpace,b.isVideoTexture);he(fe,b);let ye;const Ne=b.mipmaps,Pe=b.isVideoTexture!==!0,ae=Oe.__version===void 0||ve===!0,N=xe.dataReady,K=x(b,ne);if(b.isDepthTexture)Ce=v(b.format===ns,b.type),ae&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ne.width,ne.height,0,_e,Te,null));else if(b.isDataTexture)if(Ne.length>0){Pe&&ae&&t.texStorage2D(n.TEXTURE_2D,K,Ce,Ne[0].width,Ne[0].height);for(let C=0,G=Ne.length;C<G;C++)ye=Ne[C],Pe?N&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,ye.width,ye.height,_e,Te,ye.data):t.texImage2D(n.TEXTURE_2D,C,Ce,ye.width,ye.height,0,_e,Te,ye.data);b.generateMipmaps=!1}else Pe?(ae&&t.texStorage2D(n.TEXTURE_2D,K,Ce,ne.width,ne.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,_e,Te,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ne.width,ne.height,0,_e,Te,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,Ce,Ne[0].width,Ne[0].height,ne.depth);for(let C=0,G=Ne.length;C<G;C++)if(ye=Ne[C],b.format!==_n)if(_e!==null)if(Pe){if(N)if(b.layerUpdates.size>0){const Z=nu(ye.width,ye.height,b.format,b.type);for(const Me of b.layerUpdates){const we=ye.data.subarray(Me*Z/ye.data.BYTES_PER_ELEMENT,(Me+1)*Z/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,Me,ye.width,ye.height,1,_e,we,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,ye.width,ye.height,ne.depth,_e,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,C,Ce,ye.width,ye.height,ne.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,C,0,0,0,ye.width,ye.height,ne.depth,_e,Te,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,C,Ce,ye.width,ye.height,ne.depth,0,_e,Te,ye.data)}else{Pe&&ae&&t.texStorage2D(n.TEXTURE_2D,K,Ce,Ne[0].width,Ne[0].height);for(let C=0,G=Ne.length;C<G;C++)ye=Ne[C],b.format!==_n?_e!==null?Pe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,C,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,C,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,ye.width,ye.height,_e,Te,ye.data):t.texImage2D(n.TEXTURE_2D,C,Ce,ye.width,ye.height,0,_e,Te,ye.data)}else if(b.isDataArrayTexture)if(Pe){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,Ce,ne.width,ne.height,ne.depth),N)if(b.layerUpdates.size>0){const C=nu(ne.width,ne.height,b.format,b.type);for(const G of b.layerUpdates){const Z=ne.data.subarray(G*C/ne.data.BYTES_PER_ELEMENT,(G+1)*C/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,G,ne.width,ne.height,1,_e,Te,Z)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,_e,Te,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,_e,Te,ne.data);else if(b.isData3DTexture)Pe?(ae&&t.texStorage3D(n.TEXTURE_3D,K,Ce,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,_e,Te,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,_e,Te,ne.data);else if(b.isFramebufferTexture){if(ae)if(Pe)t.texStorage2D(n.TEXTURE_2D,K,Ce,ne.width,ne.height);else{let C=ne.width,G=ne.height;for(let Z=0;Z<K;Z++)t.texImage2D(n.TEXTURE_2D,Z,Ce,C,G,0,_e,Te,null),C>>=1,G>>=1}}else if(Ne.length>0){if(Pe&&ae){const C=ce(Ne[0]);t.texStorage2D(n.TEXTURE_2D,K,Ce,C.width,C.height)}for(let C=0,G=Ne.length;C<G;C++)ye=Ne[C],Pe?N&&t.texSubImage2D(n.TEXTURE_2D,C,0,0,_e,Te,ye):t.texImage2D(n.TEXTURE_2D,C,Ce,_e,Te,ye);b.generateMipmaps=!1}else if(Pe){if(ae){const C=ce(ne);t.texStorage2D(n.TEXTURE_2D,K,Ce,C.width,C.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Te,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ce,_e,Te,ne);m(b)&&p(fe),Oe.__version=xe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function re(I,b,q){if(b.image.length!==6)return;const fe=Ae(I,b),ve=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+q);const xe=i.get(ve);if(ve.version!==xe.__version||fe===!0){t.activeTexture(n.TEXTURE0+q);const Oe=dt.getPrimaries(dt.workingColorSpace),Ie=b.colorSpace===_i?null:dt.getPrimaries(b.colorSpace),Le=b.colorSpace===_i||Oe===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,ne=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let G=0;G<6;G++)!Be&&!ne?_e[G]=M(b.image[G],!0,s.maxCubemapSize):_e[G]=ne?b.image[G].image:b.image[G],_e[G]=te(b,_e[G]);const Te=_e[0],Ce=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),Ne=S(b.internalFormat,Ce,ye,b.colorSpace),Pe=b.isVideoTexture!==!0,ae=xe.__version===void 0||fe===!0,N=ve.dataReady;let K=x(b,Te);he(n.TEXTURE_CUBE_MAP,b);let C;if(Be){Pe&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Ne,Te.width,Te.height);for(let G=0;G<6;G++){C=_e[G].mipmaps;for(let Z=0;Z<C.length;Z++){const Me=C[Z];b.format!==_n?Ce!==null?Pe?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z,0,0,Me.width,Me.height,Ce,ye,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z,Ne,Me.width,Me.height,0,Ce,ye,Me.data)}}}else{if(C=b.mipmaps,Pe&&ae){C.length>0&&K++;const G=ce(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Ne,G.width,G.height)}for(let G=0;G<6;G++)if(ne){Pe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,_e[G].width,_e[G].height,Ce,ye,_e[G].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ne,_e[G].width,_e[G].height,0,Ce,ye,_e[G].data);for(let Z=0;Z<C.length;Z++){const we=C[Z].image[G].image;Pe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z+1,0,0,we.width,we.height,Ce,ye,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z+1,Ne,we.width,we.height,0,Ce,ye,we.data)}}else{Pe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ce,ye,_e[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ne,Ce,ye,_e[G]);for(let Z=0;Z<C.length;Z++){const Me=C[Z];Pe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z+1,0,0,Ce,ye,Me.image[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,Z+1,Ne,Ce,ye,Me.image[G])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),xe.__version=ve.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function X(I,b,q,fe,ve,xe){const Oe=r.convert(q.format,q.colorSpace),Ie=r.convert(q.type),Le=S(q.internalFormat,Oe,Ie,q.colorSpace);if(!i.get(b).__hasExternalTextures){const ne=Math.max(1,b.width>>xe),_e=Math.max(1,b.height>>xe);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,xe,Le,ne,_e,b.depth,0,Oe,Ie,null):t.texImage2D(ve,xe,Le,ne,_e,0,Oe,Ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),k(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,ve,i.get(q).__webglTexture,0,F(b)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,ve,i.get(q).__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(I,b,q){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer){const fe=b.depthTexture,ve=fe&&fe.isDepthTexture?fe.type:null,xe=v(b.stencilBuffer,ve),Oe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=F(b);k(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,xe,b.width,b.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,xe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,I)}else{const fe=b.textures;for(let ve=0;ve<fe.length;ve++){const xe=fe[ve],Oe=r.convert(xe.format,xe.colorSpace),Ie=r.convert(xe.type),Le=S(xe.internalFormat,Oe,Ie,xe.colorSpace),Be=F(b);q&&k(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Le,b.width,b.height):k(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Le,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Le,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function W(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const fe=i.get(b.depthTexture).__webglTexture,ve=F(b);if(b.depthTexture.format===Xs)k(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(b.depthTexture.format===ns)k(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Q(I){const b=i.get(I),q=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");W(b.__webglFramebuffer,I)}else if(q){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]=n.createRenderbuffer(),se(b.__webglDepthbuffer[fe],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),se(b.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(I,b,q){const fe=i.get(I);b!==void 0&&X(fe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Q(I)}function ie(I){const b=I.texture,q=i.get(I),fe=i.get(b);I.addEventListener("dispose",R);const ve=I.textures,xe=I.isWebGLCubeRenderTarget===!0,Oe=ve.length>1;if(Oe||(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=b.version,o.memory.textures++),xe){q.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Ie]=[];for(let Le=0;Le<b.mipmaps.length;Le++)q.__webglFramebuffer[Ie][Le]=n.createFramebuffer()}else q.__webglFramebuffer[Ie]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)q.__webglFramebuffer[Ie]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let Ie=0,Le=ve.length;Ie<Le;Ie++){const Be=i.get(ve[Ie]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&k(I)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ve.length;Ie++){const Le=ve[Ie];q.__webglColorRenderbuffer[Ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Ie]);const Be=r.convert(Le.format,Le.colorSpace),ne=r.convert(Le.type),_e=S(Le.internalFormat,Be,ne,Le.colorSpace,I.isXRRenderTarget===!0),Te=F(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,_e,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,q.__webglColorRenderbuffer[Ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),se(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),he(n.TEXTURE_CUBE_MAP,b);for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)X(q.__webglFramebuffer[Ie][Le],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Le);else X(q.__webglFramebuffer[Ie],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Ie=0,Le=ve.length;Ie<Le;Ie++){const Be=ve[Ie],ne=i.get(Be);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),he(n.TEXTURE_2D,Be),X(q.__webglFramebuffer,I,Be,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,0),m(Be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Ie=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,fe.__webglTexture),he(Ie,b),b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)X(q.__webglFramebuffer[Le],I,b,n.COLOR_ATTACHMENT0,Ie,Le);else X(q.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,Ie,0);m(b)&&p(Ie),t.unbindTexture()}I.depthBuffer&&Q(I)}function de(I){const b=I.textures;for(let q=0,fe=b.length;q<fe;q++){const ve=b[q];if(m(ve)){const xe=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Oe=i.get(ve).__webglTexture;t.bindTexture(xe,Oe),p(xe),t.unbindTexture()}}}const D=[],le=[];function U(I){if(I.samples>0){if(k(I)===!1){const b=I.textures,q=I.width,fe=I.height;let ve=n.COLOR_BUFFER_BIT;const xe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(I),Ie=b.length>1;if(Ie)for(let Le=0;Le<b.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const Be=i.get(b[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,q,fe,0,0,q,fe,ve,n.NEAREST),l===!0&&(D.length=0,le.length=0,D.push(n.COLOR_ATTACHMENT0+Le),I.depthBuffer&&I.resolveDepthBuffer===!1&&(D.push(xe),le.push(xe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ie)for(let Le=0;Le<b.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const Be=i.get(b[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function F(I){return Math.min(s.maxSamples,I.samples)}function k(I){const b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(I){const b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function te(I,b){const q=I.colorSpace,fe=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Ti&&q!==_i&&(dt.getTransfer(q)===pt?(fe!==_n||ve!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=T,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=oe,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=X,this.useMultisampledRTT=k}function RE(n,e){function t(i,s=_i){let r;const o=dt.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===Oc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ad)return n.BYTE;if(i===Rd)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===Pc)return n.INT;if(i===es)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===Td)return n.ALPHA;if(i===bd)return n.RGB;if(i===_n)return n.RGBA;if(i===wd)return n.LUMINANCE;if(i===Cd)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===Fc)return n.RED;if(i===kc)return n.RED_INTEGER;if(i===Nd)return n.RG;if(i===Bc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===Lo||i===Po||i===Oo||i===Uo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zl||i===Hl||i===Vl||i===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===$l||i===Kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===$l)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yl||i===ql||i===Zl||i===jl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fo||i===lc||i===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fo)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Id||i===hc||i===uc||i===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class yE extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wi extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pt({vertexShader:bE,fragmentShader:wE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NE extends Qs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const M=new CE,m=t.getContextAttributes();let p=null,S=null;const v=[],x=[],L=new et;let R=null;const A=new mn;A.layers.enable(1),A.viewport=new rt;const w=new mn;w.layers.enable(2),w.viewport=new rt;const y=[A,w],E=new yE;E.layers.enable(1),E.layers.enable(2);let T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let X=v[re];return X===void 0&&(X=new Qa,v[re]=X),X.getTargetRaySpace()},this.getControllerGrip=function(re){let X=v[re];return X===void 0&&(X=new Qa,v[re]=X),X.getGripSpace()},this.getHand=function(re){let X=v[re];return X===void 0&&(X=new Qa,v[re]=X),X.getHandSpace()};function z(re){const X=x.indexOf(re.inputSource);if(X===-1)return;const se=v[X];se!==void 0&&(se.update(re.inputSource,re.frame,c||o),se.dispatchEvent({type:re.type,data:re.inputSource}))}function O(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",B);for(let re=0;re<v.length;re++){const X=x[re];X!==null&&(x[re]=null,v[re].disconnect(X))}T=null,P=null,M.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",O),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new wn(f.framebufferWidth,f.framebufferHeight,{format:_n,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,se=null,W=null;m.depth&&(W=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?ns:Xs,se=m.stencil?ts:es);const Q={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new wn(d.textureWidth,d.textureHeight,{format:_n,type:Un,depthTexture:new Kc(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(re){for(let X=0;X<re.removed.length;X++){const se=re.removed[X],W=x.indexOf(se);W>=0&&(x[W]=null,v[W].disconnect(se))}for(let X=0;X<re.added.length;X++){const se=re.added[X];let W=x.indexOf(se);if(W===-1){for(let oe=0;oe<v.length;oe++)if(oe>=x.length){x.push(se),W=oe;break}else if(x[oe]===null){x[oe]=se,W=oe;break}if(W===-1)break}const Q=v[W];Q&&Q.connect(se)}}const V=new ue,ee=new ue;function Y(re,X,se){V.setFromMatrixPosition(X.matrixWorld),ee.setFromMatrixPosition(se.matrixWorld);const W=V.distanceTo(ee),Q=X.projectionMatrix.elements,oe=se.projectionMatrix.elements,ie=Q[14]/(Q[10]-1),de=Q[14]/(Q[10]+1),D=(Q[9]+1)/Q[5],le=(Q[9]-1)/Q[5],U=(Q[8]-1)/Q[0],F=(oe[8]+1)/oe[0],k=ie*U,$=ie*F,te=W/(-U+F),ce=te*-U;X.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ce),re.translateZ(te),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const I=ie+te,b=de+te,q=k-ce,fe=$+(W-ce),ve=D*de/b*I,xe=le*de/b*I;re.projectionMatrix.makePerspective(q,fe,ve,xe,I,b),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function j(re,X){X===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(X.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;M.texture!==null&&(re.near=M.depthNear,re.far=M.depthFar),E.near=w.near=A.near=re.near,E.far=w.far=A.far=re.far,(T!==E.near||P!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,P=E.far,A.near=T,A.far=P,w.near=T,w.far=P,A.updateProjectionMatrix(),w.updateProjectionMatrix(),re.updateProjectionMatrix());const X=re.parent,se=E.cameras;j(E,X);for(let W=0;W<se.length;W++)j(se[W],X);se.length===2?Y(E,A,w):E.projectionMatrix.copy(A.projectionMatrix),J(re,E,X)};function J(re,X,se){se===null?re.matrix.copy(X.matrixWorld):(re.matrix.copy(se.matrixWorld),re.matrix.invert(),re.matrix.multiply(X.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(X.projectionMatrix),re.projectionMatrixInverse.copy(X.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Lr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(E)};let he=null;function Ae(re,X){if(h=X.getViewerPose(c||o),_=X,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let W=!1;se.length!==E.cameras.length&&(E.cameras.length=0,W=!0);for(let oe=0;oe<se.length;oe++){const ie=se[oe];let de=null;if(f!==null)de=f.getViewport(ie);else{const le=u.getViewSubImage(d,ie);de=le.viewport,oe===0&&(e.setRenderTargetTextures(S,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(S))}let D=y[oe];D===void 0&&(D=new mn,D.layers.enable(oe),D.viewport=new rt,y[oe]=D),D.matrix.fromArray(ie.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ie.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(de.x,de.y,de.width,de.height),oe===0&&(E.matrix.copy(D.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),W===!0&&E.cameras.push(D)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const oe=u.getDepthInformation(se[0]);oe&&oe.isValid&&oe.texture&&M.init(e,oe,s.renderState)}}for(let se=0;se<v.length;se++){const W=x[se],Q=v[se];W!==null&&Q!==void 0&&Q.update(W,X,c||o)}he&&he(re,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),_=null}const pe=new Wd;pe.setAnimationLoop(Ae),this.setAnimationLoop=function(re){he=re},this.dispose=function(){}}}const Li=new Fn,IE=new at;function DE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),v=S.envMap,x=S.envMapRotation;v&&(m.envMap.value=v,Li.copy(x),Li.x*=-1,Li.y*=-1,Li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(IE.makeRotationFromEuler(Li)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function LE(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const x=v.program;i.uniformBlockBinding(S,x)}function c(S,v){let x=s[S.id];x===void 0&&(_(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const L=v.program;i.updateUBOMapping(S,L);const R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function h(S){const v=u();S.__bindingPointIndex=v;const x=n.createBuffer(),L=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=s[S.id],x=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=x.length;R<A;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,E=w.length;y<E;y++){const T=w[y];if(f(T,R,y,L)===!0){const P=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let O=0;for(let B=0;B<z.length;B++){const V=z[B],ee=M(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,P+O,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,O),O+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,v,x,L){const R=S.value,A=v+"_"+x;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const w=L[A];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return L[A]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function _(S){const v=S.uniforms;let x=0;const L=16;for(let A=0,w=v.length;A<w;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,T=y.length;E<T;E++){const P=y[E],z=Array.isArray(P.value)?P.value:[P.value];for(let O=0,B=z.length;O<B;O++){const V=z[O],ee=M(V),Y=x%L;Y!==0&&L-Y<ee.boundary&&(x+=L-Y),P.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=ee.storage}}}const R=x%L;return R>0&&(x+=L-R),S.__size=x,S.__cache={},this}function M(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class PE{constructor(e={}){const{canvas:t=ym(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let M=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=Jn,this.toneMappingExposure=1;const v=this;let x=!1,L=0,R=0,A=null,w=-1,y=null;const E=new rt,T=new rt;let P=null;const z=new Xe(0);let O=0,B=t.width,V=t.height,ee=1,Y=null,j=null;const J=new rt(0,0,B,V),he=new rt(0,0,B,V);let Ae=!1;const pe=new Wc;let re=!1,X=!1;const se=new at,W=new ue,Q=new rt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function de(){return A===null?ee:1}let D=i;function le(H,me){return t.getContext(H,me)}try{const H={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",C,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Z,!1),D===null){const me="webgl2";if(D=le(me,H),D===null)throw le(me)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(H){throw console.error("THREE.WebGLRenderer: "+H.message),H}let U,F,k,$,te,ce,I,b,q,fe,ve,xe,Oe,Ie,Le,Be,ne,_e,Te,Ce,ye,Ne,Pe,ae;function N(){U=new zg(D),U.init(),Ne=new RE(D,U),F=new Og(D,U,e,Ne),k=new xE(D),$=new Wg(D),te=new aE,ce=new AE(D,U,k,te,F,Ne,$),I=new Fg(v),b=new Gg(v),q=new jm(D),Pe=new Lg(D,q),fe=new Hg(D,q,$,Pe),ve=new $g(D,fe,q,$),Te=new Xg(D,F,ce),Be=new Ug(te),xe=new oE(v,I,b,U,F,Pe,Be),Oe=new DE(v,te),Ie=new cE,Le=new mE(U),_e=new Dg(v,I,b,k,ve,d,l),ne=new vE(v,ve,F),ae=new LE(D,$,F,k),Ce=new Pg(D,U,$),ye=new Vg(D,U,$),$.programs=xe.programs,v.capabilities=F,v.extensions=U,v.properties=te,v.renderLists=Ie,v.shadowMap=ne,v.state=k,v.info=$}N();const K=new NE(v,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const H=U.get("WEBGL_lose_context");H&&H.loseContext()},this.forceContextRestore=function(){const H=U.get("WEBGL_lose_context");H&&H.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(H){H!==void 0&&(ee=H,this.setSize(B,V,!1))},this.getSize=function(H){return H.set(B,V)},this.setSize=function(H,me,Se=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=H,V=me,t.width=Math.floor(H*ee),t.height=Math.floor(me*ee),Se===!0&&(t.style.width=H+"px",t.style.height=me+"px"),this.setViewport(0,0,H,me)},this.getDrawingBufferSize=function(H){return H.set(B*ee,V*ee).floor()},this.setDrawingBufferSize=function(H,me,Se){B=H,V=me,ee=Se,t.width=Math.floor(H*Se),t.height=Math.floor(me*Se),this.setViewport(0,0,H,me)},this.getCurrentViewport=function(H){return H.copy(E)},this.getViewport=function(H){return H.copy(J)},this.setViewport=function(H,me,Se,Re){H.isVector4?J.set(H.x,H.y,H.z,H.w):J.set(H,me,Se,Re),k.viewport(E.copy(J).multiplyScalar(ee).round())},this.getScissor=function(H){return H.copy(he)},this.setScissor=function(H,me,Se,Re){H.isVector4?he.set(H.x,H.y,H.z,H.w):he.set(H,me,Se,Re),k.scissor(T.copy(he).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(H){k.setScissorTest(Ae=H)},this.setOpaqueSort=function(H){Y=H},this.setTransparentSort=function(H){j=H},this.getClearColor=function(H){return H.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(H=!0,me=!0,Se=!0){let Re=0;if(H){let ge=!1;if(A!==null){const ke=A.texture.format;ge=ke===Gc||ke===Bc||ke===kc}if(ge){const ke=A.texture.type,We=ke===Un||ke===es||ke===Dr||ke===ts||ke===Oc||ke===Uc,$e=_e.getClearColor(),Ke=_e.getClearAlpha(),Je=$e.r,tt=$e.g,je=$e.b;We?(f[0]=Je,f[1]=tt,f[2]=je,f[3]=Ke,D.clearBufferuiv(D.COLOR,0,f)):(_[0]=Je,_[1]=tt,_[2]=je,_[3]=Ke,D.clearBufferiv(D.COLOR,0,_))}else Re|=D.COLOR_BUFFER_BIT}me&&(Re|=D.DEPTH_BUFFER_BIT),Se&&(Re|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",C,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Ie.dispose(),Le.dispose(),te.dispose(),I.dispose(),b.dispose(),ve.dispose(),Pe.dispose(),ae.dispose(),xe.dispose(),K.dispose(),K.removeEventListener("sessionstart",ze),K.removeEventListener("sessionend",Ee),be.stop()};function C(H){H.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const H=$.autoReset,me=ne.enabled,Se=ne.autoUpdate,Re=ne.needsUpdate,ge=ne.type;N(),$.autoReset=H,ne.enabled=me,ne.autoUpdate=Se,ne.needsUpdate=Re,ne.type=ge}function Z(H){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",H.statusMessage)}function Me(H){const me=H.target;me.removeEventListener("dispose",Me),we(me)}function we(H){De(H),te.remove(H)}function De(H){const me=te.get(H).programs;me!==void 0&&(me.forEach(function(Se){xe.releaseProgram(Se)}),H.isShaderMaterial&&xe.releaseShaderCache(H))}this.renderBufferDirect=function(H,me,Se,Re,ge,ke){me===null&&(me=oe);const We=ge.isMesh&&ge.matrixWorld.determinant()<0,$e=Vr(H,me,Se,Re,ge);k.setMaterial(Re,We);let Ke=Se.index,Je=1;if(Re.wireframe===!0){if(Ke=fe.getWireframeAttribute(Se),Ke===void 0)return;Je=2}const tt=Se.drawRange,je=Se.attributes.position;let ct=tt.start*Je,St=(tt.start+tt.count)*Je;ke!==null&&(ct=Math.max(ct,ke.start*Je),St=Math.min(St,(ke.start+ke.count)*Je)),Ke!==null?(ct=Math.max(ct,0),St=Math.min(St,Ke.count)):je!=null&&(ct=Math.max(ct,0),St=Math.min(St,je.count));const At=St-ct;if(At<0||At===1/0)return;Pe.setup(ge,Re,$e,Se,Ke);let jt,ht=Ce;if(Ke!==null&&(jt=q.get(Ke),ht=ye,ht.setIndex(jt)),ge.isMesh)Re.wireframe===!0?(k.setLineWidth(Re.wireframeLinewidth*de()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(ge.isLine){let Ze=Re.linewidth;Ze===void 0&&(Ze=1),k.setLineWidth(Ze*de()),ge.isLineSegments?ht.setMode(D.LINES):ge.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else ge.isPoints?ht.setMode(D.POINTS):ge.isSprite&&ht.setMode(D.TRIANGLES);if(ge.isBatchedMesh)if(ge._multiDrawInstances!==null)ht.renderMultiDrawInstances(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount,ge._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))ht.renderMultiDraw(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount);else{const Ze=ge._multiDrawStarts,Nt=ge._multiDrawCounts,ut=ge._multiDrawCount,Mn=Ke?q.get(Ke).bytesPerElement:1,os=te.get(Re).currentProgram.getUniforms();for(let Jt=0;Jt<ut;Jt++)os.setValue(D,"_gl_DrawID",Jt),ht.render(Ze[Jt]/Mn,Nt[Jt])}else if(ge.isInstancedMesh)ht.renderInstances(ct,At,ge.count);else if(Se.isInstancedBufferGeometry){const Ze=Se._maxInstanceCount!==void 0?Se._maxInstanceCount:1/0,Nt=Math.min(Se.instanceCount,Ze);ht.renderInstances(ct,At,Nt)}else ht.render(ct,At)};function Ge(H,me,Se){H.transparent===!0&&H.side===Tn&&H.forceSinglePass===!1?(H.side=Yt,H.needsUpdate=!0,cn(H,me,Se),H.side=Ri,H.needsUpdate=!0,cn(H,me,Se),H.side=Tn):cn(H,me,Se)}this.compile=function(H,me,Se=null){Se===null&&(Se=H),m=Le.get(Se),m.init(me),S.push(m),Se.traverseVisible(function(ge){ge.isLight&&ge.layers.test(me.layers)&&(m.pushLight(ge),ge.castShadow&&m.pushShadow(ge))}),H!==Se&&H.traverseVisible(function(ge){ge.isLight&&ge.layers.test(me.layers)&&(m.pushLight(ge),ge.castShadow&&m.pushShadow(ge))}),m.setupLights();const Re=new Set;return H.traverse(function(ge){const ke=ge.material;if(ke)if(Array.isArray(ke))for(let We=0;We<ke.length;We++){const $e=ke[We];Ge($e,Se,ge),Re.add($e)}else Ge(ke,Se,ge),Re.add(ke)}),S.pop(),m=null,Re},this.compileAsync=function(H,me,Se=null){const Re=this.compile(H,me,Se);return new Promise(ge=>{function ke(){if(Re.forEach(function(We){te.get(We).currentProgram.isReady()&&Re.delete(We)}),Re.size===0){ge(H);return}setTimeout(ke,10)}U.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Ue=null;function qe(H){Ue&&Ue(H)}function ze(){be.stop()}function Ee(){be.start()}const be=new Wd;be.setAnimationLoop(qe),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(H){Ue=H,K.setAnimationLoop(H),H===null?be.stop():be.start()},K.addEventListener("sessionstart",ze),K.addEventListener("sessionend",Ee),this.render=function(H,me){if(me!==void 0&&me.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.parent===null&&me.matrixWorldAutoUpdate===!0&&me.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(me),me=K.getCamera()),H.isScene===!0&&H.onBeforeRender(v,H,me,A),m=Le.get(H,S.length),m.init(me),S.push(m),se.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),pe.setFromProjectionMatrix(se),X=this.localClippingEnabled,re=Be.init(this.clippingPlanes,X),M=Ie.get(H,p.length),M.init(),p.push(M),K.enabled===!0&&K.isPresenting===!0){const ke=v.xr.getDepthSensingMesh();ke!==null&&Fe(ke,me,-1/0,v.sortObjects)}Fe(H,me,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(Y,j),ie=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ie&&_e.addToRenderList(M,H),this.info.render.frame++,re===!0&&Be.beginShadows();const Se=m.state.shadowsArray;ne.render(Se,H,me),re===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const Re=M.opaque,ge=M.transmissive;if(m.setupLights(),me.isArrayCamera){const ke=me.cameras;if(ge.length>0)for(let We=0,$e=ke.length;We<$e;We++){const Ke=ke[We];lt(Re,ge,H,Ke)}ie&&_e.render(H);for(let We=0,$e=ke.length;We<$e;We++){const Ke=ke[We];Ye(M,H,Ke,Ke.viewport)}}else ge.length>0&&lt(Re,ge,H,me),ie&&_e.render(H),Ye(M,H,me);A!==null&&(ce.updateMultisampleRenderTarget(A),ce.updateRenderTargetMipmap(A)),H.isScene===!0&&H.onAfterRender(v,H,me),Pe.resetDefaultState(),w=-1,y=null,S.pop(),S.length>0?(m=S[S.length-1],re===!0&&Be.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function Fe(H,me,Se,Re){if(H.visible===!1)return;if(H.layers.test(me.layers)){if(H.isGroup)Se=H.renderOrder;else if(H.isLOD)H.autoUpdate===!0&&H.update(me);else if(H.isLight)m.pushLight(H),H.castShadow&&m.pushShadow(H);else if(H.isSprite){if(!H.frustumCulled||pe.intersectsSprite(H)){Re&&Q.setFromMatrixPosition(H.matrixWorld).applyMatrix4(se);const We=ve.update(H),$e=H.material;$e.visible&&M.push(H,We,$e,Se,Q.z,null)}}else if((H.isMesh||H.isLine||H.isPoints)&&(!H.frustumCulled||pe.intersectsObject(H))){const We=ve.update(H),$e=H.material;if(Re&&(H.boundingSphere!==void 0?(H.boundingSphere===null&&H.computeBoundingSphere(),Q.copy(H.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Q.copy(We.boundingSphere.center)),Q.applyMatrix4(H.matrixWorld).applyMatrix4(se)),Array.isArray($e)){const Ke=We.groups;for(let Je=0,tt=Ke.length;Je<tt;Je++){const je=Ke[Je],ct=$e[je.materialIndex];ct&&ct.visible&&M.push(H,We,ct,Se,Q.z,je)}}else $e.visible&&M.push(H,We,$e,Se,Q.z,null)}}const ke=H.children;for(let We=0,$e=ke.length;We<$e;We++)Fe(ke[We],me,Se,Re)}function Ye(H,me,Se,Re){const ge=H.opaque,ke=H.transmissive,We=H.transparent;m.setupLightsView(Se),re===!0&&Be.setGlobalState(v.clippingPlanes,Se),Re&&k.viewport(E.copy(Re)),ge.length>0&&Et(ge,me,Se),ke.length>0&&Et(ke,me,Se),We.length>0&&Et(We,me,Se),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function lt(H,me,Se,Re){if((Se.isScene===!0?Se.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Re.id]===void 0&&(m.state.transmissionRenderTarget[Re.id]=new wn(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?Qn:Un,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ke=m.state.transmissionRenderTarget[Re.id],We=Re.viewport||E;ke.setSize(We.z,We.w);const $e=v.getRenderTarget();v.setRenderTarget(ke),v.getClearColor(z),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),ie?_e.render(Se):v.clear();const Ke=v.toneMapping;v.toneMapping=Jn;const Je=Re.viewport;if(Re.viewport!==void 0&&(Re.viewport=void 0),m.setupLightsView(Re),re===!0&&Be.setGlobalState(v.clippingPlanes,Re),Et(H,Se,Re),ce.updateMultisampleRenderTarget(ke),ce.updateRenderTargetMipmap(ke),U.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let je=0,ct=me.length;je<ct;je++){const St=me[je],At=St.object,jt=St.geometry,ht=St.material,Ze=St.group;if(ht.side===Tn&&At.layers.test(Re.layers)){const Nt=ht.side;ht.side=Yt,ht.needsUpdate=!0,gn(At,Se,Re,jt,ht,Ze),ht.side=Nt,ht.needsUpdate=!0,tt=!0}}tt===!0&&(ce.updateMultisampleRenderTarget(ke),ce.updateRenderTargetMipmap(ke))}v.setRenderTarget($e),v.setClearColor(z,O),Je!==void 0&&(Re.viewport=Je),v.toneMapping=Ke}function Et(H,me,Se){const Re=me.isScene===!0?me.overrideMaterial:null;for(let ge=0,ke=H.length;ge<ke;ge++){const We=H[ge],$e=We.object,Ke=We.geometry,Je=Re===null?We.material:Re,tt=We.group;$e.layers.test(Se.layers)&&gn($e,me,Se,Ke,Je,tt)}}function gn(H,me,Se,Re,ge,ke){H.onBeforeRender(v,me,Se,Re,ge,ke),H.modelViewMatrix.multiplyMatrices(Se.matrixWorldInverse,H.matrixWorld),H.normalMatrix.getNormalMatrix(H.modelViewMatrix),ge.transparent===!0&&ge.side===Tn&&ge.forceSinglePass===!1?(ge.side=Yt,ge.needsUpdate=!0,v.renderBufferDirect(Se,me,Re,ge,H,ke),ge.side=Ri,ge.needsUpdate=!0,v.renderBufferDirect(Se,me,Re,ge,H,ke),ge.side=Tn):v.renderBufferDirect(Se,me,Re,ge,H,ke),H.onAfterRender(v,me,Se,Re,ge,ke)}function cn(H,me,Se){me.isScene!==!0&&(me=oe);const Re=te.get(H),ge=m.state.lights,ke=m.state.shadowsArray,We=ge.state.version,$e=xe.getParameters(H,ge.state,ke,me,Se),Ke=xe.getProgramCacheKey($e);let Je=Re.programs;Re.environment=H.isMeshStandardMaterial?me.environment:null,Re.fog=me.fog,Re.envMap=(H.isMeshStandardMaterial?b:I).get(H.envMap||Re.environment),Re.envMapRotation=Re.environment!==null&&H.envMap===null?me.environmentRotation:H.envMapRotation,Je===void 0&&(H.addEventListener("dispose",Me),Je=new Map,Re.programs=Je);let tt=Je.get(Ke);if(tt!==void 0){if(Re.currentProgram===tt&&Re.lightsStateVersion===We)return Hr(H,$e),tt}else $e.uniforms=xe.getUniforms(H),H.onBeforeCompile($e,v),tt=xe.acquireProgram($e,Ke),Je.set(Ke,tt),Re.uniforms=$e.uniforms;const je=Re.uniforms;return(!H.isShaderMaterial&&!H.isRawShaderMaterial||H.clipping===!0)&&(je.clippingPlanes=Be.uniform),Hr(H,$e),Re.needsLights=Aa(H),Re.lightsStateVersion=We,Re.needsLights&&(je.ambientLightColor.value=ge.state.ambient,je.lightProbe.value=ge.state.probe,je.directionalLights.value=ge.state.directional,je.directionalLightShadows.value=ge.state.directionalShadow,je.spotLights.value=ge.state.spot,je.spotLightShadows.value=ge.state.spotShadow,je.rectAreaLights.value=ge.state.rectArea,je.ltc_1.value=ge.state.rectAreaLTC1,je.ltc_2.value=ge.state.rectAreaLTC2,je.pointLights.value=ge.state.point,je.pointLightShadows.value=ge.state.pointShadow,je.hemisphereLights.value=ge.state.hemi,je.directionalShadowMap.value=ge.state.directionalShadowMap,je.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,je.spotShadowMap.value=ge.state.spotShadowMap,je.spotLightMatrix.value=ge.state.spotLightMatrix,je.spotLightMap.value=ge.state.spotLightMap,je.pointShadowMap.value=ge.state.pointShadowMap,je.pointShadowMatrix.value=ge.state.pointShadowMatrix),Re.currentProgram=tt,Re.uniformsList=null,tt}function bi(H){if(H.uniformsList===null){const me=H.currentProgram.getUniforms();H.uniformsList=ko.seqWithValue(me.seq,H.uniforms)}return H.uniformsList}function Hr(H,me){const Se=te.get(H);Se.outputColorSpace=me.outputColorSpace,Se.batching=me.batching,Se.batchingColor=me.batchingColor,Se.instancing=me.instancing,Se.instancingColor=me.instancingColor,Se.instancingMorph=me.instancingMorph,Se.skinning=me.skinning,Se.morphTargets=me.morphTargets,Se.morphNormals=me.morphNormals,Se.morphColors=me.morphColors,Se.morphTargetsCount=me.morphTargetsCount,Se.numClippingPlanes=me.numClippingPlanes,Se.numIntersection=me.numClipIntersection,Se.vertexAlphas=me.vertexAlphas,Se.vertexTangents=me.vertexTangents,Se.toneMapping=me.toneMapping}function Vr(H,me,Se,Re,ge){me.isScene!==!0&&(me=oe),ce.resetTextureUnits();const ke=me.fog,We=Re.isMeshStandardMaterial?me.environment:null,$e=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ti,Ke=(Re.isMeshStandardMaterial?b:I).get(Re.envMap||We),Je=Re.vertexColors===!0&&!!Se.attributes.color&&Se.attributes.color.itemSize===4,tt=!!Se.attributes.tangent&&(!!Re.normalMap||Re.anisotropy>0),je=!!Se.morphAttributes.position,ct=!!Se.morphAttributes.normal,St=!!Se.morphAttributes.color;let At=Jn;Re.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=v.toneMapping);const jt=Se.morphAttributes.position||Se.morphAttributes.normal||Se.morphAttributes.color,ht=jt!==void 0?jt.length:0,Ze=te.get(Re),Nt=m.state.lights;if(re===!0&&(X===!0||H!==y)){const hn=H===y&&Re.id===w;Be.setState(Re,H,hn)}let ut=!1;Re.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Nt.state.version||Ze.outputColorSpace!==$e||ge.isBatchedMesh&&Ze.batching===!1||!ge.isBatchedMesh&&Ze.batching===!0||ge.isBatchedMesh&&Ze.batchingColor===!0&&ge.colorTexture===null||ge.isBatchedMesh&&Ze.batchingColor===!1&&ge.colorTexture!==null||ge.isInstancedMesh&&Ze.instancing===!1||!ge.isInstancedMesh&&Ze.instancing===!0||ge.isSkinnedMesh&&Ze.skinning===!1||!ge.isSkinnedMesh&&Ze.skinning===!0||ge.isInstancedMesh&&Ze.instancingColor===!0&&ge.instanceColor===null||ge.isInstancedMesh&&Ze.instancingColor===!1&&ge.instanceColor!==null||ge.isInstancedMesh&&Ze.instancingMorph===!0&&ge.morphTexture===null||ge.isInstancedMesh&&Ze.instancingMorph===!1&&ge.morphTexture!==null||Ze.envMap!==Ke||Re.fog===!0&&Ze.fog!==ke||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Be.numPlanes||Ze.numIntersection!==Be.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==tt||Ze.morphTargets!==je||Ze.morphNormals!==ct||Ze.morphColors!==St||Ze.toneMapping!==At||Ze.morphTargetsCount!==ht)&&(ut=!0):(ut=!0,Ze.__version=Re.version);let Mn=Ze.currentProgram;ut===!0&&(Mn=cn(Re,me,ge));let os=!1,Jt=!1,Ra=!1;const Rt=Mn.getUniforms(),ni=Ze.uniforms;if(k.useProgram(Mn.program)&&(os=!0,Jt=!0,Ra=!0),Re.id!==w&&(w=Re.id,Jt=!0),os||y!==H){Rt.setValue(D,"projectionMatrix",H.projectionMatrix),Rt.setValue(D,"viewMatrix",H.matrixWorldInverse);const hn=Rt.map.cameraPosition;hn!==void 0&&hn.setValue(D,W.setFromMatrixPosition(H.matrixWorld)),F.logarithmicDepthBuffer&&Rt.setValue(D,"logDepthBufFC",2/(Math.log(H.far+1)/Math.LN2)),(Re.isMeshPhongMaterial||Re.isMeshToonMaterial||Re.isMeshLambertMaterial||Re.isMeshBasicMaterial||Re.isMeshStandardMaterial||Re.isShaderMaterial)&&Rt.setValue(D,"isOrthographic",H.isOrthographicCamera===!0),y!==H&&(y=H,Jt=!0,Ra=!0)}if(ge.isSkinnedMesh){Rt.setOptional(D,ge,"bindMatrix"),Rt.setOptional(D,ge,"bindMatrixInverse");const hn=ge.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Rt.setValue(D,"boneTexture",hn.boneTexture,ce))}ge.isBatchedMesh&&(Rt.setOptional(D,ge,"batchingTexture"),Rt.setValue(D,"batchingTexture",ge._matricesTexture,ce),Rt.setOptional(D,ge,"batchingIdTexture"),Rt.setValue(D,"batchingIdTexture",ge._indirectTexture,ce),Rt.setOptional(D,ge,"batchingColorTexture"),ge._colorsTexture!==null&&Rt.setValue(D,"batchingColorTexture",ge._colorsTexture,ce));const ya=Se.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&Te.update(ge,Se,Mn),(Jt||Ze.receiveShadow!==ge.receiveShadow)&&(Ze.receiveShadow=ge.receiveShadow,Rt.setValue(D,"receiveShadow",ge.receiveShadow)),Re.isMeshGouraudMaterial&&Re.envMap!==null&&(ni.envMap.value=Ke,ni.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),Re.isMeshStandardMaterial&&Re.envMap===null&&me.environment!==null&&(ni.envMapIntensity.value=me.environmentIntensity),Jt&&(Rt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&Wr(ni,Ra),ke&&Re.fog===!0&&Oe.refreshFogUniforms(ni,ke),Oe.refreshMaterialUniforms(ni,Re,ee,V,m.state.transmissionRenderTarget[H.id]),ko.upload(D,bi(Ze),ni,ce)),Re.isShaderMaterial&&Re.uniformsNeedUpdate===!0&&(ko.upload(D,bi(Ze),ni,ce),Re.uniformsNeedUpdate=!1),Re.isSpriteMaterial&&Rt.setValue(D,"center",ge.center),Rt.setValue(D,"modelViewMatrix",ge.modelViewMatrix),Rt.setValue(D,"normalMatrix",ge.normalMatrix),Rt.setValue(D,"modelMatrix",ge.matrixWorld),Re.isShaderMaterial||Re.isRawShaderMaterial){const hn=Re.uniformsGroups;for(let Ta=0,Sp=hn.length;Ta<Sp;Ta++){const oh=hn[Ta];ae.update(oh,Mn),ae.bind(oh,Mn)}}return Mn}function Wr(H,me){H.ambientLightColor.needsUpdate=me,H.lightProbe.needsUpdate=me,H.directionalLights.needsUpdate=me,H.directionalLightShadows.needsUpdate=me,H.pointLights.needsUpdate=me,H.pointLightShadows.needsUpdate=me,H.spotLights.needsUpdate=me,H.spotLightShadows.needsUpdate=me,H.rectAreaLights.needsUpdate=me,H.hemisphereLights.needsUpdate=me}function Aa(H){return H.isMeshLambertMaterial||H.isMeshToonMaterial||H.isMeshPhongMaterial||H.isMeshStandardMaterial||H.isShadowMaterial||H.isShaderMaterial&&H.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(H,me,Se){te.get(H.texture).__webglTexture=me,te.get(H.depthTexture).__webglTexture=Se;const Re=te.get(H);Re.__hasExternalTextures=!0,Re.__autoAllocateDepthBuffer=Se===void 0,Re.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(H,me){const Se=te.get(H);Se.__webglFramebuffer=me,Se.__useDefaultFramebuffer=me===void 0},this.setRenderTarget=function(H,me=0,Se=0){A=H,L=me,R=Se;let Re=!0,ge=null,ke=!1,We=!1;if(H){const Ke=te.get(H);Ke.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(D.FRAMEBUFFER,null),Re=!1):Ke.__webglFramebuffer===void 0?ce.setupRenderTarget(H):Ke.__hasExternalTextures&&ce.rebindTextures(H,te.get(H.texture).__webglTexture,te.get(H.depthTexture).__webglTexture);const Je=H.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(We=!0);const tt=te.get(H).__webglFramebuffer;H.isWebGLCubeRenderTarget?(Array.isArray(tt[me])?ge=tt[me][Se]:ge=tt[me],ke=!0):H.samples>0&&ce.useMultisampledRTT(H)===!1?ge=te.get(H).__webglMultisampledFramebuffer:Array.isArray(tt)?ge=tt[Se]:ge=tt,E.copy(H.viewport),T.copy(H.scissor),P=H.scissorTest}else E.copy(J).multiplyScalar(ee).floor(),T.copy(he).multiplyScalar(ee).floor(),P=Ae;if(k.bindFramebuffer(D.FRAMEBUFFER,ge)&&Re&&k.drawBuffers(H,ge),k.viewport(E),k.scissor(T),k.setScissorTest(P),ke){const Ke=te.get(H.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ke.__webglTexture,Se)}else if(We){const Ke=te.get(H.texture),Je=me||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,Se||0,Je)}w=-1},this.readRenderTargetPixels=function(H,me,Se,Re,ge,ke,We){if(!(H&&H.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=te.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){k.bindFramebuffer(D.FRAMEBUFFER,$e);try{const Ke=H.texture,Je=Ke.format,tt=Ke.type;if(!F.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}me>=0&&me<=H.width-Re&&Se>=0&&Se<=H.height-ge&&D.readPixels(me,Se,Re,ge,Ne.convert(Je),Ne.convert(tt),ke)}finally{const Ke=A!==null?te.get(A).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(H,me,Se,Re,ge,ke,We){if(!(H&&H.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=te.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){k.bindFramebuffer(D.FRAMEBUFFER,$e);try{const Ke=H.texture,Je=Ke.format,tt=Ke.type;if(!F.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(me>=0&&me<=H.width-Re&&Se>=0&&Se<=H.height-ge){const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,ke.byteLength,D.STREAM_READ),D.readPixels(me,Se,Re,ge,Ne.convert(Je),Ne.convert(tt),0),D.flush();const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Tm(D,ct,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ke)}finally{D.deleteBuffer(je),D.deleteSync(ct)}return ke}}finally{const Ke=A!==null?te.get(A).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(H,me=null,Se=0){H.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),me=arguments[0]||null,H=arguments[1]);const Re=Math.pow(2,-Se),ge=Math.floor(H.image.width*Re),ke=Math.floor(H.image.height*Re),We=me!==null?me.x:0,$e=me!==null?me.y:0;ce.setTexture2D(H,0),D.copyTexSubImage2D(D.TEXTURE_2D,Se,0,0,We,$e,ge,ke),k.unbindTexture()},this.copyTextureToTexture=function(H,me,Se=null,Re=null,ge=0){H.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Re=arguments[0]||null,H=arguments[1],me=arguments[2],ge=arguments[3]||0,Se=null);let ke,We,$e,Ke,Je,tt;Se!==null?(ke=Se.max.x-Se.min.x,We=Se.max.y-Se.min.y,$e=Se.min.x,Ke=Se.min.y):(ke=H.image.width,We=H.image.height,$e=0,Ke=0),Re!==null?(Je=Re.x,tt=Re.y):(Je=0,tt=0);const je=Ne.convert(me.format),ct=Ne.convert(me.type);ce.setTexture2D(me,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,me.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,me.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,me.unpackAlignment);const St=D.getParameter(D.UNPACK_ROW_LENGTH),At=D.getParameter(D.UNPACK_IMAGE_HEIGHT),jt=D.getParameter(D.UNPACK_SKIP_PIXELS),ht=D.getParameter(D.UNPACK_SKIP_ROWS),Ze=D.getParameter(D.UNPACK_SKIP_IMAGES),Nt=H.isCompressedTexture?H.mipmaps[ge]:H.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),H.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Je,tt,ke,We,je,ct,Nt.data):H.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Je,tt,Nt.width,Nt.height,je,Nt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Je,tt,ke,We,je,ct,Nt),D.pixelStorei(D.UNPACK_ROW_LENGTH,St),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ze),ge===0&&me.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(H,me,Se=null,Re=null,ge=0){H.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Se=arguments[0]||null,Re=arguments[1]||null,H=arguments[2],me=arguments[3],ge=arguments[4]||0);let ke,We,$e,Ke,Je,tt,je,ct,St;const At=H.isCompressedTexture?H.mipmaps[ge]:H.image;Se!==null?(ke=Se.max.x-Se.min.x,We=Se.max.y-Se.min.y,$e=Se.max.z-Se.min.z,Ke=Se.min.x,Je=Se.min.y,tt=Se.min.z):(ke=At.width,We=At.height,$e=At.depth,Ke=0,Je=0,tt=0),Re!==null?(je=Re.x,ct=Re.y,St=Re.z):(je=0,ct=0,St=0);const jt=Ne.convert(me.format),ht=Ne.convert(me.type);let Ze;if(me.isData3DTexture)ce.setTexture3D(me,0),Ze=D.TEXTURE_3D;else if(me.isDataArrayTexture||me.isCompressedArrayTexture)ce.setTexture2DArray(me,0),Ze=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,me.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,me.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,me.unpackAlignment);const Nt=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=D.getParameter(D.UNPACK_SKIP_PIXELS),os=D.getParameter(D.UNPACK_SKIP_ROWS),Jt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,tt),H.isDataTexture||H.isData3DTexture?D.texSubImage3D(Ze,ge,je,ct,St,ke,We,$e,jt,ht,At.data):me.isCompressedArrayTexture?D.compressedTexSubImage3D(Ze,ge,je,ct,St,ke,We,$e,jt,At.data):D.texSubImage3D(Ze,ge,je,ct,St,ke,We,$e,jt,ht,At),D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,os),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Jt),ge===0&&me.generateMipmaps&&D.generateMipmap(Ze),k.unbindTexture()},this.initRenderTarget=function(H){te.get(H).__webglFramebuffer===void 0&&ce.setupRenderTarget(H)},this.initTexture=function(H){H.isCubeTexture?ce.setTextureCube(H,0):H.isData3DTexture?ce.setTexture3D(H,0):H.isDataArrayTexture||H.isCompressedArrayTexture?ce.setTexture2DArray(H,0):ce.setTexture2D(H,0),k.unbindTexture()},this.resetState=function(){L=0,R=0,A=null,k.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hc?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===da?"display-p3":"srgb"}}class OE extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yc extends Ht{constructor(e=null,t=1,i=1,s,r,o,a,l,c=zt,h=zt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea extends ot{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new at,iu=new at,po=[],su=new ss,UE=new at,hr=new vt,ur=new rs;class qd extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ea(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,UE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ss),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),su.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),ur.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(i),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),iu.multiplyMatrices(i,Rs),hr.matrixWorld=iu,hr.raycast(e,po);for(let o=0,a=po.length;o<a;o++){const l=po[o];l.instanceId=r,l.object=this,t.push(l)}po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ea(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yc(new Float32Array(s*this.count),s,this.count,Fc,On));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class mc extends Ht{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta extends xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new ue,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class sr extends xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const M=[],m=i/2;let p=0;S(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(f,2));function S(){const x=new ue,L=new ue;let R=0;const A=(t-e)/i;for(let w=0;w<=r;w++){const y=[],E=w/r,T=E*(t-e)+e;for(let P=0;P<=s;P++){const z=P/s,O=z*l+a,B=Math.sin(O),V=Math.cos(O);L.x=T*B,L.y=-E*i+m,L.z=T*V,u.push(L.x,L.y,L.z),x.set(B,A,V).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-E),y.push(_++)}M.push(y)}for(let w=0;w<s;w++)for(let y=0;y<r;y++){const E=M[y][w],T=M[y+1][w],P=M[y+1][w+1],z=M[y][w+1];h.push(E,T,z),h.push(T,P,z),R+=6}c.addGroup(p,R,0),p+=R}function v(x){const L=_,R=new et,A=new ue;let w=0;const y=x===!0?e:t,E=x===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),_++;const T=_;for(let P=0;P<=s;P++){const O=P/s*l+a,B=Math.cos(O),V=Math.sin(O);A.x=y*V,A.y=m*E,A.z=y*B,u.push(A.x,A.y,A.z),d.push(0,E,0),R.x=B*.5+.5,R.y=V*.5*E+.5,f.push(R.x,R.y),_++}for(let P=0;P<s;P++){const z=L+P,O=T+P;x===!0?h.push(O,O+1,z):h.push(O+1,O,z),w+=3}c.addGroup(p,w,x===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ma extends sr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ma(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qc extends xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const v=new ue,x=new ue,L=new ue;for(let R=0;R<t.length;R+=3)f(t[R+0],v),f(t[R+1],x),f(t[R+2],L),l(v,x,L,S)}function l(S,v,x,L){const R=L+1,A=[];for(let w=0;w<=R;w++){A[w]=[];const y=S.clone().lerp(x,w/R),E=v.clone().lerp(x,w/R),T=R-w;for(let P=0;P<=T;P++)P===0&&w===R?A[w][P]=y:A[w][P]=y.clone().lerp(E,P/T)}for(let w=0;w<R;w++)for(let y=0;y<2*(R-w)-1;y++){const E=Math.floor(y/2);y%2===0?(d(A[w][E+1]),d(A[w+1][E]),d(A[w][E])):(d(A[w][E+1]),d(A[w+1][E+1]),d(A[w+1][E]))}}function c(S){const v=new ue;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(S),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const S=new ue;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];const x=m(S)/2/Math.PI+.5,L=p(S)/Math.PI+.5;o.push(x,1-L)}_(),u()}function u(){for(let S=0;S<o.length;S+=6){const v=o[S+0],x=o[S+2],L=o[S+4],R=Math.max(v,x,L),A=Math.min(v,x,L);R>.9&&A<.1&&(v<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){const x=S*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function _(){const S=new ue,v=new ue,x=new ue,L=new ue,R=new et,A=new et,w=new et;for(let y=0,E=0;y<r.length;y+=9,E+=6){S.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),R.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),w.set(o[E+4],o[E+5]),L.copy(S).add(v).add(x).divideScalar(3);const T=m(L);M(R,E+0,S,T),M(A,E+2,v,T),M(w,E+4,x,T)}}function M(S,v,x,L){L<0&&S.x===1&&(o[v]=S.x-1),x.x===0&&x.z===0&&(o[v]=L/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.vertices,e.indices,e.radius,e.details)}}class Br extends qc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Br(e.radius,e.detail)}}class Zc extends xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new ue,d=new ue,f=[],_=[],M=[],m=[];for(let p=0;p<=i;p++){const S=[],v=p/i;let x=0;p===0&&o===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const R=L/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+v*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(R+x,1-v),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const v=h[p][S+1],x=h[p][S],L=h[p+1][S],R=h[p+1][S+1];(p!==0||o>0)&&f.push(v,x,R),(p!==i-1||l<Math.PI)&&f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(M,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class FE extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kE extends tr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class jn extends tr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zd extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ru extends Zd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const el=new at,ou=new ue,au=new ue;class BE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GE extends BE{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zE extends Zd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new GE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lu(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);const g={CAMERA_FAR:6e4,CAMERA_FOV:70,CAMERA_NEAR:.3,EYE_HEIGHT_M:1.7,MOUSE_SENSITIVITY_RAD_PER_PX:.0022,PITCH_LIMIT_RAD:1.45,SCRAMBLE_SPEED:1,SLOPE_SCRAMBLE_MAX_DEG:45,SLOPE_WALK_MAX_DEG:30,WALKER_PROBE_AHEAD_M:.5,WALKER_OBSTACLE_ITERS:2,WALKER_CHEST_M:1.15,WALKER_RADIUS_M:.34,WALKER_STEP_UP_M:.6,WALK_SPEED:2.6,WADE_MAX_DEPTH_M:1.2,WADE_SLOW_DEPTH_M:.5,WADE_SPEED_FACTOR:.4,WATER_DEPTH_CAP_M:30,WATER_DEPTH_PER_M_FROM_SHORE:.06,WATER_MASK_MAX_RISE_M:1.5,WATER_MIN_BODY_CELLS:6,WATER_PLANE_LIFT_M:.15,WATER_PLANE_MARGIN_M:12,WATER_PLANE_MAX_VERTS:4e4,WATER_PLANE_STEP_M:3,WATER_SHALLOW_SPEED_FACTOR:.7,WATER_SURFACE_PERCENTILE:.95,WATER_SHORE_BLUR_CELLS:3,WATER_SHORE_DRY_M:.02,WATER_SHORE_ISO:.5,SURFACE_BASELINE_DRAIN_MULT:1,SURFACE_BASELINE_SPEED_FACTOR:1,SURFACE_BOG_DRAIN_MULT:2.2,SURFACE_BOG_SPEED_FACTOR:.45,SURFACE_CROP_DRAIN_MULT:1.1,SURFACE_CROP_SPEED_FACTOR:.9,SURFACE_MOSS_DRAIN_MULT:1.2,SURFACE_MOSS_SPEED_FACTOR:.85,SURFACE_SHRUB_DRAIN_MULT:1.2,SURFACE_SHRUB_SPEED_FACTOR:.8,SURFACE_SNOW_DRAIN_MULT:1.5,SURFACE_SNOW_SPEED_FACTOR:.7,SURFACE_TREE_DRAIN_MULT:1.4,SURFACE_TREE_SPEED_FACTOR:.65,BLACKOUT_MIN_DEPTH_M:.8,BLACKOUT_RELOCATE_MAX_M:60,BLACKOUT_SEARCH_RAYS:32,BLACKOUT_SEARCH_STEP_M:2,BLACKOUT_STAMINA_FRACTION:.35,BLACKOUT_TIME_PENALTY_S:45,SPRINT_SPEED:5.2,STAMINA_DRAIN_SCRAMBLE_PER_S:6,STAMINA_DRAIN_SPRINT_PER_S:14,STAMINA_DRAIN_WADE_PER_S:10,STAMINA_DRAIN_WALK_PER_S:1.5,STAMINA_MAX:100,STAMINA_REGEN_PER_S:8,LINE_HASH_DECIMALS:5,SAVE_MAX_MISSIONS:500,CATEGORY_MAX_M:3e4,CATEGORY_MIN_M:1e3,CATEGORY_SPRINT_MAX_M:3e3,CATEGORY_TREK_MAX_M:1e4,MEDAL_BRONZE_M:100,MEDAL_GOLD_M:50,MEDAL_PLATINUM_M:25,MEDAL_SILVER_M:75,MEDAL_MULT:{Platinum:2,Gold:1.5,Silver:1.2,Bronze:1,FAILED:0},SCORE_BASE_PER_KM:100,ARRIVAL_FADE_S:1.5,DETOUR_SCRIPT_SIDE:1,FINISH_RADIUS_M:8,TRACK_SAMPLE_S:.5,PLANNER_INIT_ZOOM:9,PROFILE_H_PX:120,PROFILE_SAMPLES:240,PROFILE_W_PX:480,RANDOM_LINE_BAND_INSET_M:1,RANDOM_LINE_MAX_ATTEMPTS:200,WATER_CROSSING_MAX_M:1e3,WATER_SCAN_STEP_M:10,CORRIDOR_OUTER_RADIUS_M:45e3,CORRIDOR_FAR_RADIUS_M:12500,CORRIDOR_NEAR_MARGIN_M:1500,ZOOM_BLOCKED_MARGIN_M:15,ZOOM_MAX_H:.985,ZOOM_MIN:11,ZOOM_SLOPE_MARGIN_DEG:2,TILE_CACHE_MAX_BYTES:64e6,TILE_DECODE_ROWS_PER_STEP:64,TILE_DECODE_WORKERS:2,TILE_LOADS_PER_STEP:2,TILE_NEAR_RADIUS_TILES:1,CHUNK_ANCHOR_MARGIN_M:24,CHUNK_PREFETCH_LEAD_S:15,CHUNK_BUILD_BUDGET_MS:8,CHUNK_BUILDS_PER_FRAME:2,CHUNK_GRID_STEP_M:4,CHUNK_LOAD_RADIUS:8,CHUNK_LOD_FINE_RINGS:2,CHUNK_LOD_RING_MULTS:[1,2,4,8,16],CHUNK_LOD_RING_STARTS:[0,2,6,14,22],CHUNK_LOD_COARSE_MULT:2,CHUNK_SIZE_M:256,NORMAL_EPSILON_M:2,FILTER_AUX_MEMO_PITCH_M:8,FILTER_PITCH_FLOOR_M:16,SLICED_JOB_ROWS_PER_STEP:4,FAR_SHELL_INNER_M:600,FAR_SHELL_NORMAL_STEP_M:8,FAR_SHELL_OUTER_M:45e3,FAR_SHELL_FINE_ZONE_M:4500,FAR_SHELL_FINE_PITCH_M:32,FAR_SHELL_RADIAL_RINGS:158,FAR_SHELL_RECENTER_M:128,FAR_SHELL_RING_WARP:.5,FAR_SHELL_SECTORS:8,FAR_SHELL_BANDS:2,FAR_SHELL_SEGMENTS:1024,FAR_SHELL_SINK_FADE_M:3100,FAR_SHELL_SINK_M:3,FAR_SHELL_STEP_VERTS:48,FOG_BAND_1_M:600,FOG_BAND_2_M:2500,FOG_BAND_3_M:6500,FOG_DENSITY_FLOOR:.08,FOG_DENSITY_HALF_HEIGHT_M:350,FOG_HALF_DISTANCE_SEA_M:5200,FOG_HORIZON_BLEND_MAX:.45,FOG_START_M:120,HEMI_INTENSITY:2.1,SKYLIGHT_AXIS_TILT_DEG:110,SKYLIGHT_INTENSITY:3.35,SEASON_DEFAULT:"summer",WEATHER_ONSET_S:90,WEATHER_PERIOD_S:240,WEATHER_FOG_GAIN:.85,WEATHER_SUN_DIM:.4,WEATHER_AMBIENT_LIFT:1.45,CLOUD_HEIGHT_M:1400,CLOUD_SCALE_M:2600,CLOUD_DRIFT_MPS:7,CLOUD_COVER_LO:.34,CLOUD_COVER_HI:.86,CLOUD_EDGE:.16,CLOUD_HORIZON_FADE:.055,WEATHER_WET_TAU_S:210,WEATHER_WET_SAMPLES:10,WEATHER_WET_DARKEN:.42,WEATHER_WET_BLUE:.1,WEATHER_SKY_MIX:.8,WEATHER_WIND_GAIN:2.2,WEATHER_FRONT_SPAN_M:16e3,WEATHER_FRONT_PROBE_M:4e3,WEATHER_FRONT_FOG_MIN:.4,WEATHER_FRONT_FOG_MAX:2.2,SEASON_SPRING_OVERCAST:.42,SEASON_SUMMER_OVERCAST:.28,SEASON_AUTUMN_OVERCAST:.5,SEASON_WINTER_OVERCAST:.62,SEASON_SPRING_SNOW:.12,SEASON_SUMMER_SNOW:0,SEASON_AUTUMN_SNOW:0,SEASON_WINTER_SNOW:1,SNOW_ALT_LO_M:520,SNOW_ALT_HI_M:880,SNOW_SLOPE_LO_DEG:34,SNOW_SLOPE_HI_DEG:52,SNOW_ASPECT_MELT:.55,SNOW_ROCK_UP_MIN:.45,SNOW_BURY_FRAC:.9,SNOW_BURY_SKIP:.82,SEASON_SPRING_VEG_MIX:.3,SEASON_SPRING_SAT:1.08,SEASON_SPRING_SKY_MIX:.25,SEASON_SPRING_SUN_MIX:.35,SEASON_SPRING_SUN_K:1,SEASON_AUTUMN_VEG_MIX:.45,SEASON_AUTUMN_SAT:1.05,SEASON_AUTUMN_SKY_MIX:.3,SEASON_AUTUMN_SUN_MIX:.45,SEASON_AUTUMN_SUN_K:.92,SEASON_WINTER_VEG_MIX:.62,SEASON_WINTER_SAT:.7,SEASON_WINTER_SKY_MIX:.5,SEASON_WINTER_SUN_MIX:.6,SEASON_WINTER_SUN_K:.78,SKY_DOME_RADIUS_M:52e3,SKY_GRADIENT_EXPONENT:.7,SKY_SUN_GLOW_EXPONENT:6,SUN_AZIMUTH_DEG:200,SUN_ELEVATION_DEG:30,SUN_INTENSITY:2.7,TERRAIN_BAND_BLEND_M:45,TERRAIN_APRON_MIX:.6,TERRAIN_BAND_GRAIN:.08,TERRAIN_BAND_HIGH_M:650,TERRAIN_BAND_NOISE_M:22,TERRAIN_BAND_NOISE_WAVE_M:320,TERRAIN_BAND_SUMMIT_M:870,TERRAIN_BAND_UPLAND_M:350,TERRAIN_DETAIL_ANISO:2.5,TERRAIN_DETAIL_H:.87,TERRAIN_DETAIL_RIDGE_CAP:.08,TERRAIN_DETAIL_RIDGE_GAIN:0,TERRAIN_DETAIL_RIDGE_OCTAVES:2,TERRAIN_DETAIL_PITCH_LIMIT:0,TERRAIN_DETAIL_RELIEF_CAP:.2762,TERRAIN_DETAIL_RMS_M:0,TERRAIN_DETAIL_SHORE_M:30,TERRAIN_DETAIL_SLOPE_FLOOR:.15,TERRAIN_DETAIL_SLOPE_HI_DEG:30,TERRAIN_DETAIL_SLOPE_LO_DEG:8,GRAIN_AMP_M:1.5,GRAIN_DOMAIN_M:4e3,GRAIN_NARROW:2,GRAIN_WAVE_M:25,SURVEY_NEAR_MARGIN_M:1500,SURVEY_FAR_HALF_M:12500,SURVEY_NEAR_ZOOM:13,RAVINE_DEPTH_FALLOFF:.5,RAVINE_DEPTH_M:6,RAVINE_HORTON:3,RAVINE_QUAD:64,RAVINE_JITTER:.45,RAVINE_LEVELS:3,RAVINE_NARROW:4,TERRAIN_DETAIL_TAPER:.25,TERRAIN_DETAIL_WANDER:.7,TERRAIN_DETAIL_WINDOW_POSTS:16,TERRAIN_CRAG_FADE_M:5e3,TERRAIN_CRAG_LEDGE_AMP:.6,TERRAIN_CRAG_LEDGE_BUMP:1.1,TERRAIN_CRAG_LEDGE_M:6,TERRAIN_CRAG_VARY_M:60,TERRAIN_EXPO_MIX:1,TERRAIN_EXPO_NOISE:2.3,TERRAIN_EXPO_WAVE_M:15,TERRAIN_EXPO_WIND:.35,TERRAIN_FAR_SHADE:.75,TERRAIN_FAR_SHADE_HI:.69,TERRAIN_FAR_SHADE_LO:.25,TERRAIN_FINE_GRAIN:.22,TERRAIN_FLECK_AMP:.1,TERRAIN_FLECK_BUMP:.24,TERRAIN_FLECK_FADE_M:220,TERRAIN_FLECK_WAVE_M:.8,TERRAIN_GRAIN_STREAK_W:1,TERRAIN_GRAIN_WAVE_M:9,TERRAIN_GRIT_AMP:.15,TERRAIN_GRIT_BUMP:.06,TERRAIN_GRIT_FADE_M:190,TERRAIN_GRIT_WAVE_M:.3,TERRAIN_GULLY_AMP:.6,TERRAIN_GULLY_WAVE_M:6,TERRAIN_HANDOVER_GAIN:.7,TERRAIN_HUMMOCK_M:.3,TERRAIN_HUMMOCK_WAVE_M:5,TERRAIN_KNOLL_M:.9,TERRAIN_KNOLL_WAVE_M:18,TERRAIN_PATCH_FADE_M:2500,TERRAIN_PATCH_MIX:.75,TERRAIN_PATCH_WAVE_M:30,TERRAIN_QUIET:.75,TERRAIN_QUIET_FADE_M:70,TERRAIN_QUIET_SAT:1.45,TERRAIN_RELIEF_FADE_M:500,TERRAIN_ROOT_AO:.82,TERRAIN_ROOT_BUMP:.055,TERRAIN_ROOT_FADE_M:30,TERRAIN_ROOT_MIX:1,TERRAIN_ROOT_QUIET:.3,TERRAIN_ROCK_NOISE_DEG:10,TERRAIN_SCREE_COVER:.32,TERRAIN_SCREE_FADE_POW:2,TERRAIN_SCREE_HI_DEG:32,TERRAIN_SCREE_LO_DEG:16,TERRAIN_SCREE_WAVE_M:10,TERRAIN_SLOPE_BLEND_DEG:8,TERRAIN_SLOPE_LIFT_M_PER_DEG:1.2,TERRAIN_SLOPE_ROCK_DEG:30,TERRAIN_SOIL_MIX_BARE:.95,TERRAIN_SOIL_MIX_TURF:.42,TERRAIN_SOIL_WAVE_M:2.6,TERRAIN_WIND_FROM_DEG:225,TERRAIN_ZONE_FAR_M:6e3,TERRAIN_ZONE_MIX:.35,TERRAIN_ZONE_MIX_FAR:.71,TERRAIN_ZONE_WAVE_M:260,WATER_CONTACT_M:.15,WATER_FRESNEL_EXPONENT:7,WATER_OPEN_FADE_M:130,WATER_REFLECT_MAX:.62,WATER_SHELF_DEPTH_M:1.2,WATER_SHELF_MAX_M:34,WATER_SHELF_MIN_M:3.5,WATER_SHELF_PROBE_M:20,WATER_SHELF_SHARE:.62,WATER_SHORE_GRAD_EPS_M:2,WATER_WET_FRAC:.12,DRESSING_ANCHOR_M:64,DRESSING_ANCHOR_MARGIN_M:12,DRESSING_CANDIDATES_PER_CELL:8,DRESSING_CELL_M:10,DRESSING_CLUMP_MAX:4.2,DRESSING_CLUMP_MIN:.16,DRESSING_CLUMP_POW:1.6,DRESSING_CLUMP_WAVE_M:55,DRESSING_COLLIDER_CACHE_CELLS:256,DRESSING_COLLIDER_CELLS:1,DRESSING_COLLIDER_RADIUS_MUL:.8,DRESSING_FADE_IN_M:1.5,DRESSING_FADE_FRAC:.6,DRESSING_FAR_M:265,DRESSING_MAX_PER_ENTRY:2600,DRESSING_MAX_SLOPE_DEG:40,DRESSING_MIN_REACH_FRAC:.24,DRESSING_RECENTER_M:45,DRESSING_REF_SIZE_M:2,DRESSING_STRETCH:.42,DRESSING_TILT_MAX_DEG:12,DRESSING_TINT_JITTER:.18,ROCK_ALT_GAIN:6,ROCK_COBBLE_CANDIDATES:16,ROCK_COBBLE_FAR_M:130,ROCK_COBBLE_REACH_FRAC:.26,ROCK_COBBLE_REF_SIZE_M:1,ROCK_POLY_FAR_M:60,ROCK_POLY_MIN_M:1.15,ROCK_COBBLE_MAX_M:.85,ROCK_COBBLE_MIN_M:.3,ROCK_COBBLE_NEAR_M:12,ROCK_COBBLE_P_MUL:1.15,ROCK_BOX_NEAR_M:32,ROCK_BURY_FRAC:.32,ROCK_APRON_MIX:.8,ROCK_CONTACT_BAND:.74,ROCK_CONTACT_DARK:.5,ROCK_CONTACT_DOME:.11,ROCK_CONTACT_FADE_M:60,ROCK_CONTACT_FALLOFF:.45,ROCK_CONTACT_FAR_M:100,ROCK_CONTACT_PROUD_MIN_M:.13,ROCK_CONTACT_SUN_SHAPE:.62,ROCK_CONTACT_OCC:0,ROCK_CONTACT_PROUD_MUL:.42,ROCK_CONTACT_RADIUS_MUL:1.55,ROCK_CONTACT_SEGMENTS:14,ROCK_FAN_GAIN:14,ROCK_FAN_HI_DEG:40,ROCK_FAN_LO_DEG:24,ROCK_FAN_PROBE_M:26,ROCK_GRAIN_FADE_M:34,ROCK_GRAIN_MOTTLE_M:.62,ROCK_GRAIN_MOTTLE:.28,ROCK_GRAIN_SPECKLE_M:.055,ROCK_GRAIN_SPECKLE:.13,ROCK_GRAIN_VEIN_M:.9,ROCK_GRAIN_VEIN:.34,ROCK_NORMAL_ALIGN:.8,ROCK_P_BARE:.34,ROCK_P_BARE_STEEP:.9,ROCK_P_FOREST:.04,ROCK_P_GRASS:.13,ROCK_P_SNOW:.06,ROCK_SKIRT_FAR_M:45,ROCK_SKIRT_MIN_M:.55,ROCK_SKIRT_N:4,ROCK_SKIRT_SIZE_MAX:.38,ROCK_SKIRT_SIZE_MIN:.18,ROCK_SKIRT_SPREAD:.45,ROCK_SIZE_MAX_M:2.9,ROCK_SIZE_MIN_M:.42,ROCK_SIZE_SKEW:1.5,ROCK_SLOPE_GAIN:9.5,ROCK_SLOPE_HI_DEG:34,ROCK_SLOPE_LO_DEG:16,SCREE_MIN_SLOPE_DEG:22,SHRUB_SIZE_MAX_M:1.6,SHRUB_SIZE_MIN_M:.5,TREE_BURY_FRAC:.02,TREE_CLUMP_MAX:1.08,TREE_CLUMP_MIN:.9,TREE_FAR_M:300,TREE_NEAR_M:90,TREE_NORMAL_ALIGN:.25,TREE_P_CLASS10:.32,TREE_P_CLASS20:.24,TREE_SIZE_MAX_M:17,TREE_SIZE_MIN_M:5,TREE_TREELINE_FLOOR:.8,TREE_TREELINE_HI_M:2900,TREE_TREELINE_LO_M:2300,TREE_TRUNK_RADIUS_FRAC:.016,GROUNDCOVER_ALT_FLOOR:.5,GROUNDCOVER_ALT_HI_M:960,GROUNDCOVER_ALT_LO_M:810,GROUNDCOVER_ARC_FLOOR:.45,GROUNDCOVER_BLADES:12,GROUNDCOVER_BLADE_W_MIN:.028,GROUNDCOVER_BLADE_W_SKEW:2.2,GROUNDCOVER_BLADE_TIP_SHEAR:.85,GROUNDCOVER_BLADE_W_SPAN:.03,GROUNDCOVER_BURY_FRAC:.12,GROUNDCOVER_DAMP_BASE:.12,GROUNDCOVER_DAMP_CONCAVE:.8,GROUNDCOVER_DAMP_PROBE_M:14,GROUNDCOVER_DAMP_SHORE:.65,GROUNDCOVER_DAMP_SLOPE_DEG:7,GROUNDCOVER_DENSITY_M2:38,GROUNDCOVER_DIST_KEEP:6,GROUNDCOVER_DIST_W_MUL:4.2,GROUNDCOVER_FADE_FRAC:.45,GROUNDCOVER_DIST_SIZE_POW:.4,GROUNDCOVER_DIST_SIZE_MAX:2.4,GROUNDCOVER_FALLOFF_POW:1.6,GROUNDCOVER_FAR_BAND_M:55,GROUNDCOVER_FAR_CANDIDATES:400,GROUNDCOVER_FAR_CELL_M:8,GROUNDCOVER_FAR_KEEP:3,GROUNDCOVER_FAR_M:80,GROUNDCOVER_FAR_W_MUL:2.6,GROUNDCOVER_FLOWER_POW:3,GROUNDCOVER_FLOWER_W:2.2,GROUNDCOVER_FLOWER_WAVE_M:11,GROUNDCOVER_FULL_M:9,GROUNDCOVER_HAZE_CANDIDATES:330,GROUNDCOVER_HAZE_CELL_M:12,GROUNDCOVER_HAZE_W_MUL:6,GROUNDCOVER_LOD_DIST_M:30,GROUNDCOVER_LOD_FAR_M:17,GROUNDCOVER_LOD_HAZE_M:55,GROUNDCOVER_ACCEPT_MARGIN_M:9,GROUNDCOVER_FADE_BAND:.08,GROUNDCOVER_TIER_LEAD_M:9,GROUNDCOVER_LOD_MID_M:9,GROUNDCOVER_MAX_PER_ENTRY:16e3,GROUNDCOVER_MID_BAND_M:30,GROUNDCOVER_MID_CANDIDATES:200,GROUNDCOVER_MID_CELL_M:3,GROUNDCOVER_MID_KEEP:2,GROUNDCOVER_MID_W_MUL:1.9,GROUNDCOVER_NEAR_BAND_M:17,GROUNDCOVER_NEAR_CANDIDATES:440,GROUNDCOVER_NEAR_CELL_M:3,GROUNDCOVER_NORMAL_ALIGN:.85,GROUNDCOVER_PATCH_DEPTH:.22,GROUNDCOVER_PATCH_H_MIN:.72,GROUNDCOVER_PATCH_WAVE_M:15,GROUNDCOVER_PETAL_R:.07,GROUNDCOVER_P_BARE:.42,GROUNDCOVER_P_FOREST:.7,GROUNDCOVER_P_SHRUB:.95,GROUNDCOVER_RECENTRE_M:9,GROUNDCOVER_SEDGE_W:3.6,GROUNDCOVER_SLICE_CANDIDATES:1200,GROUNDCOVER_SLOPE_HI_DEG:44,GROUNDCOVER_SLOPE_LO_DEG:26,GROUNDCOVER_SLOPE_THIN:.85,GROUNDCOVER_STRETCH:.3,GROUNDCOVER_SWARD_WAVE_M:7,GROUNDCOVER_SWAY_AMP:.12,GROUNDCOVER_SWAY_SPEED:.9,GROUNDCOVER_SWAY_WAVE_M:15,GROUNDCOVER_TILT_MAX_DEG:12,GROUNDCOVER_LATTICE_WARP:0,GROUNDCOVER_HUE_JITTER:.1,GROUNDCOVER_TINT_JITTER:.22,GROUNDCOVER_WIND_DIR_DEG:250,GROUNDCOVER_WIND_LEAN_DEG:14,GROUNDCOVER_WIND_WAVE_M:26,SCRIPT_MAX_TICKS:216e3,SCRIPT_WAYPOINT_RADIUS_M:2,FLY_SPEED_MPS:18,FLY_BOOST:4,SIM_DT:1/60,SIM_MAX_STEPS_PER_FRAME:8,GPS_SCREEN_HALF_WIDTH_M:120,GPS_SCREEN_PAD_PX:16,GPS_ROWS_PX:124,GPS_DEVICE_W:.097,GPS_DEVICE_DIST:.5,GPS_DEVICE_X:.395,GPS_DEVICE_Y_HIGH:-.177,GPS_DEVICE_Y_LOW:-.38,GPS_DEVICE_TIP_RAD:.55,GPS_DEVICE_YAW_RAD:.22,GPS_RAISE_SPEED_MPS:.6,GPS_RAISE_S:.45,GPS_BODY_ASPECT:2.2,GPS_BODY_WAIST:.95,GPS_BODY_DEPTH:.55,GPS_ANTENNA_LEN:.78,GPS_ANTENNA_W:.345,GPS_ANTENNA_X:-.336,GPS_ANTENNA_TILT_RAD:.06,GPS_STOW_S:.55,GPS_STOW_DROP:.42,GPS_STOW_DX:.12,GPS_SCREEN_PX:256,PLOT_H_PX:420,PLOT_PAD_PX:24,PLOT_W_PX:320,AA_SAMPLES_DEFAULT:4,AA_SAMPLES_OPTIONS:[0,2,4,8],DEBUG_AT_BOOT:!1,BENCH_TOL_M:3,BENCH_TOL_SUMMIT_M:6,RENDER_CALLS_MAX:120,RENDER_TRIS_MAX:3e6,SHORE_TOLERANCE_M:3,VSYNC_MISSED_MAX_FRAC:.02,VSYNC_P50_MAX_RATIO:1.15,VSYNC_P50_MIN_RATIO:.85,COMPASS_DIAM:.085,COMPASS_DIST:.45,COMPASS_X:-.26,COMPASS_Y_HIGH:-.2,COMPASS_Y_LOW:-.46,COMPASS_RAISE_S:.4,COMPASS_TIP_RAD:.3,COMPASS_CARD_LAG_S:.18,MAP_GRID_N:384,MAP_MARGIN_M:1e3,MAP_CANVAS_PX:960},Gt={liveTiles:!1,plannerFirst:!0,dressing:!1,microRelief:!1,stamina:!1,survival:!1,globalBoard:!1,devTuner:!1};let jd=null;function _c(){return jd??g.FAR_SHELL_RING_WARP}function VE(n){return Gt.devTuner&&(jd=n),_c()}function Jd(){const n=g.FAR_SHELL_SEGMENTS,e=g.FAR_SHELL_RADIAL_RINGS,t=_c(),i=g.FAR_SHELL_INNER_M,s=g.FAR_SHELL_OUTER_M,r=g.FAR_SHELL_FINE_ZONE_M,o=g.FAR_SHELL_FINE_PITCH_M,a=Math.max(0,Math.ceil((r-i)/o)),l=[];for(let d=0;d<a;d++)l.push(i+d*o);const c=[];if(t<=0)for(let d=0;d<e;d++)c.push(r*Math.pow(s/r,d/(e-1)));else{const d=Math.pow(r,t),f=Math.pow(s,t);for(let _=0;_<e;_++)c.push(Math.pow(d+(f-d)*(_/(e-1)),1/t))}const h=Float64Array.from([...l,...c]);return{radii:h,pitchAt:d=>{const f=h[d];return Math.max(d+1<h.length?h[d+1]-f:f-h[d-1],2*Math.PI*f/n)}}}function Qd(n){const e=g.FAR_SHELL_INNER_M,t=g.FAR_SHELL_SINK_FADE_M-e;return g.FAR_SHELL_SINK_M*Math.min(1,Math.max(0,(g.FAR_SHELL_SINK_FADE_M-n)/t))}function WE(n){const{radii:e,pitchAt:t}=Jd();let i=0,s=e.length-1;for(;i<s;){const o=i+s>>1;e[o]<n?i=o+1:s=o}const r=i>0&&Math.abs(e[i-1]-n)<Math.abs(e[i]-n)?i-1:i;return t(r)}function XE(n,e){const t=g.FAR_SHELL_SEGMENTS,i=Jd().radii,s=i.length,r=new Float64Array(s);for(let O=0;O<s;O++)r[O]=Qd(i[O]);const o=g.FAR_SHELL_NORMAL_STEP_M,a=new Float64Array(t),l=new Float64Array(t);for(let O=0;O<t;O++){const B=O/t*Math.PI*2;a[O]=Math.cos(B),l[O]=Math.sin(B)}const c=s*t,h=new Float32Array(c*3),u=new Float32Array(c*3),d=new Uint32Array((s-1)*t*6);let f=0;for(let O=0;O<s-1;O++)for(let B=0;B<t;B++){const V=O*t+B,ee=O*t+(B+1)%t,Y=V+t,j=ee+t;d[f++]=V,d[f++]=ee,d[f++]=Y,d[f++]=ee,d[f++]=j,d[f++]=Y}const _=new ot(h,3),M=new ot(u,3),m=O=>[Math.round(O*(s-1)/g.FAR_SHELL_BANDS),Math.round((O+1)*(s-1)/g.FAR_SHELL_BANDS)],p=O=>[Math.round(O*t/g.FAR_SHELL_SECTORS),Math.round((O+1)*t/g.FAR_SHELL_SECTORS)],S=new Wi;S.name="far-shell";const v=[];for(let O=0;O<g.FAR_SHELL_BANDS;O++){const[B,V]=m(O);for(let ee=0;ee<g.FAR_SHELL_SECTORS;ee++){const[Y,j]=p(ee),J=new Uint32Array((V-B)*(j-Y)*6);let he=0;for(let re=B;re<V;re++)for(let X=Y;X<j;X++){const se=re*t+X,W=re*t+(X+1)%t,Q=se+t,oe=W+t;J[he++]=se,J[he++]=W,J[he++]=Q,J[he++]=W,J[he++]=oe,J[he++]=Q}const Ae=new xt;Ae.setAttribute("position",_),Ae.setAttribute("normal",M),Ae.setIndex(new ot(J,1)),Ae.boundingSphere=new rs;const pe=new vt(Ae,e);pe.name=`far-shell-b${O}s${ee}`,v.push({mesh:pe,k0:B,k1:V,s0:Y,s1:j}),S.add(pe)}}const x=()=>{for(const O of v){let B=1/0,V=1/0,ee=1/0,Y=-1/0,j=-1/0,J=-1/0;for(let Ae=O.k0;Ae<=O.k1;Ae++)for(let pe=O.s0;pe<=O.s1;pe++){const re=(Ae*t+pe%t)*3,X=h[re],se=h[re+1],W=h[re+2];X<B&&(B=X),X>Y&&(Y=X),se<V&&(V=se),se>j&&(j=se),W<ee&&(ee=W),W>J&&(J=W)}const he=O.mesh.geometry.boundingSphere;he.center.set((B+Y)/2,(V+j)/2,(ee+J)/2),he.radius=.5*Math.hypot(Y-B,j-V,J-ee)}},L=S;let R=0,A=0;const w=(O,B,V,ee,Y)=>{const j=O/t|0,J=O-j*t,he=i[j],Ae=he*a[J],pe=he*l[J],re=O*3,X=ee+Ae,se=Y+pe,W=Math.max(j+1<s?i[j+1]-he:he-i[j-1],2*Math.PI*he/t);B[re]=Ae,B[re+1]=n.landformHeightAt(X,se,W)-r[j],B[re+2]=pe;const Q=(n.landformHeightAt(X+o,se,W)-n.landformHeightAt(X-o,se,W))/(2*o),oe=(n.landformHeightAt(X,se+o,W)-n.landformHeightAt(X,se-o,W))/(2*o),ie=Math.hypot(Q,1,oe);V[re]=-Q/ie,V[re+1]=1/ie,V[re+2]=-oe/ie},y=(O,B)=>{R=O,A=B,L.position.set(R,0,A),_.needsUpdate=!0,M.needsUpdate=!0,x()};function E(O,B){for(let V=0;V<c;V++)w(V,h,u,O,B);y(O,B)}const T=new Float32Array(c*3),P=new Float32Array(c*3);function z(O,B){let V=0;const ee=()=>V>=c;return{step:j=>{if(ee())return!0;const J=Math.min(c,V+Math.max(1,j)*g.FAR_SHELL_STEP_VERTS);for(;V<J;V++)w(V,T,P,O,B);return ee()?(h.set(T),u.set(P),y(O,B),!0):!1},done:ee}}return{mesh:L,rebuild:E,beginRebuild:z,centre:()=>({x:R,z:A}),dispose:()=>{for(const O of v)O.mesh.geometry.dispose()},pieces:()=>({total:v.length,tris:(s-1)*t*2})}}var Kt=Uint8Array,Gs=Uint16Array,$E=Int32Array,ef=new Kt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tf=new Kt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),KE=new Kt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),nf=function(n,e){for(var t=new Gs(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new $E(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},sf=nf(ef,2),rf=sf.b,YE=sf.r;rf[28]=258,YE[258]=28;var qE=nf(tf,0),ZE=qE.b,gc=new Gs(32768);for(var gt=0;gt<32768;++gt){var ci=(gt&43690)>>1|(gt&21845)<<1;ci=(ci&52428)>>2|(ci&13107)<<2,ci=(ci&61680)>>4|(ci&3855)<<4,gc[gt]=((ci&65280)>>8|(ci&255)<<8)>>1}var Tr=function(n,e,t){for(var i=n.length,s=0,r=new Gs(e);s<i;++s)n[s]&&++r[n[s]-1];var o=new Gs(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Gs(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],h=e-n[s],u=o[n[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[gc[u]>>l]=c}else for(a=new Gs(i),s=0;s<i;++s)n[s]&&(a[s]=gc[o[n[s]-1]++]>>15-n[s]);return a},Gr=new Kt(288);for(var gt=0;gt<144;++gt)Gr[gt]=8;for(var gt=144;gt<256;++gt)Gr[gt]=9;for(var gt=256;gt<280;++gt)Gr[gt]=7;for(var gt=280;gt<288;++gt)Gr[gt]=8;var of=new Kt(32);for(var gt=0;gt<32;++gt)of[gt]=5;var jE=Tr(Gr,9,1),JE=Tr(of,5,1),tl=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Sn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},nl=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},QE=function(n){return(n+7)/8|0},Bo=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Kt(n.subarray(e,t))},ev=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qt=function(n,e,t){var i=new Error(e||ev[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,qt),!t)throw i;return i},af=function(n,e,t,i){var s=n.length,r=0;if(!s||e.f&&!e.l)return t||new Kt(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Kt(s*3));var c=function(de){var D=t.length;if(de>D){var le=new Kt(Math.max(D*2,de));le.set(t),t=le}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,_=e.d,M=e.m,m=e.n,p=s*8;do{if(!f){h=Sn(n,u,1);var S=Sn(n,u+1,3);if(u+=3,S)if(S==1)f=jE,_=JE,M=9,m=5;else if(S==2){var R=Sn(n,u,31)+257,A=Sn(n,u+10,15)+4,w=R+Sn(n,u+5,31)+1;u+=14;for(var y=new Kt(w),E=new Kt(19),T=0;T<A;++T)E[KE[T]]=Sn(n,u+T*3,7);u+=A*3;for(var P=tl(E),z=(1<<P)-1,O=Tr(E,P,1),T=0;T<w;){var B=O[Sn(n,u,z)];u+=B&15;var v=B>>4;if(v<16)y[T++]=v;else{var V=0,ee=0;for(v==16?(ee=3+Sn(n,u,3),u+=2,V=y[T-1]):v==17?(ee=3+Sn(n,u,7),u+=3):v==18&&(ee=11+Sn(n,u,127),u+=7);ee--;)y[T++]=V}}var Y=y.subarray(0,R),j=y.subarray(R);M=tl(Y),m=tl(j),f=Tr(Y,M,1),_=Tr(j,m,1)}else qt(1);else{var v=QE(u)+4,x=n[v-4]|n[v-3]<<8,L=v+x;if(L>s){l&&qt(0);break}a&&c(d+x),t.set(n.subarray(v,L),d),e.b=d+=x,e.p=u=L*8,e.f=h;continue}if(u>p){l&&qt(0);break}}a&&c(d+131072);for(var J=(1<<M)-1,he=(1<<m)-1,Ae=u;;Ae=u){var V=f[nl(n,u)&J],pe=V>>4;if(u+=V&15,u>p){l&&qt(0);break}if(V||qt(2),pe<256)t[d++]=pe;else if(pe==256){Ae=u,f=null;break}else{var re=pe-254;if(pe>264){var T=pe-257,X=ef[T];re=Sn(n,u,(1<<X)-1)+rf[T],u+=X}var se=_[nl(n,u)&he],W=se>>4;se||qt(3),u+=se&15;var j=ZE[W];if(W>3){var X=tf[W];j+=nl(n,u)&(1<<X)-1,u+=X}if(u>p){l&&qt(0);break}a&&c(d+131072);var Q=d+re;if(d<j){var oe=r-j,ie=Math.min(j,Q);for(oe+d<0&&qt(3);d<ie;++d)t[d]=i[oe+d]}for(;d<Q;++d)t[d]=t[d-j]}}e.l=f,e.p=Ae,e.b=d,e.f=h,f&&(h=1,e.m=M,e.d=_,e.n=m)}while(!h);return d!=t.length&&o?Bo(t,0,d):t.subarray(0,d)},tv=new Kt(0),lf=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&qt(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&qt(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2},il=function(){function n(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var i=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:i?i.length:0},this.o=new Kt(32768),this.p=new Kt(0),i&&this.o.set(i)}return n.prototype.e=function(e){if(this.ondata||qt(5),this.d&&qt(4),!this.p.length)this.p=e;else if(e.length){var t=new Kt(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},n.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,i=af(this.p,this.s,this.o);this.ondata(Bo(i,t,this.s.b),this.d),this.o=Bo(i,this.s.b-32768),this.s.b=this.o.length,this.p=Bo(this.p,this.s.p/8|0),this.s.p&=7},n.prototype.push=function(e,t){this.e(e),this.c(t)},n}(),cu=function(){function n(e,t){il.call(this,e,t),this.v=e&&e.dictionary?2:1}return n.prototype.push=function(e,t){if(il.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(lf(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&qt(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),il.prototype.c.call(this,t)},n}();function nv(n,e){return af(n.subarray(lf(n,e),-4),{i:2},e,e)}var iv=typeof TextDecoder<"u"&&new TextDecoder,sv=0;try{iv.decode(tv,{stream:!0}),sv=1}catch{}function hu(n,e="utf8"){return new TextDecoder(e).decode(n)}const rv=new TextEncoder;function ov(n){return rv.encode(n)}const av=1024*8,lv=(()=>{const n=new Uint8Array(4),e=new Uint32Array(n.buffer);return!((e[0]=1)&n[0])})(),sl={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class jc{constructor(e=av,t={}){Qe(this,"buffer");Qe(this,"byteLength");Qe(this,"byteOffset");Qe(this,"length");Qe(this,"offset");Qe(this,"lastWrittenByte");Qe(this,"littleEndian");Qe(this,"_data");Qe(this,"_mark");Qe(this,"_marks");let i=!1;typeof e=="number"?e=new ArrayBuffer(e):(i=!0,this.lastWrittenByte=e.byteLength);const s=t.offset?t.offset>>>0:0,r=e.byteLength-s;let o=s;(ArrayBuffer.isView(e)||e instanceof jc)&&(e.byteLength!==e.buffer.byteLength&&(o=e.byteOffset+s),e=e.buffer),i?this.lastWrittenByte=r:this.lastWrittenByte=0,this.buffer=e,this.length=r,this.byteLength=r,this.byteOffset=o,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,o,r),this._mark=0,this._marks=[]}available(e=1){return this.offset+e<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(e=1){return this.offset+=e,this}back(e=1){return this.offset-=e,this}seek(e){return this.offset=e,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const e=this._marks.pop();if(e===void 0)throw new Error("Mark stack empty");return this.seek(e),this}rewind(){return this.offset=0,this}ensureAvailable(e=1){if(!this.available(e)){const i=(this.offset+e)*2,s=new Uint8Array(i);s.set(new Uint8Array(this.buffer)),this.buffer=s.buffer,this.length=i,this.byteLength=i,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(e=1){return this.readArray(e,"uint8")}readArray(e,t){const i=sl[t].BYTES_PER_ELEMENT*e,s=this.byteOffset+this.offset,r=this.buffer.slice(s,s+i);if(this.littleEndian===lv&&t!=="uint8"&&t!=="int8"){const a=new Uint8Array(this.buffer.slice(s,s+i));a.reverse();const l=new sl[t](a.buffer);return this.offset+=i,l.reverse(),l}const o=new sl[t](r);return this.offset+=i,o}readInt16(){const e=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}readUint16(){const e=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,e}readInt32(){const e=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}readUint32(){const e=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}readFloat32(){const e=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}readFloat64(){const e=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}readBigInt64(){const e=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,e}readBigUint64(){const e=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,e}readChar(){return String.fromCharCode(this.readInt8())}readChars(e=1){let t="";for(let i=0;i<e;i++)t+=this.readChar();return t}readUtf8(e=1){return hu(this.readBytes(e))}decodeText(e=1,t="utf8"){return hu(this.readBytes(e),t)}writeBoolean(e){return this.writeUint8(e?255:0),this}writeInt8(e){return this.ensureAvailable(1),this._data.setInt8(this.offset++,e),this._updateLastWrittenByte(),this}writeUint8(e){return this.ensureAvailable(1),this._data.setUint8(this.offset++,e),this._updateLastWrittenByte(),this}writeByte(e){return this.writeUint8(e)}writeBytes(e){this.ensureAvailable(e.length);for(let t=0;t<e.length;t++)this._data.setUint8(this.offset++,e[t]);return this._updateLastWrittenByte(),this}writeInt16(e){return this.ensureAvailable(2),this._data.setInt16(this.offset,e,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(e){return this.ensureAvailable(2),this._data.setUint16(this.offset,e,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(e){return this.ensureAvailable(4),this._data.setInt32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(e){return this.ensureAvailable(4),this._data.setUint32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(e){return this.ensureAvailable(4),this._data.setFloat32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(e){return this.ensureAvailable(8),this._data.setFloat64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(e){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(e){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(e){return this.writeUint8(e.charCodeAt(0))}writeChars(e){for(let t=0;t<e.length;t++)this.writeUint8(e.charCodeAt(t));return this}writeUtf8(e){return this.writeBytes(ov(e))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}const cf=[];for(let n=0;n<256;n++){let e=n;for(let t=0;t<8;t++)e&1?e=3988292384^e>>>1:e=e>>>1;cf[n]=e}const uu=4294967295;function cv(n,e,t){let i=n;for(let s=0;s<t;s++)i=cf[(i^e[s])&255]^i>>>8;return i}function hv(n,e){return(cv(uu,n,e)^uu)>>>0}function du(n,e,t){const i=n.readUint32(),s=hv(new Uint8Array(n.buffer,n.byteOffset+n.offset-e-4,e),e);if(s!==i)throw new Error(`CRC mismatch for chunk ${t}. Expected ${i}, found ${s}`)}function hf(n,e,t){for(let i=0;i<t;i++)e[i]=n[i]}function uf(n,e,t,i){let s=0;for(;s<i;s++)e[s]=n[s];for(;s<t;s++)e[s]=n[s]+e[s-i]&255}function df(n,e,t,i){let s=0;if(t.length===0)for(;s<i;s++)e[s]=n[s];else for(;s<i;s++)e[s]=n[s]+t[s]&255}function ff(n,e,t,i,s){let r=0;if(t.length===0){for(;r<s;r++)e[r]=n[r];for(;r<i;r++)e[r]=n[r]+(e[r-s]>>1)&255}else{for(;r<s;r++)e[r]=n[r]+(t[r]>>1)&255;for(;r<i;r++)e[r]=n[r]+(e[r-s]+t[r]>>1)&255}}function pf(n,e,t,i,s){let r=0;if(t.length===0){for(;r<s;r++)e[r]=n[r];for(;r<i;r++)e[r]=n[r]+e[r-s]&255}else{for(;r<s;r++)e[r]=n[r]+t[r]&255;for(;r<i;r++)e[r]=n[r]+uv(e[r-s],t[r],t[r-s])&255}}function uv(n,e,t){const i=n+e-t,s=Math.abs(i-n),r=Math.abs(i-e),o=Math.abs(i-t);return s<=r&&s<=o?n:r<=o?e:t}function dv(n,e,t,i,s,r){switch(n){case 0:hf(e,t,s);break;case 1:uf(e,t,s,r);break;case 2:df(e,t,i,s);break;case 3:ff(e,t,i,s,r);break;case 4:pf(e,t,i,s,r);break;default:throw new Error(`Unsupported filter: ${n}`)}}const fv=new Uint16Array([255]),pv=new Uint8Array(fv.buffer),mv=pv[0]===255;function _v(n){const{data:e,width:t,height:i,channels:s,depth:r}=n,o=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],a=Math.ceil(r/8)*s,l=new Uint8Array(i*t*a);let c=0;for(let h=0;h<7;h++){const u=o[h],d=Math.ceil((t-u.x)/u.xStep),f=Math.ceil((i-u.y)/u.yStep);if(d<=0||f<=0)continue;const _=d*a,M=new Uint8Array(_);for(let m=0;m<f;m++){const p=e[c++],S=e.subarray(c,c+_);c+=_;const v=new Uint8Array(_);dv(p,S,v,M,_,a),M.set(v);for(let x=0;x<d;x++){const L=u.x+x*u.xStep,R=u.y+m*u.yStep;if(!(L>=t||R>=i))for(let A=0;A<a;A++)l[(R*t+L)*a+A]=v[x*a+A]}}}if(r===16){const h=new Uint16Array(l.buffer);if(mv)for(let u=0;u<h.length;u++)h[u]=gv(h[u]);return h}else return l}function gv(n){return(n&255)<<8|n>>8&255}const Mv=new Uint16Array([255]),Ev=new Uint8Array(Mv.buffer),vv=Ev[0]===255,xv=new Uint8Array(0);function fu(n){const{data:e,width:t,height:i,channels:s,depth:r}=n,o=Math.ceil(r/8)*s,a=Math.ceil(r/8*s*t),l=new Uint8Array(i*a);let c=xv,h=0,u,d;for(let f=0;f<i;f++){switch(u=e.subarray(h+1,h+1+a),d=l.subarray(f*a,(f+1)*a),e[h]){case 0:hf(u,d,a);break;case 1:uf(u,d,a,o);break;case 2:df(u,d,c,a);break;case 3:ff(u,d,c,a,o);break;case 4:pf(u,d,c,a,o);break;default:throw new Error(`Unsupported filter: ${e[h]}`)}c=d,h+=a+1}if(r===16){const f=new Uint16Array(l.buffer);if(vv)for(let _=0;_<f.length;_++)f[_]=Sv(f[_]);return f}else return l}function Sv(n){return(n&255)<<8|n>>8&255}const Go=Uint8Array.of(137,80,78,71,13,10,26,10);function pu(n){if(!Av(n.readBytes(Go.length)))throw new Error("wrong PNG signature")}function Av(n){if(n.length<Go.length)return!1;for(let e=0;e<Go.length;e++)if(n[e]!==Go[e])return!1;return!0}const Rv="tEXt",yv=0,mf=new TextDecoder("latin1");function Tv(n){if(wv(n),n.length===0||n.length>79)throw new Error("keyword length must be between 1 and 79")}const bv=/^[\u0000-\u00FF]*$/;function wv(n){if(!bv.test(n))throw new Error("invalid latin1 text")}function Cv(n,e,t){const i=_f(e);n[i]=Nv(e,t-i.length-1)}function _f(n){for(n.mark();n.readByte()!==yv;);const e=n.offset;n.reset();const t=mf.decode(n.readBytes(e-n.offset-1));return n.skip(1),Tv(t),t}function Nv(n,e){return mf.decode(n.readBytes(e))}const tn={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},rl={UNKNOWN:-1,DEFLATE:0},mu={UNKNOWN:-1,ADAPTIVE:0},ol={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},mo={NONE:0,BACKGROUND:1,PREVIOUS:2},al={SOURCE:0,OVER:1};class Iv extends jc{constructor(t,i={}){super(t);Qe(this,"_checkCrc");Qe(this,"_inflator");Qe(this,"_png");Qe(this,"_apng");Qe(this,"_end");Qe(this,"_hasPalette");Qe(this,"_palette");Qe(this,"_hasTransparency");Qe(this,"_transparency");Qe(this,"_compressionMethod");Qe(this,"_filterMethod");Qe(this,"_interlaceMethod");Qe(this,"_colorType");Qe(this,"_isAnimated");Qe(this,"_numberOfFrames");Qe(this,"_numberOfPlays");Qe(this,"_frames");Qe(this,"_writingDataChunks");Qe(this,"_chunks");Qe(this,"_inflatorResult");const{checkCrc:s=!1}=i;this._checkCrc=s,this._inflator=new cu((r,o)=>{if(this._chunks.push(r),o){const a=this._chunks.reduce((c,h)=>c+h.length,0);this._inflatorResult=new Uint8Array(a);let l=0;for(const c of this._chunks)this._inflatorResult.set(c,l),l+=c.length;this._chunks=[]}}),this._chunks=[],this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=rl.UNKNOWN,this._filterMethod=mu.UNKNOWN,this._interlaceMethod=ol.UNKNOWN,this._colorType=tn.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this._inflatorResult=new Uint8Array(0),this.setBigEndian()}decode(){for(pu(this);!this._end;){const t=this.readUint32(),i=this.readChars(4);this.decodeChunk(t,i)}return this._inflator.push(new Uint8Array(0),!0),this.decodeImage(),this._png}decodeApng(){for(pu(this);!this._end;){const t=this.readUint32(),i=this.readChars(4);this.decodeApngChunk(t,i)}return this.decodeApngImage(),this._apng}decodeChunk(t,i){const s=this.offset;switch(i){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(t);break;case"IDAT":this.decodeIDAT(t);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(t);break;case"iCCP":this.decodeiCCP(t);break;case Rv:Cv(this._png.text,this,t);break;case"pHYs":this.decodepHYs();break;default:this.skip(t);break}if(this.offset-s!==t)throw new Error(`Length mismatch while decoding chunk ${i}`);this._checkCrc?du(this,t+4,i):this.skip(4)}decodeApngChunk(t,i){const s=this.offset;switch(i!=="fdAT"&&i!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),i){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(t);break;default:this.decodeChunk(t,i),this.offset=s+t;break}if(this.offset-s!==t)throw new Error(`Length mismatch while decoding chunk ${i}`);this._checkCrc?du(this,t+4,i):this.skip(4)}decodeIHDR(){const t=this._png;t.width=this.readUint32(),t.height=this.readUint32(),t.depth=Dv(this.readUint8());const i=this.readUint8();this._colorType=i;let s;switch(i){case tn.GREYSCALE:s=1;break;case tn.TRUECOLOUR:s=3;break;case tn.INDEXED_COLOUR:s=1;break;case tn.GREYSCALE_ALPHA:s=2;break;case tn.TRUECOLOUR_ALPHA:s=4;break;case tn.UNKNOWN:default:throw new Error(`Unknown color type: ${i}`)}if(this._png.channels=s,this._compressionMethod=this.readUint8(),this._compressionMethod!==rl.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const t={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(t)}decodePLTE(t){if(t%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${t}`);const i=t/3;this._hasPalette=!0;const s=[];this._palette=s;for(let r=0;r<i;r++)s.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(t){this._writingDataChunks=!0;const i=t,s=this.offset+this.byteOffset;try{this._inflator.push(new Uint8Array(this.buffer,s,i),!1)}catch(r){throw new Error("Error while decompressing the data:",{cause:r})}this.skip(t)}decodeFDAT(t){this._writingDataChunks=!0;let i=t,s=this.offset+this.byteOffset;s+=4,i-=4;try{this._inflator.push(new Uint8Array(this.buffer,s,i),!1)}catch(r){throw new Error("Error while decompressing the data:",{cause:r})}this.skip(t)}decodetRNS(t){switch(this._colorType){case tn.GREYSCALE:case tn.TRUECOLOUR:{if(t%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);if(t/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(t/2);for(let i=0;i<t/2;i++)this._transparency[i]=this.readUint16();break}case tn.INDEXED_COLOUR:{if(t>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);let i=0;for(;i<t;i++){const s=this.readByte();this._palette[i].push(s)}for(;i<this._palette.length;i++)this._palette[i].push(255);break}case tn.UNKNOWN:case tn.GREYSCALE_ALPHA:case tn.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(t){const i=_f(this),s=this.readUint8();if(s!==rl.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${s}`);const r=this.readBytes(t-i.length-2);this._png.iccEmbeddedProfile={name:i,profile:nv(r)}}decodepHYs(){const t=this.readUint32(),i=this.readUint32(),s=this.readByte();this._png.resolution={x:t,y:i,unit:s}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let t=0;t<this._numberOfFrames;t++){const i={sequenceNumber:this._frames[t].sequenceNumber,delayNumber:this._frames[t].delayNumber,delayDenominator:this._frames[t].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},s=this._frames.at(t);if(s){if(s.data=fu({data:s.data,width:s.width,height:s.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),t===0||s.xOffset===0&&s.yOffset===0&&s.width===this._png.width&&s.height===this._png.height)i.data=s.data;else{const r=this._apng.frames.at(t-1);this.disposeFrame(s,r,i),this.addFrameDataToCanvas(i,s)}this._apng.frames.push(i)}}return this._apng}disposeFrame(t,i,s){switch(t.disposeOp){case mo.NONE:break;case mo.BACKGROUND:for(let r=0;r<this._png.height;r++)for(let o=0;o<this._png.width;o++){const a=(r*t.width+o)*this._png.channels;for(let l=0;l<this._png.channels;l++)s.data[a+l]=0}break;case mo.PREVIOUS:s.data.set(i.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(t,i){const s=1<<this._png.depth,r=(o,a)=>{const l=((o+i.yOffset)*this._png.width+i.xOffset+a)*this._png.channels,c=(o*i.width+a)*this._png.channels;return{index:l,frameIndex:c}};switch(i.blendOp){case al.SOURCE:for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){const{index:l,frameIndex:c}=r(o,a);for(let h=0;h<this._png.channels;h++)t.data[l+h]=i.data[c+h]}break;case al.OVER:for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){const{index:l,frameIndex:c}=r(o,a);for(let h=0;h<this._png.channels;h++){const u=i.data[c+this._png.channels-1]/s,d=h%(this._png.channels-1)===0?1:i.data[c+h],f=Math.floor(u*d+(1-u)*t.data[l+h]);t.data[l+h]+=f}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){const t=this._inflatorResult;if(this._filterMethod!==mu.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===ol.NO_INTERLACE)this._png.data=fu({data:t,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===ol.ADAM7)this._png.data=_v({data:t,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){this._inflator.push(new Uint8Array(0),!0);const t=this._inflatorResult,i=this._frames.at(-1);i?i.data=t:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:mo.NONE,blendOp:al.SOURCE,data:t}),this._inflator=new cu((s,r)=>{if(this._chunks.push(s),r){const o=this._chunks.reduce((l,c)=>l+c.length,0);this._inflatorResult=new Uint8Array(o);let a=0;for(const l of this._chunks)this._inflatorResult.set(l,a),a+=l.length;this._chunks=[]}}),this._chunks=[],this._writingDataChunks=!1}}function Dv(n){if(n!==1&&n!==2&&n!==4&&n!==8&&n!==16)throw new Error(`invalid bit depth: ${n}`);return n}function zr(n,e){return new Iv(n,e).decode()}const _u=2,gf="/fixtures/tiles/manifest.json";async function Lv(n=gf){const e=await fetch(n);if(!e.ok)throw new Error(`fixture manifest missing: ${n} (${e.status})`);return Pv(await e.json(),n)}function Pv(n,e){const t=n.version;if(t!==_u)throw new Error(`fixture manifest ${e} declares version ${JSON.stringify(t)}; this build reads ${_u}. Re-snapshot the pack (npm run fixtures -- --line=<id> …). Without this check the pack loads, and the first thing to fail is the corridorKey compare — which reports key DRIFT for a pack whose actual problem is its schema.`);return n}function Ov(n,e,t){return`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${n}/${e}/${t}.png`}function Mf(n,e,t,i){const s=new Float32Array(e*t);for(let r=0;r<e*t;r++){const o=r*i;s[r]=n[o]*256+n[o+1]+n[o+2]/256-32768}return s}function Ef(n){const e=zr(n);if(e.depth!==8)throw new Error(`terrarium tile must be 8-bit, got ${e.depth}`);if(e.channels!==3&&e.channels!==4)throw new Error(`terrarium tile must be RGB(A), got ${e.channels} channels`);return{width:e.width,height:e.height,elevations:Mf(e.data,e.width,e.height,e.channels)}}function Uv(){return globalThis.__DATA_MODE==="fixtures"}const vf="/fixtures/tiles";function xf(n,e,t,i=vf){return`${i}/terrarium-${n}-${e}-${t}.png`}class Fv{constructor(e=vf){this.root=e}async getTileBytes(e,t,i){const s=xf(e,t,i,this.root),r=await fetch(s);if(!r.ok)throw new Error(`fixture tile missing: ${s} (${r.status})`);return new Uint8Array(await r.arrayBuffer())}}class Mc{async getTileBytes(e,t,i){if(Uv())throw new Error(`live tile fetch attempted in fixtures mode: ${e}/${t}/${i}`);const s=await fetch(Ov(e,t,i));if(!s.ok)throw new Error(`terrarium fetch failed: ${e}/${t}/${i} (${s.status})`);return new Uint8Array(await s.arrayBuffer())}}const mt=256,kv=["near","far"];function Ec(n){const e=kv.indexOf(n);if(e<0)throw new Error(`roleRank: unknown TileRole ${JSON.stringify(n)} — add it to TILE_ROLE_ORDER, which is what fixes pack ORDER as well as this lookup`);return e}function Sf(n,e){return Ec(n.role)-Ec(e.role)||e.z-n.z||n.y-e.y||n.x-e.x}function Pi(n,e,t){return`${n}/${e}/${t}`}function vc(n,e,t){const i=2**t,s=e*Math.PI/180;return{xf:(n+180)/360*i,yf:(1-Math.log(Math.tan(s)+1/Math.cos(s))/Math.PI)/2*i}}function is(n,e,t){const i=2**t,s=(n+180)/360*i,r=e*Math.PI/180,o=(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i,a=Math.floor(s),l=Math.floor(o);return{x:a,y:l,z:t,px:Math.min(mt-1,Math.floor((s-a)*mt)),py:Math.min(mt-1,Math.floor((o-l)*mt))}}function Bv(n,e,t){const i=2**t,s=Math.PI-2*Math.PI*e/i;return{lon:n/i*360-180,lat:180/Math.PI*Math.atan(.5*(Math.exp(s)-Math.exp(-s)))}}function Gv(n,e){return 156543.03392*Math.cos(n*Math.PI/180)/2**e}const Jc=111320;function Qc(n,e){return{lat:n,lon:e,metersPerDegLon:Jc*Math.cos(n*Math.PI/180)}}function ln(n,e,t){return{lat:n.lat-t/Jc,lon:n.lon+e/n.metersPerDegLon}}function ei(n,e,t){return{x:(t-n.lon)*n.metersPerDegLon,z:(n.lat-e)*Jc}}function Xi(n,e,t,i){const{lat:s,lon:r}=ln(n,e,t),o=vc(r,s,i);return{gx:o.xf*mt,gy:o.yf*mt}}const zv=2*Math.PI;function _a(n,e){return Math.hypot(e.x-n.x,e.z-n.z)}function Af(n,e){const t=Math.atan2(e.x-n.x,n.z-e.z);return t<0?t+zv:t}function Rf(n,e,t){const i=e.x-n.x,s=e.z-n.z,r=Math.hypot(i,s),o=t.x-n.x,a=t.z-n.z,l=(o*i+a*s)/r,c=(i*a-s*o)/r,h=l<0?Math.hypot(o,a):l>r?_a(e,t):Math.abs(c);return{along:Math.min(Math.max(l,0),r),xtdSigned:c,dist:h}}const Hv=6378137,Mi=Math.PI/180;function eh(n,e){const t=n.lat*Mi,i=e.lat*Mi,s=Math.sin((i-t)/2)**2+Math.cos(t)*Math.cos(i)*Math.sin((e.lon-n.lon)*Mi/2)**2;return 2*Hv*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))}function yf(n,e){const t=n.lat*Mi,i=e.lat*Mi,s=(e.lon-n.lon)*Mi,r=Math.cos(i)*Math.cos(s),o=Math.cos(i)*Math.sin(s),a=Math.atan2(Math.sin(t)+Math.sin(i),Math.hypot(Math.cos(t)+r,o)),l=n.lon+Math.atan2(o,Math.cos(t)+r)/Mi;return{lat:a/Mi,lon:(l+540)%360-180}}function Tf(n,e,t){if(!t){const r=yf(n,e);t=Qc(r.lat,r.lon)}const i=ei(t,n.lat,n.lon),s=ei(t,e.lat,e.lon);return{frame:t,a:i,b:s,lengthM:_a(i,s),bearingRad:Af(i,s)}}function gu(n,e,t,i,s,r){const o=ln(n,e,i),a=ln(n,t,s),l=is(o.lon,o.lat,r),c=is(a.lon,a.lat,r);return{x0:Math.min(l.x,c.x),x1:Math.max(l.x,c.x),y0:Math.min(l.y,c.y),y1:Math.max(l.y,c.y)}}function Mu(n,e,t,i,s){for(let r=t.y0;r<=t.y1;r++)for(let o=t.x0;o<=t.x1;o++){const a=`${i}/${o}/${r}`;e.has(a)||(e.add(a),n.push({z:i,x:o,y:r,role:s}))}}function bf(n){const e=yf(n.a,n.b),t=Qc(e.lat,e.lon),i=Tf(n.a,n.b,t),s=Math.min(i.a.x,i.b.x)-n.nearMarginM,r=Math.max(i.a.x,i.b.x)+n.nearMarginM,o=Math.min(i.a.z,i.b.z)-n.nearMarginM,a=Math.max(i.a.z,i.b.z)+n.nearMarginM,l=[],c=new Set;Mu(l,c,gu(t,s,r,o,a,n.nearZoom),n.nearZoom,"near");for(const h of n.coarse)Mu(l,c,gu(t,-h.radiusM,h.radiusM,-h.radiusM,h.radiusM,h.zoom),h.zoom,"far");return l.sort(Sf),{spec:n,frame:t,midpoint:e,lengthM:eh(n.a,n.b),bearingRad:i.bearingRad,a:i.a,b:i.b,tiles:l}}function Vv(n){return`${n.spec.nearZoom}/${n.spec.coarse.map(e=>e.zoom).join("+")}/${n.tiles.length}/${n.tiles.map(e=>`${e.z}.${e.x}.${e.y}`).join(",")}`}const Wv=(()=>{let n=0,e=0;for(let t=0;t<=1e3;t++){const i=t/1e3,s=i*i,r=s*i,o=[.5*(-i+2*s-r),.5*(2-5*s+3*r),.5*(i+4*s-3*r),.5*(-s+r)];let a=0,l=0;for(const c of o)c>0?a+=c:l-=c;a>n&&(n=a),l>e&&(e=l)}return n*n+e*e})();class wf{constructor(e){Qe(this,"tiles",new Map);Qe(this,"primaryBounds",null);Qe(this,"hiM",-1/0);Qe(this,"loM",1/0);this.zoom=e}get maxSampleBoundM(){const e=this.boundParts;return e.maxPost+e.overshoot}get boundParts(){if(!Number.isFinite(this.hiM))return{maxPost:0,overshoot:0};const e=Math.max(0,this.hiM),t=Math.min(0,this.loM);return{maxPost:e,overshoot:(e-t)*(Wv-1)}}addTile(e,t,i,s=!1){this.tiles.set(`${e}/${t}`,i);const r=i.elevations;for(let o=0;o<r.length;o++){const a=r[o];a>this.hiM&&(this.hiM=a),a<this.loM&&(this.loM=a)}(s||this.primaryBounds===null)&&(this.primaryBounds={gx0:e*mt,gy0:t*mt,gx1:e*mt+mt-1,gy1:t*mt+mt-1})}removeTile(e,t){this.tiles.delete(`${e}/${t}`)}get tileCount(){return this.tiles.size}hasTileAtPixel(e,t){return this.tiles.has(`${Math.floor(e/mt)}/${Math.floor(t/mt)}`)}pixel(e,t){let i=Math.floor(e/mt),s=Math.floor(t/mt),r=this.tiles.get(`${i}/${s}`);if(!r){const l=this.primaryBounds;if(!l||(e=Math.min(l.gx1,Math.max(l.gx0,e)),t=Math.min(l.gy1,Math.max(l.gy0,t)),i=Math.floor(e/mt),s=Math.floor(t/mt),r=this.tiles.get(`${i}/${s}`),!r))return 0}const o=e-i*mt,a=t-s*mt;return r.elevations[a*r.width+o]}}function Eu(n,e,t,i,s){const r=s*s,o=r*s;return .5*(2*e+(-n+t)*s+(2*n-5*e+4*t-i)*r+(-n+3*e-3*t+i)*o)}function vu(n,e,t){const i=e-.5,s=t-.5,r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=[];for(let h=-1;h<=2;h++)c.push(Eu(n.pixel(r-1,o+h),n.pixel(r,o+h),n.pixel(r+1,o+h),n.pixel(r+2,o+h),a));return Eu(c[0],c[1],c[2],c[3],l)}function Oi(n,e,t,i){let s=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761)^i;return s=Math.imul(s^s>>>15,625341585),s^=s>>>13,s=Math.imul(s,2246822507),((s^s>>>16)>>>0)/4294967296}function xc(n,e){if(e===void 0||!(e>0))return 1;const t=Math.min(1,Math.max(0,(n/e-2)/2));return t*t*(3-2*t)}function Xv(n){const e=n.depthM??g.RAVINE_DEPTH_M,t=n.grainAmpM??g.GRAIN_AMP_M,i=n.narrow??g.RAVINE_NARROW,s=n.jitter??g.RAVINE_JITTER,r=n.levels??g.RAVINE_LEVELS,o=[];for(let d=n.ceilM,f=0;f<r&&d>n.floorM*1.01;d/=g.RAVINE_HORTON,f++)o.push(d);const a=o.map((d,f)=>Math.pow(g.RAVINE_HORTON,-f*g.RAVINE_DEPTH_FALLOFF)),l=a.reduce((d,f)=>d+f,0)||1,c=a.map(d=>e*d/l),h=c.reduce((d,f)=>d+f,0)+t,u=d=>Math.pow((1+Math.cos(d))*.5,i);return{peakM:h,waves:o,at:(d,f,_,M,m,p)=>{if(m<=0)return 0;let S=0;for(let x=0;x<o.length;x++){const L=o[x],R=xc(L,p);if(R<=0)continue;const A=L,w=(d+n.phaseX)/A,y=(f+n.phaseZ)/A,E=Math.floor(w),T=Math.floor(y);let P=0,z=0,O=0;for(let V=-1;V<=1;V++)for(let ee=-1;ee<=1;ee++){const Y=E+ee,j=T+V,J=(Oi(Y,j,x,n.seed)-.5)*s,he=(Oi(Y,j,x,n.seed^1542469173)-.5)*s,Ae=(w-(Y+.5+J))*A,pe=(y-(j+.5+he))*A,re=(Ae*Ae+pe*pe)/(.5*L*(.5*L));if(re>9)continue;const X=Math.exp(-re),se=-Ae*M+pe*_,W=Oi(Y,j,x+64,n.seed)*(2*Math.PI),Q=2*Math.PI*se/L+W;P+=X*Math.cos(Q),z+=X*Math.sin(Q),O+=X}if(O<=0)continue;const B=Math.hypot(P,z)/O;S-=c[x]*m*B*R*u(Math.atan2(z,P))}const v=xc(g.GRAIN_WAVE_M,p);if(t>0&&v>0){const x=(d+n.phaseX)/g.GRAIN_DOMAIN_M,L=(f+n.phaseZ)/g.GRAIN_DOMAIN_M,R=Math.floor(x),A=Math.floor(L),w=x-R,y=L-A,E=pe=>pe*pe*(3-2*pe),T=Oi(R,A,127,n.seed),P=Oi(R+1,A,127,n.seed),z=Oi(R,A+1,127,n.seed),O=Oi(R+1,A+1,127,n.seed),B=E(w),V=E(y),ee=((T*(1-B)+P*B)*(1-V)+(z*(1-B)+O*B)*V)*Math.PI,Y=Math.cos(ee),j=Math.sin(ee),J=(d+n.phaseX)*Y+(f+n.phaseZ)*j,he=2*Math.PI*J/g.GRAIN_WAVE_M,Ae=Math.pow((1+Math.cos(he))*.5,g.GRAIN_NARROW)-.375;S+=t*m*v*Ae}return S}}}function $v(n,e={}){const t=2*g.CHUNK_GRID_STEP_M,i=(e.windowPosts??g.TERRAIN_DETAIL_WINDOW_POSTS)*n,s=i/2,r=[];for(let a=s;a>t*1.01;a/=2)r.push(a);const o=Math.max(0,Math.min(e.ridgeOctaves??g.TERRAIN_DETAIL_RIDGE_OCTAVES,r.length)-1);return{windowM:i,ceilM:s,floorM:t,octaves:Math.max(0,Math.log2(s/t)),waves:r,gateM:r.length===0?0:r[o]}}function xu(n,e,t,i={}){const s=(i.windowPosts??g.TERRAIN_DETAIL_WINDOW_POSTS)*n,r=o=>(o%s+s)%s;return{phaseX:r(n*e),phaseZ:r(n*t)}}function nn(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761)|0;return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}const Ct=n=>n*n*(3-2*n);function Su(n,e){return Ct(Math.min(1,n/e))*Ct(Math.min(1,(1-n)/e))}function Kv(){let e=0;for(let t=0;t<64;t++){const i=Ct((t+.5)/64);for(let s=0;s<64;s++){const r=Ct((s+.5)/64),o=(1-i)*(1-r),a=i*(1-r),l=(1-i)*r,c=i*r;e+=o*o+a*a+l*l+c*c}}return e/(64*64)}class yn{constructor(e,t){Qe(this,"mask");Qe(this,"kx");Qe(this,"kz");Qe(this,"ok");Qe(this,"v");const i=1<<e;this.mask=i-1,this.kx=new Int32Array(i),this.kz=new Int32Array(i),this.ok=new Uint8Array(i),this.v=new Float64Array(i*t)}slot(e,t){return(Math.imul(e,2654435761)^Math.imul(t,2246822507))>>>0&this.mask}hit(e,t,i){return this.ok[e]===1&&this.kx[e]===t&&this.kz[e]===i}claim(e,t,i){this.ok[e]=1,this.kx[e]=t,this.kz[e]=i}}const ys=14,dn=6,Au=2.3;function Yv(n){const e=$v(n.demCellM,n),t=n.rmsM??g.TERRAIN_DETAIL_RMS_M,i=n.ridgeGain??g.TERRAIN_DETAIL_RIDGE_GAIN,s=e.waves.length;if(s===0||t<=0&&i<=0&&(n.ravineDepthM??g.RAVINE_DEPTH_M)<=0)return{at:()=>0,band:e,peakM:0};const{landformHeightAt:r,waterFadeAt:o,phaseX:a,phaseZ:l,seed:c}=n,h=n.taper??g.TERRAIN_DETAIL_TAPER,u=(1-h)*(1-h),d=n.H??g.TERRAIN_DETAIL_H,f=Math.min(n.ridgeOctaves??g.TERRAIN_DETAIL_RIDGE_OCTAVES,s),_=e.gateM,M=n.ridgeCap??g.TERRAIN_DETAIL_RIDGE_CAP,m=n.wander??g.TERRAIN_DETAIL_WANDER,p=n.reposeDeg??0,S=p>0?Math.tan(p*Math.PI/180):0,v=n.elevGainPerKm??0,x=n.elevRefM??500,L=n.hVary??0,R=Kv(),A=[];let w=0;for(let ne=0;ne<s;ne++){const _e=Math.pow(.5,ne*d);A.push(_e),w+=_e*_e}const y=Math.sqrt(R/12*w),E=A.map(ne=>t*ne/y),T=n.slopeFloor??g.TERRAIN_DETAIL_SLOPE_FLOOR,P=n.slopeLoDeg??g.TERRAIN_DETAIL_SLOPE_LO_DEG,z=n.slopeHiDeg??g.TERRAIN_DETAIL_SLOPE_HI_DEG,O=n.aniso??g.TERRAIN_DETAIL_ANISO,B=Xv({ceilM:e.ceilM,floorM:e.floorM,phaseX:a,phaseZ:l,seed:c,depthM:n.ravineDepthM,levels:n.ravineLevels,grainAmpM:n.grainAmpM}),V=B.peakM>0&&B.waves.length>0,ee=(ne,_e,Te,Ce)=>{const ye=o(ne,_e,2*Te);if(Ce[4]=ye,Ce[5]=0,ye<=0){Ce[0]=0,Ce[1]=1,Ce[2]=0,Ce[3]=0;return}const Ne=r(ne+Te,_e),Pe=r(ne-Te,_e),ae=r(ne,_e+Te),N=r(ne,_e-Te),K=(Ne-Pe)/(2*Te),C=(ae-N)/(2*Te),G=Math.hypot(K,C),Z=Math.atan(G)*180/Math.PI,Me=Math.max(0,Math.min(1,(Z-P)/(z-P)));Ce[0]=ye*(T+(1-T)*Ct(Me)),Ce[1]=G>1e-9?-K/G:1,Ce[2]=G>1e-9?-C/G:0,Ce[3]=Ct(Math.max(0,Math.min(1,(Z-2)/7))),Ce[5]=G},Y=(ne,_e,Te)=>r(ne,_e)-(r(ne+Te,_e)+r(ne-Te,_e)+r(ne,_e+Te)+r(ne,_e-Te))/4,j=(ne,_e,Te,Ce,ye,Ne)=>{const Pe=5*Te,ae=Math.floor(ne/Pe),N=Math.floor(_e/Pe),K=Ct(ne/Pe-ae),C=Ct(_e/Pe-N),G=nn(ae,N,Ne^20973),Z=nn(ae+1,N,Ne^20973),Me=nn(ae,N+1,Ne^20973),we=nn(ae+1,N+1,Ne^20973),De=m*((G*(1-K)+Z*K)*(1-C)+(Me*(1-K)+we*K)*C-.5),Ge=(ne*Ce+_e*ye)/(Au*Te*O),Ue=(-ne*ye+_e*Ce)/(Au*Te)+De,qe=Math.floor(Ge),ze=Math.floor(Ue),Ee=Ct(Ge-qe),be=Ct(Ue-ze),Fe=nn(qe,ze,Ne),Ye=nn(qe+1,ze,Ne),lt=nn(qe,ze+1,Ne),Et=nn(qe+1,ze+1,Ne);return(Fe*(1-Ee)+Ye*Ee)*(1-be)+(lt*(1-Ee)+Et*Ee)*be},J=new Float64Array(dn),he=new yn(ys,dn),Ae=(ne,_e)=>{const Te=he.slot(ne,_e),Ce=Te*dn;if(!he.hit(Te,ne,_e)){he.claim(Te,ne,_e),ee(ne*_-a,_e*_-l,_/2,J);for(let ye=0;ye<dn;ye++)he.v[Ce+ye]=J[ye]}return Ce},pe=new Float64Array(dn),re=new Float64Array(dn),X=new Float64Array(dn),se=new Float64Array(dn),W=(ne,_e,Te)=>{const Ce=Ae(ne,_e);for(let ye=0;ye<dn;ye++)Te[ye]=he.v[Ce+ye]},Q=(ne,_e,Te)=>{const Ce=(ne+a)/_,ye=(_e+l)/_,Ne=Math.floor(Ce),Pe=Math.floor(ye),ae=Ct(Ce-Ne),N=Ct(ye-Pe);W(Ne,Pe,pe),W(Ne+1,Pe,re),W(Ne,Pe+1,X),W(Ne+1,Pe+1,se);for(let C=0;C<dn;C++)Te[C]=(pe[C]*(1-ae)+re[C]*ae)*(1-N)+(X[C]*(1-ae)+se[C]*ae)*N;const K=Math.hypot(Te[1],Te[2]);K>1e-9?(Te[1]/=K,Te[2]/=K):(Te[1]=1,Te[2]=0,Te[3]=0)},oe=e.waves.map(()=>new yn(ys,5)),ie=e.waves.map(()=>new yn(ys,1)),de=(ne,_e,Te)=>{const Ce=ie[ne],ye=Ce.slot(_e,Te);return Ce.hit(ye,_e,Te)||(Ce.claim(ye,_e,Te),Ce.v[ye]=F(ne,_e,Te,e.waves[ne])),Ce.v[ye]},D=(ne,_e,Te)=>{const Ce=oe[ne],ye=Ce.slot(_e,Te),Ne=ye*5;if(!Ce.hit(ye,_e,Te)){Ce.claim(ye,_e,Te);const Pe=de(ne,_e,Te),ae=de(ne,_e+1,Te),N=de(ne,_e,Te+1),K=de(ne,_e+1,Te+1);Ce.v[Ne]=Pe,Ce.v[Ne+1]=ae,Ce.v[Ne+2]=N,Ce.v[Ne+3]=K,Ce.v[Ne+4]=(Pe+ae+N+K)/4}return Ne},le=(ne,_e)=>{const Te=e.windowM,Ce=Math.floor(ne/Te),ye=Math.floor(_e/Te),Ne=Ct(ne/Te-Ce),Pe=Ct(_e/Te-ye),ae=nn(Ce,ye,c^19807),N=nn(Ce+1,ye,c^19807),K=nn(Ce,ye+1,c^19807),C=nn(Ce+1,ye+1,c^19807);return(ae*(1-Ne)+N*Ne)*(1-Pe)+(K*(1-Ne)+C*Ne)*Pe},U=new Float64Array(dn),F=(ne,_e,Te,Ce)=>{const ye=_e*Ce-a,Ne=Te*Ce-l,Pe=Ce/2,ae=c+ne*40503|0;ne<f?ee(ye,Ne,Pe,U):Q(ye,Ne,U);const N=U[0];if(N<=0)return 0;const K=nn(_e,Te,ae),C=j(ye,Ne,Ce,U[1],U[2],ae),G=K+U[3]*(C-K);let Z=E[ne];L>0&&(Z*=Math.pow(.5,ne*(2*L*(le(ye,Ne)-.5))));let Me=1/0;if(S>0&&(Me=Math.max(0,S-U[5])*(Ce/4)),ne>=f){const Ue=Z*N*(G-.5);return Me===1/0?Ue:Math.max(-Me,Math.min(Me,Ue))}const we=M*Ce;let De=i;if(v!==0){const Ue=1+v*(r(ye,Ne)-x)/1e3;De*=Math.max(.25,Math.min(4,Ue))}const Ge=Z*N*(G-.5)+N*Math.max(-we,Math.min(we,De*Y(ye,Ne,Pe)));return Me===1/0?Ge:Math.max(-Me,Math.min(Me,Ge))},k=e.waves.map(ne=>Math.round(e.windowM/ne)),$=Math.round(e.windowM/_),te=new yn(ys,2),ce=n.ravineQuad??g.RAVINE_QUAD,I=e.windowM/ce,b=new yn(ys,1),q=new yn(ys,5),fe=new Float64Array(dn),ve=(ne,_e)=>{const Te=b.slot(ne,_e);if(!b.hit(Te,ne,_e)){b.claim(Te,ne,_e);const Ce=ne*I-a,ye=_e*I-l;Q(Ce,ye,fe),b.v[Te]=B.at(Ce,ye,fe[1],fe[2],fe[0])}return b.v[Te]},xe=(ne,_e)=>{const Te=q.slot(ne,_e),Ce=Te*5;if(!q.hit(Te,ne,_e)){q.claim(Te,ne,_e);const ye=ve(ne,_e),Ne=ve(ne+1,_e),Pe=ve(ne,_e+1),ae=ve(ne+1,_e+1);q.v[Ce]=ye,q.v[Ce+1]=Ne,q.v[Ce+2]=Pe,q.v[Ce+3]=ae,q.v[Ce+4]=(ye+Ne+Pe+ae)/4}return Ce},Oe=(ne,_e)=>{const Te=te.slot(ne,_e);if(!te.hit(Te,ne,_e)){te.claim(Te,ne,_e);let Ce=0;for(let Pe=0;Pe<s;Pe++){const ae=k[Pe];let N=0;for(let K=0;K<ae;K++)for(let C=0;C<ae;C++)N+=oe[Pe].v[D(Pe,ne*ae+K,_e*ae+C)+4];Ce+=N/(ae*ae)}if(V){const Pe=ce;let ae=0;for(let N=0;N<Pe;N++)for(let K=0;K<Pe;K++)ae+=q.v[xe(ne*Pe+N,_e*Pe+K)+4];Ce+=ae/(Pe*Pe)}let ye=0;const Ne=$;for(let Pe=0;Pe<Ne;Pe++)for(let ae=0;ae<Ne;ae++){const N=ne*Ne+Pe,K=_e*Ne+ae;ye+=(he.v[Ae(N,K)+4]+he.v[Ae(N+1,K)+4]+he.v[Ae(N,K+1)+4]+he.v[Ae(N+1,K+1)+4])/4}te.v[Te*2]=Ce,te.v[Te*2+1]=ye/(Ne*Ne)}return Te*2};let Ie=0;for(let ne=0;ne<s;ne++){const _e=E[ne]*(L>0?Math.pow(2,ne*L):1);Ie+=_e*.5+(ne<f?M*e.waves[ne]:0)}Ie+=B.peakM;const Le=Ie/u,Be=Ie+Le;return{band:e,peakM:Be,at:(ne,_e,Te)=>{const Ce=ne+a,ye=_e+l,Ne=void 0;let Pe=0;for(let De=0;De<s;De++){const Ge=e.waves[De],Ue=xc(Ge,Ne);if(Ue<=0)continue;const qe=Ce/Ge,ze=ye/Ge,Ee=Math.floor(qe),be=Math.floor(ze),Fe=oe[De].v,Ye=D(De,Ee,be),lt=Ct(qe-Ee),Et=Ct(ze-be);Pe+=Ue*((Fe[Ye]*(1-lt)+Fe[Ye+1]*lt)*(1-Et)+(Fe[Ye+2]*(1-lt)+Fe[Ye+3]*lt)*Et)}if(V){const De=Ce/I,Ge=ye/I,Ue=Math.floor(De),qe=Math.floor(Ge),ze=q.v,Ee=xe(Ue,qe),be=Ct(De-Ue),Fe=Ct(Ge-qe);Pe+=(ze[Ee]*(1-be)+ze[Ee+1]*be)*(1-Fe)+(ze[Ee+2]*(1-be)+ze[Ee+3]*be)*Fe}const ae=Ce/e.windowM,N=ye/e.windowM,K=Math.floor(ae),C=Math.floor(N),G=Oe(K,C),Z=te.v[G],Me=te.v[G+1];if(Z===0)return Pe;let we=Z*Su(ae-K,h)*Su(N-C,h)/u;return Me<1&&(Q(ne,_e,U),we*=Me>1e-6?U[4]/Me:0),we>Le?we=Le:we<-Le&&(we=-Le),Pe-we}}}function ll(n){return n-Math.floor(n)}const cl=.3183099,hl=.3678794;let Cf=0,Nf=0;function qv(n,e){const t=n*cl+hl,i=e*hl+cl,s=ll(t*i*(t+i));Cf=-1+2*ll(16*cl*s),Nf=-1+2*ll(16*hl*s)}const ul=6.28318530717959,na=n=>n<0?0:n>1?1:n,hi=(n,e,t)=>n+(e-n)*t;function Zv(n,e){return 1-Math.pow(1-na(n),e)}function _o(n){const e=1-na(n);return 1-e*e}function Ru(n,e){return n>=e?n-.5*e:.5*n*n/e}const dr={x:0,y:0,z:0,w:0};function jv(n,e,t,i,s,r,o){const a=-i*s*ul,l=t*s*ul,c=r*ul,h=Math.floor(n),u=Math.floor(e),d=n-h,f=e-u;let _=0,M=0,m=0;for(let L=-1;L<=2;L++)for(let R=-1;R<=2;R++){qv(h+L,u+R);const A=d-L-Cf*.5,w=f-R-Nf*.5,y=A*A+w*w;let E=Math.exp(-y*2)-.01111;E<0&&(E=0),m+=E;const T=A*a+w*l+c;_+=Math.cos(T)*E,M+=Math.sin(T)*E}const p=_/m,S=M/m;let v=Math.sqrt(p*p+S*S);const x=1-o;return v<x&&(v=x),dr.x=p/v,dr.y=S/v,dr.z=a,dr.w=l,dr}const th={scale:.15,strength:.22,gullyWeight:.5,detail:1.5,rounding:[.1,0,.1,2],onset:[1.25,1.25,2.8,1.5],assumedSlope:[.7,1],octaves:5,lacunarity:2,gain:.5,cellScale:.7,normalization:.5,octaveLimit:1/0},Ts={dHeight:0,dSlopeX:0,dSlopeY:0,magnitude:0,ridgeMap:0};function yu(n,e,t,i,s,r,o){const a=o.octaveLimit??1/0;let l=o.strength*o.scale,c=r<-1?-1:r>1?1:r;const h=t,u=i,d=s;let f=t,_=i,M=s,m=1/(o.scale*o.cellScale);const p=Math.sqrt(i*i+s*s),S=p>1e-10?p:1e-10;let v=0,x=1;const[L,R,A,w]=o.rounding,[y,E,T,P]=o.onset,[z,O]=o.assumedSlope,B=hi(R,L,na(c+.5))*A;let V=_o(Ru(S*y,B*y)),ee=_o(S*T),Y=c,j=hi(i,i/S*z,O),J=hi(s,s/S*z,O);for(let he=0;he<o.octaves;he++){const Ae=Math.sqrt(j*j+J*J),pe=Math.abs(Ae)>1e-10?j/Ae:j,re=Math.abs(Ae)>1e-10?J/Ae:J,X=jv(n*m,e*m,pe,re,o.cellScale,.25,o.normalization),se=X.z*-m,W=X.w*-m,Q=Math.abs(X.y),oe=X.y>0?1:X.y<0?-1:0,ie=(o.feedback??1)*o.gullyWeight;j+=oe*se*l*ie,J+=oe*W*l*ie;const de=X.x,D=X.y*se,le=X.y*W,U=hi(c,de*o.gullyWeight,V),F=hi(0,D*o.gullyWeight,V),k=hi(0,le*o.gullyWeight,V),$=a>=he+1?1:a<=he?0:a-he;if($<=0)break;f+=U*l*$,_+=F*l*$,M+=k*l*$,v+=l*$,c=U;const te=hi(R,L,na(de+.5))*x,ce=_o(Ru(Q*E,te*E));V=Zv(V,o.detail)*ce,Y=hi(Y,de,ee),ee=ee*_o(Q*P),l*=o.gain,m*=o.lacunarity,x*=w}return Ts.dHeight=f-h,Ts.dSlopeX=_-u,Ts.dSlopeY=M-d,Ts.magnitude=v,Ts.ridgeMap=Y*(1-ee),Ts}function zs(n){let e=n.strength*n.scale,t=0;for(let i=0;i<n.octaves;i++)t+=e,e*=n.gain;return t*Math.max(1,n.gullyWeight)}const Jv=.001;function Yi(n,e,t){const i=new Float32Array(e*t).fill(1/0);for(let l=0;l<e;l++)i[l]=n[l],i[(t-1)*e+l]=n[(t-1)*e+l];for(let l=0;l<t;l++)i[l*e]=n[l*e],i[l*e+e-1]=n[l*e+e-1];const s=[-e-1,-e,-e+1,-1,1,e-1,e,e+1],r=4*Math.max(e,t);let o=!0,a=0;for(;o;){o=!1,a++;const l=a&3,c=l<2,h=(l&1)===0,[u,d]=c?[t,e]:[e,t],f=h?1:u-2,_=h?u-1:0,M=h?1:-1;for(let m=f;h?m<_:m>_;m+=M)for(let p=h?1:d-2;h?p<d-1:p>0;p+=h?1:-1){const S=c?m*e+p:p*e+m;if(!(i[S]<=n[S]))for(const v of s){const x=Math.fround(i[S+v]+Jv);if(n[S]>=x){i[S]=n[S],o=!0;break}x<i[S]&&(i[S]=x,o=!0)}}if(a>r)throw new Error(`fillPits did not converge in ${r} sweeps (${e}x${t}) — beyond the one-ring-per-rotation worst case, so the surface or the sweep logic is wrong`)}return{surface:i,sweeps:a}}function qi(n,e,t,i){const s=new Int32Array(e*t).fill(-1),r=[{d:-e-1,len:Math.SQRT2*i},{d:-e,len:i},{d:-e+1,len:Math.SQRT2*i},{d:-1,len:i},{d:1,len:i},{d:e-1,len:Math.SQRT2*i},{d:e,len:i},{d:e+1,len:Math.SQRT2*i}];for(let o=1;o<t-1;o++)for(let a=1;a<e-1;a++){const l=o*e+a;let c=0,h=-1;for(const{d:u,len:d}of r){const f=(n[l]-n[l+u])/d;f>c&&(c=f,h=l+u)}s[l]=h}return s}function If(n,e,t,i){const s=new Float32Array(t*i).fill(1),r=Array.from({length:t*i},(o,a)=>a).sort((o,a)=>n[a]-n[o]||o-a);for(const o of r){const a=e[o];a>=0&&(s[a]+=s[o])}return s}function Qv(n,e,t,i){const s=(globalThis.performance??{now:()=>Date.now()}).now(),{surface:r,sweeps:o}=Yi(n,e,t),a=qi(r,e,t,i),l=If(r,a,e,t);return{filled:r,dir:a,acc:l,sweeps:o,wallMs:(globalThis.performance??{now:()=>Date.now()}).now()-s}}function Df(n,e,t){const i=e*t,s=new Float32Array(i).fill(1),r=new Int32Array(i);for(let c=0;c<i;c++){const h=n[c];h>=0&&r[h]++}const o=new Int32Array(i);let a=0,l=0;for(let c=0;c<i;c++)r[c]===0&&(o[l++]=c);for(;a<l;){const c=o[a++],h=n[c];h<0||(s[h]+=s[c],--r[h]===0&&(o[l++]=h))}if(l!==i)throw new Error(`flowAccumulationTopo: ${i-l} of ${i} cells never drained — the D8 graph has a cycle, so the surface passed in was not pit-filled`);return{acc:s,order:o}}const ex=.2;function tx(n,e,t,i){const s=()=>(globalThis.performance??{now:()=>Date.now()}).now(),r=s(),o=e*e,a=new Float32Array(n),l=new Float32Array(o),c=i.routeOffset?new Float32Array(o):null,u=i.holdMask??null,d=[];let f=0,_=0,M=0,m=0;const p=Math.max(1,Math.ceil(i.diffuseCFL/ex)),S=i.diffuseCFL/p;let v,x,L;const R=new Float64Array(o),A=t*t;for(let w=0;w<i.iterations;w++){if(w%i.rerouteEvery===0){const T=s();let P=a;if(i.routeOffset){P=c;for(let B=0;B<o;B++)P[B]=a[B]+i.routeOffset[B]}const{surface:z}=Yi(P,e,e);v=qi(z,e,e,t);const O=Df(v,e,e);L=O.order,x=O.acc;for(let B=0;B<o;B++)x[B]=x[B]*A;for(let B=0;B<o;B++){const V=v[B];if(V<0){R[B]=0;continue}const ee=B%e-V%e,Y=(B/e|0)-(V/e|0),j=ee!==0&&Y!==0?Math.SQRT2*t:t;R[B]=i.K*Math.pow(x[B],i.m)*i.dtYears/j}f+=s()-T,m++}const y=s();let E=0;for(let T=o-1;T>=0;T--){const P=L[T],z=v[P];if(z<0||u!==null&&u[P])continue;const O=R[P],B=(a[P]+O*a[z])/(1+O),V=Math.min(a[P],Math.max(B,a[z]));E+=a[P]-V,a[P]=Math.fround(V)}if(_+=s()-y,d.push(E),i.diffuseCFL>0){const T=s();for(let P=0;P<p;P++){l.set(a);for(let z=1;z<e-1;z++)for(let O=1;O<e-1;O++){const B=z*e+O;if(u!==null&&u[B])continue;const V=l[B-1]+l[B+1]+l[B-e]+l[B+e]-4*l[B];a[B]=Math.fround(l[B]+S*V)}}M+=s()-T}}return{h:a,iterations:i.iterations,reroutes:m,diffuseSubsteps:p,removedPerIter:d,msTotal:s()-r,msRoute:f,msIncise:_,msDiffuse:M}}const Tu=6,Lf=Object.freeze({cellM:5,perturbRmsM:4,perturbWaveM:0,perturbOctaves:2,channelAreaM2:8e3,areaSatM2:15e4,depthMaxM:14,depthExp:.45,slopeRefDeg:15,bankDeg:29,headTaperM:90,evolveIterations:250,evolveRerouteEvery:20,evolveK:16e-6,evolveDtYears:150,evolveM:.45,diffuseCFL:.08,flattenRadiusM:0,amplifyLoM:0,amplifyHiM:0,amplifyGain:1,fineDepthM:0,fineAreaLoM2:300,fineAreaHiM2:8e3,fineSmoothM:30,skirtDepthM:0,skirtRadiusM:35,shoreTaperM:40,minBranchM:40,seed:887319});function go(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761)|0;return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}const bu=n=>n*n*(3-2*n);function nx(n,e,t,i){const s=n/t,r=e/t,o=Math.floor(s),a=Math.floor(r),l=bu(s-o),c=bu(r-a),h=go(o,a,i),u=go(o+1,a,i),d=go(o,a+1,i),f=go(o+1,a+1,i);return(h*(1-l)+u*l)*(1-c)+(d*(1-l)+f*l)*c-.5}function wu(n,e){const t=n/(7.5487*e),i=(-1+Math.sqrt(1+4*t*t))/2,s=Math.max(1,Math.round(i)),r=7.5487*Math.sqrt(s*(s+1))*e;return{w:s,achievedM:r,clamped:i<1}}function Mo(n,e,t){const i=new Float32Array(n),s=new Float32Array(e*e),r=(a,l)=>{for(let c=0;c<e;c++){const h=c*e;let u=0,d=0;for(let f=0;f<=t&&f<e;f++)u+=a[h+f],d++;for(let f=0;f<e;f++){l[h+f]=u/d;const _=f+t+1,M=f-t;_<e&&(u+=a[h+_],d++),M>=0&&(u-=a[h+M],d--)}}},o=(a,l)=>{for(let c=0;c<e;c++)for(let h=0;h<e;h++)l[h*e+c]=a[c*e+h]};for(let a=0;a<3;a++)r(i,s),o(s,i),r(i,s),o(s,i);return i}function Cu(n,e,t,i,s){const r=s*s;return .5*(2*e+(t-n)*s+(2*n-5*e+4*t-i)*r+(3*e-n-3*t+i)*r*s)}function Sc(n,e,t,i,s,r,o){const a=(r+i-s)/t,l=(o+i-s)/t,c=Math.max(1,Math.min(e-3,Math.floor(a))),h=Math.max(1,Math.min(e-3,Math.floor(l))),u=Math.max(-1,Math.min(2,a-c)),d=Math.max(-1,Math.min(2,l-h)),f=_=>{const M=(h+_)*e;return Cu(n[M+c-1],n[M+c],n[M+c+1],n[M+c+2],u)};return Cu(f(-1),f(0),f(1),f(2),d)}function ix(n,e,t,i={}){const s=()=>(globalThis.performance??{now:()=>Date.now()}).now(),r=s(),o={...Lf,...i},{cellM:a}=o,l=Math.floor(t*2/a)+1,c=l*l,h=C=>C*a-t,u=new Float32Array(c),d=new Uint8Array(c);let f=0;for(let C=0;C<l;C++){const G=h(C);for(let Z=0;Z<l;Z++){const Me=C*l+Z,we=h(Z);u[Me]=n(we,G),e(we,G)&&(d[Me]=1,f++)}}const _=s()-r,M=s(),m=o.perturbWaveM>0?o.perturbWaveM:4*a,p=new Float32Array(c);for(let C=0;C<l;C++){const G=h(C);for(let Z=0;Z<l;Z++){const Me=h(Z);let we=0,De=1,Ge=m;for(let Ue=0;Ue<o.perturbOctaves;Ue++)we+=De*nx(Me,G,Ge,o.seed^Ue*40503),De*=.5,Ge*=.5;p[C*l+Z]=we}}let S=0,v=0;for(let C=0;C<c;C++)S+=p[C],v+=p[C]*p[C];const x=Math.sqrt(Math.max(0,v/c-(S/c)**2)),L=x>0?o.perturbRmsM/x:0,R=new Float32Array(c),A=new Float32Array(c);let w=0;for(let C=0;C<c;C++){const G=p[C]*L;R[C]=G,A[C]=u[C]+G,w+=G*G}const y=Math.sqrt(w/c);let E=null;o.flattenRadiusM>0&&(E=Mo(u,l,Math.max(1,Math.round(o.flattenRadiusM/a))));let T=null;if(o.amplifyGain!==1&&o.amplifyHiM>o.amplifyLoM&&o.amplifyLoM>0){const C=E??u,G=wu(o.amplifyLoM,a),Z=wu(o.amplifyHiM,a),Me=(Ge,Ue)=>Math.abs(Ue-Ge)/Ge>.15?` ⚠ REQUESTED ${Ge} m, DELIVERING ${Ue.toFixed(0)} m`:"";(G.clamped||Me(o.amplifyLoM,G.achievedM)||Me(o.amplifyHiM,Z.achievedM))&&console.warn(`[drainage] amplify band ${o.amplifyLoM}–${o.amplifyHiM} m on a ${a} m grid → half-widths ${G.w}/${Z.w} cells = ${G.achievedM.toFixed(0)}–${Z.achievedM.toFixed(0)} m.${Me(o.amplifyLoM,G.achievedM)}${Me(o.amplifyHiM,Z.achievedM)}${G.clamped?` The ${a} m grid's finest representable cutoff is ${G.achievedM.toFixed(0)} m; a finer band needs a finer grid, not a smaller number.`:""}`);const we=Mo(C,l,G.w),De=Mo(C,l,Z.w);T=new Float32Array(c);for(let Ge=0;Ge<c;Ge++)T[Ge]=(o.amplifyGain-1)*(we[Ge]-De[Ge])}let P=null,z=E??u;o.evolveIterations>0&&(P=tx(z,l,a,{iterations:o.evolveIterations,rerouteEvery:o.evolveRerouteEvery,dtYears:o.evolveDtYears,K:o.evolveK,m:o.evolveM,diffuseCFL:o.diffuseCFL,holdMask:d,routeOffset:R}),z=P.h);const O=new Float32Array(c);for(let C=0;C<c;C++)O[C]=z[C]-u[C]+(T?T[C]:0);if(T){const C=new Float32Array(c);for(let G=0;G<c;G++)C[G]=z[G]+T[G];z=C}const B=new Float32Array(c);for(let C=0;C<c;C++)B[C]=z[C]+R[C];const{surface:V,sweeps:ee}=Yi(B,l,l),Y=qi(V,l,l,a),{acc:j,order:J}=Df(Y,l,l),he=new Float32Array(c),Ae=a*a;for(let C=0;C<c;C++)he[C]=j[C]*Ae;let pe=0;if(o.fineDepthM>0&&o.fineAreaHiM2>o.fineAreaLoM2){const C=Math.log10(Math.max(1,o.fineAreaLoM2)),G=Math.log10(o.fineAreaHiM2),Z=new Float32Array(c);for(let De=0;De<c;De++){if(d[De])continue;const Ge=Math.log10(Math.max(Ae,he[De])),Ue=Math.max(0,Math.min(1,(Ge-C)/(G-C)));Ue>0&&pe++,Z[De]=-o.fineDepthM*Ue*Ue*(3-2*Ue)}const Me=o.fineSmoothM>0?Math.max(1,Math.round(o.fineSmoothM/a)):0,we=Me>0?Mo(Z,l,Me):Z;for(let De=0;De<c;De++)d[De]||(O[De]+=we[De]);console.log(`[drainage] fine band: ${o.fineDepthM} m over A ${o.fineAreaLoM2}–${o.fineAreaHiM2} m², log A smoothed ${o.fineSmoothM} m · touches ${pe} of ${c} cells (${(pe/c*100).toFixed(1)} %)`)}const re=s()-M,X=new Uint8Array(c),se=new Float32Array(c),W=o.channelAreaM2,Q=Math.max(W*1.0001,o.areaSatM2),oe=Math.pow(Q/W,o.depthExp)-1;let ie=0;for(let C=1;C<l-1;C++)for(let G=1;G<l-1;G++){const Z=C*l+G;if(d[Z]||he[Z]<W)continue;X[Z]=1,ie++;const Me=oe>0?Math.min(1,Math.max(0,(Math.pow(he[Z]/W,o.depthExp)-1)/oe)):1,we=(z[Z+1]-z[Z-1])/(2*a),De=(z[Z+l]-z[Z-l])/(2*a),Ge=Math.atan(Math.hypot(we,De))*180/Math.PI,Ue=Math.min(1,Ge/o.slopeRefDeg);se[Z]=o.depthMaxM*Me*Ue}const de=new Float32Array(c);for(let C=0;C<c;C++){const G=J[C];if(!X[G])continue;const Z=Y[G];if(Z<0||!X[Z])continue;const Me=G%l-Z%l,we=(G/l|0)-(Z/l|0),De=Me!==0&&we!==0?Math.SQRT2*a:a;de[G]+De>de[Z]&&(de[Z]=de[G]+De)}if(o.minBranchM>0)for(let C=0;C<c;C++)X[C]&&de[C]<o.minBranchM&&(X[C]=0,se[C]=0,ie--);if(o.headTaperM>0)for(let C=0;C<c;C++){if(!X[C]||se[C]<=0)continue;const G=Math.min(1,Math.max(0,de[C]-o.minBranchM)/o.headTaperM);se[C]=se[C]*G*G*(3-2*G)}const D=new Int32Array(c).fill(-1);{const C=new Float32Array(c);for(let G=0;G<c;G++){if(!X[G])continue;const Z=Y[G];Z<0||!X[Z]||he[G]>C[Z]&&(C[Z]=he[G],D[Z]=G)}}const le=new Float32Array(c),U=new Float32Array(c);for(let C=0;C<c;C++)le[C]=C%l*a-t,U[C]=(C/l|0)*a-t;{const C=new Float32Array(c),G=new Float32Array(c);for(let Z=0;Z<6;Z++){C.set(le),G.set(U);for(let Me=0;Me<c;Me++){if(!X[Me])continue;const we=D[Me],De=Y[Me];we<0||De<0||!X[De]||(le[Me]=.5*C[Me]+.25*(C[we]+C[De]),U[Me]=.5*G[Me]+.25*(G[we]+G[De]))}}}const F=(C,G)=>Sc(O,l,a,t,0,C,G),k=new Float32Array(c);for(let C=0;C<c;C++)k[C]=X[C]?n(le[C],U[C])+F(le[C],U[C]):z[C];const $=new Float32Array(c);for(let C=0;C<c;C++)$[C]=k[C]-se[C];let te=0;for(let C=c-1;C>=0;C--){const G=J[C],Z=Y[G];if(!(Z<0||!X[G])&&$[G]<$[Z]){$[G]=$[Z];const Me=Math.max(0,k[G]-$[G]);Me<se[G]&&te++,se[G]=Me}}const ce=new Int32Array(c);for(let C=0;C<c;C++){if(!X[C])continue;const G=Y[C];G>=0&&X[G]&&ce[G]++}const I=new Int32Array(c),b=new Int32Array(c),q=new Int32Array(c);for(let C=0;C<c;C++){const G=J[C];if(!X[G])continue;I[G]=b[G]===0?1:q[G]>=2?b[G]+1:b[G];const Z=Y[G];Z<0||!X[Z]||(I[G]>b[Z]?(b[Z]=I[G],q[Z]=1):I[G]===b[Z]&&q[Z]++)}const fe=[],ve=[];for(let C=0;C<c;C++){if(!X[C])continue;const G=I[C];for(;fe.length<G;)fe.push(0),ve.push(0);const Z=Y[C],Me=Z>=0?C%l-Z%l:0,we=Z>=0?(C/l|0)-(Z/l|0):0;Z>=0&&X[Z]&&(ve[G-1]+=(Me!==0&&we!==0?Math.SQRT2*a:a)/1e3),(Z<0||!X[Z]||I[Z]!==G)&&fe[G-1]++}const xe=fe.slice(0,-1).map((C,G)=>fe[G+1]>0?C/fe[G+1]:1/0),Oe=(C,G)=>{const Z=G%l-C%l;return((G/l|0)-(C/l|0)+1)*3+(Z+1)};let Ie=0,Le=0,Be=0,ne=0;{const C=new Int32Array(c);for(let Z=0;Z<c;Z++){if(!X[Z])continue;const Me=Y[Z];Me>=0&&X[Me]&&C[Me]++}const G=new Uint8Array(c);for(let Z=0;Z<c;Z++){if(!X[Z]||C[Z]!==0)continue;let Me=Z,we=-1,De=0,Ge=0;for(;Ge++<c;){const Ue=Y[Me];if(Ue<0||!X[Ue]||G[Me])break;G[Me]=1,ne++;const qe=Oe(Me,Ue);qe===we?De++:(De>0&&(Ie+=De,Le++,De>=5&&(Be+=De)),De=1,we=qe),Me=Ue}De>0&&(Ie+=De,Le++,De>=5&&(Be+=De))}}let _e=0,Te=0,Ce=0,ye=0,Ne=0;const Pe=[];for(let C=0;C<c;C++){if(!X[C])continue;const G=Y[C];if(G>=0&&X[G]){const Z=C%l-G%l,Me=(C/l|0)-(G/l|0);Ce+=Z!==0&&Me!==0?Math.SQRT2*a:a}ce[C]>=2&&_e++,ce[C]===0&&Te++,ye+=se[C],se[C]>Ne&&(Ne=se[C]),Pe.push(se[C])}Pe.sort((C,G)=>C-G);const ae=c-f,N=ae*Ae/1e6,K=N>0?Ce/1e3/N:0;return{g:l,cellM:a,halfM:t,params:o,z:u,zBase:z,evolveDelta:O,evolve:P,areaM2:he,dir:Y,order:J,isChannel:X,isWater:d,depthM:se,prev:D,cx:le,cz:U,zNode:k,stats:{cells:c,landCells:ae,waterCells:f,channelCells:ie,bedClamped:te,junctions:_e,heads:Te,channelKm:Ce/1e3,densityKmPerKm2:K,junctionsPerChannelKm:Ce>0?_e/(Ce/1e3):0,orderStreams:fe,orderKm:ve,bifurcation:xe,dirRunMeanCells:Le>0?Ie/Le:0,fracInStraightRuns:ne>0?Be/ne:0,spacingM:K>0?1e3/(2*K):1/0,depthMeanM:ie?ye/ie:0,depthP90M:Pe.length?Pe[Math.min(Pe.length-1,Math.floor(Pe.length*.9))]:0,depthMaxM:Ne,perturbRmsAchievedM:y,fillSweeps:ee,sampleMs:_,routeMs:re,wallMs:s()-r}}}function Nu(n){const e=()=>(globalThis.performance??{now:()=>Date.now()}).now(),t=e(),{g:i,cellM:s,halfM:r,dir:o,isChannel:a,depthM:l,evolveDelta:c}=n,h=i*i,u=Math.tan(n.params.bankDeg*Math.PI/180),{prev:d,cx:f,cz:_}=n,M=3e4,m=X=>{const se=new Int16Array(h).fill(M),W=new Int16Array(h).fill(M),Q=new Int32Array(h).fill(-1);for(let D=0;D<h;D++)X[D]&&(se[D]=0,W[D]=0,Q[D]=D);const oe=D=>se[D]*se[D]+W[D]*W[D],ie=(D,le,U,F)=>{if(Q[le]===-1)return;const k=se[le]+U,$=W[le]+F;k*k+$*$<oe(D)&&(se[D]=k,W[D]=$,Q[D]=Q[le])};for(let D=0;D<i;D++)for(let le=0;le<i;le++){const U=D*i+le;le>0&&ie(U,U-1,1,0),D>0&&ie(U,U-i,0,1),le>0&&D>0&&ie(U,U-i-1,1,1),le<i-1&&D>0&&ie(U,U-i+1,-1,1)}for(let D=i-1;D>=0;D--)for(let le=i-1;le>=0;le--){const U=D*i+le;le<i-1&&ie(U,U+1,-1,0),D<i-1&&ie(U,U+i,0,-1),le<i-1&&D<i-1&&ie(U,U+i+1,-1,-1),le>0&&D<i-1&&ie(U,U+i-1,1,-1)}const de=new Float32Array(h);for(let D=0;D<h;D++)de[D]=Q[D]===-1?1/0:Math.sqrt(oe(D))*s;return{site:Q,distM:de}},{site:p,distM:S}=m(a),v=n.params.shoreTaperM,x=v>0&&n.isWater.some(X=>X===1)?m(n.isWater).distM:null;let L=0;for(let X=0;X<h;X++)if(a[X]){const se=(l[X]/u+Tu/2)/.85;se>L&&(L=se)}const R=n.params.skirtRadiusM,A=n.params.skirtDepthM,w=Math.max(L,R),y=Math.max(2,Math.min(8,Math.ceil(L/s))),E=X=>f[X],T=X=>_[X],P=(X,se,W,Q,oe)=>{const ie=E(X),de=T(X),D=E(se),le=T(se),U=D-ie,F=le-de,k=U*U+F*F,$=k>0?Math.max(0,Math.min(1,((W-ie)*U+(Q-de)*F)/k)):0,te=ie+$*U,ce=de+$*F,I=(W-te)*(W-te)+(Q-ce)*(Q-ce);I<oe.d2&&(oe.d2=I,oe.depth=l[X]+$*(l[se]-l[X]))},z=(X,se)=>{if(!x)return se;const W=x[X];if(W<=0)return 0;if(W>=v)return se;const Q=W/v;return se*Q*Q*(3-2*Q)},O={d2:0,depth:0},B=(X,se,W)=>{O.d2=1/0,O.depth=0;const Q=se-E(X),oe=W-T(X);O.d2=Q*Q+oe*oe,O.depth=l[X];let ie=X;for(let F=0;F<y;F++){const k=d[ie];if(k<0)break;P(k,ie,se,W,O),ie=k}let de=X;for(let F=0;F<y;F++){const k=o[de];if(k<0||!a[k])break;P(de,k,se,W,O),de=k}const D=O.depth,le=Math.sqrt(O.d2);let U=0;if(A>0&&le<R){const F=1-le/R;U+=A*F*F}if(D>0){const F=Tu,k=(D/u+F/2)/.85;if(le<k){const $=.3*k;le<=F?U+=D-u*le*le/(2*F):le<=k-$?U+=D-u*(le-F/2):U+=u*(k-le)*(k-le)/(2*$)}}return-U},V=(X,se)=>Sc(c,i,s,r,0,X,se),ee=(X,se)=>{const W=Math.round((X+r)/s),Q=Math.round((se+r)/s);if(W<0||Q<0||W>=i||Q>=i)return 0;const oe=Q*i+W,ie=V(X,se),de=p[oe];if(de<0||S[oe]-s*2.5>w)return z(oe,ie);let D=B(de,X,se);if(S[oe]<=s*1.5)for(let le=-1;le<=1;le++){const U=Q+le;if(!(U<0||U>=i))for(let F=-1;F<=1;F++){const k=W+F;if(k<0||k>=i)continue;const $=U*i+k;if(!a[$]||$===de)continue;const te=B($,X,se);te<D&&(D=te)}}return z(oe,ie+D)},Y=[],j=[],J=[],he=[];{const X=new Float32Array(h);for(let se=0;se<i;se++)for(let W=0;W<i;W++)X[se*i+W]=ee(W*s-r,se*s-r);Y.push(X),j.push(i),J.push(s),he.push(0);for(let se=1;j[se-1]>8;se++){const W=j[se-1],Q=Y[se-1],oe=Math.max(1,Math.ceil(W/2)),ie=new Float32Array(oe*oe);for(let de=0;de<oe;de++)for(let D=0;D<oe;D++){const le=Math.min(W-1,2*D),U=Math.min(W-1,2*D+1),F=Math.min(W-1,2*de),k=Math.min(W-1,2*de+1);ie[de*oe+D]=.25*(Q[F*W+le]+Q[F*W+U]+Q[k*W+le]+Q[k*W+U])}Y.push(ie),j.push(oe),J.push(J[se-1]*2),he.push(he[se-1]+J[se-1]*.5)}}const Ae=(X,se,W)=>Sc(Y[X],j[X],J[X],r,he[X],se,W),pe=Y.length-1,re=(X,se,W)=>{if(W===void 0||!(W>2*s))return ee(X,se);const Q=Math.log2(W/(2*s)),oe=Math.floor(Q),ie=Q-oe,de=oe<=0?ee(X,se):Ae(Math.min(pe,oe),X,se),D=Ae(Math.min(pe,oe+1),X,se);return de+(D-de)*ie};return{g:i,cellM:s,halfM:r,net:n,site:p,distM:S,prev:d,maxHalfWidthM:L,buildMs:e()-t,at:ee,evolveOnlyAt:V,atPitch:re,mipCellM:J}}const ga=Object.freeze({thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!0,drainage:!0}),Ma=["thermal","streamPower","ravine","grain","filter","drainage"];let xi={...ga};function on(){return xi}function mi(n){return Gt.devTuner&&(xi=n===null?{...ga}:{...xi,...n}),xi}function sx(n=xi){return Ma.every(e=>n[e]===ga[e])}function Zi(n=xi){return Ma.map(e=>`${e}=${n[e]?1:0}`).join(",")}function Ac(n=xi){return!n.thermal&&!n.streamPower}const Pf=Object.freeze({...th,scale:30,strength:.02}),rx=Object.freeze({...th,scale:30,strength:.1});let vr={...Pf};function ji(){return vr}function ia(n){return Gt.devTuner&&(vr=n===null?{...Pf}:{...vr,...n}),vr}const Of=Object.freeze({...Lf});let xr={...Of};function Sr(){return xr}function sa(n){return Gt.devTuner&&(xr=n===null?{...Of}:{...xr,...n}),xr}const ox=Object.freeze({...th,scale:200/7560});function Uf(n){return(e,t,i)=>{const s=Math.max(g.TERRAIN_DETAIL_SHORE_M,i),r=s*.7071;let o=n.insidenessAt(e,t);for(const[a,l]of[[s,0],[-s,0],[0,s],[0,-s],[r,r],[r,-r],[-r,r],[-r,-r]])o=Math.max(o,n.insidenessAt(e+a,t+l),n.insidenessAt(e+a*.5,t+l*.5));return Math.max(0,1-o/g.WATER_SHORE_ISO)}}function ra(n,e,t,i={}){const s=(Array.isArray(e)?[...e]:[e]).sort((F,k)=>k.zoom-F.zoom);if(s.length===0)throw new Error("makeWorldQuery: at least one DEM level is required");const r=s[s.length-1];let o=null;const a=(F,k)=>{if(!o)return null;const $=(F+o.halfM)/o.cellM,te=(k+o.halfM)/o.cellM;if($<1||te<1||$>o.g-2||te>o.g-2)return null;const ce=Math.floor($),I=Math.floor(te),b=$-ce,q=te-I,fe=I*o.g+ce;return(o.grid[fe]*(1-b)+o.grid[fe+1]*b)*(1-q)+(o.grid[fe+o.g]*(1-b)+o.grid[fe+o.g+1]*b)*q},l=(F,k)=>{const $=a(F,k);if($!==null){const te=o.halfM-Math.max(Math.abs(F),Math.abs(k));if(te>=o.blendM)return $;const ce=B(F,k),I=Math.max(0,te)/o.blendM,b=I*I*I*(I*(I*6-15)+10);return ce+($-ce)*b}return B(F,k)};let c=null;const h=500,u=(F,k,$)=>{if(!c||t.depthAt(F,k)>0)return 0;const te=c.halfM-Math.max(Math.abs(F),Math.abs(k));if(te<=0)return 0;const ce=Math.min(1,te/h),I=ce*ce*(3-2*ce);return c.atPitch(F,k,$)*I*J(F,k,4*c.cellM)},d=(F,k)=>{if(!c||t.depthAt(F,k)>0)return 0;const $=c.halfM-Math.max(Math.abs(F),Math.abs(k));if($<=0)return 0;const te=Math.min(1,$/h);return c.evolveOnlyAt(F,k)*te*te*(3-2*te)*J(F,k,4*c.cellM)};let f=6e3,_=!1,M=null;const m=()=>{if(M)return M;const F=f;let k=1/0,$=-1/0;for(let te=0;te<64;te++)for(let ce=0;ce<64;ce++){const I=l(ce/63*2*F-F,te/63*2*F-F);I<k&&(k=I),I>$&&($=I)}return M={lo:k,span:Math.max(1,$-k)},M},p=3,S=14;let v=new yn(S,p);const x=new Float64Array(p),L=new Float64Array(p),R=(F,k,$)=>{const te=v.slot(F,k),ce=te*p;if(!v.hit(te,F,k)){v.claim(te,F,k);const I=F*g.FILTER_AUX_MEMO_PITCH_M,b=k*g.FILTER_AUX_MEMO_PITCH_M,q=on().drainage,fe=8,ve=(Be,ne)=>l(Be,ne)+(q?d(Be,ne):0);v.v[ce]=(ve(I+fe,b)-ve(I-fe,b))/(2*fe),v.v[ce+1]=(ve(I,b+fe)-ve(I,b-fe))/(2*fe);const xe=2,Oe=(Be,ne)=>l(Be,ne)+(q?u(Be,ne):0),Ie=(Oe(I+xe,b)-Oe(I-xe,b))/(2*xe),Le=(Oe(I,b+xe)-Oe(I,b-xe))/(2*xe);v.v[ce+2]=Math.hypot(Ie,Le)}for(let I=0;I<p;I++)$[I]=v.v[ce+I]},A=(F,k)=>{const $=g.FILTER_AUX_MEMO_PITCH_M,te=F/$,ce=k/$,I=Math.floor(te),b=Math.floor(ce),q=te-I,fe=ce-b;R(I,b,x);const ve=x[0],xe=x[1],Oe=x[2];R(I+1,b,x);const Ie=x[0],Le=x[1],Be=x[2];R(I,b+1,x);const ne=x[0],_e=x[1],Te=x[2];R(I+1,b+1,x);const Ce=x[0],ye=x[1],Ne=x[2],Pe=(1-q)*(1-fe),ae=q*(1-fe),N=(1-q)*fe,K=q*fe;return L[0]=ve*Pe+Ie*ae+ne*N+Ce*K,L[1]=xe*Pe+Le*ae+_e*N+ye*K,L[2]=Oe*Pe+Be*ae+Te*N+Ne*K,L},w=500,y=(F,k,$,te)=>{if(t.depthAt(F,k)>0)return 0;const ce=f-Math.max(Math.abs(F),Math.abs(k));if(ce<=0)return 0;const I=ce>=w?1:ce/w*(ce/w)*(3-2*(ce/w)),b=ji();let q=b;if(te!==void 0&&te>0){if(te>=g.FILTER_PITCH_FLOOR_M)return 0;const ye=_?te/(2*f):te,Ne=Math.log(b.scale/(2*ye))/Math.log(b.lacunarity)+1;if(!(Ne>0))return 0;Ne<b.octaves&&(q={...b,octaveLimit:Ne})}const fe=A(F,k),ve=fe[0],xe=fe[1],Oe=fe[2];if(Oe>=.9004)return 0;let Ie=1;if(Oe>.7002){const ye=(Oe-.7002)/.20019999999999993;Ie=1-ye*ye*(3-2*ye)}const{lo:Le,span:Be}=m(),ne=Math.max(-1,Math.min(1,2*($-Le)/Be-1));let _e;if(_){const ye=1/(2*f),Ne=.35/Be;_e=yu(F*ye,k*ye,($-Le)*Ne,ve*Ne/ye,xe*Ne/ye,ne,q);const Pe=zs({...q,gullyWeight:Math.min(1,q.gullyWeight)});return Pe>0?Pe*Math.tanh(_e.dHeight/Pe)/Ne*J(F,k,q.scale/ye)*I*Ie:0}_e=yu(F,k,$,ve,xe,ne,q);const Te=zs({...q,gullyWeight:Math.min(1,q.gullyWeight)});return Te>0?Te*Math.tanh(_e.dHeight/Te)*J(F,k,q.scale)*I*Ie:0},E=(F,k,$)=>{const te=l(F,k)+(on().drainage?u(F,k,$):0);return on().filter?te+y(F,k,te,$):te},T=(F,k,$)=>{const te=Math.floor(k/P),ce=Math.floor($/P),I=k/P-te,b=$/P-ce;let q=1;return F.hasTileAtPixel((te-1)*P,ce*P)||(q=Math.min(q,I)),F.hasTileAtPixel((te+1)*P,ce*P)||(q=Math.min(q,1-I)),F.hasTileAtPixel(te*P,(ce-1)*P)||(q=Math.min(q,b)),F.hasTileAtPixel(te*P,(ce+1)*P)||(q=Math.min(q,1-b)),q},P=256,z=.25,O=(F,k,$)=>{for(let I=$;I<s.length-1;I++){const b=s[I],{gx:q,gy:fe}=Xi(n,F,k,b.zoom);if(!b.hasTileAtPixel(Math.floor(q),Math.floor(fe)))continue;const ve=vu(b,q,fe),xe=T(b,q,fe);if(xe>=z)return ve;const Oe=xe/z,Ie=Oe*Oe*Oe*(Oe*(Oe*6-15)+10),Le=O(F,k,I+1);return Le+(ve-Le)*Ie}const{gx:te,gy:ce}=Xi(n,F,k,r.zoom);return vu(r,te,ce)},B=(F,k)=>O(F,k,0),V=Xi(n,0,0,s[0].zoom),ee=Xi(n,100,0,s[0].zoom),Y=100/Math.hypot(ee.gx-V.gx,ee.gy-V.gy),j=Math.imul(Math.round(n.lat*1e5)|0,668265261)^Math.imul(Math.round(n.lon*1e5)|0,374761393)|0,J=Uf(t);let he={...i};const Ae=F=>{const k=on();return{...F,...k.ravine?{}:{ravineDepthM:0,ravineLevels:0},...k.grain?{}:{grainAmpM:0}}},pe=1500,re=4e3,X=[30,60,120,240],se=(()=>{let F=0;for(const k of X){let $=0,te=0;for(let I=0;I<re;I++){const b=(I*.6180339887498949%1*2-1)*pe*.9,q=(I*.4142135623730951%1*2-1)*pe*.9,fe=E(b,q)-(E(b+k,q)+E(b-k,q)+E(b,q+k)+E(b,q-k))/4;$+=fe,te+=fe*fe}const ce=Math.max(0,te/re-($/re)**2);F+=ce}return Math.sqrt(F)})(),W=i.reliefCap??g.TERRAIN_DETAIL_RELIEF_CAP,Q=W>0?Math.min(1,W*se/Math.max(1e-9,g.TERRAIN_DETAIL_RMS_M)):1,oe=F=>Q>=1?F:{...F,rmsM:(F.rmsM??g.TERRAIN_DETAIL_RMS_M)*Q,ravineDepthM:(F.ravineDepthM??g.RAVINE_DEPTH_M)*Q,grainAmpM:(F.grainAmpM??g.GRAIN_AMP_M)*Q},ie=F=>{const k=oe(Ae(F));return Yv({demCellM:Y,seed:j,...xu(Y,V.gx,V.gy,k),landformHeightAt:E,waterFadeAt:J,...k})};let de=ie(he);const D=(F,k,$)=>E(F,k,$)+de.at(F,k,$),le=(F,k)=>{const $=g.NORMAL_EPSILON_M,te=(E(F+$,k)-E(F-$,k))/(2*$),ce=(E(F,k+$)-E(F,k-$))/(2*$),I=Math.hypot(te,1,ce);return{x:-te/I,y:1/I,z:-ce/I}};return{siteRelief:()=>({reliefM:se,scale:Q,cap:W}),applyBakedBand:(F,k,$,te)=>{let ce=-1/0;for(let I=0;I<F.length;I++)F[I]>ce&&(ce=F[I]);o={grid:F,g:k,cellM:$,halfM:te,blendM:500,maxM:ce},M=null,v=new yn(S,p)},clearBakedBand:()=>{o=null,M=null,v=new yn(S,p)},setFilterExtent:F=>{f=F,M=null,v=new yn(S,p)},filterExtentM:()=>f,heightAt:D,landformHeightAt:E,landformDemHeightAt:B,landformBakedHeightAt:l,normalAt:le,seatNormalAt:(F,k)=>{const $=g.NORMAL_EPSILON_M,te=(D(F+$,k)-D(F-$,k))/(2*$),ce=(D(F,k+$)-D(F,k-$))/(2*$),I=Math.hypot(te,1,ce);return{x:-te/I,y:1/I,z:-ce/I}},slopeDegAt:(F,k)=>Math.acos(Math.max(-1,Math.min(1,le(F,k).y)))*180/Math.PI,waterDepthAt:(F,k)=>t.depthAt(F,k),waterSurfaceYAt:(F,k)=>t.surfaceYAt(F,k),get detailBand(){return de.band},get maxHeightBoundM(){const F=this.maxHeightBoundParts,k=on().filter?zs(ji()):0;return o?Math.max(F.maxPost+F.overshoot+F.residualPeak,o.maxM+F.residualPeak)+k:F.maxPost+F.overshoot+F.residualPeak+k},get maxHeightBoundParts(){let F={maxPost:0,overshoot:0},k=-1/0;for(const te of s){const ce=te.boundParts;ce.maxPost+ce.overshoot>k&&(k=ce.maxPost+ce.overshoot,F=ce)}const $=on().filter?zs(ji()):0;return{...F,residualPeak:de.peakM,filterCap:$}},setDetailOverrides(F){he={...F??{}},de=ie(he)},detailOverrides:()=>({...he}),demCellM:Y,get detailPhaseXZ(){return xu(Y,V.gx,V.gy,he)},detailAt:(F,k)=>de.at(F,k),erosionFilterAt:(F,k)=>on().filter?y(F,k,l(F,k)):0,setFilterUnitFrame(F){_=F,M=null},applyDrainageField(F){c=F,M=null,v=new yn(S,p)},drainageAt:(F,k)=>on().drainage?u(F,k):0,levels:s,water:t}}const Rc=new Set([80,90,95]);function yc(){return{bodies:[],depthAt:()=>0,surfaceYAt:()=>null,bodyAt:()=>null,distToShoreAt:()=>0,insidenessAt:()=>0}}function Ff(n,e,t,i=g.WATER_MIN_BODY_CELLS){const{width:s,height:r,data:o,z:a}=e,l=s*r,c=Gv(n.lat,a),h=e.x0*mt,u=e.y0*mt,d=(E,T)=>{const P=Bv((h+E)/mt,(u+T)/mt,a);return ei(n,P.lat,P.lon)},f=new Int32Array(l).fill(-1),_=[];for(let E=0;E<l;E++){if(f[E]!==-1||!Rc.has(o[E]))continue;const T=_.length,P=[E];f[E]=T;for(let W=0;W<P.length;W++){const Q=P[W],oe=Q%s;for(const ie of[Q-s,Q+s,oe>0?Q-1:-1,oe<s-1?Q+1:-1])ie>=0&&ie<l&&f[ie]===-1&&Rc.has(o[ie])&&(f[ie]=T,P.push(ie))}if(P.length<i){for(const W of P)f[W]=-2;continue}const z=P.map(W=>{const Q=d(W%s+.5,Math.floor(W/s)+.5);return t(Q.x,Q.z)}),O=[...z].sort((W,Q)=>W-Q),B=P.length,V=(O[B-1>>1]+O[B>>1])/2,ee=P.filter((W,Q)=>z[Q]<=V+g.WATER_MASK_MAX_RISE_M);if(P.forEach((W,Q)=>{(z[Q]>V+g.WATER_MASK_MAX_RISE_M||ee.length<i)&&(f[W]=-2)}),ee.length<i)continue;const Y=z.filter(W=>W<=V+g.WATER_MASK_MAX_RISE_M).sort((W,Q)=>W-Q),j=Y[Math.min(Y.length-1,Math.floor(g.WATER_SURFACE_PERCENTILE*(Y.length-1)))];let J=s,he=-1,Ae=r,pe=-1;for(const W of ee){const Q=W%s,oe=(W-Q)/s;J=Math.min(J,Q),he=Math.max(he,Q),Ae=Math.min(Ae,oe),pe=Math.max(pe,oe)}const re=d(J,Ae),X=d(he+1,pe+1),se=ee.length;_.push({id:T,surfaceY:j,bbox:{minX:re.x,maxX:X.x,minZ:re.z,maxZ:X.z},areaM2:se*c*c,cellCount:se})}const M=new Int32Array(l);for(let E=0;E<l;E++){const T=E%s,P=(E-T)/s;M[E]=f[E]<0?0:T===0||P===0||T===s-1||P===r-1?3:1073741823}const m=(E,T,P)=>{M[T]+P<M[E]&&(M[E]=M[T]+P)};for(const E of[1,-1])for(let T=E>0?0:l-1;T>=0&&T<l;T+=E){if(M[T]===0)continue;const P=T%s,z=T-E*s;(E>0?P>0:P<s-1)&&m(T,T-E,3),!(z<0||z>=l)&&(m(T,z,3),P>0&&m(T,z-1,4),P<s-1&&m(T,z+1,4))}const p=(E,T)=>{const{gx:P,gy:z}=Xi(n,E,T,a),O=Math.floor(P)-h,B=Math.floor(z)-u,V=B*s+O;return O<0||B<0||O>=s||B>=r||f[V]<0?-1:V},S=(E,T)=>{const P=p(E,T);return P<0?0:M[P]/3*c},v=(E,T)=>{const P=p(E,T);return P<0?null:_[f[P]]},x=g.WATER_SHORE_BLUR_CELLS,L=(x+1)*(x+1);let R=Float32Array.from(f,E=>E>=0?1:0);for(const[E,T]of[[1,0],[0,1]]){const P=R;R=new Float32Array(l);for(let z=0;z<l;z++){const O=z%s,B=(z-O)/s;let V=0;for(let ee=-x;ee<=x;ee++){const Y=O+ee*E,j=B+ee*T;Y>=0&&j>=0&&Y<s&&j<r&&(V+=(x+1-Math.abs(ee))*P[j*s+Y])}R[z]=V/L}}const A=(E,T)=>E<0||T<0||E>=s||T>=r?0:R[T*s+E],w=(E,T,P,z,O)=>.5*(2*T+(-E+P)*O+(2*E-5*T+4*P-z)*O*O+(-E+3*T-3*P+z)*O*O*O);return{bodies:_,depthAt:(E,T)=>Math.min(g.WATER_DEPTH_CAP_M,S(E,T)*g.WATER_DEPTH_PER_M_FROM_SHORE),surfaceYAt:(E,T)=>{var P;return((P=v(E,T))==null?void 0:P.surfaceY)??null},bodyAt:v,distToShoreAt:S,insidenessAt:(E,T)=>{const{gx:P,gy:z}=Xi(n,E,T,a),O=P-h-.5,B=z-u-.5,V=Math.floor(O),ee=Math.floor(B),Y=O-V,j=B-ee,J=[-1,0,1,2].map(he=>w(A(V-1,ee+he),A(V,ee+he),A(V+1,ee+he),A(V+2,ee+he),Y));return Math.min(1,Math.max(0,w(J[0],J[1],J[2],J[3],j)))}}}const kf=n=>{var e;return((e=n.pack)==null?void 0:e.root)??"/fixtures"},Bf=(n,e="/fixtures")=>`${e}/worldcover/${n}`;function ax(n,e,t,i){const{midpoint:s}=n.site,r=Qc(s.lat,s.lon),o=new Map;n.tiles.forEach((f,_)=>{let M=o.get(f.z);M||o.set(f.z,M=new wf(f.z));const m=is(s.lon,s.lat,f.z);M.addTile(f.x,f.y,Ef(e[_]),m.x===f.x&&m.y===f.y)});const a=[...o.values()];i==null||i("tiles-decoded");const l=n.worldcover,c=zr(t);if(c.channels!==1||c.depth!==8||c.width!==l.width||c.height!==l.height)throw new Error(`worldcover fixture ${l.file}: expected ${l.width}x${l.height} 8-bit grayscale, got ${c.width}x${c.height} ch${c.channels} d${c.depth}`);const h={z:l.z,x0:l.x0,y0:l.y0,cols:l.cols,rows:l.rows,width:l.width,height:l.height,data:c.data},u=Ff(r,h,ra(r,a,yc()).landformHeightAt),d=ra(r,a,u,Gf());return i==null||i("world-query"),{manifest:n,frame:r,dems:a,query:d,water:u,grid:h}}function Gf(){if(typeof location>"u")return{};const n=new URLSearchParams(location.search),e={},t=[["detailrms","rmsM",0],["detailaniso","aniso",1e-6],["detailwander","wander",0],["detailravine","ravineDepthM",0],["detailravinelevels","ravineLevels",0],["detailgrain","grainAmpM",0],["reliefcap","reliefCap",0]];for(const[i,s,r]of t){const o=n.get(i);if(o===null)continue;const a=Number(o);if(!Number.isFinite(a)||a<r)throw new Error(`?${i}=${o} is not a finite number >= ${r}`);e[s]=a}return e}async function zf(n){const e=await fetch(n);if(!e.ok)throw new Error(`fixture missing: ${n} (${e.status})`);return new Uint8Array(await e.arrayBuffer())}async function lx(n){return Hf(gf,n)}async function Hf(n,e){const t=await Lv(n);e==null||e("manifest");const i=kf(t),s=new Fv(`${i}/tiles`),[r,o]=await Promise.all([Promise.all(t.tiles.map(a=>s.getTileBytes(a.z,a.x,a.y))),zf(Bf(t.worldcover.file,i))]);return ax(t,r,o,e)}function cx(n){var a;const e=(a=n.pack)==null?void 0:a.corridor,t=bf({a:n.site.a,b:n.site.b,nearZoom:(e==null?void 0:e.nearZoom)??n.zooms.near,nearMarginM:(e==null?void 0:e.nearMarginM)??g.CORRIDOR_NEAR_MARGIN_M,coarse:(e==null?void 0:e.coarse)??n.zooms.coarse.map((l,c)=>({zoom:l,radiusM:c===0?g.CORRIDOR_FAR_RADIUS_M:g.CORRIDOR_OUTER_RADIUS_M}))});if(!e)return t;const i=Vv(t);if(i!==e.corridorKey)throw new Error(`pack ${n.pack.id}: corridorKey drift — manifest ${e.corridorKey}, rebuilt ${i}`);const s=t.tiles.map(l=>`${l.z}/${l.x}/${l.y}`),r=n.tiles.map(l=>`${l.z}/${l.x}/${l.y}`),o=s.findIndex((l,c)=>l!==r[c]);if(s.length!==r.length||o>=0)throw new Error(`pack ${n.pack.id}: tile list differs — recorded ${r.length} tiles, corridor ${s.length}${o>=0?`, first difference at ${o}: recorded ${r[o]??"none"} vs corridor ${s[o]}`:""}`);return t}async function hx(n,e,t){const{frame:i,midpoint:s}=n,r=new Map,o=await Promise.all(n.tiles.map(h=>e.getTileBytes(h.z,h.x,h.y)));n.tiles.forEach((h,u)=>{let d=r.get(h.z);d||r.set(h.z,d=new wf(h.z));const f=is(s.lon,s.lat,h.z);d.addTile(h.x,h.y,Ef(o[u]),f.x===h.x&&f.y===h.y)});const a=[...r.values()],l=(t==null?void 0:t.grid)??null,c=l?Ff(i,l,ra(i,a,yc()).landformHeightAt):yc();return{manifest:null,frame:i,dems:a,query:ra(i,a,c,Gf()),water:c,grid:l}}async function ux(n){const e=n.worldcover,t=kf(n),i=[...n.tiles.map(r=>({file:r.file,url:xf(r.z,r.x,r.y,`${t}/tiles`),sha256:r.sha256})),{file:e.file,url:Bf(e.file,t),sha256:e.sha256}],s=[];for(const r of i){const o=await zf(r.url).catch(()=>null),a=o?new Uint8Array(await crypto.subtle.digest("SHA-256",o)):null;(a?[...a].map(c=>c.toString(16).padStart(2,"0")).join(""):"MISSING")!==r.sha256&&s.push(r.file)}return{ok:s.length===0,mismatches:s}}const Eo=14,Xn=256,dx={10:[0,100,0],20:[255,187,34],30:[255,255,76],40:[240,150,255],50:[250,0,0],60:[180,180,180],70:[240,240,240],80:[0,100,200],90:[0,150,160],95:[0,207,117],100:[250,230,160]},fx=(n,e,t)=>`https://wmts.terrascope.be/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=esa-worldcover-map-10m-2021-v2_map&STYLE=default&TILEMATRIXSET=EPSG:3857&TILEMATRIX=${n}&TILEROW=${t}&TILECOL=${e}&FORMAT=image/png&TIME=2021-01-01`,px=Object.entries(dx).map(([n,e])=>({c:Number(n),rgb:e}));function mx(n,e,t){let i=0,s=1/0;for(const r of px){const o=(n-r.rgb[0])**2+(e-r.rgb[1])**2+(t-r.rgb[2])**2;o<s&&(s=o,i=r.c)}return i}async function _x(n,e,t,i){try{const s=ln(n,e.x0-t,e.z0-t),r=ln(n,e.x1+t,e.z1+t),o=vc(s.lon,s.lat,Eo),a=vc(r.lon,r.lat,Eo),l=Math.floor(o.xf),c=Math.floor(o.yf),h=Math.floor(a.xf)-l+1,u=Math.floor(a.yf)-c+1,d=h*Xn,f=u*Xn,_={z:Eo,x0:l,y0:c,cols:h,rows:u,width:d,height:f,data:new Uint8Array(d*f)},M=h*u;let m=0,p=0;for(let S=0;S<u;S++)for(let v=0;v<h;v++){let x=null;for(let w=0;w<3&&!x;w++)try{const y=await fetch(fx(Eo,l+v,c+S));if(!y.ok)throw new Error(`WMTS ${y.status} at (${l+v},${c+S})`);x=new Uint8Array(await y.arrayBuffer())}catch(y){if(w===2)throw y;await new Promise(E=>setTimeout(E,400*(w+1)))}p+=x.length;const L=zr(x);if(L.width!==Xn||L.height!==Xn||L.channels<3)throw new Error(`unexpected WMTS tile shape ${L.width}x${L.height}x${L.channels}`);const R=L.data,A=L.channels;for(let w=0;w<Xn;w++){const y=(S*Xn+w)*d+v*Xn;for(let E=0;E<Xn;E++){const T=(w*Xn+E)*A;_.data[y+E]=mx(R[T],R[T+1],R[T+2])}}m++,i==null||i({done:m,total:M})}return{grid:_,tiles:M,bytes:p}}catch(s){return console.warn("[liveCover] cover unavailable:",s.message),null}}const gx=`
.bl-survey.bl-survey{position:fixed;inset:0;z-index:90;display:flex;flex-direction:column;align-items:center;
  justify-content:center;gap:0.9rem;background:#0f1113;color:#cfd6d0;font:14px ui-monospace,Menlo,Consolas,monospace}
.bl-survey h1{font:600 18px ui-monospace,Menlo,Consolas,monospace;color:#e7efe8;margin:0}
.bl-survey .bl-survey-stage{color:#9fb3a5}
.bl-survey .bl-survey-bar{width:min(420px,70vw);height:6px;background:#20261f;border-radius:3px;overflow:hidden}
.bl-survey .bl-survey-bar > div{height:100%;width:0;background:#7fae6d;transition:width 120ms linear}
.bl-survey .bl-survey-attrib{position:absolute;bottom:0.8rem;font-size:11px;color:#77817a;max-width:80vw;text-align:center}
.bl-survey .bl-survey-reasons{color:#e0b089;max-width:min(560px,80vw);text-align:center;line-height:1.5}
.bl-survey button{font:inherit;padding:6px 14px;border-radius:3px;border:1px solid rgba(160,175,165,0.5);
  background:#1d2a20;color:#e7efe8;cursor:pointer}
`;function Mx(n){const e=document.createElement("style");e.textContent=gx,document.head.appendChild(e);const t=document.createElement("div");t.className="bl-survey",n.appendChild(t);const i=document.createElement("h1");i.textContent="Surveying the terrain…";const s=document.createElement("div");s.className="bl-survey-stage";const r=document.createElement("div");r.className="bl-survey-bar";const o=document.createElement("div");r.appendChild(o);const a=document.createElement("div");a.className="bl-survey-attrib",a.textContent="Elevation: Terrain Tiles (AWS Open Data, Mapzen/Tilezen) · Land cover: © ESA WorldCover 2021 (CC BY 4.0) via Terrascope",t.append(i,s,r,a);const l=performance.now();return{stage:c=>{s.textContent=c,o.style.width="0"},progress:(c,h)=>{o.style.width=`${Math.min(100,100*c/Math.max(1,h)).toFixed(1)}%`},fail:(c,h)=>new Promise(u=>{i.textContent=h??"This line cannot be walked",s.textContent="",r.style.display="none";const d=document.createElement("div");d.className="bl-survey-reasons",d.textContent=c.join("  ·  ");const f=document.createElement("button");f.type="button",f.textContent="Back to the map",t.append(d,f),f.addEventListener("click",()=>{t.remove(),e.remove(),u()})}),done:()=>{const c=performance.now()-l;return t.remove(),e.remove(),c}}}function Ex(n){return n<=g.MEDAL_PLATINUM_M?"Platinum":n<=g.MEDAL_GOLD_M?"Gold":n<=g.MEDAL_SILVER_M?"Silver":n<=g.MEDAL_BRONZE_M?"Bronze":"FAILED"}function vx(n,e,t){const i=Math.min(1,Math.max(0,1-e/g.MEDAL_BRONZE_M));return Math.round(g.SCORE_BASE_PER_KM*(n/1e3)*i*g.MEDAL_MULT[t])}const xx=vx,oa=["Sprint","Trek"];function Vf(n){return!(n>=g.CATEGORY_MIN_M)||n>g.CATEGORY_MAX_M?null:n<=g.CATEGORY_SPRINT_MAX_M?"Sprint":n<=g.CATEGORY_TREK_MAX_M?"Trek":"Expedition"}function Wf(n){const e=Math.floor(n.elapsedS);return{medal:n.medal,maxDev:`${n.maxDevM.toFixed(1)} m`,avgDev:`${n.avgDevM.toFixed(1)} m`,lineScore:String(n.lineScore),elapsed:`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,length:`${(n.lengthM/1e3).toFixed(1)} km`}}const Pr=0;function Sx(){return{classAt:()=>Pr,histogram:()=>new Map,grid:null}}function Iu(n,e){const{width:t,height:i,data:s,z:r}=e,o=e.x0*mt,a=e.y0*mt,l=(h,u)=>{const{gx:d,gy:f}=Xi(n,h,u,r),_=Math.floor(d)-o,M=Math.floor(f)-a;return _<0||M<0||_>=t||M>=i?Pr:s[M*t+_]};return{classAt:l,histogram:(h,u,d,f)=>{const _=f>0?Math.floor(d/f):0,M=d*d,m=new Map;let p=0;for(let v=-_;v<=_;v++)for(let x=-_;x<=_;x++){const L=x*f,R=v*f;if(L*L+R*R>M)continue;const A=l(h+L,u+R);m.set(A,(m.get(A)??0)+1),p++}const S=new Map;for(const[v,x]of m)S.set(v,x/p);return S},grid:e}}const br=60,Ax={80:"permanent water",90:"wetland",95:"mangrove"},Du={Sprint:[g.CATEGORY_MIN_M,g.CATEGORY_SPRINT_MAX_M],Trek:[g.CATEGORY_SPRINT_MAX_M,g.CATEGORY_TREK_MAX_M],Expedition:[g.CATEGORY_TREK_MAX_M,g.CATEGORY_MAX_M]},Hs=n=>(n/1e3).toFixed(2),Rx=()=>oa.map(n=>`${n} (${Hs(Du[n][0])}–${Hs(Du[n][1])} km)`).join(" and ");function yx(n,e,t,i,s){const r=ei(t,n.lat,n.lon),o=ei(t,e.lat,e.lon),a=Math.hypot(o.x-r.x,o.z-r.z),l=Math.max(2,Math.ceil(a/s)+1),c=a/(l-1);let h=0,u=0;for(let d=0;d<l;d++){const f=d/(l-1);h=i.waterDepthAt(r.x+(o.x-r.x)*f,r.z+(o.z-r.z)*f)>0?h+c:0,h>u&&(u=h)}return u}function Tx(n,e,t={}){const i=[];for(const[l,c]of[["A",n],["B",e]])Math.abs(c.lat)>br&&i.push(`Endpoint ${l} is at latitude ${c.lat.toFixed(3)}° — lines can't go beyond ${br}° north or south.`);const{frame:s,cover:r}=t;for(const[l,c]of[["A",n],["B",e]]){const h=s?ei(s,c.lat,c.lon):null,u=h&&r?r.classAt(h.x,h.z):Pr;u===Pr?t.deferDataRules||i.push(`Endpoint ${l} cannot be confirmed on land — no land-cover data is loaded for that point.`):Rc.has(u)&&i.push(`Endpoint ${l} is not on land — the land cover there is ${Ax[u]??`covered by water (class ${u})`}.`)}const o=eh(n,e),a=Vf(o);if(a===null?i.push(`This line is ${Hs(o)} km long — lines must be between ${Hs(g.CATEGORY_MIN_M)} km and ${Hs(g.CATEGORY_MAX_M)} km.`):oa.includes(a)||i.push(`This line is ${Hs(o)} km long — that is the ${a} band, and only ${Rx()} lines can be walked in this version.`),s&&t.query){const l=yx(n,e,s,t.query,t.stepM??g.WATER_SCAN_STEP_M);l>g.WATER_CROSSING_MAX_M&&i.push(`The line crosses ${Math.round(l)} m of water without a break — no single water crossing may exceed ${g.WATER_CROSSING_MAX_M} m.`)}return{valid:i.length===0,reasons:i}}class bx{constructor(e){Qe(this,"order",new Map);Qe(this,"total",0);this.maxBytes=e}touch(e){const t=this.order.get(e);t!==void 0&&(this.order.delete(e),this.order.set(e,t))}add(e,t){this.order.has(e)&&this.remove(e),this.order.set(e,t),this.total+=t;const i=[];for(const[s,r]of this.order)this.total<=this.maxBytes||s===e||(i.push(s),this.total-=r);for(const s of i)this.order.delete(s);return i}remove(e){const t=this.order.get(e);t!==void 0&&(this.order.delete(e),this.total-=t)}has(e){return this.order.has(e)}get totalBytes(){return this.total}get keys(){return[...this.order.keys()]}}function Lu(){const n=new Map;return{backend:"memory",async get(e){return n.get(e)??null},async put(e,t){n.set(e,t)},async delete(e){n.delete(e)}}}function dl(n){return n.replace(/[^A-Za-z0-9._-]/g,"_")}async function Pu(n="tile-cache"){var t;const e=(t=globalThis.navigator)==null?void 0:t.storage;if(!(e!=null&&e.getDirectory))return Lu();try{const s=await(await e.getDirectory()).getDirectoryHandle(n,{create:!0});return{backend:"opfs",async get(r){try{const o=await s.getFileHandle(dl(r));return new Uint8Array(await(await o.getFile()).arrayBuffer())}catch{return null}},async put(r,o){const l=await(await s.getFileHandle(dl(r),{create:!0})).createWritable();await l.write(o),await l.close()},async delete(r){try{await s.removeEntry(dl(r))}catch{}}}}catch{return Lu()}}const fr=Sf;function wx(n,e,t,i,s,r){const o=ln(n,e,i),a=ln(n,t,s),l=is(o.lon,o.lat,r),c=is(a.lon,a.lat,r);return{x0:Math.min(l.x,c.x),x1:Math.max(l.x,c.x),y0:Math.min(l.y,c.y),y1:Math.max(l.y,c.y)}}function Cx(n,e){if(n<=0||typeof Worker>"u")return null;const t=[];try{for(let r=0;r<n;r++)t.push(new Worker(new URL(""+new URL("decodeWorker-yhlK0RIH.js",import.meta.url).href,import.meta.url),{type:"module"}))}catch{for(const r of t)r.terminate();return null}const i=t.map(()=>[]);let s=0;return t.forEach((r,o)=>{r.onmessage=a=>{const l=i[o].shift(),c=a.data;l!==void 0&&e(l,"error"in c?null:{width:c.width,height:c.height,elevations:c.elevations})},r.onerror=()=>{for(const a of i[o].splice(0))e(a,null)}}),{submit(r,o){i[s%t.length].push(r);const a=o.slice();t[s++%t.length].postMessage({id:s,bytes:a},[a.buffer])},dispose(){for(const r of t)r.terminate()}}}function Nx(n){const e=new bx(n.cacheMaxBytes??g.TILE_CACHE_MAX_BYTES),t=new Map,i=new Map,s=new Map,r=new Map,o=new Map;let a=[],l={x:0,y:0,key:""},c=0,h=0,u=0,d=0,f=!1;const _=[],M=new Set;for(const R of n.coarse){const A=wx(n.frame,-R.radiusM,R.radiusM,-R.radiusM,R.radiusM,R.zoom);for(let w=A.y0;w<=A.y1;w++)for(let y=A.x0;y<=A.x1;y++){const E=Pi(R.zoom,y,w);M.has(E)||(M.add(E),_.push({z:R.zoom,x:y,y:w,role:"far"}))}}const m=Cx(n.decodeWorkers??g.TILE_DECODE_WORKERS,(R,A)=>{const w=o.get(R);A?w&&(d++,w.tile=A):o.delete(R)}),p=R=>t.has(R)||s.has(R)||r.has(R)||o.has(R);async function S(R){const A=`terrarium/${R.z}/${R.x}/${R.y}`;if(n.cache){const y=await n.cache.get(A);if(y)return h++,e.touch(A),y}u++;const w=await n.source.getTileBytes(R.z,R.x,R.y);if(n.cache){await n.cache.put(A,w);for(const y of e.add(A,w.byteLength))await n.cache.delete(y)}return w}function v(R){const A=Pi(R.z,R.x,R.y);s.set(A,R),S(R).then(w=>{s.delete(A),!f&&i.has(A)&&r.set(A,{id:R,bytes:w})},()=>{s.delete(A)})}function x(R,A){if(f)return;const w=ln(n.frame,R,A),y=is(w.lon,w.lat,n.nearZoom);l={x:y.x,y:y.y,key:Pi(n.nearZoom,y.x,y.y)},i.clear();const E=n.nearRadiusTiles;for(let T=-E;T<=E;T++)for(let P=-E;P<=E;P++)i.set(Pi(n.nearZoom,y.x+P,y.y+T),{z:n.nearZoom,x:y.x+P,y:y.y+T,role:"near"});for(const T of _){const P=Pi(T.z,T.x,T.y);i.has(P)||i.set(P,T)}for(const[T,P]of[...t])i.has(T)||(t.delete(T),c++,n.onUnload(P.id));for(const T of[...o.keys()])i.has(T)||o.delete(T);for(const T of[...r.keys()])i.has(T)||r.delete(T);a=[...i.values()].filter(T=>!p(Pi(T.z,T.x,T.y))).sort((T,P)=>{if(T.role!==P.role)return fr(T,P);const z=(T.x-l.x)**2+(T.y-l.y)**2,O=(P.x-l.x)**2+(P.y-l.y)**2;return Ec(T.role)===0&&z-O||fr(T,P)})}function L(){var y;if(f)return;for(const[E,T]of[...r])r.delete(E),o.set(E,{id:T.id,job:m?null:Ix(T.bytes),tile:null}),m&&m.submit(E,T.bytes);const R=n.decodeRowsPerStep>0?n.decodeRowsPerStep:Number.MAX_SAFE_INTEGER;for(const[E,T]of[...o].sort((P,z)=>fr(P[1].id,z[1].id)))(y=T.job)!=null&&y.step(R)&&(T.tile=T.job.result()),T.tile&&(o.delete(E),t.set(E,{id:T.id,tile:T.tile}),n.onTile(T.id,T.tile));let A=n.loadsPerStep;const w=[];for(const E of a)Pi(E.z,E.x,E.y)===l.key?v(E):A>0?(A--,v(E)):w.push(E);a=w}return{update:x,step:L,drained:()=>a.length===0&&s.size===0&&r.size===0&&o.size===0,stats:()=>({loaded:t.size,queued:a.length,inFlight:s.size,unloaded:c,bytes:e.totalBytes,cacheHits:h,cacheMisses:u,slicing:o.size,decodedByWorker:d}),loaded:()=>[...t.values()].map(R=>R.id).sort(fr),dispose:()=>{f=!0,a=[],i.clear(),s.clear(),r.clear(),o.clear(),t.clear(),m==null||m.dispose()}}}function Ix(n){const e=zr(n);if(e.depth!==8)throw new Error(`terrarium tile must be 8-bit, got ${e.depth}`);if(e.channels!==3&&e.channels!==4)throw new Error(`terrarium tile must be RGB(A), got ${e.channels} channels`);const{width:t,height:i,channels:s}=e,r=e.data,o=new Float32Array(t*i);let a=0;return{step(l){const c=Math.min(i,a+Math.max(1,Math.floor(l)));if(c>a){const h=Mf(r.subarray(a*t*s,c*t*s),t,c-a,s);o.set(h,a*t),a=c}return a>=i},done:()=>a>=i,result(){if(a<i)throw new Error(`sliced decode incomplete: ${a}/${i} rows`);return{width:t,height:i,elevations:o}}}}const Dx=5,Lx=1,Px=[[1,1,1,8,8,9,9,9,10],[1,1,8,8,8,9,9,9,0],[1,4,6,6,7,7,9,0,0],[4,4,6,6,6,7,0,0,0],[4,4,5,6,6,0,0,0,0],[3,3,5,5,0,0,0,0,0],[3,3,3,0,0,0,0,0,0],[3,3,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0]],Ox=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function Ux(n,e,t,i,s=Dx,r=Lx){const o=new Uint8Array(e*t),a=Math.tan(r*Math.PI/180);for(let l=s;l<t-s;l++)for(let c=s;c<e-s;c++){const h=n[l*e+c];let u=0,d=0;for(const[f,_]of Ox){let M=0;for(let m=1;m<=s;m++){const p=n[(l+_*m)*e+(c+f*m)]-h,S=Math.hypot(f*m,_*m)*i,v=p/S;Math.abs(v)>Math.abs(M)&&(M=v)}M>a?u++:M<-a&&d++}o[l*e+c]=Px[d][u]}return o}function Fx(n,e,t,i){const s=new Float32Array(e*t);for(let r=1;r<t-1;r++)for(let o=1;o<e-1;o++){const a=r*e+o,l=n[a-e-1],c=n[a-e],h=n[a-e+1],u=n[a-1],d=n[a+1],f=n[a+e-1],_=n[a+e],M=n[a+e+1],m=(h+2*d+M-l-2*u-f)/(8*i),p=(f+2*_+M-l-2*c-h)/(8*i);s[a]=Math.atan(Math.hypot(m,p))*180/Math.PI}return s}function kx(n,e,t,i){const s=new Float32Array(e*t),r=new Float32Array(e*t),o=(h,u,d,f,_,M)=>{const m=[];for(let p=0;p<d+i;p++){if(p<d){const v=h[_+p*f];for(;m.length&&!M(h[_+m[m.length-1]*f],v);)m.pop();m.push(p)}const S=p-i;if(S>=0){for(;m.length&&m[0]<S-i;)m.shift();u[_+S*f]=h[_+m[0]*f]}}};for(let h=0;h<t;h++)o(n,s,e,1,h*e,(u,d)=>u<d),o(n,r,e,1,h*e,(u,d)=>u>d);const a=new Float32Array(e*t),l=new Float32Array(e*t),c=new Float32Array(e*t);for(let h=0;h<e;h++)o(s,l,t,e,h,(u,d)=>u<d),o(r,c,t,e,h,(u,d)=>u>d);for(let h=0;h<e*t;h++)a[h]=c[h]-l[h];return a}function Bx(n,e,t){const i=new Float32Array(e*t);for(let s=1;s<t-1;s++)for(let r=1;r<e-1;r++){const o=s*e+r,a=n[o];let l=0;for(const c of[-e-1,-e,-e+1,-1,1,e-1,e,e+1]){const h=n[o+c]-a;l+=h*h}i[o]=Math.sqrt(l/8)}return i}const Gx=255;async function zx(n,e,t){const i=await fetch(`${n}/factors/${e}`);if(!i.ok)throw new Error(`factor crop missing: ${n}/factors/${e} (${i.status})`);const s=zr(new Uint8Array(await i.arrayBuffer()));if(s.width!==t.w||s.height!==t.h)throw new Error(`factor crop ${e}: manifest says ${t.w}x${t.h}, file is ${s.width}x${s.height}`);return{w:t.w,h:t.h,bbox:t.bbox,data:s.data}}function Hx(n,e,t){const[i,s,r,o]=n.bbox,a=(t-i)/(r-i),l=(o-e)/(o-s);if(a<0||a>=1||l<0||l>=1)return null;const c=n.data[Math.floor(l*n.h)*n.w+Math.floor(a*n.w)];return c===Gx?null:c}async function Vx(n,e,t,i){const s=new Map,r={};for(const[o,a]of Object.entries(e))a.absent?r[o]=a.absent:a.file&&a.grid&&s.set(o,await zx(t,a.file,a.grid));return Xf(n,s,r,i)}function Xf(n,e,t,i){let s=null;if(i){const l=Math.floor(i.halfM*2/i.cellM),c=new Float32Array(l*l);for(let d=0;d<l;d++)for(let f=0;f<l;f++)c[d*l+f]=i.heightAt(f*i.cellM-i.halfM,d*i.cellM-i.halfM);const h=Qv(c,l,l,i.cellM),u=Math.round(1e3/i.cellM);s={g:l,cellM:i.cellM,halfM:i.halfM,slope:Fx(c,l,l,i.cellM),relief:kx(c,l,l,u),triA:Bx(c,l,l),geo:Ux(c,l,l,i.cellM),acc:h.acc},t["derived-band"]=`DEM-derived factors cover ±${i.halfM} m of the frame origin at ${i.cellM} m cells; outside that band they read null (counted), by construction`}else t["slope/relief/tri/geomorphon/flowAcc"]="no derived band on this boot (no DerivedSpec passed — pre-S5 caller or a context without a query)";const r=(l,c)=>{if(!s)return null;const h=Math.floor((l+s.halfM)/s.cellM),u=Math.floor((c+s.halfM)/s.cellM),d=5;return h<d||u<d||h>=s.g-d||u>=s.g-d?null:u*s.g+h},o={},a=(l,c,h)=>{const u=e.get(l),d=u?Hx(u,c,h):null;return d===null&&(o[l]=(o[l]??0)+1),d};return{at:(l,c)=>{const{lat:h,lon:u}=ln(n,l,c),d=r(l,c),f=(_,M)=>{const m=d!==null&&M?M[d]:null;return m===null&&(o[_]=(o[_]??0)+1),m};return{koppen:a("koppen",h,u),sandPct:a("sand",h,u),clayPct:a("clay",h,u),cfvoPct:a("cfvo",h,u),slopeDeg:f("slopeDeg",(s==null?void 0:s.slope)??null),reliefM:f("reliefM",(s==null?void 0:s.relief)??null),tri:f("tri",(s==null?void 0:s.triA)??null),geomorphon:f("geomorphon",(s==null?void 0:s.geo)??null),flowAcc:f("flowAcc",(s==null?void 0:s.acc)??null),absent:t}},absentCounts:()=>({...o}),inventory:()=>({present:[...e.keys()],absent:{...t}})}}const Wx=3,Ou=[1/16,4/16,6/16,4/16,1/16];function Xx(n,e,t){const i=new Float32Array(e*t),s=new Float32Array(e*t);for(let r=0;r<t;r++){const o=r*e;for(let a=0;a<e;a++){let l=0;for(let c=-2;c<=2;c++){const h=Math.min(e-1,Math.max(0,a+c));l+=Ou[c+2]*n[o+h]}i[o+a]=l}}for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=0;for(let l=-2;l<=2;l++){const c=Math.min(t-1,Math.max(0,o+l));a+=Ou[l+2]*i[c*e+r]}s[o*e+r]=a}return s}function fl(n,e,t,i=Wx){const s=[];let r=n;for(let o=0;o<i;o++){const a=Xx(r,e,t),l=new Float32Array(e*t);for(let c=0;c<e*t;c++)l[c]=r[c]-a[c];s.push(l),r=a}return{bands:s,low:r,w:e,h:t}}function $x(n){const e=new Float32Array(n.low);for(let t=n.bands.length-1;t>=0;t--){const i=n.bands[t];for(let s=0;s<e.length;s++)e[s]=Math.fround(e[s]+i[s])}return e}function Tc(n,e){let t=0;for(let i=0;i<n.length;i++){const s=n[i]-e[i];t+=s*s}return Math.sqrt(t/n.length)}function Kx(n,e,t,i){const s=new Float32Array(n),r=new Float32Array(e*t),o=i.rate??.5,a=typeof i.reposeDeg!="number",l=a?i.reposeDeg:null,c=a?0:Math.tan(i.reposeDeg*Math.PI/180),h=[{d:-e-1,len:Math.SQRT2,dx:-1,dy:-1},{d:-e,len:1,dx:0,dy:-1},{d:-e+1,len:Math.SQRT2,dx:1,dy:-1},{d:-1,len:1,dx:-1,dy:0},{d:1,len:1,dx:1,dy:0},{d:e-1,len:Math.SQRT2,dx:-1,dy:1},{d:e,len:1,dx:0,dy:1},{d:e+1,len:Math.SQRT2,dx:1,dy:1}];for(let u=0;u<i.iterations;u++){r.fill(0);for(let d=0;d<t;d++)for(let f=0;f<e;f++){const _=d*e+f,M=l?Math.tan(l[_]*Math.PI/180):c;for(const{d:m,len:p,dx:S,dy:v}of h){if(f+S<0||f+S>=e||d+v<0||d+v>=t)continue;const x=_+m,L=s[_]-s[x],R=M*p*i.cellM;if(L>R){const A=(L-R)*o/16;r[_]-=A,r[x]+=A}}}for(let d=0;d<e*t;d++)s[d]=Math.fround(s[d]+r[d])}return s}const Yx=.45;function qx(n,e,t,i){const s=e*t,r=new Float32Array(n),o=typeof i.K!="number",a=o?i.K:null,l=o?0:i.K,c=[],h=10;let u,d,f;for(let _=0;_<i.iterations;_++){if(_%h===0){const{surface:m}=Yi(r,e,t);u=qi(m,e,t,i.cellM),d=If(m,u,e,t),f=Array.from({length:s},(p,S)=>S).sort((p,S)=>m[p]-m[S]||p-S)}let M=0;for(const m of f){const p=u[m];if(p<0)continue;const S=m%e-p%e,v=(m/e|0)-(p/e|0),x=S!==0&&v!==0?Math.SQRT2*i.cellM:i.cellM,R=(a?a[m]:l)*Math.pow(d[m]*i.cellM*i.cellM,Yx)*i.dtYears/x,A=(r[m]+R*r[p])/(1+R),w=Math.max(Math.min(r[m],Math.max(A,r[p])),r[p]);M+=r[m]-w,r[m]=Math.fround(w)}c.push(M)}return{h:r,removedPerIter:c}}function Zx(n){return n===null?1:n<=3?1.6:n<=7?.45:n<=16?1.25:n<=28?.9:.7}function jx(n,e,t,i){const s=new Float32Array(n);for(let r=0;r<n;r++){const o=t(r),a=i(r),l=o===null?1:1.5-o/100,c=a!==null&&a>=17?1.3:1;s[r]=e*l*c*Zx(a)}return s}const Cn=30,Jx=3.5,Qx=300,eS=150,tS=1400,Uu=2e-5,vo=10;function nS(n,e){const t=Tc(n,new Float32Array(n.length));if(t<=e)return{out:n,clamped:!1};const i=e/t,s=new Float32Array(n.length);for(let r=0;r<n.length;r++)s[r]=n[r]*i;return{out:s,clamped:!0}}function iS(n,e,t,i,s,r,o,a){const l=(globalThis.performance??{now:()=>Date.now()}).now(),c=e*e;let h=34,u=Uu;if(s){const X=new Float32Array(c),se=new Array(c),W=new Array(c);for(let Q=0;Q<e;Q++)for(let oe=0;oe<e;oe++){const ie=Q*e+oe,{x:de,z:D}=r(oe,Q),le=s.at(de,D);X[ie]=30+Math.min(15,(le.cfvoPct??15)*.3),se[ie]=le.sandPct,W[ie]=le.koppen}h=X,u=jx(c,Uu,Q=>se[Q],Q=>W[Q])}const d=on(),f=d.thermal?Kx(n,e,e,{reposeDeg:h,iterations:Qx,cellM:t}):n,_=d.streamPower?qx(f,e,e,{K:u,dtYears:tS,iterations:eS,cellM:t}).h:f,M=8,m=fl(n,e,e);let p=0,S=0,v=0,x=0,L=0,R=0,A=!1,w=0;const y=d.thermal||d.streamPower;let E=!1,T;if(!y)T=new Float32Array(n);else{const X=fl(_,e,e),se=m.bands.length,W=[];for(let oe=0;oe<se;oe++)if(oe<se-1)W.push(X.bands[oe]);else{const ie=new Float32Array(c);for(let U=0;U<c;U++)ie[U]=X.bands[oe][U]-m.bands[oe][U];const{out:de,clamped:D}=nS(ie,Jx);E=D;const le=new Float32Array(c);for(let U=0;U<c;U++)le[U]=m.bands[oe][U]+de[U];W.push(le)}T=$x({bands:W,low:m.low});for(let oe=0;oe<e;oe++)for(let ie=0;ie<e;ie++){const de=Math.min(ie,oe,e-1-ie,e-1-oe);if(de>=M)continue;const D=de/M,le=D*D*(3-2*D),U=oe*e+ie;T[U]=Math.fround(n[U]+(T[U]-n[U])*le)}for(let oe=0;oe<c;oe++){const ie=T[oe]-n[oe];T[oe]=Math.fround(n[oe]+vo*Math.tanh(ie/vo))}if(o){const oe=new Uint8Array(c);for(let le=0;le<e;le++)for(let U=0;U<e;U++){const{x:F,z:k}=r(U,le);o(F,k)&&(oe[le*e+U]=1)}const ie=4,de=new Float32Array(c).fill(ie+1),D=[];for(let le=0;le<c;le++)oe[le]&&(de[le]=0,D.push(le));for(let le=0;le<D.length;le++){const U=D[le];if(de[U]>=ie)continue;const F=U%e,k=U/e|0;for(const[$,te]of[[1,0],[-1,0],[0,1],[0,-1]]){const ce=F+$,I=k+te;if(ce<0||I<0||ce>=e||I>=e)continue;const b=I*e+ce;de[b]>de[U]+1&&(de[b]=de[U]+1,D.push(b))}}for(let le=0;le<c;le++){const U=de[le];if(U>ie)continue;const F=U/ie,k=F*F*(3-2*F);T[le]=Math.fround(n[le]+(T[le]-n[le])*k)}}const Q=8;{const oe=new Uint8Array(c);if(o)for(let ie=0;ie<e;ie++)for(let de=0;de<e;de++){const{x:D,z:le}=r(de,ie);o(D,le)&&(oe[ie*e+de]=1)}for(let ie=0;ie<Q;ie++){const{surface:de}=Yi(T,e,e),D=qi(de,e,e,t),le=Array.from({length:c},(F,k)=>k).sort((F,k)=>de[k]-de[F]||F-k);let U=0;for(const F of le){const k=D[F];if(k<0||oe[k])continue;const $=k%e,te=k/e|0;if(Math.min($,te,e-1-$,e-1-te)<M)continue;const ce=Math.max(.005,n[k]-n[F]),I=T[F]+ce;if(T[k]>I){const b=Math.fround(Math.max(I,n[k]-vo));b<T[k]&&(T[k]=b,U++)}}if(p=ie+1,S+=U,U===0)break}{const{surface:ie}=Yi(T,e,e),de=qi(ie,e,e,t);for(let D=0;D<c;D++){const le=de[D];if(le<0||oe[le])continue;const U=le%e,F=le/e|0;if(Math.min(U,F,e-1-U,e-1-F)<M)continue;w++;const k=T[le]-T[D]-Math.max(.005,n[le]-n[D]);k<=8*Math.abs(T[le])*2**-23||(v++,T[le]<=n[le]-vo+1e-6?(x++,k>R&&(R=k)):k>L&&(L=k))}A=!0}}}let P=0,z=0;if(o)for(let X=0;X<e;X++)for(let se=0;se<e;se++){const W=X*e+se,{x:Q,z:oe}=r(se,X);o(Q,oe)&&(P++,Math.abs(T[W]-n[W])>1e-6&&z++)}const O=new Uint8Array(c);if(o)for(let X=0;X<e;X++)for(let se=0;se<e;se++){const{x:W,z:Q}=r(se,X);o(W,Q)&&(O[X*e+se]=1)}const B=200,V=X=>{const{surface:se}=Yi(X,e,e),W=qi(se,e,e,t);let Q=0,oe=-1,ie=0;for(let D=0;D<B;D++){let le=D*104729%(e*e),U=0;for(;W[le]>=0&&U++<e*e;){const F=W[le];if(O[F])break;const k=F%e,$=F/e|0;if(Math.min(k,$,e-1-k,e-1-$)<M)break;X[F]-X[le]>Q&&(Q=X[F]-X[le],oe=F),n[F]-n[le]>ie&&(ie=n[F]-n[le]),le=F}}let de=!1;if(oe>=0)for(let D=-3;D<=3&&!de;D++)for(let le=-3;le<=3;le++){const U=oe+D*e+le;if(U>=0&&U<c&&O[U]){de=!0;break}}return{worst:Q,at:oe,nearWater:de,srcSamePath:ie}},ee=V(T),Y=V(n),j=ee.worst,J=Y.worst,he=ee.srcSamePath,Ae=ee.nearWater,pe=ee.at,re=(()=>{const X=fl(T,e,e),se=m.bands.map((W,Q)=>({band:`L${Q}`,rms:Tc(X.bands[Q],W)}));return se.push({band:"low",rms:Tc(X.low,m.low)}),se})();return{baked:T,g:e,cellM:t,halfM:i,modeKey:Zi(d),wallMs:(globalThis.performance??{now:()=>Date.now()}).now()-l,budget:re,b1Clamped:E,constraints:{waterCells:P,waterChanged:z,monotonePaths:B,worstUphillM:j,worstUphillSourceM:J,worstUphillSourceSamePathM:he,worstUphillNearWater:Ae,worstUphillAt:pe,breachRounds:p,breachFixed:S,breachRemaining:v,breachCapped:x,breachWorst:L,breachWorstCapped:R,breachRan:A,breachPairs:w}}}const nh=2,zo=[["evolveDelta",Float32Array],["dir",Int32Array],["isChannel",Uint8Array],["isWater",Uint8Array],["depthM",Float32Array],["prev",Int32Array],["cx",Float32Array],["cz",Float32Array]];function sS(n){let e=5381;for(let t=0;t<n.length;t++)e=(e<<5)+e+n.charCodeAt(t)|0;return(e>>>0).toString(16)}function rS(n,e,t){const i=`v${nh}|${n}|${e}|${JSON.stringify(t)}`;return`drainage-${sS(i)}-${i.length}`}function oS(n){const e={v:nh,g:n.g,cellM:n.cellM,halfM:n.halfM,params:n.params,stats:n.stats,lens:zo.map(([o])=>n[o].length)},t=new TextEncoder().encode(JSON.stringify(e));let i=4+t.length;for(const[o]of zo)i+=n[o].byteLength;const s=new Uint8Array(i);new DataView(s.buffer).setUint32(0,t.length,!0),s.set(t,4);let r=4+t.length;for(const[o]of zo){const a=n[o];s.set(new Uint8Array(a.buffer,a.byteOffset,a.byteLength),r),r+=a.byteLength}return s}function aS(n){try{const e=new DataView(n.buffer,n.byteOffset).getUint32(0,!0),t=JSON.parse(new TextDecoder().decode(n.subarray(4,4+e)));if(t.v!==nh)return null;let i=4+e;const s={};zo.forEach(([o,a],l)=>{const c=t.lens[l],h=c*a.BYTES_PER_ELEMENT,u=n.subarray(i,i+h),d=new a(c);new Uint8Array(d.buffer).set(u),s[o]=d,i+=h});const r=new Float32Array(0);return{g:t.g,cellM:t.cellM,halfM:t.halfM,params:t.params,stats:t.stats,z:r,zBase:r,evolve:null,areaM2:r,order:new Int32Array(0),zNode:r,...s}}catch{return null}}async function lS(n,e){try{const t=await n.get(e);return t?aS(t):null}catch{return null}}async function cS(n,e,t){try{await n.put(e,oS(t))}catch{}}const hS="modulepreload",uS=function(n,e){return new URL(n,e).href},Fu={},bc=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=uS(c,i),c in Fu)return;Fu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const M=o[_];if(M.href===c&&(!h||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":hS,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((_,M)=>{f.addEventListener("load",_),f.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},ku=[{prop:"sand",cov:"sand_5-15cm_mean",scale:.1},{prop:"clay",cov:"clay_5-15cm_mean",scale:.1},{prop:"cfvo",cov:"cfvo_5-15cm_mean",scale:.1}],dS=(n,e,t)=>`https://maps.isric.org/mapserv?map=/map/${e}.map&SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=${n}&FORMAT=GEOTIFF_INT16&SUBSET=long(${t.minLon.toFixed(5)},${t.maxLon.toFixed(5)})&SUBSET=lat(${t.minLat.toFixed(5)},${t.maxLat.toFixed(5)})&SUBSETTINGCRS=http://www.opengis.net/def/crs/EPSG/0/4326&OUTPUTCRS=http://www.opengis.net/def/crs/EPSG/0/4326`;async function fS(n,e,t){const{fromArrayBuffer:i}=await bc(async()=>{const{fromArrayBuffer:h}=await import("./geotiff-CMsX8MLd.js").then(u=>u.g);return{fromArrayBuffer:h}},[],import.meta.url),r=await(await i(n)).getImage(),o=r.getWidth(),a=r.getHeight(),l=(await r.readRasters())[0],c=new Uint8Array(o*a);for(let h=0;h<o*a;h++){const u=l[h];c[h]=u<0?255:Math.min(254,Math.round(u*e))}return{w:o,h:a,bbox:[t.minLon,t.minLat,t.maxLon,t.maxLat],data:c}}async function pS(n,e){try{const t=new Map;let i=0,s=0;for(const{prop:r,cov:o,scale:a}of ku){let l=null;for(let c=0;c<3&&!l;c++)try{const h=await fetch(dS(o,r,n));if(!h.ok)throw new Error(`WCS ${h.status} for ${o}`);l=await h.arrayBuffer()}catch(h){if(c===2)throw h;await new Promise(u=>setTimeout(u,400*(c+1)))}i+=l.byteLength,t.set(r,await fS(l,a,n)),e==null||e(++s,ku.length)}return{grids:t,bytes:i}}catch(t){return console.warn("[liveFactors] soil unavailable:",t.message),null}}function $f(n,e,t,i,s,r){return{phase:"arriving",a:n,b:e,aLatLon:t,bLatLon:i,lengthM:s,bearingRad:r,elapsedS:0,timePenaltyS:0,tick:0,xtdM:0,xtdSignedM:0,maxDevM:0,meanDevM:0,devDistSumM2:0,pathLenM:0,lastX:n.x,lastZ:n.z,alongM:0,distToBM:s,medal:"Platinum",lineScore:0,track:[],worstIndex:-1}}function mS(n,e,t){const i=Tf(n,e,t);return{frame:i.frame,state:$f(i.a,i.b,n,e,i.lengthM,i.bearingRad)}}function _S(n){n.phase==="arriving"&&(n.phase="walking")}function gS(n,e){const t=n.mission;if(t.phase!=="walking")return;t.elapsedS+=e,t.tick++;const i={x:n.player.x,z:n.player.z},s=Rf(t.a,t.b,i);t.xtdSignedM=s.xtdSigned,t.xtdM=s.dist,t.alongM=s.along,t.distToBM=_a(t.b,i),t.maxDevM=Math.max(t.maxDevM,s.dist);const r=Math.hypot(i.x-t.lastX,i.z-t.lastZ);t.lastX=i.x,t.lastZ=i.z,t.devDistSumM2+=s.dist*r,t.pathLenM+=r,t.meanDevM=t.pathLenM>0?t.devDistSumM2/t.pathLenM:s.dist,t.medal=Ex(t.maxDevM),t.lineScore=xx(t.lengthM,t.meanDevM,t.medal);const o=t.distToBM<=g.FINISH_RADIUS_M;(o||t.elapsedS>=t.track.length*g.TRACK_SAMPLE_S)&&(t.track.push({t:t.elapsedS,x:i.x,z:i.z,xtd:s.xtdSigned}),(t.worstIndex<0||Math.abs(s.xtdSigned)>Math.abs(t.track[t.worstIndex].xtd))&&(t.worstIndex=t.track.length-1)),o&&(t.phase="finished")}function Or(n){return{medal:n.medal,maxDevM:n.maxDevM,avgDevM:n.meanDevM,lineScore:n.lineScore,elapsedS:n.elapsedS,lengthM:n.lengthM,finished:n.phase==="finished"}}function MS(n){n.track.length=0,Object.assign(n,$f(n.a,n.b,n.aLatLon,n.bLatLon,n.lengthM,n.bearingRad),{track:n.track})}function ES(n=g.SIM_DT,e=g.SIM_MAX_STEPS_PER_FRAME){let t=0,i=0;return{get tick(){return i},advance(s,r){t+=s;let o=0;for(;t>=n&&o<e;)r(n),t-=n,o++,i++;return t>=n&&(t=0),o},reset(){t=0,i=0}}}function Kf(n){return{fwd:n.fwd,strafe:n.strafe,yaw:n.yaw,pitch:n.pitch,sprint:n.sprint}}class ih{constructor(){Qe(this,"frames",[])}record(e){this.frames.push(Kf(e))}clear(){this.frames.length=0}toJSON(){return JSON.stringify(this.frames)}static fromJSON(e){const t=new ih;for(const i of JSON.parse(e))t.record(i);return t}}const vS=5669058,xS=14209242,SS=15912860,AS=14271648,RS=13088440,yS=12894934,TS=16766624,bS=10466520,wS=7036744,CS=10466520,NS=16052974,IS=9278364,DS=0,LS=`
#include <common>
// THESE FOUR logdepthbuf_* INCLUDES ARE RETAINED DELIBERATELY (block 3 S2 DoD 4 / gauntlet G6).
// D141 turned logarithmicDepthBuffer OFF by default, which makes them expand to nothing - three.js
// guards each chunk with an ifdef on USE_LOGDEPTHBUF. They are NOT dead code: ?logdepth=1 still
// works and is what probe:depth A/Bs against, and without these the sky dome would render with a
// different depth convention from everything else on that path, invalidating the comparison.
// NOTE: no backticks in this comment - it lives inside a JS template literal.
#include <logdepthbuf_pars_vertex>
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
}`,PS=`
#include <logdepthbuf_pars_fragment>
uniform vec3 uZenith; uniform vec3 uHorizon; uniform vec3 uSunGlow; uniform vec3 uSunDir;
uniform vec3 uCloudLit; uniform vec3 uCloudBase;
uniform vec4 uCloud; // coverage 0..1, seconds of SIM time, driftX, driftZ
uniform vec4 uFront; // upwind dirX, dirZ, d(overcast)/dm, d(fog mul)/dm
varying vec3 vDir;

// ─── Cloud (item 10 sub-task 2, D97) ─────────────────────────────────────────
// The deck is NOISE ON A HORIZONTAL PLANE at CLOUD_HEIGHT_M, sampled through the view direction —
// not a texture on the dome. That projection is the whole point: cells overhead are large and cells
// toward the horizon compress, so the sky reads as a CEILING with perspective rather than as
// wallpaper. It costs no geometry at all; the dome was already there.
//
// It travels along TERRAIN_WIND_FROM_DEG, the same bearing the sward combs to, so the sky and the
// grass agree about which way the weather is going. Time is SIM time, never wall-clock — the shot
// rig pauses the sim before it captures, so a paused frame is a still frame and every A/B diff in
// the project stays comparable.
float clHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float clVal(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(clHash(i), clHash(i + vec2(1.0, 0.0)), f.x), mix(clHash(i + vec2(0.0, 1.0)), clHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float clFbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int o = 0; o < 4; o++) { v += a * clVal(p); p = p * 2.03 + 17.3; a *= 0.5; }
  return v;
}

void main() {
  #include <logdepthbuf_fragment>
  vec3 dir = normalize(vDir);
  float h = clamp(dir.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uZenith, pow(h, ${g.SKY_GRADIENT_EXPONENT.toFixed(2)}));
  float glow = pow(max(dot(dir, uSunDir), 0.0), ${g.SKY_SUN_GLOW_EXPONENT.toFixed(1)});
  col = mix(col, uSunGlow, glow * (1.0 - h));
  {
    // Project onto the deck. Below CLOUD_HORIZON_FADE the projection runs to infinity, so it is
    // faded out there instead of smearing into a band along the skyline.
    float up = max(dir.y, 1e-4);
    vec2 g = (dir.xz / up) * ${g.CLOUD_HEIGHT_M.toFixed(1)}; // the deck point, GEOMETRIC
    vec2 p = g + uCloud.zw * uCloud.y;                             // …and again, scrolled, for the noise
    float n = clFbm(p / ${g.CLOUD_SCALE_M.toFixed(1)});
    // OVERCAST slides the THRESHOLD, not the opacity: a clear sky keeps only the densest tops and a
    // leaden one keeps almost everything. Fading opacity instead would give a uniform grey veil, which
    // is a filter over the sky rather than cloud in it.
    // THE FRONT (item 10 sub-task 4): the threshold is a FIELD, not a scalar. uCloud.x is the
    // coverage over the WALKER; away from them it slides by a gradient measured from the same rule on
    // the CPU, so the deck can be closed over the ridge the weather is coming from and open behind.
    // This is the piece you can actually SEE arriving, and it costs no geometry — the dome was there.
    // Clamped because a straight line extrapolated to a 25 km horizon is a bad model of a sinusoid;
    // saturating reads as "solid that way, clear the other", which is what a front looks like.
    // GEOMETRIC p, not the scrolled one: the front's position is geometry, the cloud texture scrolls.
    float o = clamp(uCloud.x + uFront.z * dot(g, uFront.xy), 0.0, 1.0);
    float t = mix(${g.CLOUD_COVER_HI.toFixed(3)}, ${g.CLOUD_COVER_LO.toFixed(3)}, o);
    float cov = smoothstep(t, t + ${g.CLOUD_EDGE.toFixed(3)}, n);
    cov *= smoothstep(0.0, ${g.CLOUD_HORIZON_FADE.toFixed(3)}, dir.y);
    // Lit where the deck faces the sun, shadowed away from it — a flat grey deck has no volume, and
    // the sun side is what says these are lumps of water and not a sheet of card.
    float lit = 0.5 + 0.5 * dot(normalize(vec3(dir.x, 0.0, dir.z)), normalize(vec3(uSunDir.x, 0.0, uSunDir.z)));
    col = mix(col, mix(uCloudBase, uCloudLit, lit * lit), cov);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function OS(n){n.renderer.toneMapping=Jn;const e=wa.degToRad(g.SUN_AZIMUTH_DEG),t=wa.degToRad(g.SUN_ELEVATION_DEG),i=new ue(Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),s=new Xe(vS),r=new Xe(xS),o=new Xe(SS),a=[{distM:g.FOG_BAND_1_M,color:new Xe(AS)},{distM:g.FOG_BAND_2_M,color:new Xe(RS)},{distM:g.FOG_BAND_3_M,color:new Xe(yS)},{distM:g.FAR_SHELL_OUTER_M,color:r}],l=new rt(g.FOG_START_M,g.FOG_HALF_DISTANCE_SEA_M,1/g.FOG_DENSITY_HALF_HEIGHT_M,g.FOG_DENSITY_FLOOR),c=g.TERRAIN_WIND_FROM_DEG*Math.PI/180,h=new rt(0,0,Math.sin(c)*g.CLOUD_DRIFT_MPS,-Math.cos(c)*g.CLOUD_DRIFT_MPS),u=new rt(Math.sin(c),-Math.cos(c),0,0),d=new Pt({vertexShader:LS,fragmentShader:PS,uniforms:{uZenith:{value:s},uHorizon:{value:r},uSunGlow:{value:o},uSunDir:{value:i},uCloud:{value:h},uFront:{value:u},uCloudLit:{value:new Xe(NS)},uCloudBase:{value:new Xe(IS)}},side:Yt,depthWrite:!1,fog:!1}),f=new vt(new Zc(g.SKY_DOME_RADIUS_M,32,16),d);f.frustumCulled=!1,f.renderOrder=10,n.scene.add(f);const _=new ru(bS,wS,g.HEMI_INTENSITY),M=new zE(TS,g.SUN_INTENSITY);M.position.copy(i).multiplyScalar(1e3);const m=new ru(CS,DS,g.SKYLIGHT_INTENSITY),p=wa.degToRad(g.SKYLIGHT_AXIS_TILT_DEG),S=Math.max(1e-6,Math.hypot(i.x,i.z));return m.position.set(i.x/S*Math.sin(p),Math.cos(p),i.z/S*Math.sin(p)),n.scene.add(_,M,m),{skyZenith:s,skyHorizon:r,sunGlow:o,fogBands:a,sunDir:i,fogK:l,cloud:h,front:u,lights:{sun:M,hemi:_,skylight:m},update:v=>{f.position.copy(v.camera.position),h.y=v.clock.simTick*g.SIM_DT},dispose:()=>{n.scene.remove(f,_,M,m),f.geometry.dispose(),d.dispose()}}}const US=7313983,FS=8361032,kS=9408338,BS=9014654;function GS(n){const e=Math.min(1,Math.max(0,(n-(g.TERRAIN_SLOPE_ROCK_DEG-g.TERRAIN_SLOPE_BLEND_DEG))/(2*g.TERRAIN_SLOPE_BLEND_DEG)));return e*e*(3-2*e)}function zS(n,e,t,i){const s=Bu((i-g.SNOW_ALT_LO_M)/(g.SNOW_ALT_HI_M-g.SNOW_ALT_LO_M)),r=1-Bu((n-g.SNOW_SLOPE_LO_DEG)/(g.SNOW_SLOPE_HI_DEG-g.SNOW_SLOPE_LO_DEG)),o=Math.hypot(e,t),a=o>1e-4?(e*HS+t*VS)/o:0;return Math.min(1,Math.max(0,s*r*(1-g.SNOW_ASPECT_MELT*Math.max(0,a))))}const Yf=g.SUN_AZIMUTH_DEG*Math.PI/180,HS=Math.sin(Yf),VS=-Math.cos(Yf);function Bu(n){const e=Math.min(1,Math.max(0,n));return e*e*(3-2*e)}const WS=15659767,XS=7303026,$S=10722402,KS=7234104,YS=5787960,qS=7369055,ZS=9933962,jS=5985347,JS=9145728,QS=5266479,eA=6122551,tA=7304057,nA="vec3(0.78, 0.80, 0.92)",iA="vec3(0.56, 0.56, 0.62)",sA="vec3(0.52, 0.54, 0.64)",rA="vec3(1.30, 1.06, 0.52)",oA="vec3(1.30, 0.95, 0.55)",aA="vec3(1.30, 1.00, 0.58)",lA="vec3(0.56, 0.70, 1.08)",cA="vec3(1.44, 1.30, 0.92)",nt=n=>n.toFixed(4),hA=`
uniform vec3 uFogC1, uFogC2, uFogC3, uHorizon, uSunGlow, uSunDir;
uniform vec4 uFogD;   // band distances: 1, 2, 3, end (= FAR_SHELL_OUTER_M)
uniform vec4 uFogK;   // start, sea-level half distance, 1/density half-height, density floor
uniform vec4 uFront;  // THE FRONT: upwind dirX, dirZ, d(overcast)/dm, d(fog-half multiplier)/dm
varying vec3 blWorldPos;
float blHash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float blNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(blHash(i), blHash(i + vec2(1.0, 0.0)), f.x), mix(blHash(i + vec2(0.0, 1.0)), blHash(i + vec2(1.0, 1.0)), f.x), f.y); }
vec3 blHorizon(vec3 dir) {
  return mix(uHorizon, uSunGlow, pow(max(dot(dir, uSunDir), 0.0), ${nt(g.SKY_SUN_GLOW_EXPONENT)}));
}
// blAirMass: mean relative air density (sea level = 1) over the ray, i.e. the AIR MASS the light crossed.
float blAirMass(float y0, float y1) {
  float t = 0.34657359 * (y1 - y0) * uFogK.z, t2 = t * t;
  float g = exp2(-0.5 * (y0 + y1) * uFogK.z) * (1.0 + t2 * (0.16666667 + t2 * (0.00833333 + t2 * 0.00019841)));
  return uFogK.w + (1.0 - uFogK.w) * g;
}
vec3 blFog(vec3 col) {
  vec3 rel = blWorldPos - cameraPosition;
  float d = length(rel);
  vec3 fc = mix(uFogC1, uFogC2, smoothstep(uFogD.x, uFogD.y, d));
  fc = mix(fc, uFogC3, smoothstep(uFogD.y, uFogD.z, d));
  fc = mix(fc, blHorizon(rel / max(d, 1e-3)), ${nt(g.FOG_HORIZON_BLEND_MAX)} * smoothstep(uFogD.z, uFogD.w, d));
  // THE FRONT (item 10 sub-task 4). The half-distance is a FIELD: it shortens toward the bearing the
  // weather is coming from, so the ridge the front is behind goes murky while the ground at your feet
  // does not. Without this the front lives only in the sky, and "weather over a ridge" is exactly the
  // read that needs the ridge to take it too.
  //
  // A MULTIPLIER on uFogK.y, and exactly 1.0 at the walker (rel = 0) by construction — so every value
  // this fog was ever measured at is the value it still reads, and a uniform sky (which includes sim
  // tick 0, where the front's gradients are 0) is bit-identical to before this existed.
  // blHalf, not half: half is a RESERVED WORD in GLSL ES.
  float blHalf = uFogK.y * clamp(1.0 + uFront.w * dot(rel.xz, uFront.xy), ${nt(g.WEATHER_FRONT_FOG_MIN)}, ${nt(g.WEATHER_FRONT_FOG_MAX)});
  float f = 1.0 - exp2(-max(d - uFogK.x, 0.0) * blAirMass(cameraPosition.y, blWorldPos.y) / blHalf);
  return mix(col, fc, f);
}`;function Ea(n){if(n.fogBands.length!==4)throw new Error("fogUniforms: expected 3 fog stops + the horizon");const[e,t,i,s]=n.fogBands;return{uFogC1:{value:e.color},uFogC2:{value:t.color},uFogC3:{value:i.color},uHorizon:{value:s.color},uSunGlow:{value:n.sunGlow},uSunDir:{value:n.sunDir},uFogD:{value:new rt(e.distM,t.distM,i.distM,s.distM)},uFogK:{value:n.fogK},uFront:{value:n.front}}}function va(n,e){Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 blWorldPos;`).replace("#include <project_vertex>",`#include <project_vertex>
blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+hA).replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = blFog(gl_FragColor.rgb);
#include <tonemapping_fragment>`)}const uA=`
uniform vec3 uColValley, uColUpland, uColHigh, uColSummit, uColRock, uColDry, uColHeath, uColPeat, uColBare, uColScree, uColSoil, uColGrit, uColTurfD, uColMoss, uColStone;
uniform vec3 uColSnow;
uniform vec4 uSnow; // amount, altLo, altHi, aspectMelt
uniform float uWet;
uniform vec4 uBands;   // upland start, high start, summit start, blend half-width (m)
uniform vec4 uSlope;   // rock deg, slope blend deg, lift m/deg, noise amplitude m
uniform vec2 uNoise;   // wavelength m, rock threshold wander deg
uniform vec4 uPatch;   // wavelength m, mix strength, fade distance m, scree lo deg
uniform vec4 uZone;    // cover-zone wavelength m, near mix strength, far distance m, far mix strength
uniform float uFarShade; // strength of the distance-restored sun term (TERRAIN_FAR_SHADE)
uniform vec3 uFleck;   // wavelength m, amplitude, fade distance m
uniform vec4 uGrit;    // gravel wavelength m, albedo amplitude, fade distance m, relief height m
uniform vec3 uSoil;    // soil-mottle wavelength m, strength on bare ground, strength on turf
uniform vec4 uCrag;    // ledge wavelength m, ledge amplitude, fade distance m, scree hi deg
uniform vec4 uExpo;    // exposure field: windward gain, procedural amplitude, wavelength m, palette mix
uniform vec3 uQuiet;   // strength (0..1 of the walking-scale layer's LUMINANCE difference from its base that is removed), fade distance m, chroma gain (>1 saturates, luminance-preserving)
uniform float uRootAo; // how far the ground beneath a full-density sward is darkened by it (TERRAIN_ROOT_AO)
uniform vec4 uRoot;    // ROOT ZONE: albedo strength, fade distance m, its share of uQuiet.x, relief height m
uniform float uHand;   // extra gain on the walking-scale contrast across the ground-cover handover band (TERRAIN_HANDOVER_GAIN)
uniform float uGrainStreak;   // TERRAIN_GRAIN_STREAK_W as a UNIFORM (D218/D219). It was interpolated into this
                              // string, so the three arms of its sweep needed a REBUILD each and an arm made by an
                              // uncommitted edit is not reproducible from a clean checkout — the exact defect the
                              // reliefcap lever was added to fix. Overridable by ?grainstreak= on a local host only.
uniform vec2 uWind;    // prevailing airflow — the horizontal direction a WINDWARD face looks toward (x = east, z = south)
varying vec3 blWorldNormal;
float blH = 0.0;   // relief height (m, along the surface normal): crag ledges + knolls + hummocks + tussock mounds + ground grain — written by blAlbedo, lit by blBump (blHash/blNoise live in FOG_PARS, shared with the water)
const mat2 blRot = mat2(0.7986, 0.6018, -0.6018, 0.7986); // 37°
// A threshold whose transition width tracks the SCREEN footprint of the field it cuts (fp = metres-per-pixel / wavelength):
// crisp where the feature is resolved, dissolving to flat as it approaches one pixel. This is the difference between turf and
// a wash — a FIXED-width smoothstep on a 0.24 m field is a soft tonal blob at every distance, which is exactly what the blind
// grade read as "directional motion-blur streaks" in the near ground (cycle 7 round 3). Edges, not amplitude, make ground.
float blEdge(float v, float t, float fp) { float w = clamp(fp * 1.1, 0.015, 0.32); return smoothstep(t - w, t + w, v); }
float blNoise2(vec2 p) { return blNoise(p) * 0.62 + blNoise(blRot * p * 2.3 + 11.7) * 0.38; }
// KEEP THE HUE, DROP THE VALUE. Scales a walking-scale layer so its luminance moves uQuiet of the way to the base it sits on.
// A pure multiply leaves its chroma RATIOS — hue and saturation — untouched, so the layer still says "moss / stone / peat /
// straw" while it stops saying "light / dark".
// Why it exists: three grade rounds each stacked another thresholded field on the last, and a threshold on a smooth noise field
// draws that field's LEVEL SETS — which is exactly how disruptive camouflage is designed. Six such layers overlapping between
// 0.09 m and 2.6 m produced the owner's "weird" and a blind grader's "blurred camouflage-patterned baize". The sourced fix from
// this style family (Firewatch, Sable, Season, The Witness — docs/research/painterly-ground-treatment.md) is not a finer noise
// but LOW-CONTRAST, HIGH-HUE-VARIANCE ground: the plane is a supporting actor, and the detail belongs to geometry (D55/D56).
vec3 blQuiet(vec3 c, vec3 ref, float k) {
  const vec3 L = vec3(0.2126, 0.7152, 0.0722);
  vec3 q = c * mix(1.0, dot(ref, L) / max(dot(c, L), 1e-4), k);
  // …and then SPEND the contrast budget the first step freed, on chroma. mix() past 1.0 extrapolates away from the grey of the
  // layer's own luminance, which is exactly luminance-preserving (dot(mix(vec3(l), q, s), L) == l for any s), so this buys hue
  // and saturation without buying back one unit of the value contrast that was reading as camouflage. Two halves of one idea:
  // the palette still has to SAY moss / stone / peat / straw once it has stopped shouting light / dark.
  return mix(vec3(dot(q, L)), q, uQuiet.z);
}
// world-space gradient (per metre, in the surface plane) of any per-fragment field from its screen derivatives — no tangents, no vertex data (Mikkelsen's perturbNormalArb, metre-true)
vec3 blGrad(float h) {
  vec3 n = normalize(blWorldNormal), dpx = dFdx(blWorldPos), dpy = dFdy(blWorldPos), r1 = cross(dpy, n), r2 = cross(n, dpx);
  float det = dot(dpx, r1); if (abs(det) < 1e-9) det = 1e-9;
  return (dFdx(h) * r1 + dFdy(h) * r2) / det;
}
// the lighting normal (view space) tilted by the relief field: tussocks and gravel grain get a lit side toward the sun and a dark far side, ledges read as steps (slope capped at 2.5)
vec3 blBump() { vec3 g = blGrad(blH); g *= min(1.0, 2.5 / max(length(g), 1e-6)); return normalize(mat3(viewMatrix) * normalize(normalize(blWorldNormal) - g)); }
vec3 blAlbedo() {
  vec3 n = normalize(blWorldNormal), view = blWorldPos - cameraPosition;
  float slopeDeg = degrees(acos(clamp(n.y, 0.0, 1.0))), dist = length(view);
  vec2 xz = blWorldPos.xz, dpx = dFdx(xz), dpy = dFdy(xz);
  // ground metres per pixel — a field of wavelength W is faded out once mpp/W nears 0.3 (no aliasing, no streaks). GEOMETRIC MEAN of the two
  // screen axes, not the max: on ground seen at a grazing angle the long axis is the depth direction and reports ~0.1 m/px at 5 m, which faded
  // every walking-scale octave out of the near field (cycle 7 sev-1 "blank olive surface"). The short axis is still resolved across screen x.
  float mA = length(dpx), mB = length(dpy), mppMax = max(max(mA, mB), 1e-5), mpp = sqrt(max(min(mA, mB), 1e-5) * mppMax);
  // THE CARPET'S OWN DENSITY, evaluated here. This is fall * edge from groundCover.ts, the exact function that
  // decides how many clumps stand at this distance: 1 inside GROUNDCOVER_FULL_M, (FULL/d)^GROUNDCOVER_FALLOFF_POW
  // past it, times the outer GROUNDCOVER_FADE_FRAC thinning. The material reads it so the two layers can hand ONE
  // budget over instead of each owning a fixed share — quiet, occluded ground where the sward is thick; the
  // material's own walking-scale contrast taken back as it thins. It is what closes the LOD ring the cycle-8
  // grade found ("the bladed grass ... stops along a visible curved line, beyond which the same continuous slope
  // carries on as a textureless plane"): a fade in the geometry alone cannot, because what steps at the ring is
  // surface CHARACTER, and only the surface can answer that.
  float carp = pow(${nt(g.GROUNDCOVER_FULL_M)} / max(dist, ${nt(g.GROUNDCOVER_FULL_M)}), ${nt(g.GROUNDCOVER_FALLOFF_POW)})
    * (1.0 - smoothstep(${nt(g.GROUNDCOVER_FAR_M*g.GROUNDCOVER_FADE_FRAC)}, ${nt(g.GROUNDCOVER_FAR_M)}, dist));
  // altitude bands, edges wandering (no contour terracing); steeper ground reads as if higher
  float wander = blNoise2(xz / uNoise.x) - 0.5;   // −0.5 .. 0.5
  float hEff = blWorldPos.y + wander * 2.0 * uSlope.w + slopeDeg * uSlope.z, w = uBands.w;
  vec3 col = mix(uColValley, uColUpland, smoothstep(uBands.x - w, uBands.x + w, hEff));
  col = mix(mix(col, uColHigh, smoothstep(uBands.y - w, uBands.y + w, hEff)), uColSummit, smoothstep(uBands.z - w, uBands.z + w, hEff));
  // cover patches: pale dry grass / heath-bracken (bare stony ground up on the summit) / peat-dark on gentle moor; weaker on ground seen at a grazing angle (foreshortened patches read as brush strokes)
  float summit = smoothstep(uBands.z - 120.0, uBands.z, hEff), facing = smoothstep(0.03, 0.25, abs(dot(n, view)) / dist);
  float pm = uPatch.y * (1.0 - smoothstep(uPatch.z * 0.4, uPatch.z, dist)) * mix(0.65, 1.0, facing);
  float m1 = blNoise2(xz / uPatch.x + 5.3), m2 = blNoise2(blRot * xz / (uPatch.x * 1.6) + 41.0);
  col = mix(col, uColDry, pm * smoothstep(0.56, 0.80, m1));
  col = mix(col, mix(uColHeath, uColBare, summit), pm * smoothstep(0.46, 0.22, m1));
  col = mix(col, uColPeat, pm * smoothstep(0.64, 0.90, m2) * (1.0 - smoothstep(8.0, 18.0, slopeDeg)) * (1.0 - summit));
  // cover ZONES — the same palette at a few hundred metres, on the opposite distance ramp to the patches: WEAK near, STRONG far.
  // Past uPatch.z the 30 m patches are gone, so a far ridge was one flat panel carrying only the (small) lambert swing —
  // blind grade sev-1 "far shell flatter than the ground it continues". A raycast probe puts that band at 5.7-7.2 km, where fog
  // replaces ~49 % of the pixel and so halves every albedo and shading difference; the far strength is the painterly compensation
  // for that (Firewatch), not physics. At uZone.x a zone is still ~25 px across there, so it zones a distant flank into bracken /
  // grass / stony ground instead of aliasing into speckle.
  float zm = mix(uZone.y, uZone.w, smoothstep(uZone.z * 0.25, uZone.z, dist));
  float z1 = blNoise2(xz / uZone.x + 63.1);
  col = mix(col, uColDry, zm * smoothstep(0.54, 0.76, z1));
  col = mix(col, mix(uColHeath, uColBare, summit), zm * smoothstep(0.46, 0.26, z1));
  // crag: dark ledge striations along the height contours with lit ledge tops, broken laterally by 18 m noise; a TERRAIN_CRAG_VARY_M field sets their amplitude (plain rock ↔ strongly
  // ledged) and picks the spacing (uCrag.x or 2.4×) face by face; gullies = a TERRAIN_GULLY_WAVE_M noise smeared down the fall line (4 taps), sparse dark streaks; cooler/darker the steeper
  float cm = 1.0 - smoothstep(uCrag.z * 0.4, uCrag.z, dist), rockDeg = slopeDeg + wander * uNoise.y;
  float rock = smoothstep(uSlope.x - uSlope.y, uSlope.x + uSlope.y, rockDeg), yy = blWorldPos.y / uCrag.x + wander * 5.0;
  vec2 vp = xz / ${nt(g.TERRAIN_CRAG_VARY_M)}, down = n.xz / max(length(n.xz), 1e-4), gp = xz / ${nt(g.TERRAIN_GULLY_WAVE_M)};
  float lA = 0.5 * (blNoise(vec2(xz.x / 18.0, yy)) + blNoise(vec2(xz.y / 18.0 + 7.7, yy + 3.3))), lB = blNoise(vec2(xz.x / 40.0 + 2.2, yy / 2.4));
  float ledge = mix(lA, lB, smoothstep(0.42, 0.58, blNoise(blRot * vp * 1.4 + 8.8))), la = cm * uCrag.y * smoothstep(0.28, 0.58, blNoise(vp + 3.7));
  float gully = (blNoise(gp) + blNoise(gp + down * 0.8) + blNoise(gp + down * 1.6) + blNoise(gp + down * 2.4)) * 0.25;
  vec3 crag = uColRock * mix(vec3(1.0), ${iA}, la * (1.0 - smoothstep(0.40, 0.52, ledge))) * (1.0 + 0.2 * la * smoothstep(0.60, 0.70, ledge));
  float ledgeH = cm * la * (0.5 - ledge) * (1.0 - smoothstep(0.1, 0.3, mpp / uCrag.x));   // -> blH below: the ink strokes become steps the sun can read
  crag *= mix(vec3(1.0), ${sA}, cm * ${nt(g.TERRAIN_GULLY_AMP)} * smoothstep(0.60, 0.70, gully) * (1.0 - smoothstep(0.1, 0.3, mpp / ${nt(g.TERRAIN_GULLY_WAVE_M)})));
  col = mix(col, crag * mix(vec3(1.0), ${nA}, smoothstep(uSlope.x - uSlope.y, uSlope.x + 18.0, slopeDeg)), rock);
  // scree / boulder fans over the band just under the crag: a TERRAIN_SCREE_WAVE_M noise smeared along the fall line (3 taps downhill), fullest where the face EASES downhill (n.y rising
  // along the fall line = the concave crag foot, not the convex shoulder above — crag band → scree fan → grass), fading out up into the steepest rock.
  //
  // ROADMAP ITEM 23, and it is a MEASUREMENT not a taste call. Both blind graders filed a "broad pale grey-mauve veil across ground that sits CLOSER than sharper terrain beside it,
  // reading as smeared paint rather than atmosphere" in every round since cycle 8, and the ablation that isolates it is this one line: poking uColScree magenta lights up exactly the
  // veiled ground, and turning the fan off restores the crag-to-bowl junction the finding says it wipes out. Three things were wrong, all of them coverage:
  //   * the EASE FLOOR, which was the whole of it. mix(0.1, 1.0, ease) gave a tenth of a full pale wash to planar ground that eases not at all, over a slope window (16-32° ± 10° of
  //     the wander field) that is most of a Lakeland fellside. Squaring it with no floor puts the fan at the crag foot, which is the only place the comment above ever claimed it was.
  //     Measured on S6's 300-800 m mid-ground: the term moved 40 % of pixels by > 2 sRGB and 12 % by > 8; after this it is 19 % and 3.7 %.
  //   * NO FOOTPRINT GATE. Every other octave in this function fades as mpp/W nears 0.3; this one drew at full strength out to TERRAIN_CRAG_FADE_M, i.e. where a lobe is a few px.
  //   * the THRESHOLD, promoted to TERRAIN_SCREE_COVER and DELIBERATELY LEFT WHERE IT WAS. fan is a 3-tap mean of value noise, so it is N(0.50, 0.13) and 0.32-0.56 straddles the whole
  //     distribution — badly placed by D52's rule, and worth stating. But with the floor gone it is no longer what makes the fan a blanket, and moving it to 0.46 was shot and rejected:
  //     it takes the coverage to 7.4 % / 0.9 %, which deletes a feature a round-3 grade asked for, and it does it by cutting a smooth wash into thresholded tongues — D58's own tell.
  // Fog was measured OUT, not argued out: at the ranges the veil lives at (360-700 m) the shader's own fog fraction is 0.013-0.021 and its spread AT MATCHED RANGE is ±0.0017, so
  // aerial perspective's whole luminance budget there is under half a byte, against a veil running to 28 (probe § M).
  vec2 fp = xz / ${nt(g.TERRAIN_SCREE_WAVE_M)}; float fan = (blNoise(fp) + blNoise(fp + down * 1.5) + blNoise(fp + down * 3.0)) / 3.0, ease = clamp(dot(blGrad(n.y).xz, down) * 400.0, 0.0, 1.0);
  col = mix(col, uColScree, cm * smoothstep(uPatch.w, uCrag.w, rockDeg) * (1.0 - smoothstep(uCrag.w + 2.0, uCrag.w + 10.0, rockDeg))
    * smoothstep(${nt(g.TERRAIN_SCREE_COVER)}, ${nt(g.TERRAIN_SCREE_COVER+.24)}, fan) * pow(ease, ${nt(g.TERRAIN_SCREE_FADE_POW)})
    * (1.0 - smoothstep(0.1, 0.3, mpp / ${nt(g.TERRAIN_SCREE_WAVE_M)})));
  // relief below the DEM's resolution, SHADING ONLY (blH -> blBump), faded by view distance and footprint: knolls (TERRAIN_KNOLL_*) + hummocks (TERRAIN_HUMMOCK_*) to TERRAIN_RELIEF_FADE_M.
  vec2 fq = xz / uFleck.x;
  float hk = blNoise2(blRot * xz / ${nt(g.TERRAIN_HUMMOCK_WAVE_M)} + 31.0);
  // THE HANDOVER, driven by carp. Measured on S1 at round 1: local contrast inside the carpet is 16.8 % of the
  // mean and beyond it 5.0 %, so what a walker sees at the ring is a CONTRAST step, not a density one. TERRAIN_QUIET
  // exists because the carpet owns the near field; this is the other end of the same trade.
  float hand = 1.0 + uHand * (1.0 - carp);
  float rf = 1.0 - smoothstep(${nt(g.TERRAIN_RELIEF_FADE_M*.5)}, ${nt(g.TERRAIN_RELIEF_FADE_M)}, dist);
  blH = rock * ${nt(g.TERRAIN_CRAG_LEDGE_BUMP)} * ledgeH + rf * (${nt(g.TERRAIN_KNOLL_M)} * (1.0 - smoothstep(0.1, 0.3, mpp / ${nt(g.TERRAIN_KNOLL_WAVE_M)})) * (blNoise2(xz / ${nt(g.TERRAIN_KNOLL_WAVE_M)} + 57.0) - 0.5)
    + hand * ${nt(g.TERRAIN_HUMMOCK_M)} * (1.0 - smoothstep(0.1, 0.3, mpp / ${nt(g.TERRAIN_HUMMOCK_WAVE_M)})) * (hk - 0.5));
  // WALKING SCALE (cycle 7 — the sev-1 "smooth blanket"). Two ground languages blended by bare-ness (high + steep ground is bare, the moor is turfed):
  //   turf — 0.8 m tussock mounds (blH) with a soft tint ramp, plus a 0.24 m tuft octave that varies in HUE (dry-straw tops, dark green base)
  //   bare — gravel GRIT: coarse + fine grain speckle in albedo over a shallow relief, on a soil/gravel mottle at TERRAIN_SOIL_WAVE_M
  // That mottle is the missing scale between the 0.8 m grain and the 30 m cover patches — without it a summit plateau is one flat tone at eye height.
  // The quiet is a NEAR-FIELD treatment and it has to fade, for the same reason the layers it damps have their own footprint
  // fades: the camouflage read is what a metres-wide blob does when it is a hundred pixels across, and the identical field at
  // 200 m is fine tonal variety that the mid-ground needs. Round 1 applied it at full strength everywhere and the 50-500 m band
  // came back as plain green domes — the "smooth blanket" tell, traded for the camouflage one. Ramp, do not switch.
  float qw = uQuiet.x * (1.0 - smoothstep(uQuiet.y * 0.35, uQuiet.y, dist));
  // BARE = high, or a rock face, or GROUND WHERE STONE CONCENTRATES. That third term is keyed to the same two
  // signals placement.ts's rockP reads — the ROCK_SLOPE_LO_DEG..ROCK_SLOPE_HI_DEG ramp and the crag-foot
  // concavity ease — so the bare apron under a boulder fan is the ground answering the dressing, not two
  // independent scatters agreeing by luck. Both cycle-8 graders wrote the same sentence about its absence:
  // rock "scattered at near-even density straight over unbroken grass with no crag above them, no bare-ground
  // apron and no fan concentration". The instanced bedding disc draws the apron under a stone the walker can
  // reach; this draws it BETWEEN the stones and out to where a stone is three pixels wide.
  float bare = clamp(smoothstep(uBands.z - 60.0, uBands.z + 140.0, hEff) + rock
    + ${nt(g.TERRAIN_APRON_MIX)} * smoothstep(${nt(g.ROCK_SLOPE_LO_DEG)}, ${nt(g.ROCK_SLOPE_HI_DEG)}, rockDeg) * mix(0.35, 1.0, ease), 0.0, 1.0);
  float ground = 1.0 - 0.8 * rock;   // a crag face keeps its own surface: the soil/gravel layer only dresses walkable ground and scree
  float fm = hand * (1.0 - smoothstep(uFleck.z * 0.5, uFleck.z, dist)) * (1.0 - smoothstep(0.1, 0.3, mpp / uFleck.x));
  vec2 fw = fq + 0.13 * (blNoise2(fq * 1.9 + 44.0) - 0.5);   // a SMALL warp, only enough to stop the level sets being smooth ovals
  float f1 = blNoise2(fw + 77.7), t = smoothstep(0.25, 0.75, f1);   // SMOOTH again: the footprint-sharp mesa cut this field into hard-edged amoebas, each with an emboss where its own relief step met its own albedo step — the "rubber tiles" read
  float sm = blNoise2(blRot * xz / uSoil.x + 19.3), smf = 1.0 - smoothstep(0.1, 0.3, mpp / uSoil.x);
  float mo = blNoise2(xz / (uSoil.x * 2.7) + 88.1);   // a second, coarser field: where moss holds between the stones
  // EXPOSURE / SHELTER, 0 = sheltered and collecting .. 1 = wind-scoured. This is WITHIN-CLASS variation, and it is the answer to the
  // blind grade's "one flat green (tan variant)" on S5: the 10 m cover raster reads Helvellyn's summit as ~100 % class-30 grass and the
  // altitude and slope there are single-valued, so there is nothing for an altitude/slope/cover ramp to respond to — yet a real fell top
  // is scoured stone, thin moss, gravel and peaty hollows. The REAL anchor is DEM aspect: dot(n.xz, uWind) is slope x aspect toward the
  // prevailing SW airflow — the windward gradient, which is the physical driver of scour — and it is continuous across the mesh (shared
  // vertex normals), unlike a screen-derivative curvature, which facets on 11 m triangles. Where the DEM genuinely has nothing to say
  // (a plateau IS near-constant slope and aspect) a two-octave procedural field carries the rest. It never moves a cover BOUNDARY; it
  // only says how bare or mossy the ground INSIDE one class is. Inventing a class edge the raster contradicts would break D5/D11 (cf. D48).
  // NOTE the gain: blNoise2 is a weighted sum of two value noises, so (blNoise2 - 0.5) has sd ≈ 0.13, not 0.5. Rounds 3–5 fed it
  // in at unit gain and the field came out as N(0.63, 0.11) — a unimodal blob sitting BETWEEN every palette ramp, so neither the
  // stone end nor the moss end was ever reached and the plateau stayed one tone however the colours were re-cut. Measure the
  // distribution of a noise field before you place thresholds on it.
  vec2 ep = xz / uExpo.z;
  float en = (blNoise2(ep + 133.7) - 0.5) + 0.80 * (blNoise2(blRot * ep * 3.6 + 9.4) - 0.5);
  float expo = clamp(0.5 + uExpo.x * dot(n.xz, uWind) + uExpo.y * en, 0.0, 1.0);
  // The split is deliberately near-ISO-LUMINANT (stone grey vs moss olive vs peat): the sun already owns luminance, and at
  // SUN_AZIMUTH_DEG 200 vs a 225° wind the two are 0.91 correlated, so a brightness split here would only restate the lambert.
  vec3 bareCol = mix(uColSoil, uColGrit, smoothstep(0.40, 0.76, sm));                                             // damp earth ↔ weathered gravel at 2.6 m
  bareCol = mix(bareCol, uColStone, uExpo.w * smoothstep(0.60, 0.92, expo));                                      // the scoured end: stone pavement, frost-shattered
  bareCol = mix(bareCol, uColMoss, smoothstep(0.64, 0.18, expo) * smoothstep(0.08, 0.48, mo));                     // the sheltered end: a moss + fescue MAT, which is most of a real fell top
  bareCol = mix(bareCol, uColPeat, uExpo.w * 0.9 * smoothstep(0.30, 0.02, expo) * smoothstep(0.40, 0.70, mo));    // hollows: peat that has not blown away
  // BARE ground takes only uRoot.z of the quiet. D58 damped the walking-scale layer because six thresholded
  // VALUE fields at 0.09-2.6 m were drawing their own level sets on GREEN ground, and its licence for cutting
  // that hard was that the instanced sward now owns the band. On genuinely bare ground there is no sward to
  // own it and the palette is soil / grit / stone / peat — a hue set whose whole job is to say the summit is
  // not a lawn. Quieted at full strength it cannot: the cycle-8 grade's "one flat green ... no bare grit,
  // heather, moss or bedrock differentiation anywhere between the boulders" on S5 is that, measured.
  float qb = qw * mix(1.0, uRoot.z, bare);
  col = mix(col, blQuiet(bareCol, col, qb), ground * bare * uSoil.y * smf);
  float stony = mix(0.20, 1.0, smoothstep(0.26, 0.76, expo));   // how much of the fine surface is loose gravel rather than a living mat
  vec3 fineLit = uColGrit, fineDark = mix(uColTurfD, uColSoil, stony);   // the lit chips stay STONE at both ends (stone shows through a fell-top mat everywhere); it is their density and their matrix that follow the exposure
  vec3 turfCol = mix(uColHeath, uColDry, smoothstep(0.38, 0.68, sm));
  turfCol = mix(turfCol, uColDry, uExpo.w * 0.7 * smoothstep(0.56, 0.90, expo));      // scoured turf bleaches to straw…
  turfCol = mix(turfCol, uColTurfD, uExpo.w * 0.8 * smoothstep(0.52, 0.14, expo));    // …and the sheltered side stays deep green
  col = mix(col, blQuiet(turfCol, col, qw), (1.0 - bare) * min(1.0, uSoil.z * hand) * smf);
  col *= 1.0 + fm * uFleck.y * (2.0 * t - 1.0) * mix(${oA}, ${rA}, t) * mix(1.0, 0.45, bare); // the 0.8 m tussock scale also breaks up bare ground (free — the field is already sampled)
  // SUBTRACTED here: the 0.24 m tuft crown/gap decals and the 0.09 m blade decals. Both were footprint-sharp blEdge cuts mixing
  // straight to COL_DRY / COL_TURFD — hard-edged puzzle-piece shapes at exactly the wavelength a walker reads — and the 0.09 m
  // pair duplicated the grit fine octave's own wavelength, which is D52's "two fields at one wavelength" warning coming true in
  // albedo instead of relief. The sub-metre band now belongs to the instanced ground-cover geometry, which is where D55/D56 say
  // walking-scale structure has to come from. What is left at 0.8 m is RELIEF the sun models: directional and light-consistent,
  // so it reads as ground rather than as pattern.
  blH += mix(1.0, 0.12, bare) * ${nt(g.TERRAIN_FLECK_BUMP)} * fm * (f1 - 0.5);
  // Two fixes here, and they are the same fix twice: the 0.09 m octave is now the ONLY fully-resolved scale left in the walking-
  // scale block, and it was being switched off in precisely the places that need it.
  //  (a) the FINE (0.09 m) octave runs on TURF as well as bare ground, through its own gate gt, which is conditioned on neither
  //      bareness nor exposure — every surface has a grain at 9 cm. Its CHIPS stay gated to bare ground (a pale stone chip does
  //      not belong in grass) but the grain does not: without it turf is a smooth gradient, and the frame reads as a soft-focus
  //      photograph with pin-sharp props standing on it — the style-incoherence finding in three consecutive grade rounds. At
  //      9 cm this cannot become the camouflage it is replacing: that read is what a METRES-wide thresholded blob does. Measured
  //      first (D52): routing it through gm as round 4 did left it at 0.15 x 0.18 = under 3 % and it was invisible in the frame.
  //  (b) its footprint gate reads mpp (the geometric mean of the two screen axes) instead of mppMax (the long one). On ground at
  //      a grazing angle the long axis IS the depth direction, so mppMax reported ~0.1 m/px at 3 m and faded the fine octave out
  //      of the entire near field — the identical bug this shader's own mpp comment records having fixed for every other octave,
  //      still live in this one. "Most of our ground is seen at a grazing angle" is the research's warning about exactly this.
  float gm = bare * mix(0.45, 1.0, ground) * mix(0.30, 1.0, stony) * (1.0 - smoothstep(uGrit.z * 0.5, uGrit.z, dist)) * (1.0 - smoothstep(0.1, 0.3, mpp / uGrit.x));
  float gf = 1.0 - smoothstep(0.1, 0.3, mpp / (uGrit.x * 0.3));
  vec2 gw = xz / uGrit.x; gw += 0.35 * (blNoise2(gw * 2.3 + 4.4) - 0.5);   // domain warp: un-warped value noise thresholds into smooth kidney blobs ("pancake/worm" in the ledger)
  float g1 = blNoise(gw + 13.7), g2 = blNoise(blRot * xz / (uGrit.x * 0.3) + 61.3);
  float g3 = blNoise(xz / (uGrit.x * 0.3) + 137.9);   // the SAME 9 cm lattice, decorrelated: grit chips must not ring the peat openings the way two thresholds on one field always do
  float gt = mix(0.45, 1.0, ground) * (1.0 - smoothstep(uGrit.z * 0.5, uGrit.z, dist)) * (1.0 - smoothstep(0.1, 0.3, mpp / uGrit.x));
  // The 3.0 on the fine octave is MEASURED, not chosen (D52 rule, and this is the third time it has bitten in this shader): a
  // single blNoise is smoothed value noise whose (n - 0.5) has sd ~ 0.15, not 0.5, so the gain of 1.2 this shipped with put the
  // grain at 0.15 x 1.2 x 0.15 = 2.7 % of albedo. A high-frequency probe of the near ground read 2.99 of 255 against a 113 mean,
  // which is 2.6 % — the arithmetic and the frame agreeing that the layer was there and invisible. 3.0 puts it near 6.8 %, which
  // is a grain a walker can see at 2-5 m without it ever becoming a shape: at 9 cm there is no such thing as a camouflage blob.
  col *= 1.0 + uGrit.y * (gm * (g1 - 0.5) * 0.8 + 3.0 * gt * gf * (g2 - 0.5));
  // Chips survive ONLY at the fine (0.09 m) octave and only on genuinely bare ground: a grain that small is an object at 2-5 m and
  // reads as grit. The coarse 0.3 m chip mix is gone — a thresholded 0.3 m blob is a pancake, and it was one of the amoebas. Both
  // ends go through blQuiet, so a chip is a HUE step against its matrix carrying a quarter of its old value step.
  col = mix(col, blQuiet(fineLit, col, qb), bare * gm * gf * 0.55 * smoothstep(0.56, 0.66, g2));
  col = mix(col, blQuiet(fineDark, col, qb), bare * gm * gf * 0.45 * smoothstep(0.44, 0.34, g2));
  // THE ROOT ZONE — the ground a walker actually sees BETWEEN the blades of the instanced cover layer. D59 flagged
  // this as its own residual; the cycle-8 blind grade found it from the near side: "between the grass spikes the
  // ground is a flat featureless pale-green plane with no soil, grit, moss or micro-relief, so the blades read as a
  // sparse card layer stuck into a smooth surface rather than turf growing out of ground."
  //
  // This is NOT D58 undone. D58 subtracted six overlapping VALUE fields at 0.09-2.6 m that were being THRESHOLDED,
  // and a threshold on a smooth metres-wide noise field draws its level sets, which is how camouflage is designed.
  // Everything here lives at 0.09 m and inside uRoot.y: at 1-3 m the ground is ~1 cm/px, so a lobe of this field is
  // four or five pixels — grain, and there is no such thing as a camouflage blob that size. Round 1 of this pass
  // proved the point the wrong way round by driving the opening off the 0.30 m octave instead: the frame came back
  // as soft 15-20 px amoebas, D58's own "pancake / worm" tell, reproduced exactly. The 0.30 m field survives here
  // only as a SMOOTH broad multiplier (where the mat is worn thin), never as a level set.
  float rootD = uRoot.x * (1.0 - bare) * ground * (1.0 - smoothstep(uRoot.y * 0.4, uRoot.y, dist)) * gf * (1.0 - 0.35 * smoothstep(0.36, 0.66, g1));
  // COVERAGE IS THE WHOLE CALIBRATION, and a magenta/cyan ablation is what set it. Round 3 ran the openings at
  // smoothstep(0.52, 0.30) and the chips at smoothstep(0.60, 0.70) on ONE field: the ablation showed 35 % of the
  // ground as peat and 25 % as grit, tiling the frame and leaving the turf as thin ridges between them — a soil
  // texture, not soil showing THROUGH turf, and the two thresholds on one field ringed each other. A fell sward
  // shows earth and stone in the minority; these are cut back into the tails and split across two decorrelated
  // taps of the same 9 cm lattice.
  col = mix(col, blQuiet(uColSoil, col, qw * uRoot.z), rootD * smoothstep(0.50, 0.26, g2));          // peat / damp earth where the mat has worn through
  col = mix(col, blQuiet(uColGrit, col, qw * uRoot.z), rootD * 0.9 * smoothstep(0.62, 0.76, g3));    // …and the grit lying in it
  blH += gm * uGrit.w * ((g1 - 0.5) + 0.5 * gf * (g2 - 0.5));
  // …and the SAME 9 cm grain as relief on turf. This is the half of the root zone that cannot read as pattern:
  // a normal perturbation is directional and light-consistent, so it says "ground" under any palette — which is
  // exactly why D58 kept TERRAIN_FLECK_BUMP while it cut the albedo layers around it.
  blH += (1.0 - bare) * ground * (1.0 - smoothstep(uRoot.y * 0.4, uRoot.y, dist)) * uRoot.w * (g2 - 0.5);
  // AMBIENT OCCLUSION FROM THE SWARD. What makes a blade read as GROWING OUT of the ground rather than stuck into
  // it is not the blade, it is the ground beside it going dark — the same lesson the bedding shadow learned for
  // rock (cycle 7 round 2 darkened the stone and the finding survived; darkening the TURF closed it). A sward at
  // GROUNDCOVER_DENSITY_M2 occludes most of the sky from the soil under it, and this renderer has no shadow map,
  // so it is stated here. It rides carp, so it arrives and leaves exactly with the geometry that casts it and
  // can never draw an edge of its own.
  col *= mix(1.0, uRootAo, carp * (1.0 - bare) * ground);

  // The metre-scale grain, a soft low-opacity BRUSHSTROKE instead of a seventh isotropic mottle: the tone runs downhill the way
  // drainage, grazing lines and vegetation on a fellside actually run. Direction is the one thing an isotropic field can never
  // give, and "isotropic, with no directionality" was half of what made the old surface read as camouflage rather than as ground.
  // It is faded back to the plain isotropic frame on near-level ground, where a fall line does not exist (n.xz -> 0, so its
  // direction is arbitrary and would swirl).
  //
  // The direction is carried by TAPS OFFSET ALONG THE FALL LINE — the construction the gullies and the scree fan above already
  // use — and no longer by a rotated, 4:1-stretched sampling frame. That frame projected the ABSOLUTE world position onto a
  // per-fragment basis, so it was anchored at the world origin and d(sample)/d(aspect) was |xz|: at the ~500 m Red Tarn sits from
  // that origin one degree of aspect slid the field a whole wavelength, and a basin sweeps aspect through a full turn, so the
  // grain was swept through ~350 of them and drew dense nested contours around the water. That is the cycle-8 blind grade's
  // "concentric arc rings ... bullseye in the grass around the water", measured: flattening the albedo removed it and removing
  // blBump did not, and forcing aniso to 0 removed it frame-wide on S3 and S6 alike. A SYMMETRIC tap pair is sensitive only to
  // the offset itself — each outer tap traces a circle of TERRAIN_GRAIN_STREAK_W wavelengths over a full turn (6 against 350),
  // and the centre tap not at all.
  float aniso = smoothstep(2.0, 9.0, slopeDeg);
  vec2 bq = xz / ${nt(g.TERRAIN_GRAIN_WAVE_M)}, streak = down * (aniso * uGrainStreak);
  // 0.9326 = 0.6 x 1.5544, and the 1.5544 is MEASURED, not chosen (D52's rule): averaging three taps one wavelength apart drops
  // this field's sd from 0.2147 to 0.1381, so re-using the shipped 0.6 would have landed the grain 36 % quieter than the frame
  // it replaces — a fix that quietly re-opens the "smooth blanket" finding it is not supposed to touch.
  float fine = ((blNoise(bq - streak) + blNoise(bq) + blNoise(bq + streak)) / 3.0 - 0.5) * 0.9326
    + (blNoise(blRot * xz / ${nt(g.TERRAIN_GRAIN_WAVE_M*.37)} + 3.1) - 0.5) * 0.4 * (1.0 - smoothstep(0.1, 0.3, mpp / ${nt(g.TERRAIN_GRAIN_WAVE_M*.37)}));
  // distant SHADING, restored — cool where the ground turns from the sun, warm where it turns into it. At the 6.4 km the S6 far
  // band sits at, fog replaces ~49 % of the pixel, so the far shell's own lambert modelling (N·L 0.20-0.60 over that band by
  // raycast probe, on normals differenced off the same WorldQuery as the ground under the feet) reached the frame as ~3 of 255
  // and the ridge read as a paper cut-out (blind grade sev-1). This re-states the SAME true sun term as albedo contrast + hue on
  // the zones' ramp: contrast compensation on the real normal, never invented landform, and identically zero on the near ground.
  col *= mix(vec3(1.0), mix(${lA}, ${cA}, smoothstep(${nt(g.TERRAIN_FAR_SHADE_LO)}, ${nt(g.TERRAIN_FAR_SHADE_HI)}, clamp(dot(n, uSunDir), 0.0, 1.0))), uFarShade * smoothstep(uZone.z * 0.25, uZone.z, dist));
  // GRAIN_TINT makes the brushstroke a warm/cool axis instead of a light/dark one: a positive stroke goes straw-warm, a negative
  // one goes green-cool, and the luminance swing is about half what the same amplitude used to buy. Hue variance, not value.
  col *= 1.0 + wander * ${nt(g.TERRAIN_BAND_GRAIN)} + fine * ${nt(g.TERRAIN_FINE_GRAIN)} * ${aA};
  // Jimenez's interleaved gradient noise at the 8-bit quantisation level (Call of Duty: Advanced Warfare; Frost.kiwi). Once the
  // fills are this quiet the ramps between them are wide enough to posterise, and this is the one-line sub-LSB fix for that.
  // It is invisible as texture, and it must be the LAST thing that touches the albedo.
  // WET ROCK (item 10 sub-task 3, D98). The reference names "wet rock: dark blue-slate" as the COMMON
  // case for the Lakes, so this is a named target and not a taste call. Water darkens the red end
  // hardest, which is why it goes blue as well as dark rather than simply down.
  //
  // It is weighted by the SAME grass-to-rock ramp rockFractionAt uses on the CPU, so the pixels that
  // get wet are exactly the ones the ground cover already refuses to grow on (item 37). Turf does not
  // darken with it: a wet sward reads about as it did, and a wet crag does not.
  //
  // …and it goes BEFORE the snow, because snow lies ON wet rock, not under it.
  if (uWet > 0.0) {
    float wRock = smoothstep(${nt(g.TERRAIN_SLOPE_ROCK_DEG-g.TERRAIN_SLOPE_BLEND_DEG)}, ${nt(g.TERRAIN_SLOPE_ROCK_DEG+g.TERRAIN_SLOPE_BLEND_DEG)}, slopeDeg);
    float w = uWet * wRock;
    col *= 1.0 - ${nt(g.WEATHER_WET_DARKEN)} * w;
    col.b *= 1.0 + ${nt(g.WEATHER_WET_BLUE)} * w;
  }
  // SNOW — a LAYER over the finished ground, never a repaint of it. Season may not touch the geology
  // (check 47 asserts the seven rock and soil colours are bit-identical across all four), so snow
  // cannot be a palette swap; it has to sit on top, which is also what it physically is. The rule is
  // the GPU half of the pair whose CPU half is snowFractionAt() above — altitude, slope, aspect —
  // and the wander term breaks the sheet so a drift has an edge rather than a hard contour line.
  if (uSnow.x > 0.0) {
    float snAlt = smoothstep(uSnow.y, uSnow.z, blWorldPos.y);
    float snLie = 1.0 - smoothstep(${nt(g.SNOW_SLOPE_LO_DEG)}, ${nt(g.SNOW_SLOPE_HI_DEG)}, slopeDeg);
    vec2 snH = n.xz;
    float snL = length(snH);
    float snFace = snL > 1e-4 ? dot(snH / snL, vec2(${nt(Math.sin(g.SUN_AZIMUTH_DEG*Math.PI/180))}, ${nt(-Math.cos(g.SUN_AZIMUTH_DEG*Math.PI/180))})) : 0.0;
    float sn = clamp(snAlt * snLie * (1.0 - uSnow.w * max(0.0, snFace)), 0.0, 1.0) * uSnow.x;
    col = mix(col, uColSnow * (0.95 + 0.05 * wander), smoothstep(0.02, 0.55, sn));
  }
  // Jimenez's interleaved gradient noise at the 8-bit quantisation level (Call of Duty: Advanced Warfare; Frost.kiwi). Once the
  // fills are this quiet the ramps between them are wide enough to posterise, and this is the one-line sub-LSB fix for that.
  // It is invisible as texture, and it must be the LAST thing that touches the albedo.
  col += (1.0 / 255.0) * fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - (0.5 / 255.0);
  return col;
}`,kt=n=>({value:new Xe(n)}),Gu=g.TERRAIN_WIND_FROM_DEG*Math.PI/180;function dA(){const n=g.TERRAIN_QUIET;try{if(!["localhost","127.0.0.1","::1",""].includes(location.hostname))return n;const e=new URLSearchParams(location.search).get("quiet");if(e===null)return n;const t=Number(e);if(!Number.isFinite(t)||t<0||t>1)throw new Error(`?quiet=${e} is not a finite number in [0, 1]`);return t}catch(e){if(e instanceof Error&&e.message.startsWith("?quiet="))throw e;return n}}function fA(){const n=g.TERRAIN_GRAIN_STREAK_W;try{if(!["localhost","127.0.0.1","::1",""].includes(location.hostname))return n;const e=new URLSearchParams(location.search).get("grainstreak");if(e===null)return n;const t=Number(e);if(!Number.isFinite(t)||t<0)throw new Error(`?grainstreak=${e} is not a finite number >= 0`);return t}catch(e){if(e instanceof Error&&e.message.startsWith("?grainstreak="))throw e;return n}}function pA(n){const e={...Ea(n),uColValley:kt(US),uColUpland:kt(FS),uColHigh:kt(kS),uColSummit:kt(BS),uColRock:kt(XS),uColDry:kt($S),uColHeath:kt(KS),uColPeat:kt(YS),uColBare:kt(qS),uColScree:kt(ZS),uColSoil:kt(jS),uColGrit:kt(JS),uColTurfD:kt(QS),uColMoss:kt(eA),uColStone:kt(tA),uColSnow:kt(WS),uSnow:{value:new rt(0,g.SNOW_ALT_LO_M,g.SNOW_ALT_HI_M,g.SNOW_ASPECT_MELT)},uWet:{value:0},uBands:{value:new rt(g.TERRAIN_BAND_UPLAND_M,g.TERRAIN_BAND_HIGH_M,g.TERRAIN_BAND_SUMMIT_M,g.TERRAIN_BAND_BLEND_M)},uSlope:{value:new rt(g.TERRAIN_SLOPE_ROCK_DEG,g.TERRAIN_SLOPE_BLEND_DEG,g.TERRAIN_SLOPE_LIFT_M_PER_DEG,g.TERRAIN_BAND_NOISE_M)},uNoise:{value:new et(g.TERRAIN_BAND_NOISE_WAVE_M,g.TERRAIN_ROCK_NOISE_DEG)},uPatch:{value:new rt(g.TERRAIN_PATCH_WAVE_M,g.TERRAIN_PATCH_MIX,g.TERRAIN_PATCH_FADE_M,g.TERRAIN_SCREE_LO_DEG)},uZone:{value:new rt(g.TERRAIN_ZONE_WAVE_M,g.TERRAIN_ZONE_MIX,g.TERRAIN_ZONE_FAR_M,g.TERRAIN_ZONE_MIX_FAR)},uFarShade:{value:g.TERRAIN_FAR_SHADE},uFleck:{value:new ue(g.TERRAIN_FLECK_WAVE_M,g.TERRAIN_FLECK_AMP,g.TERRAIN_FLECK_FADE_M)},uGrit:{value:new rt(g.TERRAIN_GRIT_WAVE_M,g.TERRAIN_GRIT_AMP,g.TERRAIN_GRIT_FADE_M,g.TERRAIN_GRIT_BUMP)},uSoil:{value:new ue(g.TERRAIN_SOIL_WAVE_M,g.TERRAIN_SOIL_MIX_BARE,g.TERRAIN_SOIL_MIX_TURF)},uCrag:{value:new rt(g.TERRAIN_CRAG_LEDGE_M,g.TERRAIN_CRAG_LEDGE_AMP,g.TERRAIN_CRAG_FADE_M,g.TERRAIN_SCREE_HI_DEG)},uQuiet:{value:new ue(dA(),g.TERRAIN_QUIET_FADE_M,g.TERRAIN_QUIET_SAT)},uRoot:{value:new rt(g.TERRAIN_ROOT_MIX,g.TERRAIN_ROOT_FADE_M,g.TERRAIN_ROOT_QUIET,g.TERRAIN_ROOT_BUMP)},uHand:{value:g.TERRAIN_HANDOVER_GAIN},uGrainStreak:{value:fA()},uRootAo:{value:g.TERRAIN_ROOT_AO},uExpo:{value:new rt(g.TERRAIN_EXPO_WIND,g.TERRAIN_EXPO_NOISE,g.TERRAIN_EXPO_WAVE_M,g.TERRAIN_EXPO_MIX)},uWind:{value:new et(Math.sin(Gu),-Math.cos(Gu))}},t=new jn({color:16777215,fog:!1,flatShading:!1});return t.userData.uniforms=e,t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 blWorldNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
blWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
`+uA).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = blAlbedo();`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = blBump();`),va(i,e)},t}const mA=3823728,_A=7242352,gA=6911072,MA=5134957,EA="vec3(0.80, 0.83, 0.90)",Ui=80;function qf(n,e){const t=(n-1)*(e-1)*6,i=n*e>65535?new Uint32Array(t):new Uint16Array(t);let s=0;for(let r=0;r<e-1;r++)for(let o=0;o<n-1;o++){const a=r*n+o,l=a+1,c=a+n,h=c+1;i[s++]=a,i[s++]=c,i[s++]=l,i[s++]=c,i[s++]=h,i[s++]=l}return i}function vA(n,e,t,i){const s=g.WATER_SHORE_GRAD_EPS_M,r=g.WATER_SHORE_ISO,o=Math.sqrt(g.WATER_SHELF_MIN_M*g.WATER_SHELF_MAX_M);if(i<=0)return-Ui/o;if(i>=1)return Ui/o;const a=(n.water.insidenessAt(e+s,t)-n.water.insidenessAt(e-s,t))/(2*s),l=(n.water.insidenessAt(e,t+s)-n.water.insidenessAt(e,t-s))/(2*s),c=Math.hypot(a,l),h=i>=r;if(c<1e-6)return(h?Ui:-Ui)/o;const u=a/c,d=l/c,f=h?-1:1,_=R=>n.water.insidenessAt(e+f*R*u,t+f*R*d)>=r;let M=0,m=0;for(let R=s;R<=Ui;R*=1.6){if(_(R)!==h){m=R;break}M=R}if(m===0)return(h?Ui:-Ui)/o;for(let R=0;R<6;R++){const A=(M+m)/2;_(A)===h?M=A:m=A}const p=(h?1:-1)*(M+m)/2,S=e-p*u,v=t-p*d;let x=0;for(const R of[.25,.6,1]){const A=R*g.WATER_SHELF_PROBE_M;x+=n.slopeDegAt(S-A*u,v-A*d)/3}const L=g.WATER_SHELF_DEPTH_M/Math.tan(Math.max(x,.5)*(Math.PI/180));return p/Math.max(g.WATER_SHELF_MIN_M,Math.min(g.WATER_SHELF_MAX_M,L))}function xA(n,e,t){const i=g.WATER_PLANE_MARGIN_M,s=n.bbox.minX-i,r=n.bbox.minZ-i,o=n.bbox.maxX+i-s,a=n.bbox.maxZ+i-r,l=Math.max(g.WATER_PLANE_STEP_M,Math.sqrt(o*a/g.WATER_PLANE_MAX_VERTS)),c=Math.ceil(o/l)+1,h=Math.ceil(a/l)+1,u=o/(c-1),d=a/(h-1),f=n.surfaceY+g.WATER_PLANE_LIFT_M,_=new Float32Array(c*h*3),M=new Float32Array(c*h*4);for(let x=0;x<h;x++)for(let L=0;L<c;L++){const R=s+L*u,A=r+x*d,w=x*c+L;_[w*3]=R,_[w*3+1]=f,_[w*3+2]=A;const y=t.water.insidenessAt(R,A);M[w*4]=y,M[w*4+1]=f-t.heightAt(R,A),M[w*4+2]=vA(t,R,A,y),M[w*4+3]=t.water.distToShoreAt(R,A)}const m=new xt;m.setAttribute("position",new ot(_,3)),m.setAttribute("blShore",new ot(M,4)),m.setIndex(new ot(qf(c,h),1)),m.computeBoundingSphere();const p={...Ea(e),uWaterDeep:{value:new Xe(mA)},uWaterShallow:{value:new Xe(_A)},uWaterWet:{value:new Xe(gA)},uWaterFar:{value:new Xe(MA)}},S=new fa({color:16777215,fog:!1,alphaToCoverage:!0});S.userData.uniforms=p,S.onBeforeCompile=x=>{x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 blShore;
varying vec4 blShoreV;`).replace("#include <project_vertex>",`#include <project_vertex>
blShoreV = blShore;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uWaterDeep, uWaterShallow, uWaterWet, uWaterFar;
varying vec4 blShoreV;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  // the shoreline: inside the mask's iso (one pixel soft) AND above the ground — the coverage fading in over the first 40 % of WATER_CONTACT_M of depth (alpha → MSAA coverage; nothing drawn outside)
  vec2 w = fwidth(blShoreV.xy);
  vec2 edge = vec2(${g.WATER_SHORE_ISO.toFixed(2)}, ${g.WATER_SHORE_DRY_M.toFixed(3)});
  vec2 cut = smoothstep(edge - w, edge + max(w, vec2(0.0, ${(g.WATER_CONTACT_M*.4).toFixed(3)})), blShoreV.xy);
  float shore = cut.x * cut.y;
  if (shore <= 0.0) discard;
  diffuseColor.a = shore;
  vec3 rel = blWorldPos - cameraPosition;
  float viewDist = length(rel);
  vec3 dir = rel / max(viewDist, 1e-3);
  // depth tint: metres OUT from the shoreline, not metres DOWN. The shelf — whose width is set
  // by the slope of the ground running into the water, so blShoreV.z is already in shelf-widths —
  // carries WATER_SHELF_SHARE of the shallow → deep travel; the open water carries the rest over
  // WATER_OPEN_FADE_M of true distance-to-land, so the interior keeps grading instead of stepping
  // to one flat blue. Then the wet-shore tone at the waterline.
  float shelfT = smoothstep(0.0, 1.0, max(blShoreV.z, 0.0));
  float openT = smoothstep(0.0, 1.0, blShoreV.w / ${g.WATER_OPEN_FADE_M.toFixed(1)});
  vec3 body = mix(uWaterShallow, uWaterDeep, ${g.WATER_SHELF_SHARE.toFixed(2)} * shelfT + ${(1-g.WATER_SHELF_SHARE).toFixed(2)} * openT);
  // the wet-stone margin: dark bed through clear water over the first WATER_WET_FRAC of the shelf
  // (so it is metres wide on a gentle shore and centimetres at a crag foot) AND over the last
  // WATER_CONTACT_M of depth, whichever is thinner.
  float wet = min(smoothstep(0.0, ${g.WATER_CONTACT_M.toFixed(2)}, blShoreV.y),
                  smoothstep(0.0, ${g.WATER_WET_FRAC.toFixed(2)}, max(blShoreV.z, 0.0)));
  body = mix(uWaterWet, body, wet);
  // reflection only at grazing angles: darkened sky at moderate angles, the fellside/haze tone as rays flatten toward the far shore
  float fres = pow(1.0 - clamp(-dir.y, 0.0, 1.0), ${g.WATER_FRESNEL_EXPONENT.toFixed(1)});
  vec3 refl = mix(blHorizon(vec3(dir.x, -dir.y, dir.z)) * ${EA}, uWaterFar, fres);
  diffuseColor.rgb = mix(body, refl, fres * ${g.WATER_REFLECT_MAX.toFixed(2)});
}`),va(x,p)};const v=new vt(m,S);return v.name=`water-${n.id}`,v}function SA(n,e,t,i,s){for(let r=0;r+i<=t-1;r+=i){const o=s(r,t)*3,a=s(r+i,t)*3;for(let l=1;l<i;l++){const c=l/i,h=s(r+l,t)*3;n[h+1]=n[o+1]*(1-c)+n[a+1]*c;const u=e[o]*(1-c)+e[a]*c,d=e[o+1]*(1-c)+e[a+1]*c,f=e[o+2]*(1-c)+e[a+2]*c,_=Math.hypot(u,d,f)||1;e[h]=u/_,e[h+1]=d/_,e[h+2]=f/_}}}const _t=g.CHUNK_SIZE_M,AA=g.CHUNK_GRID_STEP_M,pl=8,$n=(n,e)=>`${n},${e}`,Ai=g.CHUNK_LOD_RING_MULTS,Ks=g.CHUNK_LOD_RING_STARTS;if(Ai.length!==Ks.length)throw new Error("CHUNK_LOD_RING_MULTS and _STARTS must be the same length");for(let n=1;n<Ai.length;n++){const e=Ai[n];if(e<=Ai[n-1]||e&e-1||g.CHUNK_SIZE_M/g.CHUNK_GRID_STEP_M%e!==0)throw new Error(`CHUNK_LOD_RING_MULTS[${n}] = ${e} must be an increasing power of two dividing ${g.CHUNK_SIZE_M/g.CHUNK_GRID_STEP_M}`);if(Ks[n]<=Ks[n-1])throw new Error(`CHUNK_LOD_RING_STARTS must increase (index ${n})`)}const pr=Ai.map((n,e)=>{const t=AA*n,i=_t/t+1,s=i+2;return{level:e,step:t,v:i,g:s,rows:s+i,indices:qf(i,i)}}),zu=[(n,e)=>n*e+(e-1),(n,e)=>n*e,(n,e)=>(e-1)*e+n,n=>n];function RA(n,e){const{scene:t}=n,i=n.world.query,s=pA(e),r=new Map,o={sig:0,membership:0,rebuildAll:0,dispose:0};let a=[],l=g.CHUNK_LOAD_RADIUS,c=g.CHUNK_LOD_FINE_RINGS;const h=Number(new URLSearchParams(location.search).get("prefetchlead")??g.CHUNK_PREFETCH_LEAD_S);let u=0,d=0,f=NaN,_=0,M=0;const m=(U,F)=>{const k=performance.now();if(Number.isFinite(f)){const $=Math.max(.001,(k-M)/1e3);if(Math.hypot(U-f,F-_)>200)u=0,d=0;else{const te=Math.min(1,$);u+=te*((U-f)/$-u),d+=te*((F-_)/$-d)}}f=U,_=F,M=k};let p=null;const S=[],v=XE(i,s);v.rebuild(n.player.x,n.player.z),t.add(v.mesh);const x=n.world.water.bodies.map(U=>xA(U,e,i));for(const U of x)t.add(U);const L=(U,F,k,$,te)=>{const ce=te+(F-1)*U.step;for(let I=0;I<U.g;I++)k[F*U.g+I]=i.heightAt($+(I-1)*U.step,ce,U.step)},R=(U,F,k,$,te)=>{for(let ce=0;ce<U.v;ce++){const I=(F*U.v+ce)*3,b=(F+1)*U.g+(ce+1);$[I]=ce*U.step,$[I+1]=k[b],$[I+2]=F*U.step;const q=(k[b+1]-k[b-1])/(2*U.step),fe=(k[b+U.g]-k[b-U.g])/(2*U.step),ve=Math.hypot(q,1,fe);te[I]=-q/ve,te[I+1]=1/ve,te[I+2]=-fe/ve}},A=(U,F)=>{const k=U.v,$=new Uint32Array((k-1)*(k-1)*6);let te=0;for(let ce=0;ce<k-1;ce++)for(let I=0;I<k-1;I++){const b=ce*k+I,q=b+1,fe=b+k,ve=fe+1,xe=F[b*3+1],Oe=F[q*3+1],Ie=F[fe*3+1],Le=F[ve*3+1];Math.abs(xe-Le)<=Math.abs(Oe-Ie)?($[te++]=b,$[te++]=fe,$[te++]=ve,$[te++]=b,$[te++]=ve,$[te++]=q):($[te++]=b,$[te++]=fe,$[te++]=q,$[te++]=q,$[te++]=fe,$[te++]=ve)}return $},w=(U,F,k,$,te)=>{for(let b=0;b<4;b++)te.ratio[b]>1&&SA(k,$,te.lod.v,te.ratio[b],zu[b]);const ce=new xt;ce.setAttribute("position",new ot(k,3)),ce.setAttribute("normal",new ot($,3)),ce.setIndex(new ot(A(te.lod,k),1)),ce.computeBoundingSphere();const I=new vt(ce,s);return I.position.set(U*_t,0,F*_t),{cx:U,cz:F,mesh:I,lod:te.lod,sig:te.sig,ratio:te.ratio}},y=new Float64Array(pr[0].g*pr[0].g);function E(U,F){const k=Ae(U,F),$=k.lod,te=new Float32Array($.v*$.v*3),ce=new Float32Array($.v*$.v*3);for(let I=0;I<$.g;I++)L($,I,y,U*_t,F*_t);for(let I=0;I<$.v;I++)R($,I,y,te,ce);return w(U,F,te,ce,k)}function T(U,F){const k=Ae(U,F),$=k.lod,te=new Float64Array($.g*$.g),ce=new Float32Array($.v*$.v*3),I=new Float32Array($.v*$.v*3);let b=0;const q=fe=>{for(let ve=0;ve<fe&&b<$.rows;ve++,b++)b<$.g?L($,b,te,U*_t,F*_t):R($,b-$.g,te,ce,I);return b>=$.rows};return{cx:U,cz:F,sig:k.sig,step:q,done:()=>b>=$.rows,finish:()=>w(U,F,ce,I,k)}}let P=null,z=null;const O=Number(new URLSearchParams(location.search).get("mergelevel")??2),B=new Map;let V=!1;function ee(){V=!1;for(const[,F]of B)t.remove(F),F.geometry.dispose();B.clear();const U=new Map;for(const F of r.values()){if(F.lod.level<O){F.mesh.visible=!0;continue}F.mesh.visible=!1;const k=`${F.lod.level}:${F.cx>=((p==null?void 0:p.cx)??0)?1:0}${F.cz>=((p==null?void 0:p.cz)??0)?1:0}`;(U.get(k)??U.set(k,[]).get(k)).push(F)}for(const[F,k]of U){let $=0,te=0;for(const Oe of k)$+=Oe.mesh.geometry.attributes.position.count,te+=Oe.mesh.geometry.getIndex().count;const ce=new Float32Array($*3),I=new Float32Array($*3),b=$>65535?new Uint32Array(te):new Uint16Array(te);let q=0,fe=0;for(const Oe of k){const Ie=Oe.mesh.geometry.attributes.position,Le=Oe.mesh.geometry.attributes.normal,Be=Oe.mesh.geometry.getIndex(),ne=Oe.cx*_t,_e=Oe.cz*_t;for(let Te=0;Te<Ie.count;Te++)ce[(q+Te)*3]=Ie.getX(Te)+ne,ce[(q+Te)*3+1]=Ie.getY(Te),ce[(q+Te)*3+2]=Ie.getZ(Te)+_e,I[(q+Te)*3]=Le.getX(Te),I[(q+Te)*3+1]=Le.getY(Te),I[(q+Te)*3+2]=Le.getZ(Te);for(let Te=0;Te<Be.count;Te++)b[fe+Te]=q+Be.getX(Te);q+=Ie.count,fe+=Be.count}const ve=new xt;ve.setAttribute("position",new ot(ce,3)),ve.setAttribute("normal",new ot(I,3)),ve.setIndex(new ot(b,1)),ve.computeBoundingSphere();const xe=new vt(ve,s);xe.name=`chunk-batch-${F}`,B.set(F,xe),t.add(xe)}}const Y=[],j=U=>{r.set($n(U.cx,U.cz),U),t.add(U.mesh),Y.push({t:performance.now(),x:(U.cx+.5)*_t,z:(U.cz+.5)*_t,level:U.lod.level}),Y.length>1024&&Y.splice(0,Y.length-1024),U.lod.level>=O&&(U.mesh.visible=!1,V=!0)};function J(U,F){t.remove(F.mesh),F.mesh.geometry.dispose(),r.delete(U),F.lod.level>=O&&(V=!0)}const he=(U,F)=>{if(!p)return 0;const k=Math.max(Math.abs(U-p.cx),Math.abs(F-p.cz)),$=c-Ks[1];let te=0;for(let ce=1;ce<Ks.length;ce++)k>=Ks[ce]+$&&(te=ce);return te};function Ae(U,F){const k=he(U,F),$=[he(U+1,F),he(U-1,F),he(U,F+1),he(U,F-1)],te=$.map(ce=>ce>k?Ai[ce]/Ai[k]:1);return{lod:pr[k],sig:k*16+$[0]*8+$[1]*4+$[2]*2+$[3],ratio:te}}function pe(){if(!p)return;const U=new Set,F=[],k=u*h/_t,$=d*h/_t;for(let te=-l;te<=l;te++)for(let ce=-l;ce<=l;ce++){const I=p.cx+ce,b=p.cz+te,q=$n(I,b);U.add(q);const fe=r.get(q);fe&&fe.sig!==Ae(I,b).sig&&(o.sig++,J(q,fe)),r.has(q)||F.push({cx:I,cz:b,d:(ce-k)*(ce-k)+(te-$)*(te-$)})}for(const[te,ce]of r)U.has(te)||(o.membership++,J(te,ce));P&&(!U.has($n(P.cx,P.cz))||P.sig!==Ae(P.cx,P.cz).sig)&&(P=null),F.sort((te,ce)=>te.d-ce.d),a=F}function re(U,F){if(!p)return!0;const k=g.CHUNK_ANCHOR_MARGIN_M;return U<p.cx*_t-k||U>(p.cx+1)*_t+k||F<p.cz*_t-k||F>(p.cz+1)*_t+k}const X=()=>p!==null&&a.length===0&&P===null&&z===null,se=()=>X()?Promise.resolve():new Promise(U=>S.push(U));function W(U){l=U,pe()}async function Q(U){W(U),await se();const F=[],k=($,te,ce)=>$.mesh.geometry.attributes.position.getY(ce*$.lod.v+te);for(const $ of r.values()){const te=r.get($n($.cx+1,$.cz)),ce=r.get($n($.cx,$.cz+1));for(let I=0;I<=pl;I++){if(te){const b=Math.max($.lod.step,te.lod.step),q=Math.round(I*(_t/b)/pl)*b,fe=($.cx+1)*_t,ve=$.cz*_t+q;F.push({x:fe,z:ve,ya:k($,$.lod.v-1,q/$.lod.step),yb:k(te,0,q/te.lod.step),q:i.heightAt(fe,ve),sa:$.lod.step,sb:te.lod.step,qa:i.heightAt(fe,ve,$.lod.step),qb:i.heightAt(fe,ve,te.lod.step)})}if(ce){const b=Math.max($.lod.step,ce.lod.step),q=Math.round(I*(_t/b)/pl)*b,fe=$.cx*_t+q,ve=($.cz+1)*_t;F.push({x:fe,z:ve,ya:k($,q/$.lod.step,$.lod.v-1),yb:k(ce,q/ce.lod.step,0),q:i.heightAt(fe,ve),sa:$.lod.step,sb:ce.lod.step,qa:i.heightAt(fe,ve,$.lod.step),qb:i.heightAt(fe,ve,ce.lod.step)})}}}return F}function oe(){for(const[F,k]of[...r])o.rebuildAll++,J(F,k);P=null,z=null,pe();const U=v.centre();if(v.rebuild(U.x,U.z),p){const F=$n(p.cx,p.cz);a=a.filter(k=>$n(k.cx,k.cz)!==F),j(E(p.cx,p.cz))}}function ie(){const U=pr.map(()=>0);let F=0,k=0,$=0,te=0;const ce=pr[0].v-1;for(const I of r.values()){U[I.lod.level]++,F+=(I.lod.v-1)*(I.lod.v-1)*2,k+=ce*ce*2;const b=I.mesh.geometry.attributes.position;for(let q=0;q<4;q++){const fe=I.ratio[q];if(fe<=1)continue;$++;const ve=zu[q],xe=I.lod.v;for(let Oe=0;Oe+fe<=xe-1;Oe+=fe){const Ie=b.getY(ve(Oe,xe)),Le=b.getY(ve(Oe+fe,xe));for(let Be=1;Be<fe;Be++){const ne=Be/fe;te=Math.max(te,Math.abs(b.getY(ve(Oe+Be,xe))-Math.fround(Ie*(1-ne)+Le*ne)))}}}}return{fineRings:c,coarseMult:Ai[1],levels:U,triangles:F,uniformTriangles:k,stitchedEdges:$,maxChordDevM:te}}function de(U){const F=U.player;if(re(F.x,F.z)){p={cx:Math.floor(F.x/_t),cz:Math.floor(F.z/_t)},pe();const $=$n(p.cx,p.cz);r.has($)||(a=a.filter(te=>$n(te.cx,te.cz)!==$),j(E(p.cx,p.cz)))}const k=v.centre();!z&&Math.hypot(F.x-k.x,F.z-k.z)>g.FAR_SHELL_RECENTER_M&&(z=v.beginRebuild(F.x,F.z))}let D=0;function le(U){const F=performance.now(),k=F+g.CHUNK_BUILD_BUDGET_MS,$=g.SLICED_JOB_ROWS_PER_STEP;let te=0;for(;U||performance.now()<k;){if(!P&&(U||te<g.CHUNK_BUILDS_PER_FRAME)&&a.length>0){const ce=a.shift();P=T(ce.cx,ce.cz),te++}if(P)P.step($)&&(j(P.finish()),P=null);else if(z)z.step($)&&(z=null);else break}if(D=performance.now()-F,X()&&V&&ee(),X()&&S.length>0)for(const ce of S.splice(0))ce()}return{update(U){m(U.player.x,U.player.z),de(U),le(!1)},drainNow(U){de(U),le(!0)},edgeSamples:Q,setLoadRadius:W,setLodFineRings(U){c=U,oe()},setFarShellVisible(U){v.mesh.visible=U},drained:X,rebuildAll:oe,lodStats:ie,recentLoads:()=>Y.slice(),material:()=>s,stats:()=>({loadRadius:l,chunksLoaded:r.size,unloadCounts:{...o},chunksQueued:a.length+(P?1:0),lastPumpMs:D,farShellVisible:v.mesh.visible,farShellOuterM:g.FAR_SHELL_OUTER_M,waterPlanes:x.length}),dispose(){for(const[,U]of B)t.remove(U),U.geometry.dispose();B.clear();for(const[U,F]of r)o.dispose++,J(U,F);a=[],P=null,z=null;for(const U of S.splice(0))U();t.remove(v.mesh,...x),v.dispose();for(const U of x)U.geometry.dispose(),U.material.dispose();s.dispose()}}}const Nn={hueJitter:!0,latticeWarp:!0,quiet:!0,grainStreak:!0};function Ar(n){return n=(n^n>>>16)>>>0,n=Math.imul(n,2246822507),n=(n^n>>>13)>>>0,n=Math.imul(n,3266489909),(n^n>>>16)>>>0}function yA(n,e){let t=(n^2166136261)>>>0;for(let i=0;i<e.length;i++)t=Math.imul(t^e.charCodeAt(i),16777619)>>>0;return Ar(t)}function Ji(n){const e=Math.trunc(n)>>>0;let t=Ar(e^2654435769),i=Ar(t^2246822507),s=Ar(i^3266489909),r=Ar(s^668265263);const o=()=>{let a=t+i|0;return t=i^i>>>9,i=s+(s<<3)|0,s=s<<21|s>>>11,r=r+1|0,a=a+r|0,s=s+a|0,(a>>>0)/4294967296};for(let a=0;a<12;a++)o();return{seed:e,next:o,int:a=>Math.floor(o()*a),range:(a,l)=>a+o()*(l-a),fork:a=>Ji(yA(e,a))}}const bs=10,ui=g.DRESSING_CELL_M,ws=g.ROCK_COBBLE_CANDIDATES,Fi=g.DRESSING_CANDIDATES_PER_CELL,wr=Math.PI*2,Cr=new ue(0,1,0),TA=new Set([60,70,80,90,95]),Zf=new Set([40,50,80,90,95]),Ei=n=>n<0?0:n>1?1:n,Kn=n=>n-Math.floor(n),Ys=(n,e,t)=>{const i=Ei((t-n)/(e-n||1e-6));return i*i*(3-2*i)},xo=(n,e)=>{let t=Math.imul(n^2654435769,2246822507)^Math.imul(e^668265263,3266489909);return t=Math.imul(t^t>>>15,739982445),((t^t>>>16)>>>0)/4294967296},Hu=(n,e)=>{const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r);return(xo(t,i)*(1-o)+xo(t+1,i)*o)*(1-a)+(xo(t,i+1)*(1-o)+xo(t+1,i+1)*o)*a};function jf(n,e){const t=g.DRESSING_CLUMP_WAVE_M,i=.66*Hu(n/t,e/t)+.34*Hu(n/(t*.41)+13.7,e/(t*.41)-7.1);return Math.pow(i,g.DRESSING_CLUMP_POW)}function bA(n,e,t,i,s){if(Zf.has(n))return 0;let r=n===60?e>=g.SCREE_MIN_SLOPE_DEG?g.ROCK_P_BARE_STEEP:g.ROCK_P_BARE:n===70?g.ROCK_P_SNOW:n===10?g.ROCK_P_FOREST:g.ROCK_P_GRASS;return r*=1+g.ROCK_SLOPE_GAIN*Ys(g.ROCK_SLOPE_LO_DEG,g.ROCK_SLOPE_HI_DEG,e),r*=1+g.ROCK_FAN_GAIN*s,r*=1+g.ROCK_ALT_GAIN*Ys(g.TERRAIN_BAND_HIGH_M,g.TERRAIN_BAND_SUMMIT_M+60,t),r*=g.DRESSING_CLUMP_MIN+(g.DRESSING_CLUMP_MAX-g.DRESSING_CLUMP_MIN)*i,Math.min(.97,r)}function wA(n,e,t,i){const s=n===20;if(TA.has(n)||e>=g.DRESSING_MAX_SLOPE_DEG||n!==10&&!s)return{p:0,shrub:s};let r=s?g.TREE_P_CLASS20:g.TREE_P_CLASS10;return r*=1-(1-g.TREE_TREELINE_FLOOR)*Ys(g.TREE_TREELINE_LO_M,g.TREE_TREELINE_HI_M,t),r*=g.TREE_CLUMP_MIN+(g.TREE_CLUMP_MAX-g.TREE_CLUMP_MIN)*i,{p:Math.min(.97,r),shrub:s}}const ml=new ue,Vs=new ue,Vu=new ue,aa=new Bn,Jf=new Bn,la=new ue,ca=new ue;function Wu(n,e,t,i,s,r,o,a,l,c,h,u,d=1){const f=r/n.height,_=(c-.5)*g.DRESSING_STRETCH;ml.set(s.x,s.y,s.z);const M=i-d*n.footR*f*Math.tan(Math.acos(Ei(s.y)));Vs.copy(Cr).lerp(ml,h).normalize(),Vu.set(Math.cos(a*wr),0,Math.sin(a*wr)),Vs.applyAxisAngle(Vu,(l-.5)*2*g.DRESSING_TILT_MAX_DEG*(Math.PI/180)).normalize(),aa.setFromUnitVectors(Cr,Vs).multiply(Jf.setFromAxisAngle(Cr,o*wr));const m=Math.sqrt(Math.max(0,1-Math.pow(Ei(Vs.dot(ml)),2)));return la.set(e,M-d*n.footR*f*m-u*r-n.baseY*f,t),ca.set(f*(1+_),f,f*(1-_)),new at().compose(la,aa,ca)}function CA(n,e,t,i,s,r,o){const a=(o-.5)*g.DRESSING_STRETCH;return Vs.set(i.x,i.y,i.z).normalize(),aa.setFromUnitVectors(Cr,Vs).multiply(Jf.setFromAxisAngle(Cr,r*wr)),la.set(n,t,e),ca.set(s*(1+a),s,s*(1-a)),new at().compose(la,aa,ca)}function Qf(n,e,t,i){const s=`${e},${t}`,r=n.rockRng.fork(s),o=n.plantRng.fork(s),a=new Float64Array((ws+2*Fi)*bs);for(let w=0;w<a.length;w++)a[w]=w<(ws+Fi)*bs?r.next():o.next();const l=e*ui+ui*.5,c=t*ui+ui*.5,h=n.cover.classAt(l,c),u={cls:h,slopeDeg:-1,rocks:0,plants:0},d=!Zf.has(h);if(!d&&!(h===10||h===20)||n.query.waterDepthAt(l,c)>0)return u;const _=n.query.normalAt(l,c),M=n.query.seatNormalAt(l,c),m=n.query.heightAt(l,c);u.slopeDeg=Math.acos(Ei(_.y))*180/Math.PI;const p=-_.x/Math.max(_.y,1e-4),S=-_.z/Math.max(_.y,1e-4),v=jf(l,c);let x=0;if(d){const w=Math.hypot(p,S);if(w>1e-4){const y=g.ROCK_FAN_PROBE_M/w,E=n.query.normalAt(l+p*y,c+S*y);x=Ys(g.ROCK_FAN_LO_DEG,g.ROCK_FAN_HI_DEG,Math.acos(Ei(E.y))*180/Math.PI)}}const L=d?bA(h,u.slopeDeg,m,v,x):0,R=wA(h,u.slopeDeg,m,v),A=[{rock:!0,plane:!0,base:0,k:ws,p:d?L*g.ROCK_COBBLE_P_MUL:0,list:n.cobbles,far2:n.cobblesFar,nearM:g.ROCK_COBBLE_NEAR_M,lo:g.ROCK_COBBLE_MIN_M,hi:g.ROCK_COBBLE_MAX_M,skew:1.7,far:g.ROCK_COBBLE_FAR_M,minFrac:g.ROCK_COBBLE_REACH_FRAC,ref:g.ROCK_COBBLE_REF_SIZE_M,fade:g.DRESSING_FADE_FRAC,lod:[]},{rock:!0,plane:!1,base:ws*bs,k:Fi,p:L,list:n.rocks,far2:n.rocksFar,nearM:g.ROCK_BOX_NEAR_M,lo:g.ROCK_SIZE_MIN_M,hi:g.ROCK_SIZE_MAX_M,skew:g.ROCK_SIZE_SKEW,far:g.DRESSING_FAR_M,minFrac:g.DRESSING_MIN_REACH_FRAC,ref:g.DRESSING_REF_SIZE_M,fade:g.DRESSING_FADE_FRAC,lod:[]},R.shrub?{rock:!1,plane:!1,base:(ws+Fi)*bs,k:Fi,p:R.p,list:n.shrubs,far2:[],nearM:0,lo:g.SHRUB_SIZE_MIN_M,hi:g.SHRUB_SIZE_MAX_M,skew:1.4,far:g.TREE_FAR_M,minFrac:g.DRESSING_MIN_REACH_FRAC,ref:g.DRESSING_REF_SIZE_M,fade:1,lod:[]}:{rock:!1,plane:!1,base:(ws+Fi)*bs,k:Fi,p:R.p,list:n.trees,far2:[],nearM:0,lo:g.TREE_SIZE_MIN_M,hi:g.TREE_SIZE_MAX_M,skew:1.6,far:g.TREE_FAR_M,minFrac:g.DRESSING_MIN_REACH_FRAC,ref:g.DRESSING_REF_SIZE_M,fade:1,lod:n.treesFar}];for(const w of A)if(!(w.p<=0||w.list.length===0))for(let y=0;y<w.k;y++){const E=w.base+y*bs,T=a[E]*ui-ui*.5,P=a[E+1]*ui-ui*.5,z=l+T,O=c+P,B=w.lo+(w.hi-w.lo)*Math.pow(a[E+4],w.skew),V=Math.hypot(z-n.ax,O-n.az),ee=w.rock?B>=g.ROCK_POLY_MIN_M&&V<=g.ROCK_POLY_FAR_M&&n.big.length?n.big:V>w.nearM&&w.far2.length?w.far2:w.list:V>g.TREE_NEAR_M&&w.lod.length?w.lod:w.list,Y=ee[Math.min(ee.length-1,Math.floor(a[E+2]*ee.length))],j=n.kit[Y],J=B*j.sizeMul,he=w.far*Ei(Math.max(w.minFrac,J/w.ref)),Ae=w.p*(1-Ys(he*w.fade,he,V));if(V>he||a[E+8]>=Ae)continue;const pe=w.p*(1-Ys(he*w.fade,he,V+g.DRESSING_FADE_IN_M)),re=Ae-pe,X=re>1e-6?Ei((Ae-a[E+8])/re):1;if(!w.plane&&n.query.waterDepthAt(z,O)>0)continue;const se=n.query.heightAt(z,O),W=w.plane?M:n.query.seatNormalAt(z,O),Q=Wu(j,z,O,se,W,J,a[E+5],a[E+6],w.rock?a[E+7]:.5,a[E+3],w.rock?g.ROCK_NORMAL_ALIGN:g.TREE_NORMAL_ALIGN,w.rock?g.ROCK_BURY_FRAC:g.TREE_BURY_FRAC);if(i.push({entry:Y,m:Q,tint:1+g.DRESSING_TINT_JITTER*(a[E+9]-.5),fade:X}),w.rock?u.rocks++:u.plants++,w.rock&&V<=g.ROCK_CONTACT_FAR_M&&n.contacts.length>0){const oe=J/j.height,ie=Ei(W.y),de=J*(1-g.ROCK_BURY_FRAC)-j.footR*oe*(Math.sqrt(Math.max(0,1-ie*ie))/Math.max(ie,1e-4));if(de>=g.ROCK_CONTACT_PROUD_MIN_M){const D=n.contacts[Math.floor(Kn(a[E+2]*3.9)*n.contacts.length)%n.contacts.length],le=j.wideR*oe*g.ROCK_CONTACT_RADIUS_MUL+de*g.ROCK_CONTACT_PROUD_MUL;i.push({entry:D,m:CA(z,O,se,W,le,a[E+5],a[E+3]),tint:1+g.DRESSING_TINT_JITTER*(a[E+9]-.5),fade:X})}}if(w.rock&&!w.plane&&J>=g.ROCK_SKIRT_MIN_M&&V<=g.ROCK_SKIRT_FAR_M&&n.cobbles.length>0){const oe=V>g.ROCK_COBBLE_NEAR_M&&n.cobblesFar.length?n.cobblesFar:n.cobbles,ie=j.footR*(J/j.height);for(let de=0;de<g.ROCK_SKIRT_N;de++){const D=(a[E+5]+.37*de+.11)*wr,le=ie*(1+g.ROCK_SKIRT_SPREAD*Kn(a[E+6]*7.3+de*.61)),U=z+Math.cos(D)*le,F=O+Math.sin(D)*le;if(n.query.waterDepthAt(U,F)>0)continue;const k=J*(g.ROCK_SKIRT_SIZE_MIN+(g.ROCK_SKIRT_SIZE_MAX-g.ROCK_SKIRT_SIZE_MIN)*Kn(a[E+7]*3.1+de*.53)),$=oe[Math.floor(Kn(a[E+2]*5.7+de*.29)*oe.length)%oe.length],te=n.query.heightAt(U,F);i.push({entry:$,m:Wu(n.kit[$],U,F,te,M,k,Kn(a[E+5]*11.3+de*.71),Kn(a[E+6]*2.7+de*.19),Kn(a[E+7]*5.1+de*.43),Kn(a[E+3]*3.7+de*.37),g.ROCK_NORMAL_ALIGN,g.ROCK_BURY_FRAC),tint:1+g.DRESSING_TINT_JITTER*(Kn(a[E+9]*4.3+de*.27)-.5),fade:X}),u.rocks++}}}return u}const $i=Math.PI*2,_l=new ue(0,1,0),Ho=n=>n<0?0:n>1?1:n,vi=(n,e,t)=>{const i=Ho((t-n)/(e-n||1e-6));return i*i*(3-2*i)},An=n=>n-Math.floor(n),zi=(n,e,t,i,s)=>{const r=g.DRESSING_CLUMP_WAVE_M/t;return Math.pow(jf(n*r+i,e*r+s),1/g.DRESSING_CLUMP_POW)};function NA(n,e,t,i,s,r){const o=[];for(let a=0;a<e;a++){const l=a/e*$i+n.next()*($i/e),c=t*Math.sqrt(n.next());o.push({yaw:l,ox:Math.cos(l)*c,oz:Math.sin(l)*c,h:r+(1-r)*n.next(),w:(g.GROUNDCOVER_BLADE_W_MIN+g.GROUNDCOVER_BLADE_W_SPAN*Math.pow(n.next(),g.GROUNDCOVER_BLADE_W_SKEW))*i,arc:s*(g.GROUNDCOVER_ARC_FLOOR+(1-g.GROUNDCOVER_ARC_FLOOR)*n.next()),skew:.1*n.next(),shear:g.GROUNDCOVER_BLADE_TIP_SHEAR*(2*n.next()-1)})}return o}const IA=[{keep:1,wMul:1},{keep:g.GROUNDCOVER_MID_KEEP,wMul:g.GROUNDCOVER_MID_W_MUL},{keep:g.GROUNDCOVER_FAR_KEEP,wMul:g.GROUNDCOVER_FAR_W_MUL},{keep:g.GROUNDCOVER_DIST_KEEP,wMul:g.GROUNDCOVER_DIST_W_MUL},{keep:g.GROUNDCOVER_BLADES,wMul:g.GROUNDCOVER_HAZE_W_MUL}];function DA(n,e,t,i,s,r,o){const a=IA[e],l=e===0?n:n.filter((p,S)=>S%a.keep===0).map(p=>({...p,w:p.w*a.wMul})),c=[],h=[],u=[],d=new Xe(t),f=new Xe(i),_=new Xe(o),M=new Xe;for(let p=0;p<l.length;p++){const S=l[p],v=Math.cos(S.yaw),x=Math.sin(S.yaw),L=S.arc*S.h,R=S.h*(1-.22*S.arc*S.arc),A=v*.8,w=x*.8,y=Math.hypot(A,1,w),E=1+s*(p*.6180339887%1-.5),T=(P,z,O,B)=>{c.push(S.ox+v*P-x*O,z,S.oz+x*P+v*O),h.push(A/y,1/y,w/y),M.copy(d).lerp(f,B*B*(3-2*B)),u.push(M.r*E,M.g*E,M.b*E)};T(0,S.skew*S.h,-S.w,S.skew),T(0,0,S.w,0),T(L,R,S.shear*S.w,1)}for(let p=0;p<r&&p<l.length;p++){const S=l[p],v=Math.cos(S.yaw),x=Math.sin(S.yaw),L=S.ox+v*S.arc*S.h,R=S.oz+x*S.arc*S.h,A=S.h*(1-.22*S.arc*S.arc),w=g.GROUNDCOVER_PETAL_R;for(let y=0;y<2;y++){const E=S.yaw+y*(Math.PI/2),T=Math.cos(E)*w,P=Math.sin(E)*w;c.push(L-T,A,R-P,L+T,A,R+P,L,A+w*1.3,R);for(let z=0;z<3;z++)h.push(0,1,0),u.push(_.r,_.g,_.b)}}const m=new xt;return m.setAttribute("position",new ot(new Float32Array(c),3)),m.setAttribute("normal",new ot(new Float32Array(h),3)),m.setAttribute("color",new ot(new Float32Array(u),3)),m}const Vo=256,ep=[],Lt=[{id:"grass.fine",root:4739120,tip:12895876,blades:12,spread:.42,wMul:1,arc:.55,hMin:.42,sizeMin:.14,sizeMax:.42,skew:1.2,tiers:5,maxM:999,variants:2,petals:0,petalCol:0},{id:"grass.coarse",root:4541482,tip:11975290,blades:12,spread:.55,wMul:1.05,arc:.78,hMin:.34,sizeMin:.22,sizeMax:.62,skew:1.35,tiers:5,maxM:999,variants:2,petals:0,petalCol:0},{id:"grass.dry",root:5788983,tip:14077337,blades:11,spread:.48,wMul:1.15,arc:.82,hMin:.38,sizeMin:.18,sizeMax:.5,skew:1.25,tiers:5,maxM:999,variants:2,petals:0,petalCol:0},{id:"heather",root:3946022,tip:10521180,blades:14,spread:.5,wMul:1.05,arc:.95,hMin:.5,sizeMin:.12,sizeMax:.3,skew:1,tiers:3,maxM:g.GROUNDCOVER_MID_BAND_M,variants:1,petals:0,petalCol:0},{id:"sedge",root:3556394,tip:8822866,blades:9,spread:.2,wMul:.85,arc:.26,hMin:.55,sizeMin:.3,sizeMax:.7,skew:1.1,tiers:2,maxM:g.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"moss",root:3688230,tip:8690766,blades:10,spread:.95,wMul:2.3,arc:1.35,hMin:.6,sizeMin:.07,sizeMax:.17,skew:1,tiers:1,maxM:10,variants:2,petals:0,petalCol:0},{id:"weed",root:4345386,tip:10399334,blades:6,spread:.5,wMul:3.2,arc:1.25,hMin:.55,sizeMin:.12,sizeMax:.32,skew:1,tiers:1,maxM:14,variants:2,petals:0,petalCol:0},{id:"bracken",root:4738606,tip:11319410,blades:5,spread:.6,wMul:3.4,arc:1.15,hMin:.55,sizeMin:.2,sizeMax:.48,skew:1.1,tiers:2,maxM:g.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"flower.white",root:4345388,tip:11056236,blades:7,spread:.4,wMul:1.1,arc:.4,hMin:.45,sizeMin:.12,sizeMax:.26,skew:1,tiers:1,maxM:14,variants:1,petals:3,petalCol:15263442},{id:"flower.gold",root:4345388,tip:11056236,blades:7,spread:.4,wMul:1.1,arc:.4,hMin:.45,sizeMin:.12,sizeMax:.26,skew:1,tiers:1,maxM:14,variants:1,petals:3,petalCol:14201404},{id:"litter",root:5913630,tip:10250796,blades:7,spread:1,wMul:3,arc:1.45,hMin:.8,sizeMin:.1,sizeMax:.24,skew:1,tiers:1,maxM:14,variants:2,petals:0,petalCol:0},{id:"bracken.rust",root:5913116,tip:13140538,blades:5,spread:.6,wMul:3.4,arc:1.15,hMin:.55,sizeMin:.2,sizeMax:.48,skew:1.1,tiers:2,maxM:g.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"grass.dead",root:7038016,tip:14998666,blades:11,spread:.5,wMul:1.15,arc:.9,hMin:.34,sizeMin:.18,sizeMax:.5,skew:1.25,tiers:5,maxM:999,variants:1,petals:0,petalCol:0}];for(const n of Lt){const e=new Float64Array(Vo);for(let t=0;t<Vo;t++)e[t]=n.sizeMin+(n.sizeMax-n.sizeMin)*Math.pow(t/(Vo-1),n.skew);ep.push(e)}function LA(n){const e=[];for(let t=0;t<Lt.length;t++){const i=Lt[t];for(let s=0;s<i.tiers;s++){const r=s===0?i.variants:1;for(let o=0;o<r;o++){const a=n.fork(`${i.id}.${o}.shape`),l=(u,d)=>o===0?u:u*a.range(1-d,1+d),c=NA(n.fork(`${i.id}.${o}`),o===0?i.blades:Math.max(3,Math.round(i.blades*a.range(.7,1.3))),l(i.spread,.3),l(i.wMul,.3),l(i.arc,.4),l(i.hMin,.2)),h=DA(c,s,i.root,i.tip,.26,s===0?i.petals:Math.min(1,i.petals),i.petalCol);e.push({id:`gc.${i.id}.${o}.t${s}`,sp:t,tier:s,geometry:h,tris:h.attributes.position.count/3})}}}return e}function PA(n){const e=Ea(n),t={uWind:{value:new rt(0,0,0,0)}},i={uSeasonTint:{value:new Xe(16777215)}},s=new jn({color:16777215,vertexColors:!0,side:Tn,fog:!1}),r=g.GROUNDCOVER_FULL_M.toFixed(1),o=g.GROUNDCOVER_FALLOFF_POW.toFixed(3),a=(g.GROUNDCOVER_FAR_M*g.GROUNDCOVER_FADE_FRAC).toFixed(2),l=g.GROUNDCOVER_FAR_M.toFixed(1),c=g.GROUNDCOVER_FADE_BAND.toFixed(4);return s.onBeforeCompile=h=>{va(h,e),Object.assign(h.uniforms,t,i),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSeasonTint;`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= uSeasonTint;`),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uWind;
attribute float blRank;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
  {
    // ITEM 35 DEFECT 2 (D89) — the clump-set re-roll. The resident set is a SUPERSET, admitted by
    // GROUNDCOVER_ACCEPT_MARGIN_M so that it survives the anchor's 9 m drift without being re-rolled;
    // which of it is actually SEEN is decided here, per frame, at the true camera distance. A clump
    // crossing the density threshold therefore shrinks away over GROUNDCOVER_FADE_BAND instead of
    // ceasing to exist at the next rebuild. blRank is the clump's rank on the density curve and is
    // anchor-independent by construction (it comes from the cell's own RNG stream, not from dist).
    vec3 blO = (modelMatrix * vec4(instanceMatrix[3].xyz, 1.0)).xyz;
    float blD = length(blO.xz - cameraPosition.xz);
    float blF = blD <= ${r} ? 1.0 : pow(${r} / blD, ${o});
    blF *= 1.0 - smoothstep(${a}, ${l}, blD);
    transformed *= smoothstep(0.0, ${c}, blF - blRank);
  }
  {
    float blPh = dot(instanceMatrix[3].xz, uWind.xy) + uWind.z;
    float blG = transformed.y * transformed.y;                    // roots pinned, tips travel
    vec3 blS = vec3(sin(blPh), 0.0, sin(blPh * 0.77 + 1.9)) * (uWind.w * blG);
    transformed.x += dot(blS, normalize(instanceMatrix[0].xyz));  // world sway -> this clump's own axes
    transformed.z += dot(blS, normalize(instanceMatrix[2].xyz));
  }
#endif`).replace("blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;",`#ifdef USE_INSTANCING
  blWorldPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal *= faceDirection; // un-flip: both faces of a blade are the same foliage`)},s.userData.uniforms=i,{material:s,wind:t}}const wc=2,ks=[{cellM:g.GROUNDCOVER_NEAR_CELL_M,k:g.GROUNDCOVER_NEAR_CANDIDATES,minM:0,maxM:g.GROUNDCOVER_NEAR_BAND_M,label:"near"},{cellM:g.GROUNDCOVER_MID_CELL_M,k:g.GROUNDCOVER_MID_CANDIDATES,minM:g.GROUNDCOVER_NEAR_BAND_M,maxM:g.GROUNDCOVER_MID_BAND_M,label:"mid"},{cellM:g.GROUNDCOVER_FAR_CELL_M,k:g.GROUNDCOVER_FAR_CANDIDATES,minM:g.GROUNDCOVER_MID_BAND_M,maxM:g.GROUNDCOVER_FAR_BAND_M,label:"far"},{cellM:g.GROUNDCOVER_HAZE_CELL_M,k:g.GROUNDCOVER_HAZE_CANDIDATES,minM:g.GROUNDCOVER_FAR_BAND_M,maxM:g.GROUNDCOVER_FAR_M,label:"haze"}],OA=Math.max(...ks.map(n=>n.k)),mr=new Float64Array(OA*wc),UA=new Set([70,80,90,95]),Cc=.25,FA=(()=>{const n=Math.ceil(g.GROUNDCOVER_FAR_M/Cc)+2,e=new Float64Array(n);for(let t=0;t<n;t++){const i=t*Cc,s=i<=g.GROUNDCOVER_FULL_M?1:Math.pow(g.GROUNDCOVER_FULL_M/i,g.GROUNDCOVER_FALLOFF_POW);e[t]=s*(1-vi(g.GROUNDCOVER_FAR_M*g.GROUNDCOVER_FADE_FRAC,g.GROUNDCOVER_FAR_M,i))}return e})(),Xu=n=>FA[n/Cc|0]??0;function kA(n){switch(n){case 10:return g.GROUNDCOVER_P_FOREST;case 20:return g.GROUNDCOVER_P_SHRUB;case 30:return 1;case 40:return 1;case 50:return g.GROUNDCOVER_P_BARE;case 60:return g.GROUNDCOVER_P_BARE;default:return .7}}function BA(n,e,t,i,s,r,o,a,l){const c=zi(o,a,g.GROUNDCOVER_SWARD_WAVE_M,41.3,-18.7),h=zi(o,a,g.GROUNDCOVER_SWARD_WAVE_M*2.7,-92.1,63.4),u=zi(o,a,g.GROUNDCOVER_SWARD_WAVE_M*3.7,155.9,27.2),d=Math.pow(zi(o,a,g.GROUNDCOVER_FLOWER_WAVE_M,-211.4,178.3),g.GROUNDCOVER_FLOWER_POW),f=Math.pow(zi(o,a,g.GROUNDCOVER_FLOWER_WAVE_M*1.3,307.6,-244.9),g.GROUNDCOVER_FLOWER_POW),_=vi(g.GROUNDCOVER_ALT_LO_M-180,g.GROUNDCOVER_ALT_HI_M,i),M=vi(g.GROUNDCOVER_SLOPE_LO_DEG-8,g.GROUNDCOVER_SLOPE_HI_DEG,t),m=1-M;n[0]=1.15*(.35+c)*(1-.55*_),n[1]=1*(.2+1.5*h)*(.5+.8*M+.5*_),n[2]=.85*(.1+1.7*u)*(.45+1.1*_)*(e===60||e===50?2.6:1),n[3]=(e===20?4.5:.35*_)*(.3+1.4*h),n[4]=g.GROUNDCOVER_SEDGE_W*s*s*m*(1-_),n[5]=2.6*s*(.35+.65*r)*m,n[6]=(.5+2.2*M)*(e===60||e===50?2.2:.7),n[7]=(e===10?2.6:.55)*m*(1-_)*(.2+h),n[8]=g.GROUNDCOVER_FLOWER_W*d*m*(1-.7*_),n[9]=g.GROUNDCOVER_FLOWER_W*f*m*(1-.7*_),n[10]=(e===10?3:.55)*m*(1-_)*(.2+h),n[11]=n[7],n[12]=n[2];for(let p=0;p<Lt.length;p++)n[p]*=l[p]}const $u=new ue,Ku=new ue,Yu=new Bn,qu=new Bn,gl=new Bn,Ml=new ue,So=new ue,Zu=new ue,ju=new at,El=new Float64Array(Lt.length),Ju=new Float64Array(Lt.length),Qu=new Int32Array(Lt.length);function GA(n,e,t,i){const s=e.cellM,r=Nn.latticeWarp?g.GROUNDCOVER_LATTICE_WARP*s:0,o=t*s+s*.5+(An(Math.sin(t*127.1+i*311.7)*43758.5453)-.5)*2*r,a=i*s+s*.5+(An(Math.sin(t*269.5+i*183.3)*43758.5453)-.5)*2*r,l=n.cover.classAt(o,a),c={cls:l,slopeDeg:-1,n:0};if(UA.has(l)||n.query.waterDepthAt(o,a)>0)return c;const h=n.query.normalAt(o,a),u=n.query.heightAt(o,a),d=Math.acos(Ho(h.y))*180/Math.PI;c.slopeDeg=d;const f=zi(o,a,g.GROUNDCOVER_PATCH_WAVE_M,211.7,-133.1),_=1-g.GROUNDCOVER_PATCH_DEPTH*(1-f),M=g.GROUNDCOVER_PATCH_H_MIN+(1-g.GROUNDCOVER_PATCH_H_MIN)*f;let m=g.GROUNDCOVER_DENSITY_M2*kA(l)*_;if(m*=1-g.GROUNDCOVER_SLOPE_THIN*vi(g.GROUNDCOVER_SLOPE_LO_DEG,g.GROUNDCOVER_SLOPE_HI_DEG,d),m*=1-GS(d),m*=1-(1-g.GROUNDCOVER_ALT_FLOOR)*vi(g.GROUNDCOVER_ALT_LO_M,g.GROUNDCOVER_ALT_HI_M,u),m<=0)return c;const p=n.seasonSnow>0?n.seasonSnow*zS(d,h.x,h.z,u):0;if(p>=g.SNOW_BURY_SKIP)return c;const S=1-p*g.SNOW_BURY_FRAC,v=-h.x/Math.max(h.y,1e-4),x=-h.z/Math.max(h.y,1e-4),L=Math.sqrt(v*v+x*x),R=1-vi(g.GROUNDCOVER_DAMP_SLOPE_DEG,g.GROUNDCOVER_DAMP_SLOPE_DEG*3,d);let A=R*g.GROUNDCOVER_DAMP_BASE;if(L>1e-4){const re=g.GROUNDCOVER_DAMP_PROBE_M/L,X=-v*re,se=-x*re,W=n.query.heightAt(o+X,a+se);A+=R*g.GROUNDCOVER_DAMP_CONCAVE*vi(-.5,2.5,W-(u+v*X+x*se)),n.query.waterDepthAt(o+X,a+se)>0&&(A+=g.GROUNDCOVER_DAMP_SHORE)}A=Ho(A);const w=Ho(-h.z/Math.max(.001,Math.sqrt(Math.max(0,1-h.y*h.y))))*vi(4,18,d);BA(El,l,d,u,A,w,o,a,n.seasonW);const y=Math.sqrt((o-n.ax)*(o-n.ax)+(a-n.az)*(a-n.az));let E=0,T=0;for(let re=0;re<Lt.length;re++)y>Lt[re].maxM||El[re]<=0||(T+=El[re],Ju[E]=T,Qu[E]=re,E++);if(E===0)return c;const P=zi(o,a,g.GROUNDCOVER_WIND_WAVE_M,-57.3,88.9);Zu.set(h.x,h.y,h.z),Ml.copy(_l).lerp(Zu,g.GROUNDCOVER_NORMAL_ALIGN).normalize(),So.set(Math.cos(P*$i*2),0,Math.sin(P*$i*2)),Ml.applyAxisAngle(So,g.GROUNDCOVER_WIND_LEAN_DEG*(.25+.75*P)*(Math.PI/180)).normalize(),Yu.setFromUnitVectors(_l,Ml);const z=n.query.heightAt(o-s*.5,a-s*.5),O=n.query.heightAt(o+s*.5,a-s*.5),B=n.query.heightAt(o-s*.5,a+s*.5),V=n.query.heightAt(o+s*.5,a+s*.5),ee=n.query.waterDepthAt(o-s*.5,a-s*.5)>0||n.query.waterDepthAt(o+s*.5,a-s*.5)>0||n.query.waterDepthAt(o-s*.5,a+s*.5)>0||n.query.waterDepthAt(o+s*.5,a+s*.5)>0,Y=n.rng.fork(`${s}.${t},${i}`),j=e.k*wc;for(let re=0;re<j;re++)mr[re]=Y.next();const J=m*(s*s),he=s*.7072,Ae=s===g.GROUNDCOVER_NEAR_CELL_M?g.GROUNDCOVER_ACCEPT_MARGIN_M:0,pe=Xu(Math.max(0,y-he-Ae));if(pe<=0||J<=0)return c;for(let re=0;re<e.k;re++){const X=re/J;if(X>=pe)break;const se=re*wc,W=(mr[se]-.5)*s,Q=(mr[se+1]-.5)*s,oe=o+W,ie=a+Q,de=oe-n.ax,D=ie-n.az,le=Math.sqrt(de*de+D*D);if(le<e.minM||le>e.maxM||X>=Xu(Math.max(0,le-Ae))||ee&&n.query.waterDepthAt(oe,ie)>0)continue;const U=An(mr[se]*331.73),F=An(mr[se]*977.71),k=ne=>ne<=g.GROUNDCOVER_LOD_MID_M?0:ne<=g.GROUNDCOVER_LOD_FAR_M?1:ne<=g.GROUNDCOVER_LOD_DIST_M?2:ne<=g.GROUNDCOVER_LOD_HAZE_M?3:4,$=k(le),te=$<=1?Math.min($,k(Math.max(0,le-g.GROUNDCOVER_TIER_LEAD_M))):$,ce=An(U*3.7)*T;let I=0;for(;I<E-1&&Ju[I]<ce;)I++;const b=Qu[I],q=Lt[b],fe=n.pick(b,te<q.tiers?te:q.tiers-1,An(U*97.3));if(fe<0)continue;const ve=Math.min(g.GROUNDCOVER_DIST_SIZE_MAX,Math.pow(Math.max(1,le/g.GROUNDCOVER_FULL_M),g.GROUNDCOVER_DIST_SIZE_POW)),xe=ep[b][U*(Vo-1)|0]*M*S*ve,Oe=(oe-o)/s+.5,Ie=(ie-a)/s+.5,Le=(z*(1-Oe)+O*Oe)*(1-Ie)+(B*(1-Oe)+V*Oe)*Ie;if(gl.copy(Yu).multiply(qu.setFromAxisAngle(_l,F*$i)),te===0){const ne=An(F*7.7)*$i;So.set(Math.cos(ne),0,Math.sin(ne)),gl.multiply(qu.setFromAxisAngle(So,(An(U*13.1)-.5)*2*g.GROUNDCOVER_TILT_MAX_DEG*(Math.PI/180)))}const Be=(An(F*3.3)-.5)*g.GROUNDCOVER_STRETCH;$u.set(oe,Le-g.GROUNDCOVER_BURY_FRAC*xe,ie),Ku.set(xe*(1+Be),xe,xe*(1-Be)),ju.compose($u,gl,Ku),n.emit(fe,ju,1+g.GROUNDCOVER_TINT_JITTER*(An(U*5.9)-.5),An(U*13.7)-.5,X),c.n++}return c}let ed=class{constructor(){Qe(this,"a",2166136261);Qe(this,"b",16777619)}push(e){const t=e|0;this.a=Math.imul(this.a^t&65535,16777619)>>>0,this.b=Math.imul(this.b^t>>>16,2246822507)>>>0}hex(){return`v1:${(this.a>>>0).toString(16).padStart(8,"0")}${(this.b>>>0).toString(16).padStart(8,"0")}`}};function zA(n,e){const t=LA(Ji(n.seed).fork("groundcover.kit")),{material:i,wind:s}=PA(e),r=g.GROUNDCOVER_MAX_PER_ENTRY,o=t.map(W=>{const Q=new qd(W.geometry,i,r);Q.name=`groundCover:${W.id}`,Q.instanceMatrix.setUsage(fc),Q.setColorAt(0,new Xe(1,1,1));const oe=new ea(new Float32Array(r),1);return oe.setUsage(fc),Q.geometry.setAttribute("blRank",oe),Q.count=0,n.scene.add(Q),Q}),a=Lt.map(W=>Array.from({length:W.tiers},()=>[]));t.forEach((W,Q)=>a[W.sp][W.tier].push(Q));const l=(W,Q,oe)=>{var de;const ie=(de=a[W])==null?void 0:de[Q];return!ie||ie.length===0?-1:ie[Math.min(ie.length-1,Math.floor(oe*ie.length))]},c=new Int32Array(t.length);let h="v1:0000000000000000",u=new ed;const d=new Int32Array(t.length),f=(W,Q,oe,ie,de)=>{const D=Y[W];if(D>=r){d[W]++;return}const le=o[W];le.geometry.getAttribute("blRank").array[D]=de;const U=le.instanceMatrix.array,F=Q.elements,k=D*16;for(let ce=0;ce<16;ce++)U[k+ce]=F[ce];const $=le.instanceColor.array,te=Nn.hueJitter?g.GROUNDCOVER_HUE_JITTER*ie:0;$[D*3]=oe*(1+te),$[D*3+1]=oe*(1-.315*te),$[D*3+2]=oe*(1-te),Y[W]=D+1,u.push(W),u.push(Math.round(Q.elements[12]*1e3)),u.push(Math.round(Q.elements[13]*1e3)),u.push(Math.round(Q.elements[14]*1e3)),u.push(Math.round(Q.elements[0]*1e3)),u.push(Math.round(Q.elements[2]*1e3))};let _=0;const M=new Float64Array(Lt.length).fill(1);M[Lt.findIndex(W=>W.id==="litter")]=0,M[Lt.findIndex(W=>W.id==="bracken.rust")]=0;const m={query:n.world.query,cover:n.world.cover,pick:l,emit:f,rng:Ji(n.seed).fork("groundcover"),seasonW:M,get seasonSnow(){return _}},p=ks[0].cellM,S=Math.ceil(g.GROUNDCOVER_FAR_M/p),v=2*S+1,x=new Int16Array(v*v),L=new Float32Array(v*v),R=new Uint16Array(v*v);let A=0,w=0,y=0,E=0,T=!1,P=!0,z=0;const O=new Int32Array(Lt.length),B=g.GROUNDCOVER_WIND_DIR_DEG*(Math.PI/180),V=$i/g.GROUNDCOVER_SWAY_WAVE_M;s.uWind.value.set(Math.sin(B)*V,-Math.cos(B)*V,0,g.GROUNDCOVER_SWAY_AMP);const ee=t.map(W=>W.tier<=1?0:W.tier-1),Y=new Int32Array(t.length);let j=null,J=0,he=0;function Ae(W,Q,oe){const ie=W.cellM,de=ie*.7072,D=Math.ceil((W.maxM+de)/ie),le=Math.floor(Q/ie),U=Math.floor(oe/ie),F=[];for(let k=-D;k<=D;k++)for(let $=-D;$<=D;$++){const te=le+$,ce=U+k,I=te*ie+ie*.5-Q,b=ce*ie+ie*.5-oe,q=Math.sqrt(I*I+b*b);q>W.maxM+de||q<W.minM-de||F.push(te,ce)}return Int32Array.from(F)}function pe(W,Q,oe,ie){{const de=o[W],D=Y[W];c[W]=D,de.count=D,de.instanceMatrix.clearUpdateRanges(),de.instanceMatrix.addUpdateRange(0,D*16),de.instanceMatrix.needsUpdate=!0;const le=de.geometry.getAttribute("blRank");le.clearUpdateRanges(),le.addUpdateRange(0,D),le.needsUpdate=!0,de.instanceColor&&(de.instanceColor.clearUpdateRanges(),de.instanceColor.addUpdateRange(0,D*3),de.instanceColor.needsUpdate=!0),de.boundingSphere||(de.boundingSphere=new rs),de.boundingSphere.center.set(Q,ie,oe),de.boundingSphere.radius=g.GROUNDCOVER_FAR_M*1.8}}function re(){h=u.hex(),z=0,O.fill(0);for(let W=0;W<t.length;W++)z+=c[W]*t[W].tris,O[t[W].sp]+=c[W];J=he}function X(){if(!j)return;const W=performance.now();let Q=g.GROUNDCOVER_SLICE_CANDIDATES;for(;j&&Q>0;){const oe=ks[j.li];if(j.at<j.cells.length){const de={...m,ax:j.px,az:j.pz};for(;j.at<j.cells.length&&Q>0;){const D=j.cells[j.at],le=j.cells[j.at+1];j.at+=2,Q-=oe.k;const U=GA(de,oe,D,le);if(j.li===0){const F=D-A,k=le-w;if(F>=0&&k>=0&&F<v&&k<v){const $=k*v+F;x[$]=U.cls,L[$]=U.slopeDeg,R[$]=U.n}}}continue}for(;j.commit<t.length&&Q>0;){const de=j.commit++;ee[de]===j.li&&(Q-=Y[de],pe(de,j.px,j.pz,j.py))}if(j.commit<t.length)break;const ie=j.li+1;if(ie>=ks.length){re(),j=null;break}j={px:j.px,pz:j.pz,py:j.py,li:ie,cells:Ae(ks[ie],j.px,j.pz),at:0,commit:0};for(let de=0;de<t.length;de++)ee[de]===ie&&(Y[de]=0)}he=Math.max(he,performance.now()-W)}function se(W){if(j)return;const Q=W.x-y,oe=W.z-E;T&&Q*Q+oe*oe<=g.GROUNDCOVER_RECENTRE_M*g.GROUNDCOVER_RECENTRE_M||(T=!0,y=W.x,E=W.z,A=Math.floor(y/p)-S,w=Math.floor(E/p)-S,x.fill(0),R.fill(0),L.fill(-2),u=new ed,he=0,Y.fill(0),j={px:y,pz:E,py:m.query.heightAt(y,E),li:0,cells:Ae(ks[0],y,E),at:0,commit:0})}return{update(W){s.uWind.value.z=W.clock.simTick*g.SIM_DT*g.GROUNDCOVER_SWAY_SPEED,se(W.player),X()},drainNow(W){for(;j;)X();for(se(W.player);j;)X()},census(W){const Q={};let oe=0,ie=0,de=-1;for(let U=0;U<v;U++)for(let F=0;F<v;F++){const k=U*v+F;if(L[k]<-1.5||Math.hypot((A+F)*p+p*.5-y,(w+U)*p+p*.5-E)>W)continue;const $=String(x[k]),te=Q[$]??(Q[$]={cells:0,withInstance:0,fraction:0,densityPerM2:0});te.cells++,R[k]>0&&(te.withInstance++,L[k]>de&&(de=L[k])),te.densityPerM2+=R[k],oe+=R[k],ie++}for(const U of Object.values(Q))U.fraction=U.cells?U.withInstance/U.cells:0,U.densityPerM2=U.cells?U.densityPerM2/(U.cells*p*p):0;const D={};Lt.forEach((U,F)=>D[U.id]=O[F]);let le=0;for(let U=0;U<c.length;U++)le+=c[U];return{byClass:Q,bySpecies:D,instances:oe,triangles:z,perM2:ie?oe/(ie*p*p):0,lastRebuildMs:J,digest:h,maxSlopeWithInstanceDeg:de,drawnInstances:le}},setVisible(W){P=W;for(const Q of o)Q.visible=W},material:()=>i,wind:()=>s,setSeasonSpecies(W,Q){for(let oe=0;oe<M.length;oe++)M[oe]=W[oe]??1;_=Q,T=!1},settled:()=>T&&j===null,invalidate(){T=!1},visible:()=>P,clumpHashes(){let W=0;for(let ie=0;ie<c.length;ie++)W+=c[ie];const Q=new Uint32Array(W);let oe=0;for(let ie=0;ie<o.length;ie++){const de=o[ie].instanceMatrix.array;for(let D=0;D<c[ie];D++){const le=D*16,U=Math.round(de[le+12]*10)|0,F=Math.round(de[le+14]*10)|0;let k=Math.imul(U,668265261)^Math.imul(F,374761393)|0;k=Math.imul(k^k>>>15,739982445),Q[oe++]=(k^k>>>13)>>>0}}return Q},anchor:()=>({x:y,z:E,anchored:T}),clumpXZ(){let W=0;for(let ie=0;ie<c.length;ie++)W+=c[ie];const Q=new Float32Array(W*2);let oe=0;for(let ie=0;ie<o.length;ie++){const de=o[ie].instanceMatrix.array;for(let D=0;D<c[ie];D++){const le=D*16;Q[oe++]=de[le+12],Q[oe++]=de[le+14]}}return Q},clumpRanks(){let W=0;for(let ie=0;ie<c.length;ie++)W+=c[ie];const Q=new Float32Array(W);let oe=0;for(let ie=0;ie<o.length;ie++){const de=o[ie].geometry.getAttribute("blRank").array;for(let D=0;D<c[ie];D++)Q[oe++]=de[D]}return Q},inventory:()=>t.map((W,Q)=>({id:W.id,tris:W.tris,instances:o[Q].count,dropped:d[Q]})),dispose(){for(const W of o)n.scene.remove(W),W.dispose();for(const W of t)W.geometry.dispose();i.dispose()}}}const tp=9736842,np=8288879,ip=6248781,sp=8225640,rp=4281914,op=2437663,ap=5992504,lp=3359263,Js=4864813,HA=.999,Nr=(n,e)=>(Math.sin(n*12.9898+e*78.233)*43758.5453%1+1)%1,ti=n=>n.index?n.toNonIndexed():n;function xa(n){let e=0;for(const l of n)e+=l.attributes.position.count;const t=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e);let o=0;for(const l of n)t.set(l.attributes.position.array,o),i.set(l.attributes.normal.array,o),s.set(l.attributes.color.array,o),r.set(l.attributes.blBed.array,o/3),o+=l.attributes.position.count*3;const a=new xt;return a.setAttribute("position",new ot(t,3)),a.setAttribute("normal",new ot(i,3)),a.setAttribute("color",new ot(s,3)),a.setAttribute("blBed",new ot(r,1)),a}function kn(n,e,t,i,s,r,o=0,a=0){const l=n.attributes.position,c=n.attributes.normal;n.computeBoundingBox();const h=n.boundingBox,u=Math.max(.001,h.max.y-h.min.y),d=new Float32Array(l.count*3),f=new Float32Array(l.count),_=new Xe,M=new Xe(e),m=new Xe(t),p=new Xe(i),S=new Xe(s<0?0:s);for(let v=0;v+2<l.count;v+=3){const x=Math.max(0,c.getY(v)),L=a+(1-a)*(((l.getY(v)+l.getY(v+1)+l.getY(v+2))/3-h.min.y)/u),R=.19+.27*x+.54*L;_.copy(M).lerp(m,Math.min(1,R*2)).lerp(p,Math.max(0,R*2-1)),s>=0&&_.lerp(S,.62*x*x*Nr(v,1.7));const A=1+r*(Nr(v,3.1)-.5),w=o>0?g.ROCK_CONTACT_DARK+(1-g.ROCK_CONTACT_DARK)*Math.min(1,L/o):1;for(let y=0;y<3;y++)d.set([_.r*A,_.g*A,_.b*A],(v+y)*3),f[v+y]=w}return n.setAttribute("color",new ot(d,3)),n.setAttribute("blBed",new ot(f,1)),n}function VA(n){const e=n.attributes.position,t=e.count,i=[],s=[];let r=0;for(let h=0;h<t;h++)r=Math.max(r,Math.hypot(e.getX(h),e.getY(h),e.getZ(h)));const o=[];for(let h=0;h+2<t;h+=3){const u=e.getX(h),d=e.getY(h),f=e.getZ(h),_=e.getX(h+1)-u,M=e.getY(h+1)-d,m=e.getZ(h+1)-f,p=e.getX(h+2)-u,S=e.getY(h+2)-d,v=e.getZ(h+2)-f;let x=M*v-m*S,L=m*p-_*v,R=_*S-M*p;const A=Math.hypot(x,L,R);if(A<1e-9)continue;x/=A,L/=A,R/=A,o.push(x*u+L*d+R*f);let w=0;for(;w<i.length/3&&!(i[w*3]*x+i[w*3+1]*L+i[w*3+2]*R>HA);w++);w===i.length/3&&(i.push(x,L,R),s.push(-1/0))}for(let h=0;h<s.length;h++){const u=i[h*3],d=i[h*3+1],f=i[h*3+2];let _=-1/0;for(let M=0;M<t;M++)_=Math.max(_,u*e.getX(M)+d*e.getY(M)+f*e.getZ(M));s[h]=_}let a=0,l=0;for(let h=0;h+2<t;h+=3){const u=e.getX(h),d=e.getY(h),f=e.getZ(h),_=e.getX(h+1)-u,M=e.getY(h+1)-d,m=e.getZ(h+1)-f,p=e.getX(h+2)-u,S=e.getY(h+2)-d,v=e.getZ(h+2)-f;let x=M*v-m*S,L=m*p-_*v,R=_*S-M*p;const A=Math.hypot(x,L,R);if(A<1e-9)continue;x/=A,L/=A,R/=A;const w=o[l++];for(let y=0;y<t;y++)a=Math.max(a,x*e.getX(y)+L*e.getY(y)+R*e.getZ(y)-w)}const c=new Float32Array(s.length*4);for(let h=0;h<s.length;h++)c[h*4]=i[h*3],c[h*4+1]=i[h*3+1],c[h*4+2]=i[h*3+2],c[h*4+3]=s[h];return{planes:c,hullErr:a,boundR:r}}const WA=new Float32Array(0);function Ao(n){const e=n.geometry;e.computeBoundingBox();const t=e.boundingBox,i=e.attributes.position,s=t.min.y+(t.max.y-t.min.y)*.18;let r=0,o=0;for(let l=0;l<i.count;l++){const c=Math.hypot(i.getX(l),i.getZ(l));i.getY(l)<=s&&(r=Math.max(r,c)),o=Math.max(o,c)}e.computeBoundingSphere();const a=n.kind==="rock"||n.kind==="cobble"?VA(e):{planes:WA,hullErr:0,boundR:e.boundingSphere.radius};return{...n,footR:r,wideR:o,baseY:t.min.y,height:Math.max(.001,t.max.y-t.min.y),planes:a.planes,boundR:a.boundR,hullErr:a.hullErr}}const XA=[{name:"block",kind:"rock",mode:"box",shear:.6,planes:0,hMin:.26,hMax:0,s:[1,.98,.9],detail:0,sizeMul:1,seg:3,brk:.2},{name:"slab",kind:"rock",mode:"box",shear:.22,planes:0,hMin:.24,hMax:0,s:[.98,.66,.86],detail:0,sizeMul:.6,seg:3,brk:.11},{name:"fin",kind:"rock",mode:"box",shear:.9,planes:0,hMin:.28,hMax:0,s:[.6,1.22,.94],detail:0,sizeMul:.82,seg:3,brk:.15},{name:"shard",kind:"rock",mode:"poly",shear:0,planes:34,hMin:.44,hMax:.7,s:[.9,1,.84],detail:0,sizeMul:1.15,seg:1,brk:0},{name:"cobble",kind:"cobble",mode:"box",shear:.82,planes:0,hMin:.27,hMax:0,s:[1,.92,.84],detail:0,sizeMul:1,seg:2,brk:.2}];function $A(n,e,t=0){const i=new Float32Array(24);for(let h=0;h<24;h++)i[h]=(n.next()-.5)*2*e.hMin;const s=(n.next()-.5)*e.shear,r=(n.next()-.5)*e.shear,o=1+.3*n.next(),a=1+Math.floor(n.next()*4096),l=ti(new nr(1,1,1,e.seg,e.seg,e.seg)),c=l.attributes.position;for(let h=0;h<c.count;h++){const u=c.getX(h),d=c.getY(h),f=c.getZ(h),_=u+.5,M=d+.5,m=f+.5;let p=0,S=0,v=0;for(let R=0;R<8;R++){const A=(R&1?_:1-_)*(R&2?M:1-M)*(R&4?m:1-m),w=R*3;p+=i[w]*A,S+=i[w+1]*A,v+=i[w+2]*A}const x=a+Math.round(_*e.seg)*7+Math.round(M*e.seg)*131+Math.round(m*e.seg)*1571,L=1+(o-1)*(1-M);c.setXYZ(h,(u*L+p+s*M+(Nr(x,5.3)-.5)*e.brk)*e.s[0],(d+S*(.45+.9*M)+(Nr(x,9.1)-.5)*e.brk)*e.s[1],(f*L+v+r*M+(Nr(x,13.7)-.5)*e.brk)*e.s[2])}return l.computeVertexNormals(),kn(l,ip,np,tp,sp,.34,g.ROCK_CONTACT_BAND,t)}function KA(n,e){const t=[],i=[];for(let h=0;h<e.planes;h++){const u=1-(2*h+1)/e.planes,d=Math.sqrt(Math.max(0,1-u*u)),f=h*2.399963+n.next()*Math.PI*2;t.push(new ue(Math.cos(f)*d,u*(.5+.5*n.next()),Math.sin(f)*d).normalize());const _=n.next(),M=n.next()<.18;i.push(h===0?e.hMin:M?e.hMin+.05*_:e.hMax-.18*_)}t.push(new ue(0,-1,0)),i.push(.34);const s=8,r=[],o=new ue,a=new ue,l=new ue;for(let h=0;h<t.length;h++){const u=t[h],d=i[h];o.set(0,1,0),Math.abs(u.y)>.9&&o.set(1,0,0),o.cross(u).normalize(),a.copy(u).cross(o).normalize();let f=[];for(const _ of[[1,1],[-1,1],[-1,-1],[1,-1]])f.push(new ue().copy(u).multiplyScalar(d).addScaledVector(o,_[0]*s).addScaledVector(a,_[1]*s));for(let _=0;_<t.length&&f.length>=3;_++){if(_===h)continue;const M=t[_],m=i[_],p=[];for(let S=0;S<f.length;S++){const v=f[S],x=f[(S+1)%f.length],L=M.dot(v)-m,R=M.dot(x)-m;L<=0&&p.push(v),(L<0&&R>0||L>0&&R<0)&&p.push(l.copy(x).sub(v).multiplyScalar(L/(L-R)).add(v).clone())}f=p}if(!(f.length<3))for(let _=1;_+1<f.length;_++)for(const M of[f[0],f[_],f[_+1]])r.push(M.x*e.s[0],M.y*e.s[1],M.z*e.s[2])}const c=new xt;return c.setAttribute("position",new ot(Float32Array.from(r),3)),c.computeVertexNormals(),kn(c,ip,np,tp,sp,.34,g.ROCK_CONTACT_BAND)}function td(n,e,t=0){return e.mode==="box"?$A(n,e,t):KA(n,e)}function YA(n,e,t){const i=new Float32Array(e*9),s=new Float32Array(e*9),r=new Float32Array(e*9),o=[];for(let l=0;l<e;l++)o.push(.66+.34*n.next());for(let l=0;l<e;l++){const c=l/e*Math.PI*2,h=(l+1)/e*Math.PI*2,u=o[l],d=o[(l+1)%e];i.set([0,t,0,Math.cos(c)*u,0,Math.sin(c)*u,Math.cos(h)*d,0,Math.sin(h)*d],l*9),s.set([0,1,0,0,1,0,0,1,0],l*9),r.set([1,1,1,0,0,0,0,0,0],l*9)}const a=new xt;return a.setAttribute("position",new ot(i,3)),a.setAttribute("normal",new ot(s,3)),a.setAttribute("color",new ot(r,3)),a}function qA(n){const e=[kn(ti(new sr(.006,.013,.4,5,1,!0)).translate(0,.2,0),Js,Js,6969156,-1,.14)],t=4;for(let i=0;i<t;i++){const s=i/(t-1),r=.23-.17*s,o=.52-.14*s,a=ti(new ma(r*(.86+.28*n.next()),o,6));a.rotateY(n.next()*2).translate((n.next()-.5)*.04,.3+s*.52,(n.next()-.5)*.04),e.push(kn(a,op,rp,6519114,-1,.16))}return xa(e)}function ZA(n){const e=[kn(ti(new sr(.008,.018,.44,5,1,!0)).translate(0,.22,0),Js,Js,6969156,-1,.14)];for(let t=0;t<3;t++){const i=t*2.2+n.next(),s=.26+.1*n.next(),r=ti(new Br(s,0)).scale(1,.8,1);r.translate(Math.cos(i)*.15,.3+.14*n.next()+s*.55,Math.sin(i)*.15),e.push(kn(r,lp,ap,8228684,-1,.18))}return xa(e)}function jA(n){const e=[];for(let t=0;t<3;t++){const i=t*2.1+n.next()*1.4,s=.3+.16*n.next(),r=ti(new Br(s,0)).scale(1,.62,1);r.translate(Math.cos(i)*.22,.3+.16*n.next(),Math.sin(i)*.22),e.push(kn(r,4012834,6186034,8357192,-1,.2))}return xa(e)}function JA(n){const e=ti(new ma(.2*(.9+.2*n.next()),1,6)).translate(0,.5,0);return kn(e,op,rp,6519114,-1,.16)}function QA(n){const e=[kn(ti(new sr(.018,.028,.44,3,1,!0)).translate(0,.22,0),Js,Js,6969156,-1,.1)],t=ti(new Br(.36+.07*n.next(),0)).scale(1.05,.86,1.05).translate(0,.6,0);return e.push(kn(t,lp,ap,8228684,-1,.18)),xa(e)}const e1=[["tree.conifer","tree",1,qA,!0],["tree.broadleaf","tree",.8,ZA,!0],["tree.conifer-far","tree",1,JA,!1],["tree.broadleaf-far","tree",.8,QA,!1],["shrub.low","shrub",1,jA,!1]];function t1(n){const e=[];for(const t of XA){for(let i=0;i<3;i++)e.push(Ao({id:`rock.${t.name}.${i}`,kind:t.kind,geometry:td(n.fork(`${t.name}.${i}`),t),sizeMul:t.sizeMul,poly:t.mode==="poly",far:!1}));if(t.mode==="box"&&t.seg>1)for(let i=0;i<3;i++)e.push(Ao({id:`rock.${t.name}-far.${i}`,kind:t.kind,geometry:td(n.fork(`${t.name}.${i}`),{...t,seg:1},g.ROCK_BURY_FRAC),sizeMul:t.sizeMul,poly:!1,far:!0}))}for(const[t,i,s,r,o]of e1)for(let a=0;a<2;a++)e.push(Ao({id:`${t}.${a}`,kind:i,geometry:r(n.fork(`${t}.${a}`)),sizeMul:s,poly:o,far:!o}));for(let t=0;t<2;t++)e.push(Ao({id:`contact.${t}`,kind:"contact",geometry:YA(n.fork(`contact.${t}`),g.ROCK_CONTACT_SEGMENTS,g.ROCK_CONTACT_DOME),sizeMul:1,poly:!1,far:!1}));return e}const vl=new ue(.99,.88,.79);function n1(n){const e=new fa({color:16777215,vertexColors:!0,transparent:!0,depthWrite:!1,side:Tn,blending:Ll,fog:!1});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float blDis;
varying float blDisV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
blDisV = blDis;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float blDisV;`).replace("#include <dithering_fragment>",`gl_FragColor.rgb = mix(vec3(1.0), gl_FragColor.rgb, blDisV);
#include <dithering_fragment>`),t.uniforms.uContact={value:new rt(g.ROCK_CONTACT_OCC,g.ROCK_CONTACT_FADE_M,g.ROCK_CONTACT_FAR_M,g.ROCK_CONTACT_FALLOFF)},t.uniforms.uApron={value:new rt(vl.x,vl.y,vl.z,g.ROCK_APRON_MIX)},t.uniforms.uSunDir={value:n.sunDir},t.uniforms.uSunShape={value:g.ROCK_CONTACT_SUN_SHAPE},e.userData.uniforms=t.uniforms,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 blWorldPos;
varying vec2 blRad;`).replace("#include <project_vertex>",`#include <project_vertex>
#ifdef USE_INSTANCING
  blWorldPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
  blRad = blWorldPos.xz - (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
#else
  blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  blRad = blWorldPos.xz - (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;
#endif`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uContact;
uniform vec4 uApron;
uniform vec3 uSunDir;
uniform float uSunShape;
varying vec3 blWorldPos;
varying vec2 blRad;`).replace("#include <color_fragment>",`#include <color_fragment>
  float blW = clamp(diffuseColor.r, 0.0, 1.0);
  float blU = clamp(blW / uContact.w, 0.0, 1.0);
  float blFade = 1.0 - smoothstep(uContact.y, uContact.z, length(blWorldPos - cameraPosition));
  vec2 blSun = uSunDir.xz;
  float blSl = length(blSun);
  float blRl = length(blRad);
  float blLean = (blSl > 1e-4 && blRl > 1e-5) ? dot(blRad / blRl, -blSun / blSl) : 0.0;
  float blOcc = blU * blU * uContact.x * blFade * (1.0 + uSunShape * blLean);
  diffuseColor = vec4(vec3(1.0 - blOcc) * mix(vec3(1.0), uApron.rgb, sqrt(blU) * uApron.a * blFade), 1.0);`)},e}const i1=`
float blGrainH(vec3 p) { return fract(sin(dot(floor(p), vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float blGrainN(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(blGrainH(i), blGrainH(i + vec3(1.0, 0.0, 0.0)), f.x), mix(blGrainH(i + vec3(0.0, 1.0, 0.0)), blGrainH(i + vec3(1.0, 1.0, 0.0)), f.x), f.y);
  float b = mix(mix(blGrainH(i + vec3(0.0, 0.0, 1.0)), blGrainH(i + vec3(1.0, 0.0, 1.0)), f.x), mix(blGrainH(i + vec3(0.0, 1.0, 1.0)), blGrainH(i + vec3(1.0, 1.0, 1.0)), f.x), f.y);
  return mix(a, b, f.z);
}
`;function s1(n){const e=Ea(n),t=new jn({color:16777215,vertexColors:!0,flatShading:!0,fog:!1});t.alphaToCoverage=!0;const i={uSnowR:{value:new rt(0,g.SNOW_ALT_LO_M,g.SNOW_ALT_HI_M,g.SNOW_ROCK_UP_MIN)},uWet:{value:0}};return t.userData.snow=i,t.onBeforeCompile=s=>{va(s,e),Object.assign(s.uniforms,i),s.uniforms.uGrain={value:new rt(1/g.ROCK_GRAIN_MOTTLE_M,g.ROCK_GRAIN_MOTTLE,1/g.ROCK_GRAIN_SPECKLE_M,g.ROCK_GRAIN_SPECKLE)},s.uniforms.uVein={value:new ue(g.ROCK_GRAIN_VEIN_M,g.ROCK_GRAIN_VEIN,g.ROCK_GRAIN_FADE_M)},s.uniforms.uBed={value:new et(g.ROCK_CONTACT_FADE_M,g.ROCK_CONTACT_FAR_M)},t.userData.uniforms=s.uniforms,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float blBed;
varying float blBedV;
varying vec3 blWorldNormal;
attribute float blDis;
varying float blDisV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
blBedV = blBed;
blDisV = blDis;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
#ifdef USE_INSTANCING
  blWorldNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
#else
  blWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
#endif`).replace("blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;",`#ifdef USE_INSTANCING
  blWorldPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uGrain;
uniform vec3 uVein;
uniform vec2 uBed;
uniform vec4 uSnowR;
uniform float uWet;
varying float blBedV;
varying vec3 blWorldNormal;
varying float blDisV;${i1}`).replace("#include <color_fragment>",`#include <color_fragment>
  float blDist = length(blWorldPos - cameraPosition);
  // The baked bedding shade, RELEASED with distance (D69's logged residual, roadmap item 32). It is a
  // NEAR-FIELD contact cue, so it fades over exactly the distances the bedding disc on the ground fades
  // over: the two halves of one cue now arrive and leave together, instead of one of them still
  // multiplying a 4-pixel boulder at 150 m by 0.72-0.84.
  diffuseColor.rgb *= mix(1.0, blBedV, 1.0 - smoothstep(uBed.x, uBed.y, blDist));
  float blNear = 1.0 - smoothstep(uVein.z * 0.45, uVein.z, blDist);
  if (blNear > 0.001) {
    float blM = blGrainN(blWorldPos * uGrain.x) - 0.5;
    float blS = blGrainH(blWorldPos * uGrain.z) - 0.5;
    float blV = blGrainN(vec3(blWorldPos.x, blWorldPos.y * 6.0, blWorldPos.z) / uVein.x);
    diffuseColor.rgb *= 1.0 + blNear * (blM * uGrain.y + blS * uGrain.w);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.61, 0.58), blNear * uVein.y * smoothstep(0.62, 0.86, blV));
  }
  // WET STONE (item 10 sub-task 3, D98) — a boulder IS rock, so the whole of it wets, with no ramp.
  // Before the snow, because snow lies on wet rock rather than under it.
  if (uWet > 0.0) {
    diffuseColor.rgb *= 1.0 - ${g.WEATHER_WET_DARKEN.toFixed(4)} * uWet;
    diffuseColor.rgb.b *= 1.0 + ${g.WEATHER_WET_BLUE.toFixed(4)} * uWet;
  }
  // SNOW ON STONE (item 11 / D96). The terrain already lies under snow by altitude, slope and aspect
  // (snowFractionAt), and the ground cover is buried by it — but the BOULDERS stood on top of a white
  // fell as dark, bare stone, which is what a winter frame showed. Snow settles on a stone the same
  // way it settles on ground: it needs a face looking at the sky. So the facets whose WORLD normal
  // points up take it and the undercuts do not — and that contrast is what still reads as a boulder
  // rather than a snowball. The altitude band is the terrain's own, so stone and ground turn white
  // together up the fell.
  if (uSnowR.x > 0.0) {
    float rkAlt = smoothstep(uSnowR.y, uSnowR.z, blWorldPos.y);
    float rkUp = smoothstep(uSnowR.w, 1.0, clamp(blWorldNormal.y, 0.0, 1.0));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.95, 0.97), smoothstep(0.02, 0.5, uSnowR.x * rkAlt * rkUp));
  }`).replace("#include <dithering_fragment>",`gl_FragColor.a *= blDisV;
#include <dithering_fragment>`)},t}const Rn=g.DRESSING_CELL_M,Cs=g.DRESSING_ANCHOR_M;class r1{constructor(){Qe(this,"a",2166136261);Qe(this,"b",16777619)}push(e){const t=e|0;this.a=Math.imul(this.a^t&65535,16777619)>>>0,this.b=Math.imul(this.b^t>>>16,2246822507)>>>0}hex(){return`v1:${(this.a>>>0).toString(16).padStart(8,"0")}${(this.b>>>0).toString(16).padStart(8,"0")}`}}function o1(n,e){const t=t1(Ji(n.seed).fork("dressing.kit")),i=s1(e),s=n1(e),r=g.DRESSING_MAX_PER_ENTRY,o=t.map(A=>{const w=new qd(A.geometry,A.kind==="contact"?s:i,r);return A.geometry.setAttribute("blDis",new ea(new Float32Array(r).fill(1),1)),w.name=`dressing:${A.id}`,w.instanceMatrix.setUsage(fc),w.count=0,w.renderOrder=A.kind==="contact"?1:0,Gt.dressing&&n.scene.add(w),w}),a={query:n.world.query,cover:n.world.cover,kit:t,cobbles:t.map((A,w)=>A.kind==="cobble"&&!A.far?w:-1).filter(A=>A>=0),cobblesFar:t.map((A,w)=>A.kind==="cobble"&&A.far?w:-1).filter(A=>A>=0),rocks:t.map((A,w)=>A.kind==="rock"&&!A.poly&&!A.far?w:-1).filter(A=>A>=0),rocksFar:t.map((A,w)=>A.kind==="rock"&&A.far?w:-1).filter(A=>A>=0),big:t.map((A,w)=>A.kind==="rock"&&A.poly?w:-1).filter(A=>A>=0),contacts:t.map((A,w)=>A.kind==="contact"?w:-1).filter(A=>A>=0),trees:t.map((A,w)=>A.kind==="tree"&&A.poly?w:-1).filter(A=>A>=0),treesFar:t.map((A,w)=>A.kind==="tree"&&!A.poly?w:-1).filter(A=>A>=0),shrubs:t.map((A,w)=>A.kind==="shrub"?w:-1).filter(A=>A>=0),rockRng:Ji(n.seed).fork("dressing.rock"),plantRng:Ji(n.seed).fork("dressing.plant")},l=Math.ceil(g.DRESSING_FAR_M/Rn),c=2*l+1,h=new Int16Array(c*c),u=new Float32Array(c*c),d=new Uint16Array(c*c),f=new Uint16Array(c*c);let _=0,M=0,m=0,p=0,S=null,v="v1:0000000000000000",x=!0;const L=new Xe;function R(A,w){m=A,p=w,_=Math.floor(A/Rn)-l,M=Math.floor(w/Rn)-l;const y={...a,ax:m,az:p},E=t.map(()=>[]),T=[],P=new r1;h.fill(0),d.fill(0),f.fill(0),u.fill(-2);for(let z=0;z<c;z++)for(let O=0;O<c;O++){const B=_+O,V=M+z;if(Math.hypot(B*Rn+Rn*.5-A,V*Rn+Rn*.5-w)>g.DRESSING_FAR_M)continue;T.length=0;const ee=Qf(y,B,V,T),Y=z*c+O;h[Y]=ee.cls,u[Y]=ee.slopeDeg,f[Y]=ee.plants,d[Y]=ee.rocks+ee.plants;for(const j of T){const J=E[j.entry];if(!(J.length>=r)){J.push(j),P.push(j.entry),P.push(B),P.push(V);for(let he=0;he<16;he++)P.push(Math.round(j.m.elements[he]*1e3))}}}v=P.hex();for(let z=0;z<t.length;z++){const O=E[z],B=o[z],V=B.geometry.getAttribute("blDis");for(let ee=0;ee<O.length;ee++)B.setMatrixAt(ee,O[ee].m),B.setColorAt(ee,L.setRGB(O[ee].tint,O[ee].tint,O[ee].tint)),V.setX(ee,O[ee].fade);V.needsUpdate=!0,B.count=O.length,B.instanceMatrix.needsUpdate=!0,B.instanceColor&&(B.instanceColor.needsUpdate=!0),B.computeBoundingSphere()}}return{update(A){if(!Gt.dressing)return;const w=A.player,y=Math.floor(w.x/Cs),E=Math.floor(w.z/Cs),T=g.DRESSING_ANCHOR_MARGIN_M;(!S||Math.hypot(w.x-m,w.z-p)>g.DRESSING_RECENTER_M||w.x<S.i*Cs-T||w.x>(S.i+1)*Cs+T||w.z<S.j*Cs-T||w.z>(S.j+1)*Cs+T)&&(S={i:y,j:E},R(w.x,w.z))},setSnow(A){const w=i.userData.snow;w&&(w.uSnowR.value.x=A)},snow:()=>{var A;return((A=i.userData.snow)==null?void 0:A.uSnowR.value.x)??0},material:()=>i,fadeStats:()=>{let A=0,w=0,y=0;for(const E of o){const T=E.geometry.getAttribute("blDis");if(T)for(let P=0;P<E.count;P++){const z=T.getX(P);A++,z>.001&&z<.999?w++:z>=.999&&y++}}return{drawn:A,mid:w,solid:y,alphaToCoverage:i.alphaToCoverage===!0}},invalidate(){S=null},census(A){const w={};let y=0,E=-1;for(let T=0;T<c;T++)for(let P=0;P<c;P++){const z=T*c+P;if(u[z]<-1.5||Math.hypot((_+P)*Rn+Rn*.5-m,(M+T)*Rn+Rn*.5-p)>A)continue;const O=String(h[z]),B=w[O]??(w[O]={cells:0,withInstance:0,fraction:0,densityPerCell:0});B.cells++,d[z]>0&&B.withInstance++,f[z]>0&&u[z]>E&&(E=u[z]),B.densityPerCell+=d[z],y+=d[z]}for(const T of Object.values(w))T.fraction=T.cells?T.withInstance/T.cells:0,T.densityPerCell=T.cells?T.densityPerCell/T.cells:0;return{byClass:w,instances:y,digest:v,maxSlopeWithInstanceDeg:E<0?0:E}},setVisible(A){x=A;for(const w of o)w.visible=A},visible:()=>x,inventory:()=>t.map((A,w)=>({id:A.id,tris:A.geometry.attributes.position.count/3,instances:o[w].count})),placeCtx:(A,w)=>({...a,ax:A,az:w}),kit:()=>t,dispose(){for(const A of o)n.scene.remove(A),A.dispose();for(const A of t)A.geometry.dispose();i.dispose(),s.dispose()}}}const fn=g.DRESSING_CELL_M,di=g.DRESSING_COLLIDER_CELLS,nd=new at,It=new rt;function a1(n,e,t){if(e.kind==="contact"||e.kind==="shrub")return null;const i=n.m.elements,s=Math.hypot(i[4],i[5],i[6]),r=e.height*s;if(r<g.WALKER_STEP_UP_M)return null;const o=i[12],a=i[14],l=i[13]+(e.baseY+e.height)*s,c=l-t.heightAt(o,a);if(c<g.WALKER_STEP_UP_M)return null;if(e.planes.length===0)return{x:o,z:a,r:r*g.TREE_TRUNK_RADIUS_FRAC,planes:l1,topY:l,proudM:c};nd.copy(n.m).invert();const h=nd.elements,u=e.planes,d=new Float32Array(u.length);for(let f=0;f<u.length;f+=4){It.set(u[f],u[f+1],u[f+2],-u[f+3]);const _=h[0]*It.x+h[1]*It.y+h[2]*It.z+h[3]*It.w,M=h[4]*It.x+h[5]*It.y+h[6]*It.z+h[7]*It.w,m=h[8]*It.x+h[9]*It.y+h[10]*It.z+h[11]*It.w,p=h[12]*It.x+h[13]*It.y+h[14]*It.z+h[15]*It.w,S=Math.hypot(_,M,m)||1;d[f]=_/S,d[f+1]=M/S,d[f+2]=m/S,d[f+3]=-p/S}return{x:o,z:a,r:e.boundR*s*(1+g.DRESSING_STRETCH*.5),planes:d,topY:l,proudM:c}}const l1=new Float32Array(0),Ln={x:0,z:0};function Ro(n,e,t,i){const s=n.planes;if(s.length===0){const h=e-n.x,u=i-n.z,d=Math.hypot(h,u)||1;return Ln.x=h/d,Ln.z=u/d,d-n.r}let r=-1/0,o=0;for(let h=0;h<s.length;h+=4){const u=s[h]*e+s[h+1]*t+s[h+2]*i-s[h+3];u>r&&(r=u,o=h)}const a=s[o],l=s[o+2],c=Math.hypot(a,l);if(c<.15){const h=e-n.x,u=i-n.z,d=Math.hypot(h,u)||1;Ln.x=h/d,Ln.z=u/d}else Ln.x=a/c,Ln.z=l/c;return r}function c1(n){const e=n.kit(),t=new Map,i=[],s={x:0,z:0,hit:!1};let r=0,o=0,a=0,l=0,c=0,h=!0;const u=[];function d(f,_){if(!Gt.dressing)return u;const M=`${f},${_}`,m=t.get(M);if(m)return m;const p=performance.now(),S=n.placeCtx(f*fn+fn*.5,_*fn+fn*.5);i.length=0,Qf(S,f,_,i);const v=[];for(const x of i){const L=a1(x,e[x.entry],S.query);L&&v.push(L)}return t.size>=g.DRESSING_COLLIDER_CACHE_CELLS&&(t.clear(),c=0),t.set(M,v),c+=v.length,r++,o+=performance.now()-p,v}return{resolve(f,_,M,m,p){const S=performance.now();if(s.x=M,s.z=m,s.hit=!1,!h)return s;const v=Math.floor(f/fn),x=Math.floor(_/fn),L=p+g.WALKER_STEP_UP_M,R=g.WALKER_RADIUS_M,A=p+g.WALKER_STEP_UP_M+.05;for(let w=0;w<g.WALKER_OBSTACLE_ITERS;w++)for(let y=-di;y<=di;y++)for(let E=-di;E<=di;E++){const T=d(v+E,x+y);for(let P=0;P<T.length;P++){const z=T[P];if(z.topY<=L||Math.hypot(s.x-z.x,s.z-z.z)>z.r+R)continue;const O=Math.min(z.topY-.02,p+g.WALKER_CHEST_M);let B=Ro(z,s.x,A,s.z),V=Ln.x,ee=Ln.z;if(O>A){const J=Ro(z,s.x,O,s.z);J<B&&(B=J,V=Ln.x,ee=Ln.z)}if(B>=R)continue;let Y=Ro(z,f,A,_);O>A&&(Y=Math.min(Y,Ro(z,f,O,_)));const j=Math.min(R,Y);B>=j||(s.x+=V*(j-B),s.z+=ee*(j-B),s.hit=!0)}}return a++,l+=performance.now()-S,s},near(f,_,M){const m=[],p=Math.floor((f-M)/fn),S=Math.floor((f+M)/fn),v=Math.floor((_-M)/fn),x=Math.floor((_+M)/fn);for(let L=v;L<=x;L++)for(let R=p;R<=S;R++)for(const A of d(R,L))Math.hypot(A.x-f,A.z-_)<=M&&m.push(A);return m},supportYAt(f,_){const M=Math.floor(f/fn),m=Math.floor(_/fn);let p=null;for(let S=-di;S<=di;S++)for(let v=-di;v<=di;v++)for(const x of d(M+v,m+S)){if(Math.hypot(f-x.x,_-x.z)>x.r)continue;let L=1/0,R=-1/0;if(x.planes.length===0)L=x.topY,R=-1/0;else for(let A=0;A<x.planes.length;A+=4){const w=x.planes[A],y=x.planes[A+1],E=x.planes[A+2],P=x.planes[A+3]-w*f-E*_;if(y>1e-4)L=Math.min(L,P/y);else if(y<-1e-4)R=Math.max(R,P/y);else if(P<0){L=-1/0;break}}L>R&&L>(p??-1/0)&&(p=L)}return p},setEnabled:f=>{h=f},enabled:()=>h,invalidate(){t.clear(),c=0},stats:()=>({cells:t.size,obstacles:c,cellBuilds:r,buildMs:o,resolves:a,resolveMs:l})}}const cp=[{class:Pr,id:"unknown",speedFactor:g.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:g.SURFACE_BASELINE_DRAIN_MULT,note:"outside the recorded crop — no data is not a penalty; walk as if on the baseline"},{class:10,id:"tree",speedFactor:g.SURFACE_TREE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:g.SURFACE_TREE_DRAIN_MULT,note:"dense canopy and undergrowth: you push through, and there is no line of sight to sprint down"},{class:20,id:"shrub",speedFactor:g.SURFACE_SHRUB_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:g.SURFACE_SHRUB_DRAIN_MULT,note:"shrub / heather: knee-high drag on every stride, but still runnable"},{class:30,id:"grass",speedFactor:g.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:g.SURFACE_BASELINE_DRAIN_MULT,note:"the baseline — open grass is what WALK_SPEED and criterion 6 are measured on"},{class:40,id:"crop",speedFactor:g.SURFACE_CROP_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:g.SURFACE_CROP_DRAIN_MULT,note:"standing crop: mild drag, never an obstacle"},{class:50,id:"built",speedFactor:g.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:g.SURFACE_BASELINE_DRAIN_MULT,note:"built-up ground is hard and flat — baseline; buildings are not modelled, so nothing to slow you"},{class:60,id:"bare",speedFactor:g.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:g.SURFACE_BASELINE_DRAIN_MULT,note:"bare rock / scree: baseline — the slope class already prices what makes it hard"},{class:70,id:"snow",speedFactor:g.SURFACE_SNOW_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:g.SURFACE_SNOW_DRAIN_MULT,note:"snow and ice: postholing costs you, and there is no footing to sprint on"},{class:80,id:"water",speedFactor:g.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:g.SURFACE_BASELINE_DRAIN_MULT,note:"open water — the WATER MASK owns the slow-down (wade factors from waterDepthAt); 1.0 here or wading double-counts"},{class:90,id:"wetland",speedFactor:g.SURFACE_BOG_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:g.SURFACE_BOG_DRAIN_MULT,note:"bog: the slowest walkable ground and the hardest drain — a mask body AND a surface, per criterion 3"},{class:95,id:"mangrove",speedFactor:g.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:g.SURFACE_BASELINE_DRAIN_MULT,note:"mangrove is a water class — the WATER MASK owns the slow-down; 1.0 here or wading double-counts"},{class:100,id:"moss",speedFactor:g.SURFACE_MOSS_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:g.SURFACE_MOSS_DRAIN_MULT,note:"moss / lichen over saturated ground: soft underfoot, between grass and heather"}],h1=cp[0],u1=new Map(cp.map(n=>[n.class,n]));function d1(n){return u1.get(n)??h1}const f1=n=>Math.max(-1.45,Math.min(g.PITCH_LIMIT_RAD,n));function sh(n,e){n.y=n.groundY=e.heightAt(n.x,n.z),n.slopeDeg=e.slopeDegAt(n.x,n.z),n.waterDepth=e.waterDepthAt(n.x,n.z)}function p1(n,e,t,i){const s={x:n,y:0,z:e,yaw:t,pitch:0,speedMps:0,mode:"idle",groundY:0,slopeDeg:0,waterDepth:0};return sh(s,i),s}function Nc(n,e,t,i){n.x=e,n.z=t,n.speedMps=0,n.mode="idle",sh(n,i)}function m1(n,e,t,i,s,r){n.yaw=e.yaw,n.pitch=f1(e.pitch);const o=Math.sin(e.yaw),a=Math.cos(e.yaw);let l=e.fwd*o+e.strafe*a,c=-e.fwd*a+e.strafe*o;const h=Math.hypot(l,c);if(h===0){n.mode="idle",n.speedMps=0;return}l/=h,c/=h;const u=n.x+l*g.WALKER_PROBE_AHEAD_M,d=n.z+c*g.WALKER_PROBE_AHEAD_M,f=i.slopeDegAt(u,d),_=i.waterDepthAt(u,d);if(f>=g.SLOPE_SCRAMBLE_MAX_DEG||_>g.WADE_MAX_DEPTH_M){n.mode="blocked",n.speedMps=0;return}let M=f<=g.SLOPE_WALK_MAX_DEG?"walk":"scramble",m=M==="walk"?e.sprint?g.SPRINT_SPEED:g.WALK_SPEED:g.SCRAMBLE_SPEED;s&&(m*=d1(s.classAt(u,d)).speedFactor),_>g.WADE_SLOW_DEPTH_M?(m*=g.WADE_SPEED_FACTOR,M="wade"):_>0&&(m*=g.WATER_SHALLOW_SPEED_FACTOR);const p=n.x,S=n.z;let v=p+l*m*t,x=S+c*m*t;if(r){const L=r.resolve(p,S,v,x,n.groundY);v=L.x,x=L.z}n.x=v,n.z=x,sh(n,i),n.mode=M,n.speedMps=Math.hypot(n.x-p,n.z-S)/t}const xl=Math.PI*2,_1=n=>(n%xl+xl)%xl;function Si(n){const e=n.player;n.camera.position.set(e.x,e.y+g.EYE_HEIGHT_M,e.z),n.camera.rotation.set(e.pitch,-e.yaw,0,"YXZ")}function g1(n,e){const t=()=>{document.pointerLockElement===e||navigator.webdriver||!document.hasFocus()||Promise.resolve(e.requestPointerLock()).catch(()=>{})},i=r=>{if(!s.enabled||document.pointerLockElement!==e)return;const o=g.MOUSE_SENSITIVITY_RAD_PER_PX,a=n.input.current;a.yaw=_1(a.yaw+r.movementX*o),a.pitch=Math.max(-1.45,Math.min(g.PITCH_LIMIT_RAD,a.pitch-r.movementY*o))};e.addEventListener("click",t),document.addEventListener("mousemove",i);const s={enabled:!0,locked:()=>document.pointerLockElement===e,dispose:()=>{e.removeEventListener("click",t),document.removeEventListener("mousemove",i)}};return s}const hp={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},up=["ShiftLeft","ShiftRight"],M1=new Set([...Object.values(hp).flat(),...up]),E1=n=>n instanceof HTMLElement&&(n.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName));function v1(n){const e=new Set;let t=!1;const i=()=>{e.clear(),n.input.current.fwd=0,n.input.current.strafe=0},s=l=>{if(!(!M1.has(l.code)||E1(l.target))&&(l.preventDefault(),!l.repeat)){if(up.includes(l.code)){l.type==="keydown"&&a.enabled&&(t=!t);return}l.type==="keydown"?e.add(l.code):e.delete(l.code)}},r=()=>{document.hidden&&i()};window.addEventListener("keydown",s),window.addEventListener("keyup",s),window.addEventListener("blur",i),document.addEventListener("visibilitychange",r);const o=l=>hp[l].some(c=>e.has(c))?1:0,a={enabled:!0,sample:l=>{l.input.current.fwd=a.enabled?o("forward")-o("back"):0,l.input.current.strafe=a.enabled?o("right")-o("left"):0,l.input.current.sprint=a.enabled&&t},dispose:()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",s),window.removeEventListener("blur",i),document.removeEventListener("visibilitychange",r)}};return a}function Ve(n,e,t){const i=document.createElement(n);return i.className=e,t==null||t.appendChild(i),i}const x1=`
.hud-root{position:fixed;inset:0;z-index:10;pointer-events:none;overflow:hidden;user-select:none;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:0.8rem;color:#cfd6d0}
.arrival{position:absolute;inset:0;z-index:2;background:#000}
.result{position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.55)}
.result-panel{padding:1.1rem 1.4rem 1.3rem;background:rgba(22,24,26,0.92);border:1px solid rgba(160,175,165,0.25);border-radius:0.75rem}
.result-row{display:flex;justify-content:space-between;gap:2rem;line-height:1.6}
.result-row-medal .result-value{font-size:1rem}
.result-label{color:#8a948c}
.result-plot{display:block;margin:0.9rem auto 0;border-radius:0.35rem}
.settings{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;pointer-events:auto;padding:1rem 1.2rem 1.1rem;background:rgba(22,24,26,0.94);border:1px solid rgba(160,175,165,0.25);border-radius:0.75rem;min-width:19rem}
.settings[hidden]{display:none}
.settings-title{color:#8a948c;letter-spacing:0.08em;margin-bottom:0.85rem}
.settings-row{display:flex;align-items:center;justify-content:space-between;gap:1.5rem;margin-bottom:0.6rem}
.settings-label{color:#cfd6d0}
.settings-opts{display:flex;gap:0.3rem}
.settings-opt{font:inherit;color:#8a948c;background:rgba(0,0,0,0.3);border:1px solid rgba(160,175,165,0.22);border-radius:0.3rem;padding:0.15rem 0.5rem;cursor:pointer}
.settings-opt:hover{color:#cfd6d0;border-color:rgba(160,175,165,0.45)}
.settings-opt[aria-pressed="true"]{color:#0d0f10;background:#cfd6d0;border-color:#cfd6d0}
.settings-note{color:#6f7a72;margin-top:0.7rem;line-height:1.5}
.settings-warn{color:#b8916a}
`;function S1(n){if(n.ui.root)return n.ui.root;const e=document.createElement("style");e.textContent=x1,document.head.appendChild(e);const t=Ve("div","hud-root",document.body);return t.id="hud-root",n.ui.root=t,t}function Ur(n,e){const t=e==="lat"?n<0?"S":"N":n<0?"W":"E",i=Math.abs(n);let s=Math.floor(i),r=Math.round((i-s)*60*1e3);return r>=6e4&&(r-=6e4,s+=1),{deg:s,min:r/1e3,hemi:t}}function id(n){const e=Ur(n,"lat");return`${String(e.deg).padStart(2,"0")}°${dp(e.min)}′ ${e.hemi}`}function sd(n){const e=((n+180)%360+360)%360-180,t=Ur(e,"lon");return`${String(t.deg).padStart(3,"0")}°${dp(t.min)}′ ${t.hemi}`}function dp(n){const[e,t=""]=n.toFixed(3).split(".");return`${e.padStart(2,"0")}.${t}`}function rd(n,e,t){const i=Ur(n,e),s=Math.round(i.min);return t?`${i.deg}°${String(s).padStart(2,"0")}′ ${i.hemi}`:`${String(s).padStart(2,"0")}′`}const A1=3816509,R1=8286804,y1=16777215,sn={fascia:"#141618",fasciaLo:"#0d0f11",wall:"#0a0b0c",key:"#43464a",keyLo:"#34373b",keyEdge:"#4f5358",label:"#e7e9ea",labelDim:"#b9bcbe"},ft={core:"#ccd5ae",gold:"#bcc7a2",silver:"#b3bf97",bronze:"#a4b286",rough:"#9e9d88",roughRule:"rgba(110,108,86,0.55)",edge:"rgba(78,94,58,0.80)",tick:"rgba(96,112,74,0.45)",tickInk:"rgba(62,76,44,0.90)",route:"#c0389c",routeHalo:"rgba(255,255,255,0.72)",track:"rgba(56,64,48,0.75)",mark:"#2d3428",me:"#2f6fc9",meEdge:"#ffffff",badge:"rgba(248,249,243,0.86)",badgeInk:"#2d3428"},yo={bg:"#b3b8a8",rule:"#7d836f",label:"#39402f",value:"#12160f"},Yn=[g.MEDAL_PLATINUM_M,g.MEDAL_GOLD_M,g.MEDAL_SILVER_M,g.MEDAL_BRONZE_M],T1=180/Math.PI;function b1(n){const e=Math.round(Math.abs(n));return e===0?"0 m":`${e} m ${n>0?"R":"L"}`}function w1(n){return n>=1e3?`${(n/1e3).toFixed(1)} km`:`${Math.round(n)} m`}function C1(n){const e=Math.max(0,Math.floor(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function N1(n){const e=n*T1%360;return e<0?e+360:e}function Wo(n,e,t,i){const s=[],r=[[n-t,-(e-t),-Math.PI/2],[n-t,e-t,0],[-(n-t),e-t,Math.PI/2],[-(n-t),-(e-t),Math.PI]];for(const[o,a,l]of r)for(let c=0;c<=i;c++){const h=l+Math.PI/2*(c/i);s.push({x:o+Math.cos(h)*t,y:a+Math.sin(h)*t,nx:Math.cos(h),ny:Math.sin(h)})}return s}function I1(n,e,t,i){const s=1-i,r=l=>{const c=(l-.15)/.95;return 1-s*Math.max(0,1-c*c)},o=Wo(n,e,t,3),a=[];for(let l=0;l<o.length;l++)a.push(o[l]),l===3&&a.push({x:n,y:0,nx:1,ny:0}),l===11&&a.push({x:-n,y:0,nx:-1,ny:0});return a.map(l=>({...l,x:l.x*r(l.y/e)}))}function yi(n,e,t,i){n.push(e.x,e.y,e.z,t.x,t.y,t.z,i.x,i.y,i.z)}function Sl(n,e,t){return n.map(i=>new ue(i.x*e,i.y*e,t))}function Ns(n,e,t){for(let i=0;i<e.length;i++){const s=(i+1)%e.length;yi(n,e[i],t[i],t[s]),yi(n,e[i],t[s],e[s])}}function od(n,e,t,i){const s=new ue(0,0,t);for(let r=0;r<e.length;r++){const o=(r+1)%e.length;i?yi(n,s,e[o],e[r]):yi(n,s,e[r],e[o])}}function To(n,e,t,i,s,r,o,a,l){const c=(f,_,M)=>new ue(f,_,M),h=[c(e+a,i+a,o),c(t-a,i+a,o),c(t-a,s-a,o),c(e+a,s-a,o)],u=[c(e,i,r),c(t,i,r),c(t,s,r),c(e,s,r)],d=(f,_,M,m,p)=>{if(yi(n,f,_,M),yi(n,f,M,m),l)for(const S of[f,_,M,f,M,m])l(S,p)};d(h[0],h[1],h[2],h[3],"top"),d(u[0],u[1],h[1],h[0],"edge"),d(u[1],u[2],h[2],h[1],"edge"),d(u[2],u[3],h[3],h[2],"edge"),d(u[3],u[0],h[0],h[3],"edge")}const ad=[{x:-.527,y:-.381,w:.137,h:.0345,label:"IN"},{x:.542,y:-.381,w:.137,h:.0345,label:"OUT"},{x:-.563,y:-.525,w:.153,h:.0518,label:"FIND"},{x:-.551,y:-.676,w:.153,h:.0518,label:"MARK"},{x:.557,y:-.525,w:.153,h:.0518,label:"PAGE"},{x:.542,y:-.676,w:.153,h:.0518,label:"MENU"},{x:-.227,y:-.813,w:.183,h:.0446,label:"QUIT"},{x:.221,y:-.813,w:.183,h:.0446,label:"ENTER"},{x:.014,y:-.554,w:.298,h:.144,label:"",rocker:!0}],rn={screenFrac:.657,screenCY:.259,fasciaHW:.81,fasciaTop:.849,fasciaBot:-.281};function D1(n){const e=g.GPS_SCREEN_PX,t=g.GPS_ROWS_PX,i=document.createElement("canvas");i.width=e,i.height=e+t;const s=i.getContext("2d"),r=new mc(i);r.colorSpace=an,r.generateMipmaps=!1,r.minFilter=Zt;const o=(e+t)/e,a=g.GPS_DEVICE_W,l=a,c=a*o,h=a/(2*rn.screenFrac),u=h*g.GPS_BODY_ASPECT,d=a*g.GPS_BODY_DEPTH,f=I1(h,u,h*.34,g.GPS_BODY_WAIST),_=-.5*d,M=.22*d,m=.36*d,p=.42*d,S=.375*d,v=.45*d,x=.393*d,L=1,R=.88,A=.958,w=[],y=Sl(f,R,_),E=Sl(f,L,M),T=Sl(f,A,m),P=a*.078,z=a*.075,O=f.map(ae=>{const N=P+z*Math.max(0,(-ae.y/u-.6)/.4);return new ue(ae.x*A-ae.nx*N,ae.y*A-ae.ny*N,p)}),B=O.map(ae=>new ue(ae.x,ae.y,S));od(w,y,_,!0),Ns(w,E,y),Ns(w,T,E),Ns(w,B,O),od(w,B,S,!1);{const ae=g.GPS_ANTENNA_W*h,N=a*.21,K=g.GPS_ANTENNA_X*h,C=-a*.05,G=u-a*.2,Z=u+a*g.GPS_ANTENNA_LEN,Me=Wo(ae,N,Math.min(ae,N)*.55,2),we=g.GPS_ANTENNA_TILT_RAD,De=(Ee,be,Fe)=>Me.map(Ye=>{const lt=be-G,Et=Ye.y*Ee+Fe;return new ue(K+Ye.x*Ee,G+lt*Math.cos(we)-Et*Math.sin(we),C+lt*Math.sin(we)+Et*Math.cos(we))}),Ge=De(1,G,0),Ue=De(.86,Z-a*.07,0),qe=De(.62,Z,0);Ns(w,Ge,Ue),Ns(w,Ue,qe);const ze=new ue(K,Z+Math.cos(we)*0,C);for(let Ee=0;Ee<qe.length;Ee++){const be=(Ee+1)%qe.length;yi(w,ze,qe[be],qe[Ee])}}const V=ae=>{const N=1-g.GPS_BODY_WAIST,K=(ae-.15)/.95;return h*(1-N*Math.max(0,1-K*K))};for(const ae of[-.36,-.52,-.68]){const N=V(ae),K=ae*u,C=a*.062,G=a*.029;for(const Z of[1,-1]){const Me=Z>0?N*.96:-(N+G),we=Z>0?N+G:-(N*.96);To(w,Me,we,K-C,K+C,.05*d,.2*d,a*.006,null)}}{const N=V(.3),K=.3*u,C=a*.1;To(w,N*.96,N+a*.02,K-C,K+C,.02*d,.22*d,a*.008,null)}const ee=new xt;ee.setAttribute("position",new Mt(w,3)),ee.computeVertexNormals();const Y=[];Ns(Y,O,T);const j=new xt;j.setAttribute("position",new Mt(Y,3)),j.computeVertexNormals();const J=320,he=Math.round(J*g.GPS_BODY_ASPECT),Ae=document.createElement("canvas");Ae.width=J,Ae.height=he;const pe=Ae.getContext("2d"),re=ae=>(ae/h+1)/2*J,X=ae=>(1-(ae/u+1)/2)*he,se=13,W={};["wall","key","keyEdge"].forEach((ae,N)=>{pe.fillStyle=sn[ae],pe.fillRect(N*se,0,se,se),W[ae]=[(N*se+se/2)/J,1-se/2/he]});const Q=(ae,N,K,C,G)=>{pe.beginPath(),pe.moveTo(ae+G,N),pe.arcTo(ae+K,N,ae+K,N+C,G),pe.arcTo(ae+K,N+C,ae,N+C,G),pe.arcTo(ae,N+C,ae,N,G),pe.arcTo(ae,N,ae+K,N,G),pe.closePath()},oe=re(-.81*h),ie=re(rn.fasciaHW*h),de=X(rn.fasciaTop*u),D=X(rn.fasciaBot*u),le=pe.createLinearGradient(0,de,0,D);le.addColorStop(0,sn.fascia),le.addColorStop(1,sn.fasciaLo),pe.fillStyle=le,Q(oe,de,ie-oe,D-de,J*.035),pe.fill(),pe.textAlign="center",pe.textBaseline="middle";const U=X(rn.screenCY*u+c/2),F=X(rn.screenCY*u-c/2),k=(ie-oe)*.86;pe.fillStyle=sn.label,pe.font=`600 ${Math.round(J*.052)}px Arial, Helvetica, sans-serif`,pe.fillText("TRAILMAP 65",J/2,de+(U-de)*.4,k),pe.fillStyle=sn.labelDim,pe.font=`${Math.round(J*.033)}px Arial, Helvetica, sans-serif`,pe.fillText("MULTI - BAND",J/2,de+(U-de)*.74,k),pe.fillStyle=sn.label,pe.font=`bold ${Math.round(J*.056)}px Arial, Helvetica, sans-serif`,pe.fillText("CAIRN",J/2,F+(D-F)*.52,k);for(const ae of ad){const N=re((ae.x-ae.w)*h),K=re((ae.x+ae.w)*h),C=X((ae.y+ae.h)*u),G=X((ae.y-ae.h)*u);pe.fillStyle=sn.keyLo,pe.fillRect(N-3,C-3,K-N+6,G-C+6);const Z=pe.createLinearGradient(0,C,0,G);if(Z.addColorStop(0,sn.keyEdge),Z.addColorStop(.35,sn.key),Z.addColorStop(1,sn.keyLo),pe.fillStyle=Z,Q(N,C,K-N,G-C,Math.min(K-N,G-C)*.22),pe.fill(),ae.rocker){const Me=(N+K)/2,we=(C+G)/2,De=(K-N)/2,Ge=(G-C)/2;pe.fillStyle=sn.label;const Ue=(ze,Ee)=>{const be=Me+ze*De*.7,Fe=we+Ee*Ge*.7,Ye=J*.02;pe.save(),pe.translate(be,Fe),pe.rotate(Math.atan2(Ee,ze)+Math.PI/2),pe.beginPath(),pe.moveTo(0,-Ye),pe.lineTo(Ye*.85,Ye*.7),pe.lineTo(-Ye*.85,Ye*.7),pe.closePath(),pe.fill(),pe.restore()};Ue(0,-1),Ue(0,1),Ue(-1,0),Ue(1,0),pe.fillStyle="rgba(0,0,0,0.45)",Q(Me-De*.44,we-Ge*.44,De*.88,Ge*.88,De*.24),pe.fill();const qe=pe.createLinearGradient(0,we-Ge*.4,0,we+Ge*.4);qe.addColorStop(0,"#5f6469"),qe.addColorStop(1,sn.key),pe.fillStyle=qe,Q(Me-De*.38,we-Ge*.38,De*.76,Ge*.76,De*.22),pe.fill();continue}pe.fillStyle=sn.label,pe.font=`600 ${Math.round(Math.min((G-C)*.5,(K-N)/Math.max(3,ae.label.length)*1.15))}px Arial, Helvetica, sans-serif`,pe.fillText(ae.label,(N+K)/2,(C+G)/2+1)}const $=new mc(Ae);$.colorSpace=an,$.generateMipmaps=!1,$.minFilter=Zt;const te=[],ce=[],I=ae=>{ce.push((ae.x/h+1)/2,(ae.y/u+1)/2)},b=ae=>{ce.push(W[ae][0],W[ae][1])},q=(ae,N,K,C)=>{yi(te,ae,N,K);for(const G of[ae,N,K])C==="planar"?I(G):b(C)},fe=(ae,N,K)=>{for(let C=0;C<ae.length;C++){const G=(C+1)%ae.length;q(ae[C],N[C],N[G],K),q(ae[C],N[G],ae[G],K)}};{const ae=rn.fasciaHW*h,N=(rn.fasciaTop+rn.fasciaBot)/2*u,K=(rn.fasciaTop-rn.fasciaBot)/2*u,C=Wo(ae,K,ae*.16,1).map(we=>new ue(we.x,we.y+N,v)),G=C.map(we=>new ue(we.x,we.y,S)),Z=Wo(l/2,c/2,l*.055,1).map(we=>new ue(we.x,we.y+rn.screenCY*u,v)),Me=Z.map(we=>new ue(we.x,we.y,x));fe(C,G,"wall");for(let we=0;we<C.length;we++){const De=(we+1)%C.length;q(C[we],C[De],Z[De],"planar"),q(C[we],Z[De],Z[we],"planar")}fe(Me,Z,"wall")}for(const ae of ad){const N=(ae.x-ae.w)*h,K=(ae.x+ae.w)*h,C=(ae.y-ae.h)*u,G=(ae.y+ae.h)*u,Z=a*(ae.rocker?.03:.032);To(te,N,K,C,G,S,S+Z,a*.008,(Me,we)=>{we==="top"?I(Me):b("key")}),ae.rocker&&To(te,N+(K-N)*.3,K-(K-N)*.3,C+(G-C)*.3,G-(G-C)*.3,S+Z-a*.002,S+Z+a*.014,a*.006,(Me,we)=>{we==="top"?I(Me):b("keyEdge")})}const ve=new xt;ve.setAttribute("position",new Mt(te,3)),ve.setAttribute("uv",new Mt(ce,2)),ve.computeVertexNormals();const xe=new Wi;xe.name="gps-device";const Oe=new vt(ee,new jn({color:A1,fog:!1})),Ie=new vt(j,new jn({color:R1,fog:!1})),Le=new vt(ve,new jn({color:y1,map:$,fog:!1})),Be=new vt(new kr(l,c),new jn({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.4,color:9211020,fog:!1}));Be.position.set(0,rn.screenCY*u,x+4e-5),xe.add(Oe,Ie,Le,Be),xe.renderOrder=999,xe.visible=!1,n.camera.add(xe);const ne={xtdM:0,xtdSignedM:0,headingDeg:0,distToBM:0,alongM:0,medal:"Platinum",medalText:"Platinum",latDeg:0,lonDeg:0,latText:id(0),lonText:sd(0)};let _e=!1,Te=1,Ce=0,ye=0;const Ne=(ae,N,K,C)=>{s.beginPath(),s.moveTo(ae,N),s.lineTo(K,C),s.stroke()};function Pe(ae,N){const K=g.GPS_SCREEN_PAD_PX,C=e/2,G=e-K,Z=K,Me=C/g.GPS_SCREEN_HALF_WIDTH_M,we=ze=>ze*Me;s.fillStyle=ft.rough,s.fillRect(0,0,e,e);for(const[ze,Ee]of[[Yn[3],ft.bronze],[Yn[2],ft.silver],[Yn[1],ft.gold],[Yn[0],ft.core]])s.fillStyle=Ee,s.fillRect(C-we(ze),0,we(ze)*2,e);s.strokeStyle=ft.roughRule,s.lineWidth=1;for(let ze=1;ze<22;ze++){const Ee=ze/22*e;Ne(0,Ee,C-we(Yn[3]),Ee),Ne(C+we(Yn[3]),Ee,e,Ee)}s.lineWidth=1.5,s.strokeStyle=ft.edge;for(const ze of[Yn[0],Yn[Yn.length-1]])Ne(C-we(ze),0,C-we(ze),e),Ne(C+we(ze),0,C+we(ze),e);s.textAlign="center",s.textBaseline="middle",s.textAlign="left";for(let ze=500;ze<ae.lengthM;ze+=500){const Ee=ze/ae.lengthM;if(Ee<.07||Ee>.93)continue;const be=G+(Z-G)*Ee;s.strokeStyle=ft.tick,Ne(C-5,be,C+5,be),ze%1e3===0&&(s.font=`600 ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,s.fillStyle=ft.tickInk,s.fillText(`${(ze/1e3).toFixed(0)} km`,C+8,be))}if(ae.track.length>1&&ae.lengthM>0){const ze=(ae.b.x-ae.a.x)/ae.lengthM,Ee=(ae.b.z-ae.a.z)/ae.lengthM,be=Math.max(1,Math.floor(ae.track.length/64));s.strokeStyle=ft.track,s.lineWidth=1.5,s.beginPath();for(let Fe=0;Fe<ae.track.length;Fe+=be){const Ye=ae.track[Fe],lt=(Ye.x-ae.a.x)*ze+(Ye.z-ae.a.z)*Ee,Et=C+we(Ye.xtd),gn=G+(Z-G)*Math.min(Math.max(lt/ae.lengthM,0),1);Fe===0?s.moveTo(Et,gn):s.lineTo(Et,gn)}s.stroke()}s.lineCap="round",s.strokeStyle=ft.routeHalo,s.lineWidth=7,Ne(C,G,C,Z),s.strokeStyle=ft.route,s.lineWidth=3.5,Ne(C,G,C,Z),s.lineCap="butt",s.textAlign="center",s.textBaseline="middle";for(const[ze,Ee]of[[G,"A"],[Z,"B"]]){const be=e*.03;s.fillStyle=ft.badge,s.fillRect(C-be-2,ze-be-2,(be+2)*2,(be+2)*2),s.fillStyle=ft.mark,s.fillRect(C-be,ze-be,be*2,be*2);const Fe=e*.072,Ye=e*.06;s.fillStyle=ft.badge,s.fillRect(C+be+4,ze-Ye/2,Fe,Ye),s.strokeStyle=ft.badgeInk,s.lineWidth=1,s.strokeRect(C+be+4.5,ze-Ye/2+.5,Fe-1,Ye-1),s.fillStyle=ft.badgeInk,s.font=`bold ${Math.round(e*.048)}px Arial, Helvetica, sans-serif`,s.fillText(Ee,C+be+4+Fe/2,ze+1)}{const ze=e*.115,Ee=e*.115,be=e*.078;s.fillStyle=ft.badge,s.beginPath(),s.arc(ze,Ee,be,0,Math.PI*2),s.fill(),s.save(),s.translate(ze,Ee),s.rotate(-ae.bearingRad),s.fillStyle=ft.badgeInk,s.beginPath(),s.moveTo(0,-be*.78),s.lineTo(be*.34,be*.1),s.lineTo(-be*.34,be*.1),s.closePath(),s.fill(),s.restore(),s.font=`bold ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,s.fillStyle=ft.badgeInk,s.fillText("N",ze,Ee+be*.55)}{const ze=we(50),Ee=e*.055,be=e*.925;s.fillStyle=ft.badge,s.fillRect(Ee-5,be-13,ze+10,25),s.strokeStyle=ft.badgeInk,s.lineWidth=1.5,s.beginPath(),s.moveTo(Ee,be-1),s.lineTo(Ee,be+5),s.lineTo(Ee+ze,be+5),s.lineTo(Ee+ze,be-1),s.stroke(),s.fillStyle=ft.badgeInk,s.font=`600 ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,s.fillText("50 m",Ee+ze/2,be-5)}{s.font=`600 ${Math.round(e*.048)}px Arial, Helvetica, sans-serif`;const ze=Math.max(s.measureText(ne.latText).width,s.measureText(ne.lonText).width)+10,Ee=e*.056,be=e*.945,Fe=e*.845,Ye=Fe-2*Ee-8;s.fillStyle=ft.badge,s.fillRect(be-ze,Ye,ze,2*Ee+8),s.fillStyle=ft.badgeInk,s.textAlign="right",s.textBaseline="alphabetic",s.fillText(ne.latText,be-5,Ye+4+Ee*.82),s.fillText(ne.lonText,be-5,Ye+4+Ee*1.82)}{const ze=ae.lengthM>0?Math.min(Math.max(ae.alongM/ae.lengthM,0),1):0,Ee=e*.058,be=Math.min(Math.max(C+we(ae.xtdSignedM),Ee),e-Ee),Fe=G+(Z-G)*ze;s.save(),s.translate(be,Fe),s.rotate(N-ae.bearingRad),s.beginPath(),s.moveTo(0,-Ee),s.lineTo(Ee*.72,Ee*.86),s.lineTo(0,Ee*.4),s.lineTo(-Ee*.72,Ee*.86),s.closePath(),s.fillStyle=ft.me,s.fill(),s.strokeStyle=ft.meEdge,s.lineWidth=2,s.stroke(),s.restore()}const De=[["FROM LINE",b1(ae.xtdSignedM)],["BAND",ne.medalText],["TO B",w1(ae.distToBM)],["ELAPSED",C1(ae.elapsedS)]];s.fillStyle=yo.bg,s.fillRect(0,e,e,t),s.strokeStyle=yo.rule,s.lineWidth=1,Ne(e/2,e+2,e/2,e+t-2),Ne(2,e+t/2,e-2,e+t/2),Ne(0,e+.5,e,e+.5),s.textAlign="left";for(let ze=0;ze<De.length;ze++){const Ee=ze%2*(e/2)+e*.035,be=e+Math.floor(ze/2)*(t/2);s.fillStyle=yo.label,s.font=`bold ${Math.round(e*.054)}px Arial, Helvetica, sans-serif`,s.textBaseline="top",s.fillText(De[ze][0],Ee,be+t*.045),s.fillStyle=yo.value,s.font=`bold ${Math.round(e*.088)}px Arial, Helvetica, sans-serif`,s.textBaseline="alphabetic",s.fillText(De[ze][1],Ee,be+t*.43)}const Ge=e+t,Ue=(ze,Ee,be,Fe,Ye,lt,Et)=>{const gn=s.createLinearGradient(ze,Ee,be,Fe);gn.addColorStop(0,`rgba(20,26,16,${Et})`),gn.addColorStop(1,"rgba(20,26,16,0)"),s.fillStyle=gn,s.fillRect(Math.min(ze,be),Math.min(Ee,Fe),Ye,lt)};Ue(0,0,0,20,e,20,.46),Ue(0,0,15,0,15,Ge,.34),Ue(e,0,e-11,0,11,Ge,.22),Ue(0,Ge,0,Ge-11,e,11,.22);const qe=s.createLinearGradient(0,0,e*.8,e+t);qe.addColorStop(0,"rgba(214,226,236,0.11)"),qe.addColorStop(.45,"rgba(214,226,236,0.03)"),qe.addColorStop(1,"rgba(30,36,26,0.12)"),s.fillStyle=qe,s.fillRect(0,0,e,e+t),r.needsUpdate=!0}return{update(ae){const N=ae.mission,K=ae.player.yaw;ne.xtdM=N.xtdM,ne.xtdSignedM=N.xtdSignedM,ne.headingDeg=N1(K),ne.distToBM=N.distToBM,ne.alongM=N.alongM,ne.medal=N.medal,ne.medalText=N.medal;const C=ln(ae.world.frame,ae.player.x,ae.player.z);ne.latDeg=C.lat,ne.lonDeg=C.lon,ne.latText=id(C.lat),ne.lonText=sd(C.lon);const G=Math.min(1,g.SIM_DT/Math.max(.001,g.GPS_RAISE_S)),Z=Math.min(1,g.SIM_DT/Math.max(.001,g.GPS_STOW_S));ye+=(Ce-ye)*Z;const Me=ye>.995;if(xe.visible=_e&&!Me,!_e||Me)return;Pe(N,K);const we=ae.player.speedMps>g.GPS_RAISE_SPEED_MPS?0:1;Te+=(we-Te)*G;const De=Te*Te*(3-2*Te),Ge=ye*ye*(3-2*ye);xe.position.set(g.GPS_DEVICE_X+Ge*g.GPS_STOW_DX,g.GPS_DEVICE_Y_LOW+(g.GPS_DEVICE_Y_HIGH-g.GPS_DEVICE_Y_LOW)*De-Ge*g.GPS_STOW_DROP,-.5),xe.rotation.set((1-De)*g.GPS_DEVICE_TIP_RAD+Ge*.5,-.22,Ge*.6)},readout:()=>({...ne}),setVisible(ae){_e=ae,xe.visible=ae&&ye<=.995},visible:()=>_e,raised:()=>Te>.5,setStowed(ae){Ce=ae?1:0},stowed:()=>Ce>.5,dispose(){n.camera.remove(xe);for(const ae of[Oe,Ie,Le,Be])ae.geometry.dispose(),ae.material.dispose();r.dispose(),$.dispose()}}}const Ir=Math.PI*2;function fp(n){const e=n%Ir;return e<0?e+Ir:e}function L1(n){return fp(n)}function P1(n,e){let t=(e-n)%Ir;return t>Math.PI&&(t-=Ir),t<=-Math.PI&&(t+=Ir),t}function O1(){const n=[];for(let e=0;e<360;e+=5)e%90===0?n.push({deg:e,kind:"cardinal",label:"NESW"[e/90]}):e%30===0?n.push({deg:e,kind:"major",label:String(e)}):n.push({deg:e,kind:"minor"});return n}const U1="#3a3c3d",F1="#e7dfc9",Al="#28251f",Ic="#a8322c",k1="#4a4638";function B1(n){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,s=n/2;t.beginPath(),t.arc(i,i,s,0,Math.PI*2),t.fillStyle=F1,t.fill(),t.strokeStyle="rgba(90,80,58,0.25)",t.lineWidth=n*.012,t.beginPath(),t.arc(i,i,s*.7,0,Math.PI*2),t.stroke(),t.textAlign="center";for(const r of O1()){const o=r.deg*Math.PI/180;t.save(),t.translate(i,i),t.rotate(o);const a=s*.97,l=r.kind==="minor"?s*.07:s*.12;t.strokeStyle=Al,t.lineWidth=n*(r.kind==="cardinal"?.014:.008),t.beginPath(),t.moveTo(0,-a),t.lineTo(0,-(a-l)),t.stroke(),r.kind==="cardinal"?(t.fillStyle=r.label==="N"?Ic:Al,t.font=`bold ${Math.round(n*.14)}px Arial, Helvetica, sans-serif`,t.textBaseline="alphabetic",t.fillText(r.label,0,-76.8)):r.kind==="major"&&(t.fillStyle=k1,t.font=`600 ${Math.round(n*.075)}px Arial, Helvetica, sans-serif`,t.textBaseline="alphabetic",t.fillText(r.label,0,-92.16)),t.restore()}return t.save(),t.translate(i,i),t.fillStyle=Ic,t.beginPath(),t.moveTo(0,-s*.52),t.lineTo(s*.05,0),t.lineTo(0,s*.16),t.lineTo(-s*.05,0),t.closePath(),t.fill(),t.fillStyle=Al,t.beginPath(),t.arc(0,0,s*.045,0,Math.PI*2),t.fill(),t.restore(),e}function G1(n){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,s=n/2,r=s*.84;t.beginPath(),t.arc(i,i,s,0,Math.PI*2),t.arc(i,i,r,0,Math.PI*2,!0),t.fillStyle=U1,t.fill();const o=t.createLinearGradient(0,0,n,n);return o.addColorStop(0,"rgba(255,255,255,0.16)"),o.addColorStop(.5,"rgba(255,255,255,0)"),t.beginPath(),t.arc(i,i,s*.985,0,Math.PI*2),t.arc(i,i,r*1.01,0,Math.PI*2,!0),t.fillStyle=o,t.fill(),t.fillStyle=Ic,t.beginPath(),t.moveTo(i,s*.3),t.lineTo(i-s*.045,s*.055),t.lineTo(i+s*.045,s*.055),t.closePath(),t.fill(),e}function z1(n){const e=u=>{const d=new mc(u);return d.colorSpace=an,d.generateMipmaps=!1,d.minFilter=Zt,d},t=e(B1(256)),i=e(G1(256)),s=g.COMPASS_DIAM/2,r=new vt(new ta(s*.86,48),new jn({map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:.32,color:9867912,fog:!1})),o=new vt(new ta(s,48),new jn({map:i,transparent:!0,fog:!1}));o.position.z=.004;const a=new Wi;a.name="compass",a.add(r,o),a.renderOrder=999,a.visible=!1,n.camera.add(a);let l=1,c=0,h=0;return{update(u){const d=u.mission.phase==="walking",f=Math.min(1,g.SIM_DT/Math.max(.001,g.COMPASS_RAISE_S));if(c+=((d?l:0)-c)*f,a.visible=d&&c>.005,!a.visible)return;const _=Math.min(1,g.SIM_DT/Math.max(.001,g.COMPASS_CARD_LAG_S));h=fp(h+P1(h,L1(u.player.yaw))*_),r.rotation.z=h;const M=c*c*(3-2*c);a.position.set(g.COMPASS_X,g.COMPASS_Y_LOW+(g.COMPASS_Y_HIGH-g.COMPASS_Y_LOW)*M,-.45),a.rotation.x=-.3*M},setRaised(u){l=u?1:0},raised:()=>l>.5,visible:()=>a.visible,headingDeg:()=>{const u=h*180/Math.PI%360;return u<0?u+360:u},dispose(){n.camera.remove(a);for(const u of[r,o])u.geometry.dispose(),u.material.dispose();t.dispose(),i.dispose()}}}const H1=5,V1=60,Rl=[5,10,20,25,50,100,200];function W1(n){for(const e of Rl)if(n/e<=V1)return e;return Rl[Rl.length-1]}function X1(n,e,t,i,s){const r=Date.now(),o=s.gridN,a=Math.max(Math.abs(i.x-t.x),Math.abs(i.z-t.z))+2*s.marginM,l=(t.x+i.x)/2,c=(t.z+i.z)/2,h=l-a/2,u=c-a/2,d=a/(o-1),f=(J,he)=>({px:(J-h)/a*(o-1),py:(he-u)/a*(o-1)}),_=new Float32Array(o*o),M=new Uint8Array(o*o);let m=1/0,p=-1/0,S=0;for(let J=0;J<o;J++){const he=u+J*d;for(let Ae=0;Ae<o;Ae++){const pe=h+Ae*d,re=n.landformHeightAt(pe,he);_[J*o+Ae]=re,re<m&&(m=re),re>p&&(p=re),n.waterDepthAt(pe,he)>0&&(M[J*o+Ae]=1,S++)}}const v=-.5,x=Math.SQRT1_2,L=-.5,R=new Uint8ClampedArray(o*o),A=(J,he)=>_[Math.min(o-1,Math.max(0,he))*o+Math.min(o-1,Math.max(0,J))];for(let J=0;J<o;J++)for(let he=0;he<o;he++){const Ae=(A(he+1,J)-A(he-1,J))/(2*d*(he===0||he===o-1?.5:1)),pe=(A(he,J+1)-A(he,J-1))/(2*d*(J===0||J===o-1?.5:1)),re=Math.hypot(Ae,1,pe),X=-Ae/re*v+1/re*x+-pe/re*L;R[J*o+he]=Math.max(0,Math.min(1,X))*255}const w=s.contourIntervalM||W1(p-m),y=[];let E=0;const T=Math.ceil(m/w)*w;for(let J=T;J<=p;J+=w){const he=[];for(let Ae=0;Ae<o-1;Ae++)for(let pe=0;pe<o-1;pe++){const re=_[Ae*o+pe],X=_[Ae*o+pe+1],se=_[(Ae+1)*o+pe],W=_[(Ae+1)*o+pe+1];let Q=0;if(re>=J&&(Q|=1),X>=J&&(Q|=2),W>=J&&(Q|=4),se>=J&&(Q|=8),Q===0||Q===15)continue;const oe=()=>[pe+(J-re)/(X-re),Ae],ie=()=>[pe+(J-se)/(W-se),Ae+1],de=()=>[pe,Ae+(J-re)/(se-re)],D=()=>[pe+1,Ae+(J-X)/(W-X)],le=(U,F)=>{he.push(U[0],U[1],F[0],F[1])};switch(Q){case 1:case 14:le(de(),oe());break;case 2:case 13:le(oe(),D());break;case 3:case 12:le(de(),D());break;case 4:case 11:le(D(),ie());break;case 6:case 9:le(oe(),ie());break;case 7:case 8:le(de(),ie());break;case 5:le(de(),oe()),le(D(),ie());break;case 10:le(oe(),D()),le(de(),ie());break}}he.length!==0&&(y.push({levelM:J,index:J%(w*H1)===0,segs:new Float32Array(he)}),E+=he.length/4)}const P=1/60,z=ln(e,h,u),O=ln(e,h+a,u+a),B=[];let V=NaN;for(let J=Math.ceil(O.lon>z.lon?z.lon/P:O.lon/P)*P;J<=Math.max(z.lon,O.lon)+1e-12;J+=P){const he=ei(e,e.lat,J),Ae=f(he.x,0).px;if(Ae<0||Ae>o-1)continue;const pe=Ur(J,"lon");B.push({valueDeg:J,px:Ae,label:rd(J,"lon",B.length===0||Math.round(pe.min)===0||pe.deg!==V)}),V=pe.deg}const ee=[];V=NaN;for(let J=Math.ceil(O.lat/P)*P;J<=z.lat+1e-12;J+=P){const he=ei(e,J,e.lon),Ae=f(0,he.z).py;if(Ae<0||Ae>o-1)continue;const pe=Ur(J,"lat");ee.push({valueDeg:J,px:Ae,label:rd(J,"lat",ee.length===0||Math.round(pe.min)===0||pe.deg!==V)}),V=pe.deg}const Y=f(t.x,t.z),j=f(i.x,i.z);return{x0:h,z0:u,sizeM:a,gridN:o,cellM:d,heights:_,hillshade:R,water:M,contourIntervalM:w,contours:y,lonLines:B,latLines:ee,route:{ax:Y.px,ay:Y.py,bx:j.px,by:j.py},stats:{minH:m,maxH:p,segTotal:E,waterFrac:S/(o*o),buildMs:Date.now()-r},toPx:f}}const yl="#f2ead6",$1="#e3d8bc",_r="#3b352a",ld="rgb(146,98,49)",K1="rgba(64,88,118,0.42)",Tl="#b23a2e",Y1=180,q1=`
.papermap{position:absolute;left:50%;bottom:-1.5vh;transform:translateX(-50%) rotate(-0.5deg);z-index:3;pointer-events:none;display:none;filter:drop-shadow(0 10px 26px rgba(0,0,0,0.45))}
.papermap.shown{display:block}
.papermap canvas{display:block;height:88vh;width:auto}
`;function Z1(n){const e=document.createElement("style");e.textContent=q1,document.head.appendChild(e);const t=Ve("div","papermap",n.ui.root??document.body),i=document.createElement("canvas");t.appendChild(i);let s=null,r=0,o=!1;const a=()=>{const h=n.world.query;s=X1({landformHeightAt:(d,f)=>h.landformHeightAt(d,f),waterDepthAt:(d,f)=>h.waterDepthAt(d,f)},n.world.frame,n.mission.a,n.mission.b,{gridN:g.MAP_GRID_N,marginM:g.MAP_MARGIN_M});const u=performance.now();l(s),r=performance.now()-u},l=h=>{const u=g.MAP_CANVAS_PX,d=Math.round(u*.075),f=u+2*d;i.width=f,i.height=f;const _=i.getContext("2d"),M=u/(h.gridN-1),m=O=>d+O*M;_.fillStyle=yl,_.fillRect(0,0,f,f),_.strokeStyle=$1,_.lineWidth=2,_.strokeRect(1,1,f-2,f-2);const p=document.createElement("canvas");p.width=h.gridN,p.height=h.gridN;const S=p.getContext("2d"),v=S.createImageData(h.gridN,h.gridN),x=242,L=234,R=214,A=169,w=196,y=212;for(let O=0;O<h.gridN*h.gridN;O++){const B=O*4;if(h.water[O])v.data[B]=A,v.data[B+1]=w,v.data[B+2]=y;else{const V=Math.min(1.12,h.hillshade[O]/Y1);v.data[B]=Math.min(255,x*V),v.data[B+1]=Math.min(255,L*V),v.data[B+2]=Math.min(255,R*V)}v.data[B+3]=255}S.putImageData(v,0,0),_.imageSmoothingEnabled=!0,_.drawImage(p,d,d,u,u);for(const O of h.contours){_.strokeStyle=ld,_.globalAlpha=O.index?.85:.45,_.lineWidth=O.index?1.7:1,_.beginPath();for(let B=0;B<O.segs.length;B+=4)_.moveTo(m(O.segs[B]),m(O.segs[B+1])),_.lineTo(m(O.segs[B+2]),m(O.segs[B+3]));_.stroke()}_.globalAlpha=1,_.font=`600 ${Math.round(u*.013)}px ui-monospace, Menlo, Consolas, monospace`,_.textAlign="center",_.textBaseline="middle";for(const O of h.contours)if(O.index)for(let B=0;B<O.segs.length;B+=4*150){const V=m((O.segs[B]+O.segs[B+2])/2),ee=m((O.segs[B+1]+O.segs[B+3])/2);_.strokeStyle=yl,_.lineWidth=3,_.strokeText(String(O.levelM),V,ee),_.fillStyle=ld,_.fillText(String(O.levelM),V,ee)}_.strokeStyle=K1,_.lineWidth=1;for(const O of h.lonLines){const B=m(O.px);_.beginPath(),_.moveTo(B,d),_.lineTo(B,d+u),_.stroke()}for(const O of h.latLines){const B=m(O.px);_.beginPath(),_.moveTo(d,B),_.lineTo(d+u,B),_.stroke()}_.fillStyle=_r,_.font=`600 ${Math.round(u*.016)}px ui-monospace, Menlo, Consolas, monospace`;for(const O of h.lonLines){const B=m(O.px);_.textAlign="center",_.fillText(O.label,B,d*.55),_.fillText(O.label,B,f-d*.45)}for(const O of h.latLines){const B=m(O.px);_.textAlign="right",_.fillText(O.label,d-6,B),_.textAlign="left",_.fillText(O.label,f-d+6,B)}_.strokeStyle=_r,_.lineWidth=1.5,_.strokeRect(d,d,u,u);const{ax:E,ay:T,bx:P,by:z}=h.route;_.strokeStyle=Tl,_.globalAlpha=.9,_.lineWidth=2.5,_.beginPath(),_.moveTo(m(E),m(T)),_.lineTo(m(P),m(z)),_.stroke(),_.globalAlpha=1,_.font=`bold ${Math.round(u*.02)}px ui-monospace, Menlo, Consolas, monospace`;for(const[O,B,V]of[[E,T,"A"],[P,z,"B"]])_.beginPath(),_.arc(m(O),m(B),u*.008,0,Math.PI*2),_.strokeStyle=Tl,_.lineWidth=2,_.stroke(),_.fillStyle=Tl,_.textAlign="left",_.fillText(V,m(O)+u*.012,m(B)-u*.012);_.fillStyle=_r,_.textAlign="left",_.font=`bold ${Math.round(u*.02)}px ui-monospace, Menlo, Consolas, monospace`,_.fillText("BEELINE SURVEY SHEET",d,d*.3),_.font=`${Math.round(u*.014)}px ui-monospace, Menlo, Consolas, monospace`,_.textAlign="right",_.fillText(`CONTOURS ${h.contourIntervalM} m · GRID 1′ · TRUE NORTH · ddd°mm.mmm′`,f-d,d*.3);{const O=h.sizeM>6e3?2e3:1e3,B=O/h.sizeM*u,V=f-d*.8,ee=d;_.strokeStyle=_r,_.lineWidth=2,_.beginPath(),_.moveTo(ee,V-4),_.lineTo(ee,V),_.lineTo(ee+B,V),_.lineTo(ee+B,V-4),_.stroke(),_.textAlign="left",_.fillText(`${O/1e3} km`,ee+B+8,V-2)}{const O=d+u-u*.035,B=d+u*.055,V=u*.022;_.fillStyle=yl,_.globalAlpha=.75,_.beginPath(),_.arc(O,B,V*1.5,0,Math.PI*2),_.fill(),_.globalAlpha=1,_.fillStyle=_r,_.beginPath(),_.moveTo(O,B-V),_.lineTo(O+V*.5,B+V*.7),_.lineTo(O-V*.5,B+V*.7),_.closePath(),_.fill(),_.font=`bold ${Math.round(u*.016)}px ui-monospace, Menlo, Consolas, monospace`,_.textAlign="center",_.fillText("N",O,B+V*1.9)}},c=h=>{h&&!s&&a(),o=h,t.classList.toggle("shown",h)};return{toggle:()=>c(!o),shown:()=>o,setShown:c,stats:()=>s?{built:!0,gridN:s.gridN,sizeM:s.sizeM,contourIntervalM:s.contourIntervalM,levels:s.contours.length,segTotal:s.stats.segTotal,waterFrac:s.stats.waterFrac,lonLines:s.lonLines.length,latLines:s.latLines.length,buildMs:s.stats.buildMs,paintMs:r}:null}}function j1(n){const e=Ve("div","arrival",n.ui.root??document.body);let t=g.ARRIVAL_FADE_S,i=!1,s=null;function r(){t=0,i=!1,e.style.display="none",s==null||s()}return{el:e,start(){t=g.ARRIVAL_FADE_S,i=!0,e.style.display="",e.style.opacity="1"},update(o,a){!i||o.flags.paused||(t=Math.max(0,t-a),e.style.opacity=String(t/g.ARRIVAL_FADE_S),t===0&&r())},active:()=>i,remainingS:()=>t,onDone(o){s=o},skip(){i?r():e.style.display="none"}}}const Is={r:20,g:23,b:26},Ds={guide:"rgba(160,175,165,0.22)",line:"#8fa79a",track:"#e6dfcc",worst:"#d9a066",label:"#9aa39c",font:"11px ui-monospace, Menlo, Consolas, monospace"},J1=[g.MEDAL_PLATINUM_M,g.MEDAL_GOLD_M,g.MEDAL_SILVER_M,g.MEDAL_BRONZE_M];function bl(n,e,t,i,s){n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.stroke()}function Q1(n,e){const t=n.getContext("2d",{willReadFrequently:!0}),i=n.width,s=n.height,r=g.PLOT_PAD_PX,o=i/2,a=s-r,l=r,{a:c,b:h,track:u,worstIndex:d}=e,f=e.lengthM||1;let _=g.MEDAL_BRONZE_M;for(const x of u)_=Math.max(_,Math.abs(x.xtd));const M=(o-r)/_,m=x=>o+x*M,p=x=>a+(l-a)*(Rf(c,h,x).along/f);t.fillStyle=`rgb(${Is.r},${Is.g},${Is.b})`,t.fillRect(0,0,i,s),t.lineWidth=1,t.strokeStyle=Ds.guide;for(const x of J1)bl(t,m(-x),l,m(-x),a),bl(t,m(x),l,m(x),a);if(t.lineWidth=2,t.strokeStyle=Ds.line,bl(t,o,a,o,l),u.length>0){t.lineWidth=1.5,t.strokeStyle=Ds.track,t.beginPath(),t.moveTo(m(u[0].xtd),p(u[0]));for(let x=1;x<u.length;x++)t.lineTo(m(u[x].xtd),p(u[x]));t.stroke()}if(d>=0&&d<u.length){const x=u[d];t.strokeStyle=Ds.worst,t.beginPath(),t.arc(m(x.xtd),p(x),5,0,Math.PI*2),t.stroke()}t.fillStyle=Ds.label,t.font=Ds.font,t.textAlign="center",t.fillText("A",o,a+15),t.fillText("B",o,l-7);const S=t.getImageData(0,0,i,s).data;let v=!1;for(let x=0;x<S.length&&!v;x+=4)v=S[x]!==Is.r||S[x+1]!==Is.g||S[x+2]!==Is.b;return{samples:u.length,worstIndex:d,nonBlank:v}}const eR=[["medal","medal"],["maxDev","max deviation"],["avgDev","average deviation"],["lineScore","line score"],["elapsed","elapsed"],["length","line length"]];function tR(n){const e=Ve("div","result",n.ui.root??document.body);e.style.display="none";const t=Ve("div","result-panel",e),i=new Map;for(const[a,l]of eR){const c=Ve("div",`result-row result-row-${a}`,t);Ve("span","result-label",c).textContent=l;const h=Ve("span","result-value",c);h.dataset.field=a,i.set(a,h)}const s=Ve("canvas","result-plot",t);s.width=g.PLOT_W_PX,s.height=g.PLOT_H_PX;let r={samples:0,worstIndex:-1,nonBlank:!1},o=!1;return{el:e,show(a,l){for(const[c,h]of i)h.textContent=a[c]??"";r=Q1(s,l),e.style.display="",o=!0},hide(){e.style.display="none",o=!1},plotStats:()=>r,visible:()=>o}}function nR(n=0){const e=[];return{mark:t=>{e.push({label:t,tMs:performance.now()-n})},timings:()=>e.map(t=>({label:t.label,tMs:t.tMs})),total:()=>e.length===0?0:e[e.length-1].tMs}}const pp="v1";function iR(n,e){const t=g.LINE_HASH_DECIMALS,i=s=>s.toFixed(t);return`${pp}:${i(n.lat)},${i(n.lon)}>${i(e.lat)},${i(e.lon)}`}function sR(n,e){const t=iR(n,e);let i=2166136261,s=16777619;for(let o=0;o<t.length;o++){const a=t.charCodeAt(o);i=Math.imul(i^a,16777619)>>>0,s=Math.imul(s^a,2246822507)>>>0}const r=o=>o.toString(16).padStart(8,"0");return`${pp}:${r(i)}${r(s)}`}const Ki=Math.PI/180,mp=6378137;function rR(n){return n==="Sprint"?[g.CATEGORY_MIN_M,g.CATEGORY_SPRINT_MAX_M]:n==="Trek"?[g.CATEGORY_SPRINT_MAX_M,g.CATEGORY_TREK_MAX_M]:[g.CATEGORY_TREK_MAX_M,g.CATEGORY_MAX_M]}function oR(n,e,t){const i=t/mp,s=n.lat*Ki,r=Math.sin(s)*Math.cos(i)+Math.cos(s)*Math.sin(i)*Math.cos(e),o=n.lon*Ki+Math.atan2(Math.sin(e)*Math.sin(i)*Math.cos(s),Math.cos(i)-Math.sin(s)*r);return{lat:Math.asin(r)/Ki,lon:(o/Ki+540)%360-180}}function aR(n,e,t,i,s){let r=e.lon-n.lon;r>180?r-=360:r<-180&&(r+=360);const o=Math.max(2,Math.ceil(t/s)+1),a=t/(o-1);let l=0,c=0;for(let h=0;h<o;h++){const u=h/(o-1);l=i.landAt(n.lat+(e.lat-n.lat)*u,n.lon+r*u)?0:l+a,l>c&&(c=l)}return c}function lR(n,e,t){const[i,s]=rR(e),r=g.RANDOM_LINE_BAND_INSET_M,o=Math.max(t.minLengthM??0,i+r),a=Math.min(t.maxLengthM??1/0,s-r);if(!(a>o))return null;const{land:l}=t,c=t.stepM??g.WATER_SCAN_STEP_M,h=t.maxAttempts??g.RANDOM_LINE_MAX_ATTEMPTS,u=Math.sin((br-a/mp/Ki)*Ki),d=Ji(n),f=d.fork("randomLine.origin"),_=d.fork("randomLine.bearing"),M=d.fork("randomLine.length");for(let m=0;m<h;m++){const p=f.next(),S=f.next(),v=_.next()*2*Math.PI,x=M.range(o,a),L={lat:Math.asin((2*p-1)*u)/Ki,lon:S*360-180},R=oR(L,v,x),A=eh(L,R);if(Vf(A)===e&&!(Math.abs(L.lat)>br||Math.abs(R.lat)>br)&&!(!l.landAt(L.lat,L.lon)||!l.landAt(R.lat,R.lon))&&!(aR(L,R,A,l,c)>g.WATER_CROSSING_MAX_M))return{a:L,b:R,lengthM:A,category:e,lineHash:sR(L,R)}}return null}function cR(n){if(n.format!=="beeline-coastline-v1")throw new Error(`coastline: unexpected format "${n.format}"`);const{cellDeg:e,cols:t,rows:i}=n,s=atob(n.bits),r=new Uint8Array(s.length);for(let o=0;o<s.length;o++)r[o]=s.charCodeAt(o);if(r.length<t*i+7>>3)throw new Error(`coastline: bitmask is ${r.length} B, need ${t*i+7>>3}`);return{cellDeg:e,cols:t,rows:i,landCells:n.landCells,landAt(o,a){const l=Math.floor((90-o)/e);if(l<0||l>=i)return!1;const c=(Math.floor((a+180)/e)%t+t)%t,h=l*t+c;return(r[h>>3]>>(h&7)&1)===1}}}let cd=null;function hR(n="/data/coastline.json"){return cd??(cd=fetch(n).then(async e=>{if(!e.ok)throw new Error(`coastline: ${n} → HTTP ${e.status}`);return cR(await e.json())})),cd}const wl={a:null,b:null,lengthM:null,bearingDeg:null,category:null,lineHash:null,valid:!1,reasons:[]},uR=`
.bl-planner-confirm{position:absolute;right:0.6rem;bottom:0.6rem;z-index:2;display:flex;gap:0.6rem;align-items:center;
  font:12px ui-monospace,Menlo,Consolas,monospace;color:#cfd6d0;background:rgba(12,18,14,0.82);
  padding:6px 8px;border-radius:4px}
.bl-planner-confirm button{font:inherit;padding:4px 10px;border-radius:3px;border:1px solid rgba(160,175,165,0.5);
  background:#1d2a20;color:#e7efe8;cursor:pointer}
.bl-planner-confirm button:disabled{opacity:0.45;cursor:default}
.bl-planner-abandon{position:absolute;right:0.6rem;top:0.6rem;z-index:2}
.bl-planner-abandon button{font:12px ui-monospace,Menlo,Consolas,monospace;padding:4px 10px;border-radius:3px;
  border:1px solid rgba(200,140,120,0.6);background:#2a1d1a;color:#e8d8d0;cursor:pointer}
.bl-planner.bl-planner{position:fixed;inset:3vh 3vw;z-index:80;border-radius:0.6rem;overflow:hidden;
  border:1px solid rgba(160,175,165,0.35);box-shadow:0 1.5rem 4rem rgba(0,0,0,0.55);background:#0f1113;pointer-events:auto}
.bl-planner-hint{position:absolute;left:0.6rem;bottom:0.6rem;z-index:2;pointer-events:none;
  font:11px ui-monospace,Menlo,Consolas,monospace;color:#cfd6d0;background:rgba(12,18,14,0.72);
  padding:3px 8px;border-radius:3px}
`;function hd(n){const e=document.createElement("style");e.textContent=uR,document.head.appendChild(e);const t=document.createElement("div");t.className="bl-planner",t.style.display="none",n.appendChild(t);const i=document.createElement("div");i.className="bl-planner-hint",i.textContent="click A then B  ·  M to close",t.appendChild(i);let s=null,r=null,o=null,a=null,l=null,c=null,h="A",u=null;const d=()=>{s||(s=document.createElement("div"),s.className="bl-planner-confirm",s.style.display="none",r=document.createElement("span"),o=document.createElement("button"),o.type="button",o.textContent="Walk this line",a=document.createElement("button"),a.type="button",a.textContent="start at A",l=document.createElement("button"),l.type="button",l.textContent="random line",s.append(r,l,a,o),t.appendChild(s))};let f=null,_=!1,M=null,m=null;const p=[],S=()=>m||(m=(async()=>{const[{createPlannerMap:v},{createLineDraft:x}]=await Promise.all([bc(()=>import("./plannerMap-Box1mzen.js"),__vite__mapDeps([0,1]),import.meta.url),bc(()=>import("./lineDraft-2ayTN6go.js"),[],import.meta.url)]);M=x(_?{validate:{deferDataRules:!0}}:{}),f=v(t),f.onPick(R=>{M.pick(R);const A=M.state();f.setLine(A.a,A.b)});for(const R of p.splice(0))M.pick(R);const L=M.state();f.setLine(L.a,L.b)})(),m);return{mount:S,mounted:()=>f!==null,layers:()=>(f==null?void 0:f.layers())??{basemap:"",hillshade:null,attribution:[]},pick:v=>{if(M){const x=M.pick(v);f==null||f.setLine(x.a,x.b)}else p.push(v),S()},draft:()=>(M==null?void 0:M.state())??wl,openEntry:async()=>(_=!0,d(),t.style.setProperty("inset","0","important"),t.style.borderRadius="0",s.style.display="flex",i.textContent="click your start (A), then your destination (B)",t.style.display="block",await S(),f==null||f.map.jumpTo({center:[10,25],zoom:1.4}),new Promise(v=>{let x=h;a.onclick=()=>{x=x==="A"?"B":"A",h=x,L()},l.onclick=async()=>{const A=await hR(),w=oa[Math.floor(Math.random()*oa.length)],y=lR(Math.random()*2147483647|0,w,{land:A});if(!y)return;const E={a:y.a,b:y.b},T=M==null?void 0:M.state();T!=null&&T.a&&!T.b&&(M==null||M.pick(E.a)),M==null||M.pick(E.a),M==null||M.pick(E.b),f==null||f.setLine(E.a,E.b),f==null||f.map.fitBounds([[Math.min(E.a.lon,E.b.lon),Math.min(E.a.lat,E.b.lat)],[Math.max(E.a.lon,E.b.lon),Math.max(E.a.lat,E.b.lat)]],{padding:90,duration:600}),L()},window.__entry={pick:A=>{M==null||M.pick(A);const w=M==null?void 0:M.state();f==null||f.setLine((w==null?void 0:w.a)??null,(w==null?void 0:w.b)??null),L()},draft:()=>(M==null?void 0:M.state())??wl,spawn:A=>{x=A,h=A,L()},confirm:()=>o.click()};const L=()=>{const A=(M==null?void 0:M.state())??wl;o.disabled=!A.valid,a.textContent=`start at ${x}`,r.textContent=A.valid?`${((A.lengthM??0)/1e3).toFixed(1)} km · walk starts at ${x} · land check at survey`:A.reasons.length?A.reasons.join("  ·  "):"pick A and B"};f==null||f.onPick(()=>L());const R=window.setInterval(L,250);L(),o.onclick=()=>{const A=M==null?void 0:M.state();!(A!=null&&A.valid)||!A.a||!A.b||(window.clearInterval(R),delete window.__entry,s.style.display="none",t.style.removeProperty("inset"),t.style.removeProperty("border-radius"),t.style.display="none",_=!1,v({a:A.a,b:A.b,spawn:x}))}})),onAbandon:v=>{c=v},open:async()=>{if(t.style.display="block",c&&!u){u=document.createElement("div"),u.className="bl-planner-abandon";const v=document.createElement("button");v.type="button",v.textContent="abandon & replan";let x=0;v.addEventListener("click",()=>{if(Date.now()-x<4e3){c==null||c();return}x=Date.now(),v.textContent="click again — the run is LOST",window.setTimeout(()=>{v.textContent="abandon & replan",x=0},4e3)}),u.appendChild(v),t.appendChild(u)}await S()},close:()=>{u==null||u.remove(),u=null,t.style.display="none"},isOpen:()=>t.style.display!=="none",destroy:()=>{f==null||f.destroy(),f=null,M=null,t.remove(),e.remove()}}}const dR=4;function fR(n){const e=n.getExtension("EXT_disjoint_timer_query_webgl2"),t=[];let i=null,s=null,r=!1;const o=()=>{if(e){if(n.getParameter(e.GPU_DISJOINT_EXT)){for(const a of t)n.deleteQuery(a);t.length=0;return}for(;t.length>0;){const a=t[0];if(!n.getQueryParameter(a,n.QUERY_RESULT_AVAILABLE))break;s=n.getQueryParameter(a,n.QUERY_RESULT)/1e6,n.deleteQuery(a),t.shift()}}};return{available:e!==null,begin(){if(!e||!r||i||(o(),t.length>=dR))return;const a=n.createQuery();a&&(i=a,n.beginQuery(e.TIME_ELAPSED_EXT,a))},end(){!e||!i||(n.endQuery(e.TIME_ELAPSED_EXT),t.push(i),i=null)},lastMs(){return r=!0,o(),s}}}const Xo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class rr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pR=new Xc(-1,1,1,-1,0,1);class mR extends xt{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}}const _R=new mR;class rh{constructor(e){this._mesh=new vt(_R,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gR extends rr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rh(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ud extends rr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class MR extends rr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ER{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new et);this._width=i.width,this._height=i.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gR(Xo),this.copyPass.material.blending=Dt,this.clock=new HE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ud!==void 0&&(o instanceof ud?i=!0:o instanceof MR&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vR extends rr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const xR={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class SR extends rr{constructor(){super();const e=xR;this.uniforms=gi.clone(e.uniforms),this.material=new FE({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new rh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_d?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Md?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ed?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const bo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new et},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new at},cameraProjectionMatrixInverse:{value:new at},cameraWorldMatrix:{value:new at},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new ue(-1,-1,-1)},sceneBoxMax:{value:new ue(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},wo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Cl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function AR(n=5){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=RR(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=t[o],l=2*Math.PI*a/i,c=new ue(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Yc(s,e,e);return r.wrapS=Qi,r.wrapT=Qi,r.needsUpdate=!0,r}function RR(n){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}const Co={defines:{SAMPLES:16,SAMPLE_VECTORS:_p(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new et},cameraProjectionMatrixInverse:{value:new at},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function _p(n,e,t){const i=yR(n,e,t);let s="vec3[SAMPLES](";for(let r=0;r<n;r++){const o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function yR(n,e,t){const i=[];for(let s=0;s<n;s++){const r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new ue(Math.cos(r),Math.sin(r),o))}return i}class TR{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,_=e-d,M=t-f;let m,p;_>M?(m=1,p=0):(m=0,p=1);const S=_-m+h,v=M-p+h,x=_-1+2*h,L=M-1+2*h,R=l&255,A=c&255,w=this.perm[R+this.perm[A]]%12,y=this.perm[R+m+this.perm[A+p]]%12,E=this.perm[R+1+this.perm[A+1]]%12;let T=.5-_*_-M*M;T<0?i=0:(T*=T,i=T*T*this.dot(this.grad3[w],_,M));let P=.5-S*S-v*v;P<0?s=0:(P*=P,s=P*P*this.dot(this.grad3[y],S,v));let z=.5-x*x-L*L;return z<0?r=0:(z*=z,r=z*z*this.dot(this.grad3[E],x,L)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a;const c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(i+c),f=1/6,_=(h+u+d)*f,M=h-_,m=u-_,p=d-_,S=e-M,v=t-m,x=i-p;let L,R,A,w,y,E;S>=v?v>=x?(L=1,R=0,A=0,w=1,y=1,E=0):S>=x?(L=1,R=0,A=0,w=1,y=0,E=1):(L=0,R=0,A=1,w=1,y=0,E=1):v<x?(L=0,R=0,A=1,w=0,y=1,E=1):S<x?(L=0,R=1,A=0,w=0,y=1,E=1):(L=0,R=1,A=0,w=1,y=1,E=0);const T=S-L+f,P=v-R+f,z=x-A+f,O=S-w+2*f,B=v-y+2*f,V=x-E+2*f,ee=S-1+3*f,Y=v-1+3*f,j=x-1+3*f,J=h&255,he=u&255,Ae=d&255,pe=this.perm[J+this.perm[he+this.perm[Ae]]]%12,re=this.perm[J+L+this.perm[he+R+this.perm[Ae+A]]]%12,X=this.perm[J+w+this.perm[he+y+this.perm[Ae+E]]]%12,se=this.perm[J+1+this.perm[he+1+this.perm[Ae+1]]]%12;let W=.6-S*S-v*v-x*x;W<0?s=0:(W*=W,s=W*W*this.dot3(this.grad3[pe],S,v,x));let Q=.6-T*T-P*P-z*z;Q<0?r=0:(Q*=Q,r=Q*Q*this.dot3(this.grad3[re],T,P,z));let oe=.6-O*O-B*B-V*V;oe<0?o=0:(oe*=oe,o=oe*oe*this.dot3(this.grad3[X],O,B,V));let ie=.6-ee*ee-Y*Y-j*j;return ie<0?a=0:(ie*=ie,a=ie*ie*this.dot3(this.grad3[se],ee,Y,j)),32*(s+r+o+a)}noise4d(e,t,i,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,_;const M=(e+t+i+s)*l,m=Math.floor(e+M),p=Math.floor(t+M),S=Math.floor(i+M),v=Math.floor(s+M),x=(m+p+S+v)*c,L=m-x,R=p-x,A=S-x,w=v-x,y=e-L,E=t-R,T=i-A,P=s-w,z=y>E?32:0,O=y>T?16:0,B=E>T?8:0,V=y>P?4:0,ee=E>P?2:0,Y=T>P?1:0,j=z+O+B+V+ee+Y,J=o[j][0]>=3?1:0,he=o[j][1]>=3?1:0,Ae=o[j][2]>=3?1:0,pe=o[j][3]>=3?1:0,re=o[j][0]>=2?1:0,X=o[j][1]>=2?1:0,se=o[j][2]>=2?1:0,W=o[j][3]>=2?1:0,Q=o[j][0]>=1?1:0,oe=o[j][1]>=1?1:0,ie=o[j][2]>=1?1:0,de=o[j][3]>=1?1:0,D=y-J+c,le=E-he+c,U=T-Ae+c,F=P-pe+c,k=y-re+2*c,$=E-X+2*c,te=T-se+2*c,ce=P-W+2*c,I=y-Q+3*c,b=E-oe+3*c,q=T-ie+3*c,fe=P-de+3*c,ve=y-1+4*c,xe=E-1+4*c,Oe=T-1+4*c,Ie=P-1+4*c,Le=m&255,Be=p&255,ne=S&255,_e=v&255,Te=a[Le+a[Be+a[ne+a[_e]]]]%32,Ce=a[Le+J+a[Be+he+a[ne+Ae+a[_e+pe]]]]%32,ye=a[Le+re+a[Be+X+a[ne+se+a[_e+W]]]]%32,Ne=a[Le+Q+a[Be+oe+a[ne+ie+a[_e+de]]]]%32,Pe=a[Le+1+a[Be+1+a[ne+1+a[_e+1]]]]%32;let ae=.6-y*y-E*E-T*T-P*P;ae<0?h=0:(ae*=ae,h=ae*ae*this.dot4(r[Te],y,E,T,P));let N=.6-D*D-le*le-U*U-F*F;N<0?u=0:(N*=N,u=N*N*this.dot4(r[Ce],D,le,U,F));let K=.6-k*k-$*$-te*te-ce*ce;K<0?d=0:(K*=K,d=K*K*this.dot4(r[ye],k,$,te,ce));let C=.6-I*I-b*b-q*q-fe*fe;C<0?f=0:(C*=C,f=C*C*this.dot4(r[Ne],I,b,q,fe));let G=.6-ve*ve-xe*xe-Oe*Oe-Ie*Ie;return G<0?_=0:(G*=G,_=G*G*this.dot4(r[Pe],ve,xe,Oe,Ie)),27*(h+u+d+f+_)}}class In extends rr{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=AR(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new wn(this.width,this.height,{type:Qn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},bo.defines),uniforms:gi.clone(bo.uniforms),vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader,blending:Dt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new kE,this.normalMaterial.blending=Dt,this.pdMaterial=new Pt({defines:Object.assign({},Co.defines),uniforms:gi.clone(Co.uniforms),vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},wo.defines),uniforms:gi.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:Dt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:gi.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Fl,blendDst:Mr,blendEquation:bn,blendSrcAlpha:Ul,blendDstAlpha:Mr,blendEquationAlpha:bn}),this.blendMaterial=new Pt({uniforms:gi.clone(Cl.uniforms),vertexShader:Cl.vertexShader,fragmentShader:Cl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:md,blendSrc:Fl,blendDst:Mr,blendEquation:bn,blendSrcAlpha:Ul,blendDstAlpha:Mr,blendEquationAlpha:bn}),this.fsQuad=new rh(null),this.originalClearColor=new Xe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Kc,this.depthTexture.format=ns,this.depthTexture.type=ts,this.normalRenderTarget=new wn(this.width,this.height,{minFilter:zt,magFilter:zt,type:Qn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=_p(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case In.OUTPUT.Off:break;case In.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case In.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case In.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case In.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case In.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case In.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){const t=new TR,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Yc(s,e,e,_n,Un);return r.wrapS=Qi,r.wrapT=Qi,r.needsUpdate=!0,r}}In.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function bR(n,e,t,i=4,s=!1,r=1,o=0,a=1){const l=n.getSize(new et),c=n.getPixelRatio(),h=_=>new wn(l.x*c,l.y*c,{type:Qn,samples:_});let u=h(i);const d=new ER(n,u);d.setPixelRatio(c),d.setSize(l.x,l.y),d.addPass(new vR(e,t));let f=null;return s&&(f=new In(e,t,l.x*c,l.y*c),f.updateGtaoMaterial({radius:1,distanceExponent:1,thickness:1,scale:r,samples:16,screenSpaceRadius:!1}),o!==0&&(f.output=o),f.blendIntensity=a,d.addPass(f)),d.addPass(new SR),{render:()=>d.render(),setSize:(_,M)=>{d.setSize(_,M),f==null||f.setSize(_*c,M*c)},get samples(){return u.samples},get aoEnabled(){return f!==null},get aoBlend(){return f===null?null:f.blendIntensity},setSamples:_=>{if(_===u.samples)return;const M=h(_);d.reset(M),u=M}}}const wR=n=>n===0?"off":`${n}×`;function CR(n,e){const t={...e.initial};let i=null,s=[],r=[],o=null;function a(){const h=Ve("div","settings",n.ui.root??document.body);h.hidden=!0,h.dataset.field="settings";const u=Ve("div","settings-title",h);u.textContent="SETTINGS";const d=Ve("div","settings-row",h);d.dataset.field="settings-aa",Ve("div","settings-label",d).textContent="antialiasing";const f=Ve("div","settings-opts",d);s=e.aaLevels.map(M=>{const m=Ve("button","settings-opt",f);return m.type="button",m.textContent=wR(M),m.dataset.aa=String(M),m.addEventListener("click",()=>{t.aaSamples=M,l(),e.onChange({...t})}),m});const _=Ve("div","settings-note",h);return _.textContent="O or Esc to close · the clock keeps running",o=Ve("div","settings-note settings-warn",h),o.dataset.field="settings-aa-warn",l(),h}function l(){for(const h of s)h.setAttribute("aria-pressed",String(Number(h.dataset.aa)===t.aaSamples));for(const h of r)h.setAttribute("aria-pressed",String(h.dataset.ao==="true"===t.ao));o&&(o.textContent=t.aaSamples===0?"antialiasing off also hardens the water edge and the rock fade":"")}const c=()=>i??(i=a());return{toggle:()=>{const h=c();h.hidden=!h.hidden},setVisible:h=>{!h&&i===null||(c().hidden=!h)},visible:()=>i!==null&&!i.hidden,get:()=>({...t}),mounted:()=>i!==null}}const NR="beeline.settings.v1",gr={aaSamples:g.AA_SAMPLES_DEFAULT,ao:!1};function IR(n){return g.AA_SAMPLES_OPTIONS.filter(e=>e===0||e<=n)}function DR(n){const e=n.read();if(!e)return{...gr};try{const t=JSON.parse(e);if(typeof t!="object"||t===null)return{...gr};const i=t;return{aaSamples:typeof i.aaSamples=="number"?i.aaSamples:gr.aaSamples,ao:typeof i.ao=="boolean"?i.ao:gr.ao}}catch{return{...gr}}}function LR(n,e){n.write(JSON.stringify(e))}function PR(n,e){if(e.includes(n.aaSamples))return n;const t=e.filter(s=>s<n.aaSamples),i=t.length>0?Math.max(...t):Math.min(...e);return{...n,aaSamples:i}}const OR="beeline.save.v1";function UR(n=OR){const e=()=>{try{return globalThis.localStorage??null}catch{return null}};return{read:()=>{var t;try{return((t=e())==null?void 0:t.getItem(n))??null}catch{return null}},write:t=>{var i;try{(i=e())==null||i.setItem(n,t)}catch{}}}}const FR={spring:{bias:g.SEASON_SPRING_OVERCAST,amp:.45},summer:{bias:g.SEASON_SUMMER_OVERCAST,amp:.3},autumn:{bias:g.SEASON_AUTUMN_OVERCAST,amp:.4},winter:{bias:g.SEASON_WINTER_OVERCAST,amp:.3}},kR=11843773,Sa=n=>Math.min(1,Math.max(0,n)),BR=n=>{const e=Sa(n);return e*e*(3-2*e)},gp=g.TERRAIN_WIND_FROM_DEG*Math.PI/180,$o=Math.sin(gp),Ko=-Math.cos(gp);function Mp(n,e){return(n*$o+e*Ko)/g.WEATHER_FRONT_SPAN_M*g.WEATHER_PERIOD_S}function GR(n,e){const t=g.WEATHER_PERIOD_S,i=n%1e3*.001*Math.PI*2;return .55*Math.sin(2*Math.PI*e/t+i)+.3*Math.sin(2*Math.PI*e/(t*.37)+i*1.7)+.15*Math.sin(2*Math.PI*e/(t*2.63)+i*.4)}function ha(n,e,t,i=0,s=0){const{bias:r,amp:o}=FR[t],a=BR(e/g.WEATHER_ONSET_S);return Sa(a*(r+o*GR(n,e+Mp(i,s))))}function Ep(n,e,t,i=0,s=0){const r=g.WEATHER_WET_TAU_S,o=g.WEATHER_WET_SAMPLES;let a=0;for(let l=0;l<o;l++){const c=l*r/(o-1),h=e-c;if(h<0)continue;const u=ha(n,h,t,i,s)*Math.exp(-c/r);u>a&&(a=u)}return Sa(a)}function zR(n,e,t,i,s){const r=g.HEMI_INTENSITY,o=g.FOG_HALF_DISTANCE_SEA_M,a=g.GROUNDCOVER_SWAY_AMP;let l=n.lights.sun.intensity;const c={zenith:new Xe,horizon:new Xe,glow:new Xe},h=n.fogBands.map(()=>new Xe),u=new Xe(kR),d=new Xe;let f="",_=null,M=null,m=null,p=0,S=0;const v=()=>{l=n.lights.sun.intensity,c.zenith.copy(n.skyZenith),c.horizon.copy(n.skyHorizon),c.glow.copy(n.sunGlow),n.fogBands.forEach((R,A)=>h[A].copy(R.color))};function x(R){p=R;const A={sunI:l,hemiI:r,fogHalfM:o,sway:a},w=g.WEATHER_SKY_MIX*R;n.skyZenith.copy(c.zenith).lerp(u,w),n.skyHorizon.copy(c.horizon).lerp(u,w),n.sunGlow.copy(c.glow).lerp(u,w*1.15>1?1:w*1.15);for(let y=0;y<n.fogBands.length;y++)n.fogBands[y].color!==n.skyHorizon&&n.fogBands[y].color.copy(d.copy(h[y]).lerp(u,w));n.fogK.y=A.fogHalfM*(1-g.WEATHER_FOG_GAIN*R),n.lights.sun.intensity=A.sunI*(1-(1-g.WEATHER_SUN_DIM)*R),n.lights.hemi.intensity=A.hemiI*(1+(g.WEATHER_AMBIENT_LIFT-1)*R),t.uWind.value.w=A.sway*(1+(g.WEATHER_WIND_GAIN-1)*R),n.cloud.x=R}function L(R,A,w,y,E){let T=0;if(m!==null)T=m;else if(_===null){const O=g.WEATHER_FRONT_PROBE_M;T=(ha(i,R,A,w+$o*O,y+Ko*O)-E)/O}const P=O=>o*(1-g.WEATHER_FOG_GAIN*Sa(O)),z=T===0?0:(P(E+T*g.WEATHER_FRONT_PROBE_M)/P(E)-1)/g.WEATHER_FRONT_PROBE_M;n.front.set($o,Ko,T,z)}return{update(R){const A=e.get();A!==f&&(v(),f=A);const w=R.clock.simTick*g.SIM_DT,y=R.player.x,E=R.player.z,T=_??ha(i,w,A,y,E);x(T),L(w,A,y,E,T),S=M??_??Ep(i,w,A,y,E);for(const P of s)P.uWet.value=S},setOverride(R){_=R},setWetOverride(R){M=R},setFrontOverride(R){m=R},front:()=>({dirX:n.front.x,dirZ:n.front.y,dOvercastPerM:n.front.z,dFogMulPerM:n.front.w}),overcast:()=>p,wetness:()=>S,snapshot:()=>({overcast:p,wetness:S,fogHalfM:n.fogK.y,sunI:n.lights.sun.intensity,hemiI:n.lights.hemi.intensity,swayAmp:t.uWind.value.w,skyZenith:n.skyZenith.getHex(),cloudCover:n.cloud.x}),dispose(){_=null,M=null,m=null,x(0),n.front.set($o,Ko,0,0),S=0;for(const R of s)R.uWet.value=0}}}const No={supported:!1,bootMs:0,cacheHit:!1,channelCells:0,modeKeyMatches:!1,gridMs:0,transferMs:0,equal:!1,maxAbsDiff:NaN,comparatorSeparates:!1,n:0};async function HR(n,e){let t;try{t=new Worker(new URL(""+new URL("meshWorker-Y7hIJhyb.js",import.meta.url).href,import.meta.url),{type:"module"})}catch(i){return{...No,error:String((i==null?void 0:i.message)??i)}}try{const i=()=>new Promise((v,x)=>{t.onmessage=L=>v(L.data),t.onerror=L=>x(new Error(L.message||"worker error"))}),s=i();t.postMessage({type:"boot",dcKey:e,filterHalfM:n.filterExtentM()});const r=await s;if(r.type!=="ready")return{...No,error:r.message??"boot failed"};const o=67,a=4,l=-400,c=-400,h=i(),u=performance.now();t.postMessage({type:"grid",ox:l,oz:c,g:o,step:a});const d=await h,f=performance.now()-u;if(d.type!=="grid")return{...No,error:d.message??"grid failed"};const _=d.h,M=new Float64Array(o*o);for(let v=0;v<o;v++)for(let x=0;x<o;x++)M[v*o+x]=n.heightAt(l+(x-1)*a,c+(v-1)*a,a);const m=Float64Array.from(M);m[123]+=.001;let p=0;for(let v=0;v<m.length;v++){const x=Math.abs(m[v]-M[v]);x>p&&(p=x)}let S=0;for(let v=0;v<M.length;v++){const x=Math.abs(_[v]-M[v]);x>S&&(S=x)}return{supported:!0,bootMs:r.bootMs,cacheHit:r.cacheHit,channelCells:r.channelCells,modeKeyMatches:r.modeKey===Zi(),gridMs:d.gridMs,transferMs:Math.max(0,f-d.gridMs),equal:S===0,maxAbsDiff:S,comparatorSeparates:p>0,n:o*o}}catch(i){return{...No,error:String((i==null?void 0:i.message)??i)}}finally{t.terminate()}}const dd={straight:0,detour60:60,detour120:120};function VR(n,e){const t=n.b.x-n.a.x,i=n.b.z-n.a.z,s=e*g.DETOUR_SCRIPT_SIDE/n.lengthM;return{x:(n.a.x+n.b.x)/2-i*s,z:(n.a.z+n.b.z)/2+t*s}}function WR(n,e,t,i){if(t.phase==="finished"||e>=g.SCRIPT_MAX_TICKS)return null;let s=t.b;if(dd[n]>0){const r=VR(t,dd[n]);_a(r,i)>g.SCRIPT_WAYPOINT_RADIUS_M&&t.alongM<t.lengthM/2&&(s=r)}return{fwd:1,strafe:0,yaw:Af(i,s),pitch:0,sprint:!1}}function XR(n,e,t,i=g.SIM_DT){for(let s=0;;s++){const r=WR(e,s,n.mission,n.player);if(!r||(t(r,i),n.mission.phase!=="walking"))break}return Or(n.mission)}function $R(n,e,t,i=g.SIM_DT){for(const s of e)t(s,i);return Or(n.mission)}function fd(n){const e=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let t=2166136261,i=16777619;for(let s=0;s<e.length;s++)t=Math.imul(t^e[s],16777619)>>>0,i=Math.imul(i^e[s],2246822507)>>>0;return t.toString(16).padStart(8,"0")+i.toString(16).padStart(8,"0")}function KR(n){const{ctx:e}=n,t=e.world.query,i=()=>{const r=e.renderer.getContext(),o=r.getExtension("WEBGL_debug_renderer_info");return String(o?r.getParameter(o.UNMASKED_RENDERER_WEBGL):r.getParameter(r.RENDERER))},s=r=>{n.resetToA(),n.arrival.skip(),n.handOver(),n.log.clear();const o=n.obstacles.enabled();n.obstacles.setEnabled(!1);let a;try{a=r((l,c)=>{n.log.record(l),n.stepSim(l,c)})}finally{n.obstacles.setEnabled(o)}return e.mission.phase==="finished"&&n.finish(),Si(e),Promise.resolve(a)};return{data:{mode:()=>e.data.mode,manifest:()=>e.data.manifest,verifyFixtureHashes:()=>{if(!e.data.manifest)throw new Error("no manifest on a live-line boot — fixture hashes do not apply");return ux(e.data.manifest)},liveFetchThrows:async()=>{try{return await new Mc().getTileBytes(11,0,0),!1}catch{return!0}}},sim:{stepFrames:r=>{for(const o of r)n.stepSim(o,g.SIM_DT)},setInputOverride:r=>{n.inputOverride.frame=r?{...r}:null}},world:{heightAt:(r,o,a)=>t.heightAt(r,o,a),landformHeightAt:(r,o,a)=>t.landformHeightAt(r,o,a),landformDemHeightAt:(r,o)=>t.landformDemHeightAt(r,o),slopeDegAt:(r,o)=>t.slopeDegAt(r,o),waterDepthAt:(r,o)=>t.waterDepthAt(r,o),maxHeightBoundM:()=>t.maxHeightBoundM,maxHeightBoundParts:()=>t.maxHeightBoundParts,coverClassAt:(r,o)=>e.world.cover.classAt(r,o),frame:()=>({lat:e.world.frame.lat,lon:e.world.frame.lon}),lonLatToWorld:(r,o)=>ei(e.world.frame,r,o),worldToLonLat:(r,o)=>ln(e.world.frame,r,o),waterBodies:()=>e.world.water.bodies.map(r=>({id:r.id,surfaceY:r.surfaceY,areaM2:r.areaM2}))},terrain:{edgeSamples:r=>n.terrain.edgeSamples(r),setLoadRadius:r=>n.terrain.setLoadRadius(r),setFarShellVisible:r=>n.terrain.setFarShellVisible(r),drained:()=>n.terrain.drained(),drainNow:()=>n.terrain.drainNow(e),lodStats:()=>n.terrain.lodStats(),setLodFineRings:r=>n.terrain.setLodFineRings(r),stats:()=>n.terrain.stats(),recentLoads:()=>n.terrain.recentLoads(),workerSpike:()=>HR(t,n.dcKey),shellPitchAt:r=>WE(r),shellSinkAt:r=>Qd(r)},player:{pos:()=>({x:e.player.x,y:e.player.y,z:e.player.z}),setPos:(r,o)=>{Nc(e.player,r,o,t),Si(e)},yaw:()=>e.player.yaw,setYaw:r=>{e.input.current.yaw=r,e.player.yaw=r,Si(e)},pitch:()=>e.player.pitch,setPitch:r=>{e.input.current.pitch=r,e.player.pitch=r,Si(e)},mode:()=>e.player.mode,speed:()=>e.player.speedMps},mission:{phase:()=>e.mission.phase,state:()=>JSON.parse(JSON.stringify(e.mission)),result:()=>Or(e.mission),formatResult:()=>Wf(Or(e.mission)),trackSamples:()=>e.mission.track.map(r=>({...r})),a:()=>({...e.mission.a}),b:()=>({...e.mission.b}),xtd:()=>e.mission.xtdM,reset:()=>{n.resetToA(),n.arrival.start()},skipArrival:()=>n.arrival.skip()},...n.factorField?{factors:{at:(r,o)=>n.factorField.at(r,o),absentCounts:()=>n.factorField.absentCounts(),inventory:()=>n.factorField.inventory()}}:{},...n.bakeState?{bake:{hash:()=>fd(n.bakeState.baked),wallMs:()=>n.bakeState.wallMs,budget:()=>n.bakeState.budget,b1Clamped:()=>n.bakeState.b1Clamped,run:()=>{const r=n.runBake();return{hash:fd(r.baked),wallMs:r.wallMs}},constraints:()=>n.bakeState.constraints}}:{},erosion:{mode:()=>on(),setMode:r=>mi(r),shipped:()=>ga,isShipped:()=>sx(),key:()=>Zi(),stages:()=>Ma,params:()=>ji(),setParams:r=>ia(r),deltaAt:(r,o)=>t.erosionFilterAt(r,o),drainageParams:()=>Sr(),setDrainageParams:r=>sa(r),drainageAt:(r,o)=>t.drainageAt(r,o),bound:()=>zs(ji()),apply:()=>{var a;const r=performance.now();let o=!1;if(Ac())t.clearBakedBand();else if(n.runBake){const l=n.runBake();t.applyBakedBand(l.baked,l.g,l.cellM,l.halfM),o=!0}return(a=n.runDrainage)==null||a.call(n),t.setDetailOverrides(t.detailOverrides()),n.terrain.rebuildAll(),{modeKey:Zi(),bakeRan:o,wallMs:performance.now()-r}}},...n.tuner?{tuner:{overrides:()=>n.tuner.overrides(),apply:r=>n.tuner.apply(r),readout:()=>n.tuner.readout(),exportPatch:()=>n.tuner.exportPatch()}}:{},...n.stream?{stream:{stats:()=>n.stream.stats(),drained:()=>n.stream.drained(),loaded:()=>n.stream.loaded()}}:{},planner:{layers:()=>n.planner.layers(),pick:r=>n.planner.pick(r),draft:()=>n.planner.draft(),open:()=>n.planner.open(),close:()=>n.planner.close()},dressing:{census:r=>n.dressing.census(r),setVisible:r=>n.dressing.setVisible(r),visible:()=>n.dressing.visible(),fadeStats:()=>n.dressing.fadeStats()},obstacles:{near:(r,o,a)=>n.obstacles.near(r,o,a).map(l=>({x:l.x,z:l.z,r:l.r,topY:l.topY,proudM:l.proudM,planes:l.planes.length/4})),supportYAt:(r,o)=>n.obstacles.supportYAt(r,o),stats:()=>n.obstacles.stats(),setEnabled:r=>n.obstacles.setEnabled(r),enabled:()=>n.obstacles.enabled()},groundCover:{census:r=>n.groundCover.census(r),setVisible:r=>n.groundCover.setVisible(r),visible:()=>n.groundCover.visible(),settled:()=>n.groundCover.settled(),drainNow:()=>n.groundCover.drainNow(e),clumpHashes:()=>n.groundCover.clumpHashes(),clumpXZ:()=>n.groundCover.clumpXZ(),clumpRanks:()=>n.groundCover.clumpRanks(),inventory:()=>n.groundCover.inventory(),anchor:()=>n.groundCover.anchor()},boot:{timings:()=>n.bootTimings.timings(),total:()=>n.bootTimings.total(),pack:()=>n.packId},gps:{readout:()=>n.device.readout(),visible:()=>n.device.visible(),raised:()=>n.device.raised(),stowed:()=>n.device.stowed(),setStowed:r=>n.device.setStowed(r)},result:{plotStats:()=>n.result.plotStats()},camera:{setFree:(r,o,a,l,c)=>{n.freeCam.pose={x:r,y:o,z:a,yaw:l,pitch:c}},clearFree:()=>{n.freeCam.pose=null},project:(r,o,a)=>{const l=new ue(r,o,a).project(e.camera);return{u:(l.x+1)/2,v:(1-l.y)/2,inFront:l.z<1}},pose:()=>{const r=e.camera;return{x:r.position.x,y:r.position.y,z:r.position.z,yaw:-r.rotation.y,pitch:r.rotation.x,free:n.freeCam.pose!==null}}},arrival:{remainingS:()=>n.arrival.remainingS(),active:()=>n.arrival.active()},runInputScript:r=>s(o=>XR(e,r,o)),replay:r=>s(o=>$R(e,r,o)),inputLog:()=>n.log.frames.map(r=>({...r})),season:{set:r=>n.season.set(r),get:()=>n.season.get(),names:()=>n.season.names(),snapshot:()=>n.season.snapshot()},weather:{setOverride:r=>n.weather.setOverride(r),setWetOverride:r=>n.weather.setWetOverride(r),overcast:()=>n.weather.overcast(),wetness:()=>n.weather.wetness(),wetAt:(r,o,a=0,l=0)=>Ep(e.seed,r,o,a,l),at:(r,o,a=0,l=0)=>ha(e.seed,r,o,a,l),leadS:(r,o)=>Mp(r,o),setFrontOverride:r=>n.weather.setFrontOverride(r),front:()=>n.weather.front(),snapshot:()=>n.weather.snapshot()},render:{info:()=>({calls:e.renderer.info.render.calls,triangles:e.renderer.info.render.triangles}),rendererString:i,frameDeltasMs:()=>[...n.frameDeltas],gpuFrameMs:()=>n.gpuTimer.lastMs(),postSamples:()=>{var r;return((r=n.post)==null?void 0:r.samples)??null},aoEnabled:()=>{var r;return((r=n.post)==null?void 0:r.aoEnabled)??!1},aoBlend:()=>{var r;return((r=n.post)==null?void 0:r.aoBlend)??null},gpuTimerAvailable:()=>n.gpuTimer.available},setPaused:r=>{e.flags.paused=r},paused:()=>e.flags.paused,...n.compass?{compass:{visible:()=>n.compass.visible(),raised:()=>n.compass.raised(),setRaised:r=>n.compass.setRaised(r),headingDeg:()=>n.compass.headingDeg()}}:{},...n.paperMap?{paperMap:{shown:()=>n.paperMap.shown(),setShown:r=>n.paperMap.setShown(r),stats:()=>n.paperMap.stats()}}:{}}}const YR=["spring","summer","autumn","winter"],Nl=["uColValley","uColUpland","uColHigh","uColSummit","uColDry","uColHeath","uColTurfD","uColMoss"],qR=["uColRock","uColScree","uColStone","uColGrit","uColSoil","uColBare","uColPeat"],ZR={spring:10207818,summer:0,autumn:11887901,winter:14998666},jR={spring:14082799,summer:0,autumn:14206632,winter:12174028},JR={spring:16773330,summer:0,autumn:16763274,winter:14673648},QR={spring:13230218,summer:16777215,autumn:14065754,winter:13617568},ey=["litter","bracken.rust","grass.dead"],ty={spring:{"grass.fine":1.15,"grass.coarse":.9,"grass.dry":.45,moss:1.3,sedge:1.1,bracken:.8,"flower.white":.5,"flower.gold":.5},summer:{},autumn:{"grass.fine":.8,"grass.dry":1.4,"grass.dead":.5,moss:.7,bracken:0,"bracken.rust":1,litter:1,"flower.white":.15,"flower.gold":.25},winter:{"grass.fine":.5,"grass.coarse":.8,"grass.dry":.6,"grass.dead":2.2,heather:1.1,moss:.55,sedge:.7,bracken:0,"bracken.rust":.25,litter:.35,"flower.white":0,"flower.gold":0}};function ny(n){return Lt.map(e=>ty[n][e.id]??(ey.includes(e.id)?0:1))}const Il={spring:g.SEASON_SPRING_SNOW,summer:g.SEASON_SUMMER_SNOW,autumn:g.SEASON_AUTUMN_SNOW,winter:g.SEASON_WINTER_SNOW},iy=n=>{switch(n){case"spring":return{vegMix:g.SEASON_SPRING_VEG_MIX,sat:g.SEASON_SPRING_SAT,skyMix:g.SEASON_SPRING_SKY_MIX,sunMix:g.SEASON_SPRING_SUN_MIX,sunK:g.SEASON_SPRING_SUN_K};case"autumn":return{vegMix:g.SEASON_AUTUMN_VEG_MIX,sat:g.SEASON_AUTUMN_SAT,skyMix:g.SEASON_AUTUMN_SKY_MIX,sunMix:g.SEASON_AUTUMN_SUN_MIX,sunK:g.SEASON_AUTUMN_SUN_K};case"winter":return{vegMix:g.SEASON_WINTER_VEG_MIX,sat:g.SEASON_WINTER_SAT,skyMix:g.SEASON_WINTER_SKY_MIX,sunMix:g.SEASON_WINTER_SUN_MIX,sunK:g.SEASON_WINTER_SUN_K};default:return{vegMix:0,sat:1,skyMix:0,sunMix:0,sunK:1}}},Io={h:0,s:0,l:0};function Ls(n,e,t,i,s){n.copy(e),i>0&&n.lerp(t,i),s!==1&&(n.getHSL(Io),n.setHSL(Io.h,Math.min(1,Io.s*s),Io.l))}function sy(n,e,t,i){const s=(m,p)=>{const S=m.userData.uniforms;if(!S)throw new Error(`season: the ${p} material has no userData.uniforms bag to drive`);return S},r=s(e,"terrain"),o=s(t.material(),"ground cover"),a=new Map;for(const m of Nl)a.set(m,r[m].value.clone());const l={zenith:n.skyZenith.clone(),horizon:n.skyHorizon.clone(),glow:n.sunGlow.clone()},c=n.fogBands.map(m=>m.color.clone()),h=n.lights.sun.color.clone(),u=n.lights.sun.intensity,d=new Xe;let f=g.SEASON_DEFAULT;function _(m){const p=iy(m),S=new Xe(ZR[m]),v=new Xe(jR[m]),x=new Xe(JR[m]);for(const L of Nl)Ls(d,a.get(L),S,p.vegMix,p.sat),r[L].value.copy(d);Ls(d,l.zenith,v,p.skyMix,1),n.skyZenith.copy(d),Ls(d,l.horizon,v,p.skyMix,1),n.skyHorizon.copy(d),Ls(d,l.glow,v,p.skyMix,1),n.sunGlow.copy(d);for(let L=0;L<n.fogBands.length;L++)n.fogBands[L].color!==n.skyHorizon&&(Ls(d,c[L],v,p.skyMix,1),n.fogBands[L].color.copy(d));Ls(d,h,x,p.sunMix,1),n.lights.sun.color.copy(d),n.lights.sun.intensity=u*p.sunK,o.uSeasonTint.value.set(QR[m]),r.uSnow.value.x=Il[m],i.setSnow(Il[m]),t.setSeasonSpecies(ny(m),Il[m]),f=m}function M(){const m={};for(const p of[...Nl,...qR])m[p]=r[p].value.getHex();m.skyZenith=n.skyZenith.getHex(),m.skyHorizon=n.skyHorizon.getHex(),m.sunGlow=n.sunGlow.getHex(),m.sunColor=n.lights.sun.color.getHex(),m.sunIntensityMilli=Math.round(n.lights.sun.intensity*1e3),m.coverTint=o.uSeasonTint.value.getHex(),m.snowMilli=Math.round(r.uSnow.value.x*1e3),m.rockSnowMilli=Math.round(i.snow()*1e3);for(let p=0;p<n.fogBands.length;p++)m[`fog${p}`]=n.fogBands[p].color.getHex();return m}return _(f),{set:_,get:()=>f,names:()=>YR,snapshot:M,dispose:()=>{_("summer")}}}const Do=2,ry=4,Ps=8;function oy(n,e,t){const i=performance.now(),s=n.detailBand,{phaseX:r,phaseZ:o}=n.detailPhaseXZ,a=n.demCellM,l=s.windowM,c=s.waves.length===0?8:Math.max(32,Math.min(128,ry*Math.round(l/s.waves[s.waves.length-1]))),h=Uf(n.water);let u=0,d=0,f=0,_=0,M=0,m=0;for(let B=-Do;B<Do;B++)for(let V=-Do;V<Do;V++){let ee=0,Y=!0;for(let j=0;j<c;j++)for(let J=0;J<c;J++){const he=(B+(j+.5)/c)*l-r,Ae=(V+(J+.5)/c)*l-o,pe=n.detailAt(he,Ae);ee+=pe,u+=pe,d+=pe*pe,f++,Math.abs(pe)>_&&(_=Math.abs(pe)),Y&&j%4===0&&J%4===0&&h(he,Ae,s.gateM)<1&&(Y=!1)}Y&&(m++,M=Math.max(M,Math.abs(ee/(c*c))))}const p=f>0?Math.sqrt(Math.max(0,d/f-(u/f)**2)):0,S=(B,V)=>{let ee=0;for(let Y=0;Y<Ps;Y++)for(let j=0;j<Ps;j++)ee+=n.detailAt((B+(Y+.5)/Ps)*a-r,(V+(j+.5)/Ps)*a-o);return ee/(Ps*Ps)},v=24;let x=0,L=0,R=[];for(let B=-v;B<v;B++){const V=[];for(let ee=-v;ee<v;ee++){const Y=S(B,ee);V.push(Y),Math.abs(Y)>L&&(L=Math.abs(Y)),ee>-v&&(x=Math.max(x,Math.abs(Y-V[V.length-2]))),R.length>0&&(x=Math.max(x,Math.abs(Y-R[V.length-1])))}R=V}const A=Math.sin(t),w=-Math.cos(t);let y=0,E=0,T=-1/0,P=0,z=0;for(let B=0;B<=1200;B+=5){const V=e.x+A*B,ee=e.z+w*B,Y=n.detailAt(V,ee);Y>y&&(y=Y),Y<E&&(E=Y);const j=n.landformHeightAt(V,ee);j>T&&(T=j,P=B,z=Y)}const O=1e-9*Math.max(1,p);return{sdM:p,peakM:_,maxPostMeanM:L,maxStepPerPostM:x,worstWindowMeanM:M,clearWindows:m,windowBarM:O,zeroMeanOk:m>0&&M<=O,crestLiftM:z,maxLiftM:y,hollowDropM:E,crestAtM:P,windowM:l,ms:performance.now()-i}}const Vt=g,vp=[{key:"rmsM",label:"noise RMS (m)",tuning:"TERRAIN_DETAIL_RMS_M",min:0,max:20,step:.1,def:Vt.TERRAIN_DETAIL_RMS_M},{key:"H",label:"roughness H",tuning:"TERRAIN_DETAIL_H",min:.2,max:1.5,step:.01,def:Vt.TERRAIN_DETAIL_H},{key:"ridgeGain",label:"ridge gain",tuning:"TERRAIN_DETAIL_RIDGE_GAIN",min:0,max:6,step:.05,def:Vt.TERRAIN_DETAIL_RIDGE_GAIN},{key:"ridgeOctaves",label:"ridge octaves",tuning:"TERRAIN_DETAIL_RIDGE_OCTAVES",min:0,max:6,step:1,def:Vt.TERRAIN_DETAIL_RIDGE_OCTAVES},{key:"ridgeCap",label:"ridge cap (× λ)",tuning:"TERRAIN_DETAIL_RIDGE_CAP",min:0,max:.4,step:.005,def:Vt.TERRAIN_DETAIL_RIDGE_CAP},{key:"aniso",label:"anisotropy",tuning:"TERRAIN_DETAIL_ANISO",min:1,max:8,step:.1,def:Vt.TERRAIN_DETAIL_ANISO},{key:"wander",label:"rib wander",tuning:"TERRAIN_DETAIL_WANDER",min:0,max:3,step:.05,def:Vt.TERRAIN_DETAIL_WANDER},{key:"slopeFloor",label:"slope floor",tuning:"TERRAIN_DETAIL_SLOPE_FLOOR",min:0,max:1,step:.01,def:Vt.TERRAIN_DETAIL_SLOPE_FLOOR},{key:"slopeLoDeg",label:"slope lo (°)",tuning:"TERRAIN_DETAIL_SLOPE_LO_DEG",min:0,max:45,step:1,def:Vt.TERRAIN_DETAIL_SLOPE_LO_DEG},{key:"slopeHiDeg",label:"slope hi (°)",tuning:"TERRAIN_DETAIL_SLOPE_HI_DEG",min:5,max:70,step:1,def:Vt.TERRAIN_DETAIL_SLOPE_HI_DEG},{key:"ravineDepthM",label:"ravine depth (m)",tuning:"RAVINE_DEPTH_M",min:0,max:24,step:.5,def:Vt.RAVINE_DEPTH_M},{key:"ravineLevels",label:"ravine levels",tuning:"RAVINE_LEVELS",min:0,max:5,step:1,def:Vt.RAVINE_LEVELS},{key:"grainAmpM",label:"geo grain (m)",tuning:"GRAIN_AMP_M",min:0,max:16,step:.1,def:Vt.GRAIN_AMP_M},{key:"taper",label:"DC taper",tuning:"TERRAIN_DETAIL_TAPER",min:.02,max:.49,step:.01,def:Vt.TERRAIN_DETAIL_TAPER},{key:"windowPosts",label:"window (posts)",tuning:"TERRAIN_DETAIL_WINDOW_POSTS",min:4,max:64,step:1,def:Vt.TERRAIN_DETAIL_WINDOW_POSTS}],xp=[{key:"reposeDeg",label:"repose gate (°)",tuning:null,min:0,max:45,step:1,def:0},{key:"elevGainPerKm",label:"elev gain /km",tuning:null,min:-3,max:3,step:.05,def:0},{key:"elevRefM",label:"…pivot (m)",tuning:null,min:0,max:2e3,step:25,def:500},{key:"hVary",label:"H variation ±",tuning:null,min:0,max:1,step:.01,def:0}],Os=[...vp,...xp],ay=`
.tuner{position:absolute;left:0.75rem;top:0.75rem;width:288px;max-height:calc(100vh - 1.5rem);display:flex;flex-direction:column;
  pointer-events:auto;background:rgba(18,20,22,0.93);border:1px solid rgba(160,175,165,0.3);border-radius:0.6rem;
  font-family:ui-monospace,Menlo,Consolas,monospace;font-size:0.68rem;color:#cfd6d0}
.tuner-head{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding:0.45rem 0.55rem;border-bottom:1px solid rgba(160,175,165,0.2)}
.tuner-title{color:#e6ece7;letter-spacing:0.04em}
.tuner-body{overflow-y:auto;padding:0.4rem 0.55rem 0.55rem}
.tuner-body.hidden{display:none}
.tuner-sec{margin:0.5rem 0 0.25rem;color:#8fbf9a;letter-spacing:0.05em;cursor:pointer;user-select:none;
  display:flex;align-items:center;gap:0.3rem}
.tuner-sec:hover{color:#b6e0bf}
.tuner-caret{width:0.6rem;display:inline-block;color:#6f7d73}
.tuner-secbody.collapsed{display:none}
.tuner-note{color:#c9a227;margin:0.1rem 0 0.3rem;line-height:1.35}
.tuner-secbody.inert{opacity:0.42}
.tuner-stage{padding:0.12rem 0.3rem}
.tuner-stage.on{color:#0d1410;background:#8fbf9a;border-color:#8fbf9a}
.tuner-apply-dirty{color:#0d1410;background:#e8c07a;border-color:#e8c07a}
.tuner-sec:first-child{margin-top:0}
.tuner-row{display:grid;grid-template-columns:88px 1fr 52px;align-items:center;gap:0.3rem;margin-bottom:0.16rem}
.tuner-row.changed .tuner-label{color:#e8c07a}
.tuner-label{color:#8a948c;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tuner-row input[type=range]{width:100%;height:12px;accent-color:#8fbf9a}
.tuner-row input[type=number]{width:100%;box-sizing:border-box;background:rgba(0,0,0,0.35);color:#cfd6d0;border:1px solid rgba(160,175,165,0.25);
  border-radius:0.2rem;font:inherit;padding:1px 2px;-moz-appearance:textfield}
.tuner-arow{display:grid;grid-template-columns:74px 1fr 40px 30px;align-items:center;gap:0.3rem;margin-bottom:0.16rem}
.tuner-arow input[type=range]{width:100%;height:12px;accent-color:#7fb0d8}
.tuner-arow .v{color:#cfd6d0;text-align:right}
.tuner-arow .auto{accent-color:#7fb0d8}
.tuner-seasons{display:flex;gap:0.25rem;margin-bottom:0.3rem}
.tuner-seasons button{flex:1;background:rgba(0,0,0,0.35);color:#8a948c;border:1px solid rgba(160,175,165,0.25);
  border-radius:0.2rem;font:inherit;padding:2px 0;cursor:pointer}
.tuner-seasons button.on{color:#0f1113;background:#7fb0d8;border-color:#7fb0d8}
.tuner-btns{display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.5rem}
.tuner button{pointer-events:auto;background:rgba(60,70,64,0.9);color:#cfd6d0;border:1px solid rgba(160,175,165,0.3);
  border-radius:0.25rem;font:inherit;padding:0.2rem 0.45rem;cursor:pointer}
.tuner button:hover{background:rgba(80,95,85,0.95)}
.tuner button.on{background:#8fbf9a;color:#12181a;border-color:#8fbf9a}
.tuner-read{margin-top:0.5rem;padding-top:0.4rem;border-top:1px solid rgba(160,175,165,0.2);line-height:1.5}
.tuner-read div{display:flex;justify-content:space-between;gap:0.5rem}
.tuner-read .k{color:#8a948c}
.tuner-read .bad{color:#e07a7a}
.tuner-read .good{color:#8fbf9a}
.tuner-out{width:100%;box-sizing:border-box;height:104px;margin-top:0.4rem;display:none;background:rgba(0,0,0,0.45);color:#cfd6d0;
  border:1px solid rgba(160,175,165,0.25);border-radius:0.25rem;font:inherit;font-size:0.62rem;resize:vertical;white-space:pre}
.tuner-out.shown{display:block}
`,Bt=(n,e=3)=>Number.isFinite(n)?n.toFixed(e):"—";function ly(n,e){const t=n.world.query,i=document.createElement("style");i.textContent=ay,document.head.appendChild(i);const s=Ve("div","tuner",n.ui.root??document.body),r=Ve("div","tuner-head",s);Ve("span","tuner-title",r).textContent="DEV TUNER";const o=Ve("button","",r);o.textContent="−";const a=Ve("div","tuner-body",s),l=new Map(Os.map(N=>[N.key,N.def])),c=new Map;let h=!1,u=null;const d=(N,K)=>{const C=Ve("div","tuner-row",K);Ve("span","tuner-label",C).textContent=N.label;const G=Ve("input","",C);G.type="range";const Z=Ve("input","",C);Z.type="number";for(const Me of[G,Z])Me.min=String(N.min),Me.max=String(N.max),Me.step=String(N.step),Me.value=String(N.def);G.title=N.tuning??`${String(N.key)} — a CANDIDATE term with no tuning.ts constant yet`,G.addEventListener("input",()=>{Z.value=G.value}),G.addEventListener("change",()=>ye(N.key,Number(G.value))),Z.addEventListener("change",()=>ye(N.key,Number(Z.value))),c.set(N.key,{wrap:C,range:G,num:Z})},f=(()=>{try{return new URLSearchParams(location.search).get("tune")}catch{return null}})(),_=(N,K,C=!1)=>{const G=Ve("div","tuner-sec",a),Z=Ve("span","tuner-caret",G);Ve("span","",G).textContent=N;const Me=Ve("div","tuner-secbody",a),we=f==="filter"&&!C;return we&&Me.classList.add("collapsed"),Z.textContent=we?"▸":"▾",K&&(Ve("div","tuner-note",Me).textContent=K),G.addEventListener("click",()=>{const De=Me.classList.toggle("collapsed");Z.textContent=De?"▸":"▾"}),Me},M=_("SHIPPED CONSTANTS","live — applies when you release a slider");vp.forEach(N=>d(N,M));const m=_("CANDIDATES (0 = off)","live — terms with no tuning.ts constant yet");xp.forEach(N=>d(N,m));const p=_("EROSION STAGES","needs APPLY — a stage flip re-bakes the world (~21 s)",!0),S=Ve("div","tuner-seasons",p),v=new Map;for(const N of e.erosion.stages()){const K=Ve("button","",S);K.dataset.stage=N,K.title=`${N} — click to toggle, then press APPLY`,K.addEventListener("click",()=>{const C=e.erosion.mode();e.erosion.setMode({[N]:!C[N]}),J()}),v.set(N,K)}const x=Ve("div","tuner-seasons",p),L=(N,K,C)=>{const G=Ve("button","",x);G.textContent=N,G.title=K,G.addEventListener("click",()=>{e.erosion.setMode(C),J()})};Ve("div","tuner-note",p).textContent="presets — fastest way to a known state:",L("solo","filter ONLY — the owner's A/B: every simulated stage off",{thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!0}),L("sim","the shipped simulated stack, filter off",{thermal:!0,streamPower:!0,ravine:!0,grain:!0,filter:!1}),L("bare","no erosion at all — the measured DEM alone",{thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!1});const R=[{key:"scale",label:"filter scale (m)",min:10,max:2e3,step:10},{key:"strength",label:"filter strength",min:0,max:.2,step:.001},{key:"gullyWeight",label:"gully weight",min:0,max:1,step:.01},{key:"detail",label:"detail",min:.3,max:4,step:.05},{key:"octaves",label:"octaves (cost!)",min:1,max:7,step:1},{key:"gain",label:"gain",min:.2,max:.8,step:.01},{key:"lacunarity",label:"lacunarity",min:1.4,max:3,step:.05},{key:"cellScale",label:"cell scale",min:.3,max:1.6,step:.05},{key:"normalization",label:"normalization",min:0,max:1,step:.02}],A=new Map,w=_("FILTER (wXcfWn, MPL-2.0)",void 0,!0),y=Ve("div","tuner-note",w);for(const N of R){const K=Ve("div","tuner-row",w);Ve("span","tuner-label",K).textContent=N.label;const C=Ve("input","",K);C.type="range";const G=Ve("input","",K);G.type="number";const Z=Number(e.erosion.params()[N.key]??0);for(const Me of[C,G])Me.min=String(N.min),Me.max=String(N.max),Me.step=String(N.step),Me.value=String(Z);C.addEventListener("input",()=>{G.value=C.value}),C.addEventListener("change",()=>{e.erosion.setParams({[N.key]:Number(C.value)}),J()}),G.addEventListener("change",()=>{e.erosion.setParams({[N.key]:Number(G.value)}),J()}),A.set(N.key,{range:C,num:G})}const E=[{key:"skirtDepthM",label:"interfluve depth (m)",min:0,max:8,step:.25},{key:"skirtRadiusM",label:"interfluve reach (m)",min:10,max:90,step:5},{key:"channelAreaM2",label:"channel area (m²) ↓=denser",min:2e3,max:6e4,step:1e3},{key:"depthMaxM",label:"gully depth cap (m)",min:2,max:40,step:1},{key:"bankDeg",label:"bank angle (°)",min:15,max:60,step:1},{key:"headTaperM",label:"head taper (m)",min:0,max:300,step:10},{key:"perturbRmsM",label:"routing noise (m RMS)",min:0,max:12,step:.5},{key:"cellM",label:"grid (m) ↓=finer, SLOW",min:4,max:20,step:1},{key:"evolveIterations",label:"evolve iterations",min:0,max:500,step:10},{key:"evolveK",label:"erodibility K",min:0,max:6e-5,step:1e-6},{key:"evolveDtYears",label:"Δt per iteration (yr)",min:25,max:800,step:25},{key:"diffuseCFL",label:"hillslope creep",min:0,max:.2,step:.005},{key:"amplifyLoM",label:"amplify band lo (m)",min:0,max:200,step:5},{key:"amplifyHiM",label:"amplify band hi (m)",min:0,max:1200,step:25},{key:"amplifyGain",label:"amplify gain (1 = off)",min:1,max:5,step:.1}],T=new Map,P=_("DRAINAGE CARVE","needs APPLY — re-runs the whole evolution (seconds to ~25 s)",!0),z=Ve("div","tuner-note",P);for(const N of E){const K=Ve("div","tuner-row",P);Ve("span","tuner-label",K).textContent=N.label;const C=Ve("input","",K);C.type="range";const G=Ve("input","",K);G.type="number";const Z=Number(e.erosion.drainageParams()[N.key]??0);for(const Me of[C,G])Me.min=String(N.min),Me.max=String(N.max),Me.step=String(N.step),Me.value=String(Z);C.addEventListener("input",()=>{G.value=C.value}),C.addEventListener("change",()=>{e.erosion.setDrainageParams({[N.key]:Number(C.value)}),J()}),G.addEventListener("change",()=>{e.erosion.setDrainageParams({[N.key]:Number(G.value)}),J()}),T.set(N.key,{range:C,num:G})}const O=Ve("div","tuner-out",P),B=Ve("div","tuner-seasons",p),V=Ve("button","",B);V.textContent="APPLY",V.title="rebake + rebuild the world with the current stages and parameters";const ee=Ve("div","tuner-out",p);let Y=null,j="";V.addEventListener("click",()=>{V.textContent="working…",ee.textContent="rebuilding — the filter costs ~4.6 us a sample, so this is seconds, not frames",requestAnimationFrame(()=>requestAnimationFrame(()=>{Y=e.erosion.apply(),j=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`,V.textContent="APPLY",J()}))});function J(){const N=e.erosion.mode();for(const[Ge,Ue]of v){const qe=!!N[Ge],ze=Ge==="streamPower"?"flow":Ge.slice(0,5);Ue.textContent=`${ze} ${qe?"ON":"off"}`,Ue.classList.toggle("on",qe),Ue.style.opacity=qe?"1":"0.55"}const K=!!N.drainage;z.textContent=K?"stage ON — change a slider, then press APPLY":'stage OFF — these sliders set the parameters but reach nothing. Click "drain" above (or use ?tune=drainage), then APPLY.';for(const[Ge,Ue]of T){const qe=Number(e.erosion.drainageParams()[Ge]??0);Ue.range.value=String(qe),Ue.num.value=String(qe)}const C=e.erosion.drainageStats();O.textContent=C?`${C.channelCells} channels · density ${C.densityKmPerKm2.toFixed(1)} km/km² · spacing ${C.spacingM.toFixed(0)} m · gully p90 ${C.depthP90M.toFixed(1)} m · ${C.wallMs.toFixed(0)} ms`:"no network built yet — turn the stage on and press APPLY";const G=!!N.filter;w.classList.toggle("inert",!G),y.textContent=G?"stage ON — change a slider, then press APPLY":'stage OFF — these sliders set the parameters but reach nothing. Click "filte" or the "solo" preset above, then APPLY.';const Me=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`!==j;V.classList.toggle("tuner-apply-dirty",Me),V.textContent=Me?"APPLY ●":"APPLY";const we=e.erosion.params();for(const[Ge,Ue]of A){const qe=String(Number(we[Ge]??0));Ue.range.value=qe,Ue.num.value=qe}const De=Y?`${(Y.wallMs/1e3).toFixed(1)} s${Y.bakeRan?" (incl. bake)":" (bake skipped)"}`:"not applied yet";ee.textContent=`mode ${Object.entries(N).filter(([,Ge])=>Ge).map(([Ge])=>Ge).join("+")||"none"} · filter bound ±${e.erosion.bound().toFixed(1)} m · last APPLY ${De}`}j=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`,J();const he=_("ATMOSPHERE","live — season, weather, wetness, front"),Ae=_("A/B — UNCHECK TO REMOVE A CHANGE","live: quiet, grain streak · re-places: hue, warp",!0),pe=(N,K,C,G)=>{const Z=Ve("div","tuner-arow",Ae),Me=Ve("input","",Z);Me.type="checkbox",Me.checked=C(),Me.title=K,Ve("span","tuner-label",Z).textContent=N,Me.addEventListener("change",()=>G(Me.checked))};pe("D231 lattice warp","OFF = the rigid 3 m placement grid (S(k) 235.5 where cover is sparse). Re-places the ring.",()=>Nn.latticeWarp,N=>{Nn.latticeWarp=N,e.ab.invalidateCover()}),pe("D225 hue jitter","OFF = the pre-D225 tone-only tint (brightness varies, hue does not). Re-places the ring.",()=>Nn.hueJitter,N=>{Nn.hueJitter=N,e.ab.invalidateCover()}),pe("TERRAIN_QUIET","OFF = full walking-scale luminance contrast in the near field. Live.",()=>Nn.quiet,N=>{var G;Nn.quiet=N;const K=e.ab.uniforms(),C=(G=K==null?void 0:K.uQuiet)==null?void 0:G.value;C&&(C.x=N?g.TERRAIN_QUIET:0)}),pe("grain fall-line smear","OFF = an isotropic grain (no 3-tap smear down the fall line). Live.",()=>Nn.grainStreak,N=>{Nn.grainStreak=N;const K=e.ab.uniforms();K!=null&&K.uGrainStreak&&(K.uGrainStreak.value=N?g.TERRAIN_GRAIN_STREAK_W:0)}),Ve("div","tuner-hint",Ae).textContent="D223 (variant shapes) is baked into the kit geometry at construction and cannot be toggled here — listed so it is not silently missing.";const re=_("TELEPORT","A / mid / B jump in-place · site buttons reload into that pack",!0),X=Ve("div","tuner-arow",re),se=(N,K)=>{const C=Ve("button","tuner-btn",X);C.textContent=N,C.addEventListener("click",()=>{const G=K();e.nav.teleport(G.x,G.z)})};se("A (S1)",()=>n.mission.a),se("midpoint (S2)",()=>({x:(n.mission.a.x+n.mission.b.x)/2,z:(n.mission.a.z+n.mission.b.z)/2})),se("B (S5)",()=>n.mission.b);const W=Ve("div","tuner-arow",re);for(const N of["tier1","prairie","cairngorms","sierra","namib","longline","shortline","sundance"]){const K=Ve("button","tuner-btn",W);K.textContent=N,K.addEventListener("click",()=>{const C=new URLSearchParams(location.search);N==="tier1"?C.delete("pack"):C.set("pack",N),C.set("devtuner","1"),location.search=C.toString()})}Ve("div","tuner-hint",re).textContent="site buttons RELOAD into that fixture pack (tier1 = the default world). A teleport cannot cross packs.";const Q=Ve("div","tuner-seasons",he),oe=new Map;for(const N of e.season.names()){const K=Ve("button","",Q);K.textContent=N.slice(0,3),K.title=`season = ${N} (cosmetic — outside lineHashInput, D92, so PBs stay comparable)`,K.addEventListener("click",()=>{e.season.set(N),U()}),oe.set(N,K)}const ie=(N,K,C,G,Z,Me)=>{const we=Ve("div","tuner-arow",he);Ve("span","tuner-label",we).textContent=N;const De=Ve("input","",we);De.type="range",De.min=String(K),De.max=String(C),De.step=String(G),De.value=String(K);const Ge=Ve("span","v",we),Ue=Ve("input","auto",we);Ue.type="checkbox",Ue.checked=!0,Ue.title="auto = follow sim time (override null)";const qe=()=>{Ue.checked?Z(null):Z(Number(De.value))};return De.addEventListener("input",()=>{Ue.checked&&(Ue.checked=!1),qe(),U()}),Ue.addEventListener("change",()=>{qe(),U()}),{range:De,val:Ge,auto:Ue,live:Me}},de=ie("overcast",0,1,.01,N=>e.weather.setOverride(N),()=>e.weather.overcast()),D=ie("wetness",0,1,.01,N=>e.weather.setWetOverride(N),()=>e.weather.wetness()),le=ie("front grad",0,.002,1e-5,N=>e.weather.setFrontOverride(N),()=>e.weather.front().dOvercastPerM);function U(){const N=e.season.get();for(const[K,C]of oe)C.classList.toggle("on",K===N);for(const K of[de,D,le]){const C=K.live();K.val.textContent=Number.isFinite(C)?C<.01?C.toExponential(1):C.toFixed(2):"—",K.auto.checked&&(K.range.value=String(C))}}const F=window.setInterval(U,250);U();function k(){e.weather.setOverride(null),e.weather.setWetOverride(null),e.weather.setFrontOverride(null);for(const N of[de,D,le])N.auto.checked=!0;U()}const $=Ve("div","tuner-btns",a),te=Ve("button","",$),ce=Ve("button","",$),I=Ve("button","",$);ce.textContent="reset",I.textContent="export";const b=Ve("div","tuner-read",a),q=N=>{const K=Ve("div","",b);return Ve("span","k",K).textContent=N,Ve("span","",K)},fe=q("delivered RMS"),ve=q("peak |residual|"),xe=q("max Δ / DEM post"),Oe=q("post-to-post step"),Ie=q("S2 crest lift"),Le=q("S2 axis +/−"),Be=q("zero-mean"),ne=q("probe cost"),_e=Ve("textarea","tuner-out",a);_e.readOnly=!0,_e.spellcheck=!1;function Te(){const N={};for(const K of Os){const C=l.get(K.key);C!==K.def&&(N[K.key]=C)}return h&&(N.rmsM=0,N.ridgeGain=0),N}function Ce(){t.setDetailOverrides(Te()),e.rebuildTerrain(),e.invalidateDressing(),e.invalidateGroundCover(),e.invalidateColliders(),Ne(),Pe()}function ye(N,K){Number.isFinite(K)&&(l.set(N,K),Ce())}function Ne(){const N=n.mission;u=oy(t,{x:(N.a.x+N.b.x)/2,z:(N.a.z+N.b.z)/2},N.bearingRad)}function Pe(){for(const N of Os){const K=c.get(N.key),C=l.get(N.key);K.range.value=String(C),K.num.value=String(C),K.wrap.classList.toggle("changed",C!==N.def)}te.textContent=h?"residual OFF":"residual on",te.classList.toggle("on",h),u&&(fe.textContent=`${Bt(u.sdM)} m`,ve.textContent=`${Bt(u.peakM,2)} m`,xe.textContent=`${Bt(u.maxPostMeanM,2)} m`,Oe.textContent=`${Bt(u.maxStepPerPostM,2)} m`,Ie.textContent=`${Bt(u.crestLiftM,2)} m @ ${u.crestAtM.toFixed(0)} m`,Le.textContent=`+${Bt(u.maxLiftM,2)} / ${Bt(u.hollowDropM,2)} m`,Be.textContent=u.zeroMeanOk?`ok (${u.worstWindowMeanM.toExponential(1)} m)`:`BROKEN ${Bt(u.worstWindowMeanM,4)} m`,Be.className=u.zeroMeanOk?"good":"bad",ne.textContent=`${u.ms.toFixed(0)} ms · ${u.windowM.toFixed(0)} m window`)}function ae(){const N=Os.filter(Z=>l.get(Z.key)!==Z.def);if(N.length===0&&!h)return"// no change from the shipped constants";const K=["// src/config/tuning.ts — from a dev-tuner session (roadmap item 53)."];h&&K.push("// NOTE: the A/B toggle is OFF-state; these are the values BEHIND it, not what you are looking at.");const C=N.filter(Z=>Z.tuning),G=N.filter(Z=>!Z.tuning);if(C.length>0){K.push("","// replace these lines (keep each line's existing trailing comment — it carries the measurement):");for(const Z of C)K.push(`  ${Z.tuning}: ${l.get(Z.key)}, // was ${Z.def}`)}if(G.length>0){K.push("","// CANDIDATE terms — no tuning.ts constant exists yet. They are read in","// src/fields/terrainDetail.ts via DetailOverrides; give each a TUNING constant and a","// default in makeTerrainDetail to ship it:");for(const Z of G)K.push(`//   ${String(Z.key)} = ${l.get(Z.key)}  (default ${Z.def})`)}return u&&K.push("",`// measured at this setting: delivered RMS ${Bt(u.sdM)} m · peak ${Bt(u.peakM,2)} m ·`,`// max Δ/post ${Bt(u.maxPostMeanM,2)} m (step ${Bt(u.maxStepPerPostM,2)} m) · S2 crest lift ${Bt(u.crestLiftM,2)} m @ ${u.crestAtM.toFixed(0)} m ·`,`// S2 axis +${Bt(u.maxLiftM,2)}/${Bt(u.hollowDropM,2)} m ·`,`// zero-mean over ${u.windowM.toFixed(0)} m ${u.zeroMeanOk?"HOLDS":`BROKEN (${Bt(u.worstWindowMeanM,4)} m)`}`),K.join(`
`)}return te.addEventListener("click",()=>{h=!h,Ce()}),ce.addEventListener("click",()=>{for(const N of Os)l.set(N.key,N.def);h=!1,Ce(),k()}),I.addEventListener("click",()=>{var N;_e.value=ae(),_e.classList.add("shown"),_e.select(),(N=navigator.clipboard)==null||N.writeText(_e.value).catch(()=>{})}),o.addEventListener("click",()=>{const N=a.classList.toggle("hidden");o.textContent=N?"+":"−"}),Ne(),Pe(),{overrides:Te,apply(N){for(const K of Os)l.set(K.key,N[K.key]??K.def);h=!1,Ce()},readout:()=>u,exportPatch:ae,setVisible(N){s.style.display=N?"flex":"none"},dispose(){window.clearInterval(F),k(),s.remove(),i.remove()}}}const fi={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",up:"Space",down:"KeyC",boostA:"ShiftLeft",boostB:"ShiftRight"},cy=n=>n instanceof HTMLElement&&(n.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n.tagName));function hy(){const n=new Set;let e=!1;const t=s=>{cy(s.target)||(s.type==="keydown"?n.add(s.code):n.delete(s.code))},i=()=>n.clear();return window.addEventListener("keydown",t),window.addEventListener("keyup",t),window.addEventListener("blur",i),{active:()=>e,toggle(s){return e=!e,n.clear(),e||(s.player.y=s.world.query.heightAt(s.player.x,s.player.z)),s.player.speedMps=0,e},update(s,r){const o=s.player,a=n.has(fi.boostA)||n.has(fi.boostB)?g.FLY_BOOST:1,l=g.FLY_SPEED_MPS*a*r,c=(n.has(fi.fwd)?1:0)-(n.has(fi.back)?1:0),h=(n.has(fi.right)?1:0)-(n.has(fi.left)?1:0),u=(n.has(fi.up)?1:0)-(n.has(fi.down)?1:0),d=Math.cos(o.pitch),f=Math.sin(o.yaw)*d,_=Math.sin(o.pitch),M=-Math.cos(o.yaw)*d,m=Math.cos(o.yaw),p=Math.sin(o.yaw);o.x+=(f*c+m*h)*l,o.z+=(M*c+p*h)*l,o.y+=(_*c+u)*l,o.speedMps=Math.hypot(f*c+m*h,M*c+p*h)*g.FLY_SPEED_MPS*a,o.groundY=s.world.query.heightAt(o.x,o.z)},dispose(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",t),window.removeEventListener("blur",i)}}}function uy(){const n=new URLSearchParams(location.search),e=n.get("pack"),t=n.get("packdir"),i=t&&/^[a-z0-9-]+$/i.test(t)?t:"lines";return e&&/^[a-z0-9-]+$/i.test(e)?{id:e,url:`/fixtures/${i}/${e}/tiles/manifest.json`}:{id:"tier-1",url:null}}const Fr=()=>["localhost","127.0.0.1","::1",""].includes(location.hostname);Fr()&&new URLSearchParams(location.search).get("devtuner")==="1"&&(Gt.devTuner=!0);const Dl=Fr()?new URLSearchParams(location.search).get("shellwarp"):null;if(Dl!==null&&Dl!==""){Gt.devTuner=!0;const n=VE(Number(Dl));console.log(`[shell] ring warp overridden to ${n} (shipped ${g.FAR_SHELL_RING_WARP}) — harness-local`)}const pi=Fr()?new URLSearchParams(location.search).get("tune"):null;if(pi){Gt.devTuner=!0;const n={thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!1,drainage:!1};pi==="filter"?mi({...n,filter:!0}):pi==="drainage"?mi({...n,drainage:!0}):pi==="full"?(mi({...n,drainage:!0,filter:!0}),ia(rx)):pi==="amplify"?(mi({...n,drainage:!0}),sa({evolveIterations:0,channelAreaM2:1e12,skirtDepthM:0,cellM:10,amplifyLoM:25,amplifyHiM:200,amplifyGain:1.8,shoreTaperM:250})):pi==="repro"?(mi({...n,drainage:!0,filter:!0}),sa({flattenRadiusM:420,evolveIterations:0,channelAreaM2:1e12,skirtDepthM:0,cellM:10,shoreTaperM:300}),ia(ox)):pi==="bare"&&mi(n)}const dy=()=>{const n=new URLSearchParams(location.search);return Gt.plannerFirst&&!n.has("mp")&&!n.has("pack")};let pn=null,Us=null;async function fy(){dy()&&(Us=hd(document.body),pn=await Us.openEntry());const n=nR(),e=pn!==null&&!(Fr()&&new URLSearchParams(location.search).get("entrysrc")==="fixtures"),t=e?"live-line":Gt.liveTiles?"live":"fixtures";globalThis.__DATA_MODE=t==="fixtures"?"fixtures":"live";const i=new URLSearchParams(location.search),s=i.get("logdepth")==="1",r=i.get("aa")!=="0",o=Number(i.get("near")),a=new PE({antialias:r,logarithmicDepthBuffer:s});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.shadowMap.enabled=!1,document.body.appendChild(a.domElement);const l=fR(a.getContext());a.info.autoReset=!1;const c=new OE,h=new mn(g.CAMERA_FOV,window.innerWidth/window.innerHeight,Number.isFinite(o)&&o>0?o:g.CAMERA_NEAR,g.CAMERA_FAR);c.add(h);const u=["localhost","127.0.0.1","::1",""].includes(location.hostname),d=i.get("ao")==="1";d&&!u&&console.warn("[beeline] ?ao=1 ignored: ambient occlusion is a known-broken local-only diagnostic (D144).");const f=UR(NR),_=IR(a.getContext().getParameter(WebGL2RenderingContext.MAX_SAMPLES)),M=PR(DR(f),_),m=Number(i.get("samples")),p=Number.isFinite(m)&&i.has("samples")?m:r?M.aaSamples:0,S=i.get("post")==="0"?null:bR(a,c,h,p,d&&u,Number(i.get("aoscale")??1),Number(i.get("aooutput")??0),Number(i.get("aoblend")??1));window.addEventListener("resize",()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),S==null||S.setSize(window.innerWidth,window.innerHeight)});const v=uy(),x=Ee=>n.mark(Ee);let L=null,R=null,A=0,w=null,y=null,E={};for(;e&&pn;){const Ee=pn,be=Mx(document.body);try{const Fe=bf({a:Ee.a,b:Ee.b,nearZoom:g.SURVEY_NEAR_ZOOM,nearMarginM:g.SURVEY_NEAR_MARGIN_M,coarse:[{zoom:11,radiusM:g.SURVEY_FAR_HALF_M},{zoom:9,radiusM:g.CORRIDOR_OUTER_RADIUS_M}]});be.stage("land cover");const Ye=await _x(Fe.frame,{x0:Math.min(Fe.a.x,Fe.b.x),x1:Math.max(Fe.a.x,Fe.b.x),z0:Math.min(Fe.a.z,Fe.b.z),z1:Math.max(Fe.a.z,Fe.b.z)},g.SURVEY_NEAR_MARGIN_M,Se=>be.progress(Se.done,Se.total));be.stage(`elevation — ${Fe.tiles.length} tiles${Ye?"":" · land cover unavailable — the land check will be skipped for this walk"}`);let lt=0,Et=0;const gn=new Mc,cn=await hx(Fe,{getTileBytes:async(Se,Re,ge)=>{const ke=await gn.getTileBytes(Se,Re,ge);return Et+=ke.length,be.progress(++lt,Fe.tiles.length),ke}},Ye?{grid:Ye.grid}:null);be.stage("soil factors");const bi={minLon:Math.min(Ee.a.lon,Ee.b.lon),maxLon:Math.max(Ee.a.lon,Ee.b.lon),minLat:Math.min(Ee.a.lat,Ee.b.lat),maxLat:Math.max(Ee.a.lat,Ee.b.lat)},Hr=(Ee.a.lat+Ee.b.lat)/2,Vr=g.SURVEY_NEAR_MARGIN_M/111320,Wr=g.SURVEY_NEAR_MARGIN_M/(111320*Math.cos(Hr*Math.PI/180)),Aa={minLon:bi.minLon-Wr,maxLon:bi.maxLon+Wr,minLat:bi.minLat-Vr,maxLat:bi.maxLat+Vr},H=await pS(Aa,(Se,Re)=>be.progress(Se,Re));if(be.stage("checking the line"),!cn.grid){await be.fail(["The land check needs that data to confirm your endpoints and crossings.","Pick again, or retry the same line — the draft is kept."],"The survey could not fetch land-cover data"),pn=await Us.openEntry();continue}const me=Tx(Ee.a,Ee.b,{frame:cn.frame,cover:Iu(cn.frame,cn.grid),query:cn.query});if(!me.valid){await be.fail(me.reasons),pn=await Us.openEntry();continue}be.stage("shaping the terrain");{const Se=Math.min(10500,Fe.lengthM/2+3e3),Re=Math.floor(Se*2/Cn),ge=new Float32Array(Re*Re);for(let ke=0;ke<Re;ke++)for(let We=0;We<Re;We++)ge[ke*Re+We]=cn.query.landformHeightAt(We*Cn-Se,ke*Cn-Se);y={src:ge,g:Re,halfM:Se}}A=be.done(),console.log(`[survey] live-booted: DEM ${Fe.tiles.length} tiles ${(Et/1e6).toFixed(2)} MB · cover ${Ye?`${Ye.tiles} tiles ${(Ye.bytes/1e6).toFixed(2)} MB`:"UNAVAILABLE (land checks deferred, water mask empty — stated)"} · ${(A/1e3).toFixed(1)} s`),L=cn,R=Ee,E={koppen:"live boots do not fetch Köppen: the only source artifact is the 131 MB global GeoTIFF (snapshot-only, stated at survey)",lgm:"not snapshotted and not live-fetchable: the scripted source is a 3.7 GB archive (c53)",lith:"Macrostrat lithology deferred (block cut 1); its CORS measured OPEN c57 — the backlog item carries the path",...H?{}:{soil:"SoilGrids WCS unavailable after 3 retries per property — soil reads null this walk, stated"}},w=(H==null?void 0:H.grids)??null;break}catch(Fe){console.warn("[survey] failed:",Fe),await be.fail(["Check your connection and pick again (or the same line — it will retry)."],"The survey could not reach the terrain servers"),pn=await Us.openEntry();continue}}const{manifest:T,frame:P,query:z,water:O,grid:B,dems:V}=L??(v.url?await Hf(v.url,x):await lx(x)),ee=R?{a:R.a,b:R.b}:{a:T.site.a,b:T.site.b},Y=(pn==null?void 0:pn.spawn)==="B"?{a:ee.b,b:ee.a}:ee,{state:j}=mS(Y.a,Y.b,P),J={heightAt:(Ee,be)=>z.landformHeightAt(Ee,be),cellM:30,halfM:y?y.halfM:Math.min(10500,j.lengthM/2+3e3)};z.setFilterExtent(J.halfM),pi==="repro"&&z.setFilterUnitFrame(!0);const he=L?Xf(P,w??new Map,E,J):T&&T.factors?await Vx(P,T.factors,v.url?v.url.replace(/\/tiles\/manifest\.json$/,""):"/fixtures",J):null;let Ae=null,pe=y?y.src:null;const re=()=>{const Ee=Math.floor(J.halfM*2/Cn);if(!pe){pe=new Float32Array(Ee*Ee);for(let be=0;be<Ee;be++)for(let Fe=0;Fe<Ee;Fe++)pe[be*Ee+Fe]=z.landformHeightAt(Fe*Cn-J.halfM,be*Cn-J.halfM)}return iS(pe,Ee,Cn,J.halfM,he,(be,Fe)=>({x:be*Cn-J.halfM,z:Fe*Cn-J.halfM}),(be,Fe)=>O.depthAt(be,Fe)>0)},X=Fr()&&new URLSearchParams(location.search).get("bake")==="0",se=L!==null&&!L.grid,W=Ac();he&&!X&&!se&&!W?(Ae=re(),z.applyBakedBand(Ae.baked,Ae.g,Ae.cellM,Ae.halfM),console.log(`[bake] ${Ae.g}²·${Cn} m in ${Ae.wallMs.toFixed(0)} ms · budget ${Ae.budget.map(Ee=>`${Ee.band}=${Ee.rms.toFixed(2)}`).join(" ")}${Ae.b1Clamped?" · B1 CLAMPED to fit":""}`)):console.log(W?`[bake] SKIPPED: every bake-side erosion stage is off in the current mode (${Zi()}) — the dev tuner's doing, stated not silent`:X?"[bake] DISABLED by ?bake=0 (the A/B lever)":se?"[bake] SKIPPED: the live cover fetch failed, so there is no water mask to hold shorelines against — an un-held bake is worse than none (G4, stated)":"[bake] skipped: no factor field on this boot (stated, not silent)");let Q=null,oe=null;const ie=()=>{if(z.applyDrainageField(null),oe=null,!on().drainage){Q=null;return}const Ee=Sr(),be=ix((lt,Et)=>z.landformBakedHeightAt(lt,Et),(lt,Et)=>O.depthAt(lt,Et)>0,J.halfM,Ee),Fe=Nu(be);z.applyDrainageField(Fe),oe=be;const Ye={...be.stats,wallMs:be.stats.wallMs+Fe.buildMs};Q=Ye,console.log(`[drainage] params A_min=${Ee.channelAreaM2} skirt=${Ee.skirtDepthM}/${Ee.skirtRadiusM} depthMax=${Ee.depthMaxM} bank=${Ee.bankDeg} · ${be.g}²·${be.cellM} m · ${Ye.channelCells} channel cells · density ${Ye.densityKmPerKm2.toFixed(2)} km/km² · spacing ${Ye.spacingM.toFixed(0)} m · depth mean/p90/max ${Ye.depthMeanM.toFixed(1)}/${Ye.depthP90M.toFixed(1)}/${Ye.depthMaxM.toFixed(1)} m · Horton R_b ${Ye.bifurcation.map(lt=>lt.toFixed(1)).join("/")} · ${Ye.wallMs.toFixed(0)} ms`)},de=rS(`${v.id??"live"}|${Y.a.lat},${Y.a.lon}->${Y.b.lat},${Y.b.lon}`,Zi(),Sr());{const Ee=await Pu("drainage-cache"),be=on().drainage?await lS(Ee,de):null;if(be&&be.g===Math.floor(J.halfM*2/Sr().cellM)+1){z.applyDrainageField(null);const Fe=Nu(be);z.applyDrainageField(Fe),Q={...be.stats,wallMs:Fe.buildMs},console.log(`[drainage] CACHE HIT (${de}) — field rebuilt in ${Fe.buildMs.toFixed(0)} ms (build was ${be.stats.wallMs.toFixed(0)} ms)`)}else ie(),oe&&cS(Ee,de,oe).then(()=>console.log(`[drainage] cached (${de})`))}const D=p1(j.a.x,j.a.z,j.bearingRad,z),le={current:{fwd:0,strafe:0,yaw:j.bearingRad,pitch:0,sprint:!1}},U={scene:c,camera:h,renderer:a,clock:{realTimeElapsed:0,lastDt:0,simTick:0},flags:{paused:!1,debug:g.DEBUG_AT_BOOT},seed:1,world:{frame:P,query:z,water:O,cover:B?Iu(P,B):Sx()},mission:j,player:D,input:le,ui:{root:null},data:{mode:t,manifest:T}};let F=null;if(Gt.liveTiles&&T){const Ee=cx(T),be=new Map(V.map(Fe=>[Fe.zoom,Fe]));F=Nx({frame:P,nearZoom:Ee.spec.nearZoom,coarse:Ee.spec.coarse,source:new Mc,cache:await Pu(),nearRadiusTiles:g.TILE_NEAR_RADIUS_TILES,loadsPerStep:4,decodeRowsPerStep:g.TILE_DECODE_ROWS_PER_STEP,onTile:(Fe,Ye)=>{var lt;return(lt=be.get(Fe.z))==null?void 0:lt.addTile(Fe.x,Fe.y,Ye)},onUnload:Fe=>{var Ye;return(Ye=be.get(Fe.z))==null?void 0:Ye.removeTile(Fe.x,Fe.y)}})}const k=OS(U),$=RA(U,k),te=o1(U,k),ce=c1(te),I=zA(U,k),b=sy(k,$.material(),I,te),q=[$.material().userData.uniforms,te.material().userData.snow],fe=zR(k,b,I.wind(),U.seed,q);S1(U);const ve=j1(U),xe=D1(U),Oe=z1(U),Ie=Z1(U),Le=tR(U),Be=v1(U),ne=g1(U,a.domElement),_e=ES(),Te=new ih;xe.setVisible(!1),Be.enabled=!1,ne.enabled=!1;const Ce=(Ee,be)=>{m1(D,Ee,be,z,U.world.cover,ce),gS(U,be),U.clock.simTick++},ye=()=>{xe.setVisible(!1),Ie.setShown(!1),Be.enabled=!1,ne.enabled=!1,Le.show(Wf(Or(j)),j)},Ne=()=>{j.phase==="arriving"&&(_S(j),n.mark("walking"),xe.setVisible(!0),Be.enabled=!0,ne.enabled=!0)},Pe=()=>{MS(j),Nc(D,j.a.x,j.a.z,z),D.yaw=j.bearingRad,D.pitch=0,le.current={fwd:0,strafe:0,yaw:j.bearingRad,pitch:0,sprint:!1},Te.clear(),Le.hide(),xe.setVisible(!1),Ie.setShown(!1),Be.enabled=!1,ne.enabled=!1,Si(U)};ve.onDone(Ne);let ae=!1;const N=[],K={pose:null},C=()=>{const Ee=K.pose;if(!Ee){Si(U);return}h.position.set(Ee.x,Ee.y,Ee.z),h.rotation.order="YXZ",h.rotation.y=-Ee.yaw,h.rotation.x=Ee.pitch},G={frame:null},Z=Us??hd(U.ui.root??document.body);Gt.devTuner;const Me=ly(U,{season:b,weather:fe,ab:{uniforms:()=>$.material().userData.uniforms??null,invalidateCover:()=>{I.invalidate()}},nav:{teleport:(Ee,be)=>{Nc(U.player,Ee,be,z),Si(U)}},erosion:{mode:()=>on(),setMode:Ee=>mi(Ee),stages:()=>Ma,params:()=>ji(),setParams:Ee=>ia(Ee),bound:()=>zs(ji()),drainageParams:()=>Sr(),setDrainageParams:Ee=>sa(Ee),drainageStats:()=>Q?{channelCells:Q.channelCells,densityKmPerKm2:Q.densityKmPerKm2,spacingM:Q.spacingM,depthP90M:Q.depthP90M,wallMs:Q.wallMs}:null,apply:()=>{const Ee=performance.now();let be=!1;if(Ac())z.clearBakedBand();else{const Fe=re();z.applyBakedBand(Fe.baked,Fe.g,Fe.cellM,Fe.halfM),be=!0}return ie(),z.setDetailOverrides(z.detailOverrides()),$.rebuildAll(),{modeKey:Zi(),bakeRan:be,wallMs:performance.now()-Ee}}},rebuildTerrain:()=>$.rebuildAll(),invalidateDressing:()=>te.invalidate(),invalidateGroundCover:()=>I.invalidate(),invalidateColliders:()=>ce.invalidate()}),we=hy();let De=Gt.devTuner&&new URLSearchParams(location.search).get("panel")!=="0";{Me==null||Me.setVisible(De);const Ee=document.createElement("div");Ee.style.cssText="position:fixed;right:8px;top:8px;z-index:50;font:11px ui-monospace,monospace;color:#9fb0a4;background:rgba(12,18,14,0.62);padding:3px 7px;border-radius:3px;pointer-events:none",Ee.textContent="` tuner · F fly · M map",(U.ui.root??document.body).appendChild(Ee),window.addEventListener("keydown",be=>{const Fe=be.target;Fe instanceof HTMLElement&&(Fe.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(Fe.tagName))||(be.code==="Backquote"?(De=!De,Me==null||Me.setVisible(De)):be.code==="KeyF"&&we&&(Ee.textContent=we.toggle(U)?"` tuner · F fly · M map  [FLYING]":"` tuner · F fly · M map"))})}pn&&Z.onAbandon(()=>{location.href=location.pathname}),window.addEventListener("keydown",Ee=>{if(Ee.code!=="KeyM"||Ee.repeat)return;const be=Ee.target;be instanceof HTMLElement&&(be.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(be.tagName))||(Z.isOpen()?(Z.close(),ne.enabled=!0):(ne.enabled=!1,document.pointerLockElement&&document.exitPointerLock(),Z.open()))});const Ge=CR(U,{aaLevels:_,initial:M,offerAo:!1,onChange:Ee=>{S==null||S.setSamples(Ee.aaSamples),LR(f,Ee)}});window.addEventListener("keydown",Ee=>{if(Ee.code!=="KeyO"&&Ee.code!=="Escape"||Ee.repeat)return;const be=Ee.target;be instanceof HTMLElement&&(be.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(be.tagName))||(Ge.toggle(),Ge.visible()?(ne.enabled=!1,document.pointerLockElement&&document.exitPointerLock()):Z.isOpen()||(ne.enabled=!0))}),window.addEventListener("keydown",Ee=>{if(Ee.code!=="KeyG"||Ee.repeat)return;const be=Ee.target;be instanceof HTMLElement&&(be.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(be.tagName))||xe.setStowed(!xe.stowed())}),window.addEventListener("keydown",Ee=>{if(Ee.code!=="KeyC"||Ee.repeat||we!=null&&we.active())return;const be=Ee.target;be instanceof HTMLElement&&(be.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(be.tagName))||Oe.setRaised(!Oe.raised())}),window.addEventListener("keydown",Ee=>{if(Ee.code!=="KeyN"||Ee.repeat)return;const be=Ee.target;be instanceof HTMLElement&&(be.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(be.tagName))||j.phase!=="walking"||Z.isOpen()||Ie.toggle()});const Ue=KR({ctx:U,terrain:$,device:xe,result:Le,arrival:ve,log:Te,stepSim:Ce,resetToA:Pe,handOver:Ne,finish:ye,frameDeltas:N,gpuTimer:l,post:S,freeCam:K,inputOverride:G,stream:F,planner:Z,bootTimings:n,packId:v.id,dcKey:de,dressing:te,obstacles:ce,groundCover:I,season:b,weather:fe,tuner:Me,factorField:he,bakeState:Ae,runBake:re,runDrainage:ie,compass:Oe,paperMap:Ie});ve.start(),Si(U),Ue.entryPick=()=>pn,window.__game={ready:!0,ctx:U,features:Gt,debug:Ue};let qe=performance.now();const ze=()=>{const Ee=performance.now(),be=(Ee-qe)/1e3;qe=Ee,N.push(be*1e3),N.length>600&&N.shift();const Fe=Math.min(be,.25);U.flags.paused||(U.clock.lastDt=Fe,U.clock.realTimeElapsed+=Fe,!Z.isOpen()&&!Ge.visible()&&Be.sample(U),G.frame&&(le.current={...G.frame}),we!=null&&we.active()?(D.yaw=le.current.yaw,D.pitch=le.current.pitch,we.update(U,Fe)):j.phase==="walking"?_e.advance(Fe,Ye=>{const lt=Kf(le.current);Te.record(lt),Ce(lt,Ye),j.phase==="finished"&&ye()}):j.phase==="arriving"&&(D.yaw=le.current.yaw,D.pitch=le.current.pitch),ve.update(U,Fe)),C(),F&&(F.update(U.player.x,U.player.z),F.step()),$.update(U),te.update(U),I.update(U),!ae&&$.drained()&&(ae=!0,n.mark("terrain-first-drain")),fe.update(U),k.update(U),xe.update(U),Oe.update(U),l.begin(),a.info.reset(),S?S.render():a.render(c,h),l.end(),requestAnimationFrame(ze)};requestAnimationFrame(ze)}fy().catch(n=>{console.error("[beeline] boot failed",n),window.__game={ready:!1}});export{g as T,bc as _,Tf as b,Vf as c,eh as h,sR as l,Tx as v};
