(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/errors/errorThrower.ts
__turbopack_context__.s({
    "AuthContext": (()=>AuthContext),
    "AuthenticateWithRedirectCallback": (()=>AuthenticateWithRedirectCallback),
    "ClerkDegraded": (()=>ClerkDegraded),
    "ClerkFailed": (()=>ClerkFailed),
    "ClerkLoaded": (()=>ClerkLoaded),
    "ClerkLoading": (()=>ClerkLoading),
    "IsomorphicClerkContext": (()=>IsomorphicClerkContext),
    "MultisessionAppSupport": (()=>MultisessionAppSupport),
    "Protect": (()=>Protect),
    "RedirectToCreateOrganization": (()=>RedirectToCreateOrganization),
    "RedirectToOrganizationProfile": (()=>RedirectToOrganizationProfile),
    "RedirectToSignIn": (()=>RedirectToSignIn),
    "RedirectToSignUp": (()=>RedirectToSignUp),
    "RedirectToUserProfile": (()=>RedirectToUserProfile),
    "SignedIn": (()=>SignedIn),
    "SignedOut": (()=>SignedOut),
    "customLinkWrongProps": (()=>customLinkWrongProps),
    "customMenuItemsIgnoredComponent": (()=>customMenuItemsIgnoredComponent),
    "customPageWrongProps": (()=>customPageWrongProps),
    "customPagesIgnoredComponent": (()=>customPagesIgnoredComponent),
    "errorThrower": (()=>errorThrower),
    "incompatibleRoutingWithPathProvidedError": (()=>incompatibleRoutingWithPathProvidedError),
    "multipleChildrenInButtonComponent": (()=>multipleChildrenInButtonComponent),
    "multipleClerkProvidersError": (()=>multipleClerkProvidersError),
    "noPathProvidedError": (()=>noPathProvidedError),
    "organizationProfileLinkRenderedError": (()=>organizationProfileLinkRenderedError),
    "organizationProfilePageRenderedError": (()=>organizationProfilePageRenderedError),
    "setErrorThrowerOptions": (()=>setErrorThrowerOptions),
    "unsupportedNonBrowserDomainOrProxyUrlFunction": (()=>unsupportedNonBrowserDomainOrProxyUrlFunction),
    "useAuth": (()=>useAuth),
    "useDerivedAuth": (()=>useDerivedAuth),
    "useEmailLink": (()=>useEmailLink),
    "useSignIn": (()=>useSignIn),
    "useSignUp": (()=>useSignUp),
    "userButtonIgnoredComponent": (()=>userButtonIgnoredComponent),
    "userButtonMenuActionRenderedError": (()=>userButtonMenuActionRenderedError),
    "userButtonMenuItemLinkWrongProps": (()=>userButtonMenuItemLinkWrongProps),
    "userButtonMenuItemsActionWrongsProps": (()=>userButtonMenuItemsActionWrongsProps),
    "userButtonMenuItemsRenderedError": (()=>userButtonMenuItemsRenderedError),
    "userButtonMenuLinkRenderedError": (()=>userButtonMenuLinkRenderedError),
    "userProfileLinkRenderedError": (()=>userProfileLinkRenderedError),
    "userProfilePageRenderedError": (()=>userProfilePageRenderedError),
    "withClerk": (()=>withClerk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/error.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-NT4JRXL3.mjs [app-client] (ecmascript)");
// src/hooks/useAuth.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/authorization.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-3CN5LOSN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-WIS7IYDJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/contexts/AuthContext.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
// src/components/controlComponents.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-UEY4AZIP.mjs [app-client] (ecmascript)");
;
var errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$NT4JRXL3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/clerk-react"
});
function setErrorThrowerOptions(options) {
    errorThrower.setMessages(options).setPackageName(options);
}
;
;
;
;
var [AuthContext, useAuthContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextAndHook"])("AuthContext");
;
var IsomorphicClerkContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkInstanceContext"];
var useIsomorphicClerkContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerkInstanceContext"];
// src/errors/messages.ts
var multipleClerkProvidersError = "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.";
var multipleChildrenInButtonComponent = (name)=>`You've passed multiple children components to <${name}/>. You can only pass a single child component or text.`;
var invalidStateError = "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support";
var unsupportedNonBrowserDomainOrProxyUrlFunction = "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.";
var userProfilePageRenderedError = "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.";
var userProfileLinkRenderedError = "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.";
var organizationProfilePageRenderedError = "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.";
var organizationProfileLinkRenderedError = "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.";
var customPagesIgnoredComponent = (componentName)=>`<${componentName} /> can only accept <${componentName}.Page /> and <${componentName}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`;
var customPageWrongProps = (componentName)=>`Missing props. <${componentName}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`;
var customLinkWrongProps = (componentName)=>`Missing props. <${componentName}.Link /> component requires the following props: url, label and labelIcon.`;
var noPathProvidedError = (componentName)=>`The <${componentName}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${componentName} path={'/my-path'} />`;
var incompatibleRoutingWithPathProvidedError = (componentName)=>`The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${componentName}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`;
var userButtonIgnoredComponent = `<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`;
var customMenuItemsIgnoredComponent = "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.";
var userButtonMenuItemsRenderedError = "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.";
var userButtonMenuActionRenderedError = "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.";
var userButtonMenuLinkRenderedError = "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.";
var userButtonMenuItemLinkWrongProps = "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.";
var userButtonMenuItemsActionWrongsProps = "Missing props. <UserButton.Action /> component requires the following props: label.";
;
var useAssertWrappedByClerkProvider = (source)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAssertWrappedByClerkProvider"])({
        "useAssertWrappedByClerkProvider.useSharedAssertWrappedByClerkProvider": ()=>{
            errorThrower.throwMissingClerkProviderError({
                source
            });
        }
    }["useAssertWrappedByClerkProvider.useSharedAssertWrappedByClerkProvider"]);
};
// src/hooks/utils.ts
var clerkLoaded = (isomorphicClerk)=>{
    return new Promise((resolve)=>{
        const handler = (status)=>{
            if ([
                "ready",
                "degraded"
            ].includes(status)) {
                resolve();
                isomorphicClerk.off("status", handler);
            }
        };
        isomorphicClerk.on("status", handler, {
            notify: true
        });
    });
};
var createGetToken = (isomorphicClerk)=>{
    return async (options)=>{
        await clerkLoaded(isomorphicClerk);
        if (!isomorphicClerk.session) {
            return null;
        }
        return isomorphicClerk.session.getToken(options);
    };
};
var createSignOut = (isomorphicClerk)=>{
    return async (...args)=>{
        await clerkLoaded(isomorphicClerk);
        return isomorphicClerk.signOut(...args);
    };
};
// src/hooks/useAuth.ts
var useAuth = (initialAuthStateOrOptions = {})=>{
    var _a, _b;
    useAssertWrappedByClerkProvider("useAuth");
    const { treatPendingAsSignedOut, ...rest } = initialAuthStateOrOptions != null ? initialAuthStateOrOptions : {};
    const initialAuthState = rest;
    const authContextFromHook = useAuthContext();
    let authContext = authContextFromHook;
    if (authContext.sessionId === void 0 && authContext.userId === void 0) {
        authContext = initialAuthState != null ? initialAuthState : {};
    }
    const isomorphicClerk = useIsomorphicClerkContext();
    const getToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(createGetToken(isomorphicClerk), [
        isomorphicClerk
    ]);
    const signOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(createSignOut(isomorphicClerk), [
        isomorphicClerk
    ]);
    (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useAuth", {
        treatPendingAsSignedOut
    }));
    return useDerivedAuth({
        ...authContext,
        getToken,
        signOut
    }, {
        treatPendingAsSignedOut: treatPendingAsSignedOut != null ? treatPendingAsSignedOut : (_b = isomorphicClerk.__internal_getOption) == null ? void 0 : _b.call(isomorphicClerk, "treatPendingAsSignedOut")
    });
};
function useDerivedAuth(authObject, { treatPendingAsSignedOut = true } = {}) {
    const { userId, orgId, orgRole, has, signOut, getToken, orgPermissions, factorVerificationAge, sessionClaims } = authObject != null ? authObject : {};
    const derivedHas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDerivedAuth.useCallback[derivedHas]": (params)=>{
            if (has) {
                return has(params);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCheckAuthorization"])({
                userId,
                orgId,
                orgRole,
                orgPermissions,
                factorVerificationAge,
                features: (sessionClaims == null ? void 0 : sessionClaims.fea) || "",
                plans: (sessionClaims == null ? void 0 : sessionClaims.pla) || ""
            })(params);
        }
    }["useDerivedAuth.useCallback[derivedHas]"], [
        has,
        userId,
        orgId,
        orgRole,
        orgPermissions,
        factorVerificationAge
    ]);
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3CN5LOSN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAuthState"])({
        authObject: {
            ...authObject,
            getToken,
            signOut,
            has: derivedHas
        },
        options: {
            treatPendingAsSignedOut
        }
    });
    if (!payload) {
        return errorThrower.throw(invalidStateError);
    }
    return payload;
}
;
function useEmailLink(resource) {
    const { startEmailLinkFlow, cancelEmailLinkFlow } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useEmailLink.useMemo": ()=>resource.createEmailLinkFlow()
    }["useEmailLink.useMemo"], [
        resource
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useEmailLink.useEffect": ()=>{
            return cancelEmailLinkFlow;
        }
    }["useEmailLink.useEffect"], []);
    return {
        startEmailLinkFlow,
        cancelEmailLinkFlow
    };
}
;
;
var useSignIn = ()=>{
    var _a;
    useAssertWrappedByClerkProvider("useSignIn");
    const isomorphicClerk = useIsomorphicClerkContext();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientContext"])();
    (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useSignIn"));
    if (!client) {
        return {
            isLoaded: false,
            signIn: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        signIn: client.signIn,
        setActive: isomorphicClerk.setActive
    };
};
;
;
var useSignUp = ()=>{
    var _a;
    useAssertWrappedByClerkProvider("useSignUp");
    const isomorphicClerk = useIsomorphicClerkContext();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientContext"])();
    (_a = isomorphicClerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$WIS7IYDJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useSignUp"));
    if (!client) {
        return {
            isLoaded: false,
            signUp: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        signUp: client.signUp,
        setActive: isomorphicClerk.setActive
    };
};
;
;
;
;
;
var withClerk = (Component, displayNameOrOptions)=>{
    const passedDisplayedName = typeof displayNameOrOptions === "string" ? displayNameOrOptions : displayNameOrOptions == null ? void 0 : displayNameOrOptions.component;
    const displayName = passedDisplayedName || Component.displayName || Component.name || "Component";
    Component.displayName = displayName;
    const options = typeof displayNameOrOptions === "string" ? void 0 : displayNameOrOptions;
    const HOC = (props)=>{
        useAssertWrappedByClerkProvider(displayName || "withClerk");
        const clerk = useIsomorphicClerkContext();
        if (!clerk.loaded && !(options == null ? void 0 : options.renderWhileLoading)) {
            return null;
        }
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
            ...props,
            component: displayName,
            clerk
        });
    };
    HOC.displayName = `withClerk(${displayName})`;
    return HOC;
};
// src/components/controlComponents.tsx
var SignedIn = ({ children, treatPendingAsSignedOut })=>{
    useAssertWrappedByClerkProvider("SignedIn");
    const { userId } = useAuth({
        treatPendingAsSignedOut
    });
    if (userId) {
        return children;
    }
    return null;
};
var SignedOut = ({ children, treatPendingAsSignedOut })=>{
    useAssertWrappedByClerkProvider("SignedOut");
    const { userId } = useAuth({
        treatPendingAsSignedOut
    });
    if (userId === null) {
        return children;
    }
    return null;
};
var ClerkLoaded = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkLoaded");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (!isomorphicClerk.loaded) {
        return null;
    }
    return children;
};
var ClerkLoading = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkLoading");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (isomorphicClerk.status !== "loading") {
        return null;
    }
    return children;
};
var ClerkFailed = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkFailed");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (isomorphicClerk.status !== "error") {
        return null;
    }
    return children;
};
var ClerkDegraded = ({ children })=>{
    useAssertWrappedByClerkProvider("ClerkDegraded");
    const isomorphicClerk = useIsomorphicClerkContext();
    if (isomorphicClerk.status !== "degraded") {
        return null;
    }
    return children;
};
var Protect = ({ children, fallback, treatPendingAsSignedOut, ...restAuthorizedParams })=>{
    useAssertWrappedByClerkProvider("Protect");
    const { isLoaded, has, userId } = useAuth({
        treatPendingAsSignedOut
    });
    if (!isLoaded) {
        return null;
    }
    const unauthorized = fallback != null ? fallback : null;
    const authorized = children;
    if (!userId) {
        return unauthorized;
    }
    if (typeof restAuthorizedParams.condition === "function") {
        if (restAuthorizedParams.condition(has)) {
            return authorized;
        }
        return unauthorized;
    }
    if (restAuthorizedParams.role || restAuthorizedParams.permission || restAuthorizedParams.feature || restAuthorizedParams.plan) {
        if (has(restAuthorizedParams)) {
            return authorized;
        }
        return unauthorized;
    }
    return authorized;
};
var RedirectToSignIn = withClerk(({ clerk, ...props })=>{
    const { client, session } = clerk;
    const hasSignedInSessions = client.signedInSessions ? client.signedInSessions.length > 0 : // Compat for clerk-js<5.54.0 (which was released with the `signedInSessions` property)
    client.activeSessions && client.activeSessions.length > 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToSignIn.useEffect": ()=>{
            if (session === null && hasSignedInSessions) {
                void clerk.redirectToAfterSignOut();
            } else {
                void clerk.redirectToSignIn(props);
            }
        }
    }["RedirectToSignIn.useEffect"], []);
    return null;
}, "RedirectToSignIn");
var RedirectToSignUp = withClerk(({ clerk, ...props })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToSignUp.useEffect": ()=>{
            void clerk.redirectToSignUp(props);
        }
    }["RedirectToSignUp.useEffect"], []);
    return null;
}, "RedirectToSignUp");
var RedirectToUserProfile = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToUserProfile.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToUserProfile", "Use the `redirectToUserProfile()` method instead.");
            void clerk.redirectToUserProfile();
        }
    }["RedirectToUserProfile.useEffect"], []);
    return null;
}, "RedirectToUserProfile");
var RedirectToOrganizationProfile = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToOrganizationProfile.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToOrganizationProfile", "Use the `redirectToOrganizationProfile()` method instead.");
            void clerk.redirectToOrganizationProfile();
        }
    }["RedirectToOrganizationProfile.useEffect"], []);
    return null;
}, "RedirectToOrganizationProfile");
var RedirectToCreateOrganization = withClerk(({ clerk })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "RedirectToCreateOrganization.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$UEY4AZIP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deprecated"])("RedirectToCreateOrganization", "Use the `redirectToCreateOrganization()` method instead.");
            void clerk.redirectToCreateOrganization();
        }
    }["RedirectToCreateOrganization.useEffect"], []);
    return null;
}, "RedirectToCreateOrganization");
var AuthenticateWithRedirectCallback = withClerk(({ clerk, ...handleRedirectCallbackParams })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AuthenticateWithRedirectCallback.useEffect": ()=>{
            void clerk.handleRedirectCallback(handleRedirectCallbackParams);
        }
    }["AuthenticateWithRedirectCallback.useEffect"], []);
    return null;
}, "AuthenticateWithRedirectCallback");
var MultisessionAppSupport = ({ children })=>{
    useAssertWrappedByClerkProvider("MultisessionAppSupport");
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionContext"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        key: session ? session.id : "no-users"
    }, children);
};
;
 //# sourceMappingURL=chunk-T2VIWQBM.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/error.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$authorization$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/authorization.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/deprecated.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__privateAdd": (()=>__privateAdd),
    "__privateGet": (()=>__privateGet),
    "__privateMethod": (()=>__privateMethod),
    "__privateSet": (()=>__privateSet)
});
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
;
 //# sourceMappingURL=chunk-OANWQR3B.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkProvider": (()=>ClerkProvider),
    "CreateOrganization": (()=>CreateOrganization),
    "GoogleOneTap": (()=>GoogleOneTap),
    "OrganizationList": (()=>OrganizationList),
    "OrganizationProfile": (()=>OrganizationProfile),
    "OrganizationSwitcher": (()=>OrganizationSwitcher),
    "PricingTable": (()=>PricingTable),
    "SignIn": (()=>SignIn),
    "SignInButton": (()=>SignInButton),
    "SignInWithMetamaskButton": (()=>SignInWithMetamaskButton),
    "SignOutButton": (()=>SignOutButton),
    "SignUp": (()=>SignUp),
    "SignUpButton": (()=>SignUpButton),
    "UserButton": (()=>UserButton),
    "UserProfile": (()=>UserProfile),
    "Waitlist": (()=>Waitlist)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)");
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$R6ATEREH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-R6ATEREH.mjs [app-client] (ecmascript)");
// src/components/uiComponents.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-ARQUL5DC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
// src/components/ClerkHostRenderer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/object.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
// src/contexts/ClerkProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/keys.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-QU372XZW.mjs [app-client] (ecmascript)");
// src/contexts/ClerkContextProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deriveState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/deriveState.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ZIXJBK4O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-ZIXJBK4O.mjs [app-client] (ecmascript)");
// src/isomorphicClerk.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-JKSAJ6AV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/clerkEventBus.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-O32JQBM6.mjs [app-client] (ecmascript)");
;
;
// src/polyfills.ts
if (typeof window !== "undefined" && !window.global) {
    window.global = typeof global === "undefined" ? window : global;
}
;
;
;
;
var assertSingleChild = (children)=>(name)=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.only(children);
        } catch  {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multipleChildrenInButtonComponent"])(name));
        }
    };
