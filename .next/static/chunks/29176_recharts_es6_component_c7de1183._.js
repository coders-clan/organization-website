(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Text.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Text": (()=>Text)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReactUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DOMUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DOMUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReduceCSSCalc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReduceCSSCalc.js [app-client] (ecmascript)");
var _excluded = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill"
], _excluded2 = [
    "dx",
    "dy",
    "angle",
    "className",
    "breakAll"
];
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
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
;
;
;
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = function calculateWordWidths(_ref) {
    var children = _ref.children, breakAll = _ref.breakAll, style = _ref.style;
    try {
        var words = [];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children)) {
            if (breakAll) {
                words = children.toString().split('');
            } else {
                words = children.toString().split(BREAKING_SPACES);
            }
        }
        var wordsWithComputedWidth = words.map(function(word) {
            return {
                word: word,
                width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DOMUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringSize"])(word, style).width
            };
        });
        var spaceWidth = breakAll ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DOMUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStringSize"])("\xA0", style).width;
        return {
            wordsWithComputedWidth: wordsWithComputedWidth,
            spaceWidth: spaceWidth
        };
    } catch (e) {
        return null;
    }
};
var calculateWordsByLines = function calculateWordsByLines(_ref2, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) {
    var maxLines = _ref2.maxLines, children = _ref2.children, style = _ref2.style, breakAll = _ref2.breakAll;
    var shouldLimitLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(maxLines);
    var text = children;
    var calculate = function calculate() {
        var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return words.reduce(function(result, _ref3) {
            var word = _ref3.word, width = _ref3.width;
            var currentLine = result[result.length - 1];
            if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))) {
                // Word can be added to an existing line
                currentLine.words.push(word);
                currentLine.width += width + spaceWidth;
            } else {
                // Add first word to line or word is too long to scaleToFit on existing line
                var newLine = {
                    words: [
                        word
                    ],
                    width: width
                };
                result.push(newLine);
            }
            return result;
        }, []);
    };
    var originalResult = calculate(initialWordsWithComputedWith);
    var findLongestLine = function findLongestLine(words) {
        return words.reduce(function(a, b) {
            return a.width > b.width ? a : b;
        });
    };
    if (!shouldLimitLines) {
        return originalResult;
    }
    var suffix = '…';
    var checkOverflow = function checkOverflow(index) {
        var tempText = text.slice(0, index);
        var words = calculateWordWidths({
            breakAll: breakAll,
            style: style,
            children: tempText + suffix
        }).wordsWithComputedWidth;
        var result = calculate(words);
        var doesOverflow = result.length > maxLines || findLongestLine(result).width > Number(lineWidth);
        return [
            doesOverflow,
            result
        ];
    };
    var start = 0;
    var end = text.length - 1;
    var iterations = 0;
    var trimmedResult;
    while(start <= end && iterations <= text.length - 1){
        var middle = Math.floor((start + end) / 2);
        var prev = middle - 1;
        var _checkOverflow = checkOverflow(prev), _checkOverflow2 = _slicedToArray(_checkOverflow, 2), doesPrevOverflow = _checkOverflow2[0], result = _checkOverflow2[1];
        var _checkOverflow3 = checkOverflow(middle), _checkOverflow4 = _slicedToArray(_checkOverflow3, 1), doesMiddleOverflow = _checkOverflow4[0];
        if (!doesPrevOverflow && !doesMiddleOverflow) {
            start = middle + 1;
        }
        if (doesPrevOverflow && doesMiddleOverflow) {
            end = middle - 1;
        }
        if (!doesPrevOverflow && doesMiddleOverflow) {
            trimmedResult = result;
            break;
        }
        iterations++;
    }
    // Fallback to originalResult (result without trimming) if we cannot find the
    // where to trim.  This should not happen :tm:
    return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = function getWordsWithoutCalculate(children) {
    var words = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children) ? children.toString().split(BREAKING_SPACES) : [];
    return [
        {
            words: words
        }
    ];
};
var getWordsByLines = function getWordsByLines(_ref4) {
    var width = _ref4.width, scaleToFit = _ref4.scaleToFit, children = _ref4.children, style = _ref4.style, breakAll = _ref4.breakAll, maxLines = _ref4.maxLines;
    // Only perform calculations if using features that require them (multiline, scaleToFit)
    if ((width || scaleToFit) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Global"].isSsr) {
        var wordsWithComputedWidth, spaceWidth;
        var wordWidths = calculateWordWidths({
            breakAll: breakAll,
            children: children,
            style: style
        });
        if (wordWidths) {
            var wcw = wordWidths.wordsWithComputedWidth, sw = wordWidths.spaceWidth;
            wordsWithComputedWidth = wcw;
            spaceWidth = sw;
        } else {
            return getWordsWithoutCalculate(children);
        }
        return calculateWordsByLines({
            breakAll: breakAll,
            children: children,
            maxLines: maxLines,
            style: style
        }, wordsWithComputedWidth, spaceWidth, width, scaleToFit);
    }
    return getWordsWithoutCalculate(children);
};
var DEFAULT_FILL = '#808080';
var Text = function Text(_ref5) {
    var _ref5$x = _ref5.x, propsX = _ref5$x === void 0 ? 0 : _ref5$x, _ref5$y = _ref5.y, propsY = _ref5$y === void 0 ? 0 : _ref5$y, _ref5$lineHeight = _ref5.lineHeight, lineHeight = _ref5$lineHeight === void 0 ? '1em' : _ref5$lineHeight, _ref5$capHeight = _ref5.capHeight, capHeight = _ref5$capHeight === void 0 ? '0.71em' : _ref5$capHeight, _ref5$scaleToFit = _ref5.scaleToFit, scaleToFit = _ref5$scaleToFit === void 0 ? false : _ref5$scaleToFit, _ref5$textAnchor = _ref5.textAnchor, textAnchor = _ref5$textAnchor === void 0 ? 'start' : _ref5$textAnchor, _ref5$verticalAnchor = _ref5.verticalAnchor, verticalAnchor = _ref5$verticalAnchor === void 0 ? 'end' : _ref5$verticalAnchor, _ref5$fill = _ref5.fill, fill = _ref5$fill === void 0 ? DEFAULT_FILL : _ref5$fill, props = _objectWithoutProperties(_ref5, _excluded);
    var wordsByLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Text.useMemo[wordsByLines]": function() {
            return getWordsByLines({
                breakAll: props.breakAll,
                children: props.children,
                maxLines: props.maxLines,
                scaleToFit: scaleToFit,
                style: props.style,
                width: props.width
            });
        }
    }["Text.useMemo[wordsByLines]"], [
        props.breakAll,
        props.children,
        props.maxLines,
        scaleToFit,
        props.style,
        props.width
    ]);
    var dx = props.dx, dy = props.dy, angle = props.angle, className = props.className, breakAll = props.breakAll, textProps = _objectWithoutProperties(props, _excluded2);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(propsX) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(propsY)) {
        return null;
    }
    var x = propsX + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(dx) ? dx : 0);
    var y = propsY + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(dy) ? dy : 0);
    var startDy;
    switch(verticalAnchor){
        case 'start':
            startDy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReduceCSSCalc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceCSSCalc"])("calc(".concat(capHeight, ")"));
            break;
        case 'middle':
            startDy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReduceCSSCalc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceCSSCalc"])("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
            break;
        default:
            startDy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReduceCSSCalc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduceCSSCalc"])("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
            break;
    }
    var transforms = [];
    if (scaleToFit) {
        var lineWidth = wordsByLines[0].width;
        var width = props.width;
        transforms.push("scale(".concat(((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(width) ? width / lineWidth : 1) / lineWidth, ")"));
    }
    if (angle) {
        transforms.push("rotate(".concat(angle, ", ").concat(x, ", ").concat(y, ")"));
    }
    if (transforms.length) {
        textProps.transform = transforms.join(' ');
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("text", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(textProps, true), {
        x: x,
        y: y,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('recharts-text', className),
        textAnchor: textAnchor,
        fill: fill.includes('url') ? DEFAULT_FILL : fill
    }), wordsByLines.map(function(line, index) {
        var words = line.words.join(breakAll ? '' : ' ');
        return(/*#__PURE__*/ // duplicate words will cause duplicate keys
        // eslint-disable-next-line react/no-array-index-key
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tspan", {
            x: x,
            dy: index === 0 ? startDy : lineHeight,
            key: "".concat(words, "-").concat(index)
        }, words));
    }));
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/DefaultLegendContent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultLegendContent": (()=>DefaultLegendContent)
});
/**
 * @fileOverview Default Legend Content
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$LogUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/LogUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/container/Surface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Symbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Symbols.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/types.js [app-client] (ecmascript)");
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
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
var SIZE = 32;
var DefaultLegendContent = /*#__PURE__*/ function(_PureComponent) {
    function DefaultLegendContent() {
        _classCallCheck(this, DefaultLegendContent);
        return _callSuper(this, DefaultLegendContent, arguments);
    }
    _inherits(DefaultLegendContent, _PureComponent);
    return _createClass(DefaultLegendContent, [
        {
            key: "renderIcon",
            value: /**
     * Render the path of icon
     * @param {Object} data Data of each legend item
     * @return {String} Path element
     */ function renderIcon(data) {
                var inactiveColor = this.props.inactiveColor;
                var halfSize = SIZE / 2;
                var sixthSize = SIZE / 6;
                var thirdSize = SIZE / 3;
                var color = data.inactive ? inactiveColor : data.color;
                if (data.type === 'plainline') {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("line", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: color,
                        strokeDasharray: data.payload.strokeDasharray,
                        x1: 0,
                        y1: halfSize,
                        x2: SIZE,
                        y2: halfSize,
                        className: "recharts-legend-icon"
                    });
                }
                if (data.type === 'line') {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: color,
                        d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
                        className: "recharts-legend-icon"
                    });
                }
                if (data.type === 'rect') {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
                        stroke: "none",
                        fill: color,
                        d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
                        className: "recharts-legend-icon"
                    });
                }
                if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(data.legendIcon)) {
                    var iconProps = _objectSpread({}, data);
                    delete iconProps.legendIcon;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(data.legendIcon, iconProps);
                }
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Symbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Symbols"], {
                    fill: color,
                    cx: halfSize,
                    cy: halfSize,
                    size: SIZE,
                    sizeType: "diameter",
                    type: data.type
                });
            }
        },
        {
            key: "renderItems",
            value: function renderItems() {
                var _this = this;
                var _this$props = this.props, payload = _this$props.payload, iconSize = _this$props.iconSize, layout = _this$props.layout, formatter = _this$props.formatter, inactiveColor = _this$props.inactiveColor;
                var viewBox = {
                    x: 0,
                    y: 0,
                    width: SIZE,
                    height: SIZE
                };
                var itemStyle = {
                    display: layout === 'horizontal' ? 'inline-block' : 'block',
                    marginRight: 10
                };
                var svgStyle = {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginRight: 4
                };
                return payload.map(function(entry, i) {
                    var finalFormatter = entry.formatter || formatter;
                    var className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_defineProperty(_defineProperty({
                        'recharts-legend-item': true
                    }, "legend-item-".concat(i), true), "inactive", entry.inactive));
                    if (entry.type === 'none') {
                        return null;
                    }
                    // Do not render entry.value as functions. Always require static string properties.
                    var entryValue = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry.value) ? entry.value : null;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$LogUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry.value), "The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name=\"Name of my Data\"/>" // eslint-disable-line max-len
                    );
                    var color = entry.inactive ? inactiveColor : entry.color;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", _extends({
                        className: className,
                        style: itemStyle,
                        key: "legend-item-".concat(i)
                    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adaptEventsOfChild"])(_this.props, entry, i)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Surface"], {
                        width: iconSize,
                        height: iconSize,
                        viewBox: viewBox,
                        style: svgStyle
                    }, _this.renderIcon(entry)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                        className: "recharts-legend-item-text",
                        style: {
                            color: color
                        }
                    }, finalFormatter ? finalFormatter(entryValue, entry, i) : entryValue));
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, payload = _this$props2.payload, layout = _this$props2.layout, align = _this$props2.align;
                if (!payload || !payload.length) {
                    return null;
                }
                var finalStyle = {
                    padding: 0,
                    margin: 0,
                    textAlign: layout === 'horizontal' ? align : 'left'
                };
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
                    className: "recharts-default-legend",
                    style: finalStyle
                }, this.renderItems());
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureComponent"]);
_defineProperty(DefaultLegendContent, "displayName", 'Legend');
_defineProperty(DefaultLegendContent, "defaultProps", {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
    inactiveColor: '#ccc'
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Legend": (()=>Legend)
});
/**
 * @fileOverview Legend
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$DefaultLegendContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/DefaultLegendContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$payload$2f$getUniqPayload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/payload/getUniqPayload.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var _excluded = [
    "ref"
];
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
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
;
function defaultUniqBy(entry) {
    return entry.value;
}
function renderContent(content, props) {
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(content)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(content, props);
    }
    if (typeof content === 'function') {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(content, props);
    }
    var ref = props.ref, otherProps = _objectWithoutProperties(props, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$DefaultLegendContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultLegendContent"], otherProps);
}
var EPS = 1;
var Legend = /*#__PURE__*/ function(_PureComponent) {
    function Legend() {
        var _this;
        _classCallCheck(this, Legend);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Legend, [].concat(args));
        _defineProperty(_this, "lastBoundingBox", {
            width: -1,
            height: -1
        });
        return _this;
    }
    _inherits(Legend, _PureComponent);
    return _createClass(Legend, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.updateBBox();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.updateBBox();
            }
        },
        {
            key: "getBBox",
            value: function getBBox() {
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var box = this.wrapperNode.getBoundingClientRect();
                    box.height = this.wrapperNode.offsetHeight;
                    box.width = this.wrapperNode.offsetWidth;
                    return box;
                }
                return null;
            }
        },
        {
            key: "updateBBox",
            value: function updateBBox() {
                var onBBoxUpdate = this.props.onBBoxUpdate;
                var box = this.getBBox();
                if (box) {
                    if (Math.abs(box.width - this.lastBoundingBox.width) > EPS || Math.abs(box.height - this.lastBoundingBox.height) > EPS) {
                        this.lastBoundingBox.width = box.width;
                        this.lastBoundingBox.height = box.height;
                        if (onBBoxUpdate) {
                            onBBoxUpdate(box);
                        }
                    }
                } else if (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) {
                    this.lastBoundingBox.width = -1;
                    this.lastBoundingBox.height = -1;
                    if (onBBoxUpdate) {
                        onBBoxUpdate(null);
                    }
                }
            }
        },
        {
            key: "getBBoxSnapshot",
            value: function getBBoxSnapshot() {
                if (this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0) {
                    return _objectSpread({}, this.lastBoundingBox);
                }
                return {
                    width: 0,
                    height: 0
                };
            }
        },
        {
            key: "getDefaultPosition",
            value: function getDefaultPosition(style) {
                var _this$props = this.props, layout = _this$props.layout, align = _this$props.align, verticalAlign = _this$props.verticalAlign, margin = _this$props.margin, chartWidth = _this$props.chartWidth, chartHeight = _this$props.chartHeight;
                var hPos, vPos;
                if (!style || (style.left === undefined || style.left === null) && (style.right === undefined || style.right === null)) {
                    if (align === 'center' && layout === 'vertical') {
                        var box = this.getBBoxSnapshot();
                        hPos = {
                            left: ((chartWidth || 0) - box.width) / 2
                        };
                    } else {
                        hPos = align === 'right' ? {
                            right: margin && margin.right || 0
                        } : {
                            left: margin && margin.left || 0
                        };
                    }
                }
                if (!style || (style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null)) {
                    if (verticalAlign === 'middle') {
                        var _box = this.getBBoxSnapshot();
                        vPos = {
                            top: ((chartHeight || 0) - _box.height) / 2
                        };
                    } else {
                        vPos = verticalAlign === 'bottom' ? {
                            bottom: margin && margin.bottom || 0
                        } : {
                            top: margin && margin.top || 0
                        };
                    }
                }
                return _objectSpread(_objectSpread({}, hPos), vPos);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props2 = this.props, content = _this$props2.content, width = _this$props2.width, height = _this$props2.height, wrapperStyle = _this$props2.wrapperStyle, payloadUniqBy = _this$props2.payloadUniqBy, payload = _this$props2.payload;
                var outerStyle = _objectSpread(_objectSpread({
                    position: 'absolute',
                    width: width || 'auto',
                    height: height || 'auto'
                }, this.getDefaultPosition(wrapperStyle)), wrapperStyle);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: "recharts-legend-wrapper",
                    style: outerStyle,
                    ref: function ref(node) {
                        _this2.wrapperNode = node;
                    }
                }, renderContent(content, _objectSpread(_objectSpread({}, this.props), {}, {
                    payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$payload$2f$getUniqPayload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqPayload"])(payload, payloadUniqBy, defaultUniqBy)
                })));
            }
        }
    ], [
        {
            key: "getWithHeight",
            value: function getWithHeight(item, chartWidth) {
                var _this$defaultProps$it = _objectSpread(_objectSpread({}, this.defaultProps), item.props), layout = _this$defaultProps$it.layout;
                if (layout === 'vertical' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(item.props.height)) {
                    return {
                        height: item.props.height
                    };
                }
                if (layout === 'horizontal') {
                    return {
                        width: item.props.width || chartWidth
                    };
                }
                return null;
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureComponent"]);
_defineProperty(Legend, "displayName", 'Legend');
_defineProperty(Legend, "defaultProps", {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom'
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Label.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReactUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/PolarUtils.js [app-client] (ecmascript)");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var _excluded = [
    "offset"
];
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
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
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
var getLabel = function getLabel(props) {
    var value = props.value, formatter = props.formatter;
    var label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.children) ? value : props.children;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(formatter)) {
        return formatter(label);
    }
    return label;
};
var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
    var sign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mathSign"])(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
    return sign * deltaAngle;
};
var renderRadialLabel = function renderRadialLabel(labelProps, label, attrs) {
    var position = labelProps.position, viewBox = labelProps.viewBox, offset = labelProps.offset, className = labelProps.className;
    var _ref = viewBox, cx = _ref.cx, cy = _ref.cy, innerRadius = _ref.innerRadius, outerRadius = _ref.outerRadius, startAngle = _ref.startAngle, endAngle = _ref.endAngle, clockWise = _ref.clockWise;
    var radius = (innerRadius + outerRadius) / 2;
    var deltaAngle = getDeltaAngle(startAngle, endAngle);
    var sign = deltaAngle >= 0 ? 1 : -1;
    var labelAngle, direction;
    if (position === 'insideStart') {
        labelAngle = startAngle + sign * offset;
        direction = clockWise;
    } else if (position === 'insideEnd') {
        labelAngle = endAngle - sign * offset;
        direction = !clockWise;
    } else if (position === 'end') {
        labelAngle = endAngle + sign * offset;
        direction = clockWise;
    }
    direction = deltaAngle <= 0 ? direction : !direction;
    var startPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, labelAngle);
    var endPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
    var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
    var id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(labelProps.id) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uniqueId"])('recharts-radial-line-') : labelProps.id;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("text", _extends({}, attrs, {
        dominantBaseline: "central",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('recharts-radial-bar-label', className)
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        id: id,
        d: path
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("textPath", {
        xlinkHref: "#".concat(id)
    }, label));
};
var getAttrsOfPolarLabel = function getAttrsOfPolarLabel(props) {
    var viewBox = props.viewBox, offset = props.offset, position = props.position;
    var _ref2 = viewBox, cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
    var midAngle = (startAngle + endAngle) / 2;
    if (position === 'outside') {
        var _polarToCartesian = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, outerRadius + offset, midAngle), _x = _polarToCartesian.x, _y = _polarToCartesian.y;
        return {
            x: _x,
            y: _y,
            textAnchor: _x >= cx ? 'start' : 'end',
            verticalAnchor: 'middle'
        };
    }
    if (position === 'center') {
        return {
            x: cx,
            y: cy,
            textAnchor: 'middle',
            verticalAnchor: 'middle'
        };
    }
    if (position === 'centerTop') {
        return {
            x: cx,
            y: cy,
            textAnchor: 'middle',
            verticalAnchor: 'start'
        };
    }
    if (position === 'centerBottom') {
        return {
            x: cx,
            y: cy,
            textAnchor: 'middle',
            verticalAnchor: 'end'
        };
    }
    var r = (innerRadius + outerRadius) / 2;
    var _polarToCartesian2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, r, midAngle), x = _polarToCartesian2.x, y = _polarToCartesian2.y;
    return {
        x: x,
        y: y,
        textAnchor: 'middle',
        verticalAnchor: 'middle'
    };
};
var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel(props) {
    var viewBox = props.viewBox, parentViewBox = props.parentViewBox, offset = props.offset, position = props.position;
    var _ref3 = viewBox, x = _ref3.x, y = _ref3.y, width = _ref3.width, height = _ref3.height;
    // Define vertical offsets and position inverts based on the value being positive or negative
    var verticalSign = height >= 0 ? 1 : -1;
    var verticalOffset = verticalSign * offset;
    var verticalEnd = verticalSign > 0 ? 'end' : 'start';
    var verticalStart = verticalSign > 0 ? 'start' : 'end';
    // Define horizontal offsets and position inverts based on the value being positive or negative
    var horizontalSign = width >= 0 ? 1 : -1;
    var horizontalOffset = horizontalSign * offset;
    var horizontalEnd = horizontalSign > 0 ? 'end' : 'start';
    var horizontalStart = horizontalSign > 0 ? 'start' : 'end';
    if (position === 'top') {
        var attrs = {
            x: x + width / 2,
            y: y - verticalSign * offset,
            textAnchor: 'middle',
            verticalAnchor: verticalEnd
        };
        return _objectSpread(_objectSpread({}, attrs), parentViewBox ? {
            height: Math.max(y - parentViewBox.y, 0),
            width: width
        } : {});
    }
    if (position === 'bottom') {
        var _attrs = {
            x: x + width / 2,
            y: y + height + verticalOffset,
            textAnchor: 'middle',
            verticalAnchor: verticalStart
        };
        return _objectSpread(_objectSpread({}, _attrs), parentViewBox ? {
            height: Math.max(parentViewBox.y + parentViewBox.height - (y + height), 0),
            width: width
        } : {});
    }
    if (position === 'left') {
        var _attrs2 = {
            x: x - horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalEnd,
            verticalAnchor: 'middle'
        };
        return _objectSpread(_objectSpread({}, _attrs2), parentViewBox ? {
            width: Math.max(_attrs2.x - parentViewBox.x, 0),
            height: height
        } : {});
    }
    if (position === 'right') {
        var _attrs3 = {
            x: x + width + horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalStart,
            verticalAnchor: 'middle'
        };
        return _objectSpread(_objectSpread({}, _attrs3), parentViewBox ? {
            width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
            height: height
        } : {});
    }
    var sizeAttrs = parentViewBox ? {
        width: width,
        height: height
    } : {};
    if (position === 'insideLeft') {
        return _objectSpread({
            x: x + horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalStart,
            verticalAnchor: 'middle'
        }, sizeAttrs);
    }
    if (position === 'insideRight') {
        return _objectSpread({
            x: x + width - horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalEnd,
            verticalAnchor: 'middle'
        }, sizeAttrs);
    }
    if (position === 'insideTop') {
        return _objectSpread({
            x: x + width / 2,
            y: y + verticalOffset,
            textAnchor: 'middle',
            verticalAnchor: verticalStart
        }, sizeAttrs);
    }
    if (position === 'insideBottom') {
        return _objectSpread({
            x: x + width / 2,
            y: y + height - verticalOffset,
            textAnchor: 'middle',
            verticalAnchor: verticalEnd
        }, sizeAttrs);
    }
    if (position === 'insideTopLeft') {
        return _objectSpread({
            x: x + horizontalOffset,
            y: y + verticalOffset,
            textAnchor: horizontalStart,
            verticalAnchor: verticalStart
        }, sizeAttrs);
    }
    if (position === 'insideTopRight') {
        return _objectSpread({
            x: x + width - horizontalOffset,
            y: y + verticalOffset,
            textAnchor: horizontalEnd,
            verticalAnchor: verticalStart
        }, sizeAttrs);
    }
    if (position === 'insideBottomLeft') {
        return _objectSpread({
            x: x + horizontalOffset,
            y: y + height - verticalOffset,
            textAnchor: horizontalStart,
            verticalAnchor: verticalEnd
        }, sizeAttrs);
    }
    if (position === 'insideBottomRight') {
        return _objectSpread({
            x: x + width - horizontalOffset,
            y: y + height - verticalOffset,
            textAnchor: horizontalEnd,
            verticalAnchor: verticalEnd
        }, sizeAttrs);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(position) && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(position.x) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPercent"])(position.x)) && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(position.y) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPercent"])(position.y))) {
        return _objectSpread({
            x: x + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(position.x, width),
            y: y + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPercentValue"])(position.y, height),
            textAnchor: 'end',
            verticalAnchor: 'end'
        }, sizeAttrs);
    }
    return _objectSpread({
        x: x + width / 2,
        y: y + height / 2,
        textAnchor: 'middle',
        verticalAnchor: 'middle'
    }, sizeAttrs);
};
var isPolar = function isPolar(viewBox) {
    return 'cx' in viewBox && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(viewBox.cx);
};
function Label(_ref4) {
    var _ref4$offset = _ref4.offset, offset = _ref4$offset === void 0 ? 5 : _ref4$offset, restProps = _objectWithoutProperties(_ref4, _excluded);
    var props = _objectSpread({
        offset: offset
    }, restProps);
    var viewBox = props.viewBox, position = props.position, value = props.value, children = props.children, content = props.content, _props$className = props.className, className = _props$className === void 0 ? '' : _props$className, textBreakAll = props.textBreakAll;
    if (!viewBox || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children) && !/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(content) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(content)) {
        return null;
    }
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(content)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(content, props);
    }
    var label;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(content)) {
        label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(content, props);
        if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(label)) {
            return label;
        }
    } else {
        label = getLabel(props);
    }
    var isPolarLabel = isPolar(viewBox);
    var attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(props, true);
    if (isPolarLabel && (position === 'insideStart' || position === 'insideEnd' || position === 'end')) {
        return renderRadialLabel(props, label, attrs);
    }
    var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], _extends({
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('recharts-label', className)
    }, attrs, positionAttrs, {
        breakAll: textBreakAll
    }), label);
}
Label.displayName = 'Label';
var parseViewBox = function parseViewBox(props) {
    var cx = props.cx, cy = props.cy, angle = props.angle, startAngle = props.startAngle, endAngle = props.endAngle, r = props.r, radius = props.radius, innerRadius = props.innerRadius, outerRadius = props.outerRadius, x = props.x, y = props.y, top = props.top, left = props.left, width = props.width, height = props.height, clockWise = props.clockWise, labelViewBox = props.labelViewBox;
    if (labelViewBox) {
        return labelViewBox;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(width) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(height)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(x) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(y)) {
            return {
                x: x,
                y: y,
                width: width,
                height: height
            };
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(top) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(left)) {
            return {
                x: top,
                y: left,
                width: width,
                height: height
            };
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(x) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(y)) {
        return {
            x: x,
            y: y,
            width: 0,
            height: 0
        };
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(cx) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(cy)) {
        return {
            cx: cx,
            cy: cy,
            startAngle: startAngle || angle || 0,
            endAngle: endAngle || angle || 0,
            innerRadius: innerRadius || 0,
            outerRadius: outerRadius || radius || r || 0,
            clockWise: clockWise
        };
    }
    if (props.viewBox) {
        return props.viewBox;
    }
    return {};
};
var parseLabel = function parseLabel(label, viewBox) {
    if (!label) {
        return null;
    }
    if (label === true) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Label, {
            key: "label-implicit",
            viewBox: viewBox
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(label)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Label, {
            key: "label-implicit",
            viewBox: viewBox,
            value: label
        });
    }
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(label)) {
        if (label.type === Label) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(label, {
                key: 'label-implicit',
                viewBox: viewBox
            });
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Label, {
            key: "label-implicit",
            content: label,
            viewBox: viewBox
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(label)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Label, {
            key: "label-implicit",
            content: label,
            viewBox: viewBox
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(label)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Label, _extends({
            viewBox: viewBox
        }, label, {
            key: "label-implicit"
        }));
    }
    return null;
};
var renderCallByParent = function renderCallByParent(parentProps, viewBox) {
    var checkPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
        return null;
    }
    var children = parentProps.children;
    var parentViewBox = parseViewBox(parentProps);
    var explicitChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAllByType"])(children, Label).map(function(child, index) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            viewBox: viewBox || parentViewBox,
            // eslint-disable-next-line react/no-array-index-key
            key: "label-".concat(index)
        });
    });
    if (!checkPropsLabel) {
        return explicitChildren;
    }
    var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
    return [
        implicitLabel
    ].concat(_toConsumableArray(explicitChildren));
};
Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LabelList": (()=>LabelList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/last.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/container/Layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ReactUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/ChartUtils.js [app-client] (ecmascript) <locals>");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
var _excluded = [
    "valueAccessor"
], _excluded2 = [
    "data",
    "dataKey",
    "clockWise",
    "id",
    "textBreakAll"
];
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
;
;
;
;
;
;
var defaultAccessor = function defaultAccessor(entry) {
    return Array.isArray(entry.value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$last$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(entry.value) : entry.value;
};
function LabelList(_ref) {
    var _ref$valueAccessor = _ref.valueAccessor, valueAccessor = _ref$valueAccessor === void 0 ? defaultAccessor : _ref$valueAccessor, restProps = _objectWithoutProperties(_ref, _excluded);
    var data = restProps.data, dataKey = restProps.dataKey, clockWise = restProps.clockWise, id = restProps.id, textBreakAll = restProps.textBreakAll, others = _objectWithoutProperties(restProps, _excluded2);
    if (!data || !data.length) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
        className: "recharts-label-list"
    }, data.map(function(entry, index) {
        var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dataKey) ? valueAccessor(entry, index) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getValueByDataKey"])(entry && entry.payload, dataKey);
        var idProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(id) ? {} : {
            id: "".concat(id, "-").concat(index)
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(entry, true), others, idProps, {
            parentViewBox: entry.parentViewBox,
            value: value,
            textBreakAll: textBreakAll,
            viewBox: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].parseViewBox((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clockWise) ? entry : _objectSpread(_objectSpread({}, entry), {}, {
                clockWise: clockWise
            })),
            key: "label-".concat(index) // eslint-disable-line react/no-array-index-key
            ,
            index: index
        }));
    }));
}
LabelList.displayName = 'LabelList';
function parseLabelList(label, data) {
    if (!label) {
        return null;
    }
    if (label === true) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(LabelList, {
            key: "labelList-implicit",
            data: data
        });
    }
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(label) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(label)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(LabelList, {
            key: "labelList-implicit",
            data: data,
            content: label
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(label)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(LabelList, _extends({
            data: data
        }, label, {
            key: "labelList-implicit"
        }));
    }
    return null;
}
function renderCallByParent(parentProps, data) {
    var checkPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
        return null;
    }
    var children = parentProps.children;
    var explicitChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findAllByType"])(children, LabelList).map(function(child, index) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            data: data,
            // eslint-disable-next-line react/no-array-index-key
            key: "labelList-".concat(index)
        });
    });
    if (!checkPropsLabel) {
        return explicitChildren;
    }
    var implicitLabelList = parseLabelList(parentProps.label, data);
    return [
        implicitLabelList
    ].concat(_toConsumableArray(explicitChildren));
}
LabelList.renderCallByParent = renderCallByParent;
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/DefaultTooltipContent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DefaultTooltipContent": (()=>DefaultTooltipContent)
});
/**
 * @fileOverview Default Tooltip Content
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$sortBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/sortBy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js [app-client] (ecmascript)");
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
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
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
function defaultFormatter(value) {
    return Array.isArray(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(value[0]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(value[1]) ? value.join(' ~ ') : value;
}
var DefaultTooltipContent = function DefaultTooltipContent(props) {
    var _props$separator = props.separator, separator = _props$separator === void 0 ? ' : ' : _props$separator, _props$contentStyle = props.contentStyle, contentStyle = _props$contentStyle === void 0 ? {} : _props$contentStyle, _props$itemStyle = props.itemStyle, itemStyle = _props$itemStyle === void 0 ? {} : _props$itemStyle, _props$labelStyle = props.labelStyle, labelStyle = _props$labelStyle === void 0 ? {} : _props$labelStyle, payload = props.payload, formatter = props.formatter, itemSorter = props.itemSorter, wrapperClassName = props.wrapperClassName, labelClassName = props.labelClassName, label = props.label, labelFormatter = props.labelFormatter, _props$accessibilityL = props.accessibilityLayer, accessibilityLayer = _props$accessibilityL === void 0 ? false : _props$accessibilityL;
    var renderContent = function renderContent() {
        if (payload && payload.length) {
            var listStyle = {
                padding: 0,
                margin: 0
            };
            var items = (itemSorter ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$sortBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(payload, itemSorter) : payload).map(function(entry, i) {
                if (entry.type === 'none') {
                    return null;
                }
                var finalItemStyle = _objectSpread({
                    display: 'block',
                    paddingTop: 4,
                    paddingBottom: 4,
                    color: entry.color || '#000'
                }, itemStyle);
                var finalFormatter = entry.formatter || formatter || defaultFormatter;
                var value = entry.value, name = entry.name;
                var finalValue = value;
                var finalName = name;
                if (finalFormatter && finalValue != null && finalName != null) {
                    var formatted = finalFormatter(value, name, entry, i, payload);
                    if (Array.isArray(formatted)) {
                        var _formatted = _slicedToArray(formatted, 2);
                        finalValue = _formatted[0];
                        finalName = _formatted[1];
                    } else {
                        finalValue = formatted;
                    }
                }
                return(/*#__PURE__*/ // eslint-disable-next-line react/no-array-index-key
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
                    className: "recharts-tooltip-item",
                    key: "tooltip-item-".concat(i),
                    style: finalItemStyle
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(finalName) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "recharts-tooltip-item-name"
                }, finalName) : null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumOrStr"])(finalName) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "recharts-tooltip-item-separator"
                }, separator) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "recharts-tooltip-item-value"
                }, finalValue), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "recharts-tooltip-item-unit"
                }, entry.unit || '')));
            });
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
                className: "recharts-tooltip-item-list",
                style: listStyle
            }, items);
        }
        return null;
    };
    var finalStyle = _objectSpread({
        margin: 0,
        padding: 10,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        whiteSpace: 'nowrap'
    }, contentStyle);
    var finalLabelStyle = _objectSpread({
        margin: 0
    }, labelStyle);
    var hasLabel = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(label);
    var finalLabel = hasLabel ? label : '';
    var wrapperCN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('recharts-default-tooltip', wrapperClassName);
    var labelCN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('recharts-tooltip-label', labelClassName);
    if (hasLabel && labelFormatter && payload !== undefined && payload !== null) {
        finalLabel = labelFormatter(label, payload);
    }
    var accessibilityAttributes = accessibilityLayer ? {
        role: 'status',
        'aria-live': 'assertive'
    } : {};
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", _extends({
        className: wrapperCN,
        style: finalStyle
    }, accessibilityAttributes), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("p", {
        className: labelCN,
        style: finalLabelStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), renderContent());
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/TooltipBoundingBox.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TooltipBoundingBox": (()=>TooltipBoundingBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$tooltip$2f$translate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/tooltip/translate.js [app-client] (ecmascript)");
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
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
var EPSILON = 1;
var TooltipBoundingBox = /*#__PURE__*/ function(_PureComponent) {
    function TooltipBoundingBox() {
        var _this;
        _classCallCheck(this, TooltipBoundingBox);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, TooltipBoundingBox, [].concat(args));
        _defineProperty(_this, "state", {
            dismissed: false,
            dismissedAtCoordinate: {
                x: 0,
                y: 0
            },
            lastBoundingBox: {
                width: -1,
                height: -1
            }
        });
        _defineProperty(_this, "handleKeyDown", function(event) {
            if (event.key === 'Escape') {
                var _this$props$coordinat, _this$props$coordinat2, _this$props$coordinat3, _this$props$coordinat4;
                _this.setState({
                    dismissed: true,
                    dismissedAtCoordinate: {
                        x: (_this$props$coordinat = (_this$props$coordinat2 = _this.props.coordinate) === null || _this$props$coordinat2 === void 0 ? void 0 : _this$props$coordinat2.x) !== null && _this$props$coordinat !== void 0 ? _this$props$coordinat : 0,
                        y: (_this$props$coordinat3 = (_this$props$coordinat4 = _this.props.coordinate) === null || _this$props$coordinat4 === void 0 ? void 0 : _this$props$coordinat4.y) !== null && _this$props$coordinat3 !== void 0 ? _this$props$coordinat3 : 0
                    }
                });
            }
        });
        return _this;
    }
    _inherits(TooltipBoundingBox, _PureComponent);
    return _createClass(TooltipBoundingBox, [
        {
            key: "updateBBox",
            value: function updateBBox() {
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var box = this.wrapperNode.getBoundingClientRect();
                    if (Math.abs(box.width - this.state.lastBoundingBox.width) > EPSILON || Math.abs(box.height - this.state.lastBoundingBox.height) > EPSILON) {
                        this.setState({
                            lastBoundingBox: {
                                width: box.width,
                                height: box.height
                            }
                        });
                    }
                } else if (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) {
                    this.setState({
                        lastBoundingBox: {
                            width: -1,
                            height: -1
                        }
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                document.addEventListener('keydown', this.handleKeyDown);
                this.updateBBox();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                document.removeEventListener('keydown', this.handleKeyDown);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var _this$props$coordinat5, _this$props$coordinat6;
                if (this.props.active) {
                    this.updateBBox();
                }
                if (!this.state.dismissed) {
                    return;
                }
                if (((_this$props$coordinat5 = this.props.coordinate) === null || _this$props$coordinat5 === void 0 ? void 0 : _this$props$coordinat5.x) !== this.state.dismissedAtCoordinate.x || ((_this$props$coordinat6 = this.props.coordinate) === null || _this$props$coordinat6 === void 0 ? void 0 : _this$props$coordinat6.y) !== this.state.dismissedAtCoordinate.y) {
                    this.state.dismissed = false;
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, active = _this$props.active, allowEscapeViewBox = _this$props.allowEscapeViewBox, animationDuration = _this$props.animationDuration, animationEasing = _this$props.animationEasing, children = _this$props.children, coordinate = _this$props.coordinate, hasPayload = _this$props.hasPayload, isAnimationActive = _this$props.isAnimationActive, offset = _this$props.offset, position = _this$props.position, reverseDirection = _this$props.reverseDirection, useTranslate3d = _this$props.useTranslate3d, viewBox = _this$props.viewBox, wrapperStyle = _this$props.wrapperStyle;
                var _getTooltipTranslate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$tooltip$2f$translate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTooltipTranslate"])({
                    allowEscapeViewBox: allowEscapeViewBox,
                    coordinate: coordinate,
                    offsetTopLeft: offset,
                    position: position,
                    reverseDirection: reverseDirection,
                    tooltipBox: this.state.lastBoundingBox,
                    useTranslate3d: useTranslate3d,
                    viewBox: viewBox
                }), cssClasses = _getTooltipTranslate.cssClasses, cssProperties = _getTooltipTranslate.cssProperties;
                var outerStyle = _objectSpread(_objectSpread({
                    transition: isAnimationActive && active ? "transform ".concat(animationDuration, "ms ").concat(animationEasing) : undefined
                }, cssProperties), {}, {
                    pointerEvents: 'none',
                    visibility: !this.state.dismissed && active && hasPayload ? 'visible' : 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }, wrapperStyle);
                return(/*#__PURE__*/ // This element allow listening to the `Escape` key.
                // See https://github.com/recharts/recharts/pull/2925
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    tabIndex: -1,
                    className: cssClasses,
                    style: outerStyle,
                    ref: function ref(node) {
                        _this2.wrapperNode = node;
                    }
                }, children));
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureComponent"]);
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip)
});
/**
 * @fileOverview Tooltip
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$DefaultTooltipContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/DefaultTooltipContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$TooltipBoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/TooltipBoundingBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/Global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$payload$2f$getUniqPayload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/payload/getUniqPayload.js [app-client] (ecmascript)");
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
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
function defaultUniqBy(entry) {
    return entry.dataKey;
}
function renderContent(content, props) {
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(content)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(content, props);
    }
    if (typeof content === 'function') {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(content, props);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$DefaultTooltipContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultTooltipContent"], props);
}
var Tooltip = /*#__PURE__*/ function(_PureComponent) {
    function Tooltip() {
        _classCallCheck(this, Tooltip);
        return _callSuper(this, Tooltip, arguments);
    }
    _inherits(Tooltip, _PureComponent);
    return _createClass(Tooltip, [
        {
            key: "render",
            value: function render() {
                var _this = this;
                var _this$props = this.props, active = _this$props.active, allowEscapeViewBox = _this$props.allowEscapeViewBox, animationDuration = _this$props.animationDuration, animationEasing = _this$props.animationEasing, content = _this$props.content, coordinate = _this$props.coordinate, filterNull = _this$props.filterNull, isAnimationActive = _this$props.isAnimationActive, offset = _this$props.offset, payload = _this$props.payload, payloadUniqBy = _this$props.payloadUniqBy, position = _this$props.position, reverseDirection = _this$props.reverseDirection, useTranslate3d = _this$props.useTranslate3d, viewBox = _this$props.viewBox, wrapperStyle = _this$props.wrapperStyle;
                var finalPayload = payload !== null && payload !== void 0 ? payload : [];
                if (filterNull && finalPayload.length) {
                    finalPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$payload$2f$getUniqPayload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqPayload"])(payload.filter(function(entry) {
                        return entry.value != null && (entry.hide !== true || _this.props.includeHidden);
                    }), payloadUniqBy, defaultUniqBy);
                }
                var hasPayload = finalPayload.length > 0;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$TooltipBoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipBoundingBox"], {
                    allowEscapeViewBox: allowEscapeViewBox,
                    animationDuration: animationDuration,
                    animationEasing: animationEasing,
                    isAnimationActive: isAnimationActive,
                    active: active,
                    coordinate: coordinate,
                    hasPayload: hasPayload,
                    offset: offset,
                    position: position,
                    reverseDirection: reverseDirection,
                    useTranslate3d: useTranslate3d,
                    viewBox: viewBox,
                    wrapperStyle: wrapperStyle
                }, renderContent(content, _objectSpread(_objectSpread({}, this.props), {}, {
                    payload: finalPayload
                })));
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureComponent"]);
_defineProperty(Tooltip, "displayName", 'Tooltip');
_defineProperty(Tooltip, "defaultProps", {
    accessibilityLayer: false,
    allowEscapeViewBox: {
        x: false,
        y: false
    },
    animationDuration: 400,
    animationEasing: 'ease',
    contentStyle: {},
    coordinate: {
        x: 0,
        y: 0
    },
    cursor: true,
    cursorStyle: {},
    filterNull: true,
    isAnimationActive: !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Global"].isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
        x: false,
        y: false
    },
    separator: ' : ',
    trigger: 'hover',
    useTranslate3d: false,
    viewBox: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
    },
    wrapperStyle: {}
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @fileOverview Cross
 */ __turbopack_context__.s({
    "Cell": (()=>Cell)
});
var Cell = function Cell(_props) {
    return null;
};
Cell.displayName = 'Cell';
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/Cursor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Cursor": (()=>Cursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Cross$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Cross.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$cursor$2f$getCursorRectangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/cursor/getCursorRectangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Rectangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$cursor$2f$getRadialCursorPoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/cursor/getRadialCursorPoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/shape/Sector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$cursor$2f$getCursorPoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/cursor/getCursorPoints.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
function Cursor(props) {
    var _element$props$cursor, _defaultProps;
    var element = props.element, tooltipEventType = props.tooltipEventType, isActive = props.isActive, activeCoordinate = props.activeCoordinate, activePayload = props.activePayload, offset = props.offset, activeTooltipIndex = props.activeTooltipIndex, tooltipAxisBandSize = props.tooltipAxisBandSize, layout = props.layout, chartName = props.chartName;
    var elementPropsCursor = (_element$props$cursor = element.props.cursor) !== null && _element$props$cursor !== void 0 ? _element$props$cursor : (_defaultProps = element.type.defaultProps) === null || _defaultProps === void 0 ? void 0 : _defaultProps.cursor;
    if (!element || !elementPropsCursor || !isActive || !activeCoordinate || chartName !== 'ScatterChart' && tooltipEventType !== 'axis') {
        return null;
    }
    var restProps;
    var cursorComp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Curve"];
    if (chartName === 'ScatterChart') {
        restProps = activeCoordinate;
        cursorComp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Cross$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cross"];
    } else if (chartName === 'BarChart') {
        restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$cursor$2f$getCursorRectangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCursorRectangle"])(layout, activeCoordinate, offset, tooltipAxisBandSize);
        cursorComp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rectangle"];
    } else if (layout === 'radial') {
        var _getRadialCursorPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$cursor$2f$getRadialCursorPoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadialCursorPoints"])(activeCoordinate), cx = _getRadialCursorPoint.cx, cy = _getRadialCursorPoint.cy, radius = _getRadialCursorPoint.radius, startAngle = _getRadialCursorPoint.startAngle, endAngle = _getRadialCursorPoint.endAngle;
        restProps = {
            cx: cx,
            cy: cy,
            startAngle: startAngle,
            endAngle: endAngle,
            innerRadius: radius,
            outerRadius: radius
        };
        cursorComp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sector"];
    } else {
        restProps = {
            points: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$cursor$2f$getCursorPoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCursorPoints"])(layout, activeCoordinate, offset)
        };
        cursorComp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Curve"];
    }
    var cursorProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
        stroke: '#ccc',
        pointerEvents: 'none'
    }, offset), restProps), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(elementPropsCursor, false)), {}, {
        payload: activePayload,
        payloadIndex: activeTooltipIndex,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('recharts-tooltip-cursor', elementPropsCursor.className)
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(elementPropsCursor) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(elementPropsCursor, cursorProps) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(cursorComp, cursorProps);
}
}}),
"[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ResponsiveContainer": (()=>ResponsiveContainer)
});
/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/DataUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$LogUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/recharts@2.15.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/recharts/es6/util/LogUtils.js [app-client] (ecmascript)");
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
;
var ResponsiveContainer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var aspect = _ref.aspect, _ref$initialDimension = _ref.initialDimension, initialDimension = _ref$initialDimension === void 0 ? {
        width: -1,
        height: -1
    } : _ref$initialDimension, _ref$width = _ref.width, width = _ref$width === void 0 ? '100%' : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? '100%' : _ref$height, _ref$minWidth = _ref.minWidth, minWidth = _ref$minWidth === void 0 ? 0 : _ref$minWidth, minHeight = _ref.minHeight, maxHeight = _ref.maxHeight, children = _ref.children, _ref$debounce = _ref.debounce, debounce = _ref$debounce === void 0 ? 0 : _ref$debounce, id = _ref.id, className = _ref.className, onResize = _ref.onResize, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var onResizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    onResizeRef.current = onResize;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "ResponsiveContainer.useImperativeHandle": function() {
            return Object.defineProperty(containerRef.current, 'current', {
                get: function get() {
                    // eslint-disable-next-line no-console
                    console.warn('The usage of ref.current.current is deprecated and will no longer be supported.');
                    return containerRef.current;
                },
                configurable: true
            });
        }
    }["ResponsiveContainer.useImperativeHandle"]);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        containerWidth: initialDimension.width,
        containerHeight: initialDimension.height
    }), _useState2 = _slicedToArray(_useState, 2), sizes = _useState2[0], setSizes = _useState2[1];
    var setContainerSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResponsiveContainer.useCallback[setContainerSize]": function(newWidth, newHeight) {
            setSizes({
                "ResponsiveContainer.useCallback[setContainerSize]": function(prevState) {
                    var roundedWidth = Math.round(newWidth);
                    var roundedHeight = Math.round(newHeight);
                    if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) {
                        return prevState;
                    }
                    return {
                        containerWidth: roundedWidth,
                        containerHeight: roundedHeight
                    };
                }
            }["ResponsiveContainer.useCallback[setContainerSize]"]);
        }
    }["ResponsiveContainer.useCallback[setContainerSize]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResponsiveContainer.useEffect": function() {
            var callback = function callback(entries) {
                var _onResizeRef$current;
                var _entries$0$contentRec = entries[0].contentRect, containerWidth = _entries$0$contentRec.width, containerHeight = _entries$0$contentRec.height;
                setContainerSize(containerWidth, containerHeight);
                (_onResizeRef$current = onResizeRef.current) === null || _onResizeRef$current === void 0 || _onResizeRef$current.call(onResizeRef, containerWidth, containerHeight);
            };
            if (debounce > 0) {
                callback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(callback, debounce, {
                    trailing: true,
                    leading: false
                });
            }
            var observer = new ResizeObserver(callback);
            var _containerRef$current = containerRef.current.getBoundingClientRect(), containerWidth = _containerRef$current.width, containerHeight = _containerRef$current.height;
            setContainerSize(containerWidth, containerHeight);
            observer.observe(containerRef.current);
            return ({
                "ResponsiveContainer.useEffect": function() {
                    observer.disconnect();
                }
            })["ResponsiveContainer.useEffect"];
        }
    }["ResponsiveContainer.useEffect"], [
        setContainerSize,
        debounce
    ]);
    var chartContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ResponsiveContainer.useMemo[chartContent]": function() {
            var containerWidth = sizes.containerWidth, containerHeight = sizes.containerHeight;
            if (containerWidth < 0 || containerHeight < 0) {
                return null;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$LogUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPercent"])(width) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPercent"])(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$LogUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);
            var calculatedWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPercent"])(width) ? containerWidth : width;
            var calculatedHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPercent"])(height) ? containerHeight : height;
            if (aspect && aspect > 0) {
                // Preserve the desired aspect ratio
                if (calculatedWidth) {
                    // Will default to using width for aspect ratio
                    calculatedHeight = calculatedWidth / aspect;
                } else if (calculatedHeight) {
                    // But we should also take height into consideration
                    calculatedWidth = calculatedHeight * aspect;
                }
                // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
                if (maxHeight && calculatedHeight > maxHeight) {
                    calculatedHeight = maxHeight;
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$LogUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
            var isCharts = !Array.isArray(children) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisplayName"])(children.type).endsWith('Chart');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, {
                "ResponsiveContainer.useMemo[chartContent]": function(child) {
                    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, _objectSpread({
                            width: calculatedWidth,
                            height: calculatedHeight
                        }, isCharts ? {
                            style: _objectSpread({
                                height: '100%',
                                width: '100%',
                                maxHeight: calculatedHeight,
                                maxWidth: calculatedWidth
                            }, child.props.style)
                        } : {}));
                    }
                    return child;
                }
            }["ResponsiveContainer.useMemo[chartContent]"]);
        }
    }["ResponsiveContainer.useMemo[chartContent]"], [
        aspect,
        children,
        height,
        maxHeight,
        minHeight,
        minWidth,
        sizes,
        width
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: id ? "".concat(id) : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('recharts-responsive-container', className),
        style: _objectSpread(_objectSpread({}, style), {}, {
            width: width,
            height: height,
            minWidth: minWidth,
            minHeight: minHeight,
            maxHeight: maxHeight
        }),
        ref: containerRef
    }, chartContent);
});
}}),
}]);

//# sourceMappingURL=29176_recharts_es6_component_c7de1183._.js.map