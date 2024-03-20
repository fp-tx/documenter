(self.webpackChunk_fp_tx_documenter=self.webpackChunk_fp_tx_documenter||[]).push([[401],{4889:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>rt});var a=t(9474),s=t(9571),i=t(6405),r=t(3274),o=a.createContext(null);function c(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(o.Provider,{value:t,children:n})}function l(){var e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){var e,n=l(),t=n.metadata,a=n.frontMatter,i=n.assets;return(0,r.jsx)(s.be,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=t(8923),m=t(7120),h=t(1032),f=t(8159);function v(e){var n=e.permalink,t=e.title,a=e.subLabel,s=e.isNext;return(0,r.jsxs)(f.A,{className:(0,u.A)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[a&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,r.jsx)("div",{className:"pagination-nav__label",children:t})]})}function p(e){var n=e.previous,t=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,r.jsx)(v,Object.assign({},n,{subLabel:(0,r.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,r.jsx)(v,Object.assign({},t,{subLabel:(0,r.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function b(){var e=l().metadata;return(0,r.jsx)(p,{previous:e.previous,next:e.next})}var g=t(1351),x=t(7689),j=t(5086),N=t(5700),A=t(2099);var C={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){var n=C[e.versionMetadata.banner];return(0,r.jsx)(n,Object.assign({},e))}function k(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,r.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(f.A,{to:t,onClick:a,children:(0,r.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function y(e){var n,t=e.className,a=e.versionMetadata,s=(0,g.A)().siteConfig.title,i=(0,x.vT)({failfast:!0}).pluginId,o=(0,N.g1)(i).savePreferredVersionName,c=(0,x.HW)(i),l=c.latestDocSuggestion,d=c.latestVersionSuggestion,m=null!=l?l:(n=d).docs.find((function(e){return e.id===n.mainDocId}));return(0,r.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(L,{siteTitle:s,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(k,{versionLabel:d.label,to:m.path,onClick:function(){return o(d.name)}})})]})}function B(e){var n=e.className,t=(0,A.r)();return t.banner?(0,r.jsx)(y,{className:n,versionMetadata:t}):null}function _(e){var n=e.className,t=(0,A.r)();return t.badge?(0,r.jsx)("span",{className:(0,u.A)(n,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}function w(e){var n=e.lastUpdatedAt,t=e.formattedLastUpdatedAt;return(0,r.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:new Date(1e3*n).toISOString(),children:t})})},children:" on {date}"})}function T(e){var n=e.lastUpdatedBy;return(0,r.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:n})},children:" by {user}"})}function O(e){var n=e.lastUpdatedAt,t=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return(0,r.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,r.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n&&t?(0,r.jsx)(w,{lastUpdatedAt:n,formattedLastUpdatedAt:t}):"",byUser:a?(0,r.jsx)(T,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var E=t(8595);const H={iconEdit:"iconEdit_DyvL"};var M=["className"];function I(e){var n=e.className,t=(0,E.A)(e,M);return(0,r.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(H.iconEdit,n),"aria-hidden":"true"},t,{children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function U(e){var n=e.editUrl;return(0,r.jsxs)(f.A,{to:n,className:j.G.common.editThisPage,children:[(0,r.jsx)(I,{}),(0,r.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const S={tag:"tag_ZHmb",tagRegular:"tagRegular_gWnf",tagWithCount:"tagWithCount_eBXb"};function R(e){var n=e.permalink,t=e.label,a=e.count;return(0,r.jsxs)(f.A,{href:n,className:(0,u.A)(S.tag,a?S.tagWithCount:S.tagRegular),children:[t,a&&(0,r.jsx)("span",{children:a})]})}const z={tags:"tags_XsBE",tag:"tag_R2N3"};function V(e){var n=e.tags;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,u.A)(z.tags,"padding--none","margin-left--sm"),children:n.map((function(e){var n=e.label,t=e.permalink;return(0,r.jsx)("li",{className:z.tag,children:(0,r.jsx)(R,{label:n,permalink:t})},t)}))})]})}const D={lastUpdated:"lastUpdated_UjcI"};function W(e){return(0,r.jsx)("div",{className:(0,u.A)(j.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(V,Object.assign({},e))})})}function G(e){var n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return(0,r.jsxs)("div",{className:(0,u.A)(j.G.docs.docFooterEditMetaRow,"row"),children:[(0,r.jsx)("div",{className:"col",children:n&&(0,r.jsx)(U,{editUrl:n})}),(0,r.jsx)("div",{className:(0,u.A)("col",D.lastUpdated),children:(t||a)&&(0,r.jsx)(O,{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function P(){var e=l().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,s=e.lastUpdatedBy,i=e.tags,o=i.length>0,c=!!(n||t||s);return o||c?(0,r.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,r.jsx)(W,{tags:i}),c&&(0,r.jsx)(G,{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var F=t(8077),q=t(5122),Y=["parentIndex"];function X(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,s=(0,E.A)(e,Y);t>=0?n[t].children.push(s):a.push(s)})),a}function Z(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=Z({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function Q(e){var n=e.getBoundingClientRect();return n.top===n.bottom?Q(e.parentNode):n}function $(e,n){var t,a,s=n.anchorTopOffset,i=e.find((function(e){return Q(e).top>=s}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Q(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function J(){var e=(0,a.useRef)(0),n=(0,q.p)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function K(e){var n=(0,a.useRef)(void 0),t=J();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],s=n;s<=t;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=$(o,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===l)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function ee(e){var n=e.toc,t=e.className,a=e.linkClassName,s=e.isChild;return n.length?(0,r.jsx)("ul",{className:s?void 0:t,children:n.map((function(e){return(0,r.jsxs)("li",{children:[(0,r.jsx)(f.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,r.jsx)(ee,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const ne=a.memo(ee);var te=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function ae(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,i=e.linkClassName,o=void 0===i?"table-of-contents__link":i,c=e.linkActiveClassName,l=void 0===c?void 0:c,d=e.minHeadingLevel,u=e.maxHeadingLevel,m=(0,E.A)(e,te),h=(0,q.p)(),f=null!=d?d:h.tableOfContents.minHeadingLevel,v=null!=u?u:h.tableOfContents.maxHeadingLevel,p=function(e){var n=e.toc,t=e.minHeadingLevel,s=e.maxHeadingLevel;return(0,a.useMemo)((function(){return Z({toc:X(n),minHeadingLevel:t,maxHeadingLevel:s})}),[n,t,s])}({toc:n,minHeadingLevel:f,maxHeadingLevel:v});return K((0,a.useMemo)((function(){if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:v}}),[o,l,f,v])),(0,r.jsx)(ne,Object.assign({toc:p,className:s,linkClassName:o},m))}const se={tocCollapsibleButton:"tocCollapsibleButton_Zupg",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_thBA"};var ie=["collapsed"];function re(e){var n=e.collapsed,t=(0,E.A)(e,ie);return(0,r.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.A)("clean-btn",se.tocCollapsibleButton,!n&&se.tocCollapsibleButtonExpanded,t.className),children:(0,r.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const oe={tocCollapsible:"tocCollapsible_bT2e",tocCollapsibleContent:"tocCollapsibleContent_syNM",tocCollapsibleExpanded:"tocCollapsibleExpanded_xw2M"};function ce(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,F.u)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.A)(oe.tocCollapsible,!o&&oe.tocCollapsibleExpanded,t),children:[(0,r.jsx)(re,{collapsed:o,onClick:c}),(0,r.jsx)(F.N,{lazy:!0,className:oe.tocCollapsibleContent,collapsed:o,children:(0,r.jsx)(ae,{toc:n,minHeadingLevel:a,maxHeadingLevel:s})})]})}const le={tocMobile:"tocMobile_knQ4"};function de(){var e=l(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(ce,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,le.tocMobile)})}const ue={tableOfContents:"tableOfContents_TJBe",docItemContainer:"docItemContainer_Dn1O"};var me=["className"],he="table-of-contents__link toc-highlight",fe="table-of-contents__link--active";function ve(e){var n=e.className,t=(0,E.A)(e,me);return(0,r.jsx)("div",{className:(0,u.A)(ue.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(ae,Object.assign({},t,{linkClassName:he,linkActiveClassName:fe}))})}function pe(){var e=l(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(ve,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var be=t(7501),ge=t(9779),xe=t(6949),je=t(1110),Ne=t(4006);function Ae(){var e=(0,q.p)().prism,n=(0,Ne.G)().colorMode,t=e.theme,a=e.darkTheme||t;return"dark"===n?a:t}var Ce=t(3874),Le=t(4809),ke=t.n(Le),ye=(0,Ce.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),Be=(0,Ce.A)(/\{([\d,-]+)\}/,{range:1}),_e={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},we=Object.assign({},_e,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),Te=Object.keys(_e);function Oe(e,n){var t=e.map((function(e){var t=we[e],a=t.start,s=t.end;return"(?:"+a+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+s+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function Ee(e,n){var t=e.replace(/\n$/,""),a=n.language,s=n.magicComments,i=n.metastring;if(i&&Be.test(i)){var r=i.match(Be).groups.range;if(0===s.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var o=s[0].className,c=ke()(r).filter((function(e){return e>0})).map((function(e){return[e-1,[o]]}));return{lineClassNames:Object.fromEntries(c),code:t}}if(void 0===a)return{lineClassNames:{},code:t};for(var l=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return Oe(["js","jsBlock"],n);case"jsx":case"tsx":return Oe(["js","jsBlock","jsx"],n);case"html":return Oe(["js","jsBlock","html"],n);case"python":case"py":case"bash":return Oe(["bash"],n);case"markdown":case"md":return Oe(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return Oe(["tex"],n);case"lua":case"haskell":case"sql":return Oe(["lua"],n);case"wasm":return Oe(["wasm"],n);case"vb":case"vba":case"visual-basic":return Oe(["vb","rem"],n);case"vbnet":return Oe(["vbnet","rem"],n);case"batch":return Oe(["rem"],n);case"basic":return Oe(["rem","f90"],n);case"fsharp":return Oe(["js","ml"],n);case"ocaml":case"sml":return Oe(["ml"],n);case"fortran":return Oe(["f90"],n);case"cobol":return Oe(["cobol"],n);default:return Oe(Te,n)}}(a,s),d=t.split("\n"),u=Object.fromEntries(s.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(s.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),h=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),f=Object.fromEntries(s.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),v=0;v<d.length;){var p=d[v].match(l);if(p){var b=p.slice(1).find((function(e){return void 0!==e}));m[b]?u[m[b]].range+=v+",":h[b]?u[h[b]].start=v:f[b]&&(u[f[b]].range+=u[f[b]].start+"-"+(v-1)+","),d.splice(v,1)}else v+=1}t=d.join("\n");var g={};return Object.entries(u).forEach((function(e){var n=e[0],t=e[1].range;ke()(t).forEach((function(e){null!=g[e]||(g[e]=[]),g[e].push(n)}))})),{lineClassNames:g,code:t}}const He={codeBlockContainer:"codeBlockContainer_D5xK"};var Me=["as"];function Ie(e){var n=e.as,t=(0,E.A)(e,Me),a=function(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var a=e[0],s=e[1],i=n[a];i&&"string"==typeof s&&(t[i]=s)})),t}(Ae());return(0,r.jsx)(n,Object.assign({},t,{style:a,className:(0,u.A)(t.className,He.codeBlockContainer,j.G.common.codeBlock)}))}const Ue={codeBlockContent:"codeBlockContent_nmHR",codeBlockTitle:"codeBlockTitle_jTmj",codeBlock:"codeBlock_yVRx",codeBlockStandalone:"codeBlockStandalone_NCuF",codeBlockLines:"codeBlockLines_WA61",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_mpkd",buttonGroup:"buttonGroup_I7gV"};function Se(e){var n=e.children,t=e.className;return(0,r.jsx)(Ie,{as:"pre",tabIndex:0,className:(0,u.A)(Ue.codeBlockStandalone,"thin-scrollbar",t),children:(0,r.jsx)("code",{className:Ue.codeBlockLines,children:n})})}var Re={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ze(e,n){var t=(0,a.useState)(),s=t[0],r=t[1],o=(0,a.useCallback)((function(){var n;r(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((function(){o()}),[o]),function(e,n,t){void 0===t&&(t=Re);var s=(0,i._q)(n),r=(0,i.Be)(t);(0,a.useEffect)((function(){var n=new MutationObserver(s);return e&&n.observe(e,r),function(){return n.disconnect()}}),[e,s,r])}(s,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Ve=t(369);const De={codeLine:"codeLine_lPG0",codeLineNumber:"codeLineNumber_YQtB",codeLineContent:"codeLineContent_Elqo"};function We(e){var n=e.line,t=e.classNames,a=e.showLineNumbers,s=e.getLineProps,i=e.getTokenProps;1===n.length&&"\n"===n[0].content&&(n[0].content="");var o=s({line:n,className:(0,u.A)(t,a&&De.codeLine)}),c=n.map((function(e,n){return(0,r.jsx)("span",Object.assign({},i({token:e,key:n})),n)}));return(0,r.jsxs)("span",Object.assign({},o,{children:[a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:De.codeLineNumber}),(0,r.jsx)("span",{className:De.codeLineContent,children:c})]}):c,(0,r.jsx)("br",{})]}))}function Ge(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function Pe(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const Fe={copyButtonCopied:"copyButtonCopied_m2oC",copyButtonIcons:"copyButtonIcons_Z2BR",copyButtonIcon:"copyButtonIcon_tUKZ",copyButtonSuccessIcon:"copyButtonSuccessIcon_Cu4W"};function qe(e){var n=e.code,t=e.className,s=(0,a.useState)(!1),i=s[0],o=s[1],c=(0,a.useRef)(void 0),l=(0,a.useCallback)((function(){!function(e,n){var t=(void 0===n?{}:n).target,a=void 0===t?document.body:t;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var s=document.createElement("textarea"),i=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";var r=document.getSelection(),o=r.rangeCount>0&&r.getRangeAt(0);a.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}s.remove(),o&&(r.removeAllRanges(),r.addRange(o)),i&&i.focus()}(n),o(!0),c.current=window.setTimeout((function(){o(!1)}),1e3)}),[n]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),(0,r.jsx)("button",{type:"button","aria-label":i?(0,h.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.A)("clean-btn",t,Fe.copyButton,i&&Fe.copyButtonCopied),onClick:l,children:(0,r.jsxs)("span",{className:Fe.copyButtonIcons,"aria-hidden":"true",children:[(0,r.jsx)(Ge,{className:Fe.copyButtonIcon}),(0,r.jsx)(Pe,{className:Fe.copyButtonSuccessIcon})]})})}function Ye(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const Xe={wordWrapButtonIcon:"wordWrapButtonIcon_OQQO",wordWrapButtonEnabled:"wordWrapButtonEnabled_i4wO"};function Ze(e){var n=e.className,t=e.onClick,a=e.isEnabled,s=(0,h.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,r.jsx)("button",{type:"button",onClick:t,className:(0,u.A)("clean-btn",n,a&&Xe.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,r.jsx)(Ye,{className:Xe.wordWrapButtonIcon,"aria-hidden":"true"})})}function Qe(e){var n,t,s,i,o,c,l,d,m,h,f,v=e.children,p=e.className,b=void 0===p?"":p,g=e.metastring,x=e.title,j=e.showLineNumbers,N=e.language,A=(0,q.p)().prism,C=A.defaultLanguage,L=A.magicComments,k=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=N?N:null==(t=b.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:t.replace(/language-/,""))?n:C),y=Ae(),B=(s=(0,a.useState)(!1),i=s[0],o=s[1],c=(0,a.useState)(!1),l=c[0],d=c[1],m=(0,a.useRef)(null),h=(0,a.useCallback)((function(){var e=m.current.querySelector("code");i?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),o((function(e){return!e}))}),[m,i]),f=(0,a.useCallback)((function(){var e=m.current,n=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");d(n)}),[m]),ze(m,f),(0,a.useEffect)((function(){f()}),[i,f]),(0,a.useEffect)((function(){return window.addEventListener("resize",f,{passive:!0}),function(){window.removeEventListener("resize",f)}}),[f]),{codeBlockRef:m,isEnabled:i,isCodeScrollable:l,toggle:h}),_=function(e){var n,t;return null!=(n=null==e||null==(t=e.match(ye))?void 0:t.groups.title)?n:""}(g)||x,w=Ee(v,{metastring:g,language:k,magicComments:L}),T=w.lineClassNames,O=w.code,E=null!=j?j:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(g);return(0,r.jsxs)(Ie,{as:"div",className:(0,u.A)(b,k&&!b.includes("language-"+k)&&"language-"+k),children:[_&&(0,r.jsx)("div",{className:Ue.codeBlockTitle,children:_}),(0,r.jsxs)("div",{className:Ue.codeBlockContent,children:[(0,r.jsx)(Ve.f4,{theme:y,code:O,language:null!=k?k:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,s=e.getLineProps,i=e.getTokenProps;return(0,r.jsx)("pre",{tabIndex:0,ref:B.codeBlockRef,className:(0,u.A)(n,Ue.codeBlock,"thin-scrollbar"),style:t,children:(0,r.jsx)("code",{className:(0,u.A)(Ue.codeBlockLines,E&&Ue.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,r.jsx)(We,{line:e,getLineProps:s,getTokenProps:i,classNames:T[n],showLineNumbers:E},n)}))})})}}),(0,r.jsxs)("div",{className:Ue.buttonGroup,children:[(B.isEnabled||B.isCodeScrollable)&&(0,r.jsx)(Ze,{className:Ue.codeButton,onClick:function(){return B.toggle()},isEnabled:B.isEnabled}),(0,r.jsx)(qe,{className:Ue.codeButton,code:O})]})]})]})}var $e=["children"];function Je(e){var n=e.children,t=(0,E.A)(e,$e),s=(0,je.A)(),i=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),o="string"==typeof i?Qe:Se;return(0,r.jsx)(o,Object.assign({},t,{children:i}),String(s))}function Ke(e){return(0,r.jsx)("code",Object.assign({},e))}var en=t(7954);const nn={details:"details_JYYL",isBrowser:"isBrowser_tf8A",collapsibleContent:"collapsibleContent_iGLX"};var tn=["summary","children"];function an(e){return!!e&&("SUMMARY"===e.tagName||an(e.parentElement))}function sn(e,n){return!!e&&(e===n||sn(e.parentElement,n))}function rn(e){var n=e.summary,t=e.children,s=(0,E.A)(e,tn);(0,en.A)().collectAnchor(s.id);var i=(0,je.A)(),o=(0,a.useRef)(null),c=(0,F.u)({initialState:!s.open}),l=c.collapsed,d=c.setCollapsed,m=(0,a.useState)(s.open),h=m[0],f=m[1],v=a.isValidElement(n)?n:(0,r.jsx)("summary",{children:null!=n?n:"Details"});return(0,r.jsxs)("details",Object.assign({},s,{ref:o,open:h,"data-collapsed":l,className:(0,u.A)(nn.details,i&&nn.isBrowser,s.className),onMouseDown:function(e){an(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;an(n)&&sn(n,o.current)&&(e.preventDefault(),l?(d(!1),f(!0)):d(!0))},children:[v,(0,r.jsx)(F.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){d(e),f(!e)},children:(0,r.jsx)("div",{className:nn.collapsibleContent,children:t})})]}))}const on={details:"details_xDMV"};var cn="alert alert--info";function ln(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,r.jsx)(rn,Object.assign({},n,{className:(0,u.A)(cn,on.details,n.className)}))}function dn(e){var n=a.Children.toArray(e.children),t=n.find((function(e){return a.isValidElement(e)&&"summary"===e.type})),s=(0,r.jsx)(r.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,r.jsx)(ln,Object.assign({},e,{summary:t,children:s}))}function un(e){return(0,r.jsx)(be.A,Object.assign({},e))}const mn={containsTaskList:"containsTaskList_dguO"};function hn(e){if(void 0!==e)return(0,u.A)(e,(null==e?void 0:e.includes("contains-task-list"))&&mn.containsTaskList)}const fn={img:"img_Xdpp"};function vn(e){var n,t=function(e){var n=a.Children.toArray(e),t=n.find((function(e){return a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),s=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:s.length>0?(0,r.jsx)(r.Fragment,{children:s}):null}}(e.children),s=t.mdxAdmonitionTitle,i=t.rest,o=null!=(n=e.title)?n:s;return Object.assign({},e,o&&{title:o},{children:i})}const pn={admonition:"admonition_rhTp",admonitionHeading:"admonitionHeading_qHDX",admonitionIcon:"admonitionIcon_YrM2",admonitionContent:"admonitionContent_hU0X"};function bn(e){var n=e.type,t=e.className,a=e.children;return(0,r.jsx)("div",{className:(0,u.A)(j.G.common.admonition,j.G.common.admonitionType(n),pn.admonition,t),children:a})}function gn(e){var n=e.icon,t=e.title;return(0,r.jsxs)("div",{className:pn.admonitionHeading,children:[(0,r.jsx)("span",{className:pn.admonitionIcon,children:n}),t]})}function xn(e){var n=e.children;return n?(0,r.jsx)("div",{className:pn.admonitionContent,children:n}):null}function jn(e){var n=e.type,t=e.icon,a=e.title,s=e.children,i=e.className;return(0,r.jsxs)(bn,{type:n,className:i,children:[(0,r.jsx)(gn,{title:a,icon:t}),(0,r.jsx)(xn,{children:s})]})}function Nn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var An={icon:(0,r.jsx)(Nn,{}),title:(0,r.jsx)(h.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Cn(e){return(0,r.jsx)(jn,Object.assign({},An,e,{className:(0,u.A)("alert alert--secondary",e.className),children:e.children}))}function Ln(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var kn={icon:(0,r.jsx)(Ln,{}),title:(0,r.jsx)(h.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function yn(e){return(0,r.jsx)(jn,Object.assign({},kn,e,{className:(0,u.A)("alert alert--success",e.className),children:e.children}))}function Bn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var _n={icon:(0,r.jsx)(Bn,{}),title:(0,r.jsx)(h.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function wn(e){return(0,r.jsx)(jn,Object.assign({},_n,e,{className:(0,u.A)("alert alert--info",e.className),children:e.children}))}function Tn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var On={icon:(0,r.jsx)(Tn,{}),title:(0,r.jsx)(h.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function En(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var Hn={icon:(0,r.jsx)(En,{}),title:(0,r.jsx)(h.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var Mn={icon:(0,r.jsx)(Tn,{}),title:(0,r.jsx)(h.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var In={note:Cn,tip:yn,info:wn,warning:function(e){return(0,r.jsx)(jn,Object.assign({},On,e,{className:(0,u.A)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,r.jsx)(jn,Object.assign({},Hn,e,{className:(0,u.A)("alert alert--danger",e.className),children:e.children}))}},Un={secondary:function(e){return(0,r.jsx)(Cn,Object.assign({title:"secondary"},e))},important:function(e){return(0,r.jsx)(wn,Object.assign({title:"important"},e))},success:function(e){return(0,r.jsx)(yn,Object.assign({title:"success"},e))},caution:function(e){return(0,r.jsx)(jn,Object.assign({},Mn,e,{className:(0,u.A)("alert alert--warning",e.className),children:e.children}))}};const Sn=Object.assign({},In,Un);function Rn(e){var n,t=vn(e),a=(n=t.type,Sn[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),Sn.info));return(0,r.jsx)(a,Object.assign({},t))}var zn=t(2471);const Vn={Head:xe.A,details:dn,Details:dn,code:function(e){return function(e){return void 0!==e.children&&a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))}(e)?(0,r.jsx)(Ke,Object.assign({},e)):(0,r.jsx)(Je,Object.assign({},e))},a:function(e){return(0,r.jsx)(f.A,Object.assign({},e))},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",Object.assign({},e,{className:hn(e.className)}))},li:function(e){return(0,en.A)().collectAnchor(e.id),(0,r.jsx)("li",Object.assign({},e))},img:function(e){return(0,r.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},e,{className:(n=e.className,(0,u.A)(n,fn.img))}));var n},h1:function(e){return(0,r.jsx)(un,Object.assign({as:"h1"},e))},h2:function(e){return(0,r.jsx)(un,Object.assign({as:"h2"},e))},h3:function(e){return(0,r.jsx)(un,Object.assign({as:"h3"},e))},h4:function(e){return(0,r.jsx)(un,Object.assign({as:"h4"},e))},h5:function(e){return(0,r.jsx)(un,Object.assign({as:"h5"},e))},h6:function(e){return(0,r.jsx)(un,Object.assign({as:"h6"},e))},admonition:Rn,mermaid:zn.A};function Dn(e){var n=e.children;return(0,r.jsx)(ge.x,{components:Vn,children:n})}function Wn(e){var n,t,a,s,i=e.children,o=(n=l(),t=n.metadata,a=n.frontMatter,s=n.contentTitle,a.hide_title||void 0!==s?null:t.title);return(0,r.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[o&&(0,r.jsx)("header",{children:(0,r.jsx)(be.A,{as:"h1",children:o})}),(0,r.jsx)(Dn,{children:i})]})}var Gn=t(6980),Pn=t(3612),Fn=t(7524);function qn(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const Yn={breadcrumbHomeIcon:"breadcrumbHomeIcon_iMcx"};function Xn(){var e=(0,Fn.A)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(f.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(qn,{className:Yn.breadcrumbHomeIcon})})})}const Zn={breadcrumbsContainer:"breadcrumbsContainer_myYs"};function Qn(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,r.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,r.jsx)(f.A,{className:a,href:t,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:n})}):(0,r.jsx)("span",{className:a,children:n})}function $n(e){var n=e.children,t=e.active,a=e.index,s=e.addMicrodata;return(0,r.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,r.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function Jn(){var e=(0,Gn.OF)(),n=(0,Pn.Dt)();return e?(0,r.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Zn.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,r.jsx)(Xn,{}),e.map((function(n,t){var a=t===e.length-1,s="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,r.jsx)($n,{active:a,index:t,addMicrodata:!!s,children:(0,r.jsx)(Qn,{href:s,isLast:a,children:n.label})},t)}))]})}):null}function Kn(){return(0,r.jsx)(h.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function et(){return(0,r.jsx)(h.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function nt(){return(0,r.jsx)(xe.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function tt(e){var n=e.className;return(0,r.jsx)(Rn,{type:"caution",title:(0,r.jsx)(Kn,{}),className:(0,u.A)(n,j.G.common.unlistedBanner),children:(0,r.jsx)(et,{})})}function at(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nt,{}),(0,r.jsx)(tt,Object.assign({},e))]})}const st={docItemContainer:"docItemContainer_YcY4",docItemCol:"docItemCol_uuqy"};function it(e){var n,t,a,s,i,o,c=e.children,d=(n=l(),t=n.frontMatter,a=n.toc,s=(0,m.l)(),i=t.hide_table_of_contents,o=!i&&a.length>0,{hidden:i,mobile:o?(0,r.jsx)(de,{}):void 0,desktop:!o||"desktop"!==s&&"ssr"!==s?void 0:(0,r.jsx)(pe,{})}),h=l().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!d.hidden&&st.docItemCol),children:[h&&(0,r.jsx)(at,{}),(0,r.jsx)(B,{}),(0,r.jsxs)("div",{className:st.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(Jn,{}),(0,r.jsx)(_,{}),d.mobile,(0,r.jsx)(Wn,{children:c}),(0,r.jsx)(P,{})]}),(0,r.jsx)(b,{})]})]}),d.desktop&&(0,r.jsx)("div",{className:"col col--3",children:d.desktop})]})}function rt(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,r.jsx)(c,{content:e.content,children:(0,r.jsxs)(s.e3,{className:n,children:[(0,r.jsx)(d,{}),(0,r.jsx)(it,{children:(0,r.jsx)(t,{})})]})})}},4809:(e,n)=>{function t(e){let n,t=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))t.push(parseInt(a,10));else if(n=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,s,i]=n;if(a&&i){a=parseInt(a),i=parseInt(i);const e=a<i?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(i+=e);for(let n=a;n!==i;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},9779:(e,n,t)=>{"use strict";t.d(n,{R:()=>r,x:()=>o});var a=t(9474);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);