var normalizeWithDefaultValue = (children, defaultText)=>{
    if (!children) {
        children = defaultText;
    }
    if (typeof children === "string") {
        children = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", null, children);
    }
    return children;
};
var safeExecute = (cb)=>(...args)=>{
        if (cb && typeof cb === "function") {
            return cb(...args);
        }
    };
// src/utils/isConstructor.ts
function isConstructor(f) {
    return typeof f === "function";
}
;
var counts = /* @__PURE__ */ new Map();
function useMaxAllowedInstancesGuard(name, error, maxCount = 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useMaxAllowedInstancesGuard.useEffect": ()=>{
            const count = counts.get(name) || 0;
            if (count == maxCount) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(error);
            }
            counts.set(name, count + 1);
            return ({
                "useMaxAllowedInstancesGuard.useEffect": ()=>{
                    counts.set(name, (counts.get(name) || 1) - 1);
                }
            })["useMaxAllowedInstancesGuard.useEffect"];
        }
    }["useMaxAllowedInstancesGuard.useEffect"], []);
}
function withMaxAllowedInstancesGuard(WrappedComponent, name, error) {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || name || "Component";
    const Hoc = (props)=>{
        useMaxAllowedInstancesGuard(name, error);
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(WrappedComponent, {
            ...props
        });
    };
    Hoc.displayName = `withMaxAllowedInstancesGuard(${displayName})`;
    return Hoc;
}
;
;
var useCustomElementPortal = (elements)=>{
    const initialState = Array(elements.length).fill(null);
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    return elements.map((el, index)=>({
            id: el.id,
            mount: (node)=>setNodes((prevState)=>prevState.map((n, i)=>i === index ? node : n)),
            unmount: ()=>setNodes((prevState)=>prevState.map((n, i)=>i === index ? null : n)),
            portal: ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, nodes[index] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(el.component, nodes[index]) : null)
        }));
};
;
;
;
var isThatComponent = (v, component)=>{
    return !!v && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(v) && (v == null ? void 0 : v.type) === component;
};
// src/utils/useCustomPages.tsx
var useUserProfileCustomPages = (children, options)=>{
    const reorderItemsLabels = [
        "account",
        "security"
    ];
    return useCustomPages({
        children,
        reorderItemsLabels,
        LinkComponent: UserProfileLink,
        PageComponent: UserProfilePage,
        MenuItemsComponent: MenuItems,
        componentName: "UserProfile"
    }, options);
};
var useOrganizationProfileCustomPages = (children, options)=>{
    const reorderItemsLabels = [
        "general",
        "members"
    ];
    return useCustomPages({
        children,
        reorderItemsLabels,
        LinkComponent: OrganizationProfileLink,
        PageComponent: OrganizationProfilePage,
        componentName: "OrganizationProfile"
    }, options);
};
var useSanitizedChildren = (children)=>{
    const sanitizedChildren = [];
    const excludedComponents = [
        OrganizationProfileLink,
        OrganizationProfilePage,
        MenuItems,
        UserProfilePage,
        UserProfileLink
    ];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!excludedComponents.some((component)=>isThatComponent(child, component))) {
            sanitizedChildren.push(child);
        }
    });
    return sanitizedChildren;
};
var useCustomPages = (params, options)=>{
    const { children, LinkComponent, PageComponent, MenuItemsComponent, reorderItemsLabels, componentName } = params;
    const { allowForAnyChildren = false } = options || {};
    const validChildren = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!isThatComponent(child, PageComponent) && !isThatComponent(child, LinkComponent) && !isThatComponent(child, MenuItemsComponent)) {
            if (child && !allowForAnyChildren) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customPagesIgnoredComponent"])(componentName));
            }
            return;
        }
        const { props } = child;
        const { children: children2, label, url, labelIcon } = props;
        if (isThatComponent(child, PageComponent)) {
            if (isReorderItem(props, reorderItemsLabels)) {
                validChildren.push({
                    label
                });
            } else if (isCustomPage(props)) {
                validChildren.push({
                    label,
                    labelIcon,
                    children: children2,
                    url
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customPageWrongProps"])(componentName));
                return;
            }
        }
        if (isThatComponent(child, LinkComponent)) {
            if (isExternalLink(props)) {
                validChildren.push({
                    label,
                    labelIcon,
                    url
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customLinkWrongProps"])(componentName));
                return;
            }
        }
    });
    const customPageContents = [];
    const customPageLabelIcons = [];
    const customLinkLabelIcons = [];
    validChildren.forEach((cp, index)=>{
        if (isCustomPage(cp)) {
            customPageContents.push({
                component: cp.children,
                id: index
            });
            customPageLabelIcons.push({
                component: cp.labelIcon,
                id: index
            });
            return;
        }
        if (isExternalLink(cp)) {
            customLinkLabelIcons.push({
                component: cp.labelIcon,
                id: index
            });
        }
    });
    const customPageContentsPortals = useCustomElementPortal(customPageContents);
    const customPageLabelIconsPortals = useCustomElementPortal(customPageLabelIcons);
    const customLinkLabelIconsPortals = useCustomElementPortal(customLinkLabelIcons);
    const customPages = [];
    const customPagesPortals = [];
    validChildren.forEach((cp, index)=>{
        if (isReorderItem(cp, reorderItemsLabels)) {
            customPages.push({
                label: cp.label
            });
            return;
        }
        if (isCustomPage(cp)) {
            const { portal: contentPortal, mount, unmount } = customPageContentsPortals.find((p)=>p.id === index);
            const { portal: labelPortal, mount: mountIcon, unmount: unmountIcon } = customPageLabelIconsPortals.find((p)=>p.id === index);
            customPages.push({
                label: cp.label,
                url: cp.url,
                mount,
                unmount,
                mountIcon,
                unmountIcon
            });
            customPagesPortals.push(contentPortal);
            customPagesPortals.push(labelPortal);
            return;
        }
        if (isExternalLink(cp)) {
            const { portal: labelPortal, mount: mountIcon, unmount: unmountIcon } = customLinkLabelIconsPortals.find((p)=>p.id === index);
            customPages.push({
                label: cp.label,
                url: cp.url,
                mountIcon,
                unmountIcon
            });
            customPagesPortals.push(labelPortal);
            return;
        }
    });
    return {
        customPages,
        customPagesPortals
    };
};
var isReorderItem = (childProps, validItems)=>{
    const { children, label, url, labelIcon } = childProps;
    return !children && !url && !labelIcon && validItems.some((v)=>v === label);
};
var isCustomPage = (childProps)=>{
    const { children, label, url, labelIcon } = childProps;
    return !!children && !!url && !!labelIcon && !!label;
};
var isExternalLink = (childProps)=>{
    const { children, label, url, labelIcon } = childProps;
    return !children && !!url && !!labelIcon && !!label;
};
;
;
var useUserButtonCustomMenuItems = (children)=>{
    const reorderItemsLabels = [
        "manageAccount",
        "signOut"
    ];
    return useCustomMenuItems({
        children,
        reorderItemsLabels,
        MenuItemsComponent: MenuItems,
        MenuActionComponent: MenuAction,
        MenuLinkComponent: MenuLink,
        UserProfileLinkComponent: UserProfileLink,
        UserProfilePageComponent: UserProfilePage
    });
};
var useCustomMenuItems = ({ children, MenuItemsComponent, MenuActionComponent, MenuLinkComponent, UserProfileLinkComponent, UserProfilePageComponent, reorderItemsLabels })=>{
    const validChildren = [];
    const customMenuItems = [];
    const customMenuItemsPortals = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        if (!isThatComponent(child, MenuItemsComponent) && !isThatComponent(child, UserProfileLinkComponent) && !isThatComponent(child, UserProfilePageComponent)) {
            if (child) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonIgnoredComponent"]);
            }
            return;
        }
        if (isThatComponent(child, UserProfileLinkComponent) || isThatComponent(child, UserProfilePageComponent)) {
            return;
        }
        const { props } = child;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(props.children, (child2)=>{
            if (!isThatComponent(child2, MenuActionComponent) && !isThatComponent(child2, MenuLinkComponent)) {
                if (child2) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customMenuItemsIgnoredComponent"]);
                }
                return;
            }
            const { props: props2 } = child2;
            const { label, labelIcon, href, onClick, open } = props2;
            if (isThatComponent(child2, MenuActionComponent)) {
                if (isReorderItem2(props2, reorderItemsLabels)) {
                    validChildren.push({
                        label
                    });
                } else if (isCustomMenuItem(props2)) {
                    const baseItem = {
                        label,
                        labelIcon
                    };
                    if (onClick !== void 0) {
                        validChildren.push({
                            ...baseItem,
                            onClick
                        });
                    } else if (open !== void 0) {
                        validChildren.push({
                            ...baseItem,
                            open: open.startsWith("/") ? open : `/${open}`
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])("Custom menu item must have either onClick or open property");
                        return;
                    }
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemsActionWrongsProps"]);
                    return;
                }
            }
            if (isThatComponent(child2, MenuLinkComponent)) {
                if (isExternalLink2(props2)) {
                    validChildren.push({
                        label,
                        labelIcon,
                        href
                    });
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemLinkWrongProps"]);
                    return;
                }
            }
        });
    });
    const customMenuItemLabelIcons = [];
    const customLinkLabelIcons = [];
    validChildren.forEach((mi, index)=>{
        if (isCustomMenuItem(mi)) {
            customMenuItemLabelIcons.push({
                component: mi.labelIcon,
                id: index
            });
        }
        if (isExternalLink2(mi)) {
            customLinkLabelIcons.push({
                component: mi.labelIcon,
                id: index
            });
        }
    });
    const customMenuItemLabelIconsPortals = useCustomElementPortal(customMenuItemLabelIcons);
    const customLinkLabelIconsPortals = useCustomElementPortal(customLinkLabelIcons);
    validChildren.forEach((mi, index)=>{
        if (isReorderItem2(mi, reorderItemsLabels)) {
            customMenuItems.push({
                label: mi.label
            });
        }
        if (isCustomMenuItem(mi)) {
            const { portal: iconPortal, mount: mountIcon, unmount: unmountIcon } = customMenuItemLabelIconsPortals.find((p)=>p.id === index);
            const menuItem = {
                label: mi.label,
                mountIcon,
                unmountIcon
            };
            if ("onClick" in mi) {
                menuItem.onClick = mi.onClick;
            } else if ("open" in mi) {
                menuItem.open = mi.open;
            }
            customMenuItems.push(menuItem);
            customMenuItemsPortals.push(iconPortal);
        }
        if (isExternalLink2(mi)) {
            const { portal: iconPortal, mount: mountIcon, unmount: unmountIcon } = customLinkLabelIconsPortals.find((p)=>p.id === index);
            customMenuItems.push({
                label: mi.label,
                href: mi.href,
                mountIcon,
                unmountIcon
            });
            customMenuItemsPortals.push(iconPortal);
        }
    });
    return {
        customMenuItems,
        customMenuItemsPortals
    };
};
var isReorderItem2 = (childProps, validItems)=>{
    const { children, label, onClick, labelIcon } = childProps;
    return !children && !onClick && !labelIcon && validItems.some((v)=>v === label);
};
var isCustomMenuItem = (childProps)=>{
    const { label, labelIcon, onClick, open } = childProps;
    return !!labelIcon && !!label && (typeof onClick === "function" || typeof open === "string");
};
var isExternalLink2 = (childProps)=>{
    const { label, href, labelIcon } = childProps;
    return !!href && !!labelIcon && !!label;
};
;
function waitForElementChildren(options) {
    const { root = document == null ? void 0 : document.body, selector, timeout = 0 } = options;
    return new Promise((resolve, reject)=>{
        if (!root) {
            reject(new Error("No root element provided"));
            return;
        }
        let elementToWatch = root;
        if (selector) {
            elementToWatch = root == null ? void 0 : root.querySelector(selector);
        }
        const isElementAlreadyPresent = (elementToWatch == null ? void 0 : elementToWatch.childElementCount) && elementToWatch.childElementCount > 0;
        if (isElementAlreadyPresent) {
            resolve();
            return;
        }
        const observer = new MutationObserver((mutationsList)=>{
            for (const mutation of mutationsList){
                if (mutation.type === "childList") {
                    if (!elementToWatch && selector) {
                        elementToWatch = root == null ? void 0 : root.querySelector(selector);
                    }
                    if ((elementToWatch == null ? void 0 : elementToWatch.childElementCount) && elementToWatch.childElementCount > 0) {
                        observer.disconnect();
                        resolve();
                        return;
                    }
                }
            }
        });
        observer.observe(root, {
            childList: true,
            subtree: true
        });
        if (timeout > 0) {
            setTimeout(()=>{
                observer.disconnect();
                reject(new Error(`Timeout waiting for element children`));
            }, timeout);
        }
    });
}
function useWaitForComponentMount(component) {
    const watcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("rendering");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWaitForComponentMount.useEffect": ()=>{
            if (!component) {
                throw new Error("Clerk: no component name provided, unable to detect mount.");
            }
            if (typeof window !== "undefined" && !watcherRef.current) {
                watcherRef.current = waitForElementChildren({
                    selector: `[data-clerk-component="${component}"]`
                }).then({
                    "useWaitForComponentMount.useEffect": ()=>{
                        setStatus("rendered");
                    }
                }["useWaitForComponentMount.useEffect"]).catch({
                    "useWaitForComponentMount.useEffect": ()=>{
                        setStatus("error");
                    }
                }["useWaitForComponentMount.useEffect"]);
            }
        }
    }["useWaitForComponentMount.useEffect"], [
        component
    ]);
    return status;
}
;
;
;
var isMountProps = (props)=>{
    return "mount" in props;
};
var isOpenProps = (props)=>{
    return "open" in props;
};
var stripMenuItemIconHandlers = (menuItems)=>{
    return menuItems == null ? void 0 : menuItems.map(({ mountIcon, unmountIcon, ...rest })=>rest);
};
var ClerkHostRenderer = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PureComponent {
    constructor(){
        super(...arguments);
        this.rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef();
    }
    componentDidUpdate(_prevProps) {
        var _a, _b, _c, _d;
        if (!isMountProps(_prevProps) || !isMountProps(this.props)) {
            return;
        }
        const prevProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["without"])(_prevProps.props, "customPages", "customMenuItems", "children");
        const newProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["without"])(this.props.props, "customPages", "customMenuItems", "children");
        const customPagesChanged = ((_a = prevProps.customPages) == null ? void 0 : _a.length) !== ((_b = newProps.customPages) == null ? void 0 : _b.length);
        const customMenuItemsChanged = ((_c = prevProps.customMenuItems) == null ? void 0 : _c.length) !== ((_d = newProps.customMenuItems) == null ? void 0 : _d.length);
        const prevMenuItemsWithoutHandlers = stripMenuItemIconHandlers(_prevProps.props.customMenuItems);
        const newMenuItemsWithoutHandlers = stripMenuItemIconHandlers(this.props.props.customMenuItems);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeeplyEqual"])(prevProps, newProps) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeeplyEqual"])(prevMenuItemsWithoutHandlers, newMenuItemsWithoutHandlers) || customPagesChanged || customMenuItemsChanged) {
            if (this.rootRef.current) {
                this.props.updateProps({
                    node: this.rootRef.current,
                    props: this.props.props
                });
            }
        }
    }
    componentDidMount() {
        if (this.rootRef.current) {
            if (isMountProps(this.props)) {
                this.props.mount(this.rootRef.current, this.props.props);
            }
            if (isOpenProps(this.props)) {
                this.props.open(this.props.props);
            }
        }
    }
    componentWillUnmount() {
        if (this.rootRef.current) {
            if (isMountProps(this.props)) {
                this.props.unmount(this.rootRef.current);
            }
            if (isOpenProps(this.props)) {
                this.props.close();
            }
        }
    }
    render() {
        const { hideRootHtmlElement = false } = this.props;
        const rootAttributes = {
            ref: this.rootRef,
            ...this.props.rootProps,
            ...this.props.component && {
                "data-clerk-component": this.props.component
            }
        };
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, !hideRootHtmlElement && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ...rootAttributes
        }), this.props.children);
    }
};
// src/components/uiComponents.tsx
var CustomPortalsRenderer = (props)=>{
    var _a, _b;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, (_a = props == null ? void 0 : props.customPagesPortals) == null ? void 0 : _a.map((portal, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(portal, {
            key: index
        })), (_b = props == null ? void 0 : props.customMenuItemsPortals) == null ? void 0 : _b.map((portal, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(portal, {
            key: index
        })));
};
var SignIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountSignIn,
        unmount: clerk.unmountSignIn,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "SignIn",
    renderWhileLoading: true
});
var SignUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountSignUp,
        unmount: clerk.unmountSignUp,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "SignUp",
    renderWhileLoading: true
});
function UserProfilePage({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userProfilePageRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function UserProfileLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userProfileLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
var _UserProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useUserProfileCustomPages(props.children);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountUserProfile,
        unmount: clerk.unmountUserProfile,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            customPages
        },
        rootProps: rendererRootProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    })));
}, {
    component: "UserProfile",
    renderWhileLoading: true
});
var UserProfile = Object.assign(_UserProfile, {
    Page: UserProfilePage,
    Link: UserProfileLink
});
var UserButtonContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    mount: ()=>{},
    unmount: ()=>{},
    updateProps: ()=>{}
});
var _UserButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useUserProfileCustomPages(props.children, {
        allowForAnyChildren: !!props.__experimental_asProvider
    });
    const userProfileProps = Object.assign(props.userProfileProps || {}, {
        customPages
    });
    const { customMenuItems, customMenuItemsPortals } = useUserButtonCustomMenuItems(props.children);
    const sanitizedChildren = useSanitizedChildren(props.children);
    const passableProps = {
        mount: clerk.mountUserButton,
        unmount: clerk.unmountUserButton,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            userProfileProps,
            customMenuItems
        }
    };
    const portalProps = {
        customPagesPortals,
        customMenuItemsPortals
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UserButtonContext.Provider, {
        value: passableProps
    }, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        ...passableProps,
        hideRootHtmlElement: !!props.__experimental_asProvider,
        rootProps: rendererRootProps
    }, props.__experimental_asProvider ? sanitizedChildren : null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        ...portalProps
    })));
}, {
    component: "UserButton",
    renderWhileLoading: true
});
function MenuItems({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuItemsRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function MenuAction({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuActionRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function MenuLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["userButtonMenuLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function UserButtonOutlet(outletProps) {
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserButtonContext);
    const portalProps = {
        ...providerProps,
        props: {
            ...providerProps.props,
            ...outletProps
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...portalProps
    });
}
var UserButton = Object.assign(_UserButton, {
    UserProfilePage,
    UserProfileLink,
    MenuItems,
    Action: MenuAction,
    Link: MenuLink,
    __experimental_Outlet: UserButtonOutlet
});
function OrganizationProfilePage({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["organizationProfilePageRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
function OrganizationProfileLink({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ARQUL5DC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logErrorInDevMode"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["organizationProfileLinkRenderedError"]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, children);
}
var _OrganizationProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useOrganizationProfileCustomPages(props.children);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountOrganizationProfile,
        unmount: clerk.unmountOrganizationProfile,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            customPages
        },
        rootProps: rendererRootProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    })));
}, {
    component: "OrganizationProfile",
    renderWhileLoading: true
});
var OrganizationProfile = Object.assign(_OrganizationProfile, {
    Page: OrganizationProfilePage,
    Link: OrganizationProfileLink
});
var CreateOrganization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountCreateOrganization,
        unmount: clerk.unmountCreateOrganization,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "CreateOrganization",
    renderWhileLoading: true
});
var OrganizationSwitcherContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    mount: ()=>{},
    unmount: ()=>{},
    updateProps: ()=>{}
});
var _OrganizationSwitcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    const { customPages, customPagesPortals } = useOrganizationProfileCustomPages(props.children, {
        allowForAnyChildren: !!props.__experimental_asProvider
    });
    const organizationProfileProps = Object.assign(props.organizationProfileProps || {}, {
        customPages
    });
    const sanitizedChildren = useSanitizedChildren(props.children);
    const passableProps = {
        mount: clerk.mountOrganizationSwitcher,
        unmount: clerk.unmountOrganizationSwitcher,
        updateProps: clerk.__unstable__updateProps,
        props: {
            ...props,
            organizationProfileProps
        },
        rootProps: rendererRootProps,
        component
    };
    clerk.__experimental_prefetchOrganizationSwitcher();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(OrganizationSwitcherContext.Provider, {
        value: passableProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...passableProps,
        hideRootHtmlElement: !!props.__experimental_asProvider
    }, props.__experimental_asProvider ? sanitizedChildren : null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomPortalsRenderer, {
        customPagesPortals
    }))));
}, {
    component: "OrganizationSwitcher",
    renderWhileLoading: true
});
function OrganizationSwitcherOutlet(outletProps) {
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OrganizationSwitcherContext);
    const portalProps = {
        ...providerProps,
        props: {
            ...providerProps.props,
            ...outletProps
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        ...portalProps
    });
}
var OrganizationSwitcher = Object.assign(_OrganizationSwitcher, {
    OrganizationProfilePage,
    OrganizationProfileLink,
    __experimental_Outlet: OrganizationSwitcherOutlet
});
var OrganizationList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountOrganizationList,
        unmount: clerk.unmountOrganizationList,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "OrganizationList",
    renderWhileLoading: true
});
var GoogleOneTap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        open: clerk.openGoogleOneTap,
        close: clerk.closeGoogleOneTap,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "GoogleOneTap",
    renderWhileLoading: true
});
var Waitlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountWaitlist,
        unmount: clerk.unmountWaitlist,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "Waitlist",
    renderWhileLoading: true
});
var PricingTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, component, fallback, ...props })=>{
    const mountingStatus = useWaitForComponentMount(component);
    const shouldShowFallback = mountingStatus === "rendering" || !clerk.loaded;
    const rendererRootProps = {
        ...shouldShowFallback && fallback && {
            style: {
                display: "none"
            }
        }
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, shouldShowFallback && fallback, clerk.loaded && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkHostRenderer, {
        component,
        mount: clerk.mountPricingTable,
        unmount: clerk.unmountPricingTable,
        updateProps: clerk.__unstable__updateProps,
        props,
        rootProps: rendererRootProps
    }));
}, {
    component: "PricingTable",
    renderWhileLoading: true
});
;
var SignInButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { signUpFallbackRedirectUrl, forceRedirectUrl, fallbackRedirectUrl, signUpForceRedirectUrl, mode, initialValues, withSignUp, oauthFlow, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign in");
    const child = assertSingleChild(children)("SignInButton");
    const clickHandler = ()=>{
        const opts = {
            forceRedirectUrl,
            fallbackRedirectUrl,
            signUpFallbackRedirectUrl,
            signUpForceRedirectUrl,
            initialValues,
            withSignUp,
            oauthFlow
        };
        if (mode === "modal") {
            return clerk.openSignIn({
                ...opts,
                appearance: props.appearance
            });
        }
        return clerk.redirectToSignIn({
            ...opts,
            signInFallbackRedirectUrl: fallbackRedirectUrl,
            signInForceRedirectUrl: forceRedirectUrl
        });
    };
    const wrappedChildClickHandler = async (e)=>{
        if (child && typeof child === "object" && "props" in child) {
            await safeExecute(child.props.onClick)(e);
        }
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignInButton",
    renderWhileLoading: true
});
;
var SignUpButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { fallbackRedirectUrl, forceRedirectUrl, signInFallbackRedirectUrl, signInForceRedirectUrl, mode, unsafeMetadata, initialValues, oauthFlow, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign up");
    const child = assertSingleChild(children)("SignUpButton");
    const clickHandler = ()=>{
        const opts = {
            fallbackRedirectUrl,
            forceRedirectUrl,
            signInFallbackRedirectUrl,
            signInForceRedirectUrl,
            unsafeMetadata,
            initialValues,
            oauthFlow
        };
        if (mode === "modal") {
            return clerk.openSignUp({
                ...opts,
                appearance: props.appearance
            });
        }
        return clerk.redirectToSignUp({
            ...opts,
            signUpFallbackRedirectUrl: fallbackRedirectUrl,
            signUpForceRedirectUrl: forceRedirectUrl
        });
    };
    const wrappedChildClickHandler = async (e)=>{
        if (child && typeof child === "object" && "props" in child) {
            await safeExecute(child.props.onClick)(e);
        }
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignUpButton",
    renderWhileLoading: true
});
;
var SignOutButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { redirectUrl = "/", signOutOptions, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign out");
    const child = assertSingleChild(children)("SignOutButton");
    const clickHandler = ()=>clerk.signOut({
            redirectUrl,
            ...signOutOptions
        });
    const wrappedChildClickHandler = async (e)=>{
        await safeExecute(child.props.onClick)(e);
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignOutButton",
    renderWhileLoading: true
});
;
var SignInWithMetamaskButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClerk"])(({ clerk, children, ...props })=>{
    const { redirectUrl, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign in with Metamask");
    const child = assertSingleChild(children)("SignInWithMetamaskButton");
    const clickHandler = async ()=>{
        async function authenticate() {
            await clerk.authenticateWithMetamask({
                redirectUrl: redirectUrl || void 0
            });
        }
        void authenticate();
    };
    const wrappedChildClickHandler = async (e)=>{
        await safeExecute(child.props.onClick)(e);
        return clickHandler();
    };
    const childProps = {
        ...rest,
        onClick: wrappedChildClickHandler
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, childProps);
}, {
    component: "SignInWithMetamask",
    renderWhileLoading: true
});
;
;
;
;
;
;
;
;
;
if (typeof globalThis.__BUILD_DISABLE_RHC__ === "undefined") {
    globalThis.__BUILD_DISABLE_RHC__ = false;
}
var SDK_METADATA = {
    name: "@clerk/clerk-react",
    version: "5.31.8",
    environment: ("TURBOPACK compile-time value", "development")
};
var _status, _domain, _proxyUrl, _publishableKey, _eventBus, _instance, _IsomorphicClerk_instances, waitForClerkJS_fn;
var _IsomorphicClerk = class _IsomorphicClerk {
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _IsomorphicClerk_instances);
        this.clerkjs = null;
        this.preopenOneTap = null;
        this.preopenUserVerification = null;
        this.preopenSignIn = null;
        this.preopenCheckout = null;
        this.preopenPlanDetails = null;
        this.preopenSignUp = null;
        this.preopenUserProfile = null;
        this.preopenOrganizationProfile = null;
        this.preopenCreateOrganization = null;
        this.preOpenWaitlist = null;
        this.premountSignInNodes = /* @__PURE__ */ new Map();
        this.premountSignUpNodes = /* @__PURE__ */ new Map();
        this.premountUserProfileNodes = /* @__PURE__ */ new Map();
        this.premountUserButtonNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationProfileNodes = /* @__PURE__ */ new Map();
        this.premountCreateOrganizationNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationSwitcherNodes = /* @__PURE__ */ new Map();
        this.premountOrganizationListNodes = /* @__PURE__ */ new Map();
        this.premountMethodCalls = /* @__PURE__ */ new Map();
        this.premountWaitlistNodes = /* @__PURE__ */ new Map();
        this.premountPricingTableNodes = /* @__PURE__ */ new Map();
        // A separate Map of `addListener` method calls to handle multiple listeners.
        this.premountAddListenerCalls = /* @__PURE__ */ new Map();
        this.loadedListeners = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _status, "loading");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _domain);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _proxyUrl);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _publishableKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _eventBus, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClerkEventBus"])());
        this.buildSignInUrl = (opts)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildSignInUrl(opts)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildSignInUrl", callback);
            }
        };
        this.buildSignUpUrl = (opts)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildSignUpUrl(opts)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildSignUpUrl", callback);
            }
        };
        this.buildAfterSignInUrl = (...args)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignInUrl(...args)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignInUrl", callback);
            }
        };
        this.buildAfterSignUpUrl = (...args)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignUpUrl(...args)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignUpUrl", callback);
            }
        };
        this.buildAfterSignOutUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterSignOutUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterSignOutUrl", callback);
            }
        };
        this.buildNewSubscriptionRedirectUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildNewSubscriptionRedirectUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildNewSubscriptionRedirectUrl", callback);
            }
        };
        this.buildAfterMultiSessionSingleSignOutUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildAfterMultiSessionSingleSignOutUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl", callback);
            }
        };
        this.buildUserProfileUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildUserProfileUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildUserProfileUrl", callback);
            }
        };
        this.buildCreateOrganizationUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildCreateOrganizationUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildCreateOrganizationUrl", callback);
            }
        };
        this.buildOrganizationProfileUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildOrganizationProfileUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildOrganizationProfileUrl", callback);
            }
        };
        this.buildWaitlistUrl = ()=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildWaitlistUrl()) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildWaitlistUrl", callback);
            }
        };
        this.buildUrlWithAuth = (to)=>{
            const callback = ()=>{
                var _a;
                return ((_a = this.clerkjs) == null ? void 0 : _a.buildUrlWithAuth(to)) || "";
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("buildUrlWithAuth", callback);
            }
        };
        this.handleUnauthenticated = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.handleUnauthenticated();
            };
            if (this.clerkjs && this.loaded) {
                void callback();
            } else {
                this.premountMethodCalls.set("handleUnauthenticated", callback);
            }
        };
        this.on = (...args)=>{
            var _a;
            if ((_a = this.clerkjs) == null ? void 0 : _a.on) {
                return this.clerkjs.on(...args);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).on(...args);
            }
        };
        this.off = (...args)=>{
            var _a;
            if ((_a = this.clerkjs) == null ? void 0 : _a.off) {
                return this.clerkjs.off(...args);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).off(...args);
            }
        };
        /**
     * @deprecated Please use `addStatusListener`. This api will be removed in the next major.
     */ this.addOnLoaded = (cb)=>{
            this.loadedListeners.push(cb);
            if (this.loaded) {
                this.emitLoaded();
            }
        };
        /**
     * @deprecated Please use `__internal_setStatus`. This api will be removed in the next major.
     */ this.emitLoaded = ()=>{
            this.loadedListeners.forEach((cb)=>cb());
            this.loadedListeners = [];
        };
        this.beforeLoad = (clerkjs)=>{
            if (!clerkjs) {
                throw new Error("Failed to hydrate latest Clerk JS");
            }
        };
        this.hydrateClerkJS = (clerkjs)=>{
            var _a;
            if (!clerkjs) {
                throw new Error("Failed to hydrate latest Clerk JS");
            }
            this.clerkjs = clerkjs;
            this.premountMethodCalls.forEach((cb)=>cb());
            this.premountAddListenerCalls.forEach((listenerHandlers, listener)=>{
                listenerHandlers.nativeUnsubscribe = clerkjs.addListener(listener);
            });
            (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).internal.retrieveListeners("status")) == null ? void 0 : _a.forEach((listener)=>{
                this.on("status", listener, {
                    notify: true
                });
            });
            if (this.preopenSignIn !== null) {
                clerkjs.openSignIn(this.preopenSignIn);
            }
            if (this.preopenCheckout !== null) {
                clerkjs.__internal_openCheckout(this.preopenCheckout);
            }
            if (this.preopenPlanDetails !== null) {
                clerkjs.__internal_openPlanDetails(this.preopenPlanDetails);
            }
            if (this.preopenSignUp !== null) {
                clerkjs.openSignUp(this.preopenSignUp);
            }
            if (this.preopenUserProfile !== null) {
                clerkjs.openUserProfile(this.preopenUserProfile);
            }
            if (this.preopenUserVerification !== null) {
                clerkjs.__internal_openReverification(this.preopenUserVerification);
            }
            if (this.preopenOneTap !== null) {
                clerkjs.openGoogleOneTap(this.preopenOneTap);
            }
            if (this.preopenOrganizationProfile !== null) {
                clerkjs.openOrganizationProfile(this.preopenOrganizationProfile);
            }
            if (this.preopenCreateOrganization !== null) {
                clerkjs.openCreateOrganization(this.preopenCreateOrganization);
            }
            if (this.preOpenWaitlist !== null) {
                clerkjs.openWaitlist(this.preOpenWaitlist);
            }
            this.premountSignInNodes.forEach((props, node)=>{
                clerkjs.mountSignIn(node, props);
            });
            this.premountSignUpNodes.forEach((props, node)=>{
                clerkjs.mountSignUp(node, props);
            });
            this.premountUserProfileNodes.forEach((props, node)=>{
                clerkjs.mountUserProfile(node, props);
            });
            this.premountUserButtonNodes.forEach((props, node)=>{
                clerkjs.mountUserButton(node, props);
            });
            this.premountOrganizationListNodes.forEach((props, node)=>{
                clerkjs.mountOrganizationList(node, props);
            });
            this.premountWaitlistNodes.forEach((props, node)=>{
                clerkjs.mountWaitlist(node, props);
            });
            this.premountPricingTableNodes.forEach((props, node)=>{
                clerkjs.mountPricingTable(node, props);
            });
            if (typeof this.clerkjs.status === "undefined") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkEvents"].Status, "ready");
            }
            this.emitLoaded();
            return this.clerkjs;
        };
        this.__unstable__updateProps = async (props)=>{
            const clerkjs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _IsomorphicClerk_instances, waitForClerkJS_fn).call(this);
            if (clerkjs && "__unstable__updateProps" in clerkjs) {
                return clerkjs.__unstable__updateProps(props);
            }
        };
        this.__experimental_navigateToTask = async (params)=>{
            if (this.clerkjs) {
                return this.clerkjs.__experimental_navigateToTask(params);
            } else {
                return Promise.reject();
            }
        };
        /**
     * `setActive` can be used to set the active session and/or organization.
     */ this.setActive = (params)=>{
            if (this.clerkjs) {
                return this.clerkjs.setActive(params);
            } else {
                return Promise.reject();
            }
        };
        this.openSignIn = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openSignIn(props);
            } else {
                this.preopenSignIn = props;
            }
        };
        this.closeSignIn = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeSignIn();
            } else {
                this.preopenSignIn = null;
            }
        };
        this.__internal_openCheckout = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_openCheckout(props);
            } else {
                this.preopenCheckout = props;
            }
        };
        this.__internal_closeCheckout = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_closeCheckout();
            } else {
                this.preopenCheckout = null;
            }
        };
        this.__internal_openPlanDetails = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_openPlanDetails(props);
            } else {
                this.preopenPlanDetails = props;
            }
        };
        this.__internal_closePlanDetails = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_closePlanDetails();
            } else {
                this.preopenPlanDetails = null;
            }
        };
        this.__internal_openReverification = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_openReverification(props);
            } else {
                this.preopenUserVerification = props;
            }
        };
        this.__internal_closeReverification = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.__internal_closeReverification();
            } else {
                this.preopenUserVerification = null;
            }
        };
        this.openGoogleOneTap = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openGoogleOneTap(props);
            } else {
                this.preopenOneTap = props;
            }
        };
        this.closeGoogleOneTap = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeGoogleOneTap();
            } else {
                this.preopenOneTap = null;
            }
        };
        this.openUserProfile = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openUserProfile(props);
            } else {
                this.preopenUserProfile = props;
            }
        };
        this.closeUserProfile = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeUserProfile();
            } else {
                this.preopenUserProfile = null;
            }
        };
        this.openOrganizationProfile = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openOrganizationProfile(props);
            } else {
                this.preopenOrganizationProfile = props;
            }
        };
        this.closeOrganizationProfile = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeOrganizationProfile();
            } else {
                this.preopenOrganizationProfile = null;
            }
        };
        this.openCreateOrganization = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openCreateOrganization(props);
            } else {
                this.preopenCreateOrganization = props;
            }
        };
        this.closeCreateOrganization = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeCreateOrganization();
            } else {
                this.preopenCreateOrganization = null;
            }
        };
        this.openWaitlist = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openWaitlist(props);
            } else {
                this.preOpenWaitlist = props;
            }
        };
        this.closeWaitlist = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeWaitlist();
            } else {
                this.preOpenWaitlist = null;
            }
        };
        this.openSignUp = (props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.openSignUp(props);
            } else {
                this.preopenSignUp = props;
            }
        };
        this.closeSignUp = ()=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.closeSignUp();
            } else {
                this.preopenSignUp = null;
            }
        };
        this.mountSignIn = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountSignIn(node, props);
            } else {
                this.premountSignInNodes.set(node, props);
            }
        };
        this.unmountSignIn = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountSignIn(node);
            } else {
                this.premountSignInNodes.delete(node);
            }
        };
        this.mountSignUp = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountSignUp(node, props);
            } else {
                this.premountSignUpNodes.set(node, props);
            }
        };
        this.unmountSignUp = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountSignUp(node);
            } else {
                this.premountSignUpNodes.delete(node);
            }
        };
        this.mountUserProfile = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountUserProfile(node, props);
            } else {
                this.premountUserProfileNodes.set(node, props);
            }
        };
        this.unmountUserProfile = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountUserProfile(node);
            } else {
                this.premountUserProfileNodes.delete(node);
            }
        };
        this.mountOrganizationProfile = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountOrganizationProfile(node, props);
            } else {
                this.premountOrganizationProfileNodes.set(node, props);
            }
        };
        this.unmountOrganizationProfile = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountOrganizationProfile(node);
            } else {
                this.premountOrganizationProfileNodes.delete(node);
            }
        };
        this.mountCreateOrganization = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountCreateOrganization(node, props);
            } else {
                this.premountCreateOrganizationNodes.set(node, props);
            }
        };
        this.unmountCreateOrganization = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountCreateOrganization(node);
            } else {
                this.premountCreateOrganizationNodes.delete(node);
            }
        };
        this.mountOrganizationSwitcher = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountOrganizationSwitcher(node, props);
            } else {
                this.premountOrganizationSwitcherNodes.set(node, props);
            }
        };
        this.unmountOrganizationSwitcher = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountOrganizationSwitcher(node);
            } else {
                this.premountOrganizationSwitcherNodes.delete(node);
            }
        };
        this.__experimental_prefetchOrganizationSwitcher = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.__experimental_prefetchOrganizationSwitcher();
            };
            if (this.clerkjs && this.loaded) {
                void callback();
            } else {
                this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher", callback);
            }
        };
        this.mountOrganizationList = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountOrganizationList(node, props);
            } else {
                this.premountOrganizationListNodes.set(node, props);
            }
        };
        this.unmountOrganizationList = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountOrganizationList(node);
            } else {
                this.premountOrganizationListNodes.delete(node);
            }
        };
        this.mountUserButton = (node, userButtonProps)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountUserButton(node, userButtonProps);
            } else {
                this.premountUserButtonNodes.set(node, userButtonProps);
            }
        };
        this.unmountUserButton = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountUserButton(node);
            } else {
                this.premountUserButtonNodes.delete(node);
            }
        };
        this.mountWaitlist = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountWaitlist(node, props);
            } else {
                this.premountWaitlistNodes.set(node, props);
            }
        };
        this.unmountWaitlist = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountWaitlist(node);
            } else {
                this.premountWaitlistNodes.delete(node);
            }
        };
        this.mountPricingTable = (node, props)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.mountPricingTable(node, props);
            } else {
                this.premountPricingTableNodes.set(node, props);
            }
        };
        this.unmountPricingTable = (node)=>{
            if (this.clerkjs && this.loaded) {
                this.clerkjs.unmountPricingTable(node);
            } else {
                this.premountPricingTableNodes.delete(node);
            }
        };
        this.addListener = (listener)=>{
            if (this.clerkjs) {
                return this.clerkjs.addListener(listener);
            } else {
                const unsubscribe = ()=>{
                    var _a;
                    const listenerHandlers = this.premountAddListenerCalls.get(listener);
                    if (listenerHandlers) {
                        (_a = listenerHandlers.nativeUnsubscribe) == null ? void 0 : _a.call(listenerHandlers);
                        this.premountAddListenerCalls.delete(listener);
                    }
                };
                this.premountAddListenerCalls.set(listener, {
                    unsubscribe,
                    nativeUnsubscribe: void 0
                });
                return unsubscribe;
            }
        };
        this.navigate = (to)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.navigate(to);
            };
            if (this.clerkjs && this.loaded) {
                void callback();
            } else {
                this.premountMethodCalls.set("navigate", callback);
            }
        };
        this.redirectWithAuth = async (...args)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectWithAuth(...args);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectWithAuth", callback);
                return;
            }
        };
        this.redirectToSignIn = async (opts)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToSignIn(opts);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToSignIn", callback);
                return;
            }
        };
        this.redirectToSignUp = async (opts)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToSignUp(opts);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToSignUp", callback);
                return;
            }
        };
        this.redirectToUserProfile = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToUserProfile();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToUserProfile", callback);
                return;
            }
        };
        this.redirectToAfterSignUp = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignUp();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignUp", callback);
            }
        };
        this.redirectToAfterSignIn = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignIn();
            };
            if (this.clerkjs && this.loaded) {
                callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignIn", callback);
            }
        };
        this.redirectToAfterSignOut = ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToAfterSignOut();
            };
            if (this.clerkjs && this.loaded) {
                callback();
            } else {
                this.premountMethodCalls.set("redirectToAfterSignOut", callback);
            }
        };
        this.redirectToOrganizationProfile = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToOrganizationProfile();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToOrganizationProfile", callback);
                return;
            }
        };
        this.redirectToCreateOrganization = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToCreateOrganization();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToCreateOrganization", callback);
                return;
            }
        };
        this.redirectToWaitlist = async ()=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.redirectToWaitlist();
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("redirectToWaitlist", callback);
                return;
            }
        };
        this.handleRedirectCallback = async (params)=>{
            var _a;
            const callback = ()=>{
                var _a2;
                return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleRedirectCallback(params);
            };
            if (this.clerkjs && this.loaded) {
                void ((_a = callback()) == null ? void 0 : _a.catch(()=>{}));
            } else {
                this.premountMethodCalls.set("handleRedirectCallback", callback);
            }
        };
        this.handleGoogleOneTapCallback = async (signInOrUp, params)=>{
            var _a;
            const callback = ()=>{
                var _a2;
                return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleGoogleOneTapCallback(signInOrUp, params);
            };
            if (this.clerkjs && this.loaded) {
                void ((_a = callback()) == null ? void 0 : _a.catch(()=>{}));
            } else {
                this.premountMethodCalls.set("handleGoogleOneTapCallback", callback);
            }
        };
        this.handleEmailLinkVerification = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.handleEmailLinkVerification(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("handleEmailLinkVerification", callback);
            }
        };
        this.authenticateWithMetamask = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithMetamask(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithMetamask", callback);
            }
        };
        this.authenticateWithCoinbaseWallet = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithCoinbaseWallet(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithCoinbaseWallet", callback);
            }
        };
        this.authenticateWithOKXWallet = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithOKXWallet(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithOKXWallet", callback);
            }
        };
        this.authenticateWithWeb3 = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.authenticateWithWeb3(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("authenticateWithWeb3", callback);
            }
        };
        this.authenticateWithGoogleOneTap = async (params)=>{
            const clerkjs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _IsomorphicClerk_instances, waitForClerkJS_fn).call(this);
            return clerkjs.authenticateWithGoogleOneTap(params);
        };
        this.createOrganization = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.createOrganization(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("createOrganization", callback);
            }
        };
        this.getOrganization = async (organizationId)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.getOrganization(organizationId);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("getOrganization", callback);
            }
        };
        this.joinWaitlist = async (params)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.joinWaitlist(params);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("joinWaitlist", callback);
            }
        };
        this.signOut = async (...args)=>{
            const callback = ()=>{
                var _a;
                return (_a = this.clerkjs) == null ? void 0 : _a.signOut(...args);
            };
            if (this.clerkjs && this.loaded) {
                return callback();
            } else {
                this.premountMethodCalls.set("signOut", callback);
            }
        };
        const { Clerk = null, publishableKey } = options || {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _publishableKey, publishableKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _proxyUrl, options == null ? void 0 : options.proxyUrl);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _domain, options == null ? void 0 : options.domain);
        this.options = options;
        this.Clerk = Clerk;
        this.mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inBrowser"])() ? "browser" : "server";
        if (!this.options.sdkMetadata) {
            this.options.sdkMetadata = SDK_METADATA;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkEvents"].Status, "loading");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).prioritizedOn(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkEvents"].Status, (status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _status, status));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey)) {
            void this.loadClerkJS();
        }
    }
    get publishableKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey);
    }
    get loaded() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.loaded) || false;
    }
    get status() {
        var _a;
        if (!this.clerkjs) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _status);
        }
        return ((_a = this.clerkjs) == null ? void 0 : _a.status) || /**
     * Support older clerk-js versions.
     * If clerk-js is available but `.status` is missing it we need to fallback to `.loaded`.
     * Since "degraded" an "error" did not exist before,
     * map "loaded" to "ready" and "not loaded" to "loading".
     */ (this.clerkjs.loaded ? "ready" : "loading");
    }
    static getOrCreateInstance(options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inBrowser"])() || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance) || options.Clerk && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance).Clerk !== options.Clerk || // Allow hot swapping PKs on the client
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance).publishableKey !== options.publishableKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _instance, new _IsomorphicClerk(options));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _instance);
    }
    static clearInstance() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _instance, null);
    }
    get domain() {
        if (typeof window !== "undefined" && window.location) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleValueOrFn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _domain), new URL(window.location.href), "");
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _domain) === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _domain) || "";
    }
    get proxyUrl() {
        if (typeof window !== "undefined" && window.location) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleValueOrFn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _proxyUrl), new URL(window.location.href), "");
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _proxyUrl) === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _proxyUrl) || "";
    }
    /**
   * Accesses private options from the `Clerk` instance and defaults to
   * `IsomorphicClerk` options when in SSR context.
   *  @internal
   */ __internal_getOption(key) {
        var _a, _b;
        return ((_a = this.clerkjs) == null ? void 0 : _a.__internal_getOption) ? (_b = this.clerkjs) == null ? void 0 : _b.__internal_getOption(key) : this.options[key];
    }
    get sdkMetadata() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.sdkMetadata) || this.options.sdkMetadata || void 0;
    }
    get instanceType() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.instanceType;
    }
    get frontendApi() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.frontendApi) || "";
    }
    get isStandardBrowser() {
        var _a;
        return ((_a = this.clerkjs) == null ? void 0 : _a.isStandardBrowser) || this.options.standardBrowser || false;
    }
    get isSatellite() {
        if (typeof window !== "undefined" && window.location) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$O32JQBM6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleValueOrFn"])(this.options.isSatellite, new URL(window.location.href), false);
        }
        if (typeof this.options.isSatellite === "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["unsupportedNonBrowserDomainOrProxyUrlFunction"]);
        }
        return false;
    }
    async loadClerkJS() {
        var _a;
        if (this.mode !== "browser" || this.loaded) {
            return;
        }
        if (typeof window !== "undefined") {
            window.__clerk_publishable_key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey);
            window.__clerk_proxy_url = this.proxyUrl;
            window.__clerk_domain = this.domain;
        }
        try {
            if (this.Clerk) {
                let c;
                if (isConstructor(this.Clerk)) {
                    c = new this.Clerk((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey), {
                        proxyUrl: this.proxyUrl,
                        domain: this.domain
                    });
                    this.beforeLoad(c);
                    await c.load(this.options);
                } else {
                    c = this.Clerk;
                    if (!c.loaded) {
                        this.beforeLoad(c);
                        await c.load(this.options);
                    }
                }
                global.Clerk = c;
            } else if (!__BUILD_DISABLE_RHC__) {
                if (!global.Clerk) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$R6ATEREH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadClerkJsScript"])({
                        ...this.options,
                        publishableKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _publishableKey),
                        proxyUrl: this.proxyUrl,
                        domain: this.domain,
                        nonce: this.options.nonce
                    });
                }
                if (!global.Clerk) {
                    throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
                }
                this.beforeLoad(global.Clerk);
                await global.Clerk.load(this.options);
            }
            if ((_a = global.Clerk) == null ? void 0 : _a.loaded) {
                return this.hydrateClerkJS(global.Clerk);
            }
            return;
        } catch (err) {
            const error = err;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventBus).emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkEvents"].Status, "error");
            console.error(error.stack || error.message || error);
            return;
        }
    }
    get version() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.version;
    }
    get client() {
        if (this.clerkjs) {
            return this.clerkjs.client;
        } else {
            return void 0;
        }
    }
    get session() {
        if (this.clerkjs) {
            return this.clerkjs.session;
        } else {
            return void 0;
        }
    }
    get user() {
        if (this.clerkjs) {
            return this.clerkjs.user;
        } else {
            return void 0;
        }
    }
    get organization() {
        if (this.clerkjs) {
            return this.clerkjs.organization;
        } else {
            return void 0;
        }
    }
    get telemetry() {
        if (this.clerkjs) {
            return this.clerkjs.telemetry;
        } else {
            return void 0;
        }
    }
    get __unstable__environment() {
        if (this.clerkjs) {
            return this.clerkjs.__unstable__environment;
        } else {
            return void 0;
        }
    }
    get isSignedIn() {
        if (this.clerkjs) {
            return this.clerkjs.isSignedIn;
        } else {
            return false;
        }
    }
    get billing() {
        var _a;
        return (_a = this.clerkjs) == null ? void 0 : _a.billing;
    }
    __unstable__setEnvironment(...args) {
        if (this.clerkjs && "__unstable__setEnvironment" in this.clerkjs) {
            this.clerkjs.__unstable__setEnvironment(args);
        } else {
            return void 0;
        }
    }
};
_status = new WeakMap();
_domain = new WeakMap();
_proxyUrl = new WeakMap();
_publishableKey = new WeakMap();
_eventBus = new WeakMap();
_instance = new WeakMap();
_IsomorphicClerk_instances = new WeakSet();
waitForClerkJS_fn = function() {
    return new Promise((resolve)=>{
        this.addOnLoaded(()=>resolve(this.clerkjs));
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(_IsomorphicClerk, _instance);
var IsomorphicClerk = _IsomorphicClerk;
// src/contexts/ClerkContextProvider.tsx
function ClerkContextProvider(props) {
    const { isomorphicClerkOptions, initialState, children } = props;
    const { isomorphicClerk: clerk, clerkStatus } = useLoadedIsomorphicClerk(isomorphicClerkOptions);
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        client: clerk.client,
        session: clerk.session,
        user: clerk.user,
        organization: clerk.organization
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ClerkContextProvider.useEffect": ()=>{
            return clerk.addListener({
                "ClerkContextProvider.useEffect": (e)=>setState({
                        ...e
                    })
            }["ClerkContextProvider.useEffect"]);
        }
    }["ClerkContextProvider.useEffect"], []);
    const derivedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$ZIXJBK4O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveState"])(clerk.loaded, state, initialState);
    const clerkCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[clerkCtx]": ()=>({
                value: clerk
            })
    }["ClerkContextProvider.useMemo[clerkCtx]"], [
        // Only update the clerk reference on status change
        clerkStatus
    ]);
    const clientCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[clientCtx]": ()=>({
                value: state.client
            })
    }["ClerkContextProvider.useMemo[clientCtx]"], [
        state.client
    ]);
    const { sessionId, sessionStatus, sessionClaims, session, userId, user, orgId, actor, organization, orgRole, orgSlug, orgPermissions, factorVerificationAge } = derivedState;
    const authCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[authCtx]": ()=>{
            const value = {
                sessionId,
                sessionStatus,
                sessionClaims,
                userId,
                actor,
                orgId,
                orgRole,
                orgSlug,
                orgPermissions,
                factorVerificationAge
            };
            return {
                value
            };
        }
    }["ClerkContextProvider.useMemo[authCtx]"], [
        sessionId,
        sessionStatus,
        userId,
        actor,
        orgId,
        orgRole,
        orgSlug,
        factorVerificationAge,
        sessionClaims == null ? void 0 : sessionClaims.__raw
    ]);
    const sessionCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[sessionCtx]": ()=>({
                value: session
            })
    }["ClerkContextProvider.useMemo[sessionCtx]"], [
        sessionId,
        session
    ]);
    const userCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[userCtx]": ()=>({
                value: user
            })
    }["ClerkContextProvider.useMemo[userCtx]"], [
        userId,
        user
    ]);
    const organizationCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ClerkContextProvider.useMemo[organizationCtx]": ()=>{
            const value = {
                organization
            };
            return {
                value
            };
        }
    }["ClerkContextProvider.useMemo[organizationCtx]"], [
        orgId,
        organization
    ]);
    return(// @ts-expect-error value passed is of type IsomorphicClerk where the context expects LoadedClerk
    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IsomorphicClerkContext"].Provider, {
        value: clerkCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientContext"].Provider, {
        value: clientCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionContext"].Provider, {
        value: sessionCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganizationProvider"], {
        ...organizationCtx.value
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AuthContext"].Provider, {
        value: authCtx
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserContext"].Provider, {
        value: userCtx
    }, children)))))));
}
var useLoadedIsomorphicClerk = (options)=>{
    const isomorphicClerk = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useLoadedIsomorphicClerk.useMemo[isomorphicClerk]": ()=>IsomorphicClerk.getOrCreateInstance(options)
    }["useLoadedIsomorphicClerk.useMemo[isomorphicClerk]"], []);
    const [clerkStatus, setStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(isomorphicClerk.status);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useLoadedIsomorphicClerk.useEffect": ()=>{
            void isomorphicClerk.__unstable__updateProps({
                appearance: options.appearance
            });
        }
    }["useLoadedIsomorphicClerk.useEffect"], [
        options.appearance
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useLoadedIsomorphicClerk.useEffect": ()=>{
            void isomorphicClerk.__unstable__updateProps({
                options
            });
        }
    }["useLoadedIsomorphicClerk.useEffect"], [
        options.localization
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useLoadedIsomorphicClerk.useEffect": ()=>{
            isomorphicClerk.on("status", setStatus);
            return ({
                "useLoadedIsomorphicClerk.useEffect": ()=>isomorphicClerk.off("status", setStatus)
            })["useLoadedIsomorphicClerk.useEffect"];
        }
    }["useLoadedIsomorphicClerk.useEffect"], [
        isomorphicClerk
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useLoadedIsomorphicClerk.useEffect": ()=>{
            return ({
                "useLoadedIsomorphicClerk.useEffect": ()=>{
                    IsomorphicClerk.clearInstance();
                }
            })["useLoadedIsomorphicClerk.useEffect"];
        }
    }["useLoadedIsomorphicClerk.useEffect"], []);
    return {
        isomorphicClerk,
        clerkStatus
    };
};
// src/contexts/ClerkProvider.tsx
function ClerkProviderBase(props) {
    const { initialState, children, __internal_bypassMissingPublishableKey, ...restIsomorphicClerkOptions } = props;
    const { publishableKey = "", Clerk: userInitialisedClerk } = restIsomorphicClerkOptions;
    if (!userInitialisedClerk && !__internal_bypassMissingPublishableKey) {
        if (!publishableKey) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwMissingPublishableKeyError();
        } else if (publishableKey && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QU372XZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPublishableKey"])(publishableKey)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throwInvalidPublishableKeyError({
                key: publishableKey
            });
        }
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkContextProvider, {
        initialState,
        isomorphicClerkOptions: restIsomorphicClerkOptions
    }, children);
}
var ClerkProvider = withMaxAllowedInstancesGuard(ClerkProviderBase, "ClerkProvider", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multipleClerkProvidersError"]);
ClerkProvider.displayName = "ClerkProvider";
// src/index.ts
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setErrorThrowerOptions"])({
    packageName: "@clerk/clerk-react"
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$R6ATEREH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setClerkJsLoadingErrorPackageName"])("@clerk/clerk-react");
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/object.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/keys.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deriveState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/deriveState.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$clerkEventBus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/clerkEventBus.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useRoutingProps": (()=>useRoutingProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)");
// src/internal.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>");
;
;
// src/hooks/useRoutingProps.ts
function useRoutingProps(componentName, props, routingOptions) {
    const path = props.path || (routingOptions == null ? void 0 : routingOptions.path);
    const routing = props.routing || (routingOptions == null ? void 0 : routingOptions.routing) || "path";
    if (routing === "path") {
        if (!path) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["noPathProvidedError"])(componentName));
        }
        return {
            ...routingOptions,
            ...props,
            routing: "path"
        };
    }
    if (props.path) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorThrower"].throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["incompatibleRoutingWithPathProvidedError"])(componentName));
    }
    return {
        ...routingOptions,
        ...props,
        path: void 0
    };
}
;
;
 //# sourceMappingURL=internal.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$OANWQR3B$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-OANWQR3B.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$9$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.9.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$internal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=a3b4d_%40clerk_clerk-react_dist_556e4a20._.js.map