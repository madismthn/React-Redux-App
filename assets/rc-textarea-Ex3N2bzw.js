import{h as he,c as F,d as Ve,e as T,g as Se,b as de,f as Pe}from"./@babel-CoX8lcXb.js";import{c as j}from"./classnames-C9FZUsQl.js";import{u as $e,B as Me,r as me}from"./rc-input-BnAb7LYK.js";import{y as xe,u as ge,t as pe}from"./rc-util-BNe1t_Cc.js";import{r as d,a as x}from"./react-DHBI0EtI.js";import{R as _e}from"./rc-resize-observer-Dua0P25Q.js";var Le=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Be=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],ie={},p;function Oe(e){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(A&&ie[a])return ie[a];var r=window.getComputedStyle(e),R=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),c=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),o=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),l=Be.map(function(s){return"".concat(s,":").concat(r.getPropertyValue(s))}).join(";"),b={sizingStyle:l,paddingSize:c,borderSize:o,boxSizing:R};return A&&a&&(ie[a]=b),b}function He(e){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;p||(p=document.createElement("textarea"),p.setAttribute("tab-index","-1"),p.setAttribute("aria-hidden","true"),document.body.appendChild(p)),e.getAttribute("wrap")?p.setAttribute("wrap",e.getAttribute("wrap")):p.removeAttribute("wrap");var R=Oe(e,A),c=R.paddingSize,o=R.borderSize,l=R.boxSizing,b=R.sizingStyle;p.setAttribute("style","".concat(b,";").concat(Le)),p.value=e.value||e.placeholder||"";var s=void 0,u=void 0,y,m=p.scrollHeight;if(l==="border-box"?m+=o:l==="content-box"&&(m-=c),a!==null||r!==null){p.value=" ";var N=p.scrollHeight-c;a!==null&&(s=N*a,l==="border-box"&&(s=s+c+o),m=Math.max(s,m)),r!==null&&(u=N*r,l==="border-box"&&(u=u+c+o),y=m>u?"":"hidden",m=Math.min(u,m))}var f={height:m,overflowY:y,resize:"none"};return s&&(f.minHeight=s),u&&(f.maxHeight=u),f}var De=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],le=0,se=1,ue=2,Ke=d.forwardRef(function(e,A){var a=e,r=a.prefixCls;a.onPressEnter;var R=a.defaultValue,c=a.value,o=a.autoSize,l=a.onResize,b=a.className,s=a.style,u=a.disabled,y=a.onChange;a.onInternalAutoSize;var m=he(a,De),N=xe(R,{value:c,postState:function(i){return i??""}}),f=F(N,2),O=f[0],Q=f[1],ee=function(i){Q(i.target.value),y==null||y(i)},g=d.useRef();d.useImperativeHandle(A,function(){return{textArea:g.current}});var $=d.useMemo(function(){return o&&Ve(o)==="object"?[o.minRows,o.maxRows]:[]},[o]),W=F($,2),v=W[0],C=W[1],V=!!o,Z=function(){try{if(document.activeElement===g.current){var i=g.current,D=i.selectionStart,z=i.selectionEnd,J=i.scrollTop;g.current.setSelectionRange(D,z),g.current.scrollTop=J}}catch{}},M=d.useState(ue),k=F(M,2),w=k[0],P=k[1],G=d.useState(),_=F(G,2),te=_[0],X=_[1],U=function(){P(le)};ge(function(){V&&U()},[c,v,C,V]),ge(function(){if(w===le)P(se);else if(w===se){var E=He(g.current,!1,v,C);P(ue),X(E)}else Z()},[w]);var L=d.useRef(),B=function(){pe.cancel(L.current)},ae=function(i){w===ue&&(l==null||l(i),o&&(B(),L.current=pe(function(){U()})))};d.useEffect(function(){return B},[]);var q=V?te:null,H=T(T({},s),q);return(w===le||w===se)&&(H.overflowY="hidden",H.overflowX="hidden"),d.createElement(_e,{onResize:ae,disabled:!(o||l)},d.createElement("textarea",Se({},m,{ref:g,style:H,className:j(r,b,de({},"".concat(r,"-disabled"),u)),disabled:u,value:O,onChange:ee})))}),Ye=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","readOnly"],Ue=x.forwardRef(function(e,A){var a,r=e.defaultValue,R=e.value,c=e.onFocus,o=e.onBlur,l=e.onChange,b=e.allowClear,s=e.maxLength,u=e.onCompositionStart,y=e.onCompositionEnd,m=e.suffix,N=e.prefixCls,f=N===void 0?"rc-textarea":N,O=e.showCount,Q=e.count,ee=e.className,g=e.style,$=e.disabled,W=e.hidden,v=e.classNames,C=e.styles,V=e.onResize,Z=e.readOnly,M=he(e,Ye),k=xe(r,{value:R,defaultValue:r}),w=F(k,2),P=w[0],G=w[1],_=P==null?"":String(P),te=x.useState(!1),X=F(te,2),U=X[0],L=X[1],B=x.useRef(!1),ae=x.useState(null),q=F(ae,2),H=q[0],E=q[1],i=d.useRef(null),D=d.useRef(null),z=function(){var t;return(t=D.current)===null||t===void 0?void 0:t.textArea},J=function(){z().focus()};d.useImperativeHandle(A,function(){var n;return{resizableTextArea:D.current,focus:J,blur:function(){z().blur()},nativeElement:((n=i.current)===null||n===void 0?void 0:n.nativeElement)||z()}}),d.useEffect(function(){L(function(n){return!$&&n})},[$]);var ce=x.useState(null),fe=F(ce,2),ne=fe[0],Re=fe[1];x.useEffect(function(){if(ne){var n;(n=z()).setSelectionRange.apply(n,Pe(ne))}},[ne]);var h=$e(Q,O),K=(a=h.max)!==null&&a!==void 0?a:s,be=Number(K)>0,re=h.strategy(_),ye=!!K&&re>K,ve=function(t,S){var I=S;!B.current&&h.exceedFormatter&&h.max&&h.strategy(S)>h.max&&(I=h.exceedFormatter(S,{max:h.max}),S!==I&&Re([z().selectionStart||0,z().selectionEnd||0])),G(I),me(t.currentTarget,t,l,I)},ze=function(t){B.current=!0,u==null||u(t)},Ce=function(t){B.current=!1,ve(t,t.currentTarget.value),y==null||y(t)},we=function(t){ve(t,t.target.value)},Ee=function(t){var S=M.onPressEnter,I=M.onKeyDown;t.key==="Enter"&&S&&S(t),I==null||I(t)},Ae=function(t){L(!0),c==null||c(t)},Ie=function(t){L(!1),o==null||o(t)},Te=function(t){G(""),J(),me(z(),t,l)},oe=m,Y;h.show&&(h.showFormatter?Y=h.showFormatter({value:_,count:re,maxLength:K}):Y="".concat(re).concat(be?" / ".concat(K):""),oe=x.createElement(x.Fragment,null,oe,x.createElement("span",{className:j("".concat(f,"-data-count"),v==null?void 0:v.count),style:C==null?void 0:C.count},Y)));var Fe=function(t){var S;V==null||V(t),(S=z())!==null&&S!==void 0&&S.style.height&&E(!0)},Ne=!M.autoSize&&!O&&!b;return x.createElement(Me,{ref:i,value:_,allowClear:b,handleReset:Te,suffix:oe,prefixCls:f,classNames:T(T({},v),{},{affixWrapper:j(v==null?void 0:v.affixWrapper,de(de({},"".concat(f,"-show-count"),O),"".concat(f,"-textarea-allow-clear"),b))}),disabled:$,focused:U,className:j(ee,ye&&"".concat(f,"-out-of-range")),style:T(T({},g),H&&!Ne?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Y=="string"?Y:void 0}},hidden:W,readOnly:Z},x.createElement(Ke,Se({},M,{maxLength:s,onKeyDown:Ee,onChange:we,onFocus:Ae,onBlur:Ie,onCompositionStart:ze,onCompositionEnd:Ce,className:j(v==null?void 0:v.textarea),style:T(T({},C==null?void 0:C.textarea),{},{resize:g==null?void 0:g.resize}),disabled:$,prefixCls:f,onResize:Fe,ref:D,readOnly:Z})))});export{Ue as T};
