module.exports = {

"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.20.2_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom_223b32136843a3ff7d2e9f1242534842/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__commonJS": (()=>__commonJS)
});
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
;
 //# sourceMappingURL=chunk-BUSYA2B4.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.20.2_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom_223b32136843a3ff7d2e9f1242534842/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.20.2_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom_223b32136843a3ff7d2e9f1242534842/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [app-rsc] (ecmascript)");
;
var require_safe_node_apis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__commonJS"])({
    "src/runtime/node/safe-node-apis.js" (exports, module) {
        const { existsSync, writeFileSync, readFileSync, appendFileSync, mkdirSync, rmSync } = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
        const path = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
        const fs = {
            existsSync,
            writeFileSync,
            readFileSync,
            appendFileSync,
            mkdirSync,
            rmSync
        };
        const cwd = ()=>process.cwd();
        module.exports = {
            fs,
            path,
            cwd
        };
    }
});
const __TURBOPACK__default__export__ = require_safe_node_apis();
 //# sourceMappingURL=safe-node-apis.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.20.2_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom_223b32136843a3ff7d2e9f1242534842/node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nodeCwdOrThrow": (()=>nodeCwdOrThrow),
    "nodeFsOrThrow": (()=>nodeFsOrThrow),
    "nodePathOrThrow": (()=>nodePathOrThrow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.20.2_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom_223b32136843a3ff7d2e9f1242534842/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [app-rsc] (ecmascript)");
;
;
const throwMissingFsModule = (module)=>{
    throw new Error(`Clerk: ${module} is missing. This is an internal error. Please contact Clerk's support.`);
};
const nodeFsOrThrow = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fs) {
        throwMissingFsModule("fs");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fs;
};
const nodePathOrThrow = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].path) {
        throwMissingFsModule("path");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].path;
};
const nodeCwdOrThrow = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cwd) {
        throwMissingFsModule("cwd");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cwd;
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.20.2_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom_223b32136843a3ff7d2e9f1242534842/node_modules/@clerk/nextjs/dist/esm/server/fs/middleware-location.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasSrcAppDir": (()=>hasSrcAppDir),
    "suggestMiddlewareLocation": (()=>suggestMiddlewareLocation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.20.2_next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0__react-dom_223b32136843a3ff7d2e9f1242534842/node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js [app-rsc] (ecmascript)");
;
;
function hasSrcAppDir() {
    const { existsSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodePathOrThrow"])();
    const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeCwdOrThrow"])();
    const projectWithAppSrc = path.join(cwd(), "src", "app");
    return !!existsSync(projectWithAppSrc);
}
function suggestMiddlewareLocation() {
    const fileExtensions = [
        "ts",
        "js"
    ];
    const suggestionMessage = (extension, to, from)=>`Clerk: clerkMiddleware() was not run, your middleware file might be misplaced. Move your middleware file to ./${to}middleware.${extension}. Currently located at ./${from}middleware.${extension}`;
    const { existsSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodePathOrThrow"])();
    const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$20$2e$2_next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$2d$dom_223b32136843a3ff7d2e9f1242534842$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeCwdOrThrow"])();
    const projectWithAppSrcPath = path.join(cwd(), "src", "app");
    const projectWithAppPath = path.join(cwd(), "app");
    const checkMiddlewareLocation = (basePath, to, from)=>{
        for (const fileExtension of fileExtensions){
            if (existsSync(path.join(basePath, `middleware.${fileExtension}`))) {
                return suggestionMessage(fileExtension, to, from);
            }
        }
        return void 0;
    };
    if (existsSync(projectWithAppSrcPath)) {
        return checkMiddlewareLocation(projectWithAppSrcPath, "src/", "src/app/") || checkMiddlewareLocation(cwd(), "src/", "");
    }
    if (existsSync(projectWithAppPath)) {
        return checkMiddlewareLocation(projectWithAppPath, "", "app/");
    }
    return void 0;
}
;
 //# sourceMappingURL=middleware-location.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__326cd832._.js.map