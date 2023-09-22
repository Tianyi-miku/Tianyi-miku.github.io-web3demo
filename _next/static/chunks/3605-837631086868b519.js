"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3605],{3605:function(t,e,i){i.d(e,{dF:function(){return p},fi:function(){return w}});var n=i(95279),r=i(65541),l=i(79635),s=i(60533);let u=BigInt(-1),a=BigInt(0),o=BigInt(1),h=BigInt(5),f={},d="0000";for(;d.length<80;)d+=d;function m(t){let e=d;for(;e.length<t;)e+=e;return BigInt("1"+e.substring(0,t))}function c(t,e,i){let r=BigInt(e.width);if(e.signed){let e=o<<r-o;(0,n.hu)(null==i||t>=-e&&t<e,"overflow","NUMERIC_FAULT",{operation:i,fault:"overflow",value:t}),t=t>a?(0,l._Y)((0,l.sS)(t,r),r):-(0,l._Y)((0,l.sS)(-t,r),r)}else{let e=o<<r;(0,n.hu)(null==i||t>=0&&t<e,"overflow","NUMERIC_FAULT",{operation:i,fault:"overflow",value:t}),t=(t%e+e)%e&e-o}return t}function v(t){"number"==typeof t&&(t=`fixed128x${t}`);let e=!0,i=128,r=18;if("string"==typeof t){if("fixed"===t);else if("ufixed"===t)e=!1;else{let l=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);(0,n.en)(l,"invalid fixed format","format",t),e="u"!==l[1],i=parseInt(l[2]),r=parseInt(l[3])}}else if(t){let l=t,s=(t,e,i)=>null==l[t]?i:((0,n.en)(typeof l[t]===e,"invalid fixed format ("+t+" not "+e+")","format."+t,l[t]),l[t]);e=s("signed","boolean",e),i=s("width","number",i),r=s("decimals","number",r)}(0,n.en)(i%8==0,"invalid FixedNumber width (not byte aligned)","format.width",i),(0,n.en)(r<=80,"invalid FixedNumber decimals (too large)","format.decimals",r);let l=(e?"":"u")+"fixed"+String(i)+"x"+String(r);return{signed:e,width:i,decimals:r,name:l}}class g{format;#t;#e;#i;_value;constructor(t,e,i){(0,n.NK)(t,f,"FixedNumber"),this.#e=e,this.#t=i;let r=function(t,e){let i="";t<a&&(i="-",t*=u);let n=t.toString();if(0===e)return i+n;for(;n.length<=e;)n=d+n;let r=n.length-e;for(n=n.substring(0,r)+"."+n.substring(r);"0"===n[0]&&"."!==n[1];)n=n.substring(1);for(;"0"===n[n.length-1]&&"."!==n[n.length-2];)n=n.substring(0,n.length-1);return i+n}(e,i.decimals);(0,s.h)(this,{format:i.name,_value:r}),this.#i=m(i.decimals)}get signed(){return this.#t.signed}get width(){return this.#t.width}get decimals(){return this.#t.decimals}get value(){return this.#e}#n(t){(0,n.en)(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)}#r(t,e){return t=c(t,this.#t,e),new g(f,t,this.#t)}#l(t,e){return this.#n(t),this.#r(this.#e+t.#e,e)}addUnsafe(t){return this.#l(t)}add(t){return this.#l(t,"add")}#s(t,e){return this.#n(t),this.#r(this.#e-t.#e,e)}subUnsafe(t){return this.#s(t)}sub(t){return this.#s(t,"sub")}#u(t,e){return this.#n(t),this.#r(this.#e*t.#e/this.#i,e)}mulUnsafe(t){return this.#u(t)}mul(t){return this.#u(t,"mul")}mulSignal(t){this.#n(t);let e=this.#e*t.#e;return(0,n.hu)(e%this.#i===a,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),this.#r(e/this.#i,"mulSignal")}#a(t,e){return(0,n.hu)(t.#e!==a,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),this.#n(t),this.#r(this.#e*this.#i/t.#e,e)}divUnsafe(t){return this.#a(t)}div(t){return this.#a(t,"div")}divSignal(t){(0,n.hu)(t.#e!==a,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),this.#n(t);let e=this.#e*this.#i;return(0,n.hu)(e%t.#e===a,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),this.#r(e/t.#e,"divSignal")}cmp(t){let e=this.value,i=t.value,n=this.decimals-t.decimals;return(n>0?i*=m(n):n<0&&(e*=m(-n)),e<i)?-1:e>i?1:0}eq(t){return 0===this.cmp(t)}lt(t){return 0>this.cmp(t)}lte(t){return 0>=this.cmp(t)}gt(t){return this.cmp(t)>0}gte(t){return this.cmp(t)>=0}floor(){let t=this.#e;return this.#e<a&&(t-=this.#i-o),t=this.#e/this.#i*this.#i,this.#r(t,"floor")}ceiling(){let t=this.#e;return this.#e>a&&(t+=this.#i-o),t=this.#e/this.#i*this.#i,this.#r(t,"ceiling")}round(t){if(null==t&&(t=0),t>=this.decimals)return this;let e=this.decimals-t,i=h*m(e-1),n=this.value+i,r=m(e);return c(n=n/r*r,this.#t,"round"),new g(f,n,this.#t)}isZero(){return this.#e===a}isNegative(){return this.#e<a}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return g.fromString(this.toString(),t)}static fromValue(t,e,i){let r=null==e?0:(0,l.Dx)(e),s=v(i),u=(0,l.yT)(t,"value"),o=r-s.decimals;if(o>0){let e=m(o);(0,n.hu)(u%e===a,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),u/=e}else o<0&&(u*=m(-o));return c(u,s,"fromValue"),new g(f,u,s)}static fromString(t,e){let i=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);(0,n.en)(i&&i[2].length+i[3].length>0,"invalid FixedNumber string value","value",t);let r=v(e),l=i[2]||"0",s=i[3]||"";for(;s.length<r.decimals;)s+=d;(0,n.hu)(s.substring(r.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),s=s.substring(0,r.decimals);let u=BigInt(i[1]+l+s);return c(u,r,"fromString"),new g(f,u,r)}static fromBytes(t,e){let i=(0,l.Gh)((0,r.Pw)(t,"value")),n=v(e);return n.signed&&(i=(0,l._Y)(i,n.width)),c(i,n,"fromBytes"),new g(f,i,n)}}let b=["wei","kwei","mwei","gwei","szabo","finney","ether"];function p(t){return function(t,e){let i=18;if("string"==typeof e){let t=b.indexOf(e);(0,n.en)(t>=0,"invalid unit","unit",e),i=3*t}else null!=e&&(i=(0,l.Dx)(e,"unit"));return g.fromValue(t,i,{decimals:i,width:512}).toString()}(t,18)}function w(t){return function(t,e){(0,n.en)("string"==typeof t,"value must be a string","value",t);let i=18;if("string"==typeof e){let t=b.indexOf(e);(0,n.en)(t>=0,"invalid unit","unit",e),i=3*t}else null!=e&&(i=(0,l.Dx)(e,"unit"));return g.fromString(t,{decimals:i,width:512}).value}(t,18)}}}]);