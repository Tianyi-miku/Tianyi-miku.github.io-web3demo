"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2044],{98167:function(e,t,o){var r=o(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.PresetStatusColorTypes=void 0,t.isPresetColor=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return t?[].concat((0,l.default)(n),(0,l.default)(a.PresetColors)).includes(e):a.PresetColors.includes(e)},t.isPresetStatusColor=function(e){return i.includes(e)};var l=r(o(15433)),a=o(30113);let n=a.PresetColors.map(e=>`${e}-inverse`),i=["success","processing","error","default","warning"];t.PresetStatusColorTypes=i},22457:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{arrowWidth:t,autoAdjustOverflow:o,arrowPointAtCenter:s,offset:f,borderRadius:c,visibleFirst:p}=e,u=t/2,d={};return Object.keys(a).forEach(e=>{let g=s&&n[e]||a[e],m=Object.assign(Object.assign({},g),{offset:[0,0]});switch(d[e]=m,i.has(e)&&(m.autoArrow=!1),e){case"top":case"topLeft":case"topRight":m.offset[1]=-u-f;break;case"bottom":case"bottomLeft":case"bottomRight":m.offset[1]=u+f;break;case"left":case"leftTop":case"leftBottom":m.offset[0]=-u-f;break;case"right":case"rightTop":case"rightBottom":m.offset[0]=u+f}let b=(0,r.getArrowOffset)({contentRadius:c,limitVerticalRadius:!0});if(s)switch(e){case"topLeft":case"bottomLeft":m.offset[0]=-b.dropdownArrowOffset-u;break;case"topRight":case"bottomRight":m.offset[0]=b.dropdownArrowOffset+u;break;case"leftTop":case"rightTop":m.offset[1]=-b.dropdownArrowOffset-u;break;case"leftBottom":case"rightBottom":m.offset[1]=b.dropdownArrowOffset+u}m.overflow=l(e,b,t,o),p&&(m.htmlRegion="visibleFirst")}),d},t.getOverflowOptions=l;var r=o(17481);function l(e,t,o,r){if(!1===r)return{adjustX:!1,adjustY:!1};let l=r&&"object"==typeof r?r:{},a={};switch(e){case"top":case"bottom":a.shiftX=2*t.dropdownArrowOffset+o;break;case"left":case"right":a.shiftY=2*t.dropdownArrowOffsetVertical+o}let n=Object.assign(Object.assign({},a),l);return n.shiftX||(n.adjustX=!0),n.shiftY||(n.adjustY=!0),n}let a={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},n={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},i=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"])},17481:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_VERTICAL_CONTENT_RADIUS=void 0,t.default=function(e,t){var o,a,n,i,s,f,c,p;let{componentCls:u,sizePopupArrow:d,borderRadiusXS:g,borderRadiusOuter:m,boxShadowPopoverArrow:b}=e,{colorBg:v,contentRadius:h=e.borderRadiusLG,limitVerticalRadius:y,arrowDistance:w=0,arrowPlacement:C={left:!0,right:!0,top:!0,bottom:!0}}=t,{dropdownArrowOffsetVertical:O,dropdownArrowOffset:_}=l({contentRadius:h,limitVerticalRadius:y});return{[u]:Object.assign(Object.assign(Object.assign(Object.assign({[`${u}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},(0,r.roundedArrow)(d,g,m,v,b)),{"&:before":{background:v}})]},(o=!!C.top,a={[`&-placement-top ${u}-arrow,&-placement-topLeft ${u}-arrow,&-placement-topRight ${u}-arrow`]:{bottom:w,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${u}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${u}-arrow`]:{left:{_skip_check_:!0,value:_}},[`&-placement-topRight ${u}-arrow`]:{right:{_skip_check_:!0,value:_}}},o?a:{})),(n=!!C.bottom,i={[`&-placement-bottom ${u}-arrow,&-placement-bottomLeft ${u}-arrow,&-placement-bottomRight ${u}-arrow`]:{top:w,transform:"translateY(-100%)"},[`&-placement-bottom ${u}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${u}-arrow`]:{left:{_skip_check_:!0,value:_}},[`&-placement-bottomRight ${u}-arrow`]:{right:{_skip_check_:!0,value:_}}},n?i:{})),(s=!!C.left,f={[`&-placement-left ${u}-arrow,&-placement-leftTop ${u}-arrow,&-placement-leftBottom ${u}-arrow`]:{right:{_skip_check_:!0,value:w},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${u}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${u}-arrow`]:{top:O},[`&-placement-leftBottom ${u}-arrow`]:{bottom:O}},s?f:{})),(c=!!C.right,p={[`&-placement-right ${u}-arrow,&-placement-rightTop ${u}-arrow,&-placement-rightBottom ${u}-arrow`]:{left:{_skip_check_:!0,value:w},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${u}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${u}-arrow`]:{top:O},[`&-placement-rightBottom ${u}-arrow`]:{bottom:O}},c?p:{}))}},t.getArrowOffset=l;var r=o(58682);function l(e){let{contentRadius:t,limitVerticalRadius:o}=e,r=t>12?t+2:12;return{dropdownArrowOffset:r,dropdownArrowOffsetVertical:o?8:r}}t.MAX_VERTICAL_CONTENT_RADIUS=8},88031:function(e,t,o){var r=o(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(81792),a=r(o(51651)),n=r(o(69920)),i=r(o(26985));t.default=e=>{let t=(null==e?void 0:e.algorithm)?(0,l.createTheme)(e.algorithm):(0,l.createTheme)(a.default),o=Object.assign(Object.assign({},n.default),null==e?void 0:e.token);return(0,l.getComputedToken)(o,{override:null==e?void 0:e.token},t,i.default)}},94854:function(e,t,o){var r=o(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o(88031)),a=o(18710),n=r(o(15976)),i=r(o(82886)),s=r(o(51651)),f={defaultConfig:a.defaultConfig,defaultSeed:a.defaultConfig.token,useToken:function(){let[e,t,o]=(0,a.useToken)();return{theme:e,token:t,hashId:o}},defaultAlgorithm:s.default,darkAlgorithm:i.default,compactAlgorithm:n.default,getDesignToken:l.default};t.default=f},26168:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{sizeUnit:t,sizeStep:o}=e,r=o-2;return{sizeXXL:t*(r+10),sizeXL:t*(r+6),sizeLG:t*(r+2),sizeMD:t*(r+2),sizeMS:t*(r+1),size:t*r,sizeSM:t*r,sizeXS:t*(r-1),sizeXXS:t*(r-1)}}},15976:function(e,t,o){var r=o(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o(79806)),a=r(o(51651)),n=r(o(26168)),i=r(o(85028));t.default=(e,t)=>{let o=null!=t?t:(0,a.default)(e),r=o.fontSizeSM,s=o.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o),(0,n.default)(null!=t?t:e)),(0,i.default)(r)),{controlHeight:s}),(0,l.default)(Object.assign(Object.assign({},o),{controlHeight:s})))}},37759:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.getSolidColor=t.getAlphaColor=void 0;var r=o(99175);t.getAlphaColor=(e,t)=>new r.TinyColor(e).setAlpha(t).toRgbString(),t.getSolidColor=(e,t)=>{let o=new r.TinyColor(e);return o.lighten(t).toHexString()}},31854:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.generateNeutralColorPalettes=t.generateColorPalettes=void 0;var r=o(1032),l=o(37759);t.generateColorPalettes=e=>{let t=(0,r.generate)(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},t.generateNeutralColorPalettes=(e,t)=>{let o=e||"#000",r=t||"#fff";return{colorBgBase:o,colorTextBase:r,colorText:(0,l.getAlphaColor)(r,.85),colorTextSecondary:(0,l.getAlphaColor)(r,.65),colorTextTertiary:(0,l.getAlphaColor)(r,.45),colorTextQuaternary:(0,l.getAlphaColor)(r,.25),colorFill:(0,l.getAlphaColor)(r,.18),colorFillSecondary:(0,l.getAlphaColor)(r,.12),colorFillTertiary:(0,l.getAlphaColor)(r,.08),colorFillQuaternary:(0,l.getAlphaColor)(r,.04),colorBgElevated:(0,l.getSolidColor)(o,12),colorBgContainer:(0,l.getSolidColor)(o,8),colorBgLayout:(0,l.getSolidColor)(o,0),colorBgSpotlight:(0,l.getSolidColor)(o,26),colorBorder:(0,l.getSolidColor)(o,26),colorBorderSecondary:(0,l.getSolidColor)(o,19)}}},82886:function(e,t,o){var r=o(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(1032),a=o(69920),n=r(o(76699)),i=o(31854),s=r(o(51651));t.default=(e,t)=>{let o=Object.keys(a.defaultPresetColors).map(t=>{let o=(0,l.generate)(e[t],{theme:"dark"});return Array(10).fill(1).reduce((e,r,l)=>(e[`${t}-${l+1}`]=o[l],e[`${t}${l+1}`]=o[l],e),{})}).reduce((e,t)=>e=Object.assign(Object.assign({},e),t),{}),r=null!=t?t:(0,s.default)(e);return Object.assign(Object.assign(Object.assign({},r),o),(0,n.default)(e,{generateColorPalettes:i.generateColorPalettes,generateNeutralColorPalettes:i.generateNeutralColorPalettes}))}},62877:function(e,t,o){var r=o(36199).default,l=o(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(o(54440)),n=o(36680),i=r(o(2265)),s=o(9273),f=l(o(46156)),c=o(91327);t.default=e=>{let{prefixCls:t,className:o,placement:r="top",title:l,color:p,overlayInnerStyle:u}=e,{getPrefixCls:d}=i.useContext(s.ConfigContext),g=d("tooltip",t),[m,b]=(0,f.default)(g,!0),v=(0,c.parseColor)(g,p),h=v.arrowStyle,y=Object.assign(Object.assign({},u),v.overlayStyle),w=(0,a.default)(b,g,`${g}-pure`,`${g}-placement-${r}`,o,v.className);return m(i.createElement("div",{className:w,style:h},i.createElement("div",{className:`${g}-arrow`}),i.createElement(n.Popup,Object.assign({},e,{className:b,prefixCls:g,overlayInnerStyle:y}),l)))}},82044:function(e,t,o){var r=o(36199).default,l=o(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(o(54440)),n=l(o(36680)),i=l(o(2960)),s=r(o(2265)),f=o(88658),c=l(o(22457)),p=o(39904);l(o(15218));var u=o(9273),d=o(91637),g=l(o(94854)),m=l(o(62877)),b=l(o(46156)),v=o(91327),h=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(o[r[l]]=e[r[l]]);return o};let{useToken:y}=g.default,w=(e,t)=>{let o={},r=Object.assign({},e);return t.forEach(t=>{e&&t in e&&(o[t]=e[t],delete r[t])}),{picked:o,omitted:r}},C=s.forwardRef((e,t)=>{var o,r;let{prefixCls:l,openClassName:g,getTooltipContainer:m,overlayClassName:C,color:O,overlayInnerStyle:_,children:j,afterOpenChange:k,afterVisibleChange:T,destroyTooltipOnHide:P,arrow:A=!0,title:S,overlay:$,builtinPlacements:N,arrowPointAtCenter:R=!1,autoAdjustOverflow:x=!0}=e,E=!!A,{token:B}=y(),{getPopupContainer:L,getPrefixCls:M,direction:V}=s.useContext(u.ConfigContext),X=s.useRef(null),I=()=>{var e;null===(e=X.current)||void 0===e||e.forceAlign()};s.useImperativeHandle(t,()=>({forceAlign:I,forcePopupAlign:()=>{I()}}));let[D,z]=(0,i.default)(!1,{value:null!==(o=e.open)&&void 0!==o?o:e.visible,defaultValue:null!==(r=e.defaultOpen)&&void 0!==r?r:e.defaultVisible}),Y=!S&&!$&&0!==S,H=s.useMemo(()=>{var e,t;let o=R;return"object"==typeof A&&(o=null!==(t=null!==(e=A.pointAtCenter)&&void 0!==e?e:A.arrowPointAtCenter)&&void 0!==t?t:R),N||(0,c.default)({arrowPointAtCenter:o,autoAdjustOverflow:x,arrowWidth:E?B.sizePopupArrow:0,borderRadius:B.borderRadius,offset:B.marginXXS,visibleFirst:!0})},[R,A,N,B]),F=s.useMemo(()=>0===S?S:$||S||"",[$,S]),W=s.createElement(d.NoCompactStyle,null,"function"==typeof F?F():F),{getPopupContainer:U,placement:Z="top",mouseEnterDelay:G=.1,mouseLeaveDelay:Q=.1,overlayStyle:q,rootClassName:J}=e,K=h(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),ee=M("tooltip",l),et=M(),eo=e["data-popover-inject"],er=D;"open"in e||"visible"in e||!Y||(er=!1);let el=function(e,t){let o=e.type;if((!0===o.__ANT_BUTTON||"button"===e.type)&&e.props.disabled||!0===o.__ANT_SWITCH&&(e.props.disabled||e.props.loading)||!0===o.__ANT_RADIO&&e.props.disabled){let{picked:o,omitted:r}=w(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),l=Object.assign(Object.assign({display:"inline-block"},o),{cursor:"not-allowed",width:e.props.block?"100%":void 0}),n=Object.assign(Object.assign({},r),{pointerEvents:"none"}),i=(0,p.cloneElement)(e,{style:n,className:null});return s.createElement("span",{style:l,className:(0,a.default)(e.props.className,`${t}-disabled-compatible-wrapper`)},i)}return e}((0,p.isValidElement)(j)&&!(0,p.isFragment)(j)?j:s.createElement("span",null,j),ee),ea=el.props,en=ea.className&&"string"!=typeof ea.className?ea.className:(0,a.default)(ea.className,g||`${ee}-open`),[ei,es]=(0,b.default)(ee,!eo),ef=(0,v.parseColor)(ee,O),ec=ef.arrowStyle,ep=Object.assign(Object.assign({},_),ef.overlayStyle),eu=(0,a.default)(C,{[`${ee}-rtl`]:"rtl"===V},ef.className,J,es);return ei(s.createElement(n.default,Object.assign({},K,{showArrow:E,placement:Z,mouseEnterDelay:G,mouseLeaveDelay:Q,prefixCls:ee,overlayClassName:eu,overlayStyle:Object.assign(Object.assign({},ec),q),getTooltipContainer:U||m||L,ref:X,builtinPlacements:H,overlay:W,visible:er,onVisibleChange:t=>{var o,r;z(!Y&&t),Y||(null===(o=e.onOpenChange)||void 0===o||o.call(e,t),null===(r=e.onVisibleChange)||void 0===r||r.call(e,t))},afterVisibleChange:null!=k?k:T,overlayInnerStyle:ep,arrowContent:s.createElement("span",{className:`${ee}-arrow-content`}),motion:{motionName:(0,f.getTransitionName)(et,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!P}),er?(0,p.cloneElement)(el,{className:en}):el))});C._InternalPanelDoNotUseOrYouWillBeFired=m.default,t.default=C},46156:function(e,t,o){var r=o(36199).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(5101),a=o(46420),n=r(o(17481)),i=o(18710);let s=e=>{let{componentCls:t,tooltipMaxWidth:o,tooltipColor:r,tooltipBg:a,tooltipBorderRadius:s,zIndexPopup:f,controlHeight:c,boxShadowSecondary:p,paddingSM:u,paddingXS:d,tooltipRadiusOuter:g}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,l.resetComponent)(e)),{position:"absolute",zIndex:f,display:"block",width:"max-content",maxWidth:o,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":a,[`${t}-inner`]:{minWidth:c,minHeight:c,padding:`${u/2}px ${d}px`,color:r,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:a,borderRadius:s,boxShadow:p,boxSizing:"border-box"},"&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom":{[`${t}-inner`]:{borderRadius:Math.min(s,n.MAX_VERTICAL_CONTENT_RADIUS)}},[`${t}-content`]:{position:"relative"}}),(0,i.genPresetColor)(e,(e,o)=>{let{darkColor:r}=o;return{[`&${t}-${e}`]:{[`${t}-inner`]:{backgroundColor:r},[`${t}-arrow`]:{"--antd-arrow-background-color":r}}}})),{"&-rtl":{direction:"rtl"}})},(0,n.default)((0,i.mergeToken)(e,{borderRadiusOuter:g}),{colorBg:"var(--antd-arrow-background-color)",contentRadius:s,limitVerticalRadius:!0}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]};t.default=(e,t)=>{let o=(0,i.genComponentStyleHook)("Tooltip",e=>{if(!1===t)return[];let{borderRadius:o,colorTextLightSolid:r,colorBgDefault:l,borderRadiusOuter:n}=e,f=(0,i.mergeToken)(e,{tooltipMaxWidth:250,tooltipColor:r,tooltipBorderRadius:o,tooltipBg:l,tooltipRadiusOuter:n>4?4:n});return[s(f),(0,a.initZoomMotion)(e,"zoom-big-fast")]},e=>{let{zIndexPopupBase:t,colorBgSpotlight:o}=e;return{zIndexPopup:t+70,colorBgDefault:o}},{resetStyle:!1});return o(e)}},91327:function(e,t,o){var r=o(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.parseColor=function(e,t){let o=(0,a.isPresetColor)(t),r=(0,l.default)({[`${e}-${t}`]:t&&o}),n={},i={};return t&&!o&&(n.background=t,i["--antd-arrow-background-color"]=t),{className:r,overlayStyle:n,arrowStyle:i}};var l=r(o(54440)),a=o(98167)},36680:function(e,t,o){o.r(t),o.d(t,{Popup:function(){return g},default:function(){return b}});var r=o(13428),l=o(10870),a=o(82554),n=o(24940),i=o(2265),s={shiftX:64,adjustY:1},f={adjustX:1,shiftY:!0},c=[0,0],p={left:{points:["cr","cl"],overflow:f,offset:[-4,0],targetOffset:c},right:{points:["cl","cr"],overflow:f,offset:[4,0],targetOffset:c},top:{points:["bc","tc"],overflow:s,offset:[0,-4],targetOffset:c},bottom:{points:["tc","bc"],overflow:s,offset:[0,4],targetOffset:c},topLeft:{points:["bl","tl"],overflow:s,offset:[0,-4],targetOffset:c},leftTop:{points:["tr","tl"],overflow:f,offset:[-4,0],targetOffset:c},topRight:{points:["br","tr"],overflow:s,offset:[0,-4],targetOffset:c},rightTop:{points:["tl","tr"],overflow:f,offset:[4,0],targetOffset:c},bottomRight:{points:["tr","br"],overflow:s,offset:[0,4],targetOffset:c},rightBottom:{points:["bl","br"],overflow:f,offset:[4,0],targetOffset:c},bottomLeft:{points:["tl","bl"],overflow:s,offset:[0,4],targetOffset:c},leftBottom:{points:["br","bl"],overflow:f,offset:[-4,0],targetOffset:c}},u=o(54440),d=o.n(u);function g(e){var t=e.children,o=e.prefixCls,r=e.id,l=e.overlayInnerStyle,a=e.className,n=e.style;return i.createElement("div",{className:d()("".concat(o,"-content"),a),style:n},i.createElement("div",{className:"".concat(o,"-inner"),id:r,role:"tooltip",style:l},"function"==typeof t?t():t))}var m=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],b=(0,i.forwardRef)(function(e,t){var o=e.overlayClassName,s=e.trigger,f=e.mouseEnterDelay,c=e.mouseLeaveDelay,u=e.overlayStyle,d=e.prefixCls,b=void 0===d?"rc-tooltip":d,v=e.children,h=e.onVisibleChange,y=e.afterVisibleChange,w=e.transitionName,C=e.animation,O=e.motion,_=e.placement,j=e.align,k=e.destroyTooltipOnHide,T=e.defaultVisible,P=e.getTooltipContainer,A=e.overlayInnerStyle,S=(e.arrowContent,e.overlay),$=e.id,N=e.showArrow,R=(0,a.Z)(e,m),x=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,function(){return x.current});var E=(0,l.Z)({},R);return"visible"in e&&(E.popupVisible=e.visible),i.createElement(n.Z,(0,r.Z)({popupClassName:o,prefixCls:b,popup:function(){return i.createElement(g,{key:"content",prefixCls:b,id:$,overlayInnerStyle:A},S)},action:void 0===s?["hover"]:s,builtinPlacements:p,popupPlacement:void 0===_?"right":_,ref:x,popupAlign:void 0===j?{}:j,getPopupContainer:P,onPopupVisibleChange:h,afterPopupVisibleChange:y,popupTransitionName:w,popupAnimation:C,popupMotion:O,defaultPopupVisible:T,autoDestroy:void 0!==k&&k,mouseLeaveDelay:void 0===c?.1:c,popupStyle:u,mouseEnterDelay:void 0===f?0:f,arrow:void 0===N||N},E),v)})}}]);