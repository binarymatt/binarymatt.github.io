(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),d=i(a("VbXa")),s=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=m(t||a||[]);return i&&i.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function R(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+d+s+a+i+t+n+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,d=e.ariaHidden,s=l.default.createElement(O,(0,o.default)({ref:t,src:a},n,{ariaHidden:d}));return i.length>1?l.default.createElement("picture",null,r(i),s):s})),O=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,d=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},m,{onLoad:d,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,d.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,d=e.imgStyle,s=void 0===d?{}:d,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,R=e.draggable,L=g||h;if(!L)return null;var _=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:_?1:0,transition:T?"opacity "+b+"ms":"none"},s),N="boolean"==typeof y?"lightgray":y,k={transitionDelay:b+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},T&&k,s,f),W={title:t,alt:this.state.isVisible?"":a,style:H,className:p,itemProp:w},P=this.state.isHydrated?m(L):L[0];if(g)return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&k)}),P.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:L,generateSources:x}),P.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:L,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,S(L),l.default.createElement(O,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:E},P,{imageVariants:L}))}}));if(h){var j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},T&&k)}),P.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:L,generateSources:x}),P.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:L,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,S(L),l.default.createElement(O,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:E},P,{imageVariants:L}))}}))}return null},t}(l.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function N(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}_.propTypes={resolutions:T,sizes:V,fixed:N(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:N(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=_;t.default=k},FJuR:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),d=a("9eSz"),s=a.n(d),o=a("+ZDr"),l=a.n(o),c=a("ZMKu"),u=a("QArs"),f=a("XCao"),p=a("vOnD"),m=p.b.div.withConfig({displayName:"styles__Posts",componentId:"sc-1dhpyx0-0"})(["",";"],{width:"100%",display:"flex",flexWrap:"wrap"}),g=p.b.div.withConfig({displayName:"styles__Post",componentId:"sc-1dhpyx0-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"50%"},padding:"0.75rem"}),h=p.b.div.withConfig({displayName:"styles__Card",componentId:"sc-1dhpyx0-2"})(["",";"],{width:"100%",height:"100%",borderRadius:"0.5rem",display:"flex",flexDirection:"column",overflow:"hidden",borderWidth:"1px",borderColor:"#e2e8f0"}),y=p.b.div.withConfig({displayName:"styles__Content",componentId:"sc-1dhpyx0-3"})(["",";"],{padding:"1rem",color:"#3c366b"}),b=p.b.figure.withConfig({displayName:"styles__Image",componentId:"sc-1dhpyx0-4"})(["",";"],{width:"100%"}),v=p.b.h3.withConfig({displayName:"styles__Title",componentId:"sc-1dhpyx0-5"})(["",";"],{fontWeight:"600",marginBottom:"1rem"}),w=p.b.p.withConfig({displayName:"styles__Description",componentId:"sc-1dhpyx0-6"})([""]),S=p.b.h3.withConfig({displayName:"styles__Date",componentId:"sc-1dhpyx0-7"})(["",";"],{fontSize:"0.75rem",color:"#667eea"}),E=p.b.div.withConfig({displayName:"styles__Tags",componentId:"sc-1dhpyx0-8"})(["",""],{padding:"1rem",paddingTop:"0.5rem",marginTop:"auto"}),I=p.b.span.withConfig({displayName:"styles__Tag",componentId:"sc-1dhpyx0-9"})(["",""],{fontSize:"0.75rem",color:"#3c366b",borderWidth:"1px",borderColor:"#4fd1c5",borderRadius:"9999px",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",marginRight:"0.5rem"});t.a=function(){var e=Object(n.useStaticQuery)("3823351382"),t=e.markdownRemark,a=e.allMarkdownRemark,i=t.frontmatter,d=a.edges;return r.a.createElement(u.a,{section:!0},r.a.createElement(f.a,{title:i.title,subtitle:i.subtitle,center:!0}),r.a.createElement(m,null,d.map((function(e){var t=e.node,a=t.id,i=t.fields.slug,n=t.frontmatter,d=n.title,o=n.cover,u=n.description,f=n.date,p=n.tags;return r.a.createElement(g,{key:a},r.a.createElement(l.a,{to:i},r.a.createElement(c.a.div,{whileHover:{scale:1.05},whileTap:{scale:1}},r.a.createElement(h,null,r.a.createElement(b,null,o&&r.a.createElement(s.a,{fluid:o.childImageSharp.fluid,alt:d})),r.a.createElement(y,null,r.a.createElement(S,null,f),r.a.createElement(v,null,d),r.a.createElement(w,null,u)),r.a.createElement(E,null,p.map((function(e){return r.a.createElement(I,{key:e},e)})))))))}))))}}}]);
//# sourceMappingURL=d9c56afdfc39b1e352889ccc7d370156b246193c-b7c48861fc9c21da632a.js.map