const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./plannerMap-BANmDVLi.js","./plannerMap-GRinvwPn.css"])))=>i.map(i=>d[i]);
var Qf=Object.defineProperty;var Jf=(n,e,t)=>e in n?Qf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var je=(n,e,t)=>Jf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="166",ep=0,Xc=1,tp=2,$u=1,np=2,$n=3,Ei=0,Yt=1,An=2,It=0,Vs=1,$c=2,Kc=3,xl=4,Ku=5,Rn=100,ip=101,sp=102,rp=103,op=104,gr=200,ap=201,lp=202,cp=203,Sl=204,Al=205,Rl=206,hp=207,yl=208,up=209,dp=210,fp=211,pp=212,mp=213,_p=214,gp=0,Mp=1,Ep=2,Ho=3,vp=4,xp=5,Sp=6,Ap=7,Mc=0,Rp=1,yp=2,Yn=0,Yu=1,qu=2,Zu=3,ju=4,Tp=5,Qu=6,Ju=7,ed=300,Ys=301,qs=302,Tl=303,bl=304,sa=306,Yi=1e3,Fi=1001,wl=1002,zt=1003,bp=1004,zr=1005,on=1006,Ea=1007,ki=1008,In=1009,td=1010,nd=1011,Cr=1012,Ec=1013,qi=1014,Dn=1015,qn=1016,vc=1017,xc=1018,Zi=1020,id=35902,sd=1021,rd=1022,mn=1023,od=1024,ad=1025,Ws=1026,ji=1027,Sc=1028,Ac=1029,ld=1030,Rc=1031,yc=1033,wo=33776,Co=33777,No=33778,Do=33779,Cl=35840,Nl=35841,Dl=35842,Il=35843,Ll=36196,Pl=37492,Ol=37496,Ul=37808,Fl=37809,kl=37810,Bl=37811,Gl=37812,zl=37813,Hl=37814,Vl=37815,Wl=37816,Xl=37817,$l=37818,Kl=37819,Yl=37820,ql=37821,Io=36492,Zl=36494,jl=36495,cd=36283,Ql=36284,Jl=36285,ec=36286,wp=3200,Cp=3201,Tc=0,Np=1,di="",fn="srgb",xi="srgb-linear",bc="display-p3",ra="display-p3-linear",Vo="linear",dt="srgb",Wo="rec709",Xo="p3",ss=7680,Yc=519,Dp=512,Ip=513,Lp=514,hd=515,Pp=516,Op=517,Up=518,Fp=519,qc=35044,tc=35048,Zc="300 es",Kn=2e3,$o=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Sr=Math.PI/180,Nr=180/Math.PI;function Js(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function wc(n,e){return(n%e+e)%e}function kp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Bp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ar(n,e,t){return(1-t)*n+t*e}function Gp(n,e,t,i){return Ar(n,e,1-Math.exp(-t*i))}function zp(n,e=1){return e-Math.abs(wc(n,e*2)-e)}function Hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xp(n,e){return n+Math.random()*(e-n)}function $p(n){return n*(.5-Math.random())}function Kp(n){n!==void 0&&(jc=n);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yp(n){return n*Sr}function qp(n){return n*Nr}function Zp(n){return(n&n-1)===0&&n!==0}function jp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const va={DEG2RAD:Sr,RAD2DEG:Nr,generateUUID:Js,clamp:$t,euclideanModulo:wc,mapLinear:kp,inverseLerp:Bp,lerp:Ar,damp:Gp,pingpong:zp,smoothstep:Hp,smootherstep:Vp,randInt:Wp,randFloat:Xp,randFloatSpread:$p,seededRandom:Kp,degToRad:Yp,radToDeg:qp,isPowerOfTwo:Zp,ceilPowerOfTwo:jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:Jp,normalize:Wt,denormalize:Os};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,s,r,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],M=s[0],p=s[3],m=s[6],x=s[1],v=s[4],S=s[7],D=s[2],y=s[5],A=s[8];return r[0]=o*M+a*x+l*D,r[3]=o*p+a*v+l*y,r[6]=o*m+a*S+l*A,r[1]=c*M+h*x+u*D,r[4]=c*p+h*v+u*y,r[7]=c*m+h*S+u*A,r[2]=d*M+f*x+g*D,r[5]=d*p+f*v+g*y,r[8]=d*m+f*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=u*M,e[1]=(s*c-h*i)*M,e[2]=(a*i-s*o)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=f*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new nt;function ud(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function em(){const n=Ko("canvas");return n.style.display="block",n}const Qc={};function dd(n){n in Qc||(Qc[n]=!0,console.warn(n))}function tm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Jc=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[xi]:{transfer:Vo,primaries:Wo,toReference:n=>n,fromReference:n=>n},[fn]:{transfer:dt,primaries:Wo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ra]:{transfer:Vo,primaries:Xo,toReference:n=>n.applyMatrix3(eh),fromReference:n=>n.applyMatrix3(Jc)},[bc]:{transfer:dt,primaries:Xo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(eh),fromReference:n=>n.applyMatrix3(Jc).convertLinearToSRGB()}},nm=new Set([xi,ra]),ht={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!nm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hr[e].toReference,s=Hr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hr[n].primaries},getTransfer:function(n){return n===di?Vo:Hr[n].transfer}};function Xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class im{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Ko("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xs(t[i]/255)*255):t[i]=Xs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sm=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Aa(s[o].image)):r.push(Aa(s[o]))}else r=Aa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?im.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rm=0;class Ht extends Qs{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Fi,s=Fi,r=on,o=ki,a=mn,l=In,c=Ht.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Js(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=ed;Ht.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(f+1)/2,D=(m+1)/2,y=(h+d)/4,A=(u+M)/4,b=(g+p)/4;return v>S&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=y/i,r=A/i):S>D?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=y/s,r=b/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=A/r,s=b/r),this.set(i,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-M)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class om extends Qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ht(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends om{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pd extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class am extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=M;return}if(u!==M||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*M,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const D=Math.sqrt(v),y=Math.atan2(D,m*x);p=Math.sin(p*y)/D,a=Math.sin(a*y)/D}const S=a*x;if(l=l*p+d*S,c=c*p+f*S,h=h*p+g*S,u=u*p+M*S,p===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,i=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new le,th=new Un;class es{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Wr.subVectors(this.max,or),os.subVectors(e.a,or),as.subVectors(e.b,or),ls.subVectors(e.c,or),Qn.subVectors(as,os),Jn.subVectors(ls,as),Ai.subVectors(os,ls);let t=[0,-Qn.z,Qn.y,0,-Jn.z,Jn.y,0,-Ai.z,Ai.y,Qn.z,0,-Qn.x,Jn.z,0,-Jn.x,Ai.z,0,-Ai.x,-Qn.y,Qn.x,0,-Jn.y,Jn.x,0,-Ai.y,Ai.x,0];return!ya(t,os,as,ls,Wr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,os,as,ls,Wr))?!1:(Xr.crossVectors(Qn,Jn),t=[Xr.x,Xr.y,Xr.z],ya(t,os,as,ls,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new le,new le,new le,new le,new le,new le,new le,new le],Mn=new le,Vr=new es,os=new le,as=new le,ls=new le,Qn=new le,Jn=new le,Ai=new le,or=new le,Wr=new le,Xr=new le,Ri=new le;function ya(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ri.fromArray(n,r);const a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const lm=new es,ar=new le,Ta=new le;class ts{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ta)),this.expandByPoint(ar.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new le,ba=new le,$r=new le,ei=new le,wa=new le,Kr=new le,Ca=new le;class cm{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ba.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=ei.dot(this.direction),l=-ei.dot($r),c=ei.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const M=1/h;u*=M,d*=M,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ba).addScaledVector($r,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),s=kn.dot(kn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,s,r){wa.subVectors(t,e),Kr.subVectors(i,e),Ca.crossVectors(wa,Kr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(Kr.crossVectors(ei,Kr));if(l<0)return null;const c=a*this.direction.dot(wa.cross(ei));if(c<0||l+c>o)return null;const h=-a*ei.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,M,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,M,p)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,M,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,M=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,M=c*u;t[0]=d+M*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,M=c*u;t[0]=d-M*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,M=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+M,t[1]=l*u,t[5]=M*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,M=a*c;t[0]=l*h,t[4]=M-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-M*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,M=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+M,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hm,e,um)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ti.crossVectors(i,Jt),ti.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ti.crossVectors(i,Jt)),ti.normalize(),Yr.crossVectors(Jt,ti),s[0]=ti.x,s[4]=Yr.x,s[8]=Jt.x,s[1]=ti.y,s[5]=Yr.y,s[9]=Jt.y,s[2]=ti.z,s[6]=Yr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],M=i[6],p=i[10],m=i[14],x=i[3],v=i[7],S=i[11],D=i[15],y=s[0],A=s[4],b=s[8],R=s[12],E=s[1],T=s[5],O=s[9],k=s[13],K=s[2],q=s[6],H=s[10],Q=s[14],Y=s[3],j=s[7],fe=s[11],X=s[15];return r[0]=o*y+a*E+l*K+c*Y,r[4]=o*A+a*T+l*q+c*j,r[8]=o*b+a*O+l*H+c*fe,r[12]=o*R+a*k+l*Q+c*X,r[1]=h*y+u*E+d*K+f*Y,r[5]=h*A+u*T+d*q+f*j,r[9]=h*b+u*O+d*H+f*fe,r[13]=h*R+u*k+d*Q+f*X,r[2]=g*y+M*E+p*K+m*Y,r[6]=g*A+M*T+p*q+m*j,r[10]=g*b+M*O+p*H+m*fe,r[14]=g*R+M*k+p*Q+m*X,r[3]=x*y+v*E+S*K+D*Y,r[7]=x*A+v*T+S*q+D*j,r[11]=x*b+v*O+S*H+D*fe,r[15]=x*R+v*k+S*Q+D*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],M=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+M*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],M=e[13],p=e[14],m=e[15],x=u*p*c-M*d*c+M*l*f-a*p*f-u*l*m+a*d*m,v=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,S=h*M*c-g*u*c+g*a*f-o*M*f-h*a*m+o*u*m,D=g*u*l-h*M*l-g*a*d+o*M*d+h*a*p-o*u*p,y=t*x+i*v+s*S+r*D;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=x*A,e[1]=(M*d*r-u*p*r-M*s*f+i*p*f+u*s*m-i*d*m)*A,e[2]=(a*p*r-M*l*r+M*s*c-i*p*c-a*s*m+i*l*m)*A,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*A,e[4]=v*A,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*A,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=S*A,e[9]=(g*u*r-h*M*r-g*i*f+t*M*f+h*i*m-t*u*m)*A,e[10]=(o*M*r-g*a*r+g*i*c-t*M*c-o*i*m+t*a*m)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*A,e[12]=D*A,e[13]=(h*M*s-g*u*s+g*i*d-t*M*d-h*i*p+t*u*p)*A,e[14]=(g*a*s-o*M*s-g*i*l+t*M*l+o*i*p-t*a*p)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,M=o*h,p=o*u,m=a*u,x=l*c,v=l*h,S=l*u,D=i.x,y=i.y,A=i.z;return s[0]=(1-(M+m))*D,s[1]=(f+S)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(f-S)*y,s[5]=(1-(d+m))*y,s[6]=(p+x)*y,s[7]=0,s[8]=(g+v)*A,s[9]=(p-x)*A,s[10]=(1-(d+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Kn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===Kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$o)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h;let g,M;if(a===Kn)g=(o+r)*u,M=-2*u;else if(a===$o)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new le,En=new ot,hm=new le(0,0,0),um=new le(1,1,1),ti=new le,Yr=new le,Jt=new le,nh=new ot,ih=new Un;class Ln{constructor(e=0,t=0,i=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dm=0;const sh=new le,hs=new Un,Bn=new ot,qr=new le,lr=new le,fm=new le,pm=new Un,rh=new le(1,0,0),oh=new le(0,1,0),ah=new le(0,0,1),lh={type:"added"},mm={type:"removed"},us={type:"childadded",child:null},Na={type:"childremoved",child:null};class Ot extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new le,t=new Ln,i=new Un,s=new le(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new nt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qr.copy(e):qr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(lr,qr,this.up):Bn.lookAt(qr,lr,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Bn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mm),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new le(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new le,Gn=new le,Da=new le,zn=new le,ds=new le,fs=new le,ch=new le,Ia=new le,La=new le,Pa=new le;class Nn{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Gn.subVectors(i,t),Da.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Gn),l=vn.dot(Da),c=Gn.dot(Gn),h=Gn.dot(Da),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Gn.subVectors(e,t),vn.cross(Gn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Nn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,i),fs.subVectors(r,i),Ia.subVectors(e,i);const l=ds.dot(Ia),c=fs.dot(Ia);if(l<=0&&c<=0)return t.copy(i);La.subVectors(e,s);const h=ds.dot(La),u=fs.dot(La);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ds,o);Pa.subVectors(e,r);const f=ds.dot(Pa),g=fs.dot(Pa);if(g>=0&&f<=g)return t.copy(r);const M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(fs,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return ch.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(ch,a);const m=1/(p+M+d);return o=M*m,a=d*m,t.copy(i).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=wc(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Oa(o,r,e+1/3),this.g=Oa(o,r,e),this.b=Oa(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ht.fromWorkingColorSpace(Ft.copy(this),e),Math.round($t(Ft.r*255,0,255))*65536+Math.round($t(Ft.g*255,0,255))*256+Math.round($t(Ft.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=fn){ht.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,s=Ft.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Zr);const i=Ar(ni.h,Zr.h,t),s=Ar(ni.s,Zr.s,t),r=Ar(ni.l,Zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ve;Ve.NAMES=_d;let _m=0;class er extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Vs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=Al,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==Al&&(i.blendDst=this.blendDst),this.blendEquation!==Rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class oa extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new le,jr=new et;class st{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class gd extends st{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Md extends st{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends st{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gm=0;const ln=new ot,Ua=new Ot,ps=new le,en=new es,cr=new es,wt=new le;class Et extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?Md:gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(en.min,cr.min),en.expandByPoint(wt),wt.addVectors(en.max,cr.max),en.expandByPoint(wt)):(en.expandByPoint(cr.min),en.expandByPoint(cr.max))}en.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),wt.add(ps)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new le,l[b]=new le;const c=new le,h=new le,u=new le,d=new et,f=new et,g=new et,M=new le,p=new le;function m(b,R,E){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,E),d.fromBufferAttribute(r,b),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[b].add(M),a[R].add(M),a[E].add(M),l[b].add(p),l[R].add(p),l[E].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,R=x.length;b<R;++b){const E=x[b],T=E.start,O=E.count;for(let k=T,K=T+O;k<K;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new le,S=new le,D=new le,y=new le;function A(b){D.fromBufferAttribute(s,b),y.copy(D);const R=a[b];v.copy(R),v.sub(D.multiplyScalar(D.dot(R))).normalize(),S.crossVectors(y,R);const T=S.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,T)}for(let b=0,R=x.length;b<R;++b){const E=x[b],T=E.start,O=E.count;for(let k=T,K=T+O;k<K;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new le,r=new le,o=new le,a=new le,l=new le,c=new le,h=new le,u=new le;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new st(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new ot,yi=new cm,Qr=new ts,uh=new le,ms=new le,_s=new le,gs=new le,Fa=new le,Jr=new le,eo=new et,to=new et,no=new et,dh=new le,fh=new le,ph=new le,io=new le,so=new le;class xt extends Ot{constructor(e=new Et,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Fa.fromBufferAttribute(u,e),o?Jr.addScaledVector(Fa,h):Jr.addScaledVector(Fa.sub(t),h))}t.add(Jr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Qr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Qr,uh)===null||yi.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(hh.copy(r).invert(),yi.copy(e.ray).applyMatrix4(hh),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=x,D=v;S<D;S+=3){const y=a.getX(S),A=a.getX(S+1),b=a.getX(S+2);s=ro(this,m,e,i,c,h,u,y,A,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);s=ro(this,o,e,i,c,h,u,x,v,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=x,D=v;S<D;S+=3){const y=S,A=S+1,b=S+2;s=ro(this,m,e,i,c,h,u,y,A,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let p=g,m=M;p<m;p+=3){const x=p,v=p+1,S=p+2;s=ro(this,o,e,i,c,h,u,x,v,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Mm(n,e,t,i,s,r,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ei,a),l===null)return null;so.copy(a),so.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:n}}function ro(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ms),n.getVertexPosition(l,_s),n.getVertexPosition(c,gs);const h=Mm(n,e,t,i,ms,_s,gs,io);if(h){s&&(eo.fromBufferAttribute(s,a),to.fromBufferAttribute(s,l),no.fromBufferAttribute(s,c),h.uv=Nn.getInterpolation(io,ms,_s,gs,eo,to,no,new et)),r&&(eo.fromBufferAttribute(r,a),to.fromBufferAttribute(r,l),no.fromBufferAttribute(r,c),h.uv1=Nn.getInterpolation(io,ms,_s,gs,eo,to,no,new et)),o&&(dh.fromBufferAttribute(o,a),fh.fromBufferAttribute(o,l),ph.fromBufferAttribute(o,c),h.normal=Nn.getInterpolation(io,ms,_s,gs,dh,fh,ph,new le),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new le,materialIndex:0};Nn.getNormal(ms,_s,gs,u.normal),h.face=u}return h}class tr extends Et{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(M,p,m,x,v,S,D,y,A,b,R){const E=S/A,T=D/b,O=S/2,k=D/2,K=y/2,q=A+1,H=b+1;let Q=0,Y=0;const j=new le;for(let fe=0;fe<H;fe++){const X=fe*T-k;for(let se=0;se<q;se++){const ie=se*E-O;j[M]=ie*x,j[p]=X*v,j[m]=K,c.push(j.x,j.y,j.z),j[M]=0,j[p]=0,j[m]=y>0?1:-1,h.push(j.x,j.y,j.z),u.push(se/A),u.push(1-fe/b),Q+=1}}for(let fe=0;fe<b;fe++)for(let X=0;X<A;X++){const se=d+X+q*fe,ie=d+X+q*(fe+1),F=d+(X+1)+q*(fe+1),I=d+(X+1)+q*fe;l.push(se,ie,I),l.push(ie,F,I),Y+=6}a.addGroup(f,Y,R),f+=Y,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const s in i)e[s]=i[s]}return e}function Em(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ed(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const fi={clone:Zs,merge:Xt};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Em(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new le,mh=new et,_h=new et;class pn extends vd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,mh,_h),t.subVectors(_h,mh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,Es=1;class Sm extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Ms,Es,e,t);s.layers=this.layers,this.add(s);const r=new pn(Ms,Es,e,t);r.layers=this.layers,this.add(r);const o=new pn(Ms,Es,e,t);o.layers=this.layers,this.add(o);const a=new pn(Ms,Es,e,t);a.layers=this.layers,this.add(a);const l=new pn(Ms,Es,e,t);l.layers=this.layers,this.add(l);const c=new pn(Ms,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xd extends Ht{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Am extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tr(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:It});r.uniforms.tEquirect.value=t;const o=new xt(s,r),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=on),new Sm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ka=new le,Rm=new le,ym=new nt;class Li{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ka.subVectors(i,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ym.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new ts,oo=new le;class Cc{constructor(e=new Li,t=new Li,i=new Li,s=new Li,r=new Li,o=new Li){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],M=s[10],p=s[11],m=s[12],x=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-r,d-c,p-f,S-m).normalize(),i[1].setComponents(l+r,d+c,p+f,S+m).normalize(),i[2].setComponents(l+o,d+h,p+g,S+x).normalize(),i[3].setComponents(l-o,d-h,p-g,S-x).normalize(),i[4].setComponents(l-a,d-u,p-M,S-v).normalize(),t===Kn)i[5].setComponents(l+a,d+u,p+M,S+v).normalize();else if(t===$o)i[5].setComponents(a,u,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tm(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const M=d[f];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Or extends Et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],M=[],p=[];for(let m=0;m<h;m++){const x=m*d-o;for(let v=0;v<c;v++){const S=v*u-r;g.push(S,-x,0),M.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,S=x+c*(m+1),D=x+1+c*(m+1),y=x+1+c*m;f.push(v,S,y),f.push(S,D,y)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(M,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
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
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zm=`#define PI 3.141592653589793
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
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`
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
}`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p_=`#ifdef USE_GRADIENTMAP
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
}`,m_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
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
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
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
#endif`,y_=`struct PhysicalMaterial {
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
}`,T_=`
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
#endif`,b_=`#if defined( RE_IndirectDiffuse )
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
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
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define TOON
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
}`,J0=`#define TOON
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
}`,eg=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:bm,alphahash_pars_fragment:wm,alphamap_fragment:Cm,alphamap_pars_fragment:Nm,alphatest_fragment:Dm,alphatest_pars_fragment:Im,aomap_fragment:Lm,aomap_pars_fragment:Pm,batching_pars_vertex:Om,batching_vertex:Um,begin_vertex:Fm,beginnormal_vertex:km,bsdfs:Bm,iridescence_fragment:Gm,bumpmap_pars_fragment:zm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:$m,color_pars_fragment:Km,color_pars_vertex:Ym,color_vertex:qm,common:Zm,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Qm,displacementmap_pars_vertex:Jm,displacementmap_vertex:e_,emissivemap_fragment:t_,emissivemap_pars_fragment:n_,colorspace_fragment:i_,colorspace_pars_fragment:s_,envmap_fragment:r_,envmap_common_pars_fragment:o_,envmap_pars_fragment:a_,envmap_pars_vertex:l_,envmap_physical_pars_fragment:E_,envmap_vertex:c_,fog_vertex:h_,fog_pars_vertex:u_,fog_fragment:d_,fog_pars_fragment:f_,gradientmap_pars_fragment:p_,lightmap_pars_fragment:m_,lights_lambert_fragment:__,lights_lambert_pars_fragment:g_,lights_pars_begin:M_,lights_toon_fragment:v_,lights_toon_pars_fragment:x_,lights_phong_fragment:S_,lights_phong_pars_fragment:A_,lights_physical_fragment:R_,lights_physical_pars_fragment:y_,lights_fragment_begin:T_,lights_fragment_maps:b_,lights_fragment_end:w_,logdepthbuf_fragment:C_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:D_,logdepthbuf_vertex:I_,map_fragment:L_,map_pars_fragment:P_,map_particle_fragment:O_,map_particle_pars_fragment:U_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:k_,morphinstance_vertex:B_,morphcolor_vertex:G_,morphnormal_vertex:z_,morphtarget_pars_vertex:H_,morphtarget_vertex:V_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:$_,normal_pars_vertex:K_,normal_vertex:Y_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:Q_,iridescence_pars_fragment:J_,opaque_fragment:e0,packing:t0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:h0,shadowmask_pars_fragment:u0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:_0,specularmap_pars_fragment:g0,tonemapping_fragment:M0,tonemapping_pars_fragment:E0,transmission_fragment:v0,transmission_pars_fragment:x0,uv_pars_fragment:S0,uv_pars_vertex:A0,uv_vertex:R0,worldpos_vertex:y0,background_vert:T0,background_frag:b0,backgroundCube_vert:w0,backgroundCube_frag:C0,cube_vert:N0,cube_frag:D0,depth_vert:I0,depth_frag:L0,distanceRGBA_vert:P0,distanceRGBA_frag:O0,equirect_vert:U0,equirect_frag:F0,linedashed_vert:k0,linedashed_frag:B0,meshbasic_vert:G0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:$0,meshnormal_frag:K0,meshphong_vert:Y0,meshphong_frag:q0,meshphysical_vert:Z0,meshphysical_frag:j0,meshtoon_vert:Q0,meshtoon_frag:J0,points_vert:eg,points_frag:tg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},Ge={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},wn={basic:{uniforms:Xt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Xt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Xt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Xt([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Xt([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Xt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Xt([Ge.points,Ge.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Xt([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Xt([Ge.common,Ge.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Xt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Xt([Ge.sprite,Ge.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Xt([Ge.common,Ge.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Xt([Ge.lights,Ge.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};wn.physical={uniforms:Xt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ao={r:0,b:0,g:0},bi=new Ln,og=new ot;function ag(n,e,t,i,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function M(x){let v=!1;const S=g(x);S===null?m(a,l):S&&S.isColor&&(m(S,1),v=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===sa)?(h===void 0&&(h=new xt(new tr(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Zs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bi.copy(v.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(bi)),h.material.toneMapped=ht.getTransfer(S.colorSpace)!==dt,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xt(new Or(2,2),new Pt({name:"BackgroundMaterial",uniforms:Zs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ht.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(ao,Ed(n)),i.buffers.color.setClear(ao.r,ao.g,ao.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:M,addToRenderList:p}}function lg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,T,O,k,K){let q=!1;const H=u(k,O,T);r!==H&&(r=H,c(r.object)),q=f(E,k,O,K),q&&g(E,k,O,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(E,T,O,k),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function u(E,T,O){const k=O.wireframe===!0;let K=i[E.id];K===void 0&&(K={},i[E.id]=K);let q=K[T.id];q===void 0&&(q={},K[T.id]=q);let H=q[k];return H===void 0&&(H=d(l()),q[k]=H),H}function d(E){const T=[],O=[],k=[];for(let K=0;K<t;K++)T[K]=0,O[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:k,object:E,attributes:{},index:null}}function f(E,T,O,k){const K=r.attributes,q=T.attributes;let H=0;const Q=O.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const fe=K[Y];let X=q[Y];if(X===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),fe===void 0||fe.attribute!==X||X&&fe.data!==X.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(E,T,O,k){const K={},q=T.attributes;let H=0;const Q=O.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let fe=q[Y];fe===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const X={};X.attribute=fe,fe&&fe.data&&(X.data=fe.data),K[Y]=X,H++}r.attributes=K,r.attributesNum=H,r.index=k}function M(){const E=r.newAttributes;for(let T=0,O=E.length;T<O;T++)E[T]=0}function p(E){m(E,0)}function m(E,T){const O=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;O[E]=1,k[E]===0&&(n.enableVertexAttribArray(E),k[E]=1),K[E]!==T&&(n.vertexAttribDivisor(E,T),K[E]=T)}function x(){const E=r.newAttributes,T=r.enabledAttributes;for(let O=0,k=T.length;O<k;O++)T[O]!==E[O]&&(n.disableVertexAttribArray(O),T[O]=0)}function v(E,T,O,k,K,q,H){H===!0?n.vertexAttribIPointer(E,T,O,K,q):n.vertexAttribPointer(E,T,O,k,K,q)}function S(E,T,O,k){M();const K=k.attributes,q=O.getAttributes(),H=T.defaultAttributeValues;for(const Q in q){const Y=q[Q];if(Y.location>=0){let j=K[Q];if(j===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){const fe=j.normalized,X=j.itemSize,se=e.get(j);if(se===void 0)continue;const ie=se.buffer,F=se.type,I=se.bytesPerElement,B=F===n.INT||F===n.UNSIGNED_INT||j.gpuType===Ec;if(j.isInterleavedBufferAttribute){const C=j.data,P=C.stride,W=j.offset;if(C.isInstancedInterleavedBuffer){for(let $=0;$<Y.locationSize;$++)m(Y.location+$,C.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let $=0;$<Y.locationSize;$++)p(Y.location+$);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let $=0;$<Y.locationSize;$++)v(Y.location+$,X/Y.locationSize,F,fe,P*I,(W+X/Y.locationSize*$)*I,B)}else{if(j.isInstancedBufferAttribute){for(let C=0;C<Y.locationSize;C++)m(Y.location+C,j.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let C=0;C<Y.locationSize;C++)p(Y.location+C);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let C=0;C<Y.locationSize;C++)v(Y.location+C,X/Y.locationSize,F,fe,X*I,X/Y.locationSize*C*I,B)}}else if(H!==void 0){const fe=H[Q];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(Y.location,fe);break;case 3:n.vertexAttrib3fv(Y.location,fe);break;case 4:n.vertexAttrib4fv(Y.location,fe);break;default:n.vertexAttrib1fv(Y.location,fe)}}}}x()}function D(){b();for(const E in i){const T=i[E];for(const O in T){const k=T[O];for(const K in k)h(k[K].object),delete k[K];delete T[O]}delete i[E]}}function y(E){if(i[E.id]===void 0)return;const T=i[E.id];for(const O in T){const k=T[O];for(const K in k)h(k[K].object),delete k[K];delete T[O]}delete i[E.id]}function A(E){for(const T in i){const O=i[T];if(O[E.id]===void 0)continue;const k=O[E.id];for(const K in k)h(k[K].object),delete k[K];delete O[E.id]}}function b(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:R,dispose:D,releaseStatesOfGeometry:y,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:p,disableUnusedAttributes:x}}function cg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M];for(let M=0;M<d.length;M++)t.update(g,i,d[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==mn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const A=y===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==In&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Dn&&!A)}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:M,maxAttributes:p,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:D}}function ug(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Li,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const x=r?0:i,v=x*4;let S=m.clippingState||null;l.value=S,S=h(g,d,v,f);for(let D=0;D!==v;++D)S[D]=t[D];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const m=f+M*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=f;v!==M;++v,S+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function dg(n){let e=new WeakMap;function t(o,a){return a===Tl?o.mapping=Ys:a===bl&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tl||a===bl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Am(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Nc extends vd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,gh=[.125,.215,.35,.446,.526,.582],Oi=20,Ba=new Nc,Mh=new Ve;let Ga=null,za=0,Ha=0,Va=!1;const Pi=(1+Math.sqrt(5))/2,vs=1/Pi,Eh=[new le(-Pi,vs,0),new le(Pi,vs,0),new le(-vs,0,Pi),new le(vs,0,Pi),new le(0,Pi,-vs),new le(0,Pi,vs),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ga=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,za,Ha),this._renderer.xr.enabled=Va,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:qn,format:mn,colorSpace:xi,depthBuffer:!1},s=xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=pg(r,e,t)}return s}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,i,s){const a=new pn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mh),h.toneMapping=Yn,h.autoClear=!1;const f=new oa({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new xt(new tr,f);let M=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,M=!0):(f.color.copy(Mh),M=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;lo(s,x*v,m>2?v:0,v,v),h.setRenderTarget(s),M&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ys||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;lo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Eh[(s-r-1)%Eh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),M=r/g,p=isFinite(r)?1+Math.floor(h*M):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);const m=[];let x=0;for(let A=0;A<Oi;++A){const b=A/M,R=Math.exp(-b*b/2);m.push(R),A===0?x+=R:A<p&&(x+=2*R)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[s],D=3*S*(s>v-Fs?s-v+Fs:0),y=4*(this._cubeSize-S);lo(t,D,y,3*S,2*S),l.setRenderTarget(t),l.render(u,Ba)}}function fg(n){const e=[],t=[],i=[];let s=n;const r=n-Fs+1+gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Fs?l=gh[o-n+Fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,M=3,p=2,m=1,x=new Float32Array(M*g*f),v=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let y=0;y<f;y++){const A=y%3*2/3-1,b=y>2?0:-1,R=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];x.set(R,M*g*y),v.set(d,p*g*y);const E=[y,y,y,y,y,y];S.set(E,m*g*y)}const D=new Et;D.setAttribute("position",new st(x,M)),D.setAttribute("uv",new st(v,p)),D.setAttribute("faceIndex",new st(S,m)),e.push(D),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xh(n,e,t){const i=new yn(n,e,t);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pg(n,e,t){const i=new Float32Array(Oi),s=new le(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:It,depthTest:!1,depthWrite:!1})}function Sh(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:It,depthTest:!1,depthWrite:!1})}function Ah(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function mg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tl||l===bl,h=l===Ys||l===qs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new vh(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new vh(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _g(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&dd("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gg(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const M=d.morphAttributes[g];for(let p=0,m=M.length;p<m;p++)e.remove(M[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const M=f[g];for(let p=0,m=M.length;p<m;p++)e.update(M[p],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let M=0;if(f!==null){const x=f.array;M=f.version;for(let v=0,S=x.length;v<S;v+=3){const D=x[v+0],y=x[v+1],A=x[v+2];d.push(D,y,y,A,A,D)}}else if(g!==void 0){const x=g.array;M=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const D=v+0,y=v+1,A=v+2;d.push(D,y,y,A,A,D)}}else return;const p=new(ud(d)?Md:gd)(d,1);p.version=M;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Mg(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,i,1)}function u(d,f,g,M){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],M[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,M,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];for(let x=0;x<M.length;x++)t.update(m,i,M[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Eg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vg(n,e,t){const i=new WeakMap,s=new it;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let R=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),M===!0&&(v=3);let S=a.attributes.position.count*v,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const y=new Float32Array(S*D*4*u),A=new pd(y,S,D,u);A.type=Dn,A.needsUpdate=!0;const b=v*4;for(let E=0;E<u;E++){const T=p[E],O=m[E],k=x[E],K=S*D*4*E;for(let q=0;q<T.count;q++){const H=q*b;f===!0&&(s.fromBufferAttribute(T,q),y[K+H+0]=s.x,y[K+H+1]=s.y,y[K+H+2]=s.z,y[K+H+3]=0),g===!0&&(s.fromBufferAttribute(O,q),y[K+H+4]=s.x,y[K+H+5]=s.y,y[K+H+6]=s.z,y[K+H+7]=0),M===!0&&(s.fromBufferAttribute(k,q),y[K+H+8]=s.x,y[K+H+9]=s.y,y[K+H+10]=s.z,y[K+H+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new et(S,D)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function xg(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Ic extends Ht{constructor(e,t,i,s,r,o,a,l,c,h=Ws){if(h!==Ws&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ws&&(i=qi),i===void 0&&h===ji&&(i=Zi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ad=new Ht,Rh=new Ic(1,1),Rd=new pd,yd=new am,Td=new xd,yh=[],Th=[],bh=new Float32Array(16),wh=new Float32Array(9),Ch=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function aa(n,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Ch.set(i),n.uniformMatrix2fv(this.addr,!1,Ch),bt(t,i)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;wh.set(i),n.uniformMatrix3fv(this.addr,!1,wh),bt(t,i)}}function wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;bh.set(i),n.uniformMatrix4fv(this.addr,!1,bh),bt(t,i)}}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rh.compareFunction=hd,r=Rh):r=Ad,t.setTexture2D(e||r,s)}function kg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||yd,s)}function Bg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Td,s)}function Gg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rd,s)}function zg(n){switch(n){case 5126:return Sg;case 35664:return Ag;case 35665:return Rg;case 35666:return yg;case 35674:return Tg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Cg;case 35667:case 35671:return Ng;case 35668:case 35672:return Dg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Pg;case 36295:return Og;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Hg(n,e){n.uniform1fv(this.addr,e)}function Vg(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function Wg(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function $g(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kg(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yg(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qg(n,e){n.uniform1iv(this.addr,e)}function Zg(n,e){n.uniform2iv(this.addr,e)}function jg(n,e){n.uniform3iv(this.addr,e)}function Qg(n,e){n.uniform4iv(this.addr,e)}function Jg(n,e){n.uniform1uiv(this.addr,e)}function eM(n,e){n.uniform2uiv(this.addr,e)}function tM(n,e){n.uniform3uiv(this.addr,e)}function nM(n,e){n.uniform4uiv(this.addr,e)}function iM(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ad,r[o])}function sM(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yd,r[o])}function rM(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Td,r[o])}function oM(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rd,r[o])}function aM(n){switch(n){case 5126:return Hg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return $g;case 35675:return Kg;case 35676:return Yg;case 5124:case 35670:return qg;case 35667:case 35671:return Zg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return Jg;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return oM}}class lM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}}class cM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aM(t.type)}}class hM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Nh(n,e){n.seq.push(e),n.map[e.id]=e}function uM(n,e,t){const i=n.name,s=i.length;for(Wa.lastIndex=0;;){const r=Wa.exec(i),o=Wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nh(t,c===void 0?new lM(a,n,e):new cM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new hM(a),Nh(t,u)),t=u}}}class Lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);uM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dM=37297;let fM=0;function pM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function mM(n){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(n);let i;switch(e===t?i="":e===Xo&&t===Wo?i="LinearDisplayP3ToLinearSRGB":e===Wo&&t===Xo&&(i="LinearSRGBToLinearDisplayP3"),n){case xi:case ra:return[i,"LinearTransferOETF"];case fn:case bc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ih(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pM(n.getShaderSource(e),o)}else return s}function _M(n,e){const t=mM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gM(n,e){let t;switch(e){case Yu:t="Linear";break;case qu:t="Reinhard";break;case Zu:t="OptimizedCineon";break;case ju:t="ACESFilmic";break;case Qu:t="AgX";break;case Ju:t="Neutral";break;case Tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function MM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function EM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mr(n){return n!==""}function Lh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(n){return n.replace(xM,AM)}const SM=new Map;function AM(n,e){let t=tt[e];if(t===void 0){const i=SM.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(RM,yM)}function yM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function TM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===np?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function bM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case qs:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function CM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Rp:e="ENVMAP_BLENDING_MIX";break;case yp:e="ENVMAP_BLENDING_ADD";break}return e}function NM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function DM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=TM(t),c=bM(t),h=wM(t),u=CM(t),d=NM(t),f=MM(t),g=EM(r),M=s.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`)):(p=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),m=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Yn?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,_M("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),o=nc(o),o=Lh(o,t),o=Ph(o,t),a=nc(a),a=Lh(a,t),a=Ph(a,t),o=Oh(o),a=Oh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+p+o,S=x+m+a,D=Dh(s,s.VERTEX_SHADER,v),y=Dh(s,s.FRAGMENT_SHADER,S);s.attachShader(M,D),s.attachShader(M,y),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(T){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(M).trim(),k=s.getShaderInfoLog(D).trim(),K=s.getShaderInfoLog(y).trim();let q=!0,H=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,D,y);else{const Q=Ih(s,D,"vertex"),Y=Ih(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+Q+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||K==="")&&(H=!1);H&&(T.diagnostics={runnable:q,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:K,prefix:m}})}s.deleteShader(D),s.deleteShader(y),b=new Lo(s,M),R=vM(s,M)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,dM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=y,this}let IM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PM(e),t.set(e,i)),i}}class PM{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}}function OM(n,e,t,i,s,r,o){const a=new md,l=new LM,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return c.add(R),R===0?"uv":`uv${R}`}function p(R,E,T,O,k){const K=O.fog,q=k.geometry,H=R.isMeshStandardMaterial?O.environment:null,Q=(R.isMeshStandardMaterial?t:e).get(R.envMap||H),Y=Q&&Q.mapping===sa?Q.image.height:null,j=g[R.type];R.precision!==null&&(f=s.getMaxPrecision(R.precision),f!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",f,"instead."));const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,X=fe!==void 0?fe.length:0;let se=0;q.morphAttributes.position!==void 0&&(se=1),q.morphAttributes.normal!==void 0&&(se=2),q.morphAttributes.color!==void 0&&(se=3);let ie,F,I,B;if(j){const ge=wn[j];ie=ge.vertexShader,F=ge.fragmentShader}else ie=R.vertexShader,F=R.fragmentShader,l.update(R),I=l.getVertexShaderID(R),B=l.getFragmentShaderID(R);const C=n.getRenderTarget(),P=k.isInstancedMesh===!0,W=k.isBatchedMesh===!0,$=!!R.map,Z=!!R.matcap,w=!!Q,re=!!R.aoMap,te=!!R.lightMap,xe=!!R.bumpMap,oe=!!R.normalMap,Ce=!!R.displacementMap,Ne=!!R.emissiveMap,De=!!R.metalnessMap,V=!!R.roughnessMap,L=R.anisotropy>0,ae=R.clearcoat>0,ye=R.dispersion>0,we=R.iridescence>0,Se=R.sheen>0,ke=R.transmission>0,Le=L&&!!R.anisotropyMap,Oe=ae&&!!R.clearcoatMap,ze=ae&&!!R.clearcoatNormalMap,ce=ae&&!!R.clearcoatRoughnessMap,_e=we&&!!R.iridescenceMap,ee=we&&!!R.iridescenceThicknessMap,ue=Se&&!!R.sheenColorMap,de=Se&&!!R.sheenRoughnessMap,Ee=!!R.specularMap,Te=!!R.specularColorMap,ne=!!R.specularIntensityMap,G=ke&&!!R.transmissionMap,he=ke&&!!R.thicknessMap,N=!!R.gradientMap,z=!!R.alphaMap,J=R.alphaTest>0,Ae=!!R.alphaHash,be=!!R.extensions;let Pe=Yn;R.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const We={shaderID:j,shaderType:R.type,shaderName:R.name,vertexShader:ie,fragmentShader:F,defines:R.defines,customVertexShaderID:I,customFragmentShaderID:B,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:f,batching:W,batchingColor:W&&k._colorsTexture!==null,instancing:P,instancingColor:P&&k.instanceColor!==null,instancingMorph:P&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:C===null?n.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xi,alphaToCoverage:!!R.alphaToCoverage,map:$,matcap:Z,envMap:w,envMapMode:w&&Q.mapping,envMapCubeUVHeight:Y,aoMap:re,lightMap:te,bumpMap:xe,normalMap:oe,displacementMap:d&&Ce,emissiveMap:Ne,normalMapObjectSpace:oe&&R.normalMapType===Np,normalMapTangentSpace:oe&&R.normalMapType===Tc,metalnessMap:De,roughnessMap:V,anisotropy:L,anisotropyMap:Le,clearcoat:ae,clearcoatMap:Oe,clearcoatNormalMap:ze,clearcoatRoughnessMap:ce,dispersion:ye,iridescence:we,iridescenceMap:_e,iridescenceThicknessMap:ee,sheen:Se,sheenColorMap:ue,sheenRoughnessMap:de,specularMap:Ee,specularColorMap:Te,specularIntensityMap:ne,transmission:ke,transmissionMap:G,thicknessMap:he,gradientMap:N,opaque:R.transparent===!1&&R.blending===Vs&&R.alphaToCoverage===!1,alphaMap:z,alphaTest:J,alphaHash:Ae,combine:R.combine,mapUv:$&&M(R.map.channel),aoMapUv:re&&M(R.aoMap.channel),lightMapUv:te&&M(R.lightMap.channel),bumpMapUv:xe&&M(R.bumpMap.channel),normalMapUv:oe&&M(R.normalMap.channel),displacementMapUv:Ce&&M(R.displacementMap.channel),emissiveMapUv:Ne&&M(R.emissiveMap.channel),metalnessMapUv:De&&M(R.metalnessMap.channel),roughnessMapUv:V&&M(R.roughnessMap.channel),anisotropyMapUv:Le&&M(R.anisotropyMap.channel),clearcoatMapUv:Oe&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:ze&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:de&&M(R.sheenRoughnessMap.channel),specularMapUv:Ee&&M(R.specularMap.channel),specularColorMapUv:Te&&M(R.specularColorMap.channel),specularIntensityMapUv:ne&&M(R.specularIntensityMap.channel),transmissionMapUv:G&&M(R.transmissionMap.channel),thicknessMapUv:he&&M(R.thicknessMap.channel),alphaMapUv:z&&M(R.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(oe||L),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&($||z),fog:!!K,useFog:R.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:$&&R.map.isVideoTexture===!0&&ht.getTransfer(R.map.colorSpace)===dt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===An,flipSided:R.side===Yt,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:be&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&R.extensions.multiDraw===!0||W)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function m(R){const E=[];if(R.shaderID?E.push(R.shaderID):(E.push(R.customVertexShaderID),E.push(R.customFragmentShaderID)),R.defines!==void 0)for(const T in R.defines)E.push(T),E.push(R.defines[T]);return R.isRawShaderMaterial===!1&&(x(E,R),v(E,R),E.push(n.outputColorSpace)),E.push(R.customProgramCacheKey),E.join()}function x(R,E){R.push(E.precision),R.push(E.outputColorSpace),R.push(E.envMapMode),R.push(E.envMapCubeUVHeight),R.push(E.mapUv),R.push(E.alphaMapUv),R.push(E.lightMapUv),R.push(E.aoMapUv),R.push(E.bumpMapUv),R.push(E.normalMapUv),R.push(E.displacementMapUv),R.push(E.emissiveMapUv),R.push(E.metalnessMapUv),R.push(E.roughnessMapUv),R.push(E.anisotropyMapUv),R.push(E.clearcoatMapUv),R.push(E.clearcoatNormalMapUv),R.push(E.clearcoatRoughnessMapUv),R.push(E.iridescenceMapUv),R.push(E.iridescenceThicknessMapUv),R.push(E.sheenColorMapUv),R.push(E.sheenRoughnessMapUv),R.push(E.specularMapUv),R.push(E.specularColorMapUv),R.push(E.specularIntensityMapUv),R.push(E.transmissionMapUv),R.push(E.thicknessMapUv),R.push(E.combine),R.push(E.fogExp2),R.push(E.sizeAttenuation),R.push(E.morphTargetsCount),R.push(E.morphAttributeCount),R.push(E.numDirLights),R.push(E.numPointLights),R.push(E.numSpotLights),R.push(E.numSpotLightMaps),R.push(E.numHemiLights),R.push(E.numRectAreaLights),R.push(E.numDirLightShadows),R.push(E.numPointLightShadows),R.push(E.numSpotLightShadows),R.push(E.numSpotLightShadowsWithMaps),R.push(E.numLightProbes),R.push(E.shadowMapType),R.push(E.toneMapping),R.push(E.numClippingPlanes),R.push(E.numClipIntersection),R.push(E.depthPacking)}function v(R,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),R.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),R.push(a.mask)}function S(R){const E=g[R.type];let T;if(E){const O=wn[E];T=fi.clone(O.uniforms)}else T=R.uniforms;return T}function D(R,E){let T;for(let O=0,k=h.length;O<k;O++){const K=h[O];if(K.cacheKey===E){T=K,++T.usedTimes;break}}return T===void 0&&(T=new DM(n,E,R,r),h.push(T)),T}function y(R){if(--R.usedTimes===0){const E=h.indexOf(R);h[E]=h[h.length-1],h.pop(),R.destroy()}}function A(R){l.remove(R)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:D,releaseProgram:y,releaseShaderCache:A,programs:h,dispose:b}}function UM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function FM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,M,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:M,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=M,m.group=p),e++,m}function a(u,d,f,g,M,p){const m=o(u,d,f,g,M,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,M,p){const m=o(u,d,f,g,M,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||FM),i.length>1&&i.sort(d||Fh),s.length>1&&s.sort(d||Fh)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function kM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new kh,n.set(i,[o])):s>=r.length?(o=new kh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function BM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new Ve};break;case"SpotLight":t={position:new le,direction:new le,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function GM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zM=0;function HM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VM(n){const e=new BM,t=GM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new le);const s=new le,r=new ot,o=new ot;function a(c){let h=0,u=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let f=0,g=0,M=0,p=0,m=0,x=0,v=0,S=0,D=0,y=0,A=0;c.sort(HM);for(let R=0,E=c.length;R<E;R++){const T=c[R],O=T.color,k=T.intensity,K=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=O.r*k,u+=O.g*k,d+=O.b*k;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],k);A++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,Y=t.get(T);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=T.shadow.matrix,x++}i.directional[f]=H,f++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(O).multiplyScalar(k),H.distance=K,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[M]=H;const Q=T.shadow;if(T.map&&(i.spotLightMap[D]=T.map,D++,Q.updateMatrices(T),T.castShadow&&y++),i.spotLightMatrix[M]=Q.matrix,T.castShadow){const Y=t.get(T);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,i.spotShadow[M]=Y,i.spotShadowMap[M]=q,S++}M++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(O).multiplyScalar(k),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=H,p++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const Q=T.shadow,Y=t.get(T);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=T.shadow.matrix,v++}i.point[g]=H,g++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(k),H.groundColor.copy(T.groundColor).multiplyScalar(k),i.hemi[m]=H,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==f||b.pointLength!==g||b.spotLength!==M||b.rectAreaLength!==p||b.hemiLength!==m||b.numDirectionalShadows!==x||b.numPointShadows!==v||b.numSpotShadows!==S||b.numSpotMaps!==D||b.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=M,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+D-y,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=A,b.directionalLength=f,b.pointLength=g,b.spotLength=M,b.rectAreaLength=p,b.hemiLength=m,b.numDirectionalShadows=x,b.numPointShadows=v,b.numSpotShadows=S,b.numSpotMaps=D,b.numLightProbes=A,i.version=zM++)}function l(c,h){let u=0,d=0,f=0,g=0,M=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const v=c[m];if(v.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(v.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:a,setupView:l,state:i}}function Bh(n){const e=new VM(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function WM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Bh(n),e.set(s,[a])):r>=o.length?(a=new Bh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class XM extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $M extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`;function qM(n,e,t){let i=new Cc;const s=new et,r=new et,o=new it,a=new XM({depthPacking:Cp}),l=new $M,c={},h=t.maxTextureSize,u={[Ei]:Yt,[Yt]:Ei,[An]:An},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:KM,fragmentShader:YM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let m=this.type;this.render=function(y,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const R=n.getRenderTarget(),E=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),O=n.state;O.setBlending(It),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=m!==$n&&this.type===$n,K=m===$n&&this.type!==$n;for(let q=0,H=y.length;q<H;q++){const Q=y[q],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const j=Y.getFrameExtents();if(s.multiply(j),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||K===!0){const X=this.type!==$n?{minFilter:zt,magFilter:zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yn(s.x,s.y,X),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const fe=Y.getViewportCount();for(let X=0;X<fe;X++){const se=Y.getViewport(X);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),O.viewport(o),Y.updateMatrices(Q,X),i=Y.getFrustum(),S(A,b,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===$n&&x(Y,b),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(R,E,T)};function x(y,A){const b=e.update(M);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new yn(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(A,null,b,d,M,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(A,null,b,f,M,null)}function v(y,A,b,R){let E=null;const T=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)E=T;else if(E=b.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=E.uuid,k=A.uuid;let K=c[O];K===void 0&&(K={},c[O]=K);let q=K[k];q===void 0&&(q=E.clone(),K[k]=q,A.addEventListener("dispose",D)),E=q}if(E.visible=A.visible,E.wireframe=A.wireframe,R===$n?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=n.properties.get(E);O.light=b}return E}function S(y,A,b,R,E){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===$n)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const k=e.update(y),K=y.material;if(Array.isArray(K)){const q=k.groups;for(let H=0,Q=q.length;H<Q;H++){const Y=q[H],j=K[Y.materialIndex];if(j&&j.visible){const fe=v(y,j,R,E);y.onBeforeShadow(n,y,A,b,k,fe,Y),n.renderBufferDirect(b,null,k,fe,y,Y),y.onAfterShadow(n,y,A,b,k,fe,Y)}}}else if(K.visible){const q=v(y,K,R,E);y.onBeforeShadow(n,y,A,b,k,q,null),n.renderBufferDirect(b,null,k,q,y,null),y.onAfterShadow(n,y,A,b,k,q,null)}}const O=y.children;for(let k=0,K=O.length;k<K;k++)S(O[k],A,b,R,E)}function D(y){y.target.removeEventListener("dispose",D);for(const b in c){const R=c[b],E=y.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}function ZM(n){function e(){let G=!1;const he=new it;let N=null;const z=new it(0,0,0,0);return{setMask:function(J){N!==J&&!G&&(n.colorMask(J,J,J,J),N=J)},setLocked:function(J){G=J},setClear:function(J,Ae,be,Pe,We){We===!0&&(J*=Pe,Ae*=Pe,be*=Pe),he.set(J,Ae,be,Pe),z.equals(he)===!1&&(n.clearColor(J,Ae,be,Pe),z.copy(he))},reset:function(){G=!1,N=null,z.set(-1,0,0,0)}}}function t(){let G=!1,he=null,N=null,z=null;return{setTest:function(J){J?B(n.DEPTH_TEST):C(n.DEPTH_TEST)},setMask:function(J){he!==J&&!G&&(n.depthMask(J),he=J)},setFunc:function(J){if(N!==J){switch(J){case gp:n.depthFunc(n.NEVER);break;case Mp:n.depthFunc(n.ALWAYS);break;case Ep:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case vp:n.depthFunc(n.EQUAL);break;case xp:n.depthFunc(n.GEQUAL);break;case Sp:n.depthFunc(n.GREATER);break;case Ap:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}N=J}},setLocked:function(J){G=J},setClear:function(J){z!==J&&(n.clearDepth(J),z=J)},reset:function(){G=!1,he=null,N=null,z=null}}}function i(){let G=!1,he=null,N=null,z=null,J=null,Ae=null,be=null,Pe=null,We=null;return{setTest:function(ge){G||(ge?B(n.STENCIL_TEST):C(n.STENCIL_TEST))},setMask:function(ge){he!==ge&&!G&&(n.stencilMask(ge),he=ge)},setFunc:function(ge,Ie,Re){(N!==ge||z!==Ie||J!==Re)&&(n.stencilFunc(ge,Ie,Re),N=ge,z=Ie,J=Re)},setOp:function(ge,Ie,Re){(Ae!==ge||be!==Ie||Pe!==Re)&&(n.stencilOp(ge,Ie,Re),Ae=ge,be=Ie,Pe=Re)},setLocked:function(ge){G=ge},setClear:function(ge){We!==ge&&(n.clearStencil(ge),We=ge)},reset:function(){G=!1,he=null,N=null,z=null,J=null,Ae=null,be=null,Pe=null,We=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,M=null,p=null,m=null,x=null,v=null,S=null,D=null,y=new Ve(0,0,0),A=0,b=!1,R=null,E=null,T=null,O=null,k=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=H>=2);let Y=null,j={};const fe=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),se=new it().fromArray(fe),ie=new it().fromArray(X);function F(G,he,N,z){const J=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(G,Ae),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<N;be++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(he+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return Ae}const I={};I[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),I[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),I[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),B(n.DEPTH_TEST),r.setFunc(Ho),xe(!1),oe(Xc),B(n.CULL_FACE),re(It);function B(G){c[G]!==!0&&(n.enable(G),c[G]=!0)}function C(G){c[G]!==!1&&(n.disable(G),c[G]=!1)}function P(G,he){return h[G]!==he?(n.bindFramebuffer(G,he),h[G]=he,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function W(G,he){let N=d,z=!1;if(G){N=u.get(he),N===void 0&&(N=[],u.set(he,N));const J=G.textures;if(N.length!==J.length||N[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,be=J.length;Ae<be;Ae++)N[Ae]=n.COLOR_ATTACHMENT0+Ae;N.length=J.length,z=!0}}else N[0]!==n.BACK&&(N[0]=n.BACK,z=!0);z&&n.drawBuffers(N)}function $(G){return f!==G?(n.useProgram(G),f=G,!0):!1}const Z={[Rn]:n.FUNC_ADD,[ip]:n.FUNC_SUBTRACT,[sp]:n.FUNC_REVERSE_SUBTRACT};Z[rp]=n.MIN,Z[op]=n.MAX;const w={[gr]:n.ZERO,[ap]:n.ONE,[lp]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[dp]:n.SRC_ALPHA_SATURATE,[yl]:n.DST_COLOR,[Rl]:n.DST_ALPHA,[cp]:n.ONE_MINUS_SRC_COLOR,[Al]:n.ONE_MINUS_SRC_ALPHA,[up]:n.ONE_MINUS_DST_COLOR,[hp]:n.ONE_MINUS_DST_ALPHA,[fp]:n.CONSTANT_COLOR,[pp]:n.ONE_MINUS_CONSTANT_COLOR,[mp]:n.CONSTANT_ALPHA,[_p]:n.ONE_MINUS_CONSTANT_ALPHA};function re(G,he,N,z,J,Ae,be,Pe,We,ge){if(G===It){g===!0&&(C(n.BLEND),g=!1);return}if(g===!1&&(B(n.BLEND),g=!0),G!==Ku){if(G!==M||ge!==b){if((p!==Rn||v!==Rn)&&(n.blendEquation(n.FUNC_ADD),p=Rn,v=Rn),ge)switch(G){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,x=null,S=null,D=null,y.set(0,0,0),A=0,M=G,b=ge}return}J=J||he,Ae=Ae||N,be=be||z,(he!==p||J!==v)&&(n.blendEquationSeparate(Z[he],Z[J]),p=he,v=J),(N!==m||z!==x||Ae!==S||be!==D)&&(n.blendFuncSeparate(w[N],w[z],w[Ae],w[be]),m=N,x=z,S=Ae,D=be),(Pe.equals(y)===!1||We!==A)&&(n.blendColor(Pe.r,Pe.g,Pe.b,We),y.copy(Pe),A=We),M=G,b=!1}function te(G,he){G.side===An?C(n.CULL_FACE):B(n.CULL_FACE);let N=G.side===Yt;he&&(N=!N),xe(N),G.blending===Vs&&G.transparent===!1?re(It):re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const z=G.stencilWrite;o.setTest(z),z&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ne(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):C(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function oe(G){G!==ep?(B(n.CULL_FACE),G!==E&&(G===Xc?n.cullFace(n.BACK):G===tp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):C(n.CULL_FACE),E=G}function Ce(G){G!==T&&(q&&n.lineWidth(G),T=G)}function Ne(G,he,N){G?(B(n.POLYGON_OFFSET_FILL),(O!==he||k!==N)&&(n.polygonOffset(he,N),O=he,k=N)):C(n.POLYGON_OFFSET_FILL)}function De(G){G?B(n.SCISSOR_TEST):C(n.SCISSOR_TEST)}function V(G){G===void 0&&(G=n.TEXTURE0+K-1),Y!==G&&(n.activeTexture(G),Y=G)}function L(G,he,N){N===void 0&&(Y===null?N=n.TEXTURE0+K-1:N=Y);let z=j[N];z===void 0&&(z={type:void 0,texture:void 0},j[N]=z),(z.type!==G||z.texture!==he)&&(Y!==N&&(n.activeTexture(N),Y=N),n.bindTexture(G,he||I[G]),z.type=G,z.texture=he)}function ae(){const G=j[Y];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ye(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(G){se.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),se.copy(G))}function de(G){ie.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ie.copy(G))}function Ee(G,he){let N=l.get(he);N===void 0&&(N=new WeakMap,l.set(he,N));let z=N.get(G);z===void 0&&(z=n.getUniformBlockIndex(he,G.name),N.set(G,z))}function Te(G,he){const z=l.get(he).get(G);a.get(he)!==z&&(n.uniformBlockBinding(he,z,G.__bindingPointIndex),a.set(he,z))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},Y=null,j={},h={},u=new WeakMap,d=[],f=null,g=!1,M=null,p=null,m=null,x=null,v=null,S=null,D=null,y=new Ve(0,0,0),A=0,b=!1,R=null,E=null,T=null,O=null,k=null,se.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:B,disable:C,bindFramebuffer:P,drawBuffers:W,useProgram:$,setBlending:re,setMaterial:te,setFlipSided:xe,setCullFace:oe,setLineWidth:Ce,setPolygonOffset:Ne,setScissorTest:De,activeTexture:V,bindTexture:L,unbindTexture:ae,compressedTexImage2D:ye,compressedTexImage3D:we,texImage2D:_e,texImage3D:ee,updateUBOMapping:Ee,uniformBlockBinding:Te,texStorage2D:ze,texStorage3D:ce,texSubImage2D:Se,texSubImage3D:ke,compressedTexSubImage2D:Le,compressedTexSubImage3D:Oe,scissor:ue,viewport:de,reset:ne}}function Gh(n,e,t,i){const s=jM(i);switch(t){case sd:return n*e;case od:return n*e;case ad:return n*e*2;case Sc:return n*e/s.components*s.byteLength;case Ac:return n*e/s.components*s.byteLength;case ld:return n*e*2/s.components*s.byteLength;case Rc:return n*e*2/s.components*s.byteLength;case rd:return n*e*3/s.components*s.byteLength;case mn:return n*e*4/s.components*s.byteLength;case yc:return n*e*4/s.components*s.byteLength;case wo:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Il:return Math.max(n,16)*Math.max(e,8)/4;case Cl:case Dl:return Math.max(n,8)*Math.max(e,8)/2;case Ll:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Io:case Zl:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cd:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jl:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jM(n){switch(n){case In:case td:return{byteLength:1,components:1};case Cr:case nd:case qn:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case qi:case Ec:case Dn:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function QM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(V,L){return f?new OffscreenCanvas(V,L):Ko("canvas")}function M(V,L,ae){let ye=1;const we=De(V);if((we.width>ae||we.height>ae)&&(ye=ae/Math.max(we.width,we.height)),ye<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const Se=Math.floor(ye*we.width),ke=Math.floor(ye*we.height);u===void 0&&(u=g(Se,ke));const Le=L?g(Se,ke):u;return Le.width=Se,Le.height=ke,Le.getContext("2d").drawImage(V,0,0,Se,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+Se+"x"+ke+")."),Le}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),V;return V}function p(V){return V.generateMipmaps&&V.minFilter!==zt&&V.minFilter!==on}function m(V){n.generateMipmap(V)}function x(V,L,ae,ye,we=!1){if(V!==null){if(n[V]!==void 0)return n[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Se=L;if(L===n.RED&&(ae===n.FLOAT&&(Se=n.R32F),ae===n.HALF_FLOAT&&(Se=n.R16F),ae===n.UNSIGNED_BYTE&&(Se=n.R8)),L===n.RED_INTEGER&&(ae===n.UNSIGNED_BYTE&&(Se=n.R8UI),ae===n.UNSIGNED_SHORT&&(Se=n.R16UI),ae===n.UNSIGNED_INT&&(Se=n.R32UI),ae===n.BYTE&&(Se=n.R8I),ae===n.SHORT&&(Se=n.R16I),ae===n.INT&&(Se=n.R32I)),L===n.RG&&(ae===n.FLOAT&&(Se=n.RG32F),ae===n.HALF_FLOAT&&(Se=n.RG16F),ae===n.UNSIGNED_BYTE&&(Se=n.RG8)),L===n.RG_INTEGER&&(ae===n.UNSIGNED_BYTE&&(Se=n.RG8UI),ae===n.UNSIGNED_SHORT&&(Se=n.RG16UI),ae===n.UNSIGNED_INT&&(Se=n.RG32UI),ae===n.BYTE&&(Se=n.RG8I),ae===n.SHORT&&(Se=n.RG16I),ae===n.INT&&(Se=n.RG32I)),L===n.RGB&&ae===n.UNSIGNED_INT_5_9_9_9_REV&&(Se=n.RGB9_E5),L===n.RGBA){const ke=we?Vo:ht.getTransfer(ye);ae===n.FLOAT&&(Se=n.RGBA32F),ae===n.HALF_FLOAT&&(Se=n.RGBA16F),ae===n.UNSIGNED_BYTE&&(Se=ke===dt?n.SRGB8_ALPHA8:n.RGBA8),ae===n.UNSIGNED_SHORT_4_4_4_4&&(Se=n.RGBA4),ae===n.UNSIGNED_SHORT_5_5_5_1&&(Se=n.RGB5_A1)}return(Se===n.R16F||Se===n.R32F||Se===n.RG16F||Se===n.RG32F||Se===n.RGBA16F||Se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function v(V,L){let ae;return V?L===null||L===qi||L===Zi?ae=n.DEPTH24_STENCIL8:L===Dn?ae=n.DEPTH32F_STENCIL8:L===Cr&&(ae=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===qi||L===Zi?ae=n.DEPTH_COMPONENT24:L===Dn?ae=n.DEPTH_COMPONENT32F:L===Cr&&(ae=n.DEPTH_COMPONENT16),ae}function S(V,L){return p(V)===!0||V.isFramebufferTexture&&V.minFilter!==zt&&V.minFilter!==on?Math.log2(Math.max(L.width,L.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?L.mipmaps.length:1}function D(V){const L=V.target;L.removeEventListener("dispose",D),A(L),L.isVideoTexture&&h.delete(L)}function y(V){const L=V.target;L.removeEventListener("dispose",y),R(L)}function A(V){const L=i.get(V);if(L.__webglInit===void 0)return;const ae=V.source,ye=d.get(ae);if(ye){const we=ye[L.__cacheKey];we.usedTimes--,we.usedTimes===0&&b(V),Object.keys(ye).length===0&&d.delete(ae)}i.remove(V)}function b(V){const L=i.get(V);n.deleteTexture(L.__webglTexture);const ae=V.source,ye=d.get(ae);delete ye[L.__cacheKey],o.memory.textures--}function R(V){const L=i.get(V);if(V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(L.__webglFramebuffer[ye]))for(let we=0;we<L.__webglFramebuffer[ye].length;we++)n.deleteFramebuffer(L.__webglFramebuffer[ye][we]);else n.deleteFramebuffer(L.__webglFramebuffer[ye]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[ye])}else{if(Array.isArray(L.__webglFramebuffer))for(let ye=0;ye<L.__webglFramebuffer.length;ye++)n.deleteFramebuffer(L.__webglFramebuffer[ye]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let ye=0;ye<L.__webglColorRenderbuffer.length;ye++)L.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[ye]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const ae=V.textures;for(let ye=0,we=ae.length;ye<we;ye++){const Se=i.get(ae[ye]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(ae[ye])}i.remove(V)}let E=0;function T(){E=0}function O(){const V=E;return V>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+s.maxTextures),E+=1,V}function k(V){const L=[];return L.push(V.wrapS),L.push(V.wrapT),L.push(V.wrapR||0),L.push(V.magFilter),L.push(V.minFilter),L.push(V.anisotropy),L.push(V.internalFormat),L.push(V.format),L.push(V.type),L.push(V.generateMipmaps),L.push(V.premultiplyAlpha),L.push(V.flipY),L.push(V.unpackAlignment),L.push(V.colorSpace),L.join()}function K(V,L){const ae=i.get(V);if(V.isVideoTexture&&Ce(V),V.isRenderTargetTexture===!1&&V.version>0&&ae.__version!==V.version){const ye=V.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(ae,V,L);return}}t.bindTexture(n.TEXTURE_2D,ae.__webglTexture,n.TEXTURE0+L)}function q(V,L){const ae=i.get(V);if(V.version>0&&ae.__version!==V.version){ie(ae,V,L);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ae.__webglTexture,n.TEXTURE0+L)}function H(V,L){const ae=i.get(V);if(V.version>0&&ae.__version!==V.version){ie(ae,V,L);return}t.bindTexture(n.TEXTURE_3D,ae.__webglTexture,n.TEXTURE0+L)}function Q(V,L){const ae=i.get(V);if(V.version>0&&ae.__version!==V.version){F(ae,V,L);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture,n.TEXTURE0+L)}const Y={[Yi]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[wl]:n.MIRRORED_REPEAT},j={[zt]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Ea]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},fe={[Dp]:n.NEVER,[Fp]:n.ALWAYS,[Ip]:n.LESS,[hd]:n.LEQUAL,[Lp]:n.EQUAL,[Up]:n.GEQUAL,[Pp]:n.GREATER,[Op]:n.NOTEQUAL};function X(V,L){if(L.type===Dn&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===on||L.magFilter===Ea||L.magFilter===zr||L.magFilter===ki||L.minFilter===on||L.minFilter===Ea||L.minFilter===zr||L.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(V,n.TEXTURE_WRAP_S,Y[L.wrapS]),n.texParameteri(V,n.TEXTURE_WRAP_T,Y[L.wrapT]),(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)&&n.texParameteri(V,n.TEXTURE_WRAP_R,Y[L.wrapR]),n.texParameteri(V,n.TEXTURE_MAG_FILTER,j[L.magFilter]),n.texParameteri(V,n.TEXTURE_MIN_FILTER,j[L.minFilter]),L.compareFunction&&(n.texParameteri(V,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(V,n.TEXTURE_COMPARE_FUNC,fe[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===zt||L.minFilter!==zr&&L.minFilter!==ki||L.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");n.texParameterf(V,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function se(V,L){let ae=!1;V.__webglInit===void 0&&(V.__webglInit=!0,L.addEventListener("dispose",D));const ye=L.source;let we=d.get(ye);we===void 0&&(we={},d.set(ye,we));const Se=k(L);if(Se!==V.__cacheKey){we[Se]===void 0&&(we[Se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ae=!0),we[Se].usedTimes++;const ke=we[V.__cacheKey];ke!==void 0&&(we[V.__cacheKey].usedTimes--,ke.usedTimes===0&&b(L)),V.__cacheKey=Se,V.__webglTexture=we[Se].texture}return ae}function ie(V,L,ae){let ye=n.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ye=n.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ye=n.TEXTURE_3D);const we=se(V,L),Se=L.source;t.bindTexture(ye,V.__webglTexture,n.TEXTURE0+ae);const ke=i.get(Se);if(Se.version!==ke.__version||we===!0){t.activeTexture(n.TEXTURE0+ae);const Le=ht.getPrimaries(ht.workingColorSpace),Oe=L.colorSpace===di?null:ht.getPrimaries(L.colorSpace),ze=L.colorSpace===di||Le===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ce=M(L.image,!1,s.maxTextureSize);ce=Ne(L,ce);const _e=r.convert(L.format,L.colorSpace),ee=r.convert(L.type);let ue=x(L.internalFormat,_e,ee,L.colorSpace,L.isVideoTexture);X(ye,L);let de;const Ee=L.mipmaps,Te=L.isVideoTexture!==!0,ne=ke.__version===void 0||we===!0,G=Se.dataReady,he=S(L,ce);if(L.isDepthTexture)ue=v(L.format===ji,L.type),ne&&(Te?t.texStorage2D(n.TEXTURE_2D,1,ue,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ue,ce.width,ce.height,0,_e,ee,null));else if(L.isDataTexture)if(Ee.length>0){Te&&ne&&t.texStorage2D(n.TEXTURE_2D,he,ue,Ee[0].width,Ee[0].height);for(let N=0,z=Ee.length;N<z;N++)de=Ee[N],Te?G&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,de.width,de.height,_e,ee,de.data):t.texImage2D(n.TEXTURE_2D,N,ue,de.width,de.height,0,_e,ee,de.data);L.generateMipmaps=!1}else Te?(ne&&t.texStorage2D(n.TEXTURE_2D,he,ue,ce.width,ce.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,_e,ee,ce.data)):t.texImage2D(n.TEXTURE_2D,0,ue,ce.width,ce.height,0,_e,ee,ce.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Te&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,ue,Ee[0].width,Ee[0].height,ce.depth);for(let N=0,z=Ee.length;N<z;N++)if(de=Ee[N],L.format!==mn)if(_e!==null)if(Te){if(G)if(L.layerUpdates.size>0){const J=Gh(de.width,de.height,L.format,L.type);for(const Ae of L.layerUpdates){const be=de.data.subarray(Ae*J/de.data.BYTES_PER_ELEMENT,(Ae+1)*J/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,Ae,de.width,de.height,1,_e,be,0,0)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,de.width,de.height,ce.depth,_e,de.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,N,ue,de.width,de.height,ce.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,de.width,de.height,ce.depth,_e,ee,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,N,ue,de.width,de.height,ce.depth,0,_e,ee,de.data)}else{Te&&ne&&t.texStorage2D(n.TEXTURE_2D,he,ue,Ee[0].width,Ee[0].height);for(let N=0,z=Ee.length;N<z;N++)de=Ee[N],L.format!==mn?_e!==null?Te?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,N,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(n.TEXTURE_2D,N,ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?G&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,de.width,de.height,_e,ee,de.data):t.texImage2D(n.TEXTURE_2D,N,ue,de.width,de.height,0,_e,ee,de.data)}else if(L.isDataArrayTexture)if(Te){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,ue,ce.width,ce.height,ce.depth),G)if(L.layerUpdates.size>0){const N=Gh(ce.width,ce.height,L.format,L.type);for(const z of L.layerUpdates){const J=ce.data.subarray(z*N/ce.data.BYTES_PER_ELEMENT,(z+1)*N/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,z,ce.width,ce.height,1,_e,ee,J)}L.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,ee,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,ce.width,ce.height,ce.depth,0,_e,ee,ce.data);else if(L.isData3DTexture)Te?(ne&&t.texStorage3D(n.TEXTURE_3D,he,ue,ce.width,ce.height,ce.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,ee,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ue,ce.width,ce.height,ce.depth,0,_e,ee,ce.data);else if(L.isFramebufferTexture){if(ne)if(Te)t.texStorage2D(n.TEXTURE_2D,he,ue,ce.width,ce.height);else{let N=ce.width,z=ce.height;for(let J=0;J<he;J++)t.texImage2D(n.TEXTURE_2D,J,ue,N,z,0,_e,ee,null),N>>=1,z>>=1}}else if(Ee.length>0){if(Te&&ne){const N=De(Ee[0]);t.texStorage2D(n.TEXTURE_2D,he,ue,N.width,N.height)}for(let N=0,z=Ee.length;N<z;N++)de=Ee[N],Te?G&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,_e,ee,de):t.texImage2D(n.TEXTURE_2D,N,ue,_e,ee,de);L.generateMipmaps=!1}else if(Te){if(ne){const N=De(ce);t.texStorage2D(n.TEXTURE_2D,he,ue,N.width,N.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,ee,ce)}else t.texImage2D(n.TEXTURE_2D,0,ue,_e,ee,ce);p(L)&&m(ye),ke.__version=Se.version,L.onUpdate&&L.onUpdate(L)}V.__version=L.version}function F(V,L,ae){if(L.image.length!==6)return;const ye=se(V,L),we=L.source;t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+ae);const Se=i.get(we);if(we.version!==Se.__version||ye===!0){t.activeTexture(n.TEXTURE0+ae);const ke=ht.getPrimaries(ht.workingColorSpace),Le=L.colorSpace===di?null:ht.getPrimaries(L.colorSpace),Oe=L.colorSpace===di||ke===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ze=L.isCompressedTexture||L.image[0].isCompressedTexture,ce=L.image[0]&&L.image[0].isDataTexture,_e=[];for(let z=0;z<6;z++)!ze&&!ce?_e[z]=M(L.image[z],!0,s.maxCubemapSize):_e[z]=ce?L.image[z].image:L.image[z],_e[z]=Ne(L,_e[z]);const ee=_e[0],ue=r.convert(L.format,L.colorSpace),de=r.convert(L.type),Ee=x(L.internalFormat,ue,de,L.colorSpace),Te=L.isVideoTexture!==!0,ne=Se.__version===void 0||ye===!0,G=we.dataReady;let he=S(L,ee);X(n.TEXTURE_CUBE_MAP,L);let N;if(ze){Te&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ee,ee.width,ee.height);for(let z=0;z<6;z++){N=_e[z].mipmaps;for(let J=0;J<N.length;J++){const Ae=N[J];L.format!==mn?ue!==null?Te?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J,0,0,Ae.width,Ae.height,ue,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J,Ee,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J,0,0,Ae.width,Ae.height,ue,de,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J,Ee,Ae.width,Ae.height,0,ue,de,Ae.data)}}}else{if(N=L.mipmaps,Te&&ne){N.length>0&&he++;const z=De(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ee,z.width,z.height)}for(let z=0;z<6;z++)if(ce){Te?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,_e[z].width,_e[z].height,ue,de,_e[z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ee,_e[z].width,_e[z].height,0,ue,de,_e[z].data);for(let J=0;J<N.length;J++){const be=N[J].image[z].image;Te?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J+1,0,0,be.width,be.height,ue,de,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J+1,Ee,be.width,be.height,0,ue,de,be.data)}}else{Te?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ue,de,_e[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ee,ue,de,_e[z]);for(let J=0;J<N.length;J++){const Ae=N[J];Te?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J+1,0,0,ue,de,Ae.image[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,J+1,Ee,ue,de,Ae.image[z])}}}p(L)&&m(n.TEXTURE_CUBE_MAP),Se.__version=we.version,L.onUpdate&&L.onUpdate(L)}V.__version=L.version}function I(V,L,ae,ye,we,Se){const ke=r.convert(ae.format,ae.colorSpace),Le=r.convert(ae.type),Oe=x(ae.internalFormat,ke,Le,ae.colorSpace);if(!i.get(L).__hasExternalTextures){const ce=Math.max(1,L.width>>Se),_e=Math.max(1,L.height>>Se);we===n.TEXTURE_3D||we===n.TEXTURE_2D_ARRAY?t.texImage3D(we,Se,Oe,ce,_e,L.depth,0,ke,Le,null):t.texImage2D(we,Se,Oe,ce,_e,0,ke,Le,null)}t.bindFramebuffer(n.FRAMEBUFFER,V),oe(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,we,i.get(ae).__webglTexture,0,xe(L)):(we===n.TEXTURE_2D||we>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ye,we,i.get(ae).__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(V,L,ae){if(n.bindRenderbuffer(n.RENDERBUFFER,V),L.depthBuffer){const ye=L.depthTexture,we=ye&&ye.isDepthTexture?ye.type:null,Se=v(L.stencilBuffer,we),ke=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=xe(L);oe(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,Se,L.width,L.height):ae?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Se,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,Se,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ke,n.RENDERBUFFER,V)}else{const ye=L.textures;for(let we=0;we<ye.length;we++){const Se=ye[we],ke=r.convert(Se.format,Se.colorSpace),Le=r.convert(Se.type),Oe=x(Se.internalFormat,ke,Le,Se.colorSpace),ze=xe(L);ae&&oe(L)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Oe,L.width,L.height):oe(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,Oe,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,L.width,L.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function C(V,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,V),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),K(L.depthTexture,0);const ye=i.get(L.depthTexture).__webglTexture,we=xe(L);if(L.depthTexture.format===Ws)oe(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ye,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ye,0);else if(L.depthTexture.format===ji)oe(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ye,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function P(V){const L=i.get(V),ae=V.isWebGLCubeRenderTarget===!0;if(V.depthTexture&&!L.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");C(L.__webglFramebuffer,V)}else if(ae){L.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[ye]),L.__webglDepthbuffer[ye]=n.createRenderbuffer(),B(L.__webglDepthbuffer[ye],V,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=n.createRenderbuffer(),B(L.__webglDepthbuffer,V,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(V,L,ae){const ye=i.get(V);L!==void 0&&I(ye.__webglFramebuffer,V,V.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ae!==void 0&&P(V)}function $(V){const L=V.texture,ae=i.get(V),ye=i.get(L);V.addEventListener("dispose",y);const we=V.textures,Se=V.isWebGLCubeRenderTarget===!0,ke=we.length>1;if(ke||(ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture()),ye.__version=L.version,o.memory.textures++),Se){ae.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(L.mipmaps&&L.mipmaps.length>0){ae.__webglFramebuffer[Le]=[];for(let Oe=0;Oe<L.mipmaps.length;Oe++)ae.__webglFramebuffer[Le][Oe]=n.createFramebuffer()}else ae.__webglFramebuffer[Le]=n.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Le=0;Le<L.mipmaps.length;Le++)ae.__webglFramebuffer[Le]=n.createFramebuffer()}else ae.__webglFramebuffer=n.createFramebuffer();if(ke)for(let Le=0,Oe=we.length;Le<Oe;Le++){const ze=i.get(we[Le]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(V.samples>0&&oe(V)===!1){ae.__webglMultisampledFramebuffer=n.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Le=0;Le<we.length;Le++){const Oe=we[Le];ae.__webglColorRenderbuffer[Le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ae.__webglColorRenderbuffer[Le]);const ze=r.convert(Oe.format,Oe.colorSpace),ce=r.convert(Oe.type),_e=x(Oe.internalFormat,ze,ce,Oe.colorSpace,V.isXRRenderTarget===!0),ee=xe(V);n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,_e,V.width,V.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Le])}n.bindRenderbuffer(n.RENDERBUFFER,null),V.depthBuffer&&(ae.__webglDepthRenderbuffer=n.createRenderbuffer(),B(ae.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,ye.__webglTexture),X(n.TEXTURE_CUBE_MAP,L);for(let Le=0;Le<6;Le++)if(L.mipmaps&&L.mipmaps.length>0)for(let Oe=0;Oe<L.mipmaps.length;Oe++)I(ae.__webglFramebuffer[Le][Oe],V,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe);else I(ae.__webglFramebuffer[Le],V,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);p(L)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Le=0,Oe=we.length;Le<Oe;Le++){const ze=we[Le],ce=i.get(ze);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),X(n.TEXTURE_2D,ze),I(ae.__webglFramebuffer,V,ze,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,0),p(ze)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Le=n.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Le=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,ye.__webglTexture),X(Le,L),L.mipmaps&&L.mipmaps.length>0)for(let Oe=0;Oe<L.mipmaps.length;Oe++)I(ae.__webglFramebuffer[Oe],V,L,n.COLOR_ATTACHMENT0,Le,Oe);else I(ae.__webglFramebuffer,V,L,n.COLOR_ATTACHMENT0,Le,0);p(L)&&m(Le),t.unbindTexture()}V.depthBuffer&&P(V)}function Z(V){const L=V.textures;for(let ae=0,ye=L.length;ae<ye;ae++){const we=L[ae];if(p(we)){const Se=V.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ke=i.get(we).__webglTexture;t.bindTexture(Se,ke),m(Se),t.unbindTexture()}}}const w=[],re=[];function te(V){if(V.samples>0){if(oe(V)===!1){const L=V.textures,ae=V.width,ye=V.height;let we=n.COLOR_BUFFER_BIT;const Se=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(V),Le=L.length>1;if(Le)for(let Oe=0;Oe<L.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(we|=n.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(we|=n.STENCIL_BUFFER_BIT)),Le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Oe]);const ze=i.get(L[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,ae,ye,0,0,ae,ye,we,n.NEAREST),l===!0&&(w.length=0,re.length=0,w.push(n.COLOR_ATTACHMENT0+Oe),V.depthBuffer&&V.resolveDepthBuffer===!1&&(w.push(Se),re.push(Se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Le)for(let Oe=0;Oe<L.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Oe]);const ze=i.get(L[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&l){const L=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[L])}}}function xe(V){return Math.min(s.maxSamples,V.samples)}function oe(V){const L=i.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Ce(V){const L=o.render.frame;h.get(V)!==L&&(h.set(V,L),V.update())}function Ne(V,L){const ae=V.colorSpace,ye=V.format,we=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||ae!==xi&&ae!==di&&(ht.getTransfer(ae)===dt?(ye!==mn||we!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),L}function De(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=T,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=W,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=I,this.useMultisampledRTT=oe}function JM(n,e){function t(i,s=di){let r;const o=ht.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===td)return n.BYTE;if(i===nd)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===sd)return n.ALPHA;if(i===rd)return n.RGB;if(i===mn)return n.RGBA;if(i===od)return n.LUMINANCE;if(i===ad)return n.LUMINANCE_ALPHA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===Sc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===ld)return n.RG;if(i===Rc)return n.RG_INTEGER;if(i===yc)return n.RGBA_INTEGER;if(i===wo||i===Co||i===No||i===Do)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Nl||i===Dl||i===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Pl||i===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ll||i===Pl)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ol)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ul||i===Fl||i===kl||i===Bl||i===Gl||i===zl||i===Hl||i===Vl||i===Wl||i===Xl||i===$l||i===Kl||i===Yl||i===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Io||i===Zl||i===jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Io)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cd||i===Ql||i===Jl||i===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class eE extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`;class sE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ht,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pt({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rE extends Qs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const M=new sE,p=t.getContextAttributes();let m=null,x=null;const v=[],S=[],D=new et;let y=null;const A=new pn;A.layers.enable(1),A.viewport=new it;const b=new pn;b.layers.enable(2),b.viewport=new it;const R=[A,b],E=new eE;E.layers.enable(1),E.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let I=v[F];return I===void 0&&(I=new Xa,v[F]=I),I.getTargetRaySpace()},this.getControllerGrip=function(F){let I=v[F];return I===void 0&&(I=new Xa,v[F]=I),I.getGripSpace()},this.getHand=function(F){let I=v[F];return I===void 0&&(I=new Xa,v[F]=I),I.getHandSpace()};function k(F){const I=S.indexOf(F.inputSource);if(I===-1)return;const B=v[I];B!==void 0&&(B.update(F.inputSource,F.frame,c||o),B.dispatchEvent({type:F.type,data:F.inputSource}))}function K(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",q);for(let F=0;F<v.length;F++){const I=S[F];I!==null&&(S[F]=null,v[F].disconnect(I))}T=null,O=null,M.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,x=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",K),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const I={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,I),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new yn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let I=null,B=null,C=null;p.depth&&(C=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,I=p.stencil?ji:Ws,B=p.stencil?Zi:qi);const P={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(P),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new yn(d.textureWidth,d.textureHeight,{format:mn,type:In,depthTexture:new Ic(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(F){for(let I=0;I<F.removed.length;I++){const B=F.removed[I],C=S.indexOf(B);C>=0&&(S[C]=null,v[C].disconnect(B))}for(let I=0;I<F.added.length;I++){const B=F.added[I];let C=S.indexOf(B);if(C===-1){for(let W=0;W<v.length;W++)if(W>=S.length){S.push(B),C=W;break}else if(S[W]===null){S[W]=B,C=W;break}if(C===-1)break}const P=v[C];P&&P.connect(B)}}const H=new le,Q=new le;function Y(F,I,B){H.setFromMatrixPosition(I.matrixWorld),Q.setFromMatrixPosition(B.matrixWorld);const C=H.distanceTo(Q),P=I.projectionMatrix.elements,W=B.projectionMatrix.elements,$=P[14]/(P[10]-1),Z=P[14]/(P[10]+1),w=(P[9]+1)/P[5],re=(P[9]-1)/P[5],te=(P[8]-1)/P[0],xe=(W[8]+1)/W[0],oe=$*te,Ce=$*xe,Ne=C/(-te+xe),De=Ne*-te;I.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(De),F.translateZ(Ne),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const V=$+Ne,L=Z+Ne,ae=oe-De,ye=Ce+(C-De),we=w*Z/L*V,Se=re*Z/L*V;F.projectionMatrix.makePerspective(ae,ye,we,Se,V,L),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function j(F,I){I===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(I.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;M.texture!==null&&(F.near=M.depthNear,F.far=M.depthFar),E.near=b.near=A.near=F.near,E.far=b.far=A.far=F.far,(T!==E.near||O!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,O=E.far,A.near=T,A.far=O,b.near=T,b.far=O,A.updateProjectionMatrix(),b.updateProjectionMatrix(),F.updateProjectionMatrix());const I=F.parent,B=E.cameras;j(E,I);for(let C=0;C<B.length;C++)j(B[C],I);B.length===2?Y(E,A,b):E.projectionMatrix.copy(A.projectionMatrix),fe(F,E,I)};function fe(F,I,B){B===null?F.matrix.copy(I.matrixWorld):(F.matrix.copy(B.matrixWorld),F.matrix.invert(),F.matrix.multiply(I.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(I.projectionMatrix),F.projectionMatrixInverse.copy(I.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Nr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(E)};let X=null;function se(F,I){if(h=I.getViewerPose(c||o),g=I,h!==null){const B=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let C=!1;B.length!==E.cameras.length&&(E.cameras.length=0,C=!0);for(let W=0;W<B.length;W++){const $=B[W];let Z=null;if(f!==null)Z=f.getViewport($);else{const re=u.getViewSubImage(d,$);Z=re.viewport,W===0&&(e.setRenderTargetTextures(x,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(x))}let w=R[W];w===void 0&&(w=new pn,w.layers.enable(W),w.viewport=new it,R[W]=w),w.matrix.fromArray($.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray($.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Z.x,Z.y,Z.width,Z.height),W===0&&(E.matrix.copy(w.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),C===!0&&E.cameras.push(w)}const P=s.enabledFeatures;if(P&&P.includes("depth-sensing")){const W=u.getDepthInformation(B[0]);W&&W.isValid&&W.texture&&M.init(e,W,s.renderState)}}for(let B=0;B<v.length;B++){const C=S[B],P=v[B];C!==null&&P!==void 0&&P.update(C,I,c||o)}X&&X(F,I),I.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:I}),g=null}const ie=new Sd;ie.setAnimationLoop(se),this.setAnimationLoop=function(F){X=F},this.dispose=function(){}}}const wi=new Ln,oE=new ot;function aE(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Ed(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Yt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Yt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,S=x.envMapRotation;v&&(p.envMap.value=v,wi.copy(S),wi.x*=-1,wi.y*=-1,wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),p.envMapRotation.value.setFromMatrix4(oE.makeRotationFromEuler(wi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lE(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",p));const D=v.program;i.updateUBOMapping(x,D);const y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){const v=u();x.__bindingPointIndex=v;const S=n.createBuffer(),D=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,D,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],S=x.uniforms,D=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let y=0,A=S.length;y<A;y++){const b=Array.isArray(S[y])?S[y]:[S[y]];for(let R=0,E=b.length;R<E;R++){const T=b[R];if(f(T,y,R,D)===!0){const O=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let K=0;for(let q=0;q<k.length;q++){const H=k[q],Q=M(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,O+K,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,K),K+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,v,S,D){const y=x.value,A=v+"_"+S;if(D[A]===void 0)return typeof y=="number"||typeof y=="boolean"?D[A]=y:D[A]=y.clone(),!0;{const b=D[A];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return D[A]=y,!0}else if(b.equals(y)===!1)return b.copy(y),!0}return!1}function g(x){const v=x.uniforms;let S=0;const D=16;for(let A=0,b=v.length;A<b;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,T=R.length;E<T;E++){const O=R[E],k=Array.isArray(O.value)?O.value:[O.value];for(let K=0,q=k.length;K<q;K++){const H=k[K],Q=M(H),Y=S%D;Y!==0&&D-Y<Q.boundary&&(S+=D-Y),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Q.storage}}}const y=S%D;return y>0&&(S+=D-y),x.__size=S,x.__cache={},this}function M(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class cE{constructor(e={}){const{canvas:t=em(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let M=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Yn,this.toneMappingExposure=1;const v=this;let S=!1,D=0,y=0,A=null,b=-1,R=null;const E=new it,T=new it;let O=null;const k=new Ve(0);let K=0,q=t.width,H=t.height,Q=1,Y=null,j=null;const fe=new it(0,0,q,H),X=new it(0,0,q,H);let se=!1;const ie=new Cc;let F=!1,I=!1;const B=new ot,C=new le,P=new it,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function Z(){return A===null?Q:1}let w=i;function re(U,pe){return t.getContext(U,pe)}try{const U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",J,!1),w===null){const pe="webgl2";if(w=re(pe,U),w===null)throw re(pe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let te,xe,oe,Ce,Ne,De,V,L,ae,ye,we,Se,ke,Le,Oe,ze,ce,_e,ee,ue,de,Ee,Te,ne;function G(){te=new _g(w),te.init(),Ee=new JM(w,te),xe=new hg(w,te,e,Ee),oe=new ZM(w),Ce=new Eg(w),Ne=new UM,De=new QM(w,te,oe,Ne,xe,Ee,Ce),V=new dg(v),L=new mg(v),ae=new Tm(w),Te=new lg(w,ae),ye=new gg(w,ae,Ce,Te),we=new xg(w,ye,ae,Ce),ee=new vg(w,xe,De),ze=new ug(Ne),Se=new OM(v,V,L,te,xe,Te,ze),ke=new aE(v,Ne),Le=new kM,Oe=new WM(te),_e=new ag(v,V,L,oe,we,d,l),ce=new qM(v,we,xe),ne=new lE(w,Ce,xe,oe),ue=new cg(w,te,Ce),de=new Mg(w,te,Ce),Ce.programs=Se.programs,v.capabilities=xe,v.extensions=te,v.properties=Ne,v.renderLists=Le,v.shadowMap=ce,v.state=oe,v.info=Ce}G();const he=new rE(v,w);this.xr=he,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const U=te.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=te.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(U){U!==void 0&&(Q=U,this.setSize(q,H,!1))},this.getSize=function(U){return U.set(q,H)},this.setSize=function(U,pe,Me=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=U,H=pe,t.width=Math.floor(U*Q),t.height=Math.floor(pe*Q),Me===!0&&(t.style.width=U+"px",t.style.height=pe+"px"),this.setViewport(0,0,U,pe)},this.getDrawingBufferSize=function(U){return U.set(q*Q,H*Q).floor()},this.setDrawingBufferSize=function(U,pe,Me){q=U,H=pe,Q=Me,t.width=Math.floor(U*Me),t.height=Math.floor(pe*Me),this.setViewport(0,0,U,pe)},this.getCurrentViewport=function(U){return U.copy(E)},this.getViewport=function(U){return U.copy(fe)},this.setViewport=function(U,pe,Me,ve){U.isVector4?fe.set(U.x,U.y,U.z,U.w):fe.set(U,pe,Me,ve),oe.viewport(E.copy(fe).multiplyScalar(Q).round())},this.getScissor=function(U){return U.copy(X)},this.setScissor=function(U,pe,Me,ve){U.isVector4?X.set(U.x,U.y,U.z,U.w):X.set(U,pe,Me,ve),oe.scissor(T.copy(X).multiplyScalar(Q).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(U){oe.setScissorTest(se=U)},this.setOpaqueSort=function(U){Y=U},this.setTransparentSort=function(U){j=U},this.getClearColor=function(U){return U.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(U=!0,pe=!0,Me=!0){let ve=0;if(U){let me=!1;if(A!==null){const Fe=A.texture.format;me=Fe===yc||Fe===Rc||Fe===Ac}if(me){const Fe=A.texture.type,He=Fe===In||Fe===qi||Fe===Cr||Fe===Zi||Fe===vc||Fe===xc,$e=_e.getClearColor(),Ke=_e.getClearAlpha(),Ze=$e.r,Je=$e.g,qe=$e.b;He?(f[0]=Ze,f[1]=Je,f[2]=qe,f[3]=Ke,w.clearBufferuiv(w.COLOR,0,f)):(g[0]=Ze,g[1]=Je,g[2]=qe,g[3]=Ke,w.clearBufferiv(w.COLOR,0,g))}else ve|=w.COLOR_BUFFER_BIT}pe&&(ve|=w.DEPTH_BUFFER_BIT),Me&&(ve|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Le.dispose(),Oe.dispose(),Ne.dispose(),V.dispose(),L.dispose(),we.dispose(),Te.dispose(),ne.dispose(),Se.dispose(),he.dispose(),he.removeEventListener("sessionstart",Re),he.removeEventListener("sessionend",Ue),Be.stop()};function N(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const U=Ce.autoReset,pe=ce.enabled,Me=ce.autoUpdate,ve=ce.needsUpdate,me=ce.type;G(),Ce.autoReset=U,ce.enabled=pe,ce.autoUpdate=Me,ce.needsUpdate=ve,ce.type=me}function J(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Ae(U){const pe=U.target;pe.removeEventListener("dispose",Ae),be(pe)}function be(U){Pe(U),Ne.remove(U)}function Pe(U){const pe=Ne.get(U).programs;pe!==void 0&&(pe.forEach(function(Me){Se.releaseProgram(Me)}),U.isShaderMaterial&&Se.releaseShaderCache(U))}this.renderBufferDirect=function(U,pe,Me,ve,me,Fe){pe===null&&(pe=W);const He=me.isMesh&&me.matrixWorld.determinant()<0,$e=ns(U,pe,Me,ve,me);oe.setMaterial(ve,He);let Ke=Me.index,Ze=1;if(ve.wireframe===!0){if(Ke=ye.getWireframeAttribute(Me),Ke===void 0)return;Ze=2}const Je=Me.drawRange,qe=Me.attributes.position;let at=Je.start*Ze,_t=(Je.start+Je.count)*Ze;Fe!==null&&(at=Math.max(at,Fe.start*Ze),_t=Math.min(_t,(Fe.start+Fe.count)*Ze)),Ke!==null?(at=Math.max(at,0),_t=Math.min(_t,Ke.count)):qe!=null&&(at=Math.max(at,0),_t=Math.min(_t,qe.count));const gt=_t-at;if(gt<0||gt===1/0)return;Te.setup(me,ve,$e,Me,Ke);let jt,lt=ue;if(Ke!==null&&(jt=ae.get(Ke),lt=de,lt.setIndex(jt)),me.isMesh)ve.wireframe===!0?(oe.setLineWidth(ve.wireframeLinewidth*Z()),lt.setMode(w.LINES)):lt.setMode(w.TRIANGLES);else if(me.isLine){let Ye=ve.linewidth;Ye===void 0&&(Ye=1),oe.setLineWidth(Ye*Z()),me.isLineSegments?lt.setMode(w.LINES):me.isLineLoop?lt.setMode(w.LINE_LOOP):lt.setMode(w.LINE_STRIP)}else me.isPoints?lt.setMode(w.POINTS):me.isSprite&&lt.setMode(w.TRIANGLES);if(me.isBatchedMesh)if(me._multiDrawInstances!==null)lt.renderMultiDrawInstances(me._multiDrawStarts,me._multiDrawCounts,me._multiDrawCount,me._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))lt.renderMultiDraw(me._multiDrawStarts,me._multiDrawCounts,me._multiDrawCount);else{const Ye=me._multiDrawStarts,Nt=me._multiDrawCounts,ct=me._multiDrawCount,gn=Ke?ae.get(Ke).bytesPerElement:1,is=Ne.get(ve).currentProgram.getUniforms();for(let Qt=0;Qt<ct;Qt++)is.setValue(w,"_gl_DrawID",Qt),lt.render(Ye[Qt]/gn,Nt[Qt])}else if(me.isInstancedMesh)lt.renderInstances(at,gt,me.count);else if(Me.isInstancedBufferGeometry){const Ye=Me._maxInstanceCount!==void 0?Me._maxInstanceCount:1/0,Nt=Math.min(Me.instanceCount,Ye);lt.renderInstances(at,gt,Nt)}else lt.render(at,gt)};function We(U,pe,Me){U.transparent===!0&&U.side===An&&U.forceSinglePass===!1?(U.side=Yt,U.needsUpdate=!0,Si(U,pe,Me),U.side=Ei,U.needsUpdate=!0,Si(U,pe,Me),U.side=An):Si(U,pe,Me)}this.compile=function(U,pe,Me=null){Me===null&&(Me=U),p=Oe.get(Me),p.init(pe),x.push(p),Me.traverseVisible(function(me){me.isLight&&me.layers.test(pe.layers)&&(p.pushLight(me),me.castShadow&&p.pushShadow(me))}),U!==Me&&U.traverseVisible(function(me){me.isLight&&me.layers.test(pe.layers)&&(p.pushLight(me),me.castShadow&&p.pushShadow(me))}),p.setupLights();const ve=new Set;return U.traverse(function(me){const Fe=me.material;if(Fe)if(Array.isArray(Fe))for(let He=0;He<Fe.length;He++){const $e=Fe[He];We($e,Me,me),ve.add($e)}else We(Fe,Me,me),ve.add(Fe)}),x.pop(),p=null,ve},this.compileAsync=function(U,pe,Me=null){const ve=this.compile(U,pe,Me);return new Promise(me=>{function Fe(){if(ve.forEach(function(He){Ne.get(He).currentProgram.isReady()&&ve.delete(He)}),ve.size===0){me(U);return}setTimeout(Fe,10)}te.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ge=null;function Ie(U){ge&&ge(U)}function Re(){Be.stop()}function Ue(){Be.start()}const Be=new Sd;Be.setAnimationLoop(Ie),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(U){ge=U,he.setAnimationLoop(U),U===null?Be.stop():Be.start()},he.addEventListener("sessionstart",Re),he.addEventListener("sessionend",Ue),this.render=function(U,pe){if(pe!==void 0&&pe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.parent===null&&pe.matrixWorldAutoUpdate===!0&&pe.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(pe),pe=he.getCamera()),U.isScene===!0&&U.onBeforeRender(v,U,pe,A),p=Oe.get(U,x.length),p.init(pe),x.push(p),B.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),ie.setFromProjectionMatrix(B),I=this.localClippingEnabled,F=ze.init(this.clippingPlanes,I),M=Le.get(U,m.length),M.init(),m.push(M),he.enabled===!0&&he.isPresenting===!0){const Fe=v.xr.getDepthSensingMesh();Fe!==null&&rt(Fe,pe,-1/0,v.sortObjects)}rt(U,pe,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(Y,j),$=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,$&&_e.addToRenderList(M,U),this.info.render.frame++,F===!0&&ze.beginShadows();const Me=p.state.shadowsArray;ce.render(Me,U,pe),F===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const ve=M.opaque,me=M.transmissive;if(p.setupLights(),pe.isArrayCamera){const Fe=pe.cameras;if(me.length>0)for(let He=0,$e=Fe.length;He<$e;He++){const Ke=Fe[He];Rt(ve,me,U,Ke)}$&&_e.render(U);for(let He=0,$e=Fe.length;He<$e;He++){const Ke=Fe[He];ut(M,U,Ke,Ke.viewport)}}else me.length>0&&Rt(ve,me,U,pe),$&&_e.render(U),ut(M,U,pe);A!==null&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),U.isScene===!0&&U.onAfterRender(v,U,pe),Te.resetDefaultState(),b=-1,R=null,x.pop(),x.length>0?(p=x[x.length-1],F===!0&&ze.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function rt(U,pe,Me,ve){if(U.visible===!1)return;if(U.layers.test(pe.layers)){if(U.isGroup)Me=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(pe);else if(U.isLight)p.pushLight(U),U.castShadow&&p.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ie.intersectsSprite(U)){ve&&P.setFromMatrixPosition(U.matrixWorld).applyMatrix4(B);const He=we.update(U),$e=U.material;$e.visible&&M.push(U,He,$e,Me,P.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ie.intersectsObject(U))){const He=we.update(U),$e=U.material;if(ve&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),P.copy(U.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),P.copy(He.boundingSphere.center)),P.applyMatrix4(U.matrixWorld).applyMatrix4(B)),Array.isArray($e)){const Ke=He.groups;for(let Ze=0,Je=Ke.length;Ze<Je;Ze++){const qe=Ke[Ze],at=$e[qe.materialIndex];at&&at.visible&&M.push(U,He,at,Me,P.z,qe)}}else $e.visible&&M.push(U,He,$e,Me,P.z,null)}}const Fe=U.children;for(let He=0,$e=Fe.length;He<$e;He++)rt(Fe[He],pe,Me,ve)}function ut(U,pe,Me,ve){const me=U.opaque,Fe=U.transmissive,He=U.transparent;p.setupLightsView(Me),F===!0&&ze.setGlobalState(v.clippingPlanes,Me),ve&&oe.viewport(E.copy(ve)),me.length>0&&yt(me,pe,Me),Fe.length>0&&yt(Fe,pe,Me),He.length>0&&yt(He,pe,Me),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Rt(U,pe,Me,ve){if((Me.isScene===!0?Me.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ve.id]===void 0&&(p.state.transmissionRenderTarget[ve.id]=new yn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?qn:In,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const Fe=p.state.transmissionRenderTarget[ve.id],He=ve.viewport||E;Fe.setSize(He.z,He.w);const $e=v.getRenderTarget();v.setRenderTarget(Fe),v.getClearColor(k),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),$?_e.render(Me):v.clear();const Ke=v.toneMapping;v.toneMapping=Yn;const Ze=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),p.setupLightsView(ve),F===!0&&ze.setGlobalState(v.clippingPlanes,ve),yt(U,Me,ve),De.updateMultisampleRenderTarget(Fe),De.updateRenderTargetMipmap(Fe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let qe=0,at=pe.length;qe<at;qe++){const _t=pe[qe],gt=_t.object,jt=_t.geometry,lt=_t.material,Ye=_t.group;if(lt.side===An&&gt.layers.test(ve.layers)){const Nt=lt.side;lt.side=Yt,lt.needsUpdate=!0,_n(gt,Me,ve,jt,lt,Ye),lt.side=Nt,lt.needsUpdate=!0,Je=!0}}Je===!0&&(De.updateMultisampleRenderTarget(Fe),De.updateRenderTargetMipmap(Fe))}v.setRenderTarget($e),v.setClearColor(k,K),Ze!==void 0&&(ve.viewport=Ze),v.toneMapping=Ke}function yt(U,pe,Me){const ve=pe.isScene===!0?pe.overrideMaterial:null;for(let me=0,Fe=U.length;me<Fe;me++){const He=U[me],$e=He.object,Ke=He.geometry,Ze=ve===null?He.material:ve,Je=He.group;$e.layers.test(Me.layers)&&_n($e,pe,Me,Ke,Ze,Je)}}function _n(U,pe,Me,ve,me,Fe){U.onBeforeRender(v,pe,Me,ve,me,Fe),U.modelViewMatrix.multiplyMatrices(Me.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),me.transparent===!0&&me.side===An&&me.forceSinglePass===!1?(me.side=Yt,me.needsUpdate=!0,v.renderBufferDirect(Me,pe,ve,me,U,Fe),me.side=Ei,me.needsUpdate=!0,v.renderBufferDirect(Me,pe,ve,me,U,Fe),me.side=An):v.renderBufferDirect(Me,pe,ve,me,U,Fe),U.onAfterRender(v,pe,Me,ve,me,Fe)}function Si(U,pe,Me){pe.isScene!==!0&&(pe=W);const ve=Ne.get(U),me=p.state.lights,Fe=p.state.shadowsArray,He=me.state.version,$e=Se.getParameters(U,me.state,Fe,pe,Me),Ke=Se.getProgramCacheKey($e);let Ze=ve.programs;ve.environment=U.isMeshStandardMaterial?pe.environment:null,ve.fog=pe.fog,ve.envMap=(U.isMeshStandardMaterial?L:V).get(U.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&U.envMap===null?pe.environmentRotation:U.envMapRotation,Ze===void 0&&(U.addEventListener("dispose",Ae),Ze=new Map,ve.programs=Ze);let Je=Ze.get(Ke);if(Je!==void 0){if(ve.currentProgram===Je&&ve.lightsStateVersion===He)return Br(U,$e),Je}else $e.uniforms=Se.getUniforms(U),U.onBeforeCompile($e,v),Je=Se.acquireProgram($e,Ke),Ze.set(Ke,Je),ve.uniforms=$e.uniforms;const qe=ve.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(qe.clippingPlanes=ze.uniform),Br(U,$e),ve.needsLights=Zt(U),ve.lightsStateVersion=He,ve.needsLights&&(qe.ambientLightColor.value=me.state.ambient,qe.lightProbe.value=me.state.probe,qe.directionalLights.value=me.state.directional,qe.directionalLightShadows.value=me.state.directionalShadow,qe.spotLights.value=me.state.spot,qe.spotLightShadows.value=me.state.spotShadow,qe.rectAreaLights.value=me.state.rectArea,qe.ltc_1.value=me.state.rectAreaLTC1,qe.ltc_2.value=me.state.rectAreaLTC2,qe.pointLights.value=me.state.point,qe.pointLightShadows.value=me.state.pointShadow,qe.hemisphereLights.value=me.state.hemi,qe.directionalShadowMap.value=me.state.directionalShadowMap,qe.directionalShadowMatrix.value=me.state.directionalShadowMatrix,qe.spotShadowMap.value=me.state.spotShadowMap,qe.spotLightMatrix.value=me.state.spotLightMatrix,qe.spotLightMap.value=me.state.spotLightMap,qe.pointShadowMap.value=me.state.pointShadowMap,qe.pointShadowMatrix.value=me.state.pointShadowMatrix),ve.currentProgram=Je,ve.uniformsList=null,Je}function rr(U){if(U.uniformsList===null){const pe=U.currentProgram.getUniforms();U.uniformsList=Lo.seqWithValue(pe.seq,U.uniforms)}return U.uniformsList}function Br(U,pe){const Me=Ne.get(U);Me.outputColorSpace=pe.outputColorSpace,Me.batching=pe.batching,Me.batchingColor=pe.batchingColor,Me.instancing=pe.instancing,Me.instancingColor=pe.instancingColor,Me.instancingMorph=pe.instancingMorph,Me.skinning=pe.skinning,Me.morphTargets=pe.morphTargets,Me.morphNormals=pe.morphNormals,Me.morphColors=pe.morphColors,Me.morphTargetsCount=pe.morphTargetsCount,Me.numClippingPlanes=pe.numClippingPlanes,Me.numIntersection=pe.numClipIntersection,Me.vertexAlphas=pe.vertexAlphas,Me.vertexTangents=pe.vertexTangents,Me.toneMapping=pe.toneMapping}function ns(U,pe,Me,ve,me){pe.isScene!==!0&&(pe=W),De.resetTextureUnits();const Fe=pe.fog,He=ve.isMeshStandardMaterial?pe.environment:null,$e=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xi,Ke=(ve.isMeshStandardMaterial?L:V).get(ve.envMap||He),Ze=ve.vertexColors===!0&&!!Me.attributes.color&&Me.attributes.color.itemSize===4,Je=!!Me.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),qe=!!Me.morphAttributes.position,at=!!Me.morphAttributes.normal,_t=!!Me.morphAttributes.color;let gt=Yn;ve.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=v.toneMapping);const jt=Me.morphAttributes.position||Me.morphAttributes.normal||Me.morphAttributes.color,lt=jt!==void 0?jt.length:0,Ye=Ne.get(ve),Nt=p.state.lights;if(F===!0&&(I===!0||U!==R)){const an=U===R&&ve.id===b;ze.setState(ve,U,an)}let ct=!1;ve.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Nt.state.version||Ye.outputColorSpace!==$e||me.isBatchedMesh&&Ye.batching===!1||!me.isBatchedMesh&&Ye.batching===!0||me.isBatchedMesh&&Ye.batchingColor===!0&&me.colorTexture===null||me.isBatchedMesh&&Ye.batchingColor===!1&&me.colorTexture!==null||me.isInstancedMesh&&Ye.instancing===!1||!me.isInstancedMesh&&Ye.instancing===!0||me.isSkinnedMesh&&Ye.skinning===!1||!me.isSkinnedMesh&&Ye.skinning===!0||me.isInstancedMesh&&Ye.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&Ye.instancingColor===!1&&me.instanceColor!==null||me.isInstancedMesh&&Ye.instancingMorph===!0&&me.morphTexture===null||me.isInstancedMesh&&Ye.instancingMorph===!1&&me.morphTexture!==null||Ye.envMap!==Ke||ve.fog===!0&&Ye.fog!==Fe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ze.numPlanes||Ye.numIntersection!==ze.numIntersection)||Ye.vertexAlphas!==Ze||Ye.vertexTangents!==Je||Ye.morphTargets!==qe||Ye.morphNormals!==at||Ye.morphColors!==_t||Ye.toneMapping!==gt||Ye.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Ye.__version=ve.version);let gn=Ye.currentProgram;ct===!0&&(gn=Si(ve,pe,me));let is=!1,Qt=!1,_a=!1;const St=gn.getUniforms(),jn=Ye.uniforms;if(oe.useProgram(gn.program)&&(is=!0,Qt=!0,_a=!0),ve.id!==b&&(b=ve.id,Qt=!0),is||R!==U){St.setValue(w,"projectionMatrix",U.projectionMatrix),St.setValue(w,"viewMatrix",U.matrixWorldInverse);const an=St.map.cameraPosition;an!==void 0&&an.setValue(w,C.setFromMatrixPosition(U.matrixWorld)),xe.logarithmicDepthBuffer&&St.setValue(w,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&St.setValue(w,"isOrthographic",U.isOrthographicCamera===!0),R!==U&&(R=U,Qt=!0,_a=!0)}if(me.isSkinnedMesh){St.setOptional(w,me,"bindMatrix"),St.setOptional(w,me,"bindMatrixInverse");const an=me.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),St.setValue(w,"boneTexture",an.boneTexture,De))}me.isBatchedMesh&&(St.setOptional(w,me,"batchingTexture"),St.setValue(w,"batchingTexture",me._matricesTexture,De),St.setOptional(w,me,"batchingIdTexture"),St.setValue(w,"batchingIdTexture",me._indirectTexture,De),St.setOptional(w,me,"batchingColorTexture"),me._colorsTexture!==null&&St.setValue(w,"batchingColorTexture",me._colorsTexture,De));const ga=Me.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0)&&ee.update(me,Me,gn),(Qt||Ye.receiveShadow!==me.receiveShadow)&&(Ye.receiveShadow=me.receiveShadow,St.setValue(w,"receiveShadow",me.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(jn.envMap.value=Ke,jn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),ve.isMeshStandardMaterial&&ve.envMap===null&&pe.environment!==null&&(jn.envMapIntensity.value=pe.environmentIntensity),Qt&&(St.setValue(w,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Gr(jn,_a),Fe&&ve.fog===!0&&ke.refreshFogUniforms(jn,Fe),ke.refreshMaterialUniforms(jn,ve,Q,H,p.state.transmissionRenderTarget[U.id]),Lo.upload(w,rr(Ye),jn,De)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(Lo.upload(w,rr(Ye),jn,De),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&St.setValue(w,"center",me.center),St.setValue(w,"modelViewMatrix",me.modelViewMatrix),St.setValue(w,"normalMatrix",me.normalMatrix),St.setValue(w,"modelMatrix",me.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const an=ve.uniformsGroups;for(let Ma=0,jf=an.length;Ma<jf;Ma++){const Wc=an[Ma];ne.update(Wc,gn),ne.bind(Wc,gn)}}return gn}function Gr(U,pe){U.ambientLightColor.needsUpdate=pe,U.lightProbe.needsUpdate=pe,U.directionalLights.needsUpdate=pe,U.directionalLightShadows.needsUpdate=pe,U.pointLights.needsUpdate=pe,U.pointLightShadows.needsUpdate=pe,U.spotLights.needsUpdate=pe,U.spotLightShadows.needsUpdate=pe,U.rectAreaLights.needsUpdate=pe,U.hemisphereLights.needsUpdate=pe}function Zt(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(U,pe,Me){Ne.get(U.texture).__webglTexture=pe,Ne.get(U.depthTexture).__webglTexture=Me;const ve=Ne.get(U);ve.__hasExternalTextures=!0,ve.__autoAllocateDepthBuffer=Me===void 0,ve.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,pe){const Me=Ne.get(U);Me.__webglFramebuffer=pe,Me.__useDefaultFramebuffer=pe===void 0},this.setRenderTarget=function(U,pe=0,Me=0){A=U,D=pe,y=Me;let ve=!0,me=null,Fe=!1,He=!1;if(U){const Ke=Ne.get(U);Ke.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(w.FRAMEBUFFER,null),ve=!1):Ke.__webglFramebuffer===void 0?De.setupRenderTarget(U):Ke.__hasExternalTextures&&De.rebindTextures(U,Ne.get(U.texture).__webglTexture,Ne.get(U.depthTexture).__webglTexture);const Ze=U.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(He=!0);const Je=Ne.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Je[pe])?me=Je[pe][Me]:me=Je[pe],Fe=!0):U.samples>0&&De.useMultisampledRTT(U)===!1?me=Ne.get(U).__webglMultisampledFramebuffer:Array.isArray(Je)?me=Je[Me]:me=Je,E.copy(U.viewport),T.copy(U.scissor),O=U.scissorTest}else E.copy(fe).multiplyScalar(Q).floor(),T.copy(X).multiplyScalar(Q).floor(),O=se;if(oe.bindFramebuffer(w.FRAMEBUFFER,me)&&ve&&oe.drawBuffers(U,me),oe.viewport(E),oe.scissor(T),oe.setScissorTest(O),Fe){const Ke=Ne.get(U.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke.__webglTexture,Me)}else if(He){const Ke=Ne.get(U.texture),Ze=pe||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ke.__webglTexture,Me||0,Ze)}b=-1},this.readRenderTargetPixels=function(U,pe,Me,ve,me,Fe,He){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Ne.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){oe.bindFramebuffer(w.FRAMEBUFFER,$e);try{const Ke=U.texture,Ze=Ke.format,Je=Ke.type;if(!xe.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}pe>=0&&pe<=U.width-ve&&Me>=0&&Me<=U.height-me&&w.readPixels(pe,Me,ve,me,Ee.convert(Ze),Ee.convert(Je),Fe)}finally{const Ke=A!==null?Ne.get(A).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(U,pe,Me,ve,me,Fe,He){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Ne.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){oe.bindFramebuffer(w.FRAMEBUFFER,$e);try{const Ke=U.texture,Ze=Ke.format,Je=Ke.type;if(!xe.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(pe>=0&&pe<=U.width-ve&&Me>=0&&Me<=U.height-me){const qe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.bufferData(w.PIXEL_PACK_BUFFER,Fe.byteLength,w.STREAM_READ),w.readPixels(pe,Me,ve,me,Ee.convert(Ze),Ee.convert(Je),0),w.flush();const at=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await tm(w,at,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Fe)}finally{w.deleteBuffer(qe),w.deleteSync(at)}return Fe}}finally{const Ke=A!==null?Ne.get(A).__webglFramebuffer:null;oe.bindFramebuffer(w.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(U,pe=null,Me=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),pe=arguments[0]||null,U=arguments[1]);const ve=Math.pow(2,-Me),me=Math.floor(U.image.width*ve),Fe=Math.floor(U.image.height*ve),He=pe!==null?pe.x:0,$e=pe!==null?pe.y:0;De.setTexture2D(U,0),w.copyTexSubImage2D(w.TEXTURE_2D,Me,0,0,He,$e,me,Fe),oe.unbindTexture()},this.copyTextureToTexture=function(U,pe,Me=null,ve=null,me=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ve=arguments[0]||null,U=arguments[1],pe=arguments[2],me=arguments[3]||0,Me=null);let Fe,He,$e,Ke,Ze,Je;Me!==null?(Fe=Me.max.x-Me.min.x,He=Me.max.y-Me.min.y,$e=Me.min.x,Ke=Me.min.y):(Fe=U.image.width,He=U.image.height,$e=0,Ke=0),ve!==null?(Ze=ve.x,Je=ve.y):(Ze=0,Je=0);const qe=Ee.convert(pe.format),at=Ee.convert(pe.type);De.setTexture2D(pe,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,pe.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,pe.unpackAlignment);const _t=w.getParameter(w.UNPACK_ROW_LENGTH),gt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),jt=w.getParameter(w.UNPACK_SKIP_PIXELS),lt=w.getParameter(w.UNPACK_SKIP_ROWS),Ye=w.getParameter(w.UNPACK_SKIP_IMAGES),Nt=U.isCompressedTexture?U.mipmaps[me]:U.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Nt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Nt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,$e),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ke),U.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,me,Ze,Je,Fe,He,qe,at,Nt.data):U.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,me,Ze,Je,Nt.width,Nt.height,qe,Nt.data):w.texSubImage2D(w.TEXTURE_2D,me,Ze,Je,Fe,He,qe,at,Nt),w.pixelStorei(w.UNPACK_ROW_LENGTH,_t),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,gt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,jt),w.pixelStorei(w.UNPACK_SKIP_ROWS,lt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ye),me===0&&pe.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(U,pe,Me=null,ve=null,me=0){U.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Me=arguments[0]||null,ve=arguments[1]||null,U=arguments[2],pe=arguments[3],me=arguments[4]||0);let Fe,He,$e,Ke,Ze,Je,qe,at,_t;const gt=U.isCompressedTexture?U.mipmaps[me]:U.image;Me!==null?(Fe=Me.max.x-Me.min.x,He=Me.max.y-Me.min.y,$e=Me.max.z-Me.min.z,Ke=Me.min.x,Ze=Me.min.y,Je=Me.min.z):(Fe=gt.width,He=gt.height,$e=gt.depth,Ke=0,Ze=0,Je=0),ve!==null?(qe=ve.x,at=ve.y,_t=ve.z):(qe=0,at=0,_t=0);const jt=Ee.convert(pe.format),lt=Ee.convert(pe.type);let Ye;if(pe.isData3DTexture)De.setTexture3D(pe,0),Ye=w.TEXTURE_3D;else if(pe.isDataArrayTexture||pe.isCompressedArrayTexture)De.setTexture2DArray(pe,0),Ye=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,pe.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,pe.unpackAlignment);const Nt=w.getParameter(w.UNPACK_ROW_LENGTH),ct=w.getParameter(w.UNPACK_IMAGE_HEIGHT),gn=w.getParameter(w.UNPACK_SKIP_PIXELS),is=w.getParameter(w.UNPACK_SKIP_ROWS),Qt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,gt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,gt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ke),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ze),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Je),U.isDataTexture||U.isData3DTexture?w.texSubImage3D(Ye,me,qe,at,_t,Fe,He,$e,jt,lt,gt.data):pe.isCompressedArrayTexture?w.compressedTexSubImage3D(Ye,me,qe,at,_t,Fe,He,$e,jt,gt.data):w.texSubImage3D(Ye,me,qe,at,_t,Fe,He,$e,jt,lt,gt),w.pixelStorei(w.UNPACK_ROW_LENGTH,Nt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ct),w.pixelStorei(w.UNPACK_SKIP_PIXELS,gn),w.pixelStorei(w.UNPACK_SKIP_ROWS,is),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Qt),me===0&&pe.generateMipmaps&&w.generateMipmap(Ye),oe.unbindTexture()},this.initRenderTarget=function(U){Ne.get(U).__webglFramebuffer===void 0&&De.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?De.setTextureCube(U,0):U.isData3DTexture?De.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?De.setTexture2DArray(U,0):De.setTexture2D(U,0),oe.unbindTexture()},this.resetState=function(){D=0,y=0,A=null,oe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bc?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===ra?"display-p3":"srgb"}}class hE extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lc extends Ht{constructor(e=null,t=1,i=1,s,r,o,a,l,c=zt,h=zt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo extends st{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new ot,zh=new ot,co=[],Hh=new es,uE=new ot,hr=new xt,ur=new ts;class bd extends xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,uE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),Hh.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(Hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),ur.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(i),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),zh.multiplyMatrices(i,xs),hr.matrixWorld=zh,hr.raycast(e,co);for(let o=0,a=co.length;o<a;o++){const l=co[o];l.instanceId=r,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lc(new Float32Array(s*this.count),s,this.count,Sc,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vh extends Ht{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ir extends Et{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const M=[],p=i/2;let m=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(f,2));function x(){const S=new le,D=new le;let y=0;const A=(t-e)/i;for(let b=0;b<=r;b++){const R=[],E=b/r,T=E*(t-e)+e;for(let O=0;O<=s;O++){const k=O/s,K=k*l+a,q=Math.sin(K),H=Math.cos(K);D.x=T*q,D.y=-E*i+p,D.z=T*H,u.push(D.x,D.y,D.z),S.set(q,A,H).normalize(),d.push(S.x,S.y,S.z),f.push(k,1-E),R.push(g++)}M.push(R)}for(let b=0;b<s;b++)for(let R=0;R<r;R++){const E=M[R][b],T=M[R+1][b],O=M[R+1][b+1],k=M[R][b+1];h.push(E,T,k),h.push(T,O,k),y+=6}c.addGroup(m,y,0),m+=y}function v(S){const D=g,y=new et,A=new le;let b=0;const R=S===!0?e:t,E=S===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*E,0),d.push(0,E,0),f.push(.5,.5),g++;const T=g;for(let O=0;O<=s;O++){const K=O/s*l+a,q=Math.cos(K),H=Math.sin(K);A.x=R*H,A.y=p*E,A.z=R*q,u.push(A.x,A.y,A.z),d.push(0,E,0),y.x=q*.5+.5,y.y=H*.5*E+.5,f.push(y.x,y.y),g++}for(let O=0;O<s;O++){const k=D+O,K=T+O;S===!0?h.push(K,K+1,k):h.push(K+1,K,k),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class la extends ir{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new la(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pc extends Et{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new le,S=new le,D=new le;for(let y=0;y<t.length;y+=3)f(t[y+0],v),f(t[y+1],S),f(t[y+2],D),l(v,S,D,x)}function l(x,v,S,D){const y=D+1,A=[];for(let b=0;b<=y;b++){A[b]=[];const R=x.clone().lerp(S,b/y),E=v.clone().lerp(S,b/y),T=y-b;for(let O=0;O<=T;O++)O===0&&b===y?A[b][O]=R:A[b][O]=R.clone().lerp(E,O/T)}for(let b=0;b<y;b++)for(let R=0;R<2*(y-b)-1;R++){const E=Math.floor(R/2);R%2===0?(d(A[b][E+1]),d(A[b+1][E]),d(A[b][E])):(d(A[b][E+1]),d(A[b+1][E+1]),d(A[b+1][E]))}}function c(x){const v=new le;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(x),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const x=new le;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const S=p(x)/2/Math.PI+.5,D=m(x)/Math.PI+.5;o.push(S,1-D)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],D=o[x+4],y=Math.max(v,S,D),A=Math.min(v,S,D);y>.9&&A<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),D<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const x=new le,v=new le,S=new le,D=new le,y=new et,A=new et,b=new et;for(let R=0,E=0;R<r.length;R+=9,E+=6){x.set(r[R+0],r[R+1],r[R+2]),v.set(r[R+3],r[R+4],r[R+5]),S.set(r[R+6],r[R+7],r[R+8]),y.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),b.set(o[E+4],o[E+5]),D.copy(x).add(v).add(S).divideScalar(3);const T=p(D);M(y,E+0,x,T),M(A,E+2,v,T),M(b,E+4,S,T)}}function M(x,v,S,D){D<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=D/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.vertices,e.indices,e.radius,e.details)}}class Ur extends Pc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ur(e.radius,e.detail)}}class Oc extends Et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new le,d=new le,f=[],g=[],M=[],p=[];for(let m=0;m<=i;m++){const x=[],v=m/i;let S=0;m===0&&o===0?S=.5/t:m===i&&l===Math.PI&&(S=-.5/t);for(let D=0;D<=t;D++){const y=D/t;u.x=-e*Math.cos(s+y*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+y*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),p.push(y+S,1-v),x.push(c++)}h.push(x)}for(let m=0;m<i;m++)for(let x=0;x<t;x++){const v=h[m][x+1],S=h[m][x],D=h[m+1][x],y=h[m+1][x+1];(m!==0||o>0)&&f.push(v,S,y),(m!==i-1||l<Math.PI)&&f.push(S,D,y)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(M,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dE extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fE extends er{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Bi extends er{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wd extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Wh extends wd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $a=new ot,Xh=new le,$h=new le;class pE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mE extends pE{constructor(){super(new Nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _E extends wd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new mE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);const _={CAMERA_FAR:6e4,CAMERA_FOV:70,CAMERA_NEAR:.3,EYE_HEIGHT_M:1.7,MOUSE_SENSITIVITY_RAD_PER_PX:.0022,PITCH_LIMIT_RAD:1.45,SCRAMBLE_SPEED:1,SLOPE_SCRAMBLE_MAX_DEG:45,SLOPE_WALK_MAX_DEG:30,WALKER_PROBE_AHEAD_M:.5,WALKER_OBSTACLE_ITERS:2,WALKER_CHEST_M:1.15,WALKER_RADIUS_M:.34,WALKER_STEP_UP_M:.6,WALK_SPEED:2.6,WADE_MAX_DEPTH_M:1.2,WADE_SLOW_DEPTH_M:.5,WADE_SPEED_FACTOR:.4,WATER_DEPTH_CAP_M:30,WATER_DEPTH_PER_M_FROM_SHORE:.06,WATER_MASK_MAX_RISE_M:1.5,WATER_MIN_BODY_CELLS:6,WATER_PLANE_LIFT_M:.15,WATER_PLANE_MARGIN_M:12,WATER_PLANE_MAX_VERTS:4e4,WATER_PLANE_STEP_M:3,WATER_SHALLOW_SPEED_FACTOR:.7,WATER_SURFACE_PERCENTILE:.95,WATER_SHORE_BLUR_CELLS:3,WATER_SHORE_DRY_M:.02,WATER_SHORE_ISO:.5,SURFACE_BASELINE_DRAIN_MULT:1,SURFACE_BASELINE_SPEED_FACTOR:1,SURFACE_BOG_DRAIN_MULT:2.2,SURFACE_BOG_SPEED_FACTOR:.45,SURFACE_CROP_DRAIN_MULT:1.1,SURFACE_CROP_SPEED_FACTOR:.9,SURFACE_MOSS_DRAIN_MULT:1.2,SURFACE_MOSS_SPEED_FACTOR:.85,SURFACE_SHRUB_DRAIN_MULT:1.2,SURFACE_SHRUB_SPEED_FACTOR:.8,SURFACE_SNOW_DRAIN_MULT:1.5,SURFACE_SNOW_SPEED_FACTOR:.7,SURFACE_TREE_DRAIN_MULT:1.4,SURFACE_TREE_SPEED_FACTOR:.65,BLACKOUT_MIN_DEPTH_M:.8,BLACKOUT_RELOCATE_MAX_M:60,BLACKOUT_SEARCH_RAYS:32,BLACKOUT_SEARCH_STEP_M:2,BLACKOUT_STAMINA_FRACTION:.35,BLACKOUT_TIME_PENALTY_S:45,SPRINT_SPEED:5.2,STAMINA_DRAIN_SCRAMBLE_PER_S:6,STAMINA_DRAIN_SPRINT_PER_S:14,STAMINA_DRAIN_WADE_PER_S:10,STAMINA_DRAIN_WALK_PER_S:1.5,STAMINA_MAX:100,STAMINA_REGEN_PER_S:8,LINE_HASH_DECIMALS:5,SAVE_MAX_MISSIONS:500,CATEGORY_MAX_M:3e4,CATEGORY_MIN_M:1e3,CATEGORY_SPRINT_MAX_M:3e3,CATEGORY_TREK_MAX_M:1e4,MEDAL_BRONZE_M:100,MEDAL_GOLD_M:50,MEDAL_PLATINUM_M:25,MEDAL_SILVER_M:75,MEDAL_MULT:{Platinum:2,Gold:1.5,Silver:1.2,Bronze:1,FAILED:0},SCORE_BASE_PER_KM:100,ARRIVAL_FADE_S:1.5,DETOUR_SCRIPT_SIDE:1,FINISH_RADIUS_M:8,TRACK_SAMPLE_S:.5,PLANNER_INIT_ZOOM:9,PROFILE_H_PX:120,PROFILE_SAMPLES:240,PROFILE_W_PX:480,RANDOM_LINE_BAND_INSET_M:1,RANDOM_LINE_MAX_ATTEMPTS:200,WATER_CROSSING_MAX_M:1e3,WATER_SCAN_STEP_M:10,CORRIDOR_OUTER_RADIUS_M:45e3,CORRIDOR_FAR_RADIUS_M:12500,CORRIDOR_NEAR_MARGIN_M:1500,ZOOM_BLOCKED_MARGIN_M:15,ZOOM_MAX_H:.985,ZOOM_MIN:11,ZOOM_SLOPE_MARGIN_DEG:2,TILE_CACHE_MAX_BYTES:64e6,TILE_DECODE_ROWS_PER_STEP:64,TILE_DECODE_WORKERS:2,TILE_LOADS_PER_STEP:2,TILE_NEAR_RADIUS_TILES:1,CHUNK_ANCHOR_MARGIN_M:24,CHUNK_BUILD_BUDGET_MS:4,CHUNK_BUILDS_PER_FRAME:2,CHUNK_GRID_STEP_M:4,CHUNK_LOAD_RADIUS:8,CHUNK_LOD_FINE_RINGS:2,CHUNK_LOD_RING_MULTS:[1,2,4,8,16],CHUNK_LOD_RING_STARTS:[0,2,6,14,22],CHUNK_LOD_COARSE_MULT:2,CHUNK_SIZE_M:256,NORMAL_EPSILON_M:2,SLICED_JOB_ROWS_PER_STEP:4,FAR_SHELL_INNER_M:600,FAR_SHELL_NORMAL_STEP_M:8,FAR_SHELL_OUTER_M:45e3,FAR_SHELL_RADIAL_RINGS:158,FAR_SHELL_RECENTER_M:128,FAR_SHELL_RING_WARP:.5,FAR_SHELL_SECTORS:8,FAR_SHELL_BANDS:2,FAR_SHELL_SEGMENTS:1024,FAR_SHELL_SINK_FADE_M:2e3,FAR_SHELL_SINK_M:3,FAR_SHELL_STEP_VERTS:48,FOG_BAND_1_M:600,FOG_BAND_2_M:2500,FOG_BAND_3_M:6500,FOG_DENSITY_FLOOR:.08,FOG_DENSITY_HALF_HEIGHT_M:350,FOG_HALF_DISTANCE_SEA_M:5200,FOG_HORIZON_BLEND_MAX:.45,FOG_START_M:120,HEMI_INTENSITY:2.1,SKYLIGHT_AXIS_TILT_DEG:110,SKYLIGHT_INTENSITY:3.35,SEASON_DEFAULT:"summer",WEATHER_ONSET_S:90,WEATHER_PERIOD_S:240,WEATHER_FOG_GAIN:.85,WEATHER_SUN_DIM:.4,WEATHER_AMBIENT_LIFT:1.45,CLOUD_HEIGHT_M:1400,CLOUD_SCALE_M:2600,CLOUD_DRIFT_MPS:7,CLOUD_COVER_LO:.34,CLOUD_COVER_HI:.86,CLOUD_EDGE:.16,CLOUD_HORIZON_FADE:.055,WEATHER_WET_TAU_S:210,WEATHER_WET_SAMPLES:10,WEATHER_WET_DARKEN:.42,WEATHER_WET_BLUE:.1,WEATHER_SKY_MIX:.8,WEATHER_WIND_GAIN:2.2,WEATHER_FRONT_SPAN_M:16e3,WEATHER_FRONT_PROBE_M:4e3,WEATHER_FRONT_FOG_MIN:.4,WEATHER_FRONT_FOG_MAX:2.2,SEASON_SPRING_OVERCAST:.42,SEASON_SUMMER_OVERCAST:.28,SEASON_AUTUMN_OVERCAST:.5,SEASON_WINTER_OVERCAST:.62,SEASON_SPRING_SNOW:.12,SEASON_SUMMER_SNOW:0,SEASON_AUTUMN_SNOW:0,SEASON_WINTER_SNOW:1,SNOW_ALT_LO_M:520,SNOW_ALT_HI_M:880,SNOW_SLOPE_LO_DEG:34,SNOW_SLOPE_HI_DEG:52,SNOW_ASPECT_MELT:.55,SNOW_ROCK_UP_MIN:.45,SNOW_BURY_FRAC:.9,SNOW_BURY_SKIP:.82,SEASON_SPRING_VEG_MIX:.3,SEASON_SPRING_SAT:1.08,SEASON_SPRING_SKY_MIX:.25,SEASON_SPRING_SUN_MIX:.35,SEASON_SPRING_SUN_K:1,SEASON_AUTUMN_VEG_MIX:.45,SEASON_AUTUMN_SAT:1.05,SEASON_AUTUMN_SKY_MIX:.3,SEASON_AUTUMN_SUN_MIX:.45,SEASON_AUTUMN_SUN_K:.92,SEASON_WINTER_VEG_MIX:.62,SEASON_WINTER_SAT:.7,SEASON_WINTER_SKY_MIX:.5,SEASON_WINTER_SUN_MIX:.6,SEASON_WINTER_SUN_K:.78,SKY_DOME_RADIUS_M:52e3,SKY_GRADIENT_EXPONENT:.7,SKY_SUN_GLOW_EXPONENT:6,SUN_AZIMUTH_DEG:200,SUN_ELEVATION_DEG:30,SUN_INTENSITY:2.7,TERRAIN_BAND_BLEND_M:45,TERRAIN_APRON_MIX:.6,TERRAIN_BAND_GRAIN:.08,TERRAIN_BAND_HIGH_M:650,TERRAIN_BAND_NOISE_M:22,TERRAIN_BAND_NOISE_WAVE_M:320,TERRAIN_BAND_SUMMIT_M:870,TERRAIN_BAND_UPLAND_M:350,TERRAIN_DETAIL_ANISO:2.5,TERRAIN_DETAIL_H:.87,TERRAIN_DETAIL_RIDGE_CAP:.08,TERRAIN_DETAIL_RIDGE_GAIN:1.5,TERRAIN_DETAIL_RIDGE_OCTAVES:2,TERRAIN_DETAIL_RMS_M:10,TERRAIN_DETAIL_SHORE_M:30,TERRAIN_DETAIL_SLOPE_FLOOR:.15,TERRAIN_DETAIL_SLOPE_HI_DEG:30,TERRAIN_DETAIL_SLOPE_LO_DEG:8,GRAIN_AMP_M:1.5,GRAIN_DOMAIN_M:4e3,GRAIN_NARROW:2,GRAIN_WAVE_M:25,SURVEY_NEAR_MARGIN_M:1500,SURVEY_FAR_HALF_M:12500,SURVEY_NEAR_ZOOM:13,RAVINE_DEPTH_FALLOFF:.5,RAVINE_DEPTH_M:6,RAVINE_HORTON:3,RAVINE_QUAD:64,RAVINE_JITTER:.45,RAVINE_LEVELS:3,RAVINE_NARROW:4,TERRAIN_DETAIL_TAPER:.25,TERRAIN_DETAIL_WANDER:.7,TERRAIN_DETAIL_WINDOW_POSTS:16,TERRAIN_CRAG_FADE_M:5e3,TERRAIN_CRAG_LEDGE_AMP:.6,TERRAIN_CRAG_LEDGE_BUMP:1.1,TERRAIN_CRAG_LEDGE_M:6,TERRAIN_CRAG_VARY_M:60,TERRAIN_EXPO_MIX:1,TERRAIN_EXPO_NOISE:2.3,TERRAIN_EXPO_WAVE_M:15,TERRAIN_EXPO_WIND:.35,TERRAIN_FAR_SHADE:.75,TERRAIN_FAR_SHADE_HI:.69,TERRAIN_FAR_SHADE_LO:.25,TERRAIN_FINE_GRAIN:.22,TERRAIN_FLECK_AMP:.1,TERRAIN_FLECK_BUMP:.24,TERRAIN_FLECK_FADE_M:220,TERRAIN_FLECK_WAVE_M:.8,TERRAIN_GRAIN_STREAK_W:1,TERRAIN_GRAIN_WAVE_M:9,TERRAIN_GRIT_AMP:.15,TERRAIN_GRIT_BUMP:.06,TERRAIN_GRIT_FADE_M:190,TERRAIN_GRIT_WAVE_M:.3,TERRAIN_GULLY_AMP:.6,TERRAIN_GULLY_WAVE_M:6,TERRAIN_HANDOVER_GAIN:.7,TERRAIN_HUMMOCK_M:.3,TERRAIN_HUMMOCK_WAVE_M:5,TERRAIN_KNOLL_M:.9,TERRAIN_KNOLL_WAVE_M:18,TERRAIN_PATCH_FADE_M:2500,TERRAIN_PATCH_MIX:.75,TERRAIN_PATCH_WAVE_M:30,TERRAIN_QUIET:.75,TERRAIN_QUIET_FADE_M:70,TERRAIN_QUIET_SAT:1.45,TERRAIN_RELIEF_FADE_M:500,TERRAIN_ROOT_AO:.82,TERRAIN_ROOT_BUMP:.055,TERRAIN_ROOT_FADE_M:30,TERRAIN_ROOT_MIX:1,TERRAIN_ROOT_QUIET:.3,TERRAIN_ROCK_NOISE_DEG:10,TERRAIN_SCREE_COVER:.32,TERRAIN_SCREE_FADE_POW:2,TERRAIN_SCREE_HI_DEG:32,TERRAIN_SCREE_LO_DEG:16,TERRAIN_SCREE_WAVE_M:10,TERRAIN_SLOPE_BLEND_DEG:8,TERRAIN_SLOPE_LIFT_M_PER_DEG:1.2,TERRAIN_SLOPE_ROCK_DEG:30,TERRAIN_SOIL_MIX_BARE:.95,TERRAIN_SOIL_MIX_TURF:.42,TERRAIN_SOIL_WAVE_M:2.6,TERRAIN_WIND_FROM_DEG:225,TERRAIN_ZONE_FAR_M:6e3,TERRAIN_ZONE_MIX:.35,TERRAIN_ZONE_MIX_FAR:.71,TERRAIN_ZONE_WAVE_M:260,WATER_CONTACT_M:.15,WATER_FRESNEL_EXPONENT:7,WATER_OPEN_FADE_M:130,WATER_REFLECT_MAX:.62,WATER_SHELF_DEPTH_M:1.2,WATER_SHELF_MAX_M:34,WATER_SHELF_MIN_M:3.5,WATER_SHELF_PROBE_M:20,WATER_SHELF_SHARE:.62,WATER_SHORE_GRAD_EPS_M:2,WATER_WET_FRAC:.12,DRESSING_ANCHOR_M:64,DRESSING_ANCHOR_MARGIN_M:12,DRESSING_CANDIDATES_PER_CELL:8,DRESSING_CELL_M:10,DRESSING_CLUMP_MAX:4.2,DRESSING_CLUMP_MIN:.16,DRESSING_CLUMP_POW:1.6,DRESSING_CLUMP_WAVE_M:55,DRESSING_COLLIDER_CACHE_CELLS:256,DRESSING_COLLIDER_CELLS:1,DRESSING_COLLIDER_RADIUS_MUL:.8,DRESSING_FADE_IN_M:1.5,DRESSING_FADE_FRAC:.6,DRESSING_FAR_M:265,DRESSING_MAX_PER_ENTRY:2600,DRESSING_MAX_SLOPE_DEG:40,DRESSING_MIN_REACH_FRAC:.24,DRESSING_RECENTER_M:45,DRESSING_REF_SIZE_M:2,DRESSING_STRETCH:.42,DRESSING_TILT_MAX_DEG:12,DRESSING_TINT_JITTER:.18,ROCK_ALT_GAIN:6,ROCK_COBBLE_CANDIDATES:16,ROCK_COBBLE_FAR_M:130,ROCK_COBBLE_REACH_FRAC:.26,ROCK_COBBLE_REF_SIZE_M:1,ROCK_POLY_FAR_M:60,ROCK_POLY_MIN_M:1.15,ROCK_COBBLE_MAX_M:.85,ROCK_COBBLE_MIN_M:.3,ROCK_COBBLE_NEAR_M:12,ROCK_COBBLE_P_MUL:1.15,ROCK_BOX_NEAR_M:32,ROCK_BURY_FRAC:.32,ROCK_APRON_MIX:.8,ROCK_CONTACT_BAND:.74,ROCK_CONTACT_DARK:.5,ROCK_CONTACT_DOME:.11,ROCK_CONTACT_FADE_M:60,ROCK_CONTACT_FALLOFF:.45,ROCK_CONTACT_FAR_M:100,ROCK_CONTACT_PROUD_MIN_M:.13,ROCK_CONTACT_SUN_SHAPE:.62,ROCK_CONTACT_OCC:0,ROCK_CONTACT_PROUD_MUL:.42,ROCK_CONTACT_RADIUS_MUL:1.55,ROCK_CONTACT_SEGMENTS:14,ROCK_FAN_GAIN:14,ROCK_FAN_HI_DEG:40,ROCK_FAN_LO_DEG:24,ROCK_FAN_PROBE_M:26,ROCK_GRAIN_FADE_M:34,ROCK_GRAIN_MOTTLE_M:.62,ROCK_GRAIN_MOTTLE:.28,ROCK_GRAIN_SPECKLE_M:.055,ROCK_GRAIN_SPECKLE:.13,ROCK_GRAIN_VEIN_M:.9,ROCK_GRAIN_VEIN:.34,ROCK_NORMAL_ALIGN:.8,ROCK_P_BARE:.34,ROCK_P_BARE_STEEP:.9,ROCK_P_FOREST:.04,ROCK_P_GRASS:.13,ROCK_P_SNOW:.06,ROCK_SKIRT_FAR_M:45,ROCK_SKIRT_MIN_M:.55,ROCK_SKIRT_N:4,ROCK_SKIRT_SIZE_MAX:.38,ROCK_SKIRT_SIZE_MIN:.18,ROCK_SKIRT_SPREAD:.45,ROCK_SIZE_MAX_M:2.9,ROCK_SIZE_MIN_M:.42,ROCK_SIZE_SKEW:1.5,ROCK_SLOPE_GAIN:9.5,ROCK_SLOPE_HI_DEG:34,ROCK_SLOPE_LO_DEG:16,SCREE_MIN_SLOPE_DEG:22,SHRUB_SIZE_MAX_M:1.6,SHRUB_SIZE_MIN_M:.5,TREE_BURY_FRAC:.02,TREE_CLUMP_MAX:1.08,TREE_CLUMP_MIN:.9,TREE_FAR_M:300,TREE_NEAR_M:90,TREE_NORMAL_ALIGN:.25,TREE_P_CLASS10:.32,TREE_P_CLASS20:.24,TREE_SIZE_MAX_M:17,TREE_SIZE_MIN_M:5,TREE_TREELINE_FLOOR:.8,TREE_TREELINE_HI_M:2900,TREE_TREELINE_LO_M:2300,TREE_TRUNK_RADIUS_FRAC:.016,GROUNDCOVER_ALT_FLOOR:.5,GROUNDCOVER_ALT_HI_M:960,GROUNDCOVER_ALT_LO_M:810,GROUNDCOVER_ARC_FLOOR:.45,GROUNDCOVER_BLADES:12,GROUNDCOVER_BLADE_W_MIN:.028,GROUNDCOVER_BLADE_W_SKEW:2.2,GROUNDCOVER_BLADE_TIP_SHEAR:.85,GROUNDCOVER_BLADE_W_SPAN:.03,GROUNDCOVER_BURY_FRAC:.12,GROUNDCOVER_DAMP_BASE:.12,GROUNDCOVER_DAMP_CONCAVE:.8,GROUNDCOVER_DAMP_PROBE_M:14,GROUNDCOVER_DAMP_SHORE:.65,GROUNDCOVER_DAMP_SLOPE_DEG:7,GROUNDCOVER_DENSITY_M2:38,GROUNDCOVER_DIST_KEEP:6,GROUNDCOVER_DIST_W_MUL:4.2,GROUNDCOVER_FADE_FRAC:.45,GROUNDCOVER_DIST_SIZE_POW:.4,GROUNDCOVER_DIST_SIZE_MAX:2.4,GROUNDCOVER_FALLOFF_POW:1.6,GROUNDCOVER_FAR_BAND_M:55,GROUNDCOVER_FAR_CANDIDATES:400,GROUNDCOVER_FAR_CELL_M:8,GROUNDCOVER_FAR_KEEP:3,GROUNDCOVER_FAR_M:80,GROUNDCOVER_FAR_W_MUL:2.6,GROUNDCOVER_FLOWER_POW:3,GROUNDCOVER_FLOWER_W:2.2,GROUNDCOVER_FLOWER_WAVE_M:11,GROUNDCOVER_FULL_M:9,GROUNDCOVER_HAZE_CANDIDATES:330,GROUNDCOVER_HAZE_CELL_M:12,GROUNDCOVER_HAZE_W_MUL:6,GROUNDCOVER_LOD_DIST_M:30,GROUNDCOVER_LOD_FAR_M:17,GROUNDCOVER_LOD_HAZE_M:55,GROUNDCOVER_ACCEPT_MARGIN_M:9,GROUNDCOVER_FADE_BAND:.08,GROUNDCOVER_TIER_LEAD_M:9,GROUNDCOVER_LOD_MID_M:9,GROUNDCOVER_MAX_PER_ENTRY:16e3,GROUNDCOVER_MID_BAND_M:30,GROUNDCOVER_MID_CANDIDATES:200,GROUNDCOVER_MID_CELL_M:3,GROUNDCOVER_MID_KEEP:2,GROUNDCOVER_MID_W_MUL:1.9,GROUNDCOVER_NEAR_BAND_M:17,GROUNDCOVER_NEAR_CANDIDATES:440,GROUNDCOVER_NEAR_CELL_M:3,GROUNDCOVER_NORMAL_ALIGN:.85,GROUNDCOVER_PATCH_DEPTH:.22,GROUNDCOVER_PATCH_H_MIN:.72,GROUNDCOVER_PATCH_WAVE_M:15,GROUNDCOVER_PETAL_R:.07,GROUNDCOVER_P_BARE:.42,GROUNDCOVER_P_FOREST:.7,GROUNDCOVER_P_SHRUB:.95,GROUNDCOVER_RECENTRE_M:9,GROUNDCOVER_SEDGE_W:3.6,GROUNDCOVER_SLICE_CANDIDATES:1200,GROUNDCOVER_SLOPE_HI_DEG:44,GROUNDCOVER_SLOPE_LO_DEG:26,GROUNDCOVER_SLOPE_THIN:.85,GROUNDCOVER_STRETCH:.3,GROUNDCOVER_SWARD_WAVE_M:7,GROUNDCOVER_SWAY_AMP:.12,GROUNDCOVER_SWAY_SPEED:.9,GROUNDCOVER_SWAY_WAVE_M:15,GROUNDCOVER_TILT_MAX_DEG:12,GROUNDCOVER_TINT_JITTER:.22,GROUNDCOVER_WIND_DIR_DEG:250,GROUNDCOVER_WIND_LEAN_DEG:14,GROUNDCOVER_WIND_WAVE_M:26,SCRIPT_MAX_TICKS:216e3,SCRIPT_WAYPOINT_RADIUS_M:2,FLY_SPEED_MPS:18,FLY_BOOST:4,SIM_DT:1/60,SIM_MAX_STEPS_PER_FRAME:8,GPS_SCREEN_HALF_WIDTH_M:120,GPS_SCREEN_PAD_PX:16,GPS_ROWS_PX:124,GPS_DEVICE_W:.097,GPS_DEVICE_DIST:.5,GPS_DEVICE_X:.395,GPS_DEVICE_Y_HIGH:-.177,GPS_DEVICE_Y_LOW:-.38,GPS_DEVICE_TIP_RAD:.55,GPS_DEVICE_YAW_RAD:.22,GPS_RAISE_SPEED_MPS:.6,GPS_RAISE_S:.45,GPS_BODY_ASPECT:2.2,GPS_BODY_WAIST:.95,GPS_BODY_DEPTH:.55,GPS_ANTENNA_LEN:.78,GPS_ANTENNA_W:.345,GPS_ANTENNA_X:-.336,GPS_ANTENNA_TILT_RAD:.06,GPS_STOW_S:.55,GPS_STOW_DROP:.42,GPS_STOW_DX:.12,GPS_SCREEN_PX:256,PLOT_H_PX:420,PLOT_PAD_PX:24,PLOT_W_PX:320,AA_SAMPLES_DEFAULT:4,AA_SAMPLES_OPTIONS:[0,2,4,8],DEBUG_AT_BOOT:!1,BENCH_TOL_M:3,BENCH_TOL_SUMMIT_M:6,RENDER_CALLS_MAX:120,RENDER_TRIS_MAX:3e6,SHORE_TOLERANCE_M:3,VSYNC_MISSED_MAX_FRAC:.02,VSYNC_P50_MAX_RATIO:1.15,VSYNC_P50_MIN_RATIO:.85},Gt={liveTiles:!1,plannerFirst:!0,dressing:!1,microRelief:!1,stamina:!1,survival:!1,globalBoard:!1,devTuner:!1};let Cd=null;function ic(){return Cd??_.FAR_SHELL_RING_WARP}function ME(n){return Gt.devTuner&&(Cd=n),ic()}function EE(){const n=_.FAR_SHELL_SEGMENTS,e=_.FAR_SHELL_RADIAL_RINGS,t=ic(),i=new Float64Array(e);if(t<=0){const r=_.FAR_SHELL_INNER_M,o=_.FAR_SHELL_OUTER_M;for(let a=0;a<e;a++)i[a]=r*Math.pow(o/r,a/(e-1))}else{const r=Math.pow(_.FAR_SHELL_INNER_M,t),o=Math.pow(_.FAR_SHELL_OUTER_M,t);for(let a=0;a<e;a++)i[a]=Math.pow(r+(o-r)*(a/(e-1)),1/t)}return{radii:i,pitchAt:r=>{const o=i[r];return Math.max(r+1<e?i[r+1]-o:o-i[r-1],2*Math.PI*o/n)}}}function vE(n,e){const t=_.FAR_SHELL_SEGMENTS,i=_.FAR_SHELL_RADIAL_RINGS,s=_.FAR_SHELL_INNER_M,r=_.FAR_SHELL_SINK_FADE_M-s,o=EE().radii,a=new Float64Array(i);for(let H=0;H<i;H++)a[H]=_.FAR_SHELL_SINK_M*Math.min(1,Math.max(0,(_.FAR_SHELL_SINK_FADE_M-o[H])/r));const l=_.FAR_SHELL_NORMAL_STEP_M,c=new Float64Array(t),h=new Float64Array(t);for(let H=0;H<t;H++){const Q=H/t*Math.PI*2;c[H]=Math.cos(Q),h[H]=Math.sin(Q)}const u=i*t,d=new Float32Array(u*3),f=new Float32Array(u*3),g=new Uint32Array((i-1)*t*6);let M=0;for(let H=0;H<i-1;H++)for(let Q=0;Q<t;Q++){const Y=H*t+Q,j=H*t+(Q+1)%t,fe=Y+t,X=j+t;g[M++]=Y,g[M++]=j,g[M++]=fe,g[M++]=j,g[M++]=X,g[M++]=fe}const p=new st(d,3),m=new st(f,3),x=H=>[Math.round(H*(i-1)/_.FAR_SHELL_BANDS),Math.round((H+1)*(i-1)/_.FAR_SHELL_BANDS)],v=H=>[Math.round(H*t/_.FAR_SHELL_SECTORS),Math.round((H+1)*t/_.FAR_SHELL_SECTORS)],S=new ks;S.name="far-shell";const D=[];for(let H=0;H<_.FAR_SHELL_BANDS;H++){const[Q,Y]=x(H);for(let j=0;j<_.FAR_SHELL_SECTORS;j++){const[fe,X]=v(j),se=new Uint32Array((Y-Q)*(X-fe)*6);let ie=0;for(let B=Q;B<Y;B++)for(let C=fe;C<X;C++){const P=B*t+C,W=B*t+(C+1)%t,$=P+t,Z=W+t;se[ie++]=P,se[ie++]=W,se[ie++]=$,se[ie++]=W,se[ie++]=Z,se[ie++]=$}const F=new Et;F.setAttribute("position",p),F.setAttribute("normal",m),F.setIndex(new st(se,1)),F.boundingSphere=new ts;const I=new xt(F,e);I.name=`far-shell-b${H}s${j}`,D.push({mesh:I,k0:Q,k1:Y,s0:fe,s1:X}),S.add(I)}}const y=()=>{for(const H of D){let Q=1/0,Y=1/0,j=1/0,fe=-1/0,X=-1/0,se=-1/0;for(let F=H.k0;F<=H.k1;F++)for(let I=H.s0;I<=H.s1;I++){const B=(F*t+I%t)*3,C=d[B],P=d[B+1],W=d[B+2];C<Q&&(Q=C),C>fe&&(fe=C),P<Y&&(Y=P),P>X&&(X=P),W<j&&(j=W),W>se&&(se=W)}const ie=H.mesh.geometry.boundingSphere;ie.center.set((Q+fe)/2,(Y+X)/2,(j+se)/2),ie.radius=.5*Math.hypot(fe-Q,X-Y,se-j)}},A=S;let b=0,R=0;const E=(H,Q,Y,j,fe)=>{const X=H/t|0,se=H-X*t,ie=o[X],F=ie*c[se],I=ie*h[se],B=H*3,C=j+F,P=fe+I,W=Math.max(X+1<i?o[X+1]-ie:ie-o[X-1],2*Math.PI*ie/t);Q[B]=F,Q[B+1]=n.landformHeightAt(C,P,W)-a[X],Q[B+2]=I;const $=(n.landformHeightAt(C+l,P,W)-n.landformHeightAt(C-l,P,W))/(2*l),Z=(n.landformHeightAt(C,P+l,W)-n.landformHeightAt(C,P-l,W))/(2*l),w=Math.hypot($,1,Z);Y[B]=-$/w,Y[B+1]=1/w,Y[B+2]=-Z/w},T=(H,Q)=>{b=H,R=Q,A.position.set(b,0,R),p.needsUpdate=!0,m.needsUpdate=!0,y()};function O(H,Q){for(let Y=0;Y<u;Y++)E(Y,d,f,H,Q);T(H,Q)}const k=new Float32Array(u*3),K=new Float32Array(u*3);function q(H,Q){let Y=0;const j=()=>Y>=u;return{step:X=>{if(j())return!0;const se=Math.min(u,Y+Math.max(1,X)*_.FAR_SHELL_STEP_VERTS);for(;Y<se;Y++)E(Y,k,K,H,Q);return j()?(d.set(k),f.set(K),T(H,Q),!0):!1},done:j}}return{mesh:A,rebuild:O,beginRebuild:q,centre:()=>({x:b,z:R}),dispose:()=>{for(const H of D)H.mesh.geometry.dispose()},pieces:()=>({total:D.length,tris:(i-1)*t*2})}}var Kt=Uint8Array,Bs=Uint16Array,xE=Int32Array,Nd=new Kt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Dd=new Kt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),SE=new Kt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Id=function(n,e){for(var t=new Bs(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new xE(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},Ld=Id(Nd,2),Pd=Ld.b,AE=Ld.r;Pd[28]=258,AE[258]=28;var RE=Id(Dd,0),yE=RE.b,sc=new Bs(32768);for(var mt=0;mt<32768;++mt){var si=(mt&43690)>>1|(mt&21845)<<1;si=(si&52428)>>2|(si&13107)<<2,si=(si&61680)>>4|(si&3855)<<4,sc[mt]=((si&65280)>>8|(si&255)<<8)>>1}var Rr=function(n,e,t){for(var i=n.length,s=0,r=new Bs(e);s<i;++s)n[s]&&++r[n[s]-1];var o=new Bs(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Bs(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],h=e-n[s],u=o[n[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[sc[u]>>l]=c}else for(a=new Bs(i),s=0;s<i;++s)n[s]&&(a[s]=sc[o[n[s]-1]++]>>15-n[s]);return a},Fr=new Kt(288);for(var mt=0;mt<144;++mt)Fr[mt]=8;for(var mt=144;mt<256;++mt)Fr[mt]=9;for(var mt=256;mt<280;++mt)Fr[mt]=7;for(var mt=280;mt<288;++mt)Fr[mt]=8;var Od=new Kt(32);for(var mt=0;mt<32;++mt)Od[mt]=5;var TE=Rr(Fr,9,1),bE=Rr(Od,5,1),Ka=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},xn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Ya=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},wE=function(n){return(n+7)/8|0},Po=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Kt(n.subarray(e,t))},CE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qt=function(n,e,t){var i=new Error(e||CE[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,qt),!t)throw i;return i},Ud=function(n,e,t,i){var s=n.length,r=0;if(!s||e.f&&!e.l)return t||new Kt(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Kt(s*3));var c=function(Z){var w=t.length;if(Z>w){var re=new Kt(Math.max(w*2,Z));re.set(t),t=re}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,g=e.d,M=e.m,p=e.n,m=s*8;do{if(!f){h=xn(n,u,1);var x=xn(n,u+1,3);if(u+=3,x)if(x==1)f=TE,g=bE,M=9,p=5;else if(x==2){var y=xn(n,u,31)+257,A=xn(n,u+10,15)+4,b=y+xn(n,u+5,31)+1;u+=14;for(var R=new Kt(b),E=new Kt(19),T=0;T<A;++T)E[SE[T]]=xn(n,u+T*3,7);u+=A*3;for(var O=Ka(E),k=(1<<O)-1,K=Rr(E,O,1),T=0;T<b;){var q=K[xn(n,u,k)];u+=q&15;var v=q>>4;if(v<16)R[T++]=v;else{var H=0,Q=0;for(v==16?(Q=3+xn(n,u,3),u+=2,H=R[T-1]):v==17?(Q=3+xn(n,u,7),u+=3):v==18&&(Q=11+xn(n,u,127),u+=7);Q--;)R[T++]=H}}var Y=R.subarray(0,y),j=R.subarray(y);M=Ka(Y),p=Ka(j),f=Rr(Y,M,1),g=Rr(j,p,1)}else qt(1);else{var v=wE(u)+4,S=n[v-4]|n[v-3]<<8,D=v+S;if(D>s){l&&qt(0);break}a&&c(d+S),t.set(n.subarray(v,D),d),e.b=d+=S,e.p=u=D*8,e.f=h;continue}if(u>m){l&&qt(0);break}}a&&c(d+131072);for(var fe=(1<<M)-1,X=(1<<p)-1,se=u;;se=u){var H=f[Ya(n,u)&fe],ie=H>>4;if(u+=H&15,u>m){l&&qt(0);break}if(H||qt(2),ie<256)t[d++]=ie;else if(ie==256){se=u,f=null;break}else{var F=ie-254;if(ie>264){var T=ie-257,I=Nd[T];F=xn(n,u,(1<<I)-1)+Pd[T],u+=I}var B=g[Ya(n,u)&X],C=B>>4;B||qt(3),u+=B&15;var j=yE[C];if(C>3){var I=Dd[C];j+=Ya(n,u)&(1<<I)-1,u+=I}if(u>m){l&&qt(0);break}a&&c(d+131072);var P=d+F;if(d<j){var W=r-j,$=Math.min(j,P);for(W+d<0&&qt(3);d<$;++d)t[d]=i[W+d]}for(;d<P;++d)t[d]=t[d-j]}}e.l=f,e.p=se,e.b=d,e.f=h,f&&(h=1,e.m=M,e.d=g,e.n=p)}while(!h);return d!=t.length&&o?Po(t,0,d):t.subarray(0,d)},NE=new Kt(0),Fd=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&qt(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&qt(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2},qa=function(){function n(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var i=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:i?i.length:0},this.o=new Kt(32768),this.p=new Kt(0),i&&this.o.set(i)}return n.prototype.e=function(e){if(this.ondata||qt(5),this.d&&qt(4),!this.p.length)this.p=e;else if(e.length){var t=new Kt(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},n.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,i=Ud(this.p,this.s,this.o);this.ondata(Po(i,t,this.s.b),this.d),this.o=Po(i,this.s.b-32768),this.s.b=this.o.length,this.p=Po(this.p,this.s.p/8|0),this.s.p&=7},n.prototype.push=function(e,t){this.e(e),this.c(t)},n}(),Yh=function(){function n(e,t){qa.call(this,e,t),this.v=e&&e.dictionary?2:1}return n.prototype.push=function(e,t){if(qa.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Fd(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&qt(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),qa.prototype.c.call(this,t)},n}();function DE(n,e){return Ud(n.subarray(Fd(n,e),-4),{i:2},e,e)}var IE=typeof TextDecoder<"u"&&new TextDecoder,LE=0;try{IE.decode(NE,{stream:!0}),LE=1}catch{}function qh(n,e="utf8"){return new TextDecoder(e).decode(n)}const PE=new TextEncoder;function OE(n){return PE.encode(n)}const UE=1024*8,FE=(()=>{const n=new Uint8Array(4),e=new Uint32Array(n.buffer);return!((e[0]=1)&n[0])})(),Za={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class Uc{constructor(e=UE,t={}){je(this,"buffer");je(this,"byteLength");je(this,"byteOffset");je(this,"length");je(this,"offset");je(this,"lastWrittenByte");je(this,"littleEndian");je(this,"_data");je(this,"_mark");je(this,"_marks");let i=!1;typeof e=="number"?e=new ArrayBuffer(e):(i=!0,this.lastWrittenByte=e.byteLength);const s=t.offset?t.offset>>>0:0,r=e.byteLength-s;let o=s;(ArrayBuffer.isView(e)||e instanceof Uc)&&(e.byteLength!==e.buffer.byteLength&&(o=e.byteOffset+s),e=e.buffer),i?this.lastWrittenByte=r:this.lastWrittenByte=0,this.buffer=e,this.length=r,this.byteLength=r,this.byteOffset=o,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,o,r),this._mark=0,this._marks=[]}available(e=1){return this.offset+e<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(e=1){return this.offset+=e,this}back(e=1){return this.offset-=e,this}seek(e){return this.offset=e,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const e=this._marks.pop();if(e===void 0)throw new Error("Mark stack empty");return this.seek(e),this}rewind(){return this.offset=0,this}ensureAvailable(e=1){if(!this.available(e)){const i=(this.offset+e)*2,s=new Uint8Array(i);s.set(new Uint8Array(this.buffer)),this.buffer=s.buffer,this.length=i,this.byteLength=i,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(e=1){return this.readArray(e,"uint8")}readArray(e,t){const i=Za[t].BYTES_PER_ELEMENT*e,s=this.byteOffset+this.offset,r=this.buffer.slice(s,s+i);if(this.littleEndian===FE&&t!=="uint8"&&t!=="int8"){const a=new Uint8Array(this.buffer.slice(s,s+i));a.reverse();const l=new Za[t](a.buffer);return this.offset+=i,l.reverse(),l}const o=new Za[t](r);return this.offset+=i,o}readInt16(){const e=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}readUint16(){const e=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,e}readInt32(){const e=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}readUint32(){const e=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}readFloat32(){const e=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}readFloat64(){const e=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}readBigInt64(){const e=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,e}readBigUint64(){const e=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,e}readChar(){return String.fromCharCode(this.readInt8())}readChars(e=1){let t="";for(let i=0;i<e;i++)t+=this.readChar();return t}readUtf8(e=1){return qh(this.readBytes(e))}decodeText(e=1,t="utf8"){return qh(this.readBytes(e),t)}writeBoolean(e){return this.writeUint8(e?255:0),this}writeInt8(e){return this.ensureAvailable(1),this._data.setInt8(this.offset++,e),this._updateLastWrittenByte(),this}writeUint8(e){return this.ensureAvailable(1),this._data.setUint8(this.offset++,e),this._updateLastWrittenByte(),this}writeByte(e){return this.writeUint8(e)}writeBytes(e){this.ensureAvailable(e.length);for(let t=0;t<e.length;t++)this._data.setUint8(this.offset++,e[t]);return this._updateLastWrittenByte(),this}writeInt16(e){return this.ensureAvailable(2),this._data.setInt16(this.offset,e,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(e){return this.ensureAvailable(2),this._data.setUint16(this.offset,e,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(e){return this.ensureAvailable(4),this._data.setInt32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(e){return this.ensureAvailable(4),this._data.setUint32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(e){return this.ensureAvailable(4),this._data.setFloat32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(e){return this.ensureAvailable(8),this._data.setFloat64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(e){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(e){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(e){return this.writeUint8(e.charCodeAt(0))}writeChars(e){for(let t=0;t<e.length;t++)this.writeUint8(e.charCodeAt(t));return this}writeUtf8(e){return this.writeBytes(OE(e))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}const kd=[];for(let n=0;n<256;n++){let e=n;for(let t=0;t<8;t++)e&1?e=3988292384^e>>>1:e=e>>>1;kd[n]=e}const Zh=4294967295;function kE(n,e,t){let i=n;for(let s=0;s<t;s++)i=kd[(i^e[s])&255]^i>>>8;return i}function BE(n,e){return(kE(Zh,n,e)^Zh)>>>0}function jh(n,e,t){const i=n.readUint32(),s=BE(new Uint8Array(n.buffer,n.byteOffset+n.offset-e-4,e),e);if(s!==i)throw new Error(`CRC mismatch for chunk ${t}. Expected ${i}, found ${s}`)}function Bd(n,e,t){for(let i=0;i<t;i++)e[i]=n[i]}function Gd(n,e,t,i){let s=0;for(;s<i;s++)e[s]=n[s];for(;s<t;s++)e[s]=n[s]+e[s-i]&255}function zd(n,e,t,i){let s=0;if(t.length===0)for(;s<i;s++)e[s]=n[s];else for(;s<i;s++)e[s]=n[s]+t[s]&255}function Hd(n,e,t,i,s){let r=0;if(t.length===0){for(;r<s;r++)e[r]=n[r];for(;r<i;r++)e[r]=n[r]+(e[r-s]>>1)&255}else{for(;r<s;r++)e[r]=n[r]+(t[r]>>1)&255;for(;r<i;r++)e[r]=n[r]+(e[r-s]+t[r]>>1)&255}}function Vd(n,e,t,i,s){let r=0;if(t.length===0){for(;r<s;r++)e[r]=n[r];for(;r<i;r++)e[r]=n[r]+e[r-s]&255}else{for(;r<s;r++)e[r]=n[r]+t[r]&255;for(;r<i;r++)e[r]=n[r]+GE(e[r-s],t[r],t[r-s])&255}}function GE(n,e,t){const i=n+e-t,s=Math.abs(i-n),r=Math.abs(i-e),o=Math.abs(i-t);return s<=r&&s<=o?n:r<=o?e:t}function zE(n,e,t,i,s,r){switch(n){case 0:Bd(e,t,s);break;case 1:Gd(e,t,s,r);break;case 2:zd(e,t,i,s);break;case 3:Hd(e,t,i,s,r);break;case 4:Vd(e,t,i,s,r);break;default:throw new Error(`Unsupported filter: ${n}`)}}const HE=new Uint16Array([255]),VE=new Uint8Array(HE.buffer),WE=VE[0]===255;function XE(n){const{data:e,width:t,height:i,channels:s,depth:r}=n,o=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],a=Math.ceil(r/8)*s,l=new Uint8Array(i*t*a);let c=0;for(let h=0;h<7;h++){const u=o[h],d=Math.ceil((t-u.x)/u.xStep),f=Math.ceil((i-u.y)/u.yStep);if(d<=0||f<=0)continue;const g=d*a,M=new Uint8Array(g);for(let p=0;p<f;p++){const m=e[c++],x=e.subarray(c,c+g);c+=g;const v=new Uint8Array(g);zE(m,x,v,M,g,a),M.set(v);for(let S=0;S<d;S++){const D=u.x+S*u.xStep,y=u.y+p*u.yStep;if(!(D>=t||y>=i))for(let A=0;A<a;A++)l[(y*t+D)*a+A]=v[S*a+A]}}}if(r===16){const h=new Uint16Array(l.buffer);if(WE)for(let u=0;u<h.length;u++)h[u]=$E(h[u]);return h}else return l}function $E(n){return(n&255)<<8|n>>8&255}const KE=new Uint16Array([255]),YE=new Uint8Array(KE.buffer),qE=YE[0]===255,ZE=new Uint8Array(0);function Qh(n){const{data:e,width:t,height:i,channels:s,depth:r}=n,o=Math.ceil(r/8)*s,a=Math.ceil(r/8*s*t),l=new Uint8Array(i*a);let c=ZE,h=0,u,d;for(let f=0;f<i;f++){switch(u=e.subarray(h+1,h+1+a),d=l.subarray(f*a,(f+1)*a),e[h]){case 0:Bd(u,d,a);break;case 1:Gd(u,d,a,o);break;case 2:zd(u,d,c,a);break;case 3:Hd(u,d,c,a,o);break;case 4:Vd(u,d,c,a,o);break;default:throw new Error(`Unsupported filter: ${e[h]}`)}c=d,h+=a+1}if(r===16){const f=new Uint16Array(l.buffer);if(qE)for(let g=0;g<f.length;g++)f[g]=jE(f[g]);return f}else return l}function jE(n){return(n&255)<<8|n>>8&255}const Oo=Uint8Array.of(137,80,78,71,13,10,26,10);function Jh(n){if(!QE(n.readBytes(Oo.length)))throw new Error("wrong PNG signature")}function QE(n){if(n.length<Oo.length)return!1;for(let e=0;e<Oo.length;e++)if(n[e]!==Oo[e])return!1;return!0}const JE="tEXt",ev=0,Wd=new TextDecoder("latin1");function tv(n){if(iv(n),n.length===0||n.length>79)throw new Error("keyword length must be between 1 and 79")}const nv=/^[\u0000-\u00FF]*$/;function iv(n){if(!nv.test(n))throw new Error("invalid latin1 text")}function sv(n,e,t){const i=Xd(e);n[i]=rv(e,t-i.length-1)}function Xd(n){for(n.mark();n.readByte()!==ev;);const e=n.offset;n.reset();const t=Wd.decode(n.readBytes(e-n.offset-1));return n.skip(1),tv(t),t}function rv(n,e){return Wd.decode(n.readBytes(e))}const tn={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},ja={UNKNOWN:-1,DEFLATE:0},eu={UNKNOWN:-1,ADAPTIVE:0},Qa={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},ho={NONE:0,BACKGROUND:1,PREVIOUS:2},Ja={SOURCE:0,OVER:1};class ov extends Uc{constructor(t,i={}){super(t);je(this,"_checkCrc");je(this,"_inflator");je(this,"_png");je(this,"_apng");je(this,"_end");je(this,"_hasPalette");je(this,"_palette");je(this,"_hasTransparency");je(this,"_transparency");je(this,"_compressionMethod");je(this,"_filterMethod");je(this,"_interlaceMethod");je(this,"_colorType");je(this,"_isAnimated");je(this,"_numberOfFrames");je(this,"_numberOfPlays");je(this,"_frames");je(this,"_writingDataChunks");je(this,"_chunks");je(this,"_inflatorResult");const{checkCrc:s=!1}=i;this._checkCrc=s,this._inflator=new Yh((r,o)=>{if(this._chunks.push(r),o){const a=this._chunks.reduce((c,h)=>c+h.length,0);this._inflatorResult=new Uint8Array(a);let l=0;for(const c of this._chunks)this._inflatorResult.set(c,l),l+=c.length;this._chunks=[]}}),this._chunks=[],this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=ja.UNKNOWN,this._filterMethod=eu.UNKNOWN,this._interlaceMethod=Qa.UNKNOWN,this._colorType=tn.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this._inflatorResult=new Uint8Array(0),this.setBigEndian()}decode(){for(Jh(this);!this._end;){const t=this.readUint32(),i=this.readChars(4);this.decodeChunk(t,i)}return this._inflator.push(new Uint8Array(0),!0),this.decodeImage(),this._png}decodeApng(){for(Jh(this);!this._end;){const t=this.readUint32(),i=this.readChars(4);this.decodeApngChunk(t,i)}return this.decodeApngImage(),this._apng}decodeChunk(t,i){const s=this.offset;switch(i){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(t);break;case"IDAT":this.decodeIDAT(t);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(t);break;case"iCCP":this.decodeiCCP(t);break;case JE:sv(this._png.text,this,t);break;case"pHYs":this.decodepHYs();break;default:this.skip(t);break}if(this.offset-s!==t)throw new Error(`Length mismatch while decoding chunk ${i}`);this._checkCrc?jh(this,t+4,i):this.skip(4)}decodeApngChunk(t,i){const s=this.offset;switch(i!=="fdAT"&&i!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),i){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(t);break;default:this.decodeChunk(t,i),this.offset=s+t;break}if(this.offset-s!==t)throw new Error(`Length mismatch while decoding chunk ${i}`);this._checkCrc?jh(this,t+4,i):this.skip(4)}decodeIHDR(){const t=this._png;t.width=this.readUint32(),t.height=this.readUint32(),t.depth=av(this.readUint8());const i=this.readUint8();this._colorType=i;let s;switch(i){case tn.GREYSCALE:s=1;break;case tn.TRUECOLOUR:s=3;break;case tn.INDEXED_COLOUR:s=1;break;case tn.GREYSCALE_ALPHA:s=2;break;case tn.TRUECOLOUR_ALPHA:s=4;break;case tn.UNKNOWN:default:throw new Error(`Unknown color type: ${i}`)}if(this._png.channels=s,this._compressionMethod=this.readUint8(),this._compressionMethod!==ja.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const t={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(t)}decodePLTE(t){if(t%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${t}`);const i=t/3;this._hasPalette=!0;const s=[];this._palette=s;for(let r=0;r<i;r++)s.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(t){this._writingDataChunks=!0;const i=t,s=this.offset+this.byteOffset;try{this._inflator.push(new Uint8Array(this.buffer,s,i),!1)}catch(r){throw new Error("Error while decompressing the data:",{cause:r})}this.skip(t)}decodeFDAT(t){this._writingDataChunks=!0;let i=t,s=this.offset+this.byteOffset;s+=4,i-=4;try{this._inflator.push(new Uint8Array(this.buffer,s,i),!1)}catch(r){throw new Error("Error while decompressing the data:",{cause:r})}this.skip(t)}decodetRNS(t){switch(this._colorType){case tn.GREYSCALE:case tn.TRUECOLOUR:{if(t%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);if(t/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(t/2);for(let i=0;i<t/2;i++)this._transparency[i]=this.readUint16();break}case tn.INDEXED_COLOUR:{if(t>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);let i=0;for(;i<t;i++){const s=this.readByte();this._palette[i].push(s)}for(;i<this._palette.length;i++)this._palette[i].push(255);break}case tn.UNKNOWN:case tn.GREYSCALE_ALPHA:case tn.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(t){const i=Xd(this),s=this.readUint8();if(s!==ja.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${s}`);const r=this.readBytes(t-i.length-2);this._png.iccEmbeddedProfile={name:i,profile:DE(r)}}decodepHYs(){const t=this.readUint32(),i=this.readUint32(),s=this.readByte();this._png.resolution={x:t,y:i,unit:s}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let t=0;t<this._numberOfFrames;t++){const i={sequenceNumber:this._frames[t].sequenceNumber,delayNumber:this._frames[t].delayNumber,delayDenominator:this._frames[t].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},s=this._frames.at(t);if(s){if(s.data=Qh({data:s.data,width:s.width,height:s.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),t===0||s.xOffset===0&&s.yOffset===0&&s.width===this._png.width&&s.height===this._png.height)i.data=s.data;else{const r=this._apng.frames.at(t-1);this.disposeFrame(s,r,i),this.addFrameDataToCanvas(i,s)}this._apng.frames.push(i)}}return this._apng}disposeFrame(t,i,s){switch(t.disposeOp){case ho.NONE:break;case ho.BACKGROUND:for(let r=0;r<this._png.height;r++)for(let o=0;o<this._png.width;o++){const a=(r*t.width+o)*this._png.channels;for(let l=0;l<this._png.channels;l++)s.data[a+l]=0}break;case ho.PREVIOUS:s.data.set(i.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(t,i){const s=1<<this._png.depth,r=(o,a)=>{const l=((o+i.yOffset)*this._png.width+i.xOffset+a)*this._png.channels,c=(o*i.width+a)*this._png.channels;return{index:l,frameIndex:c}};switch(i.blendOp){case Ja.SOURCE:for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){const{index:l,frameIndex:c}=r(o,a);for(let h=0;h<this._png.channels;h++)t.data[l+h]=i.data[c+h]}break;case Ja.OVER:for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){const{index:l,frameIndex:c}=r(o,a);for(let h=0;h<this._png.channels;h++){const u=i.data[c+this._png.channels-1]/s,d=h%(this._png.channels-1)===0?1:i.data[c+h],f=Math.floor(u*d+(1-u)*t.data[l+h]);t.data[l+h]+=f}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){const t=this._inflatorResult;if(this._filterMethod!==eu.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===Qa.NO_INTERLACE)this._png.data=Qh({data:t,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===Qa.ADAM7)this._png.data=XE({data:t,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){this._inflator.push(new Uint8Array(0),!0);const t=this._inflatorResult,i=this._frames.at(-1);i?i.data=t:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:ho.NONE,blendOp:Ja.SOURCE,data:t}),this._inflator=new Yh((s,r)=>{if(this._chunks.push(s),r){const o=this._chunks.reduce((l,c)=>l+c.length,0);this._inflatorResult=new Uint8Array(o);let a=0;for(const l of this._chunks)this._inflatorResult.set(l,a),a+=l.length;this._chunks=[]}}),this._chunks=[],this._writingDataChunks=!1}}function av(n){if(n!==1&&n!==2&&n!==4&&n!==8&&n!==16)throw new Error(`invalid bit depth: ${n}`);return n}function kr(n,e){return new ov(n,e).decode()}const tu=2,$d="/fixtures/tiles/manifest.json";async function lv(n=$d){const e=await fetch(n);if(!e.ok)throw new Error(`fixture manifest missing: ${n} (${e.status})`);return cv(await e.json(),n)}function cv(n,e){const t=n.version;if(t!==tu)throw new Error(`fixture manifest ${e} declares version ${JSON.stringify(t)}; this build reads ${tu}. Re-snapshot the pack (npm run fixtures -- --line=<id> …). Without this check the pack loads, and the first thing to fail is the corridorKey compare — which reports key DRIFT for a pack whose actual problem is its schema.`);return n}function hv(n,e,t){return`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${n}/${e}/${t}.png`}function Kd(n,e,t,i){const s=new Float32Array(e*t);for(let r=0;r<e*t;r++){const o=r*i;s[r]=n[o]*256+n[o+1]+n[o+2]/256-32768}return s}function Yd(n){const e=kr(n);if(e.depth!==8)throw new Error(`terrarium tile must be 8-bit, got ${e.depth}`);if(e.channels!==3&&e.channels!==4)throw new Error(`terrarium tile must be RGB(A), got ${e.channels} channels`);return{width:e.width,height:e.height,elevations:Kd(e.data,e.width,e.height,e.channels)}}function uv(){return globalThis.__DATA_MODE==="fixtures"}const qd="/fixtures/tiles";function Zd(n,e,t,i=qd){return`${i}/terrarium-${n}-${e}-${t}.png`}class dv{constructor(e=qd){this.root=e}async getTileBytes(e,t,i){const s=Zd(e,t,i,this.root),r=await fetch(s);if(!r.ok)throw new Error(`fixture tile missing: ${s} (${r.status})`);return new Uint8Array(await r.arrayBuffer())}}class rc{async getTileBytes(e,t,i){if(uv())throw new Error(`live tile fetch attempted in fixtures mode: ${e}/${t}/${i}`);const s=await fetch(hv(e,t,i));if(!s.ok)throw new Error(`terrarium fetch failed: ${e}/${t}/${i} (${s.status})`);return new Uint8Array(await s.arrayBuffer())}}const ft=256,fv=["near","far"];function oc(n){const e=fv.indexOf(n);if(e<0)throw new Error(`roleRank: unknown TileRole ${JSON.stringify(n)} — add it to TILE_ROLE_ORDER, which is what fixes pack ORDER as well as this lookup`);return e}function jd(n,e){return oc(n.role)-oc(e.role)||e.z-n.z||n.y-e.y||n.x-e.x}function Ci(n,e,t){return`${n}/${e}/${t}`}function ac(n,e,t){const i=2**t,s=e*Math.PI/180;return{xf:(n+180)/360*i,yf:(1-Math.log(Math.tan(s)+1/Math.cos(s))/Math.PI)/2*i}}function Qi(n,e,t){const i=2**t,s=(n+180)/360*i,r=e*Math.PI/180,o=(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i,a=Math.floor(s),l=Math.floor(o);return{x:a,y:l,z:t,px:Math.min(ft-1,Math.floor((s-a)*ft)),py:Math.min(ft-1,Math.floor((o-l)*ft))}}function pv(n,e,t){const i=2**t,s=Math.PI-2*Math.PI*e/i;return{lon:n/i*360-180,lat:180/Math.PI*Math.atan(.5*(Math.exp(s)-Math.exp(-s)))}}function mv(n,e){return 156543.03392*Math.cos(n*Math.PI/180)/2**e}const Fc=111320;function kc(n,e){return{lat:n,lon:e,metersPerDegLon:Fc*Math.cos(n*Math.PI/180)}}function Pn(n,e,t){return{lat:n.lat-t/Fc,lon:n.lon+e/n.metersPerDegLon}}function Ji(n,e,t){return{x:(t-n.lon)*n.metersPerDegLon,z:(n.lat-e)*Fc}}function Gi(n,e,t,i){const{lat:s,lon:r}=Pn(n,e,t),o=ac(r,s,i);return{gx:o.xf*ft,gy:o.yf*ft}}const _v=2*Math.PI;function ca(n,e){return Math.hypot(e.x-n.x,e.z-n.z)}function Qd(n,e){const t=Math.atan2(e.x-n.x,n.z-e.z);return t<0?t+_v:t}function Jd(n,e,t){const i=e.x-n.x,s=e.z-n.z,r=Math.hypot(i,s),o=t.x-n.x,a=t.z-n.z,l=(o*i+a*s)/r,c=(i*a-s*o)/r,h=l<0?Math.hypot(o,a):l>r?ca(e,t):Math.abs(c);return{along:Math.min(Math.max(l,0),r),xtdSigned:c,dist:h}}const gv=6378137,pi=Math.PI/180;function Bc(n,e){const t=n.lat*pi,i=e.lat*pi,s=Math.sin((i-t)/2)**2+Math.cos(t)*Math.cos(i)*Math.sin((e.lon-n.lon)*pi/2)**2;return 2*gv*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))}function ef(n,e){const t=n.lat*pi,i=e.lat*pi,s=(e.lon-n.lon)*pi,r=Math.cos(i)*Math.cos(s),o=Math.cos(i)*Math.sin(s),a=Math.atan2(Math.sin(t)+Math.sin(i),Math.hypot(Math.cos(t)+r,o)),l=n.lon+Math.atan2(o,Math.cos(t)+r)/pi;return{lat:a/pi,lon:(l+540)%360-180}}function tf(n,e,t){if(!t){const r=ef(n,e);t=kc(r.lat,r.lon)}const i=Ji(t,n.lat,n.lon),s=Ji(t,e.lat,e.lon);return{frame:t,a:i,b:s,lengthM:ca(i,s),bearingRad:Qd(i,s)}}function nu(n,e,t,i,s,r){const o=Pn(n,e,i),a=Pn(n,t,s),l=Qi(o.lon,o.lat,r),c=Qi(a.lon,a.lat,r);return{x0:Math.min(l.x,c.x),x1:Math.max(l.x,c.x),y0:Math.min(l.y,c.y),y1:Math.max(l.y,c.y)}}function iu(n,e,t,i,s){for(let r=t.y0;r<=t.y1;r++)for(let o=t.x0;o<=t.x1;o++){const a=`${i}/${o}/${r}`;e.has(a)||(e.add(a),n.push({z:i,x:o,y:r,role:s}))}}function nf(n){const e=ef(n.a,n.b),t=kc(e.lat,e.lon),i=tf(n.a,n.b,t),s=Math.min(i.a.x,i.b.x)-n.nearMarginM,r=Math.max(i.a.x,i.b.x)+n.nearMarginM,o=Math.min(i.a.z,i.b.z)-n.nearMarginM,a=Math.max(i.a.z,i.b.z)+n.nearMarginM,l=[],c=new Set;iu(l,c,nu(t,s,r,o,a,n.nearZoom),n.nearZoom,"near");for(const h of n.coarse)iu(l,c,nu(t,-h.radiusM,h.radiusM,-h.radiusM,h.radiusM,h.zoom),h.zoom,"far");return l.sort(jd),{spec:n,frame:t,midpoint:e,lengthM:Bc(n.a,n.b),bearingRad:i.bearingRad,a:i.a,b:i.b,tiles:l}}function Mv(n){return`${n.spec.nearZoom}/${n.spec.coarse.map(e=>e.zoom).join("+")}/${n.tiles.length}/${n.tiles.map(e=>`${e.z}.${e.x}.${e.y}`).join(",")}`}const Ev=(()=>{let n=0,e=0;for(let t=0;t<=1e3;t++){const i=t/1e3,s=i*i,r=s*i,o=[.5*(-i+2*s-r),.5*(2-5*s+3*r),.5*(i+4*s-3*r),.5*(-s+r)];let a=0,l=0;for(const c of o)c>0?a+=c:l-=c;a>n&&(n=a),l>e&&(e=l)}return n*n+e*e})();class sf{constructor(e){je(this,"tiles",new Map);je(this,"primaryBounds",null);je(this,"hiM",-1/0);je(this,"loM",1/0);this.zoom=e}get maxSampleBoundM(){const e=this.boundParts;return e.maxPost+e.overshoot}get boundParts(){if(!Number.isFinite(this.hiM))return{maxPost:0,overshoot:0};const e=Math.max(0,this.hiM),t=Math.min(0,this.loM);return{maxPost:e,overshoot:(e-t)*(Ev-1)}}addTile(e,t,i,s=!1){this.tiles.set(`${e}/${t}`,i);const r=i.elevations;for(let o=0;o<r.length;o++){const a=r[o];a>this.hiM&&(this.hiM=a),a<this.loM&&(this.loM=a)}(s||this.primaryBounds===null)&&(this.primaryBounds={gx0:e*ft,gy0:t*ft,gx1:e*ft+ft-1,gy1:t*ft+ft-1})}removeTile(e,t){this.tiles.delete(`${e}/${t}`)}get tileCount(){return this.tiles.size}hasTileAtPixel(e,t){return this.tiles.has(`${Math.floor(e/ft)}/${Math.floor(t/ft)}`)}pixel(e,t){let i=Math.floor(e/ft),s=Math.floor(t/ft),r=this.tiles.get(`${i}/${s}`);if(!r){const l=this.primaryBounds;if(!l||(e=Math.min(l.gx1,Math.max(l.gx0,e)),t=Math.min(l.gy1,Math.max(l.gy0,t)),i=Math.floor(e/ft),s=Math.floor(t/ft),r=this.tiles.get(`${i}/${s}`),!r))return 0}const o=e-i*ft,a=t-s*ft;return r.elevations[a*r.width+o]}}function su(n,e,t,i,s){const r=s*s,o=r*s;return .5*(2*e+(-n+t)*s+(2*n-5*e+4*t-i)*r+(-n+3*e-3*t+i)*o)}function ru(n,e,t){const i=e-.5,s=t-.5,r=Math.floor(i),o=Math.floor(s),a=i-r,l=s-o,c=[];for(let h=-1;h<=2;h++)c.push(su(n.pixel(r-1,o+h),n.pixel(r,o+h),n.pixel(r+1,o+h),n.pixel(r+2,o+h),a));return su(c[0],c[1],c[2],c[3],l)}function Ni(n,e,t,i){let s=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761)^i;return s=Math.imul(s^s>>>15,625341585),s^=s>>>13,s=Math.imul(s,2246822507),((s^s>>>16)>>>0)/4294967296}function vv(n){const e=n.depthM??_.RAVINE_DEPTH_M,t=n.grainAmpM??_.GRAIN_AMP_M,i=n.narrow??_.RAVINE_NARROW,s=n.jitter??_.RAVINE_JITTER,r=n.levels??_.RAVINE_LEVELS,o=[];for(let d=n.ceilM,f=0;f<r&&d>n.floorM*1.01;d/=_.RAVINE_HORTON,f++)o.push(d);const a=o.map((d,f)=>Math.pow(_.RAVINE_HORTON,-f*_.RAVINE_DEPTH_FALLOFF)),l=a.reduce((d,f)=>d+f,0)||1,c=a.map(d=>e*d/l),h=c.reduce((d,f)=>d+f,0)+t,u=d=>Math.pow((1+Math.cos(d))*.5,i);return{peakM:h,waves:o,at:(d,f,g,M,p)=>{if(p<=0)return 0;let m=0;for(let x=0;x<o.length;x++){const v=o[x],S=v,D=(d+n.phaseX)/S,y=(f+n.phaseZ)/S,A=Math.floor(D),b=Math.floor(y);let R=0,E=0,T=0;for(let k=-1;k<=1;k++)for(let K=-1;K<=1;K++){const q=A+K,H=b+k,Q=(Ni(q,H,x,n.seed)-.5)*s,Y=(Ni(q,H,x,n.seed^1542469173)-.5)*s,j=(D-(q+.5+Q))*S,fe=(y-(H+.5+Y))*S,X=(j*j+fe*fe)/(.5*v*(.5*v));if(X>9)continue;const se=Math.exp(-X),ie=-j*M+fe*g,F=Ni(q,H,x+64,n.seed)*(2*Math.PI),I=2*Math.PI*ie/v+F;R+=se*Math.cos(I),E+=se*Math.sin(I),T+=se}if(T<=0)continue;const O=Math.hypot(R,E)/T;m-=c[x]*p*O*u(Math.atan2(E,R))}if(t>0){const x=(d+n.phaseX)/_.GRAIN_DOMAIN_M,v=(f+n.phaseZ)/_.GRAIN_DOMAIN_M,S=Math.floor(x),D=Math.floor(v),y=x-S,A=v-D,b=X=>X*X*(3-2*X),R=Ni(S,D,127,n.seed),E=Ni(S+1,D,127,n.seed),T=Ni(S,D+1,127,n.seed),O=Ni(S+1,D+1,127,n.seed),k=b(y),K=b(A),q=((R*(1-k)+E*k)*(1-K)+(T*(1-k)+O*k)*K)*Math.PI,H=Math.cos(q),Q=Math.sin(q),Y=(d+n.phaseX)*H+(f+n.phaseZ)*Q,j=2*Math.PI*Y/_.GRAIN_WAVE_M,fe=Math.pow((1+Math.cos(j))*.5,_.GRAIN_NARROW)-.375;m+=t*p*fe}return m}}}function xv(n,e={}){const t=2*_.CHUNK_GRID_STEP_M,i=(e.windowPosts??_.TERRAIN_DETAIL_WINDOW_POSTS)*n,s=i/2,r=[];for(let a=s;a>t*1.01;a/=2)r.push(a);const o=Math.max(0,Math.min(e.ridgeOctaves??_.TERRAIN_DETAIL_RIDGE_OCTAVES,r.length)-1);return{windowM:i,ceilM:s,floorM:t,octaves:Math.max(0,Math.log2(s/t)),waves:r,gateM:r.length===0?0:r[o]}}function ou(n,e,t,i={}){const s=(i.windowPosts??_.TERRAIN_DETAIL_WINDOW_POSTS)*n,r=o=>(o%s+s)%s;return{phaseX:r(n*e),phaseZ:r(n*t)}}function nn(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761)|0;return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}const Ct=n=>n*n*(3-2*n);function au(n,e){return Ct(Math.min(1,n/e))*Ct(Math.min(1,(1-n)/e))}function Sv(){let e=0;for(let t=0;t<64;t++){const i=Ct((t+.5)/64);for(let s=0;s<64;s++){const r=Ct((s+.5)/64),o=(1-i)*(1-r),a=i*(1-r),l=(1-i)*r,c=i*r;e+=o*o+a*a+l*l+c*c}}return e/(64*64)}class Ss{constructor(e,t){je(this,"mask");je(this,"kx");je(this,"kz");je(this,"ok");je(this,"v");const i=1<<e;this.mask=i-1,this.kx=new Int32Array(i),this.kz=new Int32Array(i),this.ok=new Uint8Array(i),this.v=new Float64Array(i*t)}slot(e,t){return(Math.imul(e,2654435761)^Math.imul(t,2246822507))>>>0&this.mask}hit(e,t,i){return this.ok[e]===1&&this.kx[e]===t&&this.kz[e]===i}claim(e,t,i){this.ok[e]=1,this.kx[e]=t,this.kz[e]=i}}const As=14,cn=6,lu=2.3;function Av(n){const e=xv(n.demCellM,n),t=n.rmsM??_.TERRAIN_DETAIL_RMS_M,i=n.ridgeGain??_.TERRAIN_DETAIL_RIDGE_GAIN,s=e.waves.length;if(s===0||t<=0&&i<=0&&(n.ravineDepthM??_.RAVINE_DEPTH_M)<=0)return{at:()=>0,band:e,peakM:0};const{landformHeightAt:r,waterFadeAt:o,phaseX:a,phaseZ:l,seed:c}=n,h=n.taper??_.TERRAIN_DETAIL_TAPER,u=(1-h)*(1-h),d=n.H??_.TERRAIN_DETAIL_H,f=Math.min(n.ridgeOctaves??_.TERRAIN_DETAIL_RIDGE_OCTAVES,s),g=e.gateM,M=n.ridgeCap??_.TERRAIN_DETAIL_RIDGE_CAP,p=n.wander??_.TERRAIN_DETAIL_WANDER,m=n.reposeDeg??0,x=m>0?Math.tan(m*Math.PI/180):0,v=n.elevGainPerKm??0,S=n.elevRefM??500,D=n.hVary??0,y=Sv(),A=[];let b=0;for(let ce=0;ce<s;ce++){const _e=Math.pow(.5,ce*d);A.push(_e),b+=_e*_e}const R=Math.sqrt(y/12*b),E=A.map(ce=>t*ce/R),T=n.slopeFloor??_.TERRAIN_DETAIL_SLOPE_FLOOR,O=n.slopeLoDeg??_.TERRAIN_DETAIL_SLOPE_LO_DEG,k=n.slopeHiDeg??_.TERRAIN_DETAIL_SLOPE_HI_DEG,K=n.aniso??_.TERRAIN_DETAIL_ANISO,q=vv({ceilM:e.ceilM,floorM:e.floorM,phaseX:a,phaseZ:l,seed:c,depthM:n.ravineDepthM,levels:n.ravineLevels,grainAmpM:n.grainAmpM}),H=q.peakM>0&&q.waves.length>0,Q=(ce,_e,ee,ue)=>{const de=o(ce,_e,2*ee);if(ue[4]=de,ue[5]=0,de<=0){ue[0]=0,ue[1]=1,ue[2]=0,ue[3]=0;return}const Ee=r(ce+ee,_e),Te=r(ce-ee,_e),ne=r(ce,_e+ee),G=r(ce,_e-ee),he=(Ee-Te)/(2*ee),N=(ne-G)/(2*ee),z=Math.hypot(he,N),J=Math.atan(z)*180/Math.PI,Ae=Math.max(0,Math.min(1,(J-O)/(k-O)));ue[0]=de*(T+(1-T)*Ct(Ae)),ue[1]=z>1e-9?-he/z:1,ue[2]=z>1e-9?-N/z:0,ue[3]=Ct(Math.max(0,Math.min(1,(J-2)/7))),ue[5]=z},Y=(ce,_e,ee)=>r(ce,_e)-(r(ce+ee,_e)+r(ce-ee,_e)+r(ce,_e+ee)+r(ce,_e-ee))/4,j=(ce,_e,ee,ue,de,Ee)=>{const Te=5*ee,ne=Math.floor(ce/Te),G=Math.floor(_e/Te),he=Ct(ce/Te-ne),N=Ct(_e/Te-G),z=nn(ne,G,Ee^20973),J=nn(ne+1,G,Ee^20973),Ae=nn(ne,G+1,Ee^20973),be=nn(ne+1,G+1,Ee^20973),Pe=p*((z*(1-he)+J*he)*(1-N)+(Ae*(1-he)+be*he)*N-.5),We=(ce*ue+_e*de)/(lu*ee*K),ge=(-ce*de+_e*ue)/(lu*ee)+Pe,Ie=Math.floor(We),Re=Math.floor(ge),Ue=Ct(We-Ie),Be=Ct(ge-Re),rt=nn(Ie,Re,Ee),ut=nn(Ie+1,Re,Ee),Rt=nn(Ie,Re+1,Ee),yt=nn(Ie+1,Re+1,Ee);return(rt*(1-Ue)+ut*Ue)*(1-Be)+(Rt*(1-Ue)+yt*Ue)*Be},fe=new Float64Array(cn),X=new Ss(As,cn),se=(ce,_e)=>{const ee=X.slot(ce,_e),ue=ee*cn;if(!X.hit(ee,ce,_e)){X.claim(ee,ce,_e),Q(ce*g-a,_e*g-l,g/2,fe);for(let de=0;de<cn;de++)X.v[ue+de]=fe[de]}return ue},ie=new Float64Array(cn),F=new Float64Array(cn),I=new Float64Array(cn),B=new Float64Array(cn),C=(ce,_e,ee)=>{const ue=se(ce,_e);for(let de=0;de<cn;de++)ee[de]=X.v[ue+de]},P=(ce,_e,ee)=>{const ue=(ce+a)/g,de=(_e+l)/g,Ee=Math.floor(ue),Te=Math.floor(de),ne=Ct(ue-Ee),G=Ct(de-Te);C(Ee,Te,ie),C(Ee+1,Te,F),C(Ee,Te+1,I),C(Ee+1,Te+1,B);for(let N=0;N<cn;N++)ee[N]=(ie[N]*(1-ne)+F[N]*ne)*(1-G)+(I[N]*(1-ne)+B[N]*ne)*G;const he=Math.hypot(ee[1],ee[2]);he>1e-9?(ee[1]/=he,ee[2]/=he):(ee[1]=1,ee[2]=0,ee[3]=0)},W=e.waves.map(()=>new Ss(As,5)),$=e.waves.map(()=>new Ss(As,1)),Z=(ce,_e,ee)=>{const ue=$[ce],de=ue.slot(_e,ee);return ue.hit(de,_e,ee)||(ue.claim(de,_e,ee),ue.v[de]=xe(ce,_e,ee,e.waves[ce])),ue.v[de]},w=(ce,_e,ee)=>{const ue=W[ce],de=ue.slot(_e,ee),Ee=de*5;if(!ue.hit(de,_e,ee)){ue.claim(de,_e,ee);const Te=Z(ce,_e,ee),ne=Z(ce,_e+1,ee),G=Z(ce,_e,ee+1),he=Z(ce,_e+1,ee+1);ue.v[Ee]=Te,ue.v[Ee+1]=ne,ue.v[Ee+2]=G,ue.v[Ee+3]=he,ue.v[Ee+4]=(Te+ne+G+he)/4}return Ee},re=(ce,_e)=>{const ee=e.windowM,ue=Math.floor(ce/ee),de=Math.floor(_e/ee),Ee=Ct(ce/ee-ue),Te=Ct(_e/ee-de),ne=nn(ue,de,c^19807),G=nn(ue+1,de,c^19807),he=nn(ue,de+1,c^19807),N=nn(ue+1,de+1,c^19807);return(ne*(1-Ee)+G*Ee)*(1-Te)+(he*(1-Ee)+N*Ee)*Te},te=new Float64Array(cn),xe=(ce,_e,ee,ue)=>{const de=_e*ue-a,Ee=ee*ue-l,Te=ue/2,ne=c+ce*40503|0;ce<f?Q(de,Ee,Te,te):P(de,Ee,te);const G=te[0];if(G<=0)return 0;const he=nn(_e,ee,ne),N=j(de,Ee,ue,te[1],te[2],ne),z=he+te[3]*(N-he);let J=E[ce];D>0&&(J*=Math.pow(.5,ce*(2*D*(re(de,Ee)-.5))));let Ae=1/0;if(x>0&&(Ae=Math.max(0,x-te[5])*(ue/4)),ce>=f){const ge=J*G*(z-.5);return Ae===1/0?ge:Math.max(-Ae,Math.min(Ae,ge))}const be=M*ue;let Pe=i;if(v!==0){const ge=1+v*(r(de,Ee)-S)/1e3;Pe*=Math.max(.25,Math.min(4,ge))}const We=J*G*(z-.5)+G*Math.max(-be,Math.min(be,Pe*Y(de,Ee,Te)));return Ae===1/0?We:Math.max(-Ae,Math.min(Ae,We))},oe=e.waves.map(ce=>Math.round(e.windowM/ce)),Ce=Math.round(e.windowM/g),Ne=new Ss(As,2),De=n.ravineQuad??_.RAVINE_QUAD,V=e.windowM/De,L=new Ss(As,1),ae=new Ss(As,5),ye=new Float64Array(cn),we=(ce,_e)=>{const ee=L.slot(ce,_e);if(!L.hit(ee,ce,_e)){L.claim(ee,ce,_e);const ue=ce*V-a,de=_e*V-l;P(ue,de,ye),L.v[ee]=q.at(ue,de,ye[1],ye[2],ye[0])}return L.v[ee]},Se=(ce,_e)=>{const ee=ae.slot(ce,_e),ue=ee*5;if(!ae.hit(ee,ce,_e)){ae.claim(ee,ce,_e);const de=we(ce,_e),Ee=we(ce+1,_e),Te=we(ce,_e+1),ne=we(ce+1,_e+1);ae.v[ue]=de,ae.v[ue+1]=Ee,ae.v[ue+2]=Te,ae.v[ue+3]=ne,ae.v[ue+4]=(de+Ee+Te+ne)/4}return ue},ke=(ce,_e)=>{const ee=Ne.slot(ce,_e);if(!Ne.hit(ee,ce,_e)){Ne.claim(ee,ce,_e);let ue=0;for(let Te=0;Te<s;Te++){const ne=oe[Te];let G=0;for(let he=0;he<ne;he++)for(let N=0;N<ne;N++)G+=W[Te].v[w(Te,ce*ne+he,_e*ne+N)+4];ue+=G/(ne*ne)}if(H){const Te=De;let ne=0;for(let G=0;G<Te;G++)for(let he=0;he<Te;he++)ne+=ae.v[Se(ce*Te+G,_e*Te+he)+4];ue+=ne/(Te*Te)}let de=0;const Ee=Ce;for(let Te=0;Te<Ee;Te++)for(let ne=0;ne<Ee;ne++){const G=ce*Ee+Te,he=_e*Ee+ne;de+=(X.v[se(G,he)+4]+X.v[se(G+1,he)+4]+X.v[se(G,he+1)+4]+X.v[se(G+1,he+1)+4])/4}Ne.v[ee*2]=ue,Ne.v[ee*2+1]=de/(Ee*Ee)}return ee*2};let Le=0;for(let ce=0;ce<s;ce++){const _e=E[ce]*(D>0?Math.pow(2,ce*D):1);Le+=_e*.5+(ce<f?M*e.waves[ce]:0)}Le+=q.peakM;const Oe=Le/u,ze=Le+Oe;return{band:e,peakM:ze,at:(ce,_e)=>{const ee=ce+a,ue=_e+l;let de=0;for(let Ae=0;Ae<s;Ae++){const be=e.waves[Ae],Pe=ee/be,We=ue/be,ge=Math.floor(Pe),Ie=Math.floor(We),Re=W[Ae].v,Ue=w(Ae,ge,Ie),Be=Ct(Pe-ge),rt=Ct(We-Ie);de+=(Re[Ue]*(1-Be)+Re[Ue+1]*Be)*(1-rt)+(Re[Ue+2]*(1-Be)+Re[Ue+3]*Be)*rt}if(H){const Ae=ee/V,be=ue/V,Pe=Math.floor(Ae),We=Math.floor(be),ge=ae.v,Ie=Se(Pe,We),Re=Ct(Ae-Pe),Ue=Ct(be-We);de+=(ge[Ie]*(1-Re)+ge[Ie+1]*Re)*(1-Ue)+(ge[Ie+2]*(1-Re)+ge[Ie+3]*Re)*Ue}const Ee=ee/e.windowM,Te=ue/e.windowM,ne=Math.floor(Ee),G=Math.floor(Te),he=ke(ne,G),N=Ne.v[he],z=Ne.v[he+1];if(N===0)return de;let J=N*au(Ee-ne,h)*au(Te-G,h)/u;return z<1&&(P(ce,_e,te),J*=z>1e-6?te[4]/z:0),J>Oe?J=Oe:J<-Oe&&(J=-Oe),de-J}}}function el(n){return n-Math.floor(n)}const tl=.3183099,nl=.3678794;let rf=0,of=0;function Rv(n,e){const t=n*tl+nl,i=e*nl+tl,s=el(t*i*(t+i));rf=-1+2*el(16*tl*s),of=-1+2*el(16*nl*s)}const il=6.28318530717959,qo=n=>n<0?0:n>1?1:n,ri=(n,e,t)=>n+(e-n)*t;function yv(n,e){return 1-Math.pow(1-qo(n),e)}function uo(n){const e=1-qo(n);return 1-e*e}function cu(n,e){return n>=e?n-.5*e:.5*n*n/e}const dr={x:0,y:0,z:0,w:0};function Tv(n,e,t,i,s,r,o){const a=-i*s*il,l=t*s*il,c=r*il,h=Math.floor(n),u=Math.floor(e),d=n-h,f=e-u;let g=0,M=0,p=0;for(let D=-1;D<=2;D++)for(let y=-1;y<=2;y++){Rv(h+D,u+y);const A=d-D-rf*.5,b=f-y-of*.5,R=A*A+b*b;let E=Math.exp(-R*2)-.01111;E<0&&(E=0),p+=E;const T=A*a+b*l+c;g+=Math.cos(T)*E,M+=Math.sin(T)*E}const m=g/p,x=M/p;let v=Math.sqrt(m*m+x*x);const S=1-o;return v<S&&(v=S),dr.x=m/v,dr.y=x/v,dr.z=a,dr.w=l,dr}const Gc={scale:.15,strength:.22,gullyWeight:.5,detail:1.5,rounding:[.1,0,.1,2],onset:[1.25,1.25,2.8,1.5],assumedSlope:[.7,1],octaves:5,lacunarity:2,gain:.5,cellScale:.7,normalization:.5,octaveLimit:1/0},Rs={dHeight:0,dSlopeX:0,dSlopeY:0,magnitude:0,ridgeMap:0};function hu(n,e,t,i,s,r,o){const a=o.octaveLimit??1/0;let l=o.strength*o.scale,c=r<-1?-1:r>1?1:r;const h=t,u=i,d=s;let f=t,g=i,M=s,p=1/(o.scale*o.cellScale);const m=Math.sqrt(i*i+s*s),x=m>1e-10?m:1e-10;let v=0,S=1;const[D,y,A,b]=o.rounding,[R,E,T,O]=o.onset,[k,K]=o.assumedSlope,q=ri(y,D,qo(c+.5))*A;let H=uo(cu(x*R,q*R)),Q=uo(x*T),Y=c,j=ri(i,i/x*k,K),fe=ri(s,s/x*k,K);for(let X=0;X<o.octaves;X++){const se=Math.sqrt(j*j+fe*fe),ie=Math.abs(se)>1e-10?j/se:j,F=Math.abs(se)>1e-10?fe/se:fe,I=Tv(n*p,e*p,ie,F,o.cellScale,.25,o.normalization),B=I.z*-p,C=I.w*-p,P=Math.abs(I.y),W=I.y>0?1:I.y<0?-1:0,$=(o.feedback??1)*o.gullyWeight;j+=W*B*l*$,fe+=W*C*l*$;const Z=I.x,w=I.y*B,re=I.y*C,te=ri(c,Z*o.gullyWeight,H),xe=ri(0,w*o.gullyWeight,H),oe=ri(0,re*o.gullyWeight,H),Ce=a>=X+1?1:a<=X?0:a-X;if(Ce<=0)break;f+=te*l*Ce,g+=xe*l*Ce,M+=oe*l*Ce,v+=l*Ce,c=te;const Ne=ri(y,D,qo(Z+.5))*S,De=uo(cu(P*E,Ne*E));H=yv(H,o.detail)*De,Y=ri(Y,Z,Q),Q=Q*uo(P*O),l*=o.gain,p*=o.lacunarity,S*=b}return Rs.dHeight=f-h,Rs.dSlopeX=g-u,Rs.dSlopeY=M-d,Rs.magnitude=v,Rs.ridgeMap=Y*(1-Q),Rs}function Gs(n){let e=n.strength*n.scale,t=0;for(let i=0;i<n.octaves;i++)t+=e,e*=n.gain;return t*Math.max(1,n.gullyWeight)}const bv=.001;function Wi(n,e,t){const i=new Float32Array(e*t).fill(1/0);for(let l=0;l<e;l++)i[l]=n[l],i[(t-1)*e+l]=n[(t-1)*e+l];for(let l=0;l<t;l++)i[l*e]=n[l*e],i[l*e+e-1]=n[l*e+e-1];const s=[-e-1,-e,-e+1,-1,1,e-1,e,e+1],r=4*Math.max(e,t);let o=!0,a=0;for(;o;){o=!1,a++;const l=a&3,c=l<2,h=(l&1)===0,[u,d]=c?[t,e]:[e,t],f=h?1:u-2,g=h?u-1:0,M=h?1:-1;for(let p=f;h?p<g:p>g;p+=M)for(let m=h?1:d-2;h?m<d-1:m>0;m+=h?1:-1){const x=c?p*e+m:m*e+p;if(!(i[x]<=n[x]))for(const v of s){const S=Math.fround(i[x+v]+bv);if(n[x]>=S){i[x]=n[x],o=!0;break}S<i[x]&&(i[x]=S,o=!0)}}if(a>r)throw new Error(`fillPits did not converge in ${r} sweeps (${e}x${t}) — beyond the one-ring-per-rotation worst case, so the surface or the sweep logic is wrong`)}return{surface:i,sweeps:a}}function Xi(n,e,t,i){const s=new Int32Array(e*t).fill(-1),r=[{d:-e-1,len:Math.SQRT2*i},{d:-e,len:i},{d:-e+1,len:Math.SQRT2*i},{d:-1,len:i},{d:1,len:i},{d:e-1,len:Math.SQRT2*i},{d:e,len:i},{d:e+1,len:Math.SQRT2*i}];for(let o=1;o<t-1;o++)for(let a=1;a<e-1;a++){const l=o*e+a;let c=0,h=-1;for(const{d:u,len:d}of r){const f=(n[l]-n[l+u])/d;f>c&&(c=f,h=l+u)}s[l]=h}return s}function af(n,e,t,i){const s=new Float32Array(t*i).fill(1),r=Array.from({length:t*i},(o,a)=>a).sort((o,a)=>n[a]-n[o]||o-a);for(const o of r){const a=e[o];a>=0&&(s[a]+=s[o])}return s}function wv(n,e,t,i){const s=(globalThis.performance??{now:()=>Date.now()}).now(),{surface:r,sweeps:o}=Wi(n,e,t),a=Xi(r,e,t,i),l=af(r,a,e,t);return{filled:r,dir:a,acc:l,sweeps:o,wallMs:(globalThis.performance??{now:()=>Date.now()}).now()-s}}function lf(n,e,t){const i=e*t,s=new Float32Array(i).fill(1),r=new Int32Array(i);for(let c=0;c<i;c++){const h=n[c];h>=0&&r[h]++}const o=new Int32Array(i);let a=0,l=0;for(let c=0;c<i;c++)r[c]===0&&(o[l++]=c);for(;a<l;){const c=o[a++],h=n[c];h<0||(s[h]+=s[c],--r[h]===0&&(o[l++]=h))}if(l!==i)throw new Error(`flowAccumulationTopo: ${i-l} of ${i} cells never drained — the D8 graph has a cycle, so the surface passed in was not pit-filled`);return{acc:s,order:o}}const Cv=.2;function Nv(n,e,t,i){const s=()=>(globalThis.performance??{now:()=>Date.now()}).now(),r=s(),o=e*e,a=new Float32Array(n),l=new Float32Array(o),c=i.routeOffset?new Float32Array(o):null,u=i.holdMask??null,d=[];let f=0,g=0,M=0,p=0;const m=Math.max(1,Math.ceil(i.diffuseCFL/Cv)),x=i.diffuseCFL/m;let v,S,D;const y=new Float64Array(o),A=t*t;for(let b=0;b<i.iterations;b++){if(b%i.rerouteEvery===0){const T=s();let O=a;if(i.routeOffset){O=c;for(let q=0;q<o;q++)O[q]=a[q]+i.routeOffset[q]}const{surface:k}=Wi(O,e,e);v=Xi(k,e,e,t);const K=lf(v,e,e);D=K.order,S=K.acc;for(let q=0;q<o;q++)S[q]=S[q]*A;for(let q=0;q<o;q++){const H=v[q];if(H<0){y[q]=0;continue}const Q=q%e-H%e,Y=(q/e|0)-(H/e|0),j=Q!==0&&Y!==0?Math.SQRT2*t:t;y[q]=i.K*Math.pow(S[q],i.m)*i.dtYears/j}f+=s()-T,p++}const R=s();let E=0;for(let T=o-1;T>=0;T--){const O=D[T],k=v[O];if(k<0||u!==null&&u[O])continue;const K=y[O],q=(a[O]+K*a[k])/(1+K),H=Math.min(a[O],Math.max(q,a[k]));E+=a[O]-H,a[O]=Math.fround(H)}if(g+=s()-R,d.push(E),i.diffuseCFL>0){const T=s();for(let O=0;O<m;O++){l.set(a);for(let k=1;k<e-1;k++)for(let K=1;K<e-1;K++){const q=k*e+K;if(u!==null&&u[q])continue;const H=l[q-1]+l[q+1]+l[q-e]+l[q+e]-4*l[q];a[q]=Math.fround(l[q]+x*H)}}M+=s()-T}}return{h:a,iterations:i.iterations,reroutes:p,diffuseSubsteps:m,removedPerIter:d,msTotal:s()-r,msRoute:f,msIncise:g,msDiffuse:M}}const cf=Object.freeze({cellM:5,perturbRmsM:4,perturbWaveM:0,perturbOctaves:2,channelAreaM2:8e3,areaSatM2:15e4,depthMaxM:20,depthExp:.45,slopeRefDeg:15,bankDeg:35,headTaperM:90,evolveIterations:250,evolveRerouteEvery:20,evolveK:16e-6,evolveDtYears:150,evolveM:.45,diffuseCFL:.08,flattenRadiusM:0,amplifyLoM:0,amplifyHiM:0,amplifyGain:1,fineDepthM:0,fineAreaLoM2:300,fineAreaHiM2:8e3,fineSmoothM:30,skirtDepthM:0,skirtRadiusM:35,shoreTaperM:40,minBranchM:40,seed:887319});function fo(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761)|0;return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}const uu=n=>n*n*(3-2*n);function Dv(n,e,t,i){const s=n/t,r=e/t,o=Math.floor(s),a=Math.floor(r),l=uu(s-o),c=uu(r-a),h=fo(o,a,i),u=fo(o+1,a,i),d=fo(o,a+1,i),f=fo(o+1,a+1,i);return(h*(1-l)+u*l)*(1-c)+(d*(1-l)+f*l)*c-.5}function du(n,e){const t=n/(7.5487*e),i=(-1+Math.sqrt(1+4*t*t))/2,s=Math.max(1,Math.round(i)),r=7.5487*Math.sqrt(s*(s+1))*e;return{w:s,achievedM:r,clamped:i<1}}function po(n,e,t){const i=new Float32Array(n),s=new Float32Array(e*e),r=(a,l)=>{for(let c=0;c<e;c++){const h=c*e;let u=0,d=0;for(let f=0;f<=t&&f<e;f++)u+=a[h+f],d++;for(let f=0;f<e;f++){l[h+f]=u/d;const g=f+t+1,M=f-t;g<e&&(u+=a[h+g],d++),M>=0&&(u-=a[h+M],d--)}}},o=(a,l)=>{for(let c=0;c<e;c++)for(let h=0;h<e;h++)l[h*e+c]=a[c*e+h]};for(let a=0;a<3;a++)r(i,s),o(s,i),r(i,s),o(s,i);return i}function fu(n,e,t,i,s){const r=s*s;return .5*(2*e+(t-n)*s+(2*n-5*e+4*t-i)*r+(3*e-n-3*t+i)*r*s)}function lc(n,e,t,i,s,r,o){const a=(r+i-s)/t,l=(o+i-s)/t,c=Math.max(1,Math.min(e-3,Math.floor(a))),h=Math.max(1,Math.min(e-3,Math.floor(l))),u=Math.max(-1,Math.min(2,a-c)),d=Math.max(-1,Math.min(2,l-h)),f=g=>{const M=(h+g)*e;return fu(n[M+c-1],n[M+c],n[M+c+1],n[M+c+2],u)};return fu(f(-1),f(0),f(1),f(2),d)}function Iv(n,e,t,i={}){const s=()=>(globalThis.performance??{now:()=>Date.now()}).now(),r=s(),o={...cf,...i},{cellM:a}=o,l=Math.floor(t*2/a)+1,c=l*l,h=N=>N*a-t,u=new Float32Array(c),d=new Uint8Array(c);let f=0;for(let N=0;N<l;N++){const z=h(N);for(let J=0;J<l;J++){const Ae=N*l+J,be=h(J);u[Ae]=n(be,z),e(be,z)&&(d[Ae]=1,f++)}}const g=s()-r,M=s(),p=o.perturbWaveM>0?o.perturbWaveM:4*a,m=new Float32Array(c);for(let N=0;N<l;N++){const z=h(N);for(let J=0;J<l;J++){const Ae=h(J);let be=0,Pe=1,We=p;for(let ge=0;ge<o.perturbOctaves;ge++)be+=Pe*Dv(Ae,z,We,o.seed^ge*40503),Pe*=.5,We*=.5;m[N*l+J]=be}}let x=0,v=0;for(let N=0;N<c;N++)x+=m[N],v+=m[N]*m[N];const S=Math.sqrt(Math.max(0,v/c-(x/c)**2)),D=S>0?o.perturbRmsM/S:0,y=new Float32Array(c),A=new Float32Array(c);let b=0;for(let N=0;N<c;N++){const z=m[N]*D;y[N]=z,A[N]=u[N]+z,b+=z*z}const R=Math.sqrt(b/c);let E=null;o.flattenRadiusM>0&&(E=po(u,l,Math.max(1,Math.round(o.flattenRadiusM/a))));let T=null;if(o.amplifyGain!==1&&o.amplifyHiM>o.amplifyLoM&&o.amplifyLoM>0){const N=E??u,z=du(o.amplifyLoM,a),J=du(o.amplifyHiM,a),Ae=(We,ge)=>Math.abs(ge-We)/We>.15?` ⚠ REQUESTED ${We} m, DELIVERING ${ge.toFixed(0)} m`:"";(z.clamped||Ae(o.amplifyLoM,z.achievedM)||Ae(o.amplifyHiM,J.achievedM))&&console.warn(`[drainage] amplify band ${o.amplifyLoM}–${o.amplifyHiM} m on a ${a} m grid → half-widths ${z.w}/${J.w} cells = ${z.achievedM.toFixed(0)}–${J.achievedM.toFixed(0)} m.${Ae(o.amplifyLoM,z.achievedM)}${Ae(o.amplifyHiM,J.achievedM)}${z.clamped?` The ${a} m grid's finest representable cutoff is ${z.achievedM.toFixed(0)} m; a finer band needs a finer grid, not a smaller number.`:""}`);const be=po(N,l,z.w),Pe=po(N,l,J.w);T=new Float32Array(c);for(let We=0;We<c;We++)T[We]=(o.amplifyGain-1)*(be[We]-Pe[We])}let O=null,k=E??u;o.evolveIterations>0&&(O=Nv(k,l,a,{iterations:o.evolveIterations,rerouteEvery:o.evolveRerouteEvery,dtYears:o.evolveDtYears,K:o.evolveK,m:o.evolveM,diffuseCFL:o.diffuseCFL,holdMask:d,routeOffset:y}),k=O.h);const K=new Float32Array(c);for(let N=0;N<c;N++)K[N]=k[N]-u[N]+(T?T[N]:0);if(T){const N=new Float32Array(c);for(let z=0;z<c;z++)N[z]=k[z]+T[z];k=N}const q=new Float32Array(c);for(let N=0;N<c;N++)q[N]=k[N]+y[N];const{surface:H,sweeps:Q}=Wi(q,l,l),Y=Xi(H,l,l,a),{acc:j,order:fe}=lf(Y,l,l),X=new Float32Array(c),se=a*a;for(let N=0;N<c;N++)X[N]=j[N]*se;let ie=0;if(o.fineDepthM>0&&o.fineAreaHiM2>o.fineAreaLoM2){const N=Math.log10(Math.max(1,o.fineAreaLoM2)),z=Math.log10(o.fineAreaHiM2),J=new Float32Array(c);for(let Pe=0;Pe<c;Pe++){if(d[Pe])continue;const We=Math.log10(Math.max(se,X[Pe])),ge=Math.max(0,Math.min(1,(We-N)/(z-N)));ge>0&&ie++,J[Pe]=-o.fineDepthM*ge*ge*(3-2*ge)}const Ae=o.fineSmoothM>0?Math.max(1,Math.round(o.fineSmoothM/a)):0,be=Ae>0?po(J,l,Ae):J;for(let Pe=0;Pe<c;Pe++)d[Pe]||(K[Pe]+=be[Pe]);console.log(`[drainage] fine band: ${o.fineDepthM} m over A ${o.fineAreaLoM2}–${o.fineAreaHiM2} m², log A smoothed ${o.fineSmoothM} m · touches ${ie} of ${c} cells (${(ie/c*100).toFixed(1)} %)`)}const F=s()-M,I=new Uint8Array(c),B=new Float32Array(c),C=o.channelAreaM2,P=Math.max(C*1.0001,o.areaSatM2),W=Math.pow(P/C,o.depthExp)-1;let $=0;for(let N=1;N<l-1;N++)for(let z=1;z<l-1;z++){const J=N*l+z;if(d[J]||X[J]<C)continue;I[J]=1,$++;const Ae=W>0?Math.min(1,Math.max(0,(Math.pow(X[J]/C,o.depthExp)-1)/W)):1,be=(k[J+1]-k[J-1])/(2*a),Pe=(k[J+l]-k[J-l])/(2*a),We=Math.atan(Math.hypot(be,Pe))*180/Math.PI,ge=Math.min(1,We/o.slopeRefDeg);B[J]=o.depthMaxM*Ae*ge}const Z=new Float32Array(c);for(let N=0;N<c;N++){const z=fe[N];if(!I[z])continue;const J=Y[z];if(J<0||!I[J])continue;const Ae=z%l-J%l,be=(z/l|0)-(J/l|0),Pe=Ae!==0&&be!==0?Math.SQRT2*a:a;Z[z]+Pe>Z[J]&&(Z[J]=Z[z]+Pe)}if(o.minBranchM>0)for(let N=0;N<c;N++)I[N]&&Z[N]<o.minBranchM&&(I[N]=0,B[N]=0,$--);if(o.headTaperM>0)for(let N=0;N<c;N++){if(!I[N]||B[N]<=0)continue;const z=Math.min(1,Math.max(0,Z[N]-o.minBranchM)/o.headTaperM);B[N]=B[N]*z*z*(3-2*z)}const w=new Int32Array(c).fill(-1);{const N=new Float32Array(c);for(let z=0;z<c;z++){if(!I[z])continue;const J=Y[z];J<0||!I[J]||X[z]>N[J]&&(N[J]=X[z],w[J]=z)}}const re=new Float32Array(c),te=new Float32Array(c);for(let N=0;N<c;N++)re[N]=N%l*a-t,te[N]=(N/l|0)*a-t;{const N=new Float32Array(c),z=new Float32Array(c);for(let J=0;J<6;J++){N.set(re),z.set(te);for(let Ae=0;Ae<c;Ae++){if(!I[Ae])continue;const be=w[Ae],Pe=Y[Ae];be<0||Pe<0||!I[Pe]||(re[Ae]=.5*N[Ae]+.25*(N[be]+N[Pe]),te[Ae]=.5*z[Ae]+.25*(z[be]+z[Pe]))}}}const xe=(N,z)=>lc(K,l,a,t,0,N,z),oe=new Float32Array(c);for(let N=0;N<c;N++)oe[N]=I[N]?n(re[N],te[N])+xe(re[N],te[N]):k[N];const Ce=new Float32Array(c);for(let N=0;N<c;N++)Ce[N]=oe[N]-B[N];let Ne=0;for(let N=c-1;N>=0;N--){const z=fe[N],J=Y[z];if(!(J<0||!I[z])&&Ce[z]<Ce[J]){Ce[z]=Ce[J];const Ae=Math.max(0,oe[z]-Ce[z]);Ae<B[z]&&Ne++,B[z]=Ae}}const De=new Int32Array(c);for(let N=0;N<c;N++){if(!I[N])continue;const z=Y[N];z>=0&&I[z]&&De[z]++}const V=new Int32Array(c),L=new Int32Array(c),ae=new Int32Array(c);for(let N=0;N<c;N++){const z=fe[N];if(!I[z])continue;V[z]=L[z]===0?1:ae[z]>=2?L[z]+1:L[z];const J=Y[z];J<0||!I[J]||(V[z]>L[J]?(L[J]=V[z],ae[J]=1):V[z]===L[J]&&ae[J]++)}const ye=[],we=[];for(let N=0;N<c;N++){if(!I[N])continue;const z=V[N];for(;ye.length<z;)ye.push(0),we.push(0);const J=Y[N],Ae=J>=0?N%l-J%l:0,be=J>=0?(N/l|0)-(J/l|0):0;J>=0&&I[J]&&(we[z-1]+=(Ae!==0&&be!==0?Math.SQRT2*a:a)/1e3),(J<0||!I[J]||V[J]!==z)&&ye[z-1]++}const Se=ye.slice(0,-1).map((N,z)=>ye[z+1]>0?N/ye[z+1]:1/0),ke=(N,z)=>{const J=z%l-N%l;return((z/l|0)-(N/l|0)+1)*3+(J+1)};let Le=0,Oe=0,ze=0,ce=0;{const N=new Int32Array(c);for(let J=0;J<c;J++){if(!I[J])continue;const Ae=Y[J];Ae>=0&&I[Ae]&&N[Ae]++}const z=new Uint8Array(c);for(let J=0;J<c;J++){if(!I[J]||N[J]!==0)continue;let Ae=J,be=-1,Pe=0,We=0;for(;We++<c;){const ge=Y[Ae];if(ge<0||!I[ge]||z[Ae])break;z[Ae]=1,ce++;const Ie=ke(Ae,ge);Ie===be?Pe++:(Pe>0&&(Le+=Pe,Oe++,Pe>=5&&(ze+=Pe)),Pe=1,be=Ie),Ae=ge}Pe>0&&(Le+=Pe,Oe++,Pe>=5&&(ze+=Pe))}}let _e=0,ee=0,ue=0,de=0,Ee=0;const Te=[];for(let N=0;N<c;N++){if(!I[N])continue;const z=Y[N];if(z>=0&&I[z]){const J=N%l-z%l,Ae=(N/l|0)-(z/l|0);ue+=J!==0&&Ae!==0?Math.SQRT2*a:a}De[N]>=2&&_e++,De[N]===0&&ee++,de+=B[N],B[N]>Ee&&(Ee=B[N]),Te.push(B[N])}Te.sort((N,z)=>N-z);const ne=c-f,G=ne*se/1e6,he=G>0?ue/1e3/G:0;return{g:l,cellM:a,halfM:t,params:o,z:u,zBase:k,evolveDelta:K,evolve:O,areaM2:X,dir:Y,order:fe,isChannel:I,isWater:d,depthM:B,prev:w,cx:re,cz:te,zNode:oe,stats:{cells:c,landCells:ne,waterCells:f,channelCells:$,bedClamped:Ne,junctions:_e,heads:ee,channelKm:ue/1e3,densityKmPerKm2:he,junctionsPerChannelKm:ue>0?_e/(ue/1e3):0,orderStreams:ye,orderKm:we,bifurcation:Se,dirRunMeanCells:Oe>0?Le/Oe:0,fracInStraightRuns:ce>0?ze/ce:0,spacingM:he>0?1e3/(2*he):1/0,depthMeanM:$?de/$:0,depthP90M:Te.length?Te[Math.min(Te.length-1,Math.floor(Te.length*.9))]:0,depthMaxM:Ee,perturbRmsAchievedM:R,fillSweeps:Q,sampleMs:g,routeMs:F,wallMs:s()-r}}}function Lv(n){const e=()=>(globalThis.performance??{now:()=>Date.now()}).now(),t=e(),{g:i,cellM:s,halfM:r,dir:o,isChannel:a,depthM:l,evolveDelta:c}=n,h=i*i,u=Math.tan(n.params.bankDeg*Math.PI/180),{prev:d,cx:f,cz:g}=n,M=3e4,p=I=>{const B=new Int16Array(h).fill(M),C=new Int16Array(h).fill(M),P=new Int32Array(h).fill(-1);for(let w=0;w<h;w++)I[w]&&(B[w]=0,C[w]=0,P[w]=w);const W=w=>B[w]*B[w]+C[w]*C[w],$=(w,re,te,xe)=>{if(P[re]===-1)return;const oe=B[re]+te,Ce=C[re]+xe;oe*oe+Ce*Ce<W(w)&&(B[w]=oe,C[w]=Ce,P[w]=P[re])};for(let w=0;w<i;w++)for(let re=0;re<i;re++){const te=w*i+re;re>0&&$(te,te-1,1,0),w>0&&$(te,te-i,0,1),re>0&&w>0&&$(te,te-i-1,1,1),re<i-1&&w>0&&$(te,te-i+1,-1,1)}for(let w=i-1;w>=0;w--)for(let re=i-1;re>=0;re--){const te=w*i+re;re<i-1&&$(te,te+1,-1,0),w<i-1&&$(te,te+i,0,-1),re<i-1&&w<i-1&&$(te,te+i+1,-1,-1),re>0&&w<i-1&&$(te,te+i-1,1,-1)}const Z=new Float32Array(h);for(let w=0;w<h;w++)Z[w]=P[w]===-1?1/0:Math.sqrt(W(w))*s;return{site:P,distM:Z}},{site:m,distM:x}=p(a),v=n.params.shoreTaperM,S=v>0&&n.isWater.some(I=>I===1)?p(n.isWater).distM:null;let D=0;for(let I=0;I<h;I++)if(a[I]){const B=l[I]/u;B>D&&(D=B)}const y=n.params.skirtRadiusM,A=n.params.skirtDepthM,b=Math.max(D,y),R=Math.max(2,Math.min(8,Math.ceil(D/s))),E=I=>f[I],T=I=>g[I],O=(I,B,C,P,W)=>{const $=E(I),Z=T(I),w=E(B),re=T(B),te=w-$,xe=re-Z,oe=te*te+xe*xe,Ce=oe>0?Math.max(0,Math.min(1,((C-$)*te+(P-Z)*xe)/oe)):0,Ne=$+Ce*te,De=Z+Ce*xe,V=(C-Ne)*(C-Ne)+(P-De)*(P-De);V<W.d2&&(W.d2=V,W.depth=l[I]+Ce*(l[B]-l[I]))},k=(I,B)=>{if(!S)return B;const C=S[I];if(C<=0)return 0;if(C>=v)return B;const P=C/v;return B*P*P*(3-2*P)},K={d2:0,depth:0},q=(I,B,C)=>{K.d2=1/0,K.depth=0;const P=B-E(I),W=C-T(I);K.d2=P*P+W*W,K.depth=l[I];let $=I;for(let xe=0;xe<R;xe++){const oe=d[$];if(oe<0)break;O(oe,$,B,C,K),$=oe}let Z=I;for(let xe=0;xe<R;xe++){const oe=o[Z];if(oe<0||!a[oe])break;O(Z,oe,B,C,K),Z=oe}const w=K.depth,re=Math.sqrt(K.d2);let te=0;if(A>0&&re<y){const xe=1-re/y;te+=A*xe*xe}if(w>0){const xe=w/u;if(re<xe){const oe=1-re/xe;te+=w*oe*oe}}return-te},H=(I,B)=>lc(c,i,s,r,0,I,B),Q=(I,B)=>{const C=Math.round((I+r)/s),P=Math.round((B+r)/s);if(C<0||P<0||C>=i||P>=i)return 0;const W=P*i+C,$=H(I,B),Z=m[W];if(Z<0||x[W]-s*2.5>b)return k(W,$);let w=q(Z,I,B);if(x[W]<=s*1.5)for(let re=-1;re<=1;re++){const te=P+re;if(!(te<0||te>=i))for(let xe=-1;xe<=1;xe++){const oe=C+xe;if(oe<0||oe>=i)continue;const Ce=te*i+oe;if(!a[Ce]||Ce===Z)continue;const Ne=q(Ce,I,B);Ne<w&&(w=Ne)}}return k(W,$+w)},Y=[],j=[],fe=[],X=[];{const I=new Float32Array(h);for(let B=0;B<i;B++)for(let C=0;C<i;C++)I[B*i+C]=Q(C*s-r,B*s-r);Y.push(I),j.push(i),fe.push(s),X.push(0);for(let B=1;j[B-1]>8;B++){const C=j[B-1],P=Y[B-1],W=Math.max(1,Math.ceil(C/2)),$=new Float32Array(W*W);for(let Z=0;Z<W;Z++)for(let w=0;w<W;w++){const re=Math.min(C-1,2*w),te=Math.min(C-1,2*w+1),xe=Math.min(C-1,2*Z),oe=Math.min(C-1,2*Z+1);$[Z*W+w]=.25*(P[xe*C+re]+P[xe*C+te]+P[oe*C+re]+P[oe*C+te])}Y.push($),j.push(W),fe.push(fe[B-1]*2),X.push(X[B-1]+fe[B-1]*.5)}}const se=(I,B,C)=>lc(Y[I],j[I],fe[I],r,X[I],B,C),ie=Y.length-1,F=(I,B,C)=>{if(C===void 0||!(C>2*s))return Q(I,B);const P=Math.log2(C/(2*s)),W=Math.floor(P),$=P-W,Z=W<=0?Q(I,B):se(Math.min(ie,W),I,B),w=se(Math.min(ie,W+1),I,B);return Z+(w-Z)*$};return{g:i,cellM:s,halfM:r,net:n,site:m,distM:x,prev:d,maxHalfWidthM:D,buildMs:e()-t,at:Q,evolveOnlyAt:H,atPitch:F,mipCellM:fe}}const ha=Object.freeze({thermal:!0,streamPower:!0,ravine:!0,grain:!0,filter:!1,drainage:!1}),ua=["thermal","streamPower","ravine","grain","filter","drainage"];let gi={...ha};function dn(){return gi}function ui(n){return Gt.devTuner&&(gi=n===null?{...ha}:{...gi,...n}),gi}function Pv(n=gi){return ua.every(e=>n[e]===ha[e])}function Dr(n=gi){return ua.map(e=>`${e}=${n[e]?1:0}`).join(",")}function cc(n=gi){return!n.thermal&&!n.streamPower}const hf=Object.freeze({...Gc,scale:300,strength:.02}),Ov=Object.freeze({...Gc,scale:30,strength:.1});let Er={...hf};function $i(){return Er}function Zo(n){return Gt.devTuner&&(Er=n===null?{...hf}:{...Er,...n}),Er}const uf=Object.freeze({...cf});let vr={...uf};function hc(){return vr}function jo(n){return Gt.devTuner&&(vr=n===null?{...uf}:{...vr,...n}),vr}const Uv=Object.freeze({...Gc,scale:200/7560});function df(n){return(e,t,i)=>{const s=Math.max(_.TERRAIN_DETAIL_SHORE_M,i),r=s*.7071;let o=n.insidenessAt(e,t);for(const[a,l]of[[s,0],[-s,0],[0,s],[0,-s],[r,r],[r,-r],[-r,r],[-r,-r]])o=Math.max(o,n.insidenessAt(e+a,t+l),n.insidenessAt(e+a*.5,t+l*.5));return Math.max(0,1-o/_.WATER_SHORE_ISO)}}function Qo(n,e,t,i={}){const s=(Array.isArray(e)?[...e]:[e]).sort((X,se)=>se.zoom-X.zoom);if(s.length===0)throw new Error("makeWorldQuery: at least one DEM level is required");const r=s[s.length-1];let o=null;const a=(X,se)=>{if(!o)return null;const ie=(X+o.halfM)/o.cellM,F=(se+o.halfM)/o.cellM;if(ie<1||F<1||ie>o.g-2||F>o.g-2)return null;const I=Math.floor(ie),B=Math.floor(F),C=ie-I,P=F-B,W=B*o.g+I;return(o.grid[W]*(1-C)+o.grid[W+1]*C)*(1-P)+(o.grid[W+o.g]*(1-C)+o.grid[W+o.g+1]*C)*P},l=(X,se)=>{const ie=a(X,se);if(ie!==null){const F=o.halfM-Math.max(Math.abs(X),Math.abs(se));if(F>=o.blendM)return ie;const I=b(X,se),B=Math.max(0,F)/o.blendM,C=B*B*B*(B*(B*6-15)+10);return I+(ie-I)*C}return b(X,se)};let c=null;const h=500,u=(X,se,ie)=>{if(!c||t.depthAt(X,se)>0)return 0;const F=c.halfM-Math.max(Math.abs(X),Math.abs(se));if(F<=0)return 0;const I=Math.min(1,F/h),B=I*I*(3-2*I);return c.atPitch(X,se,ie)*B*k(X,se,4*c.cellM)},d=(X,se)=>{if(!c||t.depthAt(X,se)>0)return 0;const ie=c.halfM-Math.max(Math.abs(X),Math.abs(se));if(ie<=0)return 0;const F=Math.min(1,ie/h);return c.evolveOnlyAt(X,se)*F*F*(3-2*F)*k(X,se,4*c.cellM)};let f=6e3,g=!1,M=null;const p=()=>{if(M)return M;const X=f;let se=1/0,ie=-1/0;for(let F=0;F<64;F++)for(let I=0;I<64;I++){const B=l(I/63*2*X-X,F/63*2*X-X);B<se&&(se=B),B>ie&&(ie=B)}return M={lo:se,span:Math.max(1,ie-se)},M},m=500,x=(X,se,ie,F)=>{if(t.depthAt(X,se)>0)return 0;const I=f-Math.max(Math.abs(X),Math.abs(se));if(I<=0)return 0;const B=I>=m?1:I/m*(I/m)*(3-2*(I/m)),C=$i();let P=C;if(F!==void 0&&F>0){const De=g?F/(2*f):F,V=Math.log(C.scale/(2*De))/Math.log(C.lacunarity)+1;if(!(V>0))return 0;V<C.octaves&&(P={...C,octaveLimit:V})}const W=8,$=(De,V)=>l(De,V)+(dn().drainage?d(De,V):0),Z=($(X+W,se)-$(X-W,se))/(2*W),w=($(X,se+W)-$(X,se-W))/(2*W),{lo:re,span:te}=p(),xe=Math.max(-1,Math.min(1,2*(ie-re)/te-1));let oe;if(g){const De=1/(2*f),V=.35/te;oe=hu(X*De,se*De,(ie-re)*V,Z*V/De,w*V/De,xe,P);const L=Gs({...P,gullyWeight:Math.min(1,P.gullyWeight)});return L>0?L*Math.tanh(oe.dHeight/L)/V*k(X,se,P.scale/De)*B:0}oe=hu(X,se,ie,Z,w,xe,P);const Ce=Gs({...P,gullyWeight:Math.min(1,P.gullyWeight)});return Ce>0?Ce*Math.tanh(oe.dHeight/Ce)*k(X,se,P.scale)*B:0},v=(X,se,ie)=>{const F=l(X,se)+(dn().drainage?u(X,se,ie):0);return dn().filter?F+x(X,se,F,ie):F},S=(X,se,ie)=>{const F=Math.floor(se/D),I=Math.floor(ie/D),B=se/D-F,C=ie/D-I;let P=1;return X.hasTileAtPixel((F-1)*D,I*D)||(P=Math.min(P,B)),X.hasTileAtPixel((F+1)*D,I*D)||(P=Math.min(P,1-B)),X.hasTileAtPixel(F*D,(I-1)*D)||(P=Math.min(P,C)),X.hasTileAtPixel(F*D,(I+1)*D)||(P=Math.min(P,1-C)),P},D=256,y=.25,A=(X,se,ie)=>{for(let B=ie;B<s.length-1;B++){const C=s[B],{gx:P,gy:W}=Gi(n,X,se,C.zoom);if(!C.hasTileAtPixel(Math.floor(P),Math.floor(W)))continue;const $=ru(C,P,W),Z=S(C,P,W);if(Z>=y)return $;const w=Z/y,re=w*w*w*(w*(w*6-15)+10),te=A(X,se,B+1);return te+($-te)*re}const{gx:F,gy:I}=Gi(n,X,se,r.zoom);return ru(r,F,I)},b=(X,se)=>A(X,se,0),R=Gi(n,0,0,s[0].zoom),E=Gi(n,100,0,s[0].zoom),T=100/Math.hypot(E.gx-R.gx,E.gy-R.gy),O=Math.imul(Math.round(n.lat*1e5)|0,668265261)^Math.imul(Math.round(n.lon*1e5)|0,374761393)|0,k=df(t);let K={...i};const q=X=>{const se=dn();return{...X,...se.ravine?{}:{ravineDepthM:0,ravineLevels:0},...se.grain?{}:{grainAmpM:0}}},H=X=>{const se=q(X);return Av({demCellM:T,seed:O,...ou(T,R.gx,R.gy,se),landformHeightAt:v,waterFadeAt:k,...se})};let Q=H(K);const Y=(X,se,ie)=>v(X,se,ie)+Q.at(X,se),j=(X,se)=>{const ie=_.NORMAL_EPSILON_M,F=(v(X+ie,se)-v(X-ie,se))/(2*ie),I=(v(X,se+ie)-v(X,se-ie))/(2*ie),B=Math.hypot(F,1,I);return{x:-F/B,y:1/B,z:-I/B}};return{applyBakedBand:(X,se,ie,F)=>{let I=-1/0;for(let B=0;B<X.length;B++)X[B]>I&&(I=X[B]);o={grid:X,g:se,cellM:ie,halfM:F,blendM:500,maxM:I},M=null},clearBakedBand:()=>{o=null,M=null},setFilterExtent:X=>{f=X,M=null},heightAt:Y,landformHeightAt:v,landformDemHeightAt:b,normalAt:j,seatNormalAt:(X,se)=>{const ie=_.NORMAL_EPSILON_M,F=(Y(X+ie,se)-Y(X-ie,se))/(2*ie),I=(Y(X,se+ie)-Y(X,se-ie))/(2*ie),B=Math.hypot(F,1,I);return{x:-F/B,y:1/B,z:-I/B}},slopeDegAt:(X,se)=>Math.acos(Math.max(-1,Math.min(1,j(X,se).y)))*180/Math.PI,waterDepthAt:(X,se)=>t.depthAt(X,se),waterSurfaceYAt:(X,se)=>t.surfaceYAt(X,se),get detailBand(){return Q.band},get maxHeightBoundM(){const X=this.maxHeightBoundParts,se=dn().filter?Gs($i()):0;return o?Math.max(X.maxPost+X.overshoot+X.residualPeak,o.maxM+X.residualPeak)+se:X.maxPost+X.overshoot+X.residualPeak+se},get maxHeightBoundParts(){let X={maxPost:0,overshoot:0},se=-1/0;for(const F of s){const I=F.boundParts;I.maxPost+I.overshoot>se&&(se=I.maxPost+I.overshoot,X=I)}const ie=dn().filter?Gs($i()):0;return{...X,residualPeak:Q.peakM,filterCap:ie}},setDetailOverrides(X){K={...X??{}},Q=H(K)},detailOverrides:()=>({...K}),demCellM:T,get detailPhaseXZ(){return ou(T,R.gx,R.gy,K)},detailAt:(X,se)=>Q.at(X,se),erosionFilterAt:(X,se)=>dn().filter?x(X,se,l(X,se)):0,setFilterUnitFrame(X){g=X,M=null},applyDrainageField(X){c=X,M=null},drainageAt:(X,se)=>dn().drainage?u(X,se):0,levels:s,water:t}}const uc=new Set([80,90,95]);function dc(){return{bodies:[],depthAt:()=>0,surfaceYAt:()=>null,bodyAt:()=>null,distToShoreAt:()=>0,insidenessAt:()=>0}}function ff(n,e,t,i=_.WATER_MIN_BODY_CELLS){const{width:s,height:r,data:o,z:a}=e,l=s*r,c=mv(n.lat,a),h=e.x0*ft,u=e.y0*ft,d=(E,T)=>{const O=pv((h+E)/ft,(u+T)/ft,a);return Ji(n,O.lat,O.lon)},f=new Int32Array(l).fill(-1),g=[];for(let E=0;E<l;E++){if(f[E]!==-1||!uc.has(o[E]))continue;const T=g.length,O=[E];f[E]=T;for(let C=0;C<O.length;C++){const P=O[C],W=P%s;for(const $ of[P-s,P+s,W>0?P-1:-1,W<s-1?P+1:-1])$>=0&&$<l&&f[$]===-1&&uc.has(o[$])&&(f[$]=T,O.push($))}if(O.length<i){for(const C of O)f[C]=-2;continue}const k=O.map(C=>{const P=d(C%s+.5,Math.floor(C/s)+.5);return t(P.x,P.z)}),K=[...k].sort((C,P)=>C-P),q=O.length,H=(K[q-1>>1]+K[q>>1])/2,Q=O.filter((C,P)=>k[P]<=H+_.WATER_MASK_MAX_RISE_M);if(O.forEach((C,P)=>{(k[P]>H+_.WATER_MASK_MAX_RISE_M||Q.length<i)&&(f[C]=-2)}),Q.length<i)continue;const Y=k.filter(C=>C<=H+_.WATER_MASK_MAX_RISE_M).sort((C,P)=>C-P),j=Y[Math.min(Y.length-1,Math.floor(_.WATER_SURFACE_PERCENTILE*(Y.length-1)))];let fe=s,X=-1,se=r,ie=-1;for(const C of Q){const P=C%s,W=(C-P)/s;fe=Math.min(fe,P),X=Math.max(X,P),se=Math.min(se,W),ie=Math.max(ie,W)}const F=d(fe,se),I=d(X+1,ie+1),B=Q.length;g.push({id:T,surfaceY:j,bbox:{minX:F.x,maxX:I.x,minZ:F.z,maxZ:I.z},areaM2:B*c*c,cellCount:B})}const M=new Int32Array(l);for(let E=0;E<l;E++){const T=E%s,O=(E-T)/s;M[E]=f[E]<0?0:T===0||O===0||T===s-1||O===r-1?3:1073741823}const p=(E,T,O)=>{M[T]+O<M[E]&&(M[E]=M[T]+O)};for(const E of[1,-1])for(let T=E>0?0:l-1;T>=0&&T<l;T+=E){if(M[T]===0)continue;const O=T%s,k=T-E*s;(E>0?O>0:O<s-1)&&p(T,T-E,3),!(k<0||k>=l)&&(p(T,k,3),O>0&&p(T,k-1,4),O<s-1&&p(T,k+1,4))}const m=(E,T)=>{const{gx:O,gy:k}=Gi(n,E,T,a),K=Math.floor(O)-h,q=Math.floor(k)-u,H=q*s+K;return K<0||q<0||K>=s||q>=r||f[H]<0?-1:H},x=(E,T)=>{const O=m(E,T);return O<0?0:M[O]/3*c},v=(E,T)=>{const O=m(E,T);return O<0?null:g[f[O]]},S=_.WATER_SHORE_BLUR_CELLS,D=(S+1)*(S+1);let y=Float32Array.from(f,E=>E>=0?1:0);for(const[E,T]of[[1,0],[0,1]]){const O=y;y=new Float32Array(l);for(let k=0;k<l;k++){const K=k%s,q=(k-K)/s;let H=0;for(let Q=-S;Q<=S;Q++){const Y=K+Q*E,j=q+Q*T;Y>=0&&j>=0&&Y<s&&j<r&&(H+=(S+1-Math.abs(Q))*O[j*s+Y])}y[k]=H/D}}const A=(E,T)=>E<0||T<0||E>=s||T>=r?0:y[T*s+E],b=(E,T,O,k,K)=>.5*(2*T+(-E+O)*K+(2*E-5*T+4*O-k)*K*K+(-E+3*T-3*O+k)*K*K*K);return{bodies:g,depthAt:(E,T)=>Math.min(_.WATER_DEPTH_CAP_M,x(E,T)*_.WATER_DEPTH_PER_M_FROM_SHORE),surfaceYAt:(E,T)=>{var O;return((O=v(E,T))==null?void 0:O.surfaceY)??null},bodyAt:v,distToShoreAt:x,insidenessAt:(E,T)=>{const{gx:O,gy:k}=Gi(n,E,T,a),K=O-h-.5,q=k-u-.5,H=Math.floor(K),Q=Math.floor(q),Y=K-H,j=q-Q,fe=[-1,0,1,2].map(X=>b(A(H-1,Q+X),A(H,Q+X),A(H+1,Q+X),A(H+2,Q+X),Y));return Math.min(1,Math.max(0,b(fe[0],fe[1],fe[2],fe[3],j)))}}}const pf=n=>{var e;return((e=n.pack)==null?void 0:e.root)??"/fixtures"},mf=(n,e="/fixtures")=>`${e}/worldcover/${n}`;function Fv(n,e,t,i){const{midpoint:s}=n.site,r=kc(s.lat,s.lon),o=new Map;n.tiles.forEach((f,g)=>{let M=o.get(f.z);M||o.set(f.z,M=new sf(f.z));const p=Qi(s.lon,s.lat,f.z);M.addTile(f.x,f.y,Yd(e[g]),p.x===f.x&&p.y===f.y)});const a=[...o.values()];i==null||i("tiles-decoded");const l=n.worldcover,c=kr(t);if(c.channels!==1||c.depth!==8||c.width!==l.width||c.height!==l.height)throw new Error(`worldcover fixture ${l.file}: expected ${l.width}x${l.height} 8-bit grayscale, got ${c.width}x${c.height} ch${c.channels} d${c.depth}`);const h={z:l.z,x0:l.x0,y0:l.y0,cols:l.cols,rows:l.rows,width:l.width,height:l.height,data:c.data},u=ff(r,h,Qo(r,a,dc()).landformHeightAt),d=Qo(r,a,u,_f());return i==null||i("world-query"),{manifest:n,frame:r,dems:a,query:d,water:u,grid:h}}function _f(){if(typeof location>"u")return{};const n=new URLSearchParams(location.search),e={},t=[["detailrms","rmsM",0],["detailaniso","aniso",1e-6],["detailwander","wander",0],["detailravine","ravineDepthM",0],["detailravinelevels","ravineLevels",0],["detailgrain","grainAmpM",0]];for(const[i,s,r]of t){const o=n.get(i);if(o===null)continue;const a=Number(o);if(!Number.isFinite(a)||a<r)throw new Error(`?${i}=${o} is not a finite number >= ${r}`);e[s]=a}return e}async function gf(n){const e=await fetch(n);if(!e.ok)throw new Error(`fixture missing: ${n} (${e.status})`);return new Uint8Array(await e.arrayBuffer())}async function kv(n){return Mf($d,n)}async function Mf(n,e){const t=await lv(n);e==null||e("manifest");const i=pf(t),s=new dv(`${i}/tiles`),[r,o]=await Promise.all([Promise.all(t.tiles.map(a=>s.getTileBytes(a.z,a.x,a.y))),gf(mf(t.worldcover.file,i))]);return Fv(t,r,o,e)}function Bv(n){var a;const e=(a=n.pack)==null?void 0:a.corridor,t=nf({a:n.site.a,b:n.site.b,nearZoom:(e==null?void 0:e.nearZoom)??n.zooms.near,nearMarginM:(e==null?void 0:e.nearMarginM)??_.CORRIDOR_NEAR_MARGIN_M,coarse:(e==null?void 0:e.coarse)??n.zooms.coarse.map((l,c)=>({zoom:l,radiusM:c===0?_.CORRIDOR_FAR_RADIUS_M:_.CORRIDOR_OUTER_RADIUS_M}))});if(!e)return t;const i=Mv(t);if(i!==e.corridorKey)throw new Error(`pack ${n.pack.id}: corridorKey drift — manifest ${e.corridorKey}, rebuilt ${i}`);const s=t.tiles.map(l=>`${l.z}/${l.x}/${l.y}`),r=n.tiles.map(l=>`${l.z}/${l.x}/${l.y}`),o=s.findIndex((l,c)=>l!==r[c]);if(s.length!==r.length||o>=0)throw new Error(`pack ${n.pack.id}: tile list differs — recorded ${r.length} tiles, corridor ${s.length}${o>=0?`, first difference at ${o}: recorded ${r[o]??"none"} vs corridor ${s[o]}`:""}`);return t}async function Gv(n,e,t){const{frame:i,midpoint:s}=n,r=new Map,o=await Promise.all(n.tiles.map(h=>e.getTileBytes(h.z,h.x,h.y)));n.tiles.forEach((h,u)=>{let d=r.get(h.z);d||r.set(h.z,d=new sf(h.z));const f=Qi(s.lon,s.lat,h.z);d.addTile(h.x,h.y,Yd(o[u]),f.x===h.x&&f.y===h.y)});const a=[...r.values()],l=(t==null?void 0:t.grid)??null,c=l?ff(i,l,Qo(i,a,dc()).landformHeightAt):dc();return{manifest:null,frame:i,dems:a,query:Qo(i,a,c,_f()),water:c,grid:l}}async function zv(n){const e=n.worldcover,t=pf(n),i=[...n.tiles.map(r=>({file:r.file,url:Zd(r.z,r.x,r.y,`${t}/tiles`),sha256:r.sha256})),{file:e.file,url:mf(e.file,t),sha256:e.sha256}],s=[];for(const r of i){const o=await gf(r.url).catch(()=>null),a=o?new Uint8Array(await crypto.subtle.digest("SHA-256",o)):null;(a?[...a].map(c=>c.toString(16).padStart(2,"0")).join(""):"MISSING")!==r.sha256&&s.push(r.file)}return{ok:s.length===0,mismatches:s}}const mo=14,Hn=256,Hv={10:[0,100,0],20:[255,187,34],30:[255,255,76],40:[240,150,255],50:[250,0,0],60:[180,180,180],70:[240,240,240],80:[0,100,200],90:[0,150,160],95:[0,207,117],100:[250,230,160]},Vv=(n,e,t)=>`https://wmts.terrascope.be/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=esa-worldcover-map-10m-2021-v2_map&STYLE=default&TILEMATRIXSET=EPSG:3857&TILEMATRIX=${n}&TILEROW=${t}&TILECOL=${e}&FORMAT=image/png&TIME=2021-01-01`,Wv=Object.entries(Hv).map(([n,e])=>({c:Number(n),rgb:e}));function Xv(n,e,t){let i=0,s=1/0;for(const r of Wv){const o=(n-r.rgb[0])**2+(e-r.rgb[1])**2+(t-r.rgb[2])**2;o<s&&(s=o,i=r.c)}return i}async function $v(n,e,t,i){try{const s=Pn(n,e.x0-t,e.z0-t),r=Pn(n,e.x1+t,e.z1+t),o=ac(s.lon,s.lat,mo),a=ac(r.lon,r.lat,mo),l=Math.floor(o.xf),c=Math.floor(o.yf),h=Math.floor(a.xf)-l+1,u=Math.floor(a.yf)-c+1,d=h*Hn,f=u*Hn,g={z:mo,x0:l,y0:c,cols:h,rows:u,width:d,height:f,data:new Uint8Array(d*f)},M=h*u;let p=0,m=0;for(let x=0;x<u;x++)for(let v=0;v<h;v++){let S=null;for(let b=0;b<3&&!S;b++)try{const R=await fetch(Vv(mo,l+v,c+x));if(!R.ok)throw new Error(`WMTS ${R.status} at (${l+v},${c+x})`);S=new Uint8Array(await R.arrayBuffer())}catch(R){if(b===2)throw R;await new Promise(E=>setTimeout(E,400*(b+1)))}m+=S.length;const D=kr(S);if(D.width!==Hn||D.height!==Hn||D.channels<3)throw new Error(`unexpected WMTS tile shape ${D.width}x${D.height}x${D.channels}`);const y=D.data,A=D.channels;for(let b=0;b<Hn;b++){const R=(x*Hn+b)*d+v*Hn;for(let E=0;E<Hn;E++){const T=(b*Hn+E)*A;g.data[R+E]=Xv(y[T],y[T+1],y[T+2])}}p++,i==null||i({done:p,total:M})}return{grid:g,tiles:M,bytes:m}}catch(s){return console.warn("[liveCover] cover unavailable:",s.message),null}}const Kv=`
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
`;function Yv(n){const e=document.createElement("style");e.textContent=Kv,document.head.appendChild(e);const t=document.createElement("div");t.className="bl-survey",n.appendChild(t);const i=document.createElement("h1");i.textContent="Surveying the terrain…";const s=document.createElement("div");s.className="bl-survey-stage";const r=document.createElement("div");r.className="bl-survey-bar";const o=document.createElement("div");r.appendChild(o);const a=document.createElement("div");a.className="bl-survey-attrib",a.textContent="Elevation: Terrain Tiles (AWS Open Data, Mapzen/Tilezen) · Land cover: © ESA WorldCover 2021 (CC BY 4.0) via Terrascope",t.append(i,s,r,a);const l=performance.now();return{stage:c=>{s.textContent=c,o.style.width="0"},progress:(c,h)=>{o.style.width=`${Math.min(100,100*c/Math.max(1,h)).toFixed(1)}%`},fail:(c,h)=>new Promise(u=>{i.textContent=h??"This line cannot be walked",s.textContent="",r.style.display="none";const d=document.createElement("div");d.className="bl-survey-reasons",d.textContent=c.join("  ·  ");const f=document.createElement("button");f.type="button",f.textContent="Back to the map",t.append(d,f),f.addEventListener("click",()=>{t.remove(),e.remove(),u()})}),done:()=>{const c=performance.now()-l;return t.remove(),e.remove(),c}}}function qv(n){return n<=_.MEDAL_PLATINUM_M?"Platinum":n<=_.MEDAL_GOLD_M?"Gold":n<=_.MEDAL_SILVER_M?"Silver":n<=_.MEDAL_BRONZE_M?"Bronze":"FAILED"}function Zv(n,e,t){const i=Math.min(1,Math.max(0,1-e/_.MEDAL_BRONZE_M));return Math.round(_.SCORE_BASE_PER_KM*(n/1e3)*i*_.MEDAL_MULT[t])}const jv=Zv,Jo=["Sprint","Trek"];function Ef(n){return!(n>=_.CATEGORY_MIN_M)||n>_.CATEGORY_MAX_M?null:n<=_.CATEGORY_SPRINT_MAX_M?"Sprint":n<=_.CATEGORY_TREK_MAX_M?"Trek":"Expedition"}function vf(n){const e=Math.floor(n.elapsedS);return{medal:n.medal,maxDev:`${n.maxDevM.toFixed(1)} m`,avgDev:`${n.avgDevM.toFixed(1)} m`,lineScore:String(n.lineScore),elapsed:`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,length:`${(n.lengthM/1e3).toFixed(1)} km`}}const Ir=0;function Qv(){return{classAt:()=>Ir,histogram:()=>new Map,grid:null}}function pu(n,e){const{width:t,height:i,data:s,z:r}=e,o=e.x0*ft,a=e.y0*ft,l=(h,u)=>{const{gx:d,gy:f}=Gi(n,h,u,r),g=Math.floor(d)-o,M=Math.floor(f)-a;return g<0||M<0||g>=t||M>=i?Ir:s[M*t+g]};return{classAt:l,histogram:(h,u,d,f)=>{const g=f>0?Math.floor(d/f):0,M=d*d,p=new Map;let m=0;for(let v=-g;v<=g;v++)for(let S=-g;S<=g;S++){const D=S*f,y=v*f;if(D*D+y*y>M)continue;const A=l(h+D,u+y);p.set(A,(p.get(A)??0)+1),m++}const x=new Map;for(const[v,S]of p)x.set(v,S/m);return x},grid:e}}const yr=60,Jv={80:"permanent water",90:"wetland",95:"mangrove"},mu={Sprint:[_.CATEGORY_MIN_M,_.CATEGORY_SPRINT_MAX_M],Trek:[_.CATEGORY_SPRINT_MAX_M,_.CATEGORY_TREK_MAX_M],Expedition:[_.CATEGORY_TREK_MAX_M,_.CATEGORY_MAX_M]},zs=n=>(n/1e3).toFixed(2),ex=()=>Jo.map(n=>`${n} (${zs(mu[n][0])}–${zs(mu[n][1])} km)`).join(" and ");function tx(n,e,t,i,s){const r=Ji(t,n.lat,n.lon),o=Ji(t,e.lat,e.lon),a=Math.hypot(o.x-r.x,o.z-r.z),l=Math.max(2,Math.ceil(a/s)+1),c=a/(l-1);let h=0,u=0;for(let d=0;d<l;d++){const f=d/(l-1);h=i.waterDepthAt(r.x+(o.x-r.x)*f,r.z+(o.z-r.z)*f)>0?h+c:0,h>u&&(u=h)}return u}function nx(n,e,t={}){const i=[];for(const[l,c]of[["A",n],["B",e]])Math.abs(c.lat)>yr&&i.push(`Endpoint ${l} is at latitude ${c.lat.toFixed(3)}° — lines can't go beyond ${yr}° north or south.`);const{frame:s,cover:r}=t;for(const[l,c]of[["A",n],["B",e]]){const h=s?Ji(s,c.lat,c.lon):null,u=h&&r?r.classAt(h.x,h.z):Ir;u===Ir?t.deferDataRules||i.push(`Endpoint ${l} cannot be confirmed on land — no land-cover data is loaded for that point.`):uc.has(u)&&i.push(`Endpoint ${l} is not on land — the land cover there is ${Jv[u]??`covered by water (class ${u})`}.`)}const o=Bc(n,e),a=Ef(o);if(a===null?i.push(`This line is ${zs(o)} km long — lines must be between ${zs(_.CATEGORY_MIN_M)} km and ${zs(_.CATEGORY_MAX_M)} km.`):Jo.includes(a)||i.push(`This line is ${zs(o)} km long — that is the ${a} band, and only ${ex()} lines can be walked in this version.`),s&&t.query){const l=tx(n,e,s,t.query,t.stepM??_.WATER_SCAN_STEP_M);l>_.WATER_CROSSING_MAX_M&&i.push(`The line crosses ${Math.round(l)} m of water without a break — no single water crossing may exceed ${_.WATER_CROSSING_MAX_M} m.`)}return{valid:i.length===0,reasons:i}}class ix{constructor(e){je(this,"order",new Map);je(this,"total",0);this.maxBytes=e}touch(e){const t=this.order.get(e);t!==void 0&&(this.order.delete(e),this.order.set(e,t))}add(e,t){this.order.has(e)&&this.remove(e),this.order.set(e,t),this.total+=t;const i=[];for(const[s,r]of this.order)this.total<=this.maxBytes||s===e||(i.push(s),this.total-=r);for(const s of i)this.order.delete(s);return i}remove(e){const t=this.order.get(e);t!==void 0&&(this.order.delete(e),this.total-=t)}has(e){return this.order.has(e)}get totalBytes(){return this.total}get keys(){return[...this.order.keys()]}}function _u(){const n=new Map;return{backend:"memory",async get(e){return n.get(e)??null},async put(e,t){n.set(e,t)},async delete(e){n.delete(e)}}}function sl(n){return n.replace(/[^A-Za-z0-9._-]/g,"_")}async function sx(n="tile-cache"){var t;const e=(t=globalThis.navigator)==null?void 0:t.storage;if(!(e!=null&&e.getDirectory))return _u();try{const s=await(await e.getDirectory()).getDirectoryHandle(n,{create:!0});return{backend:"opfs",async get(r){try{const o=await s.getFileHandle(sl(r));return new Uint8Array(await(await o.getFile()).arrayBuffer())}catch{return null}},async put(r,o){const l=await(await s.getFileHandle(sl(r),{create:!0})).createWritable();await l.write(o),await l.close()},async delete(r){try{await s.removeEntry(sl(r))}catch{}}}}catch{return _u()}}const fr=jd;function rx(n,e,t,i,s,r){const o=Pn(n,e,i),a=Pn(n,t,s),l=Qi(o.lon,o.lat,r),c=Qi(a.lon,a.lat,r);return{x0:Math.min(l.x,c.x),x1:Math.max(l.x,c.x),y0:Math.min(l.y,c.y),y1:Math.max(l.y,c.y)}}function ox(n,e){if(n<=0||typeof Worker>"u")return null;const t=[];try{for(let r=0;r<n;r++)t.push(new Worker(new URL(""+new URL("decodeWorker-yhlK0RIH.js",import.meta.url).href,import.meta.url),{type:"module"}))}catch{for(const r of t)r.terminate();return null}const i=t.map(()=>[]);let s=0;return t.forEach((r,o)=>{r.onmessage=a=>{const l=i[o].shift(),c=a.data;l!==void 0&&e(l,"error"in c?null:{width:c.width,height:c.height,elevations:c.elevations})},r.onerror=()=>{for(const a of i[o].splice(0))e(a,null)}}),{submit(r,o){i[s%t.length].push(r);const a=o.slice();t[s++%t.length].postMessage({id:s,bytes:a},[a.buffer])},dispose(){for(const r of t)r.terminate()}}}function ax(n){const e=new ix(n.cacheMaxBytes??_.TILE_CACHE_MAX_BYTES),t=new Map,i=new Map,s=new Map,r=new Map,o=new Map;let a=[],l={x:0,y:0,key:""},c=0,h=0,u=0,d=0,f=!1;const g=[],M=new Set;for(const y of n.coarse){const A=rx(n.frame,-y.radiusM,y.radiusM,-y.radiusM,y.radiusM,y.zoom);for(let b=A.y0;b<=A.y1;b++)for(let R=A.x0;R<=A.x1;R++){const E=Ci(y.zoom,R,b);M.has(E)||(M.add(E),g.push({z:y.zoom,x:R,y:b,role:"far"}))}}const p=ox(n.decodeWorkers??_.TILE_DECODE_WORKERS,(y,A)=>{const b=o.get(y);A?b&&(d++,b.tile=A):o.delete(y)}),m=y=>t.has(y)||s.has(y)||r.has(y)||o.has(y);async function x(y){const A=`terrarium/${y.z}/${y.x}/${y.y}`;if(n.cache){const R=await n.cache.get(A);if(R)return h++,e.touch(A),R}u++;const b=await n.source.getTileBytes(y.z,y.x,y.y);if(n.cache){await n.cache.put(A,b);for(const R of e.add(A,b.byteLength))await n.cache.delete(R)}return b}function v(y){const A=Ci(y.z,y.x,y.y);s.set(A,y),x(y).then(b=>{s.delete(A),!f&&i.has(A)&&r.set(A,{id:y,bytes:b})},()=>{s.delete(A)})}function S(y,A){if(f)return;const b=Pn(n.frame,y,A),R=Qi(b.lon,b.lat,n.nearZoom);l={x:R.x,y:R.y,key:Ci(n.nearZoom,R.x,R.y)},i.clear();const E=n.nearRadiusTiles;for(let T=-E;T<=E;T++)for(let O=-E;O<=E;O++)i.set(Ci(n.nearZoom,R.x+O,R.y+T),{z:n.nearZoom,x:R.x+O,y:R.y+T,role:"near"});for(const T of g){const O=Ci(T.z,T.x,T.y);i.has(O)||i.set(O,T)}for(const[T,O]of[...t])i.has(T)||(t.delete(T),c++,n.onUnload(O.id));for(const T of[...o.keys()])i.has(T)||o.delete(T);for(const T of[...r.keys()])i.has(T)||r.delete(T);a=[...i.values()].filter(T=>!m(Ci(T.z,T.x,T.y))).sort((T,O)=>{if(T.role!==O.role)return fr(T,O);const k=(T.x-l.x)**2+(T.y-l.y)**2,K=(O.x-l.x)**2+(O.y-l.y)**2;return oc(T.role)===0&&k-K||fr(T,O)})}function D(){var R;if(f)return;for(const[E,T]of[...r])r.delete(E),o.set(E,{id:T.id,job:p?null:lx(T.bytes),tile:null}),p&&p.submit(E,T.bytes);const y=n.decodeRowsPerStep>0?n.decodeRowsPerStep:Number.MAX_SAFE_INTEGER;for(const[E,T]of[...o].sort((O,k)=>fr(O[1].id,k[1].id)))(R=T.job)!=null&&R.step(y)&&(T.tile=T.job.result()),T.tile&&(o.delete(E),t.set(E,{id:T.id,tile:T.tile}),n.onTile(T.id,T.tile));let A=n.loadsPerStep;const b=[];for(const E of a)Ci(E.z,E.x,E.y)===l.key?v(E):A>0?(A--,v(E)):b.push(E);a=b}return{update:S,step:D,drained:()=>a.length===0&&s.size===0&&r.size===0&&o.size===0,stats:()=>({loaded:t.size,queued:a.length,inFlight:s.size,unloaded:c,bytes:e.totalBytes,cacheHits:h,cacheMisses:u,slicing:o.size,decodedByWorker:d}),loaded:()=>[...t.values()].map(y=>y.id).sort(fr),dispose:()=>{f=!0,a=[],i.clear(),s.clear(),r.clear(),o.clear(),t.clear(),p==null||p.dispose()}}}function lx(n){const e=kr(n);if(e.depth!==8)throw new Error(`terrarium tile must be 8-bit, got ${e.depth}`);if(e.channels!==3&&e.channels!==4)throw new Error(`terrarium tile must be RGB(A), got ${e.channels} channels`);const{width:t,height:i,channels:s}=e,r=e.data,o=new Float32Array(t*i);let a=0;return{step(l){const c=Math.min(i,a+Math.max(1,Math.floor(l)));if(c>a){const h=Kd(r.subarray(a*t*s,c*t*s),t,c-a,s);o.set(h,a*t),a=c}return a>=i},done:()=>a>=i,result(){if(a<i)throw new Error(`sliced decode incomplete: ${a}/${i} rows`);return{width:t,height:i,elevations:o}}}}const cx=5,hx=1,ux=[[1,1,1,8,8,9,9,9,10],[1,1,8,8,8,9,9,9,0],[1,4,6,6,7,7,9,0,0],[4,4,6,6,6,7,0,0,0],[4,4,5,6,6,0,0,0,0],[3,3,5,5,0,0,0,0,0],[3,3,3,0,0,0,0,0,0],[3,3,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0]],dx=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function fx(n,e,t,i,s=cx,r=hx){const o=new Uint8Array(e*t),a=Math.tan(r*Math.PI/180);for(let l=s;l<t-s;l++)for(let c=s;c<e-s;c++){const h=n[l*e+c];let u=0,d=0;for(const[f,g]of dx){let M=0;for(let p=1;p<=s;p++){const m=n[(l+g*p)*e+(c+f*p)]-h,x=Math.hypot(f*p,g*p)*i,v=m/x;Math.abs(v)>Math.abs(M)&&(M=v)}M>a?u++:M<-a&&d++}o[l*e+c]=ux[d][u]}return o}function px(n,e,t,i){const s=new Float32Array(e*t);for(let r=1;r<t-1;r++)for(let o=1;o<e-1;o++){const a=r*e+o,l=n[a-e-1],c=n[a-e],h=n[a-e+1],u=n[a-1],d=n[a+1],f=n[a+e-1],g=n[a+e],M=n[a+e+1],p=(h+2*d+M-l-2*u-f)/(8*i),m=(f+2*g+M-l-2*c-h)/(8*i);s[a]=Math.atan(Math.hypot(p,m))*180/Math.PI}return s}function mx(n,e,t,i){const s=new Float32Array(e*t),r=new Float32Array(e*t),o=(h,u,d,f,g,M)=>{const p=[];for(let m=0;m<d+i;m++){if(m<d){const v=h[g+m*f];for(;p.length&&!M(h[g+p[p.length-1]*f],v);)p.pop();p.push(m)}const x=m-i;if(x>=0){for(;p.length&&p[0]<x-i;)p.shift();u[g+x*f]=h[g+p[0]*f]}}};for(let h=0;h<t;h++)o(n,s,e,1,h*e,(u,d)=>u<d),o(n,r,e,1,h*e,(u,d)=>u>d);const a=new Float32Array(e*t),l=new Float32Array(e*t),c=new Float32Array(e*t);for(let h=0;h<e;h++)o(s,l,t,e,h,(u,d)=>u<d),o(r,c,t,e,h,(u,d)=>u>d);for(let h=0;h<e*t;h++)a[h]=c[h]-l[h];return a}function _x(n,e,t){const i=new Float32Array(e*t);for(let s=1;s<t-1;s++)for(let r=1;r<e-1;r++){const o=s*e+r,a=n[o];let l=0;for(const c of[-e-1,-e,-e+1,-1,1,e-1,e,e+1]){const h=n[o+c]-a;l+=h*h}i[o]=Math.sqrt(l/8)}return i}const gx=255;async function Mx(n,e,t){const i=await fetch(`${n}/factors/${e}`);if(!i.ok)throw new Error(`factor crop missing: ${n}/factors/${e} (${i.status})`);const s=kr(new Uint8Array(await i.arrayBuffer()));if(s.width!==t.w||s.height!==t.h)throw new Error(`factor crop ${e}: manifest says ${t.w}x${t.h}, file is ${s.width}x${s.height}`);return{w:t.w,h:t.h,bbox:t.bbox,data:s.data}}function Ex(n,e,t){const[i,s,r,o]=n.bbox,a=(t-i)/(r-i),l=(o-e)/(o-s);if(a<0||a>=1||l<0||l>=1)return null;const c=n.data[Math.floor(l*n.h)*n.w+Math.floor(a*n.w)];return c===gx?null:c}async function vx(n,e,t,i){const s=new Map,r={};for(const[o,a]of Object.entries(e))a.absent?r[o]=a.absent:a.file&&a.grid&&s.set(o,await Mx(t,a.file,a.grid));return xf(n,s,r,i)}function xf(n,e,t,i){let s=null;if(i){const l=Math.floor(i.halfM*2/i.cellM),c=new Float32Array(l*l);for(let d=0;d<l;d++)for(let f=0;f<l;f++)c[d*l+f]=i.heightAt(f*i.cellM-i.halfM,d*i.cellM-i.halfM);const h=wv(c,l,l,i.cellM),u=Math.round(1e3/i.cellM);s={g:l,cellM:i.cellM,halfM:i.halfM,slope:px(c,l,l,i.cellM),relief:mx(c,l,l,u),triA:_x(c,l,l),geo:fx(c,l,l,i.cellM),acc:h.acc},t["derived-band"]=`DEM-derived factors cover ±${i.halfM} m of the frame origin at ${i.cellM} m cells; outside that band they read null (counted), by construction`}else t["slope/relief/tri/geomorphon/flowAcc"]="no derived band on this boot (no DerivedSpec passed — pre-S5 caller or a context without a query)";const r=(l,c)=>{if(!s)return null;const h=Math.floor((l+s.halfM)/s.cellM),u=Math.floor((c+s.halfM)/s.cellM),d=5;return h<d||u<d||h>=s.g-d||u>=s.g-d?null:u*s.g+h},o={},a=(l,c,h)=>{const u=e.get(l),d=u?Ex(u,c,h):null;return d===null&&(o[l]=(o[l]??0)+1),d};return{at:(l,c)=>{const{lat:h,lon:u}=Pn(n,l,c),d=r(l,c),f=(g,M)=>{const p=d!==null&&M?M[d]:null;return p===null&&(o[g]=(o[g]??0)+1),p};return{koppen:a("koppen",h,u),sandPct:a("sand",h,u),clayPct:a("clay",h,u),cfvoPct:a("cfvo",h,u),slopeDeg:f("slopeDeg",(s==null?void 0:s.slope)??null),reliefM:f("reliefM",(s==null?void 0:s.relief)??null),tri:f("tri",(s==null?void 0:s.triA)??null),geomorphon:f("geomorphon",(s==null?void 0:s.geo)??null),flowAcc:f("flowAcc",(s==null?void 0:s.acc)??null),absent:t}},absentCounts:()=>({...o}),inventory:()=>({present:[...e.keys()],absent:{...t}})}}const xx=3,gu=[1/16,4/16,6/16,4/16,1/16];function Sx(n,e,t){const i=new Float32Array(e*t),s=new Float32Array(e*t);for(let r=0;r<t;r++){const o=r*e;for(let a=0;a<e;a++){let l=0;for(let c=-2;c<=2;c++){const h=Math.min(e-1,Math.max(0,a+c));l+=gu[c+2]*n[o+h]}i[o+a]=l}}for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=0;for(let l=-2;l<=2;l++){const c=Math.min(t-1,Math.max(0,o+l));a+=gu[l+2]*i[c*e+r]}s[o*e+r]=a}return s}function rl(n,e,t,i=xx){const s=[];let r=n;for(let o=0;o<i;o++){const a=Sx(r,e,t),l=new Float32Array(e*t);for(let c=0;c<e*t;c++)l[c]=r[c]-a[c];s.push(l),r=a}return{bands:s,low:r,w:e,h:t}}function Ax(n){const e=new Float32Array(n.low);for(let t=n.bands.length-1;t>=0;t--){const i=n.bands[t];for(let s=0;s<e.length;s++)e[s]=Math.fround(e[s]+i[s])}return e}function fc(n,e){let t=0;for(let i=0;i<n.length;i++){const s=n[i]-e[i];t+=s*s}return Math.sqrt(t/n.length)}function Rx(n,e,t,i){const s=new Float32Array(n),r=new Float32Array(e*t),o=i.rate??.5,a=typeof i.reposeDeg!="number",l=a?i.reposeDeg:null,c=a?0:Math.tan(i.reposeDeg*Math.PI/180),h=[{d:-e-1,len:Math.SQRT2,dx:-1,dy:-1},{d:-e,len:1,dx:0,dy:-1},{d:-e+1,len:Math.SQRT2,dx:1,dy:-1},{d:-1,len:1,dx:-1,dy:0},{d:1,len:1,dx:1,dy:0},{d:e-1,len:Math.SQRT2,dx:-1,dy:1},{d:e,len:1,dx:0,dy:1},{d:e+1,len:Math.SQRT2,dx:1,dy:1}];for(let u=0;u<i.iterations;u++){r.fill(0);for(let d=0;d<t;d++)for(let f=0;f<e;f++){const g=d*e+f,M=l?Math.tan(l[g]*Math.PI/180):c;for(const{d:p,len:m,dx:x,dy:v}of h){if(f+x<0||f+x>=e||d+v<0||d+v>=t)continue;const S=g+p,D=s[g]-s[S],y=M*m*i.cellM;if(D>y){const A=(D-y)*o/16;r[g]-=A,r[S]+=A}}}for(let d=0;d<e*t;d++)s[d]=Math.fround(s[d]+r[d])}return s}const yx=.45;function Tx(n,e,t,i){const s=e*t,r=new Float32Array(n),o=typeof i.K!="number",a=o?i.K:null,l=o?0:i.K,c=[],h=10;let u,d,f;for(let g=0;g<i.iterations;g++){if(g%h===0){const{surface:p}=Wi(r,e,t);u=Xi(p,e,t,i.cellM),d=af(p,u,e,t),f=Array.from({length:s},(m,x)=>x).sort((m,x)=>p[m]-p[x]||m-x)}let M=0;for(const p of f){const m=u[p];if(m<0)continue;const x=p%e-m%e,v=(p/e|0)-(m/e|0),S=x!==0&&v!==0?Math.SQRT2*i.cellM:i.cellM,y=(a?a[p]:l)*Math.pow(d[p]*i.cellM*i.cellM,yx)*i.dtYears/S,A=(r[p]+y*r[m])/(1+y),b=Math.max(Math.min(r[p],Math.max(A,r[m])),r[m]);M+=r[p]-b,r[p]=Math.fround(b)}c.push(M)}return{h:r,removedPerIter:c}}function bx(n){return n===null?1:n<=3?1.6:n<=7?.45:n<=16?1.25:n<=28?.9:.7}function wx(n,e,t,i){const s=new Float32Array(n);for(let r=0;r<n;r++){const o=t(r),a=i(r),l=o===null?1:1.5-o/100,c=a!==null&&a>=17?1.3:1;s[r]=e*l*c*bx(a)}return s}const Tn=30,Cx=3.5,Nx=300,Dx=150,Ix=1400,Mu=2e-5,_o=10;function Lx(n,e){const t=fc(n,new Float32Array(n.length));if(t<=e)return{out:n,clamped:!1};const i=e/t,s=new Float32Array(n.length);for(let r=0;r<n.length;r++)s[r]=n[r]*i;return{out:s,clamped:!0}}function Px(n,e,t,i,s,r,o,a){const l=(globalThis.performance??{now:()=>Date.now()}).now(),c=e*e;let h=34,u=Mu;if(s){const I=new Float32Array(c),B=new Array(c),C=new Array(c);for(let P=0;P<e;P++)for(let W=0;W<e;W++){const $=P*e+W,{x:Z,z:w}=r(W,P),re=s.at(Z,w);I[$]=30+Math.min(15,(re.cfvoPct??15)*.3),B[$]=re.sandPct,C[$]=re.koppen}h=I,u=wx(c,Mu,P=>B[P],P=>C[P])}const d=dn(),f=d.thermal?Rx(n,e,e,{reposeDeg:h,iterations:Nx,cellM:t}):n,g=d.streamPower?Tx(f,e,e,{K:u,dtYears:Ix,iterations:Dx,cellM:t}).h:f,M=8,p=rl(n,e,e);let m=0,x=0,v=0,S=0,D=0,y=0,A=!1,b=0;const R=d.thermal||d.streamPower;let E=!1,T;if(!R)T=new Float32Array(n);else{const I=rl(g,e,e),B=p.bands.length,C=[];for(let W=0;W<B;W++)if(W<B-1)C.push(I.bands[W]);else{const $=new Float32Array(c);for(let te=0;te<c;te++)$[te]=I.bands[W][te]-p.bands[W][te];const{out:Z,clamped:w}=Lx($,Cx);E=w;const re=new Float32Array(c);for(let te=0;te<c;te++)re[te]=p.bands[W][te]+Z[te];C.push(re)}T=Ax({bands:C,low:p.low});for(let W=0;W<e;W++)for(let $=0;$<e;$++){const Z=Math.min($,W,e-1-$,e-1-W);if(Z>=M)continue;const w=Z/M,re=w*w*(3-2*w),te=W*e+$;T[te]=Math.fround(n[te]+(T[te]-n[te])*re)}for(let W=0;W<c;W++){const $=T[W]-n[W];T[W]=Math.fround(n[W]+_o*Math.tanh($/_o))}if(o){const W=new Uint8Array(c);for(let re=0;re<e;re++)for(let te=0;te<e;te++){const{x:xe,z:oe}=r(te,re);o(xe,oe)&&(W[re*e+te]=1)}const $=4,Z=new Float32Array(c).fill($+1),w=[];for(let re=0;re<c;re++)W[re]&&(Z[re]=0,w.push(re));for(let re=0;re<w.length;re++){const te=w[re];if(Z[te]>=$)continue;const xe=te%e,oe=te/e|0;for(const[Ce,Ne]of[[1,0],[-1,0],[0,1],[0,-1]]){const De=xe+Ce,V=oe+Ne;if(De<0||V<0||De>=e||V>=e)continue;const L=V*e+De;Z[L]>Z[te]+1&&(Z[L]=Z[te]+1,w.push(L))}}for(let re=0;re<c;re++){const te=Z[re];if(te>$)continue;const xe=te/$,oe=xe*xe*(3-2*xe);T[re]=Math.fround(n[re]+(T[re]-n[re])*oe)}}const P=8;{const W=new Uint8Array(c);if(o)for(let $=0;$<e;$++)for(let Z=0;Z<e;Z++){const{x:w,z:re}=r(Z,$);o(w,re)&&(W[$*e+Z]=1)}for(let $=0;$<P;$++){const{surface:Z}=Wi(T,e,e),w=Xi(Z,e,e,t),re=Array.from({length:c},(xe,oe)=>oe).sort((xe,oe)=>Z[oe]-Z[xe]||xe-oe);let te=0;for(const xe of re){const oe=w[xe];if(oe<0||W[oe])continue;const Ce=oe%e,Ne=oe/e|0;if(Math.min(Ce,Ne,e-1-Ce,e-1-Ne)<M)continue;const De=Math.max(.005,n[oe]-n[xe]),V=T[xe]+De;if(T[oe]>V){const L=Math.fround(Math.max(V,n[oe]-_o));L<T[oe]&&(T[oe]=L,te++)}}if(m=$+1,x+=te,te===0)break}{const{surface:$}=Wi(T,e,e),Z=Xi($,e,e,t);for(let w=0;w<c;w++){const re=Z[w];if(re<0||W[re])continue;const te=re%e,xe=re/e|0;if(Math.min(te,xe,e-1-te,e-1-xe)<M)continue;b++;const oe=T[re]-T[w]-Math.max(.005,n[re]-n[w]);oe<=8*Math.abs(T[re])*2**-23||(v++,T[re]<=n[re]-_o+1e-6?(S++,oe>y&&(y=oe)):oe>D&&(D=oe))}A=!0}}}let O=0,k=0;if(o)for(let I=0;I<e;I++)for(let B=0;B<e;B++){const C=I*e+B,{x:P,z:W}=r(B,I);o(P,W)&&(O++,Math.abs(T[C]-n[C])>1e-6&&k++)}const K=new Uint8Array(c);if(o)for(let I=0;I<e;I++)for(let B=0;B<e;B++){const{x:C,z:P}=r(B,I);o(C,P)&&(K[I*e+B]=1)}const q=200,H=I=>{const{surface:B}=Wi(I,e,e),C=Xi(B,e,e,t);let P=0,W=-1,$=0;for(let w=0;w<q;w++){let re=w*104729%(e*e),te=0;for(;C[re]>=0&&te++<e*e;){const xe=C[re];if(K[xe])break;const oe=xe%e,Ce=xe/e|0;if(Math.min(oe,Ce,e-1-oe,e-1-Ce)<M)break;I[xe]-I[re]>P&&(P=I[xe]-I[re],W=xe),n[xe]-n[re]>$&&($=n[xe]-n[re]),re=xe}}let Z=!1;if(W>=0)for(let w=-3;w<=3&&!Z;w++)for(let re=-3;re<=3;re++){const te=W+w*e+re;if(te>=0&&te<c&&K[te]){Z=!0;break}}return{worst:P,at:W,nearWater:Z,srcSamePath:$}},Q=H(T),Y=H(n),j=Q.worst,fe=Y.worst,X=Q.srcSamePath,se=Q.nearWater,ie=Q.at,F=(()=>{const I=rl(T,e,e),B=p.bands.map((C,P)=>({band:`L${P}`,rms:fc(I.bands[P],C)}));return B.push({band:"low",rms:fc(I.low,p.low)}),B})();return{baked:T,g:e,cellM:t,halfM:i,modeKey:Dr(d),wallMs:(globalThis.performance??{now:()=>Date.now()}).now()-l,budget:F,b1Clamped:E,constraints:{waterCells:O,waterChanged:k,monotonePaths:q,worstUphillM:j,worstUphillSourceM:fe,worstUphillSourceSamePathM:X,worstUphillNearWater:se,worstUphillAt:ie,breachRounds:m,breachFixed:x,breachRemaining:v,breachCapped:S,breachWorst:D,breachWorstCapped:y,breachRan:A,breachPairs:b}}}const Ox="modulepreload",Ux=function(n,e){return new URL(n,e).href},Eu={},pc=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=Ux(c,i),c in Eu)return;Eu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const M=o[g];if(M.href===c&&(!h||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Ox,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,M)=>{f.addEventListener("load",g),f.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},vu=[{prop:"sand",cov:"sand_5-15cm_mean",scale:.1},{prop:"clay",cov:"clay_5-15cm_mean",scale:.1},{prop:"cfvo",cov:"cfvo_5-15cm_mean",scale:.1}],Fx=(n,e,t)=>`https://maps.isric.org/mapserv?map=/map/${e}.map&SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=${n}&FORMAT=GEOTIFF_INT16&SUBSET=long(${t.minLon.toFixed(5)},${t.maxLon.toFixed(5)})&SUBSET=lat(${t.minLat.toFixed(5)},${t.maxLat.toFixed(5)})&SUBSETTINGCRS=http://www.opengis.net/def/crs/EPSG/0/4326&OUTPUTCRS=http://www.opengis.net/def/crs/EPSG/0/4326`;async function kx(n,e,t){const{fromArrayBuffer:i}=await pc(async()=>{const{fromArrayBuffer:h}=await import("./geotiff-BEXE77nF.js").then(u=>u.g);return{fromArrayBuffer:h}},[],import.meta.url),r=await(await i(n)).getImage(),o=r.getWidth(),a=r.getHeight(),l=(await r.readRasters())[0],c=new Uint8Array(o*a);for(let h=0;h<o*a;h++){const u=l[h];c[h]=u<0?255:Math.min(254,Math.round(u*e))}return{w:o,h:a,bbox:[t.minLon,t.minLat,t.maxLon,t.maxLat],data:c}}async function Bx(n,e){try{const t=new Map;let i=0,s=0;for(const{prop:r,cov:o,scale:a}of vu){let l=null;for(let c=0;c<3&&!l;c++)try{const h=await fetch(Fx(o,r,n));if(!h.ok)throw new Error(`WCS ${h.status} for ${o}`);l=await h.arrayBuffer()}catch(h){if(c===2)throw h;await new Promise(u=>setTimeout(u,400*(c+1)))}i+=l.byteLength,t.set(r,await kx(l,a,n)),e==null||e(++s,vu.length)}return{grids:t,bytes:i}}catch(t){return console.warn("[liveFactors] soil unavailable:",t.message),null}}function Sf(n,e,t,i,s,r){return{phase:"arriving",a:n,b:e,aLatLon:t,bLatLon:i,lengthM:s,bearingRad:r,elapsedS:0,timePenaltyS:0,tick:0,xtdM:0,xtdSignedM:0,maxDevM:0,meanDevM:0,devDistSumM2:0,pathLenM:0,lastX:n.x,lastZ:n.z,alongM:0,distToBM:s,medal:"Platinum",lineScore:0,track:[],worstIndex:-1}}function Gx(n,e,t){const i=tf(n,e,t);return{frame:i.frame,state:Sf(i.a,i.b,n,e,i.lengthM,i.bearingRad)}}function zx(n){n.phase==="arriving"&&(n.phase="walking")}function Hx(n,e){const t=n.mission;if(t.phase!=="walking")return;t.elapsedS+=e,t.tick++;const i={x:n.player.x,z:n.player.z},s=Jd(t.a,t.b,i);t.xtdSignedM=s.xtdSigned,t.xtdM=s.dist,t.alongM=s.along,t.distToBM=ca(t.b,i),t.maxDevM=Math.max(t.maxDevM,s.dist);const r=Math.hypot(i.x-t.lastX,i.z-t.lastZ);t.lastX=i.x,t.lastZ=i.z,t.devDistSumM2+=s.dist*r,t.pathLenM+=r,t.meanDevM=t.pathLenM>0?t.devDistSumM2/t.pathLenM:s.dist,t.medal=qv(t.maxDevM),t.lineScore=jv(t.lengthM,t.meanDevM,t.medal);const o=t.distToBM<=_.FINISH_RADIUS_M;(o||t.elapsedS>=t.track.length*_.TRACK_SAMPLE_S)&&(t.track.push({t:t.elapsedS,x:i.x,z:i.z,xtd:s.xtdSigned}),(t.worstIndex<0||Math.abs(s.xtdSigned)>Math.abs(t.track[t.worstIndex].xtd))&&(t.worstIndex=t.track.length-1)),o&&(t.phase="finished")}function Lr(n){return{medal:n.medal,maxDevM:n.maxDevM,avgDevM:n.meanDevM,lineScore:n.lineScore,elapsedS:n.elapsedS,lengthM:n.lengthM,finished:n.phase==="finished"}}function Vx(n){n.track.length=0,Object.assign(n,Sf(n.a,n.b,n.aLatLon,n.bLatLon,n.lengthM,n.bearingRad),{track:n.track})}function Wx(n=_.SIM_DT,e=_.SIM_MAX_STEPS_PER_FRAME){let t=0,i=0;return{get tick(){return i},advance(s,r){t+=s;let o=0;for(;t>=n&&o<e;)r(n),t-=n,o++,i++;return t>=n&&(t=0),o},reset(){t=0,i=0}}}function Af(n){return{fwd:n.fwd,strafe:n.strafe,yaw:n.yaw,pitch:n.pitch,sprint:n.sprint}}class zc{constructor(){je(this,"frames",[])}record(e){this.frames.push(Af(e))}clear(){this.frames.length=0}toJSON(){return JSON.stringify(this.frames)}static fromJSON(e){const t=new zc;for(const i of JSON.parse(e))t.record(i);return t}}const Xx=5669058,$x=14209242,Kx=15912860,Yx=14271648,qx=13088440,Zx=12894934,jx=16766624,Qx=10466520,Jx=7036744,eS=10466520,tS=16052974,nS=9278364,iS=0,sS=`
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
}`,rS=`
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
  vec3 col = mix(uHorizon, uZenith, pow(h, ${_.SKY_GRADIENT_EXPONENT.toFixed(2)}));
  float glow = pow(max(dot(dir, uSunDir), 0.0), ${_.SKY_SUN_GLOW_EXPONENT.toFixed(1)});
  col = mix(col, uSunGlow, glow * (1.0 - h));
  {
    // Project onto the deck. Below CLOUD_HORIZON_FADE the projection runs to infinity, so it is
    // faded out there instead of smearing into a band along the skyline.
    float up = max(dir.y, 1e-4);
    vec2 g = (dir.xz / up) * ${_.CLOUD_HEIGHT_M.toFixed(1)}; // the deck point, GEOMETRIC
    vec2 p = g + uCloud.zw * uCloud.y;                             // …and again, scrolled, for the noise
    float n = clFbm(p / ${_.CLOUD_SCALE_M.toFixed(1)});
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
    float t = mix(${_.CLOUD_COVER_HI.toFixed(3)}, ${_.CLOUD_COVER_LO.toFixed(3)}, o);
    float cov = smoothstep(t, t + ${_.CLOUD_EDGE.toFixed(3)}, n);
    cov *= smoothstep(0.0, ${_.CLOUD_HORIZON_FADE.toFixed(3)}, dir.y);
    // Lit where the deck faces the sun, shadowed away from it — a flat grey deck has no volume, and
    // the sun side is what says these are lumps of water and not a sheet of card.
    float lit = 0.5 + 0.5 * dot(normalize(vec3(dir.x, 0.0, dir.z)), normalize(vec3(uSunDir.x, 0.0, uSunDir.z)));
    col = mix(col, mix(uCloudBase, uCloudLit, lit * lit), cov);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function oS(n){n.renderer.toneMapping=Yn;const e=va.degToRad(_.SUN_AZIMUTH_DEG),t=va.degToRad(_.SUN_ELEVATION_DEG),i=new le(Math.sin(e)*Math.cos(t),Math.sin(t),-Math.cos(e)*Math.cos(t)),s=new Ve(Xx),r=new Ve($x),o=new Ve(Kx),a=[{distM:_.FOG_BAND_1_M,color:new Ve(Yx)},{distM:_.FOG_BAND_2_M,color:new Ve(qx)},{distM:_.FOG_BAND_3_M,color:new Ve(Zx)},{distM:_.FAR_SHELL_OUTER_M,color:r}],l=new it(_.FOG_START_M,_.FOG_HALF_DISTANCE_SEA_M,1/_.FOG_DENSITY_HALF_HEIGHT_M,_.FOG_DENSITY_FLOOR),c=_.TERRAIN_WIND_FROM_DEG*Math.PI/180,h=new it(0,0,Math.sin(c)*_.CLOUD_DRIFT_MPS,-Math.cos(c)*_.CLOUD_DRIFT_MPS),u=new it(Math.sin(c),-Math.cos(c),0,0),d=new Pt({vertexShader:sS,fragmentShader:rS,uniforms:{uZenith:{value:s},uHorizon:{value:r},uSunGlow:{value:o},uSunDir:{value:i},uCloud:{value:h},uFront:{value:u},uCloudLit:{value:new Ve(tS)},uCloudBase:{value:new Ve(nS)}},side:Yt,depthWrite:!1,fog:!1}),f=new xt(new Oc(_.SKY_DOME_RADIUS_M,32,16),d);f.frustumCulled=!1,f.renderOrder=10,n.scene.add(f);const g=new Wh(Qx,Jx,_.HEMI_INTENSITY),M=new _E(jx,_.SUN_INTENSITY);M.position.copy(i).multiplyScalar(1e3);const p=new Wh(eS,iS,_.SKYLIGHT_INTENSITY),m=va.degToRad(_.SKYLIGHT_AXIS_TILT_DEG),x=Math.max(1e-6,Math.hypot(i.x,i.z));return p.position.set(i.x/x*Math.sin(m),Math.cos(m),i.z/x*Math.sin(m)),n.scene.add(g,M,p),{skyZenith:s,skyHorizon:r,sunGlow:o,fogBands:a,sunDir:i,fogK:l,cloud:h,front:u,lights:{sun:M,hemi:g,skylight:p},update:v=>{f.position.copy(v.camera.position),h.y=v.clock.simTick*_.SIM_DT},dispose:()=>{n.scene.remove(f,g,M,p),f.geometry.dispose(),d.dispose()}}}const aS=7313983,lS=8361032,cS=9408338,hS=9014654;function uS(n){const e=Math.min(1,Math.max(0,(n-(_.TERRAIN_SLOPE_ROCK_DEG-_.TERRAIN_SLOPE_BLEND_DEG))/(2*_.TERRAIN_SLOPE_BLEND_DEG)));return e*e*(3-2*e)}function dS(n,e,t,i){const s=xu((i-_.SNOW_ALT_LO_M)/(_.SNOW_ALT_HI_M-_.SNOW_ALT_LO_M)),r=1-xu((n-_.SNOW_SLOPE_LO_DEG)/(_.SNOW_SLOPE_HI_DEG-_.SNOW_SLOPE_LO_DEG)),o=Math.hypot(e,t),a=o>1e-4?(e*fS+t*pS)/o:0;return Math.min(1,Math.max(0,s*r*(1-_.SNOW_ASPECT_MELT*Math.max(0,a))))}const Rf=_.SUN_AZIMUTH_DEG*Math.PI/180,fS=Math.sin(Rf),pS=-Math.cos(Rf);function xu(n){const e=Math.min(1,Math.max(0,n));return e*e*(3-2*e)}const mS=15659767,_S=7303026,gS=10722402,MS=7234104,ES=5787960,vS=7369055,xS=9933962,SS=5985347,AS=9145728,RS=5266479,yS=6122551,TS=7304057,bS="vec3(0.78, 0.80, 0.92)",wS="vec3(0.56, 0.56, 0.62)",CS="vec3(0.52, 0.54, 0.64)",NS="vec3(1.30, 1.06, 0.52)",DS="vec3(1.30, 0.95, 0.55)",IS="vec3(1.30, 1.00, 0.58)",LS="vec3(0.56, 0.70, 1.08)",PS="vec3(1.44, 1.30, 0.92)",Qe=n=>n.toFixed(4),OS=`
uniform vec3 uFogC1, uFogC2, uFogC3, uHorizon, uSunGlow, uSunDir;
uniform vec4 uFogD;   // band distances: 1, 2, 3, end (= FAR_SHELL_OUTER_M)
uniform vec4 uFogK;   // start, sea-level half distance, 1/density half-height, density floor
uniform vec4 uFront;  // THE FRONT: upwind dirX, dirZ, d(overcast)/dm, d(fog-half multiplier)/dm
varying vec3 blWorldPos;
float blHash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float blNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(blHash(i), blHash(i + vec2(1.0, 0.0)), f.x), mix(blHash(i + vec2(0.0, 1.0)), blHash(i + vec2(1.0, 1.0)), f.x), f.y); }
vec3 blHorizon(vec3 dir) {
  return mix(uHorizon, uSunGlow, pow(max(dot(dir, uSunDir), 0.0), ${Qe(_.SKY_SUN_GLOW_EXPONENT)}));
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
  fc = mix(fc, blHorizon(rel / max(d, 1e-3)), ${Qe(_.FOG_HORIZON_BLEND_MAX)} * smoothstep(uFogD.z, uFogD.w, d));
  // THE FRONT (item 10 sub-task 4). The half-distance is a FIELD: it shortens toward the bearing the
  // weather is coming from, so the ridge the front is behind goes murky while the ground at your feet
  // does not. Without this the front lives only in the sky, and "weather over a ridge" is exactly the
  // read that needs the ridge to take it too.
  //
  // A MULTIPLIER on uFogK.y, and exactly 1.0 at the walker (rel = 0) by construction — so every value
  // this fog was ever measured at is the value it still reads, and a uniform sky (which includes sim
  // tick 0, where the front's gradients are 0) is bit-identical to before this existed.
  // blHalf, not half: half is a RESERVED WORD in GLSL ES.
  float blHalf = uFogK.y * clamp(1.0 + uFront.w * dot(rel.xz, uFront.xy), ${Qe(_.WEATHER_FRONT_FOG_MIN)}, ${Qe(_.WEATHER_FRONT_FOG_MAX)});
  float f = 1.0 - exp2(-max(d - uFogK.x, 0.0) * blAirMass(cameraPosition.y, blWorldPos.y) / blHalf);
  return mix(col, fc, f);
}`;function da(n){if(n.fogBands.length!==4)throw new Error("fogUniforms: expected 3 fog stops + the horizon");const[e,t,i,s]=n.fogBands;return{uFogC1:{value:e.color},uFogC2:{value:t.color},uFogC3:{value:i.color},uHorizon:{value:s.color},uSunGlow:{value:n.sunGlow},uSunDir:{value:n.sunDir},uFogD:{value:new it(e.distM,t.distM,i.distM,s.distM)},uFogK:{value:n.fogK},uFront:{value:n.front}}}function fa(n,e){Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 blWorldPos;`).replace("#include <project_vertex>",`#include <project_vertex>
blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+OS).replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = blFog(gl_FragColor.rgb);
#include <tonemapping_fragment>`)}const US=`
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
  float carp = pow(${Qe(_.GROUNDCOVER_FULL_M)} / max(dist, ${Qe(_.GROUNDCOVER_FULL_M)}), ${Qe(_.GROUNDCOVER_FALLOFF_POW)})
    * (1.0 - smoothstep(${Qe(_.GROUNDCOVER_FAR_M*_.GROUNDCOVER_FADE_FRAC)}, ${Qe(_.GROUNDCOVER_FAR_M)}, dist));
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
  vec2 vp = xz / ${Qe(_.TERRAIN_CRAG_VARY_M)}, down = n.xz / max(length(n.xz), 1e-4), gp = xz / ${Qe(_.TERRAIN_GULLY_WAVE_M)};
  float lA = 0.5 * (blNoise(vec2(xz.x / 18.0, yy)) + blNoise(vec2(xz.y / 18.0 + 7.7, yy + 3.3))), lB = blNoise(vec2(xz.x / 40.0 + 2.2, yy / 2.4));
  float ledge = mix(lA, lB, smoothstep(0.42, 0.58, blNoise(blRot * vp * 1.4 + 8.8))), la = cm * uCrag.y * smoothstep(0.28, 0.58, blNoise(vp + 3.7));
  float gully = (blNoise(gp) + blNoise(gp + down * 0.8) + blNoise(gp + down * 1.6) + blNoise(gp + down * 2.4)) * 0.25;
  vec3 crag = uColRock * mix(vec3(1.0), ${wS}, la * (1.0 - smoothstep(0.40, 0.52, ledge))) * (1.0 + 0.2 * la * smoothstep(0.60, 0.70, ledge));
  float ledgeH = cm * la * (0.5 - ledge) * (1.0 - smoothstep(0.1, 0.3, mpp / uCrag.x));   // -> blH below: the ink strokes become steps the sun can read
  crag *= mix(vec3(1.0), ${CS}, cm * ${Qe(_.TERRAIN_GULLY_AMP)} * smoothstep(0.60, 0.70, gully) * (1.0 - smoothstep(0.1, 0.3, mpp / ${Qe(_.TERRAIN_GULLY_WAVE_M)})));
  col = mix(col, crag * mix(vec3(1.0), ${bS}, smoothstep(uSlope.x - uSlope.y, uSlope.x + 18.0, slopeDeg)), rock);
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
  vec2 fp = xz / ${Qe(_.TERRAIN_SCREE_WAVE_M)}; float fan = (blNoise(fp) + blNoise(fp + down * 1.5) + blNoise(fp + down * 3.0)) / 3.0, ease = clamp(dot(blGrad(n.y).xz, down) * 400.0, 0.0, 1.0);
  col = mix(col, uColScree, cm * smoothstep(uPatch.w, uCrag.w, rockDeg) * (1.0 - smoothstep(uCrag.w + 2.0, uCrag.w + 10.0, rockDeg))
    * smoothstep(${Qe(_.TERRAIN_SCREE_COVER)}, ${Qe(_.TERRAIN_SCREE_COVER+.24)}, fan) * pow(ease, ${Qe(_.TERRAIN_SCREE_FADE_POW)})
    * (1.0 - smoothstep(0.1, 0.3, mpp / ${Qe(_.TERRAIN_SCREE_WAVE_M)})));
  // relief below the DEM's resolution, SHADING ONLY (blH -> blBump), faded by view distance and footprint: knolls (TERRAIN_KNOLL_*) + hummocks (TERRAIN_HUMMOCK_*) to TERRAIN_RELIEF_FADE_M.
  vec2 fq = xz / uFleck.x;
  float hk = blNoise2(blRot * xz / ${Qe(_.TERRAIN_HUMMOCK_WAVE_M)} + 31.0);
  // THE HANDOVER, driven by carp. Measured on S1 at round 1: local contrast inside the carpet is 16.8 % of the
  // mean and beyond it 5.0 %, so what a walker sees at the ring is a CONTRAST step, not a density one. TERRAIN_QUIET
  // exists because the carpet owns the near field; this is the other end of the same trade.
  float hand = 1.0 + uHand * (1.0 - carp);
  float rf = 1.0 - smoothstep(${Qe(_.TERRAIN_RELIEF_FADE_M*.5)}, ${Qe(_.TERRAIN_RELIEF_FADE_M)}, dist);
  blH = rock * ${Qe(_.TERRAIN_CRAG_LEDGE_BUMP)} * ledgeH + rf * (${Qe(_.TERRAIN_KNOLL_M)} * (1.0 - smoothstep(0.1, 0.3, mpp / ${Qe(_.TERRAIN_KNOLL_WAVE_M)})) * (blNoise2(xz / ${Qe(_.TERRAIN_KNOLL_WAVE_M)} + 57.0) - 0.5)
    + hand * ${Qe(_.TERRAIN_HUMMOCK_M)} * (1.0 - smoothstep(0.1, 0.3, mpp / ${Qe(_.TERRAIN_HUMMOCK_WAVE_M)})) * (hk - 0.5));
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
    + ${Qe(_.TERRAIN_APRON_MIX)} * smoothstep(${Qe(_.ROCK_SLOPE_LO_DEG)}, ${Qe(_.ROCK_SLOPE_HI_DEG)}, rockDeg) * mix(0.35, 1.0, ease), 0.0, 1.0);
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
  col *= 1.0 + fm * uFleck.y * (2.0 * t - 1.0) * mix(${DS}, ${NS}, t) * mix(1.0, 0.45, bare); // the 0.8 m tussock scale also breaks up bare ground (free — the field is already sampled)
  // SUBTRACTED here: the 0.24 m tuft crown/gap decals and the 0.09 m blade decals. Both were footprint-sharp blEdge cuts mixing
  // straight to COL_DRY / COL_TURFD — hard-edged puzzle-piece shapes at exactly the wavelength a walker reads — and the 0.09 m
  // pair duplicated the grit fine octave's own wavelength, which is D52's "two fields at one wavelength" warning coming true in
  // albedo instead of relief. The sub-metre band now belongs to the instanced ground-cover geometry, which is where D55/D56 say
  // walking-scale structure has to come from. What is left at 0.8 m is RELIEF the sun models: directional and light-consistent,
  // so it reads as ground rather than as pattern.
  blH += mix(1.0, 0.12, bare) * ${Qe(_.TERRAIN_FLECK_BUMP)} * fm * (f1 - 0.5);
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
  vec2 bq = xz / ${Qe(_.TERRAIN_GRAIN_WAVE_M)}, streak = down * (aniso * ${Qe(_.TERRAIN_GRAIN_STREAK_W)});
  // 0.9326 = 0.6 x 1.5544, and the 1.5544 is MEASURED, not chosen (D52's rule): averaging three taps one wavelength apart drops
  // this field's sd from 0.2147 to 0.1381, so re-using the shipped 0.6 would have landed the grain 36 % quieter than the frame
  // it replaces — a fix that quietly re-opens the "smooth blanket" finding it is not supposed to touch.
  float fine = ((blNoise(bq - streak) + blNoise(bq) + blNoise(bq + streak)) / 3.0 - 0.5) * 0.9326
    + (blNoise(blRot * xz / ${Qe(_.TERRAIN_GRAIN_WAVE_M*.37)} + 3.1) - 0.5) * 0.4 * (1.0 - smoothstep(0.1, 0.3, mpp / ${Qe(_.TERRAIN_GRAIN_WAVE_M*.37)}));
  // distant SHADING, restored — cool where the ground turns from the sun, warm where it turns into it. At the 6.4 km the S6 far
  // band sits at, fog replaces ~49 % of the pixel, so the far shell's own lambert modelling (N·L 0.20-0.60 over that band by
  // raycast probe, on normals differenced off the same WorldQuery as the ground under the feet) reached the frame as ~3 of 255
  // and the ridge read as a paper cut-out (blind grade sev-1). This re-states the SAME true sun term as albedo contrast + hue on
  // the zones' ramp: contrast compensation on the real normal, never invented landform, and identically zero on the near ground.
  col *= mix(vec3(1.0), mix(${LS}, ${PS}, smoothstep(${Qe(_.TERRAIN_FAR_SHADE_LO)}, ${Qe(_.TERRAIN_FAR_SHADE_HI)}, clamp(dot(n, uSunDir), 0.0, 1.0))), uFarShade * smoothstep(uZone.z * 0.25, uZone.z, dist));
  // GRAIN_TINT makes the brushstroke a warm/cool axis instead of a light/dark one: a positive stroke goes straw-warm, a negative
  // one goes green-cool, and the luminance swing is about half what the same amplitude used to buy. Hue variance, not value.
  col *= 1.0 + wander * ${Qe(_.TERRAIN_BAND_GRAIN)} + fine * ${Qe(_.TERRAIN_FINE_GRAIN)} * ${IS};
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
    float wRock = smoothstep(${Qe(_.TERRAIN_SLOPE_ROCK_DEG-_.TERRAIN_SLOPE_BLEND_DEG)}, ${Qe(_.TERRAIN_SLOPE_ROCK_DEG+_.TERRAIN_SLOPE_BLEND_DEG)}, slopeDeg);
    float w = uWet * wRock;
    col *= 1.0 - ${Qe(_.WEATHER_WET_DARKEN)} * w;
    col.b *= 1.0 + ${Qe(_.WEATHER_WET_BLUE)} * w;
  }
  // SNOW — a LAYER over the finished ground, never a repaint of it. Season may not touch the geology
  // (check 47 asserts the seven rock and soil colours are bit-identical across all four), so snow
  // cannot be a palette swap; it has to sit on top, which is also what it physically is. The rule is
  // the GPU half of the pair whose CPU half is snowFractionAt() above — altitude, slope, aspect —
  // and the wander term breaks the sheet so a drift has an edge rather than a hard contour line.
  if (uSnow.x > 0.0) {
    float snAlt = smoothstep(uSnow.y, uSnow.z, blWorldPos.y);
    float snLie = 1.0 - smoothstep(${Qe(_.SNOW_SLOPE_LO_DEG)}, ${Qe(_.SNOW_SLOPE_HI_DEG)}, slopeDeg);
    vec2 snH = n.xz;
    float snL = length(snH);
    float snFace = snL > 1e-4 ? dot(snH / snL, vec2(${Qe(Math.sin(_.SUN_AZIMUTH_DEG*Math.PI/180))}, ${Qe(-Math.cos(_.SUN_AZIMUTH_DEG*Math.PI/180))})) : 0.0;
    float sn = clamp(snAlt * snLie * (1.0 - uSnow.w * max(0.0, snFace)), 0.0, 1.0) * uSnow.x;
    col = mix(col, uColSnow * (0.95 + 0.05 * wander), smoothstep(0.02, 0.55, sn));
  }
  // Jimenez's interleaved gradient noise at the 8-bit quantisation level (Call of Duty: Advanced Warfare; Frost.kiwi). Once the
  // fills are this quiet the ramps between them are wide enough to posterise, and this is the one-line sub-LSB fix for that.
  // It is invisible as texture, and it must be the LAST thing that touches the albedo.
  col += (1.0 / 255.0) * fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - (0.5 / 255.0);
  return col;
}`,kt=n=>({value:new Ve(n)}),Su=_.TERRAIN_WIND_FROM_DEG*Math.PI/180;function FS(n){const e={...da(n),uColValley:kt(aS),uColUpland:kt(lS),uColHigh:kt(cS),uColSummit:kt(hS),uColRock:kt(_S),uColDry:kt(gS),uColHeath:kt(MS),uColPeat:kt(ES),uColBare:kt(vS),uColScree:kt(xS),uColSoil:kt(SS),uColGrit:kt(AS),uColTurfD:kt(RS),uColMoss:kt(yS),uColStone:kt(TS),uColSnow:kt(mS),uSnow:{value:new it(0,_.SNOW_ALT_LO_M,_.SNOW_ALT_HI_M,_.SNOW_ASPECT_MELT)},uWet:{value:0},uBands:{value:new it(_.TERRAIN_BAND_UPLAND_M,_.TERRAIN_BAND_HIGH_M,_.TERRAIN_BAND_SUMMIT_M,_.TERRAIN_BAND_BLEND_M)},uSlope:{value:new it(_.TERRAIN_SLOPE_ROCK_DEG,_.TERRAIN_SLOPE_BLEND_DEG,_.TERRAIN_SLOPE_LIFT_M_PER_DEG,_.TERRAIN_BAND_NOISE_M)},uNoise:{value:new et(_.TERRAIN_BAND_NOISE_WAVE_M,_.TERRAIN_ROCK_NOISE_DEG)},uPatch:{value:new it(_.TERRAIN_PATCH_WAVE_M,_.TERRAIN_PATCH_MIX,_.TERRAIN_PATCH_FADE_M,_.TERRAIN_SCREE_LO_DEG)},uZone:{value:new it(_.TERRAIN_ZONE_WAVE_M,_.TERRAIN_ZONE_MIX,_.TERRAIN_ZONE_FAR_M,_.TERRAIN_ZONE_MIX_FAR)},uFarShade:{value:_.TERRAIN_FAR_SHADE},uFleck:{value:new le(_.TERRAIN_FLECK_WAVE_M,_.TERRAIN_FLECK_AMP,_.TERRAIN_FLECK_FADE_M)},uGrit:{value:new it(_.TERRAIN_GRIT_WAVE_M,_.TERRAIN_GRIT_AMP,_.TERRAIN_GRIT_FADE_M,_.TERRAIN_GRIT_BUMP)},uSoil:{value:new le(_.TERRAIN_SOIL_WAVE_M,_.TERRAIN_SOIL_MIX_BARE,_.TERRAIN_SOIL_MIX_TURF)},uCrag:{value:new it(_.TERRAIN_CRAG_LEDGE_M,_.TERRAIN_CRAG_LEDGE_AMP,_.TERRAIN_CRAG_FADE_M,_.TERRAIN_SCREE_HI_DEG)},uQuiet:{value:new le(_.TERRAIN_QUIET,_.TERRAIN_QUIET_FADE_M,_.TERRAIN_QUIET_SAT)},uRoot:{value:new it(_.TERRAIN_ROOT_MIX,_.TERRAIN_ROOT_FADE_M,_.TERRAIN_ROOT_QUIET,_.TERRAIN_ROOT_BUMP)},uHand:{value:_.TERRAIN_HANDOVER_GAIN},uRootAo:{value:_.TERRAIN_ROOT_AO},uExpo:{value:new it(_.TERRAIN_EXPO_WIND,_.TERRAIN_EXPO_NOISE,_.TERRAIN_EXPO_WAVE_M,_.TERRAIN_EXPO_MIX)},uWind:{value:new et(Math.sin(Su),-Math.cos(Su))}},t=new Bi({color:16777215,fog:!1,flatShading:!1});return t.userData.uniforms=e,t.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 blWorldNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
blWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
`+US).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = blAlbedo();`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = blBump();`),fa(i,e)},t}const kS=3823728,BS=7242352,GS=6911072,zS=5134957,HS="vec3(0.80, 0.83, 0.90)",Di=80;function yf(n,e){const t=(n-1)*(e-1)*6,i=n*e>65535?new Uint32Array(t):new Uint16Array(t);let s=0;for(let r=0;r<e-1;r++)for(let o=0;o<n-1;o++){const a=r*n+o,l=a+1,c=a+n,h=c+1;i[s++]=a,i[s++]=c,i[s++]=l,i[s++]=c,i[s++]=h,i[s++]=l}return i}function VS(n,e,t,i){const s=_.WATER_SHORE_GRAD_EPS_M,r=_.WATER_SHORE_ISO,o=Math.sqrt(_.WATER_SHELF_MIN_M*_.WATER_SHELF_MAX_M);if(i<=0)return-Di/o;if(i>=1)return Di/o;const a=(n.water.insidenessAt(e+s,t)-n.water.insidenessAt(e-s,t))/(2*s),l=(n.water.insidenessAt(e,t+s)-n.water.insidenessAt(e,t-s))/(2*s),c=Math.hypot(a,l),h=i>=r;if(c<1e-6)return(h?Di:-Di)/o;const u=a/c,d=l/c,f=h?-1:1,g=y=>n.water.insidenessAt(e+f*y*u,t+f*y*d)>=r;let M=0,p=0;for(let y=s;y<=Di;y*=1.6){if(g(y)!==h){p=y;break}M=y}if(p===0)return(h?Di:-Di)/o;for(let y=0;y<6;y++){const A=(M+p)/2;g(A)===h?M=A:p=A}const m=(h?1:-1)*(M+p)/2,x=e-m*u,v=t-m*d;let S=0;for(const y of[.25,.6,1]){const A=y*_.WATER_SHELF_PROBE_M;S+=n.slopeDegAt(x-A*u,v-A*d)/3}const D=_.WATER_SHELF_DEPTH_M/Math.tan(Math.max(S,.5)*(Math.PI/180));return m/Math.max(_.WATER_SHELF_MIN_M,Math.min(_.WATER_SHELF_MAX_M,D))}function WS(n,e,t){const i=_.WATER_PLANE_MARGIN_M,s=n.bbox.minX-i,r=n.bbox.minZ-i,o=n.bbox.maxX+i-s,a=n.bbox.maxZ+i-r,l=Math.max(_.WATER_PLANE_STEP_M,Math.sqrt(o*a/_.WATER_PLANE_MAX_VERTS)),c=Math.ceil(o/l)+1,h=Math.ceil(a/l)+1,u=o/(c-1),d=a/(h-1),f=n.surfaceY+_.WATER_PLANE_LIFT_M,g=new Float32Array(c*h*3),M=new Float32Array(c*h*4);for(let S=0;S<h;S++)for(let D=0;D<c;D++){const y=s+D*u,A=r+S*d,b=S*c+D;g[b*3]=y,g[b*3+1]=f,g[b*3+2]=A;const R=t.water.insidenessAt(y,A);M[b*4]=R,M[b*4+1]=f-t.heightAt(y,A),M[b*4+2]=VS(t,y,A,R),M[b*4+3]=t.water.distToShoreAt(y,A)}const p=new Et;p.setAttribute("position",new st(g,3)),p.setAttribute("blShore",new st(M,4)),p.setIndex(new st(yf(c,h),1)),p.computeBoundingSphere();const m={...da(e),uWaterDeep:{value:new Ve(kS)},uWaterShallow:{value:new Ve(BS)},uWaterWet:{value:new Ve(GS)},uWaterFar:{value:new Ve(zS)}},x=new oa({color:16777215,fog:!1,alphaToCoverage:!0});x.userData.uniforms=m,x.onBeforeCompile=S=>{S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 blShore;
varying vec4 blShoreV;`).replace("#include <project_vertex>",`#include <project_vertex>
blShoreV = blShore;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uWaterDeep, uWaterShallow, uWaterWet, uWaterFar;
varying vec4 blShoreV;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  // the shoreline: inside the mask's iso (one pixel soft) AND above the ground — the coverage fading in over the first 40 % of WATER_CONTACT_M of depth (alpha → MSAA coverage; nothing drawn outside)
  vec2 w = fwidth(blShoreV.xy);
  vec2 edge = vec2(${_.WATER_SHORE_ISO.toFixed(2)}, ${_.WATER_SHORE_DRY_M.toFixed(3)});
  vec2 cut = smoothstep(edge - w, edge + max(w, vec2(0.0, ${(_.WATER_CONTACT_M*.4).toFixed(3)})), blShoreV.xy);
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
  float openT = smoothstep(0.0, 1.0, blShoreV.w / ${_.WATER_OPEN_FADE_M.toFixed(1)});
  vec3 body = mix(uWaterShallow, uWaterDeep, ${_.WATER_SHELF_SHARE.toFixed(2)} * shelfT + ${(1-_.WATER_SHELF_SHARE).toFixed(2)} * openT);
  // the wet-stone margin: dark bed through clear water over the first WATER_WET_FRAC of the shelf
  // (so it is metres wide on a gentle shore and centimetres at a crag foot) AND over the last
  // WATER_CONTACT_M of depth, whichever is thinner.
  float wet = min(smoothstep(0.0, ${_.WATER_CONTACT_M.toFixed(2)}, blShoreV.y),
                  smoothstep(0.0, ${_.WATER_WET_FRAC.toFixed(2)}, max(blShoreV.z, 0.0)));
  body = mix(uWaterWet, body, wet);
  // reflection only at grazing angles: darkened sky at moderate angles, the fellside/haze tone as rays flatten toward the far shore
  float fres = pow(1.0 - clamp(-dir.y, 0.0, 1.0), ${_.WATER_FRESNEL_EXPONENT.toFixed(1)});
  vec3 refl = mix(blHorizon(vec3(dir.x, -dir.y, dir.z)) * ${HS}, uWaterFar, fres);
  diffuseColor.rgb = mix(body, refl, fres * ${_.WATER_REFLECT_MAX.toFixed(2)});
}`),fa(S,m)};const v=new xt(p,x);return v.name=`water-${n.id}`,v}function XS(n,e,t,i,s){for(let r=0;r+i<=t-1;r+=i){const o=s(r,t)*3,a=s(r+i,t)*3;for(let l=1;l<i;l++){const c=l/i,h=s(r+l,t)*3;n[h+1]=n[o+1]*(1-c)+n[a+1]*c;const u=e[o]*(1-c)+e[a]*c,d=e[o+1]*(1-c)+e[a+1]*c,f=e[o+2]*(1-c)+e[a+2]*c,g=Math.hypot(u,d,f)||1;e[h]=u/g,e[h+1]=d/g,e[h+2]=f/g}}}const vt=_.CHUNK_SIZE_M,$S=_.CHUNK_GRID_STEP_M,ol=8,Vn=(n,e)=>`${n},${e}`,Mi=_.CHUNK_LOD_RING_MULTS,$s=_.CHUNK_LOD_RING_STARTS;if(Mi.length!==$s.length)throw new Error("CHUNK_LOD_RING_MULTS and _STARTS must be the same length");for(let n=1;n<Mi.length;n++){const e=Mi[n];if(e<=Mi[n-1]||e&e-1||_.CHUNK_SIZE_M/_.CHUNK_GRID_STEP_M%e!==0)throw new Error(`CHUNK_LOD_RING_MULTS[${n}] = ${e} must be an increasing power of two dividing ${_.CHUNK_SIZE_M/_.CHUNK_GRID_STEP_M}`);if($s[n]<=$s[n-1])throw new Error(`CHUNK_LOD_RING_STARTS must increase (index ${n})`)}const pr=Mi.map((n,e)=>{const t=$S*n,i=vt/t+1,s=i+2;return{level:e,step:t,v:i,g:s,rows:s+i,indices:yf(i,i)}}),Au=[(n,e)=>n*e+(e-1),(n,e)=>n*e,(n,e)=>(e-1)*e+n,n=>n];function KS(n,e){const{scene:t}=n,i=n.world.query,s=FS(e),r=new Map;let o=[],a=_.CHUNK_LOAD_RADIUS,l=_.CHUNK_LOD_FINE_RINGS,c=null;const h=[],u=vE(i,s);u.rebuild(n.player.x,n.player.z),t.add(u.mesh);const d=n.world.water.bodies.map(F=>WS(F,e,i));for(const F of d)t.add(F);const f=(F,I,B,C,P)=>{const W=P+(I-1)*F.step;for(let $=0;$<F.g;$++)B[I*F.g+$]=i.heightAt(C+($-1)*F.step,W,F.step)},g=(F,I,B,C,P)=>{for(let W=0;W<F.v;W++){const $=(I*F.v+W)*3,Z=(I+1)*F.g+(W+1);C[$]=W*F.step,C[$+1]=B[Z],C[$+2]=I*F.step;const w=(B[Z+1]-B[Z-1])/(2*F.step),re=(B[Z+F.g]-B[Z-F.g])/(2*F.step),te=Math.hypot(w,1,re);P[$]=-w/te,P[$+1]=1/te,P[$+2]=-re/te}},M=(F,I)=>{const B=F.v,C=new Uint32Array((B-1)*(B-1)*6);let P=0;for(let W=0;W<B-1;W++)for(let $=0;$<B-1;$++){const Z=W*B+$,w=Z+1,re=Z+B,te=re+1,xe=I[Z*3+1],oe=I[w*3+1],Ce=I[re*3+1],Ne=I[te*3+1];Math.abs(xe-Ne)<=Math.abs(oe-Ce)?(C[P++]=Z,C[P++]=re,C[P++]=te,C[P++]=Z,C[P++]=te,C[P++]=w):(C[P++]=Z,C[P++]=re,C[P++]=w,C[P++]=w,C[P++]=re,C[P++]=te)}return C},p=(F,I,B,C,P)=>{for(let Z=0;Z<4;Z++)P.ratio[Z]>1&&XS(B,C,P.lod.v,P.ratio[Z],Au[Z]);const W=new Et;W.setAttribute("position",new st(B,3)),W.setAttribute("normal",new st(C,3)),W.setIndex(new st(M(P.lod,B),1)),W.computeBoundingSphere();const $=new xt(W,s);return $.position.set(F*vt,0,I*vt),{cx:F,cz:I,mesh:$,lod:P.lod,sig:P.sig,ratio:P.ratio}},m=new Float64Array(pr[0].g*pr[0].g);function x(F,I){const B=k(F,I),C=B.lod,P=new Float32Array(C.v*C.v*3),W=new Float32Array(C.v*C.v*3);for(let $=0;$<C.g;$++)f(C,$,m,F*vt,I*vt);for(let $=0;$<C.v;$++)g(C,$,m,P,W);return p(F,I,P,W,B)}function v(F,I){const B=k(F,I),C=B.lod,P=new Float64Array(C.g*C.g),W=new Float32Array(C.v*C.v*3),$=new Float32Array(C.v*C.v*3);let Z=0;const w=re=>{for(let te=0;te<re&&Z<C.rows;te++,Z++)Z<C.g?f(C,Z,P,F*vt,I*vt):g(C,Z-C.g,P,W,$);return Z>=C.rows};return{cx:F,cz:I,sig:B.sig,step:w,done:()=>Z>=C.rows,finish:()=>p(F,I,W,$,B)}}let S=null,D=null;const y=Number(new URLSearchParams(location.search).get("mergelevel")??2),A=new Map;let b=!1;function R(){b=!1;for(const[,I]of A)t.remove(I),I.geometry.dispose();A.clear();const F=new Map;for(const I of r.values()){if(I.lod.level<y){I.mesh.visible=!0;continue}I.mesh.visible=!1;const B=`${I.lod.level}:${I.cx>=((c==null?void 0:c.cx)??0)?1:0}${I.cz>=((c==null?void 0:c.cz)??0)?1:0}`;(F.get(B)??F.set(B,[]).get(B)).push(I)}for(const[I,B]of F){let C=0,P=0;for(const oe of B)C+=oe.mesh.geometry.attributes.position.count,P+=oe.mesh.geometry.getIndex().count;const W=new Float32Array(C*3),$=new Float32Array(C*3),Z=C>65535?new Uint32Array(P):new Uint16Array(P);let w=0,re=0;for(const oe of B){const Ce=oe.mesh.geometry.attributes.position,Ne=oe.mesh.geometry.attributes.normal,De=oe.mesh.geometry.getIndex(),V=oe.cx*vt,L=oe.cz*vt;for(let ae=0;ae<Ce.count;ae++)W[(w+ae)*3]=Ce.getX(ae)+V,W[(w+ae)*3+1]=Ce.getY(ae),W[(w+ae)*3+2]=Ce.getZ(ae)+L,$[(w+ae)*3]=Ne.getX(ae),$[(w+ae)*3+1]=Ne.getY(ae),$[(w+ae)*3+2]=Ne.getZ(ae);for(let ae=0;ae<De.count;ae++)Z[re+ae]=w+De.getX(ae);w+=Ce.count,re+=De.count}const te=new Et;te.setAttribute("position",new st(W,3)),te.setAttribute("normal",new st($,3)),te.setIndex(new st(Z,1)),te.computeBoundingSphere();const xe=new xt(te,s);xe.name=`chunk-batch-${I}`,A.set(I,xe),t.add(xe)}}const E=F=>{r.set(Vn(F.cx,F.cz),F),t.add(F.mesh),F.lod.level>=y&&(F.mesh.visible=!1,b=!0)};function T(F,I){t.remove(I.mesh),I.mesh.geometry.dispose(),r.delete(F),I.lod.level>=y&&(b=!0)}const O=(F,I)=>{if(!c)return 0;const B=Math.max(Math.abs(F-c.cx),Math.abs(I-c.cz)),C=l-$s[1];let P=0;for(let W=1;W<$s.length;W++)B>=$s[W]+C&&(P=W);return P};function k(F,I){const B=O(F,I),C=[O(F+1,I),O(F-1,I),O(F,I+1),O(F,I-1)],P=C.map(W=>W>B?Mi[W]/Mi[B]:1);return{lod:pr[B],sig:B*16+C[0]*8+C[1]*4+C[2]*2+C[3],ratio:P}}function K(){if(!c)return;const F=new Set,I=[];for(let B=-a;B<=a;B++)for(let C=-a;C<=a;C++){const P=c.cx+C,W=c.cz+B,$=Vn(P,W);F.add($);const Z=r.get($);Z&&Z.sig!==k(P,W).sig&&T($,Z),r.has($)||I.push({cx:P,cz:W,d:C*C+B*B})}for(const[B,C]of r)F.has(B)||T(B,C);S&&(!F.has(Vn(S.cx,S.cz))||S.sig!==k(S.cx,S.cz).sig)&&(S=null),I.sort((B,C)=>B.d-C.d),o=I}function q(F,I){if(!c)return!0;const B=_.CHUNK_ANCHOR_MARGIN_M;return F<c.cx*vt-B||F>(c.cx+1)*vt+B||I<c.cz*vt-B||I>(c.cz+1)*vt+B}const H=()=>c!==null&&o.length===0&&S===null&&D===null,Q=()=>H()?Promise.resolve():new Promise(F=>h.push(F));function Y(F){a=F,K()}async function j(F){Y(F),await Q();const I=[],B=(C,P,W)=>C.mesh.geometry.attributes.position.getY(W*C.lod.v+P);for(const C of r.values()){const P=r.get(Vn(C.cx+1,C.cz)),W=r.get(Vn(C.cx,C.cz+1));for(let $=0;$<=ol;$++){if(P){const Z=Math.max(C.lod.step,P.lod.step),w=Math.round($*(vt/Z)/ol)*Z,re=(C.cx+1)*vt,te=C.cz*vt+w;I.push({x:re,z:te,ya:B(C,C.lod.v-1,w/C.lod.step),yb:B(P,0,w/P.lod.step),q:i.heightAt(re,te)})}if(W){const Z=Math.max(C.lod.step,W.lod.step),w=Math.round($*(vt/Z)/ol)*Z,re=C.cx*vt+w,te=(C.cz+1)*vt;I.push({x:re,z:te,ya:B(C,w/C.lod.step,C.lod.v-1),yb:B(W,w/W.lod.step,0),q:i.heightAt(re,te)})}}}return I}function fe(){for(const[I,B]of[...r])T(I,B);S=null,D=null,K();const F=u.centre();if(u.rebuild(F.x,F.z),c){const I=Vn(c.cx,c.cz);o=o.filter(B=>Vn(B.cx,B.cz)!==I),E(x(c.cx,c.cz))}}function X(){const F=pr.map(()=>0);let I=0,B=0,C=0,P=0;const W=pr[0].v-1;for(const $ of r.values()){F[$.lod.level]++,I+=($.lod.v-1)*($.lod.v-1)*2,B+=W*W*2;const Z=$.mesh.geometry.attributes.position;for(let w=0;w<4;w++){const re=$.ratio[w];if(re<=1)continue;C++;const te=Au[w],xe=$.lod.v;for(let oe=0;oe+re<=xe-1;oe+=re){const Ce=Z.getY(te(oe,xe)),Ne=Z.getY(te(oe+re,xe));for(let De=1;De<re;De++){const V=De/re;P=Math.max(P,Math.abs(Z.getY(te(oe+De,xe))-Math.fround(Ce*(1-V)+Ne*V)))}}}}return{fineRings:l,coarseMult:Mi[1],levels:F,triangles:I,uniformTriangles:B,stitchedEdges:C,maxChordDevM:P}}function se(F){const I=F.player;if(q(I.x,I.z)){c={cx:Math.floor(I.x/vt),cz:Math.floor(I.z/vt)},K();const C=Vn(c.cx,c.cz);r.has(C)||(o=o.filter(P=>Vn(P.cx,P.cz)!==C),E(x(c.cx,c.cz)))}const B=u.centre();!D&&Math.hypot(I.x-B.x,I.z-B.z)>_.FAR_SHELL_RECENTER_M&&(D=u.beginRebuild(I.x,I.z))}function ie(F){const I=performance.now()+_.CHUNK_BUILD_BUDGET_MS,B=_.SLICED_JOB_ROWS_PER_STEP;let C=0;for(;F||performance.now()<I;){if(!S&&(F||C<_.CHUNK_BUILDS_PER_FRAME)&&o.length>0){const P=o.shift();S=v(P.cx,P.cz),C++}if(S)S.step(B)&&(E(S.finish()),S=null);else if(D)D.step(B)&&(D=null);else break}if(H()&&b&&R(),H()&&h.length>0)for(const P of h.splice(0))P()}return{update(F){se(F),ie(!1)},drainNow(F){se(F),ie(!0)},edgeSamples:j,setLoadRadius:Y,setLodFineRings(F){l=F,fe()},setFarShellVisible(F){u.mesh.visible=F},drained:H,rebuildAll:fe,lodStats:X,material:()=>s,stats:()=>({loadRadius:a,chunksLoaded:r.size,chunksQueued:o.length+(S?1:0),farShellVisible:u.mesh.visible,farShellOuterM:_.FAR_SHELL_OUTER_M,waterPlanes:d.length}),dispose(){for(const[,F]of A)t.remove(F),F.geometry.dispose();A.clear();for(const[F,I]of r)T(F,I);o=[],S=null,D=null;for(const F of h.splice(0))F();t.remove(u.mesh,...d),u.dispose();for(const F of d)F.geometry.dispose(),F.material.dispose();s.dispose()}}}function xr(n){return n=(n^n>>>16)>>>0,n=Math.imul(n,2246822507),n=(n^n>>>13)>>>0,n=Math.imul(n,3266489909),(n^n>>>16)>>>0}function YS(n,e){let t=(n^2166136261)>>>0;for(let i=0;i<e.length;i++)t=Math.imul(t^e.charCodeAt(i),16777619)>>>0;return xr(t)}function Ki(n){const e=Math.trunc(n)>>>0;let t=xr(e^2654435769),i=xr(t^2246822507),s=xr(i^3266489909),r=xr(s^668265263);const o=()=>{let a=t+i|0;return t=i^i>>>9,i=s+(s<<3)|0,s=s<<21|s>>>11,r=r+1|0,a=a+r|0,s=s+a|0,(a>>>0)/4294967296};for(let a=0;a<12;a++)o();return{seed:e,next:o,int:a=>Math.floor(o()*a),range:(a,l)=>a+o()*(l-a),fork:a=>Ki(YS(e,a))}}const ys=10,oi=_.DRESSING_CELL_M,Ts=_.ROCK_COBBLE_CANDIDATES,Ii=_.DRESSING_CANDIDATES_PER_CELL,Tr=Math.PI*2,br=new le(0,1,0),qS=new Set([60,70,80,90,95]),Tf=new Set([40,50,80,90,95]),mi=n=>n<0?0:n>1?1:n,Wn=n=>n-Math.floor(n),Ks=(n,e,t)=>{const i=mi((t-n)/(e-n||1e-6));return i*i*(3-2*i)},go=(n,e)=>{let t=Math.imul(n^2654435769,2246822507)^Math.imul(e^668265263,3266489909);return t=Math.imul(t^t>>>15,739982445),((t^t>>>16)>>>0)/4294967296},Ru=(n,e)=>{const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r);return(go(t,i)*(1-o)+go(t+1,i)*o)*(1-a)+(go(t,i+1)*(1-o)+go(t+1,i+1)*o)*a};function bf(n,e){const t=_.DRESSING_CLUMP_WAVE_M,i=.66*Ru(n/t,e/t)+.34*Ru(n/(t*.41)+13.7,e/(t*.41)-7.1);return Math.pow(i,_.DRESSING_CLUMP_POW)}function ZS(n,e,t,i,s){if(Tf.has(n))return 0;let r=n===60?e>=_.SCREE_MIN_SLOPE_DEG?_.ROCK_P_BARE_STEEP:_.ROCK_P_BARE:n===70?_.ROCK_P_SNOW:n===10?_.ROCK_P_FOREST:_.ROCK_P_GRASS;return r*=1+_.ROCK_SLOPE_GAIN*Ks(_.ROCK_SLOPE_LO_DEG,_.ROCK_SLOPE_HI_DEG,e),r*=1+_.ROCK_FAN_GAIN*s,r*=1+_.ROCK_ALT_GAIN*Ks(_.TERRAIN_BAND_HIGH_M,_.TERRAIN_BAND_SUMMIT_M+60,t),r*=_.DRESSING_CLUMP_MIN+(_.DRESSING_CLUMP_MAX-_.DRESSING_CLUMP_MIN)*i,Math.min(.97,r)}function jS(n,e,t,i){const s=n===20;if(qS.has(n)||e>=_.DRESSING_MAX_SLOPE_DEG||n!==10&&!s)return{p:0,shrub:s};let r=s?_.TREE_P_CLASS20:_.TREE_P_CLASS10;return r*=1-(1-_.TREE_TREELINE_FLOOR)*Ks(_.TREE_TREELINE_LO_M,_.TREE_TREELINE_HI_M,t),r*=_.TREE_CLUMP_MIN+(_.TREE_CLUMP_MAX-_.TREE_CLUMP_MIN)*i,{p:Math.min(.97,r),shrub:s}}const al=new le,Hs=new le,yu=new le,ea=new Un,wf=new Un,ta=new le,na=new le;function Tu(n,e,t,i,s,r,o,a,l,c,h,u,d=1){const f=r/n.height,g=(c-.5)*_.DRESSING_STRETCH;al.set(s.x,s.y,s.z);const M=i-d*n.footR*f*Math.tan(Math.acos(mi(s.y)));Hs.copy(br).lerp(al,h).normalize(),yu.set(Math.cos(a*Tr),0,Math.sin(a*Tr)),Hs.applyAxisAngle(yu,(l-.5)*2*_.DRESSING_TILT_MAX_DEG*(Math.PI/180)).normalize(),ea.setFromUnitVectors(br,Hs).multiply(wf.setFromAxisAngle(br,o*Tr));const p=Math.sqrt(Math.max(0,1-Math.pow(mi(Hs.dot(al)),2)));return ta.set(e,M-d*n.footR*f*p-u*r-n.baseY*f,t),na.set(f*(1+g),f,f*(1-g)),new ot().compose(ta,ea,na)}function QS(n,e,t,i,s,r,o){const a=(o-.5)*_.DRESSING_STRETCH;return Hs.set(i.x,i.y,i.z).normalize(),ea.setFromUnitVectors(br,Hs).multiply(wf.setFromAxisAngle(br,r*Tr)),ta.set(n,t,e),na.set(s*(1+a),s,s*(1-a)),new ot().compose(ta,ea,na)}function Cf(n,e,t,i){const s=`${e},${t}`,r=n.rockRng.fork(s),o=n.plantRng.fork(s),a=new Float64Array((Ts+2*Ii)*ys);for(let b=0;b<a.length;b++)a[b]=b<(Ts+Ii)*ys?r.next():o.next();const l=e*oi+oi*.5,c=t*oi+oi*.5,h=n.cover.classAt(l,c),u={cls:h,slopeDeg:-1,rocks:0,plants:0},d=!Tf.has(h);if(!d&&!(h===10||h===20)||n.query.waterDepthAt(l,c)>0)return u;const g=n.query.normalAt(l,c),M=n.query.seatNormalAt(l,c),p=n.query.heightAt(l,c);u.slopeDeg=Math.acos(mi(g.y))*180/Math.PI;const m=-g.x/Math.max(g.y,1e-4),x=-g.z/Math.max(g.y,1e-4),v=bf(l,c);let S=0;if(d){const b=Math.hypot(m,x);if(b>1e-4){const R=_.ROCK_FAN_PROBE_M/b,E=n.query.normalAt(l+m*R,c+x*R);S=Ks(_.ROCK_FAN_LO_DEG,_.ROCK_FAN_HI_DEG,Math.acos(mi(E.y))*180/Math.PI)}}const D=d?ZS(h,u.slopeDeg,p,v,S):0,y=jS(h,u.slopeDeg,p,v),A=[{rock:!0,plane:!0,base:0,k:Ts,p:d?D*_.ROCK_COBBLE_P_MUL:0,list:n.cobbles,far2:n.cobblesFar,nearM:_.ROCK_COBBLE_NEAR_M,lo:_.ROCK_COBBLE_MIN_M,hi:_.ROCK_COBBLE_MAX_M,skew:1.7,far:_.ROCK_COBBLE_FAR_M,minFrac:_.ROCK_COBBLE_REACH_FRAC,ref:_.ROCK_COBBLE_REF_SIZE_M,fade:_.DRESSING_FADE_FRAC,lod:[]},{rock:!0,plane:!1,base:Ts*ys,k:Ii,p:D,list:n.rocks,far2:n.rocksFar,nearM:_.ROCK_BOX_NEAR_M,lo:_.ROCK_SIZE_MIN_M,hi:_.ROCK_SIZE_MAX_M,skew:_.ROCK_SIZE_SKEW,far:_.DRESSING_FAR_M,minFrac:_.DRESSING_MIN_REACH_FRAC,ref:_.DRESSING_REF_SIZE_M,fade:_.DRESSING_FADE_FRAC,lod:[]},y.shrub?{rock:!1,plane:!1,base:(Ts+Ii)*ys,k:Ii,p:y.p,list:n.shrubs,far2:[],nearM:0,lo:_.SHRUB_SIZE_MIN_M,hi:_.SHRUB_SIZE_MAX_M,skew:1.4,far:_.TREE_FAR_M,minFrac:_.DRESSING_MIN_REACH_FRAC,ref:_.DRESSING_REF_SIZE_M,fade:1,lod:[]}:{rock:!1,plane:!1,base:(Ts+Ii)*ys,k:Ii,p:y.p,list:n.trees,far2:[],nearM:0,lo:_.TREE_SIZE_MIN_M,hi:_.TREE_SIZE_MAX_M,skew:1.6,far:_.TREE_FAR_M,minFrac:_.DRESSING_MIN_REACH_FRAC,ref:_.DRESSING_REF_SIZE_M,fade:1,lod:n.treesFar}];for(const b of A)if(!(b.p<=0||b.list.length===0))for(let R=0;R<b.k;R++){const E=b.base+R*ys,T=a[E]*oi-oi*.5,O=a[E+1]*oi-oi*.5,k=l+T,K=c+O,q=b.lo+(b.hi-b.lo)*Math.pow(a[E+4],b.skew),H=Math.hypot(k-n.ax,K-n.az),Q=b.rock?q>=_.ROCK_POLY_MIN_M&&H<=_.ROCK_POLY_FAR_M&&n.big.length?n.big:H>b.nearM&&b.far2.length?b.far2:b.list:H>_.TREE_NEAR_M&&b.lod.length?b.lod:b.list,Y=Q[Math.min(Q.length-1,Math.floor(a[E+2]*Q.length))],j=n.kit[Y],fe=q*j.sizeMul,X=b.far*mi(Math.max(b.minFrac,fe/b.ref)),se=b.p*(1-Ks(X*b.fade,X,H));if(H>X||a[E+8]>=se)continue;const ie=b.p*(1-Ks(X*b.fade,X,H+_.DRESSING_FADE_IN_M)),F=se-ie,I=F>1e-6?mi((se-a[E+8])/F):1;if(!b.plane&&n.query.waterDepthAt(k,K)>0)continue;const B=n.query.heightAt(k,K),C=b.plane?M:n.query.seatNormalAt(k,K),P=Tu(j,k,K,B,C,fe,a[E+5],a[E+6],b.rock?a[E+7]:.5,a[E+3],b.rock?_.ROCK_NORMAL_ALIGN:_.TREE_NORMAL_ALIGN,b.rock?_.ROCK_BURY_FRAC:_.TREE_BURY_FRAC);if(i.push({entry:Y,m:P,tint:1+_.DRESSING_TINT_JITTER*(a[E+9]-.5),fade:I}),b.rock?u.rocks++:u.plants++,b.rock&&H<=_.ROCK_CONTACT_FAR_M&&n.contacts.length>0){const W=fe/j.height,$=mi(C.y),Z=fe*(1-_.ROCK_BURY_FRAC)-j.footR*W*(Math.sqrt(Math.max(0,1-$*$))/Math.max($,1e-4));if(Z>=_.ROCK_CONTACT_PROUD_MIN_M){const w=n.contacts[Math.floor(Wn(a[E+2]*3.9)*n.contacts.length)%n.contacts.length],re=j.wideR*W*_.ROCK_CONTACT_RADIUS_MUL+Z*_.ROCK_CONTACT_PROUD_MUL;i.push({entry:w,m:QS(k,K,B,C,re,a[E+5],a[E+3]),tint:1+_.DRESSING_TINT_JITTER*(a[E+9]-.5),fade:I})}}if(b.rock&&!b.plane&&fe>=_.ROCK_SKIRT_MIN_M&&H<=_.ROCK_SKIRT_FAR_M&&n.cobbles.length>0){const W=H>_.ROCK_COBBLE_NEAR_M&&n.cobblesFar.length?n.cobblesFar:n.cobbles,$=j.footR*(fe/j.height);for(let Z=0;Z<_.ROCK_SKIRT_N;Z++){const w=(a[E+5]+.37*Z+.11)*Tr,re=$*(1+_.ROCK_SKIRT_SPREAD*Wn(a[E+6]*7.3+Z*.61)),te=k+Math.cos(w)*re,xe=K+Math.sin(w)*re;if(n.query.waterDepthAt(te,xe)>0)continue;const oe=fe*(_.ROCK_SKIRT_SIZE_MIN+(_.ROCK_SKIRT_SIZE_MAX-_.ROCK_SKIRT_SIZE_MIN)*Wn(a[E+7]*3.1+Z*.53)),Ce=W[Math.floor(Wn(a[E+2]*5.7+Z*.29)*W.length)%W.length],Ne=n.query.heightAt(te,xe);i.push({entry:Ce,m:Tu(n.kit[Ce],te,xe,Ne,M,oe,Wn(a[E+5]*11.3+Z*.71),Wn(a[E+6]*2.7+Z*.19),Wn(a[E+7]*5.1+Z*.43),Wn(a[E+3]*3.7+Z*.37),_.ROCK_NORMAL_ALIGN,_.ROCK_BURY_FRAC),tint:1+_.DRESSING_TINT_JITTER*(Wn(a[E+9]*4.3+Z*.27)-.5),fade:I}),u.rocks++}}}return u}const zi=Math.PI*2,ll=new le(0,1,0),Uo=n=>n<0?0:n>1?1:n,_i=(n,e,t)=>{const i=Uo((t-n)/(e-n||1e-6));return i*i*(3-2*i)},ai=n=>n-Math.floor(n),Ui=(n,e,t,i,s)=>{const r=_.DRESSING_CLUMP_WAVE_M/t;return Math.pow(bf(n*r+i,e*r+s),1/_.DRESSING_CLUMP_POW)};function JS(n,e,t,i,s,r){const o=[];for(let a=0;a<e;a++){const l=a/e*zi+n.next()*(zi/e),c=t*Math.sqrt(n.next());o.push({yaw:l,ox:Math.cos(l)*c,oz:Math.sin(l)*c,h:r+(1-r)*n.next(),w:(_.GROUNDCOVER_BLADE_W_MIN+_.GROUNDCOVER_BLADE_W_SPAN*Math.pow(n.next(),_.GROUNDCOVER_BLADE_W_SKEW))*i,arc:s*(_.GROUNDCOVER_ARC_FLOOR+(1-_.GROUNDCOVER_ARC_FLOOR)*n.next()),skew:.1*n.next(),shear:_.GROUNDCOVER_BLADE_TIP_SHEAR*(2*n.next()-1)})}return o}const eA=[{keep:1,wMul:1},{keep:_.GROUNDCOVER_MID_KEEP,wMul:_.GROUNDCOVER_MID_W_MUL},{keep:_.GROUNDCOVER_FAR_KEEP,wMul:_.GROUNDCOVER_FAR_W_MUL},{keep:_.GROUNDCOVER_DIST_KEEP,wMul:_.GROUNDCOVER_DIST_W_MUL},{keep:_.GROUNDCOVER_BLADES,wMul:_.GROUNDCOVER_HAZE_W_MUL}];function tA(n,e,t,i,s,r,o){const a=eA[e],l=e===0?n:n.filter((m,x)=>x%a.keep===0).map(m=>({...m,w:m.w*a.wMul})),c=[],h=[],u=[],d=new Ve(t),f=new Ve(i),g=new Ve(o),M=new Ve;for(let m=0;m<l.length;m++){const x=l[m],v=Math.cos(x.yaw),S=Math.sin(x.yaw),D=x.arc*x.h,y=x.h*(1-.22*x.arc*x.arc),A=v*.8,b=S*.8,R=Math.hypot(A,1,b),E=1+s*(m*.6180339887%1-.5),T=(O,k,K,q)=>{c.push(x.ox+v*O-S*K,k,x.oz+S*O+v*K),h.push(A/R,1/R,b/R),M.copy(d).lerp(f,q*q*(3-2*q)),u.push(M.r*E,M.g*E,M.b*E)};T(0,x.skew*x.h,-x.w,x.skew),T(0,0,x.w,0),T(D,y,x.shear*x.w,1)}for(let m=0;m<r&&m<l.length;m++){const x=l[m],v=Math.cos(x.yaw),S=Math.sin(x.yaw),D=x.ox+v*x.arc*x.h,y=x.oz+S*x.arc*x.h,A=x.h*(1-.22*x.arc*x.arc),b=_.GROUNDCOVER_PETAL_R;for(let R=0;R<2;R++){const E=x.yaw+R*(Math.PI/2),T=Math.cos(E)*b,O=Math.sin(E)*b;c.push(D-T,A,y-O,D+T,A,y+O,D,A+b*1.3,y);for(let k=0;k<3;k++)h.push(0,1,0),u.push(g.r,g.g,g.b)}}const p=new Et;return p.setAttribute("position",new st(new Float32Array(c),3)),p.setAttribute("normal",new st(new Float32Array(h),3)),p.setAttribute("color",new st(new Float32Array(u),3)),p}const Fo=256,Nf=[],Lt=[{id:"grass.fine",root:4739120,tip:12895876,blades:12,spread:.42,wMul:1,arc:.55,hMin:.42,sizeMin:.14,sizeMax:.42,skew:1.2,tiers:5,maxM:999,variants:2,petals:0,petalCol:0},{id:"grass.coarse",root:4541482,tip:11975290,blades:12,spread:.55,wMul:1.05,arc:.78,hMin:.34,sizeMin:.22,sizeMax:.62,skew:1.35,tiers:5,maxM:999,variants:2,petals:0,petalCol:0},{id:"grass.dry",root:5788983,tip:14077337,blades:11,spread:.48,wMul:1.15,arc:.82,hMin:.38,sizeMin:.18,sizeMax:.5,skew:1.25,tiers:5,maxM:999,variants:2,petals:0,petalCol:0},{id:"heather",root:3946022,tip:10521180,blades:14,spread:.5,wMul:1.05,arc:.95,hMin:.5,sizeMin:.12,sizeMax:.3,skew:1,tiers:3,maxM:_.GROUNDCOVER_MID_BAND_M,variants:1,petals:0,petalCol:0},{id:"sedge",root:3556394,tip:8822866,blades:9,spread:.2,wMul:.85,arc:.26,hMin:.55,sizeMin:.3,sizeMax:.7,skew:1.1,tiers:2,maxM:_.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"moss",root:3688230,tip:8690766,blades:10,spread:.95,wMul:2.3,arc:1.35,hMin:.6,sizeMin:.07,sizeMax:.17,skew:1,tiers:1,maxM:10,variants:2,petals:0,petalCol:0},{id:"weed",root:4345386,tip:10399334,blades:6,spread:.5,wMul:3.2,arc:1.25,hMin:.55,sizeMin:.12,sizeMax:.32,skew:1,tiers:1,maxM:14,variants:2,petals:0,petalCol:0},{id:"bracken",root:4738606,tip:11319410,blades:5,spread:.6,wMul:3.4,arc:1.15,hMin:.55,sizeMin:.2,sizeMax:.48,skew:1.1,tiers:2,maxM:_.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"flower.white",root:4345388,tip:11056236,blades:7,spread:.4,wMul:1.1,arc:.4,hMin:.45,sizeMin:.12,sizeMax:.26,skew:1,tiers:1,maxM:14,variants:1,petals:3,petalCol:15263442},{id:"flower.gold",root:4345388,tip:11056236,blades:7,spread:.4,wMul:1.1,arc:.4,hMin:.45,sizeMin:.12,sizeMax:.26,skew:1,tiers:1,maxM:14,variants:1,petals:3,petalCol:14201404},{id:"litter",root:5913630,tip:10250796,blades:7,spread:1,wMul:3,arc:1.45,hMin:.8,sizeMin:.1,sizeMax:.24,skew:1,tiers:1,maxM:14,variants:2,petals:0,petalCol:0},{id:"bracken.rust",root:5913116,tip:13140538,blades:5,spread:.6,wMul:3.4,arc:1.15,hMin:.55,sizeMin:.2,sizeMax:.48,skew:1.1,tiers:2,maxM:_.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"grass.dead",root:7038016,tip:14998666,blades:11,spread:.5,wMul:1.15,arc:.9,hMin:.34,sizeMin:.18,sizeMax:.5,skew:1.25,tiers:5,maxM:999,variants:1,petals:0,petalCol:0}];for(const n of Lt){const e=new Float64Array(Fo);for(let t=0;t<Fo;t++)e[t]=n.sizeMin+(n.sizeMax-n.sizeMin)*Math.pow(t/(Fo-1),n.skew);Nf.push(e)}function nA(n){const e=[];for(let t=0;t<Lt.length;t++){const i=Lt[t];for(let s=0;s<i.tiers;s++){const r=s===0?i.variants:1;for(let o=0;o<r;o++){const a=JS(n.fork(`${i.id}.${o}`),i.blades,i.spread,i.wMul,i.arc,i.hMin),l=tA(a,s,i.root,i.tip,.26,s===0?i.petals:Math.min(1,i.petals),i.petalCol);e.push({id:`gc.${i.id}.${o}.t${s}`,sp:t,tier:s,geometry:l,tris:l.attributes.position.count/3})}}}return e}function iA(n){const e=da(n),t={uWind:{value:new it(0,0,0,0)}},i={uSeasonTint:{value:new Ve(16777215)}},s=new Bi({color:16777215,vertexColors:!0,side:An,fog:!1}),r=_.GROUNDCOVER_FULL_M.toFixed(1),o=_.GROUNDCOVER_FALLOFF_POW.toFixed(3),a=(_.GROUNDCOVER_FAR_M*_.GROUNDCOVER_FADE_FRAC).toFixed(2),l=_.GROUNDCOVER_FAR_M.toFixed(1),c=_.GROUNDCOVER_FADE_BAND.toFixed(4);return s.onBeforeCompile=h=>{fa(h,e),Object.assign(h.uniforms,t,i),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
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
  normal *= faceDirection; // un-flip: both faces of a blade are the same foliage`)},s.userData.uniforms=i,{material:s,wind:t}}const mc=2,Us=[{cellM:_.GROUNDCOVER_NEAR_CELL_M,k:_.GROUNDCOVER_NEAR_CANDIDATES,minM:0,maxM:_.GROUNDCOVER_NEAR_BAND_M,label:"near"},{cellM:_.GROUNDCOVER_MID_CELL_M,k:_.GROUNDCOVER_MID_CANDIDATES,minM:_.GROUNDCOVER_NEAR_BAND_M,maxM:_.GROUNDCOVER_MID_BAND_M,label:"mid"},{cellM:_.GROUNDCOVER_FAR_CELL_M,k:_.GROUNDCOVER_FAR_CANDIDATES,minM:_.GROUNDCOVER_MID_BAND_M,maxM:_.GROUNDCOVER_FAR_BAND_M,label:"far"},{cellM:_.GROUNDCOVER_HAZE_CELL_M,k:_.GROUNDCOVER_HAZE_CANDIDATES,minM:_.GROUNDCOVER_FAR_BAND_M,maxM:_.GROUNDCOVER_FAR_M,label:"haze"}],sA=Math.max(...Us.map(n=>n.k)),mr=new Float64Array(sA*mc),rA=new Set([70,80,90,95]),_c=.25,oA=(()=>{const n=Math.ceil(_.GROUNDCOVER_FAR_M/_c)+2,e=new Float64Array(n);for(let t=0;t<n;t++){const i=t*_c,s=i<=_.GROUNDCOVER_FULL_M?1:Math.pow(_.GROUNDCOVER_FULL_M/i,_.GROUNDCOVER_FALLOFF_POW);e[t]=s*(1-_i(_.GROUNDCOVER_FAR_M*_.GROUNDCOVER_FADE_FRAC,_.GROUNDCOVER_FAR_M,i))}return e})(),bu=n=>oA[n/_c|0]??0;function aA(n){switch(n){case 10:return _.GROUNDCOVER_P_FOREST;case 20:return _.GROUNDCOVER_P_SHRUB;case 30:return 1;case 40:return 1;case 50:return _.GROUNDCOVER_P_BARE;case 60:return _.GROUNDCOVER_P_BARE;default:return .7}}function lA(n,e,t,i,s,r,o,a,l){const c=Ui(o,a,_.GROUNDCOVER_SWARD_WAVE_M,41.3,-18.7),h=Ui(o,a,_.GROUNDCOVER_SWARD_WAVE_M*2.7,-92.1,63.4),u=Ui(o,a,_.GROUNDCOVER_SWARD_WAVE_M*3.7,155.9,27.2),d=Math.pow(Ui(o,a,_.GROUNDCOVER_FLOWER_WAVE_M,-211.4,178.3),_.GROUNDCOVER_FLOWER_POW),f=Math.pow(Ui(o,a,_.GROUNDCOVER_FLOWER_WAVE_M*1.3,307.6,-244.9),_.GROUNDCOVER_FLOWER_POW),g=_i(_.GROUNDCOVER_ALT_LO_M-180,_.GROUNDCOVER_ALT_HI_M,i),M=_i(_.GROUNDCOVER_SLOPE_LO_DEG-8,_.GROUNDCOVER_SLOPE_HI_DEG,t),p=1-M;n[0]=1.15*(.35+c)*(1-.55*g),n[1]=1*(.2+1.5*h)*(.5+.8*M+.5*g),n[2]=.85*(.1+1.7*u)*(.45+1.1*g)*(e===60||e===50?2.6:1),n[3]=(e===20?4.5:.35*g)*(.3+1.4*h),n[4]=_.GROUNDCOVER_SEDGE_W*s*s*p*(1-g),n[5]=2.6*s*(.35+.65*r)*p,n[6]=(.5+2.2*M)*(e===60||e===50?2.2:.7),n[7]=(e===10?2.6:.55)*p*(1-g)*(.2+h),n[8]=_.GROUNDCOVER_FLOWER_W*d*p*(1-.7*g),n[9]=_.GROUNDCOVER_FLOWER_W*f*p*(1-.7*g),n[10]=(e===10?3:.55)*p*(1-g)*(.2+h),n[11]=n[7],n[12]=n[2];for(let m=0;m<Lt.length;m++)n[m]*=l[m]}const wu=new le,Cu=new le,Nu=new Un,Du=new Un,cl=new Un,hl=new le,Mo=new le,Iu=new le,Lu=new ot,ul=new Float64Array(Lt.length),Pu=new Float64Array(Lt.length),Ou=new Int32Array(Lt.length);function cA(n,e,t,i){const s=e.cellM,r=t*s+s*.5,o=i*s+s*.5,a=n.cover.classAt(r,o),l={cls:a,slopeDeg:-1,n:0};if(rA.has(a)||n.query.waterDepthAt(r,o)>0)return l;const c=n.query.normalAt(r,o),h=n.query.heightAt(r,o),u=Math.acos(Uo(c.y))*180/Math.PI;l.slopeDeg=u;const d=Ui(r,o,_.GROUNDCOVER_PATCH_WAVE_M,211.7,-133.1),f=1-_.GROUNDCOVER_PATCH_DEPTH*(1-d),g=_.GROUNDCOVER_PATCH_H_MIN+(1-_.GROUNDCOVER_PATCH_H_MIN)*d;let M=_.GROUNDCOVER_DENSITY_M2*aA(a)*f;if(M*=1-_.GROUNDCOVER_SLOPE_THIN*_i(_.GROUNDCOVER_SLOPE_LO_DEG,_.GROUNDCOVER_SLOPE_HI_DEG,u),M*=1-uS(u),M*=1-(1-_.GROUNDCOVER_ALT_FLOOR)*_i(_.GROUNDCOVER_ALT_LO_M,_.GROUNDCOVER_ALT_HI_M,h),M<=0)return l;const p=n.seasonSnow>0?n.seasonSnow*dS(u,c.x,c.z,h):0;if(p>=_.SNOW_BURY_SKIP)return l;const m=1-p*_.SNOW_BURY_FRAC,x=-c.x/Math.max(c.y,1e-4),v=-c.z/Math.max(c.y,1e-4),S=Math.sqrt(x*x+v*v),D=1-_i(_.GROUNDCOVER_DAMP_SLOPE_DEG,_.GROUNDCOVER_DAMP_SLOPE_DEG*3,u);let y=D*_.GROUNDCOVER_DAMP_BASE;if(S>1e-4){const ie=_.GROUNDCOVER_DAMP_PROBE_M/S,F=-x*ie,I=-v*ie,B=n.query.heightAt(r+F,o+I);y+=D*_.GROUNDCOVER_DAMP_CONCAVE*_i(-.5,2.5,B-(h+x*F+v*I)),n.query.waterDepthAt(r+F,o+I)>0&&(y+=_.GROUNDCOVER_DAMP_SHORE)}y=Uo(y);const A=Uo(-c.z/Math.max(.001,Math.sqrt(Math.max(0,1-c.y*c.y))))*_i(4,18,u);lA(ul,a,u,h,y,A,r,o,n.seasonW);const b=Math.sqrt((r-n.ax)*(r-n.ax)+(o-n.az)*(o-n.az));let R=0,E=0;for(let ie=0;ie<Lt.length;ie++)b>Lt[ie].maxM||ul[ie]<=0||(E+=ul[ie],Pu[R]=E,Ou[R]=ie,R++);if(R===0)return l;const T=Ui(r,o,_.GROUNDCOVER_WIND_WAVE_M,-57.3,88.9);Iu.set(c.x,c.y,c.z),hl.copy(ll).lerp(Iu,_.GROUNDCOVER_NORMAL_ALIGN).normalize(),Mo.set(Math.cos(T*zi*2),0,Math.sin(T*zi*2)),hl.applyAxisAngle(Mo,_.GROUNDCOVER_WIND_LEAN_DEG*(.25+.75*T)*(Math.PI/180)).normalize(),Nu.setFromUnitVectors(ll,hl);const O=n.query.heightAt(r-s*.5,o-s*.5),k=n.query.heightAt(r+s*.5,o-s*.5),K=n.query.heightAt(r-s*.5,o+s*.5),q=n.query.heightAt(r+s*.5,o+s*.5),H=n.query.waterDepthAt(r-s*.5,o-s*.5)>0||n.query.waterDepthAt(r+s*.5,o-s*.5)>0||n.query.waterDepthAt(r-s*.5,o+s*.5)>0||n.query.waterDepthAt(r+s*.5,o+s*.5)>0,Q=n.rng.fork(`${s}.${t},${i}`),Y=e.k*mc;for(let ie=0;ie<Y;ie++)mr[ie]=Q.next();const j=M*(s*s),fe=s*.7072,X=s===_.GROUNDCOVER_NEAR_CELL_M?_.GROUNDCOVER_ACCEPT_MARGIN_M:0,se=bu(Math.max(0,b-fe-X));if(se<=0||j<=0)return l;for(let ie=0;ie<e.k;ie++){const F=ie/j;if(F>=se)break;const I=ie*mc,B=(mr[I]-.5)*s,C=(mr[I+1]-.5)*s,P=r+B,W=o+C,$=P-n.ax,Z=W-n.az,w=Math.sqrt($*$+Z*Z);if(w<e.minM||w>e.maxM||F>=bu(Math.max(0,w-X))||H&&n.query.waterDepthAt(P,W)>0)continue;const re=ai(mr[I]*331.73),te=ai(mr[I]*977.71),xe=ze=>ze<=_.GROUNDCOVER_LOD_MID_M?0:ze<=_.GROUNDCOVER_LOD_FAR_M?1:ze<=_.GROUNDCOVER_LOD_DIST_M?2:ze<=_.GROUNDCOVER_LOD_HAZE_M?3:4,oe=xe(w),Ce=oe<=1?Math.min(oe,xe(Math.max(0,w-_.GROUNDCOVER_TIER_LEAD_M))):oe,Ne=ai(re*3.7)*E;let De=0;for(;De<R-1&&Pu[De]<Ne;)De++;const V=Ou[De],L=Lt[V],ae=n.pick(V,Ce<L.tiers?Ce:L.tiers-1,ai(re*97.3));if(ae<0)continue;const ye=Math.min(_.GROUNDCOVER_DIST_SIZE_MAX,Math.pow(Math.max(1,w/_.GROUNDCOVER_FULL_M),_.GROUNDCOVER_DIST_SIZE_POW)),we=Nf[V][re*(Fo-1)|0]*g*m*ye,Se=(P-r)/s+.5,ke=(W-o)/s+.5,Le=(O*(1-Se)+k*Se)*(1-ke)+(K*(1-Se)+q*Se)*ke;if(cl.copy(Nu).multiply(Du.setFromAxisAngle(ll,te*zi)),Ce===0){const ze=ai(te*7.7)*zi;Mo.set(Math.cos(ze),0,Math.sin(ze)),cl.multiply(Du.setFromAxisAngle(Mo,(ai(re*13.1)-.5)*2*_.GROUNDCOVER_TILT_MAX_DEG*(Math.PI/180)))}const Oe=(ai(te*3.3)-.5)*_.GROUNDCOVER_STRETCH;wu.set(P,Le-_.GROUNDCOVER_BURY_FRAC*we,W),Cu.set(we*(1+Oe),we,we*(1-Oe)),Lu.compose(wu,cl,Cu),n.emit(ae,Lu,1+_.GROUNDCOVER_TINT_JITTER*(ai(re*5.9)-.5),F),l.n++}return l}let Uu=class{constructor(){je(this,"a",2166136261);je(this,"b",16777619)}push(e){const t=e|0;this.a=Math.imul(this.a^t&65535,16777619)>>>0,this.b=Math.imul(this.b^t>>>16,2246822507)>>>0}hex(){return`v1:${(this.a>>>0).toString(16).padStart(8,"0")}${(this.b>>>0).toString(16).padStart(8,"0")}`}};function hA(n,e){const t=nA(Ki(n.seed).fork("groundcover.kit")),{material:i,wind:s}=iA(e),r=_.GROUNDCOVER_MAX_PER_ENTRY,o=t.map(C=>{const P=new bd(C.geometry,i,r);P.name=`groundCover:${C.id}`,P.instanceMatrix.setUsage(tc),P.setColorAt(0,new Ve(1,1,1));const W=new Yo(new Float32Array(r),1);return W.setUsage(tc),P.geometry.setAttribute("blRank",W),P.count=0,n.scene.add(P),P}),a=Lt.map(C=>Array.from({length:C.tiers},()=>[]));t.forEach((C,P)=>a[C.sp][C.tier].push(P));const l=(C,P,W)=>{var Z;const $=(Z=a[C])==null?void 0:Z[P];return!$||$.length===0?-1:$[Math.min($.length-1,Math.floor(W*$.length))]},c=new Int32Array(t.length);let h="v1:0000000000000000",u=new Uu;const d=new Int32Array(t.length),f=(C,P,W,$)=>{const Z=Y[C];if(Z>=r){d[C]++;return}const w=o[C];w.geometry.getAttribute("blRank").array[Z]=$;const re=w.instanceMatrix.array,te=P.elements,xe=Z*16;for(let Ce=0;Ce<16;Ce++)re[xe+Ce]=te[Ce];const oe=w.instanceColor.array;oe[Z*3]=W,oe[Z*3+1]=W,oe[Z*3+2]=W,Y[C]=Z+1,u.push(C),u.push(Math.round(P.elements[12]*1e3)),u.push(Math.round(P.elements[13]*1e3)),u.push(Math.round(P.elements[14]*1e3)),u.push(Math.round(P.elements[0]*1e3)),u.push(Math.round(P.elements[2]*1e3))};let g=0;const M=new Float64Array(Lt.length).fill(1);M[Lt.findIndex(C=>C.id==="litter")]=0,M[Lt.findIndex(C=>C.id==="bracken.rust")]=0;const p={query:n.world.query,cover:n.world.cover,pick:l,emit:f,rng:Ki(n.seed).fork("groundcover"),seasonW:M,get seasonSnow(){return g}},m=Us[0].cellM,x=Math.ceil(_.GROUNDCOVER_FAR_M/m),v=2*x+1,S=new Int16Array(v*v),D=new Float32Array(v*v),y=new Uint16Array(v*v);let A=0,b=0,R=0,E=0,T=!1,O=!0,k=0;const K=new Int32Array(Lt.length),q=_.GROUNDCOVER_WIND_DIR_DEG*(Math.PI/180),H=zi/_.GROUNDCOVER_SWAY_WAVE_M;s.uWind.value.set(Math.sin(q)*H,-Math.cos(q)*H,0,_.GROUNDCOVER_SWAY_AMP);const Q=t.map(C=>C.tier<=1?0:C.tier-1),Y=new Int32Array(t.length);let j=null,fe=0,X=0;function se(C,P,W){const $=C.cellM,Z=$*.7072,w=Math.ceil((C.maxM+Z)/$),re=Math.floor(P/$),te=Math.floor(W/$),xe=[];for(let oe=-w;oe<=w;oe++)for(let Ce=-w;Ce<=w;Ce++){const Ne=re+Ce,De=te+oe,V=Ne*$+$*.5-P,L=De*$+$*.5-W,ae=Math.sqrt(V*V+L*L);ae>C.maxM+Z||ae<C.minM-Z||xe.push(Ne,De)}return Int32Array.from(xe)}function ie(C,P,W,$){{const Z=o[C],w=Y[C];c[C]=w,Z.count=w,Z.instanceMatrix.clearUpdateRanges(),Z.instanceMatrix.addUpdateRange(0,w*16),Z.instanceMatrix.needsUpdate=!0;const re=Z.geometry.getAttribute("blRank");re.clearUpdateRanges(),re.addUpdateRange(0,w),re.needsUpdate=!0,Z.instanceColor&&(Z.instanceColor.clearUpdateRanges(),Z.instanceColor.addUpdateRange(0,w*3),Z.instanceColor.needsUpdate=!0),Z.boundingSphere||(Z.boundingSphere=new ts),Z.boundingSphere.center.set(P,$,W),Z.boundingSphere.radius=_.GROUNDCOVER_FAR_M*1.8}}function F(){h=u.hex(),k=0,K.fill(0);for(let C=0;C<t.length;C++)k+=c[C]*t[C].tris,K[t[C].sp]+=c[C];fe=X}function I(){if(!j)return;const C=performance.now();let P=_.GROUNDCOVER_SLICE_CANDIDATES;for(;j&&P>0;){const W=Us[j.li];if(j.at<j.cells.length){const Z={...p,ax:j.px,az:j.pz};for(;j.at<j.cells.length&&P>0;){const w=j.cells[j.at],re=j.cells[j.at+1];j.at+=2,P-=W.k;const te=cA(Z,W,w,re);if(j.li===0){const xe=w-A,oe=re-b;if(xe>=0&&oe>=0&&xe<v&&oe<v){const Ce=oe*v+xe;S[Ce]=te.cls,D[Ce]=te.slopeDeg,y[Ce]=te.n}}}continue}for(;j.commit<t.length&&P>0;){const Z=j.commit++;Q[Z]===j.li&&(P-=Y[Z],ie(Z,j.px,j.pz,j.py))}if(j.commit<t.length)break;const $=j.li+1;if($>=Us.length){F(),j=null;break}j={px:j.px,pz:j.pz,py:j.py,li:$,cells:se(Us[$],j.px,j.pz),at:0,commit:0};for(let Z=0;Z<t.length;Z++)Q[Z]===$&&(Y[Z]=0)}X=Math.max(X,performance.now()-C)}function B(C){if(j)return;const P=C.x-R,W=C.z-E;T&&P*P+W*W<=_.GROUNDCOVER_RECENTRE_M*_.GROUNDCOVER_RECENTRE_M||(T=!0,R=C.x,E=C.z,A=Math.floor(R/m)-x,b=Math.floor(E/m)-x,S.fill(0),y.fill(0),D.fill(-2),u=new Uu,X=0,Y.fill(0),j={px:R,pz:E,py:p.query.heightAt(R,E),li:0,cells:se(Us[0],R,E),at:0,commit:0})}return{update(C){s.uWind.value.z=C.clock.simTick*_.SIM_DT*_.GROUNDCOVER_SWAY_SPEED,B(C.player),I()},drainNow(C){for(;j;)I();for(B(C.player);j;)I()},census(C){const P={};let W=0,$=0,Z=-1;for(let te=0;te<v;te++)for(let xe=0;xe<v;xe++){const oe=te*v+xe;if(D[oe]<-1.5||Math.hypot((A+xe)*m+m*.5-R,(b+te)*m+m*.5-E)>C)continue;const Ce=String(S[oe]),Ne=P[Ce]??(P[Ce]={cells:0,withInstance:0,fraction:0,densityPerM2:0});Ne.cells++,y[oe]>0&&(Ne.withInstance++,D[oe]>Z&&(Z=D[oe])),Ne.densityPerM2+=y[oe],W+=y[oe],$++}for(const te of Object.values(P))te.fraction=te.cells?te.withInstance/te.cells:0,te.densityPerM2=te.cells?te.densityPerM2/(te.cells*m*m):0;const w={};Lt.forEach((te,xe)=>w[te.id]=K[xe]);let re=0;for(let te=0;te<c.length;te++)re+=c[te];return{byClass:P,bySpecies:w,instances:W,triangles:k,perM2:$?W/($*m*m):0,lastRebuildMs:fe,digest:h,maxSlopeWithInstanceDeg:Z,drawnInstances:re}},setVisible(C){O=C;for(const P of o)P.visible=C},material:()=>i,wind:()=>s,setSeasonSpecies(C,P){for(let W=0;W<M.length;W++)M[W]=C[W]??1;g=P,T=!1},settled:()=>T&&j===null,invalidate(){T=!1},visible:()=>O,clumpHashes(){let C=0;for(let $=0;$<c.length;$++)C+=c[$];const P=new Uint32Array(C);let W=0;for(let $=0;$<o.length;$++){const Z=o[$].instanceMatrix.array;for(let w=0;w<c[$];w++){const re=w*16,te=Math.round(Z[re+12]*10)|0,xe=Math.round(Z[re+14]*10)|0;let oe=Math.imul(te,668265261)^Math.imul(xe,374761393)|0;oe=Math.imul(oe^oe>>>15,739982445),P[W++]=(oe^oe>>>13)>>>0}}return P},anchor:()=>({x:R,z:E,anchored:T}),clumpXZ(){let C=0;for(let $=0;$<c.length;$++)C+=c[$];const P=new Float32Array(C*2);let W=0;for(let $=0;$<o.length;$++){const Z=o[$].instanceMatrix.array;for(let w=0;w<c[$];w++){const re=w*16;P[W++]=Z[re+12],P[W++]=Z[re+14]}}return P},clumpRanks(){let C=0;for(let $=0;$<c.length;$++)C+=c[$];const P=new Float32Array(C);let W=0;for(let $=0;$<o.length;$++){const Z=o[$].geometry.getAttribute("blRank").array;for(let w=0;w<c[$];w++)P[W++]=Z[w]}return P},inventory:()=>t.map((C,P)=>({id:C.id,tris:C.tris,instances:o[P].count,dropped:d[P]})),dispose(){for(const C of o)n.scene.remove(C),C.dispose();for(const C of t)C.geometry.dispose();i.dispose()}}}const Df=9736842,If=8288879,Lf=6248781,Pf=8225640,Of=4281914,Uf=2437663,Ff=5992504,kf=3359263,js=4864813,uA=.999,wr=(n,e)=>(Math.sin(n*12.9898+e*78.233)*43758.5453%1+1)%1,Zn=n=>n.index?n.toNonIndexed():n;function pa(n){let e=0;for(const l of n)e+=l.attributes.position.count;const t=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e);let o=0;for(const l of n)t.set(l.attributes.position.array,o),i.set(l.attributes.normal.array,o),s.set(l.attributes.color.array,o),r.set(l.attributes.blBed.array,o/3),o+=l.attributes.position.count*3;const a=new Et;return a.setAttribute("position",new st(t,3)),a.setAttribute("normal",new st(i,3)),a.setAttribute("color",new st(s,3)),a.setAttribute("blBed",new st(r,1)),a}function On(n,e,t,i,s,r,o=0,a=0){const l=n.attributes.position,c=n.attributes.normal;n.computeBoundingBox();const h=n.boundingBox,u=Math.max(.001,h.max.y-h.min.y),d=new Float32Array(l.count*3),f=new Float32Array(l.count),g=new Ve,M=new Ve(e),p=new Ve(t),m=new Ve(i),x=new Ve(s<0?0:s);for(let v=0;v+2<l.count;v+=3){const S=Math.max(0,c.getY(v)),D=a+(1-a)*(((l.getY(v)+l.getY(v+1)+l.getY(v+2))/3-h.min.y)/u),y=.19+.27*S+.54*D;g.copy(M).lerp(p,Math.min(1,y*2)).lerp(m,Math.max(0,y*2-1)),s>=0&&g.lerp(x,.62*S*S*wr(v,1.7));const A=1+r*(wr(v,3.1)-.5),b=o>0?_.ROCK_CONTACT_DARK+(1-_.ROCK_CONTACT_DARK)*Math.min(1,D/o):1;for(let R=0;R<3;R++)d.set([g.r*A,g.g*A,g.b*A],(v+R)*3),f[v+R]=b}return n.setAttribute("color",new st(d,3)),n.setAttribute("blBed",new st(f,1)),n}function dA(n){const e=n.attributes.position,t=e.count,i=[],s=[];let r=0;for(let h=0;h<t;h++)r=Math.max(r,Math.hypot(e.getX(h),e.getY(h),e.getZ(h)));const o=[];for(let h=0;h+2<t;h+=3){const u=e.getX(h),d=e.getY(h),f=e.getZ(h),g=e.getX(h+1)-u,M=e.getY(h+1)-d,p=e.getZ(h+1)-f,m=e.getX(h+2)-u,x=e.getY(h+2)-d,v=e.getZ(h+2)-f;let S=M*v-p*x,D=p*m-g*v,y=g*x-M*m;const A=Math.hypot(S,D,y);if(A<1e-9)continue;S/=A,D/=A,y/=A,o.push(S*u+D*d+y*f);let b=0;for(;b<i.length/3&&!(i[b*3]*S+i[b*3+1]*D+i[b*3+2]*y>uA);b++);b===i.length/3&&(i.push(S,D,y),s.push(-1/0))}for(let h=0;h<s.length;h++){const u=i[h*3],d=i[h*3+1],f=i[h*3+2];let g=-1/0;for(let M=0;M<t;M++)g=Math.max(g,u*e.getX(M)+d*e.getY(M)+f*e.getZ(M));s[h]=g}let a=0,l=0;for(let h=0;h+2<t;h+=3){const u=e.getX(h),d=e.getY(h),f=e.getZ(h),g=e.getX(h+1)-u,M=e.getY(h+1)-d,p=e.getZ(h+1)-f,m=e.getX(h+2)-u,x=e.getY(h+2)-d,v=e.getZ(h+2)-f;let S=M*v-p*x,D=p*m-g*v,y=g*x-M*m;const A=Math.hypot(S,D,y);if(A<1e-9)continue;S/=A,D/=A,y/=A;const b=o[l++];for(let R=0;R<t;R++)a=Math.max(a,S*e.getX(R)+D*e.getY(R)+y*e.getZ(R)-b)}const c=new Float32Array(s.length*4);for(let h=0;h<s.length;h++)c[h*4]=i[h*3],c[h*4+1]=i[h*3+1],c[h*4+2]=i[h*3+2],c[h*4+3]=s[h];return{planes:c,hullErr:a,boundR:r}}const fA=new Float32Array(0);function Eo(n){const e=n.geometry;e.computeBoundingBox();const t=e.boundingBox,i=e.attributes.position,s=t.min.y+(t.max.y-t.min.y)*.18;let r=0,o=0;for(let l=0;l<i.count;l++){const c=Math.hypot(i.getX(l),i.getZ(l));i.getY(l)<=s&&(r=Math.max(r,c)),o=Math.max(o,c)}e.computeBoundingSphere();const a=n.kind==="rock"||n.kind==="cobble"?dA(e):{planes:fA,hullErr:0,boundR:e.boundingSphere.radius};return{...n,footR:r,wideR:o,baseY:t.min.y,height:Math.max(.001,t.max.y-t.min.y),planes:a.planes,boundR:a.boundR,hullErr:a.hullErr}}const pA=[{name:"block",kind:"rock",mode:"box",shear:.6,planes:0,hMin:.26,hMax:0,s:[1,.98,.9],detail:0,sizeMul:1,seg:3,brk:.2},{name:"slab",kind:"rock",mode:"box",shear:.22,planes:0,hMin:.24,hMax:0,s:[.98,.66,.86],detail:0,sizeMul:.6,seg:3,brk:.11},{name:"fin",kind:"rock",mode:"box",shear:.9,planes:0,hMin:.28,hMax:0,s:[.6,1.22,.94],detail:0,sizeMul:.82,seg:3,brk:.15},{name:"shard",kind:"rock",mode:"poly",shear:0,planes:34,hMin:.44,hMax:.7,s:[.9,1,.84],detail:0,sizeMul:1.15,seg:1,brk:0},{name:"cobble",kind:"cobble",mode:"box",shear:.82,planes:0,hMin:.27,hMax:0,s:[1,.92,.84],detail:0,sizeMul:1,seg:2,brk:.2}];function mA(n,e,t=0){const i=new Float32Array(24);for(let h=0;h<24;h++)i[h]=(n.next()-.5)*2*e.hMin;const s=(n.next()-.5)*e.shear,r=(n.next()-.5)*e.shear,o=1+.3*n.next(),a=1+Math.floor(n.next()*4096),l=Zn(new tr(1,1,1,e.seg,e.seg,e.seg)),c=l.attributes.position;for(let h=0;h<c.count;h++){const u=c.getX(h),d=c.getY(h),f=c.getZ(h),g=u+.5,M=d+.5,p=f+.5;let m=0,x=0,v=0;for(let y=0;y<8;y++){const A=(y&1?g:1-g)*(y&2?M:1-M)*(y&4?p:1-p),b=y*3;m+=i[b]*A,x+=i[b+1]*A,v+=i[b+2]*A}const S=a+Math.round(g*e.seg)*7+Math.round(M*e.seg)*131+Math.round(p*e.seg)*1571,D=1+(o-1)*(1-M);c.setXYZ(h,(u*D+m+s*M+(wr(S,5.3)-.5)*e.brk)*e.s[0],(d+x*(.45+.9*M)+(wr(S,9.1)-.5)*e.brk)*e.s[1],(f*D+v+r*M+(wr(S,13.7)-.5)*e.brk)*e.s[2])}return l.computeVertexNormals(),On(l,Lf,If,Df,Pf,.34,_.ROCK_CONTACT_BAND,t)}function _A(n,e){const t=[],i=[];for(let h=0;h<e.planes;h++){const u=1-(2*h+1)/e.planes,d=Math.sqrt(Math.max(0,1-u*u)),f=h*2.399963+n.next()*Math.PI*2;t.push(new le(Math.cos(f)*d,u*(.5+.5*n.next()),Math.sin(f)*d).normalize());const g=n.next(),M=n.next()<.18;i.push(h===0?e.hMin:M?e.hMin+.05*g:e.hMax-.18*g)}t.push(new le(0,-1,0)),i.push(.34);const s=8,r=[],o=new le,a=new le,l=new le;for(let h=0;h<t.length;h++){const u=t[h],d=i[h];o.set(0,1,0),Math.abs(u.y)>.9&&o.set(1,0,0),o.cross(u).normalize(),a.copy(u).cross(o).normalize();let f=[];for(const g of[[1,1],[-1,1],[-1,-1],[1,-1]])f.push(new le().copy(u).multiplyScalar(d).addScaledVector(o,g[0]*s).addScaledVector(a,g[1]*s));for(let g=0;g<t.length&&f.length>=3;g++){if(g===h)continue;const M=t[g],p=i[g],m=[];for(let x=0;x<f.length;x++){const v=f[x],S=f[(x+1)%f.length],D=M.dot(v)-p,y=M.dot(S)-p;D<=0&&m.push(v),(D<0&&y>0||D>0&&y<0)&&m.push(l.copy(S).sub(v).multiplyScalar(D/(D-y)).add(v).clone())}f=m}if(!(f.length<3))for(let g=1;g+1<f.length;g++)for(const M of[f[0],f[g],f[g+1]])r.push(M.x*e.s[0],M.y*e.s[1],M.z*e.s[2])}const c=new Et;return c.setAttribute("position",new st(Float32Array.from(r),3)),c.computeVertexNormals(),On(c,Lf,If,Df,Pf,.34,_.ROCK_CONTACT_BAND)}function Fu(n,e,t=0){return e.mode==="box"?mA(n,e,t):_A(n,e)}function gA(n,e,t){const i=new Float32Array(e*9),s=new Float32Array(e*9),r=new Float32Array(e*9),o=[];for(let l=0;l<e;l++)o.push(.66+.34*n.next());for(let l=0;l<e;l++){const c=l/e*Math.PI*2,h=(l+1)/e*Math.PI*2,u=o[l],d=o[(l+1)%e];i.set([0,t,0,Math.cos(c)*u,0,Math.sin(c)*u,Math.cos(h)*d,0,Math.sin(h)*d],l*9),s.set([0,1,0,0,1,0,0,1,0],l*9),r.set([1,1,1,0,0,0,0,0,0],l*9)}const a=new Et;return a.setAttribute("position",new st(i,3)),a.setAttribute("normal",new st(s,3)),a.setAttribute("color",new st(r,3)),a}function MA(n){const e=[On(Zn(new ir(.006,.013,.4,5,1,!0)).translate(0,.2,0),js,js,6969156,-1,.14)],t=4;for(let i=0;i<t;i++){const s=i/(t-1),r=.23-.17*s,o=.52-.14*s,a=Zn(new la(r*(.86+.28*n.next()),o,6));a.rotateY(n.next()*2).translate((n.next()-.5)*.04,.3+s*.52,(n.next()-.5)*.04),e.push(On(a,Uf,Of,6519114,-1,.16))}return pa(e)}function EA(n){const e=[On(Zn(new ir(.008,.018,.44,5,1,!0)).translate(0,.22,0),js,js,6969156,-1,.14)];for(let t=0;t<3;t++){const i=t*2.2+n.next(),s=.26+.1*n.next(),r=Zn(new Ur(s,0)).scale(1,.8,1);r.translate(Math.cos(i)*.15,.3+.14*n.next()+s*.55,Math.sin(i)*.15),e.push(On(r,kf,Ff,8228684,-1,.18))}return pa(e)}function vA(n){const e=[];for(let t=0;t<3;t++){const i=t*2.1+n.next()*1.4,s=.3+.16*n.next(),r=Zn(new Ur(s,0)).scale(1,.62,1);r.translate(Math.cos(i)*.22,.3+.16*n.next(),Math.sin(i)*.22),e.push(On(r,4012834,6186034,8357192,-1,.2))}return pa(e)}function xA(n){const e=Zn(new la(.2*(.9+.2*n.next()),1,6)).translate(0,.5,0);return On(e,Uf,Of,6519114,-1,.16)}function SA(n){const e=[On(Zn(new ir(.018,.028,.44,3,1,!0)).translate(0,.22,0),js,js,6969156,-1,.1)],t=Zn(new Ur(.36+.07*n.next(),0)).scale(1.05,.86,1.05).translate(0,.6,0);return e.push(On(t,kf,Ff,8228684,-1,.18)),pa(e)}const AA=[["tree.conifer","tree",1,MA,!0],["tree.broadleaf","tree",.8,EA,!0],["tree.conifer-far","tree",1,xA,!1],["tree.broadleaf-far","tree",.8,SA,!1],["shrub.low","shrub",1,vA,!1]];function RA(n){const e=[];for(const t of pA){for(let i=0;i<3;i++)e.push(Eo({id:`rock.${t.name}.${i}`,kind:t.kind,geometry:Fu(n.fork(`${t.name}.${i}`),t),sizeMul:t.sizeMul,poly:t.mode==="poly",far:!1}));if(t.mode==="box"&&t.seg>1)for(let i=0;i<3;i++)e.push(Eo({id:`rock.${t.name}-far.${i}`,kind:t.kind,geometry:Fu(n.fork(`${t.name}.${i}`),{...t,seg:1},_.ROCK_BURY_FRAC),sizeMul:t.sizeMul,poly:!1,far:!0}))}for(const[t,i,s,r,o]of AA)for(let a=0;a<2;a++)e.push(Eo({id:`${t}.${a}`,kind:i,geometry:r(n.fork(`${t}.${a}`)),sizeMul:s,poly:o,far:!o}));for(let t=0;t<2;t++)e.push(Eo({id:`contact.${t}`,kind:"contact",geometry:gA(n.fork(`contact.${t}`),_.ROCK_CONTACT_SEGMENTS,_.ROCK_CONTACT_DOME),sizeMul:1,poly:!1,far:!1}));return e}const dl=new le(.99,.88,.79);function yA(n){const e=new oa({color:16777215,vertexColors:!0,transparent:!0,depthWrite:!1,side:An,blending:xl,fog:!1});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float blDis;
varying float blDisV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
blDisV = blDis;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float blDisV;`).replace("#include <dithering_fragment>",`gl_FragColor.rgb = mix(vec3(1.0), gl_FragColor.rgb, blDisV);
#include <dithering_fragment>`),t.uniforms.uContact={value:new it(_.ROCK_CONTACT_OCC,_.ROCK_CONTACT_FADE_M,_.ROCK_CONTACT_FAR_M,_.ROCK_CONTACT_FALLOFF)},t.uniforms.uApron={value:new it(dl.x,dl.y,dl.z,_.ROCK_APRON_MIX)},t.uniforms.uSunDir={value:n.sunDir},t.uniforms.uSunShape={value:_.ROCK_CONTACT_SUN_SHAPE},e.userData.uniforms=t.uniforms,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
  diffuseColor = vec4(vec3(1.0 - blOcc) * mix(vec3(1.0), uApron.rgb, sqrt(blU) * uApron.a * blFade), 1.0);`)},e}const TA=`
float blGrainH(vec3 p) { return fract(sin(dot(floor(p), vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float blGrainN(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(blGrainH(i), blGrainH(i + vec3(1.0, 0.0, 0.0)), f.x), mix(blGrainH(i + vec3(0.0, 1.0, 0.0)), blGrainH(i + vec3(1.0, 1.0, 0.0)), f.x), f.y);
  float b = mix(mix(blGrainH(i + vec3(0.0, 0.0, 1.0)), blGrainH(i + vec3(1.0, 0.0, 1.0)), f.x), mix(blGrainH(i + vec3(0.0, 1.0, 1.0)), blGrainH(i + vec3(1.0, 1.0, 1.0)), f.x), f.y);
  return mix(a, b, f.z);
}
`;function bA(n){const e=da(n),t=new Bi({color:16777215,vertexColors:!0,flatShading:!0,fog:!1});t.alphaToCoverage=!0;const i={uSnowR:{value:new it(0,_.SNOW_ALT_LO_M,_.SNOW_ALT_HI_M,_.SNOW_ROCK_UP_MIN)},uWet:{value:0}};return t.userData.snow=i,t.onBeforeCompile=s=>{fa(s,e),Object.assign(s.uniforms,i),s.uniforms.uGrain={value:new it(1/_.ROCK_GRAIN_MOTTLE_M,_.ROCK_GRAIN_MOTTLE,1/_.ROCK_GRAIN_SPECKLE_M,_.ROCK_GRAIN_SPECKLE)},s.uniforms.uVein={value:new le(_.ROCK_GRAIN_VEIN_M,_.ROCK_GRAIN_VEIN,_.ROCK_GRAIN_FADE_M)},s.uniforms.uBed={value:new et(_.ROCK_CONTACT_FADE_M,_.ROCK_CONTACT_FAR_M)},t.userData.uniforms=s.uniforms,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
varying float blDisV;${TA}`).replace("#include <color_fragment>",`#include <color_fragment>
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
    diffuseColor.rgb *= 1.0 - ${_.WEATHER_WET_DARKEN.toFixed(4)} * uWet;
    diffuseColor.rgb.b *= 1.0 + ${_.WEATHER_WET_BLUE.toFixed(4)} * uWet;
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
#include <dithering_fragment>`)},t}const Sn=_.DRESSING_CELL_M,bs=_.DRESSING_ANCHOR_M;class wA{constructor(){je(this,"a",2166136261);je(this,"b",16777619)}push(e){const t=e|0;this.a=Math.imul(this.a^t&65535,16777619)>>>0,this.b=Math.imul(this.b^t>>>16,2246822507)>>>0}hex(){return`v1:${(this.a>>>0).toString(16).padStart(8,"0")}${(this.b>>>0).toString(16).padStart(8,"0")}`}}function CA(n,e){const t=RA(Ki(n.seed).fork("dressing.kit")),i=bA(e),s=yA(e),r=_.DRESSING_MAX_PER_ENTRY,o=t.map(A=>{const b=new bd(A.geometry,A.kind==="contact"?s:i,r);return A.geometry.setAttribute("blDis",new Yo(new Float32Array(r).fill(1),1)),b.name=`dressing:${A.id}`,b.instanceMatrix.setUsage(tc),b.count=0,b.renderOrder=A.kind==="contact"?1:0,Gt.dressing&&n.scene.add(b),b}),a={query:n.world.query,cover:n.world.cover,kit:t,cobbles:t.map((A,b)=>A.kind==="cobble"&&!A.far?b:-1).filter(A=>A>=0),cobblesFar:t.map((A,b)=>A.kind==="cobble"&&A.far?b:-1).filter(A=>A>=0),rocks:t.map((A,b)=>A.kind==="rock"&&!A.poly&&!A.far?b:-1).filter(A=>A>=0),rocksFar:t.map((A,b)=>A.kind==="rock"&&A.far?b:-1).filter(A=>A>=0),big:t.map((A,b)=>A.kind==="rock"&&A.poly?b:-1).filter(A=>A>=0),contacts:t.map((A,b)=>A.kind==="contact"?b:-1).filter(A=>A>=0),trees:t.map((A,b)=>A.kind==="tree"&&A.poly?b:-1).filter(A=>A>=0),treesFar:t.map((A,b)=>A.kind==="tree"&&!A.poly?b:-1).filter(A=>A>=0),shrubs:t.map((A,b)=>A.kind==="shrub"?b:-1).filter(A=>A>=0),rockRng:Ki(n.seed).fork("dressing.rock"),plantRng:Ki(n.seed).fork("dressing.plant")},l=Math.ceil(_.DRESSING_FAR_M/Sn),c=2*l+1,h=new Int16Array(c*c),u=new Float32Array(c*c),d=new Uint16Array(c*c),f=new Uint16Array(c*c);let g=0,M=0,p=0,m=0,x=null,v="v1:0000000000000000",S=!0;const D=new Ve;function y(A,b){p=A,m=b,g=Math.floor(A/Sn)-l,M=Math.floor(b/Sn)-l;const R={...a,ax:p,az:m},E=t.map(()=>[]),T=[],O=new wA;h.fill(0),d.fill(0),f.fill(0),u.fill(-2);for(let k=0;k<c;k++)for(let K=0;K<c;K++){const q=g+K,H=M+k;if(Math.hypot(q*Sn+Sn*.5-A,H*Sn+Sn*.5-b)>_.DRESSING_FAR_M)continue;T.length=0;const Q=Cf(R,q,H,T),Y=k*c+K;h[Y]=Q.cls,u[Y]=Q.slopeDeg,f[Y]=Q.plants,d[Y]=Q.rocks+Q.plants;for(const j of T){const fe=E[j.entry];if(!(fe.length>=r)){fe.push(j),O.push(j.entry),O.push(q),O.push(H);for(let X=0;X<16;X++)O.push(Math.round(j.m.elements[X]*1e3))}}}v=O.hex();for(let k=0;k<t.length;k++){const K=E[k],q=o[k],H=q.geometry.getAttribute("blDis");for(let Q=0;Q<K.length;Q++)q.setMatrixAt(Q,K[Q].m),q.setColorAt(Q,D.setRGB(K[Q].tint,K[Q].tint,K[Q].tint)),H.setX(Q,K[Q].fade);H.needsUpdate=!0,q.count=K.length,q.instanceMatrix.needsUpdate=!0,q.instanceColor&&(q.instanceColor.needsUpdate=!0),q.computeBoundingSphere()}}return{update(A){if(!Gt.dressing)return;const b=A.player,R=Math.floor(b.x/bs),E=Math.floor(b.z/bs),T=_.DRESSING_ANCHOR_MARGIN_M;(!x||Math.hypot(b.x-p,b.z-m)>_.DRESSING_RECENTER_M||b.x<x.i*bs-T||b.x>(x.i+1)*bs+T||b.z<x.j*bs-T||b.z>(x.j+1)*bs+T)&&(x={i:R,j:E},y(b.x,b.z))},setSnow(A){const b=i.userData.snow;b&&(b.uSnowR.value.x=A)},snow:()=>{var A;return((A=i.userData.snow)==null?void 0:A.uSnowR.value.x)??0},material:()=>i,fadeStats:()=>{let A=0,b=0,R=0;for(const E of o){const T=E.geometry.getAttribute("blDis");if(T)for(let O=0;O<E.count;O++){const k=T.getX(O);A++,k>.001&&k<.999?b++:k>=.999&&R++}}return{drawn:A,mid:b,solid:R,alphaToCoverage:i.alphaToCoverage===!0}},invalidate(){x=null},census(A){const b={};let R=0,E=-1;for(let T=0;T<c;T++)for(let O=0;O<c;O++){const k=T*c+O;if(u[k]<-1.5||Math.hypot((g+O)*Sn+Sn*.5-p,(M+T)*Sn+Sn*.5-m)>A)continue;const K=String(h[k]),q=b[K]??(b[K]={cells:0,withInstance:0,fraction:0,densityPerCell:0});q.cells++,d[k]>0&&q.withInstance++,f[k]>0&&u[k]>E&&(E=u[k]),q.densityPerCell+=d[k],R+=d[k]}for(const T of Object.values(b))T.fraction=T.cells?T.withInstance/T.cells:0,T.densityPerCell=T.cells?T.densityPerCell/T.cells:0;return{byClass:b,instances:R,digest:v,maxSlopeWithInstanceDeg:E<0?0:E}},setVisible(A){S=A;for(const b of o)b.visible=A},visible:()=>S,inventory:()=>t.map((A,b)=>({id:A.id,tris:A.geometry.attributes.position.count/3,instances:o[b].count})),placeCtx:(A,b)=>({...a,ax:A,az:b}),kit:()=>t,dispose(){for(const A of o)n.scene.remove(A),A.dispose();for(const A of t)A.geometry.dispose();i.dispose(),s.dispose()}}}const hn=_.DRESSING_CELL_M,li=_.DRESSING_COLLIDER_CELLS,ku=new ot,Dt=new it;function NA(n,e,t){if(e.kind==="contact"||e.kind==="shrub")return null;const i=n.m.elements,s=Math.hypot(i[4],i[5],i[6]),r=e.height*s;if(r<_.WALKER_STEP_UP_M)return null;const o=i[12],a=i[14],l=i[13]+(e.baseY+e.height)*s,c=l-t.heightAt(o,a);if(c<_.WALKER_STEP_UP_M)return null;if(e.planes.length===0)return{x:o,z:a,r:r*_.TREE_TRUNK_RADIUS_FRAC,planes:DA,topY:l,proudM:c};ku.copy(n.m).invert();const h=ku.elements,u=e.planes,d=new Float32Array(u.length);for(let f=0;f<u.length;f+=4){Dt.set(u[f],u[f+1],u[f+2],-u[f+3]);const g=h[0]*Dt.x+h[1]*Dt.y+h[2]*Dt.z+h[3]*Dt.w,M=h[4]*Dt.x+h[5]*Dt.y+h[6]*Dt.z+h[7]*Dt.w,p=h[8]*Dt.x+h[9]*Dt.y+h[10]*Dt.z+h[11]*Dt.w,m=h[12]*Dt.x+h[13]*Dt.y+h[14]*Dt.z+h[15]*Dt.w,x=Math.hypot(g,M,p)||1;d[f]=g/x,d[f+1]=M/x,d[f+2]=p/x,d[f+3]=-m/x}return{x:o,z:a,r:e.boundR*s*(1+_.DRESSING_STRETCH*.5),planes:d,topY:l,proudM:c}}const DA=new Float32Array(0),Cn={x:0,z:0};function vo(n,e,t,i){const s=n.planes;if(s.length===0){const h=e-n.x,u=i-n.z,d=Math.hypot(h,u)||1;return Cn.x=h/d,Cn.z=u/d,d-n.r}let r=-1/0,o=0;for(let h=0;h<s.length;h+=4){const u=s[h]*e+s[h+1]*t+s[h+2]*i-s[h+3];u>r&&(r=u,o=h)}const a=s[o],l=s[o+2],c=Math.hypot(a,l);if(c<.15){const h=e-n.x,u=i-n.z,d=Math.hypot(h,u)||1;Cn.x=h/d,Cn.z=u/d}else Cn.x=a/c,Cn.z=l/c;return r}function IA(n){const e=n.kit(),t=new Map,i=[],s={x:0,z:0,hit:!1};let r=0,o=0,a=0,l=0,c=0,h=!0;const u=[];function d(f,g){if(!Gt.dressing)return u;const M=`${f},${g}`,p=t.get(M);if(p)return p;const m=performance.now(),x=n.placeCtx(f*hn+hn*.5,g*hn+hn*.5);i.length=0,Cf(x,f,g,i);const v=[];for(const S of i){const D=NA(S,e[S.entry],x.query);D&&v.push(D)}return t.size>=_.DRESSING_COLLIDER_CACHE_CELLS&&(t.clear(),c=0),t.set(M,v),c+=v.length,r++,o+=performance.now()-m,v}return{resolve(f,g,M,p,m){const x=performance.now();if(s.x=M,s.z=p,s.hit=!1,!h)return s;const v=Math.floor(f/hn),S=Math.floor(g/hn),D=m+_.WALKER_STEP_UP_M,y=_.WALKER_RADIUS_M,A=m+_.WALKER_STEP_UP_M+.05;for(let b=0;b<_.WALKER_OBSTACLE_ITERS;b++)for(let R=-li;R<=li;R++)for(let E=-li;E<=li;E++){const T=d(v+E,S+R);for(let O=0;O<T.length;O++){const k=T[O];if(k.topY<=D||Math.hypot(s.x-k.x,s.z-k.z)>k.r+y)continue;const K=Math.min(k.topY-.02,m+_.WALKER_CHEST_M);let q=vo(k,s.x,A,s.z),H=Cn.x,Q=Cn.z;if(K>A){const fe=vo(k,s.x,K,s.z);fe<q&&(q=fe,H=Cn.x,Q=Cn.z)}if(q>=y)continue;let Y=vo(k,f,A,g);K>A&&(Y=Math.min(Y,vo(k,f,K,g)));const j=Math.min(y,Y);q>=j||(s.x+=H*(j-q),s.z+=Q*(j-q),s.hit=!0)}}return a++,l+=performance.now()-x,s},near(f,g,M){const p=[],m=Math.floor((f-M)/hn),x=Math.floor((f+M)/hn),v=Math.floor((g-M)/hn),S=Math.floor((g+M)/hn);for(let D=v;D<=S;D++)for(let y=m;y<=x;y++)for(const A of d(y,D))Math.hypot(A.x-f,A.z-g)<=M&&p.push(A);return p},supportYAt(f,g){const M=Math.floor(f/hn),p=Math.floor(g/hn);let m=null;for(let x=-li;x<=li;x++)for(let v=-li;v<=li;v++)for(const S of d(M+v,p+x)){if(Math.hypot(f-S.x,g-S.z)>S.r)continue;let D=1/0,y=-1/0;if(S.planes.length===0)D=S.topY,y=-1/0;else for(let A=0;A<S.planes.length;A+=4){const b=S.planes[A],R=S.planes[A+1],E=S.planes[A+2],O=S.planes[A+3]-b*f-E*g;if(R>1e-4)D=Math.min(D,O/R);else if(R<-1e-4)y=Math.max(y,O/R);else if(O<0){D=-1/0;break}}D>y&&D>(m??-1/0)&&(m=D)}return m},setEnabled:f=>{h=f},enabled:()=>h,invalidate(){t.clear(),c=0},stats:()=>({cells:t.size,obstacles:c,cellBuilds:r,buildMs:o,resolves:a,resolveMs:l})}}const Bf=[{class:Ir,id:"unknown",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"outside the recorded crop — no data is not a penalty; walk as if on the baseline"},{class:10,id:"tree",speedFactor:_.SURFACE_TREE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_TREE_DRAIN_MULT,note:"dense canopy and undergrowth: you push through, and there is no line of sight to sprint down"},{class:20,id:"shrub",speedFactor:_.SURFACE_SHRUB_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_SHRUB_DRAIN_MULT,note:"shrub / heather: knee-high drag on every stride, but still runnable"},{class:30,id:"grass",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"the baseline — open grass is what WALK_SPEED and criterion 6 are measured on"},{class:40,id:"crop",speedFactor:_.SURFACE_CROP_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_CROP_DRAIN_MULT,note:"standing crop: mild drag, never an obstacle"},{class:50,id:"built",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"built-up ground is hard and flat — baseline; buildings are not modelled, so nothing to slow you"},{class:60,id:"bare",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"bare rock / scree: baseline — the slope class already prices what makes it hard"},{class:70,id:"snow",speedFactor:_.SURFACE_SNOW_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_SNOW_DRAIN_MULT,note:"snow and ice: postholing costs you, and there is no footing to sprint on"},{class:80,id:"water",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"open water — the WATER MASK owns the slow-down (wade factors from waterDepthAt); 1.0 here or wading double-counts"},{class:90,id:"wetland",speedFactor:_.SURFACE_BOG_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_BOG_DRAIN_MULT,note:"bog: the slowest walkable ground and the hardest drain — a mask body AND a surface, per criterion 3"},{class:95,id:"mangrove",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"mangrove is a water class — the WATER MASK owns the slow-down; 1.0 here or wading double-counts"},{class:100,id:"moss",speedFactor:_.SURFACE_MOSS_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_MOSS_DRAIN_MULT,note:"moss / lichen over saturated ground: soft underfoot, between grass and heather"}],LA=Bf[0],PA=new Map(Bf.map(n=>[n.class,n]));function OA(n){return PA.get(n)??LA}const UA=n=>Math.max(-1.45,Math.min(_.PITCH_LIMIT_RAD,n));function Hc(n,e){n.y=n.groundY=e.heightAt(n.x,n.z),n.slopeDeg=e.slopeDegAt(n.x,n.z),n.waterDepth=e.waterDepthAt(n.x,n.z)}function FA(n,e,t,i){const s={x:n,y:0,z:e,yaw:t,pitch:0,speedMps:0,mode:"idle",groundY:0,slopeDeg:0,waterDepth:0};return Hc(s,i),s}function Gf(n,e,t,i){n.x=e,n.z=t,n.speedMps=0,n.mode="idle",Hc(n,i)}function kA(n,e,t,i,s,r){n.yaw=e.yaw,n.pitch=UA(e.pitch);const o=Math.sin(e.yaw),a=Math.cos(e.yaw);let l=e.fwd*o+e.strafe*a,c=-e.fwd*a+e.strafe*o;const h=Math.hypot(l,c);if(h===0){n.mode="idle",n.speedMps=0;return}l/=h,c/=h;const u=n.x+l*_.WALKER_PROBE_AHEAD_M,d=n.z+c*_.WALKER_PROBE_AHEAD_M,f=i.slopeDegAt(u,d),g=i.waterDepthAt(u,d);if(f>=_.SLOPE_SCRAMBLE_MAX_DEG||g>_.WADE_MAX_DEPTH_M){n.mode="blocked",n.speedMps=0;return}let M=f<=_.SLOPE_WALK_MAX_DEG?"walk":"scramble",p=M==="walk"?e.sprint?_.SPRINT_SPEED:_.WALK_SPEED:_.SCRAMBLE_SPEED;s&&(p*=OA(s.classAt(u,d)).speedFactor),g>_.WADE_SLOW_DEPTH_M?(p*=_.WADE_SPEED_FACTOR,M="wade"):g>0&&(p*=_.WATER_SHALLOW_SPEED_FACTOR);const m=n.x,x=n.z;let v=m+l*p*t,S=x+c*p*t;if(r){const D=r.resolve(m,x,v,S,n.groundY);v=D.x,S=D.z}n.x=v,n.z=S,Hc(n,i),n.mode=M,n.speedMps=Math.hypot(n.x-m,n.z-x)/t}const fl=Math.PI*2,BA=n=>(n%fl+fl)%fl;function Hi(n){const e=n.player;n.camera.position.set(e.x,e.y+_.EYE_HEIGHT_M,e.z),n.camera.rotation.set(e.pitch,-e.yaw,0,"YXZ")}function GA(n,e){const t=()=>{document.pointerLockElement===e||navigator.webdriver||!document.hasFocus()||Promise.resolve(e.requestPointerLock()).catch(()=>{})},i=r=>{if(!s.enabled||document.pointerLockElement!==e)return;const o=_.MOUSE_SENSITIVITY_RAD_PER_PX,a=n.input.current;a.yaw=BA(a.yaw+r.movementX*o),a.pitch=Math.max(-1.45,Math.min(_.PITCH_LIMIT_RAD,a.pitch-r.movementY*o))};e.addEventListener("click",t),document.addEventListener("mousemove",i);const s={enabled:!0,locked:()=>document.pointerLockElement===e,dispose:()=>{e.removeEventListener("click",t),document.removeEventListener("mousemove",i)}};return s}const zf={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},Hf=["ShiftLeft","ShiftRight"],zA=new Set([...Object.values(zf).flat(),...Hf]),HA=n=>n instanceof HTMLElement&&(n.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName));function VA(n){const e=new Set;let t=!1;const i=()=>{e.clear(),n.input.current.fwd=0,n.input.current.strafe=0},s=l=>{if(!(!zA.has(l.code)||HA(l.target))&&(l.preventDefault(),!l.repeat)){if(Hf.includes(l.code)){l.type==="keydown"&&a.enabled&&(t=!t);return}l.type==="keydown"?e.add(l.code):e.delete(l.code)}},r=()=>{document.hidden&&i()};window.addEventListener("keydown",s),window.addEventListener("keyup",s),window.addEventListener("blur",i),document.addEventListener("visibilitychange",r);const o=l=>zf[l].some(c=>e.has(c))?1:0,a={enabled:!0,sample:l=>{l.input.current.fwd=a.enabled?o("forward")-o("back"):0,l.input.current.strafe=a.enabled?o("right")-o("left"):0,l.input.current.sprint=a.enabled&&t},dispose:()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",s),window.removeEventListener("blur",i),document.removeEventListener("visibilitychange",r)}};return a}function Xe(n,e,t){const i=document.createElement(n);return i.className=e,t==null||t.appendChild(i),i}const WA=`
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
`;function XA(n){if(n.ui.root)return n.ui.root;const e=document.createElement("style");e.textContent=WA,document.head.appendChild(e);const t=Xe("div","hud-root",document.body);return t.id="hud-root",n.ui.root=t,t}const $A=3816509,KA=8286804,YA=16777215,sn={fascia:"#141618",fasciaLo:"#0d0f11",wall:"#0a0b0c",key:"#43464a",keyLo:"#34373b",keyEdge:"#4f5358",label:"#e7e9ea",labelDim:"#b9bcbe"},pt={core:"#ccd5ae",gold:"#bcc7a2",silver:"#b3bf97",bronze:"#a4b286",rough:"#9e9d88",roughRule:"rgba(110,108,86,0.55)",edge:"rgba(78,94,58,0.80)",tick:"rgba(96,112,74,0.45)",tickInk:"rgba(62,76,44,0.90)",route:"#c0389c",routeHalo:"rgba(255,255,255,0.72)",track:"rgba(56,64,48,0.75)",mark:"#2d3428",me:"#2f6fc9",meEdge:"#ffffff",badge:"rgba(248,249,243,0.86)",badgeInk:"#2d3428"},xo={bg:"#b3b8a8",rule:"#7d836f",label:"#39402f",value:"#12160f"},Xn=[_.MEDAL_PLATINUM_M,_.MEDAL_GOLD_M,_.MEDAL_SILVER_M,_.MEDAL_BRONZE_M],qA=180/Math.PI;function ZA(n){const e=Math.round(Math.abs(n));return e===0?"0 m":`${e} m ${n>0?"R":"L"}`}function jA(n){return n>=1e3?`${(n/1e3).toFixed(1)} km`:`${Math.round(n)} m`}function QA(n){const e=Math.max(0,Math.floor(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function JA(n){const e=n*qA%360;return e<0?e+360:e}function ko(n,e,t,i){const s=[],r=[[n-t,-(e-t),-Math.PI/2],[n-t,e-t,0],[-(n-t),e-t,Math.PI/2],[-(n-t),-(e-t),Math.PI]];for(const[o,a,l]of r)for(let c=0;c<=i;c++){const h=l+Math.PI/2*(c/i);s.push({x:o+Math.cos(h)*t,y:a+Math.sin(h)*t,nx:Math.cos(h),ny:Math.sin(h)})}return s}function e1(n,e,t,i){const s=1-i,r=l=>{const c=(l-.15)/.95;return 1-s*Math.max(0,1-c*c)},o=ko(n,e,t,3),a=[];for(let l=0;l<o.length;l++)a.push(o[l]),l===3&&a.push({x:n,y:0,nx:1,ny:0}),l===11&&a.push({x:-n,y:0,nx:-1,ny:0});return a.map(l=>({...l,x:l.x*r(l.y/e)}))}function vi(n,e,t,i){n.push(e.x,e.y,e.z,t.x,t.y,t.z,i.x,i.y,i.z)}function pl(n,e,t){return n.map(i=>new le(i.x*e,i.y*e,t))}function ws(n,e,t){for(let i=0;i<e.length;i++){const s=(i+1)%e.length;vi(n,e[i],t[i],t[s]),vi(n,e[i],t[s],e[s])}}function Bu(n,e,t,i){const s=new le(0,0,t);for(let r=0;r<e.length;r++){const o=(r+1)%e.length;i?vi(n,s,e[o],e[r]):vi(n,s,e[r],e[o])}}function So(n,e,t,i,s,r,o,a,l){const c=(f,g,M)=>new le(f,g,M),h=[c(e+a,i+a,o),c(t-a,i+a,o),c(t-a,s-a,o),c(e+a,s-a,o)],u=[c(e,i,r),c(t,i,r),c(t,s,r),c(e,s,r)],d=(f,g,M,p,m)=>{if(vi(n,f,g,M),vi(n,f,M,p),l)for(const x of[f,g,M,f,M,p])l(x,m)};d(h[0],h[1],h[2],h[3],"top"),d(u[0],u[1],h[1],h[0],"edge"),d(u[1],u[2],h[2],h[1],"edge"),d(u[2],u[3],h[3],h[2],"edge"),d(u[3],u[0],h[0],h[3],"edge")}const Gu=[{x:-.527,y:-.381,w:.137,h:.0345,label:"IN"},{x:.542,y:-.381,w:.137,h:.0345,label:"OUT"},{x:-.563,y:-.525,w:.153,h:.0518,label:"FIND"},{x:-.551,y:-.676,w:.153,h:.0518,label:"MARK"},{x:.557,y:-.525,w:.153,h:.0518,label:"PAGE"},{x:.542,y:-.676,w:.153,h:.0518,label:"MENU"},{x:-.227,y:-.813,w:.183,h:.0446,label:"QUIT"},{x:.221,y:-.813,w:.183,h:.0446,label:"ENTER"},{x:.014,y:-.554,w:.298,h:.144,label:"",rocker:!0}],rn={screenFrac:.657,screenCY:.259,fasciaHW:.81,fasciaTop:.849,fasciaBot:-.281};function t1(n){const e=_.GPS_SCREEN_PX,t=_.GPS_ROWS_PX,i=document.createElement("canvas");i.width=e,i.height=e+t;const s=i.getContext("2d"),r=new Vh(i);r.colorSpace=fn,r.generateMipmaps=!1,r.minFilter=on;const o=(e+t)/e,a=_.GPS_DEVICE_W,l=a,c=a*o,h=a/(2*rn.screenFrac),u=h*_.GPS_BODY_ASPECT,d=a*_.GPS_BODY_DEPTH,f=e1(h,u,h*.34,_.GPS_BODY_WAIST),g=-.5*d,M=.22*d,p=.36*d,m=.42*d,x=.375*d,v=.45*d,S=.393*d,D=1,y=.88,A=.958,b=[],R=pl(f,y,g),E=pl(f,D,M),T=pl(f,A,p),O=a*.078,k=a*.075,K=f.map(ne=>{const G=O+k*Math.max(0,(-ne.y/u-.6)/.4);return new le(ne.x*A-ne.nx*G,ne.y*A-ne.ny*G,m)}),q=K.map(ne=>new le(ne.x,ne.y,x));Bu(b,R,g,!0),ws(b,E,R),ws(b,T,E),ws(b,q,K),Bu(b,q,x,!1);{const ne=_.GPS_ANTENNA_W*h,G=a*.21,he=_.GPS_ANTENNA_X*h,N=-a*.05,z=u-a*.2,J=u+a*_.GPS_ANTENNA_LEN,Ae=ko(ne,G,Math.min(ne,G)*.55,2),be=_.GPS_ANTENNA_TILT_RAD,Pe=(Ue,Be,rt)=>Ae.map(ut=>{const Rt=Be-z,yt=ut.y*Ue+rt;return new le(he+ut.x*Ue,z+Rt*Math.cos(be)-yt*Math.sin(be),N+Rt*Math.sin(be)+yt*Math.cos(be))}),We=Pe(1,z,0),ge=Pe(.86,J-a*.07,0),Ie=Pe(.62,J,0);ws(b,We,ge),ws(b,ge,Ie);const Re=new le(he,J+Math.cos(be)*0,N);for(let Ue=0;Ue<Ie.length;Ue++){const Be=(Ue+1)%Ie.length;vi(b,Re,Ie[Be],Ie[Ue])}}const H=ne=>{const G=1-_.GPS_BODY_WAIST,he=(ne-.15)/.95;return h*(1-G*Math.max(0,1-he*he))};for(const ne of[-.36,-.52,-.68]){const G=H(ne),he=ne*u,N=a*.062,z=a*.029;for(const J of[1,-1]){const Ae=J>0?G*.96:-(G+z),be=J>0?G+z:-(G*.96);So(b,Ae,be,he-N,he+N,.05*d,.2*d,a*.006,null)}}{const G=H(.3),he=.3*u,N=a*.1;So(b,G*.96,G+a*.02,he-N,he+N,.02*d,.22*d,a*.008,null)}const Q=new Et;Q.setAttribute("position",new Mt(b,3)),Q.computeVertexNormals();const Y=[];ws(Y,K,T);const j=new Et;j.setAttribute("position",new Mt(Y,3)),j.computeVertexNormals();const fe=320,X=Math.round(fe*_.GPS_BODY_ASPECT),se=document.createElement("canvas");se.width=fe,se.height=X;const ie=se.getContext("2d"),F=ne=>(ne/h+1)/2*fe,I=ne=>(1-(ne/u+1)/2)*X,B=13,C={};["wall","key","keyEdge"].forEach((ne,G)=>{ie.fillStyle=sn[ne],ie.fillRect(G*B,0,B,B),C[ne]=[(G*B+B/2)/fe,1-B/2/X]});const P=(ne,G,he,N,z)=>{ie.beginPath(),ie.moveTo(ne+z,G),ie.arcTo(ne+he,G,ne+he,G+N,z),ie.arcTo(ne+he,G+N,ne,G+N,z),ie.arcTo(ne,G+N,ne,G,z),ie.arcTo(ne,G,ne+he,G,z),ie.closePath()},W=F(-.81*h),$=F(rn.fasciaHW*h),Z=I(rn.fasciaTop*u),w=I(rn.fasciaBot*u),re=ie.createLinearGradient(0,Z,0,w);re.addColorStop(0,sn.fascia),re.addColorStop(1,sn.fasciaLo),ie.fillStyle=re,P(W,Z,$-W,w-Z,fe*.035),ie.fill(),ie.textAlign="center",ie.textBaseline="middle";const te=I(rn.screenCY*u+c/2),xe=I(rn.screenCY*u-c/2),oe=($-W)*.86;ie.fillStyle=sn.label,ie.font=`600 ${Math.round(fe*.052)}px Arial, Helvetica, sans-serif`,ie.fillText("TRAILMAP 65",fe/2,Z+(te-Z)*.4,oe),ie.fillStyle=sn.labelDim,ie.font=`${Math.round(fe*.033)}px Arial, Helvetica, sans-serif`,ie.fillText("MULTI - BAND",fe/2,Z+(te-Z)*.74,oe),ie.fillStyle=sn.label,ie.font=`bold ${Math.round(fe*.056)}px Arial, Helvetica, sans-serif`,ie.fillText("CAIRN",fe/2,xe+(w-xe)*.52,oe);for(const ne of Gu){const G=F((ne.x-ne.w)*h),he=F((ne.x+ne.w)*h),N=I((ne.y+ne.h)*u),z=I((ne.y-ne.h)*u);ie.fillStyle=sn.keyLo,ie.fillRect(G-3,N-3,he-G+6,z-N+6);const J=ie.createLinearGradient(0,N,0,z);if(J.addColorStop(0,sn.keyEdge),J.addColorStop(.35,sn.key),J.addColorStop(1,sn.keyLo),ie.fillStyle=J,P(G,N,he-G,z-N,Math.min(he-G,z-N)*.22),ie.fill(),ne.rocker){const Ae=(G+he)/2,be=(N+z)/2,Pe=(he-G)/2,We=(z-N)/2;ie.fillStyle=sn.label;const ge=(Re,Ue)=>{const Be=Ae+Re*Pe*.7,rt=be+Ue*We*.7,ut=fe*.02;ie.save(),ie.translate(Be,rt),ie.rotate(Math.atan2(Ue,Re)+Math.PI/2),ie.beginPath(),ie.moveTo(0,-ut),ie.lineTo(ut*.85,ut*.7),ie.lineTo(-ut*.85,ut*.7),ie.closePath(),ie.fill(),ie.restore()};ge(0,-1),ge(0,1),ge(-1,0),ge(1,0),ie.fillStyle="rgba(0,0,0,0.45)",P(Ae-Pe*.44,be-We*.44,Pe*.88,We*.88,Pe*.24),ie.fill();const Ie=ie.createLinearGradient(0,be-We*.4,0,be+We*.4);Ie.addColorStop(0,"#5f6469"),Ie.addColorStop(1,sn.key),ie.fillStyle=Ie,P(Ae-Pe*.38,be-We*.38,Pe*.76,We*.76,Pe*.22),ie.fill();continue}ie.fillStyle=sn.label,ie.font=`600 ${Math.round(Math.min((z-N)*.5,(he-G)/Math.max(3,ne.label.length)*1.15))}px Arial, Helvetica, sans-serif`,ie.fillText(ne.label,(G+he)/2,(N+z)/2+1)}const Ce=new Vh(se);Ce.colorSpace=fn,Ce.generateMipmaps=!1,Ce.minFilter=on;const Ne=[],De=[],V=ne=>{De.push((ne.x/h+1)/2,(ne.y/u+1)/2)},L=ne=>{De.push(C[ne][0],C[ne][1])},ae=(ne,G,he,N)=>{vi(Ne,ne,G,he);for(const z of[ne,G,he])N==="planar"?V(z):L(N)},ye=(ne,G,he)=>{for(let N=0;N<ne.length;N++){const z=(N+1)%ne.length;ae(ne[N],G[N],G[z],he),ae(ne[N],G[z],ne[z],he)}};{const ne=rn.fasciaHW*h,G=(rn.fasciaTop+rn.fasciaBot)/2*u,he=(rn.fasciaTop-rn.fasciaBot)/2*u,N=ko(ne,he,ne*.16,1).map(be=>new le(be.x,be.y+G,v)),z=N.map(be=>new le(be.x,be.y,x)),J=ko(l/2,c/2,l*.055,1).map(be=>new le(be.x,be.y+rn.screenCY*u,v)),Ae=J.map(be=>new le(be.x,be.y,S));ye(N,z,"wall");for(let be=0;be<N.length;be++){const Pe=(be+1)%N.length;ae(N[be],N[Pe],J[Pe],"planar"),ae(N[be],J[Pe],J[be],"planar")}ye(Ae,J,"wall")}for(const ne of Gu){const G=(ne.x-ne.w)*h,he=(ne.x+ne.w)*h,N=(ne.y-ne.h)*u,z=(ne.y+ne.h)*u,J=a*(ne.rocker?.03:.032);So(Ne,G,he,N,z,x,x+J,a*.008,(Ae,be)=>{be==="top"?V(Ae):L("key")}),ne.rocker&&So(Ne,G+(he-G)*.3,he-(he-G)*.3,N+(z-N)*.3,z-(z-N)*.3,x+J-a*.002,x+J+a*.014,a*.006,(Ae,be)=>{be==="top"?V(Ae):L("keyEdge")})}const we=new Et;we.setAttribute("position",new Mt(Ne,3)),we.setAttribute("uv",new Mt(De,2)),we.computeVertexNormals();const Se=new ks;Se.name="gps-device";const ke=new xt(Q,new Bi({color:$A,fog:!1})),Le=new xt(j,new Bi({color:KA,fog:!1})),Oe=new xt(we,new Bi({color:YA,map:Ce,fog:!1})),ze=new xt(new Or(l,c),new Bi({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.4,color:9211020,fog:!1}));ze.position.set(0,rn.screenCY*u,S+4e-5),Se.add(ke,Le,Oe,ze),Se.renderOrder=999,Se.visible=!1,n.camera.add(Se);const ce={xtdM:0,xtdSignedM:0,headingDeg:0,distToBM:0,alongM:0,medal:"Platinum",medalText:"Platinum"};let _e=!1,ee=1,ue=0,de=0;const Ee=(ne,G,he,N)=>{s.beginPath(),s.moveTo(ne,G),s.lineTo(he,N),s.stroke()};function Te(ne,G){const he=_.GPS_SCREEN_PAD_PX,N=e/2,z=e-he,J=he,Ae=N/_.GPS_SCREEN_HALF_WIDTH_M,be=Re=>Re*Ae;s.fillStyle=pt.rough,s.fillRect(0,0,e,e);for(const[Re,Ue]of[[Xn[3],pt.bronze],[Xn[2],pt.silver],[Xn[1],pt.gold],[Xn[0],pt.core]])s.fillStyle=Ue,s.fillRect(N-be(Re),0,be(Re)*2,e);s.strokeStyle=pt.roughRule,s.lineWidth=1;for(let Re=1;Re<22;Re++){const Ue=Re/22*e;Ee(0,Ue,N-be(Xn[3]),Ue),Ee(N+be(Xn[3]),Ue,e,Ue)}s.lineWidth=1.5,s.strokeStyle=pt.edge;for(const Re of[Xn[0],Xn[Xn.length-1]])Ee(N-be(Re),0,N-be(Re),e),Ee(N+be(Re),0,N+be(Re),e);s.textAlign="center",s.textBaseline="middle",s.textAlign="left";for(let Re=500;Re<ne.lengthM;Re+=500){const Ue=Re/ne.lengthM;if(Ue<.07||Ue>.93)continue;const Be=z+(J-z)*Ue;s.strokeStyle=pt.tick,Ee(N-5,Be,N+5,Be),Re%1e3===0&&(s.font=`600 ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,s.fillStyle=pt.tickInk,s.fillText(`${(Re/1e3).toFixed(0)} km`,N+8,Be))}if(ne.track.length>1&&ne.lengthM>0){const Re=(ne.b.x-ne.a.x)/ne.lengthM,Ue=(ne.b.z-ne.a.z)/ne.lengthM,Be=Math.max(1,Math.floor(ne.track.length/64));s.strokeStyle=pt.track,s.lineWidth=1.5,s.beginPath();for(let rt=0;rt<ne.track.length;rt+=Be){const ut=ne.track[rt],Rt=(ut.x-ne.a.x)*Re+(ut.z-ne.a.z)*Ue,yt=N+be(ut.xtd),_n=z+(J-z)*Math.min(Math.max(Rt/ne.lengthM,0),1);rt===0?s.moveTo(yt,_n):s.lineTo(yt,_n)}s.stroke()}s.lineCap="round",s.strokeStyle=pt.routeHalo,s.lineWidth=7,Ee(N,z,N,J),s.strokeStyle=pt.route,s.lineWidth=3.5,Ee(N,z,N,J),s.lineCap="butt",s.textAlign="center",s.textBaseline="middle";for(const[Re,Ue]of[[z,"A"],[J,"B"]]){const Be=e*.03;s.fillStyle=pt.badge,s.fillRect(N-Be-2,Re-Be-2,(Be+2)*2,(Be+2)*2),s.fillStyle=pt.mark,s.fillRect(N-Be,Re-Be,Be*2,Be*2);const rt=e*.072,ut=e*.06;s.fillStyle=pt.badge,s.fillRect(N+Be+4,Re-ut/2,rt,ut),s.strokeStyle=pt.badgeInk,s.lineWidth=1,s.strokeRect(N+Be+4.5,Re-ut/2+.5,rt-1,ut-1),s.fillStyle=pt.badgeInk,s.font=`bold ${Math.round(e*.048)}px Arial, Helvetica, sans-serif`,s.fillText(Ue,N+Be+4+rt/2,Re+1)}{const Re=e*.115,Ue=e*.115,Be=e*.078;s.fillStyle=pt.badge,s.beginPath(),s.arc(Re,Ue,Be,0,Math.PI*2),s.fill(),s.save(),s.translate(Re,Ue),s.rotate(-ne.bearingRad),s.fillStyle=pt.badgeInk,s.beginPath(),s.moveTo(0,-Be*.78),s.lineTo(Be*.34,Be*.1),s.lineTo(-Be*.34,Be*.1),s.closePath(),s.fill(),s.restore(),s.font=`bold ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,s.fillStyle=pt.badgeInk,s.fillText("N",Re,Ue+Be*.55)}{const Re=be(50),Ue=e*.055,Be=e*.925;s.fillStyle=pt.badge,s.fillRect(Ue-5,Be-13,Re+10,25),s.strokeStyle=pt.badgeInk,s.lineWidth=1.5,s.beginPath(),s.moveTo(Ue,Be-1),s.lineTo(Ue,Be+5),s.lineTo(Ue+Re,Be+5),s.lineTo(Ue+Re,Be-1),s.stroke(),s.fillStyle=pt.badgeInk,s.font=`600 ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,s.fillText("50 m",Ue+Re/2,Be-5)}{const Re=ne.lengthM>0?Math.min(Math.max(ne.alongM/ne.lengthM,0),1):0,Ue=e*.058,Be=Math.min(Math.max(N+be(ne.xtdSignedM),Ue),e-Ue),rt=z+(J-z)*Re;s.save(),s.translate(Be,rt),s.rotate(G-ne.bearingRad),s.beginPath(),s.moveTo(0,-Ue),s.lineTo(Ue*.72,Ue*.86),s.lineTo(0,Ue*.4),s.lineTo(-Ue*.72,Ue*.86),s.closePath(),s.fillStyle=pt.me,s.fill(),s.strokeStyle=pt.meEdge,s.lineWidth=2,s.stroke(),s.restore()}const Pe=[["FROM LINE",ZA(ne.xtdSignedM)],["BAND",ce.medalText],["TO B",jA(ne.distToBM)],["ELAPSED",QA(ne.elapsedS)]];s.fillStyle=xo.bg,s.fillRect(0,e,e,t),s.strokeStyle=xo.rule,s.lineWidth=1,Ee(e/2,e+2,e/2,e+t-2),Ee(2,e+t/2,e-2,e+t/2),Ee(0,e+.5,e,e+.5),s.textAlign="left";for(let Re=0;Re<Pe.length;Re++){const Ue=Re%2*(e/2)+e*.035,Be=e+Math.floor(Re/2)*(t/2);s.fillStyle=xo.label,s.font=`bold ${Math.round(e*.054)}px Arial, Helvetica, sans-serif`,s.textBaseline="top",s.fillText(Pe[Re][0],Ue,Be+t*.045),s.fillStyle=xo.value,s.font=`bold ${Math.round(e*.088)}px Arial, Helvetica, sans-serif`,s.textBaseline="alphabetic",s.fillText(Pe[Re][1],Ue,Be+t*.43)}const We=e+t,ge=(Re,Ue,Be,rt,ut,Rt,yt)=>{const _n=s.createLinearGradient(Re,Ue,Be,rt);_n.addColorStop(0,`rgba(20,26,16,${yt})`),_n.addColorStop(1,"rgba(20,26,16,0)"),s.fillStyle=_n,s.fillRect(Math.min(Re,Be),Math.min(Ue,rt),ut,Rt)};ge(0,0,0,20,e,20,.46),ge(0,0,15,0,15,We,.34),ge(e,0,e-11,0,11,We,.22),ge(0,We,0,We-11,e,11,.22);const Ie=s.createLinearGradient(0,0,e*.8,e+t);Ie.addColorStop(0,"rgba(214,226,236,0.11)"),Ie.addColorStop(.45,"rgba(214,226,236,0.03)"),Ie.addColorStop(1,"rgba(30,36,26,0.12)"),s.fillStyle=Ie,s.fillRect(0,0,e,e+t),r.needsUpdate=!0}return{update(ne){const G=ne.mission,he=ne.player.yaw;ce.xtdM=G.xtdM,ce.xtdSignedM=G.xtdSignedM,ce.headingDeg=JA(he),ce.distToBM=G.distToBM,ce.alongM=G.alongM,ce.medal=G.medal,ce.medalText=G.medal;const N=Math.min(1,_.SIM_DT/Math.max(.001,_.GPS_RAISE_S)),z=Math.min(1,_.SIM_DT/Math.max(.001,_.GPS_STOW_S));de+=(ue-de)*z;const J=de>.995;if(Se.visible=_e&&!J,!_e||J)return;Te(G,he);const Ae=ne.player.speedMps>_.GPS_RAISE_SPEED_MPS?0:1;ee+=(Ae-ee)*N;const be=ee*ee*(3-2*ee),Pe=de*de*(3-2*de);Se.position.set(_.GPS_DEVICE_X+Pe*_.GPS_STOW_DX,_.GPS_DEVICE_Y_LOW+(_.GPS_DEVICE_Y_HIGH-_.GPS_DEVICE_Y_LOW)*be-Pe*_.GPS_STOW_DROP,-.5),Se.rotation.set((1-be)*_.GPS_DEVICE_TIP_RAD+Pe*.5,-.22,Pe*.6)},readout:()=>({...ce}),setVisible(ne){_e=ne,Se.visible=ne&&de<=.995},visible:()=>_e,raised:()=>ee>.5,setStowed(ne){ue=ne?1:0},stowed:()=>ue>.5,dispose(){n.camera.remove(Se);for(const ne of[ke,Le,Oe,ze])ne.geometry.dispose(),ne.material.dispose();r.dispose(),Ce.dispose()}}}function n1(n){const e=Xe("div","arrival",n.ui.root??document.body);let t=_.ARRIVAL_FADE_S,i=!1,s=null;function r(){t=0,i=!1,e.style.display="none",s==null||s()}return{el:e,start(){t=_.ARRIVAL_FADE_S,i=!0,e.style.display="",e.style.opacity="1"},update(o,a){!i||o.flags.paused||(t=Math.max(0,t-a),e.style.opacity=String(t/_.ARRIVAL_FADE_S),t===0&&r())},active:()=>i,remainingS:()=>t,onDone(o){s=o},skip(){i?r():e.style.display="none"}}}const Cs={r:20,g:23,b:26},Ns={guide:"rgba(160,175,165,0.22)",line:"#8fa79a",track:"#e6dfcc",worst:"#d9a066",label:"#9aa39c",font:"11px ui-monospace, Menlo, Consolas, monospace"},i1=[_.MEDAL_PLATINUM_M,_.MEDAL_GOLD_M,_.MEDAL_SILVER_M,_.MEDAL_BRONZE_M];function ml(n,e,t,i,s){n.beginPath(),n.moveTo(e,t),n.lineTo(i,s),n.stroke()}function s1(n,e){const t=n.getContext("2d",{willReadFrequently:!0}),i=n.width,s=n.height,r=_.PLOT_PAD_PX,o=i/2,a=s-r,l=r,{a:c,b:h,track:u,worstIndex:d}=e,f=e.lengthM||1;let g=_.MEDAL_BRONZE_M;for(const S of u)g=Math.max(g,Math.abs(S.xtd));const M=(o-r)/g,p=S=>o+S*M,m=S=>a+(l-a)*(Jd(c,h,S).along/f);t.fillStyle=`rgb(${Cs.r},${Cs.g},${Cs.b})`,t.fillRect(0,0,i,s),t.lineWidth=1,t.strokeStyle=Ns.guide;for(const S of i1)ml(t,p(-S),l,p(-S),a),ml(t,p(S),l,p(S),a);if(t.lineWidth=2,t.strokeStyle=Ns.line,ml(t,o,a,o,l),u.length>0){t.lineWidth=1.5,t.strokeStyle=Ns.track,t.beginPath(),t.moveTo(p(u[0].xtd),m(u[0]));for(let S=1;S<u.length;S++)t.lineTo(p(u[S].xtd),m(u[S]));t.stroke()}if(d>=0&&d<u.length){const S=u[d];t.strokeStyle=Ns.worst,t.beginPath(),t.arc(p(S.xtd),m(S),5,0,Math.PI*2),t.stroke()}t.fillStyle=Ns.label,t.font=Ns.font,t.textAlign="center",t.fillText("A",o,a+15),t.fillText("B",o,l-7);const x=t.getImageData(0,0,i,s).data;let v=!1;for(let S=0;S<x.length&&!v;S+=4)v=x[S]!==Cs.r||x[S+1]!==Cs.g||x[S+2]!==Cs.b;return{samples:u.length,worstIndex:d,nonBlank:v}}const r1=[["medal","medal"],["maxDev","max deviation"],["avgDev","average deviation"],["lineScore","line score"],["elapsed","elapsed"],["length","line length"]];function o1(n){const e=Xe("div","result",n.ui.root??document.body);e.style.display="none";const t=Xe("div","result-panel",e),i=new Map;for(const[a,l]of r1){const c=Xe("div",`result-row result-row-${a}`,t);Xe("span","result-label",c).textContent=l;const h=Xe("span","result-value",c);h.dataset.field=a,i.set(a,h)}const s=Xe("canvas","result-plot",t);s.width=_.PLOT_W_PX,s.height=_.PLOT_H_PX;let r={samples:0,worstIndex:-1,nonBlank:!1},o=!1;return{el:e,show(a,l){for(const[c,h]of i)h.textContent=a[c]??"";r=s1(s,l),e.style.display="",o=!0},hide(){e.style.display="none",o=!1},plotStats:()=>r,visible:()=>o}}function a1(n=0){const e=[];return{mark:t=>{e.push({label:t,tMs:performance.now()-n})},timings:()=>e.map(t=>({label:t.label,tMs:t.tMs})),total:()=>e.length===0?0:e[e.length-1].tMs}}const Vf="v1";function l1(n,e){const t=_.LINE_HASH_DECIMALS,i=s=>s.toFixed(t);return`${Vf}:${i(n.lat)},${i(n.lon)}>${i(e.lat)},${i(e.lon)}`}function c1(n,e){const t=l1(n,e);let i=2166136261,s=16777619;for(let o=0;o<t.length;o++){const a=t.charCodeAt(o);i=Math.imul(i^a,16777619)>>>0,s=Math.imul(s^a,2246822507)>>>0}const r=o=>o.toString(16).padStart(8,"0");return`${Vf}:${r(i)}${r(s)}`}const Vi=Math.PI/180,Wf=6378137;function h1(n){return n==="Sprint"?[_.CATEGORY_MIN_M,_.CATEGORY_SPRINT_MAX_M]:n==="Trek"?[_.CATEGORY_SPRINT_MAX_M,_.CATEGORY_TREK_MAX_M]:[_.CATEGORY_TREK_MAX_M,_.CATEGORY_MAX_M]}function u1(n,e,t){const i=t/Wf,s=n.lat*Vi,r=Math.sin(s)*Math.cos(i)+Math.cos(s)*Math.sin(i)*Math.cos(e),o=n.lon*Vi+Math.atan2(Math.sin(e)*Math.sin(i)*Math.cos(s),Math.cos(i)-Math.sin(s)*r);return{lat:Math.asin(r)/Vi,lon:(o/Vi+540)%360-180}}function d1(n,e,t,i,s){let r=e.lon-n.lon;r>180?r-=360:r<-180&&(r+=360);const o=Math.max(2,Math.ceil(t/s)+1),a=t/(o-1);let l=0,c=0;for(let h=0;h<o;h++){const u=h/(o-1);l=i.landAt(n.lat+(e.lat-n.lat)*u,n.lon+r*u)?0:l+a,l>c&&(c=l)}return c}function f1(n,e,t){const[i,s]=h1(e),r=_.RANDOM_LINE_BAND_INSET_M,o=Math.max(t.minLengthM??0,i+r),a=Math.min(t.maxLengthM??1/0,s-r);if(!(a>o))return null;const{land:l}=t,c=t.stepM??_.WATER_SCAN_STEP_M,h=t.maxAttempts??_.RANDOM_LINE_MAX_ATTEMPTS,u=Math.sin((yr-a/Wf/Vi)*Vi),d=Ki(n),f=d.fork("randomLine.origin"),g=d.fork("randomLine.bearing"),M=d.fork("randomLine.length");for(let p=0;p<h;p++){const m=f.next(),x=f.next(),v=g.next()*2*Math.PI,S=M.range(o,a),D={lat:Math.asin((2*m-1)*u)/Vi,lon:x*360-180},y=u1(D,v,S),A=Bc(D,y);if(Ef(A)===e&&!(Math.abs(D.lat)>yr||Math.abs(y.lat)>yr)&&!(!l.landAt(D.lat,D.lon)||!l.landAt(y.lat,y.lon))&&!(d1(D,y,A,l,c)>_.WATER_CROSSING_MAX_M))return{a:D,b:y,lengthM:A,category:e,lineHash:c1(D,y)}}return null}function p1(n){if(n.format!=="beeline-coastline-v1")throw new Error(`coastline: unexpected format "${n.format}"`);const{cellDeg:e,cols:t,rows:i}=n,s=atob(n.bits),r=new Uint8Array(s.length);for(let o=0;o<s.length;o++)r[o]=s.charCodeAt(o);if(r.length<t*i+7>>3)throw new Error(`coastline: bitmask is ${r.length} B, need ${t*i+7>>3}`);return{cellDeg:e,cols:t,rows:i,landCells:n.landCells,landAt(o,a){const l=Math.floor((90-o)/e);if(l<0||l>=i)return!1;const c=(Math.floor((a+180)/e)%t+t)%t,h=l*t+c;return(r[h>>3]>>(h&7)&1)===1}}}let zu=null;function m1(n="/data/coastline.json"){return zu??(zu=fetch(n).then(async e=>{if(!e.ok)throw new Error(`coastline: ${n} → HTTP ${e.status}`);return p1(await e.json())})),zu}const _l={a:null,b:null,lengthM:null,bearingDeg:null,category:null,lineHash:null,valid:!1,reasons:[]},_1=`
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
`;function Hu(n){const e=document.createElement("style");e.textContent=_1,document.head.appendChild(e);const t=document.createElement("div");t.className="bl-planner",t.style.display="none",n.appendChild(t);const i=document.createElement("div");i.className="bl-planner-hint",i.textContent="click A then B  ·  M to close",t.appendChild(i);let s=null,r=null,o=null,a=null,l=null,c=null,h="A",u=null;const d=()=>{s||(s=document.createElement("div"),s.className="bl-planner-confirm",s.style.display="none",r=document.createElement("span"),o=document.createElement("button"),o.type="button",o.textContent="Walk this line",a=document.createElement("button"),a.type="button",a.textContent="start at A",l=document.createElement("button"),l.type="button",l.textContent="random line",s.append(r,l,a,o),t.appendChild(s))};let f=null,g=!1,M=null,p=null;const m=[],x=()=>p||(p=(async()=>{const[{createPlannerMap:v},{createLineDraft:S}]=await Promise.all([pc(()=>import("./plannerMap-BANmDVLi.js"),__vite__mapDeps([0,1]),import.meta.url),pc(()=>import("./lineDraft-D2H5nkbm.js"),[],import.meta.url)]);M=S(g?{validate:{deferDataRules:!0}}:{}),f=v(t),f.onPick(y=>{M.pick(y);const A=M.state();f.setLine(A.a,A.b)});for(const y of m.splice(0))M.pick(y);const D=M.state();f.setLine(D.a,D.b)})(),p);return{mount:x,mounted:()=>f!==null,layers:()=>(f==null?void 0:f.layers())??{basemap:"",hillshade:null,attribution:[]},pick:v=>{if(M){const S=M.pick(v);f==null||f.setLine(S.a,S.b)}else m.push(v),x()},draft:()=>(M==null?void 0:M.state())??_l,openEntry:async()=>(g=!0,d(),t.style.setProperty("inset","0","important"),t.style.borderRadius="0",s.style.display="flex",i.textContent="click your start (A), then your destination (B)",t.style.display="block",await x(),f==null||f.map.jumpTo({center:[10,25],zoom:1.4}),new Promise(v=>{let S=h;a.onclick=()=>{S=S==="A"?"B":"A",h=S,D()},l.onclick=async()=>{const A=await m1(),b=Jo[Math.floor(Math.random()*Jo.length)],R=f1(Math.random()*2147483647|0,b,{land:A});if(!R)return;const E={a:R.a,b:R.b},T=M==null?void 0:M.state();T!=null&&T.a&&!T.b&&(M==null||M.pick(E.a)),M==null||M.pick(E.a),M==null||M.pick(E.b),f==null||f.setLine(E.a,E.b),f==null||f.map.fitBounds([[Math.min(E.a.lon,E.b.lon),Math.min(E.a.lat,E.b.lat)],[Math.max(E.a.lon,E.b.lon),Math.max(E.a.lat,E.b.lat)]],{padding:90,duration:600}),D()},window.__entry={pick:A=>{M==null||M.pick(A);const b=M==null?void 0:M.state();f==null||f.setLine((b==null?void 0:b.a)??null,(b==null?void 0:b.b)??null),D()},draft:()=>(M==null?void 0:M.state())??_l,spawn:A=>{S=A,h=A,D()},confirm:()=>o.click()};const D=()=>{const A=(M==null?void 0:M.state())??_l;o.disabled=!A.valid,a.textContent=`start at ${S}`,r.textContent=A.valid?`${((A.lengthM??0)/1e3).toFixed(1)} km · walk starts at ${S} · land check at survey`:A.reasons.length?A.reasons.join("  ·  "):"pick A and B"};f==null||f.onPick(()=>D());const y=window.setInterval(D,250);D(),o.onclick=()=>{const A=M==null?void 0:M.state();!(A!=null&&A.valid)||!A.a||!A.b||(window.clearInterval(y),delete window.__entry,s.style.display="none",t.style.removeProperty("inset"),t.style.removeProperty("border-radius"),t.style.display="none",g=!1,v({a:A.a,b:A.b,spawn:S}))}})),onAbandon:v=>{c=v},open:async()=>{if(t.style.display="block",c&&!u){u=document.createElement("div"),u.className="bl-planner-abandon";const v=document.createElement("button");v.type="button",v.textContent="abandon & replan";let S=0;v.addEventListener("click",()=>{if(Date.now()-S<4e3){c==null||c();return}S=Date.now(),v.textContent="click again — the run is LOST",window.setTimeout(()=>{v.textContent="abandon & replan",S=0},4e3)}),u.appendChild(v),t.appendChild(u)}await x()},close:()=>{u==null||u.remove(),u=null,t.style.display="none"},isOpen:()=>t.style.display!=="none",destroy:()=>{f==null||f.destroy(),f=null,M=null,t.remove(),e.remove()}}}const g1=4;function M1(n){const e=n.getExtension("EXT_disjoint_timer_query_webgl2"),t=[];let i=null,s=null,r=!1;const o=()=>{if(e){if(n.getParameter(e.GPU_DISJOINT_EXT)){for(const a of t)n.deleteQuery(a);t.length=0;return}for(;t.length>0;){const a=t[0];if(!n.getQueryParameter(a,n.QUERY_RESULT_AVAILABLE))break;s=n.getQueryParameter(a,n.QUERY_RESULT)/1e6,n.deleteQuery(a),t.shift()}}};return{available:e!==null,begin(){if(!e||!r||i||(o(),t.length>=g1))return;const a=n.createQuery();a&&(i=a,n.beginQuery(e.TIME_ELAPSED_EXT,a))},end(){!e||!i||(n.endQuery(e.TIME_ELAPSED_EXT),t.push(i),i=null)},lastMs(){return r=!0,o(),s}}}const Bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const E1=new Nc(-1,1,1,-1,0,1);class v1 extends Et{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}}const x1=new v1;class Vc{constructor(e){this._mesh=new xt(x1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,E1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class S1 extends sr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fi.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vu extends sr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class A1 extends sr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class R1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new et);this._width=i.width,this._height=i.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new S1(Bo),this.copyPass.material.blending=It,this.clock=new gE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vu!==void 0&&(o instanceof Vu?i=!0:o instanceof A1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class y1 extends sr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const T1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class b1 extends sr{constructor(){super();const e=T1;this.uniforms=fi.clone(e.uniforms),this.material=new dE({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ju?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ju&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ao={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new et},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ot},cameraProjectionMatrixInverse:{value:new ot},cameraWorldMatrix:{value:new ot},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new le(-1,-1,-1)},sceneBoxMax:{value:new le(1,1,1)}},vertexShader:`

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
		}`},Ro={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},gl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function w1(n=5){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=C1(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=t[o],l=2*Math.PI*a/i,c=new le(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Lc(s,e,e);return r.wrapS=Yi,r.wrapT=Yi,r.needsUpdate=!0,r}function C1(n){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}const yo={defines:{SAMPLES:16,SAMPLE_VECTORS:Xf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new et},cameraProjectionMatrixInverse:{value:new ot},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Xf(n,e,t){const i=N1(n,e,t);let s="vec3[SAMPLES](";for(let r=0;r<n;r++){const o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function N1(n,e,t){const i=[];for(let s=0;s<n;s++){const r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new le(Math.cos(r),Math.sin(r),o))}return i}class D1{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,M=t-f;let p,m;g>M?(p=1,m=0):(p=0,m=1);const x=g-p+h,v=M-m+h,S=g-1+2*h,D=M-1+2*h,y=l&255,A=c&255,b=this.perm[y+this.perm[A]]%12,R=this.perm[y+p+this.perm[A+m]]%12,E=this.perm[y+1+this.perm[A+1]]%12;let T=.5-g*g-M*M;T<0?i=0:(T*=T,i=T*T*this.dot(this.grad3[b],g,M));let O=.5-x*x-v*v;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[R],x,v));let k=.5-S*S-D*D;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[E],S,D)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a;const c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(i+c),f=1/6,g=(h+u+d)*f,M=h-g,p=u-g,m=d-g,x=e-M,v=t-p,S=i-m;let D,y,A,b,R,E;x>=v?v>=S?(D=1,y=0,A=0,b=1,R=1,E=0):x>=S?(D=1,y=0,A=0,b=1,R=0,E=1):(D=0,y=0,A=1,b=1,R=0,E=1):v<S?(D=0,y=0,A=1,b=0,R=1,E=1):x<S?(D=0,y=1,A=0,b=0,R=1,E=1):(D=0,y=1,A=0,b=1,R=1,E=0);const T=x-D+f,O=v-y+f,k=S-A+f,K=x-b+2*f,q=v-R+2*f,H=S-E+2*f,Q=x-1+3*f,Y=v-1+3*f,j=S-1+3*f,fe=h&255,X=u&255,se=d&255,ie=this.perm[fe+this.perm[X+this.perm[se]]]%12,F=this.perm[fe+D+this.perm[X+y+this.perm[se+A]]]%12,I=this.perm[fe+b+this.perm[X+R+this.perm[se+E]]]%12,B=this.perm[fe+1+this.perm[X+1+this.perm[se+1]]]%12;let C=.6-x*x-v*v-S*S;C<0?s=0:(C*=C,s=C*C*this.dot3(this.grad3[ie],x,v,S));let P=.6-T*T-O*O-k*k;P<0?r=0:(P*=P,r=P*P*this.dot3(this.grad3[F],T,O,k));let W=.6-K*K-q*q-H*H;W<0?o=0:(W*=W,o=W*W*this.dot3(this.grad3[I],K,q,H));let $=.6-Q*Q-Y*Y-j*j;return $<0?a=0:($*=$,a=$*$*this.dot3(this.grad3[B],Q,Y,j)),32*(s+r+o+a)}noise4d(e,t,i,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const M=(e+t+i+s)*l,p=Math.floor(e+M),m=Math.floor(t+M),x=Math.floor(i+M),v=Math.floor(s+M),S=(p+m+x+v)*c,D=p-S,y=m-S,A=x-S,b=v-S,R=e-D,E=t-y,T=i-A,O=s-b,k=R>E?32:0,K=R>T?16:0,q=E>T?8:0,H=R>O?4:0,Q=E>O?2:0,Y=T>O?1:0,j=k+K+q+H+Q+Y,fe=o[j][0]>=3?1:0,X=o[j][1]>=3?1:0,se=o[j][2]>=3?1:0,ie=o[j][3]>=3?1:0,F=o[j][0]>=2?1:0,I=o[j][1]>=2?1:0,B=o[j][2]>=2?1:0,C=o[j][3]>=2?1:0,P=o[j][0]>=1?1:0,W=o[j][1]>=1?1:0,$=o[j][2]>=1?1:0,Z=o[j][3]>=1?1:0,w=R-fe+c,re=E-X+c,te=T-se+c,xe=O-ie+c,oe=R-F+2*c,Ce=E-I+2*c,Ne=T-B+2*c,De=O-C+2*c,V=R-P+3*c,L=E-W+3*c,ae=T-$+3*c,ye=O-Z+3*c,we=R-1+4*c,Se=E-1+4*c,ke=T-1+4*c,Le=O-1+4*c,Oe=p&255,ze=m&255,ce=x&255,_e=v&255,ee=a[Oe+a[ze+a[ce+a[_e]]]]%32,ue=a[Oe+fe+a[ze+X+a[ce+se+a[_e+ie]]]]%32,de=a[Oe+F+a[ze+I+a[ce+B+a[_e+C]]]]%32,Ee=a[Oe+P+a[ze+W+a[ce+$+a[_e+Z]]]]%32,Te=a[Oe+1+a[ze+1+a[ce+1+a[_e+1]]]]%32;let ne=.6-R*R-E*E-T*T-O*O;ne<0?h=0:(ne*=ne,h=ne*ne*this.dot4(r[ee],R,E,T,O));let G=.6-w*w-re*re-te*te-xe*xe;G<0?u=0:(G*=G,u=G*G*this.dot4(r[ue],w,re,te,xe));let he=.6-oe*oe-Ce*Ce-Ne*Ne-De*De;he<0?d=0:(he*=he,d=he*he*this.dot4(r[de],oe,Ce,Ne,De));let N=.6-V*V-L*L-ae*ae-ye*ye;N<0?f=0:(N*=N,f=N*N*this.dot4(r[Ee],V,L,ae,ye));let z=.6-we*we-Se*Se-ke*ke-Le*Le;return z<0?g=0:(z*=z,g=z*z*this.dot4(r[Te],we,Se,ke,Le)),27*(h+u+d+f+g)}}class bn extends sr{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=w1(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new yn(this.width,this.height,{type:qn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},Ao.defines),uniforms:fi.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:It,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new fE,this.normalMaterial.blending=It,this.pdMaterial=new Pt({defines:Object.assign({},yo.defines),uniforms:fi.clone(yo.uniforms),vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},Ro.defines),uniforms:fi.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,blending:It}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:fi.clone(Bo.uniforms),vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:yl,blendDst:gr,blendEquation:Rn,blendSrcAlpha:Rl,blendDstAlpha:gr,blendEquationAlpha:Rn}),this.blendMaterial=new Pt({uniforms:fi.clone(gl.uniforms),vertexShader:gl.vertexShader,fragmentShader:gl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ku,blendSrc:yl,blendDst:gr,blendEquation:Rn,blendSrcAlpha:Rl,blendDstAlpha:gr,blendEquationAlpha:Rn}),this.fsQuad=new Vc(null),this.originalClearColor=new Ve,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ic,this.depthTexture.format=ji,this.depthTexture.type=Zi,this.normalRenderTarget=new yn(this.width,this.height,{minFilter:zt,magFilter:zt,type:qn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Xf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case bn.OUTPUT.Off:break;case bn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case bn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){const t=new D1,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new Lc(s,e,e,mn,In);return r.wrapS=Yi,r.wrapT=Yi,r.needsUpdate=!0,r}}bn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function I1(n,e,t,i=4,s=!1,r=1,o=0,a=1){const l=n.getSize(new et),c=n.getPixelRatio(),h=g=>new yn(l.x*c,l.y*c,{type:qn,samples:g});let u=h(i);const d=new R1(n,u);d.setPixelRatio(c),d.setSize(l.x,l.y),d.addPass(new y1(e,t));let f=null;return s&&(f=new bn(e,t,l.x*c,l.y*c),f.updateGtaoMaterial({radius:1,distanceExponent:1,thickness:1,scale:r,samples:16,screenSpaceRadius:!1}),o!==0&&(f.output=o),f.blendIntensity=a,d.addPass(f)),d.addPass(new b1),{render:()=>d.render(),setSize:(g,M)=>{d.setSize(g,M),f==null||f.setSize(g*c,M*c)},get samples(){return u.samples},get aoEnabled(){return f!==null},get aoBlend(){return f===null?null:f.blendIntensity},setSamples:g=>{if(g===u.samples)return;const M=h(g);d.reset(M),u=M}}}const L1=n=>n===0?"off":`${n}×`;function P1(n,e){const t={...e.initial};let i=null,s=[],r=[],o=null;function a(){const h=Xe("div","settings",n.ui.root??document.body);h.hidden=!0,h.dataset.field="settings";const u=Xe("div","settings-title",h);u.textContent="SETTINGS";const d=Xe("div","settings-row",h);d.dataset.field="settings-aa",Xe("div","settings-label",d).textContent="antialiasing";const f=Xe("div","settings-opts",d);s=e.aaLevels.map(M=>{const p=Xe("button","settings-opt",f);return p.type="button",p.textContent=L1(M),p.dataset.aa=String(M),p.addEventListener("click",()=>{t.aaSamples=M,l(),e.onChange({...t})}),p});const g=Xe("div","settings-note",h);return g.textContent="O or Esc to close · the clock keeps running",o=Xe("div","settings-note settings-warn",h),o.dataset.field="settings-aa-warn",l(),h}function l(){for(const h of s)h.setAttribute("aria-pressed",String(Number(h.dataset.aa)===t.aaSamples));for(const h of r)h.setAttribute("aria-pressed",String(h.dataset.ao==="true"===t.ao));o&&(o.textContent=t.aaSamples===0?"antialiasing off also hardens the water edge and the rock fade":"")}const c=()=>i??(i=a());return{toggle:()=>{const h=c();h.hidden=!h.hidden},setVisible:h=>{!h&&i===null||(c().hidden=!h)},visible:()=>i!==null&&!i.hidden,get:()=>({...t}),mounted:()=>i!==null}}const O1="beeline.settings.v1",_r={aaSamples:_.AA_SAMPLES_DEFAULT,ao:!1};function U1(n){return _.AA_SAMPLES_OPTIONS.filter(e=>e===0||e<=n)}function F1(n){const e=n.read();if(!e)return{..._r};try{const t=JSON.parse(e);if(typeof t!="object"||t===null)return{..._r};const i=t;return{aaSamples:typeof i.aaSamples=="number"?i.aaSamples:_r.aaSamples,ao:typeof i.ao=="boolean"?i.ao:_r.ao}}catch{return{..._r}}}function k1(n,e){n.write(JSON.stringify(e))}function B1(n,e){if(e.includes(n.aaSamples))return n;const t=e.filter(s=>s<n.aaSamples),i=t.length>0?Math.max(...t):Math.min(...e);return{...n,aaSamples:i}}const G1="beeline.save.v1";function z1(n=G1){const e=()=>{try{return globalThis.localStorage??null}catch{return null}};return{read:()=>{var t;try{return((t=e())==null?void 0:t.getItem(n))??null}catch{return null}},write:t=>{var i;try{(i=e())==null||i.setItem(n,t)}catch{}}}}const H1={spring:{bias:_.SEASON_SPRING_OVERCAST,amp:.45},summer:{bias:_.SEASON_SUMMER_OVERCAST,amp:.3},autumn:{bias:_.SEASON_AUTUMN_OVERCAST,amp:.4},winter:{bias:_.SEASON_WINTER_OVERCAST,amp:.3}},V1=11843773,ma=n=>Math.min(1,Math.max(0,n)),W1=n=>{const e=ma(n);return e*e*(3-2*e)},$f=_.TERRAIN_WIND_FROM_DEG*Math.PI/180,Go=Math.sin($f),zo=-Math.cos($f);function Kf(n,e){return(n*Go+e*zo)/_.WEATHER_FRONT_SPAN_M*_.WEATHER_PERIOD_S}function X1(n,e){const t=_.WEATHER_PERIOD_S,i=n%1e3*.001*Math.PI*2;return .55*Math.sin(2*Math.PI*e/t+i)+.3*Math.sin(2*Math.PI*e/(t*.37)+i*1.7)+.15*Math.sin(2*Math.PI*e/(t*2.63)+i*.4)}function ia(n,e,t,i=0,s=0){const{bias:r,amp:o}=H1[t],a=W1(e/_.WEATHER_ONSET_S);return ma(a*(r+o*X1(n,e+Kf(i,s))))}function Yf(n,e,t,i=0,s=0){const r=_.WEATHER_WET_TAU_S,o=_.WEATHER_WET_SAMPLES;let a=0;for(let l=0;l<o;l++){const c=l*r/(o-1),h=e-c;if(h<0)continue;const u=ia(n,h,t,i,s)*Math.exp(-c/r);u>a&&(a=u)}return ma(a)}function $1(n,e,t,i,s){const r=_.HEMI_INTENSITY,o=_.FOG_HALF_DISTANCE_SEA_M,a=_.GROUNDCOVER_SWAY_AMP;let l=n.lights.sun.intensity;const c={zenith:new Ve,horizon:new Ve,glow:new Ve},h=n.fogBands.map(()=>new Ve),u=new Ve(V1),d=new Ve;let f="",g=null,M=null,p=null,m=0,x=0;const v=()=>{l=n.lights.sun.intensity,c.zenith.copy(n.skyZenith),c.horizon.copy(n.skyHorizon),c.glow.copy(n.sunGlow),n.fogBands.forEach((y,A)=>h[A].copy(y.color))};function S(y){m=y;const A={sunI:l,hemiI:r,fogHalfM:o,sway:a},b=_.WEATHER_SKY_MIX*y;n.skyZenith.copy(c.zenith).lerp(u,b),n.skyHorizon.copy(c.horizon).lerp(u,b),n.sunGlow.copy(c.glow).lerp(u,b*1.15>1?1:b*1.15);for(let R=0;R<n.fogBands.length;R++)n.fogBands[R].color!==n.skyHorizon&&n.fogBands[R].color.copy(d.copy(h[R]).lerp(u,b));n.fogK.y=A.fogHalfM*(1-_.WEATHER_FOG_GAIN*y),n.lights.sun.intensity=A.sunI*(1-(1-_.WEATHER_SUN_DIM)*y),n.lights.hemi.intensity=A.hemiI*(1+(_.WEATHER_AMBIENT_LIFT-1)*y),t.uWind.value.w=A.sway*(1+(_.WEATHER_WIND_GAIN-1)*y),n.cloud.x=y}function D(y,A,b,R,E){let T=0;if(p!==null)T=p;else if(g===null){const K=_.WEATHER_FRONT_PROBE_M;T=(ia(i,y,A,b+Go*K,R+zo*K)-E)/K}const O=K=>o*(1-_.WEATHER_FOG_GAIN*ma(K)),k=T===0?0:(O(E+T*_.WEATHER_FRONT_PROBE_M)/O(E)-1)/_.WEATHER_FRONT_PROBE_M;n.front.set(Go,zo,T,k)}return{update(y){const A=e.get();A!==f&&(v(),f=A);const b=y.clock.simTick*_.SIM_DT,R=y.player.x,E=y.player.z,T=g??ia(i,b,A,R,E);S(T),D(b,A,R,E,T),x=M??g??Yf(i,b,A,R,E);for(const O of s)O.uWet.value=x},setOverride(y){g=y},setWetOverride(y){M=y},setFrontOverride(y){p=y},front:()=>({dirX:n.front.x,dirZ:n.front.y,dOvercastPerM:n.front.z,dFogMulPerM:n.front.w}),overcast:()=>m,wetness:()=>x,snapshot:()=>({overcast:m,wetness:x,fogHalfM:n.fogK.y,sunI:n.lights.sun.intensity,hemiI:n.lights.hemi.intensity,swayAmp:t.uWind.value.w,skyZenith:n.skyZenith.getHex(),cloudCover:n.cloud.x}),dispose(){g=null,M=null,p=null,S(0),n.front.set(Go,zo,0,0),x=0;for(const y of s)y.uWet.value=0}}}const Wu={straight:0,detour60:60,detour120:120};function K1(n,e){const t=n.b.x-n.a.x,i=n.b.z-n.a.z,s=e*_.DETOUR_SCRIPT_SIDE/n.lengthM;return{x:(n.a.x+n.b.x)/2-i*s,z:(n.a.z+n.b.z)/2+t*s}}function Y1(n,e,t,i){if(t.phase==="finished"||e>=_.SCRIPT_MAX_TICKS)return null;let s=t.b;if(Wu[n]>0){const r=K1(t,Wu[n]);ca(r,i)>_.SCRIPT_WAYPOINT_RADIUS_M&&t.alongM<t.lengthM/2&&(s=r)}return{fwd:1,strafe:0,yaw:Qd(i,s),pitch:0,sprint:!1}}function q1(n,e,t,i=_.SIM_DT){for(let s=0;;s++){const r=Y1(e,s,n.mission,n.player);if(!r||(t(r,i),n.mission.phase!=="walking"))break}return Lr(n.mission)}function Z1(n,e,t,i=_.SIM_DT){for(const s of e)t(s,i);return Lr(n.mission)}function Xu(n){const e=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let t=2166136261,i=16777619;for(let s=0;s<e.length;s++)t=Math.imul(t^e[s],16777619)>>>0,i=Math.imul(i^e[s],2246822507)>>>0;return t.toString(16).padStart(8,"0")+i.toString(16).padStart(8,"0")}function j1(n){const{ctx:e}=n,t=e.world.query,i=()=>{const r=e.renderer.getContext(),o=r.getExtension("WEBGL_debug_renderer_info");return String(o?r.getParameter(o.UNMASKED_RENDERER_WEBGL):r.getParameter(r.RENDERER))},s=r=>{n.resetToA(),n.arrival.skip(),n.handOver(),n.log.clear();const o=n.obstacles.enabled();n.obstacles.setEnabled(!1);let a;try{a=r((l,c)=>{n.log.record(l),n.stepSim(l,c)})}finally{n.obstacles.setEnabled(o)}return e.mission.phase==="finished"&&n.finish(),Hi(e),Promise.resolve(a)};return{data:{mode:()=>e.data.mode,manifest:()=>e.data.manifest,verifyFixtureHashes:()=>{if(!e.data.manifest)throw new Error("no manifest on a live-line boot — fixture hashes do not apply");return zv(e.data.manifest)},liveFetchThrows:async()=>{try{return await new rc().getTileBytes(11,0,0),!1}catch{return!0}}},sim:{stepFrames:r=>{for(const o of r)n.stepSim(o,_.SIM_DT)},setInputOverride:r=>{n.inputOverride.frame=r?{...r}:null}},world:{heightAt:(r,o)=>t.heightAt(r,o),landformHeightAt:(r,o,a)=>t.landformHeightAt(r,o,a),landformDemHeightAt:(r,o)=>t.landformDemHeightAt(r,o),slopeDegAt:(r,o)=>t.slopeDegAt(r,o),waterDepthAt:(r,o)=>t.waterDepthAt(r,o),maxHeightBoundM:()=>t.maxHeightBoundM,maxHeightBoundParts:()=>t.maxHeightBoundParts,coverClassAt:(r,o)=>e.world.cover.classAt(r,o),frame:()=>({lat:e.world.frame.lat,lon:e.world.frame.lon}),lonLatToWorld:(r,o)=>Ji(e.world.frame,r,o),worldToLonLat:(r,o)=>Pn(e.world.frame,r,o),waterBodies:()=>e.world.water.bodies.map(r=>({id:r.id,surfaceY:r.surfaceY,areaM2:r.areaM2}))},terrain:{edgeSamples:r=>n.terrain.edgeSamples(r),setLoadRadius:r=>n.terrain.setLoadRadius(r),setFarShellVisible:r=>n.terrain.setFarShellVisible(r),drained:()=>n.terrain.drained(),drainNow:()=>n.terrain.drainNow(e),lodStats:()=>n.terrain.lodStats(),setLodFineRings:r=>n.terrain.setLodFineRings(r),stats:()=>n.terrain.stats()},player:{pos:()=>({x:e.player.x,y:e.player.y,z:e.player.z}),setPos:(r,o)=>{Gf(e.player,r,o,t),Hi(e)},yaw:()=>e.player.yaw,setYaw:r=>{e.input.current.yaw=r,e.player.yaw=r,Hi(e)},pitch:()=>e.player.pitch,setPitch:r=>{e.input.current.pitch=r,e.player.pitch=r,Hi(e)},mode:()=>e.player.mode,speed:()=>e.player.speedMps},mission:{phase:()=>e.mission.phase,state:()=>JSON.parse(JSON.stringify(e.mission)),result:()=>Lr(e.mission),formatResult:()=>vf(Lr(e.mission)),trackSamples:()=>e.mission.track.map(r=>({...r})),a:()=>({...e.mission.a}),b:()=>({...e.mission.b}),xtd:()=>e.mission.xtdM,reset:()=>{n.resetToA(),n.arrival.start()},skipArrival:()=>n.arrival.skip()},...n.factorField?{factors:{at:(r,o)=>n.factorField.at(r,o),absentCounts:()=>n.factorField.absentCounts(),inventory:()=>n.factorField.inventory()}}:{},...n.bakeState?{bake:{hash:()=>Xu(n.bakeState.baked),wallMs:()=>n.bakeState.wallMs,budget:()=>n.bakeState.budget,b1Clamped:()=>n.bakeState.b1Clamped,run:()=>{const r=n.runBake();return{hash:Xu(r.baked),wallMs:r.wallMs}},constraints:()=>n.bakeState.constraints}}:{},erosion:{mode:()=>dn(),setMode:r=>ui(r),shipped:()=>ha,isShipped:()=>Pv(),key:()=>Dr(),stages:()=>ua,params:()=>$i(),setParams:r=>Zo(r),deltaAt:(r,o)=>t.erosionFilterAt(r,o),drainageParams:()=>hc(),setDrainageParams:r=>jo(r),drainageAt:(r,o)=>t.drainageAt(r,o),bound:()=>Gs($i()),apply:()=>{var a;const r=performance.now();let o=!1;if(cc())t.clearBakedBand();else if(n.runBake){const l=n.runBake();t.applyBakedBand(l.baked,l.g,l.cellM,l.halfM),o=!0}return(a=n.runDrainage)==null||a.call(n),t.setDetailOverrides(t.detailOverrides()),n.terrain.rebuildAll(),{modeKey:Dr(),bakeRan:o,wallMs:performance.now()-r}}},...n.tuner?{tuner:{overrides:()=>n.tuner.overrides(),apply:r=>n.tuner.apply(r),readout:()=>n.tuner.readout(),exportPatch:()=>n.tuner.exportPatch()}}:{},...n.stream?{stream:{stats:()=>n.stream.stats(),drained:()=>n.stream.drained(),loaded:()=>n.stream.loaded()}}:{},planner:{layers:()=>n.planner.layers(),pick:r=>n.planner.pick(r),draft:()=>n.planner.draft(),open:()=>n.planner.open(),close:()=>n.planner.close()},dressing:{census:r=>n.dressing.census(r),setVisible:r=>n.dressing.setVisible(r),visible:()=>n.dressing.visible(),fadeStats:()=>n.dressing.fadeStats()},obstacles:{near:(r,o,a)=>n.obstacles.near(r,o,a).map(l=>({x:l.x,z:l.z,r:l.r,topY:l.topY,proudM:l.proudM,planes:l.planes.length/4})),supportYAt:(r,o)=>n.obstacles.supportYAt(r,o),stats:()=>n.obstacles.stats(),setEnabled:r=>n.obstacles.setEnabled(r),enabled:()=>n.obstacles.enabled()},groundCover:{census:r=>n.groundCover.census(r),setVisible:r=>n.groundCover.setVisible(r),visible:()=>n.groundCover.visible(),settled:()=>n.groundCover.settled(),drainNow:()=>n.groundCover.drainNow(e),clumpHashes:()=>n.groundCover.clumpHashes(),clumpXZ:()=>n.groundCover.clumpXZ(),clumpRanks:()=>n.groundCover.clumpRanks(),inventory:()=>n.groundCover.inventory(),anchor:()=>n.groundCover.anchor()},boot:{timings:()=>n.bootTimings.timings(),total:()=>n.bootTimings.total(),pack:()=>n.packId},gps:{readout:()=>n.device.readout(),visible:()=>n.device.visible(),raised:()=>n.device.raised(),stowed:()=>n.device.stowed(),setStowed:r=>n.device.setStowed(r)},result:{plotStats:()=>n.result.plotStats()},camera:{setFree:(r,o,a,l,c)=>{n.freeCam.pose={x:r,y:o,z:a,yaw:l,pitch:c}},clearFree:()=>{n.freeCam.pose=null},project:(r,o,a)=>{const l=new le(r,o,a).project(e.camera);return{u:(l.x+1)/2,v:(1-l.y)/2,inFront:l.z<1}},pose:()=>{const r=e.camera;return{x:r.position.x,y:r.position.y,z:r.position.z,yaw:-r.rotation.y,pitch:r.rotation.x,free:n.freeCam.pose!==null}}},arrival:{remainingS:()=>n.arrival.remainingS(),active:()=>n.arrival.active()},runInputScript:r=>s(o=>q1(e,r,o)),replay:r=>s(o=>Z1(e,r,o)),inputLog:()=>n.log.frames.map(r=>({...r})),season:{set:r=>n.season.set(r),get:()=>n.season.get(),names:()=>n.season.names(),snapshot:()=>n.season.snapshot()},weather:{setOverride:r=>n.weather.setOverride(r),setWetOverride:r=>n.weather.setWetOverride(r),overcast:()=>n.weather.overcast(),wetness:()=>n.weather.wetness(),wetAt:(r,o,a=0,l=0)=>Yf(e.seed,r,o,a,l),at:(r,o,a=0,l=0)=>ia(e.seed,r,o,a,l),leadS:(r,o)=>Kf(r,o),setFrontOverride:r=>n.weather.setFrontOverride(r),front:()=>n.weather.front(),snapshot:()=>n.weather.snapshot()},render:{info:()=>({calls:e.renderer.info.render.calls,triangles:e.renderer.info.render.triangles}),rendererString:i,frameDeltasMs:()=>[...n.frameDeltas],gpuFrameMs:()=>n.gpuTimer.lastMs(),postSamples:()=>{var r;return((r=n.post)==null?void 0:r.samples)??null},aoEnabled:()=>{var r;return((r=n.post)==null?void 0:r.aoEnabled)??!1},aoBlend:()=>{var r;return((r=n.post)==null?void 0:r.aoBlend)??null},gpuTimerAvailable:()=>n.gpuTimer.available},setPaused:r=>{e.flags.paused=r},paused:()=>e.flags.paused}}const Q1=["spring","summer","autumn","winter"],Ml=["uColValley","uColUpland","uColHigh","uColSummit","uColDry","uColHeath","uColTurfD","uColMoss"],J1=["uColRock","uColScree","uColStone","uColGrit","uColSoil","uColBare","uColPeat"],eR={spring:10207818,summer:0,autumn:11887901,winter:14998666},tR={spring:14082799,summer:0,autumn:14206632,winter:12174028},nR={spring:16773330,summer:0,autumn:16763274,winter:14673648},iR={spring:13230218,summer:16777215,autumn:14065754,winter:13617568},sR=["litter","bracken.rust","grass.dead"],rR={spring:{"grass.fine":1.15,"grass.coarse":.9,"grass.dry":.45,moss:1.3,sedge:1.1,bracken:.8,"flower.white":.5,"flower.gold":.5},summer:{},autumn:{"grass.fine":.8,"grass.dry":1.4,"grass.dead":.5,moss:.7,bracken:0,"bracken.rust":1,litter:1,"flower.white":.15,"flower.gold":.25},winter:{"grass.fine":.5,"grass.coarse":.8,"grass.dry":.6,"grass.dead":2.2,heather:1.1,moss:.55,sedge:.7,bracken:0,"bracken.rust":.25,litter:.35,"flower.white":0,"flower.gold":0}};function oR(n){return Lt.map(e=>rR[n][e.id]??(sR.includes(e.id)?0:1))}const El={spring:_.SEASON_SPRING_SNOW,summer:_.SEASON_SUMMER_SNOW,autumn:_.SEASON_AUTUMN_SNOW,winter:_.SEASON_WINTER_SNOW},aR=n=>{switch(n){case"spring":return{vegMix:_.SEASON_SPRING_VEG_MIX,sat:_.SEASON_SPRING_SAT,skyMix:_.SEASON_SPRING_SKY_MIX,sunMix:_.SEASON_SPRING_SUN_MIX,sunK:_.SEASON_SPRING_SUN_K};case"autumn":return{vegMix:_.SEASON_AUTUMN_VEG_MIX,sat:_.SEASON_AUTUMN_SAT,skyMix:_.SEASON_AUTUMN_SKY_MIX,sunMix:_.SEASON_AUTUMN_SUN_MIX,sunK:_.SEASON_AUTUMN_SUN_K};case"winter":return{vegMix:_.SEASON_WINTER_VEG_MIX,sat:_.SEASON_WINTER_SAT,skyMix:_.SEASON_WINTER_SKY_MIX,sunMix:_.SEASON_WINTER_SUN_MIX,sunK:_.SEASON_WINTER_SUN_K};default:return{vegMix:0,sat:1,skyMix:0,sunMix:0,sunK:1}}},To={h:0,s:0,l:0};function Ds(n,e,t,i,s){n.copy(e),i>0&&n.lerp(t,i),s!==1&&(n.getHSL(To),n.setHSL(To.h,Math.min(1,To.s*s),To.l))}function lR(n,e,t,i){const s=(p,m)=>{const x=p.userData.uniforms;if(!x)throw new Error(`season: the ${m} material has no userData.uniforms bag to drive`);return x},r=s(e,"terrain"),o=s(t.material(),"ground cover"),a=new Map;for(const p of Ml)a.set(p,r[p].value.clone());const l={zenith:n.skyZenith.clone(),horizon:n.skyHorizon.clone(),glow:n.sunGlow.clone()},c=n.fogBands.map(p=>p.color.clone()),h=n.lights.sun.color.clone(),u=n.lights.sun.intensity,d=new Ve;let f=_.SEASON_DEFAULT;function g(p){const m=aR(p),x=new Ve(eR[p]),v=new Ve(tR[p]),S=new Ve(nR[p]);for(const D of Ml)Ds(d,a.get(D),x,m.vegMix,m.sat),r[D].value.copy(d);Ds(d,l.zenith,v,m.skyMix,1),n.skyZenith.copy(d),Ds(d,l.horizon,v,m.skyMix,1),n.skyHorizon.copy(d),Ds(d,l.glow,v,m.skyMix,1),n.sunGlow.copy(d);for(let D=0;D<n.fogBands.length;D++)n.fogBands[D].color!==n.skyHorizon&&(Ds(d,c[D],v,m.skyMix,1),n.fogBands[D].color.copy(d));Ds(d,h,S,m.sunMix,1),n.lights.sun.color.copy(d),n.lights.sun.intensity=u*m.sunK,o.uSeasonTint.value.set(iR[p]),r.uSnow.value.x=El[p],i.setSnow(El[p]),t.setSeasonSpecies(oR(p),El[p]),f=p}function M(){const p={};for(const m of[...Ml,...J1])p[m]=r[m].value.getHex();p.skyZenith=n.skyZenith.getHex(),p.skyHorizon=n.skyHorizon.getHex(),p.sunGlow=n.sunGlow.getHex(),p.sunColor=n.lights.sun.color.getHex(),p.sunIntensityMilli=Math.round(n.lights.sun.intensity*1e3),p.coverTint=o.uSeasonTint.value.getHex(),p.snowMilli=Math.round(r.uSnow.value.x*1e3),p.rockSnowMilli=Math.round(i.snow()*1e3);for(let m=0;m<n.fogBands.length;m++)p[`fog${m}`]=n.fogBands[m].color.getHex();return p}return g(f),{set:g,get:()=>f,names:()=>Q1,snapshot:M,dispose:()=>{g("summer")}}}const bo=2,cR=4,Is=8;function hR(n,e,t){const i=performance.now(),s=n.detailBand,{phaseX:r,phaseZ:o}=n.detailPhaseXZ,a=n.demCellM,l=s.windowM,c=s.waves.length===0?8:Math.max(32,Math.min(128,cR*Math.round(l/s.waves[s.waves.length-1]))),h=df(n.water);let u=0,d=0,f=0,g=0,M=0,p=0;for(let q=-bo;q<bo;q++)for(let H=-bo;H<bo;H++){let Q=0,Y=!0;for(let j=0;j<c;j++)for(let fe=0;fe<c;fe++){const X=(q+(j+.5)/c)*l-r,se=(H+(fe+.5)/c)*l-o,ie=n.detailAt(X,se);Q+=ie,u+=ie,d+=ie*ie,f++,Math.abs(ie)>g&&(g=Math.abs(ie)),Y&&j%4===0&&fe%4===0&&h(X,se,s.gateM)<1&&(Y=!1)}Y&&(p++,M=Math.max(M,Math.abs(Q/(c*c))))}const m=f>0?Math.sqrt(Math.max(0,d/f-(u/f)**2)):0,x=(q,H)=>{let Q=0;for(let Y=0;Y<Is;Y++)for(let j=0;j<Is;j++)Q+=n.detailAt((q+(Y+.5)/Is)*a-r,(H+(j+.5)/Is)*a-o);return Q/(Is*Is)},v=24;let S=0,D=0,y=[];for(let q=-v;q<v;q++){const H=[];for(let Q=-v;Q<v;Q++){const Y=x(q,Q);H.push(Y),Math.abs(Y)>D&&(D=Math.abs(Y)),Q>-v&&(S=Math.max(S,Math.abs(Y-H[H.length-2]))),y.length>0&&(S=Math.max(S,Math.abs(Y-y[H.length-1])))}y=H}const A=Math.sin(t),b=-Math.cos(t);let R=0,E=0,T=-1/0,O=0,k=0;for(let q=0;q<=1200;q+=5){const H=e.x+A*q,Q=e.z+b*q,Y=n.detailAt(H,Q);Y>R&&(R=Y),Y<E&&(E=Y);const j=n.landformHeightAt(H,Q);j>T&&(T=j,O=q,k=Y)}const K=1e-9*Math.max(1,m);return{sdM:m,peakM:g,maxPostMeanM:D,maxStepPerPostM:S,worstWindowMeanM:M,clearWindows:p,windowBarM:K,zeroMeanOk:p>0&&M<=K,crestLiftM:k,maxLiftM:R,hollowDropM:E,crestAtM:O,windowM:l,ms:performance.now()-i}}const Vt=_,qf=[{key:"rmsM",label:"noise RMS (m)",tuning:"TERRAIN_DETAIL_RMS_M",min:0,max:20,step:.1,def:Vt.TERRAIN_DETAIL_RMS_M},{key:"H",label:"roughness H",tuning:"TERRAIN_DETAIL_H",min:.2,max:1.5,step:.01,def:Vt.TERRAIN_DETAIL_H},{key:"ridgeGain",label:"ridge gain",tuning:"TERRAIN_DETAIL_RIDGE_GAIN",min:0,max:6,step:.05,def:Vt.TERRAIN_DETAIL_RIDGE_GAIN},{key:"ridgeOctaves",label:"ridge octaves",tuning:"TERRAIN_DETAIL_RIDGE_OCTAVES",min:0,max:6,step:1,def:Vt.TERRAIN_DETAIL_RIDGE_OCTAVES},{key:"ridgeCap",label:"ridge cap (× λ)",tuning:"TERRAIN_DETAIL_RIDGE_CAP",min:0,max:.4,step:.005,def:Vt.TERRAIN_DETAIL_RIDGE_CAP},{key:"aniso",label:"anisotropy",tuning:"TERRAIN_DETAIL_ANISO",min:1,max:8,step:.1,def:Vt.TERRAIN_DETAIL_ANISO},{key:"wander",label:"rib wander",tuning:"TERRAIN_DETAIL_WANDER",min:0,max:3,step:.05,def:Vt.TERRAIN_DETAIL_WANDER},{key:"slopeFloor",label:"slope floor",tuning:"TERRAIN_DETAIL_SLOPE_FLOOR",min:0,max:1,step:.01,def:Vt.TERRAIN_DETAIL_SLOPE_FLOOR},{key:"slopeLoDeg",label:"slope lo (°)",tuning:"TERRAIN_DETAIL_SLOPE_LO_DEG",min:0,max:45,step:1,def:Vt.TERRAIN_DETAIL_SLOPE_LO_DEG},{key:"slopeHiDeg",label:"slope hi (°)",tuning:"TERRAIN_DETAIL_SLOPE_HI_DEG",min:5,max:70,step:1,def:Vt.TERRAIN_DETAIL_SLOPE_HI_DEG},{key:"ravineDepthM",label:"ravine depth (m)",tuning:"RAVINE_DEPTH_M",min:0,max:24,step:.5,def:Vt.RAVINE_DEPTH_M},{key:"ravineLevels",label:"ravine levels",tuning:"RAVINE_LEVELS",min:0,max:5,step:1,def:Vt.RAVINE_LEVELS},{key:"grainAmpM",label:"geo grain (m)",tuning:"GRAIN_AMP_M",min:0,max:16,step:.1,def:Vt.GRAIN_AMP_M},{key:"taper",label:"DC taper",tuning:"TERRAIN_DETAIL_TAPER",min:.02,max:.49,step:.01,def:Vt.TERRAIN_DETAIL_TAPER},{key:"windowPosts",label:"window (posts)",tuning:"TERRAIN_DETAIL_WINDOW_POSTS",min:4,max:64,step:1,def:Vt.TERRAIN_DETAIL_WINDOW_POSTS}],Zf=[{key:"reposeDeg",label:"repose gate (°)",tuning:null,min:0,max:45,step:1,def:0},{key:"elevGainPerKm",label:"elev gain /km",tuning:null,min:-3,max:3,step:.05,def:0},{key:"elevRefM",label:"…pivot (m)",tuning:null,min:0,max:2e3,step:25,def:500},{key:"hVary",label:"H variation ±",tuning:null,min:0,max:1,step:.01,def:0}],Ls=[...qf,...Zf],uR=`
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
`,Bt=(n,e=3)=>Number.isFinite(n)?n.toFixed(e):"—";function dR(n,e){const t=n.world.query,i=document.createElement("style");i.textContent=uR,document.head.appendChild(i);const s=Xe("div","tuner",n.ui.root??document.body),r=Xe("div","tuner-head",s);Xe("span","tuner-title",r).textContent="DEV TUNER";const o=Xe("button","",r);o.textContent="−";const a=Xe("div","tuner-body",s),l=new Map(Ls.map(ee=>[ee.key,ee.def])),c=new Map;let h=!1,u=null;const d=(ee,ue)=>{const de=Xe("div","tuner-row",ue);Xe("span","tuner-label",de).textContent=ee.label;const Ee=Xe("input","",de);Ee.type="range";const Te=Xe("input","",de);Te.type="number";for(const ne of[Ee,Te])ne.min=String(ee.min),ne.max=String(ee.max),ne.step=String(ee.step),ne.value=String(ee.def);Ee.title=ee.tuning??`${String(ee.key)} — a CANDIDATE term with no tuning.ts constant yet`,Ee.addEventListener("input",()=>{Te.value=Ee.value}),Ee.addEventListener("change",()=>Oe(ee.key,Number(Ee.value))),Te.addEventListener("change",()=>Oe(ee.key,Number(Te.value))),c.set(ee.key,{wrap:de,range:Ee,num:Te})},f=(()=>{try{return new URLSearchParams(location.search).get("tune")}catch{return null}})(),g=(ee,ue,de=!1)=>{const Ee=Xe("div","tuner-sec",a),Te=Xe("span","tuner-caret",Ee);Xe("span","",Ee).textContent=ee;const ne=Xe("div","tuner-secbody",a),G=f==="filter"&&!de;return G&&ne.classList.add("collapsed"),Te.textContent=G?"▸":"▾",ue&&(Xe("div","tuner-note",ne).textContent=ue),Ee.addEventListener("click",()=>{const he=ne.classList.toggle("collapsed");Te.textContent=he?"▸":"▾"}),ne},M=g("SHIPPED CONSTANTS","live — applies when you release a slider");qf.forEach(ee=>d(ee,M));const p=g("CANDIDATES (0 = off)","live — terms with no tuning.ts constant yet");Zf.forEach(ee=>d(ee,p));const m=g("EROSION STAGES","needs APPLY — a stage flip re-bakes the world (~21 s)",!0),x=Xe("div","tuner-seasons",m),v=new Map;for(const ee of e.erosion.stages()){const ue=Xe("button","",x);ue.dataset.stage=ee,ue.title=`${ee} — click to toggle, then press APPLY`,ue.addEventListener("click",()=>{const de=e.erosion.mode();e.erosion.setMode({[ee]:!de[ee]}),fe()}),v.set(ee,ue)}const S=Xe("div","tuner-seasons",m),D=(ee,ue,de)=>{const Ee=Xe("button","",S);Ee.textContent=ee,Ee.title=ue,Ee.addEventListener("click",()=>{e.erosion.setMode(de),fe()})};Xe("div","tuner-note",m).textContent="presets — fastest way to a known state:",D("solo","filter ONLY — the owner's A/B: every simulated stage off",{thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!0}),D("sim","the shipped simulated stack, filter off",{thermal:!0,streamPower:!0,ravine:!0,grain:!0,filter:!1}),D("bare","no erosion at all — the measured DEM alone",{thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!1});const y=[{key:"scale",label:"filter scale (m)",min:40,max:2e3,step:10},{key:"strength",label:"filter strength",min:0,max:.2,step:.001},{key:"gullyWeight",label:"gully weight",min:0,max:1,step:.01},{key:"detail",label:"detail",min:.3,max:4,step:.05},{key:"octaves",label:"octaves (cost!)",min:1,max:7,step:1},{key:"gain",label:"gain",min:.2,max:.8,step:.01},{key:"lacunarity",label:"lacunarity",min:1.4,max:3,step:.05},{key:"cellScale",label:"cell scale",min:.3,max:1.6,step:.05},{key:"normalization",label:"normalization",min:0,max:1,step:.02}],A=new Map,b=g("FILTER (wXcfWn, MPL-2.0)",void 0,!0),R=Xe("div","tuner-note",b);for(const ee of y){const ue=Xe("div","tuner-row",b);Xe("span","tuner-label",ue).textContent=ee.label;const de=Xe("input","",ue);de.type="range";const Ee=Xe("input","",ue);Ee.type="number";const Te=Number(e.erosion.params()[ee.key]??0);for(const ne of[de,Ee])ne.min=String(ee.min),ne.max=String(ee.max),ne.step=String(ee.step),ne.value=String(Te);de.addEventListener("input",()=>{Ee.value=de.value}),de.addEventListener("change",()=>{e.erosion.setParams({[ee.key]:Number(de.value)}),fe()}),Ee.addEventListener("change",()=>{e.erosion.setParams({[ee.key]:Number(Ee.value)}),fe()}),A.set(ee.key,{range:de,num:Ee})}const E=[{key:"skirtDepthM",label:"interfluve depth (m)",min:0,max:8,step:.25},{key:"skirtRadiusM",label:"interfluve reach (m)",min:10,max:90,step:5},{key:"channelAreaM2",label:"channel area (m²) ↓=denser",min:2e3,max:6e4,step:1e3},{key:"depthMaxM",label:"gully depth cap (m)",min:2,max:40,step:1},{key:"bankDeg",label:"bank angle (°)",min:15,max:60,step:1},{key:"headTaperM",label:"head taper (m)",min:0,max:300,step:10},{key:"perturbRmsM",label:"routing noise (m RMS)",min:0,max:12,step:.5},{key:"cellM",label:"grid (m) ↓=finer, SLOW",min:4,max:20,step:1},{key:"evolveIterations",label:"evolve iterations",min:0,max:500,step:10},{key:"evolveK",label:"erodibility K",min:0,max:6e-5,step:1e-6},{key:"evolveDtYears",label:"Δt per iteration (yr)",min:25,max:800,step:25},{key:"diffuseCFL",label:"hillslope creep",min:0,max:.2,step:.005},{key:"amplifyLoM",label:"amplify band lo (m)",min:0,max:200,step:5},{key:"amplifyHiM",label:"amplify band hi (m)",min:0,max:1200,step:25},{key:"amplifyGain",label:"amplify gain (1 = off)",min:1,max:5,step:.1}],T=new Map,O=g("DRAINAGE CARVE","needs APPLY — re-runs the whole evolution (seconds to ~25 s)",!0),k=Xe("div","tuner-note",O);for(const ee of E){const ue=Xe("div","tuner-row",O);Xe("span","tuner-label",ue).textContent=ee.label;const de=Xe("input","",ue);de.type="range";const Ee=Xe("input","",ue);Ee.type="number";const Te=Number(e.erosion.drainageParams()[ee.key]??0);for(const ne of[de,Ee])ne.min=String(ee.min),ne.max=String(ee.max),ne.step=String(ee.step),ne.value=String(Te);de.addEventListener("input",()=>{Ee.value=de.value}),de.addEventListener("change",()=>{e.erosion.setDrainageParams({[ee.key]:Number(de.value)}),fe()}),Ee.addEventListener("change",()=>{e.erosion.setDrainageParams({[ee.key]:Number(Ee.value)}),fe()}),T.set(ee.key,{range:de,num:Ee})}const K=Xe("div","tuner-out",O),q=Xe("div","tuner-seasons",m),H=Xe("button","",q);H.textContent="APPLY",H.title="rebake + rebuild the world with the current stages and parameters";const Q=Xe("div","tuner-out",m);let Y=null,j="";H.addEventListener("click",()=>{H.textContent="working…",Q.textContent="rebuilding — the filter costs ~4.6 us a sample, so this is seconds, not frames",requestAnimationFrame(()=>requestAnimationFrame(()=>{Y=e.erosion.apply(),j=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`,H.textContent="APPLY",fe()}))});function fe(){const ee=e.erosion.mode();for(const[N,z]of v){const J=!!ee[N],Ae=N==="streamPower"?"flow":N.slice(0,5);z.textContent=`${Ae} ${J?"ON":"off"}`,z.classList.toggle("on",J),z.style.opacity=J?"1":"0.55"}const ue=!!ee.drainage;k.textContent=ue?"stage ON — change a slider, then press APPLY":'stage OFF — these sliders set the parameters but reach nothing. Click "drain" above (or use ?tune=drainage), then APPLY.';for(const[N,z]of T){const J=Number(e.erosion.drainageParams()[N]??0);z.range.value=String(J),z.num.value=String(J)}const de=e.erosion.drainageStats();K.textContent=de?`${de.channelCells} channels · density ${de.densityKmPerKm2.toFixed(1)} km/km² · spacing ${de.spacingM.toFixed(0)} m · gully p90 ${de.depthP90M.toFixed(1)} m · ${de.wallMs.toFixed(0)} ms`:"no network built yet — turn the stage on and press APPLY";const Ee=!!ee.filter;b.classList.toggle("inert",!Ee),R.textContent=Ee?"stage ON — change a slider, then press APPLY":'stage OFF — these sliders set the parameters but reach nothing. Click "filte" or the "solo" preset above, then APPLY.';const ne=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`!==j;H.classList.toggle("tuner-apply-dirty",ne),H.textContent=ne?"APPLY ●":"APPLY";const G=e.erosion.params();for(const[N,z]of A){const J=String(Number(G[N]??0));z.range.value=J,z.num.value=J}const he=Y?`${(Y.wallMs/1e3).toFixed(1)} s${Y.bakeRan?" (incl. bake)":" (bake skipped)"}`:"not applied yet";Q.textContent=`mode ${Object.entries(ee).filter(([,N])=>N).map(([N])=>N).join("+")||"none"} · filter bound ±${e.erosion.bound().toFixed(1)} m · last APPLY ${he}`}j=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`,fe();const X=g("ATMOSPHERE","live — season, weather, wetness, front"),se=Xe("div","tuner-seasons",X),ie=new Map;for(const ee of e.season.names()){const ue=Xe("button","",se);ue.textContent=ee.slice(0,3),ue.title=`season = ${ee} (cosmetic — outside lineHashInput, D92, so PBs stay comparable)`,ue.addEventListener("click",()=>{e.season.set(ee),P()}),ie.set(ee,ue)}const F=(ee,ue,de,Ee,Te,ne)=>{const G=Xe("div","tuner-arow",X);Xe("span","tuner-label",G).textContent=ee;const he=Xe("input","",G);he.type="range",he.min=String(ue),he.max=String(de),he.step=String(Ee),he.value=String(ue);const N=Xe("span","v",G),z=Xe("input","auto",G);z.type="checkbox",z.checked=!0,z.title="auto = follow sim time (override null)";const J=()=>{z.checked?Te(null):Te(Number(he.value))};return he.addEventListener("input",()=>{z.checked&&(z.checked=!1),J(),P()}),z.addEventListener("change",()=>{J(),P()}),{range:he,val:N,auto:z,live:ne}},I=F("overcast",0,1,.01,ee=>e.weather.setOverride(ee),()=>e.weather.overcast()),B=F("wetness",0,1,.01,ee=>e.weather.setWetOverride(ee),()=>e.weather.wetness()),C=F("front grad",0,.002,1e-5,ee=>e.weather.setFrontOverride(ee),()=>e.weather.front().dOvercastPerM);function P(){const ee=e.season.get();for(const[ue,de]of ie)de.classList.toggle("on",ue===ee);for(const ue of[I,B,C]){const de=ue.live();ue.val.textContent=Number.isFinite(de)?de<.01?de.toExponential(1):de.toFixed(2):"—",ue.auto.checked&&(ue.range.value=String(de))}}const W=window.setInterval(P,250);P();function $(){e.weather.setOverride(null),e.weather.setWetOverride(null),e.weather.setFrontOverride(null);for(const ee of[I,B,C])ee.auto.checked=!0;P()}const Z=Xe("div","tuner-btns",a),w=Xe("button","",Z),re=Xe("button","",Z),te=Xe("button","",Z);re.textContent="reset",te.textContent="export";const xe=Xe("div","tuner-read",a),oe=ee=>{const ue=Xe("div","",xe);return Xe("span","k",ue).textContent=ee,Xe("span","",ue)},Ce=oe("delivered RMS"),Ne=oe("peak |residual|"),De=oe("max Δ / DEM post"),V=oe("post-to-post step"),L=oe("S2 crest lift"),ae=oe("S2 axis +/−"),ye=oe("zero-mean"),we=oe("probe cost"),Se=Xe("textarea","tuner-out",a);Se.readOnly=!0,Se.spellcheck=!1;function ke(){const ee={};for(const ue of Ls){const de=l.get(ue.key);de!==ue.def&&(ee[ue.key]=de)}return h&&(ee.rmsM=0,ee.ridgeGain=0),ee}function Le(){t.setDetailOverrides(ke()),e.rebuildTerrain(),e.invalidateDressing(),e.invalidateGroundCover(),e.invalidateColliders(),ze(),ce()}function Oe(ee,ue){Number.isFinite(ue)&&(l.set(ee,ue),Le())}function ze(){const ee=n.mission;u=hR(t,{x:(ee.a.x+ee.b.x)/2,z:(ee.a.z+ee.b.z)/2},ee.bearingRad)}function ce(){for(const ee of Ls){const ue=c.get(ee.key),de=l.get(ee.key);ue.range.value=String(de),ue.num.value=String(de),ue.wrap.classList.toggle("changed",de!==ee.def)}w.textContent=h?"residual OFF":"residual on",w.classList.toggle("on",h),u&&(Ce.textContent=`${Bt(u.sdM)} m`,Ne.textContent=`${Bt(u.peakM,2)} m`,De.textContent=`${Bt(u.maxPostMeanM,2)} m`,V.textContent=`${Bt(u.maxStepPerPostM,2)} m`,L.textContent=`${Bt(u.crestLiftM,2)} m @ ${u.crestAtM.toFixed(0)} m`,ae.textContent=`+${Bt(u.maxLiftM,2)} / ${Bt(u.hollowDropM,2)} m`,ye.textContent=u.zeroMeanOk?`ok (${u.worstWindowMeanM.toExponential(1)} m)`:`BROKEN ${Bt(u.worstWindowMeanM,4)} m`,ye.className=u.zeroMeanOk?"good":"bad",we.textContent=`${u.ms.toFixed(0)} ms · ${u.windowM.toFixed(0)} m window`)}function _e(){const ee=Ls.filter(Te=>l.get(Te.key)!==Te.def);if(ee.length===0&&!h)return"// no change from the shipped constants";const ue=["// src/config/tuning.ts — from a dev-tuner session (roadmap item 53)."];h&&ue.push("// NOTE: the A/B toggle is OFF-state; these are the values BEHIND it, not what you are looking at.");const de=ee.filter(Te=>Te.tuning),Ee=ee.filter(Te=>!Te.tuning);if(de.length>0){ue.push("","// replace these lines (keep each line's existing trailing comment — it carries the measurement):");for(const Te of de)ue.push(`  ${Te.tuning}: ${l.get(Te.key)}, // was ${Te.def}`)}if(Ee.length>0){ue.push("","// CANDIDATE terms — no tuning.ts constant exists yet. They are read in","// src/fields/terrainDetail.ts via DetailOverrides; give each a TUNING constant and a","// default in makeTerrainDetail to ship it:");for(const Te of Ee)ue.push(`//   ${String(Te.key)} = ${l.get(Te.key)}  (default ${Te.def})`)}return u&&ue.push("",`// measured at this setting: delivered RMS ${Bt(u.sdM)} m · peak ${Bt(u.peakM,2)} m ·`,`// max Δ/post ${Bt(u.maxPostMeanM,2)} m (step ${Bt(u.maxStepPerPostM,2)} m) · S2 crest lift ${Bt(u.crestLiftM,2)} m @ ${u.crestAtM.toFixed(0)} m ·`,`// S2 axis +${Bt(u.maxLiftM,2)}/${Bt(u.hollowDropM,2)} m ·`,`// zero-mean over ${u.windowM.toFixed(0)} m ${u.zeroMeanOk?"HOLDS":`BROKEN (${Bt(u.worstWindowMeanM,4)} m)`}`),ue.join(`
`)}return w.addEventListener("click",()=>{h=!h,Le()}),re.addEventListener("click",()=>{for(const ee of Ls)l.set(ee.key,ee.def);h=!1,Le(),$()}),te.addEventListener("click",()=>{var ee;Se.value=_e(),Se.classList.add("shown"),Se.select(),(ee=navigator.clipboard)==null||ee.writeText(Se.value).catch(()=>{})}),o.addEventListener("click",()=>{const ee=a.classList.toggle("hidden");o.textContent=ee?"+":"−"}),ze(),ce(),{overrides:ke,apply(ee){for(const ue of Ls)l.set(ue.key,ee[ue.key]??ue.def);h=!1,Le()},readout:()=>u,exportPatch:_e,setVisible(ee){s.style.display=ee?"flex":"none"},dispose(){window.clearInterval(W),$(),s.remove(),i.remove()}}}const ci={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",up:"Space",down:"KeyC",boostA:"ShiftLeft",boostB:"ShiftRight"},fR=n=>n instanceof HTMLElement&&(n.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n.tagName));function pR(){const n=new Set;let e=!1;const t=s=>{fR(s.target)||(s.type==="keydown"?n.add(s.code):n.delete(s.code))},i=()=>n.clear();return window.addEventListener("keydown",t),window.addEventListener("keyup",t),window.addEventListener("blur",i),{active:()=>e,toggle(s){return e=!e,n.clear(),e||(s.player.y=s.world.query.heightAt(s.player.x,s.player.z)),s.player.speedMps=0,e},update(s,r){const o=s.player,a=n.has(ci.boostA)||n.has(ci.boostB)?_.FLY_BOOST:1,l=_.FLY_SPEED_MPS*a*r,c=(n.has(ci.fwd)?1:0)-(n.has(ci.back)?1:0),h=(n.has(ci.right)?1:0)-(n.has(ci.left)?1:0),u=(n.has(ci.up)?1:0)-(n.has(ci.down)?1:0),d=Math.cos(o.pitch),f=Math.sin(o.yaw)*d,g=Math.sin(o.pitch),M=-Math.cos(o.yaw)*d,p=Math.cos(o.yaw),m=Math.sin(o.yaw);o.x+=(f*c+p*h)*l,o.z+=(M*c+m*h)*l,o.y+=(g*c+u)*l,o.speedMps=Math.hypot(f*c+p*h,M*c+m*h)*_.FLY_SPEED_MPS*a,o.groundY=s.world.query.heightAt(o.x,o.z)},dispose(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",t),window.removeEventListener("blur",i)}}}function mR(){const n=new URLSearchParams(location.search),e=n.get("pack"),t=n.get("packdir"),i=t&&/^[a-z0-9-]+$/i.test(t)?t:"lines";return e&&/^[a-z0-9-]+$/i.test(e)?{id:e,url:`/fixtures/${i}/${e}/tiles/manifest.json`}:{id:"tier-1",url:null}}const Pr=()=>["localhost","127.0.0.1","::1",""].includes(location.hostname);Pr()&&new URLSearchParams(location.search).get("devtuner")==="1"&&(Gt.devTuner=!0);const vl=Pr()?new URLSearchParams(location.search).get("shellwarp"):null;if(vl!==null&&vl!==""){Gt.devTuner=!0;const n=ME(Number(vl));console.log(`[shell] ring warp overridden to ${n} (shipped ${_.FAR_SHELL_RING_WARP}) — harness-local`)}const hi=Pr()?new URLSearchParams(location.search).get("tune"):null;if(hi){Gt.devTuner=!0;const n={thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!1,drainage:!1};hi==="filter"?ui({...n,filter:!0}):hi==="drainage"?ui({...n,drainage:!0}):hi==="full"?(ui({...n,drainage:!0,filter:!0}),Zo(Ov)):hi==="amplify"?(ui({...n,drainage:!0}),jo({evolveIterations:0,channelAreaM2:1e12,skirtDepthM:0,cellM:10,amplifyLoM:25,amplifyHiM:200,amplifyGain:1.8,shoreTaperM:250})):hi==="repro"?(ui({...n,drainage:!0,filter:!0}),jo({flattenRadiusM:420,evolveIterations:0,channelAreaM2:1e12,skirtDepthM:0,cellM:10,shoreTaperM:300}),Zo(Uv)):hi==="bare"&&ui(n)}const _R=()=>{const n=new URLSearchParams(location.search);return Gt.plannerFirst&&!n.has("mp")&&!n.has("pack")};let un=null,Ps=null;async function gR(){_R()&&(Ps=Hu(document.body),un=await Ps.openEntry());const n=a1(),e=un!==null&&!(Pr()&&new URLSearchParams(location.search).get("entrysrc")==="fixtures"),t=e?"live-line":Gt.liveTiles?"live":"fixtures";globalThis.__DATA_MODE=t==="fixtures"?"fixtures":"live";const i=new URLSearchParams(location.search),s=i.get("logdepth")==="1",r=i.get("aa")!=="0",o=Number(i.get("near")),a=new cE({antialias:r,logarithmicDepthBuffer:s});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.shadowMap.enabled=!1,document.body.appendChild(a.domElement);const l=M1(a.getContext());a.info.autoReset=!1;const c=new hE,h=new pn(_.CAMERA_FOV,window.innerWidth/window.innerHeight,Number.isFinite(o)&&o>0?o:_.CAMERA_NEAR,_.CAMERA_FAR);c.add(h);const u=["localhost","127.0.0.1","::1",""].includes(location.hostname),d=i.get("ao")==="1";d&&!u&&console.warn("[beeline] ?ao=1 ignored: ambient occlusion is a known-broken local-only diagnostic (D144).");const f=z1(O1),g=U1(a.getContext().getParameter(WebGL2RenderingContext.MAX_SAMPLES)),M=B1(F1(f),g),p=Number(i.get("samples")),m=Number.isFinite(p)&&i.has("samples")?p:r?M.aaSamples:0,x=i.get("post")==="0"?null:I1(a,c,h,m,d&&u,Number(i.get("aoscale")??1),Number(i.get("aooutput")??0),Number(i.get("aoblend")??1));window.addEventListener("resize",()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),x==null||x.setSize(window.innerWidth,window.innerHeight)});const v=mR(),S=ge=>n.mark(ge);let D=null,y=null,A=0,b=null,R=null,E={};for(;e&&un;){const ge=un,Ie=Yv(document.body);try{const Re=nf({a:ge.a,b:ge.b,nearZoom:_.SURVEY_NEAR_ZOOM,nearMarginM:_.SURVEY_NEAR_MARGIN_M,coarse:[{zoom:11,radiusM:_.SURVEY_FAR_HALF_M},{zoom:9,radiusM:_.CORRIDOR_OUTER_RADIUS_M}]});Ie.stage("land cover");const Ue=await $v(Re.frame,{x0:Math.min(Re.a.x,Re.b.x),x1:Math.max(Re.a.x,Re.b.x),z0:Math.min(Re.a.z,Re.b.z),z1:Math.max(Re.a.z,Re.b.z)},_.SURVEY_NEAR_MARGIN_M,Zt=>Ie.progress(Zt.done,Zt.total));Ie.stage(`elevation — ${Re.tiles.length} tiles${Ue?"":" · land cover unavailable — the land check will be skipped for this walk"}`);let Be=0,rt=0;const ut=new rc,Rt=await Gv(Re,{getTileBytes:async(Zt,U,pe)=>{const Me=await ut.getTileBytes(Zt,U,pe);return rt+=Me.length,Ie.progress(++Be,Re.tiles.length),Me}},Ue?{grid:Ue.grid}:null);Ie.stage("soil factors");const yt={minLon:Math.min(ge.a.lon,ge.b.lon),maxLon:Math.max(ge.a.lon,ge.b.lon),minLat:Math.min(ge.a.lat,ge.b.lat),maxLat:Math.max(ge.a.lat,ge.b.lat)},_n=(ge.a.lat+ge.b.lat)/2,Si=_.SURVEY_NEAR_MARGIN_M/111320,rr=_.SURVEY_NEAR_MARGIN_M/(111320*Math.cos(_n*Math.PI/180)),Br={minLon:yt.minLon-rr,maxLon:yt.maxLon+rr,minLat:yt.minLat-Si,maxLat:yt.maxLat+Si},ns=await Bx(Br,(Zt,U)=>Ie.progress(Zt,U));if(Ie.stage("checking the line"),!Rt.grid){await Ie.fail(["The land check needs that data to confirm your endpoints and crossings.","Pick again, or retry the same line — the draft is kept."],"The survey could not fetch land-cover data"),un=await Ps.openEntry();continue}const Gr=nx(ge.a,ge.b,{frame:Rt.frame,cover:pu(Rt.frame,Rt.grid),query:Rt.query});if(!Gr.valid){await Ie.fail(Gr.reasons),un=await Ps.openEntry();continue}Ie.stage("shaping the terrain");{const Zt=Math.min(10500,Re.lengthM/2+3e3),U=Math.floor(Zt*2/Tn),pe=new Float32Array(U*U);for(let Me=0;Me<U;Me++)for(let ve=0;ve<U;ve++)pe[Me*U+ve]=Rt.query.landformHeightAt(ve*Tn-Zt,Me*Tn-Zt);R={src:pe,g:U,halfM:Zt}}A=Ie.done(),console.log(`[survey] live-booted: DEM ${Re.tiles.length} tiles ${(rt/1e6).toFixed(2)} MB · cover ${Ue?`${Ue.tiles} tiles ${(Ue.bytes/1e6).toFixed(2)} MB`:"UNAVAILABLE (land checks deferred, water mask empty — stated)"} · ${(A/1e3).toFixed(1)} s`),D=Rt,y=ge,E={koppen:"live boots do not fetch Köppen: the only source artifact is the 131 MB global GeoTIFF (snapshot-only, stated at survey)",lgm:"not snapshotted and not live-fetchable: the scripted source is a 3.7 GB archive (c53)",lith:"Macrostrat lithology deferred (block cut 1); its CORS measured OPEN c57 — the backlog item carries the path",...ns?{}:{soil:"SoilGrids WCS unavailable after 3 retries per property — soil reads null this walk, stated"}},b=(ns==null?void 0:ns.grids)??null;break}catch(Re){console.warn("[survey] failed:",Re),await Ie.fail(["Check your connection and pick again (or the same line — it will retry)."],"The survey could not reach the terrain servers"),un=await Ps.openEntry();continue}}const{manifest:T,frame:O,query:k,water:K,grid:q,dems:H}=D??(v.url?await Mf(v.url,S):await kv(S)),Q=y?{a:y.a,b:y.b}:{a:T.site.a,b:T.site.b},Y=(un==null?void 0:un.spawn)==="B"?{a:Q.b,b:Q.a}:Q,{state:j}=Gx(Y.a,Y.b,O),fe={heightAt:(ge,Ie)=>k.landformHeightAt(ge,Ie),cellM:30,halfM:R?R.halfM:Math.min(10500,j.lengthM/2+3e3)};k.setFilterExtent(fe.halfM),hi==="repro"&&k.setFilterUnitFrame(!0);const X=D?xf(O,b??new Map,E,fe):T&&T.factors?await vx(O,T.factors,v.url?v.url.replace(/\/tiles\/manifest\.json$/,""):"/fixtures",fe):null;let se=null,ie=R?R.src:null;const F=()=>{const ge=Math.floor(fe.halfM*2/Tn);if(!ie){ie=new Float32Array(ge*ge);for(let Ie=0;Ie<ge;Ie++)for(let Re=0;Re<ge;Re++)ie[Ie*ge+Re]=k.landformHeightAt(Re*Tn-fe.halfM,Ie*Tn-fe.halfM)}return Px(ie,ge,Tn,fe.halfM,X,(Ie,Re)=>({x:Ie*Tn-fe.halfM,z:Re*Tn-fe.halfM}),(Ie,Re)=>K.depthAt(Ie,Re)>0)},I=Pr()&&new URLSearchParams(location.search).get("bake")==="0",B=D!==null&&!D.grid,C=cc();X&&!I&&!B&&!C?(se=F(),k.applyBakedBand(se.baked,se.g,se.cellM,se.halfM),console.log(`[bake] ${se.g}²·${Tn} m in ${se.wallMs.toFixed(0)} ms · budget ${se.budget.map(ge=>`${ge.band}=${ge.rms.toFixed(2)}`).join(" ")}${se.b1Clamped?" · B1 CLAMPED to fit":""}`)):console.log(C?`[bake] SKIPPED: every bake-side erosion stage is off in the current mode (${Dr()}) — the dev tuner's doing, stated not silent`:I?"[bake] DISABLED by ?bake=0 (the A/B lever)":B?"[bake] SKIPPED: the live cover fetch failed, so there is no water mask to hold shorelines against — an un-held bake is worse than none (G4, stated)":"[bake] skipped: no factor field on this boot (stated, not silent)");let P=null;const W=()=>{if(k.applyDrainageField(null),!dn().drainage){P=null;return}const ge=hc(),Ie=Iv((Be,rt)=>k.landformHeightAt(Be,rt),(Be,rt)=>K.depthAt(Be,rt)>0,fe.halfM,ge),Re=Lv(Ie);k.applyDrainageField(Re);const Ue={...Ie.stats,wallMs:Ie.stats.wallMs+Re.buildMs};P=Ue,console.log(`[drainage] params A_min=${ge.channelAreaM2} skirt=${ge.skirtDepthM}/${ge.skirtRadiusM} depthMax=${ge.depthMaxM} bank=${ge.bankDeg} · ${Ie.g}²·${Ie.cellM} m · ${Ue.channelCells} channel cells · density ${Ue.densityKmPerKm2.toFixed(2)} km/km² · spacing ${Ue.spacingM.toFixed(0)} m · depth mean/p90/max ${Ue.depthMeanM.toFixed(1)}/${Ue.depthP90M.toFixed(1)}/${Ue.depthMaxM.toFixed(1)} m · Horton R_b ${Ue.bifurcation.map(Be=>Be.toFixed(1)).join("/")} · ${Ue.wallMs.toFixed(0)} ms`)};W();const $=FA(j.a.x,j.a.z,j.bearingRad,k),Z={current:{fwd:0,strafe:0,yaw:j.bearingRad,pitch:0,sprint:!1}},w={scene:c,camera:h,renderer:a,clock:{realTimeElapsed:0,lastDt:0,simTick:0},flags:{paused:!1,debug:_.DEBUG_AT_BOOT},seed:1,world:{frame:O,query:k,water:K,cover:q?pu(O,q):Qv()},mission:j,player:$,input:Z,ui:{root:null},data:{mode:t,manifest:T}};let re=null;if(Gt.liveTiles&&T){const ge=Bv(T),Ie=new Map(H.map(Re=>[Re.zoom,Re]));re=ax({frame:O,nearZoom:ge.spec.nearZoom,coarse:ge.spec.coarse,source:new rc,cache:await sx(),nearRadiusTiles:_.TILE_NEAR_RADIUS_TILES,loadsPerStep:4,decodeRowsPerStep:_.TILE_DECODE_ROWS_PER_STEP,onTile:(Re,Ue)=>{var Be;return(Be=Ie.get(Re.z))==null?void 0:Be.addTile(Re.x,Re.y,Ue)},onUnload:Re=>{var Ue;return(Ue=Ie.get(Re.z))==null?void 0:Ue.removeTile(Re.x,Re.y)}})}const te=oS(w),xe=KS(w,te),oe=CA(w,te),Ce=IA(oe),Ne=hA(w,te),De=lR(te,xe.material(),Ne,oe),V=[xe.material().userData.uniforms,oe.material().userData.snow],L=$1(te,De,Ne.wind(),w.seed,V);XA(w);const ae=n1(w),ye=t1(w),we=o1(w),Se=VA(w),ke=GA(w,a.domElement),Le=Wx(),Oe=new zc;ye.setVisible(!1),Se.enabled=!1,ke.enabled=!1;const ze=(ge,Ie)=>{kA($,ge,Ie,k,w.world.cover,Ce),Hx(w,Ie),w.clock.simTick++},ce=()=>{ye.setVisible(!1),Se.enabled=!1,ke.enabled=!1,we.show(vf(Lr(j)),j)},_e=()=>{j.phase==="arriving"&&(zx(j),n.mark("walking"),ye.setVisible(!0),Se.enabled=!0,ke.enabled=!0)},ee=()=>{Vx(j),Gf($,j.a.x,j.a.z,k),$.yaw=j.bearingRad,$.pitch=0,Z.current={fwd:0,strafe:0,yaw:j.bearingRad,pitch:0,sprint:!1},Oe.clear(),we.hide(),ye.setVisible(!1),Se.enabled=!1,ke.enabled=!1,Hi(w)};ae.onDone(_e);let ue=!1;const de=[],Ee={pose:null},Te=()=>{const ge=Ee.pose;if(!ge){Hi(w);return}h.position.set(ge.x,ge.y,ge.z),h.rotation.order="YXZ",h.rotation.y=-ge.yaw,h.rotation.x=ge.pitch},ne={frame:null},G=Ps??Hu(w.ui.root??document.body),he=Gt.devTuner||!1,N=he?dR(w,{season:De,weather:L,erosion:{mode:()=>dn(),setMode:ge=>ui(ge),stages:()=>ua,params:()=>$i(),setParams:ge=>Zo(ge),bound:()=>Gs($i()),drainageParams:()=>hc(),setDrainageParams:ge=>jo(ge),drainageStats:()=>P?{channelCells:P.channelCells,densityKmPerKm2:P.densityKmPerKm2,spacingM:P.spacingM,depthP90M:P.depthP90M,wallMs:P.wallMs}:null,apply:()=>{const ge=performance.now();let Ie=!1;if(cc())k.clearBakedBand();else{const Re=F();k.applyBakedBand(Re.baked,Re.g,Re.cellM,Re.halfM),Ie=!0}return W(),k.setDetailOverrides(k.detailOverrides()),xe.rebuildAll(),{modeKey:Dr(),bakeRan:Ie,wallMs:performance.now()-ge}}},rebuildTerrain:()=>xe.rebuildAll(),invalidateDressing:()=>oe.invalidate(),invalidateGroundCover:()=>Ne.invalidate(),invalidateColliders:()=>Ce.invalidate()}):null,z=he?pR():null;let J=Gt.devTuner&&new URLSearchParams(location.search).get("panel")!=="0";if(he){N==null||N.setVisible(J);const ge=document.createElement("div");ge.style.cssText="position:fixed;right:8px;top:8px;z-index:50;font:11px ui-monospace,monospace;color:#9fb0a4;background:rgba(12,18,14,0.62);padding:3px 7px;border-radius:3px;pointer-events:none",ge.textContent="` tuner · F fly · M map",(w.ui.root??document.body).appendChild(ge),window.addEventListener("keydown",Ie=>{const Re=Ie.target;Re instanceof HTMLElement&&(Re.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(Re.tagName))||(Ie.code==="Backquote"?(J=!J,N==null||N.setVisible(J)):Ie.code==="KeyF"&&z&&(ge.textContent=z.toggle(w)?"` tuner · F fly · M map  [FLYING]":"` tuner · F fly · M map"))})}un&&G.onAbandon(()=>{location.href=location.pathname}),window.addEventListener("keydown",ge=>{if(ge.code!=="KeyM"||ge.repeat)return;const Ie=ge.target;Ie instanceof HTMLElement&&(Ie.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(Ie.tagName))||(G.isOpen()?(G.close(),ke.enabled=!0):(ke.enabled=!1,document.pointerLockElement&&document.exitPointerLock(),G.open()))});const Ae=P1(w,{aaLevels:g,initial:M,offerAo:!1,onChange:ge=>{x==null||x.setSamples(ge.aaSamples),k1(f,ge)}});window.addEventListener("keydown",ge=>{if(ge.code!=="KeyO"&&ge.code!=="Escape"||ge.repeat)return;const Ie=ge.target;Ie instanceof HTMLElement&&(Ie.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(Ie.tagName))||(Ae.toggle(),Ae.visible()?(ke.enabled=!1,document.pointerLockElement&&document.exitPointerLock()):G.isOpen()||(ke.enabled=!0))}),window.addEventListener("keydown",ge=>{if(ge.code!=="KeyG"||ge.repeat)return;const Ie=ge.target;Ie instanceof HTMLElement&&(Ie.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(Ie.tagName))||ye.setStowed(!ye.stowed())});const be=j1({ctx:w,terrain:xe,device:ye,result:we,arrival:ae,log:Oe,stepSim:ze,resetToA:ee,handOver:_e,finish:ce,frameDeltas:de,gpuTimer:l,post:x,freeCam:Ee,inputOverride:ne,stream:re,planner:G,bootTimings:n,packId:v.id,dressing:oe,obstacles:Ce,groundCover:Ne,season:De,weather:L,tuner:N,factorField:X,bakeState:se,runBake:F,runDrainage:W});ae.start(),Hi(w),be.entryPick=()=>un,window.__game={ready:!0,ctx:w,features:Gt,debug:be};let Pe=performance.now();const We=()=>{const ge=performance.now(),Ie=(ge-Pe)/1e3;Pe=ge,de.push(Ie*1e3),de.length>600&&de.shift();const Re=Math.min(Ie,.25);w.flags.paused||(w.clock.lastDt=Re,w.clock.realTimeElapsed+=Re,!G.isOpen()&&!Ae.visible()&&Se.sample(w),ne.frame&&(Z.current={...ne.frame}),z!=null&&z.active()?($.yaw=Z.current.yaw,$.pitch=Z.current.pitch,z.update(w,Re)):j.phase==="walking"?Le.advance(Re,Ue=>{const Be=Af(Z.current);Oe.record(Be),ze(Be,Ue),j.phase==="finished"&&ce()}):j.phase==="arriving"&&($.yaw=Z.current.yaw,$.pitch=Z.current.pitch),ae.update(w,Re)),Te(),re&&(re.update(w.player.x,w.player.z),re.step()),xe.update(w),oe.update(w),Ne.update(w),!ue&&xe.drained()&&(ue=!0,n.mark("terrain-first-drain")),L.update(w),te.update(w),ye.update(w),l.begin(),a.info.reset(),x?x.render():a.render(c,h),l.end(),requestAnimationFrame(We)};requestAnimationFrame(We)}gR().catch(n=>{console.error("[beeline] boot failed",n),window.__game={ready:!1}});export{_ as T,pc as _,tf as b,Ef as c,Bc as h,c1 as l,nx as v};
