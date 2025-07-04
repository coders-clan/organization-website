(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EventKeys": (()=>EventKeys),
    "FilteredElementKeyMap": (()=>FilteredElementKeyMap),
    "SVGElementPropKeys": (()=>SVGElementPropKeys),
    "adaptEventHandlers": (()=>adaptEventHandlers),
    "adaptEventsOfChild": (()=>adaptEventsOfChild)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
;
/**
 * Determines how values are stacked:
 *
 * - `none` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
 * - `expand` make it so that the values always add up to 1 - so the chart will look like a rectangle.
 * - `wiggle` and `silhouette` tries to keep the chart centered.
 * - `sign` stacks positive values above zero and negative values below zero. Similar to `none` but handles negatives.
 * - `positive` ignores all negative values, and then behaves like \`none\`.
 *
 * Also see https://d3js.org/d3-shape/stack#stack-offsets
 * (note that the `diverging` offset in d3 is named `sign` in recharts)
 */ //
// Event Handler Types -- Copied from @types/react/index.d.ts and adapted for Props.
//
var SVGContainerPropKeys = [
    'viewBox',
    'children'
];
var SVGElementPropKeys = [
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-modal',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'className',
    'color',
    'height',
    'id',
    'lang',
    'max',
    'media',
    'method',
    'min',
    'name',
    'style',
    /*
 * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
 * that can use it and it conflicts with the recharts prop 'type'
 * https://github.com/recharts/recharts/pull/3327
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
 */ // 'type',
    'target',
    'width',
    'role',
    'tabIndex',
    'accentHeight',
    'accumulate',
    'additive',
    'alignmentBaseline',
    'allowReorder',
    'alphabetic',
    'amplitude',
    'arabicForm',
    'ascent',
    'attributeName',
    'attributeType',
    'autoReverse',
    'azimuth',
    'baseFrequency',
    'baselineShift',
    'baseProfile',
    'bbox',
    'begin',
    'bias',
    'by',
    'calcMode',
    'capHeight',
    'clip',
    'clipPath',
    'clipPathUnits',
    'clipRule',
    'colorInterpolation',
    'colorInterpolationFilters',
    'colorProfile',
    'colorRendering',
    'contentScriptType',
    'contentStyleType',
    'cursor',
    'cx',
    'cy',
    'd',
    'decelerate',
    'descent',
    'diffuseConstant',
    'direction',
    'display',
    'divisor',
    'dominantBaseline',
    'dur',
    'dx',
    'dy',
    'edgeMode',
    'elevation',
    'enableBackground',
    'end',
    'exponent',
    'externalResourcesRequired',
    'fill',
    'fillOpacity',
    'fillRule',
    'filter',
    'filterRes',
    'filterUnits',
    'floodColor',
    'floodOpacity',
    'focusable',
    'fontFamily',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'format',
    'from',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyphName',
    'glyphOrientationHorizontal',
    'glyphOrientationVertical',
    'glyphRef',
    'gradientTransform',
    'gradientUnits',
    'hanging',
    'horizAdvX',
    'horizOriginX',
    'href',
    'ideographic',
    'imageRendering',
    'in2',
    'in',
    'intercept',
    'k1',
    'k2',
    'k3',
    'k4',
    'k',
    'kernelMatrix',
    'kernelUnitLength',
    'kerning',
    'keyPoints',
    'keySplines',
    'keyTimes',
    'lengthAdjust',
    'letterSpacing',
    'lightingColor',
    'limitingConeAngle',
    'local',
    'markerEnd',
    'markerHeight',
    'markerMid',
    'markerStart',
    'markerUnits',
    'markerWidth',
    'mask',
    'maskContentUnits',
    'maskUnits',
    'mathematical',
    'mode',
    'numOctaves',
    'offset',
    'opacity',
    'operator',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'overlinePosition',
    'overlineThickness',
    'paintOrder',
    'panose1',
    'pathLength',
    'patternContentUnits',
    'patternTransform',
    'patternUnits',
    'pointerEvents',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'preserveAlpha',
    'preserveAspectRatio',
    'primitiveUnits',
    'r',
    'radius',
    'refX',
    'refY',
    'renderingIntent',
    'repeatCount',
    'repeatDur',
    'requiredExtensions',
    'requiredFeatures',
    'restart',
    'result',
    'rotate',
    'rx',
    'ry',
    'seed',
    'shapeRendering',
    'slope',
    'spacing',
    'specularConstant',
    'specularExponent',
    'speed',
    'spreadMethod',
    'startOffset',
    'stdDeviation',
    'stemh',
    'stemv',
    'stitchTiles',
    'stopColor',
    'stopOpacity',
    'strikethroughPosition',
    'strikethroughThickness',
    'string',
    'stroke',
    'strokeDasharray',
    'strokeDashoffset',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeMiterlimit',
    'strokeOpacity',
    'strokeWidth',
    'surfaceScale',
    'systemLanguage',
    'tableValues',
    'targetX',
    'targetY',
    'textAnchor',
    'textDecoration',
    'textLength',
    'textRendering',
    'to',
    'transform',
    'u1',
    'u2',
    'underlinePosition',
    'underlineThickness',
    'unicode',
    'unicodeBidi',
    'unicodeRange',
    'unitsPerEm',
    'vAlphabetic',
    'values',
    'vectorEffect',
    'version',
    'vertAdvY',
    'vertOriginX',
    'vertOriginY',
    'vHanging',
    'vIdeographic',
    'viewTarget',
    'visibility',
    'vMathematical',
    'widths',
    'wordSpacing',
    'writingMode',
    'x1',
    'x2',
    'x',
    'xChannelSelector',
    'xHeight',
    'xlinkActuate',
    'xlinkArcrole',
    'xlinkHref',
    'xlinkRole',
    'xlinkShow',
    'xlinkTitle',
    'xlinkType',
    'xmlBase',
    'xmlLang',
    'xmlns',
    'xmlnsXlink',
    'xmlSpace',
    'y1',
    'y2',
    'y',
    'yChannelSelector',
    'z',
    'zoomAndPan',
    'ref',
    'key',
    'angle'
];
var PolyElementKeys = [
    'points',
    'pathLength'
];
var FilteredElementKeyMap = {
    svg: SVGContainerPropKeys,
    polygon: PolyElementKeys,
    polyline: PolyElementKeys
};
var EventKeys = [
    'dangerouslySetInnerHTML',
    'onCopy',
    'onCopyCapture',
    'onCut',
    'onCutCapture',
    'onPaste',
    'onPasteCapture',
    'onCompositionEnd',
    'onCompositionEndCapture',
    'onCompositionStart',
    'onCompositionStartCapture',
    'onCompositionUpdate',
    'onCompositionUpdateCapture',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onChangeCapture',
    'onBeforeInput',
    'onBeforeInputCapture',
    'onInput',
    'onInputCapture',
    'onReset',
    'onResetCapture',
    'onSubmit',
    'onSubmitCapture',
    'onInvalid',
    'onInvalidCapture',
    'onLoad',
    'onLoadCapture',
    'onError',
    'onErrorCapture',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyPressCapture',
    'onKeyUp',
    'onKeyUpCapture',
    'onAbort',
    'onAbortCapture',
    'onCanPlay',
    'onCanPlayCapture',
    'onCanPlayThrough',
    'onCanPlayThroughCapture',
    'onDurationChange',
    'onDurationChangeCapture',
    'onEmptied',
    'onEmptiedCapture',
    'onEncrypted',
    'onEncryptedCapture',
    'onEnded',
    'onEndedCapture',
    'onLoadedData',
    'onLoadedDataCapture',
    'onLoadedMetadata',
    'onLoadedMetadataCapture',
    'onLoadStart',
    'onLoadStartCapture',
    'onPause',
    'onPauseCapture',
    'onPlay',
    'onPlayCapture',
    'onPlaying',
    'onPlayingCapture',
    'onProgress',
    'onProgressCapture',
    'onRateChange',
    'onRateChangeCapture',
    'onSeeked',
    'onSeekedCapture',
    'onSeeking',
    'onSeekingCapture',
    'onStalled',
    'onStalledCapture',
    'onSuspend',
    'onSuspendCapture',
    'onTimeUpdate',
    'onTimeUpdateCapture',
    'onVolumeChange',
    'onVolumeChangeCapture',
    'onWaiting',
    'onWaitingCapture',
    'onAuxClick',
    'onAuxClickCapture',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onContextMenuCapture',
    'onDoubleClick',
    'onDoubleClickCapture',
    'onDrag',
    'onDragCapture',
    'onDragEnd',
    'onDragEndCapture',
    'onDragEnter',
    'onDragEnterCapture',
    'onDragExit',
    'onDragExitCapture',
    'onDragLeave',
    'onDragLeaveCapture',
    'onDragOver',
    'onDragOverCapture',
    'onDragStart',
    'onDragStartCapture',
    'onDrop',
    'onDropCapture',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseMoveCapture',
    'onMouseOut',
    'onMouseOutCapture',
    'onMouseOver',
    'onMouseOverCapture',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onSelectCapture',
    'onTouchCancel',
    'onTouchCancelCapture',
    'onTouchEnd',
    'onTouchEndCapture',
    'onTouchMove',
    'onTouchMoveCapture',
    'onTouchStart',
    'onTouchStartCapture',
    'onPointerDown',
    'onPointerDownCapture',
    'onPointerMove',
    'onPointerMoveCapture',
    'onPointerUp',
    'onPointerUpCapture',
    'onPointerCancel',
    'onPointerCancelCapture',
    'onPointerEnter',
    'onPointerEnterCapture',
    'onPointerLeave',
    'onPointerLeaveCapture',
    'onPointerOver',
    'onPointerOverCapture',
    'onPointerOut',
    'onPointerOutCapture',
    'onGotPointerCapture',
    'onGotPointerCaptureCapture',
    'onLostPointerCapture',
    'onLostPointerCaptureCapture',
    'onScroll',
    'onScrollCapture',
    'onWheel',
    'onWheelCapture',
    'onAnimationStart',
    'onAnimationStartCapture',
    'onAnimationEnd',
    'onAnimationEndCapture',
    'onAnimationIteration',
    'onAnimationIterationCapture',
    'onTransitionEnd',
    'onTransitionEndCapture'
];
var adaptEventHandlers = function adaptEventHandlers(props, newHandler) {
    if (!props || typeof props === 'function' || typeof props === 'boolean') {
        return null;
    }
    var inputProps = props;
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(props)) {
        inputProps = props.props;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputProps)) {
        return null;
    }
    var out = {};
    Object.keys(inputProps).forEach(function(key) {
        if (EventKeys.includes(key)) {
            out[key] = newHandler || function(e) {
                return inputProps[key](inputProps, e);
            };
        }
    });
    return out;
};
var getEventHandlerOfChild = function getEventHandlerOfChild(originalHandler, data, index) {
    return function(e) {
        originalHandler(data, index, e);
        return null;
    };
};
var adaptEventsOfChild = function adaptEventsOfChild(props, data, index) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props) || _typeof(props) !== 'object') {
        return null;
    }
    var out = null;
    Object.keys(props).forEach(function(key) {
        var item = props[key];
        if (EventKeys.includes(key) && typeof item === 'function') {
            if (!out) out = {};
            out[key] = getEventHandlerOfChild(item, data, index);
        }
    });
    return out;
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "compareValues": (()=>compareValues),
    "findEntryInArray": (()=>findEntryInArray),
    "getAnyElementOfObject": (()=>getAnyElementOfObject),
    "getLinearRegression": (()=>getLinearRegression),
    "getPercentValue": (()=>getPercentValue),
    "hasDuplicate": (()=>hasDuplicate),
    "interpolateNumber": (()=>interpolateNumber),
    "isNumOrStr": (()=>isNumOrStr),
    "isNumber": (()=>isNumber),
    "isPercent": (()=>isPercent),
    "mathSign": (()=>mathSign),
    "uniqueId": (()=>uniqueId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNaN.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNumber.js [app-client] (ecmascript)");
;
;
;
;
var mathSign = function mathSign(value) {
    if (value === 0) {
        return 0;
    }
    if (value > 0) {
        return 1;
    }
    return -1;
};
var isPercent = function isPercent(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && value.indexOf('%') === value.length - 1;
};
var isNumber = function isNumber(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
};
var isNumOrStr = function isNumOrStr(value) {
    return isNumber(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
};
var idCounter = 0;
var uniqueId = function uniqueId(prefix) {
    var id = ++idCounter;
    return "".concat(prefix || '').concat(id);
};
var getPercentValue = function getPercentValue(percent, totalValue) {
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var validate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (!isNumber(percent) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(percent)) {
        return defaultValue;
    }
    var value;
    if (isPercent(percent)) {
        var index = percent.indexOf('%');
        value = totalValue * parseFloat(percent.slice(0, index)) / 100;
    } else {
        value = +percent;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        value = defaultValue;
    }
    if (validate && value > totalValue) {
        value = totalValue;
    }
    return value;
};
var getAnyElementOfObject = function getAnyElementOfObject(obj) {
    if (!obj) {
        return null;
    }
    var keys = Object.keys(obj);
    if (keys && keys.length) {
        return obj[keys[0]];
    }
    return null;
};
var hasDuplicate = function hasDuplicate(ary) {
    if (!Array.isArray(ary)) {
        return false;
    }
    var len = ary.length;
    var cache = {};
    for(var i = 0; i < len; i++){
        if (!cache[ary[i]]) {
            cache[ary[i]] = true;
        } else {
            return true;
        }
    }
    return false;
};
var interpolateNumber = function interpolateNumber(numberA, numberB) {
    if (isNumber(numberA) && isNumber(numberB)) {
        return function(t) {
            return numberA + t * (numberB - numberA);
        };
    }
    return function() {
        return numberB;
    };
};
function findEntryInArray(ary, specifiedKey, specifiedValue) {
    if (!ary || !ary.length) {
        return null;
    }
    return ary.find(function(entry) {
        return entry && (typeof specifiedKey === 'function' ? specifiedKey(entry) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry, specifiedKey)) === specifiedValue;
    });
}
var getLinearRegression = function getLinearRegression(data) {
    if (!data || !data.length) {
        return null;
    }
    var len = data.length;
    var xsum = 0;
    var ysum = 0;
    var xysum = 0;
    var xxsum = 0;
    var xmin = Infinity;
    var xmax = -Infinity;
    var xcurrent = 0;
    var ycurrent = 0;
    for(var i = 0; i < len; i++){
        xcurrent = data[i].cx || 0;
        ycurrent = data[i].cy || 0;
        xsum += xcurrent;
        ysum += ycurrent;
        xysum += xcurrent * ycurrent;
        xxsum += xcurrent * xcurrent;
        xmin = Math.min(xmin, xcurrent);
        xmax = Math.max(xmax, xcurrent);
    }
    var a = len * xxsum !== xsum * xsum ? (len * xysum - xsum * ysum) / (len * xxsum - xsum * xsum) : 0;
    return {
        xmin: xmin,
        xmax: xmax,
        a: a,
        b: (ysum - a * xsum) / len
    };
};
var compareValues = function compareValues(a, b) {
    if (isNumber(a) && isNumber(b)) {
        return a - b;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(b)) {
        return a.localeCompare(b);
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() - b.getTime();
    }
    return String(a).localeCompare(String(b));
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ShallowEqual.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shallowEqual": (()=>shallowEqual)
});
function shallowEqual(a, b) {
    /* eslint-disable no-restricted-syntax */ for(var key in a){
        if (({}).hasOwnProperty.call(a, key) && (!({}).hasOwnProperty.call(b, key) || a[key] !== b[key])) {
            return false;
        }
    }
    for(var _key in b){
        if (({}).hasOwnProperty.call(b, _key) && !({}).hasOwnProperty.call(a, _key)) {
            return false;
        }
    }
    return true;
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReactUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LEGEND_TYPES": (()=>LEGEND_TYPES),
    "SCALE_TYPES": (()=>SCALE_TYPES),
    "TOOLTIP_TYPES": (()=>TOOLTIP_TYPES),
    "filterProps": (()=>filterProps),
    "filterSvgElements": (()=>filterSvgElements),
    "findAllByType": (()=>findAllByType),
    "findChildByType": (()=>findChildByType),
    "getDisplayName": (()=>getDisplayName),
    "getReactEventByType": (()=>getReactEventByType),
    "hasClipDot": (()=>hasClipDot),
    "isChildrenEqual": (()=>isChildrenEqual),
    "isSingleChildEqual": (()=>isSingleChildEqual),
    "isValidSpreadableProp": (()=>isValidSpreadableProp),
    "parseChildIndex": (()=>parseChildIndex),
    "renderByOrder": (()=>renderByOrder),
    "toArray": (()=>toArray),
    "validateWidthHeight": (()=>validateWidthHeight),
    "withoutType": (()=>withoutType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-is@18.3.1/node_modules/react-is/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ShallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ShallowEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/types.js [app-client] (ecmascript)");
var _excluded = [
    "children"
], _excluded2 = [
    "children"
];
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
;
;
;
;
;
;
;
;
;
var REACT_BROWSER_EVENT_MAP = {
    click: 'onClick',
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    mouseover: 'onMouseOver',
    mousemove: 'onMouseMove',
    mouseout: 'onMouseOut',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    touchcancel: 'onTouchCancel',
    touchend: 'onTouchEnd',
    touchmove: 'onTouchMove',
    touchstart: 'onTouchStart',
    contextmenu: 'onContextMenu',
    dblclick: 'onDoubleClick'
};
var SCALE_TYPES = [
    'auto',
    'linear',
    'pow',
    'sqrt',
    'log',
    'identity',
    'time',
    'band',
    'point',
    'ordinal',
    'quantile',
    'quantize',
    'utc',
    'sequential',
    'threshold'
];
var LEGEND_TYPES = [
    'plainline',
    'line',
    'square',
    'rect',
    'circle',
    'cross',
    'diamond',
    'star',
    'triangle',
    'wye',
    'none'
];
var TOOLTIP_TYPES = [
    'none'
];
var getDisplayName = function getDisplayName(Comp) {
    if (typeof Comp === 'string') {
        return Comp;
    }
    if (!Comp) {
        return '';
    }
    return Comp.displayName || Comp.name || 'Component';
};
// `toArray` gets called multiple times during the render
// so we can memoize last invocation (since reference to `children` is the same)
var lastChildren = null;
var lastResult = null;
var toArray = function toArray(children) {
    if (children === lastChildren && Array.isArray(lastResult)) {
        return lastResult;
    }
    var result = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, function(child) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child)) return;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFragment"])(child)) {
            result = result.concat(toArray(child.props.children));
        } else {
            // @ts-expect-error this could still be Iterable<ReactNode> and TS does not like that
            result.push(child);
        }
    });
    lastResult = result;
    lastChildren = children;
    return result;
};
function findAllByType(children, type) {
    var result = [];
    var types = [];
    if (Array.isArray(type)) {
        types = type.map(function(t) {
            return getDisplayName(t);
        });
    } else {
        types = [
            getDisplayName(type)
        ];
    }
    toArray(children).forEach(function(child) {
        var childType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child, 'type.displayName') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child, 'type.name');
        if (types.indexOf(childType) !== -1) {
            result.push(child);
        }
    });
    return result;
}
function findChildByType(children, type) {
    var result = findAllByType(children, type);
    return result && result[0];
}
var withoutType = function withoutType(children, type) {
    var newChildren = [];
    var types;
    if (Array.isArray(type)) {
        types = type.map(function(t) {
            return getDisplayName(t);
        });
    } else {
        types = [
            getDisplayName(type)
        ];
    }
    toArray(children).forEach(function(child) {
        var displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child, 'type.displayName');
        if (displayName && types.indexOf(displayName) !== -1) {
            return;
        }
        newChildren.push(child);
    });
    return newChildren;
};
var validateWidthHeight = function validateWidthHeight(el) {
    if (!el || !el.props) {
        return false;
    }
    var _el$props = el.props, width = _el$props.width, height = _el$props.height;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(width) || width <= 0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(height) || height <= 0) {
        return false;
    }
    return true;
};
var SVG_TAGS = [
    'a',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColormatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-url',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'lineGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'stop',
    'style',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern'
];
var isSvgElement = function isSvgElement(child) {
    return child && child.type && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};
