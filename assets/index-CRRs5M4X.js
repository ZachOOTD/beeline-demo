const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./plannerMap-CXrbnkvS.js","./plannerMap-GRinvwPn.css"])))=>i.map(i=>d[i]);
var R0=Object.defineProperty;var b0=(n,e,t)=>e in n?R0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var rt=(n,e,t)=>b0(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="166",T0=0,Nu=1,C0=2,Jf=1,D0=2,gi=3,rr=0,un=1,pn=2,Kt=0,Rs=1,Iu=2,Ou=3,Gc=4,ep=5,Kn=100,N0=101,I0=102,O0=103,P0=104,no=200,L0=201,U0=202,F0=203,zc=204,Hc=205,Vc=206,k0=207,Wc=208,B0=209,G0=210,z0=211,H0=212,V0=213,W0=214,$0=0,X0=1,K0=2,Wa=3,Y0=4,q0=5,Z0=6,j0=7,Qh=0,Q0=1,J0=2,yi=0,tp=1,np=2,ip=3,rp=4,eg=5,sp=6,op=7,ap=300,Ns=301,Is=302,$c=303,Xc=304,dl=306,sr=1e3,Ji=1001,Kc=1002,Bt=1003,tg=1004,Oo=1005,$t=1006,yl=1007,qn=1008,An=1009,lp=1010,cp=1011,So=1012,Jh=1013,Cr=1014,ii=1015,bi=1016,eu=1017,tu=1018,Dr=1020,hp=35902,up=1021,dp=1022,tn=1023,fp=1024,pp=1025,bs=1026,Nr=1027,Os=1028,nu=1029,mp=1030,iu=1031,ru=1033,wa=33776,ya=33777,Ra=33778,ba=33779,Yc=35840,qc=35841,Zc=35842,jc=35843,Qc=36196,Jc=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,ch=37816,hh=37817,uh=37818,dh=37819,fh=37820,ph=37821,Ta=36492,mh=36494,gh=36495,gp=36283,_h=36284,Mh=36285,Eh=36286,ng=3200,ig=3201,su=0,rg=1,qi="",kt="srgb",ar="srgb-linear",ou="display-p3",fl="display-p3-linear",$a="linear",yt="srgb",Xa="rec709",Ka="p3",Gr=7680,Pu=519,sg=512,og=513,ag=514,_p=515,lg=516,cg=517,hg=518,ug=519,Lu=35044,Er=35048,Uu="300 es",vi=2e3,Ya=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const co=Math.PI/180,Ao=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function au(n,e){return(n%e+e)%e}function dg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function fg(n,e,t){return n!==e?(t-n)/(e-n):0}function ho(n,e,t){return(1-t)*n+t*e}function pg(n,e,t,i){return ho(n,e,1-Math.exp(-t*i))}function mg(n,e=1){return e-Math.abs(au(n,e*2)-e)}function gg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _g(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Mg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Eg(n,e){return n+Math.random()*(e-n)}function vg(n){return n*(.5-Math.random())}function xg(n){n!==void 0&&(Fu=n);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sg(n){return n*co}function Ag(n){return n*Ao}function wg(n){return(n&n-1)===0&&n!==0}function yg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Rg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bg(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),M=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*M,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*M,a*c);break;case"ZYZ":n.set(l*M,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Rl={DEG2RAD:co,RAD2DEG:Ao,generateUUID:ks,clamp:cn,euclideanModulo:au,mapLinear:dg,inverseLerp:fg,lerp:ho,damp:pg,pingpong:mg,smoothstep:gg,smootherstep:_g,randInt:Mg,randFloat:Eg,randFloatSpread:vg,seededRandom:xg,degToRad:Sg,radToDeg:Ag,isPowerOfTwo:wg,ceilPowerOfTwo:yg,floorPowerOfTwo:Rg,setQuaternionFromProperEuler:bg,normalize:an,denormalize:_s};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,i,r,s,o,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],M=i[8],E=r[0],m=r[3],p=r[6],g=r[1],S=r[4],x=r[7],D=r[2],y=r[5],R=r[8];return s[0]=o*E+a*g+l*D,s[3]=o*m+a*S+l*y,s[6]=o*p+a*x+l*R,s[1]=c*E+h*g+u*D,s[4]=c*m+h*S+u*y,s[7]=c*p+h*x+u*R,s[2]=d*E+f*g+M*D,s[5]=d*m+f*S+M*y,s[8]=d*p+f*x+M*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,M=t*u+i*d+r*f;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=u*E,e[1]=(r*c-h*i)*E,e[2]=(a*i-r*o)*E,e[3]=d*E,e[4]=(h*t-r*l)*E,e[5]=(r*s-a*t)*E,e[6]=f*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bl.makeScale(e,t)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new ct;function Mp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tg(){const n=qa("canvas");return n.style.display="block",n}const ku={};function Ep(n){n in ku||(ku[n]=!0,console.warn(n))}function Cg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Bu=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gu=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[ar]:{transfer:$a,primaries:Xa,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:yt,primaries:Xa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fl]:{transfer:$a,primaries:Ka,toReference:n=>n.applyMatrix3(Gu),fromReference:n=>n.applyMatrix3(Bu)},[ou]:{transfer:yt,primaries:Ka,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gu),fromReference:n=>n.applyMatrix3(Bu).convertLinearToSRGB()}},Dg=new Set([ar,fl]),Et={enabled:!0,_workingColorSpace:ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Dg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Po[e].toReference,r=Po[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Po[n].primaries},getTransfer:function(n){return n===qi?$a:Po[n].transfer}};function Ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zr;class Ng{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=qa("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ts(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ts(t[i]/255)*255):t[i]=Ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ig=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cl(r[o].image)):s.push(Cl(r[o]))}else s=Cl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ng.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Og=0;class nn extends Fs{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Ji,r=Ji,s=$t,o=qn,a=tn,l=An,c=nn.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ks(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ap;nn.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],M=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-E)<.01&&Math.abs(M-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+E)<.1&&Math.abs(M+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(f+1)/2,D=(p+1)/2,y=(h+d)/4,R=(u+E)/4,N=(M+m)/4;return S>x&&S>D?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=y/i,s=R/i):x>D?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=y/r,s=N/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=R/s,r=N/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-M)*(m-M)+(u-E)*(u-E)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-M)/g,this.y=(u-E)/g,this.z=(d-h)/g,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pg extends Fs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Pg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xp extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lg extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],f=s[o+1],M=s[o+2],E=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=M,e[t+3]=E;return}if(u!==E||l!==d||c!==f||h!==M){let m=1-a;const p=l*d+c*f+h*M+u*E,g=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),y=Math.atan2(D,p*g);m=Math.sin(m*y)/D,a=Math.sin(a*y)/D}const x=a*g;if(l=l*m+d*x,c=c*m+f*x,h=h*m+M*x,u=u*m+E*x,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],M=s[o+3];return e[t]=a*M+h*u+l*f-c*d,e[t+1]=l*M+h*d+c*u-a*f,e[t+2]=c*M+h*f+a*d-l*u,e[t+3]=h*M-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),f=l(r/2),M=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*M,this._y=c*f*u-d*h*M,this._z=c*h*M+d*f*u,this._w=c*h*u-d*f*M;break;case"YXZ":this._x=d*h*u+c*f*M,this._y=c*f*u-d*h*M,this._z=c*h*M-d*f*u,this._w=c*h*u+d*f*M;break;case"ZXY":this._x=d*h*u-c*f*M,this._y=c*f*u+d*h*M,this._z=c*h*M+d*f*u,this._w=c*h*u-d*f*M;break;case"ZYX":this._x=d*h*u-c*f*M,this._y=c*f*u+d*h*M,this._z=c*h*M-d*f*u,this._w=c*h*u+d*f*M;break;case"YZX":this._x=d*h*u+c*f*M,this._y=c*f*u+d*h*M,this._z=c*h*M-d*f*u,this._w=c*h*u-d*f*M;break;case"XZY":this._x=d*h*u-c*f*M,this._y=c*f*u-d*h*M,this._z=c*h*M+d*f*u,this._w=c*h*u+d*f*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,i=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dl=new ue,zu=new ai;class Lr{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Uo.subVectors(this.max,$s),Hr.subVectors(e.a,$s),Vr.subVectors(e.b,$s),Wr.subVectors(e.c,$s),Ii.subVectors(Vr,Hr),Oi.subVectors(Wr,Vr),cr.subVectors(Hr,Wr);let t=[0,-Ii.z,Ii.y,0,-Oi.z,Oi.y,0,-cr.z,cr.y,Ii.z,0,-Ii.x,Oi.z,0,-Oi.x,cr.z,0,-cr.x,-Ii.y,Ii.x,0,-Oi.y,Oi.x,0,-cr.y,cr.x,0];return!Nl(t,Hr,Vr,Wr,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Hr,Vr,Wr,Uo))?!1:(Fo.crossVectors(Ii,Oi),t=[Fo.x,Fo.y,Fo.z],Nl(t,Hr,Vr,Wr,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Gn=new ue,Lo=new Lr,Hr=new ue,Vr=new ue,Wr=new ue,Ii=new ue,Oi=new ue,cr=new ue,$s=new ue,Uo=new ue,Fo=new ue,hr=new ue;function Nl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hr.fromArray(n,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),h=i.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ug=new Lr,Xs=new ue,Il=new ue;class Ur{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ug.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Il)),this.expandByPoint(Xs.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new ue,Ol=new ue,ko=new ue,Pi=new ue,Pl=new ue,Bo=new ue,Ll=new ue;class Fg{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ol.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Ol);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ko),a=Pi.dot(this.direction),l=-Pi.dot(ko),c=Pi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,M;if(h>0)if(u=o*l-a,d=o*a-l,M=s*h,u>=0)if(d>=-M)if(d<=M){const E=1/h;u*=E,d*=E,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-M?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=M?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ol).addScaledVector(ko,d),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,s){Pl.subVectors(t,e),Bo.subVectors(i,e),Ll.crossVectors(Pl,Bo);let o=this.direction.dot(Ll),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Bo.crossVectors(Pi,Bo));if(l<0)return null;const c=a*this.direction.dot(Pl.cross(Pi));if(c<0||l+c>o)return null;const h=-a*Pi.dot(Ll);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,o,a,l,c,h,u,d,f,M,E,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,d,f,M,E,m)}set(e,t,i,r,s,o,a,l,c,h,u,d,f,M,E,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=M,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,M=a*h,E=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+M*c,t[5]=d-E*c,t[9]=-a*l,t[2]=E-d*c,t[6]=M+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,M=c*h,E=c*u;t[0]=d+E*a,t[4]=M*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-M,t[6]=E+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,M=c*h,E=c*u;t[0]=d-E*a,t[4]=-o*u,t[8]=M+f*a,t[1]=f+M*a,t[5]=o*h,t[9]=E-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,M=a*h,E=a*u;t[0]=l*h,t[4]=M*c-f,t[8]=d*c+E,t[1]=l*u,t[5]=E*c+d,t[9]=f*c-M,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,M=a*l,E=a*c;t[0]=l*h,t[4]=E-d*u,t[8]=M*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+M,t[10]=d-E*u}else if(e.order==="XZY"){const d=o*l,f=o*c,M=a*l,E=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+E,t[5]=o*h,t[9]=f*u-M,t[2]=M*u-f,t[6]=a*h,t[10]=E*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kg,e,Bg)}lookAt(e,t,i){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(i,gn),Li.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(i,gn)),Li.normalize(),Go.crossVectors(gn,Li),r[0]=Li.x,r[4]=Go.x,r[8]=gn.x,r[1]=Li.y,r[5]=Go.y,r[9]=gn.y,r[2]=Li.z,r[6]=Go.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],M=i[2],E=i[6],m=i[10],p=i[14],g=i[3],S=i[7],x=i[11],D=i[15],y=r[0],R=r[4],N=r[8],b=r[12],v=r[1],w=r[5],O=r[9],C=r[13],W=r[2],B=r[6],L=r[10],X=r[14],k=r[3],J=r[7],Z=r[11],ee=r[15];return s[0]=o*y+a*v+l*W+c*k,s[4]=o*R+a*w+l*B+c*J,s[8]=o*N+a*O+l*L+c*Z,s[12]=o*b+a*C+l*X+c*ee,s[1]=h*y+u*v+d*W+f*k,s[5]=h*R+u*w+d*B+f*J,s[9]=h*N+u*O+d*L+f*Z,s[13]=h*b+u*C+d*X+f*ee,s[2]=M*y+E*v+m*W+p*k,s[6]=M*R+E*w+m*B+p*J,s[10]=M*N+E*O+m*L+p*Z,s[14]=M*b+E*C+m*X+p*ee,s[3]=g*y+S*v+x*W+D*k,s[7]=g*R+S*w+x*B+D*J,s[11]=g*N+S*O+x*L+D*Z,s[15]=g*b+S*C+x*X+D*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],M=e[3],E=e[7],m=e[11],p=e[15];return M*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*f-i*l*f)+E*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+p*(-r*a*h-t*l*u+t*a*d+r*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],M=e[12],E=e[13],m=e[14],p=e[15],g=u*m*c-E*d*c+E*l*f-a*m*f-u*l*p+a*d*p,S=M*d*c-h*m*c-M*l*f+o*m*f+h*l*p-o*d*p,x=h*E*c-M*u*c+M*a*f-o*E*f-h*a*p+o*u*p,D=M*u*l-h*E*l-M*a*d+o*E*d+h*a*m-o*u*m,y=t*g+i*S+r*x+s*D;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/y;return e[0]=g*R,e[1]=(E*d*s-u*m*s-E*r*f+i*m*f+u*r*p-i*d*p)*R,e[2]=(a*m*s-E*l*s+E*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*f-i*l*f)*R,e[4]=S*R,e[5]=(h*m*s-M*d*s+M*r*f-t*m*f-h*r*p+t*d*p)*R,e[6]=(M*l*s-o*m*s-M*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*f+t*l*f)*R,e[8]=x*R,e[9]=(M*u*s-h*E*s-M*i*f+t*E*f+h*i*p-t*u*p)*R,e[10]=(o*E*s-M*a*s+M*i*c-t*E*c-o*i*p+t*a*p)*R,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*R,e[12]=D*R,e[13]=(h*E*r-M*u*r+M*i*d-t*E*d-h*i*m+t*u*m)*R,e[14]=(M*a*r-o*E*r-M*i*l+t*E*l+o*i*m-t*a*m)*R,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,M=s*u,E=o*h,m=o*u,p=a*u,g=l*c,S=l*h,x=l*u,D=i.x,y=i.y,R=i.z;return r[0]=(1-(E+p))*D,r[1]=(f+x)*D,r[2]=(M-S)*D,r[3]=0,r[4]=(f-x)*y,r[5]=(1-(d+p))*y,r[6]=(m+g)*y,r[7]=0,r[8]=(M+S)*R,r[9]=(m-g)*R,r[10]=(1-(d+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const o=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,h=1/o,u=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let f,M;if(a===vi)f=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Ya)f=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*c,f=(i+r)*h;let M,E;if(a===vi)M=(o+s)*u,E=-2*u;else if(a===Ya)M=s*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $r=new ue,zn=new _t,kg=new ue(0,0,0),Bg=new ue(1,1,1),Li=new ue,Go=new ue,gn=new ue,Hu=new _t,Vu=new ai;class si{constructor(e=0,t=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gg=0;const Wu=new ue,Xr=new ai,hi=new _t,zo=new ue,Ks=new ue,zg=new ue,Hg=new ai,$u=new ue(1,0,0),Xu=new ue(0,1,0),Ku=new ue(0,0,1),Yu={type:"added"},Vg={type:"removed"},Kr={type:"childadded",child:null},Ul={type:"childremoved",child:null};class qt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new ue,t=new si,i=new ai,r=new ue(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ct}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(Ku,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(Ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zo.copy(e):zo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ks,zo,this.up):hi.lookAt(zo,Ks,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(hi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vg),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),M=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new ue(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new ue,ui=new ue,Fl=new ue,di=new ue,Yr=new ue,qr=new ue,qu=new ue,kl=new ue,Bl=new ue,Gl=new ue;class ni{constructor(e=new ue,t=new ue,i=new ue){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Hn.subVectors(e,t),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Hn.subVectors(r,t),ui.subVectors(i,t),Fl.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(ui),l=Hn.dot(Fl),c=ui.dot(ui),h=ui.dot(Fl),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,M=(o*h-a*l)*d;return s.set(1-f-M,M,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,t,i,r){return Hn.subVectors(i,t),ui.subVectors(e,t),Hn.cross(ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Hn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),qr.subVectors(s,i),kl.subVectors(e,i);const l=Yr.dot(kl),c=qr.dot(kl);if(l<=0&&c<=0)return t.copy(i);Bl.subVectors(e,r);const h=Yr.dot(Bl),u=qr.dot(Bl);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Yr,o);Gl.subVectors(e,s);const f=Yr.dot(Gl),M=qr.dot(Gl);if(M>=0&&f<=M)return t.copy(s);const E=f*c-l*M;if(E<=0&&c>=0&&M<=0)return a=c/(c-M),t.copy(i).addScaledVector(qr,a);const m=h*M-f*u;if(m<=0&&u-h>=0&&f-M>=0)return qu.subVectors(s,r),a=(u-h)/(u-h+(f-M)),t.copy(r).addScaledVector(qu,a);const p=1/(m+E+d);return o=E*p,a=d*p,t.copy(i).addScaledVector(Yr,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=au(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zl(o,s,e+1/3),this.g=zl(o,s,e),this.b=zl(o,s,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Tl(e.r),this.g=Tl(e.g),this.b=Tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Et.fromWorkingColorSpace(Qt.copy(this),e),Math.round(cn(Qt.r*255,0,255))*65536+Math.round(cn(Qt.g*255,0,255))*256+Math.round(cn(Qt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=kt){Et.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Ho);const i=ho(Ui.h,Ho.h,t),r=ho(Ui.s,Ho.s,t),s=ho(Ui.l,Ho.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new We;We.NAMES=Ap;let Wg=0;class Bs extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Rs,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Hc&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class To extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new ue,Vo=new st;class tt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ep("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class wp extends tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yp extends tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends tt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $g=0;const Tn=new _t,Hl=new qt,Zr=new ue,_n=new Lr,Ys=new Lr,Vt=new ue;class At extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?yp:wp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(_n.min,Ys.min),_n.expandByPoint(Vt),Vt.addVectors(_n.max,Ys.max),_n.expandByPoint(Vt)):(_n.expandByPoint(Ys.min),_n.expandByPoint(Ys.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vt.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),Vt.add(Zr)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new ue,l[N]=new ue;const c=new ue,h=new ue,u=new ue,d=new st,f=new st,M=new st,E=new ue,m=new ue;function p(N,b,v){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,v),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,b),M.fromBufferAttribute(s,v),h.sub(c),u.sub(c),f.sub(d),M.sub(d);const w=1/(f.x*M.y-M.x*f.y);isFinite(w)&&(E.copy(h).multiplyScalar(M.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-M.x).multiplyScalar(w),a[N].add(E),a[b].add(E),a[v].add(E),l[N].add(m),l[b].add(m),l[v].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let N=0,b=g.length;N<b;++N){const v=g[N],w=v.start,O=v.count;for(let C=w,W=w+O;C<W;C+=3)p(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const S=new ue,x=new ue,D=new ue,y=new ue;function R(N){D.fromBufferAttribute(r,N),y.copy(D);const b=a[N];S.copy(b),S.sub(D.multiplyScalar(D.dot(b))).normalize(),x.crossVectors(y,b);const w=x.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,w)}for(let N=0,b=g.length;N<b;++N){const v=g[N],w=v.start,O=v.count;for(let C=w,W=w+O;C<W;C+=3)R(e.getX(C+0)),R(e.getX(C+1)),R(e.getX(C+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new ue,s=new ue,o=new ue,a=new ue,l=new ue,c=new ue,h=new ue,u=new ue;if(e)for(let d=0,f=e.count;d<f;d+=3){const M=e.getX(d+0),E=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,M=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)d[M++]=c[f++]}return new tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zu=new _t,ur=new Fg,Wo=new Ur,ju=new ue,jr=new ue,Qr=new ue,Jr=new ue,Vl=new ue,$o=new ue,Xo=new st,Ko=new st,Yo=new st,Qu=new ue,Ju=new ue,ed=new ue,qo=new ue,Zo=new ue;class vt extends qt{constructor(e=new At,t=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Vl.fromBufferAttribute(u,e),o?$o.addScaledVector(Vl,h):$o.addScaledVector(Vl.sub(t),h))}t.add($o)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Wo.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Wo,ju)===null||ur.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(Zu.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Zu),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,E=d.length;M<E;M++){const m=d[M],p=o[m.materialIndex],g=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=g,D=S;x<D;x+=3){const y=a.getX(x),R=a.getX(x+1),N=a.getX(x+2);r=jo(this,p,e,i,c,h,u,y,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const M=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=M,p=E;m<p;m+=3){const g=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=jo(this,o,e,i,c,h,u,g,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,E=d.length;M<E;M++){const m=d[M],p=o[m.materialIndex],g=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=g,D=S;x<D;x+=3){const y=x,R=x+1,N=x+2;r=jo(this,p,e,i,c,h,u,y,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const M=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=M,p=E;m<p;m+=3){const g=m,S=m+1,x=m+2;r=jo(this,o,e,i,c,h,u,g,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Xg(n,e,t,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rr,a),l===null)return null;Zo.copy(a),Zo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zo);return c<t.near||c>t.far?null:{distance:c,point:Zo.clone(),object:n}}function jo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,Jr);const h=Xg(n,e,t,i,jr,Qr,Jr,qo);if(h){r&&(Xo.fromBufferAttribute(r,a),Ko.fromBufferAttribute(r,l),Yo.fromBufferAttribute(r,c),h.uv=ni.getInterpolation(qo,jr,Qr,Jr,Xo,Ko,Yo,new st)),s&&(Xo.fromBufferAttribute(s,a),Ko.fromBufferAttribute(s,l),Yo.fromBufferAttribute(s,c),h.uv1=ni.getInterpolation(qo,jr,Qr,Jr,Xo,Ko,Yo,new st)),o&&(Qu.fromBufferAttribute(o,a),Ju.fromBufferAttribute(o,l),ed.fromBufferAttribute(o,c),h.normal=ni.getInterpolation(qo,jr,Qr,Jr,Qu,Ju,ed,new ue),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new ue,materialIndex:0};ni.getNormal(jr,Qr,Jr,u.normal),h.face=u}return h}class Gs extends At{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;M("z","y","x",-1,-1,i,t,e,o,s,0),M("z","y","x",1,-1,i,t,-e,o,s,1),M("x","z","y",1,1,e,i,t,r,o,2),M("x","z","y",1,-1,e,i,-t,r,o,3),M("x","y","z",1,-1,e,t,i,r,s,4),M("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function M(E,m,p,g,S,x,D,y,R,N,b){const v=x/R,w=D/N,O=x/2,C=D/2,W=y/2,B=R+1,L=N+1;let X=0,k=0;const J=new ue;for(let Z=0;Z<L;Z++){const ee=Z*w-C;for(let me=0;me<B;me++){const K=me*v-O;J[E]=K*g,J[m]=ee*S,J[p]=W,c.push(J.x,J.y,J.z),J[E]=0,J[m]=0,J[p]=y>0?1:-1,h.push(J.x,J.y,J.z),u.push(me/R),u.push(1-Z/N),X+=1}}for(let Z=0;Z<N;Z++)for(let ee=0;ee<R;ee++){const me=d+ee+B*Z,K=d+ee+B*(Z+1),j=d+(ee+1)+B*(Z+1),Q=d+(ee+1)+B*Z;l.push(me,K,Q),l.push(K,j,Q),k+=6}a.addGroup(f,k,b),f+=k,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Kg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Zi={clone:Ps,merge:ln};var Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bp extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new ue,td=new st,nd=new st;class Pn extends bp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class Zg extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(es,ts,e,t);r.layers=this.layers,this.add(r);const s=new Pn(es,ts,e,t);s.layers=this.layers,this.add(s);const o=new Pn(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new Pn(es,ts,e,t);a.layers=this.layers,this.add(a);const l=new Pn(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new Pn(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Tp extends nn{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jg extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gs(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Kt});s.uniforms.tEquirect.value=t;const o=new vt(r,s),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=$t),new Zg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wl=new ue,Qg=new ue,Jg=new ct;class vr{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wl.subVectors(i,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jg.getNormalMatrix(e),r=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Ur,Qo=new ue;class lu{constructor(e=new vr,t=new vr,i=new vr,r=new vr,s=new vr,o=new vr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],f=r[8],M=r[9],E=r[10],m=r[11],p=r[12],g=r[13],S=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-f,x-p).normalize(),i[1].setComponents(l+s,d+c,m+f,x+p).normalize(),i[2].setComponents(l+o,d+h,m+M,x+g).normalize(),i[3].setComponents(l-o,d-h,m-M,x-g).normalize(),i[4].setComponents(l-a,d-u,m-E,x-S).normalize(),t===vi)i[5].setComponents(l+a,d+u,m+E,x+S).normalize();else if(t===Ya)i[5].setComponents(a,u,E,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qo.x=r.normal.x>0?e.max.x:e.min.x,Qo.y=r.normal.y>0?e.max.y:e.min.y,Qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function e_(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let f=0,M=d.length;f<M;f++){const E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ti extends At{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,f=[],M=[],E=[],m=[];for(let p=0;p<h;p++){const g=p*d-o;for(let S=0;S<c;S++){const x=S*u-s;M.push(x,-g,0),E.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const S=g+c*p,x=g+c*(p+1),D=g+1+c*(p+1),y=g+1+c*p;f.push(S,x,y),f.push(x,D,y)}this.setIndex(f),this.setAttribute("position",new gt(M,3)),this.setAttribute("normal",new gt(E,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var t_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n_=`#ifdef USE_ALPHAHASH
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
#endif`,i_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a_=`#ifdef USE_AOMAP
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
#endif`,l_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c_=`#ifdef USE_BATCHING
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
#endif`,h_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p_=`#ifdef USE_IRIDESCENCE
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
#endif`,m_=`#ifdef USE_BUMPMAP
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
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,w_=`#define PI 3.141592653589793
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
} // validated`,y_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R_=`vec3 transformedNormal = objectNormal;
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
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",I_=`
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
}`,O_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H_=`#ifdef USE_GRADIENTMAP
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
}`,V_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X_=`uniform bool receiveShadow;
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
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q_=`PhysicalMaterial material;
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
#endif`,J_=`struct PhysicalMaterial {
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
}`,eM=`
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
#endif`,tM=`#if defined( RE_IndirectDiffuse )
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
#endif`,nM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hM=`#if defined( USE_POINTS_UV )
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
#endif`,uM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
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
#endif`,_M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AM=`#ifdef USE_NORMALMAP
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
#endif`,wM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BM=`float getShadowMask() {
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
}`,GM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,HM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VM=`#ifdef USE_SKINNING
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
#endif`,WM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YM=`#ifdef USE_TRANSMISSION
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
#endif`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tE=`uniform sampler2D t2D;
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
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`#include <common>
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
}`,aE=`#if DEPTH_PACKING == 3200
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
}`,lE=`#define DISTANCE
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
}`,cE=`#define DISTANCE
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`uniform float scale;
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
}`,fE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#define LAMBERT
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
}`,_E=`#define LAMBERT
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
}`,ME=`#define MATCAP
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
}`,EE=`#define MATCAP
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
}`,vE=`#define NORMAL
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
}`,xE=`#define NORMAL
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
}`,SE=`#define PHONG
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
}`,AE=`#define PHONG
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
}`,wE=`#define STANDARD
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
}`,yE=`#define STANDARD
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
}`,RE=`#define TOON
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
}`,bE=`#define TOON
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
}`,TE=`uniform float size;
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
}`,CE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,NE=`uniform vec3 color;
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
}`,IE=`uniform float rotation;
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
}`,OE=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:t_,alphahash_pars_fragment:n_,alphamap_fragment:i_,alphamap_pars_fragment:r_,alphatest_fragment:s_,alphatest_pars_fragment:o_,aomap_fragment:a_,aomap_pars_fragment:l_,batching_pars_vertex:c_,batching_vertex:h_,begin_vertex:u_,beginnormal_vertex:d_,bsdfs:f_,iridescence_fragment:p_,bumpmap_pars_fragment:m_,clipping_planes_fragment:g_,clipping_planes_pars_fragment:__,clipping_planes_pars_vertex:M_,clipping_planes_vertex:E_,color_fragment:v_,color_pars_fragment:x_,color_pars_vertex:S_,color_vertex:A_,common:w_,cube_uv_reflection_fragment:y_,defaultnormal_vertex:R_,displacementmap_pars_vertex:b_,displacementmap_vertex:T_,emissivemap_fragment:C_,emissivemap_pars_fragment:D_,colorspace_fragment:N_,colorspace_pars_fragment:I_,envmap_fragment:O_,envmap_common_pars_fragment:P_,envmap_pars_fragment:L_,envmap_pars_vertex:U_,envmap_physical_pars_fragment:K_,envmap_vertex:F_,fog_vertex:k_,fog_pars_vertex:B_,fog_fragment:G_,fog_pars_fragment:z_,gradientmap_pars_fragment:H_,lightmap_pars_fragment:V_,lights_lambert_fragment:W_,lights_lambert_pars_fragment:$_,lights_pars_begin:X_,lights_toon_fragment:Y_,lights_toon_pars_fragment:q_,lights_phong_fragment:Z_,lights_phong_pars_fragment:j_,lights_physical_fragment:Q_,lights_physical_pars_fragment:J_,lights_fragment_begin:eM,lights_fragment_maps:tM,lights_fragment_end:nM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:rM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:oM,map_fragment:aM,map_pars_fragment:lM,map_particle_fragment:cM,map_particle_pars_fragment:hM,metalnessmap_fragment:uM,metalnessmap_pars_fragment:dM,morphinstance_vertex:fM,morphcolor_vertex:pM,morphnormal_vertex:mM,morphtarget_pars_vertex:gM,morphtarget_vertex:_M,normal_fragment_begin:MM,normal_fragment_maps:EM,normal_pars_fragment:vM,normal_pars_vertex:xM,normal_vertex:SM,normalmap_pars_fragment:AM,clearcoat_normal_fragment_begin:wM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:RM,iridescence_pars_fragment:bM,opaque_fragment:TM,packing:CM,premultiplied_alpha_fragment:DM,project_vertex:NM,dithering_fragment:IM,dithering_pars_fragment:OM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:UM,shadowmap_pars_vertex:FM,shadowmap_vertex:kM,shadowmask_pars_fragment:BM,skinbase_vertex:GM,skinning_pars_vertex:zM,skinning_vertex:HM,skinnormal_vertex:VM,specularmap_fragment:WM,specularmap_pars_fragment:$M,tonemapping_fragment:XM,tonemapping_pars_fragment:KM,transmission_fragment:YM,transmission_pars_fragment:qM,uv_pars_fragment:ZM,uv_pars_vertex:jM,uv_vertex:QM,worldpos_vertex:JM,background_vert:eE,background_frag:tE,backgroundCube_vert:nE,backgroundCube_frag:iE,cube_vert:rE,cube_frag:sE,depth_vert:oE,depth_frag:aE,distanceRGBA_vert:lE,distanceRGBA_frag:cE,equirect_vert:hE,equirect_frag:uE,linedashed_vert:dE,linedashed_frag:fE,meshbasic_vert:pE,meshbasic_frag:mE,meshlambert_vert:gE,meshlambert_frag:_E,meshmatcap_vert:ME,meshmatcap_frag:EE,meshnormal_vert:vE,meshnormal_frag:xE,meshphong_vert:SE,meshphong_frag:AE,meshphysical_vert:wE,meshphysical_frag:yE,meshtoon_vert:RE,meshtoon_frag:bE,points_vert:TE,points_frag:CE,shadow_vert:DE,shadow_frag:NE,sprite_vert:IE,sprite_frag:OE},$e={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ei={basic:{uniforms:ln([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:ln([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new We(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:ln([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:ln([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:ln([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new We(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:ln([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:ln([$e.points,$e.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:ln([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:ln([$e.common,$e.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:ln([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:ln([$e.sprite,$e.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:ln([$e.common,$e.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:ln([$e.lights,$e.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};ei.physical={uniforms:ln([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Jo={r:0,b:0,g:0},fr=new si,PE=new _t;function LE(n,e,t,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function M(g){let S=g.isScene===!0?g.background:null;return S&&S.isTexture&&(S=(g.backgroundBlurriness>0?t:e).get(S)),S}function E(g){let S=!1;const x=M(g);x===null?p(a,l):x&&x.isColor&&(p(x,1),S=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(g,S){const x=M(S);x&&(x.isCubeTexture||x.mapping===dl)?(h===void 0&&(h=new vt(new Gs(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Ps(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),fr.copy(S.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(PE.makeRotationFromEuler(fr)),h.material.toneMapped=Et.getTransfer(x.colorSpace)!==yt,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new vt(new Ti(2,2),new Gt({name:"BackgroundMaterial",uniforms:Ps(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Et.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function p(g,S){g.getRGB(Jo,Rp(n)),i.buffers.color.setClear(Jo.r,Jo.g,Jo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(g,S=1){a.set(g),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,p(a,l)},render:E,addToRenderList:m}}function UE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(v,w,O,C,W){let B=!1;const L=u(C,O,w);s!==L&&(s=L,c(s.object)),B=f(v,C,O,W),B&&M(v,C,O,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(v,w,O,C),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,w,O){const C=O.wireframe===!0;let W=i[v.id];W===void 0&&(W={},i[v.id]=W);let B=W[w.id];B===void 0&&(B={},W[w.id]=B);let L=B[C];return L===void 0&&(L=d(l()),B[C]=L),L}function d(v){const w=[],O=[],C=[];for(let W=0;W<t;W++)w[W]=0,O[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:C,object:v,attributes:{},index:null}}function f(v,w,O,C){const W=s.attributes,B=w.attributes;let L=0;const X=O.getAttributes();for(const k in X)if(X[k].location>=0){const Z=W[k];let ee=B[k];if(ee===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),Z===void 0||Z.attribute!==ee||ee&&Z.data!==ee.data)return!0;L++}return s.attributesNum!==L||s.index!==C}function M(v,w,O,C){const W={},B=w.attributes;let L=0;const X=O.getAttributes();for(const k in X)if(X[k].location>=0){let Z=B[k];Z===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor));const ee={};ee.attribute=Z,Z&&Z.data&&(ee.data=Z.data),W[k]=ee,L++}s.attributes=W,s.attributesNum=L,s.index=C}function E(){const v=s.newAttributes;for(let w=0,O=v.length;w<O;w++)v[w]=0}function m(v){p(v,0)}function p(v,w){const O=s.newAttributes,C=s.enabledAttributes,W=s.attributeDivisors;O[v]=1,C[v]===0&&(n.enableVertexAttribArray(v),C[v]=1),W[v]!==w&&(n.vertexAttribDivisor(v,w),W[v]=w)}function g(){const v=s.newAttributes,w=s.enabledAttributes;for(let O=0,C=w.length;O<C;O++)w[O]!==v[O]&&(n.disableVertexAttribArray(O),w[O]=0)}function S(v,w,O,C,W,B,L){L===!0?n.vertexAttribIPointer(v,w,O,W,B):n.vertexAttribPointer(v,w,O,C,W,B)}function x(v,w,O,C){E();const W=C.attributes,B=O.getAttributes(),L=w.defaultAttributeValues;for(const X in B){const k=B[X];if(k.location>=0){let J=W[X];if(J===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const Z=J.normalized,ee=J.itemSize,me=e.get(J);if(me===void 0)continue;const K=me.buffer,j=me.type,Q=me.bytesPerElement,H=j===n.INT||j===n.UNSIGNED_INT||J.gpuType===Jh;if(J.isInterleavedBufferAttribute){const $=J.data,re=$.stride,oe=J.offset;if($.isInstancedInterleavedBuffer){for(let de=0;de<k.locationSize;de++)p(k.location+de,$.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<k.locationSize;de++)m(k.location+de);n.bindBuffer(n.ARRAY_BUFFER,K);for(let de=0;de<k.locationSize;de++)S(k.location+de,ee/k.locationSize,j,Z,re*Q,(oe+ee/k.locationSize*de)*Q,H)}else{if(J.isInstancedBufferAttribute){for(let $=0;$<k.locationSize;$++)p(k.location+$,J.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let $=0;$<k.locationSize;$++)m(k.location+$);n.bindBuffer(n.ARRAY_BUFFER,K);for(let $=0;$<k.locationSize;$++)S(k.location+$,ee/k.locationSize,j,Z,ee*Q,ee/k.locationSize*$*Q,H)}}else if(L!==void 0){const Z=L[X];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(k.location,Z);break;case 3:n.vertexAttrib3fv(k.location,Z);break;case 4:n.vertexAttrib4fv(k.location,Z);break;default:n.vertexAttrib1fv(k.location,Z)}}}}g()}function D(){N();for(const v in i){const w=i[v];for(const O in w){const C=w[O];for(const W in C)h(C[W].object),delete C[W];delete w[O]}delete i[v]}}function y(v){if(i[v.id]===void 0)return;const w=i[v.id];for(const O in w){const C=w[O];for(const W in C)h(C[W].object),delete C[W];delete w[O]}delete i[v.id]}function R(v){for(const w in i){const O=i[w];if(O[v.id]===void 0)continue;const C=O[v.id];for(const W in C)h(C[W].object),delete C[W];delete O[v.id]}}function N(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:y,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:m,disableUnusedAttributes:g}}function FE(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let M=0;M<u;M++)f+=h[M];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let M=0;M<c.length;M++)o(c[M],h[M],d[M]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let M=0;for(let E=0;E<u;E++)M+=h[E];for(let E=0;E<d.length;E++)t.update(M,i,d[E])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kE(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){return!(y!==tn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const R=y===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==An&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==ii&&!R)}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:M,maxCubemapSize:E,maxAttributes:m,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:x,maxSamples:D}}function BE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new vr,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const M=u.clippingPlanes,E=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||M===null||M.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,S=g*4;let x=p.clippingState||null;l.value=x,x=h(M,d,S,f);for(let D=0;D!==S;++D)x[D]=t[D];p.clippingState=x,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,M){const E=u!==null?u.length:0;let m=null;if(E!==0){if(m=l.value,M!==!0||m===null){const p=f+E*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==E;++S,x+=4)o.copy(u[S]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function GE(n){let e=new WeakMap;function t(o,a){return a===$c?o.mapping=Ns:a===Xc&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$c||a===Xc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Co extends bp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,id=[.125,.215,.35,.446,.526,.582],wr=20,$l=new Co,rd=new We;let Xl=null,Kl=0,Yl=0,ql=!1;const xr=(1+Math.sqrt(5))/2,ns=1/xr,sd=[new ue(-xr,ns,0),new ue(xr,ns,0),new ue(-ns,0,xr),new ue(ns,0,xr),new ue(0,xr,-ns),new ue(0,xr,ns),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)];class od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,Kl,Yl),this._renderer.xr.enabled=ql,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:bi,format:tn,colorSpace:ar,depthBuffer:!1},r=ad(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zE(s)),this._blurMaterial=HE(s,e,t)}return r}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,i,r){const a=new Pn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rd),h.toneMapping=yi,h.autoClear=!1;const f=new To({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),M=new vt(new Gs,f);let E=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,E=!0):(f.color.copy(rd),E=!0);for(let p=0;p<6;p++){const g=p%3;g===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):g===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;ea(r,g*S,p>2?S:0,S,S),h.setRenderTarget(r),E&&h.render(M,a),h.render(e,a)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ns||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$l)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sd[(r-s-1)%sd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new vt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*wr-1),E=s/M,m=isFinite(s)?1+Math.floor(h*E):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const p=[];let g=0;for(let R=0;R<wr;++R){const N=R/E,b=Math.exp(-N*N/2);p.push(b),R===0?g+=b:R<m&&(g+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=M,d.mipInt.value=S-i;const x=this._sizeLods[r],D=3*x*(r>S-vs?r-S+vs:0),y=4*(this._cubeSize-x);ea(t,D,y,3*x,2*x),l.setRenderTarget(t),l.render(u,$l)}}function zE(n){const e=[],t=[],i=[];let r=n;const s=n-vs+1+id.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-vs?l=id[o-n+vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,M=6,E=3,m=2,p=1,g=new Float32Array(E*M*f),S=new Float32Array(m*M*f),x=new Float32Array(p*M*f);for(let y=0;y<f;y++){const R=y%3*2/3-1,N=y>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];g.set(b,E*M*y),S.set(d,m*M*y);const v=[y,y,y,y,y,y];x.set(v,p*M*y)}const D=new At;D.setAttribute("position",new tt(g,E)),D.setAttribute("uv",new tt(S,m)),D.setAttribute("faceIndex",new tt(x,p)),e.push(D),r>vs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ad(n,e,t){const i=new wn(n,e,t);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function HE(n,e,t){const i=new Float32Array(wr),r=new ue(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function ld(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function cd(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function VE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$c||l===Xc,h=l===Ns||l===Is;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new od(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new od(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function WE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ep("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $E(n,e,t,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const M in d.attributes)e.remove(d.attributes[M]);for(const M in d.morphAttributes){const E=d.morphAttributes[M];for(let m=0,p=E.length;m<p;m++)e.remove(E[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const M in d)e.update(d[M],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const M in f){const E=f[M];for(let m=0,p=E.length;m<p;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,M=u.attributes.position;let E=0;if(f!==null){const g=f.array;E=f.version;for(let S=0,x=g.length;S<x;S+=3){const D=g[S+0],y=g[S+1],R=g[S+2];d.push(D,y,y,R,R,D)}}else if(M!==void 0){const g=M.array;E=M.version;for(let S=0,x=g.length/3-1;S<x;S+=3){const D=S+0,y=S+1,R=S+2;d.push(D,y,y,R,R,D)}}else return;const m=new(Mp(d)?yp:wp)(d,1);m.version=E;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function XE(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,M){M!==0&&(n.drawElementsInstanced(i,f,s,d*o,M),t.update(f,i,M))}function h(d,f,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,M);let m=0;for(let p=0;p<M;p++)m+=f[p];t.update(m,i,1)}function u(d,f,M,E){if(M===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,E,0,M);let p=0;for(let g=0;g<M;g++)p+=f[g];for(let g=0;g<E.length;g++)t.update(p,i,E[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function KE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function YE(n,e,t){const i=new WeakMap,r=new et;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),M===!0&&(S=2),E===!0&&(S=3);let x=a.attributes.position.count*S,D=1;x>e.maxTextureSize&&(D=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const y=new Float32Array(x*D*4*u),R=new xp(y,x,D,u);R.type=ii,R.needsUpdate=!0;const N=S*4;for(let v=0;v<u;v++){const w=m[v],O=p[v],C=g[v],W=x*D*4*v;for(let B=0;B<w.count;B++){const L=B*N;f===!0&&(r.fromBufferAttribute(w,B),y[W+L+0]=r.x,y[W+L+1]=r.y,y[W+L+2]=r.z,y[W+L+3]=0),M===!0&&(r.fromBufferAttribute(O,B),y[W+L+4]=r.x,y[W+L+5]=r.y,y[W+L+6]=r.z,y[W+L+7]=0),E===!0&&(r.fromBufferAttribute(C,B),y[W+L+8]=r.x,y[W+L+9]=r.y,y[W+L+10]=r.z,y[W+L+11]=C.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new st(x,D)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];const M=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function qE(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class hu extends nn{constructor(e,t,i,r,s,o,a,l,c,h=bs){if(h!==bs&&h!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bs&&(i=Cr),i===void 0&&h===Nr&&(i=Dr),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dp=new nn,hd=new hu(1,1),Np=new xp,Ip=new Lg,Op=new Tp,ud=[],dd=[],fd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ud[r];if(s===void 0&&(s=new Float32Array(r),ud[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pl(n,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function QE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function JE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;md.set(i),n.uniformMatrix2fv(this.addr,!1,md),Ht(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;pd.set(i),n.uniformMatrix3fv(this.addr,!1,pd),Ht(t,i)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;fd.set(i),n.uniformMatrix4fv(this.addr,!1,fd),Ht(t,i)}}function iv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function av(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hd.compareFunction=_p,s=hd):s=Dp,t.setTexture2D(e||s,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ip,r)}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Op,r)}function pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Np,r)}function mv(n){switch(n){case 5126:return ZE;case 35664:return jE;case 35665:return QE;case 35666:return JE;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}function gv(n,e){n.uniform1fv(this.addr,e)}function _v(n,e){const t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function Mv(n,e){const t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function Ev(n,e){const t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function vv(n,e){const t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xv(n,e){const t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sv(n,e){const t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Av(n,e){n.uniform1iv(this.addr,e)}function wv(n,e){n.uniform2iv(this.addr,e)}function yv(n,e){n.uniform3iv(this.addr,e)}function Rv(n,e){n.uniform4iv(this.addr,e)}function bv(n,e){n.uniform1uiv(this.addr,e)}function Tv(n,e){n.uniform2uiv(this.addr,e)}function Cv(n,e){n.uniform3uiv(this.addr,e)}function Dv(n,e){n.uniform4uiv(this.addr,e)}function Nv(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dp,s[o])}function Iv(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ip,s[o])}function Ov(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Op,s[o])}function Pv(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Np,s[o])}function Lv(n){switch(n){case 5126:return gv;case 35664:return _v;case 35665:return Mv;case 35666:return Ev;case 35674:return vv;case 35675:return xv;case 35676:return Sv;case 5124:case 35670:return Av;case 35667:case 35671:return wv;case 35668:case 35672:return yv;case 35669:case 35673:return Rv;case 5125:return bv;case 36294:return Tv;case 36295:return Cv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Pv}}class Uv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mv(t.type)}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}}class kv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function gd(n,e){n.seq.push(e),n.map[e.id]=e}function Bv(n,e,t){const i=n.name,r=i.length;for(Zl.lastIndex=0;;){const s=Zl.exec(i),o=Zl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){gd(t,c===void 0?new Uv(a,n,e):new Fv(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new kv(a),gd(t,u)),t=u}}}class Ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Bv(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function _d(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Gv=37297;let zv=0;function Hv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Vv(n){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n);let i;switch(e===t?i="":e===Ka&&t===Xa?i="LinearDisplayP3ToLinearSRGB":e===Xa&&t===Ka&&(i="LinearSRGBToLinearDisplayP3"),n){case ar:case fl:return[i,"LinearTransferOETF"];case kt:case ou:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hv(n.getShaderSource(e),o)}else return r}function Wv(n,e){const t=Vv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $v(n,e){let t;switch(e){case tp:t="Linear";break;case np:t="Reinhard";break;case ip:t="OptimizedCineon";break;case rp:t="ACESFilmic";break;case sp:t="AgX";break;case op:t="Neutral";break;case eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Kv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function io(n){return n!==""}function Ed(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(n){return n.replace(qv,jv)}const Zv=new Map;function jv(n,e){let t=lt[e];if(t===void 0){const i=Zv.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vh(t)}const Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(n){return n.replace(Qv,Jv)}function Jv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function e1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function t1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Is:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function i1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Q0:e="ENVMAP_BLENDING_MIX";break;case J0:e="ENVMAP_BLENDING_ADD";break}return e}function r1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function s1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=e1(t),c=t1(t),h=n1(t),u=i1(t),d=r1(t),f=Xv(t),M=Kv(s),E=r.createProgram();let m,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(io).join(`
`),p.length>0&&(p+=`
`)):(m=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?lt.tonemapping_pars_fragment:"",t.toneMapping!==yi?$v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Wv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),o=vh(o),o=Ed(o,t),o=vd(o,t),a=vh(a),a=Ed(a,t),a=vd(a,t),o=xd(o),a=xd(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=g+m+o,x=g+p+a,D=_d(r,r.VERTEX_SHADER,S),y=_d(r,r.FRAGMENT_SHADER,x);r.attachShader(E,D),r.attachShader(E,y),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(w){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(E).trim(),C=r.getShaderInfoLog(D).trim(),W=r.getShaderInfoLog(y).trim();let B=!0,L=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,D,y);else{const X=Md(r,D,"vertex"),k=Md(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+X+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(C===""||W==="")&&(L=!1);L&&(w.diagnostics={runnable:B,programLog:O,vertexShader:{log:C,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(D),r.deleteShader(y),N=new Ca(r,E),b=Yv(r,E)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(E,Gv)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=y,this}let o1=0;class a1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new l1(e),t.set(e,i)),i}}class l1{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}}function c1(n,e,t,i,r,s,o){const a=new Sp,l=new a1,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,w,O,C){const W=O.fog,B=C.geometry,L=b.isMeshStandardMaterial?O.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||L),k=X&&X.mapping===dl?X.image.height:null,J=M[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=Z!==void 0?Z.length:0;let me=0;B.morphAttributes.position!==void 0&&(me=1),B.morphAttributes.normal!==void 0&&(me=2),B.morphAttributes.color!==void 0&&(me=3);let K,j,Q,H;if(J){const Ce=ei[J];K=Ce.vertexShader,j=Ce.fragmentShader}else K=b.vertexShader,j=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),H=l.getFragmentShaderID(b);const $=n.getRenderTarget(),re=C.isInstancedMesh===!0,oe=C.isBatchedMesh===!0,de=!!b.map,Me=!!b.matcap,V=!!X,Ae=!!b.aoMap,ve=!!b.lightMap,Ie=!!b.bumpMap,be=!!b.normalMap,Ne=!!b.displacementMap,se=!!b.emissiveMap,fe=!!b.metalnessMap,G=!!b.roughnessMap,P=b.anisotropy>0,ne=b.clearcoat>0,pe=b.dispersion>0,ae=b.iridescence>0,Ee=b.sheen>0,Ue=b.transmission>0,Pe=P&&!!b.anisotropyMap,Oe=ne&&!!b.clearcoatMap,Ge=ne&&!!b.clearcoatNormalMap,le=ne&&!!b.clearcoatRoughnessMap,xe=ae&&!!b.iridescenceMap,De=ae&&!!b.iridescenceThicknessMap,Te=Ee&&!!b.sheenColorMap,Y=Ee&&!!b.sheenRoughnessMap,ce=!!b.specularMap,Se=!!b.specularColorMap,q=!!b.specularIntensityMap,A=Ue&&!!b.transmissionMap,U=Ue&&!!b.thicknessMap,T=!!b.gradientMap,I=!!b.alphaMap,z=b.alphaTest>0,te=!!b.alphaHash,he=!!b.extensions;let ye=yi;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ye=n.toneMapping);const Re={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:j,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:H,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:oe,batchingColor:oe&&C._colorsTexture!==null,instancing:re,instancingColor:re&&C.instanceColor!==null,instancingMorph:re&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ar,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:Me,envMap:V,envMapMode:V&&X.mapping,envMapCubeUVHeight:k,aoMap:Ae,lightMap:ve,bumpMap:Ie,normalMap:be,displacementMap:d&&Ne,emissiveMap:se,normalMapObjectSpace:be&&b.normalMapType===rg,normalMapTangentSpace:be&&b.normalMapType===su,metalnessMap:fe,roughnessMap:G,anisotropy:P,anisotropyMap:Pe,clearcoat:ne,clearcoatMap:Oe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:le,dispersion:pe,iridescence:ae,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:Ee,sheenColorMap:Te,sheenRoughnessMap:Y,specularMap:ce,specularColorMap:Se,specularIntensityMap:q,transmission:Ue,transmissionMap:A,thicknessMap:U,gradientMap:T,opaque:b.transparent===!1&&b.blending===Rs&&b.alphaToCoverage===!1,alphaMap:I,alphaTest:z,alphaHash:te,combine:b.combine,mapUv:de&&E(b.map.channel),aoMapUv:Ae&&E(b.aoMap.channel),lightMapUv:ve&&E(b.lightMap.channel),bumpMapUv:Ie&&E(b.bumpMap.channel),normalMapUv:be&&E(b.normalMap.channel),displacementMapUv:Ne&&E(b.displacementMap.channel),emissiveMapUv:se&&E(b.emissiveMap.channel),metalnessMapUv:fe&&E(b.metalnessMap.channel),roughnessMapUv:G&&E(b.roughnessMap.channel),anisotropyMapUv:Pe&&E(b.anisotropyMap.channel),clearcoatMapUv:Oe&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Y&&E(b.sheenRoughnessMap.channel),specularMapUv:ce&&E(b.specularMap.channel),specularColorMapUv:Se&&E(b.specularColorMap.channel),specularIntensityMapUv:q&&E(b.specularIntensityMap.channel),transmissionMapUv:A&&E(b.transmissionMap.channel),thicknessMapUv:U&&E(b.thicknessMap.channel),alphaMapUv:I&&E(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(be||P),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!B.attributes.uv&&(de||I),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:C.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:me,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&Et.getTransfer(b.map.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:he&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&b.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const w in b.defines)v.push(w),v.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(g(v,b),S(v,b),v.push(n.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function g(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function S(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.doubleSided&&a.enable(10),v.flipSided&&a.enable(11),v.useDepthPacking&&a.enable(12),v.dithering&&a.enable(13),v.transmission&&a.enable(14),v.sheen&&a.enable(15),v.opaque&&a.enable(16),v.pointsUvs&&a.enable(17),v.decodeVideoTexture&&a.enable(18),v.alphaToCoverage&&a.enable(19),b.push(a.mask)}function x(b){const v=M[b.type];let w;if(v){const O=ei[v];w=Zi.clone(O.uniforms)}else w=b.uniforms;return w}function D(b,v){let w;for(let O=0,C=h.length;O<C;O++){const W=h[O];if(W.cacheKey===v){w=W,++w.usedTimes;break}}return w===void 0&&(w=new s1(n,v,b,s),h.push(w)),w}function y(b){if(--b.usedTimes===0){const v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:y,releaseShaderCache:R,programs:h,dispose:N}}function h1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function u1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,f,M,E,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:M,renderOrder:u.renderOrder,z:E,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=M,p.renderOrder=u.renderOrder,p.z=E,p.group=m),e++,p}function a(u,d,f,M,E,m){const p=o(u,d,f,M,E,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(u,d,f,M,E,m){const p=o(u,d,f,M,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||u1),i.length>1&&i.sort(d||Ad),r.length>1&&r.sort(d||Ad)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function d1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new wd,n.set(i,[o])):r>=s.length?(o=new wd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function f1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new We};break;case"SpotLight":t={position:new ue,direction:new ue,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return n[e.id]=t,t}}}function p1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let m1=0;function g1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _1(n){const e=new f1,t=p1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ue);const r=new ue,s=new _t,o=new _t;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,M=0,E=0,m=0,p=0,g=0,S=0,x=0,D=0,y=0,R=0;c.sort(g1);for(let b=0,v=c.length;b<v;b++){const w=c[b],O=w.color,C=w.intensity,W=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*C,u+=O.g*C,d+=O.b*C;else if(w.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(w.sh.coefficients[L],C);R++}else if(w.isDirectionalLight){const L=e.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const X=w.shadow,k=t.get(w);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=w.shadow.matrix,g++}i.directional[f]=L,f++}else if(w.isSpotLight){const L=e.get(w);L.position.setFromMatrixPosition(w.matrixWorld),L.color.copy(O).multiplyScalar(C),L.distance=W,L.coneCos=Math.cos(w.angle),L.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),L.decay=w.decay,i.spot[E]=L;const X=w.shadow;if(w.map&&(i.spotLightMap[D]=w.map,D++,X.updateMatrices(w),w.castShadow&&y++),i.spotLightMatrix[E]=X.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=B,x++}E++}else if(w.isRectAreaLight){const L=e.get(w);L.color.copy(O).multiplyScalar(C),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=L,m++}else if(w.isPointLight){const L=e.get(w);if(L.color.copy(w.color).multiplyScalar(w.intensity),L.distance=w.distance,L.decay=w.decay,w.castShadow){const X=w.shadow,k=t.get(w);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,i.pointShadow[M]=k,i.pointShadowMap[M]=B,i.pointShadowMatrix[M]=w.shadow.matrix,S++}i.point[M]=L,M++}else if(w.isHemisphereLight){const L=e.get(w);L.skyColor.copy(w.color).multiplyScalar(C),L.groundColor.copy(w.groundColor).multiplyScalar(C),i.hemi[p]=L,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$e.LTC_FLOAT_1,i.rectAreaLTC2=$e.LTC_FLOAT_2):(i.rectAreaLTC1=$e.LTC_HALF_1,i.rectAreaLTC2=$e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==f||N.pointLength!==M||N.spotLength!==E||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==g||N.numPointShadows!==S||N.numSpotShadows!==x||N.numSpotMaps!==D||N.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=M,i.hemi.length=p,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+D-y,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=R,N.directionalLength=f,N.pointLength=M,N.spotLength=E,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=g,N.numPointShadows=S,N.numSpotShadows=x,N.numSpotMaps=D,N.numLightProbes=R,i.version=m1++)}function l(c,h){let u=0,d=0,f=0,M=0,E=0;const m=h.matrixWorldInverse;for(let p=0,g=c.length;p<g;p++){const S=c[p];if(S.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=i.rectArea[M];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=i.hemi[E];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function yd(n){const e=new _1(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function M1(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new yd(n),e.set(r,[a])):s>=o.length?(a=new yd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class E1 extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class v1 extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
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
}`;function A1(n,e,t){let i=new lu;const r=new st,s=new st,o=new et,a=new E1({depthPacking:ig}),l=new v1,c={},h=t.maxTextureSize,u={[rr]:un,[un]:rr,[pn]:pn},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:x1,fragmentShader:S1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const M=new At;M.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new vt(M,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let p=this.type;this.render=function(y,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const b=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Kt),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const C=p!==gi&&this.type===gi,W=p===gi&&this.type!==gi;for(let B=0,L=y.length;B<L;B++){const X=y[B],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const J=k.getFrameExtents();if(r.multiply(J),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,k.mapSize.y=s.y)),k.map===null||C===!0||W===!0){const ee=this.type!==gi?{minFilter:Bt,magFilter:Bt}:{};k.map!==null&&k.map.dispose(),k.map=new wn(r.x,r.y,ee),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Z=k.getViewportCount();for(let ee=0;ee<Z;ee++){const me=k.getViewport(ee);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),O.viewport(o),k.updateMatrices(X,ee),i=k.getFrustum(),x(R,N,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===gi&&g(k,N),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,v,w)};function g(y,R){const N=e.update(E);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wn(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(R,null,N,d,E,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(R,null,N,f,E,null)}function S(y,R,N,b){let v=null;const w=N.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)v=w;else if(v=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=v.uuid,C=R.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let B=W[C];B===void 0&&(B=v.clone(),W[C]=B,R.addEventListener("dispose",D)),v=B}if(v.visible=R.visible,v.wireframe=R.wireframe,b===gi?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=n.properties.get(v);O.light=N}return v}function x(y,R,N,b,v){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===gi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,y.matrixWorld);const C=e.update(y),W=y.material;if(Array.isArray(W)){const B=C.groups;for(let L=0,X=B.length;L<X;L++){const k=B[L],J=W[k.materialIndex];if(J&&J.visible){const Z=S(y,J,b,v);y.onBeforeShadow(n,y,R,N,C,Z,k),n.renderBufferDirect(N,null,C,Z,y,k),y.onAfterShadow(n,y,R,N,C,Z,k)}}}else if(W.visible){const B=S(y,W,b,v);y.onBeforeShadow(n,y,R,N,C,B,null),n.renderBufferDirect(N,null,C,B,y,null),y.onAfterShadow(n,y,R,N,C,B,null)}}const O=y.children;for(let C=0,W=O.length;C<W;C++)x(O[C],R,N,b,v)}function D(y){y.target.removeEventListener("dispose",D);for(const N in c){const b=c[N],v=y.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}function w1(n){function e(){let A=!1;const U=new et;let T=null;const I=new et(0,0,0,0);return{setMask:function(z){T!==z&&!A&&(n.colorMask(z,z,z,z),T=z)},setLocked:function(z){A=z},setClear:function(z,te,he,ye,Re){Re===!0&&(z*=ye,te*=ye,he*=ye),U.set(z,te,he,ye),I.equals(U)===!1&&(n.clearColor(z,te,he,ye),I.copy(U))},reset:function(){A=!1,T=null,I.set(-1,0,0,0)}}}function t(){let A=!1,U=null,T=null,I=null;return{setTest:function(z){z?H(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(z){U!==z&&!A&&(n.depthMask(z),U=z)},setFunc:function(z){if(T!==z){switch(z){case $0:n.depthFunc(n.NEVER);break;case X0:n.depthFunc(n.ALWAYS);break;case K0:n.depthFunc(n.LESS);break;case Wa:n.depthFunc(n.LEQUAL);break;case Y0:n.depthFunc(n.EQUAL);break;case q0:n.depthFunc(n.GEQUAL);break;case Z0:n.depthFunc(n.GREATER);break;case j0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}T=z}},setLocked:function(z){A=z},setClear:function(z){I!==z&&(n.clearDepth(z),I=z)},reset:function(){A=!1,U=null,T=null,I=null}}}function i(){let A=!1,U=null,T=null,I=null,z=null,te=null,he=null,ye=null,Re=null;return{setTest:function(Ce){A||(Ce?H(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(Ce){U!==Ce&&!A&&(n.stencilMask(Ce),U=Ce)},setFunc:function(Ce,Le,ke){(T!==Ce||I!==Le||z!==ke)&&(n.stencilFunc(Ce,Le,ke),T=Ce,I=Le,z=ke)},setOp:function(Ce,Le,ke){(te!==Ce||he!==Le||ye!==ke)&&(n.stencilOp(Ce,Le,ke),te=Ce,he=Le,ye=ke)},setLocked:function(Ce){A=Ce},setClear:function(Ce){Re!==Ce&&(n.clearStencil(Ce),Re=Ce)},reset:function(){A=!1,U=null,T=null,I=null,z=null,te=null,he=null,ye=null,Re=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,M=!1,E=null,m=null,p=null,g=null,S=null,x=null,D=null,y=new We(0,0,0),R=0,N=!1,b=null,v=null,w=null,O=null,C=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,L=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=L>=1):X.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=L>=2);let k=null,J={};const Z=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),me=new et().fromArray(Z),K=new et().fromArray(ee);function j(A,U,T,I){const z=new Uint8Array(4),te=n.createTexture();n.bindTexture(A,te),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<T;he++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(U,0,n.RGBA,1,1,I,0,n.RGBA,n.UNSIGNED_BYTE,z):n.texImage2D(U+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,z);return te}const Q={};Q[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(n.DEPTH_TEST),s.setFunc(Wa),Ie(!1),be(Nu),H(n.CULL_FACE),Ae(Kt);function H(A){c[A]!==!0&&(n.enable(A),c[A]=!0)}function $(A){c[A]!==!1&&(n.disable(A),c[A]=!1)}function re(A,U){return h[A]!==U?(n.bindFramebuffer(A,U),h[A]=U,A===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=U),A===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=U),!0):!1}function oe(A,U){let T=d,I=!1;if(A){T=u.get(U),T===void 0&&(T=[],u.set(U,T));const z=A.textures;if(T.length!==z.length||T[0]!==n.COLOR_ATTACHMENT0){for(let te=0,he=z.length;te<he;te++)T[te]=n.COLOR_ATTACHMENT0+te;T.length=z.length,I=!0}}else T[0]!==n.BACK&&(T[0]=n.BACK,I=!0);I&&n.drawBuffers(T)}function de(A){return f!==A?(n.useProgram(A),f=A,!0):!1}const Me={[Kn]:n.FUNC_ADD,[N0]:n.FUNC_SUBTRACT,[I0]:n.FUNC_REVERSE_SUBTRACT};Me[O0]=n.MIN,Me[P0]=n.MAX;const V={[no]:n.ZERO,[L0]:n.ONE,[U0]:n.SRC_COLOR,[zc]:n.SRC_ALPHA,[G0]:n.SRC_ALPHA_SATURATE,[Wc]:n.DST_COLOR,[Vc]:n.DST_ALPHA,[F0]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[B0]:n.ONE_MINUS_DST_COLOR,[k0]:n.ONE_MINUS_DST_ALPHA,[z0]:n.CONSTANT_COLOR,[H0]:n.ONE_MINUS_CONSTANT_COLOR,[V0]:n.CONSTANT_ALPHA,[W0]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(A,U,T,I,z,te,he,ye,Re,Ce){if(A===Kt){M===!0&&($(n.BLEND),M=!1);return}if(M===!1&&(H(n.BLEND),M=!0),A!==ep){if(A!==E||Ce!==N){if((m!==Kn||S!==Kn)&&(n.blendEquation(n.FUNC_ADD),m=Kn,S=Kn),Ce)switch(A){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iu:n.blendFunc(n.ONE,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}p=null,g=null,x=null,D=null,y.set(0,0,0),R=0,E=A,N=Ce}return}z=z||U,te=te||T,he=he||I,(U!==m||z!==S)&&(n.blendEquationSeparate(Me[U],Me[z]),m=U,S=z),(T!==p||I!==g||te!==x||he!==D)&&(n.blendFuncSeparate(V[T],V[I],V[te],V[he]),p=T,g=I,x=te,D=he),(ye.equals(y)===!1||Re!==R)&&(n.blendColor(ye.r,ye.g,ye.b,Re),y.copy(ye),R=Re),E=A,N=!1}function ve(A,U){A.side===pn?$(n.CULL_FACE):H(n.CULL_FACE);let T=A.side===un;U&&(T=!T),Ie(T),A.blending===Rs&&A.transparent===!1?Ae(Kt):Ae(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),r.setMask(A.colorWrite);const I=A.stencilWrite;o.setTest(I),I&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),se(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(A){b!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),b=A)}function be(A){A!==T0?(H(n.CULL_FACE),A!==v&&(A===Nu?n.cullFace(n.BACK):A===C0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),v=A}function Ne(A){A!==w&&(B&&n.lineWidth(A),w=A)}function se(A,U,T){A?(H(n.POLYGON_OFFSET_FILL),(O!==U||C!==T)&&(n.polygonOffset(U,T),O=U,C=T)):$(n.POLYGON_OFFSET_FILL)}function fe(A){A?H(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function G(A){A===void 0&&(A=n.TEXTURE0+W-1),k!==A&&(n.activeTexture(A),k=A)}function P(A,U,T){T===void 0&&(k===null?T=n.TEXTURE0+W-1:T=k);let I=J[T];I===void 0&&(I={type:void 0,texture:void 0},J[T]=I),(I.type!==A||I.texture!==U)&&(k!==T&&(n.activeTexture(T),k=T),n.bindTexture(A,U||Q[A]),I.type=A,I.texture=U)}function ne(){const A=J[k];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Te(A){me.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),me.copy(A))}function Y(A){K.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),K.copy(A))}function ce(A,U){let T=l.get(U);T===void 0&&(T=new WeakMap,l.set(U,T));let I=T.get(A);I===void 0&&(I=n.getUniformBlockIndex(U,A.name),T.set(A,I))}function Se(A,U){const I=l.get(U).get(A);a.get(U)!==I&&(n.uniformBlockBinding(U,I,A.__bindingPointIndex),a.set(U,I))}function q(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},k=null,J={},h={},u=new WeakMap,d=[],f=null,M=!1,E=null,m=null,p=null,g=null,S=null,x=null,D=null,y=new We(0,0,0),R=0,N=!1,b=null,v=null,w=null,O=null,C=null,me.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:H,disable:$,bindFramebuffer:re,drawBuffers:oe,useProgram:de,setBlending:Ae,setMaterial:ve,setFlipSided:Ie,setCullFace:be,setLineWidth:Ne,setPolygonOffset:se,setScissorTest:fe,activeTexture:G,bindTexture:P,unbindTexture:ne,compressedTexImage2D:pe,compressedTexImage3D:ae,texImage2D:xe,texImage3D:De,updateUBOMapping:ce,uniformBlockBinding:Se,texStorage2D:Ge,texStorage3D:le,texSubImage2D:Ee,texSubImage3D:Ue,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Oe,scissor:Te,viewport:Y,reset:q}}function Rd(n,e,t,i){const r=y1(i);switch(t){case up:return n*e;case fp:return n*e;case pp:return n*e*2;case Os:return n*e/r.components*r.byteLength;case nu:return n*e/r.components*r.byteLength;case mp:return n*e*2/r.components*r.byteLength;case iu:return n*e*2/r.components*r.byteLength;case dp:return n*e*3/r.components*r.byteLength;case tn:return n*e*4/r.components*r.byteLength;case ru:return n*e*4/r.components*r.byteLength;case wa:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qc:case jc:return Math.max(n,16)*Math.max(e,8)/4;case Yc:case Zc:return Math.max(n,8)*Math.max(e,8)/2;case Qc:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ta:case mh:case gh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gp:case _h:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mh:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y1(n){switch(n){case An:case lp:return{byteLength:1,components:1};case So:case cp:case bi:return{byteLength:2,components:1};case eu:case tu:return{byteLength:2,components:4};case Cr:case Jh:case ii:return{byteLength:4,components:1};case hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function R1(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(G,P){return f?new OffscreenCanvas(G,P):qa("canvas")}function E(G,P,ne){let pe=1;const ae=fe(G);if((ae.width>ne||ae.height>ne)&&(pe=ne/Math.max(ae.width,ae.height)),pe<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const Ee=Math.floor(pe*ae.width),Ue=Math.floor(pe*ae.height);u===void 0&&(u=M(Ee,Ue));const Pe=P?M(Ee,Ue):u;return Pe.width=Ee,Pe.height=Ue,Pe.getContext("2d").drawImage(G,0,0,Ee,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Ee+"x"+Ue+")."),Pe}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),G;return G}function m(G){return G.generateMipmaps&&G.minFilter!==Bt&&G.minFilter!==$t}function p(G){n.generateMipmap(G)}function g(G,P,ne,pe,ae=!1){if(G!==null){if(n[G]!==void 0)return n[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Ee=P;if(P===n.RED&&(ne===n.FLOAT&&(Ee=n.R32F),ne===n.HALF_FLOAT&&(Ee=n.R16F),ne===n.UNSIGNED_BYTE&&(Ee=n.R8)),P===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(Ee=n.R8UI),ne===n.UNSIGNED_SHORT&&(Ee=n.R16UI),ne===n.UNSIGNED_INT&&(Ee=n.R32UI),ne===n.BYTE&&(Ee=n.R8I),ne===n.SHORT&&(Ee=n.R16I),ne===n.INT&&(Ee=n.R32I)),P===n.RG&&(ne===n.FLOAT&&(Ee=n.RG32F),ne===n.HALF_FLOAT&&(Ee=n.RG16F),ne===n.UNSIGNED_BYTE&&(Ee=n.RG8)),P===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(Ee=n.RG8UI),ne===n.UNSIGNED_SHORT&&(Ee=n.RG16UI),ne===n.UNSIGNED_INT&&(Ee=n.RG32UI),ne===n.BYTE&&(Ee=n.RG8I),ne===n.SHORT&&(Ee=n.RG16I),ne===n.INT&&(Ee=n.RG32I)),P===n.RGB&&ne===n.UNSIGNED_INT_5_9_9_9_REV&&(Ee=n.RGB9_E5),P===n.RGBA){const Ue=ae?$a:Et.getTransfer(pe);ne===n.FLOAT&&(Ee=n.RGBA32F),ne===n.HALF_FLOAT&&(Ee=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(Ee=Ue===yt?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT_4_4_4_4&&(Ee=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(Ee=n.RGB5_A1)}return(Ee===n.R16F||Ee===n.R32F||Ee===n.RG16F||Ee===n.RG32F||Ee===n.RGBA16F||Ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function S(G,P){let ne;return G?P===null||P===Cr||P===Dr?ne=n.DEPTH24_STENCIL8:P===ii?ne=n.DEPTH32F_STENCIL8:P===So&&(ne=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Cr||P===Dr?ne=n.DEPTH_COMPONENT24:P===ii?ne=n.DEPTH_COMPONENT32F:P===So&&(ne=n.DEPTH_COMPONENT16),ne}function x(G,P){return m(G)===!0||G.isFramebufferTexture&&G.minFilter!==Bt&&G.minFilter!==$t?Math.log2(Math.max(P.width,P.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?P.mipmaps.length:1}function D(G){const P=G.target;P.removeEventListener("dispose",D),R(P),P.isVideoTexture&&h.delete(P)}function y(G){const P=G.target;P.removeEventListener("dispose",y),b(P)}function R(G){const P=i.get(G);if(P.__webglInit===void 0)return;const ne=G.source,pe=d.get(ne);if(pe){const ae=pe[P.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(G),Object.keys(pe).length===0&&d.delete(ne)}i.remove(G)}function N(G){const P=i.get(G);n.deleteTexture(P.__webglTexture);const ne=G.source,pe=d.get(ne);delete pe[P.__cacheKey],o.memory.textures--}function b(G){const P=i.get(G);if(G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(P.__webglFramebuffer[pe]))for(let ae=0;ae<P.__webglFramebuffer[pe].length;ae++)n.deleteFramebuffer(P.__webglFramebuffer[pe][ae]);else n.deleteFramebuffer(P.__webglFramebuffer[pe]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[pe])}else{if(Array.isArray(P.__webglFramebuffer))for(let pe=0;pe<P.__webglFramebuffer.length;pe++)n.deleteFramebuffer(P.__webglFramebuffer[pe]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let pe=0;pe<P.__webglColorRenderbuffer.length;pe++)P.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[pe]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ne=G.textures;for(let pe=0,ae=ne.length;pe<ae;pe++){const Ee=i.get(ne[pe]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(ne[pe])}i.remove(G)}let v=0;function w(){v=0}function O(){const G=v;return G>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+r.maxTextures),v+=1,G}function C(G){const P=[];return P.push(G.wrapS),P.push(G.wrapT),P.push(G.wrapR||0),P.push(G.magFilter),P.push(G.minFilter),P.push(G.anisotropy),P.push(G.internalFormat),P.push(G.format),P.push(G.type),P.push(G.generateMipmaps),P.push(G.premultiplyAlpha),P.push(G.flipY),P.push(G.unpackAlignment),P.push(G.colorSpace),P.join()}function W(G,P){const ne=i.get(G);if(G.isVideoTexture&&Ne(G),G.isRenderTargetTexture===!1&&G.version>0&&ne.__version!==G.version){const pe=G.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(ne,G,P);return}}t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+P)}function B(G,P){const ne=i.get(G);if(G.version>0&&ne.__version!==G.version){K(ne,G,P);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+P)}function L(G,P){const ne=i.get(G);if(G.version>0&&ne.__version!==G.version){K(ne,G,P);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+P)}function X(G,P){const ne=i.get(G);if(G.version>0&&ne.__version!==G.version){j(ne,G,P);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+P)}const k={[sr]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[Kc]:n.MIRRORED_REPEAT},J={[Bt]:n.NEAREST,[tg]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},Z={[sg]:n.NEVER,[ug]:n.ALWAYS,[og]:n.LESS,[_p]:n.LEQUAL,[ag]:n.EQUAL,[hg]:n.GEQUAL,[lg]:n.GREATER,[cg]:n.NOTEQUAL};function ee(G,P){if(P.type===ii&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===$t||P.magFilter===yl||P.magFilter===Oo||P.magFilter===qn||P.minFilter===$t||P.minFilter===yl||P.minFilter===Oo||P.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(G,n.TEXTURE_WRAP_S,k[P.wrapS]),n.texParameteri(G,n.TEXTURE_WRAP_T,k[P.wrapT]),(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)&&n.texParameteri(G,n.TEXTURE_WRAP_R,k[P.wrapR]),n.texParameteri(G,n.TEXTURE_MAG_FILTER,J[P.magFilter]),n.texParameteri(G,n.TEXTURE_MIN_FILTER,J[P.minFilter]),P.compareFunction&&(n.texParameteri(G,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(G,n.TEXTURE_COMPARE_FUNC,Z[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Bt||P.minFilter!==Oo&&P.minFilter!==qn||P.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(G,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function me(G,P){let ne=!1;G.__webglInit===void 0&&(G.__webglInit=!0,P.addEventListener("dispose",D));const pe=P.source;let ae=d.get(pe);ae===void 0&&(ae={},d.set(pe,ae));const Ee=C(P);if(Ee!==G.__cacheKey){ae[Ee]===void 0&&(ae[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),ae[Ee].usedTimes++;const Ue=ae[G.__cacheKey];Ue!==void 0&&(ae[G.__cacheKey].usedTimes--,Ue.usedTimes===0&&N(P)),G.__cacheKey=Ee,G.__webglTexture=ae[Ee].texture}return ne}function K(G,P,ne){let pe=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(pe=n.TEXTURE_3D);const ae=me(G,P),Ee=P.source;t.bindTexture(pe,G.__webglTexture,n.TEXTURE0+ne);const Ue=i.get(Ee);if(Ee.version!==Ue.__version||ae===!0){t.activeTexture(n.TEXTURE0+ne);const Pe=Et.getPrimaries(Et.workingColorSpace),Oe=P.colorSpace===qi?null:Et.getPrimaries(P.colorSpace),Ge=P.colorSpace===qi||Pe===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let le=E(P.image,!1,r.maxTextureSize);le=se(P,le);const xe=s.convert(P.format,P.colorSpace),De=s.convert(P.type);let Te=g(P.internalFormat,xe,De,P.colorSpace,P.isVideoTexture);ee(pe,P);let Y;const ce=P.mipmaps,Se=P.isVideoTexture!==!0,q=Ue.__version===void 0||ae===!0,A=Ee.dataReady,U=x(P,le);if(P.isDepthTexture)Te=S(P.format===Nr,P.type),q&&(Se?t.texStorage2D(n.TEXTURE_2D,1,Te,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,xe,De,null));else if(P.isDataTexture)if(ce.length>0){Se&&q&&t.texStorage2D(n.TEXTURE_2D,U,Te,ce[0].width,ce[0].height);for(let T=0,I=ce.length;T<I;T++)Y=ce[T],Se?A&&t.texSubImage2D(n.TEXTURE_2D,T,0,0,Y.width,Y.height,xe,De,Y.data):t.texImage2D(n.TEXTURE_2D,T,Te,Y.width,Y.height,0,xe,De,Y.data);P.generateMipmaps=!1}else Se?(q&&t.texStorage2D(n.TEXTURE_2D,U,Te,le.width,le.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,xe,De,le.data)):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,xe,De,le.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Se&&q&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,Te,ce[0].width,ce[0].height,le.depth);for(let T=0,I=ce.length;T<I;T++)if(Y=ce[T],P.format!==tn)if(xe!==null)if(Se){if(A)if(P.layerUpdates.size>0){const z=Rd(Y.width,Y.height,P.format,P.type);for(const te of P.layerUpdates){const he=Y.data.subarray(te*z/Y.data.BYTES_PER_ELEMENT,(te+1)*z/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,T,0,0,te,Y.width,Y.height,1,xe,he,0,0)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,T,0,0,0,Y.width,Y.height,le.depth,xe,Y.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,T,Te,Y.width,Y.height,le.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,T,0,0,0,Y.width,Y.height,le.depth,xe,De,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,T,Te,Y.width,Y.height,le.depth,0,xe,De,Y.data)}else{Se&&q&&t.texStorage2D(n.TEXTURE_2D,U,Te,ce[0].width,ce[0].height);for(let T=0,I=ce.length;T<I;T++)Y=ce[T],P.format!==tn?xe!==null?Se?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,T,0,0,Y.width,Y.height,xe,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,T,Te,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?A&&t.texSubImage2D(n.TEXTURE_2D,T,0,0,Y.width,Y.height,xe,De,Y.data):t.texImage2D(n.TEXTURE_2D,T,Te,Y.width,Y.height,0,xe,De,Y.data)}else if(P.isDataArrayTexture)if(Se){if(q&&t.texStorage3D(n.TEXTURE_2D_ARRAY,U,Te,le.width,le.height,le.depth),A)if(P.layerUpdates.size>0){const T=Rd(le.width,le.height,P.format,P.type);for(const I of P.layerUpdates){const z=le.data.subarray(I*T/le.data.BYTES_PER_ELEMENT,(I+1)*T/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,I,le.width,le.height,1,xe,De,z)}P.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,De,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,xe,De,le.data);else if(P.isData3DTexture)Se?(q&&t.texStorage3D(n.TEXTURE_3D,U,Te,le.width,le.height,le.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,De,le.data)):t.texImage3D(n.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,xe,De,le.data);else if(P.isFramebufferTexture){if(q)if(Se)t.texStorage2D(n.TEXTURE_2D,U,Te,le.width,le.height);else{let T=le.width,I=le.height;for(let z=0;z<U;z++)t.texImage2D(n.TEXTURE_2D,z,Te,T,I,0,xe,De,null),T>>=1,I>>=1}}else if(ce.length>0){if(Se&&q){const T=fe(ce[0]);t.texStorage2D(n.TEXTURE_2D,U,Te,T.width,T.height)}for(let T=0,I=ce.length;T<I;T++)Y=ce[T],Se?A&&t.texSubImage2D(n.TEXTURE_2D,T,0,0,xe,De,Y):t.texImage2D(n.TEXTURE_2D,T,Te,xe,De,Y);P.generateMipmaps=!1}else if(Se){if(q){const T=fe(le);t.texStorage2D(n.TEXTURE_2D,U,Te,T.width,T.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,De,le)}else t.texImage2D(n.TEXTURE_2D,0,Te,xe,De,le);m(P)&&p(pe),Ue.__version=Ee.version,P.onUpdate&&P.onUpdate(P)}G.__version=P.version}function j(G,P,ne){if(P.image.length!==6)return;const pe=me(G,P),ae=P.source;t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+ne);const Ee=i.get(ae);if(ae.version!==Ee.__version||pe===!0){t.activeTexture(n.TEXTURE0+ne);const Ue=Et.getPrimaries(Et.workingColorSpace),Pe=P.colorSpace===qi?null:Et.getPrimaries(P.colorSpace),Oe=P.colorSpace===qi||Ue===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Ge=P.isCompressedTexture||P.image[0].isCompressedTexture,le=P.image[0]&&P.image[0].isDataTexture,xe=[];for(let I=0;I<6;I++)!Ge&&!le?xe[I]=E(P.image[I],!0,r.maxCubemapSize):xe[I]=le?P.image[I].image:P.image[I],xe[I]=se(P,xe[I]);const De=xe[0],Te=s.convert(P.format,P.colorSpace),Y=s.convert(P.type),ce=g(P.internalFormat,Te,Y,P.colorSpace),Se=P.isVideoTexture!==!0,q=Ee.__version===void 0||pe===!0,A=ae.dataReady;let U=x(P,De);ee(n.TEXTURE_CUBE_MAP,P);let T;if(Ge){Se&&q&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,ce,De.width,De.height);for(let I=0;I<6;I++){T=xe[I].mipmaps;for(let z=0;z<T.length;z++){const te=T[z];P.format!==tn?Te!==null?Se?A&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z,0,0,te.width,te.height,Te,te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z,ce,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z,0,0,te.width,te.height,Te,Y,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z,ce,te.width,te.height,0,Te,Y,te.data)}}}else{if(T=P.mipmaps,Se&&q){T.length>0&&U++;const I=fe(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,U,ce,I.width,I.height)}for(let I=0;I<6;I++)if(le){Se?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,xe[I].width,xe[I].height,Te,Y,xe[I].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,ce,xe[I].width,xe[I].height,0,Te,Y,xe[I].data);for(let z=0;z<T.length;z++){const he=T[z].image[I].image;Se?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z+1,0,0,he.width,he.height,Te,Y,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z+1,ce,he.width,he.height,0,Te,Y,he.data)}}else{Se?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Te,Y,xe[I]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,ce,Te,Y,xe[I]);for(let z=0;z<T.length;z++){const te=T[z];Se?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z+1,0,0,Te,Y,te.image[I]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,z+1,ce,Te,Y,te.image[I])}}}m(P)&&p(n.TEXTURE_CUBE_MAP),Ee.__version=ae.version,P.onUpdate&&P.onUpdate(P)}G.__version=P.version}function Q(G,P,ne,pe,ae,Ee){const Ue=s.convert(ne.format,ne.colorSpace),Pe=s.convert(ne.type),Oe=g(ne.internalFormat,Ue,Pe,ne.colorSpace);if(!i.get(P).__hasExternalTextures){const le=Math.max(1,P.width>>Ee),xe=Math.max(1,P.height>>Ee);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,Ee,Oe,le,xe,P.depth,0,Ue,Pe,null):t.texImage2D(ae,Ee,Oe,le,xe,0,Ue,Pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,G),be(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ae,i.get(ne).__webglTexture,0,Ie(P)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ae,i.get(ne).__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(G,P,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,G),P.depthBuffer){const pe=P.depthTexture,ae=pe&&pe.isDepthTexture?pe.type:null,Ee=S(P.stencilBuffer,ae),Ue=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=Ie(P);be(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Ee,P.width,P.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ee,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,G)}else{const pe=P.textures;for(let ae=0;ae<pe.length;ae++){const Ee=pe[ae],Ue=s.convert(Ee.format,Ee.colorSpace),Pe=s.convert(Ee.type),Oe=g(Ee.internalFormat,Ue,Pe,Ee.colorSpace),Ge=Ie(P);ne&&be(P)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Oe,P.width,P.height):be(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,Oe,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $(G,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,G),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W(P.depthTexture,0);const pe=i.get(P.depthTexture).__webglTexture,ae=Ie(P);if(P.depthTexture.format===bs)be(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(P.depthTexture.format===Nr)be(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function re(G){const P=i.get(G),ne=G.isWebGLCubeRenderTarget===!0;if(G.depthTexture&&!P.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");$(P.__webglFramebuffer,G)}else if(ne){P.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[pe]),P.__webglDepthbuffer[pe]=n.createRenderbuffer(),H(P.__webglDepthbuffer[pe],G,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=n.createRenderbuffer(),H(P.__webglDepthbuffer,G,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(G,P,ne){const pe=i.get(G);P!==void 0&&Q(pe.__webglFramebuffer,G,G.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&re(G)}function de(G){const P=G.texture,ne=i.get(G),pe=i.get(P);G.addEventListener("dispose",y);const ae=G.textures,Ee=G.isWebGLCubeRenderTarget===!0,Ue=ae.length>1;if(Ue||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=P.version,o.memory.textures++),Ee){ne.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(P.mipmaps&&P.mipmaps.length>0){ne.__webglFramebuffer[Pe]=[];for(let Oe=0;Oe<P.mipmaps.length;Oe++)ne.__webglFramebuffer[Pe][Oe]=n.createFramebuffer()}else ne.__webglFramebuffer[Pe]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Pe=0;Pe<P.mipmaps.length;Pe++)ne.__webglFramebuffer[Pe]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let Pe=0,Oe=ae.length;Pe<Oe;Pe++){const Ge=i.get(ae[Pe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(G.samples>0&&be(G)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ae.length;Pe++){const Oe=ae[Pe];ne.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[Pe]);const Ge=s.convert(Oe.format,Oe.colorSpace),le=s.convert(Oe.type),xe=g(Oe.internalFormat,Ge,le,Oe.colorSpace,G.isXRRenderTarget===!0),De=Ie(G);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,xe,G.width,G.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ne.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),G.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),H(ne.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(n.TEXTURE_CUBE_MAP,P);for(let Pe=0;Pe<6;Pe++)if(P.mipmaps&&P.mipmaps.length>0)for(let Oe=0;Oe<P.mipmaps.length;Oe++)Q(ne.__webglFramebuffer[Pe][Oe],G,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe);else Q(ne.__webglFramebuffer[Pe],G,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);m(P)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Pe=0,Oe=ae.length;Pe<Oe;Pe++){const Ge=ae[Pe],le=i.get(Ge);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ee(n.TEXTURE_2D,Ge),Q(ne.__webglFramebuffer,G,Ge,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),m(Ge)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Pe=n.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Pe=G.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,pe.__webglTexture),ee(Pe,P),P.mipmaps&&P.mipmaps.length>0)for(let Oe=0;Oe<P.mipmaps.length;Oe++)Q(ne.__webglFramebuffer[Oe],G,P,n.COLOR_ATTACHMENT0,Pe,Oe);else Q(ne.__webglFramebuffer,G,P,n.COLOR_ATTACHMENT0,Pe,0);m(P)&&p(Pe),t.unbindTexture()}G.depthBuffer&&re(G)}function Me(G){const P=G.textures;for(let ne=0,pe=P.length;ne<pe;ne++){const ae=P[ne];if(m(ae)){const Ee=G.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ue=i.get(ae).__webglTexture;t.bindTexture(Ee,Ue),p(Ee),t.unbindTexture()}}}const V=[],Ae=[];function ve(G){if(G.samples>0){if(be(G)===!1){const P=G.textures,ne=G.width,pe=G.height;let ae=n.COLOR_BUFFER_BIT;const Ee=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(G),Pe=P.length>1;if(Pe)for(let Oe=0;Oe<P.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Oe=0;Oe<P.length;Oe++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Oe]);const Ge=i.get(P[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,ne,pe,0,0,ne,pe,ae,n.NEAREST),l===!0&&(V.length=0,Ae.length=0,V.push(n.COLOR_ATTACHMENT0+Oe),G.depthBuffer&&G.resolveDepthBuffer===!1&&(V.push(Ee),Ae.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ae)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let Oe=0;Oe<P.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Oe]);const Ge=i.get(P[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&l){const P=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function Ie(G){return Math.min(r.maxSamples,G.samples)}function be(G){const P=i.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ne(G){const P=o.render.frame;h.get(G)!==P&&(h.set(G,P),G.update())}function se(G,P){const ne=G.colorSpace,pe=G.format,ae=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||ne!==ar&&ne!==qi&&(Et.getTransfer(ne)===yt?(pe!==tn||ae!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),P}function fe(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=L,this.setTextureCube=X,this.rebindTextures=oe,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=be}function b1(n,e){function t(i,r=qi){let s;const o=Et.getTransfer(r);if(i===An)return n.UNSIGNED_BYTE;if(i===eu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lp)return n.BYTE;if(i===cp)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===Jh)return n.INT;if(i===Cr)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===up)return n.ALPHA;if(i===dp)return n.RGB;if(i===tn)return n.RGBA;if(i===fp)return n.LUMINANCE;if(i===pp)return n.LUMINANCE_ALPHA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Nr)return n.DEPTH_STENCIL;if(i===Os)return n.RED;if(i===nu)return n.RED_INTEGER;if(i===mp)return n.RG;if(i===iu)return n.RG_INTEGER;if(i===ru)return n.RGBA_INTEGER;if(i===wa||i===ya||i===Ra||i===ba)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yc||i===qc||i===Zc||i===jc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===Jc||i===eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qc||i===Jc)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===eh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===th)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ih)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ah)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ch)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ph)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===mh||i===gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ta)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gp||i===_h||i===Mh||i===Eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ta)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class T1 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C1={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,M=.005;c.inputState.pinching&&d>f+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N1=`
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

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gt({vertexShader:D1,fragmentShader:N1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O1 extends Fs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,M=null;const E=new I1,m=t.getContextAttributes();let p=null,g=null;const S=[],x=[],D=new st;let y=null;const R=new Pn;R.layers.enable(1),R.viewport=new et;const N=new Pn;N.layers.enable(2),N.viewport=new et;const b=[R,N],v=new T1;v.layers.enable(1),v.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=S[j];return Q===void 0&&(Q=new jl,S[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=S[j];return Q===void 0&&(Q=new jl,S[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=S[j];return Q===void 0&&(Q=new jl,S[j]=Q),Q.getHandSpace()};function C(j){const Q=x.indexOf(j.inputSource);if(Q===-1)return;const H=S[Q];H!==void 0&&(H.update(j.inputSource,j.frame,c||o),H.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",B);for(let j=0;j<S.length;j++){const Q=x[j];Q!==null&&(x[j]=null,S[j].disconnect(Q))}w=null,O=null,E.reset(),e.setRenderTarget(p),f=null,d=null,u=null,r=null,g=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",W),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new wn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,H=null,$=null;m.depth&&($=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Nr:bs,H=m.stencil?Dr:Cr);const re={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new wn(d.textureWidth,d.textureHeight,{format:tn,type:An,depthTexture:new hu(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function B(j){for(let Q=0;Q<j.removed.length;Q++){const H=j.removed[Q],$=x.indexOf(H);$>=0&&(x[$]=null,S[$].disconnect(H))}for(let Q=0;Q<j.added.length;Q++){const H=j.added[Q];let $=x.indexOf(H);if($===-1){for(let oe=0;oe<S.length;oe++)if(oe>=x.length){x.push(H),$=oe;break}else if(x[oe]===null){x[oe]=H,$=oe;break}if($===-1)break}const re=S[$];re&&re.connect(H)}}const L=new ue,X=new ue;function k(j,Q,H){L.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(H.matrixWorld);const $=L.distanceTo(X),re=Q.projectionMatrix.elements,oe=H.projectionMatrix.elements,de=re[14]/(re[10]-1),Me=re[14]/(re[10]+1),V=(re[9]+1)/re[5],Ae=(re[9]-1)/re[5],ve=(re[8]-1)/re[0],Ie=(oe[8]+1)/oe[0],be=de*ve,Ne=de*Ie,se=$/(-ve+Ie),fe=se*-ve;Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(fe),j.translateZ(se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const G=de+se,P=Me+se,ne=be-fe,pe=Ne+($-fe),ae=V*Me/P*G,Ee=Ae*Me/P*G;j.projectionMatrix.makePerspective(ne,pe,ae,Ee,G,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function J(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;E.texture!==null&&(j.near=E.depthNear,j.far=E.depthFar),v.near=N.near=R.near=j.near,v.far=N.far=R.far=j.far,(w!==v.near||O!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,O=v.far,R.near=w,R.far=O,N.near=w,N.far=O,R.updateProjectionMatrix(),N.updateProjectionMatrix(),j.updateProjectionMatrix());const Q=j.parent,H=v.cameras;J(v,Q);for(let $=0;$<H.length;$++)J(H[$],Q);H.length===2?k(v,R,N):v.projectionMatrix.copy(R.projectionMatrix),Z(j,v,Q)};function Z(j,Q,H){H===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(H.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ao*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(v)};let ee=null;function me(j,Q){if(h=Q.getViewerPose(c||o),M=Q,h!==null){const H=h.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let $=!1;H.length!==v.cameras.length&&(v.cameras.length=0,$=!0);for(let oe=0;oe<H.length;oe++){const de=H[oe];let Me=null;if(f!==null)Me=f.getViewport(de);else{const Ae=u.getViewSubImage(d,de);Me=Ae.viewport,oe===0&&(e.setRenderTargetTextures(g,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(g))}let V=b[oe];V===void 0&&(V=new Pn,V.layers.enable(oe),V.viewport=new et,b[oe]=V),V.matrix.fromArray(de.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(de.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Me.x,Me.y,Me.width,Me.height),oe===0&&(v.matrix.copy(V.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),$===!0&&v.cameras.push(V)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")){const oe=u.getDepthInformation(H[0]);oe&&oe.isValid&&oe.texture&&E.init(e,oe,r.renderState)}}for(let H=0;H<S.length;H++){const $=x[H],re=S[H];$!==null&&re!==void 0&&re.update($,Q,c||o)}ee&&ee(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),M=null}const K=new Cp;K.setAnimationLoop(me),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}const pr=new si,P1=new _t;function L1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Rp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,g,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),M(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),E(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,g,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=e.get(p),S=g.envMap,x=g.envMapRotation;S&&(m.envMap.value=S,pr.copy(x),pr.x*=-1,pr.y*=-1,pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(P1.makeRotationFromEuler(pr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,g,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function M(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){const g=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function U1(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,S){const x=S.program;i.uniformBlockBinding(g,x)}function c(g,S){let x=r[g.id];x===void 0&&(M(g),x=h(g),r[g.id]=x,g.addEventListener("dispose",m));const D=S.program;i.updateUBOMapping(g,D);const y=e.render.frame;s[g.id]!==y&&(d(g),s[g.id]=y)}function h(g){const S=u();g.__bindingPointIndex=S;const x=n.createBuffer(),D=g.__size,y=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function u(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const S=r[g.id],x=g.uniforms,D=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let y=0,R=x.length;y<R;y++){const N=Array.isArray(x[y])?x[y]:[x[y]];for(let b=0,v=N.length;b<v;b++){const w=N[b];if(f(w,y,b,D)===!0){const O=w.__offset,C=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let B=0;B<C.length;B++){const L=C[B],X=E(L);typeof L=="number"||typeof L=="boolean"?(w.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,O+W,w.__data)):L.isMatrix3?(w.__data[0]=L.elements[0],w.__data[1]=L.elements[1],w.__data[2]=L.elements[2],w.__data[3]=0,w.__data[4]=L.elements[3],w.__data[5]=L.elements[4],w.__data[6]=L.elements[5],w.__data[7]=0,w.__data[8]=L.elements[6],w.__data[9]=L.elements[7],w.__data[10]=L.elements[8],w.__data[11]=0):(L.toArray(w.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(g,S,x,D){const y=g.value,R=S+"_"+x;if(D[R]===void 0)return typeof y=="number"||typeof y=="boolean"?D[R]=y:D[R]=y.clone(),!0;{const N=D[R];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return D[R]=y,!0}else if(N.equals(y)===!1)return N.copy(y),!0}return!1}function M(g){const S=g.uniforms;let x=0;const D=16;for(let R=0,N=S.length;R<N;R++){const b=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,w=b.length;v<w;v++){const O=b[v],C=Array.isArray(O.value)?O.value:[O.value];for(let W=0,B=C.length;W<B;W++){const L=C[W],X=E(L),k=x%D;k!==0&&D-k<X.boundary&&(x+=D-k),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=X.storage}}}const y=x%D;return y>0&&(x+=D-y),g.__size=x,g.__cache={},this}function E(g){const S={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(S.boundary=4,S.storage=4):g.isVector2?(S.boundary=8,S.storage=8):g.isVector3||g.isColor?(S.boundary=16,S.storage=12):g.isVector4?(S.boundary=16,S.storage=16):g.isMatrix3?(S.boundary=48,S.storage=48):g.isMatrix4?(S.boundary=64,S.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),S}function m(g){const S=g.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class F1{constructor(e={}){const{canvas:t=Tg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),M=new Int32Array(4);let E=null,m=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=yi,this.toneMappingExposure=1;const S=this;let x=!1,D=0,y=0,R=null,N=-1,b=null;const v=new et,w=new et;let O=null;const C=new We(0);let W=0,B=t.width,L=t.height,X=1,k=null,J=null;const Z=new et(0,0,B,L),ee=new et(0,0,B,L);let me=!1;const K=new lu;let j=!1,Q=!1;const H=new _t,$=new ue,re=new et,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Me(){return R===null?X:1}let V=i;function Ae(F,ie){return t.getContext(F,ie)}try{const F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jh}`),t.addEventListener("webglcontextlost",T,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",z,!1),V===null){const ie="webgl2";if(V=Ae(ie,F),V===null)throw Ae(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let ve,Ie,be,Ne,se,fe,G,P,ne,pe,ae,Ee,Ue,Pe,Oe,Ge,le,xe,De,Te,Y,ce,Se,q;function A(){ve=new WE(V),ve.init(),ce=new b1(V,ve),Ie=new kE(V,ve,e,ce),be=new w1(V),Ne=new KE(V),se=new h1,fe=new R1(V,ve,be,se,Ie,ce,Ne),G=new GE(S),P=new VE(S),ne=new e_(V),Se=new UE(V,ne),pe=new $E(V,ne,Ne,Se),ae=new qE(V,pe,ne,Ne),De=new YE(V,Ie,fe),Ge=new BE(se),Ee=new c1(S,G,P,ve,Ie,Se,Ge),Ue=new L1(S,se),Pe=new d1,Oe=new M1(ve),xe=new LE(S,G,P,be,ae,d,l),le=new A1(S,ae,Ie),q=new U1(V,Ne,Ie,be),Te=new FE(V,ve,Ne),Y=new XE(V,ve,Ne),Ne.programs=Ee.programs,S.capabilities=Ie,S.extensions=ve,S.properties=se,S.renderLists=Pe,S.shadowMap=le,S.state=be,S.info=Ne}A();const U=new O1(S,V);this.xr=U,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const F=ve.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=ve.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(F){F!==void 0&&(X=F,this.setSize(B,L,!1))},this.getSize=function(F){return F.set(B,L)},this.setSize=function(F,ie,_e=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=F,L=ie,t.width=Math.floor(F*X),t.height=Math.floor(ie*X),_e===!0&&(t.style.width=F+"px",t.style.height=ie+"px"),this.setViewport(0,0,F,ie)},this.getDrawingBufferSize=function(F){return F.set(B*X,L*X).floor()},this.setDrawingBufferSize=function(F,ie,_e){B=F,L=ie,X=_e,t.width=Math.floor(F*_e),t.height=Math.floor(ie*_e),this.setViewport(0,0,F,ie)},this.getCurrentViewport=function(F){return F.copy(v)},this.getViewport=function(F){return F.copy(Z)},this.setViewport=function(F,ie,_e,we){F.isVector4?Z.set(F.x,F.y,F.z,F.w):Z.set(F,ie,_e,we),be.viewport(v.copy(Z).multiplyScalar(X).round())},this.getScissor=function(F){return F.copy(ee)},this.setScissor=function(F,ie,_e,we){F.isVector4?ee.set(F.x,F.y,F.z,F.w):ee.set(F,ie,_e,we),be.scissor(w.copy(ee).multiplyScalar(X).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(F){be.setScissorTest(me=F)},this.setOpaqueSort=function(F){k=F},this.setTransparentSort=function(F){J=F},this.getClearColor=function(F){return F.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(F=!0,ie=!0,_e=!0){let we=0;if(F){let ge=!1;if(R!==null){const ze=R.texture.format;ge=ze===ru||ze===iu||ze===nu}if(ge){const ze=R.texture.type,Ve=ze===An||ze===Cr||ze===So||ze===Dr||ze===eu||ze===tu,Ke=xe.getClearColor(),qe=xe.getClearAlpha(),nt=Ke.r,it=Ke.g,Qe=Ke.b;Ve?(f[0]=nt,f[1]=it,f[2]=Qe,f[3]=qe,V.clearBufferuiv(V.COLOR,0,f)):(M[0]=nt,M[1]=it,M[2]=Qe,M[3]=qe,V.clearBufferiv(V.COLOR,0,M))}else we|=V.COLOR_BUFFER_BIT}ie&&(we|=V.DEPTH_BUFFER_BIT),_e&&(we|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(we)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",T,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",z,!1),Pe.dispose(),Oe.dispose(),se.dispose(),G.dispose(),P.dispose(),ae.dispose(),Se.dispose(),q.dispose(),Ee.dispose(),U.dispose(),U.removeEventListener("sessionstart",ke),U.removeEventListener("sessionend",Be),He.stop()};function T(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const F=Ne.autoReset,ie=le.enabled,_e=le.autoUpdate,we=le.needsUpdate,ge=le.type;A(),Ne.autoReset=F,le.enabled=ie,le.autoUpdate=_e,le.needsUpdate=we,le.type=ge}function z(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function te(F){const ie=F.target;ie.removeEventListener("dispose",te),he(ie)}function he(F){ye(F),se.remove(F)}function ye(F){const ie=se.get(F).programs;ie!==void 0&&(ie.forEach(function(_e){Ee.releaseProgram(_e)}),F.isShaderMaterial&&Ee.releaseShaderCache(F))}this.renderBufferDirect=function(F,ie,_e,we,ge,ze){ie===null&&(ie=oe);const Ve=ge.isMesh&&ge.matrixWorld.determinant()<0,Ke=wt(F,ie,_e,we,ge);be.setMaterial(we,Ve);let qe=_e.index,nt=1;if(we.wireframe===!0){if(qe=pe.getWireframeAttribute(_e),qe===void 0)return;nt=2}const it=_e.drawRange,Qe=_e.attributes.position;let ft=it.start*nt,Tt=(it.start+it.count)*nt;ze!==null&&(ft=Math.max(ft,ze.start*nt),Tt=Math.min(Tt,(ze.start+ze.count)*nt)),qe!==null?(ft=Math.max(ft,0),Tt=Math.min(Tt,qe.count)):Qe!=null&&(ft=Math.max(ft,0),Tt=Math.min(Tt,Qe.count));const mt=Tt-ft;if(mt<0||mt===1/0)return;Se.setup(ge,we,Ke,_e,qe);let Nt,pt=Te;if(qe!==null&&(Nt=ne.get(qe),pt=Y,pt.setIndex(Nt)),ge.isMesh)we.wireframe===!0?(be.setLineWidth(we.wireframeLinewidth*Me()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(ge.isLine){let Ye=we.linewidth;Ye===void 0&&(Ye=1),be.setLineWidth(Ye*Me()),ge.isLineSegments?pt.setMode(V.LINES):ge.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else ge.isPoints?pt.setMode(V.POINTS):ge.isSprite&&pt.setMode(V.TRIANGLES);if(ge.isBatchedMesh)if(ge._multiDrawInstances!==null)pt.renderMultiDrawInstances(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount,ge._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))pt.renderMultiDraw(ge._multiDrawStarts,ge._multiDrawCounts,ge._multiDrawCount);else{const Ye=ge._multiDrawStarts,Ot=ge._multiDrawCounts,Mt=ge._multiDrawCount,Bn=qe?ne.get(qe).bytesPerElement:1,Br=se.get(we).currentProgram.getUniforms();for(let mn=0;mn<Mt;mn++)Br.setValue(V,"_gl_DrawID",mn),pt.render(Ye[mn]/Bn,Ot[mn])}else if(ge.isInstancedMesh)pt.renderInstances(ft,mt,ge.count);else if(_e.isInstancedBufferGeometry){const Ye=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,Ot=Math.min(_e.instanceCount,Ye);pt.renderInstances(ft,mt,Ot)}else pt.render(ft,mt)};function Re(F,ie,_e){F.transparent===!0&&F.side===pn&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,at(F,ie,_e),F.side=rr,F.needsUpdate=!0,at(F,ie,_e),F.side=pn):at(F,ie,_e)}this.compile=function(F,ie,_e=null){_e===null&&(_e=F),m=Oe.get(_e),m.init(ie),g.push(m),_e.traverseVisible(function(ge){ge.isLight&&ge.layers.test(ie.layers)&&(m.pushLight(ge),ge.castShadow&&m.pushShadow(ge))}),F!==_e&&F.traverseVisible(function(ge){ge.isLight&&ge.layers.test(ie.layers)&&(m.pushLight(ge),ge.castShadow&&m.pushShadow(ge))}),m.setupLights();const we=new Set;return F.traverse(function(ge){const ze=ge.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){const Ke=ze[Ve];Re(Ke,_e,ge),we.add(Ke)}else Re(ze,_e,ge),we.add(ze)}),g.pop(),m=null,we},this.compileAsync=function(F,ie,_e=null){const we=this.compile(F,ie,_e);return new Promise(ge=>{function ze(){if(we.forEach(function(Ve){se.get(Ve).currentProgram.isReady()&&we.delete(Ve)}),we.size===0){ge(F);return}setTimeout(ze,10)}ve.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Ce=null;function Le(F){Ce&&Ce(F)}function ke(){He.stop()}function Be(){He.start()}const He=new Cp;He.setAnimationLoop(Le),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(F){Ce=F,U.setAnimationLoop(F),F===null?He.stop():He.start()},U.addEventListener("sessionstart",ke),U.addEventListener("sessionend",Be),this.render=function(F,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(ie),ie=U.getCamera()),F.isScene===!0&&F.onBeforeRender(S,F,ie,R),m=Oe.get(F,g.length),m.init(ie),g.push(m),H.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),K.setFromProjectionMatrix(H),Q=this.localClippingEnabled,j=Ge.init(this.clippingPlanes,Q),E=Pe.get(F,p.length),E.init(),p.push(E),U.enabled===!0&&U.isPresenting===!0){const ze=S.xr.getDepthSensingMesh();ze!==null&&ot(ze,ie,-1/0,S.sortObjects)}ot(F,ie,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(k,J),de=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,de&&xe.addToRenderList(E,F),this.info.render.frame++,j===!0&&Ge.beginShadows();const _e=m.state.shadowsArray;le.render(_e,F,ie),j===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const we=E.opaque,ge=E.transmissive;if(m.setupLights(),ie.isArrayCamera){const ze=ie.cameras;if(ge.length>0)for(let Ve=0,Ke=ze.length;Ve<Ke;Ve++){const qe=ze[Ve];ht(we,ge,F,qe)}de&&xe.render(F);for(let Ve=0,Ke=ze.length;Ve<Ke;Ve++){const qe=ze[Ve];je(E,F,qe,qe.viewport)}}else ge.length>0&&ht(we,ge,F,ie),de&&xe.render(F),je(E,F,ie);R!==null&&(fe.updateMultisampleRenderTarget(R),fe.updateRenderTargetMipmap(R)),F.isScene===!0&&F.onAfterRender(S,F,ie),Se.resetDefaultState(),N=-1,b=null,g.pop(),g.length>0?(m=g[g.length-1],j===!0&&Ge.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?E=p[p.length-1]:E=null};function ot(F,ie,_e,we){if(F.visible===!1)return;if(F.layers.test(ie.layers)){if(F.isGroup)_e=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ie);else if(F.isLight)m.pushLight(F),F.castShadow&&m.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||K.intersectsSprite(F)){we&&re.setFromMatrixPosition(F.matrixWorld).applyMatrix4(H);const Ve=ae.update(F),Ke=F.material;Ke.visible&&E.push(F,Ve,Ke,_e,re.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||K.intersectsObject(F))){const Ve=ae.update(F),Ke=F.material;if(we&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),re.copy(F.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),re.copy(Ve.boundingSphere.center)),re.applyMatrix4(F.matrixWorld).applyMatrix4(H)),Array.isArray(Ke)){const qe=Ve.groups;for(let nt=0,it=qe.length;nt<it;nt++){const Qe=qe[nt],ft=Ke[Qe.materialIndex];ft&&ft.visible&&E.push(F,Ve,ft,_e,re.z,Qe)}}else Ke.visible&&E.push(F,Ve,Ke,_e,re.z,null)}}const ze=F.children;for(let Ve=0,Ke=ze.length;Ve<Ke;Ve++)ot(ze[Ve],ie,_e,we)}function je(F,ie,_e,we){const ge=F.opaque,ze=F.transmissive,Ve=F.transparent;m.setupLightsView(_e),j===!0&&Ge.setGlobalState(S.clippingPlanes,_e),we&&be.viewport(v.copy(we)),ge.length>0&&ut(ge,ie,_e),ze.length>0&&ut(ze,ie,_e),Ve.length>0&&ut(Ve,ie,_e),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ht(F,ie,_e,we){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[we.id]===void 0&&(m.state.transmissionRenderTarget[we.id]=new wn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?bi:An,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const ze=m.state.transmissionRenderTarget[we.id],Ve=we.viewport||v;ze.setSize(Ve.z,Ve.w);const Ke=S.getRenderTarget();S.setRenderTarget(ze),S.getClearColor(C),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),de?xe.render(_e):S.clear();const qe=S.toneMapping;S.toneMapping=yi;const nt=we.viewport;if(we.viewport!==void 0&&(we.viewport=void 0),m.setupLightsView(we),j===!0&&Ge.setGlobalState(S.clippingPlanes,we),ut(F,_e,we),fe.updateMultisampleRenderTarget(ze),fe.updateRenderTargetMipmap(ze),ve.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Qe=0,ft=ie.length;Qe<ft;Qe++){const Tt=ie[Qe],mt=Tt.object,Nt=Tt.geometry,pt=Tt.material,Ye=Tt.group;if(pt.side===pn&&mt.layers.test(we.layers)){const Ot=pt.side;pt.side=un,pt.needsUpdate=!0,Ze(mt,_e,we,Nt,pt,Ye),pt.side=Ot,pt.needsUpdate=!0,it=!0}}it===!0&&(fe.updateMultisampleRenderTarget(ze),fe.updateRenderTargetMipmap(ze))}S.setRenderTarget(Ke),S.setClearColor(C,W),nt!==void 0&&(we.viewport=nt),S.toneMapping=qe}function ut(F,ie,_e){const we=ie.isScene===!0?ie.overrideMaterial:null;for(let ge=0,ze=F.length;ge<ze;ge++){const Ve=F[ge],Ke=Ve.object,qe=Ve.geometry,nt=we===null?Ve.material:we,it=Ve.group;Ke.layers.test(_e.layers)&&Ze(Ke,ie,_e,qe,nt,it)}}function Ze(F,ie,_e,we,ge,ze){F.onBeforeRender(S,ie,_e,we,ge,ze),F.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ge.transparent===!0&&ge.side===pn&&ge.forceSinglePass===!1?(ge.side=un,ge.needsUpdate=!0,S.renderBufferDirect(_e,ie,we,ge,F,ze),ge.side=rr,ge.needsUpdate=!0,S.renderBufferDirect(_e,ie,we,ge,F,ze),ge.side=pn):S.renderBufferDirect(_e,ie,we,ge,F,ze),F.onAfterRender(S,ie,_e,we,ge,ze)}function at(F,ie,_e){ie.isScene!==!0&&(ie=oe);const we=se.get(F),ge=m.state.lights,ze=m.state.shadowsArray,Ve=ge.state.version,Ke=Ee.getParameters(F,ge.state,ze,ie,_e),qe=Ee.getProgramCacheKey(Ke);let nt=we.programs;we.environment=F.isMeshStandardMaterial?ie.environment:null,we.fog=ie.fog,we.envMap=(F.isMeshStandardMaterial?P:G).get(F.envMap||we.environment),we.envMapRotation=we.environment!==null&&F.envMap===null?ie.environmentRotation:F.envMapRotation,nt===void 0&&(F.addEventListener("dispose",te),nt=new Map,we.programs=nt);let it=nt.get(qe);if(it!==void 0){if(we.currentProgram===it&&we.lightsStateVersion===Ve)return Zt(F,Ke),it}else Ke.uniforms=Ee.getUniforms(F),F.onBeforeCompile(Ke,S),it=Ee.acquireProgram(Ke,qe),nt.set(qe,it),we.uniforms=Ke.uniforms;const Qe=we.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Qe.clippingPlanes=Ge.uniform),Zt(F,Ke),we.needsLights=Fe(F),we.lightsStateVersion=Ve,we.needsLights&&(Qe.ambientLightColor.value=ge.state.ambient,Qe.lightProbe.value=ge.state.probe,Qe.directionalLights.value=ge.state.directional,Qe.directionalLightShadows.value=ge.state.directionalShadow,Qe.spotLights.value=ge.state.spot,Qe.spotLightShadows.value=ge.state.spotShadow,Qe.rectAreaLights.value=ge.state.rectArea,Qe.ltc_1.value=ge.state.rectAreaLTC1,Qe.ltc_2.value=ge.state.rectAreaLTC2,Qe.pointLights.value=ge.state.point,Qe.pointLightShadows.value=ge.state.pointShadow,Qe.hemisphereLights.value=ge.state.hemi,Qe.directionalShadowMap.value=ge.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,Qe.spotShadowMap.value=ge.state.spotShadowMap,Qe.spotLightMatrix.value=ge.state.spotLightMatrix,Qe.spotLightMap.value=ge.state.spotLightMap,Qe.pointShadowMap.value=ge.state.pointShadowMap,Qe.pointShadowMatrix.value=ge.state.pointShadowMatrix),we.currentProgram=it,we.uniformsList=null,it}function Lt(F){if(F.uniformsList===null){const ie=F.currentProgram.getUniforms();F.uniformsList=Ca.seqWithValue(ie.seq,F.uniforms)}return F.uniformsList}function Zt(F,ie){const _e=se.get(F);_e.outputColorSpace=ie.outputColorSpace,_e.batching=ie.batching,_e.batchingColor=ie.batchingColor,_e.instancing=ie.instancing,_e.instancingColor=ie.instancingColor,_e.instancingMorph=ie.instancingMorph,_e.skinning=ie.skinning,_e.morphTargets=ie.morphTargets,_e.morphNormals=ie.morphNormals,_e.morphColors=ie.morphColors,_e.morphTargetsCount=ie.morphTargetsCount,_e.numClippingPlanes=ie.numClippingPlanes,_e.numIntersection=ie.numClipIntersection,_e.vertexAlphas=ie.vertexAlphas,_e.vertexTangents=ie.vertexTangents,_e.toneMapping=ie.toneMapping}function wt(F,ie,_e,we,ge){ie.isScene!==!0&&(ie=oe),fe.resetTextureUnits();const ze=ie.fog,Ve=we.isMeshStandardMaterial?ie.environment:null,Ke=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ar,qe=(we.isMeshStandardMaterial?P:G).get(we.envMap||Ve),nt=we.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,it=!!_e.attributes.tangent&&(!!we.normalMap||we.anisotropy>0),Qe=!!_e.morphAttributes.position,ft=!!_e.morphAttributes.normal,Tt=!!_e.morphAttributes.color;let mt=yi;we.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=S.toneMapping);const Nt=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,pt=Nt!==void 0?Nt.length:0,Ye=se.get(we),Ot=m.state.lights;if(j===!0&&(Q===!0||F!==b)){const bn=F===b&&we.id===N;Ge.setState(we,F,bn)}let Mt=!1;we.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ot.state.version||Ye.outputColorSpace!==Ke||ge.isBatchedMesh&&Ye.batching===!1||!ge.isBatchedMesh&&Ye.batching===!0||ge.isBatchedMesh&&Ye.batchingColor===!0&&ge.colorTexture===null||ge.isBatchedMesh&&Ye.batchingColor===!1&&ge.colorTexture!==null||ge.isInstancedMesh&&Ye.instancing===!1||!ge.isInstancedMesh&&Ye.instancing===!0||ge.isSkinnedMesh&&Ye.skinning===!1||!ge.isSkinnedMesh&&Ye.skinning===!0||ge.isInstancedMesh&&Ye.instancingColor===!0&&ge.instanceColor===null||ge.isInstancedMesh&&Ye.instancingColor===!1&&ge.instanceColor!==null||ge.isInstancedMesh&&Ye.instancingMorph===!0&&ge.morphTexture===null||ge.isInstancedMesh&&Ye.instancingMorph===!1&&ge.morphTexture!==null||Ye.envMap!==qe||we.fog===!0&&Ye.fog!==ze||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ge.numPlanes||Ye.numIntersection!==Ge.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==it||Ye.morphTargets!==Qe||Ye.morphNormals!==ft||Ye.morphColors!==Tt||Ye.toneMapping!==mt||Ye.morphTargetsCount!==pt)&&(Mt=!0):(Mt=!0,Ye.__version=we.version);let Bn=Ye.currentProgram;Mt===!0&&(Bn=at(we,ie,ge));let Br=!1,mn=!1,Sl=!1;const Ut=Bn.getUniforms(),Ni=Ye.uniforms;if(be.useProgram(Bn.program)&&(Br=!0,mn=!0,Sl=!0),we.id!==N&&(N=we.id,mn=!0),Br||b!==F){Ut.setValue(V,"projectionMatrix",F.projectionMatrix),Ut.setValue(V,"viewMatrix",F.matrixWorldInverse);const bn=Ut.map.cameraPosition;bn!==void 0&&bn.setValue(V,$.setFromMatrixPosition(F.matrixWorld)),Ie.logarithmicDepthBuffer&&Ut.setValue(V,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(we.isMeshPhongMaterial||we.isMeshToonMaterial||we.isMeshLambertMaterial||we.isMeshBasicMaterial||we.isMeshStandardMaterial||we.isShaderMaterial)&&Ut.setValue(V,"isOrthographic",F.isOrthographicCamera===!0),b!==F&&(b=F,mn=!0,Sl=!0)}if(ge.isSkinnedMesh){Ut.setOptional(V,ge,"bindMatrix"),Ut.setOptional(V,ge,"bindMatrixInverse");const bn=ge.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ut.setValue(V,"boneTexture",bn.boneTexture,fe))}ge.isBatchedMesh&&(Ut.setOptional(V,ge,"batchingTexture"),Ut.setValue(V,"batchingTexture",ge._matricesTexture,fe),Ut.setOptional(V,ge,"batchingIdTexture"),Ut.setValue(V,"batchingIdTexture",ge._indirectTexture,fe),Ut.setOptional(V,ge,"batchingColorTexture"),ge._colorsTexture!==null&&Ut.setValue(V,"batchingColorTexture",ge._colorsTexture,fe));const Al=_e.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0)&&De.update(ge,_e,Bn),(mn||Ye.receiveShadow!==ge.receiveShadow)&&(Ye.receiveShadow=ge.receiveShadow,Ut.setValue(V,"receiveShadow",ge.receiveShadow)),we.isMeshGouraudMaterial&&we.envMap!==null&&(Ni.envMap.value=qe,Ni.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),we.isMeshStandardMaterial&&we.envMap===null&&ie.environment!==null&&(Ni.envMapIntensity.value=ie.environmentIntensity),mn&&(Ut.setValue(V,"toneMappingExposure",S.toneMappingExposure),Ye.needsLights&&It(Ni,Sl),ze&&we.fog===!0&&Ue.refreshFogUniforms(Ni,ze),Ue.refreshMaterialUniforms(Ni,we,X,L,m.state.transmissionRenderTarget[F.id]),Ca.upload(V,Lt(Ye),Ni,fe)),we.isShaderMaterial&&we.uniformsNeedUpdate===!0&&(Ca.upload(V,Lt(Ye),Ni,fe),we.uniformsNeedUpdate=!1),we.isSpriteMaterial&&Ut.setValue(V,"center",ge.center),Ut.setValue(V,"modelViewMatrix",ge.modelViewMatrix),Ut.setValue(V,"normalMatrix",ge.normalMatrix),Ut.setValue(V,"modelMatrix",ge.matrixWorld),we.isShaderMaterial||we.isRawShaderMaterial){const bn=we.uniformsGroups;for(let wl=0,y0=bn.length;wl<y0;wl++){const Du=bn[wl];q.update(Du,Bn),q.bind(Du,Bn)}}return Bn}function It(F,ie){F.ambientLightColor.needsUpdate=ie,F.lightProbe.needsUpdate=ie,F.directionalLights.needsUpdate=ie,F.directionalLightShadows.needsUpdate=ie,F.pointLights.needsUpdate=ie,F.pointLightShadows.needsUpdate=ie,F.spotLights.needsUpdate=ie,F.spotLightShadows.needsUpdate=ie,F.rectAreaLights.needsUpdate=ie,F.hemisphereLights.needsUpdate=ie}function Fe(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(F,ie,_e){se.get(F.texture).__webglTexture=ie,se.get(F.depthTexture).__webglTexture=_e;const we=se.get(F);we.__hasExternalTextures=!0,we.__autoAllocateDepthBuffer=_e===void 0,we.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),we.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ie){const _e=se.get(F);_e.__webglFramebuffer=ie,_e.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(F,ie=0,_e=0){R=F,D=ie,y=_e;let we=!0,ge=null,ze=!1,Ve=!1;if(F){const qe=se.get(F);qe.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(V.FRAMEBUFFER,null),we=!1):qe.__webglFramebuffer===void 0?fe.setupRenderTarget(F):qe.__hasExternalTextures&&fe.rebindTextures(F,se.get(F.texture).__webglTexture,se.get(F.depthTexture).__webglTexture);const nt=F.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ve=!0);const it=se.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(it[ie])?ge=it[ie][_e]:ge=it[ie],ze=!0):F.samples>0&&fe.useMultisampledRTT(F)===!1?ge=se.get(F).__webglMultisampledFramebuffer:Array.isArray(it)?ge=it[_e]:ge=it,v.copy(F.viewport),w.copy(F.scissor),O=F.scissorTest}else v.copy(Z).multiplyScalar(X).floor(),w.copy(ee).multiplyScalar(X).floor(),O=me;if(be.bindFramebuffer(V.FRAMEBUFFER,ge)&&we&&be.drawBuffers(F,ge),be.viewport(v),be.scissor(w),be.setScissorTest(O),ze){const qe=se.get(F.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe.__webglTexture,_e)}else if(Ve){const qe=se.get(F.texture),nt=ie||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.__webglTexture,_e||0,nt)}N=-1},this.readRenderTargetPixels=function(F,ie,_e,we,ge,ze,Ve){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=se.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke){be.bindFramebuffer(V.FRAMEBUFFER,Ke);try{const qe=F.texture,nt=qe.format,it=qe.type;if(!Ie.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=F.width-we&&_e>=0&&_e<=F.height-ge&&V.readPixels(ie,_e,we,ge,ce.convert(nt),ce.convert(it),ze)}finally{const qe=R!==null?se.get(R).__webglFramebuffer:null;be.bindFramebuffer(V.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(F,ie,_e,we,ge,ze,Ve){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=se.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke){be.bindFramebuffer(V.FRAMEBUFFER,Ke);try{const qe=F.texture,nt=qe.format,it=qe.type;if(!Ie.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ie>=0&&ie<=F.width-we&&_e>=0&&_e<=F.height-ge){const Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,ze.byteLength,V.STREAM_READ),V.readPixels(ie,_e,we,ge,ce.convert(nt),ce.convert(it),0),V.flush();const ft=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);await Cg(V,ft,4);try{V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ze)}finally{V.deleteBuffer(Qe),V.deleteSync(ft)}return ze}}finally{const qe=R!==null?se.get(R).__webglFramebuffer:null;be.bindFramebuffer(V.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(F,ie=null,_e=0){F.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ie=arguments[0]||null,F=arguments[1]);const we=Math.pow(2,-_e),ge=Math.floor(F.image.width*we),ze=Math.floor(F.image.height*we),Ve=ie!==null?ie.x:0,Ke=ie!==null?ie.y:0;fe.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,_e,0,0,Ve,Ke,ge,ze),be.unbindTexture()},this.copyTextureToTexture=function(F,ie,_e=null,we=null,ge=0){F.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),we=arguments[0]||null,F=arguments[1],ie=arguments[2],ge=arguments[3]||0,_e=null);let ze,Ve,Ke,qe,nt,it;_e!==null?(ze=_e.max.x-_e.min.x,Ve=_e.max.y-_e.min.y,Ke=_e.min.x,qe=_e.min.y):(ze=F.image.width,Ve=F.image.height,Ke=0,qe=0),we!==null?(nt=we.x,it=we.y):(nt=0,it=0);const Qe=ce.convert(ie.format),ft=ce.convert(ie.type);fe.setTexture2D(ie,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ie.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ie.unpackAlignment);const Tt=V.getParameter(V.UNPACK_ROW_LENGTH),mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Nt=V.getParameter(V.UNPACK_SKIP_PIXELS),pt=V.getParameter(V.UNPACK_SKIP_ROWS),Ye=V.getParameter(V.UNPACK_SKIP_IMAGES),Ot=F.isCompressedTexture?F.mipmaps[ge]:F.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ot.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ke),V.pixelStorei(V.UNPACK_SKIP_ROWS,qe),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ge,nt,it,ze,Ve,Qe,ft,Ot.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ge,nt,it,Ot.width,Ot.height,Qe,Ot.data):V.texSubImage2D(V.TEXTURE_2D,ge,nt,it,ze,Ve,Qe,ft,Ot),V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Nt),V.pixelStorei(V.UNPACK_SKIP_ROWS,pt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ye),ge===0&&ie.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(F,ie,_e=null,we=null,ge=0){F.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),_e=arguments[0]||null,we=arguments[1]||null,F=arguments[2],ie=arguments[3],ge=arguments[4]||0);let ze,Ve,Ke,qe,nt,it,Qe,ft,Tt;const mt=F.isCompressedTexture?F.mipmaps[ge]:F.image;_e!==null?(ze=_e.max.x-_e.min.x,Ve=_e.max.y-_e.min.y,Ke=_e.max.z-_e.min.z,qe=_e.min.x,nt=_e.min.y,it=_e.min.z):(ze=mt.width,Ve=mt.height,Ke=mt.depth,qe=0,nt=0,it=0),we!==null?(Qe=we.x,ft=we.y,Tt=we.z):(Qe=0,ft=0,Tt=0);const Nt=ce.convert(ie.format),pt=ce.convert(ie.type);let Ye;if(ie.isData3DTexture)fe.setTexture3D(ie,0),Ye=V.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)fe.setTexture2DArray(ie,0),Ye=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ie.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ie.unpackAlignment);const Ot=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=V.getParameter(V.UNPACK_SKIP_PIXELS),Br=V.getParameter(V.UNPACK_SKIP_ROWS),mn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,mt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,it),F.isDataTexture||F.isData3DTexture?V.texSubImage3D(Ye,ge,Qe,ft,Tt,ze,Ve,Ke,Nt,pt,mt.data):ie.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,ge,Qe,ft,Tt,ze,Ve,Ke,Nt,mt.data):V.texSubImage3D(Ye,ge,Qe,ft,Tt,ze,Ve,Ke,Nt,pt,mt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Br),V.pixelStorei(V.UNPACK_SKIP_IMAGES,mn),ge===0&&ie.generateMipmaps&&V.generateMipmap(Ye),be.unbindTexture()},this.initRenderTarget=function(F){se.get(F).__webglFramebuffer===void 0&&fe.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?fe.setTextureCube(F,0):F.isData3DTexture?fe.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?fe.setTexture2DArray(F,0):fe.setTexture2D(F,0),be.unbindTexture()},this.resetState=function(){D=0,y=0,R=null,be.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ou?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===fl?"display-p3":"srgb"}}class uu extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ci extends nn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Bt,h=Bt,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei extends tt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new _t,bd=new _t,ta=[],Td=new Lr,k1=new _t,qs=new vt,Zs=new Ur;class uo extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ei(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,k1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,is),Td.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(Td)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,is),Zs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(i),e.ray.intersectsSphere(Zs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,is),bd.multiplyMatrices(i,is),qs.matrixWorld=bd,qs.raycast(e,ta);for(let o=0,a=ta.length;o<a;o++){const l=ta[o];l.instanceId=s,l.object=this,t.push(l)}ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ei(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(r*this.count),r,this.count,Os,ii));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xh extends nn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di extends At{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],f=[];let M=0;const E=[],m=i/2;let p=0;g(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function g(){const x=new ue,D=new ue;let y=0;const R=(t-e)/i;for(let N=0;N<=s;N++){const b=[],v=N/s,w=v*(t-e)+e;for(let O=0;O<=r;O++){const C=O/r,W=C*l+a,B=Math.sin(W),L=Math.cos(W);D.x=w*B,D.y=-v*i+m,D.z=w*L,u.push(D.x,D.y,D.z),x.set(B,R,L).normalize(),d.push(x.x,x.y,x.z),f.push(C,1-v),b.push(M++)}E.push(b)}for(let N=0;N<r;N++)for(let b=0;b<s;b++){const v=E[b][N],w=E[b+1][N],O=E[b+1][N+1],C=E[b][N+1];h.push(v,w,C),h.push(w,O,C),y+=6}c.addGroup(p,y,0),p+=y}function S(x){const D=M,y=new st,R=new ue;let N=0;const b=x===!0?e:t,v=x===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),M++;const w=M;for(let O=0;O<=r;O++){const W=O/r*l+a,B=Math.cos(W),L=Math.sin(W);R.x=b*L,R.y=m*v,R.z=b*B,u.push(R.x,R.y,R.z),d.push(0,v,0),y.x=B*.5+.5,y.y=L*.5*v+.5,f.push(y.x,y.y),M++}for(let O=0;O<r;O++){const C=D+O,W=w+O;x===!0?h.push(W,W+1,C):h.push(W+1,W,C),N+=3}c.addGroup(p,N,x===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hs extends Di{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Hs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class du extends At{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const S=new ue,x=new ue,D=new ue;for(let y=0;y<t.length;y+=3)f(t[y+0],S),f(t[y+1],x),f(t[y+2],D),l(S,x,D,g)}function l(g,S,x,D){const y=D+1,R=[];for(let N=0;N<=y;N++){R[N]=[];const b=g.clone().lerp(x,N/y),v=S.clone().lerp(x,N/y),w=y-N;for(let O=0;O<=w;O++)O===0&&N===y?R[N][O]=b:R[N][O]=b.clone().lerp(v,O/w)}for(let N=0;N<y;N++)for(let b=0;b<2*(y-N)-1;b++){const v=Math.floor(b/2);b%2===0?(d(R[N][v+1]),d(R[N+1][v]),d(R[N][v])):(d(R[N][v+1]),d(R[N+1][v+1]),d(R[N+1][v]))}}function c(g){const S=new ue;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(g),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function h(){const g=new ue;for(let S=0;S<s.length;S+=3){g.x=s[S+0],g.y=s[S+1],g.z=s[S+2];const x=m(g)/2/Math.PI+.5,D=p(g)/Math.PI+.5;o.push(x,1-D)}M(),u()}function u(){for(let g=0;g<o.length;g+=6){const S=o[g+0],x=o[g+2],D=o[g+4],y=Math.max(S,x,D),R=Math.min(S,x,D);y>.9&&R<.1&&(S<.2&&(o[g+0]+=1),x<.2&&(o[g+2]+=1),D<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function f(g,S){const x=g*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function M(){const g=new ue,S=new ue,x=new ue,D=new ue,y=new st,R=new st,N=new st;for(let b=0,v=0;b<s.length;b+=9,v+=6){g.set(s[b+0],s[b+1],s[b+2]),S.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),y.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),N.set(o[v+4],o[v+5]),D.copy(g).add(S).add(x).divideScalar(3);const w=m(D);E(y,v+0,g,w),E(R,v+2,S,w),E(N,v+4,x,w)}}function E(g,S,x,D){D<0&&g.x===1&&(o[S]=g.x-1),x.x===0&&x.z===0&&(o[S]=D/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.vertices,e.indices,e.radius,e.details)}}class Vs extends du{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vs(e.radius,e.detail)}}class fu extends At{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new ue,d=new ue,f=[],M=[],E=[],m=[];for(let p=0;p<=i;p++){const g=[],S=p/i;let x=0;p===0&&o===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let D=0;D<=t;D++){const y=D/t;u.x=-e*Math.cos(r+y*s)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(r+y*s)*Math.sin(o+S*a),M.push(u.x,u.y,u.z),d.copy(u).normalize(),E.push(d.x,d.y,d.z),m.push(y+x,1-S),g.push(c++)}h.push(g)}for(let p=0;p<i;p++)for(let g=0;g<t;g++){const S=h[p][g+1],x=h[p][g],D=h[p+1][g],y=h[p+1][g+1];(p!==0||o>0)&&f.push(S,x,y),(p!==i-1||l<Math.PI)&&f.push(x,D,y)}this.setIndex(f),this.setAttribute("position",new gt(M,3)),this.setAttribute("normal",new gt(E,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class B1 extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G1 extends Bs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Fn extends Bs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pp extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Sh extends Pp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ql=new _t,Cd=new ue,Dd=new ue;class z1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lu,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class H1 extends z1{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lp extends Pp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new H1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class V1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Nd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Nd(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);const _={CAMERA_FAR:6e4,CAMERA_FOV:70,BARK_RELIEF_GAIN:8,CAMERA_NEAR:.3,EYE_HEIGHT_M:1.7,MOUSE_SENSITIVITY_RAD_PER_PX:.0022,PITCH_LIMIT_RAD:1.45,SCRAMBLE_SPEED:1,SLOPE_SCRAMBLE_MAX_DEG:45,SLOPE_WALK_MAX_DEG:30,WALKER_PROBE_AHEAD_M:.5,WALKER_OBSTACLE_ITERS:2,WALKER_CHEST_M:1.15,WALKER_RADIUS_M:.34,WALKER_STEP_UP_M:.6,WALK_SPEED:2.6,WADE_MAX_DEPTH_M:1.2,WADE_SLOW_DEPTH_M:.5,WADE_SPEED_FACTOR:.4,WATER_DEPTH_CAP_M:30,WATER_DEPTH_PER_M_FROM_SHORE:.06,WATER_MASK_MAX_RISE_M:1.5,WATER_MIN_BODY_CELLS:6,WATER_PLANE_LIFT_M:.15,WATER_PLANE_MARGIN_M:12,WATER_PLANE_MAX_VERTS:4e4,WATER_PLANE_STEP_M:3,WATER_SHALLOW_SPEED_FACTOR:.7,WATER_SURFACE_PERCENTILE:.95,WATER_SHORE_BLUR_CELLS:3,WATER_SHORE_DRY_M:.02,WATER_SHORE_ISO:.5,SURFACE_BASELINE_DRAIN_MULT:1,SURFACE_BASELINE_SPEED_FACTOR:1,SURFACE_BOG_DRAIN_MULT:2.2,SURFACE_BOG_SPEED_FACTOR:.45,SURFACE_CROP_DRAIN_MULT:1.1,SURFACE_CROP_SPEED_FACTOR:.9,SURFACE_MOSS_DRAIN_MULT:1.2,SURFACE_MOSS_SPEED_FACTOR:.85,SURFACE_SHRUB_DRAIN_MULT:1.2,SURFACE_SHRUB_SPEED_FACTOR:.8,SURFACE_SNOW_DRAIN_MULT:1.5,SURFACE_SNOW_SPEED_FACTOR:.7,SURFACE_TREE_DRAIN_MULT:1.4,SURFACE_TREE_SPEED_FACTOR:.65,BLACKOUT_MIN_DEPTH_M:.8,BLACKOUT_RELOCATE_MAX_M:60,BLACKOUT_SEARCH_RAYS:32,BLACKOUT_SEARCH_STEP_M:2,BLACKOUT_STAMINA_FRACTION:.35,BLACKOUT_TIME_PENALTY_S:45,SPRINT_SPEED:5.2,STAMINA_DRAIN_SCRAMBLE_PER_S:6,STAMINA_DRAIN_SPRINT_PER_S:14,STAMINA_DRAIN_WADE_PER_S:10,STAMINA_DRAIN_WALK_PER_S:1.5,STAMINA_MAX:100,STAMINA_REGEN_PER_S:8,LINE_HASH_DECIMALS:5,SAVE_MAX_MISSIONS:500,CATEGORY_MAX_M:3e4,CATEGORY_MIN_M:1e3,CATEGORY_SPRINT_MAX_M:3e3,CATEGORY_TREK_MAX_M:1e4,MEDAL_BRONZE_M:100,MEDAL_GOLD_M:50,MEDAL_PLATINUM_M:25,MEDAL_SILVER_M:75,MEDAL_MULT:{Platinum:2,Gold:1.5,Silver:1.2,Bronze:1,FAILED:0},SCORE_BASE_PER_KM:100,ARRIVAL_FADE_S:1.5,DETOUR_SCRIPT_SIDE:1,FINISH_RADIUS_M:8,TRACK_SAMPLE_S:.5,PLANNER_INIT_ZOOM:9,PROFILE_H_PX:120,PROFILE_SAMPLES:240,PROFILE_W_PX:480,RANDOM_LINE_BAND_INSET_M:1,RANDOM_LINE_MAX_ATTEMPTS:200,WATER_CROSSING_MAX_M:1e3,WATER_SCAN_STEP_M:10,CORRIDOR_OUTER_RADIUS_M:45e3,CORRIDOR_FAR_RADIUS_M:12500,CORRIDOR_NEAR_MARGIN_M:1500,ZOOM_BLOCKED_MARGIN_M:15,ZOOM_MAX_H:.985,ZOOM_MIN:11,ZOOM_SLOPE_MARGIN_DEG:2,TILE_CACHE_MAX_BYTES:64e6,TILE_DECODE_ROWS_PER_STEP:64,TILE_DECODE_WORKERS:2,TILE_LOADS_PER_STEP:2,TILE_NEAR_RADIUS_TILES:1,CHUNK_ANCHOR_MARGIN_M:24,CHUNK_PREFETCH_LEAD_S:15,CHUNK_BUILD_BUDGET_MS:8,CHUNK_BUILD_BUDGET_MS_POOLED:4,CHUNK_BUILDS_PER_FRAME:2,CHUNK_POOL_WORKERS:4,CHUNK_POOL_PREFETCH:8,CHUNK_POOL_INFLIGHT:2,BOOT_SLICE_BUDGET_MS:14,BOOT_FRAME_GAP_MS:100,CHUNK_POOL_BOOT_TIMEOUT_MS:45e3,CHUNK_POOL_WAIT_MS:250,FAR_SHELL_UNITS_PER_STEP:1,CHUNK_JOB_ROWS_PER_STEP:1,CHUNK_GRID_STEP_M:4,CHUNK_LOAD_RADIUS:8,CHUNK_LOD_FINE_RINGS:2,CHUNK_LOD_RING_MULTS:[1,2,4,8,16],CHUNK_LOD_RING_STARTS:[0,2,6,14,22],CHUNK_LOD_COARSE_MULT:2,CHUNK_SIZE_M:256,NORMAL_EPSILON_M:2,FILTER_AUX_MEMO_PITCH_M:8,FILTER_PITCH_FLOOR_M:16,SLICED_JOB_ROWS_PER_STEP:4,FAR_SHELL_INNER_M:600,FAR_SHELL_NORMAL_STEP_M:8,FAR_SHELL_OUTER_M:45e3,FAR_SHELL_FINE_ZONE_M:4500,FAR_SHELL_FINE_PITCH_M:32,FAR_SHELL_RADIAL_RINGS:158,FAR_SHELL_RECENTER_M:128,FAR_SHELL_RING_WARP:.5,FAR_SHELL_SECTORS:8,FAR_SHELL_BANDS:2,FAR_SHELL_SEGMENTS:1024,FAR_SHELL_SINK_FADE_M:3100,FAR_SHELL_SINK_M:3,FAR_SHELL_STEP_VERTS:48,FOG_BAND_1_M:600,FOG_BAND_2_M:2500,FOG_BAND_3_M:6500,FOG_DENSITY_FLOOR:.08,FOG_DENSITY_HALF_HEIGHT_M:350,FOG_HALF_DISTANCE_SEA_M:5200,FOG_HORIZON_BLEND_MAX:.45,FOG_START_M:120,HEMI_INTENSITY:2.1,SKYLIGHT_AXIS_TILT_DEG:110,SKYLIGHT_INTENSITY:3.35,SEASON_DEFAULT:"summer",WEATHER_ONSET_S:90,WEATHER_PERIOD_S:240,WEATHER_FOG_GAIN:.85,WEATHER_SUN_DIM:.4,WEATHER_AMBIENT_LIFT:1.45,CLOUD_HEIGHT_M:1400,CLOUD_SCALE_M:2600,CLOUD_DRIFT_MPS:7,CLOUD_COVER_LO:.34,CLOUD_COVER_HI:.86,CLOUD_EDGE:.16,CLOUD_HORIZON_FADE:.055,WEATHER_WET_TAU_S:210,WEATHER_WET_SAMPLES:10,WEATHER_WET_DARKEN:.42,WEATHER_WET_BLUE:.1,WEATHER_SKY_MIX:.8,WEATHER_WIND_GAIN:2.2,WEATHER_FRONT_SPAN_M:16e3,WEATHER_FRONT_PROBE_M:4e3,WEATHER_FRONT_FOG_MIN:.4,WEATHER_FRONT_FOG_MAX:2.2,SEASON_SPRING_OVERCAST:.42,SEASON_SUMMER_OVERCAST:.28,SEASON_AUTUMN_OVERCAST:.5,SEASON_WINTER_OVERCAST:.62,SEASON_SPRING_SNOW:.12,SEASON_SUMMER_SNOW:0,SEASON_AUTUMN_SNOW:0,SEASON_WINTER_SNOW:1,SNOW_ALT_LO_M:520,SNOW_ALT_HI_M:880,SNOW_SLOPE_LO_DEG:34,SNOW_SLOPE_HI_DEG:52,SNOW_ASPECT_MELT:.55,SNOW_ROCK_UP_MIN:.45,SNOW_BURY_FRAC:.9,SNOW_BURY_SKIP:.82,SEASON_SPRING_VEG_MIX:.3,SEASON_SPRING_SAT:1.08,SEASON_SPRING_SKY_MIX:.25,SEASON_SPRING_SUN_MIX:.35,SEASON_SPRING_SUN_K:1,SEASON_AUTUMN_VEG_MIX:.45,SEASON_AUTUMN_SAT:1.05,SEASON_AUTUMN_SKY_MIX:.3,SEASON_AUTUMN_SUN_MIX:.45,SEASON_AUTUMN_SUN_K:.92,SEASON_WINTER_VEG_MIX:.62,SEASON_WINTER_SAT:.7,SEASON_WINTER_SKY_MIX:.5,SEASON_WINTER_SUN_MIX:.6,SEASON_WINTER_SUN_K:.78,SKY_DOME_RADIUS_M:52e3,SKY_GRADIENT_EXPONENT:.7,SKY_SUN_GLOW_EXPONENT:6,SUN_AZIMUTH_DEG:200,SUN_ELEVATION_DEG:30,SUN_INTENSITY:2.7,TERRAIN_BAND_BLEND_M:45,TERRAIN_APRON_MIX:.6,TERRAIN_BAND_GRAIN:.08,TERRAIN_BAND_HIGH_M:650,TERRAIN_BAND_NOISE_M:22,TERRAIN_BAND_NOISE_WAVE_M:320,TERRAIN_BAND_SUMMIT_M:870,TERRAIN_BAND_UPLAND_M:350,TERRAIN_DETAIL_ANISO:2.5,TERRAIN_DETAIL_H:.87,TERRAIN_DETAIL_RIDGE_CAP:.08,TERRAIN_DETAIL_RIDGE_GAIN:0,TERRAIN_DETAIL_RIDGE_OCTAVES:2,TERRAIN_DETAIL_PITCH_LIMIT:0,TERRAIN_DETAIL_RELIEF_CAP:.2762,TERRAIN_DETAIL_RMS_M:0,TERRAIN_DETAIL_SHORE_M:30,TERRAIN_DETAIL_SLOPE_FLOOR:.15,TERRAIN_DETAIL_SLOPE_HI_DEG:30,TERRAIN_DETAIL_SLOPE_LO_DEG:8,GRAIN_AMP_M:1.5,GRAIN_DOMAIN_M:4e3,GRAIN_NARROW:2,GRAIN_WAVE_M:25,SURVEY_NEAR_MARGIN_M:1500,SURVEY_FAR_HALF_M:12500,SURVEY_NEAR_ZOOM:13,RAVINE_DEPTH_FALLOFF:.5,RAVINE_DEPTH_M:6,RAVINE_HORTON:3,RAVINE_QUAD:64,RAVINE_JITTER:.45,RAVINE_LEVELS:3,RAVINE_NARROW:4,TERRAIN_DETAIL_TAPER:.25,TERRAIN_DETAIL_WANDER:.7,TERRAIN_DETAIL_WINDOW_POSTS:16,TERRAIN_CRAG_FADE_M:5e3,TERRAIN_CRAG_LEDGE_AMP:.6,TERRAIN_CRAG_LEDGE_BUMP:1.1,TERRAIN_CRAG_LEDGE_M:6,TERRAIN_CRAG_VARY_M:60,TERRAIN_EXPO_MIX:1,TERRAIN_EXPO_NOISE:2.3,TERRAIN_EXPO_WAVE_M:15,TERRAIN_EXPO_WIND:.35,TERRAIN_FAR_SHADE:.75,TERRAIN_FAR_SHADE_HI:.69,TERRAIN_FAR_SHADE_LO:.25,TERRAIN_FINE_GRAIN:.22,TERRAIN_FLECK_AMP:.1,TERRAIN_FLECK_BUMP:.24,TERRAIN_FLECK_FADE_M:220,TERRAIN_FLECK_WAVE_M:.8,TERRAIN_GRAIN_STREAK_W:1,TERRAIN_GRAIN_WAVE_M:9,TERRAIN_GRIT_AMP:.15,TERRAIN_GRIT_BUMP:.06,TERRAIN_GRIT_FADE_M:190,TERRAIN_GRIT_WAVE_M:.3,TERRAIN_GULLY_AMP:.6,TERRAIN_GULLY_WAVE_M:6,TERRAIN_HANDOVER_GAIN:.7,TERRAIN_HUMMOCK_M:.3,TERRAIN_HUMMOCK_WAVE_M:5,TERRAIN_KNOLL_M:.9,TERRAIN_KNOLL_WAVE_M:18,TERRAIN_PATCH_FADE_M:2500,TERRAIN_PATCH_MIX:.75,TERRAIN_PATCH_WAVE_M:30,TERRAIN_QUIET:.75,TERRAIN_QUIET_FADE_M:70,TERRAIN_QUIET_SAT:1.45,TERRAIN_RELIEF_FADE_M:500,TERRAIN_ROOT_AO:.82,TERRAIN_ROOT_BUMP:.055,TERRAIN_ROOT_FADE_M:30,TERRAIN_ROOT_MIX:1,TERRAIN_ROOT_QUIET:.3,TERRAIN_ROCK_NOISE_DEG:10,TERRAIN_SCREE_COVER:.32,TERRAIN_SCREE_FADE_POW:2,TERRAIN_SCREE_HI_DEG:32,TERRAIN_SCREE_LO_DEG:16,TERRAIN_SCREE_WAVE_M:10,TERRAIN_SLOPE_BLEND_DEG:8,TERRAIN_SLOPE_LIFT_M_PER_DEG:1.2,TERRAIN_SLOPE_ROCK_DEG:30,TERRAIN_SOIL_MIX_BARE:.95,TERRAIN_SOIL_MIX_TURF:.42,TERRAIN_SOIL_WAVE_M:2.6,TERRAIN_WIND_FROM_DEG:225,TERRAIN_ZONE_FAR_M:6e3,TERRAIN_ZONE_MIX:.35,TERRAIN_ZONE_MIX_FAR:.71,TERRAIN_ZONE_WAVE_M:260,WATER_CONTACT_M:.15,WATER_FRESNEL_EXPONENT:7,WATER_OPEN_FADE_M:130,WATER_REFLECT_MAX:.62,WATER_SHELF_DEPTH_M:1.2,WATER_SHELF_MAX_M:34,WATER_SHELF_MIN_M:3.5,WATER_SHELF_PROBE_M:20,WATER_SHELF_SHARE:.62,WATER_SHORE_GRAD_EPS_M:2,WATER_WET_FRAC:.12,DRESSING_ANCHOR_M:64,DRESSING_ANCHOR_MARGIN_M:12,DRESSING_CANDIDATES_PER_CELL:8,DRESSING_CELL_M:10,DRESSING_CLUMP_MAX:4.2,DRESSING_CLUMP_MIN:.16,DRESSING_CLUMP_POW:1.6,DRESSING_CLUMP_WAVE_M:55,DRESSING_COLLIDER_CACHE_CELLS:256,DRESSING_COLLIDER_CELLS:1,DRESSING_COLLIDER_RADIUS_MUL:.8,DRESSING_FADE_IN_M:1.5,DRESSING_FADE_FRAC:.6,DRESSING_FAR_M:265,DRESSING_MAX_PER_ENTRY:2600,DRESSING_MAX_SLOPE_DEG:40,DRESSING_MIN_REACH_FRAC:.24,DRESSING_RECENTER_M:45,DRESSING_REF_SIZE_M:2,DRESSING_STRETCH:.42,DRESSING_TILT_MAX_DEG:12,DRESSING_TINT_JITTER:.18,ROCK_ALT_GAIN:6,ROCK_COBBLE_CANDIDATES:16,ROCK_COBBLE_FAR_M:130,ROCK_COBBLE_REACH_FRAC:.26,ROCK_COBBLE_REF_SIZE_M:1,ROCK_POLY_FAR_M:60,ROCK_POLY_MIN_M:1.15,ROCK_COBBLE_MAX_M:.85,ROCK_COBBLE_MIN_M:.3,ROCK_COBBLE_NEAR_M:12,ROCK_COBBLE_P_MUL:1.15,ROCK_BOX_NEAR_M:32,ROCK_BURY_FRAC:.32,ROCK_APRON_MIX:.8,ROCK_CONTACT_BAND:.74,ROCK_CONTACT_DARK:.5,ROCK_CONTACT_DOME:.11,ROCK_CONTACT_FADE_M:60,ROCK_CONTACT_FALLOFF:.45,ROCK_CONTACT_FAR_M:100,ROCK_CONTACT_PROUD_MIN_M:.13,ROCK_CONTACT_SUN_SHAPE:.62,ROCK_CONTACT_OCC:0,ROCK_CONTACT_PROUD_MUL:.42,ROCK_CONTACT_RADIUS_MUL:1.55,ROCK_CONTACT_SEGMENTS:14,ROCK_FAN_GAIN:14,ROCK_FAN_HI_DEG:40,ROCK_FAN_LO_DEG:24,ROCK_FAN_PROBE_M:26,ROCK_GRAIN_FADE_M:34,ROCK_GRAIN_MOTTLE_M:.62,ROCK_GRAIN_MOTTLE:.28,ROCK_GRAIN_SPECKLE_M:.055,ROCK_GRAIN_SPECKLE:.13,ROCK_GRAIN_VEIN_M:.9,ROCK_GRAIN_VEIN:.34,ROCK_NORMAL_ALIGN:.8,ROCK_P_BARE:.34,ROCK_P_BARE_STEEP:.9,ROCK_P_FOREST:.04,ROCK_P_GRASS:.13,ROCK_P_SNOW:.06,ROCK_SKIRT_FAR_M:45,ROCK_SKIRT_MIN_M:.55,ROCK_SKIRT_N:4,ROCK_SKIRT_SIZE_MAX:.38,ROCK_SKIRT_SIZE_MIN:.18,ROCK_SKIRT_SPREAD:.45,ROCK_SIZE_MAX_M:2.9,ROCK_SIZE_MIN_M:.42,ROCK_SIZE_SKEW:1.5,ROCK_SLOPE_GAIN:9.5,ROCK_SLOPE_HI_DEG:34,ROCK_SLOPE_LO_DEG:16,SCREE_MIN_SLOPE_DEG:22,SHRUB_SIZE_MAX_M:1.6,SHRUB_SIZE_MIN_M:.5,TREE_SWAY_MUL:.3,TREE_LEAF_FLUTTER:.075,TREE_LEAF_FLUTTER_HZ:3.4,TREE_BURY_FRAC:.02,TREE_CLUMP_MAX:1.08,TREE_CLUMP_MIN:.9,TREE_FAR_M:300,TREE_NEAR_M:55,TREE_SWITCH_REF_M:11,TREE_FADE_BAND_M:10,TREE_RESORT_STEP_M:1,TREE_NORMAL_ALIGN:.25,TREE_CONTACT_MIN_M:3.5,TREE_CONTACT_FAR_M:100,TREE_CONTACT_RADIUS_MUL:3.4,TREE_P_CLASS10:.32,TREE_P_CLASS20:.24,TREE_SIZE_MAX_M:17,TREE_SIZE_MIN_M:5,TREE_TREELINE_FLOOR:.8,TREE_TREELINE_HI_M:2900,TREE_TREELINE_LO_M:2300,CANOPY_CELL_M:7,CANOPY_RELIEF_M:4,CANOPY_EDGE_DARK:.25,CANOPY_SHRUB_W:.5,CANOPY_COVER_LO:.42,CANOPY_COVER_HI:.58,CANOPY_EDGE_SHIFT:.36,CANOPY_INTERIOR_CELLS:3,CANOPY_MANGROVE_W:.8,CANOPY_DUFF_MIX:.5,CANOPY_DUFF_MOTTLE:.4,CANOPY_DUFF_WAVE_M:2.4,TREE_TRUNK_RADIUS_FRAC:.016,GROUNDCOVER_ALT_FLOOR:.5,GROUNDCOVER_ALT_HI_M:960,GROUNDCOVER_ALT_LO_M:810,GROUNDCOVER_ARC_FLOOR:.45,GROUNDCOVER_BLADES:12,GROUNDCOVER_BLADE_W_MIN:.028,GROUNDCOVER_BLADE_W_SKEW:2.2,GROUNDCOVER_BLADE_TIP_SHEAR:.85,GROUNDCOVER_BLADE_W_SPAN:.03,GROUNDCOVER_BURY_FRAC:.12,GROUNDCOVER_DAMP_BASE:.12,GROUNDCOVER_DAMP_CONCAVE:.8,GROUNDCOVER_DAMP_PROBE_M:14,GROUNDCOVER_DAMP_SHORE:.65,GROUNDCOVER_DAMP_SLOPE_DEG:7,GROUNDCOVER_DENSITY_M2:38,GROUNDCOVER_DIST_KEEP:6,GROUNDCOVER_DIST_W_MUL:4.2,GROUNDCOVER_FADE_FRAC:.45,GROUNDCOVER_DIST_SIZE_POW:.4,GROUNDCOVER_DIST_SIZE_MAX:2.4,GROUNDCOVER_FALLOFF_POW:1.6,GROUNDCOVER_FAR_BAND_M:55,GROUNDCOVER_FAR_CANDIDATES:113,GROUNDCOVER_FAR_CELL_M:8,GROUNDCOVER_FAR_KEEP:3,GROUNDCOVER_FAR_M:80,GROUNDCOVER_FAR_W_MUL:2.6,GROUNDCOVER_FLOWER_POW:3,GROUNDCOVER_FLOWER_W:2.2,GROUNDCOVER_FLOWER_WAVE_M:11,GROUNDCOVER_FULL_M:9,GROUNDCOVER_HAZE_CANDIDATES:30,GROUNDCOVER_HAZE_CELL_M:12,GROUNDCOVER_HAZE_W_MUL:6,GROUNDCOVER_LOD_DIST_M:30,GROUNDCOVER_LOD_FAR_M:17,GROUNDCOVER_LOD_HAZE_M:55,GROUNDCOVER_ACCEPT_MARGIN_M:12,GROUNDCOVER_FADE_BAND:.08,GROUNDCOVER_TIER_LEAD_M:9,GROUNDCOVER_LOD_MID_M:9,GROUNDCOVER_MAX_PER_ENTRY:16e3,GROUNDCOVER_MID_BAND_M:30,GROUNDCOVER_MID_CANDIDATES:440,GROUNDCOVER_MID_CELL_M:3,GROUNDCOVER_MID_KEEP:2,GROUNDCOVER_MID_W_MUL:1.9,GROUNDCOVER_NEAR_BAND_M:17,GROUNDCOVER_NEAR_CANDIDATES:440,GROUNDCOVER_NEAR_CELL_M:3,GROUNDCOVER_NORMAL_ALIGN:.85,GROUNDCOVER_PATCH_DEPTH:.22,GROUNDCOVER_PATCH_H_MIN:.72,GROUNDCOVER_PATCH_WAVE_M:15,GROUNDCOVER_PETAL_R:.07,GROUNDCOVER_P_BARE:.42,GROUNDCOVER_P_FOREST:.7,GROUNDCOVER_DUFF_SHARE:.3,GROUNDCOVER_DUFF_SHARE_AUTUMN:.5,GROUNDCOVER_P_SHRUB:.95,GROUNDCOVER_DISSOLVE_FRAMES:120,GROUNDCOVER_RETRIGGER_MIN_M:2,GROUNDCOVER_RECENTRE_M:9,GROUNDCOVER_SEDGE_W:3.6,GROUNDCOVER_SLICE_CANDIDATES:4800,GROUNDCOVER_SLOPE_HI_DEG:44,GROUNDCOVER_SLOPE_LO_DEG:26,GROUNDCOVER_SLOPE_THIN:.85,GROUNDCOVER_STRETCH:.3,GROUNDCOVER_SWARD_WAVE_M:7,GROUNDCOVER_SWAY_AMP:.12,GROUNDCOVER_SWAY_SPEED:.9,GROUNDCOVER_SWAY_WAVE_M:15,GROUNDCOVER_TILT_MAX_DEG:12,GROUNDCOVER_LATTICE_WARP:0,GROUNDCOVER_HUE_JITTER:.1,GROUNDCOVER_ROOT_DARK:.45,GROUNDCOVER_ROOT_DARK_U:.35,GROUNDCOVER_BLADE_HUE_DEG:9,GROUNDCOVER_TINT_JITTER:.22,GROUNDCOVER_STRIP_SEGMENTS:[2,1,1,1,1],GROUNDCOVER_CLUMP_BEND:.35,GROUNDCOVER_WIND_SCROLL:2.2,GROUNDCOVER_WIND_FIELD_M:6.5,GROUNDCOVER_WIND_GUST_S:4.2,GROUNDCOVER_WIND_DIR_DEG:250,GROUNDCOVER_WIND_LEAN_DEG:14,GROUNDCOVER_WIND_WAVE_M:26,SCRIPT_MAX_TICKS:216e3,SCRIPT_WAYPOINT_RADIUS_M:2,FLY_SPEED_MPS:18,FLY_BOOST:4,SIM_DT:1/60,SIM_MAX_STEPS_PER_FRAME:8,GPS_SCREEN_HALF_WIDTH_M:120,GPS_SCREEN_PAD_PX:16,GPS_ROWS_PX:124,GPS_DEVICE_W:.097,GPS_DEVICE_DIST:.5,GPS_DEVICE_X:.395,GPS_DEVICE_Y_HIGH:-.177,GPS_DEVICE_Y_LOW:-.38,GPS_DEVICE_TIP_RAD:.55,GPS_DEVICE_YAW_RAD:.22,GPS_RAISE_SPEED_MPS:.6,GPS_RAISE_S:.45,GPS_BODY_ASPECT:2.2,GPS_BODY_WAIST:.95,GPS_BODY_DEPTH:.55,GPS_ANTENNA_LEN:.78,GPS_ANTENNA_W:.345,GPS_ANTENNA_X:-.336,GPS_ANTENNA_TILT_RAD:.06,GPS_STOW_S:.55,GPS_STOW_DROP:.42,GPS_STOW_DX:.12,GPS_SCREEN_PX:256,PLOT_H_PX:420,PLOT_PAD_PX:24,PLOT_W_PX:320,AA_SAMPLES_DEFAULT:4,AA_SAMPLES_OPTIONS:[0,2,4,8],DEBUG_AT_BOOT:!1,BENCH_TOL_M:3,BENCH_TOL_SUMMIT_M:6,RENDER_CALLS_MAX:120,RENDER_TRIS_MAX:45e5,SHORE_TOLERANCE_M:3,VSYNC_MISSED_MAX_FRAC:.02,VSYNC_P50_MAX_RATIO:1.15,VSYNC_P50_MIN_RATIO:.85,COMPASS_DIAM:.085,COMPASS_DIST:.45,COMPASS_X:-.26,COMPASS_Y_HIGH:-.2,COMPASS_Y_LOW:-.46,COMPASS_RAISE_S:.4,COMPASS_TIP_RAD:.3,COMPASS_CARD_LAG_S:.18,MAP_GRID_N:384,MAP_MARGIN_M:1e3,MAP_CANVAS_PX:960,MAP_SHEET_FRAC:.88,MAP_LABEL_SCREEN_PX:11,RENATURE_COVER_MAX_R:8,RENATURE_PIXEL_MAJORITY:.5,RENATURE_DEM_WINDOWS:[2,4,7],WET_CHANNEL_M:25,WET_TREE_MAX:.7,WET_TREE_THIN:.5,GROUNDCOVER_HANDOVER_M:15,GROUNDCOVER_HANDOVER_MIN_M:10};function W1(n,e,t,i){const r=new Float64Array(n),s=new Float64Array(n);for(let o=0;o<n;o++){const a=o/n*Math.PI*2;r[o]=Math.cos(a),s[o]=Math.sin(a)}return{S:n,radii:e,sinks:t,E:i,cosS:r,sinS:s}}function $1(n,e){const t=n.radii.length,i=n.radii[e];return Math.max(e+1<t?n.radii[e+1]-i:i-n.radii[e-1],2*Math.PI*i/n.S)}function Id(n,e,t,i,r,s,o,a){const{S:l,radii:c,sinks:h,E:u,cosS:d,sinS:f}=e;for(let M=t;M<i;M++){const E=M/l|0,m=M-E*l,p=c[E],g=p*d[m],S=p*f[m],x=M*3,D=r+g,y=s+S,R=$1(e,E);o[x]=g,o[x+1]=n.landformHeightAt(D,y,R)-h[E],o[x+2]=S;const N=(n.landformHeightAt(D+u,y,R)-n.landformHeightAt(D-u,y,R))/(2*u),b=(n.landformHeightAt(D,y+u,R)-n.landformHeightAt(D,y-u,R))/(2*u),v=Math.hypot(N,1,b);a[x]=-N/v,a[x+1]=1/v,a[x+2]=-b/v}}const Rt={liveTiles:!1,plannerFirst:!0,dressing:!1,dressingTrees:!0,proceduralTrees:!0,microRelief:!1,stamina:!1,survival:!1,globalBoard:!1,devTuner:!1};let Up=null;function Ah(){return Up??_.FAR_SHELL_RING_WARP}function X1(n){return Rt.devTuner&&(Up=n),Ah()}function Fp(){const n=_.FAR_SHELL_SEGMENTS,e=_.FAR_SHELL_RADIAL_RINGS,t=Ah(),i=_.FAR_SHELL_INNER_M,r=_.FAR_SHELL_OUTER_M,s=_.FAR_SHELL_FINE_ZONE_M,o=_.FAR_SHELL_FINE_PITCH_M,a=Math.max(0,Math.ceil((s-i)/o)),l=[];for(let d=0;d<a;d++)l.push(i+d*o);const c=[];if(t<=0)for(let d=0;d<e;d++)c.push(s*Math.pow(r/s,d/(e-1)));else{const d=Math.pow(s,t),f=Math.pow(r,t);for(let M=0;M<e;M++)c.push(Math.pow(d+(f-d)*(M/(e-1)),1/t))}const h=Float64Array.from([...l,...c]);return{radii:h,pitchAt:d=>{const f=h[d];return Math.max(d+1<h.length?h[d+1]-f:f-h[d-1],2*Math.PI*f/n)}}}function kp(n){const e=_.FAR_SHELL_INNER_M,t=_.FAR_SHELL_SINK_FADE_M-e;return _.FAR_SHELL_SINK_M*Math.min(1,Math.max(0,(_.FAR_SHELL_SINK_FADE_M-n)/t))}function K1(n){const{radii:e,pitchAt:t}=Fp();let i=0,r=e.length-1;for(;i<r;){const o=i+r>>1;e[o]<n?i=o+1:r=o}const s=i>0&&Math.abs(e[i-1]-n)<Math.abs(e[i]-n)?i-1:i;return t(s)}function Y1(n,e){const t=_.FAR_SHELL_SEGMENTS,i=Fp().radii,r=i.length,s=new Float64Array(r);for(let B=0;B<r;B++)s[B]=kp(i[B]);const o=_.FAR_SHELL_NORMAL_STEP_M,a=W1(t,i,s,o),l=r*t,c=new Float32Array(l*3),h=new Float32Array(l*3),u=new Uint32Array((r-1)*t*6);let d=0;for(let B=0;B<r-1;B++)for(let L=0;L<t;L++){const X=B*t+L,k=B*t+(L+1)%t,J=X+t,Z=k+t;u[d++]=X,u[d++]=k,u[d++]=J,u[d++]=k,u[d++]=Z,u[d++]=J}const f=new tt(c,3),M=new tt(h,3),E=B=>[Math.round(B*(r-1)/_.FAR_SHELL_BANDS),Math.round((B+1)*(r-1)/_.FAR_SHELL_BANDS)],m=B=>[Math.round(B*t/_.FAR_SHELL_SECTORS),Math.round((B+1)*t/_.FAR_SHELL_SECTORS)],p=new ri;p.name="far-shell";const g=[];for(let B=0;B<_.FAR_SHELL_BANDS;B++){const[L,X]=E(B);for(let k=0;k<_.FAR_SHELL_SECTORS;k++){const[J,Z]=m(k),ee=new Uint32Array((X-L)*(Z-J)*6);let me=0;for(let Q=L;Q<X;Q++)for(let H=J;H<Z;H++){const $=Q*t+H,re=Q*t+(H+1)%t,oe=$+t,de=re+t;ee[me++]=$,ee[me++]=re,ee[me++]=oe,ee[me++]=re,ee[me++]=de,ee[me++]=oe}const K=new At;K.setAttribute("position",f),K.setAttribute("normal",M),K.setIndex(new tt(ee,1)),K.boundingSphere=new Ur;const j=new vt(K,e);j.name=`far-shell-b${B}s${k}`,g.push({mesh:j,k0:L,k1:X,s0:J,s1:Z}),p.add(j)}}const S=()=>{for(const B of g){let L=1/0,X=1/0,k=1/0,J=-1/0,Z=-1/0,ee=-1/0;for(let K=B.k0;K<=B.k1;K++)for(let j=B.s0;j<=B.s1;j++){const Q=(K*t+j%t)*3,H=c[Q],$=c[Q+1],re=c[Q+2];H<L&&(L=H),H>J&&(J=H),$<X&&(X=$),$>Z&&(Z=$),re<k&&(k=re),re>ee&&(ee=re)}const me=B.mesh.geometry.boundingSphere;me.center.set((L+J)/2,(X+Z)/2,(k+ee)/2),me.radius=.5*Math.hypot(J-L,Z-X,ee-k)}},x=p;let D=0,y=0,R=!1,N=!0;x.visible=!1;const b=(B,L)=>{D=B,y=L,x.position.set(D,0,y),f.needsUpdate=!0,M.needsUpdate=!0,S(),R=!0,x.visible=N};function v(B,L){Id(n,a,0,l,B,L,c,h),b(B,L)}const w=new Float32Array(l*3),O=new Float32Array(l*3);function C(B,L){let X=0;const k=()=>X>=l;return{step:Z=>{if(k())return!0;const ee=Math.min(l,X+Math.max(1,Z)*_.FAR_SHELL_STEP_VERTS);return Id(n,a,X,ee,B,L,w,O),X=ee,k()?(c.set(w),h.set(O),b(B,L),!0):!1},done:k}}const W=(B,L=2166136261)=>{for(let X=0;X<B.length;X++)L^=B[X],L=Math.imul(L,16777619)>>>0;return L>>>0};return{mesh:x,rebuild:v,beginRebuild:C,tables:()=>a,commitBands:(B,L,X)=>{for(const k of B){const J=k.k0*t*3;c.set(k.pos,J),h.set(k.nrm,J)}b(L,X)},setVisible:B=>{N=B,x.visible=B&&R},visible:()=>x.visible,built:()=>R,digest:()=>({n:l,hash:W(new Uint8Array(h.buffer,h.byteOffset,h.byteLength),W(new Uint8Array(c.buffer,c.byteOffset,c.byteLength))).toString(16).padStart(8,"0")}),centre:()=>({x:D,z:y}),dispose:()=>{for(const B of g)B.mesh.geometry.dispose()},pieces:()=>({total:g.length,tris:(r-1)*t*2})}}var hn=Uint8Array,xs=Uint16Array,q1=Int32Array,Bp=new hn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gp=new hn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Z1=new hn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zp=function(n,e){for(var t=new xs(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new q1(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Hp=zp(Bp,2),Vp=Hp.b,j1=Hp.r;Vp[28]=258,j1[258]=28;var Q1=zp(Gp,0),J1=Q1.b,wh=new xs(32768);for(var Dt=0;Dt<32768;++Dt){var ki=(Dt&43690)>>1|(Dt&21845)<<1;ki=(ki&52428)>>2|(ki&13107)<<2,ki=(ki&61680)>>4|(ki&3855)<<4,wh[Dt]=((ki&65280)>>8|(ki&255)<<8)>>1}var fo=function(n,e,t){for(var i=n.length,r=0,s=new xs(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new xs(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new xs(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],h=e-n[r],u=o[n[r]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[wh[u]>>l]=c}else for(a=new xs(i),r=0;r<i;++r)n[r]&&(a[r]=wh[o[n[r]-1]++]>>15-n[r]);return a},Do=new hn(288);for(var Dt=0;Dt<144;++Dt)Do[Dt]=8;for(var Dt=144;Dt<256;++Dt)Do[Dt]=9;for(var Dt=256;Dt<280;++Dt)Do[Dt]=7;for(var Dt=280;Dt<288;++Dt)Do[Dt]=8;var Wp=new hn(32);for(var Dt=0;Dt<32;++Dt)Wp[Dt]=5;var ex=fo(Do,9,1),tx=fo(Wp,5,1),Jl=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Vn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},ec=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},nx=function(n){return(n+7)/8|0},Da=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new hn(n.subarray(e,t))},ix=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fn=function(n,e,t){var i=new Error(e||ix[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,fn),!t)throw i;return i},$p=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new hn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new hn(r*3));var c=function(Me){var V=t.length;if(Me>V){var Ae=new hn(Math.max(V*2,Me));Ae.set(t),t=Ae}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,M=e.d,E=e.m,m=e.n,p=r*8;do{if(!f){h=Vn(n,u,1);var g=Vn(n,u+1,3);if(u+=3,g)if(g==1)f=ex,M=tx,E=9,m=5;else if(g==2){var y=Vn(n,u,31)+257,R=Vn(n,u+10,15)+4,N=y+Vn(n,u+5,31)+1;u+=14;for(var b=new hn(N),v=new hn(19),w=0;w<R;++w)v[Z1[w]]=Vn(n,u+w*3,7);u+=R*3;for(var O=Jl(v),C=(1<<O)-1,W=fo(v,O,1),w=0;w<N;){var B=W[Vn(n,u,C)];u+=B&15;var S=B>>4;if(S<16)b[w++]=S;else{var L=0,X=0;for(S==16?(X=3+Vn(n,u,3),u+=2,L=b[w-1]):S==17?(X=3+Vn(n,u,7),u+=3):S==18&&(X=11+Vn(n,u,127),u+=7);X--;)b[w++]=L}}var k=b.subarray(0,y),J=b.subarray(y);E=Jl(k),m=Jl(J),f=fo(k,E,1),M=fo(J,m,1)}else fn(1);else{var S=nx(u)+4,x=n[S-4]|n[S-3]<<8,D=S+x;if(D>r){l&&fn(0);break}a&&c(d+x),t.set(n.subarray(S,D),d),e.b=d+=x,e.p=u=D*8,e.f=h;continue}if(u>p){l&&fn(0);break}}a&&c(d+131072);for(var Z=(1<<E)-1,ee=(1<<m)-1,me=u;;me=u){var L=f[ec(n,u)&Z],K=L>>4;if(u+=L&15,u>p){l&&fn(0);break}if(L||fn(2),K<256)t[d++]=K;else if(K==256){me=u,f=null;break}else{var j=K-254;if(K>264){var w=K-257,Q=Bp[w];j=Vn(n,u,(1<<Q)-1)+Vp[w],u+=Q}var H=M[ec(n,u)&ee],$=H>>4;H||fn(3),u+=H&15;var J=J1[$];if($>3){var Q=Gp[$];J+=ec(n,u)&(1<<Q)-1,u+=Q}if(u>p){l&&fn(0);break}a&&c(d+131072);var re=d+j;if(d<J){var oe=s-J,de=Math.min(J,re);for(oe+d<0&&fn(3);d<de;++d)t[d]=i[oe+d]}for(;d<re;++d)t[d]=t[d-J]}}e.l=f,e.p=me,e.b=d,e.f=h,f&&(h=1,e.m=E,e.d=M,e.n=m)}while(!h);return d!=t.length&&o?Da(t,0,d):t.subarray(0,d)},rx=new hn(0),Xp=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&fn(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&fn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2},tc=function(){function n(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var i=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:i?i.length:0},this.o=new hn(32768),this.p=new hn(0),i&&this.o.set(i)}return n.prototype.e=function(e){if(this.ondata||fn(5),this.d&&fn(4),!this.p.length)this.p=e;else if(e.length){var t=new hn(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},n.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,i=$p(this.p,this.s,this.o);this.ondata(Da(i,t,this.s.b),this.d),this.o=Da(i,this.s.b-32768),this.s.b=this.o.length,this.p=Da(this.p,this.s.p/8|0),this.s.p&=7},n.prototype.push=function(e,t){this.e(e),this.c(t)},n}(),Od=function(){function n(e,t){tc.call(this,e,t),this.v=e&&e.dictionary?2:1}return n.prototype.push=function(e,t){if(tc.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray(Xp(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&fn(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),tc.prototype.c.call(this,t)},n}();function sx(n,e){return $p(n.subarray(Xp(n,e),-4),{i:2},e,e)}var ox=typeof TextDecoder<"u"&&new TextDecoder,ax=0;try{ox.decode(rx,{stream:!0}),ax=1}catch{}function Pd(n,e="utf8"){return new TextDecoder(e).decode(n)}const lx=new TextEncoder;function cx(n){return lx.encode(n)}const hx=1024*8,ux=(()=>{const n=new Uint8Array(4),e=new Uint32Array(n.buffer);return!((e[0]=1)&n[0])})(),nc={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class pu{constructor(e=hx,t={}){rt(this,"buffer");rt(this,"byteLength");rt(this,"byteOffset");rt(this,"length");rt(this,"offset");rt(this,"lastWrittenByte");rt(this,"littleEndian");rt(this,"_data");rt(this,"_mark");rt(this,"_marks");let i=!1;typeof e=="number"?e=new ArrayBuffer(e):(i=!0,this.lastWrittenByte=e.byteLength);const r=t.offset?t.offset>>>0:0,s=e.byteLength-r;let o=r;(ArrayBuffer.isView(e)||e instanceof pu)&&(e.byteLength!==e.buffer.byteLength&&(o=e.byteOffset+r),e=e.buffer),i?this.lastWrittenByte=s:this.lastWrittenByte=0,this.buffer=e,this.length=s,this.byteLength=s,this.byteOffset=o,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,o,s),this._mark=0,this._marks=[]}available(e=1){return this.offset+e<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(e=1){return this.offset+=e,this}back(e=1){return this.offset-=e,this}seek(e){return this.offset=e,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const e=this._marks.pop();if(e===void 0)throw new Error("Mark stack empty");return this.seek(e),this}rewind(){return this.offset=0,this}ensureAvailable(e=1){if(!this.available(e)){const i=(this.offset+e)*2,r=new Uint8Array(i);r.set(new Uint8Array(this.buffer)),this.buffer=r.buffer,this.length=i,this.byteLength=i,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(e=1){return this.readArray(e,"uint8")}readArray(e,t){const i=nc[t].BYTES_PER_ELEMENT*e,r=this.byteOffset+this.offset,s=this.buffer.slice(r,r+i);if(this.littleEndian===ux&&t!=="uint8"&&t!=="int8"){const a=new Uint8Array(this.buffer.slice(r,r+i));a.reverse();const l=new nc[t](a.buffer);return this.offset+=i,l.reverse(),l}const o=new nc[t](s);return this.offset+=i,o}readInt16(){const e=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}readUint16(){const e=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,e}readInt32(){const e=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}readUint32(){const e=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}readFloat32(){const e=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}readFloat64(){const e=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}readBigInt64(){const e=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,e}readBigUint64(){const e=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,e}readChar(){return String.fromCharCode(this.readInt8())}readChars(e=1){let t="";for(let i=0;i<e;i++)t+=this.readChar();return t}readUtf8(e=1){return Pd(this.readBytes(e))}decodeText(e=1,t="utf8"){return Pd(this.readBytes(e),t)}writeBoolean(e){return this.writeUint8(e?255:0),this}writeInt8(e){return this.ensureAvailable(1),this._data.setInt8(this.offset++,e),this._updateLastWrittenByte(),this}writeUint8(e){return this.ensureAvailable(1),this._data.setUint8(this.offset++,e),this._updateLastWrittenByte(),this}writeByte(e){return this.writeUint8(e)}writeBytes(e){this.ensureAvailable(e.length);for(let t=0;t<e.length;t++)this._data.setUint8(this.offset++,e[t]);return this._updateLastWrittenByte(),this}writeInt16(e){return this.ensureAvailable(2),this._data.setInt16(this.offset,e,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(e){return this.ensureAvailable(2),this._data.setUint16(this.offset,e,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(e){return this.ensureAvailable(4),this._data.setInt32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(e){return this.ensureAvailable(4),this._data.setUint32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(e){return this.ensureAvailable(4),this._data.setFloat32(this.offset,e,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(e){return this.ensureAvailable(8),this._data.setFloat64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(e){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(e){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,e,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(e){return this.writeUint8(e.charCodeAt(0))}writeChars(e){for(let t=0;t<e.length;t++)this.writeUint8(e.charCodeAt(t));return this}writeUtf8(e){return this.writeBytes(cx(e))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}const Kp=[];for(let n=0;n<256;n++){let e=n;for(let t=0;t<8;t++)e&1?e=3988292384^e>>>1:e=e>>>1;Kp[n]=e}const Ld=4294967295;function dx(n,e,t){let i=n;for(let r=0;r<t;r++)i=Kp[(i^e[r])&255]^i>>>8;return i}function fx(n,e){return(dx(Ld,n,e)^Ld)>>>0}function Ud(n,e,t){const i=n.readUint32(),r=fx(new Uint8Array(n.buffer,n.byteOffset+n.offset-e-4,e),e);if(r!==i)throw new Error(`CRC mismatch for chunk ${t}. Expected ${i}, found ${r}`)}function Yp(n,e,t){for(let i=0;i<t;i++)e[i]=n[i]}function qp(n,e,t,i){let r=0;for(;r<i;r++)e[r]=n[r];for(;r<t;r++)e[r]=n[r]+e[r-i]&255}function Zp(n,e,t,i){let r=0;if(t.length===0)for(;r<i;r++)e[r]=n[r];else for(;r<i;r++)e[r]=n[r]+t[r]&255}function jp(n,e,t,i,r){let s=0;if(t.length===0){for(;s<r;s++)e[s]=n[s];for(;s<i;s++)e[s]=n[s]+(e[s-r]>>1)&255}else{for(;s<r;s++)e[s]=n[s]+(t[s]>>1)&255;for(;s<i;s++)e[s]=n[s]+(e[s-r]+t[s]>>1)&255}}function Qp(n,e,t,i,r){let s=0;if(t.length===0){for(;s<r;s++)e[s]=n[s];for(;s<i;s++)e[s]=n[s]+e[s-r]&255}else{for(;s<r;s++)e[s]=n[s]+t[s]&255;for(;s<i;s++)e[s]=n[s]+px(e[s-r],t[s],t[s-r])&255}}function px(n,e,t){const i=n+e-t,r=Math.abs(i-n),s=Math.abs(i-e),o=Math.abs(i-t);return r<=s&&r<=o?n:s<=o?e:t}function mx(n,e,t,i,r,s){switch(n){case 0:Yp(e,t,r);break;case 1:qp(e,t,r,s);break;case 2:Zp(e,t,i,r);break;case 3:jp(e,t,i,r,s);break;case 4:Qp(e,t,i,r,s);break;default:throw new Error(`Unsupported filter: ${n}`)}}const gx=new Uint16Array([255]),_x=new Uint8Array(gx.buffer),Mx=_x[0]===255;function Ex(n){const{data:e,width:t,height:i,channels:r,depth:s}=n,o=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],a=Math.ceil(s/8)*r,l=new Uint8Array(i*t*a);let c=0;for(let h=0;h<7;h++){const u=o[h],d=Math.ceil((t-u.x)/u.xStep),f=Math.ceil((i-u.y)/u.yStep);if(d<=0||f<=0)continue;const M=d*a,E=new Uint8Array(M);for(let m=0;m<f;m++){const p=e[c++],g=e.subarray(c,c+M);c+=M;const S=new Uint8Array(M);mx(p,g,S,E,M,a),E.set(S);for(let x=0;x<d;x++){const D=u.x+x*u.xStep,y=u.y+m*u.yStep;if(!(D>=t||y>=i))for(let R=0;R<a;R++)l[(y*t+D)*a+R]=S[x*a+R]}}}if(s===16){const h=new Uint16Array(l.buffer);if(Mx)for(let u=0;u<h.length;u++)h[u]=vx(h[u]);return h}else return l}function vx(n){return(n&255)<<8|n>>8&255}const xx=new Uint16Array([255]),Sx=new Uint8Array(xx.buffer),Ax=Sx[0]===255,wx=new Uint8Array(0);function Fd(n){const{data:e,width:t,height:i,channels:r,depth:s}=n,o=Math.ceil(s/8)*r,a=Math.ceil(s/8*r*t),l=new Uint8Array(i*a);let c=wx,h=0,u,d;for(let f=0;f<i;f++){switch(u=e.subarray(h+1,h+1+a),d=l.subarray(f*a,(f+1)*a),e[h]){case 0:Yp(u,d,a);break;case 1:qp(u,d,a,o);break;case 2:Zp(u,d,c,a);break;case 3:jp(u,d,c,a,o);break;case 4:Qp(u,d,c,a,o);break;default:throw new Error(`Unsupported filter: ${e[h]}`)}c=d,h+=a+1}if(s===16){const f=new Uint16Array(l.buffer);if(Ax)for(let M=0;M<f.length;M++)f[M]=yx(f[M]);return f}else return l}function yx(n){return(n&255)<<8|n>>8&255}const Na=Uint8Array.of(137,80,78,71,13,10,26,10);function kd(n){if(!Rx(n.readBytes(Na.length)))throw new Error("wrong PNG signature")}function Rx(n){if(n.length<Na.length)return!1;for(let e=0;e<Na.length;e++)if(n[e]!==Na[e])return!1;return!0}const bx="tEXt",Tx=0,Jp=new TextDecoder("latin1");function Cx(n){if(Nx(n),n.length===0||n.length>79)throw new Error("keyword length must be between 1 and 79")}const Dx=/^[\u0000-\u00FF]*$/;function Nx(n){if(!Dx.test(n))throw new Error("invalid latin1 text")}function Ix(n,e,t){const i=em(e);n[i]=Ox(e,t-i.length-1)}function em(n){for(n.mark();n.readByte()!==Tx;);const e=n.offset;n.reset();const t=Jp.decode(n.readBytes(e-n.offset-1));return n.skip(1),Cx(t),t}function Ox(n,e){return Jp.decode(n.readBytes(e))}const Mn={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},ic={UNKNOWN:-1,DEFLATE:0},Bd={UNKNOWN:-1,ADAPTIVE:0},rc={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},na={NONE:0,BACKGROUND:1,PREVIOUS:2},sc={SOURCE:0,OVER:1};class Px extends pu{constructor(t,i={}){super(t);rt(this,"_checkCrc");rt(this,"_inflator");rt(this,"_png");rt(this,"_apng");rt(this,"_end");rt(this,"_hasPalette");rt(this,"_palette");rt(this,"_hasTransparency");rt(this,"_transparency");rt(this,"_compressionMethod");rt(this,"_filterMethod");rt(this,"_interlaceMethod");rt(this,"_colorType");rt(this,"_isAnimated");rt(this,"_numberOfFrames");rt(this,"_numberOfPlays");rt(this,"_frames");rt(this,"_writingDataChunks");rt(this,"_chunks");rt(this,"_inflatorResult");const{checkCrc:r=!1}=i;this._checkCrc=r,this._inflator=new Od((s,o)=>{if(this._chunks.push(s),o){const a=this._chunks.reduce((c,h)=>c+h.length,0);this._inflatorResult=new Uint8Array(a);let l=0;for(const c of this._chunks)this._inflatorResult.set(c,l),l+=c.length;this._chunks=[]}}),this._chunks=[],this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=ic.UNKNOWN,this._filterMethod=Bd.UNKNOWN,this._interlaceMethod=rc.UNKNOWN,this._colorType=Mn.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this._inflatorResult=new Uint8Array(0),this.setBigEndian()}decode(){for(kd(this);!this._end;){const t=this.readUint32(),i=this.readChars(4);this.decodeChunk(t,i)}return this._inflator.push(new Uint8Array(0),!0),this.decodeImage(),this._png}decodeApng(){for(kd(this);!this._end;){const t=this.readUint32(),i=this.readChars(4);this.decodeApngChunk(t,i)}return this.decodeApngImage(),this._apng}decodeChunk(t,i){const r=this.offset;switch(i){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(t);break;case"IDAT":this.decodeIDAT(t);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(t);break;case"iCCP":this.decodeiCCP(t);break;case bx:Ix(this._png.text,this,t);break;case"pHYs":this.decodepHYs();break;default:this.skip(t);break}if(this.offset-r!==t)throw new Error(`Length mismatch while decoding chunk ${i}`);this._checkCrc?Ud(this,t+4,i):this.skip(4)}decodeApngChunk(t,i){const r=this.offset;switch(i!=="fdAT"&&i!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),i){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(t);break;default:this.decodeChunk(t,i),this.offset=r+t;break}if(this.offset-r!==t)throw new Error(`Length mismatch while decoding chunk ${i}`);this._checkCrc?Ud(this,t+4,i):this.skip(4)}decodeIHDR(){const t=this._png;t.width=this.readUint32(),t.height=this.readUint32(),t.depth=Lx(this.readUint8());const i=this.readUint8();this._colorType=i;let r;switch(i){case Mn.GREYSCALE:r=1;break;case Mn.TRUECOLOUR:r=3;break;case Mn.INDEXED_COLOUR:r=1;break;case Mn.GREYSCALE_ALPHA:r=2;break;case Mn.TRUECOLOUR_ALPHA:r=4;break;case Mn.UNKNOWN:default:throw new Error(`Unknown color type: ${i}`)}if(this._png.channels=r,this._compressionMethod=this.readUint8(),this._compressionMethod!==ic.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const t={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(t)}decodePLTE(t){if(t%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${t}`);const i=t/3;this._hasPalette=!0;const r=[];this._palette=r;for(let s=0;s<i;s++)r.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(t){this._writingDataChunks=!0;const i=t,r=this.offset+this.byteOffset;try{this._inflator.push(new Uint8Array(this.buffer,r,i),!1)}catch(s){throw new Error("Error while decompressing the data:",{cause:s})}this.skip(t)}decodeFDAT(t){this._writingDataChunks=!0;let i=t,r=this.offset+this.byteOffset;r+=4,i-=4;try{this._inflator.push(new Uint8Array(this.buffer,r,i),!1)}catch(s){throw new Error("Error while decompressing the data:",{cause:s})}this.skip(t)}decodetRNS(t){switch(this._colorType){case Mn.GREYSCALE:case Mn.TRUECOLOUR:{if(t%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);if(t/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(t/2);for(let i=0;i<t/2;i++)this._transparency[i]=this.readUint16();break}case Mn.INDEXED_COLOUR:{if(t>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);let i=0;for(;i<t;i++){const r=this.readByte();this._palette[i].push(r)}for(;i<this._palette.length;i++)this._palette[i].push(255);break}case Mn.UNKNOWN:case Mn.GREYSCALE_ALPHA:case Mn.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(t){const i=em(this),r=this.readUint8();if(r!==ic.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${r}`);const s=this.readBytes(t-i.length-2);this._png.iccEmbeddedProfile={name:i,profile:sx(s)}}decodepHYs(){const t=this.readUint32(),i=this.readUint32(),r=this.readByte();this._png.resolution={x:t,y:i,unit:r}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let t=0;t<this._numberOfFrames;t++){const i={sequenceNumber:this._frames[t].sequenceNumber,delayNumber:this._frames[t].delayNumber,delayDenominator:this._frames[t].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},r=this._frames.at(t);if(r){if(r.data=Fd({data:r.data,width:r.width,height:r.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),t===0||r.xOffset===0&&r.yOffset===0&&r.width===this._png.width&&r.height===this._png.height)i.data=r.data;else{const s=this._apng.frames.at(t-1);this.disposeFrame(r,s,i),this.addFrameDataToCanvas(i,r)}this._apng.frames.push(i)}}return this._apng}disposeFrame(t,i,r){switch(t.disposeOp){case na.NONE:break;case na.BACKGROUND:for(let s=0;s<this._png.height;s++)for(let o=0;o<this._png.width;o++){const a=(s*t.width+o)*this._png.channels;for(let l=0;l<this._png.channels;l++)r.data[a+l]=0}break;case na.PREVIOUS:r.data.set(i.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(t,i){const r=1<<this._png.depth,s=(o,a)=>{const l=((o+i.yOffset)*this._png.width+i.xOffset+a)*this._png.channels,c=(o*i.width+a)*this._png.channels;return{index:l,frameIndex:c}};switch(i.blendOp){case sc.SOURCE:for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){const{index:l,frameIndex:c}=s(o,a);for(let h=0;h<this._png.channels;h++)t.data[l+h]=i.data[c+h]}break;case sc.OVER:for(let o=0;o<i.height;o++)for(let a=0;a<i.width;a++){const{index:l,frameIndex:c}=s(o,a);for(let h=0;h<this._png.channels;h++){const u=i.data[c+this._png.channels-1]/r,d=h%(this._png.channels-1)===0?1:i.data[c+h],f=Math.floor(u*d+(1-u)*t.data[l+h]);t.data[l+h]+=f}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){const t=this._inflatorResult;if(this._filterMethod!==Bd.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===rc.NO_INTERLACE)this._png.data=Fd({data:t,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===rc.ADAM7)this._png.data=Ex({data:t,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){this._inflator.push(new Uint8Array(0),!0);const t=this._inflatorResult,i=this._frames.at(-1);i?i.data=t:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:na.NONE,blendOp:sc.SOURCE,data:t}),this._inflator=new Od((r,s)=>{if(this._chunks.push(r),s){const o=this._chunks.reduce((l,c)=>l+c.length,0);this._inflatorResult=new Uint8Array(o);let a=0;for(const l of this._chunks)this._inflatorResult.set(l,a),a+=l.length;this._chunks=[]}}),this._chunks=[],this._writingDataChunks=!1}}function Lx(n){if(n!==1&&n!==2&&n!==4&&n!==8&&n!==16)throw new Error(`invalid bit depth: ${n}`);return n}function Ls(n,e){return new Px(n,e).decode()}const Gd=2,tm="/fixtures/tiles/manifest.json";async function Ux(n=tm){const e=await fetch(n);if(!e.ok)throw new Error(`fixture manifest missing: ${n} (${e.status})`);return Fx(await e.json(),n)}function Fx(n,e){const t=n.version;if(t!==Gd)throw new Error(`fixture manifest ${e} declares version ${JSON.stringify(t)}; this build reads ${Gd}. Re-snapshot the pack (npm run fixtures -- --line=<id> …). Without this check the pack loads, and the first thing to fail is the corridorKey compare — which reports key DRIFT for a pack whose actual problem is its schema.`);return n}function kx(n,e,t){return`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${n}/${e}/${t}.png`}function nm(n,e,t,i){const r=new Float32Array(e*t);for(let s=0;s<e*t;s++){const o=s*i;r[s]=n[o]*256+n[o+1]+n[o+2]/256-32768}return r}function im(n){const e=Ls(n);if(e.depth!==8)throw new Error(`terrarium tile must be 8-bit, got ${e.depth}`);if(e.channels!==3&&e.channels!==4)throw new Error(`terrarium tile must be RGB(A), got ${e.channels} channels`);return{width:e.width,height:e.height,elevations:nm(e.data,e.width,e.height,e.channels)}}function Bx(){return globalThis.__DATA_MODE==="fixtures"}const rm="/fixtures/tiles";function sm(n,e,t,i=rm){return`${i}/terrarium-${n}-${e}-${t}.png`}class Gx{constructor(e=rm){this.root=e}async getTileBytes(e,t,i){const r=sm(e,t,i,this.root),s=await fetch(r);if(!s.ok)throw new Error(`fixture tile missing: ${r} (${s.status})`);return new Uint8Array(await s.arrayBuffer())}}class yh{async getTileBytes(e,t,i){if(Bx())throw new Error(`live tile fetch attempted in fixtures mode: ${e}/${t}/${i}`);const r=await fetch(kx(e,t,i));if(!r.ok)throw new Error(`terrarium fetch failed: ${e}/${t}/${i} (${r.status})`);return new Uint8Array(await r.arrayBuffer())}}const dt=256,zx=["near","far"];function Rh(n){const e=zx.indexOf(n);if(e<0)throw new Error(`roleRank: unknown TileRole ${JSON.stringify(n)} — add it to TILE_ROLE_ORDER, which is what fixes pack ORDER as well as this lookup`);return e}function om(n,e){return Rh(n.role)-Rh(e.role)||e.z-n.z||n.y-e.y||n.x-e.x}function mr(n,e,t){return`${n}/${e}/${t}`}function bh(n,e,t){const i=2**t,r=e*Math.PI/180;return{xf:(n+180)/360*i,yf:(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*i}}function Ir(n,e,t){const i=2**t,r=(n+180)/360*i,s=e*Math.PI/180,o=(1-Math.log(Math.tan(s)+1/Math.cos(s))/Math.PI)/2*i,a=Math.floor(r),l=Math.floor(o);return{x:a,y:l,z:t,px:Math.min(dt-1,Math.floor((r-a)*dt)),py:Math.min(dt-1,Math.floor((o-l)*dt))}}function am(n,e,t){const i=2**t,r=Math.PI-2*Math.PI*e/i;return{lon:n/i*360-180,lat:180/Math.PI*Math.atan(.5*(Math.exp(r)-Math.exp(-r)))}}function Th(n,e){return 156543.03392*Math.cos(n*Math.PI/180)/2**e}const mu=111320;function gu(n,e){return{lat:n,lon:e,metersPerDegLon:mu*Math.cos(n*Math.PI/180)}}function yn(n,e,t){return{lat:n.lat-t/mu,lon:n.lon+e/n.metersPerDegLon}}function oi(n,e,t){return{x:(t-n.lon)*n.metersPerDegLon,z:(n.lat-e)*mu}}function xi(n,e,t,i){const{lat:r,lon:s}=yn(n,e,t),o=bh(s,r,i);return{gx:o.xf*dt,gy:o.yf*dt}}const Hx=2*Math.PI;function ml(n,e){return Math.hypot(e.x-n.x,e.z-n.z)}function lm(n,e){const t=Math.atan2(e.x-n.x,n.z-e.z);return t<0?t+Hx:t}function cm(n,e,t){const i=e.x-n.x,r=e.z-n.z,s=Math.hypot(i,r),o=t.x-n.x,a=t.z-n.z,l=(o*i+a*r)/s,c=(i*a-r*o)/s,h=l<0?Math.hypot(o,a):l>s?ml(e,t):Math.abs(c);return{along:Math.min(Math.max(l,0),s),xtdSigned:c,dist:h}}const Vx=6378137,ji=Math.PI/180;function _u(n,e){const t=n.lat*ji,i=e.lat*ji,r=Math.sin((i-t)/2)**2+Math.cos(t)*Math.cos(i)*Math.sin((e.lon-n.lon)*ji/2)**2;return 2*Vx*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))}function hm(n,e){const t=n.lat*ji,i=e.lat*ji,r=(e.lon-n.lon)*ji,s=Math.cos(i)*Math.cos(r),o=Math.cos(i)*Math.sin(r),a=Math.atan2(Math.sin(t)+Math.sin(i),Math.hypot(Math.cos(t)+s,o)),l=n.lon+Math.atan2(o,Math.cos(t)+s)/ji;return{lat:a/ji,lon:(l+540)%360-180}}function um(n,e,t){if(!t){const s=hm(n,e);t=gu(s.lat,s.lon)}const i=oi(t,n.lat,n.lon),r=oi(t,e.lat,e.lon);return{frame:t,a:i,b:r,lengthM:ml(i,r),bearingRad:lm(i,r)}}function zd(n,e,t,i,r,s){const o=yn(n,e,i),a=yn(n,t,r),l=Ir(o.lon,o.lat,s),c=Ir(a.lon,a.lat,s);return{x0:Math.min(l.x,c.x),x1:Math.max(l.x,c.x),y0:Math.min(l.y,c.y),y1:Math.max(l.y,c.y)}}function Hd(n,e,t,i,r){for(let s=t.y0;s<=t.y1;s++)for(let o=t.x0;o<=t.x1;o++){const a=`${i}/${o}/${s}`;e.has(a)||(e.add(a),n.push({z:i,x:o,y:s,role:r}))}}function dm(n){const e=hm(n.a,n.b),t=gu(e.lat,e.lon),i=um(n.a,n.b,t),r=Math.min(i.a.x,i.b.x)-n.nearMarginM,s=Math.max(i.a.x,i.b.x)+n.nearMarginM,o=Math.min(i.a.z,i.b.z)-n.nearMarginM,a=Math.max(i.a.z,i.b.z)+n.nearMarginM,l=[],c=new Set;Hd(l,c,zd(t,r,s,o,a,n.nearZoom),n.nearZoom,"near");for(const h of n.coarse)Hd(l,c,zd(t,-h.radiusM,h.radiusM,-h.radiusM,h.radiusM,h.zoom),h.zoom,"far");return l.sort(om),{spec:n,frame:t,midpoint:e,lengthM:_u(n.a,n.b),bearingRad:i.bearingRad,a:i.a,b:i.b,tiles:l}}function Wx(n){return`${n.spec.nearZoom}/${n.spec.coarse.map(e=>e.zoom).join("+")}/${n.tiles.length}/${n.tiles.map(e=>`${e.z}.${e.x}.${e.y}`).join(",")}`}const $x=(()=>{let n=0,e=0;for(let t=0;t<=1e3;t++){const i=t/1e3,r=i*i,s=r*i,o=[.5*(-i+2*r-s),.5*(2-5*r+3*s),.5*(i+4*r-3*s),.5*(-r+s)];let a=0,l=0;for(const c of o)c>0?a+=c:l-=c;a>n&&(n=a),l>e&&(e=l)}return n*n+e*e})();class No{constructor(e){rt(this,"tiles",new Map);rt(this,"primaryKey",null);rt(this,"primaryBounds",null);rt(this,"hiM",-1/0);rt(this,"loM",1/0);this.zoom=e}get maxSampleBoundM(){const e=this.boundParts;return e.maxPost+e.overshoot}get boundParts(){if(!Number.isFinite(this.hiM))return{maxPost:0,overshoot:0};const e=Math.max(0,this.hiM),t=Math.min(0,this.loM);return{maxPost:e,overshoot:(e-t)*($x-1)}}addTile(e,t,i,r=!1){this.tiles.set(`${e}/${t}`,i);const s=i.elevations;for(let o=0;o<s.length;o++){const a=s[o];a>this.hiM&&(this.hiM=a),a<this.loM&&(this.loM=a)}(r||this.primaryBounds===null)&&(r&&(this.primaryKey=`${e}/${t}`),this.primaryBounds={gx0:e*dt,gy0:t*dt,gx1:e*dt+dt-1,gy1:t*dt+dt-1})}removeTile(e,t){this.tiles.delete(`${e}/${t}`)}get tileCount(){return this.tiles.size}snapshot(){const e=[];for(const[t,i]of this.tiles){const[r,s]=t.split("/").map(Number);e.push({x:r,y:s,width:i.width,height:i.height,elevations:i.elevations})}return{zoom:this.zoom,tiles:e,primaryKey:this.primaryKey}}static fromSnapshot(e){const t=new No(e.zoom);for(const i of e.tiles)t.addTile(i.x,i.y,{width:i.width,height:i.height,elevations:i.elevations},`${i.x}/${i.y}`===e.primaryKey);return t}hasTileAtPixel(e,t){return this.tiles.has(`${Math.floor(e/dt)}/${Math.floor(t/dt)}`)}pixel(e,t){let i=Math.floor(e/dt),r=Math.floor(t/dt),s=this.tiles.get(`${i}/${r}`);if(!s){const l=this.primaryBounds;if(!l||(e=Math.min(l.gx1,Math.max(l.gx0,e)),t=Math.min(l.gy1,Math.max(l.gy0,t)),i=Math.floor(e/dt),r=Math.floor(t/dt),s=this.tiles.get(`${i}/${r}`),!s))return 0}const o=e-i*dt,a=t-r*dt;return s.elevations[a*s.width+o]}}function Vd(n,e,t,i,r){const s=r*r,o=s*r;return .5*(2*e+(-n+t)*r+(2*n-5*e+4*t-i)*s+(-n+3*e-3*t+i)*o)}function Wd(n,e,t){const i=e-.5,r=t-.5,s=Math.floor(i),o=Math.floor(r),a=i-s,l=r-o,c=[];for(let h=-1;h<=2;h++)c.push(Vd(n.pixel(s-1,o+h),n.pixel(s,o+h),n.pixel(s+1,o+h),n.pixel(s+2,o+h),a));return Vd(c[0],c[1],c[2],c[3],l)}const fm=50,Xx=new Set([10,20,30,40,60,70,100]);function Kx(n,e,t,i=_.RENATURE_COVER_MAX_R){const r=n.slice();let s=0,o=0,a=0;const l=new Map;for(let c=0;c<t;c++)for(let h=0;h<e;h++){if(n[c*e+h]!==fm)continue;s++;let u=-1;for(let d=2;d<=i&&u<0;d+=2){l.clear();for(let M=-d;M<=d;M++){const E=c+M;if(!(E<0||E>=t))for(let m=-d;m<=d;m++){const p=h+m;if(p<0||p>=e)continue;const g=n[E*e+p];Xx.has(g)&&l.set(g,(l.get(g)??0)+1)}}let f=0;for(const[M,E]of l)(E>f||E===f&&M<u)&&(f=E,u=M)}u<0&&(u=30,a++),r[c*e+h]=u,o++}return{data:r,built:s,swapped:o,fallback:a}}function Yx(n,e,t){const{width:i,height:r,data:s,z:o}=t,a=t.x0*dt,l=t.y0*dt,c=[];for(let m=0;m<r;m++)for(let p=0;p<i;p++){if(s[m*i+p]!==fm)continue;const g=am((a+p+.5)/dt,(l+m+.5)/dt,o),S=oi(n,g.lat,g.lon);c.push([S.x,S.z])}if(c.length===0)return{levels:[...e],marked:0,patched:0,left:0};const h=Th(n.lat,o),u=1<<22;let d=0,f=0,M=0;return{levels:e.map(m=>{const p=Th(n.lat,m.zoom),g=Math.max(1,p/h*(p/h)),S=new Map;for(const[N,b]of c){const{gx:v,gy:w}=xi(n,N,b,m.zoom),O=Math.floor(v),C=Math.floor(w);if(!m.hasTileAtPixel(O,C))continue;const W=C*u+O;S.set(W,(S.get(W)??0)+1)}const x=new Set;for(const[N,b]of S)b>=_.RENATURE_PIXEL_MAJORITY*g&&x.add(N);if(d+=x.size,x.size===0)return m;const D=m.snapshot(),y=new Map,R=[];for(const N of x){const b=Math.floor(N/u),v=N-b*u;let w=null;for(const X of _.RENATURE_DEM_WINDOWS){R.length=0;for(let k=-X;k<=X;k++)for(let J=-X;J<=X;J++){const Z=v+J,ee=b+k;x.has(ee*u+Z)||!m.hasTileAtPixel(Z,ee)||R.push(m.pixel(Z,ee))}if(R.length>=3){R.sort((k,J)=>k-J),w=R[R.length>>1];break}}if(w===null){M++;continue}const O=Math.floor(v/dt),C=Math.floor(b/dt),W=`${O}/${C}`;let B=y.get(W);const L=D.tiles.find(X=>X.x===O&&X.y===C);if(!L){M++;continue}B||(B=L.elevations.slice(),y.set(W,B)),B[(b-C*dt)*L.width+(v-O*dt)]=w,f++}return y.size===0?m:No.fromSnapshot({...D,tiles:D.tiles.map(N=>{const b=y.get(`${N.x}/${N.y}`);return b?{...N,elevations:b}:N})})}),marked:d,patched:f,left:M}}function gr(n,e,t,i){let r=Math.imul(n|0,668265261)^Math.imul(e|0,374761393)^Math.imul(t|0,2654435761)^i;return r=Math.imul(r^r>>>15,625341585),r^=r>>>13,r=Math.imul(r,2246822507),((r^r>>>16)>>>0)/4294967296}function Ch(n,e){if(e===void 0||!(e>0))return 1;const t=Math.min(1,Math.max(0,(n/e-2)/2));return t*t*(3-2*t)}function qx(n){const e=n.depthM??_.RAVINE_DEPTH_M,t=n.grainAmpM??_.GRAIN_AMP_M,i=n.narrow??_.RAVINE_NARROW,r=n.jitter??_.RAVINE_JITTER,s=n.levels??_.RAVINE_LEVELS,o=[];for(let d=n.ceilM,f=0;f<s&&d>n.floorM*1.01;d/=_.RAVINE_HORTON,f++)o.push(d);const a=o.map((d,f)=>Math.pow(_.RAVINE_HORTON,-f*_.RAVINE_DEPTH_FALLOFF)),l=a.reduce((d,f)=>d+f,0)||1,c=a.map(d=>e*d/l),h=c.reduce((d,f)=>d+f,0)+t,u=d=>Math.pow((1+Math.cos(d))*.5,i);return{peakM:h,waves:o,at:(d,f,M,E,m,p)=>{if(m<=0)return 0;let g=0;for(let x=0;x<o.length;x++){const D=o[x],y=Ch(D,p);if(y<=0)continue;const R=D,N=(d+n.phaseX)/R,b=(f+n.phaseZ)/R,v=Math.floor(N),w=Math.floor(b);let O=0,C=0,W=0;for(let L=-1;L<=1;L++)for(let X=-1;X<=1;X++){const k=v+X,J=w+L,Z=(gr(k,J,x,n.seed)-.5)*r,ee=(gr(k,J,x,n.seed^1542469173)-.5)*r,me=(N-(k+.5+Z))*R,K=(b-(J+.5+ee))*R,j=(me*me+K*K)/(.5*D*(.5*D));if(j>9)continue;const Q=Math.exp(-j),H=-me*E+K*M,$=gr(k,J,x+64,n.seed)*(2*Math.PI),re=2*Math.PI*H/D+$;O+=Q*Math.cos(re),C+=Q*Math.sin(re),W+=Q}if(W<=0)continue;const B=Math.hypot(O,C)/W;g-=c[x]*m*B*y*u(Math.atan2(C,O))}const S=Ch(_.GRAIN_WAVE_M,p);if(t>0&&S>0){const x=(d+n.phaseX)/_.GRAIN_DOMAIN_M,D=(f+n.phaseZ)/_.GRAIN_DOMAIN_M,y=Math.floor(x),R=Math.floor(D),N=x-y,b=D-R,v=K=>K*K*(3-2*K),w=gr(y,R,127,n.seed),O=gr(y+1,R,127,n.seed),C=gr(y,R+1,127,n.seed),W=gr(y+1,R+1,127,n.seed),B=v(N),L=v(b),X=((w*(1-B)+O*B)*(1-L)+(C*(1-B)+W*B)*L)*Math.PI,k=Math.cos(X),J=Math.sin(X),Z=(d+n.phaseX)*k+(f+n.phaseZ)*J,ee=2*Math.PI*Z/_.GRAIN_WAVE_M,me=Math.pow((1+Math.cos(ee))*.5,_.GRAIN_NARROW)-.375;g+=t*m*S*me}return g}}}function Zx(n,e={}){const t=2*_.CHUNK_GRID_STEP_M,i=(e.windowPosts??_.TERRAIN_DETAIL_WINDOW_POSTS)*n,r=i/2,s=[];for(let a=r;a>t*1.01;a/=2)s.push(a);const o=Math.max(0,Math.min(e.ridgeOctaves??_.TERRAIN_DETAIL_RIDGE_OCTAVES,s.length)-1);return{windowM:i,ceilM:r,floorM:t,octaves:Math.max(0,Math.log2(r/t)),waves:s,gateM:s.length===0?0:s[o]}}function $d(n,e,t,i={}){const r=(i.windowPosts??_.TERRAIN_DETAIL_WINDOW_POSTS)*n,s=o=>(o%r+r)%r;return{phaseX:s(n*e),phaseZ:s(n*t)}}function En(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761)|0;return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}const Wt=n=>n*n*(3-2*n);function Xd(n,e){return Wt(Math.min(1,n/e))*Wt(Math.min(1,(1-n)/e))}function jx(){let e=0;for(let t=0;t<64;t++){const i=Wt((t+.5)/64);for(let r=0;r<64;r++){const s=Wt((r+.5)/64),o=(1-i)*(1-s),a=i*(1-s),l=(1-i)*s,c=i*s;e+=o*o+a*a+l*l+c*c}}return e/(64*64)}class Ln{constructor(e,t){rt(this,"mask");rt(this,"kx");rt(this,"kz");rt(this,"ok");rt(this,"v");const i=1<<e;this.mask=i-1,this.kx=new Int32Array(i),this.kz=new Int32Array(i),this.ok=new Uint8Array(i),this.v=new Float64Array(i*t)}slot(e,t){return(Math.imul(e,2654435761)^Math.imul(t,2246822507))>>>0&this.mask}hit(e,t,i){return this.ok[e]===1&&this.kx[e]===t&&this.kz[e]===i}claim(e,t,i){this.ok[e]=1,this.kx[e]=t,this.kz[e]=i}}const rs=14,Cn=6,Kd=2.3;function Qx(n){const e=Zx(n.demCellM,n),t=n.rmsM??_.TERRAIN_DETAIL_RMS_M,i=n.ridgeGain??_.TERRAIN_DETAIL_RIDGE_GAIN,r=e.waves.length;if(r===0||t<=0&&i<=0&&(n.ravineDepthM??_.RAVINE_DEPTH_M)<=0)return{at:()=>0,band:e,peakM:0};const{landformHeightAt:s,waterFadeAt:o,phaseX:a,phaseZ:l,seed:c}=n,h=n.taper??_.TERRAIN_DETAIL_TAPER,u=(1-h)*(1-h),d=n.H??_.TERRAIN_DETAIL_H,f=Math.min(n.ridgeOctaves??_.TERRAIN_DETAIL_RIDGE_OCTAVES,r),M=e.gateM,E=n.ridgeCap??_.TERRAIN_DETAIL_RIDGE_CAP,m=n.wander??_.TERRAIN_DETAIL_WANDER,p=n.reposeDeg??0,g=p>0?Math.tan(p*Math.PI/180):0,S=n.elevGainPerKm??0,x=n.elevRefM??500,D=n.hVary??0,y=jx(),R=[];let N=0;for(let le=0;le<r;le++){const xe=Math.pow(.5,le*d);R.push(xe),N+=xe*xe}const b=Math.sqrt(y/12*N),v=R.map(le=>t*le/b),w=n.slopeFloor??_.TERRAIN_DETAIL_SLOPE_FLOOR,O=n.slopeLoDeg??_.TERRAIN_DETAIL_SLOPE_LO_DEG,C=n.slopeHiDeg??_.TERRAIN_DETAIL_SLOPE_HI_DEG,W=n.aniso??_.TERRAIN_DETAIL_ANISO,B=qx({ceilM:e.ceilM,floorM:e.floorM,phaseX:a,phaseZ:l,seed:c,depthM:n.ravineDepthM,levels:n.ravineLevels,grainAmpM:n.grainAmpM}),L=B.peakM>0&&B.waves.length>0,X=(le,xe,De,Te)=>{const Y=o(le,xe,2*De);if(Te[4]=Y,Te[5]=0,Y<=0){Te[0]=0,Te[1]=1,Te[2]=0,Te[3]=0;return}const ce=s(le+De,xe),Se=s(le-De,xe),q=s(le,xe+De),A=s(le,xe-De),U=(ce-Se)/(2*De),T=(q-A)/(2*De),I=Math.hypot(U,T),z=Math.atan(I)*180/Math.PI,te=Math.max(0,Math.min(1,(z-O)/(C-O)));Te[0]=Y*(w+(1-w)*Wt(te)),Te[1]=I>1e-9?-U/I:1,Te[2]=I>1e-9?-T/I:0,Te[3]=Wt(Math.max(0,Math.min(1,(z-2)/7))),Te[5]=I},k=(le,xe,De)=>s(le,xe)-(s(le+De,xe)+s(le-De,xe)+s(le,xe+De)+s(le,xe-De))/4,J=(le,xe,De,Te,Y,ce)=>{const Se=5*De,q=Math.floor(le/Se),A=Math.floor(xe/Se),U=Wt(le/Se-q),T=Wt(xe/Se-A),I=En(q,A,ce^20973),z=En(q+1,A,ce^20973),te=En(q,A+1,ce^20973),he=En(q+1,A+1,ce^20973),ye=m*((I*(1-U)+z*U)*(1-T)+(te*(1-U)+he*U)*T-.5),Re=(le*Te+xe*Y)/(Kd*De*W),Ce=(-le*Y+xe*Te)/(Kd*De)+ye,Le=Math.floor(Re),ke=Math.floor(Ce),Be=Wt(Re-Le),He=Wt(Ce-ke),ot=En(Le,ke,ce),je=En(Le+1,ke,ce),ht=En(Le,ke+1,ce),ut=En(Le+1,ke+1,ce);return(ot*(1-Be)+je*Be)*(1-He)+(ht*(1-Be)+ut*Be)*He},Z=new Float64Array(Cn),ee=new Ln(rs,Cn),me=(le,xe)=>{const De=ee.slot(le,xe),Te=De*Cn;if(!ee.hit(De,le,xe)){ee.claim(De,le,xe),X(le*M-a,xe*M-l,M/2,Z);for(let Y=0;Y<Cn;Y++)ee.v[Te+Y]=Z[Y]}return Te},K=new Float64Array(Cn),j=new Float64Array(Cn),Q=new Float64Array(Cn),H=new Float64Array(Cn),$=(le,xe,De)=>{const Te=me(le,xe);for(let Y=0;Y<Cn;Y++)De[Y]=ee.v[Te+Y]},re=(le,xe,De)=>{const Te=(le+a)/M,Y=(xe+l)/M,ce=Math.floor(Te),Se=Math.floor(Y),q=Wt(Te-ce),A=Wt(Y-Se);$(ce,Se,K),$(ce+1,Se,j),$(ce,Se+1,Q),$(ce+1,Se+1,H);for(let T=0;T<Cn;T++)De[T]=(K[T]*(1-q)+j[T]*q)*(1-A)+(Q[T]*(1-q)+H[T]*q)*A;const U=Math.hypot(De[1],De[2]);U>1e-9?(De[1]/=U,De[2]/=U):(De[1]=1,De[2]=0,De[3]=0)},oe=e.waves.map(()=>new Ln(rs,5)),de=e.waves.map(()=>new Ln(rs,1)),Me=(le,xe,De)=>{const Te=de[le],Y=Te.slot(xe,De);return Te.hit(Y,xe,De)||(Te.claim(Y,xe,De),Te.v[Y]=Ie(le,xe,De,e.waves[le])),Te.v[Y]},V=(le,xe,De)=>{const Te=oe[le],Y=Te.slot(xe,De),ce=Y*5;if(!Te.hit(Y,xe,De)){Te.claim(Y,xe,De);const Se=Me(le,xe,De),q=Me(le,xe+1,De),A=Me(le,xe,De+1),U=Me(le,xe+1,De+1);Te.v[ce]=Se,Te.v[ce+1]=q,Te.v[ce+2]=A,Te.v[ce+3]=U,Te.v[ce+4]=(Se+q+A+U)/4}return ce},Ae=(le,xe)=>{const De=e.windowM,Te=Math.floor(le/De),Y=Math.floor(xe/De),ce=Wt(le/De-Te),Se=Wt(xe/De-Y),q=En(Te,Y,c^19807),A=En(Te+1,Y,c^19807),U=En(Te,Y+1,c^19807),T=En(Te+1,Y+1,c^19807);return(q*(1-ce)+A*ce)*(1-Se)+(U*(1-ce)+T*ce)*Se},ve=new Float64Array(Cn),Ie=(le,xe,De,Te)=>{const Y=xe*Te-a,ce=De*Te-l,Se=Te/2,q=c+le*40503|0;le<f?X(Y,ce,Se,ve):re(Y,ce,ve);const A=ve[0];if(A<=0)return 0;const U=En(xe,De,q),T=J(Y,ce,Te,ve[1],ve[2],q),I=U+ve[3]*(T-U);let z=v[le];D>0&&(z*=Math.pow(.5,le*(2*D*(Ae(Y,ce)-.5))));let te=1/0;if(g>0&&(te=Math.max(0,g-ve[5])*(Te/4)),le>=f){const Ce=z*A*(I-.5);return te===1/0?Ce:Math.max(-te,Math.min(te,Ce))}const he=E*Te;let ye=i;if(S!==0){const Ce=1+S*(s(Y,ce)-x)/1e3;ye*=Math.max(.25,Math.min(4,Ce))}const Re=z*A*(I-.5)+A*Math.max(-he,Math.min(he,ye*k(Y,ce,Se)));return te===1/0?Re:Math.max(-te,Math.min(te,Re))},be=e.waves.map(le=>Math.round(e.windowM/le)),Ne=Math.round(e.windowM/M),se=new Ln(rs,2),fe=n.ravineQuad??_.RAVINE_QUAD,G=e.windowM/fe,P=new Ln(rs,1),ne=new Ln(rs,5),pe=new Float64Array(Cn),ae=(le,xe)=>{const De=P.slot(le,xe);if(!P.hit(De,le,xe)){P.claim(De,le,xe);const Te=le*G-a,Y=xe*G-l;re(Te,Y,pe),P.v[De]=B.at(Te,Y,pe[1],pe[2],pe[0])}return P.v[De]},Ee=(le,xe)=>{const De=ne.slot(le,xe),Te=De*5;if(!ne.hit(De,le,xe)){ne.claim(De,le,xe);const Y=ae(le,xe),ce=ae(le+1,xe),Se=ae(le,xe+1),q=ae(le+1,xe+1);ne.v[Te]=Y,ne.v[Te+1]=ce,ne.v[Te+2]=Se,ne.v[Te+3]=q,ne.v[Te+4]=(Y+ce+Se+q)/4}return Te},Ue=(le,xe)=>{const De=se.slot(le,xe);if(!se.hit(De,le,xe)){se.claim(De,le,xe);let Te=0;for(let Se=0;Se<r;Se++){const q=be[Se];let A=0;for(let U=0;U<q;U++)for(let T=0;T<q;T++)A+=oe[Se].v[V(Se,le*q+U,xe*q+T)+4];Te+=A/(q*q)}if(L){const Se=fe;let q=0;for(let A=0;A<Se;A++)for(let U=0;U<Se;U++)q+=ne.v[Ee(le*Se+A,xe*Se+U)+4];Te+=q/(Se*Se)}let Y=0;const ce=Ne;for(let Se=0;Se<ce;Se++)for(let q=0;q<ce;q++){const A=le*ce+Se,U=xe*ce+q;Y+=(ee.v[me(A,U)+4]+ee.v[me(A+1,U)+4]+ee.v[me(A,U+1)+4]+ee.v[me(A+1,U+1)+4])/4}se.v[De*2]=Te,se.v[De*2+1]=Y/(ce*ce)}return De*2};let Pe=0;for(let le=0;le<r;le++){const xe=v[le]*(D>0?Math.pow(2,le*D):1);Pe+=xe*.5+(le<f?E*e.waves[le]:0)}Pe+=B.peakM;const Oe=Pe/u,Ge=Pe+Oe;return{band:e,peakM:Ge,at:(le,xe,De)=>{const Te=le+a,Y=xe+l,ce=void 0;let Se=0;for(let ye=0;ye<r;ye++){const Re=e.waves[ye],Ce=Ch(Re,ce);if(Ce<=0)continue;const Le=Te/Re,ke=Y/Re,Be=Math.floor(Le),He=Math.floor(ke),ot=oe[ye].v,je=V(ye,Be,He),ht=Wt(Le-Be),ut=Wt(ke-He);Se+=Ce*((ot[je]*(1-ht)+ot[je+1]*ht)*(1-ut)+(ot[je+2]*(1-ht)+ot[je+3]*ht)*ut)}if(L){const ye=Te/G,Re=Y/G,Ce=Math.floor(ye),Le=Math.floor(Re),ke=ne.v,Be=Ee(Ce,Le),He=Wt(ye-Ce),ot=Wt(Re-Le);Se+=(ke[Be]*(1-He)+ke[Be+1]*He)*(1-ot)+(ke[Be+2]*(1-He)+ke[Be+3]*He)*ot}const q=Te/e.windowM,A=Y/e.windowM,U=Math.floor(q),T=Math.floor(A),I=Ue(U,T),z=se.v[I],te=se.v[I+1];if(z===0)return Se;let he=z*Xd(q-U,h)*Xd(A-T,h)/u;return te<1&&(re(le,xe,ve),he*=te>1e-6?ve[4]/te:0),he>Oe?he=Oe:he<-Oe&&(he=-Oe),Se-he}}}function oc(n){return n-Math.floor(n)}const ac=.3183099,lc=.3678794;let pm=0,mm=0;function Jx(n,e){const t=n*ac+lc,i=e*lc+ac,r=oc(t*i*(t+i));pm=-1+2*oc(16*ac*r),mm=-1+2*oc(16*lc*r)}const cc=6.28318530717959,Za=n=>n<0?0:n>1?1:n,Bi=(n,e,t)=>n+(e-n)*t;function eS(n,e){return 1-Math.pow(1-Za(n),e)}function ia(n){const e=1-Za(n);return 1-e*e}function Yd(n,e){return n>=e?n-.5*e:.5*n*n/e}const js={x:0,y:0,z:0,w:0};function tS(n,e,t,i,r,s,o){const a=-i*r*cc,l=t*r*cc,c=s*cc,h=Math.floor(n),u=Math.floor(e),d=n-h,f=e-u;let M=0,E=0,m=0;for(let D=-1;D<=2;D++)for(let y=-1;y<=2;y++){Jx(h+D,u+y);const R=d-D-pm*.5,N=f-y-mm*.5,b=R*R+N*N;let v=Math.exp(-b*2)-.01111;v<0&&(v=0),m+=v;const w=R*a+N*l+c;M+=Math.cos(w)*v,E+=Math.sin(w)*v}const p=M/m,g=E/m;let S=Math.sqrt(p*p+g*g);const x=1-o;return S<x&&(S=x),js.x=p/S,js.y=g/S,js.z=a,js.w=l,js}const Mu={scale:.15,strength:.22,gullyWeight:.5,detail:1.5,rounding:[.1,0,.1,2],onset:[1.25,1.25,2.8,1.5],assumedSlope:[.7,1],octaves:5,lacunarity:2,gain:.5,cellScale:.7,normalization:.5,octaveLimit:1/0},ss={dHeight:0,dSlopeX:0,dSlopeY:0,magnitude:0,ridgeMap:0};function qd(n,e,t,i,r,s,o){const a=o.octaveLimit??1/0;let l=o.strength*o.scale,c=s<-1?-1:s>1?1:s;const h=t,u=i,d=r;let f=t,M=i,E=r,m=1/(o.scale*o.cellScale);const p=Math.sqrt(i*i+r*r),g=p>1e-10?p:1e-10;let S=0,x=1;const[D,y,R,N]=o.rounding,[b,v,w,O]=o.onset,[C,W]=o.assumedSlope,B=Bi(y,D,Za(c+.5))*R;let L=ia(Yd(g*b,B*b)),X=ia(g*w),k=c,J=Bi(i,i/g*C,W),Z=Bi(r,r/g*C,W);for(let ee=0;ee<o.octaves;ee++){const me=Math.sqrt(J*J+Z*Z),K=Math.abs(me)>1e-10?J/me:J,j=Math.abs(me)>1e-10?Z/me:Z,Q=tS(n*m,e*m,K,j,o.cellScale,.25,o.normalization),H=Q.z*-m,$=Q.w*-m,re=Math.abs(Q.y),oe=Q.y>0?1:Q.y<0?-1:0,de=(o.feedback??1)*o.gullyWeight;J+=oe*H*l*de,Z+=oe*$*l*de;const Me=Q.x,V=Q.y*H,Ae=Q.y*$,ve=Bi(c,Me*o.gullyWeight,L),Ie=Bi(0,V*o.gullyWeight,L),be=Bi(0,Ae*o.gullyWeight,L),Ne=a>=ee+1?1:a<=ee?0:a-ee;if(Ne<=0)break;f+=ve*l*Ne,M+=Ie*l*Ne,E+=be*l*Ne,S+=l*Ne,c=ve;const se=Bi(y,D,Za(Me+.5))*x,fe=ia(Yd(re*v,se*v));L=eS(L,o.detail)*fe,k=Bi(k,Me,X),X=X*ia(re*O),l*=o.gain,m*=o.lacunarity,x*=N}return ss.dHeight=f-h,ss.dSlopeX=M-u,ss.dSlopeY=E-d,ss.magnitude=S,ss.ridgeMap=k*(1-X),ss}function Ss(n){let e=n.strength*n.scale,t=0;for(let i=0;i<n.octaves;i++)t+=e,e*=n.gain;return t*Math.max(1,n.gullyWeight)}const nS=.001;function Rr(n,e,t){const i=new Float32Array(e*t).fill(1/0);for(let l=0;l<e;l++)i[l]=n[l],i[(t-1)*e+l]=n[(t-1)*e+l];for(let l=0;l<t;l++)i[l*e]=n[l*e],i[l*e+e-1]=n[l*e+e-1];const r=[-e-1,-e,-e+1,-1,1,e-1,e,e+1],s=4*Math.max(e,t);let o=!0,a=0;for(;o;){o=!1,a++;const l=a&3,c=l<2,h=(l&1)===0,[u,d]=c?[t,e]:[e,t],f=h?1:u-2,M=h?u-1:0,E=h?1:-1;for(let m=f;h?m<M:m>M;m+=E)for(let p=h?1:d-2;h?p<d-1:p>0;p+=h?1:-1){const g=c?m*e+p:p*e+m;if(!(i[g]<=n[g]))for(const S of r){const x=Math.fround(i[g+S]+nS);if(n[g]>=x){i[g]=n[g],o=!0;break}x<i[g]&&(i[g]=x,o=!0)}}if(a>s)throw new Error(`fillPits did not converge in ${s} sweeps (${e}x${t}) — beyond the one-ring-per-rotation worst case, so the surface or the sweep logic is wrong`)}return{surface:i,sweeps:a}}function br(n,e,t,i){const r=new Int32Array(e*t).fill(-1),s=[{d:-e-1,len:Math.SQRT2*i},{d:-e,len:i},{d:-e+1,len:Math.SQRT2*i},{d:-1,len:i},{d:1,len:i},{d:e-1,len:Math.SQRT2*i},{d:e,len:i},{d:e+1,len:Math.SQRT2*i}];for(let o=1;o<t-1;o++)for(let a=1;a<e-1;a++){const l=o*e+a;let c=0,h=-1;for(const{d:u,len:d}of s){const f=(n[l]-n[l+u])/d;f>c&&(c=f,h=l+u)}r[l]=h}return r}function gm(n,e,t,i){const r=new Float32Array(t*i).fill(1),s=Array.from({length:t*i},(o,a)=>a).sort((o,a)=>n[a]-n[o]||o-a);for(const o of s){const a=e[o];a>=0&&(r[a]+=r[o])}return r}function iS(n,e,t,i){const r=(globalThis.performance??{now:()=>Date.now()}).now(),{surface:s,sweeps:o}=Rr(n,e,t),a=br(s,e,t,i),l=gm(s,a,e,t);return{filled:s,dir:a,acc:l,sweeps:o,wallMs:(globalThis.performance??{now:()=>Date.now()}).now()-r}}function _m(n,e,t){const i=e*t,r=new Float32Array(i).fill(1),s=new Int32Array(i);for(let c=0;c<i;c++){const h=n[c];h>=0&&s[h]++}const o=new Int32Array(i);let a=0,l=0;for(let c=0;c<i;c++)s[c]===0&&(o[l++]=c);for(;a<l;){const c=o[a++],h=n[c];h<0||(r[h]+=r[c],--s[h]===0&&(o[l++]=h))}if(l!==i)throw new Error(`flowAccumulationTopo: ${i-l} of ${i} cells never drained — the D8 graph has a cycle, so the surface passed in was not pit-filled`);return{acc:r,order:o}}const rS=.2;function sS(n,e,t,i){const r=()=>(globalThis.performance??{now:()=>Date.now()}).now(),s=r(),o=e*e,a=new Float32Array(n),l=new Float32Array(o),c=i.routeOffset?new Float32Array(o):null,u=i.holdMask??null,d=i.creepMode==="delta"?(()=>{const b=new Float32Array(o);for(let v=1;v<e-1;v++)for(let w=1;w<e-1;w++){const O=v*e+w;b[O]=n[O-1]+n[O+1]+n[O-e]+n[O+e]-4*n[O]}return b})():null,f=[];let M=0,E=0,m=0,p=0;const g=Math.max(1,Math.ceil(i.diffuseCFL/rS)),S=i.diffuseCFL/g;let x,D,y;const R=new Float64Array(o),N=t*t;for(let b=0;b<i.iterations;b++){if(b%i.rerouteEvery===0){const O=r();let C=a;if(i.routeOffset){C=c;for(let L=0;L<o;L++)C[L]=a[L]+i.routeOffset[L]}const{surface:W}=Rr(C,e,e);x=br(W,e,e,t);const B=_m(x,e,e);y=B.order,D=B.acc;for(let L=0;L<o;L++)D[L]=D[L]*N;for(let L=0;L<o;L++){const X=x[L];if(X<0){R[L]=0;continue}const k=L%e-X%e,J=(L/e|0)-(X/e|0),Z=k!==0&&J!==0?Math.SQRT2*t:t;R[L]=i.K*Math.pow(D[L],i.m)*i.dtYears/Z}M+=r()-O,p++}const v=r();let w=0;for(let O=o-1;O>=0;O--){const C=y[O],W=x[C];if(W<0||u!==null&&u[C])continue;const B=R[C],L=(a[C]+B*a[W])/(1+B),X=Math.min(a[C],Math.max(L,a[W]));w+=a[C]-X,a[C]=Math.fround(X)}if(E+=r()-v,f.push(w),i.diffuseCFL>0){const O=r();for(let C=0;C<g;C++)if(l.set(a),d===null)for(let W=1;W<e-1;W++)for(let B=1;B<e-1;B++){const L=W*e+B;if(u!==null&&u[L])continue;const X=l[L-1]+l[L+1]+l[L-e]+l[L+e]-4*l[L];a[L]=Math.fround(l[L]+S*X)}else for(let W=1;W<e-1;W++)for(let B=1;B<e-1;B++){const L=W*e+B;if(u!==null&&u[L])continue;const X=l[L-1]+l[L+1]+l[L-e]+l[L+e]-4*l[L]-d[L];a[L]=Math.fround(l[L]+S*X)}m+=r()-O}}return{h:a,iterations:i.iterations,reroutes:p,diffuseSubsteps:g,removedPerIter:f,msTotal:r()-s,msRoute:M,msIncise:E,msDiffuse:m}}const Zd=6,Mm=Object.freeze({cellM:5,perturbRmsM:4,perturbWaveM:0,perturbOctaves:2,channelAreaM2:8e3,areaSatM2:15e4,depthMaxM:14,depthExp:.45,slopeRefDeg:15,bankDeg:29,headTaperM:90,evolveIterations:250,evolveRerouteEvery:20,evolveK:16e-6,evolveDtYears:150,evolveM:.45,diffuseCFL:.08,creepMode:"delta",flattenRadiusM:0,amplifyLoM:0,amplifyHiM:0,amplifyGain:1,fineDepthM:0,fineAreaLoM2:300,fineAreaHiM2:8e3,fineSmoothM:30,skirtDepthM:0,skirtRadiusM:35,shoreTaperM:40,minBranchM:40,seed:887319});function ra(n,e,t){let i=Math.imul(n,668265261)^Math.imul(e,374761393)^Math.imul(t,2654435761)|0;return i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}const jd=n=>n*n*(3-2*n);function oS(n,e,t,i){const r=n/t,s=e/t,o=Math.floor(r),a=Math.floor(s),l=jd(r-o),c=jd(s-a),h=ra(o,a,i),u=ra(o+1,a,i),d=ra(o,a+1,i),f=ra(o+1,a+1,i);return(h*(1-l)+u*l)*(1-c)+(d*(1-l)+f*l)*c-.5}function Qd(n,e){const t=n/(7.5487*e),i=(-1+Math.sqrt(1+4*t*t))/2,r=Math.max(1,Math.round(i)),s=7.5487*Math.sqrt(r*(r+1))*e;return{w:r,achievedM:s,clamped:i<1}}function sa(n,e,t){const i=new Float32Array(n),r=new Float32Array(e*e),s=(a,l)=>{for(let c=0;c<e;c++){const h=c*e;let u=0,d=0;for(let f=0;f<=t&&f<e;f++)u+=a[h+f],d++;for(let f=0;f<e;f++){l[h+f]=u/d;const M=f+t+1,E=f-t;M<e&&(u+=a[h+M],d++),E>=0&&(u-=a[h+E],d--)}}},o=(a,l)=>{for(let c=0;c<e;c++)for(let h=0;h<e;h++)l[h*e+c]=a[c*e+h]};for(let a=0;a<3;a++)s(i,r),o(r,i),s(i,r),o(r,i);return i}function Jd(n,e,t,i,r){const s=r*r;return .5*(2*e+(t-n)*r+(2*n-5*e+4*t-i)*s+(3*e-n-3*t+i)*s*r)}function Dh(n,e,t,i,r,s,o){const a=(s+i-r)/t,l=(o+i-r)/t,c=Math.max(1,Math.min(e-3,Math.floor(a))),h=Math.max(1,Math.min(e-3,Math.floor(l))),u=Math.max(-1,Math.min(2,a-c)),d=Math.max(-1,Math.min(2,l-h)),f=M=>{const E=(h+M)*e;return Jd(n[E+c-1],n[E+c],n[E+c+1],n[E+c+2],u)};return Jd(f(-1),f(0),f(1),f(2),d)}function aS(n,e,t,i={}){const r=()=>(globalThis.performance??{now:()=>Date.now()}).now(),s=r(),o={...Mm,...i},{cellM:a}=o,l=Math.floor(t*2/a)+1,c=l*l,h=T=>T*a-t,u=new Float32Array(c),d=new Uint8Array(c);let f=0;for(let T=0;T<l;T++){const I=h(T);for(let z=0;z<l;z++){const te=T*l+z,he=h(z);u[te]=n(he,I),e(he,I)&&(d[te]=1,f++)}}const M=r()-s,E=r(),m=o.perturbWaveM>0?o.perturbWaveM:4*a,p=new Float32Array(c);for(let T=0;T<l;T++){const I=h(T);for(let z=0;z<l;z++){const te=h(z);let he=0,ye=1,Re=m;for(let Ce=0;Ce<o.perturbOctaves;Ce++)he+=ye*oS(te,I,Re,o.seed^Ce*40503),ye*=.5,Re*=.5;p[T*l+z]=he}}let g=0,S=0;for(let T=0;T<c;T++)g+=p[T],S+=p[T]*p[T];const x=Math.sqrt(Math.max(0,S/c-(g/c)**2)),D=x>0?o.perturbRmsM/x:0,y=new Float32Array(c),R=new Float32Array(c);let N=0;for(let T=0;T<c;T++){const I=p[T]*D;y[T]=I,R[T]=u[T]+I,N+=I*I}const b=Math.sqrt(N/c);let v=null;o.flattenRadiusM>0&&(v=sa(u,l,Math.max(1,Math.round(o.flattenRadiusM/a))));let w=null;if(o.amplifyGain!==1&&o.amplifyHiM>o.amplifyLoM&&o.amplifyLoM>0){const T=v??u,I=Qd(o.amplifyLoM,a),z=Qd(o.amplifyHiM,a),te=(Re,Ce)=>Math.abs(Ce-Re)/Re>.15?` ⚠ REQUESTED ${Re} m, DELIVERING ${Ce.toFixed(0)} m`:"";(I.clamped||te(o.amplifyLoM,I.achievedM)||te(o.amplifyHiM,z.achievedM))&&console.warn(`[drainage] amplify band ${o.amplifyLoM}–${o.amplifyHiM} m on a ${a} m grid → half-widths ${I.w}/${z.w} cells = ${I.achievedM.toFixed(0)}–${z.achievedM.toFixed(0)} m.${te(o.amplifyLoM,I.achievedM)}${te(o.amplifyHiM,z.achievedM)}${I.clamped?` The ${a} m grid's finest representable cutoff is ${I.achievedM.toFixed(0)} m; a finer band needs a finer grid, not a smaller number.`:""}`);const he=sa(T,l,I.w),ye=sa(T,l,z.w);w=new Float32Array(c);for(let Re=0;Re<c;Re++)w[Re]=(o.amplifyGain-1)*(he[Re]-ye[Re])}let O=null,C=v??u;o.evolveIterations>0&&(O=sS(C,l,a,{iterations:o.evolveIterations,rerouteEvery:o.evolveRerouteEvery,dtYears:o.evolveDtYears,K:o.evolveK,m:o.evolveM,diffuseCFL:o.diffuseCFL,creepMode:o.creepMode,holdMask:d,routeOffset:y}),C=O.h);const W=new Float32Array(c);for(let T=0;T<c;T++)W[T]=C[T]-u[T]+(w?w[T]:0);if(w){const T=new Float32Array(c);for(let I=0;I<c;I++)T[I]=C[I]+w[I];C=T}const B=new Float32Array(c);for(let T=0;T<c;T++)B[T]=C[T]+y[T];const{surface:L,sweeps:X}=Rr(B,l,l),k=br(L,l,l,a),{acc:J,order:Z}=_m(k,l,l),ee=new Float32Array(c),me=a*a;for(let T=0;T<c;T++)ee[T]=J[T]*me;let K=0;if(o.fineDepthM>0&&o.fineAreaHiM2>o.fineAreaLoM2){const T=Math.log10(Math.max(1,o.fineAreaLoM2)),I=Math.log10(o.fineAreaHiM2),z=new Float32Array(c);for(let ye=0;ye<c;ye++){if(d[ye])continue;const Re=Math.log10(Math.max(me,ee[ye])),Ce=Math.max(0,Math.min(1,(Re-T)/(I-T)));Ce>0&&K++,z[ye]=-o.fineDepthM*Ce*Ce*(3-2*Ce)}const te=o.fineSmoothM>0?Math.max(1,Math.round(o.fineSmoothM/a)):0,he=te>0?sa(z,l,te):z;for(let ye=0;ye<c;ye++)d[ye]||(W[ye]+=he[ye]);console.log(`[drainage] fine band: ${o.fineDepthM} m over A ${o.fineAreaLoM2}–${o.fineAreaHiM2} m², log A smoothed ${o.fineSmoothM} m · touches ${K} of ${c} cells (${(K/c*100).toFixed(1)} %)`)}const j=r()-E,Q=new Uint8Array(c),H=new Float32Array(c),$=o.channelAreaM2,re=Math.max($*1.0001,o.areaSatM2),oe=Math.pow(re/$,o.depthExp)-1;let de=0;for(let T=1;T<l-1;T++)for(let I=1;I<l-1;I++){const z=T*l+I;if(d[z]||ee[z]<$)continue;Q[z]=1,de++;const te=oe>0?Math.min(1,Math.max(0,(Math.pow(ee[z]/$,o.depthExp)-1)/oe)):1,he=(C[z+1]-C[z-1])/(2*a),ye=(C[z+l]-C[z-l])/(2*a),Re=Math.atan(Math.hypot(he,ye))*180/Math.PI,Ce=Math.min(1,Re/o.slopeRefDeg);H[z]=o.depthMaxM*te*Ce}const Me=new Float32Array(c);for(let T=0;T<c;T++){const I=Z[T];if(!Q[I])continue;const z=k[I];if(z<0||!Q[z])continue;const te=I%l-z%l,he=(I/l|0)-(z/l|0),ye=te!==0&&he!==0?Math.SQRT2*a:a;Me[I]+ye>Me[z]&&(Me[z]=Me[I]+ye)}if(o.minBranchM>0)for(let T=0;T<c;T++)Q[T]&&Me[T]<o.minBranchM&&(Q[T]=0,H[T]=0,de--);if(o.headTaperM>0)for(let T=0;T<c;T++){if(!Q[T]||H[T]<=0)continue;const I=Math.min(1,Math.max(0,Me[T]-o.minBranchM)/o.headTaperM);H[T]=H[T]*I*I*(3-2*I)}const V=new Int32Array(c).fill(-1);{const T=new Float32Array(c);for(let I=0;I<c;I++){if(!Q[I])continue;const z=k[I];z<0||!Q[z]||ee[I]>T[z]&&(T[z]=ee[I],V[z]=I)}}const Ae=new Float32Array(c),ve=new Float32Array(c);for(let T=0;T<c;T++)Ae[T]=T%l*a-t,ve[T]=(T/l|0)*a-t;{const T=new Float32Array(c),I=new Float32Array(c);for(let z=0;z<6;z++){T.set(Ae),I.set(ve);for(let te=0;te<c;te++){if(!Q[te])continue;const he=V[te],ye=k[te];he<0||ye<0||!Q[ye]||(Ae[te]=.5*T[te]+.25*(T[he]+T[ye]),ve[te]=.5*I[te]+.25*(I[he]+I[ye]))}}}const Ie=(T,I)=>Dh(W,l,a,t,0,T,I),be=new Float32Array(c);for(let T=0;T<c;T++)be[T]=Q[T]?n(Ae[T],ve[T])+Ie(Ae[T],ve[T]):C[T];const Ne=new Float32Array(c);for(let T=0;T<c;T++)Ne[T]=be[T]-H[T];let se=0;for(let T=c-1;T>=0;T--){const I=Z[T],z=k[I];if(!(z<0||!Q[I])&&Ne[I]<Ne[z]){Ne[I]=Ne[z];const te=Math.max(0,be[I]-Ne[I]);te<H[I]&&se++,H[I]=te}}const fe=new Int32Array(c);for(let T=0;T<c;T++){if(!Q[T])continue;const I=k[T];I>=0&&Q[I]&&fe[I]++}const G=new Int32Array(c),P=new Int32Array(c),ne=new Int32Array(c);for(let T=0;T<c;T++){const I=Z[T];if(!Q[I])continue;G[I]=P[I]===0?1:ne[I]>=2?P[I]+1:P[I];const z=k[I];z<0||!Q[z]||(G[I]>P[z]?(P[z]=G[I],ne[z]=1):G[I]===P[z]&&ne[z]++)}const pe=[],ae=[];for(let T=0;T<c;T++){if(!Q[T])continue;const I=G[T];for(;pe.length<I;)pe.push(0),ae.push(0);const z=k[T],te=z>=0?T%l-z%l:0,he=z>=0?(T/l|0)-(z/l|0):0;z>=0&&Q[z]&&(ae[I-1]+=(te!==0&&he!==0?Math.SQRT2*a:a)/1e3),(z<0||!Q[z]||G[z]!==I)&&pe[I-1]++}const Ee=pe.slice(0,-1).map((T,I)=>pe[I+1]>0?T/pe[I+1]:1/0),Ue=(T,I)=>{const z=I%l-T%l;return((I/l|0)-(T/l|0)+1)*3+(z+1)};let Pe=0,Oe=0,Ge=0,le=0;{const T=new Int32Array(c);for(let z=0;z<c;z++){if(!Q[z])continue;const te=k[z];te>=0&&Q[te]&&T[te]++}const I=new Uint8Array(c);for(let z=0;z<c;z++){if(!Q[z]||T[z]!==0)continue;let te=z,he=-1,ye=0,Re=0;for(;Re++<c;){const Ce=k[te];if(Ce<0||!Q[Ce]||I[te])break;I[te]=1,le++;const Le=Ue(te,Ce);Le===he?ye++:(ye>0&&(Pe+=ye,Oe++,ye>=5&&(Ge+=ye)),ye=1,he=Le),te=Ce}ye>0&&(Pe+=ye,Oe++,ye>=5&&(Ge+=ye))}}let xe=0,De=0,Te=0,Y=0,ce=0;const Se=[];for(let T=0;T<c;T++){if(!Q[T])continue;const I=k[T];if(I>=0&&Q[I]){const z=T%l-I%l,te=(T/l|0)-(I/l|0);Te+=z!==0&&te!==0?Math.SQRT2*a:a}fe[T]>=2&&xe++,fe[T]===0&&De++,Y+=H[T],H[T]>ce&&(ce=H[T]),Se.push(H[T])}Se.sort((T,I)=>T-I);const q=c-f,A=q*me/1e6,U=A>0?Te/1e3/A:0;return{g:l,cellM:a,halfM:t,params:o,z:u,zBase:C,evolveDelta:W,evolve:O,areaM2:ee,dir:k,order:Z,isChannel:Q,isWater:d,depthM:H,prev:V,cx:Ae,cz:ve,zNode:be,stats:{cells:c,landCells:q,waterCells:f,channelCells:de,bedClamped:se,junctions:xe,heads:De,channelKm:Te/1e3,densityKmPerKm2:U,junctionsPerChannelKm:Te>0?xe/(Te/1e3):0,orderStreams:pe,orderKm:ae,bifurcation:Ee,dirRunMeanCells:Oe>0?Pe/Oe:0,fracInStraightRuns:le>0?Ge/le:0,spacingM:U>0?1e3/(2*U):1/0,depthMeanM:de?Y/de:0,depthP90M:Se.length?Se[Math.min(Se.length-1,Math.floor(Se.length*.9))]:0,depthMaxM:ce,perturbRmsAchievedM:b,fillSweeps:X,sampleMs:M,routeMs:j,wallMs:r()-s}}}function lS(n){const{g:e,cellM:t,isChannel:i}=n,r=e*e,s=3e4,o=u=>{const d=new Int16Array(r).fill(s),f=new Int16Array(r).fill(s),M=new Int32Array(r).fill(-1);for(let g=0;g<r;g++)u[g]&&(d[g]=0,f[g]=0,M[g]=g);const E=g=>d[g]*d[g]+f[g]*f[g],m=(g,S,x,D)=>{if(M[S]===-1)return;const y=d[S]+x,R=f[S]+D;y*y+R*R<E(g)&&(d[g]=y,f[g]=R,M[g]=M[S])};for(let g=0;g<e;g++)for(let S=0;S<e;S++){const x=g*e+S;S>0&&m(x,x-1,1,0),g>0&&m(x,x-e,0,1),S>0&&g>0&&m(x,x-e-1,1,1),S<e-1&&g>0&&m(x,x-e+1,-1,1)}for(let g=e-1;g>=0;g--)for(let S=e-1;S>=0;S--){const x=g*e+S;S<e-1&&m(x,x+1,-1,0),g<e-1&&m(x,x+e,0,-1),S<e-1&&g<e-1&&m(x,x+e+1,-1,-1),S>0&&g<e-1&&m(x,x+e-1,1,-1)}const p=new Float32Array(r);for(let g=0;g<r;g++)p[g]=M[g]===-1?1/0:Math.sqrt(E(g))*t;return{site:M,distM:p}},{site:a,distM:l}=o(i),h=n.params.shoreTaperM>0&&n.isWater.some(u=>u===1)?o(n.isWater).distM:null;return{site:a,distM:l,waterDist:h}}const cS=(n,e,t)=>{const i=Math.max(t-Math.abs(n-e),0)/t;return Math.min(n,e)-i*i*t*.25};function hc(n,e=lS(n)){const t=()=>(globalThis.performance??{now:()=>Date.now()}).now(),i=t(),{g:r,cellM:s,halfM:o,dir:a,isChannel:l,depthM:c,evolveDelta:h}=n,u=r*r,d=Math.tan(n.params.bankDeg*Math.PI/180),{prev:f,cx:M,cz:E}=n,{site:m,distM:p,waterDist:g}=e,S=n.params.shoreTaperM;let x=0;for(let j=0;j<u;j++)if(l[j]){const Q=(c[j]/d+Zd/2)/.85;Q>x&&(x=Q)}const D=n.params.skirtRadiusM,y=n.params.skirtDepthM,R=Math.max(x,D),N=Math.max(2,Math.min(8,Math.ceil(x/s))),b=j=>M[j],v=j=>E[j],w=(j,Q,H,$,re)=>{const oe=b(j),de=v(j),Me=b(Q),V=v(Q),Ae=Me-oe,ve=V-de,Ie=Ae*Ae+ve*ve,be=Ie>0?Math.max(0,Math.min(1,((H-oe)*Ae+($-de)*ve)/Ie)):0,Ne=oe+be*Ae,se=de+be*ve,fe=(H-Ne)*(H-Ne)+($-se)*($-se);fe<re.d2&&(re.d2=fe,re.depth=c[j]+be*(c[Q]-c[j]))},O=(j,Q)=>{if(!g)return Q;const H=g[j];if(H<=0)return 0;if(H>=S)return Q;const $=H/S;return Q*$*$*(3-2*$)},C={d2:0,depth:0},W=(j,Q,H)=>{C.d2=1/0,C.depth=0;const $=Q-b(j),re=H-v(j);C.d2=$*$+re*re,C.depth=c[j];let oe=j;for(let ve=0;ve<N;ve++){const Ie=f[oe];if(Ie<0)break;w(Ie,oe,Q,H,C),oe=Ie}let de=j;for(let ve=0;ve<N;ve++){const Ie=a[de];if(Ie<0||!l[Ie])break;w(de,Ie,Q,H,C),de=Ie}const Me=C.depth,V=Math.sqrt(C.d2);let Ae=0;if(y>0&&V<D){const ve=1-V/D;Ae+=y*ve*ve}if(Me>0){const ve=Zd,Ie=(Me/d+ve/2)/.85;if(V<Ie){const be=.3*Ie;V<=ve?Ae+=Me-d*V*V/(2*ve):V<=Ie-be?Ae+=Me-d*(V-ve/2):Ae+=d*(Ie-V)*(Ie-V)/(2*be)}}return-Ae},B=(j,Q)=>Dh(h,r,s,o,0,j,Q),L=(j,Q)=>{const H=Math.round((j+o)/s),$=Math.round((Q+o)/s);if(H<0||$<0||H>=r||$>=r)return 0;const re=$*r+H,oe=B(j,Q),de=m[re];if(de<0||p[re]-s*2.5>R)return O(re,oe);let Me=W(de,j,Q);if(p[re]<=s*1.5)for(let V=-1;V<=1;V++){const Ae=$+V;if(!(Ae<0||Ae>=r))for(let ve=-1;ve<=1;ve++){const Ie=H+ve;if(Ie<0||Ie>=r)continue;const be=Ae*r+Ie;if(!l[be]||be===de)continue;const Ne=W(be,j,Q);Ne<Me&&(Me=Ne)}}return O(re,cS(oe,Me,1))},X=[],k=[],J=[],Z=[];{const j=new Float32Array(u);for(let Q=0;Q<r;Q++)for(let H=0;H<r;H++)j[Q*r+H]=L(H*s-o,Q*s-o);X.push(j),k.push(r),J.push(s),Z.push(0);for(let Q=1;k[Q-1]>8;Q++){const H=k[Q-1],$=X[Q-1],re=Math.max(1,Math.ceil(H/2)),oe=new Float32Array(re*re);for(let de=0;de<re;de++)for(let Me=0;Me<re;Me++){const V=Math.min(H-1,2*Me),Ae=Math.min(H-1,2*Me+1),ve=Math.min(H-1,2*de),Ie=Math.min(H-1,2*de+1);oe[de*re+Me]=.25*($[ve*H+V]+$[ve*H+Ae]+$[Ie*H+V]+$[Ie*H+Ae])}X.push(oe),k.push(re),J.push(J[Q-1]*2),Z.push(Z[Q-1]+J[Q-1]*.5)}}const ee=(j,Q,H)=>Dh(X[j],k[j],J[j],o,Z[j],Q,H),me=X.length-1,K=(j,Q,H)=>{if(H===void 0||!(H>2*s))return L(j,Q);const $=Math.log2(H/(2*s)),re=Math.floor($),oe=$-re,de=re<=0?L(j,Q):ee(Math.min(me,re),j,Q),Me=ee(Math.min(me,re+1),j,Q);return de+(Me-de)*oe};return{g:r,cellM:s,halfM:o,net:n,site:m,distM:p,prev:f,maxHalfWidthM:x,buildMs:t()-i,at:L,evolveOnlyAt:B,atPitch:K,mipCellM:J}}const gl=Object.freeze({thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!0,drainage:!0}),_l=["thermal","streamPower","ravine","grain","filter","drainage"];let er={...gl};function Yt(){return er}function Ki(n){return Rt.devTuner&&(er=n===null?{...gl}:{...er,...n}),er}function hS(n=er){return _l.every(e=>n[e]===gl[e])}function Tr(n=er){return _l.map(e=>`${e}=${n[e]?1:0}`).join(",")}function Ia(n=er){return!n.thermal&&!n.streamPower}const Em=Object.freeze({...Mu,scale:30,strength:.02}),uS=Object.freeze({...Mu,scale:30,strength:.1});let ro={...Em};function nr(){return ro}function ja(n){return Rt.devTuner&&(ro=n===null?{...Em}:{...ro,...n}),ro}const vm=Object.freeze({...Mm});let so={...vm};function Ms(){return so}function Qa(n){return Rt.devTuner&&(so=n===null?{...vm}:{...so,...n}),so}const dS=Object.freeze({...Mu,scale:200/7560});function xm(n){return(e,t,i)=>{const r=Math.max(_.TERRAIN_DETAIL_SHORE_M,i),s=r*.7071;let o=n.insidenessAt(e,t);for(const[a,l]of[[r,0],[-r,0],[0,r],[0,-r],[s,s],[s,-s],[-s,s],[-s,-s]])o=Math.max(o,n.insidenessAt(e+a,t+l),n.insidenessAt(e+a*.5,t+l*.5));return Math.max(0,1-o/_.WATER_SHORE_ISO)}}function Ja(n,e,t,i={},r={}){const s=(Array.isArray(e)?[...e]:[e]).sort((se,fe)=>fe.zoom-se.zoom);if(s.length===0)throw new Error("makeWorldQuery: at least one DEM level is required");const o=r.renature===!0&&t.grid?Yx(n,s,t.grid):null;o&&s.splice(0,s.length,...o.levels);const a=s[s.length-1];let l=null;const c=(se,fe)=>{if(!l)return null;const G=(se+l.halfM)/l.cellM,P=(fe+l.halfM)/l.cellM;if(G<1||P<1||G>l.g-2||P>l.g-2)return null;const ne=Math.floor(G),pe=Math.floor(P),ae=G-ne,Ee=P-pe,Ue=pe*l.g+ne;return(l.grid[Ue]*(1-ae)+l.grid[Ue+1]*ae)*(1-Ee)+(l.grid[Ue+l.g]*(1-ae)+l.grid[Ue+l.g+1]*ae)*Ee},h=(se,fe)=>{const G=c(se,fe);if(G!==null){const P=l.halfM-Math.max(Math.abs(se),Math.abs(fe));if(P>=l.blendM)return G;const ne=k(se,fe),pe=Math.max(0,P)/l.blendM,ae=pe*pe*pe*(pe*(pe*6-15)+10);return ne+(G-ne)*ae}return k(se,fe)};let u=null;const d=500,f=(se,fe,G)=>{if(!u||t.depthAt(se,fe)>0)return 0;const P=u.halfM-Math.max(Math.abs(se),Math.abs(fe));if(P<=0)return 0;const ne=Math.min(1,P/d),pe=ne*ne*(3-2*ne);return u.atPitch(se,fe,G)*pe*K(se,fe,4*u.cellM)},M=(se,fe)=>{if(!u||t.depthAt(se,fe)>0)return 0;const G=u.halfM-Math.max(Math.abs(se),Math.abs(fe));if(G<=0)return 0;const P=Math.min(1,G/d);return u.evolveOnlyAt(se,fe)*P*P*(3-2*P)*K(se,fe,4*u.cellM)};let E=6e3,m=!1;const p={fadeSaturating:!1,heightOffsetY:0,gradStencilM:8};let g=null;const S=()=>{if(g)return g;const se=E;let fe=1/0,G=-1/0;for(let P=0;P<64;P++)for(let ne=0;ne<64;ne++){const pe=h(ne/63*2*se-se,P/63*2*se-se);pe<fe&&(fe=pe),pe>G&&(G=pe)}return g={lo:fe,span:Math.max(1,G-fe)},g},x=3,D=14;let y=new Ln(D,x);const R=new Float64Array(x),N=new Float64Array(x),b=(se,fe,G)=>{const P=y.slot(se,fe),ne=P*x;if(!y.hit(P,se,fe)){y.claim(P,se,fe);const pe=se*_.FILTER_AUX_MEMO_PITCH_M,ae=fe*_.FILTER_AUX_MEMO_PITCH_M,Ee=Yt().drainage,Ue=p.gradStencilM,Pe=(De,Te)=>h(De,Te)+(Ee?M(De,Te):0);y.v[ne]=(Pe(pe+Ue,ae)-Pe(pe-Ue,ae))/(2*Ue),y.v[ne+1]=(Pe(pe,ae+Ue)-Pe(pe,ae-Ue))/(2*Ue);const Oe=2,Ge=(De,Te)=>h(De,Te)+(Ee?f(De,Te):0),le=(Ge(pe+Oe,ae)-Ge(pe-Oe,ae))/(2*Oe),xe=(Ge(pe,ae+Oe)-Ge(pe,ae-Oe))/(2*Oe);y.v[ne+2]=Math.hypot(le,xe)}for(let pe=0;pe<x;pe++)G[pe]=y.v[ne+pe]},v=(se,fe)=>{const G=_.FILTER_AUX_MEMO_PITCH_M,P=se/G,ne=fe/G,pe=Math.floor(P),ae=Math.floor(ne),Ee=P-pe,Ue=ne-ae;b(pe,ae,R);const Pe=R[0],Oe=R[1],Ge=R[2];b(pe+1,ae,R);const le=R[0],xe=R[1],De=R[2];b(pe,ae+1,R);const Te=R[0],Y=R[1],ce=R[2];b(pe+1,ae+1,R);const Se=R[0],q=R[1],A=R[2],U=(1-Ee)*(1-Ue),T=Ee*(1-Ue),I=(1-Ee)*Ue,z=Ee*Ue;return N[0]=Pe*U+le*T+Te*I+Se*z,N[1]=Oe*U+xe*T+Y*I+q*z,N[2]=Ge*U+De*T+ce*I+A*z,N},w=500,O=(se,fe,G,P)=>{if(t.depthAt(se,fe)>0)return 0;const ne=E-Math.max(Math.abs(se),Math.abs(fe));if(ne<=0)return 0;const pe=ne>=w?1:ne/w*(ne/w)*(3-2*(ne/w)),ae=nr();let Ee=ae;if(P!==void 0&&P>0){if(P>=_.FILTER_PITCH_FLOOR_M)return 0;const A=m?P/(2*E):P,U=Math.log(ae.scale/(2*A))/Math.log(ae.lacunarity)+1;if(!(U>0))return 0;U<ae.octaves&&(Ee={...ae,octaveLimit:U})}const Ue=v(se,fe),Pe=Ue[0],Oe=Ue[1],Ge=Ue[2];if(Ge>=.9004)return 0;let le=1;if(Ge>.7002){const A=(Ge-.7002)/.20019999999999993;le=1-A*A*(3-2*A)}const{lo:xe,span:De}=S(),Te=2*(G-xe)/De-1,Y=Math.max(-1,Math.min(1,p.fadeSaturating?Te/.6:Te));let ce;if(m){const A=1/(2*E),U=.35/De;ce=qd(se*A,fe*A,(G-xe)*U,Pe*U/A,Oe*U/A,Y,Ee);const T=Ss({...Ee,gullyWeight:Math.min(1,Ee.gullyWeight)});return T>0?T*Math.tanh((ce.dHeight-Y*p.heightOffsetY*ce.magnitude)/T)/U*K(se,fe,Ee.scale/A)*pe*le:0}ce=qd(se,fe,G,Pe,Oe,Y,Ee);const Se=Ss({...Ee,gullyWeight:Math.min(1,Ee.gullyWeight)});return Se>0?Se*Math.tanh((ce.dHeight-Y*p.heightOffsetY*ce.magnitude)/Se)*K(se,fe,Ee.scale)*pe*le:0},C=(se,fe,G)=>{const P=h(se,fe)+(Yt().drainage?f(se,fe,G):0);return Yt().filter?P+O(se,fe,P,G):P},W=(se,fe,G)=>{const P=Math.floor(fe/B),ne=Math.floor(G/B),pe=fe/B-P,ae=G/B-ne;let Ee=1;return se.hasTileAtPixel((P-1)*B,ne*B)||(Ee=Math.min(Ee,pe)),se.hasTileAtPixel((P+1)*B,ne*B)||(Ee=Math.min(Ee,1-pe)),se.hasTileAtPixel(P*B,(ne-1)*B)||(Ee=Math.min(Ee,ae)),se.hasTileAtPixel(P*B,(ne+1)*B)||(Ee=Math.min(Ee,1-ae)),Ee},B=256,L=.25,X=(se,fe,G)=>{for(let pe=G;pe<s.length-1;pe++){const ae=s[pe],{gx:Ee,gy:Ue}=xi(n,se,fe,ae.zoom);if(!ae.hasTileAtPixel(Math.floor(Ee),Math.floor(Ue)))continue;const Pe=Wd(ae,Ee,Ue),Oe=W(ae,Ee,Ue);if(Oe>=L)return Pe;const Ge=Oe/L,le=Ge*Ge*Ge*(Ge*(Ge*6-15)+10),xe=X(se,fe,pe+1);return xe+(Pe-xe)*le}const{gx:P,gy:ne}=xi(n,se,fe,a.zoom);return Wd(a,P,ne)},k=(se,fe)=>X(se,fe,0),J=xi(n,0,0,s[0].zoom),Z=xi(n,100,0,s[0].zoom),ee=100/Math.hypot(Z.gx-J.gx,Z.gy-J.gy),me=Math.imul(Math.round(n.lat*1e5)|0,668265261)^Math.imul(Math.round(n.lon*1e5)|0,374761393)|0,K=xm(t);let j={...i};const Q=se=>{const fe=Yt();return{...se,...fe.ravine?{}:{ravineDepthM:0,ravineLevels:0},...fe.grain?{}:{grainAmpM:0}}},H=1500,$=4e3,re=[30,60,120,240],oe=r.landformOnly?NaN:Number.isFinite(r.siteReliefM)?r.siteReliefM:(()=>{let se=0;for(const fe of re){let G=0,P=0;for(let pe=0;pe<$;pe++){const ae=(pe*.6180339887498949%1*2-1)*H*.9,Ee=(pe*.4142135623730951%1*2-1)*H*.9,Ue=C(ae,Ee)-(C(ae+fe,Ee)+C(ae-fe,Ee)+C(ae,Ee+fe)+C(ae,Ee-fe))/4;G+=Ue,P+=Ue*Ue}const ne=Math.max(0,P/$-(G/$)**2);se+=ne}return Math.sqrt(se)})(),de=i.reliefCap??_.TERRAIN_DETAIL_RELIEF_CAP,Me=de>0&&Number.isFinite(oe)?Math.min(1,de*oe/Math.max(1e-9,_.TERRAIN_DETAIL_RMS_M)):1,V=se=>Me>=1?se:{...se,rmsM:(se.rmsM??_.TERRAIN_DETAIL_RMS_M)*Me,ravineDepthM:(se.ravineDepthM??_.RAVINE_DEPTH_M)*Me,grainAmpM:(se.grainAmpM??_.GRAIN_AMP_M)*Me},Ae=se=>{const fe=V(Q(se));return Qx({demCellM:ee,seed:me,...$d(ee,J.gx,J.gy,fe),landformHeightAt:C,waterFadeAt:K,...fe})};let ve=Ae(j);const Ie=(se,fe,G)=>C(se,fe,G)+ve.at(se,fe,G),be=(se,fe)=>{const G=_.NORMAL_EPSILON_M,P=(C(se+G,fe)-C(se-G,fe))/(2*G),ne=(C(se,fe+G)-C(se,fe-G))/(2*G),pe=Math.hypot(P,1,ne);return{x:-P/pe,y:1/pe,z:-ne/pe}};return{siteRelief:()=>({reliefM:oe,scale:Me,cap:de}),applyBakedBand:(se,fe,G,P)=>{let ne=-1/0;for(let pe=0;pe<se.length;pe++)se[pe]>ne&&(ne=se[pe]);l={grid:se,g:fe,cellM:G,halfM:P,blendM:500,maxM:ne},g=null,y=new Ln(D,x)},clearBakedBand:()=>{l=null,g=null,y=new Ln(D,x)},setFilterExtent:se=>{E=se,g=null,y=new Ln(D,x)},filterExtentM:()=>E,heightAt:Ie,landformHeightAt:C,landformDemHeightAt:k,landformBakedHeightAt:h,normalAt:be,seatNormalAt:(se,fe)=>{const G=_.NORMAL_EPSILON_M,P=(Ie(se+G,fe)-Ie(se-G,fe))/(2*G),ne=(Ie(se,fe+G)-Ie(se,fe-G))/(2*G),pe=Math.hypot(P,1,ne);return{x:-P/pe,y:1/pe,z:-ne/pe}},slopeDegAt:(se,fe)=>Math.acos(Math.max(-1,Math.min(1,be(se,fe).y)))*180/Math.PI,waterDepthAt:(se,fe)=>t.depthAt(se,fe),waterSurfaceYAt:(se,fe)=>t.surfaceYAt(se,fe),get detailBand(){return ve.band},get maxHeightBoundM(){const se=this.maxHeightBoundParts,fe=Yt().filter?Ss(nr()):0;return l?Math.max(se.maxPost+se.overshoot+se.residualPeak,l.maxM+se.residualPeak)+fe:se.maxPost+se.overshoot+se.residualPeak+fe},get maxHeightBoundParts(){let se={maxPost:0,overshoot:0},fe=-1/0;for(const P of s){const ne=P.boundParts;ne.maxPost+ne.overshoot>fe&&(fe=ne.maxPost+ne.overshoot,se=ne)}const G=Yt().filter?Ss(nr()):0;return{...se,residualPeak:ve.peakM,filterCap:G}},setDetailOverrides(se){j={...se??{}},ve=Ae(j)},detailOverrides:()=>({...j}),demCellM:ee,get detailPhaseXZ(){return $d(ee,J.gx,J.gy,j)},detailAt:(se,fe)=>ve.at(se,fe),erosionFilterAt:(se,fe)=>Yt().filter?O(se,fe,h(se,fe)):0,setFilterUnitFrame(se){m=se,g=null},setFilterLevers(se){Object.assign(p,se),y=new Ln(D,x)},filterLevers:()=>({...p}),applyDrainageField(se){u=se,g=null,y=new Ln(D,x)},drainageAt:(se,fe)=>Yt().drainage?f(se,fe):0,channelDistAt:(se,fe)=>{const G=u;if(!G)return 1/0;const P=Math.round((se+G.halfM)/G.cellM),ne=Math.round((fe+G.halfM)/G.cellM);return P<0||ne<0||P>=G.g||ne>=G.g?1/0:G.distM[ne*G.g+P]},renature:()=>({on:r.renature===!0,marked:(o==null?void 0:o.marked)??0,patched:(o==null?void 0:o.patched)??0,left:(o==null?void 0:o.left)??0}),levels:s,water:t}}const Nh=new Set([80,90,95]);function Ih(){return{bodies:[],grid:null,depthAt:()=>0,surfaceYAt:()=>null,bodyAt:()=>null,distToShoreAt:()=>0,insidenessAt:()=>0}}function Sm(n,e,t,i=_.WATER_MIN_BODY_CELLS){const{width:r,height:s,data:o,z:a}=e,l=r*s,c=Th(n.lat,a),h=e.x0*dt,u=e.y0*dt,d=(v,w)=>{const O=am((h+v)/dt,(u+w)/dt,a);return oi(n,O.lat,O.lon)},f=new Int32Array(l).fill(-1),M=[];for(let v=0;v<l;v++){if(f[v]!==-1||!Nh.has(o[v]))continue;const w=M.length,O=[v];f[v]=w;for(let $=0;$<O.length;$++){const re=O[$],oe=re%r;for(const de of[re-r,re+r,oe>0?re-1:-1,oe<r-1?re+1:-1])de>=0&&de<l&&f[de]===-1&&Nh.has(o[de])&&(f[de]=w,O.push(de))}if(O.length<i){for(const $ of O)f[$]=-2;continue}const C=O.map($=>{const re=d($%r+.5,Math.floor($/r)+.5);return t(re.x,re.z)}),W=[...C].sort(($,re)=>$-re),B=O.length,L=(W[B-1>>1]+W[B>>1])/2,X=O.filter(($,re)=>C[re]<=L+_.WATER_MASK_MAX_RISE_M);if(O.forEach(($,re)=>{(C[re]>L+_.WATER_MASK_MAX_RISE_M||X.length<i)&&(f[$]=-2)}),X.length<i)continue;const k=C.filter($=>$<=L+_.WATER_MASK_MAX_RISE_M).sort(($,re)=>$-re),J=k[Math.min(k.length-1,Math.floor(_.WATER_SURFACE_PERCENTILE*(k.length-1)))];let Z=r,ee=-1,me=s,K=-1;for(const $ of X){const re=$%r,oe=($-re)/r;Z=Math.min(Z,re),ee=Math.max(ee,re),me=Math.min(me,oe),K=Math.max(K,oe)}const j=d(Z,me),Q=d(ee+1,K+1),H=X.length;M.push({id:w,surfaceY:J,bbox:{minX:j.x,maxX:Q.x,minZ:j.z,maxZ:Q.z},areaM2:H*c*c,cellCount:H})}const E=new Int32Array(l);for(let v=0;v<l;v++){const w=v%r,O=(v-w)/r;E[v]=f[v]<0?0:w===0||O===0||w===r-1||O===s-1?3:1073741823}const m=(v,w,O)=>{E[w]+O<E[v]&&(E[v]=E[w]+O)};for(const v of[1,-1])for(let w=v>0?0:l-1;w>=0&&w<l;w+=v){if(E[w]===0)continue;const O=w%r,C=w-v*r;(v>0?O>0:O<r-1)&&m(w,w-v,3),!(C<0||C>=l)&&(m(w,C,3),O>0&&m(w,C-1,4),O<r-1&&m(w,C+1,4))}const p=(v,w)=>{const{gx:O,gy:C}=xi(n,v,w,a),W=Math.floor(O)-h,B=Math.floor(C)-u,L=B*r+W;return W<0||B<0||W>=r||B>=s||f[L]<0?-1:L},g=(v,w)=>{const O=p(v,w);return O<0?0:E[O]/3*c},S=(v,w)=>{const O=p(v,w);return O<0?null:M[f[O]]},x=_.WATER_SHORE_BLUR_CELLS,D=(x+1)*(x+1);let y=Float32Array.from(f,v=>v>=0?1:0);for(const[v,w]of[[1,0],[0,1]]){const O=y;y=new Float32Array(l);for(let C=0;C<l;C++){const W=C%r,B=(C-W)/r;let L=0;for(let X=-x;X<=x;X++){const k=W+X*v,J=B+X*w;k>=0&&J>=0&&k<r&&J<s&&(L+=(x+1-Math.abs(X))*O[J*r+k])}y[C]=L/D}}const R=(v,w)=>v<0||w<0||v>=r||w>=s?0:y[w*r+v],N=(v,w,O,C,W)=>.5*(2*w+(-v+O)*W+(2*v-5*w+4*O-C)*W*W+(-v+3*w-3*O+C)*W*W*W);return{bodies:M,grid:e,depthAt:(v,w)=>Math.min(_.WATER_DEPTH_CAP_M,g(v,w)*_.WATER_DEPTH_PER_M_FROM_SHORE),surfaceYAt:(v,w)=>{var O;return((O=S(v,w))==null?void 0:O.surfaceY)??null},bodyAt:S,distToShoreAt:g,insidenessAt:(v,w)=>{const{gx:O,gy:C}=xi(n,v,w,a),W=O-h-.5,B=C-u-.5,L=Math.floor(W),X=Math.floor(B),k=W-L,J=B-X,Z=[-1,0,1,2].map(ee=>N(R(L-1,X+ee),R(L,X+ee),R(L+1,X+ee),R(L+2,X+ee),k));return Math.min(1,Math.max(0,N(Z[0],Z[1],Z[2],Z[3],J)))}}}const Am=n=>{var e;return((e=n.pack)==null?void 0:e.root)??"/fixtures"},el=(n,e="/fixtures")=>`${e}/worldcover/${n}`;function fS(n,e,t,i,r=null){const{midpoint:s}=n.site,o=gu(s.lat,s.lon),a=new Map;n.tiles.forEach((p,g)=>{let S=a.get(p.z);S||a.set(p.z,S=new No(p.z));const x=Ir(s.lon,s.lat,p.z);S.addTile(p.x,p.y,im(e[g]),x.x===p.x&&x.y===p.y)});const l=[...a.values()];i==null||i("tiles-decoded");const c=n.worldcover,h=Ls(t);if(h.channels!==1||h.depth!==8||h.width!==c.width||h.height!==c.height)throw new Error(`worldcover fixture ${c.file}: expected ${c.width}x${c.height} 8-bit grayscale, got ${h.width}x${h.height} ch${h.channels} d${h.depth}`);const u={z:c.z,x0:c.x0,y0:c.y0,cols:c.cols,rows:c.rows,width:c.width,height:c.height,data:h.data};let d=null;const f=n.worldcoverFar;if(f&&f.file&&r){const p=Ls(r);if(p.channels!==1||p.depth!==8||p.width!==f.width||p.height!==f.height)throw new Error(`worldcover far fixture ${f.file}: expected ${f.width}x${f.height} 8-bit grayscale, got ${p.width}x${p.height} ch${p.channels} d${p.depth}`);d={z:f.z,x0:f.x0,y0:f.y0,cols:f.cols,rows:f.rows,width:f.width,height:f.height,data:p.data}}const M=Ja(o,l,Ih(),{},{landformOnly:!0}),E=Sm(o,u,M.landformHeightAt),m=Ja(o,l,E,wm());return i==null||i("world-query"),{manifest:n,frame:o,dems:l,query:m,water:E,grid:u,gridFar:d}}function wm(){if(typeof location>"u")return{};const n=new URLSearchParams(location.search),e={},t=[["detailrms","rmsM",0],["detailaniso","aniso",1e-6],["detailwander","wander",0],["detailravine","ravineDepthM",0],["detailravinelevels","ravineLevels",0],["detailgrain","grainAmpM",0],["reliefcap","reliefCap",0]];for(const[i,r,s]of t){const o=n.get(i);if(o===null)continue;const a=Number(o);if(!Number.isFinite(a)||a<s)throw new Error(`?${i}=${o} is not a finite number >= ${s}`);e[r]=a}return e}async function Oh(n){const e=await fetch(n);if(!e.ok)throw new Error(`fixture missing: ${n} (${e.status})`);return new Uint8Array(await e.arrayBuffer())}async function pS(n){return ym(tm,n)}async function ym(n,e){var l;const t=await Ux(n);e==null||e("manifest");const i=Am(t),r=new Gx(`${i}/tiles`),[s,o,a]=await Promise.all([Promise.all(t.tiles.map(c=>r.getTileBytes(c.z,c.x,c.y))),Oh(el(t.worldcover.file,i)),(l=t.worldcoverFar)!=null&&l.file?Oh(el(t.worldcoverFar.file,i)):Promise.resolve(null)]);return fS(t,s,o,e,a)}function mS(n){var a;const e=(a=n.pack)==null?void 0:a.corridor,t=dm({a:n.site.a,b:n.site.b,nearZoom:(e==null?void 0:e.nearZoom)??n.zooms.near,nearMarginM:(e==null?void 0:e.nearMarginM)??_.CORRIDOR_NEAR_MARGIN_M,coarse:(e==null?void 0:e.coarse)??n.zooms.coarse.map((l,c)=>({zoom:l,radiusM:c===0?_.CORRIDOR_FAR_RADIUS_M:_.CORRIDOR_OUTER_RADIUS_M}))});if(!e)return t;const i=Wx(t);if(i!==e.corridorKey)throw new Error(`pack ${n.pack.id}: corridorKey drift — manifest ${e.corridorKey}, rebuilt ${i}`);const r=t.tiles.map(l=>`${l.z}/${l.x}/${l.y}`),s=n.tiles.map(l=>`${l.z}/${l.x}/${l.y}`),o=r.findIndex((l,c)=>l!==s[c]);if(r.length!==s.length||o>=0)throw new Error(`pack ${n.pack.id}: tile list differs — recorded ${s.length} tiles, corridor ${r.length}${o>=0?`, first difference at ${o}: recorded ${s[o]??"none"} vs corridor ${r[o]}`:""}`);return t}async function gS(n,e,t){const{frame:i,midpoint:r}=n,s=new Map,o=await Promise.all(n.tiles.map(h=>e.getTileBytes(h.z,h.x,h.y)));n.tiles.forEach((h,u)=>{let d=s.get(h.z);d||s.set(h.z,d=new No(h.z));const f=Ir(r.lon,r.lat,h.z);d.addTile(h.x,h.y,im(o[u]),f.x===h.x&&f.y===h.y)});const a=[...s.values()],l=(t==null?void 0:t.grid)??null,c=l?Sm(i,l,Ja(i,a,Ih(),{},{landformOnly:!0}).landformHeightAt):Ih();return{manifest:null,frame:i,dems:a,query:Ja(i,a,c,wm(),{renature:t==null?void 0:t.renature}),water:c,grid:l,gridFar:null}}async function _S(n){var s;const e=n.worldcover,t=Am(n),i=[...n.tiles.map(o=>({file:o.file,url:sm(o.z,o.x,o.y,`${t}/tiles`),sha256:o.sha256})),{file:e.file,url:el(e.file,t),sha256:e.sha256},...(s=n.worldcoverFar)!=null&&s.file?[{file:n.worldcoverFar.file,url:el(n.worldcoverFar.file,t),sha256:n.worldcoverFar.sha256}]:[]],r=[];for(const o of i){const a=await Oh(o.url).catch(()=>null),l=a?new Uint8Array(await crypto.subtle.digest("SHA-256",a)):null;(l?[...l].map(h=>h.toString(16).padStart(2,"0")).join(""):"MISSING")!==o.sha256&&r.push(o.file)}return{ok:r.length===0,mismatches:r}}const oa=14,fi=256,MS={10:[0,100,0],20:[255,187,34],30:[255,255,76],40:[240,150,255],50:[250,0,0],60:[180,180,180],70:[240,240,240],80:[0,100,200],90:[0,150,160],95:[0,207,117],100:[250,230,160]},ES=(n,e,t)=>`https://wmts.terrascope.be/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=esa-worldcover-map-10m-2021-v2_map&STYLE=default&TILEMATRIXSET=EPSG:3857&TILEMATRIX=${n}&TILEROW=${t}&TILECOL=${e}&FORMAT=image/png&TIME=2021-01-01`,vS=Object.entries(MS).map(([n,e])=>({c:Number(n),rgb:e}));function xS(n,e,t){let i=0,r=1/0;for(const s of vS){const o=(n-s.rgb[0])**2+(e-s.rgb[1])**2+(t-s.rgb[2])**2;o<r&&(r=o,i=s.c)}return i}async function SS(n,e,t,i){try{const r=yn(n,e.x0-t,e.z0-t),s=yn(n,e.x1+t,e.z1+t),o=bh(r.lon,r.lat,oa),a=bh(s.lon,s.lat,oa),l=Math.floor(o.xf),c=Math.floor(o.yf),h=Math.floor(a.xf)-l+1,u=Math.floor(a.yf)-c+1,d=h*fi,f=u*fi,M={z:oa,x0:l,y0:c,cols:h,rows:u,width:d,height:f,data:new Uint8Array(d*f)},E=h*u;let m=0,p=0;for(let g=0;g<u;g++)for(let S=0;S<h;S++){let x=null;for(let N=0;N<3&&!x;N++)try{const b=await fetch(ES(oa,l+S,c+g));if(!b.ok)throw new Error(`WMTS ${b.status} at (${l+S},${c+g})`);x=new Uint8Array(await b.arrayBuffer())}catch(b){if(N===2)throw b;await new Promise(v=>setTimeout(v,400*(N+1)))}p+=x.length;const D=Ls(x);if(D.width!==fi||D.height!==fi||D.channels<3)throw new Error(`unexpected WMTS tile shape ${D.width}x${D.height}x${D.channels}`);const y=D.data,R=D.channels;for(let N=0;N<fi;N++){const b=(g*fi+N)*d+S*fi;for(let v=0;v<fi;v++){const w=(N*fi+v)*R;M.data[b+v]=xS(y[w],y[w+1],y[w+2])}}m++,i==null||i({done:m,total:E})}return{grid:M,tiles:E,bytes:p}}catch(r){return console.warn("[liveCover] cover unavailable:",r.message),null}}const AS=`
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
`;function wS(n){const e=document.createElement("style");e.textContent=AS,document.head.appendChild(e);const t=document.createElement("div");t.className="bl-survey",n.appendChild(t);const i=document.createElement("h1");i.textContent="Surveying the terrain…";const r=document.createElement("div");r.className="bl-survey-stage";const s=document.createElement("div");s.className="bl-survey-bar";const o=document.createElement("div");s.appendChild(o);const a=document.createElement("div");a.className="bl-survey-attrib",a.textContent="Elevation: Terrain Tiles (AWS Open Data, Mapzen/Tilezen) · Land cover: © ESA WorldCover 2021 (CC BY 4.0) via Terrascope",t.append(i,r,s,a);const l=performance.now();return{stage:c=>{r.textContent=c,o.style.width="0"},progress:(c,h)=>{o.style.width=`${Math.min(100,100*c/Math.max(1,h)).toFixed(1)}%`},fail:(c,h)=>new Promise(u=>{i.textContent=h??"This line cannot be walked",r.textContent="",s.style.display="none";const d=document.createElement("div");d.className="bl-survey-reasons",d.textContent=c.join("  ·  ");const f=document.createElement("button");f.type="button",f.textContent="Back to the map",t.append(d,f),f.addEventListener("click",()=>{t.remove(),e.remove(),u()})}),done:()=>{const c=performance.now()-l;return t.remove(),e.remove(),c}}}function yS(n){return n<=_.MEDAL_PLATINUM_M?"Platinum":n<=_.MEDAL_GOLD_M?"Gold":n<=_.MEDAL_SILVER_M?"Silver":n<=_.MEDAL_BRONZE_M?"Bronze":"FAILED"}function RS(n,e,t){const i=Math.min(1,Math.max(0,1-e/_.MEDAL_BRONZE_M));return Math.round(_.SCORE_BASE_PER_KM*(n/1e3)*i*_.MEDAL_MULT[t])}const bS=RS,tl=["Sprint","Trek"];function Rm(n){return!(n>=_.CATEGORY_MIN_M)||n>_.CATEGORY_MAX_M?null:n<=_.CATEGORY_SPRINT_MAX_M?"Sprint":n<=_.CATEGORY_TREK_MAX_M?"Trek":"Expedition"}function bm(n){const e=Math.floor(n.elapsedS);return{medal:n.medal,maxDev:`${n.maxDevM.toFixed(1)} m`,avgDev:`${n.avgDevM.toFixed(1)} m`,lineScore:String(n.lineScore),elapsed:`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`,length:`${(n.lengthM/1e3).toFixed(1)} km`}}const Or=0;function TS(){return{classAt:()=>Or,histogram:()=>new Map,grid:null,data:null,rawClassAt:()=>Or,renature:{on:!1,built:0,swapped:0,fallback:0}}}function ef(n,e,t={}){const{width:i,height:r,data:s,z:o}=e,a=e.x0*dt,l=e.y0*dt,c=t.renature===!1?null:Kx(s,i,r),h=c?c.data:s,u=(M,E)=>{const{gx:m,gy:p}=xi(n,M,E,o),g=Math.floor(m)-a,S=Math.floor(p)-l;return g<0||S<0||g>=i||S>=r?Or:h[S*i+g]};return{classAt:u,histogram:(M,E,m,p)=>{const g=p>0?Math.floor(m/p):0,S=m*m,x=new Map;let D=0;for(let R=-g;R<=g;R++)for(let N=-g;N<=g;N++){const b=N*p,v=R*p;if(b*b+v*v>S)continue;const w=u(M+b,E+v);x.set(w,(x.get(w)??0)+1),D++}const y=new Map;for(const[R,N]of x)y.set(R,N/D);return y},grid:e,data:h,rawClassAt:(M,E)=>{const{gx:m,gy:p}=xi(n,M,E,o),g=Math.floor(m)-a,S=Math.floor(p)-l;return g<0||S<0||g>=i||S>=r?Or:s[S*i+g]},renature:{on:c!==null,built:(c==null?void 0:c.built)??0,swapped:(c==null?void 0:c.swapped)??0,fallback:(c==null?void 0:c.fallback)??0}}}const po=60,CS={80:"permanent water",90:"wetland",95:"mangrove"},tf={Sprint:[_.CATEGORY_MIN_M,_.CATEGORY_SPRINT_MAX_M],Trek:[_.CATEGORY_SPRINT_MAX_M,_.CATEGORY_TREK_MAX_M],Expedition:[_.CATEGORY_TREK_MAX_M,_.CATEGORY_MAX_M]},As=n=>(n/1e3).toFixed(2),DS=()=>tl.map(n=>`${n} (${As(tf[n][0])}–${As(tf[n][1])} km)`).join(" and ");function NS(n,e,t,i,r){const s=oi(t,n.lat,n.lon),o=oi(t,e.lat,e.lon),a=Math.hypot(o.x-s.x,o.z-s.z),l=Math.max(2,Math.ceil(a/r)+1),c=a/(l-1);let h=0,u=0;for(let d=0;d<l;d++){const f=d/(l-1);h=i.waterDepthAt(s.x+(o.x-s.x)*f,s.z+(o.z-s.z)*f)>0?h+c:0,h>u&&(u=h)}return u}function IS(n,e,t={}){const i=[];for(const[l,c]of[["A",n],["B",e]])Math.abs(c.lat)>po&&i.push(`Endpoint ${l} is at latitude ${c.lat.toFixed(3)}° — lines can't go beyond ${po}° north or south.`);const{frame:r,cover:s}=t;for(const[l,c]of[["A",n],["B",e]]){const h=r?oi(r,c.lat,c.lon):null,u=h&&s?s.classAt(h.x,h.z):Or;u===Or?t.deferDataRules||i.push(`Endpoint ${l} cannot be confirmed on land — no land-cover data is loaded for that point.`):Nh.has(u)&&i.push(`Endpoint ${l} is not on land — the land cover there is ${CS[u]??`covered by water (class ${u})`}.`)}const o=_u(n,e),a=Rm(o);if(a===null?i.push(`This line is ${As(o)} km long — lines must be between ${As(_.CATEGORY_MIN_M)} km and ${As(_.CATEGORY_MAX_M)} km.`):tl.includes(a)||i.push(`This line is ${As(o)} km long — that is the ${a} band, and only ${DS()} lines can be walked in this version.`),r&&t.query){const l=NS(n,e,r,t.query,t.stepM??_.WATER_SCAN_STEP_M);l>_.WATER_CROSSING_MAX_M&&i.push(`The line crosses ${Math.round(l)} m of water without a break — no single water crossing may exceed ${_.WATER_CROSSING_MAX_M} m.`)}return{valid:i.length===0,reasons:i}}class OS{constructor(e){rt(this,"order",new Map);rt(this,"total",0);this.maxBytes=e}touch(e){const t=this.order.get(e);t!==void 0&&(this.order.delete(e),this.order.set(e,t))}add(e,t){this.order.has(e)&&this.remove(e),this.order.set(e,t),this.total+=t;const i=[];for(const[r,s]of this.order)this.total<=this.maxBytes||r===e||(i.push(r),this.total-=s);for(const r of i)this.order.delete(r);return i}remove(e){const t=this.order.get(e);t!==void 0&&(this.order.delete(e),this.total-=t)}has(e){return this.order.has(e)}get totalBytes(){return this.total}get keys(){return[...this.order.keys()]}}function nf(){const n=new Map;return{backend:"memory",async get(e){return n.get(e)??null},async put(e,t){n.set(e,t)},async delete(e){n.delete(e)}}}function uc(n){return n.replace(/[^A-Za-z0-9._-]/g,"_")}async function rf(n="tile-cache"){var t;const e=(t=globalThis.navigator)==null?void 0:t.storage;if(!(e!=null&&e.getDirectory))return nf();try{const r=await(await e.getDirectory()).getDirectoryHandle(n,{create:!0});return{backend:"opfs",async get(s){try{const o=await r.getFileHandle(uc(s));return new Uint8Array(await(await o.getFile()).arrayBuffer())}catch{return null}},async put(s,o){const l=await(await r.getFileHandle(uc(s),{create:!0})).createWritable();await l.write(o),await l.close()},async delete(s){try{await r.removeEntry(uc(s))}catch{}}}}catch{return nf()}}const Qs=om;function PS(n,e,t,i,r,s){const o=yn(n,e,i),a=yn(n,t,r),l=Ir(o.lon,o.lat,s),c=Ir(a.lon,a.lat,s);return{x0:Math.min(l.x,c.x),x1:Math.max(l.x,c.x),y0:Math.min(l.y,c.y),y1:Math.max(l.y,c.y)}}function LS(n,e){if(n<=0||typeof Worker>"u")return null;const t=[];try{for(let s=0;s<n;s++)t.push(new Worker(new URL(""+new URL("decodeWorker-yhlK0RIH.js",import.meta.url).href,import.meta.url),{type:"module"}))}catch{for(const s of t)s.terminate();return null}const i=t.map(()=>[]);let r=0;return t.forEach((s,o)=>{s.onmessage=a=>{const l=i[o].shift(),c=a.data;l!==void 0&&e(l,"error"in c?null:{width:c.width,height:c.height,elevations:c.elevations})},s.onerror=()=>{for(const a of i[o].splice(0))e(a,null)}}),{submit(s,o){i[r%t.length].push(s);const a=o.slice();t[r++%t.length].postMessage({id:r,bytes:a},[a.buffer])},dispose(){for(const s of t)s.terminate()}}}function US(n){const e=new OS(n.cacheMaxBytes??_.TILE_CACHE_MAX_BYTES),t=new Map,i=new Map,r=new Map,s=new Map,o=new Map;let a=[],l={x:0,y:0,key:""},c=0,h=0,u=0,d=0,f=!1;const M=[],E=new Set;for(const y of n.coarse){const R=PS(n.frame,-y.radiusM,y.radiusM,-y.radiusM,y.radiusM,y.zoom);for(let N=R.y0;N<=R.y1;N++)for(let b=R.x0;b<=R.x1;b++){const v=mr(y.zoom,b,N);E.has(v)||(E.add(v),M.push({z:y.zoom,x:b,y:N,role:"far"}))}}const m=LS(n.decodeWorkers??_.TILE_DECODE_WORKERS,(y,R)=>{const N=o.get(y);R?N&&(d++,N.tile=R):o.delete(y)}),p=y=>t.has(y)||r.has(y)||s.has(y)||o.has(y);async function g(y){const R=`terrarium/${y.z}/${y.x}/${y.y}`;if(n.cache){const b=await n.cache.get(R);if(b)return h++,e.touch(R),b}u++;const N=await n.source.getTileBytes(y.z,y.x,y.y);if(n.cache){await n.cache.put(R,N);for(const b of e.add(R,N.byteLength))await n.cache.delete(b)}return N}function S(y){const R=mr(y.z,y.x,y.y);r.set(R,y),g(y).then(N=>{r.delete(R),!f&&i.has(R)&&s.set(R,{id:y,bytes:N})},()=>{r.delete(R)})}function x(y,R){if(f)return;const N=yn(n.frame,y,R),b=Ir(N.lon,N.lat,n.nearZoom);l={x:b.x,y:b.y,key:mr(n.nearZoom,b.x,b.y)},i.clear();const v=n.nearRadiusTiles;for(let w=-v;w<=v;w++)for(let O=-v;O<=v;O++)i.set(mr(n.nearZoom,b.x+O,b.y+w),{z:n.nearZoom,x:b.x+O,y:b.y+w,role:"near"});for(const w of M){const O=mr(w.z,w.x,w.y);i.has(O)||i.set(O,w)}for(const[w,O]of[...t])i.has(w)||(t.delete(w),c++,n.onUnload(O.id));for(const w of[...o.keys()])i.has(w)||o.delete(w);for(const w of[...s.keys()])i.has(w)||s.delete(w);a=[...i.values()].filter(w=>!p(mr(w.z,w.x,w.y))).sort((w,O)=>{if(w.role!==O.role)return Qs(w,O);const C=(w.x-l.x)**2+(w.y-l.y)**2,W=(O.x-l.x)**2+(O.y-l.y)**2;return Rh(w.role)===0&&C-W||Qs(w,O)})}function D(){var b;if(f)return;for(const[v,w]of[...s])s.delete(v),o.set(v,{id:w.id,job:m?null:FS(w.bytes),tile:null}),m&&m.submit(v,w.bytes);const y=n.decodeRowsPerStep>0?n.decodeRowsPerStep:Number.MAX_SAFE_INTEGER;for(const[v,w]of[...o].sort((O,C)=>Qs(O[1].id,C[1].id)))(b=w.job)!=null&&b.step(y)&&(w.tile=w.job.result()),w.tile&&(o.delete(v),t.set(v,{id:w.id,tile:w.tile}),n.onTile(w.id,w.tile));let R=n.loadsPerStep;const N=[];for(const v of a)mr(v.z,v.x,v.y)===l.key?S(v):R>0?(R--,S(v)):N.push(v);a=N}return{update:x,step:D,drained:()=>a.length===0&&r.size===0&&s.size===0&&o.size===0,stats:()=>({loaded:t.size,queued:a.length,inFlight:r.size,unloaded:c,bytes:e.totalBytes,cacheHits:h,cacheMisses:u,slicing:o.size,decodedByWorker:d}),loaded:()=>[...t.values()].map(y=>y.id).sort(Qs),dispose:()=>{f=!0,a=[],i.clear(),r.clear(),s.clear(),o.clear(),t.clear(),m==null||m.dispose()}}}function FS(n){const e=Ls(n);if(e.depth!==8)throw new Error(`terrarium tile must be 8-bit, got ${e.depth}`);if(e.channels!==3&&e.channels!==4)throw new Error(`terrarium tile must be RGB(A), got ${e.channels} channels`);const{width:t,height:i,channels:r}=e,s=e.data,o=new Float32Array(t*i);let a=0;return{step(l){const c=Math.min(i,a+Math.max(1,Math.floor(l)));if(c>a){const h=nm(s.subarray(a*t*r,c*t*r),t,c-a,r);o.set(h,a*t),a=c}return a>=i},done:()=>a>=i,result(){if(a<i)throw new Error(`sliced decode incomplete: ${a}/${i} rows`);return{width:t,height:i,elevations:o}}}}async function Tm(n,e,t){const i=typeof requestAnimationFrame=="function";let r=performance.now();for(let s=0;s<n;s++)e(s),i&&performance.now()-r>=t&&(await new Promise(o=>requestAnimationFrame(()=>o())),r=performance.now())}const kS=5,BS=1,GS=[[1,1,1,8,8,9,9,9,10],[1,1,8,8,8,9,9,9,0],[1,4,6,6,7,7,9,0,0],[4,4,6,6,6,7,0,0,0],[4,4,5,6,6,0,0,0,0],[3,3,5,5,0,0,0,0,0],[3,3,3,0,0,0,0,0,0],[3,3,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0]],zS=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function HS(n,e,t,i,r=kS,s=BS){const o=new Uint8Array(e*t),a=Math.tan(s*Math.PI/180);for(let l=r;l<t-r;l++)for(let c=r;c<e-r;c++){const h=n[l*e+c];let u=0,d=0;for(const[f,M]of zS){let E=0;for(let m=1;m<=r;m++){const p=n[(l+M*m)*e+(c+f*m)]-h,g=Math.hypot(f*m,M*m)*i,S=p/g;Math.abs(S)>Math.abs(E)&&(E=S)}E>a?u++:E<-a&&d++}o[l*e+c]=GS[d][u]}return o}function VS(n,e,t,i){const r=new Float32Array(e*t);for(let s=1;s<t-1;s++)for(let o=1;o<e-1;o++){const a=s*e+o,l=n[a-e-1],c=n[a-e],h=n[a-e+1],u=n[a-1],d=n[a+1],f=n[a+e-1],M=n[a+e],E=n[a+e+1],m=(h+2*d+E-l-2*u-f)/(8*i),p=(f+2*M+E-l-2*c-h)/(8*i);r[a]=Math.atan(Math.hypot(m,p))*180/Math.PI}return r}function WS(n,e,t,i){const r=new Float32Array(e*t),s=new Float32Array(e*t),o=(h,u,d,f,M,E)=>{const m=[];for(let p=0;p<d+i;p++){if(p<d){const S=h[M+p*f];for(;m.length&&!E(h[M+m[m.length-1]*f],S);)m.pop();m.push(p)}const g=p-i;if(g>=0){for(;m.length&&m[0]<g-i;)m.shift();u[M+g*f]=h[M+m[0]*f]}}};for(let h=0;h<t;h++)o(n,r,e,1,h*e,(u,d)=>u<d),o(n,s,e,1,h*e,(u,d)=>u>d);const a=new Float32Array(e*t),l=new Float32Array(e*t),c=new Float32Array(e*t);for(let h=0;h<e;h++)o(r,l,t,e,h,(u,d)=>u<d),o(s,c,t,e,h,(u,d)=>u>d);for(let h=0;h<e*t;h++)a[h]=c[h]-l[h];return a}function $S(n,e,t){const i=new Float32Array(e*t);for(let r=1;r<t-1;r++)for(let s=1;s<e-1;s++){const o=r*e+s,a=n[o];let l=0;for(const c of[-e-1,-e,-e+1,-1,1,e-1,e,e+1]){const h=n[o+c]-a;l+=h*h}i[o]=Math.sqrt(l/8)}return i}const XS=255;async function KS(n,e,t){const i=await fetch(`${n}/factors/${e}`);if(!i.ok)throw new Error(`factor crop missing: ${n}/factors/${e} (${i.status})`);const r=Ls(new Uint8Array(await i.arrayBuffer()));if(r.width!==t.w||r.height!==t.h)throw new Error(`factor crop ${e}: manifest says ${t.w}x${t.h}, file is ${r.width}x${r.height}`);return{w:t.w,h:t.h,bbox:t.bbox,data:r.data}}function YS(n,e,t){const[i,r,s,o]=n.bbox,a=(t-i)/(s-i),l=(o-e)/(o-r);if(a<0||a>=1||l<0||l>=1)return null;const c=n.data[Math.floor(l*n.h)*n.w+Math.floor(a*n.w)];return c===XS?null:c}async function qS(n,e){const t=Math.floor(n.halfM*2/n.cellM),i=new Float32Array(t*t);return await Tm(t,r=>{for(let s=0;s<t;s++)i[r*t+s]=n.heightAt(s*n.cellM-n.halfM,r*n.cellM-n.halfM)},e),i}async function ZS(n,e,t,i,r){const s=new Map,o={};for(const[a,l]of Object.entries(e))l.absent?o[a]=l.absent:l.file&&l.grid&&s.set(a,await KS(t,l.file,l.grid));return Cm(n,s,o,i,r)}function Cm(n,e,t,i,r){let s=null;if(i){const c=Math.floor(i.halfM*2/i.cellM);if(r&&r.length!==c*c)throw new Error(`buildFactorField: handed z-grid has ${r.length} cells, the derived band needs ${c*c}`);const h=r??new Float32Array(c*c);if(!r)for(let f=0;f<c;f++)for(let M=0;M<c;M++)h[f*c+M]=i.heightAt(M*i.cellM-i.halfM,f*i.cellM-i.halfM);const u=iS(h,c,c,i.cellM),d=Math.round(1e3/i.cellM);s={g:c,cellM:i.cellM,halfM:i.halfM,slope:VS(h,c,c,i.cellM),relief:WS(h,c,c,d),triA:$S(h,c,c),geo:HS(h,c,c,i.cellM),acc:u.acc},t["derived-band"]=`DEM-derived factors cover ±${i.halfM} m of the frame origin at ${i.cellM} m cells; outside that band they read null (counted), by construction`}else t["slope/relief/tri/geomorphon/flowAcc"]="no derived band on this boot (no DerivedSpec passed — pre-S5 caller or a context without a query)";const o=(c,h)=>{if(!s)return null;const u=Math.floor((c+s.halfM)/s.cellM),d=Math.floor((h+s.halfM)/s.cellM),f=5;return u<f||d<f||u>=s.g-f||d>=s.g-f?null:d*s.g+u},a={},l=(c,h,u)=>{const d=e.get(c),f=d?YS(d,h,u):null;return f===null&&(a[c]=(a[c]??0)+1),f};return{at:(c,h)=>{const{lat:u,lon:d}=yn(n,c,h),f=o(c,h),M=(E,m)=>{const p=f!==null&&m?m[f]:null;return p===null&&(a[E]=(a[E]??0)+1),p};return{koppen:l("koppen",u,d),sandPct:l("sand",u,d),clayPct:l("clay",u,d),cfvoPct:l("cfvo",u,d),slopeDeg:M("slopeDeg",(s==null?void 0:s.slope)??null),reliefM:M("reliefM",(s==null?void 0:s.relief)??null),tri:M("tri",(s==null?void 0:s.triA)??null),geomorphon:M("geomorphon",(s==null?void 0:s.geo)??null),flowAcc:M("flowAcc",(s==null?void 0:s.acc)??null),absent:t}},absentCounts:()=>({...a}),inventory:()=>({present:[...e.keys()],absent:{...t}})}}const jS=3,sf=[1/16,4/16,6/16,4/16,1/16];function QS(n,e,t){const i=new Float32Array(e*t),r=new Float32Array(e*t);for(let s=0;s<t;s++){const o=s*e;for(let a=0;a<e;a++){let l=0;for(let c=-2;c<=2;c++){const h=Math.min(e-1,Math.max(0,a+c));l+=sf[c+2]*n[o+h]}i[o+a]=l}}for(let s=0;s<e;s++)for(let o=0;o<t;o++){let a=0;for(let l=-2;l<=2;l++){const c=Math.min(t-1,Math.max(0,o+l));a+=sf[l+2]*i[c*e+s]}r[o*e+s]=a}return r}function dc(n,e,t,i=jS){const r=[];let s=n;for(let o=0;o<i;o++){const a=QS(s,e,t),l=new Float32Array(e*t);for(let c=0;c<e*t;c++)l[c]=s[c]-a[c];r.push(l),s=a}return{bands:r,low:s,w:e,h:t}}function JS(n){const e=new Float32Array(n.low);for(let t=n.bands.length-1;t>=0;t--){const i=n.bands[t];for(let r=0;r<e.length;r++)e[r]=Math.fround(e[r]+i[r])}return e}function Ph(n,e){let t=0;for(let i=0;i<n.length;i++){const r=n[i]-e[i];t+=r*r}return Math.sqrt(t/n.length)}function eA(n,e,t,i){const r=new Float32Array(n),s=new Float32Array(e*t),o=i.rate??.5,a=typeof i.reposeDeg!="number",l=a?i.reposeDeg:null,c=a?0:Math.tan(i.reposeDeg*Math.PI/180),h=[{d:-e-1,len:Math.SQRT2,dx:-1,dy:-1},{d:-e,len:1,dx:0,dy:-1},{d:-e+1,len:Math.SQRT2,dx:1,dy:-1},{d:-1,len:1,dx:-1,dy:0},{d:1,len:1,dx:1,dy:0},{d:e-1,len:Math.SQRT2,dx:-1,dy:1},{d:e,len:1,dx:0,dy:1},{d:e+1,len:Math.SQRT2,dx:1,dy:1}];for(let u=0;u<i.iterations;u++){s.fill(0);for(let d=0;d<t;d++)for(let f=0;f<e;f++){const M=d*e+f,E=l?Math.tan(l[M]*Math.PI/180):c;for(const{d:m,len:p,dx:g,dy:S}of h){if(f+g<0||f+g>=e||d+S<0||d+S>=t)continue;const x=M+m,D=r[M]-r[x],y=E*p*i.cellM;if(D>y){const R=(D-y)*o/16;s[M]-=R,s[x]+=R}}}for(let d=0;d<e*t;d++)r[d]=Math.fround(r[d]+s[d])}return r}const tA=.45;function nA(n,e,t,i){const r=e*t,s=new Float32Array(n),o=typeof i.K!="number",a=o?i.K:null,l=o?0:i.K,c=[],h=10;let u,d,f;for(let M=0;M<i.iterations;M++){if(M%h===0){const{surface:m}=Rr(s,e,t);u=br(m,e,t,i.cellM),d=gm(m,u,e,t),f=Array.from({length:r},(p,g)=>g).sort((p,g)=>m[p]-m[g]||p-g)}let E=0;for(const m of f){const p=u[m];if(p<0)continue;const g=m%e-p%e,S=(m/e|0)-(p/e|0),x=g!==0&&S!==0?Math.SQRT2*i.cellM:i.cellM,y=(a?a[m]:l)*Math.pow(d[m]*i.cellM*i.cellM,tA)*i.dtYears/x,R=(s[m]+y*s[p])/(1+y),N=Math.max(Math.min(s[m],Math.max(R,s[p])),s[p]);E+=s[m]-N,s[m]=Math.fround(N)}c.push(E)}return{h:s,removedPerIter:c}}function iA(n){return n===null?1:n<=3?1.6:n<=7?.45:n<=16?1.25:n<=28?.9:.7}function rA(n,e,t,i){const r=new Float32Array(n);for(let s=0;s<n;s++){const o=t(s),a=i(s),l=o===null?1:1.5-o/100,c=a!==null&&a>=17?1.3:1;r[s]=e*l*c*iA(a)}return r}const jn=30,sA=3.5,oA=300,aA=150,lA=1400,of=2e-5,aa=10;function cA(n,e){const t=Ph(n,new Float32Array(n.length));if(t<=e)return{out:n,clamped:!1};const i=e/t,r=new Float32Array(n.length);for(let s=0;s<n.length;s++)r[s]=n[s]*i;return{out:r,clamped:!0}}function hA(n,e,t,i,r,s,o,a){const l=(globalThis.performance??{now:()=>Date.now()}).now(),c=e*e;let h=34,u=of;if(r){const Q=new Float32Array(c),H=new Array(c),$=new Array(c);for(let re=0;re<e;re++)for(let oe=0;oe<e;oe++){const de=re*e+oe,{x:Me,z:V}=s(oe,re),Ae=r.at(Me,V);Q[de]=30+Math.min(15,(Ae.cfvoPct??15)*.3),H[de]=Ae.sandPct,$[de]=Ae.koppen}h=Q,u=rA(c,of,re=>H[re],re=>$[re])}const d=Yt(),f=d.thermal?eA(n,e,e,{reposeDeg:h,iterations:oA,cellM:t}):n,M=d.streamPower?nA(f,e,e,{K:u,dtYears:lA,iterations:aA,cellM:t}).h:f,E=8,m=dc(n,e,e);let p=0,g=0,S=0,x=0,D=0,y=0,R=!1,N=0;const b=d.thermal||d.streamPower;let v=!1,w;if(!b)w=new Float32Array(n);else{const Q=dc(M,e,e),H=m.bands.length,$=[];for(let oe=0;oe<H;oe++)if(oe<H-1)$.push(Q.bands[oe]);else{const de=new Float32Array(c);for(let ve=0;ve<c;ve++)de[ve]=Q.bands[oe][ve]-m.bands[oe][ve];const{out:Me,clamped:V}=cA(de,sA);v=V;const Ae=new Float32Array(c);for(let ve=0;ve<c;ve++)Ae[ve]=m.bands[oe][ve]+Me[ve];$.push(Ae)}w=JS({bands:$,low:m.low});for(let oe=0;oe<e;oe++)for(let de=0;de<e;de++){const Me=Math.min(de,oe,e-1-de,e-1-oe);if(Me>=E)continue;const V=Me/E,Ae=V*V*(3-2*V),ve=oe*e+de;w[ve]=Math.fround(n[ve]+(w[ve]-n[ve])*Ae)}for(let oe=0;oe<c;oe++){const de=w[oe]-n[oe];w[oe]=Math.fround(n[oe]+aa*Math.tanh(de/aa))}if(o){const oe=new Uint8Array(c);for(let Ae=0;Ae<e;Ae++)for(let ve=0;ve<e;ve++){const{x:Ie,z:be}=s(ve,Ae);o(Ie,be)&&(oe[Ae*e+ve]=1)}const de=4,Me=new Float32Array(c).fill(de+1),V=[];for(let Ae=0;Ae<c;Ae++)oe[Ae]&&(Me[Ae]=0,V.push(Ae));for(let Ae=0;Ae<V.length;Ae++){const ve=V[Ae];if(Me[ve]>=de)continue;const Ie=ve%e,be=ve/e|0;for(const[Ne,se]of[[1,0],[-1,0],[0,1],[0,-1]]){const fe=Ie+Ne,G=be+se;if(fe<0||G<0||fe>=e||G>=e)continue;const P=G*e+fe;Me[P]>Me[ve]+1&&(Me[P]=Me[ve]+1,V.push(P))}}for(let Ae=0;Ae<c;Ae++){const ve=Me[Ae];if(ve>de)continue;const Ie=ve/de,be=Ie*Ie*(3-2*Ie);w[Ae]=Math.fround(n[Ae]+(w[Ae]-n[Ae])*be)}}const re=8;{const oe=new Uint8Array(c);if(o)for(let de=0;de<e;de++)for(let Me=0;Me<e;Me++){const{x:V,z:Ae}=s(Me,de);o(V,Ae)&&(oe[de*e+Me]=1)}for(let de=0;de<re;de++){const{surface:Me}=Rr(w,e,e),V=br(Me,e,e,t),Ae=Array.from({length:c},(Ie,be)=>be).sort((Ie,be)=>Me[be]-Me[Ie]||Ie-be);let ve=0;for(const Ie of Ae){const be=V[Ie];if(be<0||oe[be])continue;const Ne=be%e,se=be/e|0;if(Math.min(Ne,se,e-1-Ne,e-1-se)<E)continue;const fe=Math.max(.005,n[be]-n[Ie]),G=w[Ie]+fe;if(w[be]>G){const P=Math.fround(Math.max(G,n[be]-aa));P<w[be]&&(w[be]=P,ve++)}}if(p=de+1,g+=ve,ve===0)break}{const{surface:de}=Rr(w,e,e),Me=br(de,e,e,t);for(let V=0;V<c;V++){const Ae=Me[V];if(Ae<0||oe[Ae])continue;const ve=Ae%e,Ie=Ae/e|0;if(Math.min(ve,Ie,e-1-ve,e-1-Ie)<E)continue;N++;const be=w[Ae]-w[V]-Math.max(.005,n[Ae]-n[V]);be<=8*Math.abs(w[Ae])*2**-23||(S++,w[Ae]<=n[Ae]-aa+1e-6?(x++,be>y&&(y=be)):be>D&&(D=be))}R=!0}}}let O=0,C=0;if(o)for(let Q=0;Q<e;Q++)for(let H=0;H<e;H++){const $=Q*e+H,{x:re,z:oe}=s(H,Q);o(re,oe)&&(O++,Math.abs(w[$]-n[$])>1e-6&&C++)}const W=new Uint8Array(c);if(o)for(let Q=0;Q<e;Q++)for(let H=0;H<e;H++){const{x:$,z:re}=s(H,Q);o($,re)&&(W[Q*e+H]=1)}const B=200,L=Q=>{const{surface:H}=Rr(Q,e,e),$=br(H,e,e,t);let re=0,oe=-1,de=0;for(let V=0;V<B;V++){let Ae=V*104729%(e*e),ve=0;for(;$[Ae]>=0&&ve++<e*e;){const Ie=$[Ae];if(W[Ie])break;const be=Ie%e,Ne=Ie/e|0;if(Math.min(be,Ne,e-1-be,e-1-Ne)<E)break;Q[Ie]-Q[Ae]>re&&(re=Q[Ie]-Q[Ae],oe=Ie),n[Ie]-n[Ae]>de&&(de=n[Ie]-n[Ae]),Ae=Ie}}let Me=!1;if(oe>=0)for(let V=-3;V<=3&&!Me;V++)for(let Ae=-3;Ae<=3;Ae++){const ve=oe+V*e+Ae;if(ve>=0&&ve<c&&W[ve]){Me=!0;break}}return{worst:re,at:oe,nearWater:Me,srcSamePath:de}},X=L(w),k=L(n),J=X.worst,Z=k.worst,ee=X.srcSamePath,me=X.nearWater,K=X.at,j=(()=>{const Q=dc(w,e,e),H=m.bands.map(($,re)=>({band:`L${re}`,rms:Ph(Q.bands[re],$)}));return H.push({band:"low",rms:Ph(Q.low,m.low)}),H})();return{baked:w,g:e,cellM:t,halfM:i,modeKey:Tr(d),wallMs:(globalThis.performance??{now:()=>Date.now()}).now()-l,budget:j,b1Clamped:v,constraints:{waterCells:O,waterChanged:C,monotonePaths:B,worstUphillM:J,worstUphillSourceM:Z,worstUphillSourceSamePathM:ee,worstUphillNearWater:me,worstUphillAt:K,breachRounds:p,breachFixed:g,breachRemaining:S,breachCapped:x,breachWorst:D,breachWorstCapped:y,breachRan:R,breachPairs:N}}}const Eu=2,Oa=[["evolveDelta",Float32Array],["dir",Int32Array],["isChannel",Uint8Array],["isWater",Uint8Array],["depthM",Float32Array],["prev",Int32Array],["cx",Float32Array],["cz",Float32Array]];function uA(n){let e=5381;for(let t=0;t<n.length;t++)e=(e<<5)+e+n.charCodeAt(t)|0;return(e>>>0).toString(16)}function dA(n,e,t){const i=`v${Eu}|${n}|${e}|${JSON.stringify(t)}`;return`drainage-${uA(i)}-${i.length}`}function mo(n){const e={v:Eu,g:n.g,cellM:n.cellM,halfM:n.halfM,params:n.params,stats:n.stats,lens:Oa.map(([o])=>n[o].length)},t=new TextEncoder().encode(JSON.stringify(e));let i=4+t.length;for(const[o]of Oa)i+=n[o].byteLength;const r=new Uint8Array(i);new DataView(r.buffer).setUint32(0,t.length,!0),r.set(t,4);let s=4+t.length;for(const[o]of Oa){const a=n[o];r.set(new Uint8Array(a.buffer,a.byteOffset,a.byteLength),s),s+=a.byteLength}return r}function Lh(n){try{const e=new DataView(n.buffer,n.byteOffset).getUint32(0,!0),t=JSON.parse(new TextDecoder().decode(n.subarray(4,4+e)));if(t.v!==Eu)return null;let i=4+e;const r={};Oa.forEach(([o,a],l)=>{const c=t.lens[l],h=c*a.BYTES_PER_ELEMENT,u=n.subarray(i,i+h),d=new a(c);new Uint8Array(d.buffer).set(u),r[o]=d,i+=h});const s=new Float32Array(0);return{g:t.g,cellM:t.cellM,halfM:t.halfM,params:t.params,stats:t.stats,z:s,zBase:s,evolve:null,areaM2:s,order:new Int32Array(0),zNode:s,...r}}catch{return null}}async function fA(n,e){try{const t=await n.get(e);return t?Lh(t):null}catch{return null}}async function af(n,e,t){try{await n.put(e,mo(t))}catch{}}const pA="modulepreload",mA=function(n,e){return new URL(n,e).href},lf={},Uh=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=mA(c,i),c in lf)return;lf[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!i)for(let M=o.length-1;M>=0;M--){const E=o[M];if(E.href===c&&(!h||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":pA,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((M,E)=>{f.addEventListener("load",M),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},cf=[{prop:"sand",cov:"sand_5-15cm_mean",scale:.1},{prop:"clay",cov:"clay_5-15cm_mean",scale:.1},{prop:"cfvo",cov:"cfvo_5-15cm_mean",scale:.1}],gA=(n,e,t)=>`https://maps.isric.org/mapserv?map=/map/${e}.map&SERVICE=WCS&VERSION=2.0.1&REQUEST=GetCoverage&COVERAGEID=${n}&FORMAT=GEOTIFF_INT16&SUBSET=long(${t.minLon.toFixed(5)},${t.maxLon.toFixed(5)})&SUBSET=lat(${t.minLat.toFixed(5)},${t.maxLat.toFixed(5)})&SUBSETTINGCRS=http://www.opengis.net/def/crs/EPSG/0/4326&OUTPUTCRS=http://www.opengis.net/def/crs/EPSG/0/4326`;async function _A(n,e,t){const{fromArrayBuffer:i}=await Uh(async()=>{const{fromArrayBuffer:h}=await import("./geotiff-D0qbJB_n.js").then(u=>u.g);return{fromArrayBuffer:h}},[],import.meta.url),s=await(await i(n)).getImage(),o=s.getWidth(),a=s.getHeight(),l=(await s.readRasters())[0],c=new Uint8Array(o*a);for(let h=0;h<o*a;h++){const u=l[h];c[h]=u<0?255:Math.min(254,Math.round(u*e))}return{w:o,h:a,bbox:[t.minLon,t.minLat,t.maxLon,t.maxLat],data:c}}async function MA(n,e){try{const t=new Map;let i=0,r=0;for(const{prop:s,cov:o,scale:a}of cf){let l=null;for(let c=0;c<3&&!l;c++)try{const h=await fetch(gA(o,s,n));if(!h.ok)throw new Error(`WCS ${h.status} for ${o}`);l=await h.arrayBuffer()}catch(h){if(c===2)throw h;await new Promise(u=>setTimeout(u,400*(c+1)))}i+=l.byteLength,t.set(s,await _A(l,a,n)),e==null||e(++r,cf.length)}return{grids:t,bytes:i}}catch(t){return console.warn("[liveFactors] soil unavailable:",t.message),null}}function Dm(n,e,t,i,r,s){return{phase:"arriving",a:n,b:e,aLatLon:t,bLatLon:i,lengthM:r,bearingRad:s,elapsedS:0,timePenaltyS:0,tick:0,xtdM:0,xtdSignedM:0,maxDevM:0,meanDevM:0,devDistSumM2:0,pathLenM:0,lastX:n.x,lastZ:n.z,alongM:0,distToBM:r,medal:"Platinum",lineScore:0,track:[],worstIndex:-1}}function EA(n,e,t){const i=um(n,e,t);return{frame:i.frame,state:Dm(i.a,i.b,n,e,i.lengthM,i.bearingRad)}}function vA(n){n.phase==="arriving"&&(n.phase="walking")}function xA(n,e){const t=n.mission;if(t.phase!=="walking")return;t.elapsedS+=e,t.tick++;const i={x:n.player.x,z:n.player.z},r=cm(t.a,t.b,i);t.xtdSignedM=r.xtdSigned,t.xtdM=r.dist,t.alongM=r.along,t.distToBM=ml(t.b,i),t.maxDevM=Math.max(t.maxDevM,r.dist);const s=Math.hypot(i.x-t.lastX,i.z-t.lastZ);t.lastX=i.x,t.lastZ=i.z,t.devDistSumM2+=r.dist*s,t.pathLenM+=s,t.meanDevM=t.pathLenM>0?t.devDistSumM2/t.pathLenM:r.dist,t.medal=yS(t.maxDevM),t.lineScore=bS(t.lengthM,t.meanDevM,t.medal);const o=t.distToBM<=_.FINISH_RADIUS_M;(o||t.elapsedS>=t.track.length*_.TRACK_SAMPLE_S)&&(t.track.push({t:t.elapsedS,x:i.x,z:i.z,xtd:r.xtdSigned}),(t.worstIndex<0||Math.abs(r.xtdSigned)>Math.abs(t.track[t.worstIndex].xtd))&&(t.worstIndex=t.track.length-1)),o&&(t.phase="finished")}function wo(n){return{medal:n.medal,maxDevM:n.maxDevM,avgDevM:n.meanDevM,lineScore:n.lineScore,elapsedS:n.elapsedS,lengthM:n.lengthM,finished:n.phase==="finished"}}function SA(n){n.track.length=0,Object.assign(n,Dm(n.a,n.b,n.aLatLon,n.bLatLon,n.lengthM,n.bearingRad),{track:n.track})}function AA(n=_.SIM_DT,e=_.SIM_MAX_STEPS_PER_FRAME){let t=0,i=0;return{get tick(){return i},advance(r,s){t+=r;let o=0;for(;t>=n&&o<e;)s(n),t-=n,o++,i++;return t>=n&&(t=0),o},reset(){t=0,i=0}}}function Nm(n){return{fwd:n.fwd,strafe:n.strafe,yaw:n.yaw,pitch:n.pitch,sprint:n.sprint}}class vu{constructor(){rt(this,"frames",[])}record(e){this.frames.push(Nm(e))}clear(){this.frames.length=0}toJSON(){return JSON.stringify(this.frames)}static fromJSON(e){const t=new vu;for(const i of JSON.parse(e))t.record(i);return t}}const wA=5669058,yA=14209242,RA=15912860,bA=14271648,TA=13088440,CA=12894934,DA=16766624,NA=10466520,IA=7036744,OA=10466520,PA=16052974,LA=9278364,UA=0,FA=`
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
}`,kA=`
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
}`;function BA(n){n.renderer.toneMapping=yi;const e=["localhost","127.0.0.1","::1",""].includes(location.hostname)?Number(new URLSearchParams(location.search).get("sunaz")):NaN,t=Rl.degToRad(Number.isFinite(e)?e:_.SUN_AZIMUTH_DEG),i=Rl.degToRad(_.SUN_ELEVATION_DEG),r=new ue(Math.sin(t)*Math.cos(i),Math.sin(i),-Math.cos(t)*Math.cos(i)),s=new We(wA),o=new We(yA),a=new We(RA),l=[{distM:_.FOG_BAND_1_M,color:new We(bA)},{distM:_.FOG_BAND_2_M,color:new We(TA)},{distM:_.FOG_BAND_3_M,color:new We(CA)},{distM:_.FAR_SHELL_OUTER_M,color:o}],c=new et(_.FOG_START_M,_.FOG_HALF_DISTANCE_SEA_M,1/_.FOG_DENSITY_HALF_HEIGHT_M,_.FOG_DENSITY_FLOOR),h=_.TERRAIN_WIND_FROM_DEG*Math.PI/180,u=new et(0,0,Math.sin(h)*_.CLOUD_DRIFT_MPS,-Math.cos(h)*_.CLOUD_DRIFT_MPS),d=new et(Math.sin(h),-Math.cos(h),0,0),f=new Gt({vertexShader:FA,fragmentShader:kA,uniforms:{uZenith:{value:s},uHorizon:{value:o},uSunGlow:{value:a},uSunDir:{value:r},uCloud:{value:u},uFront:{value:d},uCloudLit:{value:new We(PA)},uCloudBase:{value:new We(LA)}},side:un,depthWrite:!1,fog:!1}),M=new vt(new fu(_.SKY_DOME_RADIUS_M,32,16),f);M.frustumCulled=!1,M.renderOrder=10,n.scene.add(M);const E=new Sh(NA,IA,_.HEMI_INTENSITY),m=new Lp(DA,_.SUN_INTENSITY);m.position.copy(r).multiplyScalar(1e3);const p=new Sh(OA,UA,_.SKYLIGHT_INTENSITY),g=Rl.degToRad(_.SKYLIGHT_AXIS_TILT_DEG),S=Math.max(1e-6,Math.hypot(r.x,r.z));return p.position.set(r.x/S*Math.sin(g),Math.cos(g),r.z/S*Math.sin(g)),n.scene.add(E,m,p),{skyZenith:s,skyHorizon:o,sunGlow:a,fogBands:l,sunDir:r,fogK:c,cloud:u,front:d,lights:{sun:m,hemi:E,skylight:p},update:x=>{M.position.copy(x.camera.position),u.y=x.clock.simTick*_.SIM_DT},dispose:()=>{n.scene.remove(M,E,m,p),M.geometry.dispose(),f.dispose()}}}const GA=7313983,zA=8361032,HA=9408338,VA=9014654;function WA(n){const e=Math.min(1,Math.max(0,(n-(_.TERRAIN_SLOPE_ROCK_DEG-_.TERRAIN_SLOPE_BLEND_DEG))/(2*_.TERRAIN_SLOPE_BLEND_DEG)));return e*e*(3-2*e)}function $A(n,e,t,i){const r=hf((i-_.SNOW_ALT_LO_M)/(_.SNOW_ALT_HI_M-_.SNOW_ALT_LO_M)),s=1-hf((n-_.SNOW_SLOPE_LO_DEG)/(_.SNOW_SLOPE_HI_DEG-_.SNOW_SLOPE_LO_DEG)),o=Math.hypot(e,t),a=o>1e-4?(e*XA+t*KA)/o:0;return Math.min(1,Math.max(0,r*s*(1-_.SNOW_ASPECT_MELT*Math.max(0,a))))}const Im=_.SUN_AZIMUTH_DEG*Math.PI/180,XA=Math.sin(Im),KA=-Math.cos(Im);function hf(n){const e=Math.min(1,Math.max(0,n));return e*e*(3-2*e)}const YA=15659767,qA=7303026,ZA=10722402,jA=7234104,QA=5787960,JA=7369055,ew=9933962,tw=5985347,nw=9145728,iw=5266479,rw=6122551,sw=7304057,ow="vec3(0.78, 0.80, 0.92)",aw="vec3(0.56, 0.56, 0.62)",lw="vec3(0.52, 0.54, 0.64)",cw="vec3(1.30, 1.06, 0.52)",hw="vec3(1.30, 0.95, 0.55)",uw="vec3(1.30, 1.00, 0.58)",dw="vec3(0.56, 0.70, 1.08)",fw="vec3(1.44, 1.30, 0.92)",Je=n=>n.toFixed(4),pw=`
uniform vec3 uFogC1, uFogC2, uFogC3, uHorizon, uSunGlow, uSunDir;
uniform vec4 uFogD;   // band distances: 1, 2, 3, end (= FAR_SHELL_OUTER_M)
uniform vec4 uFogK;   // start, sea-level half distance, 1/density half-height, density floor
uniform vec4 uFront;  // THE FRONT: upwind dirX, dirZ, d(overcast)/dm, d(fog-half multiplier)/dm
varying vec3 blWorldPos;
float blHash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float blNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(blHash(i), blHash(i + vec2(1.0, 0.0)), f.x), mix(blHash(i + vec2(0.0, 1.0)), blHash(i + vec2(1.0, 1.0)), f.x), f.y); }
vec3 blHorizon(vec3 dir) {
  return mix(uHorizon, uSunGlow, pow(max(dot(dir, uSunDir), 0.0), ${Je(_.SKY_SUN_GLOW_EXPONENT)}));
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
  fc = mix(fc, blHorizon(rel / max(d, 1e-3)), ${Je(_.FOG_HORIZON_BLEND_MAX)} * smoothstep(uFogD.z, uFogD.w, d));
  // THE FRONT (item 10 sub-task 4). The half-distance is a FIELD: it shortens toward the bearing the
  // weather is coming from, so the ridge the front is behind goes murky while the ground at your feet
  // does not. Without this the front lives only in the sky, and "weather over a ridge" is exactly the
  // read that needs the ridge to take it too.
  //
  // A MULTIPLIER on uFogK.y, and exactly 1.0 at the walker (rel = 0) by construction — so every value
  // this fog was ever measured at is the value it still reads, and a uniform sky (which includes sim
  // tick 0, where the front's gradients are 0) is bit-identical to before this existed.
  // blHalf, not half: half is a RESERVED WORD in GLSL ES.
  float blHalf = uFogK.y * clamp(1.0 + uFront.w * dot(rel.xz, uFront.xy), ${Je(_.WEATHER_FRONT_FOG_MIN)}, ${Je(_.WEATHER_FRONT_FOG_MAX)});
  float f = 1.0 - exp2(-max(d - uFogK.x, 0.0) * blAirMass(cameraPosition.y, blWorldPos.y) / blHalf);
  return mix(col, fc, f);
}`;function Fr(n){if(n.fogBands.length!==4)throw new Error("fogUniforms: expected 3 fog stops + the horizon");const[e,t,i,r]=n.fogBands;return{uFogC1:{value:e.color},uFogC2:{value:t.color},uFogC3:{value:i.color},uHorizon:{value:r.color},uSunGlow:{value:n.sunGlow},uSunDir:{value:n.sunDir},uFogD:{value:new et(e.distM,t.distM,i.distM,r.distM)},uFogK:{value:n.fogK},uFront:{value:n.front}}}function kr(n,e){Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 blWorldPos;`).replace("#include <project_vertex>",`#include <project_vertex>
#ifdef USE_INSTANCING
  blWorldPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+pw).replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = blFog(gl_FragColor.rgb);
#include <tonemapping_fragment>`)}const mw=`
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
// ══ T3: the canopy painted from the WorldCover raster (trees-distance S1, D324/D325) ══
uniform sampler2D uCoverTex;   // R8 nearest: the class code per texel (canopyPaint.ts)
uniform vec4 uCoverFrame;      // lat0, lon0, metresPerDegLon, 2^zoom  (declared in BOTH stages — a uniform used and not declared renders NOTHING, c247)
uniform vec4 uCoverOrigin;     // x0 px, y0 px, width px, height px
uniform sampler2D uCoverTexFar; // S4 (D329): the OUTER crop (WC_FAR_Z) — sampled only where the fine crop's UV falls outside it
uniform vec4 uCoverOriginFar;  // x0 px, y0 px, width px, height px in the OUTER zoom's global pixels
uniform vec2 uCoverFar;        // x: 1 when the pack carries an outer crop, y: 2^(fine zoom − outer zoom) (the pixel scale between them)
uniform vec4 uCanopy;          // on (0|1), cell m, relief m, edge darkening
uniform float uCanopyEdge;     // 1 = the shipped edge (3x3 + noise-warped threshold); 0 = the HARD nearest-cell paint, the class-edge instrument's failing arm (?canopyedge=hard)
uniform vec3 uCanopyCol;       // the pack's canopy albedo, from the near trees' atlases
uniform vec3 uDuff;            // trees-finish S1.1: on (0|1), CANOPY_DUFF_MIX, CANOPY_DUFF_MOTTLE
uniform vec3 uDuffCol;         // ...and the duff albedo, from the litter species' own root/tip (canopyPaint.ts)
uniform vec4 uTreeRing;        // the WALKER x, z (written every frame by main.ts), the radius the paint is full from (DRESSING_FAR_M − DRESSING_RECENTER_M), the ramp width before it (DRESSING_RECENTER_M) — S3/D328; S1 measured it from the anchor at TREE_FAR_M
varying vec2 blCoverUv;
float blCanopyLabel = 0.0;     // written by blAlbedo; ?paintsrc=1 paints the fragment yellow where it is > 0.5
// the cover weight at a raster UV: 1 on tree cover, the shrub / mangrove weights on theirs, 0 elsewhere and OUTSIDE THE CROP
// (COVER_UNKNOWN is never substituted, D5/D11 — beyond the recorded crop there is no paint, and the reader counts it as no data)
float blCoverW(vec2 uv) {
  float c;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
    // S4 (D329): beyond the fine crop, the OUTER crop — the fine UV mapped through global pixels into the outer raster
    if (uCoverFar.x < 0.5) return 0.0;
    vec2 gp = uCoverOrigin.xy + uv * uCoverOrigin.zw;
    vec2 uv2 = (gp / uCoverFar.y - uCoverOriginFar.xy) / uCoverOriginFar.zw;
    if (uv2.x < 0.0 || uv2.y < 0.0 || uv2.x > 1.0 || uv2.y > 1.0) return 0.0;
    c = texture2D(uCoverTexFar, uv2).r * 255.0;
  } else {
    c = texture2D(uCoverTex, uv).r * 255.0;
  }
  return abs(c - 10.0) < 0.5 ? 1.0 : abs(c - 20.0) < 0.5 ? ${Je(_.CANOPY_SHRUB_W)} : abs(c - 95.0) < 0.5 ? ${Je(_.CANOPY_MANGROVE_W)} : 0.0;
}
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
  float carp = pow(${Je(_.GROUNDCOVER_FULL_M)} / max(dist, ${Je(_.GROUNDCOVER_FULL_M)}), ${Je(_.GROUNDCOVER_FALLOFF_POW)})
    * (1.0 - smoothstep(${Je(_.GROUNDCOVER_FAR_M*_.GROUNDCOVER_FADE_FRAC)}, ${Je(_.GROUNDCOVER_FAR_M)}, dist));
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
  vec2 vp = xz / ${Je(_.TERRAIN_CRAG_VARY_M)}, down = n.xz / max(length(n.xz), 1e-4), gp = xz / ${Je(_.TERRAIN_GULLY_WAVE_M)};
  float lA = 0.5 * (blNoise(vec2(xz.x / 18.0, yy)) + blNoise(vec2(xz.y / 18.0 + 7.7, yy + 3.3))), lB = blNoise(vec2(xz.x / 40.0 + 2.2, yy / 2.4));
  float ledge = mix(lA, lB, smoothstep(0.42, 0.58, blNoise(blRot * vp * 1.4 + 8.8))), la = cm * uCrag.y * smoothstep(0.28, 0.58, blNoise(vp + 3.7));
  float gully = (blNoise(gp) + blNoise(gp + down * 0.8) + blNoise(gp + down * 1.6) + blNoise(gp + down * 2.4)) * 0.25;
  vec3 crag = uColRock * mix(vec3(1.0), ${aw}, la * (1.0 - smoothstep(0.40, 0.52, ledge))) * (1.0 + 0.2 * la * smoothstep(0.60, 0.70, ledge));
  float ledgeH = cm * la * (0.5 - ledge) * (1.0 - smoothstep(0.1, 0.3, mpp / uCrag.x));   // -> blH below: the ink strokes become steps the sun can read
  crag *= mix(vec3(1.0), ${lw}, cm * ${Je(_.TERRAIN_GULLY_AMP)} * smoothstep(0.60, 0.70, gully) * (1.0 - smoothstep(0.1, 0.3, mpp / ${Je(_.TERRAIN_GULLY_WAVE_M)})));
  col = mix(col, crag * mix(vec3(1.0), ${ow}, smoothstep(uSlope.x - uSlope.y, uSlope.x + 18.0, slopeDeg)), rock);
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
  vec2 fp = xz / ${Je(_.TERRAIN_SCREE_WAVE_M)}; float fan = (blNoise(fp) + blNoise(fp + down * 1.5) + blNoise(fp + down * 3.0)) / 3.0, ease = clamp(dot(blGrad(n.y).xz, down) * 400.0, 0.0, 1.0);
  col = mix(col, uColScree, cm * smoothstep(uPatch.w, uCrag.w, rockDeg) * (1.0 - smoothstep(uCrag.w + 2.0, uCrag.w + 10.0, rockDeg))
    * smoothstep(${Je(_.TERRAIN_SCREE_COVER)}, ${Je(_.TERRAIN_SCREE_COVER+.24)}, fan) * pow(ease, ${Je(_.TERRAIN_SCREE_FADE_POW)})
    * (1.0 - smoothstep(0.1, 0.3, mpp / ${Je(_.TERRAIN_SCREE_WAVE_M)})));
  // relief below the DEM's resolution, SHADING ONLY (blH -> blBump), faded by view distance and footprint: knolls (TERRAIN_KNOLL_*) + hummocks (TERRAIN_HUMMOCK_*) to TERRAIN_RELIEF_FADE_M.
  vec2 fq = xz / uFleck.x;
  float hk = blNoise2(blRot * xz / ${Je(_.TERRAIN_HUMMOCK_WAVE_M)} + 31.0);
  // THE HANDOVER, driven by carp. Measured on S1 at round 1: local contrast inside the carpet is 16.8 % of the
  // mean and beyond it 5.0 %, so what a walker sees at the ring is a CONTRAST step, not a density one. TERRAIN_QUIET
  // exists because the carpet owns the near field; this is the other end of the same trade.
  float hand = 1.0 + uHand * (1.0 - carp);
  float rf = 1.0 - smoothstep(${Je(_.TERRAIN_RELIEF_FADE_M*.5)}, ${Je(_.TERRAIN_RELIEF_FADE_M)}, dist);
  blH = rock * ${Je(_.TERRAIN_CRAG_LEDGE_BUMP)} * ledgeH + rf * (${Je(_.TERRAIN_KNOLL_M)} * (1.0 - smoothstep(0.1, 0.3, mpp / ${Je(_.TERRAIN_KNOLL_WAVE_M)})) * (blNoise2(xz / ${Je(_.TERRAIN_KNOLL_WAVE_M)} + 57.0) - 0.5)
    + hand * ${Je(_.TERRAIN_HUMMOCK_M)} * (1.0 - smoothstep(0.1, 0.3, mpp / ${Je(_.TERRAIN_HUMMOCK_WAVE_M)})) * (hk - 0.5));
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
    + ${Je(_.TERRAIN_APRON_MIX)} * smoothstep(${Je(_.ROCK_SLOPE_LO_DEG)}, ${Je(_.ROCK_SLOPE_HI_DEG)}, rockDeg) * mix(0.35, 1.0, ease), 0.0, 1.0);
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
  col *= 1.0 + fm * uFleck.y * (2.0 * t - 1.0) * mix(${hw}, ${cw}, t) * mix(1.0, 0.45, bare); // the 0.8 m tussock scale also breaks up bare ground (free — the field is already sampled)
  // SUBTRACTED here: the 0.24 m tuft crown/gap decals and the 0.09 m blade decals. Both were footprint-sharp blEdge cuts mixing
  // straight to COL_DRY / COL_TURFD — hard-edged puzzle-piece shapes at exactly the wavelength a walker reads — and the 0.09 m
  // pair duplicated the grit fine octave's own wavelength, which is D52's "two fields at one wavelength" warning coming true in
  // albedo instead of relief. The sub-metre band now belongs to the instanced ground-cover geometry, which is where D55/D56 say
  // walking-scale structure has to come from. What is left at 0.8 m is RELIEF the sun models: directional and light-consistent,
  // so it reads as ground rather than as pattern.
  blH += mix(1.0, 0.12, bare) * ${Je(_.TERRAIN_FLECK_BUMP)} * fm * (f1 - 0.5);
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
  vec2 bq = xz / ${Je(_.TERRAIN_GRAIN_WAVE_M)}, streak = down * (aniso * uGrainStreak);
  // 0.9326 = 0.6 x 1.5544, and the 1.5544 is MEASURED, not chosen (D52's rule): averaging three taps one wavelength apart drops
  // this field's sd from 0.2147 to 0.1381, so re-using the shipped 0.6 would have landed the grain 36 % quieter than the frame
  // it replaces — a fix that quietly re-opens the "smooth blanket" finding it is not supposed to touch.
  float fine = ((blNoise(bq - streak) + blNoise(bq) + blNoise(bq + streak)) / 3.0 - 0.5) * 0.9326
    + (blNoise(blRot * xz / ${Je(_.TERRAIN_GRAIN_WAVE_M*.37)} + 3.1) - 0.5) * 0.4 * (1.0 - smoothstep(0.1, 0.3, mpp / ${Je(_.TERRAIN_GRAIN_WAVE_M*.37)}));
  // ══ T3: THE CANOPY, PAINTED (trees-distance S1, D324/D325) ══
  // Where the raster says tree cover, the ground past the tree ring IS the canopy's top: the pack's own crown colour
  // (canopyPaint.ts — the near trees' foliage atlases through the shelf's species weights, so the far paint is the
  // colour of the trees in front of it by construction), crown-scale RELIEF through blH so the sun models crowns as
  // bumps rather than a green stain, the stand's EDGE cells a shade darker (a wood's edge from above is a shadow
  // line), and the 10 m cell boundary BROKEN by a noise-warped threshold on a 3×3 neighbourhood so no cell draws its
  // own square (§10's class-edge bound; D291's "blocky camouflage" is the edge). It shows where the CAMERA IS ABOVE
  // THE TREES over that ground, and everywhere beyond the tree ring - see the two gates below - so from the air the
  // impostors stand on canopy (they cover only 10-30 % of their forest ground from above, S0's reach table) and the
  // 300 m cliff the aerial baseline measured (10-30 pts) has nothing to step off, while at eye height the floor under
  // the near and mid trees stays the floor. Footprint-gated like every octave here. 0 draw calls, 0 triangles: a term on the material
  // the chunks and the far shell already share. ?canopy=0 is the A/B arm (uCanopy.x).
  {
    vec2 ctx = 1.0 / uCoverOrigin.zw;
    // THE EDGE WANDERS, IT DOES NOT STEP. The raster is axis-aligned 10 m cells, and at 60 m a cell is 44 px: a threshold
    // warp alone left a STAIRCASE where the wood met the grass (the first gated S1 frame, keswick h60-y75 — D291's "blocky
    // camouflage", exactly). So the LOOKUP POSITION is warped, at two scales (a 30 m and a 9 m field), by up to ~0.9 cell in
    // total — bounded by the raster's own positional accuracy (WorldCover's stated geolocation error is about one 10 m
    // pixel), so no cell is ever asked to be somewhere the data could not have put it. The 3x3 neighbourhood then reads
    // through the warped position; the HARD arm (uCanopyEdge = 0) keeps neither.
    // ⚠ TWO noise reads per scale — one per axis. The first version summed two floats into a vec2, which GLSL ES does not
    // convert: the program failed to COMPILE and the terrain rendered as nothing (the sky showed through under the trees)
    // while calls and triangles stayed identical — the c247 trap, re-paid because the edit went into a chain before ONE frame.
    // Gains 3.0 and 1.5, NOT 1.2 and 0.6 (the first fix): (blNoise2 − 0.5) has sd ≈ 0.13, not 0.5 — this shader's own D52
    // lesson, in the exposure comment above — so the first gains displaced the edge by ~2 m against a 10 m cell and the
    // staircase stayed. 3.0 × 0.13 + 1.5 × 0.13 ≈ 0.6 cell of spread, extremes near one cell: inside the raster's accuracy.
    vec2 warp = ((vec2(blNoise2(xz / 30.0 + 17.1), blNoise2(blRot * xz / 30.0 + 53.9)) - 0.5) * 3.0
               + (vec2(blNoise2(blRot * xz / 9.0 + 4.4), blNoise2(xz / 9.0 + 29.7)) - 0.5) * 1.5) * uCanopyEdge;
    vec2 cuv = blCoverUv + warp * ctx;
    float cw = 0.34 * blCoverW(cuv);
    cw += 0.0825 * (blCoverW(cuv + vec2(ctx.x, 0.0)) + blCoverW(cuv - vec2(ctx.x, 0.0)) + blCoverW(cuv + vec2(0.0, ctx.y)) + blCoverW(cuv - vec2(0.0, ctx.y)));
    cw += 0.0825 * (blCoverW(cuv + ctx) + blCoverW(cuv - ctx) + blCoverW(cuv + vec2(ctx.x, -ctx.y)) + blCoverW(cuv + vec2(-ctx.x, ctx.y)));
    cw = mix(blCoverW(blCoverUv), cw, uCanopyEdge);                                     // the HARD arm: the raw cell, no neighbourhood, no warp
    float edgeN = (blNoise2(xz / (uCanopy.y * 0.9) + 71.3) - 0.5) * uCanopyEdge;        // ...and no warp
    float standW = smoothstep(0.42 + 0.36 * edgeN, 0.58 + 0.36 * edgeN, cw);
    float canopyW = standW;
    // WHERE the canopy is seen instead of the floor - two gates, the larger wins:
    //  (a) ABOVE THE CANOPY: the camera stands higher over THIS ground than a tree is tall (the shelf's TREE_SIZE_MIN..MAX,
    //      5 -> 17 m), so it looks down onto crowns - every aerial pose, and a walker on a ridge above a forested valley;
    //      at eye height on the ground the camera is 1.7 m up and the floor stays a floor, uphill or down (c260: a
    //      distance ramp across the impostor band painted the eye-height floor and still left the 60 m poses half bare,
    //      because "far from the anchor" is not what separates a floor from a canopy - height over the ground is);
    //  (b) BEYOND THE TREE RING: over the last DRESSING_ANCHOR_M before TREE_FAR_M from the ring ANCHOR (the lag the ring
    //      moves in, D80), so the far forest is canopy from any height and the 300 m cliff has nothing to step off.
    float above = smoothstep(${Je(_.TREE_SIZE_MIN_M)}, ${Je(_.TREE_SIZE_MAX_M)}, cameraPosition.y - blWorldPos.y);
    float canopyGate = max(smoothstep(uTreeRing.z - uTreeRing.w, uTreeRing.z, length(xz - uTreeRing.xy)), above);
    canopyW *= canopyGate;
    canopyW *= uCanopy.x;
    float crownFp = 1.0 - smoothstep(0.1, 0.3, mpp / uCanopy.y);
    float crown = blNoise2(xz / uCanopy.y + 5.7);
    vec3 canopyCol = uCanopyCol * (0.80 + 0.40 * (crown - 0.5) * 2.0 * crownFp);
    canopyCol *= 1.0 - uCanopy.w * (1.0 - abs(2.0 * clamp(cw, 0.0, 1.0) - 1.0));
    col = mix(col, canopyCol, canopyW);
    blH += canopyW * uCanopy.z * (crown - 0.5) * crownFp;
    blCanopyLabel = canopyW;
    // ══ trees-finish S1.1 (D344): THE FLOOR, PAINTED — the EXACT COMPLEMENT of the gate above ══
    // On forest ground the two gates are one decision: standW * canopyGate is seen from above the crowns or beyond
    // the ring and is painted as canopy; standW * (1 - canopyGate) is seen from UNDER those crowns and is the floor.
    // Until now the second half was open-fell paint with the sward on top of it, which is the whole of the baseline
    // panel's floor_edges 1 ("the grass runs unchanged to the trunk, no litter"). This costs 0 draw calls and 0
    // triangles for the same reason the canopy term does — it is a term on a material the chunks and the far shell
    // already share — and it reaches where the ground-cover ring cannot: litter's own maxM is 14 m and the
    // under-canopy pose's ground runs to the fog. The duff COLOUR is the litter species' own (canopyPaint derives it
    // from the SPECIES table's root/tip, the same way the canopy colour is derived from the trees' own atlases), so the
    // paint and the clumps standing on it cannot disagree about what a forest floor is made of.
    // ⚠ The two arms are ORTHOGONAL: ?canopy=0 zeroes uCanopy.x and leaves the floor, ?duff=0 zeroes uDuff.x and
    // leaves the canopy. A duff written as standW - canopyW would have painted the whole stand brown under ?canopy=0.
    float duffW = standW * (1.0 - canopyGate) * uDuff.x;
    float duffN = blNoise2(xz / ${Je(_.CANOPY_DUFF_WAVE_M)} + 91.7);
    duffW *= uDuff.y * (1.0 - uDuff.z * (duffN - 0.5)) * (1.0 - smoothstep(0.1, 0.3, mpp / ${Je(_.CANOPY_DUFF_WAVE_M)}));
    col = mix(col, uDuffCol, clamp(duffW, 0.0, 1.0));
  }
  // distant SHADING, restored — cool where the ground turns from the sun, warm where it turns into it. At the 6.4 km the S6 far
  // band sits at, fog replaces ~49 % of the pixel, so the far shell's own lambert modelling (N·L 0.20-0.60 over that band by
  // raycast probe, on normals differenced off the same WorldQuery as the ground under the feet) reached the frame as ~3 of 255
  // and the ridge read as a paper cut-out (blind grade sev-1). This re-states the SAME true sun term as albedo contrast + hue on
  // the zones' ramp: contrast compensation on the real normal, never invented landform, and identically zero on the near ground.
  col *= mix(vec3(1.0), mix(${dw}, ${fw}, smoothstep(${Je(_.TERRAIN_FAR_SHADE_LO)}, ${Je(_.TERRAIN_FAR_SHADE_HI)}, clamp(dot(n, uSunDir), 0.0, 1.0))), uFarShade * smoothstep(uZone.z * 0.25, uZone.z, dist));
  // GRAIN_TINT makes the brushstroke a warm/cool axis instead of a light/dark one: a positive stroke goes straw-warm, a negative
  // one goes green-cool, and the luminance swing is about half what the same amplitude used to buy. Hue variance, not value.
  col *= 1.0 + wander * ${Je(_.TERRAIN_BAND_GRAIN)} + fine * ${Je(_.TERRAIN_FINE_GRAIN)} * ${uw};
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
    float wRock = smoothstep(${Je(_.TERRAIN_SLOPE_ROCK_DEG-_.TERRAIN_SLOPE_BLEND_DEG)}, ${Je(_.TERRAIN_SLOPE_ROCK_DEG+_.TERRAIN_SLOPE_BLEND_DEG)}, slopeDeg);
    float w = uWet * wRock;
    col *= 1.0 - ${Je(_.WEATHER_WET_DARKEN)} * w;
    col.b *= 1.0 + ${Je(_.WEATHER_WET_BLUE)} * w;
  }
  // SNOW — a LAYER over the finished ground, never a repaint of it. Season may not touch the geology
  // (check 47 asserts the seven rock and soil colours are bit-identical across all four), so snow
  // cannot be a palette swap; it has to sit on top, which is also what it physically is. The rule is
  // the GPU half of the pair whose CPU half is snowFractionAt() above — altitude, slope, aspect —
  // and the wander term breaks the sheet so a drift has an edge rather than a hard contour line.
  if (uSnow.x > 0.0) {
    float snAlt = smoothstep(uSnow.y, uSnow.z, blWorldPos.y);
    float snLie = 1.0 - smoothstep(${Je(_.SNOW_SLOPE_LO_DEG)}, ${Je(_.SNOW_SLOPE_HI_DEG)}, slopeDeg);
    vec2 snH = n.xz;
    float snL = length(snH);
    float snFace = snL > 1e-4 ? dot(snH / snL, vec2(${Je(Math.sin(_.SUN_AZIMUTH_DEG*Math.PI/180))}, ${Je(-Math.cos(_.SUN_AZIMUTH_DEG*Math.PI/180))})) : 0.0;
    float sn = clamp(snAlt * snLie * (1.0 - uSnow.w * max(0.0, snFace)), 0.0, 1.0) * uSnow.x;
    col = mix(col, uColSnow * (0.95 + 0.05 * wander), smoothstep(0.02, 0.55, sn));
  }
  // Jimenez's interleaved gradient noise at the 8-bit quantisation level (Call of Duty: Advanced Warfare; Frost.kiwi). Once the
  // fills are this quiet the ramps between them are wide enough to posterise, and this is the one-line sub-LSB fix for that.
  // It is invisible as texture, and it must be the LAST thing that touches the albedo.
  col += (1.0 / 255.0) * fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - (0.5 / 255.0);
  return col;
}`,Jt=n=>({value:new We(n)}),uf=_.TERRAIN_WIND_FROM_DEG*Math.PI/180;function gw(){const n=_.TERRAIN_QUIET;try{if(!["localhost","127.0.0.1","::1",""].includes(location.hostname))return n;const e=new URLSearchParams(location.search).get("quiet");if(e===null)return n;const t=Number(e);if(!Number.isFinite(t)||t<0||t>1)throw new Error(`?quiet=${e} is not a finite number in [0, 1]`);return t}catch(e){if(e instanceof Error&&e.message.startsWith("?quiet="))throw e;return n}}function _w(){try{return["localhost","127.0.0.1","::1",""].includes(location.hostname)&&new URLSearchParams(location.search).get("canopy")==="0"?0:1}catch{return 1}}function Mw(){try{if(!["localhost","127.0.0.1","::1",""].includes(location.hostname))return 1;const n=new URLSearchParams(location.search);return n.get("duff")==="0"||n.get("duffpaint")==="0"?0:1}catch{return 1}}function Ew(){try{return["localhost","127.0.0.1","::1",""].includes(location.hostname)&&new URLSearchParams(location.search).get("canopyedge")==="hard"?0:1}catch{return 1}}const vw=typeof location<"u"&&new URLSearchParams(location.search).get("paintsrc")==="1",Fh=new Ci(new Uint8Array([0]),1,1,Os,An);Fh.needsUpdate=!0;function xw(){const n=_.TERRAIN_GRAIN_STREAK_W;try{if(!["localhost","127.0.0.1","::1",""].includes(location.hostname))return n;const e=new URLSearchParams(location.search).get("grainstreak");if(e===null)return n;const t=Number(e);if(!Number.isFinite(t)||t<0)throw new Error(`?grainstreak=${e} is not a finite number >= 0`);return t}catch(e){if(e instanceof Error&&e.message.startsWith("?grainstreak="))throw e;return n}}function Sw(n,e=null){const t={...Fr(n),uColValley:Jt(GA),uColUpland:Jt(zA),uColHigh:Jt(HA),uColSummit:Jt(VA),uColRock:Jt(qA),uColDry:Jt(ZA),uColHeath:Jt(jA),uColPeat:Jt(QA),uColBare:Jt(JA),uColScree:Jt(ew),uColSoil:Jt(tw),uColGrit:Jt(nw),uColTurfD:Jt(iw),uColMoss:Jt(rw),uColStone:Jt(sw),uColSnow:Jt(YA),uSnow:{value:new et(0,_.SNOW_ALT_LO_M,_.SNOW_ALT_HI_M,_.SNOW_ASPECT_MELT)},uWet:{value:0},uBands:{value:new et(_.TERRAIN_BAND_UPLAND_M,_.TERRAIN_BAND_HIGH_M,_.TERRAIN_BAND_SUMMIT_M,_.TERRAIN_BAND_BLEND_M)},uSlope:{value:new et(_.TERRAIN_SLOPE_ROCK_DEG,_.TERRAIN_SLOPE_BLEND_DEG,_.TERRAIN_SLOPE_LIFT_M_PER_DEG,_.TERRAIN_BAND_NOISE_M)},uNoise:{value:new st(_.TERRAIN_BAND_NOISE_WAVE_M,_.TERRAIN_ROCK_NOISE_DEG)},uPatch:{value:new et(_.TERRAIN_PATCH_WAVE_M,_.TERRAIN_PATCH_MIX,_.TERRAIN_PATCH_FADE_M,_.TERRAIN_SCREE_LO_DEG)},uZone:{value:new et(_.TERRAIN_ZONE_WAVE_M,_.TERRAIN_ZONE_MIX,_.TERRAIN_ZONE_FAR_M,_.TERRAIN_ZONE_MIX_FAR)},uFarShade:{value:_.TERRAIN_FAR_SHADE},uFleck:{value:new ue(_.TERRAIN_FLECK_WAVE_M,_.TERRAIN_FLECK_AMP,_.TERRAIN_FLECK_FADE_M)},uGrit:{value:new et(_.TERRAIN_GRIT_WAVE_M,_.TERRAIN_GRIT_AMP,_.TERRAIN_GRIT_FADE_M,_.TERRAIN_GRIT_BUMP)},uSoil:{value:new ue(_.TERRAIN_SOIL_WAVE_M,_.TERRAIN_SOIL_MIX_BARE,_.TERRAIN_SOIL_MIX_TURF)},uCrag:{value:new et(_.TERRAIN_CRAG_LEDGE_M,_.TERRAIN_CRAG_LEDGE_AMP,_.TERRAIN_CRAG_FADE_M,_.TERRAIN_SCREE_HI_DEG)},uQuiet:{value:new ue(gw(),_.TERRAIN_QUIET_FADE_M,_.TERRAIN_QUIET_SAT)},uRoot:{value:new et(_.TERRAIN_ROOT_MIX,_.TERRAIN_ROOT_FADE_M,_.TERRAIN_ROOT_QUIET,_.TERRAIN_ROOT_BUMP)},uHand:{value:_.TERRAIN_HANDOVER_GAIN},uGrainStreak:{value:xw()},uRootAo:{value:_.TERRAIN_ROOT_AO},uExpo:{value:new et(_.TERRAIN_EXPO_WIND,_.TERRAIN_EXPO_NOISE,_.TERRAIN_EXPO_WAVE_M,_.TERRAIN_EXPO_MIX)},uWind:{value:new st(Math.sin(uf),-Math.cos(uf))},uCoverTex:{value:(e==null?void 0:e.texture)??Fh},uCoverFrame:{value:(e==null?void 0:e.frame)??new et(0,0,1,1)},uCoverOrigin:{value:(e==null?void 0:e.origin)??new et(0,0,1,1)},uCoverTexFar:{value:(e==null?void 0:e.textureFar)??Fh},uCoverOriginFar:{value:(e==null?void 0:e.originFar)??new et(0,0,1,1)},uCoverFar:{value:new st(e!=null&&e.textureFar?1:0,(e==null?void 0:e.farScale)??1)},uCanopy:{value:new et(e?_w():0,_.CANOPY_CELL_M,_.CANOPY_RELIEF_M,_.CANOPY_EDGE_DARK)},uCanopyCol:{value:(e==null?void 0:e.color)??new We(3099170)},uDuff:{value:new ue(e?Mw():0,_.CANOPY_DUFF_MIX,_.CANOPY_DUFF_MOTTLE)},uDuffCol:{value:(e==null?void 0:e.duffColor)??new We(4862496)},uTreeRing:{value:new et(0,0,_.DRESSING_FAR_M-_.DRESSING_RECENTER_M,_.DRESSING_RECENTER_M)},uCanopyEdge:{value:Ew()}},i=new Fn({color:16777215,fog:!1,flatShading:!1});return i.userData.uniforms=t,i.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 blWorldNormal;
varying vec2 blCoverUv;
uniform vec4 uCoverFrame, uCoverOrigin;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
blWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`).replace("#include <fog_vertex>",`#include <fog_vertex>
{
  float blLat = uCoverFrame.x - blWorldPos.z / 111320.0;
  float blLon = uCoverFrame.y + blWorldPos.x / uCoverFrame.z;
  float blLatR = radians(blLat);
  float blXf = (blLon + 180.0) / 360.0 * uCoverFrame.w;
  float blYf = (1.0 - log(tan(blLatR) + 1.0 / cos(blLatR)) / 3.14159265) * 0.5 * uCoverFrame.w;
  blCoverUv = vec2((blXf * 256.0 - uCoverOrigin.x) / uCoverOrigin.z, (blYf * 256.0 - uCoverOrigin.y) / uCoverOrigin.w);
}`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
`+mw).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = blAlbedo();`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = blBump();`).replace("#include <dithering_fragment>",(vw?`if (blCanopyLabel > 0.5) gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
`:"")+"#include <dithering_fragment>"),kr(r,t)},i}const df={4:{code:4,name:"BWh",treeline:{loM:0,hiM:0,aspectOffsetM:0},rows:[{id:"desert.tuft",taxon:"Stipagrostis sabulicola",stratum:"ground",w:{60:.175},wet:"fog / dew"},{id:"desert.tuft",taxon:"Stipagrostis uniplumis",stratum:"ground",w:{60:.115},wet:"dew"},{id:"lichen",taxon:"lichen crust",stratum:"ground",w:{60:50},wet:"fog-obligate"},{id:"sage",taxon:"Zygophyllum stapffii",stratum:"shrub",w:{60:.006},wet:"gravel plains"},{id:"sage",taxon:"Arthraerua leubnitziae",stratum:"shrub",w:{60:.005},wet:"fog belt"},{id:"shrub.dome",taxon:"Euphorbia damarana",stratum:"shrub",w:{60:.0075},wet:"gravel plains"}]},8:{code:8,name:"Csa",treeline:{loM:1700,hiM:2e3,aspectOffsetM:100},rows:[{id:"tree.pine.tall",taxon:"Pinus ponderosa",stratum:"tree",w:{10:.03},wet:"dry ridges, south faces"},{id:"tree.cedar",taxon:"Calocedrus decurrens",stratum:"tree",w:{10:.015},wet:"mesic"},{id:"tree.dome",taxon:"Quercus kelloggii",stratum:"tree",w:{10:.01},wet:"mesic slopes"},{id:"tree.dome",taxon:"Quercus chrysolepis",stratum:"tree",w:{10:.02},wet:"canyon walls"},{id:"shrub.dome",taxon:"Arctostaphylos viscida",stratum:"shrub",w:{10:.02,20:.055},wet:"dry ridges"},{id:"shrub.dome",taxon:"Ceanothus integerrimus",stratum:"shrub",w:{20:.035},wet:"dry, post-fire slopes"},{id:"bracken",taxon:"Chamaebatia foliolosa",stratum:"shrub",w:{10:.02,30:.02},wet:"dry, well-drained"},{id:"grass.dry",taxon:"Bromus / Avena / Elymus",stratum:"ground",w:{30:200},wet:"indifferent"},{id:"bracken",taxon:"Pteridium aquilinum",stratum:"ground",w:{10:8.5,30:14},wet:"mesic"},{id:"weed",taxon:"Eriogonum spp.",stratum:"ground",w:{30:100,60:50},wet:"dry ridges"}]},9:{code:9,name:"Csb",treeline:{loM:2300,hiM:2600,aspectOffsetM:100},rows:[{id:"tree.pine.tall",taxon:"Pinus jeffreyi",stratum:"tree",w:{10:.0225},wet:"dry ridges"},{id:"tree.pine.tall",taxon:"Pinus ponderosa",stratum:"tree",w:{10:.0225},wet:"dry, south faces"},{id:"tree.spire.narrow",taxon:"Abies concolor",stratum:"tree",w:{10:.0225},wet:"mesic, north faces"},{id:"tree.pine.tall",taxon:"Pinus lambertiana",stratum:"tree",w:{10:.01},wet:"mesic"},{id:"tree.cedar",taxon:"Calocedrus decurrens",stratum:"tree",w:{10:.015},wet:"mesic"},{id:"tree.dome",taxon:"Quercus kelloggii",stratum:"tree",w:{10:.0075},wet:"mesic slopes"},{id:"shrub.dome",taxon:"Arctostaphylos patula",stratum:"shrub",w:{10:.02,20:.055},wet:"dry ridges"},{id:"shrub.dome",taxon:"Ceanothus cordulatus",stratum:"shrub",w:{20:.035},wet:"dry, post-fire"},{id:"grass.fine",taxon:"Poa spp. + Carex",stratum:"ground",w:{30:175},wet:"moist meadows"},{id:"weed",taxon:"Eriogonum spp.",stratum:"ground",w:{30:100,60:50},wet:"dry ridges"},{id:"bracken",taxon:"Pteridium aquilinum",stratum:"ground",w:{10:8.5,30:14},wet:"mesic"}]},15:{code:15,name:"Cfb",treeline:{loM:450,hiM:650,aspectOffsetM:78},rows:[{id:"tree.dome",taxon:"Quercus petraea",stratum:"tree",w:{10:.02},wet:"well-drained valley sides"},{id:"tree.columnar.light",taxon:"Betula pubescens",stratum:"tree",w:{10:.03,20:.005},wet:"indifferent"},{id:"tree.dome",taxon:"Sorbus aucuparia",stratum:"tree",w:{10:.0075,20:.002},wet:"crags, indifferent"},{id:"tree.spire.narrow",taxon:"Picea sitchensis",stratum:"tree",w:{10:.15},wet:"wet soils"},{id:"heather",taxon:"Calluna vulgaris",stratum:"shrub",w:{20:70,30:25},wet:"ridges, bog-edge"},{id:"bilberry",taxon:"Vaccinium myrtillus",stratum:"shrub",w:{20:55,30:12.5},wet:"moist peaty slopes"},{id:"bracken",taxon:"Pteridium aquilinum",stratum:"shrub",w:{10:10,30:.2},wet:"well-drained"},{id:"shrub.dome",taxon:"Ulex gallii / U. europaeus",stratum:"shrub",w:{20:.06,30:.005},wet:"dry, lower slopes"},{id:"grass.tussock",taxon:"Molinia caerulea",stratum:"ground",w:{30:115,90:100},wet:"wet flushes, channels, bogs"},{id:"grass.mat",taxon:"Nardus stricta",stratum:"ground",w:{30:150},wet:"dry ridges"},{id:"grass.fine",taxon:"Festuca ovina + Agrostis capillaris",stratum:"ground",w:{30:225,40:50},wet:"dry, grazed"},{id:"sedge",taxon:"Juncus effusus",stratum:"ground",w:{30:85,90:100},wet:"bogs, channels"},{id:"moss",taxon:"Sphagnum spp.",stratum:"ground",w:{30:50,90:100},wet:"bog-obligate"}]},16:{code:16,name:"Cfc",treeline:{loM:500,hiM:700,aspectOffsetM:78},rows:[{id:"tree.columnar.light",taxon:"Betula pubescens",stratum:"tree",w:{10:.0075,20:.002},wet:"indifferent"},{id:"tree.pine.umbrella",taxon:"Pinus sylvestris",stratum:"tree",w:{10:.0045},wet:"dry ridges"},{id:"tree.dome",taxon:"Sorbus aucuparia",stratum:"tree",w:{10:.003,20:.001},wet:"crag ledges, seeps"},{id:"heather",taxon:"Calluna vulgaris",stratum:"shrub",w:{20:90,30:25},wet:"ridges, bog-edge"},{id:"bilberry",taxon:"Vaccinium myrtillus",stratum:"shrub",w:{20:60,30:12.5},wet:"moist peaty"},{id:"cushion.alpine",taxon:"Empetrum nigrum",stratum:"shrub",w:{30:100,60:20},wet:"wind-exposed ridges"},{id:"bracken",taxon:"Pteridium aquilinum",stratum:"shrub",w:{10:7.5,30:14},wet:"well-drained lower slopes"},{id:"grass.fine",taxon:"Festuca ovina + Agrostis",stratum:"ground",w:{30:225},wet:"indifferent"},{id:"grass.coarse",taxon:"Deschampsia flexuosa",stratum:"ground",w:{30:115},wet:"indifferent"},{id:"grass.mat",taxon:"Nardus stricta",stratum:"ground",w:{30:160},wet:"dry ridges"},{id:"moss",taxon:"Sphagnum spp.",stratum:"ground",w:{30:50,90:100},wet:"bog-obligate"},{id:"cottongrass",taxon:"Eriophorum spp.",stratum:"ground",w:{30:50,90:45},wet:"bog-obligate"},{id:"lichen",taxon:"Racomitrium lanuginosum",stratum:"ground",w:{30:50,60:500},wet:"dry ridges"}]},18:{code:18,name:"Dsb",treeline:{loM:2900,hiM:3300,aspectOffsetM:150},rows:[{id:"tree.spire.narrow",taxon:"Abies magnifica",stratum:"tree",w:{10:.03},wet:"mesic"},{id:"tree.pine.dense",taxon:"Pinus contorta murrayana",stratum:"tree",w:{10:.125},wet:"meadow edges, dry flats"},{id:"tree.spire.narrow",taxon:"Tsuga mertensiana",stratum:"tree",w:{10:.02},wet:"north faces, snow-holding"},{id:"tree.krummholz",taxon:"Juniperus grandis",stratum:"tree",w:{10:.0035,60:.02},wet:"bare granite ridges"},{id:"shrub.dome",taxon:"Arctostaphylos nevadensis",stratum:"shrub",w:{20:.055,60:.02},wet:"dry ridges"},{id:"shrub.dome",taxon:"Quercus vacciniifolia",stratum:"shrub",w:{20:.04},wet:"dry ridges"},{id:"grass.fine",taxon:"Poa alpina",stratum:"ground",w:{30:250},wet:"moist meadows"},{id:"sedge",taxon:"Carex spp.",stratum:"ground",w:{30:150,90:50},wet:"wet meadows"}]},26:{code:26,name:"Dfb",treeline:{loM:0,hiM:0,aspectOffsetM:0},rows:[{id:"crop.cereal",taxon:"Triticum aestivum / Hordeum vulgare",stratum:"crop",w:{40:300},wet:"indifferent"},{id:"grass.tussock",taxon:"Hesperostipa comata",stratum:"ground",w:{30:140},wet:"dry"},{id:"grass.coarse",taxon:"Pascopyrum smithii",stratum:"ground",w:{30:160},wet:"indifferent"},{id:"grass.mat",taxon:"Bouteloua gracilis",stratum:"ground",w:{30:225},wet:"dry"},{id:"sage",taxon:"Artemisia cana",stratum:"shrub",w:{20:1.25,30:.125},wet:"dry"},{id:"shrub.dome",taxon:"Symphoricarpos occidentalis",stratum:"shrub",w:{20:.35},wet:"coulee, mesic"},{id:"shrub.dome",taxon:"Elaeagnus commutata",stratum:"shrub",w:{20:.2},wet:"coulee-riparian"}]},27:{code:27,name:"Dfc",treeline:{loM:2e3,hiM:2300,aspectOffsetM:100},rows:[{id:"tree.spire.narrow",taxon:"Picea engelmannii",stratum:"tree",w:{10:.035},wet:"mesic, north faces"},{id:"tree.spire.narrow",taxon:"Abies lasiocarpa",stratum:"tree",w:{10:.0225},wet:"mesic seeps"},{id:"tree.pine.dense",taxon:"Pinus contorta",stratum:"tree",w:{10:.15},wet:"dry ridges, south faces"},{id:"tree.columnar.light",taxon:"Populus tremuloides",stratum:"tree",w:{10:.015,20:.005},wet:"seeps, riparian"},{id:"tree.krummholz",taxon:"Larix lyallii",stratum:"tree",w:{10:.02},wet:"ridges"},{id:"shrub.dome",taxon:"Salix glauca",stratum:"shrub",w:{20:.45,90:.02},wet:"channel-obligate"},{id:"shrub.dome",taxon:"Juniperus communis",stratum:"shrub",w:{20:.2,30:.02},wet:"dry ridges"},{id:"shrub.dome",taxon:"Betula glandulosa",stratum:"shrub",w:{20:.35},wet:"moist subalpine"},{id:"cushion.alpine",taxon:"Dryas octopetala",stratum:"ground",w:{30:50,60:200},wet:"windswept ridges"},{id:"heather",taxon:"Phyllodoce empetriformis",stratum:"ground",w:{30:100},wet:"moist alpine"},{id:"sedge",taxon:"Carex spp.",stratum:"ground",w:{30:150},wet:"moist seeps"},{id:"grass.fine",taxon:"Poa spp.",stratum:"ground",w:{30:225},wet:"moist seeps"}]},29:{code:29,name:"ET",treeline:{loM:900,hiM:950,aspectOffsetM:0},rows:[{id:"sedge",taxon:"Carex bigelowii",stratum:"ground",w:{30:150},wet:"indifferent"},{id:"grass.mat",taxon:"Juncus trifidus",stratum:"ground",w:{30:75,60:40},wet:"exposed ridges"},{id:"grass.coarse",taxon:"Deschampsia flexuosa",stratum:"ground",w:{30:90},wet:"indifferent"},{id:"cushion.alpine",taxon:"Empetrum nigrum",stratum:"shrub",w:{30:100,60:20},wet:"exposed ridges"},{id:"bilberry",taxon:"Vaccinium myrtillus",stratum:"shrub",w:{30:40},wet:"snow-bed edges"},{id:"lichen",taxon:"Racomitrium lanuginosum",stratum:"mat",w:{30:50,60:500},wet:"dry ridges"},{id:"lichen",taxon:"Cladonia spp.",stratum:"mat",w:{60:50},wet:"dry ridges"},{id:"cushion.alpine",taxon:"Silene acaulis",stratum:"mat",w:{60:50},wet:"ridges"}]}},xu={"grass.fine":"ground","grass.coarse":"ground","grass.dry":"ground","grass.mat":"ground","grass.tussock":"ground","crop.cereal":"crop","desert.tuft":"ground",heather:"shrub",bilberry:"shrub","cushion.alpine":"mat",lichen:"mat",sedge:"ground",moss:"mat",weed:"ground",bracken:"shrub",cottongrass:"ground",sage:"shrub","flower.white":"ground","flower.gold":"ground","shrub.dome":"shrub","tree.dome":"tree","tree.columnar.light":"tree","tree.spire.narrow":"tree","tree.pine.umbrella":"tree","tree.pine.tall":"tree","tree.pine.dense":"tree","tree.cedar":"tree","tree.krummholz":"tree"};let Su="shelf";function Aw(n){Su=n==="legacy"?"legacy":"shelf"}function go(){return Su}function kh(){return Su}const ww=15;let Om=0;function yw(){return Om}function Ml(n){const e=n!==null?df[n]:void 0;return e||(Om++,df[ww])}function Rw(n){return xu[n]??"ground"}const Pm=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function Lm(n,e){const t=n.w[e];if(t!==void 0)return t;if(n.stratum==="shrub"||n.stratum==="tree")return 0;const i=n.w[30];return i!==void 0?i*.5:0}function Um(n,e,t){const i=[];for(const r of Ml(n).rows){if(r.stratum!==t)continue;const s=Lm(r,e);s<=0||i.push({id:r.id,taxon:r.taxon,w:s})}return i}function Fm(n,e,t){const i=n.channelDistAt(e,t);if(!(i<_.WET_CHANNEL_M))return 0;const r=i/_.WET_CHANNEL_M;return 1-r*r*(3-2*r)}function bw(n,e,t){const i=Ml(n).treeline;if(i.hiM<=0)return 1;const r=i.aspectOffsetM*Math.min(1,Math.max(0,t));return 1-(1-_.TREE_TREELINE_FLOOR)*Pm(i.loM-r,i.hiM-r,e)}function Tw(n,e){const t=Ml(n).treeline;return t.hiM<=0?0:Pm(t.loM-180,t.hiM,e)}function Bh(n){return n.startsWith("shrub.")||xu[n]==="shrub"?"shrub":n}function Cw(n,e,t){const r=Um(n,e,e===20?"shrub":"tree");if(!r.length)return null;let s=0;for(const c of r)s+=c.w;let o=0;const a=Math.min(.999999,Math.max(0,t))*s;for(const c of r)if(o+=c.w,a<o)return{id:c.id,taxon:c.taxon,crown:Bh(c.id)};const l=r[r.length-1];return{id:l.id,taxon:l.taxon,crown:Bh(l.id)}}const Dw={"bracken.rust":"bracken","grass.dead":"grass.dry",litter:"bracken"},Nw=new Set([29,4,5]),Iw=.1;function Ow(n,e,t){switch(n){case"grass.fine":return(.35+e.fFine)*(1-.55*t);case"grass.coarse":return(.2+1.5*e.fCoarse)*(.5+.8*e.broken+.5*t);case"grass.dry":return(.1+1.7*e.fDry)*(.45+1.1*t)*(e.cls===60||e.cls===50?2.6:1);case"grass.mat":return(.3+e.fFine)*(.6+.8*t)*(1-.5*e.damp);case"grass.tussock":return(.3+1.2*e.fCoarse)*(.5+e.damp)*e.gentle;case"crop.cereal":return e.gentle;case"desert.tuft":return(.2+e.fCoarse)*(1-.5*e.broken);case"heather":return(.3+1.4*e.fCoarse)*(1-.5*e.damp);case"bilberry":return(.3+e.fFine)*(1-.3*e.damp)*(.5+.5*e.shade);case"cushion.alpine":return(.4+e.fFine)*(1-e.damp);case"lichen":return(.5+e.broken)*(1-e.damp);case"sedge":return e.damp*e.damp*e.gentle;case"cottongrass":return e.damp*e.damp*e.gentle;case"moss":return e.damp*(.35+.65*e.shade)*e.gentle;case"weed":return(.5+2.2*e.broken)*(e.cls===60||e.cls===50?2.2:.7);case"bracken":return e.gentle*(1-t)*(.2+e.fCoarse);case"sage":return(.3+e.fDry)*(1-e.damp);default:return 1}}function Pw(n,e,t,i,r){const s=Ml(t),o=Tw(t,i.y),a=new Map;for(const c of s.rows){if(c.stratum==="tree"||c.stratum==="shrub"&&xu[c.id]!=="shrub")continue;const h=Lm(c,i.cls);h>0&&a.set(c.id,(a.get(c.id)??0)+h)}if(!a.has("grass.dry")){const c=(a.get("grass.fine")??0)+(a.get("grass.coarse")??0)+(a.get("grass.mat")??0)+(a.get("grass.tussock")??0);c>0&&a.set("grass.dry",Iw*c)}const l=!Nw.has(s.code)&&(a.get("grass.fine")??0)>0;for(let c=0;c<e.length;c++){const h=e[c];let u;if(h==="flower.white")u=l?_.GROUNDCOVER_FLOWER_W*i.fFlower*i.gentle*(1-.7*o):0;else if(h==="flower.gold")u=l?_.GROUNDCOVER_FLOWER_W*i.fGold*i.gentle*(1-.7*o):0;else{const d=Dw[h]??h,f=a.get(d)??0;u=f>0?f*Ow(d,i,o):0,h==="litter"&&f>0&&(u*=1.15)}n[c]=u*r[c]}}function oo(n){return n=(n^n>>>16)>>>0,n=Math.imul(n,2246822507),n=(n^n>>>13)>>>0,n=Math.imul(n,3266489909),(n^n>>>16)>>>0}function Lw(n,e){let t=(n^2166136261)>>>0;for(let i=0;i<e.length;i++)t=Math.imul(t^e.charCodeAt(i),16777619)>>>0;return oo(t)}function Si(n){const e=Math.trunc(n)>>>0;let t=oo(e^2654435769),i=oo(t^2246822507),r=oo(i^3266489909),s=oo(r^668265263);const o=()=>{let a=t+i|0;return t=i^i>>>9,i=r+(r<<3)|0,r=r<<21|r>>>11,s=s+1|0,a=a+s|0,r=r+a|0,(a>>>0)/4294967296};for(let a=0;a<12;a++)o();return{seed:e,next:o,int:a=>Math.floor(o()*a),range:(a,l)=>a+o()*(l-a),fork:a=>Si(Lw(e,a))}}function Uw(n,e,t,i,r){const s=Math.min(1,Math.max(0,n)),o=Math.min(.98,Math.max(.02,e));return s<=o?t+(1-t)*Math.pow(s/o,r):i+(1-i)*Math.pow((1-s)/(1-o),r)}const Un=(n,e,t)=>({x:n,y:e,z:t}),Gh=(n,e)=>Un(n.x+e.x,n.y+e.y,n.z+e.z),zh=(n,e)=>Un(n.x*e,n.y*e,n.z*e),_i=n=>{const e=Math.hypot(n.x,n.y,n.z)||1;return Un(n.x/e,n.y/e,n.z/e)},nl=(n,e)=>Un(n.y*e.z-n.z*e.y,n.z*e.x-n.x*e.z,n.x*e.y-n.y*e.x);function ao(n,e,t){const i=Math.cos(t),r=Math.sin(t),s=e.x*n.x+e.y*n.y+e.z*n.z,o=nl(e,n);return Un(n.x*i+o.x*r+e.x*s*(1-i),n.y*i+o.y*r+e.y*s*(1-i),n.z*i+o.z*r+e.z*s*(1-i))}const fc=n=>_i(nl(n,Math.abs(n.y)>.9?Un(1,0,0):Un(0,1,0)));function pc(n,e,t,i,r,s,o,a){const l=[];let c=n,h=e;const u=t/o,d=s/o;for(let f=0;f<=o;f++){const M=f/o;if(l.push({p:c,r:Math.max(.002,i+(r-i)*Math.pow(M,.85))}),f===o)break;c=Gh(c,zh(h,u)),h=_i(ao(h,a,d))}return l}function il(n,e){const t=Si(e),i=()=>t.next(),r=v=>(i()-.5)*2*v,s=v=>v*Math.PI/180,o=n.heightM[0]+i()*(n.heightM[1]-n.heightM[0]),a=o*n.trunkRadiusFrac,l=[],c=[],h=i()*Math.PI*2,u=_i(Un(Math.cos(h)*Math.sin(s(n.leanDeg)),Math.cos(s(n.leanDeg)),Math.sin(h)*Math.sin(s(n.leanDeg)))),d=fc(u),f=o*Math.min(1,Math.max(.15,n.leaderFrac)),M=pc(Un(0,0,0),u,f,a,a*n.trunkTopFrac,s(n.trunkCurveDeg+r(n.trunkCurveDeg*.5)),n.trunkStations,d);l.push({order:0,parent:-1,atFrac:0,stations:M,tip:M[M.length-1].p,foliate:!1});const E=[0];if(n.forkCount>0&&f<o*.999){const v=M[M.length-1],w=_i(Un(v.p.x-M[M.length-2].p.x,v.p.y-M[M.length-2].p.y,v.p.z-M[M.length-2].p.z)),O=fc(w),C=o-f;for(let W=0;W<n.forkCount;W++){const B=s(n.forkAngleDeg+r(n.forkAngleDeg*.35));let L=ao(w,O,B);L=_i(ao(L,w,W/n.forkCount*Math.PI*2+i()*.6));const X=C/Math.max(.2,Math.cos(B))*(.9+.35*i()),k=v.r*Math.pow(1/n.forkCount,1/n.ratioPower)*1.15,J=Gh(v.p,zh(L,v.r*.33)),Z=pc(J,L,X,k,k*.3,s(-34+r(16)),Math.max(4,n.trunkStations-3),_i(nl(L,w)));l.push({order:0,parent:0,atFrac:1,stations:Z,tip:Z[Z.length-1].p,foliate:!1}),E.push(l.length-1)}}let m=E;for(let v=0;v<n.orders.length;v++){const w=n.orders[v],O=[],C=v===n.orders.length-1;for(const W of m){const L=l[W].stations,X=L.reduce((me,K,j)=>j===0?0:me+Math.hypot(K.p.x-L[j-1].p.x,K.p.y-L[j-1].p.y,K.p.z-L[j-1].p.z),0),J=v===0?v===0&&W===0?n.clearFrac:.05:w.startFrac,Z=Math.max(.001,w.endFrac-J);let ee=i()*Math.PI*2;for(let me=0;me<w.count;me++){const K=J+Z*((me+.5)/w.count),j=Math.min(L.length-2,Math.max(0,Math.floor(K*(L.length-1)))),Q=L[j],H=L[j+1],$=Gh(Q.p,zh(Un(H.p.x-Q.p.x,H.p.y-Q.p.y,H.p.z-Q.p.z),K*(L.length-1)-j)),re=_i(Un(H.p.x-Q.p.x,H.p.y-Q.p.y,H.p.z-Q.p.z)),oe=o*n.clearFrac,de=Math.min(1,Math.max(0,($.y-oe)/Math.max(.001,o-oe))),Me=Uw(de,n.crownPeak,n.crownBaseW,n.crownTopW,n.crownSharp),V=v===0?o*n.crownFrac:X*w.lengthFrac,Ae=Math.max(.05,V*Me*(1+r(w.lengthVar))),ve=fc(re);let Ie=ao(re,ve,s(w.downAngleDeg+r(w.downAngleVarDeg)));ee+=s(w.rotateDeg+r(w.rotateVarDeg)),Ie=_i(ao(Ie,re,ee));const be=Q.r,Ne=Math.max(.003,be*Math.pow(Math.min(.95,Ae/Math.max(.05,X)),1/n.ratioPower)),se=_i(nl(Ie,re)),fe=pc($,Ie,Ae,Ne,Ne*.25,s(w.curveDeg+r(w.curveVarDeg)),w.stations,se.x||se.y||se.z?se:ve),G=fe[fe.length-1].p,P=C||v+1>=n.foliateFrom;l.push({order:v+1,parent:W,atFrac:K,stations:fe,tip:G,foliate:P}),P&&c.push(G),O.push(l.length-1)}}m=O}const p=24,g=new Float64Array(p),S=new Float64Array(p),x=new Float64Array(p),D=v=>Math.min(p-1,Math.max(0,Math.floor(v/Math.max(.001,o)*p)));for(const v of l[0].stations){const w=D(v.p.y);g[w]+=v.p.x,S[w]+=v.p.z,x[w]+=1}for(let v=0;v<p;v++){if(x[v]>0){g[v]/=x[v],S[v]/=x[v];continue}let w=-1,O=-1;for(let W=v-1;W>=0;W--)if(x[W]>0)if(O<0)O=W;else{w=W;break}if(O<0)continue;if(w<0){g[v]=g[O],S[v]=S[O];continue}const C=(v-O)/Math.max(1,O-w);g[v]=g[O]+(g[O]-g[w])*C,S[v]=S[O]+(S[O]-S[w])*C}const y=new Float64Array(p);let R=o;for(const v of l){if(v.order>0)for(const w of v.stations){const O=D(w.p.y),C=Math.hypot(w.p.x-g[O],w.p.z-S[O]);C>y[O]&&(y[O]=C)}if(v.foliate)for(const w of v.stations)w.p.y<R&&(R=w.p.y)}let N=0,b=0;for(let v=0;v<p;v++)y[v]>N&&(N=y[v],b=(v+.5)/p*o);return{species:n.id,seed:e,branches:l,heightM:o,crownRadiusM:N,apexM:b,crownBaseM:R,tips:c}}const Pr={"tree.spire.narrow":{id:"tree.spire.narrow",name:"spruce / fir spire",heightM:[15,35],trunkRadiusFrac:.014,ratioPower:2,trunkTopFrac:.04,clearFrac:.107,leanDeg:1.5,trunkCurveDeg:4,trunkStations:12,crownFrac:.144,crownPeak:.23,crownBaseW:.72,crownTopW:.03,crownSharp:1,leaderFrac:1,forkCount:0,forkAngleDeg:0,orders:[{count:26,lengthFrac:1,lengthVar:.18,downAngleDeg:72,downAngleVarDeg:10,rotateDeg:137.5,rotateVarDeg:12,curveDeg:-16,curveVarDeg:8,stations:5,startFrac:.1,endFrac:.99},{count:4,lengthFrac:.42,lengthVar:.25,downAngleDeg:48,downAngleVarDeg:14,rotateDeg:120,rotateVarDeg:30,curveDeg:-10,curveVarDeg:10,stations:3,startFrac:.35,endFrac:.95}],foliateFrom:2,foliage:"needle-spray",bark:"scales-grey",roots:4,rootReach:2.4},"tree.dome":{id:"tree.dome",name:"broadleaf dome (oak)",heightM:[8,22],trunkRadiusFrac:.03,ratioPower:2.2,trunkTopFrac:.3,clearFrac:.427,leanDeg:3,trunkCurveDeg:8,trunkStations:8,crownFrac:.444,crownPeak:.02,crownBaseW:.62,crownTopW:.3,crownSharp:1.5,leaderFrac:.55,forkCount:3,forkAngleDeg:16,orders:[{count:6,lengthFrac:1,lengthVar:.2,downAngleDeg:52,downAngleVarDeg:16,rotateDeg:137.5,rotateVarDeg:40,curveDeg:-28,curveVarDeg:14,stations:6,startFrac:.22,endFrac:.92},{count:4,lengthFrac:.55,lengthVar:.28,downAngleDeg:46,downAngleVarDeg:20,rotateDeg:137.5,rotateVarDeg:45,curveDeg:-20,curveVarDeg:16,stations:4,startFrac:.3,endFrac:.95},{count:4,lengthFrac:.48,lengthVar:.3,downAngleDeg:42,downAngleVarDeg:22,rotateDeg:120,rotateVarDeg:60,curveDeg:-14,curveVarDeg:18,stations:3,startFrac:.35,endFrac:.98}],foliateFrom:3,foliage:"leaf-lobed",bark:"ridges-deep",roots:5,rootReach:2.8},"tree.columnar.light":{id:"tree.columnar.light",name:"birch / aspen column",heightM:[4,15],trunkRadiusFrac:.016,ratioPower:2,trunkTopFrac:.14,clearFrac:.279,leanDeg:4,trunkCurveDeg:10,trunkStations:9,crownFrac:.325,crownPeak:.045,crownBaseW:.7,crownTopW:.25,crownSharp:1.3,leaderFrac:.62,forkCount:2,forkAngleDeg:13,orders:[{count:9,lengthFrac:1,lengthVar:.22,downAngleDeg:40,downAngleVarDeg:14,rotateDeg:137.5,rotateVarDeg:30,curveDeg:-14,curveVarDeg:12,stations:5,startFrac:.3,endFrac:.97},{count:5,lengthFrac:.5,lengthVar:.3,downAngleDeg:55,downAngleVarDeg:18,rotateDeg:137.5,rotateVarDeg:50,curveDeg:34,curveVarDeg:16,stations:4,startFrac:.25,endFrac:.98}],foliateFrom:2,foliage:"leaf-round",bark:"bands-white",roots:3,rootReach:2},"tree.pine.umbrella":{id:"tree.pine.umbrella",name:"Scots pine umbrella",heightM:[6,20],trunkRadiusFrac:.026,ratioPower:2.1,trunkTopFrac:.22,clearFrac:.122,leanDeg:5,trunkCurveDeg:14,trunkStations:9,crownFrac:.32,crownPeak:.224,crownBaseW:.35,crownTopW:.55,crownSharp:1.6,leaderFrac:.72,forkCount:2,forkAngleDeg:20,orders:[{count:7,lengthFrac:1,lengthVar:.22,downAngleDeg:62,downAngleVarDeg:18,rotateDeg:137.5,rotateVarDeg:45,curveDeg:-34,curveVarDeg:16,stations:5,startFrac:.55,endFrac:.98},{count:4,lengthFrac:.45,lengthVar:.3,downAngleDeg:40,downAngleVarDeg:20,rotateDeg:120,rotateVarDeg:50,curveDeg:-22,curveVarDeg:14,stations:3,startFrac:.4,endFrac:.97}],foliateFrom:2,foliage:"needle-fascicle",bark:"plates-orange",roots:4,rootReach:2.4},"tree.pine.tall":{id:"tree.pine.tall",name:"tall pine (ponderosa)",heightM:[25,45],trunkRadiusFrac:.018,ratioPower:2.1,trunkTopFrac:.16,clearFrac:.26,leanDeg:2,trunkCurveDeg:5,trunkStations:12,crownFrac:.206,crownPeak:.064,crownBaseW:.55,crownTopW:.35,crownSharp:1.2,leaderFrac:1,forkCount:0,forkAngleDeg:0,orders:[{count:12,lengthFrac:1,lengthVar:.24,downAngleDeg:66,downAngleVarDeg:16,rotateDeg:137.5,rotateVarDeg:35,curveDeg:-26,curveVarDeg:14,stations:5,startFrac:.42,endFrac:.99},{count:4,lengthFrac:.44,lengthVar:.28,downAngleDeg:44,downAngleVarDeg:18,rotateDeg:120,rotateVarDeg:45,curveDeg:-16,curveVarDeg:12,stations:3,startFrac:.4,endFrac:.97}],foliateFrom:2,foliage:"needle-fascicle",bark:"plates-orange",roots:4,rootReach:2.2},"tree.pine.dense":{id:"tree.pine.dense",name:"lodgepole spire",heightM:[8,22],trunkRadiusFrac:.012,ratioPower:2,trunkTopFrac:.1,clearFrac:.115,leanDeg:1.5,trunkCurveDeg:3,trunkStations:10,crownFrac:.173,crownPeak:.247,crownBaseW:.7,crownTopW:.05,crownSharp:1,leaderFrac:1,forkCount:0,forkAngleDeg:0,orders:[{count:20,lengthFrac:1,lengthVar:.2,downAngleDeg:68,downAngleVarDeg:12,rotateDeg:137.5,rotateVarDeg:20,curveDeg:-18,curveVarDeg:10,stations:4,startFrac:.28,endFrac:.99},{count:3,lengthFrac:.4,lengthVar:.25,downAngleDeg:46,downAngleVarDeg:16,rotateDeg:120,rotateVarDeg:40,curveDeg:-12,curveVarDeg:10,stations:3,startFrac:.35,endFrac:.96}],foliateFrom:2,foliage:"needle-fascicle",bark:"scales-grey",roots:3,rootReach:2},"tree.cedar":{id:"tree.cedar",name:"incense cedar column",heightM:[20,40],trunkRadiusFrac:.02,ratioPower:2,trunkTopFrac:.08,clearFrac:.187,leanDeg:1,trunkCurveDeg:3,trunkStations:12,crownFrac:.145,crownPeak:.101,crownBaseW:.85,crownTopW:.1,crownSharp:1.1,leaderFrac:1,forkCount:0,forkAngleDeg:0,orders:[{count:24,lengthFrac:1,lengthVar:.2,downAngleDeg:74,downAngleVarDeg:10,rotateDeg:137.5,rotateVarDeg:15,curveDeg:-20,curveVarDeg:8,stations:4,startFrac:.14,endFrac:.99},{count:4,lengthFrac:.38,lengthVar:.22,downAngleDeg:40,downAngleVarDeg:14,rotateDeg:120,rotateVarDeg:35,curveDeg:-10,curveVarDeg:10,stations:3,startFrac:.3,endFrac:.97}],foliateFrom:2,foliage:"scale-spray",bark:"strips-fibrous",roots:4,rootReach:2.2},"tree.krummholz":{id:"tree.krummholz",name:"krummholz / juniper",heightM:[2,8],trunkRadiusFrac:.055,ratioPower:2.4,trunkTopFrac:.35,clearFrac:.752,leanDeg:9,trunkCurveDeg:16,trunkStations:8,crownFrac:.274,crownPeak:.02,crownBaseW:.75,crownTopW:.45,crownSharp:1.4,leaderFrac:.42,forkCount:2,forkAngleDeg:14,orders:[{count:5,lengthFrac:1,lengthVar:.35,downAngleDeg:68,downAngleVarDeg:26,rotateDeg:137.5,rotateVarDeg:70,curveDeg:-44,curveVarDeg:30,stations:6,startFrac:.18,endFrac:.9},{count:4,lengthFrac:.5,lengthVar:.4,downAngleDeg:54,downAngleVarDeg:30,rotateDeg:120,rotateVarDeg:80,curveDeg:-30,curveVarDeg:26,stations:4,startFrac:.3,endFrac:.95}],foliateFrom:2,foliage:"needle-spray",bark:"strips-fibrous",roots:5,rootReach:3}},Pa=128,On=2,Fw=n=>({data:new Uint8ClampedArray(n*n*4),size:n});function kw(n,e,t,i,r,s,o){if(e<0||t<0||e>=n.size||t>=n.size)return;const a=(t*n.size+e)*4,l=n.data[a+3]/255,c=o,h=c+l*(1-c);h<=0||(n.data[a]=(i*c+n.data[a]*l*(1-c))/h,n.data[a+1]=(r*c+n.data[a+1]*l*(1-c))/h,n.data[a+2]=(s*c+n.data[a+2]*l*(1-c))/h,n.data[a+3]=h*255)}function os(n,e,t,i,r,s,o,a,l,c=1,h=1.5){const u=Math.cos(-s),d=Math.sin(-s),f=Math.floor(e-(i+r)),M=Math.ceil(e+(i+r)),E=Math.floor(t-(i+r)),m=Math.ceil(t+(i+r));for(let p=E;p<=m;p++)for(let g=f;g<=M;g++){const S=g+.5-e,x=p+.5-t,D=(S*u-x*d)/i,y=(S*d+x*u)/r,R=Math.hypot(D,y);if(R>1.35)continue;const N=c*Math.max(0,Math.min(1,(1-R)*(Math.max(i,r)/h)));N>.004&&kw(n,g,p,o,a,l,N)}}const km=n=>{let e=n>>>0||1;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}};function Bw(n,e,t,i,r){const s=km(1e3+t*7919+e.length*131),o=Pa,a=o/2,l=u=>(s()-.5)*2*u,c=(u,d)=>[Math.round(56+74*u-18*d),Math.round(84+92*u),Math.round(38+50*u+34*d)];if(e==="needle-spray"||e==="needle-fascicle"){const u=e==="needle-spray"?26:15,d=e==="needle-spray"?o*.3:o*.4;for(let f=-1;f<=1;f+=2)for(let M=0;M<u;M++){const E=M/(u-1),m=i+a+(E-.5)*o*.66,p=r+a+l(2),g=f*(.55+.35*E)+l(.16),S=d*(.55+.6*(1-Math.abs(E-.5)*1.4))*(.8+.4*s()),[x,D,y]=c(.25+.5*s(),1);os(n,m+Math.cos(g)*S*.5,p-Math.sin(g)*S*.5,S*.5,e==="needle-spray"?1.5:2.1,-g,x,D,y,1,1.1)}os(n,i+a,r+a,o*.34,1.8,0,62,74,44,1,1);return}if(e==="scale-spray"){for(let u=0;u<9;u++){const d=-1.05+u*.26+l(.1),f=i+a-o*.3,M=r+a+l(6);for(let E=0;E<16;E++){const m=E/15,p=f+Math.cos(d)*o*.62*m,g=M-Math.sin(d)*o*.3*m,[S,x,D]=c(.2+.45*s(),.55);os(n,p,g,o*.052*(1-.4*m),o*.034,-d,S,x,D,1,1)}}return}const h=e==="leaf-lobed"?12:17;for(let u=0;u<h;u++){const d=s()*Math.PI*2,f=o*.335*Math.sqrt(s()),M=i+a+Math.cos(d)*f,E=r+a+Math.sin(d)*f,m=s()*Math.PI*2,p=o*(e==="leaf-lobed"?.125:.115)*(.75+.5*s()),g=p*(e==="leaf-lobed"?1.45:1.12),[S,x,D]=c(.2+.6*s(),.1);if(e==="leaf-lobed")for(let y=-3;y<=3;y++){const R=y/3,N=M+Math.cos(m)*g*.5*R,b=E+Math.sin(m)*g*.5*R,v=p*(.55-.3*Math.abs(R))+p*.22;os(n,N,b,v,p*.42,m+Math.PI/2,S,x,D,1,1.2)}else os(n,M,E,g*.5,p*.5,m,S,x,D,1,1.2);os(n,M,E,g*.46,.9,m,Math.round(S*.62),Math.round(x*.66),Math.round(D*.6),.9,1)}}function rl(n){const e=Fw(Pa*On);for(let t=0;t<On*On;t++)Bw(e,n,t,t%On*Pa,Math.floor(t/On)*Pa);return{data:e.data,size:e.size}}const Gw={near:620,mid:60},Bm=.642,Gm=.55;function zw(n,e,t,i,r,s=!1){const o=r??Gw[t],a=e.foliage==="needle-spray"||e.foliage==="needle-fascicle",l=km(n.seed^1542469173),c=[],h=[],u=[],d=[],f=[],M=[],E=[],m=Math.max(.42,Math.min(2.6,n.heightM*.088))*(a?.86:1.12),p=m*.55;let g=0;const S=n.tips;if(S.length===0){const w=new At;return w.setAttribute("position",new gt([],3)),{geometry:w,quads:0}}const x=Math.max(1,Math.floor(o/S.length)),D=Math.max(1,Math.ceil(S.length/o)),y=Math.min(2.1,Math.sqrt(S.length*x/Math.max(1,Math.min(o,S.length/D)*x))),R=n.crownBaseM,N=n.heightM;let b=.001;for(const w of S)b=Math.max(b,Math.hypot(w.x,w.z));for(let w=0;w<S.length&&g<o;w+=D){const O=S[w],C=(O.y-R)/Math.max(.5,N-R),W=1-Math.min(1,Math.hypot(O.x,O.z)/b),B=1-Gm*W*W;for(let L=0;L<x&&g<o;L++){const X=l()*Math.PI*2,k=Math.acos(2*l()-1),J=p*(.35+.65*Math.cbrt(l())),Z={x:O.x+J*Math.sin(k)*Math.cos(X),y:O.y+J*Math.cos(k)*.75,z:O.z+J*Math.sin(k)*Math.sin(X)},ee=s?0:l()*Math.PI*2,me=s?0:l()*Math.PI,K=m*y*(.72+.56*l()),j=K*(.8+.4*l()),Q=(O.x*.9+O.z*1.3+L*1.7)%6.2831853,H=new ue(Math.cos(ee),0,Math.sin(ee)).applyAxisAngle(new ue(Math.cos(ee+1.57),0,Math.sin(ee+1.57)),me).multiplyScalar(K*.5),$=new ue(0,1,0).applyAxisAngle(new ue(Math.cos(ee),0,Math.sin(ee)),me*.8).multiplyScalar(j*.5),re=c.length/3,oe=Math.floor(l()*On*On),de=oe%On/On,Me=Math.floor(oe/On)/On,V=1/On;for(const[Ae,ve,Ie,be]of[[-1,-1,0,0],[1,-1,1,0],[1,1,1,1],[-1,1,0,1]]){const Ne=new ue(Z.x+H.x*Ae+$.x*ve,Z.y+H.y*Ae+$.y*ve,Z.z+H.z*Ae+$.z*ve);c.push(Ne.x,Ne.y,Ne.z);const se=new ue(Ne.x-O.x,Ne.y-O.y,Ne.z-O.z);se.lengthSq()<1e-8?se.set(0,1,0):se.normalize(),h.push(se.x,se.y,se.z),u.push(de+Ie*V,Me+be*V);const fe=Bm*B*(.55+.3*C+.15*((ve+1)/2));d.push(fe,fe*(.97+.06*C),fe*.92),M.push(Q),E.push(O.x,O.y,O.z)}f.push(re,re+1,re+2,re,re+2,re+3),g++}}const v=new At;return v.setAttribute("position",new gt(c,3)),v.setAttribute("normal",new gt(h,3)),v.setAttribute("uv",new gt(u,2)),v.setAttribute("color",new gt(d,3)),v.setAttribute("blPhase",new gt(M,1)),v.setAttribute("blAnchor",new gt(E,3)),v.setIndex(f),v.computeBoundingSphere(),{geometry:v,quads:g}}function Hw(n){const e=rl(n);let t=0,i=0,r=0,s=0;for(let h=0;h<e.data.length;h+=4)e.data[h+3]>128&&(t+=e.data[h],i+=e.data[h+1],r+=e.data[h+2],s++);if(!s)return[.05,.08,.03];const o=new We().setRGB(t/s/255,i/s/255,r/s/255,kt),a=.5,c=Bm*(1-Gm/6)*(.55+.3*a+.15*.5);return[o.r*c,o.g*c*(.97+.06*a),o.b*c*.92]}const Xn={hueJitter:!0,latticeWarp:!0,quiet:!0,grainStreak:!0},as=10,Gi=_.DRESSING_CELL_M,ls=_.ROCK_COBBLE_CANDIDATES,_r=_.DRESSING_CANDIDATES_PER_CELL,_o=Math.PI*2,Mo=new ue(0,1,0);let zm=!1;function Vw(n){zm=n}const Ww=new Set([60,70,80,90,95]),Hm=new Set([40,50,80,90,95]),Mi=n=>n<0?0:n>1?1:n,Qn=n=>n-Math.floor(n),Cs=(n,e,t)=>{const i=Mi((t-n)/(e-n||1e-6));return i*i*(3-2*i)},la=(n,e)=>{let t=Math.imul(n^2654435769,2246822507)^Math.imul(e^668265263,3266489909);return t=Math.imul(t^t>>>15,739982445),((t^t>>>16)>>>0)/4294967296},ff=(n,e)=>{const t=Math.floor(n),i=Math.floor(e),r=n-t,s=e-i,o=r*r*(3-2*r),a=s*s*(3-2*s);return(la(t,i)*(1-o)+la(t+1,i)*o)*(1-a)+(la(t,i+1)*(1-o)+la(t+1,i+1)*o)*a};function Vm(n,e){const t=_.DRESSING_CLUMP_WAVE_M,i=.66*ff(n/t,e/t)+.34*ff(n/(t*.41)+13.7,e/(t*.41)-7.1);return Math.pow(i,_.DRESSING_CLUMP_POW)}function $w(n,e,t,i,r){if(Hm.has(n))return 0;let s=n===60?e>=_.SCREE_MIN_SLOPE_DEG?_.ROCK_P_BARE_STEEP:_.ROCK_P_BARE:n===70?_.ROCK_P_SNOW:n===10?_.ROCK_P_FOREST:_.ROCK_P_GRASS;return s*=1+_.ROCK_SLOPE_GAIN*Cs(_.ROCK_SLOPE_LO_DEG,_.ROCK_SLOPE_HI_DEG,e),s*=1+_.ROCK_FAN_GAIN*r,s*=1+_.ROCK_ALT_GAIN*Cs(_.TERRAIN_BAND_HIGH_M,_.TERRAIN_BAND_SUMMIT_M+60,t),s*=_.DRESSING_CLUMP_MIN+(_.DRESSING_CLUMP_MAX-_.DRESSING_CLUMP_MIN)*i,Math.min(.97,s)}function Xw(n,e,t,i,r=null,s=0,o=0){const a=n===20;if(Ww.has(n)||e>=_.DRESSING_MAX_SLOPE_DEG||n!==10&&!a)return{p:0,shrub:a};if(go()==="shelf"&&o>=_.WET_TREE_MAX)return{p:0,shrub:a};let l=a?_.TREE_P_CLASS20:_.TREE_P_CLASS10;return go()==="shelf"&&(l*=1-_.WET_TREE_THIN*o),l*=go()==="shelf"?bw(r,t,s):1-(1-_.TREE_TREELINE_FLOOR)*Cs(_.TREE_TREELINE_LO_M,_.TREE_TREELINE_HI_M,t),l*=_.TREE_CLUMP_MIN+(_.TREE_CLUMP_MAX-_.TREE_CLUMP_MIN)*i,{p:Math.min(.97,l),shrub:a}}const mc=new ue,ws=new ue,pf=new ue,sl=new ai,Wm=new ai,ol=new ue,al=new ue;function mf(n,e,t,i,r,s,o,a,l,c,h,u,d=1){const f=s/n.height,M=(c-.5)*_.DRESSING_STRETCH;mc.set(r.x,r.y,r.z);const E=i-d*n.footR*f*Math.tan(Math.acos(Mi(r.y)));ws.copy(Mo).lerp(mc,h).normalize(),pf.set(Math.cos(a*_o),0,Math.sin(a*_o)),ws.applyAxisAngle(pf,(l-.5)*2*_.DRESSING_TILT_MAX_DEG*(Math.PI/180)).normalize(),sl.setFromUnitVectors(Mo,ws).multiply(Wm.setFromAxisAngle(Mo,o*_o));const m=Math.sqrt(Math.max(0,1-Math.pow(Mi(ws.dot(mc)),2)));return ol.set(e,E-d*n.footR*f*m-u*s-n.baseY*f,t),al.set(f*(1+M),f,f*(1-M)),new _t().compose(ol,sl,al)}function gf(n,e,t,i,r,s,o){const a=(o-.5)*_.DRESSING_STRETCH;return ws.set(i.x,i.y,i.z).normalize(),sl.setFromUnitVectors(Mo,ws).multiply(Wm.setFromAxisAngle(Mo,s*_o)),ol.set(n,t,e),al.set(r*(1+a),r,r*(1-a)),new _t().compose(ol,sl,al)}function $m(n,e,t,i){var v;const r=`${e},${t}`,s=n.rockRng.fork(r),o=n.plantRng.fork(r),a=new Float64Array((ls+2*_r)*as);for(let w=0;w<a.length;w++)a[w]=w<(ls+_r)*as?s.next():o.next();const l=e*Gi+Gi*.5,c=t*Gi+Gi*.5,h=n.cover.classAt(l,c),u={cls:h,slopeDeg:-1,rocks:0,plants:0},d=!Hm.has(h);if(!d&&!(h===10||h===20)||n.query.waterDepthAt(l,c)>0)return u;const M=n.query.normalAt(l,c),E=n.query.seatNormalAt(l,c),m=n.query.heightAt(l,c);u.slopeDeg=Math.acos(Mi(M.y))*180/Math.PI;const p=-M.x/Math.max(M.y,1e-4),g=-M.z/Math.max(M.y,1e-4),S=Vm(l,c);let x=0;if(d){const w=Math.hypot(p,g);if(w>1e-4){const O=_.ROCK_FAN_PROBE_M/w,C=n.query.normalAt(l+p*O,c+g*O);x=Cs(_.ROCK_FAN_LO_DEG,_.ROCK_FAN_HI_DEG,Math.acos(Mi(C.y))*180/Math.PI)}}const D=d?$w(h,u.slopeDeg,m,S,x):0,y=n.koppenAt?n.koppenAt(l,c):null,R=Mi(-M.z/Math.max(.001,Math.sqrt(Math.max(0,1-M.y*M.y)))),N=Xw(h,u.slopeDeg,m,S,y,R,n.wetAt?n.wetAt(l,c):0),b=[{rock:!0,plane:!0,base:0,k:ls,p:d?D*_.ROCK_COBBLE_P_MUL:0,list:n.cobbles,far2:n.cobblesFar,nearM:_.ROCK_COBBLE_NEAR_M,lo:_.ROCK_COBBLE_MIN_M,hi:_.ROCK_COBBLE_MAX_M,skew:1.7,far:_.ROCK_COBBLE_FAR_M,minFrac:_.ROCK_COBBLE_REACH_FRAC,ref:_.ROCK_COBBLE_REF_SIZE_M,fade:_.DRESSING_FADE_FRAC,lod:[]},{rock:!0,plane:!1,base:ls*as,k:_r,p:D,list:n.rocks,far2:n.rocksFar,nearM:_.ROCK_BOX_NEAR_M,lo:_.ROCK_SIZE_MIN_M,hi:_.ROCK_SIZE_MAX_M,skew:_.ROCK_SIZE_SKEW,far:_.DRESSING_FAR_M,minFrac:_.DRESSING_MIN_REACH_FRAC,ref:_.DRESSING_REF_SIZE_M,fade:_.DRESSING_FADE_FRAC,lod:[]},N.shrub?{rock:!1,plane:!1,base:(ls+_r)*as,k:_r,p:N.p,list:n.shrubs,far2:[],nearM:0,lo:_.SHRUB_SIZE_MIN_M,hi:_.SHRUB_SIZE_MAX_M,skew:1.4,far:_.TREE_FAR_M,minFrac:_.DRESSING_MIN_REACH_FRAC,ref:_.DRESSING_REF_SIZE_M,fade:1,lod:[]}:{rock:!1,plane:!1,base:(ls+_r)*as,k:_r,p:N.p,list:n.trees,far2:[],nearM:0,lo:_.TREE_SIZE_MIN_M,hi:_.TREE_SIZE_MAX_M,skew:1.6,far:_.TREE_FAR_M,minFrac:_.DRESSING_MIN_REACH_FRAC,ref:_.DRESSING_REF_SIZE_M,fade:1,lod:n.treesFar}];for(const w of b)if(!(w.p<=0||w.list.length===0))for(let O=0;O<w.k;O++){const C=w.base+O*as,W=a[C]*Gi-Gi*.5,B=a[C+1]*Gi-Gi*.5,L=l+W,X=c+B,k=w.lo+(w.hi-w.lo)*Math.pow(a[C+4],w.skew),J=Math.hypot(L-n.ax,X-n.az),Z=w.rock?k>=_.ROCK_POLY_MIN_M&&J<=_.ROCK_POLY_FAR_M&&n.big.length?n.big:J>w.nearM&&w.far2.length?w.far2:w.list:w.list;let ee=null,me=Z;if(!w.rock&&go()==="shelf"){if(ee=Cw(y,h,a[C+2]),!ee)continue;if(ee.crown!=="shrub"){const Ie=ee.crown,be=me.filter(Ne=>n.kit[Ne].id.startsWith(Ie+".")||n.kit[Ne].id.startsWith(Ie+"-far."));be.length&&(me=be)}}const K=me[Math.min(me.length-1,Math.floor(a[C+2]*me.length))],j=n.kit[K],Q=k*j.sizeMul,H=w.far*Mi(Math.max(w.minFrac,Q/w.ref)),$=w.p*(1-Cs(H*w.fade,H,J));if(J>H||a[C+8]>=$)continue;const re=w.p*(1-Cs(H*w.fade,H,J+_.DRESSING_FADE_IN_M)),oe=$-re,de=oe>1e-6?Mi(($-a[C+8])/oe):1;if(!w.plane&&n.query.waterDepthAt(L,X)>0)continue;const Me=n.query.heightAt(L,X),V=w.plane?E:n.query.seatNormalAt(L,X),Ae=mf(j,L,X,Me,V,Q,a[C+5],a[C+6],w.rock?a[C+7]:.5,a[C+3],w.rock?_.ROCK_NORMAL_ALIGN:_.TREE_NORMAL_ALIGN,w.rock?_.ROCK_BURY_FRAC:_.TREE_BURY_FRAC),ve=!w.rock&&!N.shrub&&(((v=n.farOf)==null?void 0:v[K])??-1)>=0;if(i.push({entry:K,m:Ae,tint:1+_.DRESSING_TINT_JITTER*(a[C+9]-.5),fade:de,...ee?{species:ee.id,taxon:ee.taxon}:{},...ve?{farEntry:n.farOf[K],switchM:_.TREE_NEAR_M*Q/_.TREE_SWITCH_REF_M}:{}}),w.rock?u.rocks++:u.plants++,zm&&ve&&Q>=_.TREE_CONTACT_MIN_M&&J<=_.TREE_CONTACT_FAR_M&&n.contacts.length>0){const Ie=n.contacts[Math.floor(Qn(a[C+2]*3.9)*n.contacts.length)%n.contacts.length],be=Q*_.TREE_TRUNK_RADIUS_FRAC*_.TREE_CONTACT_RADIUS_MUL;i.push({entry:Ie,m:gf(L,X,Me,V,be,a[C+5],a[C+3]),tint:1+_.DRESSING_TINT_JITTER*(a[C+9]-.5),fade:de,contactOf:"tree"})}if(w.rock&&J<=_.ROCK_CONTACT_FAR_M&&n.contacts.length>0){const Ie=Q/j.height,be=Mi(V.y),Ne=Q*(1-_.ROCK_BURY_FRAC)-j.footR*Ie*(Math.sqrt(Math.max(0,1-be*be))/Math.max(be,1e-4));if(Ne>=_.ROCK_CONTACT_PROUD_MIN_M){const se=n.contacts[Math.floor(Qn(a[C+2]*3.9)*n.contacts.length)%n.contacts.length],fe=j.wideR*Ie*_.ROCK_CONTACT_RADIUS_MUL+Ne*_.ROCK_CONTACT_PROUD_MUL;i.push({entry:se,m:gf(L,X,Me,V,fe,a[C+5],a[C+3]),tint:1+_.DRESSING_TINT_JITTER*(a[C+9]-.5),fade:de,contactOf:"rock"})}}if(w.rock&&!w.plane&&Q>=_.ROCK_SKIRT_MIN_M&&J<=_.ROCK_SKIRT_FAR_M&&n.cobbles.length>0){const Ie=J>_.ROCK_COBBLE_NEAR_M&&n.cobblesFar.length?n.cobblesFar:n.cobbles,be=j.footR*(Q/j.height);for(let Ne=0;Ne<_.ROCK_SKIRT_N;Ne++){const se=(a[C+5]+.37*Ne+.11)*_o,fe=be*(1+_.ROCK_SKIRT_SPREAD*Qn(a[C+6]*7.3+Ne*.61)),G=L+Math.cos(se)*fe,P=X+Math.sin(se)*fe;if(n.query.waterDepthAt(G,P)>0)continue;const ne=Q*(_.ROCK_SKIRT_SIZE_MIN+(_.ROCK_SKIRT_SIZE_MAX-_.ROCK_SKIRT_SIZE_MIN)*Qn(a[C+7]*3.1+Ne*.53)),pe=Ie[Math.floor(Qn(a[C+2]*5.7+Ne*.29)*Ie.length)%Ie.length],ae=n.query.heightAt(G,P);i.push({entry:pe,m:mf(n.kit[pe],G,P,ae,E,ne,Qn(a[C+5]*11.3+Ne*.71),Qn(a[C+6]*2.7+Ne*.19),Qn(a[C+7]*5.1+Ne*.43),Qn(a[C+3]*3.7+Ne*.37),_.ROCK_NORMAL_ALIGN,_.ROCK_BURY_FRAC),tint:1+_.DRESSING_TINT_JITTER*(Qn(a[C+9]*4.3+Ne*.27)-.5),fade:de}),u.rocks++}}}return u}let Io="strip";function Kw(n){Io=n==="cards"?"cards":"strip"}function Yw(){return Io}const ll={handoverM:null,band:null};function qw(n,e){ll.handoverM=n,ll.band=e}const yo={lodFlat:!1,sizeFlat:!1};function Zw(n,e){yo.lodFlat=n,yo.sizeFlat=e}const Eo={label:!1,floorOff:!1},Xm={on:!0};function jw(n){Xm.on=n}function Qw(n,e){Eo.label=n,Eo.floorOff=e}const Qi=Math.PI*2,gc=new ue(0,1,0),La=n=>n<0?0:n>1?1:n,Yn=(n,e,t)=>{const i=La((t-n)/(e-n||1e-6));return i*i*(3-2*i)},sn=n=>n-Math.floor(n),Sn=(n,e,t,i,r)=>{const s=_.DRESSING_CLUMP_WAVE_M/t;return Math.pow(Vm(n*s+i,e*s+r),1/_.DRESSING_CLUMP_POW)};function Jw(n,e,t,i,r,s){const o=[];for(let a=0;a<e;a++){const l=a/e*Qi+n.next()*(Qi/e),c=t*Math.sqrt(n.next());o.push({yaw:l,ox:Math.cos(l)*c,oz:Math.sin(l)*c,h:s+(1-s)*n.next(),w:(_.GROUNDCOVER_BLADE_W_MIN+_.GROUNDCOVER_BLADE_W_SPAN*Math.pow(n.next(),_.GROUNDCOVER_BLADE_W_SKEW))*i,arc:r*(_.GROUNDCOVER_ARC_FLOOR+(1-_.GROUNDCOVER_ARC_FLOOR)*n.next()),skew:.1*n.next(),shear:_.GROUNDCOVER_BLADE_TIP_SHEAR*(2*n.next()-1)})}return o}const Km=[{keep:1,wMul:1},{keep:_.GROUNDCOVER_MID_KEEP,wMul:_.GROUNDCOVER_MID_W_MUL},{keep:_.GROUNDCOVER_FAR_KEEP,wMul:_.GROUNDCOVER_FAR_W_MUL},{keep:_.GROUNDCOVER_DIST_KEEP,wMul:_.GROUNDCOVER_DIST_W_MUL},{keep:_.GROUNDCOVER_BLADES,wMul:_.GROUNDCOVER_HAZE_W_MUL}];function ey(n,e,t,i,r,s,o){const a=Km[e],l=e===0?n:n.filter((p,g)=>g%a.keep===0).map(p=>({...p,w:p.w*a.wMul})),c=[],h=[],u=[],d=new We(t),f=new We(i),M=new We(o),E=new We;for(let p=0;p<l.length;p++){const g=l[p],S=Math.cos(g.yaw),x=Math.sin(g.yaw),D=g.arc*g.h,y=g.h*(1-.22*g.arc*g.arc),R=S*.8,N=x*.8,b=Math.hypot(R,1,N),v=1+r*(p*.6180339887%1-.5),w=(O,C,W,B)=>{c.push(g.ox+S*O-x*W,C,g.oz+x*O+S*W),h.push(R/b,1/b,N/b),E.copy(d).lerp(f,B*B*(3-2*B)),E.multiplyScalar(1-_.GROUNDCOVER_ROOT_DARK*(1-Yn(0,_.GROUNDCOVER_ROOT_DARK_U,B))),E.offsetHSL(_.GROUNDCOVER_BLADE_HUE_DEG/360*(p*.7548776662%1-.5)*2,0,0),u.push(E.r*v,E.g*v,E.b*v)};w(0,g.skew*g.h,-g.w,g.skew),w(0,0,g.w,0),w(D,y,g.shear*g.w,1)}for(let p=0;p<s&&p<l.length;p++){const g=l[p],S=Math.cos(g.yaw),x=Math.sin(g.yaw),D=g.ox+S*g.arc*g.h,y=g.oz+x*g.arc*g.h,R=g.h*(1-.22*g.arc*g.arc),N=_.GROUNDCOVER_PETAL_R;for(let b=0;b<2;b++){const v=g.yaw+b*(Math.PI/2),w=Math.cos(v)*N,O=Math.sin(v)*N;c.push(D-w,R,y-O,D+w,R,y+O,D,R+N*1.3,y);for(let C=0;C<3;C++)h.push(0,1,0),u.push(M.r,M.g,M.b)}}const m=new At;return m.setAttribute("position",new tt(new Float32Array(c),3)),m.setAttribute("normal",new tt(new Float32Array(h),3)),m.setAttribute("color",new tt(new Float32Array(u),3)),m}function ty(n,e,t,i,r,s,o,a){const l=Km[e],c=e===0?n:n.filter((D,y)=>y%l.keep===0).map(D=>({...D,w:D.w*l.wMul})),h=[],u=[],d=[],f=[],M=[],E=new We(t),m=new We(i),p=new We(o),g=new We,S=Math.max(1,a|0);for(let D=0;D<c.length;D++){const y=c[D],R=Math.cos(y.yaw),N=Math.sin(y.yaw),b=y.arc*y.h,v=y.h*(1-.22*y.arc*y.arc),w=R*.8,O=N*.8,C=Math.hypot(w,1,O),W=1+r*(D*.6180339887%1-.5),B=b*.35,L=y.h*.62,X=Z=>{const ee=1-Z;return[ee*ee*0+2*ee*Z*B+Z*Z*b,ee*ee*0+2*ee*Z*L+Z*Z*v]},k=(Z,ee,me,K)=>{h.push(y.ox+R*Z-N*me,ee,y.oz+N*Z+R*me),u.push(w/C,1/C,O/C),g.copy(E).lerp(m,K*K*(3-2*K)),g.multiplyScalar(1-_.GROUNDCOVER_ROOT_DARK*(1-Yn(0,_.GROUNDCOVER_ROOT_DARK_U,K))),g.offsetHSL(_.GROUNDCOVER_BLADE_HUE_DEG/360*(D*.7548776662%1-.5)*2,0,0),d.push(g.r*W,g.g*W,g.b*W),f.push(K),M.push(R,N)},J=Z=>{if(Z<=0)return[0,y.skew*y.h,-y.w,0,0,y.w];if(Z>=1)return[b,v,y.shear*y.w,b,v,y.shear*y.w];const[ee,me]=X(Z),K=y.w*(1-Z)+y.shear*y.w*Z;return[ee,me+y.skew*y.h*(1-Z)*.5,-K*(1-Z)+y.shear*y.w*Z,ee,me,K*(1-Z)+y.shear*y.w*Z]};for(let Z=0;Z<S;Z++){const ee=Z/S,me=(Z+1)/S,K=J(ee),j=J(me);Z===S-1?(k(K[0],K[1],K[2],ee),k(K[3],K[4],K[5],ee),k(j[0],j[1],j[2],1)):(k(K[0],K[1],K[2],ee),k(K[3],K[4],K[5],ee),k(j[3],j[4],j[5],me),k(K[0],K[1],K[2],ee),k(j[3],j[4],j[5],me),k(j[0],j[1],j[2],me))}}for(let D=0;D<s&&D<c.length;D++){const y=c[D],R=Math.cos(y.yaw),N=Math.sin(y.yaw),b=y.ox+R*y.arc*y.h,v=y.oz+N*y.arc*y.h,w=y.h*(1-.22*y.arc*y.arc),O=_.GROUNDCOVER_PETAL_R;for(let C=0;C<2;C++){const W=y.yaw+C*(Math.PI/2),B=Math.cos(W)*O,L=Math.sin(W)*O;h.push(b-B,w,v-L,b+B,w,v+L,b,w+O*1.3,v);for(let X=0;X<3;X++)u.push(0,1,0),d.push(p.r,p.g,p.b),f.push(1),M.push(R,N)}}const x=new At;return x.setAttribute("position",new tt(new Float32Array(h),3)),x.setAttribute("normal",new tt(new Float32Array(u),3)),x.setAttribute("color",new tt(new Float32Array(d),3)),x.setAttribute("blT",new tt(new Float32Array(f),1)),x.setAttribute("blDir",new tt(new Float32Array(M),2)),x}let Sr=-1;const Ua=256,Ym=[],xt=[{id:"grass.fine",root:4739120,tip:12895876,blades:12,spread:.42,wMul:1,arc:.55,hMin:.42,sizeMin:.14,sizeMax:.42,skew:1.2,tiers:5,maxM:999,variants:2,petals:0,petalCol:0,capMul:2},{id:"grass.coarse",root:4541482,tip:11975290,blades:12,spread:.55,wMul:1.05,arc:.78,hMin:.34,sizeMin:.22,sizeMax:.62,skew:1.35,tiers:5,maxM:999,variants:2,petals:0,petalCol:0,capMul:1.6},{id:"grass.dry",root:5788983,tip:14077337,blades:11,spread:.48,wMul:1.15,arc:.82,hMin:.38,sizeMin:.18,sizeMax:.5,skew:1.25,tiers:5,maxM:999,variants:2,petals:0,petalCol:0},{id:"heather",root:3812906,tip:10251916,blades:30,spread:.75,wMul:1.05,arc:.35,hMin:.7,sizeMin:.18,sizeMax:.4,skew:1,tiers:3,maxM:_.GROUNDCOVER_MID_BAND_M,variants:1,petals:0,petalCol:0},{id:"sedge",root:3556394,tip:8822866,blades:9,spread:.2,wMul:.85,arc:.26,hMin:.55,sizeMin:.3,sizeMax:.7,skew:1.1,tiers:2,maxM:_.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"moss",root:3688230,tip:8690766,blades:10,spread:.95,wMul:2.3,arc:1.35,hMin:.6,sizeMin:.07,sizeMax:.17,skew:1,tiers:1,maxM:10,variants:2,petals:0,petalCol:0},{id:"weed",root:4345386,tip:10399334,blades:6,spread:.5,wMul:3.2,arc:1.25,hMin:.55,sizeMin:.12,sizeMax:.32,skew:1,tiers:1,maxM:14,variants:2,petals:0,petalCol:0},{id:"bracken",root:4738606,tip:11319410,blades:5,spread:.6,wMul:3.4,arc:1.15,hMin:.55,sizeMin:.2,sizeMax:.48,skew:1.1,tiers:2,maxM:_.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"flower.white",root:4345388,tip:11056236,blades:7,spread:.4,wMul:1.1,arc:.4,hMin:.45,sizeMin:.12,sizeMax:.26,skew:1,tiers:1,maxM:14,variants:1,petals:3,petalCol:15263442},{id:"flower.gold",root:4345388,tip:11056236,blades:7,spread:.4,wMul:1.1,arc:.4,hMin:.45,sizeMin:.12,sizeMax:.26,skew:1,tiers:1,maxM:14,variants:1,petals:3,petalCol:14201404},{id:"litter",root:5913630,tip:10250796,blades:7,spread:1,wMul:3,arc:1.45,hMin:.8,sizeMin:.1,sizeMax:.24,skew:1,tiers:1,maxM:14,variants:2,petals:0,petalCol:0,floor:!0},{id:"bracken.rust",root:5913116,tip:13140538,blades:5,spread:.6,wMul:3.4,arc:1.15,hMin:.55,sizeMin:.2,sizeMax:.48,skew:1.1,tiers:2,maxM:_.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:0,petalCol:0},{id:"grass.dead",root:7038016,tip:14998666,blades:11,spread:.5,wMul:1.15,arc:.9,hMin:.34,sizeMin:.18,sizeMax:.5,skew:1.25,tiers:5,maxM:999,variants:1,petals:0,petalCol:0},{id:"grass.mat",root:3492390,tip:8364110,blades:12,spread:.9,wMul:1.15,arc:.35,hMin:.7,sizeMin:.07,sizeMax:.16,skew:1.2,tiers:5,maxM:999,variants:2,petals:0,petalCol:0,capMul:1.6},{id:"grass.tussock",root:4147754,tip:13222532,blades:22,spread:.38,wMul:1.1,arc:.75,hMin:.55,sizeMin:.45,sizeMax:.95,skew:1.3,tiers:5,maxM:999,variants:2,petals:0,petalCol:0,capMul:1.6},{id:"crop.cereal",root:8026698,tip:13680760,blades:10,spread:.25,wMul:.9,arc:.3,hMin:.7,sizeMin:.4,sizeMax:.8,skew:1,tiers:5,maxM:999,variants:1,petals:0,petalCol:0,capMul:3.2},{id:"desert.tuft",root:6974026,tip:13156496,blades:8,spread:.45,wMul:.8,arc:.7,hMin:.4,sizeMin:.1,sizeMax:.3,skew:1.2,tiers:5,maxM:999,variants:2,petals:0,petalCol:0},{id:"bilberry",root:3946022,tip:6262594,blades:18,spread:.7,wMul:1.2,arc:.4,hMin:.7,sizeMin:.15,sizeMax:.4,skew:1,tiers:3,maxM:_.GROUNDCOVER_MID_BAND_M,variants:1,petals:0,petalCol:0},{id:"cushion.alpine",root:3029542,tip:8030818,blades:10,spread:.95,wMul:2.2,arc:1.35,hMin:.6,sizeMin:.06,sizeMax:.16,skew:1,tiers:1,maxM:10,variants:2,petals:0,petalCol:0},{id:"lichen",root:5921358,tip:11053208,blades:8,spread:1,wMul:2.6,arc:1.45,hMin:.7,sizeMin:.05,sizeMax:.12,skew:1,tiers:1,maxM:10,variants:2,petals:0,petalCol:0},{id:"cottongrass",root:3820074,tip:8822866,blades:9,spread:.25,wMul:.85,arc:.3,hMin:.55,sizeMin:.3,sizeMax:.6,skew:1.1,tiers:2,maxM:_.GROUNDCOVER_NEAR_BAND_M,variants:1,petals:3,petalCol:15789280},{id:"sage",root:4868666,tip:10132090,blades:14,spread:.55,wMul:1.3,arc:.8,hMin:.5,sizeMin:.3,sizeMax:.8,skew:1,tiers:3,maxM:_.GROUNDCOVER_MID_BAND_M,variants:1,petals:0,petalCol:0}];for(const n of xt){const e=new Float64Array(Ua);for(let t=0;t<Ua;t++)e[t]=n.sizeMin+(n.sizeMax-n.sizeMin)*Math.pow(t/(Ua-1),n.skew);Ym.push(e)}Sr=xt.findIndex(n=>n.id==="litter");function ny(n){const e=[];for(let t=0;t<xt.length;t++){const i=xt[t];for(let r=0;r<i.tiers;r++){const s=r===0?i.variants:1;for(let o=0;o<s;o++){const a=yo.lodFlat?0:o,l=yo.lodFlat?Math.min(1,i.tiers-1):r,c=n.fork(`${i.id}.${a}.shape`),h=(f,M)=>a===0?f:f*c.range(1-M,1+M),u=Jw(n.fork(`${i.id}.${a}`),a===0?i.blades:Math.max(3,Math.round(i.blades*c.range(.7,1.3))),h(i.spread,.3),h(i.wMul,.3),h(i.arc,.4),h(i.hMin,.2)),d=Io==="strip"?ty(u,l,i.root,i.tip,.26,l===0?i.petals:Math.min(1,i.petals),i.petalCol,_.GROUNDCOVER_STRIP_SEGMENTS[l]??1):ey(u,l,i.root,i.tip,.26,l===0?i.petals:Math.min(1,i.petals),i.petalCol);e.push({id:`gc.${i.id}.${o}.t${r}`,sp:t,tier:r,geometry:d,tris:d.attributes.position.count/3})}}}return e}function _c(n,e,t){const i=Fr(n),r=e??{uWind:{value:new et(0,0,0,0)}};r.uTick||(r.uTick={value:0});const s={uSeasonTint:{value:new We(16777215)}},o=new Fn({color:16777215,vertexColors:!0,side:pn,fog:!1});Io==="strip"&&(o.defines={...o.defines??{},BL_STRIP:1});const a=Au(),l=a.F.toFixed(1),c=a.P.toFixed(3),h=a.E0.toFixed(2),u=a.E1.toFixed(1),d=a.SMAX.toFixed(3),f=a.SPOW.toFixed(3),M=a.NF.toFixed(1),E=a.sizeFlat?"1.0":`min(${d}, pow(max(1.0, length((modelMatrix * vec4(instanceMatrix[3].xyz, 1.0)).xz - cameraPosition.xz) / ${l}), ${f}))`,m=a.BAND.toFixed(4),p=a.HANDOVER.toFixed(2);return o.onBeforeCompile=g=>{kr(g,i),Object.assign(g.uniforms,r,s),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSeasonTint;`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= uSeasonTint;`),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
uniform vec4 uWind;
uniform float uTick;
attribute vec2 blLife;
attribute float blRank;
attribute vec2 blCell;
attribute float blDither;
#ifdef BL_STRIP
attribute float blT;
attribute vec2 blDir;
attribute vec2 blClump;
#endif`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
  float blSizeGain = 1.0;
  {
    // ITEM 35 DEFECT 2 (D89) — the clump-set re-roll. The resident set is a SUPERSET, admitted by
    // GROUNDCOVER_ACCEPT_MARGIN_M so that it survives the anchor's 9 m drift without being re-rolled;
    // which of it is actually SEEN is decided here, per frame, at the true camera distance. A clump
    // crossing the density threshold therefore shrinks away over GROUNDCOVER_FADE_BAND instead of
    // ceasing to exist at the next rebuild. blRank is the clump's rank on the density curve and is
    // anchor-independent by construction (it comes from the cell's own RNG stream, not from dist).
    // D282: the distance the density rule reads is the clump's CELL CENTRE's (+ its own dither), never its position —
    // otherwise the visible subset sits on the camera-facing side of every far cell and the 3 m lattice shows again.
    vec3 blO = (modelMatrix * vec4(blCell.x, 0.0, blCell.y, 1.0)).xyz;
    float blD = length(blO.xz - cameraPosition.xz) + blDither;
    blSizeGain = ${E};
    float blF = blD <= ${l} ? 1.0 : pow(${l} / blD, ${c});
    blF *= 1.0 - smoothstep(${h}, ${u}, blD);
    // S5 (D287): THE HANDOVER IN METRES. The rank-band fade above is BAND rank units wide, which is BAND / |F'(d)| metres — 0.5 m
    // of walking at the full-density edge (_probe-ring, c196): a clump 10 m away went from full size to gone in 0.4 s. Inside
    // the power law (before the far taper starts) a clump's cut distance is closed-form, d_c = FULL · rank^(-1/P), so it can shrink
    // over GROUNDCOVER_HANDOVER_M metres of approach instead; past the taper's start the rank band is already wider than that
    // and stays the rule. Both reach exactly zero at the cut, so the visible SET is unchanged — only how each clump leaves it.
    float blCut = ${l} * pow(max(blRank, 1e-4), -1.0 / ${c});
    float blRankFade = smoothstep(0.0, ${m}, blF - blRank);
    float blMetreFade = 1.0 - smoothstep(blCut - ${p}, blCut, blD);
    transformed *= blCut < ${h} ? min(blRankFade > 0.0 ? 1.0 : 0.0, blMetreFade) : blRankFade;
    // D333: THE TEMPORAL DISSOLVE. A slot born at tick b grows in over NF ticks, one that died at tick d shrinks out; the first build
    // and the rig's drains stamp −1 (alive at once). A re-anchor's changed clumps therefore change the frame by 1/NF of the event per
    // frame — held under the field's own per-frame motion (grass-got.bar.md).
    float blIn = blLife.x < 0.0 ? 1.0 : clamp((uTick - blLife.x) / ${M}, 0.0, 1.0);   // LINEAR: a smoothstep peaks at 1.5× the mean per-frame change
    float blOut = blLife.y >= 0.0 ? 1.0 - clamp((uTick - blLife.y) / ${M}, 0.0, 1.0) : 1.0;   // died = −1: not dying
    transformed *= blIn * blOut;
  }
#ifdef BL_STRIP
  {
    // D283 — THE STRIP PATH. (1) the per-CLUMP bend record opens or closes every blade's bow together: the vertex slides
    // along its blade's lean direction by (bendMul − 1) · t² of the tip's travel, so a clump in a lee reads tight and one
    // on a brow reads splayed, and neighbours agree because the record comes from the cell's own field. (2) the wind is a
    // FIELD, not a wave: three sines at three bearings sampled at the clump's CELL (blCell — cell-coherent, so a gust is a
    // patch that moves), breathing on the gust period, times the per-clump phase; the whole curve bends with the tip as
    // t² from a pinned root. Sim time, never wall clock (the shot rig's paused frame stays still).
    float blT2 = blT * blT;
    float blBend = (blClump.x - 1.0) * blT2 * ${_.GROUNDCOVER_CLUMP_BEND.toFixed(3)};
    transformed.x += blDir.x * blBend; transformed.z += blDir.y * blBend;
    vec2 blP = blCell * (6.2831853 / ${_.GROUNDCOVER_WIND_FIELD_M.toFixed(2)});
    float blTime = uWind.z;
    // grass-got S3 (D334): the field SCROLLS downwind — a gust is a wave that crosses the field, not a pattern that breathes in place
    vec2 blWd0 = length(uWind.xy) > 1e-6 ? normalize(uWind.xy) : vec2(1.0, 0.0);
    vec2 blQ = blP - blWd0 * (blTime * ${_.GROUNDCOVER_WIND_SCROLL.toFixed(3)});
    float blN = 0.5 * sin(blQ.x * 0.9 + blQ.y * 0.44 + blClump.y)
              + 0.35 * sin(blQ.x * -0.6 + blQ.y * 1.3 + blClump.y * 0.7)
              + 0.15 * sin(blQ.y * 2.1 + blTime * 2.3);
    float blGust = 0.6 + 0.4 * sin(blTime * ${(6.2831853/_.GROUNDCOVER_WIND_GUST_S).toFixed(4)} + blClump.y);
    // the field (0.55 + 0.45 n) × the gust (0.6..1.0) has a MEAN of 0.44 — measured at c193 the strip moved 5 586 samples where the cards' full-amplitude sine moved 9 270 at the same uWind.w — so it is normalised to unit mean and the weather's tuned sway (D95) keeps its meaning
    float blAmp = uWind.w * blGust * (0.55 + 0.45 * blN) * 2.27;
    vec2 blWd = length(uWind.xy) > 1e-6 ? normalize(uWind.xy) : vec2(1.0, 0.0);   // uWind.xy is the card path's WAVE VECTOR; here only its bearing is wanted
    vec3 blS = vec3(blWd.x, 0.0, blWd.y) * (blAmp * blT2) + vec3(sin(blTime * 3.1 + blClump.y), 0.0, cos(blTime * 2.7 + blClump.y)) * (blAmp * 0.25 * blT2);
    transformed.x += dot(blS, normalize(instanceMatrix[0].xyz));
    transformed.z += dot(blS, normalize(instanceMatrix[2].xyz));
  }
#else
  {
    float blPh = dot(instanceMatrix[3].xz, uWind.xy) + uWind.z;
    float blG = transformed.y * transformed.y;                    // roots pinned, tips travel
    vec3 blS = vec3(sin(blPh), 0.0, sin(blPh * 0.77 + 1.9)) * (uWind.w * blG);
    transformed.x += dot(blS, normalize(instanceMatrix[0].xyz));  // world sway -> this clump's own axes
    transformed.z += dot(blS, normalize(instanceMatrix[2].xyz));
  }
#endif
  transformed *= blSizeGain;   // D331: the distance size gain, from the camera, after the sway
#endif`).replace("blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;",`#ifdef USE_INSTANCING
  blWorldPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`),g.fragmentShader=g.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal *= faceDirection; // un-flip: both faces of a blade are the same foliage`),t&&(g.fragmentShader=g.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor.rgb = vec3(${t[0].toFixed(1)}, ${t[1].toFixed(1)}, ${t[2].toFixed(1)});
  gl_FragColor.a = 1.0;`))},o.userData.uniforms=s,{material:o,wind:r}}const Hh=2,Ar=[{cellM:_.GROUNDCOVER_NEAR_CELL_M,k:_.GROUNDCOVER_NEAR_CANDIDATES,minM:0,maxM:_.GROUNDCOVER_NEAR_BAND_M,label:"near"},{cellM:_.GROUNDCOVER_MID_CELL_M,k:_.GROUNDCOVER_MID_CANDIDATES,minM:_.GROUNDCOVER_NEAR_BAND_M,maxM:_.GROUNDCOVER_MID_BAND_M,label:"mid"},{cellM:_.GROUNDCOVER_FAR_CELL_M,k:_.GROUNDCOVER_FAR_CANDIDATES,minM:_.GROUNDCOVER_MID_BAND_M,maxM:_.GROUNDCOVER_FAR_BAND_M,label:"far"},{cellM:_.GROUNDCOVER_HAZE_CELL_M,k:_.GROUNDCOVER_HAZE_CANDIDATES,minM:_.GROUNDCOVER_FAR_BAND_M,maxM:_.GROUNDCOVER_FAR_M,label:"haze"}],iy=Math.max(...Ar.map(n=>n.k)),cs=new Float64Array(iy*Hh),ry=new Set([70,80,90,95]),Vh=.25,sy=(()=>{const n=Math.ceil(_.GROUNDCOVER_FAR_M/Vh)+2,e=new Float64Array(n);for(let t=0;t<n;t++){const i=t*Vh,r=i<=_.GROUNDCOVER_FULL_M?1:Math.pow(_.GROUNDCOVER_FULL_M/i,_.GROUNDCOVER_FALLOFF_POW);e[t]=r*(1-Yn(_.GROUNDCOVER_FAR_M*_.GROUNDCOVER_FADE_FRAC,_.GROUNDCOVER_FAR_M,i))}return e})(),Wh=n=>sy[n/Vh|0]??0;function Au(){return{F:_.GROUNDCOVER_FULL_M,P:_.GROUNDCOVER_FALLOFF_POW,E0:_.GROUNDCOVER_FAR_M*_.GROUNDCOVER_FADE_FRAC,E1:_.GROUNDCOVER_FAR_M,BAND:ll.band??_.GROUNDCOVER_FADE_BAND,HANDOVER:ll.handoverM??_.GROUNDCOVER_HANDOVER_M,SMAX:_.GROUNDCOVER_DIST_SIZE_MAX,SPOW:_.GROUNDCOVER_DIST_SIZE_POW,NF:_.GROUNDCOVER_DISSOLVE_FRAMES,sizeFlat:yo.sizeFlat}}const Mc=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function oy(n,e,t=n){const i=Au();let r=t<=i.F?1:Math.pow(i.F/t,i.P);r*=1-Mc(i.E0,i.E1,t);const s=i.F*Math.pow(Math.max(e,1e-4),-1/i.P),o=Mc(0,i.BAND,r-e),a=1-Mc(s-i.HANDOVER,s,t),l=s<i.E0?Math.min(o>0?1:0,a):o,c=i.sizeFlat?1:Math.min(i.SMAX,Math.pow(Math.max(1,n/i.F),i.SPOW));return l*c}function ay(n){switch(n){case 10:return _.GROUNDCOVER_P_FOREST;case 20:return _.GROUNDCOVER_P_SHRUB;case 30:return 1;case 40:return 1;case 50:return _.GROUNDCOVER_P_BARE;case 60:return _.GROUNDCOVER_P_BARE;default:return .7}}function ly(n,e,t,i,r,s,o,a,l){const c=Sn(o,a,_.GROUNDCOVER_SWARD_WAVE_M,41.3,-18.7),h=Sn(o,a,_.GROUNDCOVER_SWARD_WAVE_M*2.7,-92.1,63.4),u=Sn(o,a,_.GROUNDCOVER_SWARD_WAVE_M*3.7,155.9,27.2),d=Math.pow(Sn(o,a,_.GROUNDCOVER_FLOWER_WAVE_M,-211.4,178.3),_.GROUNDCOVER_FLOWER_POW),f=Math.pow(Sn(o,a,_.GROUNDCOVER_FLOWER_WAVE_M*1.3,307.6,-244.9),_.GROUNDCOVER_FLOWER_POW),M=Yn(_.GROUNDCOVER_ALT_LO_M-180,_.GROUNDCOVER_ALT_HI_M,i),E=Yn(_.GROUNDCOVER_SLOPE_LO_DEG-8,_.GROUNDCOVER_SLOPE_HI_DEG,t),m=1-E;n[0]=1.15*(.35+c)*(1-.55*M),n[1]=1*(.2+1.5*h)*(.5+.8*E+.5*M),n[2]=.85*(.1+1.7*u)*(.45+1.1*M)*(e===60||e===50?2.6:1),n[3]=(e===20?4.5:.35*M)*(.3+1.4*h),n[4]=_.GROUNDCOVER_SEDGE_W*r*r*m*(1-M),n[5]=2.6*r*(.35+.65*s)*m,n[6]=(.5+2.2*E)*(e===60||e===50?2.2:.7),n[7]=(e===10?2.6:.55)*m*(1-M)*(.2+h),n[8]=_.GROUNDCOVER_FLOWER_W*d*m*(1-.7*M),n[9]=_.GROUNDCOVER_FLOWER_W*f*m*(1-.7*M),n[10]=(e===10?3:.55)*m*(1-M)*(.2+h),n[11]=n[7],n[12]=n[2];for(let p=0;p<xt.length;p++)n[p]*=l[p]}const cy=xt.map(n=>n.id);function hy(n,e,t,i,r,s,o,a,l,c){const h=Sn(o,a,_.GROUNDCOVER_SWARD_WAVE_M,41.3,-18.7),u=Sn(o,a,_.GROUNDCOVER_SWARD_WAVE_M*2.7,-92.1,63.4),d=Sn(o,a,_.GROUNDCOVER_SWARD_WAVE_M*3.7,155.9,27.2),f=Math.pow(Sn(o,a,_.GROUNDCOVER_FLOWER_WAVE_M,-211.4,178.3),_.GROUNDCOVER_FLOWER_POW),M=Math.pow(Sn(o,a,_.GROUNDCOVER_FLOWER_WAVE_M*1.3,307.6,-244.9),_.GROUNDCOVER_FLOWER_POW),E=Yn(_.GROUNDCOVER_SLOPE_LO_DEG-8,_.GROUNDCOVER_SLOPE_HI_DEG,t),m={cls:e,y:i,damp:r,shade:s,fFine:h,fCoarse:u,fDry:d,fFlower:f,fGold:M,broken:E,gentle:1-E};Pw(n,cy,c,m,l)}const _f=new ue,Mf=new ue,Ef=new ai,vf=new ai,Ec=new ai,vc=new ue,ca=new ue,xf=new ue,Sf=new _t,zi=new Float64Array(xt.length),Af=new Float64Array(xt.length),wf=new Int32Array(xt.length);function uy(n,e,t,i){const r=e.cellM,s=Xn.latticeWarp?_.GROUNDCOVER_LATTICE_WARP*r:0,o=t*r+r*.5+(sn(Math.sin(t*127.1+i*311.7)*43758.5453)-.5)*2*s,a=i*r+r*.5+(sn(Math.sin(t*269.5+i*183.3)*43758.5453)-.5)*2*s,l=n.cover.classAt(o,a),c={cls:l,slopeDeg:-1,n:0};if(ry.has(l)||n.query.waterDepthAt(o,a)>0)return c;const h=n.query.normalAt(o,a),u=n.query.heightAt(o,a),d=Math.acos(La(h.y))*180/Math.PI;c.slopeDeg=d;const f=Sn(o,a,_.GROUNDCOVER_PATCH_WAVE_M,211.7,-133.1),M=1-_.GROUNDCOVER_PATCH_DEPTH*(1-f);let E=_.GROUNDCOVER_DENSITY_M2*ay(l)*M;if(E*=1-_.GROUNDCOVER_SLOPE_THIN*Yn(_.GROUNDCOVER_SLOPE_LO_DEG,_.GROUNDCOVER_SLOPE_HI_DEG,d),E*=1-WA(d),E*=1-(1-_.GROUNDCOVER_ALT_FLOOR)*Yn(_.GROUNDCOVER_ALT_LO_M,_.GROUNDCOVER_ALT_HI_M,u),E<=0)return c;const m=E/M,p=n.seasonSnow>0?n.seasonSnow*$A(d,h.x,h.z,u):0;if(p>=_.SNOW_BURY_SKIP)return c;const g=1-p*_.SNOW_BURY_FRAC,S=-h.x/Math.max(h.y,1e-4),x=-h.z/Math.max(h.y,1e-4),D=Math.sqrt(S*S+x*x),y=1-Yn(_.GROUNDCOVER_DAMP_SLOPE_DEG,_.GROUNDCOVER_DAMP_SLOPE_DEG*3,d);let R=y*_.GROUNDCOVER_DAMP_BASE;if(D>1e-4){const L=_.GROUNDCOVER_DAMP_PROBE_M/D,X=-S*L,k=-x*L,J=n.query.heightAt(o+X,a+k);R+=y*_.GROUNDCOVER_DAMP_CONCAVE*Yn(-.5,2.5,J-(u+S*X+x*k)),n.query.waterDepthAt(o+X,a+k)>0&&(R+=_.GROUNDCOVER_DAMP_SHORE)}R=La(R);const N=La(-h.z/Math.max(.001,Math.sqrt(Math.max(0,1-h.y*h.y))))*Yn(4,18,d),b=(L,X,k)=>{if(go()==="shelf"?hy(zi,l,d,u,Math.max(R,n.wetAt?n.wetAt(L,X):0),N,L,X,n.seasonW,n.koppenAt?n.koppenAt(L,X):null):ly(zi,l,d,u,R,N,L,X,n.seasonW),Xm.on&&Sr>=0&&l===10&&k<=xt[Sr].maxM){let ee=0;for(let j=0;j<xt.length;j++)j!==Sr&&k<=xt[j].maxM&&zi[j]>0&&(ee+=zi[j]);const me=Math.min(1,Math.max(0,n.seasonW[Sr])),K=_.GROUNDCOVER_DUFF_SHARE+(_.GROUNDCOVER_DUFF_SHARE_AUTUMN-_.GROUNDCOVER_DUFF_SHARE)*me;ee>0&&(zi[Sr]=Math.max(zi[Sr],K/(1-K)*ee))}let J=0,Z=0;for(let ee=0;ee<xt.length;ee++)k>xt[ee].maxM||zi[ee]<=0||(Z+=zi[ee],Af[J]=Z,wf[J]=ee,J++);return{nCum:J,total:Z}},v=Math.sqrt((o-n.ax)*(o-n.ax)+(a-n.az)*(a-n.az));if(b(o,a,v).nCum===0)return c;const w=Sn(o,a,_.GROUNDCOVER_WIND_WAVE_M,-57.3,88.9);xf.set(h.x,h.y,h.z),vc.copy(gc).lerp(xf,_.GROUNDCOVER_NORMAL_ALIGN).normalize(),ca.set(Math.cos(w*Qi*2),0,Math.sin(w*Qi*2)),vc.applyAxisAngle(ca,_.GROUNDCOVER_WIND_LEAN_DEG*(.25+.75*w)*(Math.PI/180)).normalize(),Ef.setFromUnitVectors(gc,vc);const O=_.GROUNDCOVER_NEAR_CELL_M,C=_.GROUNDCOVER_ACCEPT_MARGIN_M,W=r>O&&(n.query.waterDepthAt(o-r*.5,a-r*.5)>0||n.query.waterDepthAt(o+r*.5,a-r*.5)>0||n.query.waterDepthAt(o-r*.5,a+r*.5)>0||n.query.waterDepthAt(o+r*.5,a+r*.5)>0),B=(L,X,k,J)=>{const Z=Xn.latticeWarp?_.GROUNDCOVER_LATTICE_WARP*L:0,ee=X*L+L*.5+(sn(Math.sin(X*127.1+k*311.7)*43758.5453)-.5)*2*Z,me=k*L+L*.5+(sn(Math.sin(X*269.5+k*183.3)*43758.5453)-.5)*2*Z,K=n.query.heightAt(ee-L*.5,me-L*.5),j=n.query.heightAt(ee+L*.5,me-L*.5),Q=n.query.heightAt(ee-L*.5,me+L*.5),H=n.query.heightAt(ee+L*.5,me+L*.5),$=L===r?n.query.waterDepthAt(ee-L*.5,me-L*.5)>0||n.query.waterDepthAt(ee+L*.5,me-L*.5)>0||n.query.waterDepthAt(ee-L*.5,me+L*.5)>0||n.query.waterDepthAt(ee+L*.5,me+L*.5)>0:W,re=Sn(ee,me,_.GROUNDCOVER_PATCH_WAVE_M,211.7,-133.1),oe=_.GROUNDCOVER_PATCH_H_MIN+(1-_.GROUNDCOVER_PATCH_H_MIN)*re,de=m*(1-_.GROUNDCOVER_PATCH_DEPTH*(1-re)),Me=Math.sqrt((ee-n.ax)*(ee-n.ax)+(me-n.az)*(me-n.az)),V=b(ee,me,Me);if(V.nCum===0)return;const Ae=n.rng.fork(`${L}.${X},${k}`),ve=J*Hh;for(let se=0;se<ve;se++)cs[se]=Ae.next();const Ie=de*(L*L),be=L*.7072,Ne=Wh(Math.max(0,Me-be-C));if(!(Ne<=0||Ie<=0))for(let se=0;se<J;se++){const fe=se/Ie;if(fe>=Ne)break;const G=se*Hh,P=(cs[G]-.5)*L,ne=(cs[G+1]-.5)*L,pe=ee+P,ae=me+ne,Ee=pe-n.ax,Ue=ae-n.az,Pe=Math.sqrt(Ee*Ee+Ue*Ue);if(Pe<e.minM||Pe>e.maxM)continue;const Oe=(sn(cs[G]*571.31)-.5)*L;if(fe>=Wh(Math.max(0,Me+Oe-C))||$&&n.query.waterDepthAt(pe,ae)>0)continue;const Ge=sn(cs[G]*331.73),le=sn(cs[G]*977.71),De=(te=>te<=_.GROUNDCOVER_LOD_MID_M?0:te<=_.GROUNDCOVER_LOD_FAR_M?1:te<=_.GROUNDCOVER_LOD_DIST_M?2:te<=_.GROUNDCOVER_LOD_HAZE_M?3:4)(Math.max(0,Pe-_.GROUNDCOVER_TIER_LEAD_M)),Te=sn(Ge*3.7)*V.total;let Y=0;for(;Y<V.nCum-1&&Af[Y]<Te;)Y++;const ce=wf[Y],Se=xt[ce],q=n.pick(ce,De<Se.tiers?De:Se.tiers-1,sn(Ge*97.3));if(q<0)continue;const A=Ym[ce][Ge*(Ua-1)|0]*oe*g,U=(pe-ee)/L+.5,T=(ae-me)/L+.5,I=(K*(1-U)+j*U)*(1-T)+(Q*(1-U)+H*U)*T;Ec.copy(Ef).multiply(vf.setFromAxisAngle(gc,le*Qi));{const te=sn(le*7.7)*Qi;ca.set(Math.cos(te),0,Math.sin(te)),Ec.multiply(vf.setFromAxisAngle(ca,(sn(Ge*13.1)-.5)*2*_.GROUNDCOVER_TILT_MAX_DEG*(Math.PI/180)))}const z=(sn(le*3.3)-.5)*_.GROUNDCOVER_STRETCH;_f.set(pe,I-_.GROUNDCOVER_BURY_FRAC*A,ae),Mf.set(A*(1+z),A,A*(1-z)),Sf.compose(_f,Ec,Mf),n.emit(q,Sf,1+_.GROUNDCOVER_TINT_JITTER*(sn(Ge*5.9)-.5),sn(Ge*13.7)-.5,fe,ee,me,Oe,.7+.6*re,sn(Math.sin(X*91.7+k*47.3)*43758.5453)*Qi),c.n++}};if(r<=O)B(r,t,i,e.k);else{const L=t*r,X=(t+1)*r,k=i*r,J=(i+1)*r;for(let Z=Math.floor(k/O)-1;Z*O+O*.5<J;Z++)if(!(Z*O+O*.5<k))for(let ee=Math.floor(L/O)-1;ee*O+O*.5<X;ee++)ee*O+O*.5<L||B(O,ee,Z,e.k)}return c}let yf=class{constructor(){rt(this,"a",2166136261);rt(this,"b",16777619)}push(e){const t=e|0;this.a=Math.imul(this.a^t&65535,16777619)>>>0,this.b=Math.imul(this.b^t>>>16,2246822507)>>>0}hex(){return`v1:${(this.a>>>0).toString(16).padStart(8,"0")}${(this.b>>>0).toString(16).padStart(8,"0")}`}};function dy(n,e,t){const i=ny(Si(n.seed).fork("groundcover.kit")),{material:r,wind:s}=_c(e,t),o=Eo.label?[_c(e,s,[0,0,1]).material,_c(e,s,[1,0,0]).material]:null,a=_.GROUNDCOVER_MAX_PER_ENTRY,l=i.map(Y=>Math.round(a*(xt[Y.sp].capMul??1))),c=i.map((Y,ce)=>{const Se=l[ce],q=new uo(Y.geometry,o?o[xt[Y.sp].floor?1:0]:r,Se);q.name=`groundCover:${Y.id}`,Eo.floorOff&&xt[Y.sp].floor&&(q.visible=!1),q.instanceMatrix.setUsage(Er),q.setColorAt(0,new We(1,1,1));const A=new Ei(new Float32Array(Se),1);A.setUsage(Er),q.geometry.setAttribute("blRank",A);const U=new Ei(new Float32Array(Se*2),2);U.setUsage(Er),q.geometry.setAttribute("blCell",U);const T=new Ei(new Float32Array(Se),1);T.setUsage(Er),q.geometry.setAttribute("blDither",T);const I=new Ei(new Float32Array(Se*2),2);I.setUsage(Er),q.geometry.setAttribute("blClump",I);const z=new Ei(new Float32Array(Se*2).fill(-1),2);return z.setUsage(Er),q.geometry.setAttribute("blLife",z),q.count=0,n.scene.add(q),q}),h=xt.map(Y=>Array.from({length:Y.tiers},()=>[]));i.forEach((Y,ce)=>h[Y.sp][Y.tier].push(ce));const u=(Y,ce,Se)=>{var A;const q=(A=h[Y])==null?void 0:A[ce];return!q||q.length===0?-1:q[Math.min(q.length-1,Math.floor(Se*q.length))]},d=new Int32Array(i.length),f=i.map((Y,ce)=>new Float32Array(l[ce]*2)),M=i.map((Y,ce)=>new Float32Array(l[ce])),E=i.map((Y,ce)=>new Uint32Array(l[ce])),m=i.map((Y,ce)=>new Uint8Array(l[ce])),p=i.map((Y,ce)=>new Uint8Array(l[ce])),g=new Int32Array(i.length),S=new Int32Array(i.length),x=i.map((Y,ce)=>new Int32Array(l[ce])),D=new Int32Array(i.length),y=i.map(()=>new Map);let R=0,N=0,b=!0,v=!1;const w=(Y,ce)=>{const Se=Math.round(Y*10)|0,q=Math.round(ce*10)|0;let A=Math.imul(Se,668265261)^Math.imul(q,374761393)|0;return A=Math.imul(A^A>>>15,739982445),(A^A>>>13)>>>0};let O="v1:0000000000000000",C=new yf;const W=new Int32Array(i.length),B=(Y,ce,Se,q,A,U,T,I,z=1,te=0)=>{const he=c[Y],ye=w(ce.elements[12],ce.elements[14]),Re=y[Y],Ce=Re.get(ye);if(Ce!==void 0){const Ze=m[Y];if(Ze[Ce]===2){Ze[Ce]=1;const at=he.geometry.getAttribute("blLife").array,Lt=_.GROUNDCOVER_DISSOLVE_FRAMES,Zt=b||v?1:Math.max(0,Math.min(1,1-(R-at[Ce*2+1])/Lt));at[Ce*2]=b||v?-1:R-Zt*Lt,at[Ce*2+1]=-1}p[Y][Ce]=1,be[Y]=be[Y]+1;return}let Le;if(D[Y]>0)D[Y]=D[Y]-1,Le=x[Y][D[Y]],Le>=g[Y]&&(g[Y]=Le+1);else if(g[Y]<l[Y])Le=g[Y],g[Y]=Le+1;else{W[Y]++;return}E[Y][Le]=ye,m[Y][Le]=1,p[Y][Le]=1,Re.set(ye,Le);{const Ze=he.geometry.getAttribute("blLife").array;Ze[Le*2]=b||v?-1:R,Ze[Le*2+1]=-1}he.geometry.getAttribute("blRank").array[Le]=A;const ke=he.geometry.getAttribute("blCell").array;ke[Le*2]=U,ke[Le*2+1]=T,he.geometry.getAttribute("blDither").array[Le]=I;const Be=he.geometry.getAttribute("blClump").array;Be[Le*2]=z,Be[Le*2+1]=te;const He=he.instanceMatrix.array,ot=ce.elements,je=Le*16;for(let Ze=0;Ze<16;Ze++)He[je+Ze]=ot[Ze];const ht=he.instanceColor.array,ut=Xn.hueJitter?_.GROUNDCOVER_HUE_JITTER*q:0;ht[Le*3]=Se*(1+ut),ht[Le*3+1]=Se*(1-.315*ut),ht[Le*3+2]=Se*(1-ut),be[Y]=be[Y]+1,C.push(Y),C.push(Math.round(ce.elements[12]*1e3)),C.push(Math.round(ce.elements[13]*1e3)),C.push(Math.round(ce.elements[14]*1e3)),C.push(Math.round(ce.elements[0]*1e3)),C.push(Math.round(ce.elements[2]*1e3))};let L=0;const X=new Float64Array(xt.length).fill(1);X[xt.findIndex(Y=>Y.id==="litter")]=0,X[xt.findIndex(Y=>Y.id==="bracken.rust")]=0;const k={query:n.world.query,cover:n.world.cover,pick:u,emit:B,rng:Si(n.seed).fork("groundcover"),koppenAt:(Y,ce)=>{var Se;return((Se=n.world.factors)==null?void 0:Se.at(Y,ce).koppen)??null},wetAt:(Y,ce)=>Fm(n.world.query,Y,ce),seasonW:X,get seasonSnow(){return L}},J=Ar[0].cellM,Z=Math.ceil(_.GROUNDCOVER_FAR_M/J),ee=2*Z+1,me=new Int16Array(ee*ee),K=new Float32Array(ee*ee),j=new Uint16Array(ee*ee);let Q=0,H=0,$=0,re=0,oe=!1,de=!0,Me=0;const V=new Int32Array(xt.length),Ae=_.GROUNDCOVER_WIND_DIR_DEG*(Math.PI/180),ve=Qi/_.GROUNDCOVER_SWAY_WAVE_M;s.uWind.value.set(Math.sin(Ae)*ve,-Math.cos(Ae)*ve,0,_.GROUNDCOVER_SWAY_AMP);const Ie=i.map(Y=>Y.tier<=1?0:Y.tier-1),be=new Int32Array(i.length);let Ne=null,se=0,fe=0,G=0,P=0,ne=0,pe=0,ae=0,Ee=240;const Ue=[];let Pe=0,Oe=0;function Ge(Y,ce,Se){const q=Y.cellM,A=q*.7072,U=Math.ceil((Y.maxM+A)/q),T=Math.floor(ce/q),I=Math.floor(Se/q),z=[];for(let te=-U;te<=U;te++)for(let he=-U;he<=U;he++){const ye=T+he,Re=I+te,Ce=ye*q+q*.5-ce,Le=Re*q+q*.5-Se,ke=Math.sqrt(Ce*Ce+Le*Le);ke>Y.maxM+A||ke<Y.minM-A||z.push(ye,Re)}return Int32Array.from(z)}function le(Y,ce,Se,q){{const A=c[Y],U=m[Y],T=p[Y],I=E[Y],z=y[Y],te=x[Y],he=A.geometry.getAttribute("blLife").array;let ye=0,Re=g[Y];{const je=A.instanceMatrix.array,ht=A.geometry.getAttribute("blRank").array,ut=f[Y],Ze=M[Y];for(let at=0;at<Re;at++){if(U[at]===1&&!T[at]?v||b?(U[at]=0,z.delete(I[at]),te[D[Y]]=at,D[Y]=D[Y]+1,he[at*2]=0,he[at*2+1]=1):(U[at]=2,he[at*2+1]=R):U[at]===2&&(v||R-he[at*2+1]>=_.GROUNDCOVER_DISSOLVE_FRAMES)&&(U[at]=0,z.delete(I[at]),te[D[Y]]=at,D[Y]=D[Y]+1,he[at*2]=0,he[at*2+1]=1),U[at]===1){const Lt=at*16;ut[ye*2]=je[Lt+12],ut[ye*2+1]=je[Lt+14],Ze[ye]=ht[at],ye++}T[at]=0}}{const je=A.instanceMatrix.array,ht=A.geometry.getAttribute("blRank").array,ut=A.geometry.getAttribute("blCell").array,Ze=A.geometry.getAttribute("blDither").array,at=A.geometry.getAttribute("blClump").array,Lt=A.instanceColor?A.instanceColor.array:null;let Zt=Re-1;for(let wt=0;wt<Zt;wt++){if(U[wt]!==0)continue;for(;Zt>wt&&U[Zt]===0;)Zt--;if(Zt<=wt)break;const It=Zt;for(let Fe=0;Fe<16;Fe++)je[wt*16+Fe]=je[It*16+Fe];ht[wt]=ht[It],ut[wt*2]=ut[It*2],ut[wt*2+1]=ut[It*2+1],Ze[wt]=Ze[It],at[wt*2]=at[It*2],at[wt*2+1]=at[It*2+1],he[wt*2]=he[It*2],he[wt*2+1]=he[It*2+1],Lt&&(Lt[wt*3]=Lt[It*3],Lt[wt*3+1]=Lt[It*3+1],Lt[wt*3+2]=Lt[It*3+2]),I[wt]=I[It],U[wt]=U[It],U[It]=0,z.set(I[wt],wt),he[It*2]=0,he[It*2+1]=1,Zt--}for(Re=Zt+1;Re>0&&U[Re-1]===0;)Re--;D[Y]=0}g[Y]=Re,d[Y]=ye,Re>S[Y]&&(S[Y]=Re),A.count=Re;const Ce=Re;A.instanceMatrix.clearUpdateRanges(),A.instanceMatrix.addUpdateRange(0,Ce*16),A.instanceMatrix.needsUpdate=!0;const Le=A.geometry.getAttribute("blRank");Le.clearUpdateRanges(),Le.addUpdateRange(0,Ce),Le.needsUpdate=!0;const ke=A.geometry.getAttribute("blCell");ke.clearUpdateRanges(),ke.addUpdateRange(0,Ce*2),ke.needsUpdate=!0;const Be=A.geometry.getAttribute("blDither");Be.clearUpdateRanges(),Be.addUpdateRange(0,Ce),Be.needsUpdate=!0;const He=A.geometry.getAttribute("blClump");He.clearUpdateRanges(),He.addUpdateRange(0,Ce*2),He.needsUpdate=!0;const ot=A.geometry.getAttribute("blLife");ot.clearUpdateRanges(),ot.addUpdateRange(0,Ce*2),ot.needsUpdate=!0,A.instanceColor&&(A.instanceColor.clearUpdateRanges(),A.instanceColor.addUpdateRange(0,Ce*3),A.instanceColor.needsUpdate=!0),A.boundingSphere||(A.boundingSphere=new Ur),A.boundingSphere.center.set(ce,q,Se),A.boundingSphere.radius=_.GROUNDCOVER_FAR_M*1.8}}function xe(){O=C.hex(),Me=0,V.fill(0);for(let Y=0;Y<i.length;Y++)Me+=g[Y]*i[Y].tris,V[i[Y].sp]+=d[Y];se=fe,b=!1}function De(){if(!Ne)return;ae++;const Y=performance.now();let ce=_.GROUNDCOVER_SLICE_CANDIDATES;for(;Ne&&ce>0;){const Se=Ar[Ne.li];if(Ne.at<Ne.cells.length){const A={...k,ax:Ne.px,az:Ne.pz};for(;Ne.at<Ne.cells.length&&ce>0;){const U=Ne.cells[Ne.at],T=Ne.cells[Ne.at+1];Ne.at+=2,ce-=Se.k*(Se.cellM>_.GROUNDCOVER_NEAR_CELL_M?Se.cellM*Se.cellM/(_.GROUNDCOVER_NEAR_CELL_M*_.GROUNDCOVER_NEAR_CELL_M):1);const I=performance.now(),z=uy(A,Se,U,T);if(G+=performance.now()-I,Ne.li===0){const te=U-Q,he=T-H;if(te>=0&&he>=0&&te<ee&&he<ee){const ye=he*ee+te;me[ye]=z.cls,K[ye]=z.slopeDeg,j[ye]=z.n}}}continue}if(Ne.li+1<Ar.length)Ne.commit=i.length;else for(;Ne.commit<i.length;){const A=Ne.commit++,U=performance.now();le(A,Ne.px,Ne.pz,Ne.py),P+=performance.now()-U}const q=Ne.li+1;if(q>=Ar.length){xe(),Ee=ae,Ne=null;break}Ne={px:Ne.px,pz:Ne.pz,py:Ne.py,li:q,cells:Ge(Ar[q],Ne.px,Ne.pz),at:0,commit:0};for(let A=0;A<i.length;A++)Ie[A]===q&&(be[A]=0)}fe=Math.max(fe,performance.now()-Y),ne+=performance.now()-Y}function Te(Y,ce=!0){if(Ne)return;const Se=Y.x-$,q=Y.z-re,A=Math.hypot(Pe,Oe),U=ce&&A>.05?Math.min(_.GROUNDCOVER_ACCEPT_MARGIN_M,A*Ee*_.SIM_DT):0,T=ce?Math.max(_.GROUNDCOVER_RETRIGGER_MIN_M,Math.min(_.GROUNDCOVER_RECENTRE_M,_.GROUNDCOVER_ACCEPT_MARGIN_M-U)):_.GROUNDCOVER_RECENTRE_M;if(oe&&Se*Se+q*q<=T*T)return;oe=!0;let I=Y.x,z=Y.z;if(U>0&&(I+=Pe/A*U,z+=Oe/A*U),ae=0,v||b)for(let te=0;te<i.length;te++)y[te].clear(),g[te]=0,D[te]=0,d[te]=0,m[te].fill(0),p[te].fill(0),c[te].count=0;$=I,re=z,Q=Math.floor($/J)-Z,H=Math.floor(re/J)-Z,me.fill(0),j.fill(0),K.fill(-2),C=new yf,fe=0,G=0,P=0,ne=0,pe++,be.fill(0),Ne={px:$,pz:re,py:k.query.heightAt($,re),li:0,cells:Ge(Ar[0],$,re),at:0,commit:0}}return{update(Y){s.uWind.value.z=Y.clock.simTick*_.SIM_DT*_.GROUNDCOVER_SWAY_SPEED;{const ce=Y.clock.simTick,Se=Y.player,q=Ue[Ue.length-1];for(q&&Math.hypot(Se.x-q.x,Se.z-q.z)>2*_.GROUNDCOVER_RECENTRE_M&&(Ue.length=0),Ue.push({x:Se.x,z:Se.z,t:ce});Ue.length>30;)Ue.shift();const A=Ue[0],U=(ce-A.t)*_.SIM_DT;Ue.length>=6&&U>.05?(Pe=(Se.x-A.x)/U,Oe=(Se.z-A.z)/U):(Pe=0,Oe=0)}R=Math.max(R,Y.clock.simTick+N),s.uTick.value=R,Te(Y.player),De()},drainNow(Y){for(v=!0;Ne;)De();for(Te(Y.player);Ne;)De();v=!1},advanceTick(Y){N+=Y,R+=Y,s.uTick.value=R},rebuildAt(Y,ce,Se){for(;Ne;)De();if(oe=!1,Te({x:Y,z:ce},!1),Se===void 0)for(;Ne;)De();else for(;;){const q=Ne;if(!q||q.li>Se)break;De()}},stepSlice(){return Ne?(De(),Ne?Ne.li:-1):-1},rebuildStats(){return{totalMs:ne,placeMs:G,commitMs:P,sliceMaxMs:se,rebuilds:pe,anchor:{x:$,z:re},recentreM:_.GROUNDCOVER_RECENTRE_M,lastSlices:Ee,velocity:{vx:Pe,vz:Oe},dissolveFrames:_.GROUNDCOVER_DISSOLVE_FRAMES,tick:R,drawn:g.reduce((Y,ce)=>Y+ce,0)}},grassMode(){return Io},setWindOverride(Y){s.override=Y,Y!==null&&(s.uWind.value.w=Y)},speciesCensus(){const Y={};return c.forEach((ce,Se)=>{const q=ce.count;if(q>0){const A=xt[i[Se].sp].id;Y[A]=(Y[A]??0)+q}}),Y},census(Y){const ce={};let Se=0,q=0,A=-1;for(let I=0;I<ee;I++)for(let z=0;z<ee;z++){const te=I*ee+z;if(K[te]<-1.5||Math.hypot((Q+z)*J+J*.5-$,(H+I)*J+J*.5-re)>Y)continue;const he=String(me[te]),ye=ce[he]??(ce[he]={cells:0,withInstance:0,fraction:0,densityPerM2:0});ye.cells++,j[te]>0&&(ye.withInstance++,K[te]>A&&(A=K[te])),ye.densityPerM2+=j[te],Se+=j[te],q++}for(const I of Object.values(ce))I.fraction=I.cells?I.withInstance/I.cells:0,I.densityPerM2=I.cells?I.densityPerM2/(I.cells*J*J):0;const U={};xt.forEach((I,z)=>U[I.id]=V[z]);let T=0;for(let I=0;I<d.length;I++)T+=d[I];return{byClass:ce,bySpecies:U,instances:Se,triangles:Me,perM2:q?Se/(q*J*J):0,lastRebuildMs:se,digest:O,maxSlopeWithInstanceDeg:A,drawnInstances:T}},setVisible(Y){de=Y;for(let ce=0;ce<c.length;ce++)c[ce].visible=Y&&!(Eo.floorOff&&xt[i[ce].sp].floor)},material:()=>r,wind:()=>s,setSeasonSpecies(Y,ce){for(let Se=0;Se<X.length;Se++)X[Se]=Y[Se]??1;L=ce,oe=!1},settled:()=>oe&&Ne===null,invalidate(){oe=!1},visible:()=>de,clumpHashes(){let Y=0;for(let q=0;q<d.length;q++)Y+=d[q];const ce=new Uint32Array(Y);let Se=0;for(let q=0;q<c.length;q++){const A=f[q];for(let U=0;U<d[q];U++){const T=Math.round(A[U*2]*10)|0,I=Math.round(A[U*2+1]*10)|0;let z=Math.imul(T,668265261)^Math.imul(I,374761393)|0;z=Math.imul(z^z>>>15,739982445),ce[Se++]=(z^z>>>13)>>>0}}return ce},anchor:()=>({x:$,z:re,anchored:oe}),clumpXZ(){let Y=0;for(let q=0;q<d.length;q++)Y+=d[q];const ce=new Float32Array(Y*2);let Se=0;for(let q=0;q<c.length;q++){const A=f[q];for(let U=0;U<d[q];U++)ce[Se++]=A[U*2],ce[Se++]=A[U*2+1]}return ce},clumpRanks(){let Y=0;for(let q=0;q<d.length;q++)Y+=d[q];const ce=new Float32Array(Y);let Se=0;for(let q=0;q<c.length;q++){const A=M[q];for(let U=0;U<d[q];U++)ce[Se++]=A[U]}return ce},fallAt:Y=>Wh(Y),spatialScale:(Y,ce,Se)=>oy(Y,ce,Se),visibleScaleSource:()=>Au(),peakSlots:()=>i.map((Y,ce)=>({id:Y.id,cap:l[ce],peak:S[ce],used:g[ce],alive:d[ce],dropped:W[ce]})),inventory:()=>i.map((Y,ce)=>({id:Y.id,tris:Y.tris,instances:c[ce].count,dropped:W[ce]})),dispose(){for(const Y of c)n.scene.remove(Y),Y.dispose();for(const Y of i)Y.geometry.dispose();r.dispose()}}}function fy(n){var p;const e=n.world.cover.grid,t=n.world.cover.data;if(!e||!t)return null;const i=new Ci(new Uint8Array(t),e.width,e.height,Os,An);i.minFilter=Bt,i.magFilter=Bt,i.generateMipmaps=!1,i.needsUpdate=!0;const r=n.world.frame,s=new et(r.lat,r.lon,r.metersPerDegLon,2**e.z),o=new et(e.x0*dt,e.y0*dt,e.width,e.height),a=n.world.coverFarGrid??null;let l=null;const c=new et(0,0,1,1);let h=1;a&&(l=new Ci(new Uint8Array(a.data),a.width,a.height,Os,An),l.minFilter=Bt,l.magFilter=Bt,l.generateMipmaps=!1,l.needsUpdate=!0,c.set(a.x0*dt,a.y0*dt,a.width,a.height),h=2**(e.z-a.z));const u=((p=n.world.factors)==null?void 0:p.at(0,0).koppen)??null;let d=Um(u,10,"tree").map(g=>{var S;return{id:g.id,w:g.w,kind:((S=Pr[Bh(g.id)])==null?void 0:S.foliage)??null}}).filter(g=>g.kind!==null);d.length||(d=Object.values(Pr).map(g=>({id:g.id,w:1,kind:g.foliage})));const f=new We(0,0,0);let M=0;for(const g of d){const[S,x,D]=Hw(g.kind);f.r+=S*g.w,f.g+=x*g.w,f.b+=D*g.w,M+=g.w}f.multiplyScalar(1/Math.max(M,1e-6));const E=xt.find(g=>g.id==="litter"),m=new We(4862496);return E&&m.setHex(E.root,kt).lerp(new We().setHex(E.tip,kt),.6),{texture:i,frame:s,origin:o,textureFar:l,originFar:c,farScale:h,color:f,duffColor:m,species:d,koppen:u,dispose:()=>{i.dispose(),l==null||l.dispose()}}}const py=3823728,my=7242352,gy=6911072,_y=5134957,My="vec3(0.80, 0.83, 0.90)",Mr=80;function qm(n,e){const t=(n-1)*(e-1)*6,i=n*e>65535?new Uint32Array(t):new Uint16Array(t);let r=0;for(let s=0;s<e-1;s++)for(let o=0;o<n-1;o++){const a=s*n+o,l=a+1,c=a+n,h=c+1;i[r++]=a,i[r++]=c,i[r++]=l,i[r++]=c,i[r++]=h,i[r++]=l}return i}function Ey(n,e,t,i){const r=_.WATER_SHORE_GRAD_EPS_M,s=_.WATER_SHORE_ISO,o=Math.sqrt(_.WATER_SHELF_MIN_M*_.WATER_SHELF_MAX_M);if(i<=0)return-Mr/o;if(i>=1)return Mr/o;const a=(n.water.insidenessAt(e+r,t)-n.water.insidenessAt(e-r,t))/(2*r),l=(n.water.insidenessAt(e,t+r)-n.water.insidenessAt(e,t-r))/(2*r),c=Math.hypot(a,l),h=i>=s;if(c<1e-6)return(h?Mr:-Mr)/o;const u=a/c,d=l/c,f=h?-1:1,M=y=>n.water.insidenessAt(e+f*y*u,t+f*y*d)>=s;let E=0,m=0;for(let y=r;y<=Mr;y*=1.6){if(M(y)!==h){m=y;break}E=y}if(m===0)return(h?Mr:-Mr)/o;for(let y=0;y<6;y++){const R=(E+m)/2;M(R)===h?E=R:m=R}const p=(h?1:-1)*(E+m)/2,g=e-p*u,S=t-p*d;let x=0;for(const y of[.25,.6,1]){const R=y*_.WATER_SHELF_PROBE_M;x+=n.slopeDegAt(g-R*u,S-R*d)/3}const D=_.WATER_SHELF_DEPTH_M/Math.tan(Math.max(x,.5)*(Math.PI/180));return p/Math.max(_.WATER_SHELF_MIN_M,Math.min(_.WATER_SHELF_MAX_M,D))}function Zm(n){const e=_.WATER_PLANE_MARGIN_M,t=n.bbox.minX-e,i=n.bbox.minZ-e,r=n.bbox.maxX+e-t,s=n.bbox.maxZ+e-i,o=Math.max(_.WATER_PLANE_STEP_M,Math.sqrt(r*s/_.WATER_PLANE_MAX_VERTS)),a=Math.ceil(r/o)+1,l=Math.ceil(s/o)+1;return{x0:t,z0:i,nx:a,nz:l,sx:r/(a-1),sz:s/(l-1),surfaceY:n.surfaceY+_.WATER_PLANE_LIFT_M}}function jm(n,e,t,i,r){for(let s=0;s<e.nx;s++){const o=e.x0+s*e.sx,a=e.z0+t*e.sz,l=t*e.nx+s;i[l*3]=o,i[l*3+1]=e.surfaceY,i[l*3+2]=a;const c=n.water.insidenessAt(o,a);r[l*4]=c,r[l*4+1]=e.surfaceY-n.heightAt(o,a),r[l*4+2]=Ey(n,o,a,c),r[l*4+3]=n.water.distToShoreAt(o,a)}}async function vy(n,e,t){const i=Zm(n),r=new Float32Array(i.nx*i.nz*3),s=new Float32Array(i.nx*i.nz*4);return await Tm(i.nz,o=>jm(e,i,o,r,s),t),{plan:i,pos:r,shore:s}}function xy(n,e,t,i){const r=(i==null?void 0:i.plan)??Zm(n),{nx:s,nz:o}=r,a=(i==null?void 0:i.pos)??new Float32Array(s*o*3),l=(i==null?void 0:i.shore)??new Float32Array(s*o*4);if(!i)for(let f=0;f<o;f++)jm(t,r,f,a,l);const c=new At;c.setAttribute("position",new tt(a,3)),c.setAttribute("blShore",new tt(l,4)),c.setIndex(new tt(qm(s,o),1)),c.computeBoundingSphere();const h={...Fr(e),uWaterDeep:{value:new We(py)},uWaterShallow:{value:new We(my)},uWaterWet:{value:new We(gy)},uWaterFar:{value:new We(_y)}},u=new To({color:16777215,fog:!1,alphaToCoverage:!0});u.userData.uniforms=h,u.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 blShore;
varying vec4 blShoreV;`).replace("#include <project_vertex>",`#include <project_vertex>
blShoreV = blShore;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
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
  vec3 refl = mix(blHorizon(vec3(dir.x, -dir.y, dir.z)) * ${My}, uWaterFar, fres);
  diffuseColor.rgb = mix(body, refl, fres * ${_.WATER_REFLECT_MAX.toFixed(2)});
}`),kr(f,h)};const d=new vt(c,u);return d.name=`water-${n.id}`,d}function Rf(n,e,t,i,r){for(let s=0;s<n.v;s++){const o=(e*n.v+s)*3,a=(e+1)*n.g+(s+1);i[o]=s*n.step,i[o+1]=t[a],i[o+2]=e*n.step;const l=(t[a+1]-t[a-1])/(2*n.step),c=(t[a+n.g]-t[a-n.g])/(2*n.step),h=Math.hypot(l,1,c);r[o]=-l/h,r[o+1]=1/h,r[o+2]=-c/h}}function Qm(n,e,t,i,r,s,o){const a=o[t*3+1],l=o[i*3+1],c=o[r*3+1],h=o[s*3+1];Math.abs(a-h)<=Math.abs(l-c)?(n[e]=t,n[e+1]=r,n[e+2]=s,n[e+3]=t,n[e+4]=s,n[e+5]=i):(n[e]=t,n[e+1]=r,n[e+2]=i,n[e+3]=i,n[e+4]=r,n[e+5]=s)}function Sy(n,e){const t=n.v,i=new Uint32Array((t-1)*(t-1)*6);for(let r=0;r<t-1;r++)for(let s=0;s<t-1;s++){const o=r*t+s,a=o+1,l=o+t,c=l+1;Qm(i,(r*(t-1)+s)*6,o,a,l,c,e)}return i}function Ay(n,e,t){const i=n-2,r=(s,o)=>{const a=s*n+o,l=a+1,c=a+n,h=c+1;Qm(t,(s*(n-1)+o)*6,a,l,c,h,e)};for(let s=0;s<=i;s++)r(0,s),i>0&&r(i,s);for(let s=1;s<i;s++)r(s,0),r(s,i)}function wy(n,e,t,i,r){for(let s=0;s+i<=t-1;s+=i){const o=r(s,t)*3,a=r(s+i,t)*3;for(let l=1;l<i;l++){const c=l/i,h=r(s+l,t)*3;n[h+1]=n[o+1]*(1-c)+n[a+1]*c;const u=e[o]*(1-c)+e[a]*c,d=e[o+1]*(1-c)+e[a+1]*c,f=e[o+2]*(1-c)+e[a+2]*c,M=Math.hypot(u,d,f)||1;e[h]=u/M,e[h+1]=d/M,e[h+2]=f/M}}}const Ct=_.CHUNK_SIZE_M,yy=_.CHUNK_GRID_STEP_M,xc=8,pi=(n,e)=>`${n},${e}`,ir=_.CHUNK_LOD_RING_MULTS,Ds=_.CHUNK_LOD_RING_STARTS;if(ir.length!==Ds.length)throw new Error("CHUNK_LOD_RING_MULTS and _STARTS must be the same length");for(let n=1;n<ir.length;n++){const e=ir[n];if(e<=ir[n-1]||e&e-1||_.CHUNK_SIZE_M/_.CHUNK_GRID_STEP_M%e!==0)throw new Error(`CHUNK_LOD_RING_MULTS[${n}] = ${e} must be an increasing power of two dividing ${_.CHUNK_SIZE_M/_.CHUNK_GRID_STEP_M}`);if(Ds[n]<=Ds[n-1])throw new Error(`CHUNK_LOD_RING_STARTS must increase (index ${n})`)}const Es=ir.map((n,e)=>{const t=yy*n,i=Ct/t+1,r=i+2;return{level:e,step:t,v:i,g:r,rows:r+i,indices:qm(i,i)}}),bf=[(n,e)=>n*e+(e-1),(n,e)=>n*e,(n,e)=>(e-1)*e+n,n=>n],Ry=()=>Es.map(n=>({level:n.level,step:n.step,g:n.g,v:n.v}));function by(n,e,t=null,i=null){const{scene:r}=n,s=n.world.query,o={},a=performance.now();let l=a;const c=A=>{const U=performance.now();o[A]=U-l,l=U},h=fy(n),u=Sw(e,h);c("material");const d=new Map,f={sig:0,membership:0,rebuildAll:0,dispose:0};let M=[],E=_.CHUNK_LOAD_RADIUS,m=_.CHUNK_LOD_FINE_RINGS;const p=Number(new URLSearchParams(location.search).get("prefetchlead")??_.CHUNK_PREFETCH_LEAD_S),g=new URLSearchParams(location.search).get("buildbudget"),S=Number(g??_.CHUNK_BUILD_BUDGET_MS),x=Number(g??_.CHUNK_BUILD_BUDGET_MS_POOLED),D=Number(new URLSearchParams(location.search).get("poolprefetch")??_.CHUNK_POOL_PREFETCH),y=Number(new URLSearchParams(location.search).get("poolwait")??_.CHUNK_POOL_WAIT_MS);let R=0,N=0,b=NaN,v=0,w=0;const O=(A,U)=>{const T=performance.now();if(Number.isFinite(b)){const I=Math.max(.001,(T-w)/1e3);if(Math.hypot(A-b,U-v)>200)R=0,N=0;else{const z=Math.min(1,I);R+=z*((A-b)/I-R),N+=z*((U-v)/I-N)}}b=A,v=U,w=T};let C=null;const W=[],B=Y1(s,u);c("shell-geometry");let L=!1,X=0,k=Promise.resolve();const J=(A,U)=>{if(!t||!t.anyReady()||L)return null;L=!0;const T=++X;return t.shell(A,U,B.tables()).then(z=>{if(T===X){const te=performance.now();B.commitBands(z,A,U),Se=performance.now()-te,ce++}}).catch(()=>{}).finally(()=>{L=!1})};{const A=J(n.player.x,n.player.z);A?k=A.catch(()=>{}).then(()=>{B.built()||B.rebuild(n.player.x,n.player.z)}):B.rebuild(n.player.x,n.player.z)}c("shell-first-build"),r.add(B.mesh);const Z=n.world.water.bodies.map((A,U)=>xy(A,e,s,i==null?void 0:i[U]));for(const A of Z)r.add(A);c("water-planes");const ee=(A,U,T,I,z)=>{const te=z+(U-1)*A.step;for(let he=0;he<A.g;he++)T[U*A.g+he]=s.heightAt(I+(he-1)*A.step,te,A.step)},me=(A,U,T,I,z,te=null)=>{let he=!1;for(let Le=0;Le<4;Le++)z.ratio[Le]>1&&(wy(T,I,z.lod.v,z.ratio[Le],bf[Le]),he=!0);let ye;te?(ye=te,he&&Ay(z.lod.v,T,ye)):ye=Sy(z.lod,T);const Re=new At;Re.setAttribute("position",new tt(T,3)),Re.setAttribute("normal",new tt(I,3)),Re.setIndex(new tt(ye,1)),Re.computeBoundingSphere();const Ce=new vt(Re,u);return Ce.position.set(A*Ct,0,U*Ct),{cx:A,cz:U,mesh:Ce,lod:z.lod,sig:z.sig,ratio:z.ratio}},K=new Float64Array(Es[0].g*Es[0].g);function j(A,U){const T=be(A,U),I=T.lod,z=new Float32Array(I.v*I.v*3),te=new Float32Array(I.v*I.v*3);for(let he=0;he<I.g;he++)ee(I,he,K,A*Ct,U*Ct);for(let he=0;he<I.v;he++)Rf(I,he,K,z,te);return me(A,U,z,te,T)}function Q(A,U){const T=be(A,U),I=T.lod,z=(t==null?void 0:t.take(A,U,I.level))??null;if(z)return{cx:A,cz:U,sig:T.sig,step:()=>!0,done:()=>!0,finish:()=>me(A,U,z.pos,z.nrm,T,z.idx)};const te=new Float64Array(I.g*I.g),he=new Float32Array(I.v*I.v*3),ye=new Float32Array(I.v*I.v*3);let Re=0;const Ce=Le=>{for(let ke=0;ke<Le&&Re<I.rows;ke++,Re++)Re<I.g?ee(I,Re,te,A*Ct,U*Ct):Rf(I,Re-I.g,te,he,ye);return Re>=I.rows};return{cx:A,cz:U,sig:T.sig,step:Ce,done:()=>Re>=I.rows,finish:()=>me(A,U,he,ye,T)}}let H=null,$=null;const re=Number(new URLSearchParams(location.search).get("mergelevel")??2),oe=new Map;let de=!1;function Me(){de=!1;for(const[,U]of oe)r.remove(U),U.geometry.dispose();oe.clear();const A=new Map;for(const U of d.values()){if(U.lod.level<re){U.mesh.visible=!0;continue}U.mesh.visible=!1;const T=`${U.lod.level}:${U.cx>=((C==null?void 0:C.cx)??0)?1:0}${U.cz>=((C==null?void 0:C.cz)??0)?1:0}`;(A.get(T)??A.set(T,[]).get(T)).push(U)}for(const[U,T]of A){let I=0,z=0;for(const Be of T)I+=Be.mesh.geometry.attributes.position.count,z+=Be.mesh.geometry.getIndex().count;const te=new Float32Array(I*3),he=new Float32Array(I*3),ye=I>65535?new Uint32Array(z):new Uint16Array(z);let Re=0,Ce=0;for(const Be of T){const He=Be.mesh.geometry.attributes.position,ot=Be.mesh.geometry.attributes.normal,je=Be.mesh.geometry.getIndex(),ht=Be.cx*Ct,ut=Be.cz*Ct;for(let Ze=0;Ze<He.count;Ze++)te[(Re+Ze)*3]=He.getX(Ze)+ht,te[(Re+Ze)*3+1]=He.getY(Ze),te[(Re+Ze)*3+2]=He.getZ(Ze)+ut,he[(Re+Ze)*3]=ot.getX(Ze),he[(Re+Ze)*3+1]=ot.getY(Ze),he[(Re+Ze)*3+2]=ot.getZ(Ze);for(let Ze=0;Ze<je.count;Ze++)ye[Ce+Ze]=Re+je.getX(Ze);Re+=He.count,Ce+=je.count}const Le=new At;Le.setAttribute("position",new tt(te,3)),Le.setAttribute("normal",new tt(he,3)),Le.setIndex(new tt(ye,1)),Le.computeBoundingSphere();const ke=new vt(Le,u);ke.name=`chunk-batch-${U}`,oe.set(U,ke),r.add(ke)}}const V=[],Ae=A=>{d.set(pi(A.cx,A.cz),A),r.add(A.mesh),V.push({t:performance.now(),x:(A.cx+.5)*Ct,z:(A.cz+.5)*Ct,level:A.lod.level}),V.length>1024&&V.splice(0,V.length-1024),A.lod.level>=re&&(A.mesh.visible=!1,de=!0)};function ve(A,U){r.remove(U.mesh),U.mesh.geometry.dispose(),d.delete(A),t==null||t.drop(U.cx,U.cz),U.lod.level>=re&&(de=!0)}const Ie=(A,U)=>{if(!C)return 0;const T=Math.max(Math.abs(A-C.cx),Math.abs(U-C.cz)),I=m-Ds[1];let z=0;for(let te=1;te<Ds.length;te++)T>=Ds[te]+I&&(z=te);return z};function be(A,U){const T=Ie(A,U),I=[Ie(A+1,U),Ie(A-1,U),Ie(A,U+1),Ie(A,U-1)],z=I.map(te=>te>T?ir[te]/ir[T]:1);return{lod:Es[T],sig:T*16+I[0]*8+I[1]*4+I[2]*2+I[3],ratio:z}}function Ne(){if(!C)return;const A=new Set,U=[],T=R*p/Ct,I=N*p/Ct;for(let z=-E;z<=E;z++)for(let te=-E;te<=E;te++){const he=C.cx+te,ye=C.cz+z,Re=pi(he,ye);A.add(Re);const Ce=d.get(Re);Ce&&Ce.sig!==be(he,ye).sig&&(f.sig++,ve(Re,Ce)),d.has(Re)||U.push({cx:he,cz:ye,d:(te-T)*(te-T)+(z-I)*(z-I)})}for(const[z,te]of d)A.has(z)||(f.membership++,ve(z,te));H&&(!A.has(pi(H.cx,H.cz))||H.sig!==be(H.cx,H.cz).sig)&&(H=null),U.sort((z,te)=>z.d-te.d),M=U,se()}function se(){!t||M.length===0||t.prefetch(M.slice(0,D).map(A=>({cx:A.cx,cz:A.cz,level:be(A.cx,A.cz).lod.level})))}function fe(A,U){if(!C)return!0;const T=_.CHUNK_ANCHOR_MARGIN_M;return A<C.cx*Ct-T||A>(C.cx+1)*Ct+T||U<C.cz*Ct-T||U>(C.cz+1)*Ct+T}const G=()=>C!==null&&M.length===0&&H===null&&$===null,P=()=>G()?Promise.resolve():new Promise(A=>W.push(A));function ne(A){E=A,Ne()}async function pe(A){ne(A),await P();const U=[],T=(I,z,te)=>I.mesh.geometry.attributes.position.getY(te*I.lod.v+z);for(const I of d.values()){const z=d.get(pi(I.cx+1,I.cz)),te=d.get(pi(I.cx,I.cz+1));for(let he=0;he<=xc;he++){if(z){const ye=Math.max(I.lod.step,z.lod.step),Re=Math.round(he*(Ct/ye)/xc)*ye,Ce=(I.cx+1)*Ct,Le=I.cz*Ct+Re;U.push({x:Ce,z:Le,ya:T(I,I.lod.v-1,Re/I.lod.step),yb:T(z,0,Re/z.lod.step),q:s.heightAt(Ce,Le),sa:I.lod.step,sb:z.lod.step,qa:s.heightAt(Ce,Le,I.lod.step),qb:s.heightAt(Ce,Le,z.lod.step)})}if(te){const ye=Math.max(I.lod.step,te.lod.step),Re=Math.round(he*(Ct/ye)/xc)*ye,Ce=I.cx*Ct+Re,Le=(I.cz+1)*Ct;U.push({x:Ce,z:Le,ya:T(I,Re/I.lod.step,I.lod.v-1),yb:T(te,Re/te.lod.step,0),q:s.heightAt(Ce,Le),sa:I.lod.step,sb:te.lod.step,qa:s.heightAt(Ce,Le,I.lod.step),qb:s.heightAt(Ce,Le,te.lod.step)})}}}return U}function ae(){for(const[U,T]of[...d])f.rebuildAll++,ve(U,T);H=null,$=null,t==null||t.reset(),Ne();const A=B.centre();if(X++,B.rebuild(A.x,A.z),C){const U=pi(C.cx,C.cz);M=M.filter(T=>pi(T.cx,T.cz)!==U),Ae(j(C.cx,C.cz))}}const Ee=(A,U=2166136261)=>{for(let T=0;T<A.length;T++)U^=A[T],U=Math.imul(U,16777619)>>>0;return U>>>0};function Ue(){const A=[];for(const U of d.values()){const T=U.mesh.geometry.attributes.position.array,I=U.mesh.geometry.attributes.normal.array,z=U.mesh.geometry.getIndex().array,te=Ee(new Uint8Array(z.buffer,z.byteOffset,z.byteLength),Ee(new Uint8Array(I.buffer,I.byteOffset,I.byteLength),Ee(new Uint8Array(T.buffer,T.byteOffset,T.byteLength))));A.push({cx:U.cx,cz:U.cz,level:U.lod.level,n:T.length/3,hash:te.toString(16).padStart(8,"0")})}return A.sort((U,T)=>U.cx-T.cx||U.cz-T.cz)}function Pe(){const A=Es.map(()=>0);let U=0,T=0,I=0,z=0;const te=Es[0].v-1;for(const he of d.values()){A[he.lod.level]++,U+=(he.lod.v-1)*(he.lod.v-1)*2,T+=te*te*2;const ye=he.mesh.geometry.attributes.position;for(let Re=0;Re<4;Re++){const Ce=he.ratio[Re];if(Ce<=1)continue;I++;const Le=bf[Re],ke=he.lod.v;for(let Be=0;Be+Ce<=ke-1;Be+=Ce){const He=ye.getY(Le(Be,ke)),ot=ye.getY(Le(Be+Ce,ke));for(let je=1;je<Ce;je++){const ht=je/Ce;z=Math.max(z,Math.abs(ye.getY(Le(Be+je,ke))-Math.fround(He*(1-ht)+ot*ht)))}}}}return{fineRings:m,coarseMult:ir[1],levels:A,triangles:U,uniformTriangles:T,stitchedEdges:I,maxChordDevM:z}}function Oe(A,U=!1){const T=A.player;if(fe(T.x,T.z)){C={cx:Math.floor(T.x/Ct),cz:Math.floor(T.z/Ct)},Ne();const z=pi(C.cx,C.cz);if(!d.has(z)){M=M.filter(ye=>pi(ye.cx,ye.cz)!==z);const te=be(C.cx,C.cz),he=(t==null?void 0:t.take(C.cx,C.cz,te.lod.level))??null;if(he)Ae(me(C.cx,C.cz,he.pos,he.nrm,te,he.idx));else if(!U&&(t!=null&&t.anyReady())){const ye=t.pendingMs(C.cx,C.cz);ye<0&&t.prefetch([{cx:C.cx,cz:C.cz,level:te.lod.level}]),ye>=y?Ae(j(C.cx,C.cz)):M.unshift({cx:C.cx,cz:C.cz})}else Ae(j(C.cx,C.cz))}}const I=B.centre();Math.hypot(T.x-I.x,T.z-I.z)>_.FAR_SHELL_RECENTER_M&&(U?(X++,$=null,B.rebuild(T.x,T.z)):!$&&!L&&(J(T.x,T.z)||($=B.beginRebuild(T.x,T.z))))}let Ge=0,le=0,xe=0,De=0,Te=0,Y=0,ce=0,Se=0;function q(A){const U=performance.now(),T=U+(t!=null&&t.ready()?x:S);let I=0,z=0,te=0,he=0,ye=0;for(;A||performance.now()<T;){if(!H&&(A||I<_.CHUNK_BUILDS_PER_FRAME)&&M.length>0){let Re=-1;if(t){const Le=Math.min(M.length,D);for(let ke=0;ke<Le;ke++){const Be=M[ke];if(t.has(Be.cx,Be.cz,be(Be.cx,Be.cz).lod.level)){Re=ke;break}}}if(Re<0&&t&&!A&&t.ready()){const Le=t.pendingMs(M[0].cx,M[0].cz);if(Le>=0&&Le<y){if($){const ke=performance.now();$.step(_.FAR_SHELL_UNITS_PER_STEP)&&($=null),te+=performance.now()-ke;continue}break}}const Ce=Re>0?M.splice(Re,1)[0]:M.shift();H=Q(Ce.cx,Ce.cz),I++,se()}if(H){const Re=performance.now(),Ce=H.done();if(H.step(_.CHUNK_JOB_ROWS_PER_STEP)){const Le=performance.now();Ce||(ye+=Le-Re),Ae(H.finish()),he+=performance.now()-Le,H=null}else ye+=performance.now()-Re;z+=performance.now()-Re}else if($){const Re=performance.now();$.step(_.FAR_SHELL_UNITS_PER_STEP)&&($=null),te+=performance.now()-Re}else break}if(Ge=performance.now()-U,le=z,xe=te,De=he,Te=ye,Y=0,G()&&de){const Re=performance.now();Me(),Y=performance.now()-Re}if(G()&&W.length>0)for(const Re of W.splice(0))Re()}return o.total=performance.now()-a,{update(A){O(A.player.x,A.player.z),Oe(A),q(!1)},drainNow(A){Oe(A,!0),q(!0)},edgeSamples:pe,setLoadRadius:ne,setLodFineRings(A){m=A,ae()},setFarShellVisible(A){B.setVisible(A)},drained:G,rebuildAll:ae,lodStats:Pe,recentLoads:()=>V.slice(),chunkDigest:Ue,shellDigest:()=>B.digest(),firstShellBuilt:()=>k,material:()=>u,canopy:()=>h,stats:()=>({loadRadius:E,chunksLoaded:d.size,unloadCounts:{...f},chunksQueued:M.length+(H?1:0),lastPumpMs:Ge,lastPumpChunkMs:le,lastPumpShellMs:xe,lastPumpFinishMs:De,lastPumpMissMs:Te,lastBatchMs:Y,lastShellCommitMs:Se,shellCommits:ce,pool:(t==null?void 0:t.stats())??null,createMs:{...o},farShellVisible:B.visible(),farShellBuilt:B.built(),farShellCentre:B.centre(),farShellOuterM:_.FAR_SHELL_OUTER_M,waterPlanes:Z.length}),dispose(){t==null||t.dispose();for(const[,A]of oe)r.remove(A),A.geometry.dispose();oe.clear();for(const[A,U]of d)f.dispose++,ve(A,U);M=[],H=null,$=null;for(const A of W.splice(0))A();r.remove(B.mesh,...Z),B.dispose();for(const A of Z)A.geometry.dispose(),A.material.dispose();u.dispose()}}}const Jm=9736842,e0=8288879,t0=6248781,n0=8225640,El=4281914,Us=2437663,Ro=5992504,Ri=3359263,Zn=4864813,Ty=.999,vo=(n,e)=>(Math.sin(n*12.9898+e*78.233)*43758.5453%1+1)%1,dn=n=>n.index?n.toNonIndexed():n;function Rn(n){let e=0;for(const l of n)e+=l.attributes.position.count;const t=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e*3),s=new Float32Array(e);let o=0;for(const l of n)t.set(l.attributes.position.array,o),i.set(l.attributes.normal.array,o),r.set(l.attributes.color.array,o),s.set(l.attributes.blBed.array,o/3),o+=l.attributes.position.count*3;const a=new At;return a.setAttribute("position",new tt(t,3)),a.setAttribute("normal",new tt(i,3)),a.setAttribute("color",new tt(r,3)),a.setAttribute("blBed",new tt(s,1)),a}function rn(n,e,t,i,r,s,o=0,a=0){const l=n.attributes.position,c=n.attributes.normal;n.computeBoundingBox();const h=n.boundingBox,u=Math.max(.001,h.max.y-h.min.y),d=new Float32Array(l.count*3),f=new Float32Array(l.count),M=new We,E=new We(e),m=new We(t),p=new We(i),g=new We(r<0?0:r);for(let S=0;S+2<l.count;S+=3){const x=Math.max(0,c.getY(S)),D=a+(1-a)*(((l.getY(S)+l.getY(S+1)+l.getY(S+2))/3-h.min.y)/u),y=.19+.27*x+.54*D;M.copy(E).lerp(m,Math.min(1,y*2)).lerp(p,Math.max(0,y*2-1)),r>=0&&M.lerp(g,.62*x*x*vo(S,1.7));const R=1+s*(vo(S,3.1)-.5),N=o>0?_.ROCK_CONTACT_DARK+(1-_.ROCK_CONTACT_DARK)*Math.min(1,D/o):1;for(let b=0;b<3;b++)d.set([M.r*R,M.g*R,M.b*R],(S+b)*3),f[S+b]=N}return n.setAttribute("color",new tt(d,3)),n.setAttribute("blBed",new tt(f,1)),n}function Cy(n){const e=n.attributes.position,t=e.count,i=[],r=[];let s=0;for(let h=0;h<t;h++)s=Math.max(s,Math.hypot(e.getX(h),e.getY(h),e.getZ(h)));const o=[];for(let h=0;h+2<t;h+=3){const u=e.getX(h),d=e.getY(h),f=e.getZ(h),M=e.getX(h+1)-u,E=e.getY(h+1)-d,m=e.getZ(h+1)-f,p=e.getX(h+2)-u,g=e.getY(h+2)-d,S=e.getZ(h+2)-f;let x=E*S-m*g,D=m*p-M*S,y=M*g-E*p;const R=Math.hypot(x,D,y);if(R<1e-9)continue;x/=R,D/=R,y/=R,o.push(x*u+D*d+y*f);let N=0;for(;N<i.length/3&&!(i[N*3]*x+i[N*3+1]*D+i[N*3+2]*y>Ty);N++);N===i.length/3&&(i.push(x,D,y),r.push(-1/0))}for(let h=0;h<r.length;h++){const u=i[h*3],d=i[h*3+1],f=i[h*3+2];let M=-1/0;for(let E=0;E<t;E++)M=Math.max(M,u*e.getX(E)+d*e.getY(E)+f*e.getZ(E));r[h]=M}let a=0,l=0;for(let h=0;h+2<t;h+=3){const u=e.getX(h),d=e.getY(h),f=e.getZ(h),M=e.getX(h+1)-u,E=e.getY(h+1)-d,m=e.getZ(h+1)-f,p=e.getX(h+2)-u,g=e.getY(h+2)-d,S=e.getZ(h+2)-f;let x=E*S-m*g,D=m*p-M*S,y=M*g-E*p;const R=Math.hypot(x,D,y);if(R<1e-9)continue;x/=R,D/=R,y/=R;const N=o[l++];for(let b=0;b<t;b++)a=Math.max(a,x*e.getX(b)+D*e.getY(b)+y*e.getZ(b)-N)}const c=new Float32Array(r.length*4);for(let h=0;h<r.length;h++)c[h*4]=i[h*3],c[h*4+1]=i[h*3+1],c[h*4+2]=i[h*3+2],c[h*4+3]=r[h];return{planes:c,hullErr:a,boundR:s}}const Dy=new Float32Array(0);function ys(n){const e=n.geometry;e.computeBoundingBox();const t=e.boundingBox,i=e.attributes.position,r=t.min.y+(t.max.y-t.min.y)*.18;let s=0,o=0;for(let l=0;l<i.count;l++){const c=Math.hypot(i.getX(l),i.getZ(l));i.getY(l)<=r&&(s=Math.max(s,c)),o=Math.max(o,c)}e.computeBoundingSphere();const a=n.kind==="rock"||n.kind==="cobble"?Cy(e):{planes:Dy,hullErr:0,boundR:e.boundingSphere.radius};return{...n,footR:s,wideR:o,baseY:t.min.y,height:Math.max(.001,t.max.y-t.min.y),planes:a.planes,boundR:a.boundR,hullErr:a.hullErr}}const Ny=[{name:"block",kind:"rock",mode:"box",shear:.6,planes:0,hMin:.26,hMax:0,s:[1,.98,.9],detail:0,sizeMul:1,seg:3,brk:.2},{name:"slab",kind:"rock",mode:"box",shear:.22,planes:0,hMin:.24,hMax:0,s:[.98,.66,.86],detail:0,sizeMul:.6,seg:3,brk:.11},{name:"fin",kind:"rock",mode:"box",shear:.9,planes:0,hMin:.28,hMax:0,s:[.6,1.22,.94],detail:0,sizeMul:.82,seg:3,brk:.15},{name:"shard",kind:"rock",mode:"poly",shear:0,planes:34,hMin:.44,hMax:.7,s:[.9,1,.84],detail:0,sizeMul:1.15,seg:1,brk:0},{name:"cobble",kind:"cobble",mode:"box",shear:.82,planes:0,hMin:.27,hMax:0,s:[1,.92,.84],detail:0,sizeMul:1,seg:2,brk:.2}];function Iy(n,e,t=0){const i=new Float32Array(24);for(let h=0;h<24;h++)i[h]=(n.next()-.5)*2*e.hMin;const r=(n.next()-.5)*e.shear,s=(n.next()-.5)*e.shear,o=1+.3*n.next(),a=1+Math.floor(n.next()*4096),l=dn(new Gs(1,1,1,e.seg,e.seg,e.seg)),c=l.attributes.position;for(let h=0;h<c.count;h++){const u=c.getX(h),d=c.getY(h),f=c.getZ(h),M=u+.5,E=d+.5,m=f+.5;let p=0,g=0,S=0;for(let y=0;y<8;y++){const R=(y&1?M:1-M)*(y&2?E:1-E)*(y&4?m:1-m),N=y*3;p+=i[N]*R,g+=i[N+1]*R,S+=i[N+2]*R}const x=a+Math.round(M*e.seg)*7+Math.round(E*e.seg)*131+Math.round(m*e.seg)*1571,D=1+(o-1)*(1-E);c.setXYZ(h,(u*D+p+r*E+(vo(x,5.3)-.5)*e.brk)*e.s[0],(d+g*(.45+.9*E)+(vo(x,9.1)-.5)*e.brk)*e.s[1],(f*D+S+s*E+(vo(x,13.7)-.5)*e.brk)*e.s[2])}return l.computeVertexNormals(),rn(l,t0,e0,Jm,n0,.34,_.ROCK_CONTACT_BAND,t)}function Oy(n,e){const t=[],i=[];for(let h=0;h<e.planes;h++){const u=1-(2*h+1)/e.planes,d=Math.sqrt(Math.max(0,1-u*u)),f=h*2.399963+n.next()*Math.PI*2;t.push(new ue(Math.cos(f)*d,u*(.5+.5*n.next()),Math.sin(f)*d).normalize());const M=n.next(),E=n.next()<.18;i.push(h===0?e.hMin:E?e.hMin+.05*M:e.hMax-.18*M)}t.push(new ue(0,-1,0)),i.push(.34);const r=8,s=[],o=new ue,a=new ue,l=new ue;for(let h=0;h<t.length;h++){const u=t[h],d=i[h];o.set(0,1,0),Math.abs(u.y)>.9&&o.set(1,0,0),o.cross(u).normalize(),a.copy(u).cross(o).normalize();let f=[];for(const M of[[1,1],[-1,1],[-1,-1],[1,-1]])f.push(new ue().copy(u).multiplyScalar(d).addScaledVector(o,M[0]*r).addScaledVector(a,M[1]*r));for(let M=0;M<t.length&&f.length>=3;M++){if(M===h)continue;const E=t[M],m=i[M],p=[];for(let g=0;g<f.length;g++){const S=f[g],x=f[(g+1)%f.length],D=E.dot(S)-m,y=E.dot(x)-m;D<=0&&p.push(S),(D<0&&y>0||D>0&&y<0)&&p.push(l.copy(x).sub(S).multiplyScalar(D/(D-y)).add(S).clone())}f=p}if(!(f.length<3))for(let M=1;M+1<f.length;M++)for(const E of[f[0],f[M],f[M+1]])s.push(E.x*e.s[0],E.y*e.s[1],E.z*e.s[2])}const c=new At;return c.setAttribute("position",new tt(Float32Array.from(s),3)),c.computeVertexNormals(),rn(c,t0,e0,Jm,n0,.34,_.ROCK_CONTACT_BAND)}function Tf(n,e,t=0){return e.mode==="box"?Iy(n,e,t):Oy(n,e)}function Py(n,e,t){const i=new Float32Array(e*9),r=new Float32Array(e*9),s=new Float32Array(e*9),o=[];for(let l=0;l<e;l++)o.push(.66+.34*n.next());for(let l=0;l<e;l++){const c=l/e*Math.PI*2,h=(l+1)/e*Math.PI*2,u=o[l],d=o[(l+1)%e];i.set([0,t,0,Math.cos(c)*u,0,Math.sin(c)*u,Math.cos(h)*d,0,Math.sin(h)*d],l*9),r.set([0,1,0,0,1,0,0,1,0],l*9),s.set([1,1,1,0,0,0,0,0,0],l*9)}const a=new At;return a.setAttribute("position",new tt(i,3)),a.setAttribute("normal",new tt(r,3)),a.setAttribute("color",new tt(s,3)),a}function Ly(n){const e=[rn(dn(new Di(.006,.013,.4,5,1,!0)).translate(0,.2,0),Zn,Zn,6969156,-1,.14)],t=4;for(let i=0;i<t;i++){const r=i/(t-1),s=.23-.17*r,o=.52-.14*r,a=dn(new Hs(s*(.86+.28*n.next()),o,6));a.rotateY(n.next()*2).translate((n.next()-.5)*.04,.3+r*.52,(n.next()-.5)*.04),e.push(rn(a,Us,El,6519114,-1,.16))}return Rn(e)}function Uy(n){const e=[rn(dn(new Di(.008,.018,.44,5,1,!0)).translate(0,.22,0),Zn,Zn,6969156,-1,.14)];for(let t=0;t<3;t++){const i=t*2.2+n.next(),r=.26+.1*n.next(),s=dn(new Vs(r,0)).scale(1,.8,1);s.translate(Math.cos(i)*.15,.3+.14*n.next()+r*.55,Math.sin(i)*.15),e.push(rn(s,Ri,Ro,8228684,-1,.18))}return Rn(e)}function Fy(n){const e=[];for(let t=0;t<3;t++){const i=t*2.1+n.next()*1.4,r=.3+.16*n.next(),s=dn(new Vs(r,0)).scale(1,.62,1);s.translate(Math.cos(i)*.22,.3+.16*n.next(),Math.sin(i)*.22),e.push(rn(s,4012834,6186034,8357192,-1,.2))}return Rn(e)}function ky(n){const e=dn(new Hs(.2*(.9+.2*n.next()),1,6)).translate(0,.5,0);return rn(e,Us,El,6519114,-1,.16)}function By(n){const e=[rn(dn(new Di(.018,.028,.44,3,1,!0)).translate(0,.22,0),Zn,Zn,6969156,-1,.1)],t=dn(new Vs(.36+.07*n.next(),0)).scale(1.05,.86,1.05).translate(0,.6,0);return e.push(rn(t,Ri,Ro,8228684,-1,.18)),Rn(e)}const Ai=5070394,wi=2897955,i0=10131338,Fa=5925444,ka=3424298,lr=(n,e,t,i=5,r=Zn)=>rn(dn(new Di(e,t,n,i,1,!0)).translate(0,n/2,0),r,r,r,-1,.12),vl=(n,e,t,i,r,s,o,a=6)=>rn(dn(new Hs(e*(.92+.16*n.next()),t,a)).rotateY(n.next()*2).translate((n.next()-.5)*.02,i+t/2,(n.next()-.5)*.02),r,s,o,-1,.16),kn=(n,e,t,i,r,s,o,a,l)=>rn(dn(new Vs(e*(.94+.12*n.next()),0)).scale(1,s,1).rotateY(n.next()*6.28).translate(t,i,r),o,a,l,-1,.18);function Gy(n){const e=[lr(.3,.014,.03)];for(let t=0;t<3;t++){const i=t*2.1+n.next();e.push(kn(n,.3,Math.cos(i)*.15,.52,Math.sin(i)*.15,1,Ri,Ro,8228684))}for(let t=0;t<2;t++){const i=t*3.1+n.next();e.push(kn(n,.2,Math.cos(i)*.08,.78,Math.sin(i)*.08,1,Ri,Ro,8820815))}return Rn(e)}function zy(n){const e=[lr(.66,.008,.018,5,i0)];return e.push(kn(n,.22,.08,.47,0,1,Ri,7178824,9676890)),e.push(kn(n,.27,-.04,.63,.05,1,Ri,7178824,9676890)),e.push(kn(n,.2,.03,.86,-.04,1,Ri,7178824,9676890)),Rn(e)}function Hy(n){const e=[lr(.14,.006,.014)],t=[[.12,.14,.28],[.35,.19,.28],[.52,.155,.28],[.69,.11,.26],[.85,.06,.2]];for(const[i,r,s]of t)e.push(vl(n,r,s,i,Us,El,5137988));return Rn(e)}function Vy(n){const e=[lr(.36,.012,.024,5,8018500)];e.push(kn(n,.2,.1,.3,-.05,.8,wi,Ai,7307082));for(let t=0;t<3;t++){const i=t*2.1+n.next();e.push(kn(n,.28,Math.cos(i)*.1,.5,Math.sin(i)*.1,.85,wi,Ai,7307082))}for(let t=0;t<2;t++){const i=t*2.9+n.next();e.push(kn(n,.22,Math.cos(i)*.12,.78,Math.sin(i)*.12,.8,wi,Ai,7307082))}return e.push(kn(n,.15,0,.9,0,.8,wi,Ai,7307082)),Rn(e)}function Wy(n){const e=[lr(.34,.012,.03,6,8018500)],t=[[.32,.2,.3],[.46,.235,.3],[.62,.18,.28],[.78,.12,.25]];for(const[i,r,s]of t)e.push(vl(n,r,s,i,wi,Ai,7307082,7));return Rn(e)}function $y(n){const e=[lr(.18,.007,.016,5,6969156)],t=[[.16,.14,.3],[.42,.2,.3],[.58,.16,.3],[.74,.11,.28],[.88,.06,.18]];for(const[i,r,s]of t)e.push(vl(n,r,s,i,wi,Ai,6715210));return Rn(e)}function Xy(n){const e=[lr(.22,.006,.02)],t=[[.2,.15,.28],[.32,.175,.28],[.5,.16,.28],[.68,.13,.28],[.84,.08,.2]];for(const[i,r,s]of t)e.push(vl(n,r,s,i,Us,4873788,5926468,7));return Rn(e)}function Ky(n){const e=(n.next()-.5)*.25,t=[rn(dn(new Di(.014,.03,.34,5,1,!0)).translate(0,.17,0).rotateZ(e),Zn,Zn,Zn,-1,.14)];for(let i=0;i<3;i++){const r=i*2.1+n.next();t.push(kn(n,.34,Math.cos(r)*.08+e*.3,.45,Math.sin(r)*.08,.6,ka,Fa,8030808))}return t.push(kn(n,.22,e*.5,.72,.03,.7,ka,Fa,8030808)),t.push(kn(n,.14,e*.6,.9,-.02,.8,ka,Fa,8030808)),Rn(t)}const Hi=(n,e,t,i,r,s,o=Zn)=>a=>{const l=n*.5*(.94+.12*a.next()),c=[lr(Math.max(.08,t),.012,.024,3,o)],h=Math.max(.06,e-t),u=Math.max(.06,1-e),d=dn(new Di(l,l*.35,h,5,1,!0)).translate(0,t+h/2,0),f=dn(new Hs(l,u,5)).translate(0,e+u/2,0);return c.push(rn(d,i,r,s,-1,.14),rn(f,i,r,s,-1,.14)),Rn(c)},Yy=[["tree.conifer","tree",1,Ly,!0],["tree.broadleaf","tree",.8,Uy,!0],["tree.conifer-far","tree",1,ky,!1],["tree.broadleaf-far","tree",.8,By,!1],["shrub.low","shrub",1,Fy,!1],["tree.dome","tree",.85,Gy,!0],["tree.dome-far","tree",.85,Hi(.94,.56,.25,Ri,Ro,8228684),!1],["tree.columnar.light","tree",.9,zy,!0],["tree.columnar.light-far","tree",.9,Hi(.61,.6,.25,Ri,7178824,9676890,i0),!1],["tree.spire.narrow","tree",1,Hy,!0],["tree.spire.narrow-far","tree",1,Hi(.39,.35,.08,Us,El,5137988),!1],["tree.pine.umbrella","tree",1,Vy,!0],["tree.pine.umbrella-far","tree",1,Hi(.75,.52,.17,wi,Ai,7307082,8018500),!1],["tree.pine.tall","tree",1.1,Wy,!0],["tree.pine.tall-far","tree",1.1,Hi(.45,.44,.29,wi,Ai,7307082,8018500),!1],["tree.pine.dense","tree",.9,$y,!0],["tree.pine.dense-far","tree",.9,Hi(.4,.4,.13,wi,Ai,6715210,6969156),!1],["tree.cedar","tree",1,Xy,!0],["tree.cedar-far","tree",1,Hi(.33,.31,.17,Us,4873788,5926468),!1],["tree.krummholz","tree",.6,Ky,!0],["tree.krummholz-far","tree",.6,Hi(.86,.44,.25,ka,Fa,8030808),!1]];function Cf(n,e){const t=n.getAttribute("position"),i=t.count,r=new Float32Array(i);if(e){let s=0;for(let o=0;o<i;o++)s=Math.max(s,t.getY(o));for(let o=0;o<i;o++){const a=s>0?Math.max(0,t.getY(o))/s:0;r[o]=a*a}}return n.setAttribute("blSway",new tt(r,1)),n}function qy(n){const e=[];for(const t of Ny){for(let i=0;i<3;i++)e.push(ys({id:`rock.${t.name}.${i}`,kind:t.kind,geometry:Tf(n.fork(`${t.name}.${i}`),t),sizeMul:t.sizeMul,poly:t.mode==="poly",far:!1}));if(t.mode==="box"&&t.seg>1)for(let i=0;i<3;i++)e.push(ys({id:`rock.${t.name}-far.${i}`,kind:t.kind,geometry:Tf(n.fork(`${t.name}.${i}`),{...t,seg:1},_.ROCK_BURY_FRAC),sizeMul:t.sizeMul,poly:!1,far:!0}))}for(const[t,i,r,s,o]of Yy)for(let a=0;a<2;a++)e.push(ys({id:`${t}.${a}`,kind:i,geometry:Cf(s(n.fork(`${t}.${a}`)),!0),sizeMul:r,poly:o,far:!o}));for(const t of e)t.geometry.getAttribute("blSway")||Cf(t.geometry,!1);for(let t=0;t<2;t++)e.push(ys({id:`contact.${t}`,kind:"contact",geometry:Py(n.fork(`contact.${t}`),_.ROCK_CONTACT_SEGMENTS,_.ROCK_CONTACT_DOME),sizeMul:1,poly:!1,far:!1}));return e}const Sc=new ue(.99,.88,.79);function Zy(n){const e=new To({color:16777215,vertexColors:!0,transparent:!0,depthWrite:!1,side:pn,blending:Gc,fog:!1});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float blDis;
varying float blDisV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
blDisV = blDis;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float blDisV;`).replace("#include <dithering_fragment>",`gl_FragColor.rgb = mix(vec3(1.0), gl_FragColor.rgb, blDisV);
#include <dithering_fragment>`),t.uniforms.uContact={value:new et(_.ROCK_CONTACT_OCC,_.ROCK_CONTACT_FADE_M,_.ROCK_CONTACT_FAR_M,_.ROCK_CONTACT_FALLOFF)},t.uniforms.uApron={value:new et(Sc.x,Sc.y,Sc.z,_.ROCK_APRON_MIX)},t.uniforms.uSunDir={value:n.sunDir},t.uniforms.uSunShape={value:_.ROCK_CONTACT_SUN_SHAPE},e.userData.uniforms=t.uniforms,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
  diffuseColor = vec4(vec3(1.0 - blOcc) * mix(vec3(1.0), uApron.rgb, sqrt(blU) * uApron.a * blFade), 1.0);`)},e}const jy=`
float blGrainH(vec3 p) { return fract(sin(dot(floor(p), vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float blGrainN(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(blGrainH(i), blGrainH(i + vec3(1.0, 0.0, 0.0)), f.x), mix(blGrainH(i + vec3(0.0, 1.0, 0.0)), blGrainH(i + vec3(1.0, 1.0, 0.0)), f.x), f.y);
  float b = mix(mix(blGrainH(i + vec3(0.0, 0.0, 1.0)), blGrainH(i + vec3(1.0, 0.0, 1.0)), f.x), mix(blGrainH(i + vec3(0.0, 1.0, 1.0)), blGrainH(i + vec3(1.0, 1.0, 1.0)), f.x), f.y);
  return mix(a, b, f.z);
}
`;function Qy(n,e){const t=Fr(n),i=new Fn({color:16777215,vertexColors:!0,flatShading:!0,fog:!1});typeof location<"u"&&new URLSearchParams(location.search).get("paintsrc")==="1"&&(i.vertexColors=!1,i.color.setRGB(0,1,0)),i.alphaToCoverage=!0;const r=e??{uWind:{value:new et(0,0,0,0)}},s=_.TREE_SWAY_MUL.toFixed(3),o=_.GROUNDCOVER_WIND_FIELD_M.toFixed(2),a=(6.2831853/_.GROUNDCOVER_WIND_GUST_S).toFixed(4),l={uSnowR:{value:new et(0,_.SNOW_ALT_LO_M,_.SNOW_ALT_HI_M,_.SNOW_ROCK_UP_MIN)},uWet:{value:0}};return i.userData.snow=l,i.onBeforeCompile=c=>{kr(c,t),Object.assign(c.uniforms,l),c.uniforms.uWind=r.uWind,c.uniforms.uGrain={value:new et(1/_.ROCK_GRAIN_MOTTLE_M,_.ROCK_GRAIN_MOTTLE,1/_.ROCK_GRAIN_SPECKLE_M,_.ROCK_GRAIN_SPECKLE)},c.uniforms.uVein={value:new ue(_.ROCK_GRAIN_VEIN_M,_.ROCK_GRAIN_VEIN,_.ROCK_GRAIN_FADE_M)},c.uniforms.uBed={value:new st(_.ROCK_CONTACT_FADE_M,_.ROCK_CONTACT_FAR_M)},i.userData.uniforms=c.uniforms,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
attribute float blBed;
varying float blBedV;
varying vec3 blWorldNormal;
attribute float blDis;
varying float blDisV;
attribute float blSway;
varying float blSwayV;
uniform vec4 uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
blBedV = blBed;
blDisV = blDis;
blSwayV = blSway;   // S6 (D288): the fragment shader's foliage flag — > 0 on every tree/shrub vertex, 0 on stone
#ifdef USE_INSTANCING
  if (blSway > 0.0) {
    // D286: the tree sways on the grass's wind field — the same three sines at the instance's origin, the same gust breath, the
    // tip travelling as blSway (t²) times TREE_SWAY_MUL of the grass amplitude, in the instance's own frame
    vec2 blP = instanceMatrix[3].xz * (6.2831853 / ${o});
    float blTime = uWind.z;
    float blN = 0.5 * sin(blP.x * 0.9 + blP.y * 0.44 + blTime * 1.7) + 0.35 * sin(blP.x * -0.6 + blP.y * 1.3 - blTime * 1.3) + 0.15 * sin(blP.y * 2.1 + blTime * 2.3);
    float blGust = 0.6 + 0.4 * sin(blTime * ${a});
    vec2 blWd = length(uWind.xy) > 1e-6 ? normalize(uWind.xy) : vec2(1.0, 0.0);
    float blAmp = uWind.w * blGust * (0.55 + 0.45 * blN) * 2.27 * ${s} * blSway;
    vec3 blS = vec3(blWd.x, 0.0, blWd.y) * blAmp;
    transformed.x += dot(blS, normalize(instanceMatrix[0].xyz));
    transformed.z += dot(blS, normalize(instanceMatrix[2].xyz));
  }
#endif`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
#ifdef USE_INSTANCING
  blWorldNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
#else
  blWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
#endif`).replace("blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;",`#ifdef USE_INSTANCING
  blWorldPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  blWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform vec4 uGrain;
uniform vec3 uVein;
uniform vec2 uBed;
uniform vec4 uSnowR;
uniform float uWet;
varying float blBedV;
varying vec3 blWorldNormal;
varying float blDisV;
varying float blSwayV;${jy}`).replace("#include <color_fragment>",`#include <color_fragment>
  float blDist = length(blWorldPos - cameraPosition);
  // The baked bedding shade, RELEASED with distance (D69's logged residual, roadmap item 32). It is a
  // NEAR-FIELD contact cue, so it fades over exactly the distances the bedding disc on the ground fades
  // over: the two halves of one cue now arrive and leave together, instead of one of them still
  // multiplying a 4-pixel boulder at 150 m by 0.72-0.84.
  diffuseColor.rgb *= mix(1.0, blBedV, 1.0 - smoothstep(uBed.x, uBed.y, blDist));
  // S6 (D288): the stone's GRAIN and quartz VEINS are stone paint — the vein noise is compressed 6× in y, and on a crown it read
  // as the pale horizontal bands the owner's c196 frames showed at every altitude. Foliage (blSwayV > 0) takes none of it.
  float blNear = (blSwayV > 0.0 ? 0.0 : 1.0) * (1.0 - smoothstep(uVein.z * 0.45, uVein.z, blDist));
  if (blNear > 0.001) {
    float blM = blGrainN(blWorldPos * uGrain.x) - 0.5;
    float blS = blGrainH(blWorldPos * uGrain.z) - 0.5;
    float blV = blGrainN(vec3(blWorldPos.x, blWorldPos.y * 6.0, blWorldPos.z) / uVein.x);
    diffuseColor.rgb *= 1.0 + blNear * (blM * uGrain.y + blS * uGrain.w);
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.61, 0.58), blNear * uVein.y * smoothstep(0.62, 0.86, blV));
  }
  // WET STONE (item 10 sub-task 3, D98) — a boulder IS rock, so the whole of it wets, with no ramp.
  // Before the snow, because snow lies on wet rock rather than under it.
  // S6 (D288): FOLIAGE TAKES NEITHER — a crown is not wet stone and does not cap with snow the way a boulder's top does; the
  // owner's first frames (c196) showed the wet highlight banding every crown at every altitude. blSwayV > 0 is foliage.
  if (uWet > 0.0 && blSwayV <= 0.0) {
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
  if (uSnowR.x > 0.0 && blSwayV <= 0.0) {
    float rkAlt = smoothstep(uSnowR.y, uSnowR.z, blWorldPos.y);
    float rkUp = smoothstep(uSnowR.w, 1.0, clamp(blWorldNormal.y, 0.0, 1.0));
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.95, 0.97), smoothstep(0.02, 0.5, uSnowR.x * rkAlt * rkUp));
  }`).replace("#include <dithering_fragment>",`gl_FragColor.a *= blDisV;
#include <dithering_fragment>`)},i}const Df={near:{sides:[7,4,3],stride:[1,1,2],dropOrder:3,roots:!0,minRadiusFrac:.012},mid:{sides:[4,3],stride:[2,3],dropOrder:2,roots:!1,minRadiusFrac:.1}},Nf=(n,e)=>n[Math.min(n.length-1,e)],$h=n=>new ue(n.x,n.y,n.z);function Jy(n){const e=[],t=s=>{const o=n[Math.max(0,s-1)],l=n[Math.min(n.length-1,s+1)].clone().sub(o);return l.lengthSq()<1e-12?new ue(0,1,0):l.normalize()};let i=t(0),r=Math.abs(i.y)>.9?new ue(1,0,0):new ue(0,1,0);r.sub(i.clone().multiplyScalar(r.dot(i))).normalize();for(let s=0;s<n.length;s++){const o=t(s);if(s>0){const a=new ue().crossVectors(i,o),l=a.length();l>1e-9&&r.applyAxisAngle(a.divideScalar(l),Math.atan2(l,i.dot(o))),r.sub(o.clone().multiplyScalar(r.dot(o))).normalize(),i=o}e.push({t:i.clone(),n:r.clone(),b:new ue().crossVectors(i,r)})}return e}const eR=()=>({pos:[],nor:[],uv:[],idx:[],ord:[],pha:[]});function r0(n,e,t,i,r,s,o=0){const a=[],l=[],c=(g,S)=>{a.length&&g.distanceToSquared(a[a.length-1])<1e-8||(a.push(g),l.push(S))};for(let g=0;g<e.stations.length;g+=i)c($h(e.stations[g].p),e.stations[g].r);const h=e.stations.length-1;if(h%i!==0&&c($h(e.stations[h].p),e.stations[h].r),a.length<2)return;const u=Jy(a),d=n.pos.length/3,f=2*Math.PI*(l[0]??.1),M=Math.max(1,Math.round(f*s));let E=0;for(let g=0;g<a.length;g++){g>0&&(E+=a[g].distanceTo(a[g-1]));const S=r>0?1+r*Math.exp(-E*2.2):1,x=l[g]*S,{n:D,b:y}=u[g];for(let R=0;R<=t;R++){const N=R/t*Math.PI*2,b=D.clone().multiplyScalar(Math.cos(N)).add(y.clone().multiplyScalar(Math.sin(N))),v=a[g].clone().addScaledVector(b,x);n.pos.push(v.x,v.y,v.z),n.nor.push(b.x,b.y,b.z),n.uv.push(R/t*M,E*s),n.ord.push(e.order),n.pha.push(o)}}const m=t+1;for(let g=0;g<a.length-1;g++)for(let S=0;S<t;S++){const x=d+g*m+S,D=x+1,y=x+m,R=y+1;n.idx.push(x,y,D,D,y,R)}const p=(g,S)=>{const x=n.pos.length/3;n.pos.push(a[g].x,a[g].y,a[g].z),n.nor.push(S.x,S.y,S.z),n.uv.push(.5,.5),n.ord.push(e.order),n.pha.push(o);const D=d+g*m;for(let y=0;y<t;y++){const R=D+y,N=D+y+1;S.dot(u[g].t)>0?n.idx.push(x,R,N):n.idx.push(x,N,R)}};p(0,u[0].t.clone().negate()),p(a.length-1,u[a.length-1].t.clone())}function tR(n,e,t,i,r,s,o){const a=[],l=[];for(let u=0;u<=4;u++){const d=u/4,f=o+i*d;a.push(new ue(e.x+Math.cos(t)*f,e.y+.06*i-.55*i*d*d,e.z+Math.sin(t)*f)),l.push(r*(1-.72*d))}const h={order:0,tip:{x:a[4].x,y:a[4].y,z:a[4].z},stations:a.map((u,d)=>({p:{x:u.x,y:u.y,z:u.z},r:l[d]}))};r0(n,h,s,1,0,1.2,0)}function If(n,e,t={}){const i=t.sidesOverride!==void 0?{...Df[e],sides:[t.sidesOverride]}:Df[e],r=eR(),s=n.branches[0].stations[0].r;for(const a of n.branches){if(a.order>=i.dropOrder||a.order>0&&a.stations[0].r<s*(t.minRadiusFracOverride??i.minRadiusFrac))continue;const l=i.roots&&a.order===0&&a.parent===-1?.55:0;r0(r,a,Nf(i.sides,a.order),Nf(i.stride,a.order),l,1.1,(a.atFrac*37.7+a.order*2.4+a.stations[0].p.x*.9+a.stations[0].p.z*1.3)%6.2831853)}if(i.roots&&(t.roots??0)>0){const a=$h(n.branches[0].stations[0].p),l=t.roots,c=Math.max(s*(t.rootReach??2.2),n.heightM*.06);for(let h=0;h<l;h++)tR(r,a,h/l*Math.PI*2+.4,c,s*.42,4,s*.75)}const o=new At;return o.setAttribute("position",new gt(r.pos,3)),o.setAttribute("normal",new gt(r.nor,3)),o.setAttribute("uv",new gt(r.uv,2)),o.setAttribute("blOrder",new gt(r.ord,1)),o.setAttribute("blPhase",new gt(r.pha,1)),o.setIndex(r.idx),o.computeBoundingSphere(),{geometry:o,triangles:r.idx.length/3}}const nR={near:5e3,mid:600},iR=.42;function cl(n,e,t,i=!1){const r=nR[t],s=Math.floor(r*iR);let o=If(n,t,{roots:e.roots,rootReach:e.rootReach});for(const c of[.03,.05,.08,.12]){if(o.triangles<=r-s)break;o.geometry.dispose(),o=If(n,t,{roots:e.roots,rootReach:e.rootReach,minRadiusFracOverride:c})}const a=Math.max(0,r-o.triangles),l=zw(n,e,t,void 0,Math.floor(a/2),i);return{wood:o,foliage:l,triangles:o.triangles+l.quads*2}}function ha(n,e,t){let i=n*374761393+e*668265263+t*1274126177>>>0;return i=Math.imul(i^i>>>13,1274126177)>>>0,i=Math.imul(i^i>>>16,2246822519)>>>0,((i^i>>>13)>>>0)/4294967296}const Of=n=>n*n*n*(n*(n*6-15)+10);function rR(n,e,t,i,r=t){const s=Math.max(1,Math.round(t)),o=Math.max(1,Math.round(r)),a=Math.floor(n),l=Math.floor(e),c=Of(n-a),h=Of(e-l),u=(a%s+s)%s,d=(l%o+o)%o,f=(u+1)%s,M=(d+1)%o,E=ha(u,d,i),m=ha(f,d,i),p=ha(u,M,i),g=ha(f,M,i);return(E*(1-c)+m*c)*(1-h)+(p*(1-c)+g*c)*h}const sR=256,Yi=n=>n<0?0:n>1?1:n,Pf=(n,e,t)=>n+(e-n)*t;function In(n,e,t,i,r,s=.5){let o=0,a=1,l=0,c=t;for(let h=0;h<i;h++)o+=a*rR(n*c,e*c,c,r+h*131,c),l+=a,a*=s,c*=2;return o/l}function Ac(n,e,t){switch(n){case"ridges-deep":{const i=In(e,t,4,3,11)*.1,r=Math.abs(Math.sin((e+i)*Math.PI*15)),s=In(e,t,8,3,23);return Yi(.3+.62*Math.pow(r,.55)-.28*Math.pow(1-s,3))}case"plates-orange":{const i=In(e,t,5,4,31),r=In(e+.37,t*.6+.11,3,3,47),s=Math.abs(i-r);return Yi(.8-1.5*Math.max(0,.16-s)*5)}case"scales-grey":{const i=In(e,t,11,3,53),r=In(e+.5,t+.25,9,3,67);return Yi(.72-2.2*Math.max(0,.1-Math.abs(i-r)))}case"bands-white":{const i=In(e*3,t*22,8,2,71);return Yi(.62+.14*In(e,t,6,2,83)-.34*Math.max(0,i-.66)*3)}case"strips-fibrous":{const i=In(e,t*.35,3,2,91)*.06,r=Math.abs(Math.sin((e+i)*Math.PI*22));return Yi(.42+.44*Math.pow(r,.8)+.12*In(e,t*.5,5,2,97))}case"smooth-grey":default:return Yi(.55+.3*In(e,t,6,3,101))}}const oR={"ridges-deep":.815,"plates-orange":.477,"scales-grey":.75,"bands-white":.397,"strips-fibrous":.63,"smooth-grey":.639},aR={"ridges-deep":[[38,32,26],[116,100,80]],"plates-orange":[[74,44,30],[198,122,66]],"scales-grey":[[52,46,41],[126,116,104]],"bands-white":[[186,182,172],[238,236,230]],"strips-fibrous":[[70,52,40],[150,118,90]],"smooth-grey":[[80,76,70],[148,142,132]]},Lf=Object.fromEntries(Object.entries(aR).map(([n,[e,t]])=>{const i=oR[n];return[n,[e.map(r=>Math.round(r*i)),t.map(r=>Math.round(r*i))]]}));function Xh(n,e=sR){const[t,i]=Lf[n]??Lf["smooth-grey"],r=new Uint8ClampedArray(e*e*4);for(let s=0;s<e;s++)for(let o=0;o<e;o++){const a=o/e,l=s/e,c=Ac(n,a,l),h=Ac(n,(o+1)/e,l)-Ac(n,(o-1+e)/e,l),u=Yi(.4+.6*c-1.4*Math.abs(h)),d=(s*e+o)*4;for(let f=0;f<3;f++)r[d+f]=Math.round(Pf(t[f],i[f],c)*u);if(n==="bands-white"){const f=In(a*3,l*22,8,2,71);if(f>.7){const M=Math.min(1,(f-.7)*9);for(let E=0;E<3;E++)r[d+E]=Math.round(Pf(r[d+E],26+E*3,M))}}r[d+3]=Math.round(Yi(c)*255)}return{data:r,size:e}}function lR(n,e,t){var me;const i=cl(n,e,t),r=Xh(e.bark),s=rl(e.foliage),o=Math.max(r.size,s.size),a=o*2,l=o,c=new Uint8ClampedArray(a*l*4),h=(K,j)=>{for(let Q=0;Q<l;Q++)for(let H=0;H<o;H++){const $=Math.min(K.size-1,Math.floor(H/o*K.size)),oe=(Math.min(K.size-1,Math.floor(Q/l*K.size))*K.size+$)*4,de=(Q*a+(H+j))*4;c[de]=K.data[oe],c[de+1]=K.data[oe+1],c[de+2]=K.data[oe+2],c[de+3]=K.data[oe+3]}};h(r,0),h(s,o);const u=i.wood.geometry,d=i.foliage.geometry,f=u.getAttribute("position").array,M=u.getAttribute("normal").array,E=u.getAttribute("uv").array,m=u.getAttribute("blOrder").array,p=u.getAttribute("blPhase").array,g=u.getIndex().array,S=(me=d.getAttribute("position"))==null?void 0:me.array,x=!!(S&&S.length),D=x?d.getAttribute("normal").array:new Float32Array(0),y=x?d.getAttribute("uv").array:new Float32Array(0),R=x?d.getAttribute("color").array:new Float32Array(0),N=x?d.getAttribute("blPhase").array:new Float32Array(0),b=x?d.getAttribute("blAnchor").array:new Float32Array(0),v=x?d.getIndex().array:[],w=f.length/3,O=x?S.length/3:0,C=new Float32Array((w+O)*3),W=new Float32Array((w+O)*3),B=new Float32Array((w+O)*2),L=new Float32Array((w+O)*3),X=new Float32Array(w+O),k=new Float32Array(w+O),J=new Float32Array((w+O)*3),Z=new Uint32Array(g.length+v.length);for(let K=0;K<w;K++)C[K*3]=f[K*3],C[K*3+1]=f[K*3+1],C[K*3+2]=f[K*3+2],W[K*3]=M[K*3],W[K*3+1]=M[K*3+1],W[K*3+2]=M[K*3+2],B[K*2]=-E[K*2]-1,B[K*2+1]=E[K*2+1],L[K*3]=1,L[K*3+1]=1,L[K*3+2]=1,X[K]=m[K],k[K]=p[K],J[K*3]=f[K*3],J[K*3+1]=f[K*3+1],J[K*3+2]=f[K*3+2];for(let K=0;K<O;K++){const j=w+K;C[j*3]=S[K*3],C[j*3+1]=S[K*3+1],C[j*3+2]=S[K*3+2],W[j*3]=D[K*3],W[j*3+1]=D[K*3+1],W[j*3+2]=D[K*3+2],B[j*2]=.5+y[K*2]*.5,B[j*2+1]=y[K*2+1],L[j*3]=R[K*3],L[j*3+1]=R[K*3+1],L[j*3+2]=R[K*3+2],X[j]=3,k[j]=N[K],J[j*3]=b[K*3],J[j*3+1]=b[K*3+1],J[j*3+2]=b[K*3+2]}for(let K=0;K<g.length;K++)Z[K]=g[K];for(let K=0;K<v.length;K++)Z[g.length+K]=w+v[K];const ee=new At;return ee.setAttribute("position",new tt(C,3)),ee.setAttribute("normal",new tt(W,3)),ee.setAttribute("uv",new tt(B,2)),ee.setAttribute("color",new tt(L,3)),ee.setAttribute("blOrder",new tt(X,1)),ee.setAttribute("blPhase",new tt(k,1)),ee.setAttribute("blAnchor",new tt(J,3)),ee.setIndex(new tt(Z,1)),ee.computeBoundingSphere(),i.wood.geometry.dispose(),i.foliage.geometry.dispose(),{geometry:ee,atlas:{data:c,width:a,height:l},triangles:Z.length/3,heightM:n.heightM}}const lo=[1,1.9,3.1,4.4],wu=`
uniform vec4 uWind;          // xy = wave vector, z = sim time, w = amplitude
uniform float uTreeH;
uniform float uStiff;        // 1 = a supple birch, 0.3 = a heavy oak bole
attribute float blOrder;
attribute float blPhase;

vec3 blTreeWind(vec3 p, float order, float phase, vec2 originXZ) {
  // WARNING: uWind.w IS NOT A LENGTH. It is GROUNDCOVER_SWAY_AMP, whose own comment defines it as "how far a
  // blade TIP travels, as a FRACTION OF CLUMP HEIGHT" -- dimensionless, and that is how the grass shader reads
  // it. This function used it as a raw displacement, on geometry kitTrees.ts has normalised to UNIT HEIGHT
  // before the instance scale puts it back, so the amplitude was silently multiplied by each tree's own height
  // in metres. Measured at trees-finish c218 (scripts/_probe-tree-tiptravel.mts): leaves travelled 1.2-7.5 m in
  // CALM air and up to 16 m at full overcast, i.e. 18-29 % of a tree's own height, so a crown was simply not on
  // its tree. Both strong graders scored a frame 1 for "bare white skeletons with no foliage at all in a summer
  // frame", and the birch was the worst case because its 0.95 stiffness is the highest of the three.
  //
  // TREE_SWAY_MUL is the constant that already answers this -- "a tree tip's wind travel as a multiple of the
  // GRASS sway" -- and the LEGACY crowns in kit.ts have always read it. This path never did. Now both do, so one
  // number governs how far any tree moves, and the generated trees land in the same band as the shipped crowns
  // standing beside them rather than 2.2-3.5x further.
  float amp = uWind.w * BL_SWAY_MUL;
  if (amp < 1e-5) return vec3(0.0);
  vec2 dir = length(uWind.xy) > 1e-6 ? normalize(uWind.xy) : vec2(1.0, 0.0);
  // one phase for the whole tree, from where it stands: a forest ripples, it does not pulse
  float t = dot(originXZ, uWind.xy) + uWind.z;
  float gust = 0.62 + 0.38 * sin(t * 0.31 + phase * 0.11);

  // the trunk: a cantilever, quadratic in height
  float h = clamp(p.y / max(uTreeH, 0.001), 0.0, 1.0);
  float trunk = h * h * sin(t) * amp * uStiff;

  // the branch orders: further out swings more, later, on its own phase
  float g = ORDER_GAIN_LOOKUP;
  float branch = g * sin(t * 1.7 + phase) * amp * uStiff * 0.35 * h;

  return vec3(dir.x, 0.0, dir.y) * (trunk + branch) * gust;
}
`.replace("ORDER_GAIN_LOOKUP",`(blOrder < 0.5 ? ${lo[0].toFixed(2)} : blOrder < 1.5 ? ${lo[1].toFixed(2)} : blOrder < 2.5 ? ${lo[2].toFixed(2)} : ${lo[3].toFixed(2)})`).replace(/BL_SWAY_MUL/g,_.TREE_SWAY_MUL.toFixed(3)),yu=`
  #ifdef USE_INSTANCING
    vec2 blOriginXZ = instanceMatrix[3].xz;
  #else
    vec2 blOriginXZ = modelMatrix[3].xz;
  #endif
`,hl=typeof location<"u"&&new URLSearchParams(location.search).get("paintsrc")==="1",cR=new URLSearchParams(location.search).get("barkrelief")!=="0",ua=typeof location<"u"?new URLSearchParams(location.search).get("barkblack")??"":"";function Uf(n,e,t,i){const r=new Ci(new Uint8Array(e.data),e.size,e.size,tn);r.wrapS=r.wrapT=sr,r.colorSpace=kt,r.minFilter=qn,r.magFilter=$t,r.generateMipmaps=!0,r.needsUpdate=!0;const s=new Fn({map:r,fog:!1});hl&&(s.map=null,s.color.setRGB(1,0,0));const o=Fr(n),a={uTreeH:{value:i.heightM},uStiff:{value:i.stiffness??.6}};return s.userData.tree=a,s.onBeforeCompile=l=>{kr(l,o),l.uniforms.uWind=t.uWind,Object.assign(l.uniforms,a),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
${wu}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${yu}
  transformed += blTreeWind(transformed, blOrder, blPhase, blOriginXZ);`)},s.customProgramCacheKey=()=>`tree-bark-${i.heightM.toFixed(2)}`,s}function Ff(n,e,t,i){const r=new Ci(new Uint8Array(e.data),e.size,e.size,tn);r.colorSpace=kt,r.minFilter=qn,r.magFilter=$t,r.generateMipmaps=!0,r.needsUpdate=!0;const s=new Fn({map:r,vertexColors:!0,side:pn,alphaTest:.5,fog:!1});hl&&(s.vertexColors=!1,s.color.setRGB(0,0,1));const o=Fr(n),a={uTreeH:{value:i.heightM},uStiff:{value:i.stiffness??.6}};return s.userData.tree=a,s.onBeforeCompile=l=>{kr(l,o),l.uniforms.uWind=t.uWind,Object.assign(l.uniforms,a),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
${wu}
attribute vec3 blAnchor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
${yu}
  // the card swings with the branch it hangs on…
  transformed += blTreeWind(blAnchor, ${lo.length-1}.0, blPhase, blOriginXZ);
  // …and flutters about that anchor: fast, small, and only the part of the card away from the anchor moves,
  // so a leaf twists rather than translating.
  {
    float ft = dot(blOriginXZ, uWind.xy) + uWind.z * ${_.TREE_LEAF_FLUTTER_HZ.toFixed(2)} + blPhase * 3.1;
    vec3 arm = transformed - blAnchor;
    transformed += vec3(sin(ft), sin(ft * 1.31 + 0.7) * 0.45, cos(ft * 0.87)) * uWind.w * ${_.TREE_LEAF_FLUTTER.toFixed(3)} * length(arm);
  }`)},s.customProgramCacheKey=()=>`tree-foliage-${i.heightM.toFixed(2)}`,s}function hR(n,e,t,i){const r=new Uint8Array(e.data);if(ua==="1"||ua==="2"){const c=ua==="2"?e.width:e.width>>1;for(let h=0;h<e.height;h++)for(let u=0;u<c;u++){const d=(h*e.width+u)*4;r[d]=0,r[d+1]=0,r[d+2]=0}}const s=new Ci(r,e.width,e.height,tn);s.colorSpace=kt,s.wrapS=s.wrapT=Ji,s.minFilter=qn,s.magFilter=$t,s.generateMipmaps=!0,s.needsUpdate=!0;const o=new Fn({map:s,vertexColors:!0,side:pn,alphaTest:.5,fog:!1});o.alphaToCoverage=!0;const a=Fr(n),l={uTreeH:{value:i.heightM},uStiff:{value:i.stiffness??.6},uBarkRelief:{value:cR?_.BARK_RELIEF_GAIN:0},uAtlasTexel:{value:new st(1/e.width,1/e.height)}};return o.userData.tree=l,o.onBeforeCompile=c=>{kr(c,a),c.uniforms.uWind=t.uWind,Object.assign(c.uniforms,l);const h=c.fragmentShader;c.fragmentShader=c.fragmentShader.replace("#include <map_fragment>",`
      float blIsWood = 0.0;
      float blBarkH = 0.0;
      vec2 blBarkUv = vec2(0.0);
      {
        vec2 blUv = vMapUv;
        bool blWood = blUv.x < 0.0;
        blIsWood = blWood ? 1.0 : 0.0;
        if (blWood) blUv = vec2(fract(-blUv.x - 1.0) * 0.4980, fract(blUv.y));
        blBarkUv = blUv;
        vec4 blTex = texture2D(map, blUv);
        // The wood half carries its HEIGHT FIELD in alpha (bark is opaque, so alpha was free) — see
        // bark.ts. It must be forced back to 1 before <alphatest_fragment>, which runs next and would
        // otherwise cut away every texel whose fissure is deeper than the 0.5 alphaTest.
        blBarkH = blTex.a;
        if (blWood) blTex.a = 1.0;
        diffuseColor *= blTex;
      }`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform float uBarkRelief;
uniform vec2 uAtlasTexel;`),c.fragmentShader=c.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
      if (blIsWood > 0.5 && uBarkRelief > 0.0) {
        vec2 blT = uAtlasTexel;
        float hL = texture2D(map, blBarkUv - vec2(blT.x, 0.0)).a;
        float hR = texture2D(map, blBarkUv + vec2(blT.x, 0.0)).a;
        float hD = texture2D(map, blBarkUv - vec2(0.0, blT.y)).a;
        float hU = texture2D(map, blBarkUv + vec2(0.0, blT.y)).a;
        // world up, brought into view space — the trunk axis
        vec3 blUp = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
        vec3 blTan = cross(blUp, normal);
        float blLen = length(blTan);
        if (blLen > 0.001) {
          blTan /= blLen;                    // around the trunk (u)
          vec3 blBit = cross(normal, blTan); // along the trunk (v)
          normal = normalize(normal - uBarkRelief * ((hR - hL) * blTan + (hU - hD) * blBit));
        }
      }`),hl&&(c.fragmentShader=c.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor = vec4(mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 0.0, 0.0), blIsWood), 1.0);`)),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying float blDisV;`).replace("#include <dithering_fragment>",`gl_FragColor.a *= blDisV;
#include <dithering_fragment>`),c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
blDisV = blDis;`).replace("#include <common>",`#include <common>
${wu}
attribute vec3 blAnchor;
attribute float blDis;
varying float blDisV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
${yu}
  transformed += blTreeWind(blAnchor, blOrder, blPhase, blOriginXZ);
  if (blOrder > 2.5) {
    float ft = dot(blOriginXZ, uWind.xy) + uWind.z * ${_.TREE_LEAF_FLUTTER_HZ.toFixed(2)} + blPhase * 3.1;
    vec3 arm = transformed - blAnchor;
    transformed += vec3(sin(ft), sin(ft * 1.31 + 0.7) * 0.45, cos(ft * 0.87)) * uWind.w * ${_.TREE_LEAF_FLUTTER.toFixed(3)} * length(arm);
  }`);const u={mapReplaced:h!==c.fragmentShader,labelReplaced:hl?c.fragmentShader.includes("gl_FragColor = vec4(mix("):null,hasMapFragmentLeft:c.fragmentShader.includes("#include <map_fragment>"),barkBlack:ua,mapLine:(/diffuseColor \*= texture2D\(map[^;]*;/.exec(c.fragmentShader)??["(no diffuseColor *= texture2D(map ... ) line at all)"])[0],lambertOut:(/vec3 outgoingLight = [^;]*;/.exec(c.fragmentShader)??["(none)"])[0].slice(0,160)};o.userData.blShaderGuard=u;const d=globalThis;(d.__blShaderGuards??(d.__blShaderGuards=[])).push(u)},o.customProgramCacheKey=()=>`tree-kit-${i.heightM.toFixed(2)}`,o}function uR(n,e){const t=n*2-1,i=e*2-1,r=(t-i)*.5,s=(t+i)*.5,o=1-Math.abs(r)-Math.abs(s),a=Math.hypot(r,o,s)||1;return[r/a,Math.max(0,o)/a,s/a]}function Ru(n,e,t,i,r=4,s=128,o){const a=r*s;e.traverse(x=>{const D=x.geometry;D&&D.attributes.position&&!D.getAttribute("blDis")&&D.setAttribute("blDis",new tt(new Float32Array(D.attributes.position.count).fill(1),1))});const l=new wn(a,a,{minFilter:qn,magFilter:$t,format:tn,generateMipmaps:!0,depthBuffer:!0});l.texture.colorSpace=kt;const c=new uu;c.add(e);const h=new Sh((o==null?void 0:o.skyColor)??12374248,(o==null?void 0:o.groundColor)??4867638,(o==null?void 0:o.hemiIntensity)??2.1),u=new Lp((o==null?void 0:o.sunColor)??16773852,(o==null?void 0:o.sunIntensity)??1.35);u.position.set(.4,.8,.45),c.add(h,u);const d=Math.max(i,t*.5)*1.06,f=new Co(-d,d,d,-d,.01,d*8),M=new ue(0,t*.5,0),E=n.getRenderTarget(),m=n.getClearAlpha(),p=n.getPixelRatio(),g=n.getViewport(new et),S=n.getScissor(new et);n.setClearColor(0,0),n.setRenderTarget(l),n.setScissorTest(!0),n.clear(!0,!0,!0);for(let x=0;x<r;x++)for(let D=0;D<r;D++){const[y,R,N]=uR((D+.5)/r,(x+.5)/r);f.position.set(M.x+y*d*4,M.y+R*d*4,M.z+N*d*4),f.up.set(0,1,0),f.lookAt(M),f.updateProjectionMatrix(),n.setViewport(D*s/p,x*s/p,s/p,s/p),n.setScissor(D*s/p,x*s/p,s/p,s/p),n.render(c,f)}return n.setScissorTest(!1),n.setRenderTarget(E),n.setClearAlpha(m),n.setViewport(g),n.setScissor(S),c.remove(e),{texture:l.texture,grid:r,cell:s,heightM:t,halfWidthM:i,frustumHalfM:d,dispose:()=>l.dispose()}}const dR=typeof location<"u"&&new URLSearchParams(location.search).get("paintsrc")==="1";function s0(n,e=.4){return new Gt({uniforms:{uAtlas:{value:n.texture},uGrid:{value:n.grid},uFade:{value:1},uRing:{value:new et(0,0,1e6,1)}},defines:dR?{PAINT_SRC:1}:{},transparent:!1,alphaTest:e,alphaToCoverage:!0,side:pn,vertexShader:`
      varying vec2 vUv;
      varying vec3 vToCam;
      attribute float blDis;
      attribute float blPaint;   // S3 (D328): the far paint's cover weight at this tree's cell — the outer fade applies by it
      varying float blDisV;
      uniform vec4 uRing;
      void main() {
        vUv = uv;
        // the instance's world origin (column 3 of the instance matrix, when instanced)
        #ifdef USE_INSTANCING
          vec3 origin = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          vec3 local = (instanceMatrix * vec4(position, 1.0)).xyz - (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        #else
          vec3 origin = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          vec3 local = position;
        #endif
        vec3 toCam = cameraPosition - origin;
        vToCam = toCam;
        // trees-distance S3 (D328): the card fades OUT over the uRing.w metres of WALKER distance before the card reach uRing.z
        // (FAR − RECENTER: every tree a rebuild adds lies beyond it), through the same coverage weight as the crossfade, while
        // the far paint ramps to full over the same band. ?ringfade=0 is the hard edge that shipped before S3 (the probe's control).
        // ⚠ smoothstep(e, e, x) is NaN in GLSL (a divide by zero), and float32 cannot tell 1e9 − 1 from 1e9: a zero-width band or
        // a huge reach turned every card's coverage to NaN and drew NOTHING — the "hard edge" control arms of c262 read 0 for that
        // reason, not because the edge was clean (docs/lessons.md). A band ≤ 0 is a hard step; the no-fade arm uses a finite reach.
        float ringD = length(origin.xz - uRing.xy);
        float ringFade = uRing.w > 0.0 ? smoothstep(uRing.z - uRing.w, uRing.z, ringD) : step(uRing.z, ringD);
        blDisV = blDis * (1.0 - ringFade * blPaint);
        // yaw-only billboard: right = up × toCam, flattened
        vec3 f = normalize(vec3(toCam.x, 0.0, toCam.z));
        vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), f));
        vec3 world = origin + r * local.x + vec3(0.0, 1.0, 0.0) * local.y + f * local.z;
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uAtlas;
      uniform float uGrid;
      uniform float uFade;
      varying vec2 vUv;
      varying vec3 vToCam;
      varying float blDisV;
      void main() {
        vec3 d = normalize(vToCam);
        float l = abs(d.x) + abs(d.y) + abs(d.z);
        float x = d.x / l, z = d.z / l;
        vec2 oct = vec2((x + z + 1.0) * 0.5, (z - x + 1.0) * 0.5);
        vec2 cellIdx = floor(clamp(oct, 0.0, 0.9999) * uGrid);
        vec2 uv = (cellIdx + clamp(vUv, 0.001, 0.999)) / uGrid;
        vec4 c = texture2D(uAtlas, uv);
        if (c.a * uFade < 0.4) discard;
        #ifdef PAINT_SRC
          gl_FragColor = vec4(1.0, 0.0, 1.0, blDisV);
        #else
          gl_FragColor = vec4(c.rgb, blDisV);
        #endif
      }`})}function bu(n){var o;let e=1/0,t=-1/0,i=1/0,r=-1/0,s=-1/0;for(const a of n){const l=(o=a.getAttribute("position"))==null?void 0:o.array;if(l)for(let c=0;c<l.length;c+=3)l[c]<e&&(e=l[c]),l[c]>t&&(t=l[c]),l[c+2]<i&&(i=l[c+2]),l[c+2]>r&&(r=l[c+2]),l[c+1]>s&&(s=l[c+1])}return Number.isFinite(e)?{heightM:Math.max(.1,s),halfWidthM:Math.max(.05,(t-e+(r-i))/4)}:{heightM:1,halfWidthM:.5}}function o0(n,e){const t=new Ti(e*2,e*2);return t.translate(0,n*.5,0),t}function fR(n,e,t,i){const s=2*Math.atan(n/2/e)*180/Math.PI*(i/t),o=2**Math.ceil(Math.log2(Math.max(1,s)));return Math.min(512,Math.max(128,o))}const pR=800,mR=4;function gR(n,e,t,i,r,s){let o=0;const a=new Map;for(const l of n){const c=/^(tree\.[a-z.]+?)\.(\d+)$/.exec(l.id);if(!c||l.id.includes("-far"))continue;const h=Pr[c[1]];if(!h)continue;const u=il(h,i.fork(l.id).int(1<<28)),d=lR(u,h,"near"),f=hR(e,d.atlas,t,{heightM:1,stiffness:h.bark==="bands-white"?.95:h.bark==="ridges-deep"?.34:.6});if(r){const p=bu([d.geometry]),g=fR(p.heightM,_.TREE_NEAR_M,_.CAMERA_FOV,pR),S=new vt(d.geometry,f);a.set(c[1],{atlas:Ru(r,S,p.heightM,p.halfWidthM,s??mR,g,{sunColor:e.lights.sun.color,sunIntensity:e.lights.sun.intensity,skyColor:e.lights.hemi.color,groundColor:e.lights.hemi.groundColor,hemiIntensity:e.lights.hemi.intensity+e.lights.skylight.intensity*.5}),heightM:p.heightM,halfWidthM:p.halfWidthM})}const M=1/d.heightM;d.geometry.scale(M,M,M);const E=d.geometry.getAttribute("blAnchor");if(E){for(let p=0;p<E.array.length;p++)E.array[p]*=M;E.needsUpdate=!0}d.geometry.computeBoundingSphere(),l.geometry.dispose();const m=ys({id:l.id,kind:l.kind,geometry:d.geometry,sizeMul:l.sizeMul,poly:l.poly,far:l.far,material:f});Object.assign(l,m),o++}if(r){for(const l of n){const c=/^(tree\.[a-z.]+?)-far\.(\d+)$/.exec(l.id);if(!c)continue;const h=a.get(c[1]);if(!h)continue;const u=o0(h.heightM,h.atlas.frustumHalfM),d=1/h.heightM;u.scale(d,d,d),l.geometry.dispose(),Object.assign(l,ys({id:l.id,kind:l.kind,geometry:u,sizeMul:l.sizeMul,poly:l.poly,far:l.far,material:s0(h.atlas)})),o++}a.clear()}return o}const Wn=_.DRESSING_CELL_M,Vi=_.DRESSING_ANCHOR_M;class _R{constructor(){rt(this,"a",2166136261);rt(this,"b",16777619)}push(e){const t=e|0;this.a=Math.imul(this.a^t&65535,16777619)>>>0,this.b=Math.imul(this.b^t>>>16,2246822507)>>>0}hex(){return`v1:${(this.a>>>0).toString(16).padStart(8,"0")}${(this.b>>>0).toString(16).padStart(8,"0")}`}}function MR(n,e,t,i,r){const s=Qy(e,t),o=qy(Si(n.seed).fork("dressing.kit"));Rt.proceduralTrees&&gR(o,e,t??{uWind:{value:new et(0,0,0,0)}},Si(n.seed).fork("trees.gen"),i,r);const a=Zy(e),l=_.DRESSING_MAX_PER_ENTRY,c=o.map(H=>{const $=new uo(H.geometry,H.material??(H.kind==="contact"?a:s),l);return H.geometry.setAttribute("blDis",new Ei(new Float32Array(l).fill(1),1)),H.geometry.setAttribute("blPaint",new Ei(new Float32Array(l).fill(1),1)),$.name=`dressing:${H.id}`,$.instanceMatrix.setUsage(Er),$.count=0,$.renderOrder=H.kind==="contact"?1:0,(Rt.dressing||Rt.dressingTrees&&(H.kind==="tree"||H.kind==="shrub"||H.kind==="contact"))&&n.scene.add($),$}),h={query:n.world.query,cover:n.world.cover,kit:o,cobbles:o.map((H,$)=>H.kind==="cobble"&&!H.far?$:-1).filter(H=>H>=0),cobblesFar:o.map((H,$)=>H.kind==="cobble"&&H.far?$:-1).filter(H=>H>=0),rocks:o.map((H,$)=>H.kind==="rock"&&!H.poly&&!H.far?$:-1).filter(H=>H>=0),rocksFar:o.map((H,$)=>H.kind==="rock"&&H.far?$:-1).filter(H=>H>=0),big:o.map((H,$)=>H.kind==="rock"&&H.poly?$:-1).filter(H=>H>=0),contacts:o.map((H,$)=>H.kind==="contact"?$:-1).filter(H=>H>=0),trees:o.map((H,$)=>H.kind==="tree"&&H.poly?$:-1).filter(H=>H>=0),treesFar:o.map((H,$)=>H.kind==="tree"&&!H.poly?$:-1).filter(H=>H>=0),farOf:Int32Array.from(o.map(H=>H.kind==="tree"&&H.poly?o.findIndex($=>$.id===H.id.replace(/\.(\d+)$/,"-far.$1")):-1)),shrubs:o.map((H,$)=>H.kind==="shrub"?$:-1).filter(H=>H>=0),rockRng:Si(n.seed).fork("dressing.rock"),plantRng:Si(n.seed).fork("dressing.plant"),koppenAt:(H,$)=>{var re;return((re=n.world.factors)==null?void 0:re.at(H,$).koppen)??null},wetAt:(H,$)=>Fm(n.world.query,H,$)},u=Math.ceil(_.DRESSING_FAR_M/Wn),d=2*u+1,f=new Int16Array(d*d),M=new Float32Array(d*d),E=new Uint16Array(d*d),m=new Uint16Array(d*d);let p=0,g=0,S=0,x=0,D=null,y=[],R=NaN,N=NaN,b=0,v=0;const w={place:0,write:0,sort:0},O={near:0,far:0,band:0},C=(H,$)=>{const re=_.TREE_FADE_BAND_M*.5;if(re<=0)return H<$?0:1;const oe=Math.min(1,Math.max(0,(H-($-re))/(2*re)));return oe*oe*(3-2*oe)},W=(H,$)=>{const re=c[H],oe=re.geometry.getAttribute("blDis"),de=re.geometry.getAttribute("blPaint");for(let Me=0;Me<$.length;Me++)re.setMatrixAt(Me,$[Me].m),re.setColorAt(Me,J.setRGB($[Me].tint,$[Me].tint,$[Me].tint)),oe.setX(Me,$[Me].fade),de.setX(Me,$[Me].paint??1);oe.needsUpdate=!0,de.needsUpdate=!0,re.count=$.length,re.instanceMatrix.needsUpdate=!0,re.instanceColor&&(re.instanceColor.needsUpdate=!0),re.computeBoundingSphere()};function B(H,$){R=H,N=$;const re=new Map;O.near=0,O.far=0,O.band=0;for(const oe of y){const de=Math.hypot(oe.m.elements[12]-H,oe.m.elements[14]-$),Me=C(de,oe.switchM);Me<1&&(re.get(oe.entry)??re.set(oe.entry,[]).get(oe.entry)).push(Me>0?{...oe,fade:oe.fade*(1-Me)}:oe),Me>0&&(re.get(oe.farEntry)??re.set(oe.farEntry,[]).get(oe.farEntry)).push(Me<1?{...oe,entry:oe.farEntry,fade:oe.fade*Me}:{...oe,entry:oe.farEntry}),Me<=0?O.near++:Me>=1?O.far++:O.band++}for(const oe of h.trees)W(oe,(re.get(oe)??[]).slice(0,l));for(const oe of h.treesFar)W(oe,(re.get(oe)??[]).slice(0,l))}let L="v1:0000000000000000";const X=new Map;let k=!0;const J=new We,Z=H=>H===10?1:H===20?_.CANOPY_SHRUB_W:H===95?_.CANOPY_MANGROVE_W:0,ee=_.CANOPY_COVER_LO+_.CANOPY_EDGE_SHIFT*.5,me=_.CANOPY_COVER_HI+_.CANOPY_EDGE_SHIFT*.5;function K(H,$){let re=.34*Z(f[$*d+H]);for(let de=-1;de<=1;de++)for(let Me=-1;Me<=1;Me++){if(!Me&&!de)continue;const V=H+Me,Ae=$+de;V>=0&&Ae>=0&&V<d&&Ae<d&&(re+=.0825*Z(f[Ae*d+V]))}const oe=Math.min(1,Math.max(0,(re-ee)/(me-ee)));return oe*oe*(3-2*oe)}function j(H,$){const re=_.CANOPY_INTERIOR_CELLS;for(let oe=-re;oe<=re;oe++)for(let de=-re;de<=re;de++){const Me=H+de,V=$+oe;if(Me<0||V<0||Me>=d||V>=d||Z(f[V*d+Me])<1)return 0}return K(H,$)}function Q(H,$){const re=performance.now();S=H,x=$,p=Math.floor(H/Wn)-u,g=Math.floor($/Wn)-u;const oe={...h,ax:S,az:x},de=o.map(()=>[]),Me=[],V=[],Ae=new _R;X.clear(),f.fill(0),E.fill(0),m.fill(0),M.fill(-2);for(let se=0;se<d;se++)for(let fe=0;fe<d;fe++){const G=p+fe,P=g+se;if(Math.hypot(G*Wn+Wn*.5-H,P*Wn+Wn*.5-$)>_.DRESSING_FAR_M)continue;Me.length=0;const ne=$m(oe,G,P,Me),pe=se*d+fe;f[pe]=ne.cls,M[pe]=ne.slopeDeg,m[pe]=ne.plants,E[pe]=ne.rocks+ne.plants;for(const ae of Me){const Ee=o[ae.entry].kind;if(!Rt.dressing&&Ee!=="tree"&&Ee!=="shrub"&&!(Ee==="contact"&&ae.contactOf==="tree"&&Rt.dressingTrees))continue;const Ue=de[ae.entry];if(!(Ue.length>=l)){ae.cell=pe,Ue.push(ae),ae.farEntry!==void 0&&V.push(ae),ae.species&&X.set(ae.species,(X.get(ae.species)??0)+1),Ae.push(ae.entry),Ae.push(G),Ae.push(P);for(let Pe=0;Pe<16;Pe++)Ae.push(Math.round(ae.m.elements[Pe]*1e3))}}}L=Ae.hex();for(const se of V)se.cell!==void 0&&(se.paint=j(se.cell%d,Math.floor(se.cell/d)));const ve=performance.now(),Ie=new Set([...h.trees,...h.treesFar]);for(let se=0;se<o.length;se++)Ie.has(se)||W(se,de[se]);const be=performance.now();y=V,B(H,$);const Ne=performance.now();w.place=ve-re,w.write=be-ve,w.sort=Ne-be,b=Ne-re,v++}return{update(H){if(!Rt.dressing&&!Rt.dressingTrees)return;const $=H.player,re=Math.floor($.x/Vi),oe=Math.floor($.z/Vi),de=_.DRESSING_ANCHOR_MARGIN_M;if(!(!D||Math.hypot($.x-S,$.z-x)>_.DRESSING_RECENTER_M||$.x<D.i*Vi-de||$.x>(D.i+1)*Vi+de||$.z<D.j*Vi-de||$.z>(D.j+1)*Vi+de)){y.length&&Math.hypot($.x-R,$.z-N)>=_.TREE_RESORT_STEP_M&&B($.x,$.z);return}D={i:re,j:oe},Q($.x,$.z)},resortAt:(H,$)=>B(H,$),setRing:(H,$,re,oe)=>{var de;for(const Me of h.treesFar){const V=(de=c[Me].material.uniforms)==null?void 0:de.uRing;V&&V.value.set(H,$,re,oe)}},rebuildAt:(H,$)=>{D={i:Math.floor(H/Vi),j:Math.floor($/Vi)},Q(H,$)},tierStats:()=>({...O,trees:y.length,bandM:_.TREE_FADE_BAND_M,refM:_.TREE_SWITCH_REF_M,nearM:_.TREE_NEAR_M,recenterM:_.DRESSING_RECENTER_M,lastRebuildMs:b,rebuilds:v,rebuildPhases:{...w}}),setSnow(H){const $=s.userData.snow;$&&($.uSnowR.value.x=H)},snow:()=>{var H;return((H=s.userData.snow)==null?void 0:H.uSnowR.value.x)??0},material:()=>s,anchor:()=>({x:S,z:x}),fadeStats:()=>{let H=0,$=0,re=0;for(const oe of c){const de=oe.geometry.getAttribute("blDis");if(de)for(let Me=0;Me<oe.count;Me++){const V=de.getX(Me);H++,V>.001&&V<.999?$++:V>=.999&&re++}}return{drawn:H,mid:$,solid:re,alphaToCoverage:s.alphaToCoverage===!0}},invalidate(){D=null},speciesCensus(){const H={};for(const[$,re]of X)H[$]=re;return H},census(H){const $={};let re=0,oe=-1;for(let de=0;de<d;de++)for(let Me=0;Me<d;Me++){const V=de*d+Me;if(M[V]<-1.5||Math.hypot((p+Me)*Wn+Wn*.5-S,(g+de)*Wn+Wn*.5-x)>H)continue;const Ae=String(f[V]),ve=$[Ae]??($[Ae]={cells:0,withInstance:0,fraction:0,densityPerCell:0});ve.cells++,E[V]>0&&ve.withInstance++,m[V]>0&&M[V]>oe&&(oe=M[V]),ve.densityPerCell+=E[V],re+=E[V]}for(const de of Object.values($))de.fraction=de.cells?de.withInstance/de.cells:0,de.densityPerCell=de.cells?de.densityPerCell/de.cells:0;return{byClass:$,instances:re,digest:L,maxSlopeWithInstanceDeg:oe<0?0:oe}},setVisible(H){k=H;for(const $ of c)$.visible=H},visible:()=>k,inventory:()=>o.map((H,$)=>({id:H.id,tris:H.geometry.attributes.position.count/3,instances:c[$].count})),placeCtx:(H,$)=>({...h,ax:H,az:$}),kit:()=>o,dispose(){for(const H of c)n.scene.remove(H),H.dispose();for(const H of o)H.geometry.dispose();s.dispose(),a.dispose()}}}const Dn=_.DRESSING_CELL_M,Wi=_.DRESSING_COLLIDER_CELLS,kf=new _t,Xt=new et;function ER(n,e,t){if(e.kind==="contact"||e.kind==="shrub")return null;const i=n.m.elements,r=Math.hypot(i[4],i[5],i[6]),s=e.height*r;if(s<_.WALKER_STEP_UP_M)return null;const o=i[12],a=i[14],l=i[13]+(e.baseY+e.height)*r,c=l-t.heightAt(o,a);if(c<_.WALKER_STEP_UP_M)return null;if(e.planes.length===0)return{x:o,z:a,r:s*_.TREE_TRUNK_RADIUS_FRAC,planes:vR,topY:l,proudM:c};kf.copy(n.m).invert();const h=kf.elements,u=e.planes,d=new Float32Array(u.length);for(let f=0;f<u.length;f+=4){Xt.set(u[f],u[f+1],u[f+2],-u[f+3]);const M=h[0]*Xt.x+h[1]*Xt.y+h[2]*Xt.z+h[3]*Xt.w,E=h[4]*Xt.x+h[5]*Xt.y+h[6]*Xt.z+h[7]*Xt.w,m=h[8]*Xt.x+h[9]*Xt.y+h[10]*Xt.z+h[11]*Xt.w,p=h[12]*Xt.x+h[13]*Xt.y+h[14]*Xt.z+h[15]*Xt.w,g=Math.hypot(M,E,m)||1;d[f]=M/g,d[f+1]=E/g,d[f+2]=m/g,d[f+3]=-p/g}return{x:o,z:a,r:e.boundR*r*(1+_.DRESSING_STRETCH*.5),planes:d,topY:l,proudM:c}}const vR=new Float32Array(0),ti={x:0,z:0};function da(n,e,t,i){const r=n.planes;if(r.length===0){const h=e-n.x,u=i-n.z,d=Math.hypot(h,u)||1;return ti.x=h/d,ti.z=u/d,d-n.r}let s=-1/0,o=0;for(let h=0;h<r.length;h+=4){const u=r[h]*e+r[h+1]*t+r[h+2]*i-r[h+3];u>s&&(s=u,o=h)}const a=r[o],l=r[o+2],c=Math.hypot(a,l);if(c<.15){const h=e-n.x,u=i-n.z,d=Math.hypot(h,u)||1;ti.x=h/d,ti.z=u/d}else ti.x=a/c,ti.z=l/c;return s}function xR(n){const e=n.kit(),t=new Map,i=[],r={x:0,z:0,hit:!1};let s=0,o=0,a=0,l=0,c=0,h=!0;const u=[];function d(f,M){if(!Rt.dressing&&!Rt.dressingTrees)return u;const E=`${f},${M}`,m=t.get(E);if(m)return m;const p=performance.now(),g=n.placeCtx(f*Dn+Dn*.5,M*Dn+Dn*.5);i.length=0,$m(g,f,M,i);const S=[];for(const x of i){const D=e[x.entry].kind;if(!Rt.dressing&&D!=="tree"&&D!=="shrub")continue;const y=ER(x,e[x.entry],g.query);y&&S.push(y)}return t.size>=_.DRESSING_COLLIDER_CACHE_CELLS&&(t.clear(),c=0),t.set(E,S),c+=S.length,s++,o+=performance.now()-p,S}return{resolve(f,M,E,m,p){const g=performance.now();if(r.x=E,r.z=m,r.hit=!1,!h)return r;const S=Math.floor(f/Dn),x=Math.floor(M/Dn),D=p+_.WALKER_STEP_UP_M,y=_.WALKER_RADIUS_M,R=p+_.WALKER_STEP_UP_M+.05;for(let N=0;N<_.WALKER_OBSTACLE_ITERS;N++)for(let b=-Wi;b<=Wi;b++)for(let v=-Wi;v<=Wi;v++){const w=d(S+v,x+b);for(let O=0;O<w.length;O++){const C=w[O];if(C.topY<=D||Math.hypot(r.x-C.x,r.z-C.z)>C.r+y)continue;const W=Math.min(C.topY-.02,p+_.WALKER_CHEST_M);let B=da(C,r.x,R,r.z),L=ti.x,X=ti.z;if(W>R){const Z=da(C,r.x,W,r.z);Z<B&&(B=Z,L=ti.x,X=ti.z)}if(B>=y)continue;let k=da(C,f,R,M);W>R&&(k=Math.min(k,da(C,f,W,M)));const J=Math.min(y,k);B>=J||(r.x+=L*(J-B),r.z+=X*(J-B),r.hit=!0)}}return a++,l+=performance.now()-g,r},near(f,M,E){const m=[],p=Math.floor((f-E)/Dn),g=Math.floor((f+E)/Dn),S=Math.floor((M-E)/Dn),x=Math.floor((M+E)/Dn);for(let D=S;D<=x;D++)for(let y=p;y<=g;y++)for(const R of d(y,D))Math.hypot(R.x-f,R.z-M)<=E&&m.push(R);return m},supportYAt(f,M){const E=Math.floor(f/Dn),m=Math.floor(M/Dn);let p=null;for(let g=-Wi;g<=Wi;g++)for(let S=-Wi;S<=Wi;S++)for(const x of d(E+S,m+g)){if(Math.hypot(f-x.x,M-x.z)>x.r)continue;let D=1/0,y=-1/0;if(x.planes.length===0)D=x.topY,y=-1/0;else for(let R=0;R<x.planes.length;R+=4){const N=x.planes[R],b=x.planes[R+1],v=x.planes[R+2],O=x.planes[R+3]-N*f-v*M;if(b>1e-4)D=Math.min(D,O/b);else if(b<-1e-4)y=Math.max(y,O/b);else if(O<0){D=-1/0;break}}D>y&&D>(p??-1/0)&&(p=D)}return p},setEnabled:f=>{h=f},enabled:()=>h,invalidate(){t.clear(),c=0},stats:()=>({cells:t.size,obstacles:c,cellBuilds:s,buildMs:o,resolves:a,resolveMs:l})}}const a0=[{class:Or,id:"unknown",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"outside the recorded crop — no data is not a penalty; walk as if on the baseline"},{class:10,id:"tree",speedFactor:_.SURFACE_TREE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_TREE_DRAIN_MULT,note:"dense canopy and undergrowth: you push through, and there is no line of sight to sprint down"},{class:20,id:"shrub",speedFactor:_.SURFACE_SHRUB_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_SHRUB_DRAIN_MULT,note:"shrub / heather: knee-high drag on every stride, but still runnable"},{class:30,id:"grass",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"the baseline — open grass is what WALK_SPEED and criterion 6 are measured on"},{class:40,id:"crop",speedFactor:_.SURFACE_CROP_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_CROP_DRAIN_MULT,note:"standing crop: mild drag, never an obstacle"},{class:50,id:"built",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"built-up ground is hard and flat — baseline; buildings are not modelled, so nothing to slow you"},{class:60,id:"bare",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"bare rock / scree: baseline — the slope class already prices what makes it hard"},{class:70,id:"snow",speedFactor:_.SURFACE_SNOW_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_SNOW_DRAIN_MULT,note:"snow and ice: postholing costs you, and there is no footing to sprint on"},{class:80,id:"water",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"open water — the WATER MASK owns the slow-down (wade factors from waterDepthAt); 1.0 here or wading double-counts"},{class:90,id:"wetland",speedFactor:_.SURFACE_BOG_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_BOG_DRAIN_MULT,note:"bog: the slowest walkable ground and the hardest drain — a mask body AND a surface, per criterion 3"},{class:95,id:"mangrove",speedFactor:_.SURFACE_BASELINE_SPEED_FACTOR,blocksSprint:!0,staminaDrainMult:_.SURFACE_BASELINE_DRAIN_MULT,note:"mangrove is a water class — the WATER MASK owns the slow-down; 1.0 here or wading double-counts"},{class:100,id:"moss",speedFactor:_.SURFACE_MOSS_SPEED_FACTOR,blocksSprint:!1,staminaDrainMult:_.SURFACE_MOSS_DRAIN_MULT,note:"moss / lichen over saturated ground: soft underfoot, between grass and heather"}],SR=a0[0],AR=new Map(a0.map(n=>[n.class,n]));function wR(n){return AR.get(n)??SR}const yR=n=>Math.max(-1.45,Math.min(_.PITCH_LIMIT_RAD,n));function Tu(n,e){n.y=n.groundY=e.heightAt(n.x,n.z),n.slopeDeg=e.slopeDegAt(n.x,n.z),n.waterDepth=e.waterDepthAt(n.x,n.z)}function RR(n,e,t,i){const r={x:n,y:0,z:e,yaw:t,pitch:0,speedMps:0,mode:"idle",groundY:0,slopeDeg:0,waterDepth:0};return Tu(r,i),r}function Kh(n,e,t,i){n.x=e,n.z=t,n.speedMps=0,n.mode="idle",Tu(n,i)}function bR(n,e,t,i,r,s){n.yaw=e.yaw,n.pitch=yR(e.pitch);const o=Math.sin(e.yaw),a=Math.cos(e.yaw);let l=e.fwd*o+e.strafe*a,c=-e.fwd*a+e.strafe*o;const h=Math.hypot(l,c);if(h===0){n.mode="idle",n.speedMps=0;return}l/=h,c/=h;const u=n.x+l*_.WALKER_PROBE_AHEAD_M,d=n.z+c*_.WALKER_PROBE_AHEAD_M,f=i.slopeDegAt(u,d),M=i.waterDepthAt(u,d);if(f>=_.SLOPE_SCRAMBLE_MAX_DEG||M>_.WADE_MAX_DEPTH_M){n.mode="blocked",n.speedMps=0;return}let E=f<=_.SLOPE_WALK_MAX_DEG?"walk":"scramble",m=E==="walk"?e.sprint?_.SPRINT_SPEED:_.WALK_SPEED:_.SCRAMBLE_SPEED;r&&(m*=wR(r.classAt(u,d)).speedFactor),M>_.WADE_SLOW_DEPTH_M?(m*=_.WADE_SPEED_FACTOR,E="wade"):M>0&&(m*=_.WATER_SHALLOW_SPEED_FACTOR);const p=n.x,g=n.z;let S=p+l*m*t,x=g+c*m*t;if(s){const D=s.resolve(p,g,S,x,n.groundY);S=D.x,x=D.z}n.x=S,n.z=x,Tu(n,i),n.mode=E,n.speedMps=Math.hypot(n.x-p,n.z-g)/t}const wc=Math.PI*2,TR=n=>(n%wc+wc)%wc;function tr(n){const e=n.player;n.camera.position.set(e.x,e.y+_.EYE_HEIGHT_M,e.z),n.camera.rotation.set(e.pitch,-e.yaw,0,"YXZ")}function CR(n,e){const t=()=>{document.pointerLockElement===e||navigator.webdriver||!document.hasFocus()||Promise.resolve(e.requestPointerLock()).catch(()=>{})},i=s=>{if(!r.enabled||document.pointerLockElement!==e)return;const o=_.MOUSE_SENSITIVITY_RAD_PER_PX,a=n.input.current;a.yaw=TR(a.yaw+s.movementX*o),a.pitch=Math.max(-1.45,Math.min(_.PITCH_LIMIT_RAD,a.pitch-s.movementY*o))};e.addEventListener("click",t),document.addEventListener("mousemove",i);const r={enabled:!0,locked:()=>document.pointerLockElement===e,dispose:()=>{e.removeEventListener("click",t),document.removeEventListener("mousemove",i)}};return r}const l0={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"]},c0=["ShiftLeft","ShiftRight"],DR=new Set([...Object.values(l0).flat(),...c0]),NR=n=>n instanceof HTMLElement&&(n.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName));function IR(n){const e=new Set;let t=!1;const i=()=>{e.clear(),n.input.current.fwd=0,n.input.current.strafe=0},r=l=>{if(DR.has(l.code)){if(l.type==="keyup"){e.delete(l.code);return}if(!NR(l.target)&&(l.preventDefault(),!l.repeat)){if(c0.includes(l.code)){a.enabled&&(t=!t);return}e.add(l.code)}}},s=()=>{document.hidden&&i()};window.addEventListener("keydown",r),window.addEventListener("keyup",r),window.addEventListener("blur",i),document.addEventListener("visibilitychange",s);const o=l=>l0[l].some(c=>e.has(c))?1:0,a={enabled:!0,sample:l=>{l.input.current.fwd=a.enabled?o("forward")-o("back"):0,l.input.current.strafe=a.enabled?o("right")-o("left"):0,l.input.current.sprint=a.enabled&&t},dispose:()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",r),window.removeEventListener("blur",i),document.removeEventListener("visibilitychange",s)}};return a}function Xe(n,e,t){const i=document.createElement(n);return i.className=e,t==null||t.appendChild(i),i}const OR=`
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
`;function PR(n){if(n.ui.root)return n.ui.root;const e=document.createElement("style");e.textContent=OR,document.head.appendChild(e);const t=Xe("div","hud-root",document.body);return t.id="hud-root",n.ui.root=t,t}const $n=(n,e)=>{const t=document.createElement("div"),i=document.createElement("span");i.textContent=e,i.style.cssText="display:inline-block;width:8.5rem;color:#7f8a82";const r=document.createElement("span");return t.append(i,r),n.appendChild(t),r};function LR(n,e){if(!["localhost","127.0.0.1","::1",""].includes(location.hostname)||new URLSearchParams(location.search).get("diag")!=="1")return{update:()=>{},bindGps:()=>{}};let i=null;const r=document.createElement("div");r.id="size-diag",r.style.cssText="position:fixed;top:0;right:0;z-index:99999;pointer-events:none;padding:.5rem .7rem;background:rgba(8,10,9,.86);color:#cfd6d0;font:11px/1.5 ui-monospace,Consolas,monospace;white-space:pre;border-bottom-left-radius:.4rem;border:1px solid rgba(160,175,165,.25)",document.body.appendChild(r);const s=$n(r,"window·dpr"),o=$n(r,"canvas css"),a=$n(r,"buffer"),l=$n(r,"buffer WANT"),c=$n(r,"aspect fld/want"),h=$n(r,"fov field"),u=$n(r,"fov MATRIX"),d=$n(r,"GL viewport"),f=$n(r,"near/far"),M=$n(r,"yaw/pitch°"),E=$n(r,"gps visible"),m=(x,D)=>{x.style.color=D?"#e0705a":"#8fbf8a"},p=x=>x.toFixed(2),g={update(){const x=n.domElement,D=x.getBoundingClientRect(),y=window.devicePixelRatio,R=Math.round(D.width*y),N=Math.round(D.height*y),b=window.innerWidth/window.innerHeight;s.textContent=`${window.innerWidth}x${window.innerHeight} @${y}`,o.textContent=`${Math.round(D.width)}x${Math.round(D.height)} at (${Math.round(D.left)},${Math.round(D.top)})`,a.textContent=`${x.width}x${x.height}`,l.textContent=`${R}x${N}`,m(a,Math.abs(x.width-R)>2||Math.abs(x.height-N)>2),c.textContent=`${e.aspect.toFixed(4)} / ${b.toFixed(4)}`,m(c,Math.abs(e.aspect-b)>.002);const v=e.projectionMatrix.elements,w=2*Math.atan(1/v[5])*180/Math.PI,O=2*Math.atan(1/v[0])*180/Math.PI,C=2*Math.atan(Math.tan(e.fov*Math.PI/360)*e.aspect)*180/Math.PI;h.textContent=`v ${p(e.fov)}  h ${p(C)}`,u.textContent=`v ${p(w)}  h ${p(O)}`,m(u,Math.abs(w-e.fov)>.1||Math.abs(O-C)>.1);const W=n.getContext(),B=W.getParameter(W.VIEWPORT);B&&(d.textContent=`${B[0]},${B[1]} ${B[2]}x${B[3]}`,m(d,B[0]!==0||B[1]!==0||Math.abs(B[2]-x.width)>2||Math.abs(B[3]-x.height)>2)),f.textContent=`${e.near} / ${e.far}`;const L=e.rotation;M.textContent=`${p(L.y*180/Math.PI)} / ${p(L.x*180/Math.PI)}`,E.textContent=i?String(i()):"not built yet",m(E,!i||!i())},bindGps(x){i=x}};g.update();const S=()=>{g.update(),requestAnimationFrame(S)};return requestAnimationFrame(S),g}function bo(n,e){const t=e==="lat"?n<0?"S":"N":n<0?"W":"E",i=Math.abs(n);let r=Math.floor(i),s=Math.round((i-r)*60*1e3);return s>=6e4&&(s-=6e4,r+=1),{deg:r,min:s/1e3,hemi:t}}function Bf(n){const e=bo(n,"lat");return`${String(e.deg).padStart(2,"0")}°${h0(e.min)}′ ${e.hemi}`}function Gf(n){const e=((n+180)%360+360)%360-180,t=bo(e,"lon");return`${String(t.deg).padStart(3,"0")}°${h0(t.min)}′ ${t.hemi}`}function h0(n){const[e,t=""]=n.toFixed(3).split(".");return`${e.padStart(2,"0")}.${t}`}function zf(n,e,t){const i=bo(n,e),r=Math.round(i.min);return t?`${i.deg}°${String(r).padStart(2,"0")}′ ${i.hemi}`:`${String(r).padStart(2,"0")}′`}const UR=3816509,FR=8286804,kR=16777215,vn={fascia:"#141618",fasciaLo:"#0d0f11",wall:"#0a0b0c",key:"#43464a",keyLo:"#34373b",keyEdge:"#4f5358",label:"#e7e9ea",labelDim:"#b9bcbe"},St={core:"#ccd5ae",gold:"#bcc7a2",silver:"#b3bf97",bronze:"#a4b286",rough:"#9e9d88",roughRule:"rgba(110,108,86,0.55)",edge:"rgba(78,94,58,0.80)",tick:"rgba(96,112,74,0.45)",tickInk:"rgba(62,76,44,0.90)",route:"#c0389c",routeHalo:"rgba(255,255,255,0.72)",track:"rgba(56,64,48,0.75)",mark:"#2d3428",me:"#2f6fc9",meEdge:"#ffffff",badge:"rgba(248,249,243,0.86)",badgeInk:"#2d3428"},fa={bg:"#b3b8a8",rule:"#7d836f",label:"#39402f",value:"#12160f"},mi=[_.MEDAL_PLATINUM_M,_.MEDAL_GOLD_M,_.MEDAL_SILVER_M,_.MEDAL_BRONZE_M],BR=180/Math.PI;function GR(n){const e=Math.round(Math.abs(n));return e===0?"0 m":`${e} m ${n>0?"R":"L"}`}function zR(n){return n>=1e3?`${(n/1e3).toFixed(1)} km`:`${Math.round(n)} m`}function HR(n){const e=Math.max(0,Math.floor(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function VR(n){const e=n*BR%360;return e<0?e+360:e}function Ba(n,e,t,i){const r=[],s=[[n-t,-(e-t),-Math.PI/2],[n-t,e-t,0],[-(n-t),e-t,Math.PI/2],[-(n-t),-(e-t),Math.PI]];for(const[o,a,l]of s)for(let c=0;c<=i;c++){const h=l+Math.PI/2*(c/i);r.push({x:o+Math.cos(h)*t,y:a+Math.sin(h)*t,nx:Math.cos(h),ny:Math.sin(h)})}return r}function WR(n,e,t,i){const r=1-i,s=l=>{const c=(l-.15)/.95;return 1-r*Math.max(0,1-c*c)},o=Ba(n,e,t,3),a=[];for(let l=0;l<o.length;l++)a.push(o[l]),l===3&&a.push({x:n,y:0,nx:1,ny:0}),l===11&&a.push({x:-n,y:0,nx:-1,ny:0});return a.map(l=>({...l,x:l.x*s(l.y/e)}))}function or(n,e,t,i){n.push(e.x,e.y,e.z,t.x,t.y,t.z,i.x,i.y,i.z)}function yc(n,e,t){return n.map(i=>new ue(i.x*e,i.y*e,t))}function hs(n,e,t){for(let i=0;i<e.length;i++){const r=(i+1)%e.length;or(n,e[i],t[i],t[r]),or(n,e[i],t[r],e[r])}}function Hf(n,e,t,i){const r=new ue(0,0,t);for(let s=0;s<e.length;s++){const o=(s+1)%e.length;i?or(n,r,e[o],e[s]):or(n,r,e[s],e[o])}}function pa(n,e,t,i,r,s,o,a,l){const c=(f,M,E)=>new ue(f,M,E),h=[c(e+a,i+a,o),c(t-a,i+a,o),c(t-a,r-a,o),c(e+a,r-a,o)],u=[c(e,i,s),c(t,i,s),c(t,r,s),c(e,r,s)],d=(f,M,E,m,p)=>{if(or(n,f,M,E),or(n,f,E,m),l)for(const g of[f,M,E,f,E,m])l(g,p)};d(h[0],h[1],h[2],h[3],"top"),d(u[0],u[1],h[1],h[0],"edge"),d(u[1],u[2],h[2],h[1],"edge"),d(u[2],u[3],h[3],h[2],"edge"),d(u[3],u[0],h[0],h[3],"edge")}const Vf=[{x:-.527,y:-.381,w:.137,h:.0345,label:"IN"},{x:.542,y:-.381,w:.137,h:.0345,label:"OUT"},{x:-.563,y:-.525,w:.153,h:.0518,label:"FIND"},{x:-.551,y:-.676,w:.153,h:.0518,label:"MARK"},{x:.557,y:-.525,w:.153,h:.0518,label:"PAGE"},{x:.542,y:-.676,w:.153,h:.0518,label:"MENU"},{x:-.227,y:-.813,w:.183,h:.0446,label:"QUIT"},{x:.221,y:-.813,w:.183,h:.0446,label:"ENTER"},{x:.014,y:-.554,w:.298,h:.144,label:"",rocker:!0}],xn={screenFrac:.657,screenCY:.259,fasciaHW:.81,fasciaTop:.849,fasciaBot:-.281};function $R(n){const e=_.GPS_SCREEN_PX,t=_.GPS_ROWS_PX,i=document.createElement("canvas");i.width=e,i.height=e+t;const r=i.getContext("2d"),s=new xh(i);s.colorSpace=kt,s.generateMipmaps=!1,s.minFilter=$t;const o=(e+t)/e,a=_.GPS_DEVICE_W,l=a,c=a*o,h=a/(2*xn.screenFrac),u=h*_.GPS_BODY_ASPECT,d=a*_.GPS_BODY_DEPTH,f=WR(h,u,h*.34,_.GPS_BODY_WAIST),M=-.5*d,E=.22*d,m=.36*d,p=.42*d,g=.375*d,S=.45*d,x=.393*d,D=1,y=.88,R=.958,N=[],b=yc(f,y,M),v=yc(f,D,E),w=yc(f,R,m),O=a*.078,C=a*.075,W=f.map(q=>{const A=O+C*Math.max(0,(-q.y/u-.6)/.4);return new ue(q.x*R-q.nx*A,q.y*R-q.ny*A,p)}),B=W.map(q=>new ue(q.x,q.y,g));Hf(N,b,M,!0),hs(N,v,b),hs(N,w,v),hs(N,B,W),Hf(N,B,g,!1);{const q=_.GPS_ANTENNA_W*h,A=a*.21,U=_.GPS_ANTENNA_X*h,T=-a*.05,I=u-a*.2,z=u+a*_.GPS_ANTENNA_LEN,te=Ba(q,A,Math.min(q,A)*.55,2),he=_.GPS_ANTENNA_TILT_RAD,ye=(Be,He,ot)=>te.map(je=>{const ht=He-I,ut=je.y*Be+ot;return new ue(U+je.x*Be,I+ht*Math.cos(he)-ut*Math.sin(he),T+ht*Math.sin(he)+ut*Math.cos(he))}),Re=ye(1,I,0),Ce=ye(.86,z-a*.07,0),Le=ye(.62,z,0);hs(N,Re,Ce),hs(N,Ce,Le);const ke=new ue(U,z+Math.cos(he)*0,T);for(let Be=0;Be<Le.length;Be++){const He=(Be+1)%Le.length;or(N,ke,Le[He],Le[Be])}}const L=q=>{const A=1-_.GPS_BODY_WAIST,U=(q-.15)/.95;return h*(1-A*Math.max(0,1-U*U))};for(const q of[-.36,-.52,-.68]){const A=L(q),U=q*u,T=a*.062,I=a*.029;for(const z of[1,-1]){const te=z>0?A*.96:-(A+I),he=z>0?A+I:-(A*.96);pa(N,te,he,U-T,U+T,.05*d,.2*d,a*.006,null)}}{const A=L(.3),U=.3*u,T=a*.1;pa(N,A*.96,A+a*.02,U-T,U+T,.02*d,.22*d,a*.008,null)}const X=new At;X.setAttribute("position",new gt(N,3)),X.computeVertexNormals();const k=[];hs(k,W,w);const J=new At;J.setAttribute("position",new gt(k,3)),J.computeVertexNormals();const Z=320,ee=Math.round(Z*_.GPS_BODY_ASPECT),me=document.createElement("canvas");me.width=Z,me.height=ee;const K=me.getContext("2d"),j=q=>(q/h+1)/2*Z,Q=q=>(1-(q/u+1)/2)*ee,H=13,$={};["wall","key","keyEdge"].forEach((q,A)=>{K.fillStyle=vn[q],K.fillRect(A*H,0,H,H),$[q]=[(A*H+H/2)/Z,1-H/2/ee]});const re=(q,A,U,T,I)=>{K.beginPath(),K.moveTo(q+I,A),K.arcTo(q+U,A,q+U,A+T,I),K.arcTo(q+U,A+T,q,A+T,I),K.arcTo(q,A+T,q,A,I),K.arcTo(q,A,q+U,A,I),K.closePath()},oe=j(-.81*h),de=j(xn.fasciaHW*h),Me=Q(xn.fasciaTop*u),V=Q(xn.fasciaBot*u),Ae=K.createLinearGradient(0,Me,0,V);Ae.addColorStop(0,vn.fascia),Ae.addColorStop(1,vn.fasciaLo),K.fillStyle=Ae,re(oe,Me,de-oe,V-Me,Z*.035),K.fill(),K.textAlign="center",K.textBaseline="middle";const ve=Q(xn.screenCY*u+c/2),Ie=Q(xn.screenCY*u-c/2),be=(de-oe)*.86;K.fillStyle=vn.label,K.font=`600 ${Math.round(Z*.052)}px Arial, Helvetica, sans-serif`,K.fillText("TRAILMAP 65",Z/2,Me+(ve-Me)*.4,be),K.fillStyle=vn.labelDim,K.font=`${Math.round(Z*.033)}px Arial, Helvetica, sans-serif`,K.fillText("MULTI - BAND",Z/2,Me+(ve-Me)*.74,be),K.fillStyle=vn.label,K.font=`bold ${Math.round(Z*.056)}px Arial, Helvetica, sans-serif`,K.fillText("CAIRN",Z/2,Ie+(V-Ie)*.52,be);for(const q of Vf){const A=j((q.x-q.w)*h),U=j((q.x+q.w)*h),T=Q((q.y+q.h)*u),I=Q((q.y-q.h)*u);K.fillStyle=vn.keyLo,K.fillRect(A-3,T-3,U-A+6,I-T+6);const z=K.createLinearGradient(0,T,0,I);if(z.addColorStop(0,vn.keyEdge),z.addColorStop(.35,vn.key),z.addColorStop(1,vn.keyLo),K.fillStyle=z,re(A,T,U-A,I-T,Math.min(U-A,I-T)*.22),K.fill(),q.rocker){const te=(A+U)/2,he=(T+I)/2,ye=(U-A)/2,Re=(I-T)/2;K.fillStyle=vn.label;const Ce=(ke,Be)=>{const He=te+ke*ye*.7,ot=he+Be*Re*.7,je=Z*.02;K.save(),K.translate(He,ot),K.rotate(Math.atan2(Be,ke)+Math.PI/2),K.beginPath(),K.moveTo(0,-je),K.lineTo(je*.85,je*.7),K.lineTo(-je*.85,je*.7),K.closePath(),K.fill(),K.restore()};Ce(0,-1),Ce(0,1),Ce(-1,0),Ce(1,0),K.fillStyle="rgba(0,0,0,0.45)",re(te-ye*.44,he-Re*.44,ye*.88,Re*.88,ye*.24),K.fill();const Le=K.createLinearGradient(0,he-Re*.4,0,he+Re*.4);Le.addColorStop(0,"#5f6469"),Le.addColorStop(1,vn.key),K.fillStyle=Le,re(te-ye*.38,he-Re*.38,ye*.76,Re*.76,ye*.22),K.fill();continue}K.fillStyle=vn.label,K.font=`600 ${Math.round(Math.min((I-T)*.5,(U-A)/Math.max(3,q.label.length)*1.15))}px Arial, Helvetica, sans-serif`,K.fillText(q.label,(A+U)/2,(T+I)/2+1)}const Ne=new xh(me);Ne.colorSpace=kt,Ne.generateMipmaps=!1,Ne.minFilter=$t;const se=[],fe=[],G=q=>{fe.push((q.x/h+1)/2,(q.y/u+1)/2)},P=q=>{fe.push($[q][0],$[q][1])},ne=(q,A,U,T)=>{or(se,q,A,U);for(const I of[q,A,U])T==="planar"?G(I):P(T)},pe=(q,A,U)=>{for(let T=0;T<q.length;T++){const I=(T+1)%q.length;ne(q[T],A[T],A[I],U),ne(q[T],A[I],q[I],U)}};{const q=xn.fasciaHW*h,A=(xn.fasciaTop+xn.fasciaBot)/2*u,U=(xn.fasciaTop-xn.fasciaBot)/2*u,T=Ba(q,U,q*.16,1).map(he=>new ue(he.x,he.y+A,S)),I=T.map(he=>new ue(he.x,he.y,g)),z=Ba(l/2,c/2,l*.055,1).map(he=>new ue(he.x,he.y+xn.screenCY*u,S)),te=z.map(he=>new ue(he.x,he.y,x));pe(T,I,"wall");for(let he=0;he<T.length;he++){const ye=(he+1)%T.length;ne(T[he],T[ye],z[ye],"planar"),ne(T[he],z[ye],z[he],"planar")}pe(te,z,"wall")}for(const q of Vf){const A=(q.x-q.w)*h,U=(q.x+q.w)*h,T=(q.y-q.h)*u,I=(q.y+q.h)*u,z=a*(q.rocker?.03:.032);pa(se,A,U,T,I,g,g+z,a*.008,(te,he)=>{he==="top"?G(te):P("key")}),q.rocker&&pa(se,A+(U-A)*.3,U-(U-A)*.3,T+(I-T)*.3,I-(I-T)*.3,g+z-a*.002,g+z+a*.014,a*.006,(te,he)=>{he==="top"?G(te):P("keyEdge")})}const ae=new At;ae.setAttribute("position",new gt(se,3)),ae.setAttribute("uv",new gt(fe,2)),ae.computeVertexNormals();const Ee=new ri;Ee.name="gps-device";const Ue=new vt(X,new Fn({color:UR,fog:!1})),Pe=new vt(J,new Fn({color:FR,fog:!1})),Oe=new vt(ae,new Fn({color:kR,map:Ne,fog:!1})),Ge=new vt(new Ti(l,c),new Fn({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.4,color:9211020,fog:!1}));Ge.position.set(0,xn.screenCY*u,x+4e-5),Ee.add(Ue,Pe,Oe,Ge),Ee.renderOrder=999,Ee.visible=!1,n.camera.add(Ee);const le={xtdM:0,xtdSignedM:0,headingDeg:0,distToBM:0,alongM:0,medal:"Platinum",medalText:"Platinum",latDeg:0,lonDeg:0,latText:Bf(0),lonText:Gf(0)};let xe=!1,De=1,Te=0,Y=0;const ce=(q,A,U,T)=>{r.beginPath(),r.moveTo(q,A),r.lineTo(U,T),r.stroke()};function Se(q,A){const U=_.GPS_SCREEN_PAD_PX,T=e/2,I=e-U,z=U,te=T/_.GPS_SCREEN_HALF_WIDTH_M,he=ke=>ke*te;r.fillStyle=St.rough,r.fillRect(0,0,e,e);for(const[ke,Be]of[[mi[3],St.bronze],[mi[2],St.silver],[mi[1],St.gold],[mi[0],St.core]])r.fillStyle=Be,r.fillRect(T-he(ke),0,he(ke)*2,e);r.strokeStyle=St.roughRule,r.lineWidth=1;for(let ke=1;ke<22;ke++){const Be=ke/22*e;ce(0,Be,T-he(mi[3]),Be),ce(T+he(mi[3]),Be,e,Be)}r.lineWidth=1.5,r.strokeStyle=St.edge;for(const ke of[mi[0],mi[mi.length-1]])ce(T-he(ke),0,T-he(ke),e),ce(T+he(ke),0,T+he(ke),e);r.textAlign="center",r.textBaseline="middle",r.textAlign="left";for(let ke=500;ke<q.lengthM;ke+=500){const Be=ke/q.lengthM;if(Be<.07||Be>.93)continue;const He=I+(z-I)*Be;r.strokeStyle=St.tick,ce(T-5,He,T+5,He),ke%1e3===0&&(r.font=`600 ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,r.fillStyle=St.tickInk,r.fillText(`${(ke/1e3).toFixed(0)} km`,T+8,He))}if(q.track.length>1&&q.lengthM>0){const ke=(q.b.x-q.a.x)/q.lengthM,Be=(q.b.z-q.a.z)/q.lengthM,He=Math.max(1,Math.floor(q.track.length/64));r.strokeStyle=St.track,r.lineWidth=1.5,r.beginPath();for(let ot=0;ot<q.track.length;ot+=He){const je=q.track[ot],ht=(je.x-q.a.x)*ke+(je.z-q.a.z)*Be,ut=T+he(je.xtd),Ze=I+(z-I)*Math.min(Math.max(ht/q.lengthM,0),1);ot===0?r.moveTo(ut,Ze):r.lineTo(ut,Ze)}r.stroke()}r.lineCap="round",r.strokeStyle=St.routeHalo,r.lineWidth=7,ce(T,I,T,z),r.strokeStyle=St.route,r.lineWidth=3.5,ce(T,I,T,z),r.lineCap="butt",r.textAlign="center",r.textBaseline="middle";for(const[ke,Be]of[[I,"A"],[z,"B"]]){const He=e*.03;r.fillStyle=St.badge,r.fillRect(T-He-2,ke-He-2,(He+2)*2,(He+2)*2),r.fillStyle=St.mark,r.fillRect(T-He,ke-He,He*2,He*2);const ot=e*.072,je=e*.06;r.fillStyle=St.badge,r.fillRect(T+He+4,ke-je/2,ot,je),r.strokeStyle=St.badgeInk,r.lineWidth=1,r.strokeRect(T+He+4.5,ke-je/2+.5,ot-1,je-1),r.fillStyle=St.badgeInk,r.font=`bold ${Math.round(e*.048)}px Arial, Helvetica, sans-serif`,r.fillText(Be,T+He+4+ot/2,ke+1)}{const ke=e*.115,Be=e*.115,He=e*.078;r.fillStyle=St.badge,r.beginPath(),r.arc(ke,Be,He,0,Math.PI*2),r.fill(),r.save(),r.translate(ke,Be),r.rotate(-q.bearingRad),r.fillStyle=St.badgeInk,r.beginPath(),r.moveTo(0,-He*.78),r.lineTo(He*.34,He*.1),r.lineTo(-He*.34,He*.1),r.closePath(),r.fill(),r.restore(),r.font=`bold ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,r.fillStyle=St.badgeInk,r.fillText("N",ke,Be+He*.55)}{const ke=he(50),Be=e*.055,He=e*.925;r.fillStyle=St.badge,r.fillRect(Be-5,He-13,ke+10,25),r.strokeStyle=St.badgeInk,r.lineWidth=1.5,r.beginPath(),r.moveTo(Be,He-1),r.lineTo(Be,He+5),r.lineTo(Be+ke,He+5),r.lineTo(Be+ke,He-1),r.stroke(),r.fillStyle=St.badgeInk,r.font=`600 ${Math.round(e*.05)}px Arial, Helvetica, sans-serif`,r.fillText("50 m",Be+ke/2,He-5)}{r.font=`600 ${Math.round(e*.048)}px Arial, Helvetica, sans-serif`;const ke=Math.max(r.measureText(le.latText).width,r.measureText(le.lonText).width)+10,Be=e*.056,He=e*.945,ot=e*.845,je=ot-2*Be-8;r.fillStyle=St.badge,r.fillRect(He-ke,je,ke,2*Be+8),r.fillStyle=St.badgeInk,r.textAlign="right",r.textBaseline="alphabetic",r.fillText(le.latText,He-5,je+4+Be*.82),r.fillText(le.lonText,He-5,je+4+Be*1.82)}{const ke=q.lengthM>0?Math.min(Math.max(q.alongM/q.lengthM,0),1):0,Be=e*.058,He=Math.min(Math.max(T+he(q.xtdSignedM),Be),e-Be),ot=I+(z-I)*ke;r.save(),r.translate(He,ot),r.rotate(A-q.bearingRad),r.beginPath(),r.moveTo(0,-Be),r.lineTo(Be*.72,Be*.86),r.lineTo(0,Be*.4),r.lineTo(-Be*.72,Be*.86),r.closePath(),r.fillStyle=St.me,r.fill(),r.strokeStyle=St.meEdge,r.lineWidth=2,r.stroke(),r.restore()}const ye=[["FROM LINE",GR(q.xtdSignedM)],["BAND",le.medalText],["TO B",zR(q.distToBM)],["ELAPSED",HR(q.elapsedS)]];r.fillStyle=fa.bg,r.fillRect(0,e,e,t),r.strokeStyle=fa.rule,r.lineWidth=1,ce(e/2,e+2,e/2,e+t-2),ce(2,e+t/2,e-2,e+t/2),ce(0,e+.5,e,e+.5),r.textAlign="left";for(let ke=0;ke<ye.length;ke++){const Be=ke%2*(e/2)+e*.035,He=e+Math.floor(ke/2)*(t/2);r.fillStyle=fa.label,r.font=`bold ${Math.round(e*.054)}px Arial, Helvetica, sans-serif`,r.textBaseline="top",r.fillText(ye[ke][0],Be,He+t*.045),r.fillStyle=fa.value,r.font=`bold ${Math.round(e*.088)}px Arial, Helvetica, sans-serif`,r.textBaseline="alphabetic",r.fillText(ye[ke][1],Be,He+t*.43)}const Re=e+t,Ce=(ke,Be,He,ot,je,ht,ut)=>{const Ze=r.createLinearGradient(ke,Be,He,ot);Ze.addColorStop(0,`rgba(20,26,16,${ut})`),Ze.addColorStop(1,"rgba(20,26,16,0)"),r.fillStyle=Ze,r.fillRect(Math.min(ke,He),Math.min(Be,ot),je,ht)};Ce(0,0,0,20,e,20,.46),Ce(0,0,15,0,15,Re,.34),Ce(e,0,e-11,0,11,Re,.22),Ce(0,Re,0,Re-11,e,11,.22);const Le=r.createLinearGradient(0,0,e*.8,e+t);Le.addColorStop(0,"rgba(214,226,236,0.11)"),Le.addColorStop(.45,"rgba(214,226,236,0.03)"),Le.addColorStop(1,"rgba(30,36,26,0.12)"),r.fillStyle=Le,r.fillRect(0,0,e,e+t),s.needsUpdate=!0}return{update(q){const A=q.mission,U=q.player.yaw;le.xtdM=A.xtdM,le.xtdSignedM=A.xtdSignedM,le.headingDeg=VR(U),le.distToBM=A.distToBM,le.alongM=A.alongM,le.medal=A.medal,le.medalText=A.medal;const T=yn(q.world.frame,q.player.x,q.player.z);le.latDeg=T.lat,le.lonDeg=T.lon,le.latText=Bf(T.lat),le.lonText=Gf(T.lon);const I=Math.min(1,_.SIM_DT/Math.max(.001,_.GPS_RAISE_S)),z=Math.min(1,_.SIM_DT/Math.max(.001,_.GPS_STOW_S));Y+=(Te-Y)*z;const te=Y>.995;if(Ee.visible=xe&&!te,!xe||te)return;Se(A,U);const he=q.player.speedMps>_.GPS_RAISE_SPEED_MPS?0:1;De+=(he-De)*I;const ye=De*De*(3-2*De),Re=Y*Y*(3-2*Y);Ee.position.set(_.GPS_DEVICE_X+Re*_.GPS_STOW_DX,_.GPS_DEVICE_Y_LOW+(_.GPS_DEVICE_Y_HIGH-_.GPS_DEVICE_Y_LOW)*ye-Re*_.GPS_STOW_DROP,-.5),Ee.rotation.set((1-ye)*_.GPS_DEVICE_TIP_RAD+Re*.5,-.22,Re*.6)},readout:()=>({...le}),setVisible(q){xe=q,Ee.visible=q&&Y<=.995},visible:()=>xe,raised:()=>De>.5,setStowed(q){Te=q?1:0},stowed:()=>Te>.5,dispose(){n.camera.remove(Ee);for(const q of[Ue,Pe,Oe,Ge])q.geometry.dispose(),q.material.dispose();s.dispose(),Ne.dispose()}}}const xo=Math.PI*2;function u0(n){const e=n%xo;return e<0?e+xo:e}function XR(n){return u0(n)}function KR(n,e){let t=(e-n)%xo;return t>Math.PI&&(t-=xo),t<=-Math.PI&&(t+=xo),t}function YR(){const n=[];for(let e=0;e<360;e+=5)e%90===0?n.push({deg:e,kind:"cardinal",label:"NESW"[e/90]}):e%30===0?n.push({deg:e,kind:"major",label:String(e)}):n.push({deg:e,kind:"minor"});return n}const qR="#3a3c3d",ZR="#e7dfc9",Rc="#28251f",Yh="#a8322c",jR="#4a4638";function QR(n){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2;t.beginPath(),t.arc(i,i,r,0,Math.PI*2),t.fillStyle=ZR,t.fill(),t.strokeStyle="rgba(90,80,58,0.25)",t.lineWidth=n*.012,t.beginPath(),t.arc(i,i,r*.7,0,Math.PI*2),t.stroke(),t.textAlign="center";for(const s of YR()){const o=s.deg*Math.PI/180;t.save(),t.translate(i,i),t.rotate(o);const a=r*.97,l=s.kind==="minor"?r*.07:r*.12;t.strokeStyle=Rc,t.lineWidth=n*(s.kind==="cardinal"?.014:.008),t.beginPath(),t.moveTo(0,-a),t.lineTo(0,-(a-l)),t.stroke(),s.kind==="cardinal"?(t.fillStyle=s.label==="N"?Yh:Rc,t.font=`bold ${Math.round(n*.14)}px Arial, Helvetica, sans-serif`,t.textBaseline="alphabetic",t.fillText(s.label,0,-76.8)):s.kind==="major"&&(t.fillStyle=jR,t.font=`600 ${Math.round(n*.075)}px Arial, Helvetica, sans-serif`,t.textBaseline="alphabetic",t.fillText(s.label,0,-92.16)),t.restore()}return t.save(),t.translate(i,i),t.fillStyle=Yh,t.beginPath(),t.moveTo(0,-r*.52),t.lineTo(r*.05,0),t.lineTo(0,r*.16),t.lineTo(-r*.05,0),t.closePath(),t.fill(),t.fillStyle=Rc,t.beginPath(),t.arc(0,0,r*.045,0,Math.PI*2),t.fill(),t.restore(),e}function JR(n){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=r*.84;t.beginPath(),t.arc(i,i,r,0,Math.PI*2),t.arc(i,i,s,0,Math.PI*2,!0),t.fillStyle=qR,t.fill();const o=t.createLinearGradient(0,0,n,n);return o.addColorStop(0,"rgba(255,255,255,0.16)"),o.addColorStop(.5,"rgba(255,255,255,0)"),t.beginPath(),t.arc(i,i,r*.985,0,Math.PI*2),t.arc(i,i,s*1.01,0,Math.PI*2,!0),t.fillStyle=o,t.fill(),t.fillStyle=Yh,t.beginPath(),t.moveTo(i,r*.3),t.lineTo(i-r*.045,r*.055),t.lineTo(i+r*.045,r*.055),t.closePath(),t.fill(),e}function eb(n){const e=u=>{const d=new xh(u);return d.colorSpace=kt,d.generateMipmaps=!1,d.minFilter=$t,d},t=e(QR(256)),i=e(JR(256)),r=_.COMPASS_DIAM/2,s=new vt(new Ti(2*r*.86,2*r*.86),new Fn({map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:.32,color:9867912,alphaTest:.5,fog:!1})),o=new vt(new Ti(2*r,2*r),new Fn({map:i,transparent:!0,fog:!1}));o.position.z=.004;const a=new ri;a.name="compass",a.add(s,o),a.renderOrder=999,a.visible=!1,n.camera.add(a);let l=0,c=0,h=0;return{update(u){if(u.flags.paused)return;const d=u.mission.phase==="walking",f=Math.min(1,_.SIM_DT/Math.max(.001,_.COMPASS_RAISE_S));if(c+=((d?l:0)-c)*f,a.visible=d&&c>.005,!a.visible)return;const M=Math.min(1,_.SIM_DT/Math.max(.001,_.COMPASS_CARD_LAG_S));h=u0(h+KR(h,XR(u.player.yaw))*M),s.rotation.z=h;const E=c*c*(3-2*c);a.position.set(_.COMPASS_X,_.COMPASS_Y_LOW+(_.COMPASS_Y_HIGH-_.COMPASS_Y_LOW)*E,-.45),a.rotation.x=-.3*E},setRaised(u){l=u?1:0},raised:()=>l>.5,visible:()=>a.visible,headingDeg:()=>{const u=h*180/Math.PI%360;return u<0?u+360:u},dispose(){n.camera.remove(a);for(const u of[s,o])u.geometry.dispose(),u.material.dispose();t.dispose(),i.dispose()}}}const tb=5,nb=60,bc=[5,10,20,25,50,100,200];function ib(n){for(const e of bc)if(n/e<=nb)return e;return bc[bc.length-1]}function rb(n,e,t,i,r){const s=performance.now(),o=Math.max(Math.abs(i.x-t.x),Math.abs(i.z-t.z))+2*r.marginM,a=(t.x+i.x)/2,l=(t.z+i.z)/2,c=a-o/2,h=l-o/2,u=r.minCellM&&r.minCellM>0?Math.min(r.gridN,Math.floor(o/r.minCellM)+1):r.gridN,d=o/(u-1),f=(Z,ee)=>({px:(Z-c)/o*(u-1),py:(ee-h)/o*(u-1)}),M=new Float32Array(u*u),E=new Uint8Array(u*u);let m=1/0,p=-1/0,g=0;for(let Z=0;Z<u;Z++){const ee=h+Z*d;for(let me=0;me<u;me++){const K=c+me*d,j=n.landformHeightAt(K,ee,d);M[Z*u+me]=j,j<m&&(m=j),j>p&&(p=j),n.waterDepthAt(K,ee)>0&&(E[Z*u+me]=1,g++)}}const S=-.5,x=Math.SQRT1_2,D=-.5,y=new Uint8ClampedArray(u*u),R=(Z,ee)=>M[Math.min(u-1,Math.max(0,ee))*u+Math.min(u-1,Math.max(0,Z))];for(let Z=0;Z<u;Z++)for(let ee=0;ee<u;ee++){const me=(R(ee+1,Z)-R(ee-1,Z))/(2*d*(ee===0||ee===u-1?.5:1)),K=(R(ee,Z+1)-R(ee,Z-1))/(2*d*(Z===0||Z===u-1?.5:1)),j=Math.hypot(me,1,K),Q=-me/j*S+1/j*x+-K/j*D;y[Z*u+ee]=Math.max(0,Math.min(1,Q))*255}const N=r.contourIntervalM||ib(p-m),b=[];let v=0;const w=Math.ceil(m/N)*N;for(let Z=w;Z<=p;Z+=N){const ee=[];for(let me=0;me<u-1;me++)for(let K=0;K<u-1;K++){const j=M[me*u+K],Q=M[me*u+K+1],H=M[(me+1)*u+K],$=M[(me+1)*u+K+1];let re=0;if(j>=Z&&(re|=1),Q>=Z&&(re|=2),$>=Z&&(re|=4),H>=Z&&(re|=8),re===0||re===15)continue;const oe=()=>[K+(Z-j)/(Q-j),me],de=()=>[K+(Z-H)/($-H),me+1],Me=()=>[K,me+(Z-j)/(H-j)],V=()=>[K+1,me+(Z-Q)/($-Q)],Ae=(ve,Ie)=>{ee.push(ve[0],ve[1],Ie[0],Ie[1])};switch(re){case 1:case 14:Ae(Me(),oe());break;case 2:case 13:Ae(oe(),V());break;case 3:case 12:Ae(Me(),V());break;case 4:case 11:Ae(V(),de());break;case 6:case 9:Ae(oe(),de());break;case 7:case 8:Ae(Me(),de());break;case 5:Ae(Me(),oe()),Ae(V(),de());break;case 10:Ae(oe(),V()),Ae(Me(),de());break}}ee.length!==0&&(b.push({levelM:Z,index:Z%(N*tb)===0,segs:new Float32Array(ee)}),v+=ee.length/4)}const O=1/60,C=yn(e,c,h),W=yn(e,c+o,h+o),B=[];let L=NaN;for(let Z=Math.ceil(W.lon>C.lon?C.lon/O:W.lon/O)*O;Z<=Math.max(C.lon,W.lon)+1e-12;Z+=O){const ee=oi(e,e.lat,Z),me=f(ee.x,0).px;if(me<0||me>u-1)continue;const K=bo(Z,"lon");B.push({valueDeg:Z,px:me,label:zf(Z,"lon",B.length===0||Math.round(K.min)===0||K.deg!==L)}),L=K.deg}const X=[];L=NaN;for(let Z=Math.ceil(W.lat/O)*O;Z<=C.lat+1e-12;Z+=O){const ee=oi(e,Z,e.lon),me=f(0,ee.z).py;if(me<0||me>u-1)continue;const K=bo(Z,"lat");X.push({valueDeg:Z,px:me,label:zf(Z,"lat",X.length===0||Math.round(K.min)===0||K.deg!==L)}),L=K.deg}const k=f(t.x,t.z),J=f(i.x,i.z);return{x0:c,z0:h,sizeM:o,gridN:u,cellM:d,heights:M,hillshade:y,water:E,contourIntervalM:N,contours:b,lonLines:B,latLines:X,route:{ax:k.px,ay:k.py,bx:J.px,by:J.py},stats:{minH:m,maxH:p,segTotal:v,waterFrac:g/(u*u),buildMs:performance.now()-s},toPx:f}}const d0=.96,sb=.075;function ob(n,e,t){return Math.min(e*t,n*d0)}function f0(n){const e=Math.round(n*sb);return{marginPx:e,canvasPx:n+2*e}}function ab(n,e,t,i){const{canvasPx:r}=f0(t);return n*(r/e)*((i-1)/t)}const lb=.62,cb=.45,hb=16,ub=48,db=6;function fb(n,e){const t=e.fontPx,i=t*cb,r=t*hb,s=e.maxPerLevel??db,o=n.gridN-1,a=n.lonLines.map(h=>h.px),l=n.latLines.map(h=>h.px),c=[];for(const h of n.contours){if(!h.index)continue;const u=String(h.levelM),d=u.length*lb*t,f=t,M=h.segs.length/4,E=Math.max(1,Math.floor(M/ub));let m=0;for(let p=0;p<M&&m<s;p+=E){const g=p*4,S=(h.segs[g]+h.segs[g+2])/2,x=(h.segs[g+1]+h.segs[g+3])/2,D=S-d/2-i,y=S+d/2+i,R=x-f/2-i,N=x+f/2+i;if(D<0||R<0||y>o||N>o||a.some(v=>v>D&&v<y)||l.some(v=>v>R&&v<N))continue;let b=!0;for(const v of c){if(Math.abs(S-v.px)<(d+v.w)/2+i&&Math.abs(x-v.py)<(f+v.h)/2+i){b=!1;break}if(v.levelM===h.levelM&&Math.hypot(S-v.px,x-v.py)<r){b=!1;break}}b&&(c.push({levelM:h.levelM,text:u,px:S,py:x,w:d,h:f}),m++)}}return c}const Tc="#f2ead6",pb="#e3d8bc",Js="#3b352a",Wf="rgb(146,98,49)",mb="rgba(64,88,118,0.42)",Cc="#b23a2e",gb=180,_b=`
.papermap{position:absolute;left:50%;bottom:-1.5vh;transform:translateX(-50%) rotate(-0.5deg);z-index:3;pointer-events:none;display:none;filter:drop-shadow(0 10px 26px rgba(0,0,0,0.45))}
.papermap.shown{display:block}
.papermap canvas{display:block;height:${_.MAP_SHEET_FRAC*100}vh;max-height:${d0*100}vw;width:auto}
`;function Mb(n){const e=document.createElement("style");e.textContent=_b,document.head.appendChild(e);const t=Xe("div","papermap",n.ui.root??document.body),i=document.createElement("canvas");t.appendChild(i);let r=null,s=[],o=0,a=0,l=0,c=!1;const h=()=>{const f=performance.now(),M=n.world.query;r=rb({landformHeightAt:(g,S,x)=>M.landformHeightAt(g,S,x),waterDepthAt:(g,S)=>M.waterDepthAt(g,S)},n.world.frame,n.mission.a,n.mission.b,{gridN:_.MAP_GRID_N,marginM:_.MAP_MARGIN_M,minCellM:_.FILTER_PITCH_FLOOR_M});const E=performance.now(),m=ob(window.innerWidth,window.innerHeight,_.MAP_SHEET_FRAC);s=fb(r,{fontPx:ab(_.MAP_LABEL_SCREEN_PX,m,_.MAP_CANVAS_PX,r.gridN)});const p=performance.now();a=p-E,u(r,s),o=performance.now()-p,l=performance.now()-f},u=(f,M)=>{const E=_.MAP_CANVAS_PX,{marginPx:m,canvasPx:p}=f0(E);i.width=p,i.height=p;const g=i.getContext("2d"),S=E/(f.gridN-1),x=k=>m+k*S;g.fillStyle=Tc,g.fillRect(0,0,p,p),g.strokeStyle=pb,g.lineWidth=2,g.strokeRect(1,1,p-2,p-2);const D=document.createElement("canvas");D.width=f.gridN,D.height=f.gridN;const y=D.getContext("2d"),R=y.createImageData(f.gridN,f.gridN),N=242,b=234,v=214,w=169,O=196,C=212;for(let k=0;k<f.gridN*f.gridN;k++){const J=k*4;if(f.water[k])R.data[J]=w,R.data[J+1]=O,R.data[J+2]=C;else{const Z=Math.min(1.12,f.hillshade[k]/gb);R.data[J]=Math.min(255,N*Z),R.data[J+1]=Math.min(255,b*Z),R.data[J+2]=Math.min(255,v*Z)}R.data[J+3]=255}y.putImageData(R,0,0),g.imageSmoothingEnabled=!0,g.drawImage(D,m,m,E,E);for(const k of f.contours){g.strokeStyle=Wf,g.globalAlpha=k.index?.85:.45,g.lineWidth=k.index?1.7:1,g.beginPath();for(let J=0;J<k.segs.length;J+=4)g.moveTo(x(k.segs[J]),x(k.segs[J+1])),g.lineTo(x(k.segs[J+2]),x(k.segs[J+3]));g.stroke()}g.globalAlpha=1,g.textAlign="center",g.textBaseline="middle",M.length>0&&(g.font=`600 ${Math.max(1,Math.round(M[0].h*S))}px ui-monospace, Menlo, Consolas, monospace`);for(const k of M)g.strokeStyle=Tc,g.lineWidth=3,g.strokeText(k.text,x(k.px),x(k.py)),g.fillStyle=Wf,g.fillText(k.text,x(k.px),x(k.py));g.strokeStyle=mb,g.lineWidth=1;for(const k of f.lonLines){const J=x(k.px);g.beginPath(),g.moveTo(J,m),g.lineTo(J,m+E),g.stroke()}for(const k of f.latLines){const J=x(k.px);g.beginPath(),g.moveTo(m,J),g.lineTo(m+E,J),g.stroke()}g.fillStyle=Js,g.font=`600 ${Math.round(E*.016)}px ui-monospace, Menlo, Consolas, monospace`;for(const k of f.lonLines){const J=x(k.px);g.textAlign="center",g.fillText(k.label,J,m*.55),g.fillText(k.label,J,p-m*.45)}for(const k of f.latLines){const J=x(k.px);g.textAlign="right",g.fillText(k.label,m-6,J),g.textAlign="left",g.fillText(k.label,p-m+6,J)}g.strokeStyle=Js,g.lineWidth=1.5,g.strokeRect(m,m,E,E);const{ax:W,ay:B,bx:L,by:X}=f.route;g.strokeStyle=Cc,g.globalAlpha=.9,g.lineWidth=2.5,g.beginPath(),g.moveTo(x(W),x(B)),g.lineTo(x(L),x(X)),g.stroke(),g.globalAlpha=1,g.font=`bold ${Math.round(E*.02)}px ui-monospace, Menlo, Consolas, monospace`;for(const[k,J,Z]of[[W,B,"A"],[L,X,"B"]])g.beginPath(),g.arc(x(k),x(J),E*.008,0,Math.PI*2),g.strokeStyle=Cc,g.lineWidth=2,g.stroke(),g.fillStyle=Cc,g.textAlign="left",g.fillText(Z,x(k)+E*.012,x(J)-E*.012);g.fillStyle=Js,g.textAlign="left",g.font=`bold ${Math.round(E*.02)}px ui-monospace, Menlo, Consolas, monospace`,g.fillText("BEELINE SURVEY SHEET",m,m*.3),g.font=`${Math.round(E*.014)}px ui-monospace, Menlo, Consolas, monospace`,g.textAlign="right",g.fillText(`CONTOURS ${f.contourIntervalM} m · GRID 1′ · TRUE NORTH · ddd°mm.mmm′`,p-m,m*.3);{const k=f.sizeM>6e3?2e3:1e3,J=k/f.sizeM*E,Z=p-m*.8,ee=m;g.strokeStyle=Js,g.lineWidth=2,g.beginPath(),g.moveTo(ee,Z-4),g.lineTo(ee,Z),g.lineTo(ee+J,Z),g.lineTo(ee+J,Z-4),g.stroke(),g.textAlign="left",g.fillText(`${k/1e3} km`,ee+J+8,Z-2)}{const k=m+E-E*.035,J=m+E*.055,Z=E*.022;g.fillStyle=Tc,g.globalAlpha=.75,g.beginPath(),g.arc(k,J,Z*1.5,0,Math.PI*2),g.fill(),g.globalAlpha=1,g.fillStyle=Js,g.beginPath(),g.moveTo(k,J-Z),g.lineTo(k+Z*.5,J+Z*.7),g.lineTo(k-Z*.5,J+Z*.7),g.closePath(),g.fill(),g.font=`bold ${Math.round(E*.016)}px ui-monospace, Menlo, Consolas, monospace`,g.textAlign="center",g.fillText("N",k,J+Z*1.9)}},d=f=>{f&&!r&&h(),c=f,t.classList.toggle("shown",f)};return{toggle:()=>d(!c),shown:()=>c,setShown:d,stats:()=>r?{built:!0,gridN:r.gridN,sizeM:r.sizeM,contourIntervalM:r.contourIntervalM,levels:r.contours.length,segTotal:r.stats.segTotal,waterFrac:r.stats.waterFrac,lonLines:r.lonLines.length,latLines:r.latLines.length,buildMs:r.stats.buildMs,paintMs:o,labels:s.length}:null,buildMs:()=>r?{modelMs:r.stats.buildMs,labelsMs:a,paintMs:o,totalMs:l}:null}}function Eb(n){const e=Xe("div","arrival",n.ui.root??document.body);let t=_.ARRIVAL_FADE_S,i=!1,r=null;function s(){t=0,i=!1,e.style.display="none",r==null||r()}return{el:e,start(){t=_.ARRIVAL_FADE_S,i=!0,e.style.display="",e.style.opacity="1"},update(o,a){!i||o.flags.paused||(t=Math.max(0,t-a),e.style.opacity=String(t/_.ARRIVAL_FADE_S),t===0&&s())},active:()=>i,remainingS:()=>t,onDone(o){r=o},skip(){i?s():e.style.display="none"}}}const us={r:20,g:23,b:26},ds={guide:"rgba(160,175,165,0.22)",line:"#8fa79a",track:"#e6dfcc",worst:"#d9a066",label:"#9aa39c",font:"11px ui-monospace, Menlo, Consolas, monospace"},vb=[_.MEDAL_PLATINUM_M,_.MEDAL_GOLD_M,_.MEDAL_SILVER_M,_.MEDAL_BRONZE_M];function Dc(n,e,t,i,r){n.beginPath(),n.moveTo(e,t),n.lineTo(i,r),n.stroke()}function xb(n,e){const t=n.getContext("2d",{willReadFrequently:!0}),i=n.width,r=n.height,s=_.PLOT_PAD_PX,o=i/2,a=r-s,l=s,{a:c,b:h,track:u,worstIndex:d}=e,f=e.lengthM||1;let M=_.MEDAL_BRONZE_M;for(const x of u)M=Math.max(M,Math.abs(x.xtd));const E=(o-s)/M,m=x=>o+x*E,p=x=>a+(l-a)*(cm(c,h,x).along/f);t.fillStyle=`rgb(${us.r},${us.g},${us.b})`,t.fillRect(0,0,i,r),t.lineWidth=1,t.strokeStyle=ds.guide;for(const x of vb)Dc(t,m(-x),l,m(-x),a),Dc(t,m(x),l,m(x),a);if(t.lineWidth=2,t.strokeStyle=ds.line,Dc(t,o,a,o,l),u.length>0){t.lineWidth=1.5,t.strokeStyle=ds.track,t.beginPath(),t.moveTo(m(u[0].xtd),p(u[0]));for(let x=1;x<u.length;x++)t.lineTo(m(u[x].xtd),p(u[x]));t.stroke()}if(d>=0&&d<u.length){const x=u[d];t.strokeStyle=ds.worst,t.beginPath(),t.arc(m(x.xtd),p(x),5,0,Math.PI*2),t.stroke()}t.fillStyle=ds.label,t.font=ds.font,t.textAlign="center",t.fillText("A",o,a+15),t.fillText("B",o,l-7);const g=t.getImageData(0,0,i,r).data;let S=!1;for(let x=0;x<g.length&&!S;x+=4)S=g[x]!==us.r||g[x+1]!==us.g||g[x+2]!==us.b;return{samples:u.length,worstIndex:d,nonBlank:S}}const Sb=[["medal","medal"],["maxDev","max deviation"],["avgDev","average deviation"],["lineScore","line score"],["elapsed","elapsed"],["length","line length"]];function Ab(n){const e=Xe("div","result",n.ui.root??document.body);e.style.display="none";const t=Xe("div","result-panel",e),i=new Map;for(const[a,l]of Sb){const c=Xe("div",`result-row result-row-${a}`,t);Xe("span","result-label",c).textContent=l;const h=Xe("span","result-value",c);h.dataset.field=a,i.set(a,h)}const r=Xe("canvas","result-plot",t);r.width=_.PLOT_W_PX,r.height=_.PLOT_H_PX;let s={samples:0,worstIndex:-1,nonBlank:!1},o=!1;return{el:e,show(a,l){for(const[c,h]of i)h.textContent=a[c]??"";s=xb(r,l),e.style.display="",o=!0},hide(){e.style.display="none",o=!1},plotStats:()=>s,visible:()=>o}}function wb(n=0){const e=[],t={running:!1,thresholdMs:0,frames:0,maxGapMs:0,over:[]};let i="pre-manifest";const r=[];return{mark:s=>{e.push({label:s,tMs:performance.now()-n}),i=s},note:s=>{i=s,r.push({label:s,tMs:performance.now()-n})},notes:()=>r.map(s=>({label:s.label,tMs:s.tMs})),timings:()=>e.map(s=>({label:s.label,tMs:s.tMs})),total:()=>e.length===0?0:e[e.length-1].tMs,startFrameTrace:s=>{if(t.running||typeof requestAnimationFrame!="function")return;t.running=!0,t.thresholdMs=s;let o=performance.now();const a=()=>{const l=performance.now(),c=l-o;c>t.maxGapMs&&(t.maxGapMs=c),c>s&&t.over.push({atMs:o-n,gapMs:c,phase:i}),o=l,t.frames++,requestAnimationFrame(a)};requestAnimationFrame(a)},frameGaps:()=>({running:t.running,thresholdMs:t.thresholdMs,frames:t.frames,maxGapMs:t.maxGapMs,over:t.over.map(s=>({...s}))})}}function yb(n,e,t,i,r={}){if(i<=0||typeof Worker>"u"||!n())return null;const s=r.primaryFirst===!0;let o=!s;const a={},l=new Map,c=new Map;let h=0;const u=Number((typeof location<"u"?new URLSearchParams(location.search).get("poolinflight"):null)??_.CHUNK_POOL_INFLIGHT);let d=[];const f=new Map,M=new Map,E={boots:0,bootMs:0,hits:0,misses:0,requested:0,stale:0,resets:0,error:null,carvedOnWorker:!1,fieldFromWorker:!1};let m=0;const p=(R,N)=>`${R},${N}`,g=(R=i)=>{const N=++m,b=n();if(!b){d=[];return}const v=performance.now(),w=[];try{for(let O=0;O<R;O++)w.push({w:new Worker(new URL(""+new URL("meshWorker-DCs2YHlS.js",import.meta.url).href,import.meta.url),{type:"module"}),ready:!1,inflight:0,reliefMatches:!1})}catch(O){for(const C of w)C.w.terminate();E.error=String((O==null?void 0:O.message)??O),d=[];return}d=w,D(w,N,b,v)},S=R=>{const N=m,b=n();if(!b||R<=0)return;const v=performance.now(),w=[];try{for(let O=0;O<R;O++)w.push({w:new Worker(new URL(""+new URL("meshWorker-DCs2YHlS.js",import.meta.url).href,import.meta.url),{type:"module"}),ready:!1,inflight:0,reliefMatches:!1})}catch(O){for(const C of w)C.w.terminate();E.error=String((O==null?void 0:O.message)??O);return}d=[...d,...w],D(w,N,b,v)};function x(R,N){var v,w,O;E.error=N,R.ready=!1,R.failed=!0;const b=new Error(N);for(const C of((v=a.ready)==null?void 0:v.splice(0))??[])C();(w=a.carved)==null||w.rej(b),(O=a.fielded)==null||O.rej(b),a.carved=void 0,a.fielded=void 0;for(const[C,W]of l)c.get(C)===R&&(W.rej(b),l.delete(C),c.delete(C))}function D(R,N,b,v){for(const w of R)w.w.onmessage=O=>{var W;if(N!==m)return;const C=O.data;if(C.type==="ready"){w.ready=!0,w.reliefMatches=C.siteReliefM===b.siteReliefM,E.boots++,E.bootMs=performance.now()-v;for(const B of((W=a.ready)==null?void 0:W.splice(0))??[])B();return}if(C.type==="error"){x(w,C.message??"worker error");return}if(C.type==="carved"&&C.netBytes&&C.site&&C.distM){const B=a.carved;a.carved=void 0,E.carvedOnWorker=!0,B==null||B.res({netBytes:C.netBytes,parts:{site:C.site,distM:C.distM,waterDist:C.waterDist??null},channelCells:C.channelCells??0,wallMs:C.wallMs??0});return}if(C.type==="fielded"&&C.site&&C.distM){const B=a.fielded;a.fielded=void 0,E.fieldFromWorker=!0,B==null||B.res({site:C.site,distM:C.distM,waterDist:C.waterDist??null});return}if(C.type==="shell"){const B=C,L=l.get(B.id);l.delete(B.id),c.delete(B.id),L==null||L.res({k0:B.k0,k1:B.k1,pos:B.pos,nrm:B.nrm});return}if(C.type==="chunk"&&C.id!==void 0&&C.pos&&C.nrm&&C.idx&&C.level!==void 0){w.inflight=Math.max(0,w.inflight-1);const B=M.get(C.id);if(M.delete(C.id),B===void 0||B.level!==C.level){E.stale++;return}f.set(C.id,{level:C.level,buf:{pos:C.pos,nrm:C.nrm,idx:C.idx}})}},w.w.onerror=O=>{x(w,O.message||"worker error")},w.w.postMessage({type:"boot",dcKey:"",filterHalfM:b.filterHalfM,snapshot:b})}g(s?1:i);const y=()=>new Promise((R,N)=>{const b=d[0];if(!b){N(new Error("no primary worker"));return}if(b.failed){N(new Error("primary failed: "+(E.error??"worker error")));return}if(b.ready){R();return}const v=setTimeout(()=>{O(new Error(`primary did not boot within ${_.CHUNK_POOL_BOOT_TIMEOUT_MS} ms`))},_.CHUNK_POOL_BOOT_TIMEOUT_MS);let w=!1;const O=C=>{w||(w=!0,clearTimeout(v),C?N(C):R())};(a.ready??(a.ready=[])).push(()=>{var C;return(C=d[0])!=null&&C.ready?O():O(new Error("primary failed to boot: "+(E.error??"worker error")))})});return{prefetch(R){const N=d.filter(b=>b.ready);if(N.length!==0)for(const b of R){const v=p(b.cx,b.cz);if(M.has(v))continue;const w=f.get(v);if(w){if(w.level===b.level)continue;f.delete(v)}const O=e[b.level];if(!O)continue;let C=null;for(const W of N)W.inflight<u&&(!C||W.inflight<C.inflight)&&(C=W);if(!C)return;C.inflight++,M.set(v,{level:b.level,t:performance.now()}),E.requested++,C.w.postMessage({type:"chunk",id:v,level:b.level,ox:b.cx*t,oz:b.cz*t,g:O.g,v:O.v,step:O.step})}},has(R,N,b){var v;return((v=f.get(p(R,N)))==null?void 0:v.level)===b},pendingMs(R,N){const b=M.get(p(R,N));return b?performance.now()-b.t:-1},take(R,N,b){const v=p(R,N),w=f.get(v);return w?(f.delete(v),w.level!==b?(E.stale++,E.misses++,null):(E.hits++,w.buf)):(E.misses++,null)},drop(R,N){const b=p(R,N);f.delete(b),M.delete(b)},ready(){return d.length>0&&d.every(R=>R.ready)},anyReady(){return d.some(R=>R.ready&&!R.failed)},reset(){var N,b,v;E.resets++,f.clear(),M.clear();const R=new Error("pool reset while a request was in flight");(N=a.carved)==null||N.rej(R),(b=a.fielded)==null||b.rej(R),a.carved=void 0,a.fielded=void 0;for(const w of((v=a.ready)==null?void 0:v.splice(0))??[])w();for(const[,w]of l)w.rej(R);l.clear(),c.clear();for(const w of d)w.w.terminate();o=!0,g(i)},async carve(R){await y();const N=d[0];return new Promise((b,v)=>{a.carved={res:b,rej:v},N.w.postMessage({type:"carve",halfM:R})})},async field(R){await y();const N=d[0];return new Promise((b,v)=>{a.fielded={res:b,rej:v},N.w.postMessage({type:"field",netBytes:R})})},fanOut(){o||(o=!0,S(i-d.length))},async shell(R,N,b){const v=d.filter(W=>W.ready);if(v.length===0)throw new Error("no ready worker for the shell");const w=b.radii.length,O=v.length,C=[];for(let W=0;W<O;W++){const B=Math.round(W*w/O),L=Math.round((W+1)*w/O);if(L<=B)continue;const X=++h;C.push(new Promise((k,J)=>{l.set(X,{res:k,rej:J}),c.set(X,v[W]),v[W].w.postMessage({type:"shell",id:X,ox:R,oz:N,k0:B,k1:L,tables:b})}))}return Promise.all(C)},stats(){return{workers:d.length,ready:d.length>0&&d.every(R=>R.ready),boots:E.boots,bootMs:E.bootMs,hits:E.hits,misses:E.misses,inflight:d.reduce((R,N)=>R+N.inflight,0),cached:f.size,requested:E.requested,stale:E.stale,resets:E.resets,error:E.error,reliefMatches:d.length>0&&d.every(R=>R.reliefMatches),carvedOnWorker:E.carvedOnWorker,fieldFromWorker:E.fieldFromWorker}},dispose(){m++;for(const R of d)R.w.terminate();d=[],f.clear(),M.clear()}}}const p0="v1";function Rb(n,e){const t=_.LINE_HASH_DECIMALS,i=r=>r.toFixed(t);return`${p0}:${i(n.lat)},${i(n.lon)}>${i(e.lat)},${i(e.lon)}`}function bb(n,e){const t=Rb(n,e);let i=2166136261,r=16777619;for(let o=0;o<t.length;o++){const a=t.charCodeAt(o);i=Math.imul(i^a,16777619)>>>0,r=Math.imul(r^a,2246822507)>>>0}const s=o=>o.toString(16).padStart(8,"0");return`${p0}:${s(i)}${s(r)}`}const yr=Math.PI/180,m0=6378137;function Tb(n){return n==="Sprint"?[_.CATEGORY_MIN_M,_.CATEGORY_SPRINT_MAX_M]:n==="Trek"?[_.CATEGORY_SPRINT_MAX_M,_.CATEGORY_TREK_MAX_M]:[_.CATEGORY_TREK_MAX_M,_.CATEGORY_MAX_M]}function Cb(n,e,t){const i=t/m0,r=n.lat*yr,s=Math.sin(r)*Math.cos(i)+Math.cos(r)*Math.sin(i)*Math.cos(e),o=n.lon*yr+Math.atan2(Math.sin(e)*Math.sin(i)*Math.cos(r),Math.cos(i)-Math.sin(r)*s);return{lat:Math.asin(s)/yr,lon:(o/yr+540)%360-180}}function Db(n,e,t,i,r){let s=e.lon-n.lon;s>180?s-=360:s<-180&&(s+=360);const o=Math.max(2,Math.ceil(t/r)+1),a=t/(o-1);let l=0,c=0;for(let h=0;h<o;h++){const u=h/(o-1);l=i.landAt(n.lat+(e.lat-n.lat)*u,n.lon+s*u)?0:l+a,l>c&&(c=l)}return c}function Nb(n,e,t){const[i,r]=Tb(e),s=_.RANDOM_LINE_BAND_INSET_M,o=Math.max(t.minLengthM??0,i+s),a=Math.min(t.maxLengthM??1/0,r-s);if(!(a>o))return null;const{land:l}=t,c=t.stepM??_.WATER_SCAN_STEP_M,h=t.maxAttempts??_.RANDOM_LINE_MAX_ATTEMPTS,u=Math.sin((po-a/m0/yr)*yr),d=Si(n),f=d.fork("randomLine.origin"),M=d.fork("randomLine.bearing"),E=d.fork("randomLine.length");for(let m=0;m<h;m++){const p=f.next(),g=f.next(),S=M.next()*2*Math.PI,x=E.range(o,a),D={lat:Math.asin((2*p-1)*u)/yr,lon:g*360-180},y=Cb(D,S,x),R=_u(D,y);if(Rm(R)===e&&!(Math.abs(D.lat)>po||Math.abs(y.lat)>po)&&!(!l.landAt(D.lat,D.lon)||!l.landAt(y.lat,y.lon))&&!(Db(D,y,R,l,c)>_.WATER_CROSSING_MAX_M))return{a:D,b:y,lengthM:R,category:e,lineHash:bb(D,y)}}return null}function Ib(n){if(n.format!=="beeline-coastline-v1")throw new Error(`coastline: unexpected format "${n.format}"`);const{cellDeg:e,cols:t,rows:i}=n,r=atob(n.bits),s=new Uint8Array(r.length);for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);if(s.length<t*i+7>>3)throw new Error(`coastline: bitmask is ${s.length} B, need ${t*i+7>>3}`);return{cellDeg:e,cols:t,rows:i,landCells:n.landCells,landAt(o,a){const l=Math.floor((90-o)/e);if(l<0||l>=i)return!1;const c=(Math.floor((a+180)/e)%t+t)%t,h=l*t+c;return(s[h>>3]>>(h&7)&1)===1}}}let $f=null;function Ob(n="/data/coastline.json"){return $f??($f=fetch(n).then(async e=>{if(!e.ok)throw new Error(`coastline: ${n} → HTTP ${e.status}`);return Ib(await e.json())})),$f}const Nc={a:null,b:null,lengthM:null,bearingDeg:null,category:null,lineHash:null,valid:!1,reasons:[]},Pb=`
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
`;function Xf(n){const e=document.createElement("style");e.textContent=Pb,document.head.appendChild(e);const t=document.createElement("div");t.className="bl-planner",t.style.display="none",n.appendChild(t);const i=document.createElement("div");i.className="bl-planner-hint",i.textContent="click A then B  ·  M to close",t.appendChild(i);let r=null,s=null,o=null,a=null,l=null,c=null,h="A",u=null;const d=()=>{r||(r=document.createElement("div"),r.className="bl-planner-confirm",r.style.display="none",s=document.createElement("span"),o=document.createElement("button"),o.type="button",o.textContent="Walk this line",a=document.createElement("button"),a.type="button",a.textContent="start at A",l=document.createElement("button"),l.type="button",l.textContent="random line",r.append(s,l,a,o),t.appendChild(r))};let f=null,M=!1,E=null,m=null;const p=[],g=()=>m||(m=(async()=>{const[{createPlannerMap:S},{createLineDraft:x}]=await Promise.all([Uh(()=>import("./plannerMap-CXrbnkvS.js"),__vite__mapDeps([0,1]),import.meta.url),Uh(()=>import("./lineDraft-B5Ad7mm1.js"),[],import.meta.url)]);E=x(M?{validate:{deferDataRules:!0}}:{}),f=S(t),f.onPick(y=>{E.pick(y);const R=E.state();f.setLine(R.a,R.b)});for(const y of p.splice(0))E.pick(y);const D=E.state();f.setLine(D.a,D.b)})(),m);return{mount:g,mounted:()=>f!==null,layers:()=>(f==null?void 0:f.layers())??{basemap:"",hillshade:null,attribution:[]},pick:S=>{if(E){const x=E.pick(S);f==null||f.setLine(x.a,x.b)}else p.push(S),g()},draft:()=>(E==null?void 0:E.state())??Nc,openEntry:async()=>(M=!0,d(),t.style.setProperty("inset","0","important"),t.style.borderRadius="0",r.style.display="flex",i.textContent="click your start (A), then your destination (B)",t.style.display="block",await g(),f==null||f.map.jumpTo({center:[10,25],zoom:1.4}),new Promise(S=>{let x=h;a.onclick=()=>{x=x==="A"?"B":"A",h=x,D()},l.onclick=async()=>{const R=await Ob(),N=tl[Math.floor(Math.random()*tl.length)],b=Nb(Math.random()*2147483647|0,N,{land:R});if(!b)return;const v={a:b.a,b:b.b},w=E==null?void 0:E.state();w!=null&&w.a&&!w.b&&(E==null||E.pick(v.a)),E==null||E.pick(v.a),E==null||E.pick(v.b),f==null||f.setLine(v.a,v.b),f==null||f.map.fitBounds([[Math.min(v.a.lon,v.b.lon),Math.min(v.a.lat,v.b.lat)],[Math.max(v.a.lon,v.b.lon),Math.max(v.a.lat,v.b.lat)]],{padding:90,duration:600}),D()},window.__entry={pick:R=>{E==null||E.pick(R);const N=E==null?void 0:E.state();f==null||f.setLine((N==null?void 0:N.a)??null,(N==null?void 0:N.b)??null),D()},draft:()=>(E==null?void 0:E.state())??Nc,spawn:R=>{x=R,h=R,D()},confirm:()=>o.click()};const D=()=>{const R=(E==null?void 0:E.state())??Nc;o.disabled=!R.valid,a.textContent=`start at ${x}`,s.textContent=R.valid?`${((R.lengthM??0)/1e3).toFixed(1)} km · walk starts at ${x} · land check at survey`:R.reasons.length?R.reasons.join("  ·  "):"pick A and B"};f==null||f.onPick(()=>D());const y=window.setInterval(D,250);D(),o.onclick=()=>{const R=E==null?void 0:E.state();!(R!=null&&R.valid)||!R.a||!R.b||(window.clearInterval(y),delete window.__entry,r.style.display="none",t.style.removeProperty("inset"),t.style.removeProperty("border-radius"),t.style.display="none",M=!1,S({a:R.a,b:R.b,spawn:x}))}})),onAbandon:S=>{c=S},open:async()=>{if(t.style.display="block",c&&!u){u=document.createElement("div"),u.className="bl-planner-abandon";const S=document.createElement("button");S.type="button",S.textContent="abandon & replan";let x=0;S.addEventListener("click",()=>{if(Date.now()-x<4e3){c==null||c();return}x=Date.now(),S.textContent="click again — the run is LOST",window.setTimeout(()=>{S.textContent="abandon & replan",x=0},4e3)}),u.appendChild(S),t.appendChild(u)}await g()},close:()=>{u==null||u.remove(),u=null,t.style.display="none"},isOpen:()=>t.style.display!=="none",destroy:()=>{f==null||f.destroy(),f=null,E=null,t.remove(),e.remove()}}}const Lb=4;function Ub(n){const e=n.getExtension("EXT_disjoint_timer_query_webgl2"),t=[];let i=null,r=null,s=!1;const o=()=>{if(e){if(n.getParameter(e.GPU_DISJOINT_EXT)){for(const a of t)n.deleteQuery(a);t.length=0;return}for(;t.length>0;){const a=t[0];if(!n.getQueryParameter(a,n.QUERY_RESULT_AVAILABLE))break;r=n.getQueryParameter(a,n.QUERY_RESULT)/1e6,n.deleteQuery(a),t.shift()}}};return{available:e!==null,begin(){if(!e||!s||i||(o(),t.length>=Lb))return;const a=n.createQuery();a&&(i=a,n.beginQuery(e.TIME_ELAPSED_EXT,a))},end(){!e||!i||(n.endQuery(e.TIME_ELAPSED_EXT),t.push(i),i=null)},lastMs(){return s=!0,o(),r}}}const Ga={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fb=new Co(-1,1,1,-1,0,1);class kb extends At{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const Bb=new kb;class Cu{constructor(e){this._mesh=new vt(Bb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Gb extends Ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zi.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kf extends Ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class zb extends Ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Hb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new st);this._width=i.width,this._height=i.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gb(Ga),this.copyPass.material.blending=Kt,this.clock=new V1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kf!==void 0&&(o instanceof Kf?i=!0:o instanceof zb&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vb extends Ws{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Wb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class $b extends Ws{constructor(){super();const e=Wb;this.uniforms=Zi.clone(e.uniforms),this.material=new B1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Cu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===np?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ip?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===op&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ma={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new st},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new _t},cameraProjectionMatrixInverse:{value:new _t},cameraWorldMatrix:{value:new _t},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new ue(-1,-1,-1)},sceneBoxMax:{value:new ue(1,1,1)}},vertexShader:`

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
		}`},ga={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ic={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Xb(n=5){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Kb(e),i=t.length,r=new Uint8Array(i*4);for(let o=0;o<i;++o){const a=t[o],l=2*Math.PI*a/i,c=new ue(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}const s=new Ci(r,e,e);return s.wrapS=sr,s.wrapT=sr,s.needsUpdate=!0,s}function Kb(n){const e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0);let r=Math.floor(e/2),s=e-1;for(let o=1;o<=t;){if(r===-1&&s===e?(s=e-2,r=0):(s===e&&(s=0),r<0&&(r=e-1)),i[r*e+s]!==0){s-=2,r++;continue}else i[r*e+s]=o++;s++,r--}return i}const _a={defines:{SAMPLES:16,SAMPLE_VECTORS:g0(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new st},cameraProjectionMatrixInverse:{value:new _t},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function g0(n,e,t){const i=Yb(n,e,t);let r="vec3[SAMPLES](";for(let s=0;s<n;s++){const o=i[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<n-1?",":")"}`}return r}function Yb(n,e,t){const i=[];for(let r=0;r<n;r++){const s=2*Math.PI*e*r/n,o=Math.pow(r/(n-1),t);i.push(new ue(Math.cos(s),Math.sin(s),o))}return i}class qb{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}dot4(e,t,i,r,s){return e[0]*t+e[1]*i+e[2]*r+e[3]*s}noise(e,t){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,M=e-d,E=t-f;let m,p;M>E?(m=1,p=0):(m=0,p=1);const g=M-m+h,S=E-p+h,x=M-1+2*h,D=E-1+2*h,y=l&255,R=c&255,N=this.perm[y+this.perm[R]]%12,b=this.perm[y+m+this.perm[R+p]]%12,v=this.perm[y+1+this.perm[R+1]]%12;let w=.5-M*M-E*E;w<0?i=0:(w*=w,i=w*w*this.dot(this.grad3[N],M,E));let O=.5-g*g-S*S;O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[b],g,S));let C=.5-x*x-D*D;return C<0?s=0:(C*=C,s=C*C*this.dot(this.grad3[v],x,D)),70*(i+r+s)}noise3d(e,t,i){let r,s,o,a;const c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(i+c),f=1/6,M=(h+u+d)*f,E=h-M,m=u-M,p=d-M,g=e-E,S=t-m,x=i-p;let D,y,R,N,b,v;g>=S?S>=x?(D=1,y=0,R=0,N=1,b=1,v=0):g>=x?(D=1,y=0,R=0,N=1,b=0,v=1):(D=0,y=0,R=1,N=1,b=0,v=1):S<x?(D=0,y=0,R=1,N=0,b=1,v=1):g<x?(D=0,y=1,R=0,N=0,b=1,v=1):(D=0,y=1,R=0,N=1,b=1,v=0);const w=g-D+f,O=S-y+f,C=x-R+f,W=g-N+2*f,B=S-b+2*f,L=x-v+2*f,X=g-1+3*f,k=S-1+3*f,J=x-1+3*f,Z=h&255,ee=u&255,me=d&255,K=this.perm[Z+this.perm[ee+this.perm[me]]]%12,j=this.perm[Z+D+this.perm[ee+y+this.perm[me+R]]]%12,Q=this.perm[Z+N+this.perm[ee+b+this.perm[me+v]]]%12,H=this.perm[Z+1+this.perm[ee+1+this.perm[me+1]]]%12;let $=.6-g*g-S*S-x*x;$<0?r=0:($*=$,r=$*$*this.dot3(this.grad3[K],g,S,x));let re=.6-w*w-O*O-C*C;re<0?s=0:(re*=re,s=re*re*this.dot3(this.grad3[j],w,O,C));let oe=.6-W*W-B*B-L*L;oe<0?o=0:(oe*=oe,o=oe*oe*this.dot3(this.grad3[Q],W,B,L));let de=.6-X*X-k*k-J*J;return de<0?a=0:(de*=de,a=de*de*this.dot3(this.grad3[H],X,k,J)),32*(r+s+o+a)}noise4d(e,t,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,M;const E=(e+t+i+r)*l,m=Math.floor(e+E),p=Math.floor(t+E),g=Math.floor(i+E),S=Math.floor(r+E),x=(m+p+g+S)*c,D=m-x,y=p-x,R=g-x,N=S-x,b=e-D,v=t-y,w=i-R,O=r-N,C=b>v?32:0,W=b>w?16:0,B=v>w?8:0,L=b>O?4:0,X=v>O?2:0,k=w>O?1:0,J=C+W+B+L+X+k,Z=o[J][0]>=3?1:0,ee=o[J][1]>=3?1:0,me=o[J][2]>=3?1:0,K=o[J][3]>=3?1:0,j=o[J][0]>=2?1:0,Q=o[J][1]>=2?1:0,H=o[J][2]>=2?1:0,$=o[J][3]>=2?1:0,re=o[J][0]>=1?1:0,oe=o[J][1]>=1?1:0,de=o[J][2]>=1?1:0,Me=o[J][3]>=1?1:0,V=b-Z+c,Ae=v-ee+c,ve=w-me+c,Ie=O-K+c,be=b-j+2*c,Ne=v-Q+2*c,se=w-H+2*c,fe=O-$+2*c,G=b-re+3*c,P=v-oe+3*c,ne=w-de+3*c,pe=O-Me+3*c,ae=b-1+4*c,Ee=v-1+4*c,Ue=w-1+4*c,Pe=O-1+4*c,Oe=m&255,Ge=p&255,le=g&255,xe=S&255,De=a[Oe+a[Ge+a[le+a[xe]]]]%32,Te=a[Oe+Z+a[Ge+ee+a[le+me+a[xe+K]]]]%32,Y=a[Oe+j+a[Ge+Q+a[le+H+a[xe+$]]]]%32,ce=a[Oe+re+a[Ge+oe+a[le+de+a[xe+Me]]]]%32,Se=a[Oe+1+a[Ge+1+a[le+1+a[xe+1]]]]%32;let q=.6-b*b-v*v-w*w-O*O;q<0?h=0:(q*=q,h=q*q*this.dot4(s[De],b,v,w,O));let A=.6-V*V-Ae*Ae-ve*ve-Ie*Ie;A<0?u=0:(A*=A,u=A*A*this.dot4(s[Te],V,Ae,ve,Ie));let U=.6-be*be-Ne*Ne-se*se-fe*fe;U<0?d=0:(U*=U,d=U*U*this.dot4(s[Y],be,Ne,se,fe));let T=.6-G*G-P*P-ne*ne-pe*pe;T<0?f=0:(T*=T,f=T*T*this.dot4(s[ce],G,P,ne,pe));let I=.6-ae*ae-Ee*Ee-Ue*Ue-Pe*Pe;return I<0?M=0:(I*=I,M=I*I*this.dot4(s[Se],ae,Ee,Ue,Pe)),27*(h+u+d+f+M)}}class Jn extends Ws{constructor(e,t,i,r,s,o,a){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xb(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new wn(this.width,this.height,{type:bi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Gt({defines:Object.assign({},ma.defines),uniforms:Zi.clone(ma.uniforms),vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,blending:Kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new G1,this.normalMaterial.blending=Kt,this.pdMaterial=new Gt({defines:Object.assign({},_a.defines),uniforms:Zi.clone(_a.uniforms),vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Gt({defines:Object.assign({},ga.defines),uniforms:Zi.clone(ga.uniforms),vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader,blending:Kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Gt({uniforms:Zi.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Wc,blendDst:no,blendEquation:Kn,blendSrcAlpha:Vc,blendDstAlpha:no,blendEquationAlpha:Kn}),this.blendMaterial=new Gt({uniforms:Zi.clone(Ic.uniforms),vertexShader:Ic.vertexShader,fragmentShader:Ic.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ep,blendSrc:Wc,blendDst:no,blendEquation:Kn,blendSrcAlpha:Vc,blendDstAlpha:no,blendEquationAlpha:Kn}),this.fsQuad=new Cu(null),this.originalClearColor=new We,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new hu,this.depthTexture.format=Nr,this.depthTexture.type=Dr,this.normalRenderTarget=new wn(this.width,this.height,{minFilter:Bt,magFilter:Bt,type:bi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=g0(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Jn.OUTPUT.Off:break;case Jn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Jn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Jn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Jn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Jn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Jn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const r=t.get(i);i.visible=r}),t.clear()}generateNoise(e=64){const t=new qb,i=e*e*4,r=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;r[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,r[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,r[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,r[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const s=new Ci(r,e,e,tn,An);return s.wrapS=sr,s.wrapT=sr,s.needsUpdate=!0,s}}Jn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function Zb(n,e,t,i=4,r=!1,s=1,o=0,a=1){const l=n.getSize(new st),c=n.getPixelRatio(),h=M=>new wn(l.x*c,l.y*c,{type:bi,samples:M});let u=h(i);const d=new Hb(n,u);d.setPixelRatio(c),d.setSize(l.x,l.y),d.addPass(new Vb(e,t));let f=null;return r&&(f=new Jn(e,t,l.x*c,l.y*c),f.updateGtaoMaterial({radius:1,distanceExponent:1,thickness:1,scale:s,samples:16,screenSpaceRadius:!1}),o!==0&&(f.output=o),f.blendIntensity=a,d.addPass(f)),d.addPass(new $b),{render:()=>d.render(),setSize:(M,E)=>{const m=n.getPixelRatio();d.setPixelRatio(m),d.setSize(M,E),f==null||f.setSize(M*m,E*m)},get samples(){return u.samples},get aoEnabled(){return f!==null},get aoBlend(){return f===null?null:f.blendIntensity},setSamples:M=>{if(M===u.samples)return;const E=h(M);d.reset(E),u=E}}}const jb=n=>n===0?"off":`${n}×`;function Qb(n,e){const t={...e.initial};let i=null,r=[],s=[],o=null;function a(){const h=Xe("div","settings",n.ui.root??document.body);h.hidden=!0,h.dataset.field="settings";const u=Xe("div","settings-title",h);u.textContent="SETTINGS";const d=Xe("div","settings-row",h);d.dataset.field="settings-aa",Xe("div","settings-label",d).textContent="antialiasing";const f=Xe("div","settings-opts",d);r=e.aaLevels.map(E=>{const m=Xe("button","settings-opt",f);return m.type="button",m.textContent=jb(E),m.dataset.aa=String(E),m.addEventListener("click",()=>{t.aaSamples=E,l(),e.onChange({...t})}),m});const M=Xe("div","settings-note",h);return M.textContent="O or Esc to close · the clock keeps running",o=Xe("div","settings-note settings-warn",h),o.dataset.field="settings-aa-warn",l(),h}function l(){for(const h of r)h.setAttribute("aria-pressed",String(Number(h.dataset.aa)===t.aaSamples));for(const h of s)h.setAttribute("aria-pressed",String(h.dataset.ao==="true"===t.ao));o&&(o.textContent=t.aaSamples===0?"antialiasing off also hardens the water edge and the rock fade":"")}const c=()=>i??(i=a());return{toggle:()=>{const h=c();h.hidden=!h.hidden},setVisible:h=>{!h&&i===null||(c().hidden=!h)},visible:()=>i!==null&&!i.hidden,get:()=>({...t}),mounted:()=>i!==null}}const Jb="beeline.settings.v1",eo={aaSamples:_.AA_SAMPLES_DEFAULT,ao:!1};function eT(n){return _.AA_SAMPLES_OPTIONS.filter(e=>e===0||e<=n)}function tT(n){const e=n.read();if(!e)return{...eo};try{const t=JSON.parse(e);if(typeof t!="object"||t===null)return{...eo};const i=t;return{aaSamples:typeof i.aaSamples=="number"?i.aaSamples:eo.aaSamples,ao:typeof i.ao=="boolean"?i.ao:eo.ao}}catch{return{...eo}}}function nT(n,e){n.write(JSON.stringify(e))}function iT(n,e){if(e.includes(n.aaSamples))return n;const t=e.filter(r=>r<n.aaSamples),i=t.length>0?Math.max(...t):Math.min(...e);return{...n,aaSamples:i}}const rT="beeline.save.v1";function sT(n=rT){const e=()=>{try{return globalThis.localStorage??null}catch{return null}};return{read:()=>{var t;try{return((t=e())==null?void 0:t.getItem(n))??null}catch{return null}},write:t=>{var i;try{(i=e())==null||i.setItem(n,t)}catch{}}}}const oT={spring:{bias:_.SEASON_SPRING_OVERCAST,amp:.45},summer:{bias:_.SEASON_SUMMER_OVERCAST,amp:.3},autumn:{bias:_.SEASON_AUTUMN_OVERCAST,amp:.4},winter:{bias:_.SEASON_WINTER_OVERCAST,amp:.3}},aT=11843773,xl=n=>Math.min(1,Math.max(0,n)),lT=n=>{const e=xl(n);return e*e*(3-2*e)},_0=_.TERRAIN_WIND_FROM_DEG*Math.PI/180,za=Math.sin(_0),Ha=-Math.cos(_0);function M0(n,e){return(n*za+e*Ha)/_.WEATHER_FRONT_SPAN_M*_.WEATHER_PERIOD_S}function cT(n,e){const t=_.WEATHER_PERIOD_S,i=n%1e3*.001*Math.PI*2;return .55*Math.sin(2*Math.PI*e/t+i)+.3*Math.sin(2*Math.PI*e/(t*.37)+i*1.7)+.15*Math.sin(2*Math.PI*e/(t*2.63)+i*.4)}function ul(n,e,t,i=0,r=0){const{bias:s,amp:o}=oT[t],a=lT(e/_.WEATHER_ONSET_S);return xl(a*(s+o*cT(n,e+M0(i,r))))}function E0(n,e,t,i=0,r=0){const s=_.WEATHER_WET_TAU_S,o=_.WEATHER_WET_SAMPLES;let a=0;for(let l=0;l<o;l++){const c=l*s/(o-1),h=e-c;if(h<0)continue;const u=ul(n,h,t,i,r)*Math.exp(-c/s);u>a&&(a=u)}return xl(a)}function hT(n,e,t,i,r){const s=_.HEMI_INTENSITY,o=_.FOG_HALF_DISTANCE_SEA_M,a=_.GROUNDCOVER_SWAY_AMP;let l=n.lights.sun.intensity;const c={zenith:new We,horizon:new We,glow:new We},h=n.fogBands.map(()=>new We),u=new We(aT),d=new We;let f="",M=null,E=null,m=null,p=0,g=0;const S=()=>{l=n.lights.sun.intensity,c.zenith.copy(n.skyZenith),c.horizon.copy(n.skyHorizon),c.glow.copy(n.sunGlow),n.fogBands.forEach((y,R)=>h[R].copy(y.color))};function x(y){p=y;const R={sunI:l,hemiI:s,fogHalfM:o,sway:a},N=_.WEATHER_SKY_MIX*y;n.skyZenith.copy(c.zenith).lerp(u,N),n.skyHorizon.copy(c.horizon).lerp(u,N),n.sunGlow.copy(c.glow).lerp(u,N*1.15>1?1:N*1.15);for(let b=0;b<n.fogBands.length;b++)n.fogBands[b].color!==n.skyHorizon&&n.fogBands[b].color.copy(d.copy(h[b]).lerp(u,N));n.fogK.y=R.fogHalfM*(1-_.WEATHER_FOG_GAIN*y),n.lights.sun.intensity=R.sunI*(1-(1-_.WEATHER_SUN_DIM)*y),n.lights.hemi.intensity=R.hemiI*(1+(_.WEATHER_AMBIENT_LIFT-1)*y),t.uWind.value.w=t.override??R.sway*(1+(_.WEATHER_WIND_GAIN-1)*y),n.cloud.x=y}function D(y,R,N,b,v){let w=0;if(m!==null)w=m;else if(M===null){const W=_.WEATHER_FRONT_PROBE_M;w=(ul(i,y,R,N+za*W,b+Ha*W)-v)/W}const O=W=>o*(1-_.WEATHER_FOG_GAIN*xl(W)),C=w===0?0:(O(v+w*_.WEATHER_FRONT_PROBE_M)/O(v)-1)/_.WEATHER_FRONT_PROBE_M;n.front.set(za,Ha,w,C)}return{update(y){const R=e.get();R!==f&&(S(),f=R);const N=y.clock.simTick*_.SIM_DT,b=y.player.x,v=y.player.z,w=M??ul(i,N,R,b,v);x(w),D(N,R,b,v,w),g=E??M??E0(i,N,R,b,v);for(const O of r)O.uWet.value=g},setOverride(y){M=y},setWetOverride(y){E=y},setFrontOverride(y){m=y},front:()=>({dirX:n.front.x,dirZ:n.front.y,dOvercastPerM:n.front.z,dFogMulPerM:n.front.w}),overcast:()=>p,wetness:()=>g,snapshot:()=>({overcast:p,wetness:g,fogHalfM:n.fogK.y,sunI:n.lights.sun.intensity,hemiI:n.lights.hemi.intensity,swayAmp:t.uWind.value.w,skyZenith:n.skyZenith.getHex(),cloudCover:n.cloud.x}),dispose(){M=null,E=null,m=null,x(0),n.front.set(za,Ha,0,0),g=0;for(const y of r)y.uWet.value=0}}}const to={supported:!1,bootMs:0,cacheHit:!1,channelCells:0,modeKeyMatches:!1,cold:!1,worldHalfM:0,gridMs:0,transferMs:0,equal:!1,maxAbsDiff:NaN,comparatorSeparates:!1,n:0,table:[]};async function uT(n,e,t={}){const i=t.pitches&&t.pitches.length>0?t.pitches:[4],r=Math.max(1,Math.floor(t.repeats??1)),s=t.cold===!0,o=s?`${e}-spike-cold-${Date.now()}`:e;let a;try{a=new Worker(new URL(""+new URL("meshWorker-DCs2YHlS.js",import.meta.url).href,import.meta.url),{type:"module"})}catch(l){return{...to,cold:s,error:String((l==null?void 0:l.message)??l)}}try{const l=()=>new Promise((m,p)=>{a.onmessage=g=>m(g.data),a.onerror=g=>p(new Error(g.message||"worker error"))}),c=l();a.postMessage({type:"boot",dcKey:o,filterHalfM:n.filterExtentM(),store:!s});const h=await c;if(h.type!=="ready")return{...to,cold:s,error:h.message??"boot failed"};const u=67,d=-400,f=-400,M=[];for(const m of i){const p=[],g=[];let S=0,x=null,D=0,y=!0,R=0;for(let v=0;v<r;v++){const w=l(),O=performance.now();a.postMessage({type:"grid",ox:d,oz:f,g:u,step:m});const C=await w,W=performance.now()-O;if(C.type!=="grid")return{...to,cold:s,error:C.message??`grid failed at pitch ${m}`};if(p.push(C.gridMs),v===0)S=Math.max(0,W-C.gridMs),x=C.h;else for(let X=0;X<C.h.length;X++)if(C.h[X]!==x[X]){y=!1;break}const B=performance.now(),L=new Float64Array(u*u);for(let X=0;X<u;X++)for(let k=0;k<u;k++)L[X*u+k]=n.heightAt(d+(k-1)*m,f+(X-1)*m,m);if(g.push(performance.now()-B),v===0){const X=Float64Array.from(L);X[123]+=.001;for(let k=0;k<X.length;k++){const J=Math.abs(X[k]-L[k]);J>R&&(R=J)}}for(let X=0;X<L.length;X++){const k=Math.abs(C.h[X]-L[X]);k>D&&(D=k)}}let N=Math.max(Math.abs(d-m),Math.abs(f-m),Math.abs(d+(u-2)*m),Math.abs(f+(u-2)*m));const b={pitch:m,n:u*u,workerMs:p,mainMs:g,transferMs:S,maxAbsDiff:D,equal:D===0,repeatsConsistent:y,comparatorSeparates:R>0,latticeInside:!0};if(t.fresh===!0){const v=d-u*m,w=f-u*m,O=l();a.postMessage({type:"grid",ox:v,oz:w,g:u,step:m});const C=await O;if(C.type!=="grid")return{...to,cold:s,error:C.message??`fresh grid failed at pitch ${m}`};const W=performance.now(),B=new Float64Array(u*u);for(let X=0;X<u;X++)for(let k=0;k<u;k++)B[X*u+k]=n.heightAt(v+(k-1)*m,w+(X-1)*m,m);b.freshMainMs=performance.now()-W,b.freshWorkerMs=C.gridMs;let L=0;for(let X=0;X<B.length;X++){const k=Math.abs(C.h[X]-B[X]);k>L&&(L=k)}b.freshMaxAbsDiff=L,b.equal=b.equal&&L===0,b.maxAbsDiff=Math.max(b.maxAbsDiff,L),N=Math.max(N,Math.abs(v-m),Math.abs(w-m))}b.latticeInside=N<=h.halfM,M.push(b)}const E=M[0];return{supported:!0,bootMs:h.bootMs,cacheHit:h.cacheHit,channelCells:h.channelCells,modeKeyMatches:h.modeKey===Tr(),cold:s,worldHalfM:h.halfM,gridMs:E.workerMs[0],transferMs:E.transferMs,equal:M.every(m=>m.equal),maxAbsDiff:Math.max(...M.map(m=>m.maxAbsDiff)),comparatorSeparates:M.every(m=>m.comparatorSeparates),n:E.n,table:M}}catch(l){return{...to,cold:s,error:String((l==null?void 0:l.message)??l)}}finally{a.terminate()}}const Yf={straight:0,detour60:60,detour120:120};function dT(n,e){const t=n.b.x-n.a.x,i=n.b.z-n.a.z,r=e*_.DETOUR_SCRIPT_SIDE/n.lengthM;return{x:(n.a.x+n.b.x)/2-i*r,z:(n.a.z+n.b.z)/2+t*r}}function fT(n,e,t,i){if(t.phase==="finished"||e>=_.SCRIPT_MAX_TICKS)return null;let r=t.b;if(Yf[n]>0){const s=dT(t,Yf[n]);ml(s,i)>_.SCRIPT_WAYPOINT_RADIUS_M&&t.alongM<t.lengthM/2&&(r=s)}return{fwd:1,strafe:0,yaw:lm(i,r),pitch:0,sprint:!1}}function pT(n,e,t,i=_.SIM_DT){for(let r=0;;r++){const s=fT(e,r,n.mission,n.player);if(!s||(t(s,i),n.mission.phase!=="walking"))break}return wo(n.mission)}function mT(n,e,t,i=_.SIM_DT){for(const r of e)t(r,i);return wo(n.mission)}function gT(n,e,t={}){const i=t.species??Object.keys(Pr),r=t.count??6,s=t.spacingM??9,o=t.lods??["near","mid"],a=t.seed??7e3,l=new ri;l.name="tree-lab";const c=[],h=[],u=[];let d=0,f=0;for(const M of i){const E=Pr[M];if(E){for(const m of o){const p=il(E,a+f*131),g=cl(p,E,m),S=Xh(E.bark),x=rl(E.foliage),D=E.bark==="bands-white"?.95:E.bark==="ridges-deep"?.34:.6,y=Uf(n,S,e,{heightM:p.heightM,stiffness:D}),R=Ff(n,x,e,{heightM:p.heightM,stiffness:D}),N=new uo(g.wood.geometry,y,r),b=g.foliage.quads>0?new uo(g.foliage.geometry,R,r):null,v=new _t,w=t.axisX??{x:1,z:0},O=t.axisZ??{x:0,z:1};for(let C=0;C<r;C++){const W=(t.originX??0)+w.x*C*s+O.x*f*s,B=(t.originZ??0)+w.z*C*s+O.z*f*s,L=.85+(C*37+f*11)%30/100;v.makeScale(L,L,L).setPosition(W,t.groundY??0,B),N.setMatrixAt(C,v),b==null||b.setMatrixAt(C,v),m===o[0]&&h.push(new ue(W,t.groundY??0,B))}N.instanceMatrix.needsUpdate=!0,N.frustumCulled=!1,b&&(b.instanceMatrix.needsUpdate=!0,b.frustumCulled=!1),l.add(N),b&&l.add(b),c.push({species:M,lod:m,wood:N,foliage:b}),d+=g.triangles*r,f++}if(t.renderer){const m=il(E,a+f*131),p=cl(m,E,"near"),g=Xh(E.bark),S=rl(E.foliage),x=new ri;x.add(new vt(p.wood.geometry,Uf(n,g,e,{heightM:m.heightM}))),p.foliage.quads>0&&x.add(new vt(p.foliage.geometry,Ff(n,S,e,{heightM:m.heightM})));const D=bu([p.wood.geometry,p.foliage.geometry]),y=Ru(t.renderer,x,D.heightM,D.halfWidthM);u.push(y);const R=new uo(o0(D.heightM,y.frustumHalfM),s0(y),r),N=new _t,b=t.axisX??{x:1,z:0},v=t.axisZ??{x:0,z:1};for(let w=0;w<r;w++)N.makeScale(1,1,1).setPosition((t.originX??0)+b.x*w*s+v.x*f*s,t.groundY??0,(t.originZ??0)+b.z*w*s+v.z*f*s),R.setMatrixAt(w,N);R.instanceMatrix.needsUpdate=!0,R.frustumCulled=!1,l.add(R),c.push({species:M,lod:"far",wood:R,foliage:null}),d+=2*r,f++}}}return{group:l,meshes:c,positions:h,triangles:d,drawCalls:c.reduce((M,E)=>M+1+(E.foliage?1:0),0),dispose:()=>{var M;for(const E of c)E.wood.geometry.dispose(),E.wood.material.dispose(),(M=E.foliage)==null||M.geometry.dispose(),E.foliage&&E.foliage.material.dispose();for(const E of u)E.dispose();l.clear()}}}function qf(n){const e=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let t=2166136261,i=16777619;for(let r=0;r<e.length;r++)t=Math.imul(t^e[r],16777619)>>>0,i=Math.imul(i^e[r],2246822507)>>>0;return t.toString(16).padStart(8,"0")+i.toString(16).padStart(8,"0")}let Pt=null;function _T(n){const{ctx:e}=n,t=e.world.query,i=()=>{const s=e.renderer.getContext(),o=s.getExtension("WEBGL_debug_renderer_info");return String(o?s.getParameter(o.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER))},r=s=>{n.resetToA(),n.arrival.skip(),n.handOver(),n.log.clear();const o=n.obstacles.enabled();n.obstacles.setEnabled(!1);let a;try{a=s((l,c)=>{n.log.record(l),n.stepSim(l,c)})}finally{n.obstacles.setEnabled(o)}return e.mission.phase==="finished"&&n.finish(),tr(e),Promise.resolve(a)};return{data:{mode:()=>e.data.mode,manifest:()=>e.data.manifest,verifyFixtureHashes:()=>{if(!e.data.manifest)throw new Error("no manifest on a live-line boot — fixture hashes do not apply");return _S(e.data.manifest)},liveFetchThrows:async()=>{try{return await new yh().getTileBytes(11,0,0),!1}catch{return!0}}},sim:{stepFrames:s=>{for(const o of s)n.stepSim(o,_.SIM_DT)},setInputOverride:s=>{n.inputOverride.frame=s?{...s}:null}},world:{heightAt:(s,o,a)=>t.heightAt(s,o,a),landformHeightAt:(s,o,a)=>t.landformHeightAt(s,o,a),landformDemHeightAt:(s,o)=>t.landformDemHeightAt(s,o),slopeDegAt:(s,o)=>t.slopeDegAt(s,o),waterDepthAt:(s,o)=>t.waterDepthAt(s,o),maxHeightBoundM:()=>t.maxHeightBoundM,maxHeightBoundParts:()=>t.maxHeightBoundParts,coverClassAt:(s,o)=>e.world.cover.classAt(s,o),rawCoverClassAt:(s,o)=>e.world.cover.rawClassAt(s,o),renature:()=>({cover:e.world.cover.renature,dem:t.renature()}),channelDistAt:(s,o)=>t.channelDistAt(s,o),frame:()=>({lat:e.world.frame.lat,lon:e.world.frame.lon}),lonLatToWorld:(s,o)=>oi(e.world.frame,s,o),worldToLonLat:(s,o)=>yn(e.world.frame,s,o),waterBodies:()=>e.world.water.bodies.map(s=>({id:s.id,surfaceY:s.surfaceY,areaM2:s.areaM2}))},terrain:{edgeSamples:s=>n.terrain.edgeSamples(s),setLoadRadius:s=>n.terrain.setLoadRadius(s),setFarShellVisible:s=>n.terrain.setFarShellVisible(s),drained:()=>n.terrain.drained(),canopy:()=>{var a;const s=n.terrain.canopy();if(!s)return null;const o=(a=n.terrain.material().userData.uniforms)==null?void 0:a.uCanopy;return{on:((o==null?void 0:o.value.x)??0)>0,color:[s.color.r,s.color.g,s.color.b],koppen:s.koppen,species:s.species,grid:[s.origin.z,s.origin.w]}},drainNow:()=>n.terrain.drainNow(e),lodStats:()=>n.terrain.lodStats(),setLodFineRings:s=>n.terrain.setLodFineRings(s),stats:()=>n.terrain.stats(),recentLoads:()=>n.terrain.recentLoads(),chunkDigest:()=>n.terrain.chunkDigest(),shellDigest:()=>n.terrain.shellDigest(),workerSpike:s=>uT(t,n.dcKey,s),shellPitchAt:s=>K1(s),shellSinkAt:s=>kp(s)},player:{pos:()=>({x:e.player.x,y:e.player.y,z:e.player.z}),setPos:(s,o)=>{Kh(e.player,s,o,t),tr(e)},yaw:()=>e.player.yaw,setYaw:s=>{e.input.current.yaw=s,e.player.yaw=s,tr(e)},pitch:()=>e.player.pitch,setPitch:s=>{e.input.current.pitch=s,e.player.pitch=s,tr(e)},mode:()=>e.player.mode,speed:()=>e.player.speedMps},mission:{phase:()=>e.mission.phase,state:()=>JSON.parse(JSON.stringify(e.mission)),result:()=>wo(e.mission),formatResult:()=>bm(wo(e.mission)),trackSamples:()=>e.mission.track.map(s=>({...s})),a:()=>({...e.mission.a}),b:()=>({...e.mission.b}),xtd:()=>e.mission.xtdM,reset:()=>{n.resetToA(),n.arrival.start()},skipArrival:()=>n.arrival.skip()},...n.factorField?{factors:{at:(s,o)=>n.factorField.at(s,o),absentCounts:()=>n.factorField.absentCounts(),inventory:()=>n.factorField.inventory()}}:{},...n.bakeState?{bake:{hash:()=>qf(n.bakeState.baked),wallMs:()=>n.bakeState.wallMs,budget:()=>n.bakeState.budget,b1Clamped:()=>n.bakeState.b1Clamped,run:()=>{const s=n.runBake();return{hash:qf(s.baked),wallMs:s.wallMs}},constraints:()=>n.bakeState.constraints}}:{},erosion:{mode:()=>Yt(),setMode:s=>Ki(s),shipped:()=>gl,isShipped:()=>hS(),key:()=>Tr(),stages:()=>_l,params:()=>nr(),setParams:s=>ja(s),deltaAt:(s,o)=>t.erosionFilterAt(s,o),drainageParams:()=>Ms(),setDrainageParams:s=>Qa(s),exportDrainageNet:()=>{var o;const s=((o=n.getDrainageNet)==null?void 0:o.call(n))??null;return s?{key:n.dcKey,bytes:mo(s)}:null},drainageAt:(s,o)=>t.drainageAt(s,o),bound:()=>Ss(nr()),apply:()=>{var a;const s=performance.now();let o=!1;if(Ia())t.clearBakedBand();else if(n.runBake){const l=n.runBake();t.applyBakedBand(l.baked,l.g,l.cellM,l.halfM),o=!0}return(a=n.runDrainage)==null||a.call(n),t.setDetailOverrides(t.detailOverrides()),n.terrain.rebuildAll(),{modeKey:Tr(),bakeRan:o,wallMs:performance.now()-s}}},...n.tuner?{tuner:{overrides:()=>n.tuner.overrides(),apply:s=>n.tuner.apply(s),readout:()=>n.tuner.readout(),exportPatch:()=>n.tuner.exportPatch()}}:{},...n.stream?{stream:{stats:()=>n.stream.stats(),drained:()=>n.stream.drained(),loaded:()=>n.stream.loaded()}}:{},planner:{layers:()=>n.planner.layers(),pick:s=>n.planner.pick(s),draft:()=>n.planner.draft(),open:()=>n.planner.open(),close:()=>n.planner.close()},trees:n.env&&n.sharedWind?{lab:s=>{var u;Pt==null||Pt.dispose(),Pt&&e.scene.remove(Pt.group);const o=(s==null?void 0:s.atX)!==void 0&&(s==null?void 0:s.atZ)!==void 0,a=o?new ue(s.atX,0,s.atZ):e.camera.position,l=new ue;if(o){const d=((s==null?void 0:s.yawDeg)??0)*Math.PI/180;l.set(Math.sin(d),0,-Math.cos(d))}else e.camera.getWorldDirection(l);l.y=0,l.normalize();const c=new ue(-l.z,0,l.x),h=(s==null?void 0:s.aheadM)??22;return Pt=gT(n.env,n.sharedWind,{species:s==null?void 0:s.species,count:(s==null?void 0:s.count)??5,spacingM:(s==null?void 0:s.spacingM)??9,seed:s==null?void 0:s.seed,lods:s==null?void 0:s.lods,originX:a.x+l.x*h-c.x*(((s==null?void 0:s.count)??5)-1)*((s==null?void 0:s.spacingM)??9)*.5,originZ:a.z+l.z*h-c.z*(((s==null?void 0:s.count)??5)-1)*((s==null?void 0:s.spacingM)??9)*.5,groundY:e.world.query.heightAt(a.x+l.x*h,a.z+l.z*h),axisX:{x:c.x,z:c.z},axisZ:{x:l.x,z:l.z},renderer:s!=null&&s.impostors?e.renderer:void 0}),e.scene.add(Pt.group),(u=n.forceRender)==null||u.call(n),{species:new Set(Pt.meshes.map(d=>d.species)).size,meshes:Pt.meshes.length,drawCalls:Pt.drawCalls,triangles:Pt.triangles,positions:Pt.positions.map(d=>({x:d.x,y:d.y,z:d.z}))}},clearLab:()=>{Pt&&(e.scene.remove(Pt.group),Pt.dispose(),Pt=null)},impostorAlpha:()=>{const s=[],o=new Set,a=e.renderer;return e.scene.traverse(l=>{var R,N,b;const c=l;if(!c.isInstancedMesh||!/^dressing:tree\..*-far\./.test(c.name))return;const h=c.material,u=(N=(R=h.uniforms)==null?void 0:R.uAtlas)==null?void 0:N.value;if(!u||o.has(u.uuid))return;o.add(u.uuid);const d=u.image,f=d.width,M=d.height,E=new wn(f,M,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),m=new vt(new Ti(2,2),new Gt({uniforms:{t:{value:u}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D t; varying vec2 vUv; void main() { float a = texture2D(t, vUv).a; gl_FragColor = vec4(a, a, a, 1.0); }",depthTest:!1,depthWrite:!1}));m.frustumCulled=!1;const p=new uu;p.add(m);const g=new Co(-1,1,1,-1,.1,10);g.position.z=1;const S=a.getRenderTarget();a.setRenderTarget(E),a.render(p,g);const x=new Uint8Array(f*M*4);a.readRenderTargetPixels(E,0,0,f,M,x),a.setRenderTarget(S),E.dispose(),m.geometry.dispose(),m.material.dispose();const D=new Uint8Array(f*M);for(let v=0;v<f*M;v++)D[v]=x[v*4];const y=Number(((b=h.uniforms.uGrid)==null?void 0:b.value)??4);s.push({id:c.name,size:f,grid:y,cell:f/y,alpha:D})}),s},bakeCost:s=>{const o=s??[[4,128],[6,128],[8,128],[4,256],[6,256],[8,256]],a=Object.keys(Pr);return o.map(([l,c])=>{const h=performance.now();for(const d of a){const f=Pr[d],M=il(f,7),E=cl(M,f,"near"),m=new ri,p=new To;m.add(new vt(E.wood.geometry,p),new vt(E.foliage.geometry,p));const g=bu([E.wood.geometry,E.foliage.geometry]);Ru(e.renderer,m,g.heightM,g.halfWidthM,l,c).dispose(),p.dispose(),E.wood.geometry.dispose(),E.foliage.geometry.dispose()}const u=performance.now()-h;return{grid:l,cell:c,views:l*l,px:l*c,species:a.length,ms:Math.round(u),msPerSpecies:Math.round(u/a.length),mb:Math.round((l*c)**2*4*a.length/1048576*10)/10}})},labInfo:()=>Pt?{species:new Set(Pt.meshes.map(s=>s.species)).size,meshes:Pt.meshes.length,drawCalls:Pt.drawCalls,triangles:Pt.triangles}:null}:void 0,dressing:{census:s=>n.dressing.census(s),speciesCensus:()=>{const s={},o=(a,l)=>{const c=Rw(a),h=s[c]??(s[c]={});h[a]=(h[a]??0)+l};for(const[a,l]of Object.entries(n.dressing.speciesCensus()))o(a,l);for(const[a,l]of Object.entries(n.groundCover.speciesCensus()))o(a,l);return{mode:kh(),fallbacks:yw(),byStratum:s}},speciesMode:()=>kh(),grassMode:()=>n.groundCover.grassMode(),setWindOverride:s=>n.groundCover.setWindOverride(s),setVisible:s=>n.dressing.setVisible(s),visible:()=>n.dressing.visible(),fadeStats:()=>n.dressing.fadeStats(),tierStats:()=>n.dressing.tierStats(),resortAt:(s,o)=>n.dressing.resortAt(s,o),rebuildAt:(s,o)=>n.dressing.rebuildAt(s,o)},obstacles:{near:(s,o,a)=>n.obstacles.near(s,o,a).map(l=>({x:l.x,z:l.z,r:l.r,topY:l.topY,proudM:l.proudM,planes:l.planes.length/4})),supportYAt:(s,o)=>n.obstacles.supportYAt(s,o),stats:()=>n.obstacles.stats(),setEnabled:s=>n.obstacles.setEnabled(s),enabled:()=>n.obstacles.enabled()},groundCover:{census:s=>n.groundCover.census(s),setVisible:s=>n.groundCover.setVisible(s),visible:()=>n.groundCover.visible(),settled:()=>n.groundCover.settled(),drainNow:()=>n.groundCover.drainNow(e),clumpHashes:()=>n.groundCover.clumpHashes(),clumpXZ:()=>n.groundCover.clumpXZ(),clumpRanks:()=>n.groundCover.clumpRanks(),fallAt:s=>n.groundCover.fallAt(s),spatialScale:(s,o,a)=>n.groundCover.spatialScale(s,o,a),visibleScaleSource:()=>n.groundCover.visibleScaleSource(),inventory:()=>n.groundCover.inventory(),peakSlots:()=>n.groundCover.peakSlots(),anchor:()=>n.groundCover.anchor(),rebuildAt:(s,o,a)=>n.groundCover.rebuildAt(s,o,a),rebuildStats:()=>n.groundCover.rebuildStats(),stepSlice:()=>n.groundCover.stepSlice(),advanceTick:s=>n.groundCover.advanceTick(s),wind:()=>n.groundCover.wind()},boot:{timings:()=>n.bootTimings.timings(),total:()=>n.bootTimings.total(),pack:()=>n.packId,frameGaps:()=>n.bootTimings.frameGaps(),notes:()=>n.bootTimings.notes()},gps:{readout:()=>n.device.readout(),visible:()=>n.device.visible(),raised:()=>n.device.raised(),stowed:()=>n.device.stowed(),setStowed:s=>n.device.setStowed(s)},result:{plotStats:()=>n.result.plotStats()},camera:{setFree:(s,o,a,l,c)=>{n.freeCam.pose={x:s,y:o,z:a,yaw:l,pitch:c}},clearFree:()=>{n.freeCam.pose=null},project:(s,o,a)=>{const l=new ue(s,o,a).project(e.camera);return{u:(l.x+1)/2,v:(1-l.y)/2,inFront:l.z<1}},pose:()=>{const s=e.camera;return{x:s.position.x,y:s.position.y,z:s.position.z,yaw:-s.rotation.y,pitch:s.rotation.x,free:n.freeCam.pose!==null}}},arrival:{remainingS:()=>n.arrival.remainingS(),active:()=>n.arrival.active()},runInputScript:s=>r(o=>pT(e,s,o)),replay:s=>r(o=>mT(e,s,o)),inputLog:()=>n.log.frames.map(s=>({...s})),season:{set:s=>n.season.set(s),get:()=>n.season.get(),names:()=>n.season.names(),snapshot:()=>n.season.snapshot(),mix:s=>n.season.mix(s)},weather:{setOverride:s=>n.weather.setOverride(s),setWetOverride:s=>n.weather.setWetOverride(s),overcast:()=>n.weather.overcast(),wetness:()=>n.weather.wetness(),wetAt:(s,o,a=0,l=0)=>E0(e.seed,s,o,a,l),at:(s,o,a=0,l=0)=>ul(e.seed,s,o,a,l),leadS:(s,o)=>M0(s,o),setFrontOverride:s=>n.weather.setFrontOverride(s),front:()=>n.weather.front(),snapshot:()=>n.weather.snapshot()},render:{info:()=>({calls:e.renderer.info.render.calls,triangles:e.renderer.info.render.triangles}),rendererString:i,once:()=>{n.post?n.post.render():e.renderer.render(e.scene,e.camera)},frameDeltasMs:()=>[...n.frameDeltas],gpuFrameMs:()=>n.gpuTimer.lastMs(),postSamples:()=>{var s;return((s=n.post)==null?void 0:s.samples)??null},aoEnabled:()=>{var s;return((s=n.post)==null?void 0:s.aoEnabled)??!1},aoBlend:()=>{var s;return((s=n.post)==null?void 0:s.aoBlend)??null},gpuTimerAvailable:()=>n.gpuTimer.available},setPaused:s=>{e.flags.paused=s},paused:()=>e.flags.paused,...n.compass?{compass:{visible:()=>n.compass.visible(),raised:()=>n.compass.raised(),setRaised:s=>n.compass.setRaised(s),headingDeg:()=>n.compass.headingDeg()}}:{},...n.paperMap?{paperMap:{shown:()=>n.paperMap.shown(),setShown:s=>n.paperMap.setShown(s),stats:()=>n.paperMap.stats(),buildMs:()=>n.paperMap.buildMs()}}:{}}}const MT=["spring","summer","autumn","winter"],Oc=["uColValley","uColUpland","uColHigh","uColSummit","uColDry","uColHeath","uColTurfD","uColMoss"],ET=["uColRock","uColScree","uColStone","uColGrit","uColSoil","uColBare","uColPeat"],vT={spring:10207818,summer:0,autumn:11887901,winter:14998666},xT={spring:14082799,summer:0,autumn:14206632,winter:12174028},ST={spring:16773330,summer:0,autumn:16763274,winter:14673648},AT={spring:13230218,summer:16777215,autumn:14065754,winter:13617568},v0=["litter","bracken.rust","grass.dead"],x0={spring:{"grass.fine":1.15,"grass.coarse":.9,"grass.dry":.45,moss:1.3,sedge:1.1,bracken:.8,"flower.white":.5,"flower.gold":.5},summer:{},autumn:{"grass.fine":.8,"grass.dry":1.4,"grass.dead":.5,moss:.7,bracken:0,"bracken.rust":1,litter:1,"flower.white":.15,"flower.gold":.25},winter:{"grass.fine":.5,"grass.coarse":.8,"grass.dry":.6,"grass.dead":2.2,heather:1.1,moss:.55,sedge:.7,bracken:0,"bracken.rust":.25,litter:.35,"flower.white":0,"flower.gold":0}};function wT(n){return xt.map(e=>x0[n][e.id]??(v0.includes(e.id)?0:1))}const Pc={spring:_.SEASON_SPRING_SNOW,summer:_.SEASON_SUMMER_SNOW,autumn:_.SEASON_AUTUMN_SNOW,winter:_.SEASON_WINTER_SNOW},yT=n=>{switch(n){case"spring":return{vegMix:_.SEASON_SPRING_VEG_MIX,sat:_.SEASON_SPRING_SAT,skyMix:_.SEASON_SPRING_SKY_MIX,sunMix:_.SEASON_SPRING_SUN_MIX,sunK:_.SEASON_SPRING_SUN_K};case"autumn":return{vegMix:_.SEASON_AUTUMN_VEG_MIX,sat:_.SEASON_AUTUMN_SAT,skyMix:_.SEASON_AUTUMN_SKY_MIX,sunMix:_.SEASON_AUTUMN_SUN_MIX,sunK:_.SEASON_AUTUMN_SUN_K};case"winter":return{vegMix:_.SEASON_WINTER_VEG_MIX,sat:_.SEASON_WINTER_SAT,skyMix:_.SEASON_WINTER_SKY_MIX,sunMix:_.SEASON_WINTER_SUN_MIX,sunK:_.SEASON_WINTER_SUN_K};default:return{vegMix:0,sat:1,skyMix:0,sunMix:0,sunK:1}}},Ma={h:0,s:0,l:0};function fs(n,e,t,i,r){n.copy(e),i>0&&n.lerp(t,i),r!==1&&(n.getHSL(Ma),n.setHSL(Ma.h,Math.min(1,Ma.s*r),Ma.l))}function RT(n,e,t,i){const r=(p,g)=>{const S=p.userData.uniforms;if(!S)throw new Error(`season: the ${g} material has no userData.uniforms bag to drive`);return S},s=r(e,"terrain"),o=r(t.material(),"ground cover"),a=new Map;for(const p of Oc)a.set(p,s[p].value.clone());const l={zenith:n.skyZenith.clone(),horizon:n.skyHorizon.clone(),glow:n.sunGlow.clone()},c=n.fogBands.map(p=>p.color.clone()),h=n.lights.sun.color.clone(),u=n.lights.sun.intensity,d=new We;let f=_.SEASON_DEFAULT;function M(p){const g=yT(p),S=new We(vT[p]),x=new We(xT[p]),D=new We(ST[p]);for(const y of Oc)fs(d,a.get(y),S,g.vegMix,g.sat),s[y].value.copy(d);fs(d,l.zenith,x,g.skyMix,1),n.skyZenith.copy(d),fs(d,l.horizon,x,g.skyMix,1),n.skyHorizon.copy(d),fs(d,l.glow,x,g.skyMix,1),n.sunGlow.copy(d);for(let y=0;y<n.fogBands.length;y++)n.fogBands[y].color!==n.skyHorizon&&(fs(d,c[y],x,g.skyMix,1),n.fogBands[y].color.copy(d));fs(d,h,D,g.sunMix,1),n.lights.sun.color.copy(d),n.lights.sun.intensity=u*g.sunK,o.uSeasonTint.value.set(AT[p]),s.uSnow.value.x=Pc[p],i.setSnow(Pc[p]),t.setSeasonSpecies(wT(p),Pc[p]),f=p}function E(){const p={};for(const g of[...Oc,...ET])p[g]=s[g].value.getHex();p.skyZenith=n.skyZenith.getHex(),p.skyHorizon=n.skyHorizon.getHex(),p.sunGlow=n.sunGlow.getHex(),p.sunColor=n.lights.sun.color.getHex(),p.sunIntensityMilli=Math.round(n.lights.sun.intensity*1e3),p.coverTint=o.uSeasonTint.value.getHex(),p.snowMilli=Math.round(s.uSnow.value.x*1e3),p.rockSnowMilli=Math.round(i.snow()*1e3);for(let g=0;g<n.fogBands.length;g++)p[`fog${g}`]=n.fogBands[g].color.getHex();return p}return M(f),{set:M,get:()=>f,names:()=>MT,snapshot:E,mix:p=>{const g={...x0[p]};for(const S of v0)S in g||(g[S]=0);return g},dispose:()=>{M("summer")}}}const Ea=2,bT=4,ps=8;function TT(n,e,t){const i=performance.now(),r=n.detailBand,{phaseX:s,phaseZ:o}=n.detailPhaseXZ,a=n.demCellM,l=r.windowM,c=r.waves.length===0?8:Math.max(32,Math.min(128,bT*Math.round(l/r.waves[r.waves.length-1]))),h=xm(n.water);let u=0,d=0,f=0,M=0,E=0,m=0;for(let B=-Ea;B<Ea;B++)for(let L=-Ea;L<Ea;L++){let X=0,k=!0;for(let J=0;J<c;J++)for(let Z=0;Z<c;Z++){const ee=(B+(J+.5)/c)*l-s,me=(L+(Z+.5)/c)*l-o,K=n.detailAt(ee,me);X+=K,u+=K,d+=K*K,f++,Math.abs(K)>M&&(M=Math.abs(K)),k&&J%4===0&&Z%4===0&&h(ee,me,r.gateM)<1&&(k=!1)}k&&(m++,E=Math.max(E,Math.abs(X/(c*c))))}const p=f>0?Math.sqrt(Math.max(0,d/f-(u/f)**2)):0,g=(B,L)=>{let X=0;for(let k=0;k<ps;k++)for(let J=0;J<ps;J++)X+=n.detailAt((B+(k+.5)/ps)*a-s,(L+(J+.5)/ps)*a-o);return X/(ps*ps)},S=24;let x=0,D=0,y=[];for(let B=-S;B<S;B++){const L=[];for(let X=-S;X<S;X++){const k=g(B,X);L.push(k),Math.abs(k)>D&&(D=Math.abs(k)),X>-S&&(x=Math.max(x,Math.abs(k-L[L.length-2]))),y.length>0&&(x=Math.max(x,Math.abs(k-y[L.length-1])))}y=L}const R=Math.sin(t),N=-Math.cos(t);let b=0,v=0,w=-1/0,O=0,C=0;for(let B=0;B<=1200;B+=5){const L=e.x+R*B,X=e.z+N*B,k=n.detailAt(L,X);k>b&&(b=k),k<v&&(v=k);const J=n.landformHeightAt(L,X);J>w&&(w=J,O=B,C=k)}const W=1e-9*Math.max(1,p);return{sdM:p,peakM:M,maxPostMeanM:D,maxStepPerPostM:x,worstWindowMeanM:E,clearWindows:m,windowBarM:W,zeroMeanOk:m>0&&E<=W,crestLiftM:C,maxLiftM:b,hollowDropM:v,crestAtM:O,windowM:l,ms:performance.now()-i}}const on=_,S0=[{key:"rmsM",label:"noise RMS (m)",tuning:"TERRAIN_DETAIL_RMS_M",min:0,max:20,step:.1,def:on.TERRAIN_DETAIL_RMS_M},{key:"H",label:"roughness H",tuning:"TERRAIN_DETAIL_H",min:.2,max:1.5,step:.01,def:on.TERRAIN_DETAIL_H},{key:"ridgeGain",label:"ridge gain",tuning:"TERRAIN_DETAIL_RIDGE_GAIN",min:0,max:6,step:.05,def:on.TERRAIN_DETAIL_RIDGE_GAIN},{key:"ridgeOctaves",label:"ridge octaves",tuning:"TERRAIN_DETAIL_RIDGE_OCTAVES",min:0,max:6,step:1,def:on.TERRAIN_DETAIL_RIDGE_OCTAVES},{key:"ridgeCap",label:"ridge cap (× λ)",tuning:"TERRAIN_DETAIL_RIDGE_CAP",min:0,max:.4,step:.005,def:on.TERRAIN_DETAIL_RIDGE_CAP},{key:"aniso",label:"anisotropy",tuning:"TERRAIN_DETAIL_ANISO",min:1,max:8,step:.1,def:on.TERRAIN_DETAIL_ANISO},{key:"wander",label:"rib wander",tuning:"TERRAIN_DETAIL_WANDER",min:0,max:3,step:.05,def:on.TERRAIN_DETAIL_WANDER},{key:"slopeFloor",label:"slope floor",tuning:"TERRAIN_DETAIL_SLOPE_FLOOR",min:0,max:1,step:.01,def:on.TERRAIN_DETAIL_SLOPE_FLOOR},{key:"slopeLoDeg",label:"slope lo (°)",tuning:"TERRAIN_DETAIL_SLOPE_LO_DEG",min:0,max:45,step:1,def:on.TERRAIN_DETAIL_SLOPE_LO_DEG},{key:"slopeHiDeg",label:"slope hi (°)",tuning:"TERRAIN_DETAIL_SLOPE_HI_DEG",min:5,max:70,step:1,def:on.TERRAIN_DETAIL_SLOPE_HI_DEG},{key:"ravineDepthM",label:"ravine depth (m)",tuning:"RAVINE_DEPTH_M",min:0,max:24,step:.5,def:on.RAVINE_DEPTH_M},{key:"ravineLevels",label:"ravine levels",tuning:"RAVINE_LEVELS",min:0,max:5,step:1,def:on.RAVINE_LEVELS},{key:"grainAmpM",label:"geo grain (m)",tuning:"GRAIN_AMP_M",min:0,max:16,step:.1,def:on.GRAIN_AMP_M},{key:"taper",label:"DC taper",tuning:"TERRAIN_DETAIL_TAPER",min:.02,max:.49,step:.01,def:on.TERRAIN_DETAIL_TAPER},{key:"windowPosts",label:"window (posts)",tuning:"TERRAIN_DETAIL_WINDOW_POSTS",min:4,max:64,step:1,def:on.TERRAIN_DETAIL_WINDOW_POSTS}],A0=[{key:"reposeDeg",label:"repose gate (°)",tuning:null,min:0,max:45,step:1,def:0},{key:"elevGainPerKm",label:"elev gain /km",tuning:null,min:-3,max:3,step:.05,def:0},{key:"elevRefM",label:"…pivot (m)",tuning:null,min:0,max:2e3,step:25,def:500},{key:"hVary",label:"H variation ±",tuning:null,min:0,max:1,step:.01,def:0}],ms=[...S0,...A0],CT=`
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
`,en=(n,e=3)=>Number.isFinite(n)?n.toFixed(e):"—";function DT(n,e){const t=n.world.query,i=document.createElement("style");i.textContent=CT,document.head.appendChild(i);const r=Xe("div","tuner",n.ui.root??document.body),s=Xe("div","tuner-head",r);Xe("span","tuner-title",s).textContent="DEV TUNER";const o=Xe("button","",s);o.textContent="−";const a=Xe("div","tuner-body",r),l=new Map(ms.map(A=>[A.key,A.def])),c=new Map;let h=!1,u=null;const d=(A,U)=>{const T=Xe("div","tuner-row",U);Xe("span","tuner-label",T).textContent=A.label;const I=Xe("input","",T);I.type="range";const z=Xe("input","",T);z.type="number";for(const te of[I,z])te.min=String(A.min),te.max=String(A.max),te.step=String(A.step),te.value=String(A.def);I.title=A.tuning??`${String(A.key)} — a CANDIDATE term with no tuning.ts constant yet`,I.addEventListener("input",()=>{z.value=I.value}),I.addEventListener("change",()=>Y(A.key,Number(I.value))),z.addEventListener("change",()=>Y(A.key,Number(z.value))),c.set(A.key,{wrap:T,range:I,num:z})},f=(()=>{try{return new URLSearchParams(location.search).get("tune")}catch{return null}})(),M=(A,U,T=!1)=>{const I=Xe("div","tuner-sec",a),z=Xe("span","tuner-caret",I);Xe("span","",I).textContent=A;const te=Xe("div","tuner-secbody",a),he=f==="filter"&&!T;return he&&te.classList.add("collapsed"),z.textContent=he?"▸":"▾",U&&(Xe("div","tuner-note",te).textContent=U),I.addEventListener("click",()=>{const ye=te.classList.toggle("collapsed");z.textContent=ye?"▸":"▾"}),te},E=M("SHIPPED CONSTANTS","live — applies when you release a slider");S0.forEach(A=>d(A,E));const m=M("CANDIDATES (0 = off)","live — terms with no tuning.ts constant yet");A0.forEach(A=>d(A,m));const p=M("EROSION STAGES","needs APPLY — a stage flip re-bakes the world (~21 s)",!0),g=Xe("div","tuner-seasons",p),S=new Map;for(const A of e.erosion.stages()){const U=Xe("button","",g);U.dataset.stage=A,U.title=`${A} — click to toggle, then press APPLY`,U.addEventListener("click",()=>{const T=e.erosion.mode();e.erosion.setMode({[A]:!T[A]}),Z()}),S.set(A,U)}const x=Xe("div","tuner-seasons",p),D=(A,U,T)=>{const I=Xe("button","",x);I.textContent=A,I.title=U,I.addEventListener("click",()=>{e.erosion.setMode(T),Z()})};Xe("div","tuner-note",p).textContent="presets — fastest way to a known state:",D("solo","filter ONLY — the owner's A/B: every simulated stage off",{thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!0}),D("sim","the shipped simulated stack, filter off",{thermal:!0,streamPower:!0,ravine:!0,grain:!0,filter:!1}),D("bare","no erosion at all — the measured DEM alone",{thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!1});const y=[{key:"scale",label:"filter scale (m)",min:10,max:2e3,step:10},{key:"strength",label:"filter strength",min:0,max:.2,step:.001},{key:"gullyWeight",label:"gully weight",min:0,max:1,step:.01},{key:"detail",label:"detail",min:.3,max:4,step:.05},{key:"octaves",label:"octaves (cost!)",min:1,max:7,step:1},{key:"gain",label:"gain",min:.2,max:.8,step:.01},{key:"lacunarity",label:"lacunarity",min:1.4,max:3,step:.05},{key:"cellScale",label:"cell scale",min:.3,max:1.6,step:.05},{key:"normalization",label:"normalization",min:0,max:1,step:.02}],R=new Map,N=M("FILTER (wXcfWn, MPL-2.0)",void 0,!0),b=Xe("div","tuner-note",N);for(const A of y){const U=Xe("div","tuner-row",N);Xe("span","tuner-label",U).textContent=A.label;const T=Xe("input","",U);T.type="range";const I=Xe("input","",U);I.type="number";const z=Number(e.erosion.params()[A.key]??0);for(const te of[T,I])te.min=String(A.min),te.max=String(A.max),te.step=String(A.step),te.value=String(z);T.addEventListener("input",()=>{I.value=T.value}),T.addEventListener("change",()=>{e.erosion.setParams({[A.key]:Number(T.value)}),Z()}),I.addEventListener("change",()=>{e.erosion.setParams({[A.key]:Number(I.value)}),Z()}),R.set(A.key,{range:T,num:I})}const v=[{key:"skirtDepthM",label:"interfluve depth (m)",min:0,max:8,step:.25},{key:"skirtRadiusM",label:"interfluve reach (m)",min:10,max:90,step:5},{key:"channelAreaM2",label:"channel area (m²) ↓=denser",min:2e3,max:6e4,step:1e3},{key:"depthMaxM",label:"gully depth cap (m)",min:2,max:40,step:1},{key:"bankDeg",label:"bank angle (°)",min:15,max:60,step:1},{key:"headTaperM",label:"head taper (m)",min:0,max:300,step:10},{key:"perturbRmsM",label:"routing noise (m RMS)",min:0,max:12,step:.5},{key:"cellM",label:"grid (m) ↓=finer, SLOW",min:4,max:20,step:1},{key:"evolveIterations",label:"evolve iterations",min:0,max:500,step:10},{key:"evolveK",label:"erodibility K",min:0,max:6e-5,step:1e-6},{key:"evolveDtYears",label:"Δt per iteration (yr)",min:25,max:800,step:25},{key:"diffuseCFL",label:"hillslope creep",min:0,max:.2,step:.005},{key:"amplifyLoM",label:"amplify band lo (m)",min:0,max:200,step:5},{key:"amplifyHiM",label:"amplify band hi (m)",min:0,max:1200,step:25},{key:"amplifyGain",label:"amplify gain (1 = off)",min:1,max:5,step:.1}],w=new Map,O=M("DRAINAGE CARVE","needs APPLY — re-runs the whole evolution (seconds to ~25 s)",!0),C=Xe("div","tuner-note",O);for(const A of v){const U=Xe("div","tuner-row",O);Xe("span","tuner-label",U).textContent=A.label;const T=Xe("input","",U);T.type="range";const I=Xe("input","",U);I.type="number";const z=Number(e.erosion.drainageParams()[A.key]??0);for(const te of[T,I])te.min=String(A.min),te.max=String(A.max),te.step=String(A.step),te.value=String(z);T.addEventListener("input",()=>{I.value=T.value}),T.addEventListener("change",()=>{e.erosion.setDrainageParams({[A.key]:Number(T.value)}),Z()}),I.addEventListener("change",()=>{e.erosion.setDrainageParams({[A.key]:Number(I.value)}),Z()}),w.set(A.key,{range:T,num:I})}const W=Xe("div","tuner-out",O),B=Xe("div","tuner-seasons",p),L=Xe("button","",B);L.textContent="APPLY",L.title="rebake + rebuild the world with the current stages and parameters";const X=Xe("div","tuner-out",p);let k=null,J="";L.addEventListener("click",()=>{L.textContent="working…",X.textContent="rebuilding — the filter costs ~4.6 us a sample, so this is seconds, not frames",requestAnimationFrame(()=>requestAnimationFrame(()=>{k=e.erosion.apply(),J=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`,L.textContent="APPLY",Z()}))});function Z(){const A=e.erosion.mode();for(const[Re,Ce]of S){const Le=!!A[Re],ke=Re==="streamPower"?"flow":Re.slice(0,5);Ce.textContent=`${ke} ${Le?"ON":"off"}`,Ce.classList.toggle("on",Le),Ce.style.opacity=Le?"1":"0.55"}const U=!!A.drainage;C.textContent=U?"stage ON — change a slider, then press APPLY":'stage OFF — these sliders set the parameters but reach nothing. Click "drain" above (or use ?tune=drainage), then APPLY.';for(const[Re,Ce]of w){const Le=Number(e.erosion.drainageParams()[Re]??0);Ce.range.value=String(Le),Ce.num.value=String(Le)}const T=e.erosion.drainageStats();W.textContent=T?`${T.channelCells} channels · density ${T.densityKmPerKm2.toFixed(1)} km/km² · spacing ${T.spacingM.toFixed(0)} m · gully p90 ${T.depthP90M.toFixed(1)} m · ${T.wallMs.toFixed(0)} ms`:"no network built yet — turn the stage on and press APPLY";const I=!!A.filter;N.classList.toggle("inert",!I),b.textContent=I?"stage ON — change a slider, then press APPLY":'stage OFF — these sliders set the parameters but reach nothing. Click "filte" or the "solo" preset above, then APPLY.';const te=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`!==J;L.classList.toggle("tuner-apply-dirty",te),L.textContent=te?"APPLY ●":"APPLY";const he=e.erosion.params();for(const[Re,Ce]of R){const Le=String(Number(he[Re]??0));Ce.range.value=Le,Ce.num.value=Le}const ye=k?`${(k.wallMs/1e3).toFixed(1)} s${k.bakeRan?" (incl. bake)":" (bake skipped)"}`:"not applied yet";X.textContent=`mode ${Object.entries(A).filter(([,Re])=>Re).map(([Re])=>Re).join("+")||"none"} · filter bound ±${e.erosion.bound().toFixed(1)} m · last APPLY ${ye}`}J=`${JSON.stringify(e.erosion.mode())}|${JSON.stringify(e.erosion.params())}`,Z();const ee=M("ATMOSPHERE","live — season, weather, wetness, front"),me=M("A/B — UNCHECK TO REMOVE A CHANGE","live: quiet, grain streak · re-places: hue, warp",!0),K=(A,U,T,I)=>{const z=Xe("div","tuner-arow",me),te=Xe("input","",z);te.type="checkbox",te.checked=T(),te.title=U,Xe("span","tuner-label",z).textContent=A,te.addEventListener("change",()=>I(te.checked))};K("D231 lattice warp","OFF = the rigid 3 m placement grid (S(k) 235.5 where cover is sparse). Re-places the ring.",()=>Xn.latticeWarp,A=>{Xn.latticeWarp=A,e.ab.invalidateCover()}),K("D225 hue jitter","OFF = the pre-D225 tone-only tint (brightness varies, hue does not). Re-places the ring.",()=>Xn.hueJitter,A=>{Xn.hueJitter=A,e.ab.invalidateCover()}),K("TERRAIN_QUIET","OFF = full walking-scale luminance contrast in the near field. Live.",()=>Xn.quiet,A=>{var I;Xn.quiet=A;const U=e.ab.uniforms(),T=(I=U==null?void 0:U.uQuiet)==null?void 0:I.value;T&&(T.x=A?_.TERRAIN_QUIET:0)}),K("grain fall-line smear","OFF = an isotropic grain (no 3-tap smear down the fall line). Live.",()=>Xn.grainStreak,A=>{Xn.grainStreak=A;const U=e.ab.uniforms();U!=null&&U.uGrainStreak&&(U.uGrainStreak.value=A?_.TERRAIN_GRAIN_STREAK_W:0)}),Xe("div","tuner-hint",me).textContent="D223 (variant shapes) is baked into the kit geometry at construction and cannot be toggled here — listed so it is not silently missing.";const j=M("TELEPORT","A / mid / B jump in-place · site buttons reload into that pack",!0),Q=Xe("div","tuner-arow",j),H=(A,U)=>{const T=Xe("button","tuner-btn",Q);T.textContent=A,T.addEventListener("click",()=>{const I=U();e.nav.teleport(I.x,I.z)})};H("A (S1)",()=>n.mission.a),H("midpoint (S2)",()=>({x:(n.mission.a.x+n.mission.b.x)/2,z:(n.mission.a.z+n.mission.b.z)/2})),H("B (S5)",()=>n.mission.b);const $=Xe("div","tuner-arow",j);for(const A of["tier1","prairie","cairngorms","sierra","namib","longline","shortline","sundance"]){const U=Xe("button","tuner-btn",$);U.textContent=A,U.addEventListener("click",()=>{const T=new URLSearchParams(location.search);A==="tier1"?T.delete("pack"):T.set("pack",A),T.set("devtuner","1"),location.search=T.toString()})}Xe("div","tuner-hint",j).textContent="site buttons RELOAD into that fixture pack (tier1 = the default world). A teleport cannot cross packs.";const re=Xe("div","tuner-seasons",ee),oe=new Map;for(const A of e.season.names()){const U=Xe("button","",re);U.textContent=A.slice(0,3),U.title=`season = ${A} (cosmetic — outside lineHashInput, D92, so PBs stay comparable)`,U.addEventListener("click",()=>{e.season.set(A),ve()}),oe.set(A,U)}const de=(A,U,T,I,z,te)=>{const he=Xe("div","tuner-arow",ee);Xe("span","tuner-label",he).textContent=A;const ye=Xe("input","",he);ye.type="range",ye.min=String(U),ye.max=String(T),ye.step=String(I),ye.value=String(U);const Re=Xe("span","v",he),Ce=Xe("input","auto",he);Ce.type="checkbox",Ce.checked=!0,Ce.title="auto = follow sim time (override null)";const Le=()=>{Ce.checked?z(null):z(Number(ye.value))};return ye.addEventListener("input",()=>{Ce.checked&&(Ce.checked=!1),Le(),ve()}),Ce.addEventListener("change",()=>{Le(),ve()}),{range:ye,val:Re,auto:Ce,live:te}},Me=de("overcast",0,1,.01,A=>e.weather.setOverride(A),()=>e.weather.overcast()),V=de("wetness",0,1,.01,A=>e.weather.setWetOverride(A),()=>e.weather.wetness()),Ae=de("front grad",0,.002,1e-5,A=>e.weather.setFrontOverride(A),()=>e.weather.front().dOvercastPerM);function ve(){const A=e.season.get();for(const[U,T]of oe)T.classList.toggle("on",U===A);for(const U of[Me,V,Ae]){const T=U.live();U.val.textContent=Number.isFinite(T)?T<.01?T.toExponential(1):T.toFixed(2):"—",U.auto.checked&&(U.range.value=String(T))}}const Ie=window.setInterval(ve,250);ve();function be(){e.weather.setOverride(null),e.weather.setWetOverride(null),e.weather.setFrontOverride(null);for(const A of[Me,V,Ae])A.auto.checked=!0;ve()}const Ne=Xe("div","tuner-btns",a),se=Xe("button","",Ne),fe=Xe("button","",Ne),G=Xe("button","",Ne);fe.textContent="reset",G.textContent="export";const P=Xe("div","tuner-read",a),ne=A=>{const U=Xe("div","",P);return Xe("span","k",U).textContent=A,Xe("span","",U)},pe=ne("delivered RMS"),ae=ne("peak |residual|"),Ee=ne("max Δ / DEM post"),Ue=ne("post-to-post step"),Pe=ne("S2 crest lift"),Oe=ne("S2 axis +/−"),Ge=ne("zero-mean"),le=ne("probe cost"),xe=Xe("textarea","tuner-out",a);xe.readOnly=!0,xe.spellcheck=!1;function De(){const A={};for(const U of ms){const T=l.get(U.key);T!==U.def&&(A[U.key]=T)}return h&&(A.rmsM=0,A.ridgeGain=0),A}function Te(){t.setDetailOverrides(De()),e.rebuildTerrain(),e.invalidateDressing(),e.invalidateGroundCover(),e.invalidateColliders(),ce(),Se()}function Y(A,U){Number.isFinite(U)&&(l.set(A,U),Te())}function ce(){const A=n.mission;u=TT(t,{x:(A.a.x+A.b.x)/2,z:(A.a.z+A.b.z)/2},A.bearingRad)}function Se(){for(const A of ms){const U=c.get(A.key),T=l.get(A.key);U.range.value=String(T),U.num.value=String(T),U.wrap.classList.toggle("changed",T!==A.def)}se.textContent=h?"residual OFF":"residual on",se.classList.toggle("on",h),u&&(pe.textContent=`${en(u.sdM)} m`,ae.textContent=`${en(u.peakM,2)} m`,Ee.textContent=`${en(u.maxPostMeanM,2)} m`,Ue.textContent=`${en(u.maxStepPerPostM,2)} m`,Pe.textContent=`${en(u.crestLiftM,2)} m @ ${u.crestAtM.toFixed(0)} m`,Oe.textContent=`+${en(u.maxLiftM,2)} / ${en(u.hollowDropM,2)} m`,Ge.textContent=u.zeroMeanOk?`ok (${u.worstWindowMeanM.toExponential(1)} m)`:`BROKEN ${en(u.worstWindowMeanM,4)} m`,Ge.className=u.zeroMeanOk?"good":"bad",le.textContent=`${u.ms.toFixed(0)} ms · ${u.windowM.toFixed(0)} m window`)}function q(){const A=ms.filter(z=>l.get(z.key)!==z.def);if(A.length===0&&!h)return"// no change from the shipped constants";const U=["// src/config/tuning.ts — from a dev-tuner session (roadmap item 53)."];h&&U.push("// NOTE: the A/B toggle is OFF-state; these are the values BEHIND it, not what you are looking at.");const T=A.filter(z=>z.tuning),I=A.filter(z=>!z.tuning);if(T.length>0){U.push("","// replace these lines (keep each line's existing trailing comment — it carries the measurement):");for(const z of T)U.push(`  ${z.tuning}: ${l.get(z.key)}, // was ${z.def}`)}if(I.length>0){U.push("","// CANDIDATE terms — no tuning.ts constant exists yet. They are read in","// src/fields/terrainDetail.ts via DetailOverrides; give each a TUNING constant and a","// default in makeTerrainDetail to ship it:");for(const z of I)U.push(`//   ${String(z.key)} = ${l.get(z.key)}  (default ${z.def})`)}return u&&U.push("",`// measured at this setting: delivered RMS ${en(u.sdM)} m · peak ${en(u.peakM,2)} m ·`,`// max Δ/post ${en(u.maxPostMeanM,2)} m (step ${en(u.maxStepPerPostM,2)} m) · S2 crest lift ${en(u.crestLiftM,2)} m @ ${u.crestAtM.toFixed(0)} m ·`,`// S2 axis +${en(u.maxLiftM,2)}/${en(u.hollowDropM,2)} m ·`,`// zero-mean over ${u.windowM.toFixed(0)} m ${u.zeroMeanOk?"HOLDS":`BROKEN (${en(u.worstWindowMeanM,4)} m)`}`),U.join(`
`)}return se.addEventListener("click",()=>{h=!h,Te()}),fe.addEventListener("click",()=>{for(const A of ms)l.set(A.key,A.def);h=!1,Te(),be()}),G.addEventListener("click",()=>{var A;xe.value=q(),xe.classList.add("shown"),xe.select(),(A=navigator.clipboard)==null||A.writeText(xe.value).catch(()=>{})}),o.addEventListener("click",()=>{const A=a.classList.toggle("hidden");o.textContent=A?"+":"−"}),ce(),Se(),{overrides:De,apply(A){for(const U of ms)l.set(U.key,A[U.key]??U.def);h=!1,Te()},readout:()=>u,exportPatch:q,setVisible(A){r.style.display=A?"flex":"none"},dispose(){window.clearInterval(Ie),be(),r.remove(),i.remove()}}}const $i={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",up:"Space",down:"KeyC",boostA:"ShiftLeft",boostB:"ShiftRight"},NT=n=>n instanceof HTMLElement&&(n.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n.tagName));function IT(){const n=new Set;let e=!1;const t=r=>{NT(r.target)||(r.type==="keydown"?n.add(r.code):n.delete(r.code))},i=()=>n.clear();return window.addEventListener("keydown",t),window.addEventListener("keyup",t),window.addEventListener("blur",i),{active:()=>e,toggle(r){return e=!e,n.clear(),e||(r.player.y=r.world.query.heightAt(r.player.x,r.player.z)),r.player.speedMps=0,e},update(r,s){const o=r.player,a=n.has($i.boostA)||n.has($i.boostB)?_.FLY_BOOST:1,l=_.FLY_SPEED_MPS*a*s,c=(n.has($i.fwd)?1:0)-(n.has($i.back)?1:0),h=(n.has($i.right)?1:0)-(n.has($i.left)?1:0),u=(n.has($i.up)?1:0)-(n.has($i.down)?1:0),d=Math.cos(o.pitch),f=Math.sin(o.yaw)*d,M=Math.sin(o.pitch),E=-Math.cos(o.yaw)*d,m=Math.cos(o.yaw),p=Math.sin(o.yaw);o.x+=(f*c+m*h)*l,o.z+=(E*c+p*h)*l,o.y+=(M*c+u)*l,o.speedMps=Math.hypot(f*c+m*h,E*c+p*h)*_.FLY_SPEED_MPS*a,o.groundY=r.world.query.heightAt(o.x,o.z)},dispose(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",t),window.removeEventListener("blur",i)}}}function OT(){const n=new URLSearchParams(location.search),e=n.get("pack"),t=n.get("packdir"),i=t&&/^[a-z0-9-]+$/i.test(t)?t:"lines";return e&&/^[a-z0-9-]+$/i.test(e)?{id:e,url:`/fixtures/${i}/${e}/tiles/manifest.json`}:{id:"tier-1",url:null}}const bt=()=>["localhost","127.0.0.1","::1",""].includes(location.hostname);bt()&&new URLSearchParams(location.search).get("devtuner")==="1"&&(Rt.devTuner=!0);const Lc=bt()?new URLSearchParams(location.search).get("shellwarp"):null;if(Lc!==null&&Lc!==""){Rt.devTuner=!0;const n=X1(Number(Lc));console.log(`[shell] ring warp overridden to ${n} (shipped ${_.FAR_SHELL_RING_WARP}) — harness-local`)}const Zf=bt()?new URLSearchParams(location.search).get("grass"):null;Zf&&(Kw(Zf),console.log(`[grass] renderer mode ${Yw()} (harness-local lever)`));const Uc=bt()?new URLSearchParams(location.search).get("gclod"):null,Fc=bt()?new URLSearchParams(location.search).get("gcsize"):null;(Uc!==null||Fc!==null)&&(Zw(Uc==="flat",Fc==="0"),console.log(`[grass] arms lodFlat=${Uc==="flat"} sizeFlat=${Fc==="0"} (harness-local lever)`));const va=bt()?new URLSearchParams(location.search).get("gchandover"):null,xa=bt()?new URLSearchParams(location.search).get("gcband"):null,kc=bt()?new URLSearchParams(location.search).get("coverlabel"):null,Bc=bt()?new URLSearchParams(location.search).get("gcfloor"):null;(kc==="1"||Bc==="0")&&(Qw(kc==="1",Bc==="0"),console.log(`[grass] floor arms label=${kc==="1"} floorOff=${Bc==="0"} (harness-local lever)`));const PT=bt()?new URLSearchParams(location.search).get("duff"):null;PT==="0"&&(jw(!1),console.log("[grass] canopy duff OFF, both halves (harness-local lever)"));const LT=bt()?new URLSearchParams(location.search).get("treecontact"):null;LT==="1"&&(Vw(!0),console.log("[dressing] trunk contact discs ON (harness-local lever)"));(va!==null||xa!==null)&&(qw(va!==null?Number(va):null,xa!==null?Number(xa):null),console.log(`[grass] fade override handover=${va??"shipped"} band=${xa??"shipped"} (harness-local lever)`));const UT=bt()?new URLSearchParams(location.search).get("trees"):null,w0=!(bt()&&new URLSearchParams(location.search).get("renature")==="0"),qh=bt()&&new URLSearchParams(location.search).get("renaturedem")==="1";w0||console.log("[renature] cover half OFF (harness-local lever): class 50 stays built");qh&&console.log("[renature] DEM half ON (harness-local lever): built pixels take the median of their natural neighbours");UT==="0"&&(Rt.dressingTrees=!1,console.log("[trees] kit trees OFF (harness-local lever)"));const FT=bt()?new URLSearchParams(location.search).get("ptrees"):null;FT==="0"&&(Rt.proceduralTrees=!1,console.log("[trees] procedural trees OFF — the D286 crowns are back (harness-local lever)"));const Sa=bt()?new URLSearchParams(location.search).get("treenear"):null;Sa!==null&&Number.isFinite(Number(Sa))&&(_.TREE_NEAR_M=Number(Sa),console.log(`[trees] TREE_NEAR_M = ${Sa} m (harness-local lever)`));const Aa=bt()?new URLSearchParams(location.search).get("treefade"):null;Aa!==null&&Number.isFinite(Number(Aa))&&(_.TREE_FADE_BAND_M=Number(Aa),console.log(`[trees] TREE_FADE_BAND_M = ${Aa} m (harness-local lever)`));const Va=bt()?new URLSearchParams(location.search).get("ringfade"):null,Zh=Va!==null&&Number.isFinite(Number(Va))?Number(Va):_.DRESSING_RECENTER_M;Va!==null&&console.log(`[trees] card ring fade = ${Zh} m (harness-local lever)`);const jf=bt()?new URLSearchParams(location.search).get("impostorgrid"):null,Qf=bt()?new URLSearchParams(location.search).get("species"):null;Qf&&(Aw(Qf),console.log(`[species] selection mode ${kh()} (harness-local lever)`));const Xi=bt()?new URLSearchParams(location.search).get("tune"):null;if(Xi){Rt.devTuner=!0;const n={thermal:!1,streamPower:!1,ravine:!1,grain:!1,filter:!1,drainage:!1};Xi==="filter"?Ki({...n,filter:!0}):Xi==="drainage"?Ki({...n,drainage:!0}):Xi==="full"?(Ki({...n,drainage:!0,filter:!0}),ja(uS)):Xi==="amplify"?(Ki({...n,drainage:!0}),Qa({evolveIterations:0,channelAreaM2:1e12,skirtDepthM:0,cellM:10,amplifyLoM:25,amplifyHiM:200,amplifyGain:1.8,shoreTaperM:250})):Xi==="repro"?(Ki({...n,drainage:!0,filter:!0}),Qa({flattenRadiusM:420,evolveIterations:0,channelAreaM2:1e12,skirtDepthM:0,cellM:10,shoreTaperM:300}),ja(dS)):Xi==="bare"&&Ki(n)}const kT=()=>{const n=new URLSearchParams(location.search);return Rt.plannerFirst&&!n.has("mp")&&!n.has("pack")};let Nn=null,gs=null;async function BT(){kT()&&(gs=Xf(document.body),Nn=await gs.openEntry());const n=wb();n.startFrameTrace(_.BOOT_FRAME_GAP_MS);const e=Nn!==null&&!(bt()&&new URLSearchParams(location.search).get("entrysrc")==="fixtures"),t=e?"live-line":Rt.liveTiles?"live":"fixtures";globalThis.__DATA_MODE=t==="fixtures"?"fixtures":"live";const i=new URLSearchParams(location.search),r=i.get("logdepth")==="1",s=i.get("aa")!=="0",o=Number(i.get("near")),a=new F1({antialias:s,logarithmicDepthBuffer:r});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.shadowMap.enabled=!1,document.body.appendChild(a.domElement);const l=Ub(a.getContext());a.info.autoReset=!1;const c=new uu,h=new Pn(_.CAMERA_FOV,window.innerWidth/window.innerHeight,Number.isFinite(o)&&o>0?o:_.CAMERA_NEAR,_.CAMERA_FAR);c.add(h);const u=["localhost","127.0.0.1","::1",""].includes(location.hostname),d=i.get("ao")==="1";d&&!u&&console.warn("[beeline] ?ao=1 ignored: ambient occlusion is a known-broken local-only diagnostic (D144).");const f=sT(Jb),M=eT(a.getContext().getParameter(WebGL2RenderingContext.MAX_SAMPLES)),E=iT(tT(f),M),m=Number(i.get("samples")),p=Number.isFinite(m)&&i.has("samples")?m:s?E.aaSamples:0,g=i.get("post")==="0"?null:Zb(a,c,h,p,d&&u,Number(i.get("aoscale")??1),Number(i.get("aooutput")??0),Number(i.get("aoblend")??1)),S=Fe=>{if(!bt())return;const F=a.domElement,ie=F.getBoundingClientRect();console.log(`[size:${Fe}] window ${window.innerWidth}x${window.innerHeight} dpr ${window.devicePixelRatio} · canvas css ${Math.round(ie.width)}x${Math.round(ie.height)} at (${Math.round(ie.left)},${Math.round(ie.top)}) · buffer ${F.width}x${F.height} · aspect ${h.aspect.toFixed(4)} want ${(window.innerWidth/window.innerHeight).toFixed(4)}`)},x=()=>{const Fe=Math.max(1,window.innerWidth),F=Math.max(1,window.innerHeight);h.aspect!==Fe/F&&(h.aspect=Fe/F,h.updateProjectionMatrix()),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(Fe,F),g==null||g.setSize(Fe,F),S("applied")};S("before"),x(),window.addEventListener("resize",x),typeof ResizeObserver<"u"&&new ResizeObserver(x).observe(a.domElement);const D=LR(a,h),y=OT(),R=Fe=>n.mark(Fe);let N=null,b=null,v=0,w=null,O=null,C={};for(;e&&Nn;){const Fe=Nn,F=wS(document.body);try{const ie=dm({a:Fe.a,b:Fe.b,nearZoom:_.SURVEY_NEAR_ZOOM,nearMarginM:_.SURVEY_NEAR_MARGIN_M,coarse:[{zoom:11,radiusM:_.SURVEY_FAR_HALF_M},{zoom:9,radiusM:_.CORRIDOR_OUTER_RADIUS_M}]});F.stage("land cover");const _e=await SS(ie.frame,{x0:Math.min(ie.a.x,ie.b.x),x1:Math.max(ie.a.x,ie.b.x),z0:Math.min(ie.a.z,ie.b.z),z1:Math.max(ie.a.z,ie.b.z)},_.SURVEY_NEAR_MARGIN_M,mt=>F.progress(mt.done,mt.total));F.stage(`elevation — ${ie.tiles.length} tiles${_e?"":" · land cover unavailable — the land check will be skipped for this walk"}`);let we=0,ge=0;const ze=new yh,Ve=await gS(ie,{getTileBytes:async(mt,Nt,pt)=>{const Ye=await ze.getTileBytes(mt,Nt,pt);return ge+=Ye.length,F.progress(++we,ie.tiles.length),Ye}},_e?{grid:_e.grid,renature:qh}:null);F.stage("soil factors");const Ke={minLon:Math.min(Fe.a.lon,Fe.b.lon),maxLon:Math.max(Fe.a.lon,Fe.b.lon),minLat:Math.min(Fe.a.lat,Fe.b.lat),maxLat:Math.max(Fe.a.lat,Fe.b.lat)},qe=(Fe.a.lat+Fe.b.lat)/2,nt=_.SURVEY_NEAR_MARGIN_M/111320,it=_.SURVEY_NEAR_MARGIN_M/(111320*Math.cos(qe*Math.PI/180)),Qe={minLon:Ke.minLon-it,maxLon:Ke.maxLon+it,minLat:Ke.minLat-nt,maxLat:Ke.maxLat+nt},ft=await MA(Qe,(mt,Nt)=>F.progress(mt,Nt));if(F.stage("checking the line"),!Ve.grid){await F.fail(["The land check needs that data to confirm your endpoints and crossings.","Pick again, or retry the same line — the draft is kept."],"The survey could not fetch land-cover data"),Nn=await gs.openEntry();continue}const Tt=IS(Fe.a,Fe.b,{frame:Ve.frame,cover:ef(Ve.frame,Ve.grid),query:Ve.query});if(!Tt.valid){await F.fail(Tt.reasons),Nn=await gs.openEntry();continue}F.stage("shaping the terrain");{const mt=Math.min(10500,ie.lengthM/2+3e3),Nt=Math.floor(mt*2/jn),pt=new Float32Array(Nt*Nt);for(let Ye=0;Ye<Nt;Ye++)for(let Ot=0;Ot<Nt;Ot++)pt[Ye*Nt+Ot]=Ve.query.landformHeightAt(Ot*jn-mt,Ye*jn-mt);O={src:pt,g:Nt,halfM:mt}}v=F.done(),console.log(`[survey] live-booted: DEM ${ie.tiles.length} tiles ${(ge/1e6).toFixed(2)} MB · cover ${_e?`${_e.tiles} tiles ${(_e.bytes/1e6).toFixed(2)} MB`:"UNAVAILABLE (land checks deferred, water mask empty — stated)"} · ${(v/1e3).toFixed(1)} s`),N=Ve,b=Fe,C={koppen:"live boots do not fetch Köppen: the only source artifact is the 131 MB global GeoTIFF (snapshot-only, stated at survey)",lgm:"not snapshotted and not live-fetchable: the scripted source is a 3.7 GB archive (c53)",lith:"Macrostrat lithology deferred (block cut 1); its CORS measured OPEN c57 — the backlog item carries the path",...ft?{}:{soil:"SoilGrids WCS unavailable after 3 retries per property — soil reads null this walk, stated"}},w=(ft==null?void 0:ft.grids)??null;break}catch(ie){console.warn("[survey] failed:",ie),await F.fail(["Check your connection and pick again (or the same line — it will retry)."],"The survey could not reach the terrain servers"),Nn=await gs.openEntry();continue}}const{manifest:W,frame:B,query:L,water:X,grid:k,gridFar:J,dems:Z}=N??(y.url?await ym(y.url,R):await pS(R));{const Fe=bt()?i.get("bootblock"):null;if(Fe){await new Promise(ie=>requestAnimationFrame(()=>ie()));const F=performance.now()+Number(Fe);for(;performance.now()<F;);await new Promise(ie=>requestAnimationFrame(()=>ie())),R("bootblock")}}const ee=b?{a:b.a,b:b.b}:{a:W.site.a,b:W.site.b},me=(Nn==null?void 0:Nn.spawn)==="B"?{a:ee.b,b:ee.a}:ee,{state:K}=EA(me.a,me.b,B),j=30,Q={heightAt:(Fe,F)=>L.landformHeightAt(Fe,F,j),cellM:j,halfM:O?O.halfM:Math.min(10500,K.lengthM/2+3e3)};L.setFilterExtent(Q.halfM),n.note("filter-extent"),Xi==="repro"&&L.setFilterUnitFrame(!0);const H=await qS(Q,_.BOOT_SLICE_BUDGET_MS);n.note("factor-zgrid");const $=N?Cm(B,w??new Map,C,Q,H):W&&W.factors?await ZS(B,W.factors,y.url?y.url.replace(/\/tiles\/manifest\.json$/,""):"/fixtures",Q,H):null;let re=null,oe=O?O.src:null;const de=()=>{const Fe=Math.floor(Q.halfM*2/jn);if(!oe){oe=new Float32Array(Fe*Fe);for(let F=0;F<Fe;F++)for(let ie=0;ie<Fe;ie++)oe[F*Fe+ie]=L.landformHeightAt(ie*jn-Q.halfM,F*jn-Q.halfM)}return hA(oe,Fe,jn,Q.halfM,$,(F,ie)=>({x:F*jn-Q.halfM,z:ie*jn-Q.halfM}),(F,ie)=>X.depthAt(F,ie)>0)};n.note("factors");const Me=bt()&&new URLSearchParams(location.search).get("bake")==="0",V=N!==null&&!N.grid,Ae=Ia();$&&!Me&&!V&&!Ae?(re=de(),L.applyBakedBand(re.baked,re.g,re.cellM,re.halfM),console.log(`[bake] ${re.g}²·${jn} m in ${re.wallMs.toFixed(0)} ms · budget ${re.budget.map(Fe=>`${Fe.band}=${Fe.rms.toFixed(2)}`).join(" ")}${re.b1Clamped?" · B1 CLAMPED to fit":""}`)):console.log(Ae?`[bake] SKIPPED: every bake-side erosion stage is off in the current mode (${Tr()}) — the dev tuner's doing, stated not silent`:Me?"[bake] DISABLED by ?bake=0 (the A/B lever)":V?"[bake] SKIPPED: the live cover fetch failed, so there is no water mask to hold shorelines against — an un-held bake is worse than none (G4, stated)":"[bake] skipped: no factor field on this boot (stated, not silent)"),n.note("bake");let ve=null,Ie=null,be=null;const Ne=new URLSearchParams(location.search).get("pool"),se=Ne===null?_.CHUNK_POOL_WORKERS:Math.max(0,Math.floor(Number(Ne))||0),fe=W!==null&&!Rt.liveTiles?yb(()=>{if(!Ia())return null;const Fe=Ie??be;return{frame:{lat:B.lat,lon:B.lon},dems:Z.map(F=>F.snapshot()),grid:k,overrides:L.detailOverrides(),filterHalfM:L.filterExtentM(),siteReliefM:L.siteRelief().reliefM,plantM:bt()&&i.get("poolplant")==="1"?.001:0,renature:qh,net:Fe&&Yt().drainage?mo(Fe):null,mode:{...Yt()},filterParams:{...nr()},drainageParams:{...Ms()}}},Ry(),_.CHUNK_SIZE_M,se,{primaryFirst:!0}):null,G=()=>{if(L.applyDrainageField(null),Ie=null,be=null,!Yt().drainage){ve=null;return}const Fe=Ms(),F=aS((we,ge)=>L.landformBakedHeightAt(we,ge),(we,ge)=>X.depthAt(we,ge)>0,Q.halfM,Fe),ie=hc(F);L.applyDrainageField(ie),Ie=F;const _e={...F.stats,wallMs:F.stats.wallMs+ie.buildMs};ve=_e,console.log(`[drainage] params A_min=${Fe.channelAreaM2} skirt=${Fe.skirtDepthM}/${Fe.skirtRadiusM} depthMax=${Fe.depthMaxM} bank=${Fe.bankDeg} · ${F.g}²·${F.cellM} m · ${_e.channelCells} channel cells · density ${_e.densityKmPerKm2.toFixed(2)} km/km² · spacing ${_e.spacingM.toFixed(0)} m · depth mean/p90/max ${_e.depthMeanM.toFixed(1)}/${_e.depthP90M.toFixed(1)}/${_e.depthMaxM.toFixed(1)} m · Horton R_b ${_e.bifurcation.map(we=>we.toFixed(1)).join("/")} · ${_e.wallMs.toFixed(0)} ms`)},P=dA(`${y.id??"live"}|${me.a.lat},${me.a.lon}->${me.b.lat},${me.b.lon}`,Tr(),Ms());{const Fe=await rf("drainage-cache");let F=Yt().drainage?await fA(Fe,P):null;if(!F&&Yt().drainage)try{const ie=await fetch(`./fixtures/drainage/${P}.bin.gz`);if(ie.ok){const _e=await ie.clone().arrayBuffer(),we=new Uint8Array(_e,0,Math.min(2,_e.byteLength)),ge=we[0]===31&&we[1]===139,ze=ge&&ie.body?await new Response(ie.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():await ie.arrayBuffer(),Ve=Lh(new Uint8Array(ze));Ve&&(F=Ve,console.log(`[drainage] SHIPPED NET (${P}) — no carve needed (${ge?"gunzipped here":"transport already decompressed it"})`),af(Fe,P,Ve))}}catch{}if(F&&F.g===Math.floor(Q.halfM*2/Ms().cellM)+1){L.applyDrainageField(null);let ie;if(fe&&fe.anyReady())try{n.note("field-await"),ie=await fe.field(mo(F))}catch(we){console.warn("[drainage] pool field failed, building on main:",we.message)}else fe&&fe.field(mo(F)).catch(we=>console.warn("[drainage] primary net install failed (chunks fall to main):",we.message));const _e=hc(F,ie);L.applyDrainageField(_e),ve={...F.stats,wallMs:_e.buildMs},be=F,console.log(`[drainage] CACHE HIT (${P}) — field ${ie?"parts from the pool primary, closures":""} rebuilt in ${_e.buildMs.toFixed(0)} ms (build was ${F.stats.wallMs.toFixed(0)} ms)`)}else{let ie=!1;if(fe&&Yt().drainage)try{n.note("carve-await");const _e=await fe.carve(Q.halfM),we=Lh(_e.netBytes);if(!we)throw new Error("the carved net did not deserialize");L.applyDrainageField(null);const ge=hc(we,_e.parts);L.applyDrainageField(ge),Ie=we,ve={...we.stats,wallMs:_e.wallMs+ge.buildMs},ie=!0,console.log(`[drainage] carved on the pool primary in ${_e.wallMs.toFixed(0)} ms (${_e.channelCells} channel cells); field closures ${ge.buildMs.toFixed(0)} ms on main`)}catch(_e){console.warn("[drainage] pool carve failed, carving on main:",_e.message)}ie||G(),Ie&&af(Fe,P,Ie).then(()=>console.log(`[drainage] cached (${P})`))}}fe==null||fe.fanOut();const ne=RR(K.a.x,K.a.z,K.bearingRad,L),pe={current:{fwd:0,strafe:0,yaw:K.bearingRad,pitch:0,sprint:!1}},ae={scene:c,camera:h,renderer:a,clock:{realTimeElapsed:0,lastDt:0,simTick:0},flags:{paused:!1,debug:_.DEBUG_AT_BOOT},seed:1,world:{frame:B,query:L,water:X,cover:k?ef(B,k,{renature:w0}):TS(),coverFarGrid:J??void 0,factors:$??void 0},mission:K,player:ne,input:pe,ui:{root:null},data:{mode:t,manifest:W}};let Ee=null;if(Rt.liveTiles&&W){const Fe=mS(W),F=new Map(Z.map(ie=>[ie.zoom,ie]));Ee=US({frame:B,nearZoom:Fe.spec.nearZoom,coarse:Fe.spec.coarse,source:new yh,cache:await rf(),nearRadiusTiles:_.TILE_NEAR_RADIUS_TILES,loadsPerStep:4,decodeRowsPerStep:_.TILE_DECODE_ROWS_PER_STEP,onTile:(ie,_e)=>{var we;return(we=F.get(ie.z))==null?void 0:we.addTile(ie.x,ie.y,_e)},onUnload:ie=>{var _e;return(_e=F.get(ie.z))==null?void 0:_e.removeTile(ie.x,ie.y)}})}n.note("drainage");const Ue=BA(ae);n.note("environment");const Pe=await Promise.all(X.bodies.map(Fe=>vy(Fe,L,_.BOOT_SLICE_BUDGET_MS)));n.note("water-samples");const Oe=by(ae,Ue,fe,Pe);n.note("terrain");const Ge={uWind:{value:new et(0,0,0,0)}},le=MR(ae,Ue,Ge,a,jf?Number(jf):void 0);n.note("dressing");const xe=xR(le);n.note("dressing+obstacles");const De=dy(ae,Ue,Ge);n.note("groundcover"),n.note("groundcover-created");const Te=RT(Ue,Oe.material(),De,le),Y=[Oe.material().userData.uniforms,le.material().userData.snow],ce=hT(Ue,Te,De.wind(),ae.seed,Y);PR(ae);const Se=Eb(ae),q=$R(ae);D.bindGps(()=>q.visible());const A=eb(ae),U=Mb(ae),T=Ab(ae),I=IR(ae),z=CR(ae,a.domElement),te=AA(),he=new vu;q.setVisible(!1),I.enabled=!1,z.enabled=!1;const ye=(Fe,F)=>{bR(ne,Fe,F,L,ae.world.cover,xe),xA(ae,F),ae.clock.simTick++},Re=()=>{q.setVisible(!1),U.setShown(!1),I.enabled=!1,z.enabled=!1,T.show(bm(wo(K)),K)},Ce=()=>{K.phase==="arriving"&&(vA(K),n.mark("walking"),q.setVisible(!0),I.enabled=!0,z.enabled=!0)},Le=()=>{SA(K),Kh(ne,K.a.x,K.a.z,L),ne.yaw=K.bearingRad,ne.pitch=0,pe.current={fwd:0,strafe:0,yaw:K.bearingRad,pitch:0,sprint:!1},he.clear(),T.hide(),q.setVisible(!1),U.setShown(!1),I.enabled=!1,z.enabled=!1,tr(ae)};Se.onDone(Ce);let ke=!1;const Be=[],He={pose:null},ot=()=>{const Fe=He.pose;if(!Fe){tr(ae);return}h.position.set(Fe.x,Fe.y,Fe.z),h.rotation.order="YXZ",h.rotation.y=-Fe.yaw,h.rotation.x=Fe.pitch},je={frame:null},ht=gs??Xf(ae.ui.root??document.body);Rt.devTuner;const ut=DT(ae,{season:Te,weather:ce,ab:{uniforms:()=>Oe.material().userData.uniforms??null,invalidateCover:()=>{De.invalidate()}},nav:{teleport:(Fe,F)=>{Kh(ae.player,Fe,F,L),tr(ae)}},erosion:{mode:()=>Yt(),setMode:Fe=>Ki(Fe),stages:()=>_l,params:()=>nr(),setParams:Fe=>ja(Fe),bound:()=>Ss(nr()),drainageParams:()=>Ms(),setDrainageParams:Fe=>Qa(Fe),drainageStats:()=>ve?{channelCells:ve.channelCells,densityKmPerKm2:ve.densityKmPerKm2,spacingM:ve.spacingM,depthP90M:ve.depthP90M,wallMs:ve.wallMs}:null,apply:()=>{const Fe=performance.now();let F=!1;if(Ia())L.clearBakedBand();else{const ie=de();L.applyBakedBand(ie.baked,ie.g,ie.cellM,ie.halfM),F=!0}return G(),L.setDetailOverrides(L.detailOverrides()),Oe.rebuildAll(),{modeKey:Tr(),bakeRan:F,wallMs:performance.now()-Fe}}},rebuildTerrain:()=>Oe.rebuildAll(),invalidateDressing:()=>le.invalidate(),invalidateGroundCover:()=>De.invalidate(),invalidateColliders:()=>xe.invalidate()}),Ze=IT();let at=Rt.devTuner&&new URLSearchParams(location.search).get("panel")!=="0";{ut==null||ut.setVisible(at);const Fe=document.createElement("div");Fe.style.cssText="position:fixed;right:8px;top:8px;z-index:50;font:11px ui-monospace,monospace;color:#9fb0a4;background:rgba(12,18,14,0.62);padding:3px 7px;border-radius:3px;pointer-events:none",Fe.textContent="` tuner · F fly · M map",(ae.ui.root??document.body).appendChild(Fe),window.addEventListener("keydown",F=>{const ie=F.target;ie instanceof HTMLElement&&(ie.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(ie.tagName))||(F.code==="Backquote"?(at=!at,ut==null||ut.setVisible(at)):F.code==="KeyF"&&Ze&&(Fe.textContent=Ze.toggle(ae)?"` tuner · F fly · M map  [FLYING]":"` tuner · F fly · M map"))})}Nn&&ht.onAbandon(()=>{location.href=location.pathname}),window.addEventListener("keydown",Fe=>{if(Fe.code!=="KeyM"||Fe.repeat)return;const F=Fe.target;F instanceof HTMLElement&&(F.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(F.tagName))||(ht.isOpen()?(ht.close(),z.enabled=!0):(z.enabled=!1,document.pointerLockElement&&document.exitPointerLock(),ht.open()))});const Lt=Qb(ae,{aaLevels:M,initial:E,offerAo:!1,onChange:Fe=>{g==null||g.setSamples(Fe.aaSamples),nT(f,Fe)}});window.addEventListener("keydown",Fe=>{if(Fe.code!=="KeyO"&&Fe.code!=="Escape"||Fe.repeat)return;const F=Fe.target;F instanceof HTMLElement&&(F.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(F.tagName))||(Lt.toggle(),Lt.visible()?(z.enabled=!1,document.pointerLockElement&&document.exitPointerLock()):ht.isOpen()||(z.enabled=!0))}),window.addEventListener("keydown",Fe=>{if(Fe.code!=="KeyG"||Fe.repeat)return;const F=Fe.target;F instanceof HTMLElement&&(F.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(F.tagName))||q.setStowed(!q.stowed())}),window.addEventListener("keydown",Fe=>{if(Fe.code!=="KeyC"||Fe.repeat||Ze!=null&&Ze.active())return;const F=Fe.target;F instanceof HTMLElement&&(F.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(F.tagName))||A.setRaised(!A.raised())}),window.addEventListener("keydown",Fe=>{if(Fe.code!=="KeyN"||Fe.repeat)return;const F=Fe.target;F instanceof HTMLElement&&(F.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(F.tagName))||K.phase!=="walking"||ht.isOpen()||U.toggle()});const Zt=_T({ctx:ae,terrain:Oe,device:q,result:T,arrival:Se,log:he,stepSim:ye,resetToA:Le,handOver:Ce,finish:Re,frameDeltas:Be,gpuTimer:l,post:g,freeCam:He,inputOverride:je,stream:Ee,planner:ht,bootTimings:n,packId:y.id,dcKey:P,getDrainageNet:()=>Ie??be,dressing:le,obstacles:xe,groundCover:De,season:Te,weather:ce,tuner:ut,factorField:$,bakeState:re,runBake:de,runDrainage:G,compass:A,paperMap:U,env:Ue,sharedWind:Ge,forceRender:()=>{g?g.render():a.render(c,h)}});n.note("systems"),await Oe.firstShellBuilt(),n.note("shell-await"),Se.start(),tr(ae),Zt.entryPick=()=>Nn,window.__game={ready:!0,ctx:ae,features:Rt,debug:Zt};let wt=performance.now();const It=()=>{var _e;const Fe=performance.now(),F=(Fe-wt)/1e3;wt=Fe,Be.push(F*1e3),Be.length>600&&Be.shift();const ie=Math.min(F,.25);ae.flags.paused||(ae.clock.lastDt=ie,ae.clock.realTimeElapsed+=ie,!ht.isOpen()&&!Lt.visible()&&I.sample(ae),je.frame&&(pe.current={...je.frame}),Ze!=null&&Ze.active()?(ne.yaw=pe.current.yaw,ne.pitch=pe.current.pitch,Ze.update(ae,ie)):K.phase==="walking"?te.advance(ie,we=>{const ge=Nm(pe.current);he.record(ge),ye(ge,we),K.phase==="finished"&&Re()}):K.phase==="arriving"&&(ne.yaw=pe.current.yaw,ne.pitch=pe.current.pitch),Se.update(ae,ie)),ot(),Ee&&(Ee.update(ae.player.x,ae.player.z),Ee.step()),Oe.update(ae),le.update(ae);{const we=ae.player.x,ge=ae.player.z;Zh>0?le.setRing(we,ge,_.DRESSING_FAR_M-_.DRESSING_RECENTER_M,Zh):le.setRing(we,ge,1e6,1);const ze=(_e=Oe.material().userData.uniforms)==null?void 0:_e.uTreeRing;ze&&ze.value.set(we,ge,_.DRESSING_FAR_M-_.DRESSING_RECENTER_M,_.DRESSING_RECENTER_M)}De.update(ae),!ke&&Oe.drained()&&(ke=!0,n.mark("terrain-first-drain")),ce.update(ae),Ue.update(ae),q.update(ae),A.update(ae),l.begin(),a.info.reset(),g?g.render():a.render(c,h),l.end(),requestAnimationFrame(It)};requestAnimationFrame(It)}BT().catch(n=>{console.error("[beeline] boot failed",n),window.__game={ready:!1}});export{_ as T,Uh as _,um as b,Rm as c,_u as h,bb as l,IS as v};
