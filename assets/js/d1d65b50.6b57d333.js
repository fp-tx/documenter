"use strict";(self.webpackChunk_fp_tx_documenter=self.webpackChunk_fp_tx_documenter||[]).push([[966],{3767:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var l=i(3274),n=i(9779);const s={},d="FileService",c={id:"FileService",title:"FileService",description:"Effects",source:"@site/docs/FileService.md",sourceDirName:".",slug:"/FileService",permalink:"/FileService",draft:!1,unlisted:!1,editUrl:"https://github.com/fp-tx/documenter/docs/FileService.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Documenter",permalink:"/Documenter"},next:{title:"Markdown",permalink:"/Markdown"}},t={},o=[{value:"Effects",id:"effects",level:3},{value:"Errors",id:"errors",level:3},{value:"Providers",id:"providers",level:3},{value:"Services",id:"services",level:3},{value:"Effects",id:"effects-1",level:2},{value:"<code>mkdir</code>",id:"mkdir",level:3},{value:"Signature",id:"signature",level:4},{value:"Details",id:"details",level:4},{value:"<code>upsertDir</code>",id:"upsertdir",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Details",id:"details-1",level:4},{value:"<code>writeFile</code>",id:"writefile",level:3},{value:"Signature",id:"signature-2",level:4},{value:"Details",id:"details-2",level:4},{value:"Errors",id:"errors-1",level:2},{value:"<code>FileServiceError</code>",id:"fileserviceerror",level:3},{value:"Signature",id:"signature-3",level:4},{value:"Details",id:"details-3",level:4},{value:"Properties and Methods",id:"properties-and-methods",level:4},{value:"<code>Error</code> (property)",id:"error-property",level:5},{value:"<code>name</code> (property)",id:"name-property",level:5},{value:"<code>of</code> (property)",id:"of-property",level:5},{value:"Providers",id:"providers-1",level:2},{value:"<code>FileServiceLive</code>",id:"fileservicelive",level:3},{value:"Signature",id:"signature-4",level:4},{value:"Details",id:"details-4",level:4},{value:"Services",id:"services-1",level:2},{value:"<code>FileService</code>",id:"fileservice-1",level:3},{value:"Signature",id:"signature-5",level:4},{value:"Details",id:"details-5",level:4},{value:"Properties and Methods",id:"properties-and-methods-1",level:4},{value:"<code>[FileServiceSymbol]</code> (property)",id:"fileservicesymbol-property",level:5}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h1,{id:"fileservice",children:"FileService"}),"\n",(0,l.jsx)(r.h3,{id:"effects",children:"Effects"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"#mkdir",children:"mkdir"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"#upsertdir",children:"upsertDir"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"#writefile",children:"writeFile"})}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"errors",children:"Errors"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"#fileserviceerror",children:"FileServiceError"})}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"providers",children:"Providers"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"#fileservicelive",children:"FileServiceLive"})}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"services",children:"Services"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"#fileservice",children:"FileService"})}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"effects-1",children:"Effects"}),"\n",(0,l.jsx)(r.h3,{id:"mkdir",children:(0,l.jsx)(r.code,{children:"mkdir"})}),"\n",(0,l.jsx)(r.p,{children:"Creates a directory in the file system"}),"\n",(0,l.jsx)(r.h4,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"export declare const mkdir: (\n  path: fs.PathLike,\n  options?: fs.MakeDirectoryOptions,\n) => RTE.ReaderTaskEither<FileService, FileServiceError, void>\n"})}),"\n",(0,l.jsx)(r.h4,{id:"details",children:"Details"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h3,{id:"upsertdir",children:(0,l.jsx)(r.code,{children:"upsertDir"})}),"\n",(0,l.jsx)(r.p,{children:"Creates a directory in the file system if it does not exist"}),"\n",(0,l.jsx)(r.h4,{id:"signature-1",children:"Signature"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"export declare const upsertDir: (\n  path: fs.PathLike,\n  options?: fs.MakeDirectoryOptions,\n) => RTE.ReaderTaskEither<FileService, FileServiceError, void>\n"})}),"\n",(0,l.jsx)(r.h4,{id:"details-1",children:"Details"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h3,{id:"writefile",children:(0,l.jsx)(r.code,{children:"writeFile"})}),"\n",(0,l.jsx)(r.p,{children:"Writes a file to the file system"}),"\n",(0,l.jsx)(r.h4,{id:"signature-2",children:"Signature"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"export declare const writeFile: (\n  path: fs.PathLike,\n  content: string,\n  options?: fs.WriteFileOptions,\n) => RTE.ReaderTaskEither<FileService, FileServiceError, void>\n"})}),"\n",(0,l.jsx)(r.h4,{id:"details-2",children:"Details"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"errors-1",children:"Errors"}),"\n",(0,l.jsx)(r.h3,{id:"fileserviceerror",children:(0,l.jsx)(r.code,{children:"FileServiceError"})}),"\n",(0,l.jsx)(r.p,{children:"Represents a file service error"}),"\n",(0,l.jsx)(r.h4,{id:"signature-3",children:"Signature"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"export declare class FileServiceError extends Error\n"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"constructor(Error: Error);\n"})}),"\n",(0,l.jsx)(r.h4,{id:"details-3",children:"Details"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(r.h4,{id:"properties-and-methods",children:"Properties and Methods"}),"\n",(0,l.jsxs)(r.h5,{id:"error-property",children:[(0,l.jsx)(r.code,{children:"Error"})," (property)"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"readonly Error: Error;\n"})}),"\n",(0,l.jsxs)(r.h5,{id:"name-property",children:[(0,l.jsx)(r.code,{children:"name"})," (property)"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:'readonly name = "FileServiceError";\n'})}),"\n",(0,l.jsxs)(r.h5,{id:"of-property",children:[(0,l.jsx)(r.code,{children:"of"})," (property)"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"static readonly of: (Error: Error) => FileServiceError;\n"})}),"\n",(0,l.jsx)(r.h2,{id:"providers-1",children:"Providers"}),"\n",(0,l.jsx)(r.h3,{id:"fileservicelive",children:(0,l.jsx)(r.code,{children:"FileServiceLive"})}),"\n",(0,l.jsx)(r.p,{children:"A node-based implementation of the file service"}),"\n",(0,l.jsx)(r.h4,{id:"signature-4",children:"Signature"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"export declare const FileServiceLive: FileService\n"})}),"\n",(0,l.jsx)(r.h4,{id:"details-4",children:"Details"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"services-1",children:"Services"}),"\n",(0,l.jsx)(r.h3,{id:"fileservice-1",children:(0,l.jsx)(r.code,{children:"FileService"})}),"\n",(0,l.jsx)(r.p,{children:"Represents a minimal file service for the purpose of fp-tx/documenter"}),"\n",(0,l.jsx)(r.h4,{id:"signature-5",children:"Signature"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"export declare class FileService\n"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"constructor(fileServiceMethods: FileServiceMethods);\n"})}),"\n",(0,l.jsx)(r.h4,{id:"details-5",children:"Details"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Added in 0.1.0"}),"\n"]}),"\n",(0,l.jsx)(r.h4,{id:"properties-and-methods-1",children:"Properties and Methods"}),"\n",(0,l.jsxs)(r.h5,{id:"fileservicesymbol-property",children:[(0,l.jsx)(r.code,{children:"[FileServiceSymbol]"})," (property)"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-typescript",children:"[FileServiceSymbol]: FileServiceMethods;\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},9779:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>c});var l=i(9474);const n={},s=l.createContext(n);function d(e){const r=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),l.createElement(s.Provider,{value:r},e.children)}}}]);