var hasClipDot = function hasClipDot(dot) {
    return dot && _typeof(dot) === 'object' && 'clipDot' in dot;
};
var isValidSpreadableProp = function isValidSpreadableProp(property, key, includeEvents, svgElementType) {
    var _FilteredElementKeyMa;
    /**
   * If the svg element type is explicitly included, check against the filtered element key map
   * to determine if there are attributes that should only exist on that element type.
   * @todo Add an internal cjs version of https://github.com/wooorm/svg-element-attributes for full coverage.
   */ var matchingElementTypeKeys = (_FilteredElementKeyMa = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilteredElementKeyMap"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilteredElementKeyMap"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilteredElementKeyMap"][svgElementType]) !== null && _FilteredElementKeyMa !== void 0 ? _FilteredElementKeyMa : [];
    return key.startsWith('data-') || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(property) && (svgElementType && matchingElementTypeKeys.includes(key) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGElementPropKeys"].includes(key)) || includeEvents && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventKeys"].includes(key);
};
var filterSvgElements = function filterSvgElements(children) {
    var svgElements = [];
    toArray(children).forEach(function(entry) {
        if (isSvgElement(entry)) {
            svgElements.push(entry);
        }
    });
    return svgElements;
};
var filterProps = function filterProps(props, includeEvents, svgElementType) {
    if (!props || typeof props === 'function' || typeof props === 'boolean') {
        return null;
    }
    var inputProps = props;
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(props)) {
        inputProps = props.props;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputProps)) {
        return null;
    }
    var out = {};
    /**
   * Props are blindly spread onto SVG elements. This loop filters out properties that we don't want to spread.
   * Items filtered out are as follows:
   *   - functions in properties that are SVG attributes (functions are included when includeEvents is true)
   *   - props that are SVG attributes but don't matched the passed svgElementType
   *   - any prop that is not in SVGElementPropKeys (or in EventKeys if includeEvents is true)
   */ Object.keys(inputProps).forEach(function(key) {
        var _inputProps;
        if (isValidSpreadableProp((_inputProps = inputProps) === null || _inputProps === void 0 ? void 0 : _inputProps[key], key, includeEvents, svgElementType)) {
            out[key] = inputProps[key];
        }
    });
    return out;
};
var isChildrenEqual = function isChildrenEqual(nextChildren, prevChildren) {
    if (nextChildren === prevChildren) {
        return true;
    }
    var count = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(nextChildren);
    if (count !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(prevChildren)) {
        return false;
    }
    if (count === 0) {
        return true;
    }
    if (count === 1) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return isSingleChildEqual(Array.isArray(nextChildren) ? nextChildren[0] : nextChildren, Array.isArray(prevChildren) ? prevChildren[0] : prevChildren);
    }
    for(var i = 0; i < count; i++){
        var nextChild = nextChildren[i];
        var prevChild = prevChildren[i];
        if (Array.isArray(nextChild) || Array.isArray(prevChild)) {
            if (!isChildrenEqual(nextChild, prevChild)) {
                return false;
            }
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        } else if (!isSingleChildEqual(nextChild, prevChild)) {
            return false;
        }
    }
    return true;
};
var isSingleChildEqual = function isSingleChildEqual(nextChild, prevChild) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nextChild) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevChild)) {
        return true;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nextChild) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevChild)) {
        var _ref = nextChild.props || {}, nextChildren = _ref.children, nextProps = _objectWithoutProperties(_ref, _excluded);
        var _ref2 = prevChild.props || {}, prevChildren = _ref2.children, prevProps = _objectWithoutProperties(_ref2, _excluded2);
        if (nextChildren && prevChildren) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ShallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
        }
        if (!nextChildren && !prevChildren) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ShallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(nextProps, prevProps);
        }
        return false;
    }
    return false;
};
var renderByOrder = function renderByOrder(children, renderMap) {
    var elements = [];
    var record = {};
    toArray(children).forEach(function(child, index) {
        if (isSvgElement(child)) {
            elements.push(child);
        } else if (child) {
            var displayName = getDisplayName(child.type);
            var _ref3 = renderMap[displayName] || {}, handler = _ref3.handler, once = _ref3.once;
            if (handler && (!once || !record[displayName])) {
                var results = handler(child, displayName, index);
                elements.push(results);
                record[displayName] = true;
            }
        }
    });
    return elements;
};
var getReactEventByType = function getReactEventByType(e) {
    var type = e && e.type;
    if (type && REACT_BROWSER_EVENT_MAP[type]) {
        return REACT_BROWSER_EVENT_MAP[type];
    }
    return null;
};
var parseChildIndex = function parseChildIndex(child, children) {
    return toArray(children).indexOf(child);
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/Global.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Global": (()=>Global)
});
var parseIsSsrByDefault = function parseIsSsrByDefault() {
    return !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout);
};
var Global = {
    isSsr: parseIsSsrByDefault(),
    get: function get(key) {
        return Global[key];
    },
    set: function set(key, value) {
        if (typeof key === 'string') {
            Global[key] = value;
        } else {
            var keys = Object.keys(key);
            if (keys && keys.length) {
                keys.forEach(function(k) {
                    Global[k] = key[k];
                });
            }
        }
    }
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DOMUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOffset": (()=>getOffset),
    "getStringSize": (()=>getStringSize),
    "getStyleString": (()=>getStyleString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/Global.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
;
var stringCache = {
    widthCache: {},
    cacheCount: 0
};
var MAX_CACHE_NUM = 2000;
var SPAN_STYLE = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre'
};
var STYLE_LIST = [
    'minWidth',
    'maxWidth',
    'width',
    'minHeight',
    'maxHeight',
    'height',
    'top',
    'left',
    'fontSize',
    'lineHeight',
    'padding',
    'margin',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom'
];
var MEASUREMENT_SPAN_ID = 'recharts_measurement_span';
function autoCompleteStyle(name, value) {
    if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
        return "".concat(value, "px");
    }
    return value;
}
function camelToMiddleLine(text) {
    var strs = text.split('');
    var formatStrs = strs.reduce(function(result, entry) {
        if (entry === entry.toUpperCase()) {
            return [].concat(_toConsumableArray(result), [
                '-',
                entry.toLowerCase()
            ]);
        }
        return [].concat(_toConsumableArray(result), [
            entry
        ]);
    }, []);
    return formatStrs.join('');
}
var getStyleString = function getStyleString(style) {
    return Object.keys(style).reduce(function(result, s) {
        return "".concat(result).concat(camelToMiddleLine(s), ":").concat(autoCompleteStyle(s, style[s]), ";");
    }, '');
};
function removeInvalidKeys(obj) {
    var copyObj = _objectSpread({}, obj);
    Object.keys(copyObj).forEach(function(key) {
        if (!copyObj[key]) {
            delete copyObj[key];
        }
    });
    return copyObj;
}
var getStringSize = function getStringSize(text) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (text === undefined || text === null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Global"].isSsr) {
        return {
            width: 0,
            height: 0
        };
    }
    var copyStyle = removeInvalidKeys(style);
    var cacheKey = JSON.stringify({
        text: text,
        copyStyle: copyStyle
    });
    if (stringCache.widthCache[cacheKey]) {
        return stringCache.widthCache[cacheKey];
    }
    try {
        var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
        if (!measurementSpan) {
            measurementSpan = document.createElement('span');
            measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
            measurementSpan.setAttribute('aria-hidden', 'true');
            document.body.appendChild(measurementSpan);
        }
        // Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
        // https://en.wikipedia.org/wiki/Content_Security_Policy
        var measurementSpanStyle = _objectSpread(_objectSpread({}, SPAN_STYLE), copyStyle);
        Object.assign(measurementSpan.style, measurementSpanStyle);
        measurementSpan.textContent = "".concat(text);
        var rect = measurementSpan.getBoundingClientRect();
        var result = {
            width: rect.width,
            height: rect.height
        };
        stringCache.widthCache[cacheKey] = result;
        if (++stringCache.cacheCount > MAX_CACHE_NUM) {
            stringCache.cacheCount = 0;
            stringCache.widthCache = {};
        }
        return result;
    } catch (e) {
        return {
            width: 0,
            height: 0
        };
    }
};
var getOffset = function getOffset(rect) {
    return {
        top: rect.top + window.scrollY - document.documentElement.clientTop,
        left: rect.left + window.scrollX - document.documentElement.clientLeft
    };
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReduceCSSCalc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "reduceCSSCalc": (()=>reduceCSSCalc),
    "safeEvaluateExpression": (()=>safeEvaluateExpression)
});
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var CSS_LENGTH_UNIT_REGEX = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/;
var NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
var CONVERSION_RATES = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    "in": 96,
    Q: 96 / (2.54 * 40),
    px: 1
};
var FIXED_CSS_LENGTH_UNITS = Object.keys(CONVERSION_RATES);
var STR_NAN = 'NaN';
function convertToPx(value, unit) {
    return value * CONVERSION_RATES[unit];
}
var DecimalCSS = /*#__PURE__*/ function() {
    function DecimalCSS(num, unit) {
        _classCallCheck(this, DecimalCSS);
        this.num = num;
        this.unit = unit;
        this.num = num;
        this.unit = unit;
        if (Number.isNaN(num)) {
            this.unit = '';
        }
        if (unit !== '' && !CSS_LENGTH_UNIT_REGEX.test(unit)) {
            this.num = NaN;
            this.unit = '';
        }
        if (FIXED_CSS_LENGTH_UNITS.includes(unit)) {
            this.num = convertToPx(num, unit);
            this.unit = 'px';
        }
    }
    return _createClass(DecimalCSS, [
        {
            key: "add",
            value: function add(other) {
                if (this.unit !== other.unit) {
                    return new DecimalCSS(NaN, '');
                }
                return new DecimalCSS(this.num + other.num, this.unit);
            }
        },
        {
            key: "subtract",
            value: function subtract(other) {
                if (this.unit !== other.unit) {
                    return new DecimalCSS(NaN, '');
                }
                return new DecimalCSS(this.num - other.num, this.unit);
            }
        },
        {
            key: "multiply",
            value: function multiply(other) {
                if (this.unit !== '' && other.unit !== '' && this.unit !== other.unit) {
                    return new DecimalCSS(NaN, '');
                }
                return new DecimalCSS(this.num * other.num, this.unit || other.unit);
            }
        },
        {
            key: "divide",
            value: function divide(other) {
                if (this.unit !== '' && other.unit !== '' && this.unit !== other.unit) {
                    return new DecimalCSS(NaN, '');
                }
                return new DecimalCSS(this.num / other.num, this.unit || other.unit);
            }
        },
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.num).concat(this.unit);
            }
        },
        {
            key: "isNaN",
            value: function isNaN() {
                return Number.isNaN(this.num);
            }
        }
    ], [
        {
            key: "parse",
            value: function parse(str) {
                var _NUM_SPLIT_REGEX$exec;
                var _ref = (_NUM_SPLIT_REGEX$exec = NUM_SPLIT_REGEX.exec(str)) !== null && _NUM_SPLIT_REGEX$exec !== void 0 ? _NUM_SPLIT_REGEX$exec : [], _ref2 = _slicedToArray(_ref, 3), numStr = _ref2[1], unit = _ref2[2];
                return new DecimalCSS(parseFloat(numStr), unit !== null && unit !== void 0 ? unit : '');
            }
        }
    ]);
}();
function calculateArithmetic(expr) {
    if (expr.includes(STR_NAN)) {
        return STR_NAN;
    }
    var newExpr = expr;
    while(newExpr.includes('*') || newExpr.includes('/')){
        var _MULTIPLY_OR_DIVIDE_R;
        var _ref3 = (_MULTIPLY_OR_DIVIDE_R = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr)) !== null && _MULTIPLY_OR_DIVIDE_R !== void 0 ? _MULTIPLY_OR_DIVIDE_R : [], _ref4 = _slicedToArray(_ref3, 4), leftOperand = _ref4[1], operator = _ref4[2], rightOperand = _ref4[3];
        var lTs = DecimalCSS.parse(leftOperand !== null && leftOperand !== void 0 ? leftOperand : '');
        var rTs = DecimalCSS.parse(rightOperand !== null && rightOperand !== void 0 ? rightOperand : '');
        var result = operator === '*' ? lTs.multiply(rTs) : lTs.divide(rTs);
        if (result.isNaN()) {
            return STR_NAN;
        }
        newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
    }
    while(newExpr.includes('+') || /.-\d+(?:\.\d+)?/.test(newExpr)){
        var _ADD_OR_SUBTRACT_REGE;
        var _ref5 = (_ADD_OR_SUBTRACT_REGE = ADD_OR_SUBTRACT_REGEX.exec(newExpr)) !== null && _ADD_OR_SUBTRACT_REGE !== void 0 ? _ADD_OR_SUBTRACT_REGE : [], _ref6 = _slicedToArray(_ref5, 4), _leftOperand = _ref6[1], _operator = _ref6[2], _rightOperand = _ref6[3];
        var _lTs = DecimalCSS.parse(_leftOperand !== null && _leftOperand !== void 0 ? _leftOperand : '');
        var _rTs = DecimalCSS.parse(_rightOperand !== null && _rightOperand !== void 0 ? _rightOperand : '');
        var _result = _operator === '+' ? _lTs.add(_rTs) : _lTs.subtract(_rTs);
        if (_result.isNaN()) {
            return STR_NAN;
        }
        newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, _result.toString());
    }
    return newExpr;
}
var PARENTHESES_REGEX = /\(([^()]*)\)/;
function calculateParentheses(expr) {
    var newExpr = expr;
    while(newExpr.includes('(')){
        var _PARENTHESES_REGEX$ex = PARENTHESES_REGEX.exec(newExpr), _PARENTHESES_REGEX$ex2 = _slicedToArray(_PARENTHESES_REGEX$ex, 2), parentheticalExpression = _PARENTHESES_REGEX$ex2[1];
        newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
    }
    return newExpr;
}
function evaluateExpression(expression) {
    var newExpr = expression.replace(/\s+/g, '');
    newExpr = calculateParentheses(newExpr);
    newExpr = calculateArithmetic(newExpr);
    return newExpr;
}
function safeEvaluateExpression(expression) {
    try {
        return evaluateExpression(expression);
    } catch (e) {
        /* istanbul ignore next */ return STR_NAN;
    }
}
function reduceCSSCalc(expression) {
    var result = safeEvaluateExpression(expression.slice(5, -1));
    if (result === STR_NAN) {
        // notify the user
        return '';
    }
    return result;
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/LogUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint no-console: 0 */ __turbopack_context__.s({
    "warn": (()=>warn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var isDev = ("TURBOPACK compile-time value", "development") !== 'production';
var warn = function warn(condition, format) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        args[_key - 2] = arguments[_key];
    }
    if (isDev && typeof console !== 'undefined' && console.warn) {
        if (format === undefined) {
            console.warn('LogUtils requires an error message argument');
        }
        if (!condition) {
            if (format === undefined) {
                console.warn('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
            } else {
                var argIndex = 0;
                console.warn(format.replace(/%s/g, function() {
                    return args[argIndex++];
                }));
            }
        }
    }
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/payload/getUniqPayload.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUniqPayload": (()=>getUniqPayload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqBy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-client] (ecmascript)");
;
;
function getUniqPayload(payload, option, defaultUniqBy) {
    if (option === true) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(payload, defaultUniqBy);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(option)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(payload, option);
    }
    return payload;
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/getLegendProps.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLegendProps": (()=>getLegendProps)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ChartUtils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReactUtils.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
var getLegendProps = function getLegendProps(_ref) {
    var children = _ref.children, formattedGraphicalItems = _ref.formattedGraphicalItems, legendWidth = _ref.legendWidth, legendContent = _ref.legendContent;
    var legendItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"]);
    if (!legendItem) {
        return null;
    }
    var legendDefaultProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"].defaultProps;
    var legendProps = legendDefaultProps !== undefined ? _objectSpread(_objectSpread({}, legendDefaultProps), legendItem.props) : {};
    var legendData;
    if (legendItem.props && legendItem.props.payload) {
        legendData = legendItem.props && legendItem.props.payload;
    } else if (legendContent === 'children') {
        legendData = (formattedGraphicalItems || []).reduce(function(result, _ref2) {
            var item = _ref2.item, props = _ref2.props;
            var data = props.sectors || props.data || [];
            return result.concat(data.map(function(entry) {
                return {
                    type: legendItem.props.iconType || item.props.legendType,
                    value: entry.name,
                    color: entry.fill,
                    payload: entry
                };
            }));
        }, []);
    } else {
        legendData = (formattedGraphicalItems || []).map(function(_ref3) {
            var item = _ref3.item;
            var itemDefaultProps = item.type.defaultProps;
            var itemProps = itemDefaultProps !== undefined ? _objectSpread(_objectSpread({}, itemDefaultProps), item.props) : {};
            var dataKey = itemProps.dataKey, name = itemProps.name, legendType = itemProps.legendType, hide = itemProps.hide;
            return {
                inactive: hide,
                dataKey: dataKey,
                type: legendProps.iconType || legendType || 'square',
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getMainColorOfGraphicItem"])(item),
                value: name || dataKey,
                // @ts-expect-error property strokeDasharray is required in Payload but optional in props
                payload: itemProps
            };
        });
    }
    return _objectSpread(_objectSpread(_objectSpread({}, legendProps), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"].getWithHeight(legendItem, legendWidth)), {}, {
        payload: legendData,
        item: legendItem
    });
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ChartUtils.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MAX_VALUE_REG": (()=>MAX_VALUE_REG),
    "MIN_VALUE_REG": (()=>MIN_VALUE_REG),
    "appendOffsetOfLegend": (()=>appendOffsetOfLegend),
    "calculateActiveTickIndex": (()=>calculateActiveTickIndex),
    "checkDomainOfScale": (()=>checkDomainOfScale),
    "combineEventHandlers": (()=>combineEventHandlers),
    "findPositionOfBar": (()=>findPositionOfBar),
    "getBandSizeOfAxis": (()=>getBandSizeOfAxis),
    "getBarPosition": (()=>getBarPosition),
    "getBarSizeList": (()=>getBarSizeList),
    "getBaseValueOfBar": (()=>getBaseValueOfBar),
    "getCateCoordinateOfBar": (()=>getCateCoordinateOfBar),
    "getCateCoordinateOfLine": (()=>getCateCoordinateOfLine),
    "getCoordinatesOfGrid": (()=>getCoordinatesOfGrid),
    "getDomainOfDataByKey": (()=>getDomainOfDataByKey),
    "getDomainOfErrorBars": (()=>getDomainOfErrorBars),
    "getDomainOfItemsWithSameAxis": (()=>getDomainOfItemsWithSameAxis),
    "getDomainOfStackGroups": (()=>getDomainOfStackGroups),
    "getMainColorOfGraphicItem": (()=>getMainColorOfGraphicItem),
    "getStackGroupsByAxisId": (()=>getStackGroupsByAxisId),
    "getStackedData": (()=>getStackedData),
    "getStackedDataOfItem": (()=>getStackedDataOfItem),
    "getTicksOfAxis": (()=>getTicksOfAxis),
    "getTicksOfScale": (()=>getTicksOfScale),
    "getTooltipItem": (()=>getTooltipItem),
    "getValueByDataKey": (()=>getValueByDataKey),
    "isCategoricalAxis": (()=>isCategoricalAxis),
    "offsetPositive": (()=>offsetPositive),
    "offsetSign": (()=>offsetSign),
    "parseDomainOfCategoryAxis": (()=>parseDomainOfCategoryAxis),
    "parseErrorBarsOfAxis": (()=>parseErrorBarsOfAxis),
    "parseScale": (()=>parseScale),
    "parseSpecifiedDomain": (()=>parseSpecifiedDomain),
    "truncateByDomain": (()=>truncateByDomain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/victory-vendor@36.9.2/node_modules/victory-vendor/es/d3-scale.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/victory-vendor@36.9.2/node_modules/victory-vendor/es/d3-scale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$shape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/victory-vendor@36.9.2/node_modules/victory-vendor/es/d3-shape.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stack$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/stack.js [app-client] (ecmascript) <export default as stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOffsetExpand$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/offset/expand.js [app-client] (ecmascript) <export default as stackOffsetExpand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOffsetNone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/offset/none.js [app-client] (ecmascript) <export default as stackOffsetNone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$silhouette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOffsetSilhouette$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/offset/silhouette.js [app-client] (ecmascript) <export default as stackOffsetSilhouette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$wiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOffsetWiggle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/offset/wiggle.js [app-client] (ecmascript) <export default as stackOffsetWiggle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOrderNone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/order/none.js [app-client] (ecmascript) <export default as stackOrderNone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/max.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/flatMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNaN.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$upperFirst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/upperFirst.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$sortBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/sortBy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$2d$scale$40$0$2e$4$2e$5$2f$node_modules$2f$recharts$2d$scale$2f$es6$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts-scale@0.4.5/node_modules/recharts-scale/es6/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$2d$scale$40$0$2e$4$2e$5$2f$node_modules$2f$recharts$2d$scale$2f$es6$2f$getNiceTickValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts-scale@0.4.5/node_modules/recharts-scale/es6/getNiceTickValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ErrorBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/cartesian/ErrorBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReactUtils.js [app-client] (ecmascript)");
// TODO: Cause of circular dependency. Needs refactor.
// import { RadiusAxisProps, AngleAxisProps } from '../polar/types';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$getLegendProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/getLegendProps.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getValueByDataKey(obj, dataKey, defaultValue) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(obj) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dataKey)) {
        return defaultValue;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(dataKey)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(obj, dataKey, defaultValue);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dataKey)) {
        return dataKey(obj);
    }
    return defaultValue;
}
function getDomainOfDataByKey(data, key, type, filterNil) {
    var flattenData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$flatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, function(entry) {
        return getValueByDataKey(entry, key);
    });
    if (type === 'number') {
        // @ts-expect-error parseFloat type only accepts strings
        var domain = flattenData.filter(function(entry) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(entry) || parseFloat(entry);
        });
        return domain.length ? [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(domain),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(domain)
        ] : [
            Infinity,
            -Infinity
        ];
    }
    var validateData = filterNil ? flattenData.filter(function(entry) {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry);
    }) : flattenData;
    // Supports x-axis of Date type
    return validateData.map(function(entry) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(entry) || entry instanceof Date ? entry : '';
    });
}
var calculateActiveTickIndex = function calculateActiveTickIndex(coordinate) {
    var _ticks$length;
    var ticks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var unsortedTicks = arguments.length > 2 ? arguments[2] : undefined;
    var axis = arguments.length > 3 ? arguments[3] : undefined;
    var index = -1;
    var len = (_ticks$length = ticks === null || ticks === void 0 ? void 0 : ticks.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;
    // if there are 1 or less ticks ticks then the active tick is at index 0
    if (len <= 1) {
        return 0;
    }
    if (axis && axis.axisType === 'angleAxis' && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
        var range = axis.range;
        // ticks are distributed in a circle
        for(var i = 0; i < len; i++){
            var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
            var cur = unsortedTicks[i].coordinate;
            var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
            var sameDirectionCoord = void 0;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mathSign"])(cur - before) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mathSign"])(after - cur)) {
                var diffInterval = [];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mathSign"])(after - cur) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mathSign"])(range[1] - range[0])) {
                    sameDirectionCoord = after;
                    var curInRange = cur + range[1] - range[0];
                    diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
                    diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
                } else {
                    sameDirectionCoord = before;
                    var afterInRange = after + range[1] - range[0];
                    diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
                    diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
                }
                var sameInterval = [
                    Math.min(cur, (sameDirectionCoord + cur) / 2),
                    Math.max(cur, (sameDirectionCoord + cur) / 2)
                ];
                if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
                    index = unsortedTicks[i].index;
                    break;
                }
            } else {
                var minValue = Math.min(before, after);
                var maxValue = Math.max(before, after);
                if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
                    index = unsortedTicks[i].index;
                    break;
                }
            }
        }
    } else {
        // ticks are distributed in a single direction
        for(var _i = 0; _i < len; _i++){
            if (_i === 0 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2) {
                index = ticks[_i].index;
                break;
            }
        }
    }
    return index;
};
var getMainColorOfGraphicItem = function getMainColorOfGraphicItem(item) {
    var _item$type;
    var _ref = item, displayName = _ref.type.displayName; // TODO: check if displayName is valid.
    var defaultedProps = (_item$type = item.type) !== null && _item$type !== void 0 && _item$type.defaultProps ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
    var stroke = defaultedProps.stroke, fill = defaultedProps.fill;
    var result;
    switch(displayName){
        case 'Line':
            result = stroke;
            break;
        case 'Area':
        case 'Radar':
            result = stroke && stroke !== 'none' ? stroke : fill;
            break;
        default:
            result = fill;
            break;
    }
    return result;
};
var getBarSizeList = function getBarSizeList(_ref2) {
    var globalSize = _ref2.barSize, totalSize = _ref2.totalSize, _ref2$stackGroups = _ref2.stackGroups, stackGroups = _ref2$stackGroups === void 0 ? {} : _ref2$stackGroups;
    if (!stackGroups) {
        return {};
    }
    var result = {};
    var numericAxisIds = Object.keys(stackGroups);
    for(var i = 0, len = numericAxisIds.length; i < len; i++){
        var sgs = stackGroups[numericAxisIds[i]].stackGroups;
        var stackIds = Object.keys(sgs);
        for(var j = 0, sLen = stackIds.length; j < sLen; j++){
            var _sgs$stackIds$j = sgs[stackIds[j]], items = _sgs$stackIds$j.items, cateAxisId = _sgs$stackIds$j.cateAxisId;
            var barItems = items.filter(function(item) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisplayName"])(item.type).indexOf('Bar') >= 0;
            });
            if (barItems && barItems.length) {
                var barItemDefaultProps = barItems[0].type.defaultProps;
                var barItemProps = barItemDefaultProps !== undefined ? _objectSpread(_objectSpread({}, barItemDefaultProps), barItems[0].props) : barItems[0].props;
                var selfSize = barItemProps.barSize;
                var cateId = barItemProps[cateAxisId];
                if (!result[cateId]) {
                    result[cateId] = [];
                }
                var barSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(selfSize) ? globalSize : selfSize;
                result[cateId].push({
                    item: barItems[0],
                    stackList: barItems.slice(1),
                    barSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(barSize) ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(barSize, totalSize, 0)
                });
            }
        }
    }
    return result;
};
var getBarPosition = function getBarPosition(_ref3) {
    var barGap = _ref3.barGap, barCategoryGap = _ref3.barCategoryGap, bandSize = _ref3.bandSize, _ref3$sizeList = _ref3.sizeList, sizeList = _ref3$sizeList === void 0 ? [] : _ref3$sizeList, maxBarSize = _ref3.maxBarSize;
    var len = sizeList.length;
    if (len < 1) return null;
    var realBarGap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(barGap, bandSize, 0, true);
    var result;
    var initialValue = [];
    // whether or not is barSize setted by user
    if (sizeList[0].barSize === +sizeList[0].barSize) {
        var useFull = false;
        var fullBarSize = bandSize / len;
        // @ts-expect-error the type check above does not check for type number explicitly
        var sum = sizeList.reduce(function(res, entry) {
            return res + entry.barSize || 0;
        }, 0);
        sum += (len - 1) * realBarGap;
        if (sum >= bandSize) {
            sum -= (len - 1) * realBarGap;
            realBarGap = 0;
        }
        if (sum >= bandSize && fullBarSize > 0) {
            useFull = true;
            fullBarSize *= 0.9;
            sum = len * fullBarSize;
        }
        var offset = (bandSize - sum) / 2 >> 0;
        var prev = {
            offset: offset - realBarGap,
            size: 0
        };
        result = sizeList.reduce(function(res, entry) {
            var newPosition = {
                item: entry.item,
                position: {
                    offset: prev.offset + prev.size + realBarGap,
                    // @ts-expect-error the type check above does not check for type number explicitly
                    size: useFull ? fullBarSize : entry.barSize
                }
            };
            var newRes = [].concat(_toConsumableArray(res), [
                newPosition
            ]);
            prev = newRes[newRes.length - 1].position;
            if (entry.stackList && entry.stackList.length) {
                entry.stackList.forEach(function(item) {
                    newRes.push({
                        item: item,
                        position: prev
                    });
                });
            }
            return newRes;
        }, initialValue);
    } else {
        var _offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(barCategoryGap, bandSize, 0, true);
        if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
            realBarGap = 0;
        }
        var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
        if (originalSize > 1) {
            originalSize >>= 0;
        }
        var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;
        result = sizeList.reduce(function(res, entry, i) {
            var newRes = [].concat(_toConsumableArray(res), [
                {
                    item: entry.item,
                    position: {
                        offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
                        size: size
                    }
                }
            ]);
            if (entry.stackList && entry.stackList.length) {
                entry.stackList.forEach(function(item) {
                    newRes.push({
                        item: item,
                        position: newRes[newRes.length - 1].position
                    });
                });
            }
            return newRes;
        }, initialValue);
    }
    return result;
};
var appendOffsetOfLegend = function appendOffsetOfLegend(offset, _unused, props, legendBox) {
    var children = props.children, width = props.width, margin = props.margin;
    var legendWidth = width - (margin.left || 0) - (margin.right || 0);
    var legendProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$getLegendProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLegendProps"])({
        children: children,
        legendWidth: legendWidth
    });
    if (legendProps) {
        var _ref4 = legendBox || {}, boxWidth = _ref4.width, boxHeight = _ref4.height;
        var align = legendProps.align, verticalAlign = legendProps.verticalAlign, layout = legendProps.layout;
        if ((layout === 'vertical' || layout === 'horizontal' && verticalAlign === 'middle') && align !== 'center' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(offset[align])) {
            return _objectSpread(_objectSpread({}, offset), {}, _defineProperty({}, align, offset[align] + (boxWidth || 0)));
        }
        if ((layout === 'horizontal' || layout === 'vertical' && align === 'center') && verticalAlign !== 'middle' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(offset[verticalAlign])) {
            return _objectSpread(_objectSpread({}, offset), {}, _defineProperty({}, verticalAlign, offset[verticalAlign] + (boxHeight || 0)));
        }
    }
    return offset;
};
var isErrorBarRelevantForAxis = function isErrorBarRelevantForAxis(layout, axisType, direction) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(axisType)) {
        return true;
    }
    if (layout === 'horizontal') {
        return axisType === 'yAxis';
    }
    if (layout === 'vertical') {
        return axisType === 'xAxis';
    }
    if (direction === 'x') {
        return axisType === 'xAxis';
    }
    if (direction === 'y') {
        return axisType === 'yAxis';
    }
    return true;
};
var getDomainOfErrorBars = function getDomainOfErrorBars(data, item, dataKey, layout, axisType) {
    var children = item.props.children;
    var errorBars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAllByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ErrorBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBar"]).filter(function(errorBarChild) {
        return isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction);
    });
    if (errorBars && errorBars.length) {
        var keys = errorBars.map(function(errorBarChild) {
            return errorBarChild.props.dataKey;
        });
        return data.reduce(function(result, entry) {
            var entryValue = getValueByDataKey(entry, dataKey);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entryValue)) return result;
            var mainValue = Array.isArray(entryValue) ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entryValue),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entryValue)
            ] : [
                entryValue,
                entryValue
            ];
            var errorDomain = keys.reduce(function(prevErrorArr, k) {
                var errorValue = getValueByDataKey(entry, k, 0);
                var lowerValue = mainValue[0] - Math.abs(Array.isArray(errorValue) ? errorValue[0] : errorValue);
                var upperValue = mainValue[1] + Math.abs(Array.isArray(errorValue) ? errorValue[1] : errorValue);
                return [
                    Math.min(lowerValue, prevErrorArr[0]),
                    Math.max(upperValue, prevErrorArr[1])
                ];
            }, [
                Infinity,
                -Infinity
            ]);
            return [
                Math.min(errorDomain[0], result[0]),
                Math.max(errorDomain[1], result[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
    }
    return null;
};
var parseErrorBarsOfAxis = function parseErrorBarsOfAxis(data, items, dataKey, axisType, layout) {
    var domains = items.map(function(item) {
        return getDomainOfErrorBars(data, item, dataKey, layout, axisType);
    }).filter(function(entry) {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry);
    });
    if (domains && domains.length) {
        return domains.reduce(function(result, entry) {
            return [
                Math.min(result[0], entry[0]),
                Math.max(result[1], entry[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
    }
    return null;
};
var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis(data, items, type, layout, filterNil) {
    var domains = items.map(function(item) {
        var dataKey = item.props.dataKey;
        if (type === 'number' && dataKey) {
            return getDomainOfErrorBars(data, item, dataKey, layout) || getDomainOfDataByKey(data, dataKey, type, filterNil);
        }
        return getDomainOfDataByKey(data, dataKey, type, filterNil);
    });
    if (type === 'number') {
        // Calculate the domain of number axis
        return domains.reduce(// @ts-expect-error if (type === number) means that the domain is numerical type
        // - but this link is missing in the type definition
        function(result, entry) {
            return [
                Math.min(result[0], entry[0]),
                Math.max(result[1], entry[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
    }
    var tag = {};
    // Get the union set of category axis
    return domains.reduce(function(result, entry) {
        for(var i = 0, len = entry.length; i < len; i++){
            // @ts-expect-error Date cannot index an object
            if (!tag[entry[i]]) {
                // @ts-expect-error Date cannot index an object
                tag[entry[i]] = true;
                // @ts-expect-error Date cannot index an object
                result.push(entry[i]);
            }
        }
        return result;
    }, []);
};
var isCategoricalAxis = function isCategoricalAxis(layout, axisType) {
    return layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis' || layout === 'centric' && axisType === 'angleAxis' || layout === 'radial' && axisType === 'radiusAxis';
};
var getCoordinatesOfGrid = function getCoordinatesOfGrid(ticks, minValue, maxValue, syncWithTicks) {
    if (syncWithTicks) {
        return ticks.map(function(entry) {
            return entry.coordinate;
        });
    }
    var hasMin, hasMax;
    var values = ticks.map(function(entry) {
        if (entry.coordinate === minValue) {
            hasMin = true;
        }
        if (entry.coordinate === maxValue) {
            hasMax = true;
        }
        return entry.coordinate;
    });
    if (!hasMin) {
        values.push(minValue);
    }
    if (!hasMax) {
        values.push(maxValue);
    }
    return values;
};
var getTicksOfAxis = function getTicksOfAxis(axis, isGrid, isAll) {
    if (!axis) return null;
    var scale = axis.scale;
    var duplicateDomain = axis.duplicateDomain, type = axis.type, range = axis.range;
    var offsetForBand = axis.realScaleType === 'scaleBand' ? scale.bandwidth() / 2 : 2;
    var offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
    offset = axis.axisType === 'angleAxis' && (range === null || range === void 0 ? void 0 : range.length) >= 2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mathSign"])(range[0] - range[1]) * 2 * offset : offset;
    // The ticks set by user should only affect the ticks adjacent to axis line
    if (isGrid && (axis.ticks || axis.niceTicks)) {
        var result = (axis.ticks || axis.niceTicks).map(function(entry) {
            var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
            return {
                // If the scaleContent is not a number, the coordinate will be NaN.
                // That could be the case for example with a PointScale and a string as domain.
                coordinate: scale(scaleContent) + offset,
                value: entry,
                offset: offset
            };
        });
        return result.filter(function(row) {
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(row.coordinate);
        });
    }
    // When axis is a categorial axis, but the type of axis is number or the scale of axis is not "auto"
    if (axis.isCategorical && axis.categoricalDomain) {
        return axis.categoricalDomain.map(function(entry, index) {
            return {
                coordinate: scale(entry) + offset,
                value: entry,
                index: index,
                offset: offset
            };
        });
    }
    if (scale.ticks && !isAll) {
        return scale.ticks(axis.tickCount).map(function(entry) {
            return {
                coordinate: scale(entry) + offset,
                value: entry,
                offset: offset
            };
        });
    }
    // When axis has duplicated text, serial numbers are used to generate scale
    return scale.domain().map(function(entry, index) {
        return {
            coordinate: scale(entry) + offset,
            value: duplicateDomain ? duplicateDomain[entry] : entry,
            index: index,
            offset: offset
        };
    });
};
/**
 * combine the handlers
 * @param  {Function} defaultHandler Internal private handler
 * @param  {Function} childHandler Handler function specified in child component
 * @return {Function}                The combined handler
 */ var handlerWeakMap = new WeakMap();
var combineEventHandlers = function combineEventHandlers(defaultHandler, childHandler) {
    if (typeof childHandler !== 'function') {
        return defaultHandler;
    }
    if (!handlerWeakMap.has(defaultHandler)) {
        handlerWeakMap.set(defaultHandler, new WeakMap());
    }
    var childWeakMap = handlerWeakMap.get(defaultHandler);
    if (childWeakMap.has(childHandler)) {
        return childWeakMap.get(childHandler);
    }
    var combineHandler = function combineHandler() {
        defaultHandler.apply(void 0, arguments);
        childHandler.apply(void 0, arguments);
    };
    childWeakMap.set(childHandler, combineHandler);
    return combineHandler;
};
var parseScale = function parseScale(axis, chartType, hasBar) {
    var scale = axis.scale, type = axis.type, layout = axis.layout, axisType = axis.axisType;
    if (scale === 'auto') {
        if (layout === 'radial' && axisType === 'radiusAxis') {
            return {
                scale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.scaleBand(),
                realScaleType: 'band'
            };
        }
        if (layout === 'radial' && axisType === 'angleAxis') {
            return {
                scale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.scaleLinear(),
                realScaleType: 'linear'
            };
        }
        if (type === 'category' && chartType && (chartType.indexOf('LineChart') >= 0 || chartType.indexOf('AreaChart') >= 0 || chartType.indexOf('ComposedChart') >= 0 && !hasBar)) {
            return {
                scale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.scalePoint(),
                realScaleType: 'point'
            };
        }
        if (type === 'category') {
            return {
                scale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.scaleBand(),
                realScaleType: 'band'
            };
        }
        return {
            scale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.scaleLinear(),
            realScaleType: 'linear'
        };
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(scale)) {
        var name = "scale".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$upperFirst$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(scale));
        return {
            scale: (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[name] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.scalePoint)(),
            realScaleType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[name] ? name : 'point'
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(scale) ? {
        scale: scale
    } : {
        scale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.scalePoint(),
        realScaleType: 'point'
    };
};
var EPS = 1e-4;
var checkDomainOfScale = function checkDomainOfScale(scale) {
    var domain = scale.domain();
    if (!domain || domain.length <= 2) {
        return;
    }
    var len = domain.length;
    var range = scale.range();
    var minValue = Math.min(range[0], range[1]) - EPS;
    var maxValue = Math.max(range[0], range[1]) + EPS;
    var first = scale(domain[0]);
    var last = scale(domain[len - 1]);
    if (first < minValue || first > maxValue || last < minValue || last > maxValue) {
        scale.domain([
            domain[0],
            domain[len - 1]
        ]);
    }
};
var findPositionOfBar = function findPositionOfBar(barPosition, child) {
    if (!barPosition) {
        return null;
    }
    for(var i = 0, len = barPosition.length; i < len; i++){
        if (barPosition[i].item === child) {
            return barPosition[i].position;
        }
    }
    return null;
};
var truncateByDomain = function truncateByDomain(value, domain) {
    if (!domain || domain.length !== 2 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(domain[0]) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(domain[1])) {
        return value;
    }
    var minValue = Math.min(domain[0], domain[1]);
    var maxValue = Math.max(domain[0], domain[1]);
    var result = [
        value[0],
        value[1]
    ];
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value[0]) || value[0] < minValue) {
        result[0] = minValue;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value[1]) || value[1] > maxValue) {
        result[1] = maxValue;
    }
    if (result[0] > maxValue) {
        result[0] = maxValue;
    }
    if (result[1] < minValue) {
        result[1] = minValue;
    }
    return result;
};
var offsetSign = function offsetSign(series) {
    var n = series.length;
    if (n <= 0) {
        return;
    }
    for(var j = 0, m = series[0].length; j < m; ++j){
        var positive = 0;
        var negative = 0;
        for(var i = 0; i < n; ++i){
            var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
            /* eslint-disable prefer-destructuring, no-param-reassign */ if (value >= 0) {
                series[i][j][0] = positive;
                series[i][j][1] = positive + value;
                positive = series[i][j][1];
            } else {
                series[i][j][0] = negative;
                series[i][j][1] = negative + value;
                negative = series[i][j][1];
            }
        /* eslint-enable prefer-destructuring, no-param-reassign */ }
    }
};
var offsetPositive = function offsetPositive(series) {
    var n = series.length;
    if (n <= 0) {
        return;
    }
    for(var j = 0, m = series[0].length; j < m; ++j){
        var positive = 0;
        for(var i = 0; i < n; ++i){
            var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
            /* eslint-disable prefer-destructuring, no-param-reassign */ if (value >= 0) {
                series[i][j][0] = positive;
                series[i][j][1] = positive + value;
                positive = series[i][j][1];
            } else {
                series[i][j][0] = 0;
                series[i][j][1] = 0;
            }
        /* eslint-enable prefer-destructuring, no-param-reassign */ }
    }
};
/**
 * Function type to compute offset for stacked data.
 *
 * d3-shape has something fishy going on with its types.
 * In @definitelytyped/d3-shape, this function (the offset accessor) is typed as Series<> => void.
 * However! When I actually open the storybook I can see that the offset accessor actually receives Array<Series<>>.
 * The same I can see in the source code itself:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 * That one unfortunately has no types but we can tell it passes three-dimensional array.
 *
 * Which leads me to believe that definitelytyped is wrong on this one.
 * There's open discussion on this topic without much attention:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 */ var STACK_OFFSET_MAP = {
    sign: offsetSign,
    // @ts-expect-error definitelytyped types are incorrect
    expand: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$expand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOffsetExpand$3e$__["stackOffsetExpand"],
    // @ts-expect-error definitelytyped types are incorrect
    none: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$none$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOffsetNone$3e$__["stackOffsetNone"],
    // @ts-expect-error definitelytyped types are incorrect
    silhouette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$silhouette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOffsetSilhouette$3e$__["stackOffsetSilhouette"],
    // @ts-expect-error definitelytyped types are incorrect
    wiggle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$offset$2f$wiggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOffsetWiggle$3e$__["stackOffsetWiggle"],
    positive: offsetPositive
};
var getStackedData = function getStackedData(data, stackItems, offsetType) {
    var dataKeys = stackItems.map(function(item) {
        return item.props.dataKey;
    });
    var offsetAccessor = STACK_OFFSET_MAP[offsetType];
    var stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stack$3e$__["stack"])()// @ts-expect-error stack.keys type wants an array of strings, but we provide array of DataKeys
    .keys(dataKeys).value(function(d, key) {
        return +getValueByDataKey(d, key, 0);
    }).order(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$shape$40$3$2e$2$2e$0$2f$node_modules$2f$d3$2d$shape$2f$src$2f$order$2f$none$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__stackOrderNone$3e$__["stackOrderNone"])// @ts-expect-error definitelytyped types are incorrect
    .offset(offsetAccessor);
    return stack(data);
};
var getStackGroupsByAxisId = function getStackGroupsByAxisId(data, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
    if (!data) {
        return null;
    }
    // reversing items to affect render order (for layering)
    var items = reverseStackOrder ? _items.reverse() : _items;
    var parentStackGroupsInitialValue = {};
    var stackGroups = items.reduce(function(result, item) {
        var _item$type2;
        var defaultedProps = (_item$type2 = item.type) !== null && _item$type2 !== void 0 && _item$type2.defaultProps ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
        var stackId = defaultedProps.stackId, hide = defaultedProps.hide;
        if (hide) {
            return result;
        }
        var axisId = defaultedProps[numericAxisId];
        var parentGroup = result[axisId] || {
            hasStack: false,
            stackGroups: {}
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(stackId)) {
            var childGroup = parentGroup.stackGroups[stackId] || {
                numericAxisId: numericAxisId,
                cateAxisId: cateAxisId,
                items: []
            };
            childGroup.items.push(item);
            parentGroup.hasStack = true;
            parentGroup.stackGroups[stackId] = childGroup;
        } else {
            parentGroup.stackGroups[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uniqueId"])('_stackId_')] = {
                numericAxisId: numericAxisId,
                cateAxisId: cateAxisId,
                items: [
                    item
                ]
            };
        }
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, parentGroup));
    }, parentStackGroupsInitialValue);
    var axisStackGroupsInitialValue = {};
    return Object.keys(stackGroups).reduce(function(result, axisId) {
        var group = stackGroups[axisId];
        if (group.hasStack) {
            var stackGroupsInitialValue = {};
            group.stackGroups = Object.keys(group.stackGroups).reduce(function(res, stackId) {
                var g = group.stackGroups[stackId];
                return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, stackId, {
                    numericAxisId: numericAxisId,
                    cateAxisId: cateAxisId,
                    items: g.items,
                    stackedData: getStackedData(data, g.items, offsetType)
                }));
            }, stackGroupsInitialValue);
        }
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, group));
    }, axisStackGroupsInitialValue);
};
var getTicksOfScale = function getTicksOfScale(scale, opts) {
    var realScaleType = opts.realScaleType, type = opts.type, tickCount = opts.tickCount, originalDomain = opts.originalDomain, allowDecimals = opts.allowDecimals;
    var scaleType = realScaleType || opts.scale;
    if (scaleType !== 'auto' && scaleType !== 'linear') {
        return null;
    }
    if (tickCount && type === 'number' && originalDomain && (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
        // Calculate the ticks by the number of grid when the axis is a number axis
        var domain = scale.domain();
        if (!domain.length) {
            return null;
        }
        var tickValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$2d$scale$40$0$2e$4$2e$5$2f$node_modules$2f$recharts$2d$scale$2f$es6$2f$getNiceTickValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNiceTickValues"])(domain, tickCount, allowDecimals);
        scale.domain([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tickValues),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tickValues)
        ]);
        return {
            niceTicks: tickValues
        };
    }
    if (tickCount && type === 'number') {
        var _domain = scale.domain();
        var _tickValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$2d$scale$40$0$2e$4$2e$5$2f$node_modules$2f$recharts$2d$scale$2f$es6$2f$getNiceTickValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTickValuesFixedDomain"])(_domain, tickCount, allowDecimals);
        return {
            niceTicks: _tickValues
        };
    }
    return null;
};
function getCateCoordinateOfLine(_ref5) {
    var axis = _ref5.axis, ticks = _ref5.ticks, bandSize = _ref5.bandSize, entry = _ref5.entry, index = _ref5.index, dataKey = _ref5.dataKey;
    if (axis.type === 'category') {
        // find coordinate of category axis by the value of category
        // @ts-expect-error why does this use direct object access instead of getValueByDataKey?
        if (!axis.allowDuplicatedCategory && axis.dataKey && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry[axis.dataKey])) {
            // @ts-expect-error why does this use direct object access instead of getValueByDataKey?
            var matchedTick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findEntryInArray"])(ticks, 'value', entry[axis.dataKey]);
            if (matchedTick) {
                return matchedTick.coordinate + bandSize / 2;
            }
        }
        return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
    }
    var value = getValueByDataKey(entry, !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dataKey) ? dataKey : axis.dataKey);
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) ? axis.scale(value) : null;
}
var getCateCoordinateOfBar = function getCateCoordinateOfBar(_ref6) {
    var axis = _ref6.axis, ticks = _ref6.ticks, offset = _ref6.offset, bandSize = _ref6.bandSize, entry = _ref6.entry, index = _ref6.index;
    if (axis.type === 'category') {
        return ticks[index] ? ticks[index].coordinate + offset : null;
    }
    var value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};
var getBaseValueOfBar = function getBaseValueOfBar(_ref7) {
    var numericAxis = _ref7.numericAxis;
    var domain = numericAxis.scale.domain();
    if (numericAxis.type === 'number') {
        var minValue = Math.min(domain[0], domain[1]);
        var maxValue = Math.max(domain[0], domain[1]);
        if (minValue <= 0 && maxValue >= 0) {
            return 0;
        }
        if (maxValue < 0) {
            return maxValue;
        }
        return minValue;
    }
    return domain[0];
};
var getStackedDataOfItem = function getStackedDataOfItem(item, stackGroups) {
    var _item$type3;
    var defaultedProps = (_item$type3 = item.type) !== null && _item$type3 !== void 0 && _item$type3.defaultProps ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
    var stackId = defaultedProps.stackId;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(stackId)) {
        var group = stackGroups[stackId];
        if (group) {
            var itemIndex = group.items.indexOf(item);
            return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
        }
    }
    return null;
};
var getDomainOfSingle = function getDomainOfSingle(data) {
    return data.reduce(function(result, entry) {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry.concat([
                result[0]
            ]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry.concat([
                result[1]
            ]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"]))
        ];
    }, [
        Infinity,
        -Infinity
    ]);
};
var getDomainOfStackGroups = function getDomainOfStackGroups(stackGroups, startIndex, endIndex) {
    return Object.keys(stackGroups).reduce(function(result, stackId) {
        var group = stackGroups[stackId];
        var stackedData = group.stackedData;
        var domain = stackedData.reduce(function(res, entry) {
            var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
            return [
                Math.min(res[0], s[0]),
                Math.max(res[1], s[1])
            ];
        }, [
            Infinity,
            -Infinity
        ]);
        return [
            Math.min(domain[0], result[0]),
            Math.max(domain[1], result[1])
        ];
    }, [
        Infinity,
        -Infinity
    ]).map(function(result) {
        return result === Infinity || result === -Infinity ? 0 : result;
    });
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(specifiedDomain)) {
        return specifiedDomain(dataDomain, allowDataOverflow);
    }
    if (!Array.isArray(specifiedDomain)) {
        return dataDomain;
    }
    var domain = [];
    /* eslint-disable prefer-destructuring */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(specifiedDomain[0])) {
        domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
    } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
        var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
        domain[0] = dataDomain[0] - value;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(specifiedDomain[0])) {
        domain[0] = specifiedDomain[0](dataDomain[0]);
    } else {
        domain[0] = dataDomain[0];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(specifiedDomain[1])) {
        domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
    } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
        var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];
        domain[1] = dataDomain[1] + _value;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(specifiedDomain[1])) {
        domain[1] = specifiedDomain[1](dataDomain[1]);
    } else {
        domain[1] = dataDomain[1];
    }
    /* eslint-enable prefer-destructuring */ return domain;
};
var getBandSizeOfAxis = function getBandSizeOfAxis(axis, ticks, isBar) {
    // @ts-expect-error we need to rethink scale type
    if (axis && axis.scale && axis.scale.bandwidth) {
        // @ts-expect-error we need to rethink scale type
        var bandWidth = axis.scale.bandwidth();
        if (!isBar || bandWidth > 0) {
            return bandWidth;
        }
    }
    if (axis && ticks && ticks.length >= 2) {
        var orderedTicks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$sortBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ticks, function(o) {
            return o.coordinate;
        });
        var bandSize = Infinity;
        for(var i = 1, len = orderedTicks.length; i < len; i++){
            var cur = orderedTicks[i];
            var prev = orderedTicks[i - 1];
            bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
        }
        return bandSize === Infinity ? 0 : bandSize;
    }
    return isBar ? undefined : 0;
};
var parseDomainOfCategoryAxis = function parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisChild) {
    if (!specifiedDomain || !specifiedDomain.length) {
        return calculatedDomain;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(specifiedDomain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(axisChild, 'type.defaultProps.domain'))) {
        return calculatedDomain;
    }
    return specifiedDomain;
};
var getTooltipItem = function getTooltipItem(graphicalItem, payload) {
    var defaultedProps = graphicalItem.type.defaultProps ? _objectSpread(_objectSpread({}, graphicalItem.type.defaultProps), graphicalItem.props) : graphicalItem.props;
    var dataKey = defaultedProps.dataKey, name = defaultedProps.name, unit = defaultedProps.unit, formatter = defaultedProps.formatter, tooltipType = defaultedProps.tooltipType, chartType = defaultedProps.chartType, hide = defaultedProps.hide;
    return _objectSpread(_objectSpread({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(graphicalItem, false)), {}, {
        dataKey: dataKey,
        unit: unit,
        formatter: formatter,
        name: name || dataKey,
        color: getMainColorOfGraphicItem(graphicalItem),
        value: getValueByDataKey(payload, dataKey),
        type: tooltipType,
        payload: payload,
        chartType: chartType,
        hide: hide
    });
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/PolarUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RADIAN": (()=>RADIAN),
    "degreeToRadian": (()=>degreeToRadian),
    "distanceBetweenPoints": (()=>distanceBetweenPoints),
    "formatAngleOfSector": (()=>formatAngleOfSector),
    "formatAxisMap": (()=>formatAxisMap),
    "getAngleOfPoint": (()=>getAngleOfPoint),
    "getMaxRadius": (()=>getMaxRadius),
    "getTickClassName": (()=>getTickClassName),
    "inRangeOfSector": (()=>inRangeOfSector),
    "polarToCartesian": (()=>polarToCartesian),
    "radianToDegree": (()=>radianToDegree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ChartUtils.js [app-client] (ecmascript) <locals>");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
;
;
;
;
;
var RADIAN = Math.PI / 180;
var degreeToRadian = function degreeToRadian(angle) {
    return angle * Math.PI / 180;
};
var radianToDegree = function radianToDegree(angleInRadian) {
    return angleInRadian * 180 / Math.PI;
};
var polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
    return {
        x: cx + Math.cos(-RADIAN * angle) * radius,
        y: cy + Math.sin(-RADIAN * angle) * radius
    };
};
var getMaxRadius = function getMaxRadius(width, height) {
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
};
var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
    var width = props.width, height = props.height;
    var startAngle = props.startAngle, endAngle = props.endAngle;
    var cx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(props.cx, width, width / 2);
    var cy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(props.cy, height, height / 2);
    var maxRadius = getMaxRadius(width, height, offset);
    var innerRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(props.innerRadius, maxRadius, 0);
    var outerRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(props.outerRadius, maxRadius, maxRadius * 0.8);
    var ids = Object.keys(axisMap);
    return ids.reduce(function(result, id) {
        var axis = axisMap[id];
        var domain = axis.domain, reversed = axis.reversed;
        var range;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(axis.range)) {
            if (axisType === 'angleAxis') {
                range = [
                    startAngle,
                    endAngle
                ];
            } else if (axisType === 'radiusAxis') {
                range = [
                    innerRadius,
                    outerRadius
                ];
            }
            if (reversed) {
                range = [
                    range[1],
                    range[0]
                ];
            }
        } else {
            range = axis.range;
            var _range = range;
            var _range2 = _slicedToArray(_range, 2);
            startAngle = _range2[0];
            endAngle = _range2[1];
        }
        var _parseScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseScale"])(axis, chartName), realScaleType = _parseScale.realScaleType, scale = _parseScale.scale;
        scale.domain(domain).range(range);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkDomainOfScale"])(scale);
        var ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTicksOfScale"])(scale, _objectSpread(_objectSpread({}, axis), {}, {
            realScaleType: realScaleType
        }));
        var finalAxis = _objectSpread(_objectSpread(_objectSpread({}, axis), ticks), {}, {
            range: range,
            radius: outerRadius,
            realScaleType: realScaleType,
            scale: scale,
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            startAngle: startAngle,
            endAngle: endAngle
        });
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, id, finalAxis));
    }, {});
};
var distanceBetweenPoints = function distanceBetweenPoints(point, anotherPoint) {
    var x1 = point.x, y1 = point.y;
    var x2 = anotherPoint.x, y2 = anotherPoint.y;
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
var getAngleOfPoint = function getAngleOfPoint(_ref, _ref2) {
    var x = _ref.x, y = _ref.y;
    var cx = _ref2.cx, cy = _ref2.cy;
    var radius = distanceBetweenPoints({
        x: x,
        y: y
    }, {
        x: cx,
        y: cy
    });
    if (radius <= 0) {
        return {
            radius: radius
        };
    }
    var cos = (x - cx) / radius;
    var angleInRadian = Math.acos(cos);
    if (y > cy) {
        angleInRadian = 2 * Math.PI - angleInRadian;
    }
    return {
        radius: radius,
        angle: radianToDegree(angleInRadian),
        angleInRadian: angleInRadian
    };
};
var formatAngleOfSector = function formatAngleOfSector(_ref3) {
    var startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
    var startCnt = Math.floor(startAngle / 360);
    var endCnt = Math.floor(endAngle / 360);
    var min = Math.min(startCnt, endCnt);
    return {
        startAngle: startAngle - min * 360,
        endAngle: endAngle - min * 360
    };
};
var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor(angle, _ref4) {
    var startAngle = _ref4.startAngle, endAngle = _ref4.endAngle;
    var startCnt = Math.floor(startAngle / 360);
    var endCnt = Math.floor(endAngle / 360);
    var min = Math.min(startCnt, endCnt);
    return angle + min * 360;
};
var inRangeOfSector = function inRangeOfSector(_ref5, sector) {
    var x = _ref5.x, y = _ref5.y;
    var _getAngleOfPoint = getAngleOfPoint({
        x: x,
        y: y
    }, sector), radius = _getAngleOfPoint.radius, angle = _getAngleOfPoint.angle;
    var innerRadius = sector.innerRadius, outerRadius = sector.outerRadius;
    if (radius < innerRadius || radius > outerRadius) {
        return false;
    }
    if (radius === 0) {
        return true;
    }
    var _formatAngleOfSector = formatAngleOfSector(sector), startAngle = _formatAngleOfSector.startAngle, endAngle = _formatAngleOfSector.endAngle;
    var formatAngle = angle;
    var inRange;
    if (startAngle <= endAngle) {
        while(formatAngle > endAngle){
            formatAngle -= 360;
        }
        while(formatAngle < startAngle){
            formatAngle += 360;
        }
        inRange = formatAngle >= startAngle && formatAngle <= endAngle;
    } else {
        while(formatAngle > startAngle){
            formatAngle -= 360;
        }
        while(formatAngle < endAngle){
            formatAngle += 360;
        }
        inRange = formatAngle >= endAngle && formatAngle <= startAngle;
    }
    if (inRange) {
        return _objectSpread(_objectSpread({}, sector), {}, {
            radius: radius,
            angle: reverseFormatAngleOfSetor(formatAngle, sector)
        });
    }
    return null;
};
var getTickClassName = function getTickClassName(tick) {
    return !/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(tick) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tick) && typeof tick !== 'boolean' ? tick.className : '';
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/tooltip/translate.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTooltipCSSClassName": (()=>getTooltipCSSClassName),
    "getTooltipTranslate": (()=>getTooltipTranslate),
    "getTooltipTranslateXY": (()=>getTooltipTranslateXY),
    "getTransformStyle": (()=>getTransformStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
var CSS_CLASS_PREFIX = 'recharts-tooltip-wrapper';
var TOOLTIP_HIDDEN = {
    visibility: 'hidden'
};
function getTooltipCSSClassName(_ref) {
    var coordinate = _ref.coordinate, translateX = _ref.translateX, translateY = _ref.translateY;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CSS_CLASS_PREFIX, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(CSS_CLASS_PREFIX, "-right"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(translateX) && coordinate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(coordinate.x) && translateX >= coordinate.x), "".concat(CSS_CLASS_PREFIX, "-left"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(translateX) && coordinate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(coordinate.x) && translateX < coordinate.x), "".concat(CSS_CLASS_PREFIX, "-bottom"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(translateY) && coordinate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(coordinate.y) && translateY >= coordinate.y), "".concat(CSS_CLASS_PREFIX, "-top"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(translateY) && coordinate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(coordinate.y) && translateY < coordinate.y));
}
function getTooltipTranslateXY(_ref2) {
    var allowEscapeViewBox = _ref2.allowEscapeViewBox, coordinate = _ref2.coordinate, key = _ref2.key, offsetTopLeft = _ref2.offsetTopLeft, position = _ref2.position, reverseDirection = _ref2.reverseDirection, tooltipDimension = _ref2.tooltipDimension, viewBox = _ref2.viewBox, viewBoxDimension = _ref2.viewBoxDimension;
    if (position && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(position[key])) {
        return position[key];
    }
    var negative = coordinate[key] - tooltipDimension - offsetTopLeft;
    var positive = coordinate[key] + offsetTopLeft;
    if (allowEscapeViewBox[key]) {
        return reverseDirection[key] ? negative : positive;
    }
    if (reverseDirection[key]) {
        var _tooltipBoundary = negative;
        var _viewBoxBoundary = viewBox[key];
        if (_tooltipBoundary < _viewBoxBoundary) {
            return Math.max(positive, viewBox[key]);
        }
        return Math.max(negative, viewBox[key]);
    }
    var tooltipBoundary = positive + tooltipDimension;
    var viewBoxBoundary = viewBox[key] + viewBoxDimension;
    if (tooltipBoundary > viewBoxBoundary) {
        return Math.max(negative, viewBox[key]);
    }
    return Math.max(positive, viewBox[key]);
}
function getTransformStyle(_ref3) {
    var translateX = _ref3.translateX, translateY = _ref3.translateY, useTranslate3d = _ref3.useTranslate3d;
    return {
        transform: useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)")
    };
}
function getTooltipTranslate(_ref4) {
    var allowEscapeViewBox = _ref4.allowEscapeViewBox, coordinate = _ref4.coordinate, offsetTopLeft = _ref4.offsetTopLeft, position = _ref4.position, reverseDirection = _ref4.reverseDirection, tooltipBox = _ref4.tooltipBox, useTranslate3d = _ref4.useTranslate3d, viewBox = _ref4.viewBox;
    var cssProperties, translateX, translateY;
    if (tooltipBox.height > 0 && tooltipBox.width > 0 && coordinate) {
        translateX = getTooltipTranslateXY({
            allowEscapeViewBox: allowEscapeViewBox,
            coordinate: coordinate,
            key: 'x',
            offsetTopLeft: offsetTopLeft,
            position: position,
            reverseDirection: reverseDirection,
            tooltipDimension: tooltipBox.width,
            viewBox: viewBox,
            viewBoxDimension: viewBox.width
        });
        translateY = getTooltipTranslateXY({
            allowEscapeViewBox: allowEscapeViewBox,
            coordinate: coordinate,
            key: 'y',
            offsetTopLeft: offsetTopLeft,
            position: position,
            reverseDirection: reverseDirection,
            tooltipDimension: tooltipBox.height,
            viewBox: viewBox,
            viewBoxDimension: viewBox.height
        });
        cssProperties = getTransformStyle({
            translateX: translateX,
            translateY: translateY,
            useTranslate3d: useTranslate3d
        });
    } else {
        cssProperties = TOOLTIP_HIDDEN;
    }
    return {
        cssProperties: cssProperties,
        cssClasses: getTooltipCSSClassName({
            translateX: translateX,
            translateY: translateY,
            coordinate: coordinate
        })
    };
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/CssPrefixUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generatePrefixStyle": (()=>generatePrefixStyle)
});
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var PREFIX_LIST = [
    'Webkit',
    'Moz',
    'O',
    'ms'
];
var generatePrefixStyle = function generatePrefixStyle(name, value) {
    if (!name) {
        return null;
    }
    var camelName = name.replace(/(\w)/, function(v) {
        return v.toUpperCase();
    });
    var result = PREFIX_LIST.reduce(function(res, entry) {
        return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, entry + camelName, value));
    }, {});
    result[name] = value;
    return result;
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/IfOverflowMatches.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ifOverflowMatches": (()=>ifOverflowMatches)
});
var ifOverflowMatches = function ifOverflowMatches(props, value) {
    var alwaysShow = props.alwaysShow;
    var ifOverflow = props.ifOverflow;
    if (alwaysShow) {
        ifOverflow = 'extendDomain';
    }
    return ifOverflow === value;
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ActiveShapeUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Shape": (()=>Shape),
    "compareFunnel": (()=>compareFunnel),
    "comparePie": (()=>comparePie),
    "compareScatter": (()=>compareScatter),
    "getActiveShapeIndexForTooltip": (()=>getActiveShapeIndexForTooltip),
    "getPropsFromShapeOption": (()=>getPropsFromShapeOption),
    "isFunnel": (()=>isFunnel),
    "isPie": (()=>isPie),
    "isScatter": (()=>isScatter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isBoolean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBoolean.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Rectangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Trapezoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Trapezoid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Sector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/container/Layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Symbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Symbols.js [app-client] (ecmascript)");
var _excluded = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive"
];
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
;
;
;
;
;
;
;
/**
 * This is an abstraction for rendering a user defined prop for a customized shape in several forms.
 *
 * <Shape /> is the root and will handle taking in:
 *  - an object of svg properties
 *  - a boolean
 *  - a render prop(inline function that returns jsx)
 *  - a react element
 *
 * <ShapeSelector /> is a subcomponent of <Shape /> and used to match a component
 * to the value of props.shapeType that is passed to the root.
 *
 */ function defaultPropTransformer(option, props) {
    return _objectSpread(_objectSpread({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
    return shapeType === 'symbols';
}
function ShapeSelector(_ref) {
    var shapeType = _ref.shapeType, elementProps = _ref.elementProps;
    switch(shapeType){
        case 'rectangle':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"], elementProps);
        case 'trapezoid':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Trapezoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trapezoid"], elementProps);
        case 'sector':
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sector"], elementProps);
        case 'symbols':
            if (isSymbolsProps(shapeType, elementProps)) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Symbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Symbols"], elementProps);
            }
            break;
        default:
            return null;
    }
}
function getPropsFromShapeOption(option) {
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(option)) {
        return option.props;
    }
    return option;
}
function Shape(_ref2) {
    var option = _ref2.option, shapeType = _ref2.shapeType, _ref2$propTransformer = _ref2.propTransformer, propTransformer = _ref2$propTransformer === void 0 ? defaultPropTransformer : _ref2$propTransformer, _ref2$activeClassName = _ref2.activeClassName, activeClassName = _ref2$activeClassName === void 0 ? 'recharts-active-shape' : _ref2$activeClassName, isActive = _ref2.isActive, props = _objectWithoutProperties(_ref2, _excluded);
    var shape;
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(option)) {
        shape = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(option, _objectSpread(_objectSpread({}, props), getPropsFromShapeOption(option)));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(option)) {
        shape = option(props);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(option) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isBoolean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(option)) {
        var nextProps = propTransformer(option, props);
        shape = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ShapeSelector, {
            shapeType: shapeType,
            elementProps: nextProps
        });
    } else {
        var elementProps = props;
        shape = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ShapeSelector, {
            shapeType: shapeType,
            elementProps: elementProps
        });
    }
    if (isActive) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
            className: activeClassName
        }, shape);
    }
    return shape;
}
function isFunnel(graphicalItem, _item) {
    return _item != null && 'trapezoids' in graphicalItem.props;
}
function isPie(graphicalItem, _item) {
    return _item != null && 'sectors' in graphicalItem.props;
}
function isScatter(graphicalItem, _item) {
    return _item != null && 'points' in graphicalItem.props;
}
function compareFunnel(shapeData, activeTooltipItem) {
    var _activeTooltipItem$la, _activeTooltipItem$la2;
    var xMatches = shapeData.x === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la === void 0 ? void 0 : _activeTooltipItem$la.x) || shapeData.x === activeTooltipItem.x;
    var yMatches = shapeData.y === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la2 = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la2 === void 0 ? void 0 : _activeTooltipItem$la2.y) || shapeData.y === activeTooltipItem.y;
    return xMatches && yMatches;
}
function comparePie(shapeData, activeTooltipItem) {
    var startAngleMatches = shapeData.endAngle === activeTooltipItem.endAngle;
    var endAngleMatches = shapeData.startAngle === activeTooltipItem.startAngle;
    return startAngleMatches && endAngleMatches;
}
function compareScatter(shapeData, activeTooltipItem) {
    var xMatches = shapeData.x === activeTooltipItem.x;
    var yMatches = shapeData.y === activeTooltipItem.y;
    var zMatches = shapeData.z === activeTooltipItem.z;
    return xMatches && yMatches && zMatches;
}
function getComparisonFn(graphicalItem, activeItem) {
    var comparison;
    if (isFunnel(graphicalItem, activeItem)) {
        comparison = compareFunnel;
    } else if (isPie(graphicalItem, activeItem)) {
        comparison = comparePie;
    } else if (isScatter(graphicalItem, activeItem)) {
        comparison = compareScatter;
    }
    return comparison;
}
function getShapeDataKey(graphicalItem, activeItem) {
    var shapeKey;
    if (isFunnel(graphicalItem, activeItem)) {
        shapeKey = 'trapezoids';
    } else if (isPie(graphicalItem, activeItem)) {
        shapeKey = 'sectors';
    } else if (isScatter(graphicalItem, activeItem)) {
        shapeKey = 'points';
    }
    return shapeKey;
}
function getActiveShapeTooltipPayload(graphicalItem, activeItem) {
    if (isFunnel(graphicalItem, activeItem)) {
        var _activeItem$tooltipPa;
        return (_activeItem$tooltipPa = activeItem.tooltipPayload) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa[0]) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa.payload) === null || _activeItem$tooltipPa === void 0 ? void 0 : _activeItem$tooltipPa.payload;
    }
    if (isPie(graphicalItem, activeItem)) {
        var _activeItem$tooltipPa2;
        return (_activeItem$tooltipPa2 = activeItem.tooltipPayload) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2[0]) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2.payload) === null || _activeItem$tooltipPa2 === void 0 ? void 0 : _activeItem$tooltipPa2.payload;
    }
    if (isScatter(graphicalItem, activeItem)) {
        return activeItem.payload;
    }
    return {};
}
function getActiveShapeIndexForTooltip(_ref3) {
    var activeTooltipItem = _ref3.activeTooltipItem, graphicalItem = _ref3.graphicalItem, itemData = _ref3.itemData;
    var shapeKey = getShapeDataKey(graphicalItem, activeTooltipItem);
    var tooltipPayload = getActiveShapeTooltipPayload(graphicalItem, activeTooltipItem);
    var activeItemMatches = itemData.filter(function(datum, dataIndex) {
        var valuesMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tooltipPayload, datum);
        var mouseCoordinateMatches = graphicalItem.props[shapeKey].filter(function(shapeData) {
            var comparison = getComparisonFn(graphicalItem, activeTooltipItem);
            return comparison(shapeData, activeTooltipItem);
        });
        // get the last index in case of multiple matches
        var indexOfMouseCoordinates = graphicalItem.props[shapeKey].indexOf(mouseCoordinateMatches[mouseCoordinateMatches.length - 1]);
        var coordinatesMatch = dataIndex === indexOfMouseCoordinates;
        return valuesMatch && coordinatesMatch;
    });
    // get the last index in case of multiple matches
    var activeIndex = itemData.indexOf(activeItemMatches[activeItemMatches.length - 1]);
    return activeIndex;
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/BarUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BarRectangle": (()=>BarRectangle),
    "minPointSizeCallback": (()=>minPointSizeCallback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tiny$2d$invariant$40$1$2e$3$2e$3$2f$node_modules$2f$tiny$2d$invariant$2f$dist$2f$esm$2f$tiny$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ActiveShapeUtils.js [app-client] (ecmascript)");
var _excluded = [
    "x",
    "y"
];
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
;
;
;
// Rectangle props is expecting x, y, height, width as numbers, name as a string, and radius as a custom type
// When props are being spread in from a user defined component in Bar,
// the prop types of an SVGElement have these typed as something else.
// This function will return the passed in props
// along with x, y, height as numbers, name as a string, and radius as number | [number, number, number, number]
function typeguardBarRectangleProps(_ref, props) {
    var xProp = _ref.x, yProp = _ref.y, option = _objectWithoutProperties(_ref, _excluded);
    var xValue = "".concat(xProp);
    var x = parseInt(xValue, 10);
    var yValue = "".concat(yProp);
    var y = parseInt(yValue, 10);
    var heightValue = "".concat(props.height || option.height);
    var height = parseInt(heightValue, 10);
    var widthValue = "".concat(props.width || option.width);
    var width = parseInt(widthValue, 10);
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, props), option), x ? {
        x: x
    } : {}), y ? {
        y: y
    } : {}), {}, {
        height: height,
        width: width,
        name: props.name,
        radius: props.radius
    });
}
function BarRectangle(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"], _extends({
        shapeType: "rectangle",
        propTransformer: typeguardBarRectangleProps,
        activeClassName: "recharts-active-bar"
    }, props));
}
var minPointSizeCallback = function minPointSizeCallback(minPointSize) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return function(value, index) {
        if (typeof minPointSize === 'number') return minPointSize;
        var isValueNumber = typeof value === 'number';
        if (isValueNumber) {
            return minPointSize(value, index);
        }
        !isValueNumber ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tiny$2d$invariant$40$1$2e$3$2e$3$2f$node_modules$2f$tiny$2d$invariant$2f$dist$2f$esm$2f$tiny$2d$invariant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, "minPointSize callback function received a value with type of ".concat(_typeof(value), ". Currently only numbers are supported.")) : ("TURBOPACK unreachable", undefined) : void 0;
        return defaultValue;
    };
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/CartesianUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScaleHelper": (()=>ScaleHelper),
    "createLabeledScales": (()=>createLabeledScales),
    "formatAxisMap": (()=>formatAxisMap),
    "getAngledRectangleWidth": (()=>getAngledRectangleWidth),
    "normalizeAngle": (()=>normalizeAngle),
    "rectWithCoords": (()=>rectWithCoords),
    "rectWithPoints": (()=>rectWithPoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$mapValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/mapValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/every.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ChartUtils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReactUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
;
;
;
var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
    var width = props.width, height = props.height, layout = props.layout, children = props.children;
    var ids = Object.keys(axisMap);
    var steps = {
        left: offset.left,
        leftMirror: offset.left,
        right: width - offset.right,
        rightMirror: width - offset.right,
        top: offset.top,
        topMirror: offset.top,
        bottom: height - offset.bottom,
        bottomMirror: height - offset.bottom
    };
    var hasBar = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"]);
    return ids.reduce(function(result, id) {
        var axis = axisMap[id];
        var orientation = axis.orientation, domain = axis.domain, _axis$padding = axis.padding, padding = _axis$padding === void 0 ? {} : _axis$padding, mirror = axis.mirror, reversed = axis.reversed;
        var offsetKey = "".concat(orientation).concat(mirror ? 'Mirror' : '');
        var calculatedPadding, range, x, y, needSpace;
        if (axis.type === 'number' && (axis.padding === 'gap' || axis.padding === 'no-gap')) {
            var diff = domain[1] - domain[0];
            var smallestDistanceBetweenValues = Infinity;
            var sortedValues = axis.categoricalDomain.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareValues"]);
            sortedValues.forEach(function(value, index) {
                if (index > 0) {
                    smallestDistanceBetweenValues = Math.min((value || 0) - (sortedValues[index - 1] || 0), smallestDistanceBetweenValues);
                }
            });
            if (Number.isFinite(smallestDistanceBetweenValues)) {
                var smallestDistanceInPercent = smallestDistanceBetweenValues / diff;
                var rangeWidth = axis.layout === 'vertical' ? offset.height : offset.width;
                if (axis.padding === 'gap') {
                    calculatedPadding = smallestDistanceInPercent * rangeWidth / 2;
                }
                if (axis.padding === 'no-gap') {
                    var gap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(props.barCategoryGap, smallestDistanceInPercent * rangeWidth);
                    var halfBand = smallestDistanceInPercent * rangeWidth / 2;
                    calculatedPadding = halfBand - gap - (halfBand - gap) / rangeWidth * gap;
                }
            }
        }
        if (axisType === 'xAxis') {
            range = [
                offset.left + (padding.left || 0) + (calculatedPadding || 0),
                offset.left + offset.width - (padding.right || 0) - (calculatedPadding || 0)
            ];
        } else if (axisType === 'yAxis') {
            range = layout === 'horizontal' ? [
                offset.top + offset.height - (padding.bottom || 0),
                offset.top + (padding.top || 0)
            ] : [
                offset.top + (padding.top || 0) + (calculatedPadding || 0),
                offset.top + offset.height - (padding.bottom || 0) - (calculatedPadding || 0)
            ];
        } else {
            range = axis.range;
        }
        if (reversed) {
            range = [
                range[1],
                range[0]
            ];
        }
        var _parseScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseScale"])(axis, chartName, hasBar), scale = _parseScale.scale, realScaleType = _parseScale.realScaleType;
        scale.domain(domain).range(range);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkDomainOfScale"])(scale);
        var ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTicksOfScale"])(scale, _objectSpread(_objectSpread({}, axis), {}, {
            realScaleType: realScaleType
        }));
        if (axisType === 'xAxis') {
            needSpace = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
            x = offset.left;
            y = steps[offsetKey] - needSpace * axis.height;
        } else if (axisType === 'yAxis') {
            needSpace = orientation === 'left' && !mirror || orientation === 'right' && mirror;
            x = steps[offsetKey] - needSpace * axis.width;
            y = offset.top;
        }
        var finalAxis = _objectSpread(_objectSpread(_objectSpread({}, axis), ticks), {}, {
            realScaleType: realScaleType,
            x: x,
            y: y,
            scale: scale,
            width: axisType === 'xAxis' ? offset.width : axis.width,
            height: axisType === 'yAxis' ? offset.height : axis.height
        });
        finalAxis.bandSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBandSizeOfAxis"])(finalAxis, ticks);
        if (!axis.hide && axisType === 'xAxis') {
            steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
        } else if (!axis.hide) {
            steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
        }
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, id, finalAxis));
    }, {});
};
var rectWithPoints = function rectWithPoints(_ref, _ref2) {
    var x1 = _ref.x, y1 = _ref.y;
    var x2 = _ref2.x, y2 = _ref2.y;
    return {
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1)
    };
};
var rectWithCoords = function rectWithCoords(_ref3) {
    var x1 = _ref3.x1, y1 = _ref3.y1, x2 = _ref3.x2, y2 = _ref3.y2;
    return rectWithPoints({
        x: x1,
        y: y1
    }, {
        x: x2,
        y: y2
    });
};
var ScaleHelper = /*#__PURE__*/ function() {
    function ScaleHelper(scale) {
        _classCallCheck(this, ScaleHelper);
        this.scale = scale;
    }
    return _createClass(ScaleHelper, [
        {
            key: "domain",
            get: function get() {
                return this.scale.domain;
            }
        },
        {
            key: "range",
            get: function get() {
                return this.scale.range;
            }
        },
        {
            key: "rangeMin",
            get: function get() {
                return this.range()[0];
            }
        },
        {
            key: "rangeMax",
            get: function get() {
                return this.range()[1];
            }
        },
        {
            key: "bandwidth",
            get: function get() {
                return this.scale.bandwidth;
            }
        },
        {
            key: "apply",
            value: function apply(value) {
                var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, bandAware = _ref4.bandAware, position = _ref4.position;
                if (value === undefined) {
                    return undefined;
                }
                if (position) {
                    switch(position){
                        case 'start':
                            {
                                return this.scale(value);
                            }
                        case 'middle':
                            {
                                var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(value) + offset;
                            }
                        case 'end':
                            {
                                var _offset = this.bandwidth ? this.bandwidth() : 0;
                                return this.scale(value) + _offset;
                            }
                        default:
                            {
                                return this.scale(value);
                            }
                    }
                }
                if (bandAware) {
                    var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(value) + _offset2;
                }
                return this.scale(value);
            }
        },
        {
            key: "isInRange",
            value: function isInRange(value) {
                var range = this.range();
                var first = range[0];
                var last = range[range.length - 1];
                return first <= last ? value >= first && value <= last : value >= last && value <= first;
            }
        }
    ], [
        {
            key: "create",
            value: function create(obj) {
                return new ScaleHelper(obj);
            }
        }
    ]);
}();
_defineProperty(ScaleHelper, "EPS", 1e-4);
var createLabeledScales = function createLabeledScales(options) {
    var scales = Object.keys(options).reduce(function(res, key) {
        return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, key, ScaleHelper.create(options[key])));
    }, {});
    return _objectSpread(_objectSpread({}, scales), {}, {
        apply: function apply(coord) {
            var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, bandAware = _ref5.bandAware, position = _ref5.position;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$mapValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(coord, function(value, label) {
                return scales[label].apply(value, {
                    bandAware: bandAware,
                    position: position
                });
            });
        },
        isInRange: function isInRange(coord) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$every$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(coord, function(value, label) {
                return scales[label].isInRange(value);
            });
        }
    });
};
function normalizeAngle(angle) {
    return (angle % 180 + 180) % 180;
}
var getAngledRectangleWidth = function getAngledRectangleWidth(_ref6) {
    var width = _ref6.width, height = _ref6.height;
    var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Ensure angle is >= 0 && < 180
    var normalizedAngle = normalizeAngle(angle);
    var angleRadians = normalizedAngle * Math.PI / 180;
    /* Depending on the height and width of the rectangle, we may need to use different formulas to calculate the angled
   * width. This threshold defines when each formula should kick in. */ var angleThreshold = Math.atan(height / width);
    var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
    return Math.abs(angledWidth);
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/calculateViewBox.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateViewBox": (()=>calculateViewBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$memoize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js [app-client] (ecmascript)");
;
var calculateViewBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$memoize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(offset) {
    return {
        x: offset.left,
        y: offset.top,
        width: offset.width,
        height: offset.height
    };
}, function(offset) {
    return [
        'l',
        offset.left,
        't',
        offset.top,
        'w',
        offset.width,
        'h',
        offset.height
    ].join('');
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DetectReferenceElementsDomain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "detectReferenceElementsDomain": (()=>detectReferenceElementsDomain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceDot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/cartesian/ReferenceDot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/cartesian/ReferenceArea.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$IfOverflowMatches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/IfOverflowMatches.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReactUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
;
;
;
;
;
;
var detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType, specifiedTicks) {
    var lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAllByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"]);
    var dots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAllByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceDot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceDot"]);
    var elements = [].concat(_toConsumableArray(lines), _toConsumableArray(dots));
    var areas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAllByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceArea"]);
    var idKey = "".concat(axisType, "Id");
    var valueKey = axisType[0];
    var finalDomain = domain;
    if (elements.length) {
        finalDomain = elements.reduce(function(result, el) {
            if (el.props[idKey] === axisId && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$IfOverflowMatches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifOverflowMatches"])(el.props, 'extendDomain') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(el.props[valueKey])) {
                var value = el.props[valueKey];
                return [
                    Math.min(result[0], value),
                    Math.max(result[1], value)
                ];
            }
            return result;
        }, finalDomain);
    }
    if (areas.length) {
        var key1 = "".concat(valueKey, "1");
        var key2 = "".concat(valueKey, "2");
        finalDomain = areas.reduce(function(result, el) {
            if (el.props[idKey] === axisId && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$IfOverflowMatches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifOverflowMatches"])(el.props, 'extendDomain') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(el.props[key1]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(el.props[key2])) {
                var value1 = el.props[key1];
                var value2 = el.props[key2];
                return [
                    Math.min(result[0], value1, value2),
                    Math.max(result[1], value1, value2)
                ];
            }
            return result;
        }, finalDomain);
    }
    if (specifiedTicks && specifiedTicks.length) {
        finalDomain = specifiedTicks.reduce(function(result, tick) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(tick)) {
                return [
                    Math.min(result[0], tick),
                    Math.max(result[1], tick)
                ];
            }
            return result;
        }, finalDomain);
    }
    return finalDomain;
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/Events.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SYNC_EVENT": (()=>SYNC_EVENT),
    "eventCenter": (()=>eventCenter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$4$2e$0$2e$7$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@4.0.7/node_modules/eventemitter3/index.js [app-client] (ecmascript)");
;
var eventCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$4$2e$0$2e$7$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
;
var SYNC_EVENT = 'recharts.syncMouseEvents';
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/isDomainSpecifiedByUser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isDomainSpecifiedByUser": (()=>isDomainSpecifiedByUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
;
function isDomainSpecifiedByUser(domain, allowDataOverflow, axisType) {
    if (axisType === 'number' && allowDataOverflow === true && Array.isArray(domain)) {
        var domainStart = domain === null || domain === void 0 ? void 0 : domain[0];
        var domainEnd = domain === null || domain === void 0 ? void 0 : domain[1];
        /*
     * The `isNumber` check is needed because the user could also provide strings like "dataMin" via the domain props.
     * In such case, we have to compute the domain from the data.
     */ if (!!domainStart && !!domainEnd && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(domainStart) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(domainEnd)) {
            return true;
        }
    }
    return false;
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/cursor/getCursorRectangle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCursorRectangle": (()=>getCursorRectangle)
});
function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
    var halfSize = tooltipAxisBandSize / 2;
    return {
        stroke: 'none',
        fill: '#ccc',
        x: layout === 'horizontal' ? activeCoordinate.x - halfSize : offset.left + 0.5,
        y: layout === 'horizontal' ? offset.top + 0.5 : activeCoordinate.y - halfSize,
        width: layout === 'horizontal' ? tooltipAxisBandSize : offset.width - 1,
        height: layout === 'horizontal' ? offset.height - 1 : tooltipAxisBandSize
    };
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/cursor/getRadialCursorPoints.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRadialCursorPoints": (()=>getRadialCursorPoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/PolarUtils.js [app-client] (ecmascript)");
;
function getRadialCursorPoints(activeCoordinate) {
    var cx = activeCoordinate.cx, cy = activeCoordinate.cy, radius = activeCoordinate.radius, startAngle = activeCoordinate.startAngle, endAngle = activeCoordinate.endAngle;
    var startPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, startAngle);
    var endPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, endAngle);
    return {
        points: [
            startPoint,
            endPoint
        ],
        cx: cx,
        cy: cy,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
    };
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/cursor/getCursorPoints.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCursorPoints": (()=>getCursorPoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/PolarUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$cursor$2f$getRadialCursorPoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/cursor/getRadialCursorPoints.js [app-client] (ecmascript)");
;
;
function getCursorPoints(layout, activeCoordinate, offset) {
    var x1, y1, x2, y2;
    if (layout === 'horizontal') {
        x1 = activeCoordinate.x;
        x2 = x1;
        y1 = offset.top;
        y2 = offset.top + offset.height;
    } else if (layout === 'vertical') {
        y1 = activeCoordinate.y;
        y2 = y1;
        x1 = offset.left;
        x2 = offset.left + offset.width;
    } else if (activeCoordinate.cx != null && activeCoordinate.cy != null) {
        if (layout === 'centric') {
            var cx = activeCoordinate.cx, cy = activeCoordinate.cy, innerRadius = activeCoordinate.innerRadius, outerRadius = activeCoordinate.outerRadius, angle = activeCoordinate.angle;
            var innerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, innerRadius, angle);
            var outerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, outerRadius, angle);
            x1 = innerPoint.x;
            y1 = innerPoint.y;
            x2 = outerPoint.x;
            y2 = outerPoint.y;
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$cursor$2f$getRadialCursorPoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadialCursorPoints"])(activeCoordinate);
        }
    }
    return [
        {
            x: x1,
            y: y1
        },
        {
            x: x2,
            y: y2
        }
    ];
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/getEveryNthWithCondition.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Given an array and a number N, return a new array which contains every nTh
 * element of the input array. For n below 1, an empty array is returned.
 * If isValid is provided, all candidates must suffice the condition, else undefined is returned.
 * @param {T[]} array An input array.
 * @param {integer} n A number
 * @param {Function} isValid A function to evaluate a candidate form the array
 * @returns {T[]} The result array of the same type as the input array.
 */ __turbopack_context__.s({
    "getEveryNthWithCondition": (()=>getEveryNthWithCondition)
});
function getEveryNthWithCondition(array, n, isValid) {
    if (n < 1) {
        return [];
    }
    if (n === 1 && isValid === undefined) {
        return array;
    }
    var result = [];
    for(var i = 0; i < array.length; i += n){
        if (isValid === undefined || isValid(array[i]) === true) {
            result.push(array[i]);
        } else {
            return undefined;
        }
    }
    return result;
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/TickUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAngledTickWidth": (()=>getAngledTickWidth),
    "getNumberIntervalTicks": (()=>getNumberIntervalTicks),
    "getTickBoundaries": (()=>getTickBoundaries),
    "isVisible": (()=>isVisible)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/CartesianUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$getEveryNthWithCondition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/getEveryNthWithCondition.js [app-client] (ecmascript)");
;
;
function getAngledTickWidth(contentSize, unitSize, angle) {
    var size = {
        width: contentSize.width + unitSize.width,
        height: contentSize.height + unitSize.height
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAngledRectangleWidth"])(size, angle);
}
function getTickBoundaries(viewBox, sign, sizeKey) {
    var isWidth = sizeKey === 'width';
    var x = viewBox.x, y = viewBox.y, width = viewBox.width, height = viewBox.height;
    if (sign === 1) {
        return {
            start: isWidth ? x : y,
            end: isWidth ? x + width : y + height
        };
    }
    return {
        start: isWidth ? x + width : y + height,
        end: isWidth ? x : y
    };
}
function isVisible(sign, tickPosition, getSize, start, end) {
    /* Since getSize() is expensive (it reads the ticks' size from the DOM), we do this check first to avoid calculating
   * the tick's size. */ if (sign * tickPosition < sign * start || sign * tickPosition > sign * end) {
        return false;
    }
    var size = getSize();
    return sign * (tickPosition - sign * size / 2 - start) >= 0 && sign * (tickPosition + sign * size / 2 - end) <= 0;
}
function getNumberIntervalTicks(ticks, interval) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$getEveryNthWithCondition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEveryNthWithCondition"])(ticks, interval + 1);
}
}}),
}]);

//# sourceMappingURL=29176_recharts_es6_util_ff4355cb._.js.map