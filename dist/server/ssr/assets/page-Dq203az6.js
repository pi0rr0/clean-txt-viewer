import { a as require_react, o as __commonJSMin, s as __toESM, t as require_jsx_runtime } from "../index.js";
//#region node_modules/.pnpm/dompurify@3.4.12/node_modules/dompurify/dist/purify.es.mjs
/*! @license DOMPurify 3.4.12 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.12/LICENSE */
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i, u, a = [], f = true, o = false;
		try {
			if (i = (t = t.call(r)).next, 0 === l);
			else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
		} catch (r) {
			o = true, n = r;
		} finally {
			try {
				if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
			} finally {
				if (o) throw n;
			}
		}
		return a;
	}
}
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
var entries = Object.entries, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze, seal = Object.seal, create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
if (!freeze) freeze = function freeze(x) {
	return x;
};
if (!seal) seal = function seal(x) {
	return x;
};
if (!apply) apply = function apply(func, thisArg) {
	for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
	return func.apply(thisArg, args);
};
if (!construct) construct = function construct(Func) {
	for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
	return new Func(...args);
};
var arrayForEach = unapply(Array.prototype.forEach);
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var arraySplice = unapply(Array.prototype.splice);
var arrayIsArray = Array.isArray;
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var numberToString = unapply(Number.prototype.toString);
var booleanToString = unapply(Boolean.prototype.toString);
var bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
var symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var objectToString = unapply(Object.prototype.toString);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
/**
* Creates a new function that calls the given function with a specified thisArg and arguments.
*
* @param func - The function to be wrapped and called.
* @returns A new function that calls the given function with a specified thisArg and arguments.
*/
function unapply(func) {
	return function(thisArg) {
		if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
		for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
		return apply(func, thisArg, args);
	};
}
/**
* Creates a new function that constructs an instance of the given constructor function with the provided arguments.
*
* @param func - The constructor function to be wrapped and called.
* @returns A new function that constructs an instance of the given constructor function with the provided arguments.
*/
function unconstruct(Func) {
	return function() {
		for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
		return construct(Func, args);
	};
}
/**
* Add properties to a lookup table
*
* @param set - The set to which elements will be added.
* @param array - The array containing elements to be added to the set.
* @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
* @returns The modified set with added elements.
*/
function addToSet(set, array) {
	let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
	if (setPrototypeOf) setPrototypeOf(set, null);
	if (!arrayIsArray(array)) return set;
	let l = array.length;
	while (l--) {
		let element = array[l];
		if (typeof element === "string") {
			const lcElement = transformCaseFunc(element);
			if (lcElement !== element) {
				if (!isFrozen(array)) array[l] = lcElement;
				element = lcElement;
			}
		}
		set[element] = true;
	}
	return set;
}
/**
* Clean up an array to harden against CSPP
*
* @param array - The array to be cleaned.
* @returns The cleaned version of the array
*/
function cleanArray(array) {
	for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
	return array;
}
/**
* Shallow clone an object
*
* @param object - The object to be cloned.
* @returns A new object that copies the original.
*/
function clone(object) {
	const newObject = create(null);
	for (const _ref2 of entries(object)) {
		var _ref3 = _slicedToArray(_ref2, 2);
		const property = _ref3[0];
		const value = _ref3[1];
		if (objectHasOwnProperty(object, property)) if (arrayIsArray(value)) newObject[property] = cleanArray(value);
		else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
		else newObject[property] = value;
	}
	return newObject;
}
/**
* Convert non-node values into strings without depending on direct property access.
*
* @param value - The value to stringify.
* @returns A string representation of the provided value.
*/
function stringifyValue(value) {
	switch (typeof value) {
		case "string": return value;
		case "number": return numberToString(value);
		case "boolean": return booleanToString(value);
		case "bigint": return bigintToString ? bigintToString(value) : "0";
		case "symbol": return symbolToString ? symbolToString(value) : "Symbol()";
		case "undefined": return objectToString(value);
		case "function":
		case "object": {
			if (value === null) return objectToString(value);
			const valueAsRecord = value;
			const valueToString = lookupGetter(valueAsRecord, "toString");
			if (typeof valueToString === "function") {
				const stringified = valueToString(valueAsRecord);
				return typeof stringified === "string" ? stringified : objectToString(stringified);
			}
			return objectToString(value);
		}
		default: return objectToString(value);
	}
}
/**
* This method automatically checks if the prop is function or getter and behaves accordingly.
*
* @param object - The object to look up the getter function in its prototype chain.
* @param prop - The property name for which to find the getter function.
* @returns The getter function found in the prototype chain or a fallback function.
*/
function lookupGetter(object, prop) {
	while (object !== null) {
		const desc = getOwnPropertyDescriptor(object, prop);
		if (desc) {
			if (desc.get) return unapply(desc.get);
			if (typeof desc.value === "function") return unapply(desc.value);
		}
		object = getPrototypeOf(object);
	}
	function fallbackValue() {
		return null;
	}
	return fallbackValue;
}
function isRegex(value) {
	try {
		regExpTest(value, "");
		return true;
	} catch (_unused) {
		return false;
	}
}
var html$1 = freeze([
	"a",
	"abbr",
	"acronym",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"bdi",
	"bdo",
	"big",
	"blink",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"center",
	"cite",
	"code",
	"col",
	"colgroup",
	"content",
	"data",
	"datalist",
	"dd",
	"decorator",
	"del",
	"details",
	"dfn",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"element",
	"em",
	"fieldset",
	"figcaption",
	"figure",
	"font",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"main",
	"map",
	"mark",
	"marquee",
	"menu",
	"menuitem",
	"meter",
	"nav",
	"nobr",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"search",
	"section",
	"select",
	"shadow",
	"slot",
	"small",
	"source",
	"spacer",
	"span",
	"strike",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"tr",
	"track",
	"tt",
	"u",
	"ul",
	"var",
	"video",
	"wbr"
]);
var svg$1 = freeze([
	"svg",
	"a",
	"altglyph",
	"altglyphdef",
	"altglyphitem",
	"animatecolor",
	"animatemotion",
	"animatetransform",
	"circle",
	"clippath",
	"defs",
	"desc",
	"ellipse",
	"enterkeyhint",
	"exportparts",
	"filter",
	"font",
	"g",
	"glyph",
	"glyphref",
	"hkern",
	"image",
	"inputmode",
	"line",
	"lineargradient",
	"marker",
	"mask",
	"metadata",
	"mpath",
	"part",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialgradient",
	"rect",
	"stop",
	"style",
	"switch",
	"symbol",
	"text",
	"textpath",
	"title",
	"tref",
	"tspan",
	"view",
	"vkern"
]);
var svgFilters = freeze([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]);
var svgDisallowed = freeze([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]);
var mathMl$1 = freeze([
	"math",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mglyph",
	"mi",
	"mlabeledtr",
	"mmultiscripts",
	"mn",
	"mo",
	"mover",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"ms",
	"mspace",
	"msqrt",
	"mstyle",
	"msub",
	"msup",
	"msubsup",
	"mtable",
	"mtd",
	"mtext",
	"mtr",
	"munder",
	"munderover",
	"mprescripts"
]);
var mathMlDisallowed = freeze([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]);
var text = freeze(["#text"]);
var html = freeze([
	"accept",
	"action",
	"align",
	"alt",
	"autocapitalize",
	"autocomplete",
	"autopictureinpicture",
	"autoplay",
	"background",
	"bgcolor",
	"border",
	"capture",
	"cellpadding",
	"cellspacing",
	"checked",
	"cite",
	"class",
	"clear",
	"color",
	"cols",
	"colspan",
	"command",
	"commandfor",
	"controls",
	"controlslist",
	"coords",
	"crossorigin",
	"datetime",
	"decoding",
	"default",
	"dir",
	"disabled",
	"disablepictureinpicture",
	"disableremoteplayback",
	"download",
	"draggable",
	"enctype",
	"enterkeyhint",
	"exportparts",
	"face",
	"for",
	"headers",
	"height",
	"hidden",
	"high",
	"href",
	"hreflang",
	"id",
	"inert",
	"inputmode",
	"integrity",
	"ismap",
	"kind",
	"label",
	"lang",
	"list",
	"loading",
	"loop",
	"low",
	"max",
	"maxlength",
	"media",
	"method",
	"min",
	"minlength",
	"multiple",
	"muted",
	"name",
	"nonce",
	"noshade",
	"novalidate",
	"nowrap",
	"open",
	"optimum",
	"part",
	"pattern",
	"placeholder",
	"playsinline",
	"popover",
	"popovertarget",
	"popovertargetaction",
	"poster",
	"preload",
	"pubdate",
	"radiogroup",
	"readonly",
	"rel",
	"required",
	"rev",
	"reversed",
	"role",
	"rows",
	"rowspan",
	"spellcheck",
	"scope",
	"selected",
	"shape",
	"size",
	"sizes",
	"slot",
	"span",
	"srclang",
	"start",
	"src",
	"srcset",
	"step",
	"style",
	"summary",
	"tabindex",
	"title",
	"translate",
	"type",
	"usemap",
	"valign",
	"value",
	"width",
	"wrap",
	"xmlns"
]);
var svg = freeze([
	"accent-height",
	"accumulate",
	"additive",
	"alignment-baseline",
	"amplitude",
	"ascent",
	"attributename",
	"attributetype",
	"azimuth",
	"basefrequency",
	"baseline-shift",
	"begin",
	"bias",
	"by",
	"class",
	"clip",
	"clippathunits",
	"clip-path",
	"clip-rule",
	"color",
	"color-interpolation",
	"color-interpolation-filters",
	"color-profile",
	"color-rendering",
	"cx",
	"cy",
	"d",
	"dx",
	"dy",
	"diffuseconstant",
	"direction",
	"display",
	"divisor",
	"dominant-baseline",
	"dur",
	"edgemode",
	"elevation",
	"end",
	"exponent",
	"fill",
	"fill-opacity",
	"fill-rule",
	"filter",
	"filterunits",
	"flood-color",
	"flood-opacity",
	"font-family",
	"font-size",
	"font-size-adjust",
	"font-stretch",
	"font-style",
	"font-variant",
	"font-weight",
	"fx",
	"fy",
	"g1",
	"g2",
	"glyph-name",
	"glyphref",
	"gradientunits",
	"gradienttransform",
	"height",
	"href",
	"id",
	"image-rendering",
	"in",
	"in2",
	"intercept",
	"k",
	"k1",
	"k2",
	"k3",
	"k4",
	"kerning",
	"keypoints",
	"keysplines",
	"keytimes",
	"lang",
	"lengthadjust",
	"letter-spacing",
	"kernelmatrix",
	"kernelunitlength",
	"lighting-color",
	"local",
	"marker-end",
	"marker-mid",
	"marker-start",
	"markerheight",
	"markerunits",
	"markerwidth",
	"maskcontentunits",
	"maskunits",
	"max",
	"mask",
	"mask-type",
	"media",
	"method",
	"mode",
	"min",
	"name",
	"numoctaves",
	"offset",
	"operator",
	"opacity",
	"order",
	"orient",
	"orientation",
	"origin",
	"overflow",
	"paint-order",
	"path",
	"pathlength",
	"patterncontentunits",
	"patterntransform",
	"patternunits",
	"points",
	"preservealpha",
	"preserveaspectratio",
	"primitiveunits",
	"r",
	"rx",
	"ry",
	"radius",
	"refx",
	"refy",
	"repeatcount",
	"repeatdur",
	"restart",
	"result",
	"rotate",
	"scale",
	"seed",
	"shape-rendering",
	"slope",
	"specularconstant",
	"specularexponent",
	"spreadmethod",
	"startoffset",
	"stddeviation",
	"stitchtiles",
	"stop-color",
	"stop-opacity",
	"stroke-dasharray",
	"stroke-dashoffset",
	"stroke-linecap",
	"stroke-linejoin",
	"stroke-miterlimit",
	"stroke-opacity",
	"stroke",
	"stroke-width",
	"style",
	"surfacescale",
	"systemlanguage",
	"tabindex",
	"tablevalues",
	"targetx",
	"targety",
	"transform",
	"transform-origin",
	"text-anchor",
	"text-decoration",
	"text-orientation",
	"text-rendering",
	"textlength",
	"type",
	"u1",
	"u2",
	"unicode",
	"values",
	"viewbox",
	"visibility",
	"version",
	"vert-adv-y",
	"vert-origin-x",
	"vert-origin-y",
	"width",
	"word-spacing",
	"wrap",
	"writing-mode",
	"xchannelselector",
	"ychannelselector",
	"x",
	"x1",
	"x2",
	"xmlns",
	"y",
	"y1",
	"y2",
	"z",
	"zoomandpan"
]);
var mathMl = freeze([
	"accent",
	"accentunder",
	"align",
	"bevelled",
	"close",
	"columnalign",
	"columnlines",
	"columnspacing",
	"columnspan",
	"denomalign",
	"depth",
	"dir",
	"display",
	"displaystyle",
	"encoding",
	"fence",
	"frame",
	"height",
	"href",
	"id",
	"largeop",
	"length",
	"linethickness",
	"lquote",
	"lspace",
	"mathbackground",
	"mathcolor",
	"mathsize",
	"mathvariant",
	"maxsize",
	"minsize",
	"movablelimits",
	"notation",
	"numalign",
	"open",
	"rowalign",
	"rowlines",
	"rowspacing",
	"rowspan",
	"rspace",
	"rquote",
	"scriptlevel",
	"scriptminsize",
	"scriptsizemultiplier",
	"selection",
	"separator",
	"separators",
	"stretchy",
	"subscriptshift",
	"supscriptshift",
	"symmetric",
	"voffset",
	"width",
	"xmlns"
]);
var xml = freeze([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]);
var MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
var ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
var TMPLIT_EXPR = seal(/\${[\w\W]*/g);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
var COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
var FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
var SELF_CLOSING_TAG = seal(/\/>/i);
var NODE_TYPE = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
};
var getGlobal = function getGlobal() {
	return typeof window === "undefined" ? null : window;
};
/**
* Creates a no-op policy for internal use only.
* Don't export this function outside this module!
* @param trustedTypes The policy factory.
* @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
* @return The policy created (or null, if Trusted Types
* are not supported or creating the policy failed).
*/
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
	if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
	let suffix = null;
	const ATTR_NAME = "data-tt-policy-suffix";
	if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
	const policyName = "dompurify" + (suffix ? "#" + suffix : "");
	try {
		return trustedTypes.createPolicy(policyName, {
			createHTML(html) {
				return html;
			},
			createScriptURL(scriptUrl) {
				return scriptUrl;
			}
		});
	} catch (_) {
		console.warn("TrustedTypes policy " + policyName + " could not be created.");
		return null;
	}
};
var _createHooksMap = function _createHooksMap() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
};
/**
* Resolve a set-valued configuration option: a fresh set built from
* cfg[key] when it is an own array property (seeded with a clone of
* options.base when given, case-normalized via options.transform),
* the fallback set otherwise.
*
* @param cfg the cloned, prototype-free configuration object
* @param key the configuration property to read
* @param fallback the set to use when the option is absent or not an array
* @param options transform and optional base set to merge into
* @returns the resolved set
*/
var _resolveSetOption = function _resolveSetOption(cfg, key, fallback, options) {
	return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
};
function createDOMPurify() {
	let window = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
	const DOMPurify = (root) => createDOMPurify(root);
	DOMPurify.version = "3.4.12";
	DOMPurify.removed = [];
	if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
		DOMPurify.isSupported = false;
		return DOMPurify;
	}
	let document = window.document;
	const originalDocument = document;
	const currentScript = originalDocument.currentScript;
	window.DocumentFragment;
	const HTMLTemplateElement = window.HTMLTemplateElement, Node = window.Node, Element = window.Element, NodeFilter = window.NodeFilter;
	window.NamedNodeMap === void 0 && (window.NamedNodeMap || window.MozNamedAttrMap);
	window.HTMLFormElement;
	const DOMParser = window.DOMParser, trustedTypes = window.trustedTypes;
	const ElementPrototype = Element.prototype;
	const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
	const remove = lookupGetter(ElementPrototype, "remove");
	const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
	const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
	const getParentNode = lookupGetter(ElementPrototype, "parentNode");
	const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
	const getAttributes = lookupGetter(ElementPrototype, "attributes");
	const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
	const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
	if (typeof HTMLTemplateElement === "function") {
		const template = document.createElement("template");
		if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
	}
	let trustedTypesPolicy;
	let emptyHTML = "";
	let defaultTrustedTypesPolicy;
	let defaultTrustedTypesPolicyResolved = false;
	let IN_TRUSTED_TYPES_POLICY = 0;
	const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy() {
		if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	};
	const _createTrustedHTML = function _createTrustedHTML(html) {
		_assertNotInTrustedTypesPolicy();
		IN_TRUSTED_TYPES_POLICY++;
		try {
			return trustedTypesPolicy.createHTML(html);
		} finally {
			IN_TRUSTED_TYPES_POLICY--;
		}
	};
	const _createTrustedScriptURL = function _createTrustedScriptURL(scriptUrl) {
		_assertNotInTrustedTypesPolicy();
		IN_TRUSTED_TYPES_POLICY++;
		try {
			return trustedTypesPolicy.createScriptURL(scriptUrl);
		} finally {
			IN_TRUSTED_TYPES_POLICY--;
		}
	};
	const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy() {
		if (!defaultTrustedTypesPolicyResolved) {
			defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
			defaultTrustedTypesPolicyResolved = true;
		}
		return defaultTrustedTypesPolicy;
	};
	const _document = document, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
	const importNode = originalDocument.importNode;
	let hooks = _createHooksMap();
	/**
	* Expose whether this browser supports running the full DOMPurify.
	*/
	DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
	const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
	let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
	/**
	* We consider the elements and attributes below to be safe. Ideally
	* don't add any new ones but feel free to remove unwanted ones.
	*/
	let ALLOWED_TAGS = null;
	const DEFAULT_ALLOWED_TAGS = addToSet({}, [
		...html$1,
		...svg$1,
		...svgFilters,
		...mathMl$1,
		...text
	]);
	let ALLOWED_ATTR = null;
	const DEFAULT_ALLOWED_ATTR = addToSet({}, [
		...html,
		...svg,
		...mathMl,
		...xml
	]);
	let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
		tagNameCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		},
		attributeNameCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: false
		}
	}));
	let FORBID_TAGS = null;
	let FORBID_ATTR = null;
	const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
		tagCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		},
		attributeCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		}
	}));
	let ALLOW_ARIA_ATTR = true;
	let ALLOW_DATA_ATTR = true;
	let ALLOW_UNKNOWN_PROTOCOLS = false;
	let ALLOW_SELF_CLOSE_IN_ATTR = true;
	let SAFE_FOR_TEMPLATES = false;
	let SAFE_FOR_XML = true;
	let WHOLE_DOCUMENT = false;
	let SET_CONFIG = false;
	let SET_CONFIG_ALLOWED_TAGS = null;
	let SET_CONFIG_ALLOWED_ATTR = null;
	let FORCE_BODY = false;
	let RETURN_DOM = false;
	let RETURN_DOM_FRAGMENT = false;
	let RETURN_TRUSTED_TYPE = false;
	let SANITIZE_DOM = true;
	let SANITIZE_NAMED_PROPS = false;
	const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
	let KEEP_CONTENT = true;
	let IN_PLACE = false;
	let USE_PROFILES = {};
	let FORBID_CONTENTS = null;
	const DEFAULT_FORBID_CONTENTS = addToSet({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"selectedcontent",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp"
	]);
	let DATA_URI_TAGS = null;
	const DEFAULT_DATA_URI_TAGS = addToSet({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]);
	let URI_SAFE_ATTRIBUTES = null;
	const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]);
	const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
	const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
	const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
	let NAMESPACE = HTML_NAMESPACE;
	let IS_EMPTY_INPUT = false;
	let ALLOWED_NAMESPACES = null;
	const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
		MATHML_NAMESPACE,
		SVG_NAMESPACE,
		HTML_NAMESPACE
	], stringToString);
	const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]);
	let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
	const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
	let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
	const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]);
	let PARSER_MEDIA_TYPE = null;
	const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
	const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
	let transformCaseFunc = null;
	let CONFIG = null;
	const formElement = document.createElement("form");
	const isRegexOrFunction = function isRegexOrFunction(testValue) {
		return testValue instanceof RegExp || testValue instanceof Function;
	};
	/**
	* _parseConfig
	*
	* @param cfg optional config literal
	*/
	const _parseConfig = function _parseConfig() {
		let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (CONFIG && CONFIG === cfg) return;
		if (!cfg || typeof cfg !== "object") cfg = {};
		cfg = clone(cfg);
		PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
		transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
		ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
		ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
		ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
		URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
			transform: transformCaseFunc,
			base: DEFAULT_URI_SAFE_ATTRIBUTES
		});
		DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
			transform: transformCaseFunc,
			base: DEFAULT_DATA_URI_TAGS
		});
		FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
		FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), { transform: transformCaseFunc });
		FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), { transform: transformCaseFunc });
		USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
		ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
		ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
		ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
		ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
		SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
		SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
		WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
		RETURN_DOM = cfg.RETURN_DOM || false;
		RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
		RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
		FORCE_BODY = cfg.FORCE_BODY || false;
		SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
		SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
		KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
		IN_PLACE = cfg.IN_PLACE || false;
		IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
		NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
		MATHML_TEXT_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "MATHML_TEXT_INTEGRATION_POINTS") && cfg.MATHML_TEXT_INTEGRATION_POINTS && typeof cfg.MATHML_TEXT_INTEGRATION_POINTS === "object" ? clone(cfg.MATHML_TEXT_INTEGRATION_POINTS) : addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
		HTML_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "HTML_INTEGRATION_POINTS") && cfg.HTML_INTEGRATION_POINTS && typeof cfg.HTML_INTEGRATION_POINTS === "object" ? clone(cfg.HTML_INTEGRATION_POINTS) : addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
		const customElementHandling = objectHasOwnProperty(cfg, "CUSTOM_ELEMENT_HANDLING") && cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING === "object" ? clone(cfg.CUSTOM_ELEMENT_HANDLING) : create(null);
		CUSTOM_ELEMENT_HANDLING = create(null);
		if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
		if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
		if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
		seal(CUSTOM_ELEMENT_HANDLING);
		if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
		if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
		if (USE_PROFILES) {
			ALLOWED_TAGS = addToSet({}, text);
			ALLOWED_ATTR = create(null);
			if (USE_PROFILES.html === true) {
				addToSet(ALLOWED_TAGS, html$1);
				addToSet(ALLOWED_ATTR, html);
			}
			if (USE_PROFILES.svg === true) {
				addToSet(ALLOWED_TAGS, svg$1);
				addToSet(ALLOWED_ATTR, svg);
				addToSet(ALLOWED_ATTR, xml);
			}
			if (USE_PROFILES.svgFilters === true) {
				addToSet(ALLOWED_TAGS, svgFilters);
				addToSet(ALLOWED_ATTR, svg);
				addToSet(ALLOWED_ATTR, xml);
			}
			if (USE_PROFILES.mathMl === true) {
				addToSet(ALLOWED_TAGS, mathMl$1);
				addToSet(ALLOWED_ATTR, mathMl);
				addToSet(ALLOWED_ATTR, xml);
			}
		}
		EXTRA_ELEMENT_HANDLING.tagCheck = null;
		EXTRA_ELEMENT_HANDLING.attributeCheck = null;
		if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
			if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
			else if (arrayIsArray(cfg.ADD_TAGS)) {
				if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
				addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
			}
		}
		if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
			if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
			else if (arrayIsArray(cfg.ADD_ATTR)) {
				if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
				addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
			}
		}
		if (objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") && arrayIsArray(cfg.ADD_URI_SAFE_ATTR)) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
		if (objectHasOwnProperty(cfg, "FORBID_CONTENTS") && arrayIsArray(cfg.FORBID_CONTENTS)) {
			if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
			addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
		}
		if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
			if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
			addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
		}
		if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
		if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
			"html",
			"head",
			"body"
		]);
		if (ALLOWED_TAGS.table) {
			addToSet(ALLOWED_TAGS, ["tbody"]);
			delete FORBID_TAGS.tbody;
		}
		if (cfg.TRUSTED_TYPES_POLICY) {
			if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			const previousTrustedTypesPolicy = trustedTypesPolicy;
			trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
			try {
				emptyHTML = _createTrustedHTML("");
			} catch (error) {
				trustedTypesPolicy = previousTrustedTypesPolicy;
				throw error;
			}
		} else if (cfg.TRUSTED_TYPES_POLICY === null) {
			trustedTypesPolicy = void 0;
			emptyHTML = "";
		} else {
			if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
			if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
		}
		if (freeze) freeze(cfg);
		CONFIG = cfg;
	};
	const ALL_SVG_TAGS = addToSet({}, [
		...svg$1,
		...svgFilters,
		...svgDisallowed
	]);
	const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
	/**
	* Namespace rules for an element in the SVG namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parent the (possibly simulated) parent node
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkSvgNamespace = function _checkSvgNamespace(tagName, parent, parentTagName) {
		if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
		if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
		return Boolean(ALL_SVG_TAGS[tagName]);
	};
	/**
	* Namespace rules for an element in the MathML namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parent the (possibly simulated) parent node
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkMathMlNamespace = function _checkMathMlNamespace(tagName, parent, parentTagName) {
		if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
		if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
		return Boolean(ALL_MATHML_TAGS[tagName]);
	};
	/**
	* Namespace rules for an element in the HTML namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parent the (possibly simulated) parent node
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkHtmlNamespace = function _checkHtmlNamespace(tagName, parent, parentTagName) {
		if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
		if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
		return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
	};
	/**
	* @param element a DOM element whose namespace is being checked
	* @returns Return false if the element has a
	*  namespace that a spec-compliant parser would never
	*  return. Return true otherwise.
	*/
	const _checkValidNamespace = function _checkValidNamespace(element) {
		let parent = getParentNode(element);
		if (!parent || !parent.tagName) parent = {
			namespaceURI: NAMESPACE,
			tagName: "template"
		};
		const tagName = stringToLowerCase(element.tagName);
		const parentTagName = stringToLowerCase(parent.tagName);
		if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
		if (element.namespaceURI === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parent, parentTagName);
		if (element.namespaceURI === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parent, parentTagName);
		if (element.namespaceURI === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parent, parentTagName);
		if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
		return false;
	};
	/**
	* _forceRemove
	*
	* @param node a DOM node
	*/
	const _forceRemove = function _forceRemove(node) {
		arrayPush(DOMPurify.removed, { element: node });
		try {
			getParentNode(node).removeChild(node);
		} catch (_) {
			remove(node);
			if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	};
	/**
	* _neutralizeRoot
	*
	* Fail-closed teardown of an in-place root after the sanitize walk aborts
	* (campaign-3 F2). An internal throw mid-walk — e.g. a page-registered
	* custom element's reaction detaches a node so `_forceRemove`'s deliberate
	* parentless guard throws, or any other re-entrant engine mutation — would
	* otherwise leave the caller's *live* tree half-sanitized, with everything
	* after the abort point still carrying its handlers. There is no safe way
	* to resume the walk (the tree mutated under us), so we strip the root bare:
	* remove every child and every attribute, then let the caller's catch see
	* the original error. Clobber-safe (cached `remove`/`childNodes`/`attributes`
	* getters; the root was already clobber-pre-flighted at the IN_PLACE entry).
	*
	* @param root the in-place root to empty
	*/
	const _neutralizeRoot = function _neutralizeRoot(root) {
		_neutralizeSubtree(root);
		const childNodes = getChildNodes(root);
		if (childNodes) {
			const snapshot = [];
			arrayForEach(childNodes, (child) => {
				arrayPush(snapshot, child);
			});
			arrayForEach(snapshot, (child) => {
				try {
					remove(child);
				} catch (_) {}
			});
		}
		const attributes = getAttributes(root);
		if (attributes) for (let i = attributes.length - 1; i >= 0; --i) {
			const attribute = attributes[i];
			const name = attribute && attribute.name;
			if (typeof name === "string") try {
				root.removeAttribute(name);
			} catch (_) {}
		}
	};
	/**
	* _removeAttribute
	*
	* @param name an Attribute name
	* @param element a DOM node
	*/
	const _removeAttribute = function _removeAttribute(name, element) {
		try {
			arrayPush(DOMPurify.removed, {
				attribute: element.getAttributeNode(name),
				from: element
			});
		} catch (_) {
			arrayPush(DOMPurify.removed, {
				attribute: null,
				from: element
			});
		}
		element.removeAttribute(name);
		if (name === "is") if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
			_forceRemove(element);
		} catch (_) {}
		else try {
			element.setAttribute(name, "");
		} catch (_) {}
	};
	/**
	* _stripDisallowedAttributes
	*
	* Removes every attribute the active configuration does not allow from a
	* single element, using the same allowlist as the main attribute pass (so
	* `on*` handlers go, but no `/^on/` blocklist is introduced). Used only to
	* neutralise nodes that are being discarded from an in-place tree.
	*
	* @param element the element to strip
	*/
	const _stripDisallowedAttributes = function _stripDisallowedAttributes(element) {
		const attributes = getAttributes(element);
		if (!attributes) return;
		for (let i = attributes.length - 1; i >= 0; --i) {
			const attribute = attributes[i];
			const name = attribute && attribute.name;
			if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) continue;
			try {
				element.removeAttribute(name);
			} catch (_) {}
		}
	};
	/**
	* _neutralizeSubtree
	*
	* Completes the audit-5 F1 fix across every removal path. The KEEP_CONTENT
	* move-hoist neutralises only disallowed-tag removals; clobber, mXSS-canary,
	* namespace, comment, processing-instruction and KEEP_CONTENT:false removals
	* all drop their subtree wholesale via `_forceRemove`. On the IN_PLACE path
	* those dropped nodes are detached from the caller's LIVE tree but a
	* handler-bearing original among them (an `<img onerror>`/`<video>` that was
	* loading) keeps its queued resource event, which fires in page scope after
	* sanitize returns. This walks a removed subtree and strips every attribute
	* the active configuration does not allow — so `on*` handlers are cancelled
	* through the SAME allowlist that governs kept nodes, not a separate `/^on/`
	* blocklist. Run synchronously before sanitize returns, i.e. before any
	* queued event can fire. Hook-free by design: these nodes leave the output,
	* so firing attribute hooks for them would be surprising. Clobber-safe reads;
	* a doomed clobbered node may shadow `removeAttribute` (its own attributes are
	* irrelevant — it is discarded — while its non-clobbered descendants, e.g.
	* the `<img>`, are reached and scrubbed).
	*
	* @param root the root of a removed subtree to neutralise
	*/
	const _neutralizeSubtree = function _neutralizeSubtree(root) {
		const stack = [root];
		while (stack.length > 0) {
			const node = stack.pop();
			if ((getNodeType ? getNodeType(node) : node.nodeType) === NODE_TYPE.element) _stripDisallowedAttributes(node);
			const childNodes = getChildNodes(node);
			if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
		}
	};
	/**
	* _neutralizePatchLinkage
	*
	* IN_PLACE entry pre-pass (declarative-partial-updates / streaming
	* hardening, https://github.com/WICG/declarative-partial-updates).
	*
	* The main walk strips patch linkage (`for`/`patchsrc`) and removes range
	* markers (PIs / markup comments) node-by-node, in document order, AS it
	* reaches each node. On a live in-place root that leaves a window: from the
	* moment the root is connected until the walk arrives at a given node, that
	* node's linkage is live. A patch applied on connection/stream can fire as
	* a microtask during the walk and inject or teleport an unsanitized DOM
	* range into a region the iterator has already passed and will not revisit,
	* so the post-return "tree is sanitized" contract is violated. Sweep the
	* whole tree once up front and sever every linkage before the walk begins,
	* closing that window.
	*
	* This CANNOT undo a patch that already fired before sanitize ran — that is
	* the irreducible "do not IN_PLACE a live-connected attacker tree" caveat —
	* but it closes everything from sanitize-start onward. Gated on SAFE_FOR_XML
	* to group with the rest of the declarative-partial-updates handling and
	* stay overridable, consistent with the codebase.
	*
	* Clobber-safe traversal (cached childNodes getter); per-node try/catch so a
	* clobbered root cannot defeat the sweep of its non-clobbered descendants.
	*
	* NOTE (pending real-Chrome confirmation, see test/declarative-patch-probe
	* .html Q1): this mirrors the existing policy of keeping `for` on
	* <label>/<output>. If the shipping feature can drive a patch through a
	* surviving `for`-on-label/output + `id` pair, this pre-pass and the
	* attribute check at _isBasicCustomElement's caller must additionally drop
	* that pair on the IN_PLACE path. Left as-is until the taxonomy is verified.
	*
	* @param root the in-place root to sweep
	*/
	const _neutralizePatchLinkage = function _neutralizePatchLinkage(root) {
		if (!SAFE_FOR_XML) return;
		const stack = [root];
		while (stack.length > 0) {
			const node = stack.pop();
			const nodeType = getNodeType ? getNodeType(node) : node.nodeType;
			if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
				try {
					remove(node);
				} catch (_) {}
				continue;
			}
			if (nodeType === NODE_TYPE.element) {
				const element = node;
				const lcTag = transformCaseFunc(getNodeName ? getNodeName(node) : node.nodeName);
				try {
					if (element.hasAttribute && element.hasAttribute("patchsrc")) element.removeAttribute("patchsrc");
					if (element.hasAttribute && element.hasAttribute("for") && lcTag !== "label" && lcTag !== "output") element.removeAttribute("for");
				} catch (_) {}
			}
			const childNodes = getChildNodes(node);
			if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
		}
	};
	/**
	* _initDocument
	*
	* @param dirty - a string of dirty markup
	* @return a DOM, filled with the dirty markup
	*/
	const _initDocument = function _initDocument(dirty) {
		let doc = null;
		let leadingWhitespace = null;
		if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
		else {
			const matches = stringMatch(dirty, /^[\r\n\t ]+/);
			leadingWhitespace = matches && matches[0];
		}
		if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
		const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
		if (NAMESPACE === HTML_NAMESPACE) try {
			doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
		} catch (_) {}
		if (!doc || !doc.documentElement) {
			doc = implementation.createDocument(NAMESPACE, "template", null);
			try {
				doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
			} catch (_) {}
		}
		const body = doc.body || doc.documentElement;
		if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
		if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
		return WHOLE_DOCUMENT ? doc.documentElement : body;
	};
	/**
	* Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
	*
	* @param root The root element or node to start traversing on.
	* @return The created NodeIterator
	*/
	const _createNodeIterator = function _createNodeIterator(root) {
		return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
	};
	/**
	* Replace template expression syntax (mustache, ERB, template
	* literal) with a space; shared by all SAFE_FOR_TEMPLATES scrub
	* sites. Order matters: mustache, then ERB, then template literal.
	*
	* @param value the string to scrub
	* @returns the scrubbed string
	*/
	const _stripTemplateExpressions = function _stripTemplateExpressions(value) {
		value = stringReplace(value, MUSTACHE_EXPR$1, " ");
		value = stringReplace(value, ERB_EXPR$1, " ");
		value = stringReplace(value, TMPLIT_EXPR$1, " ");
		return value;
	};
	/**
	* Strip template-engine expressions ({{...}}, ${...}, <%...%>) from the
	* character data of an element subtree. Used as the final safety net for
	* SAFE_FOR_TEMPLATES on every DOM-returning code path so that expressions
	* which only form after text-node normalization (e.g. fragments split across
	* stripped elements) cannot survive into a template-evaluating framework.
	*
	* Walks text/comment/CDATA/processing-instruction nodes and mutates `.data`
	* in place rather than round-tripping through innerHTML. This preserves
	* descendant node references (important for IN_PLACE callers), avoids a
	* serialize/reparse cycle, and reads literal character data — which means
	* `<%...%>` in text content matches the ERB regex against its real bytes
	* instead of the HTML-entity-escaped form innerHTML would produce.
	*
	* Attribute values are not visited here; SAFE_FOR_TEMPLATES handling for
	* attributes is performed during the per-node `_sanitizeAttributes` pass.
	*
	* @param node The root element whose character data should be scrubbed.
	*/
	const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
		var _node$querySelectorAl;
		node.normalize();
		const walker = createNodeIterator.call(node.ownerDocument || node, node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION, null);
		let currentNode = walker.nextNode();
		while (currentNode) {
			currentNode.data = _stripTemplateExpressions(currentNode.data);
			currentNode = walker.nextNode();
		}
		const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
		if (templates) arrayForEach(templates, (tmpl) => {
			if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
		});
	};
	/**
	* _isClobbered
	*
	* Detect DOM-clobbering on HTMLFormElement nodes. Form is the only HTML
	* interface with [LegacyOverrideBuiltIns]; a descendant element with a
	* `name` attribute matching a prototype property shadows that property
	* on direct reads. We use this check at the IN_PLACE entry-point and
	* during attribute sanitization to refuse clobbered forms.
	*
	* @param element element to check for clobbering attacks
	* @return true if clobbered, false if safe
	*/
	const _isClobbered = function _isClobbered(element) {
		const realTagName = getNodeName ? getNodeName(element) : null;
		if (typeof realTagName !== "string") return false;
		if (transformCaseFunc(realTagName) !== "form") return false;
		return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
	};
	/**
	* Checks whether the given value is a DocumentFragment from any realm.
	*
	* The realm-independent replacement reads `nodeType` through the cached
	* Node.prototype getter and compares to the DOCUMENT_FRAGMENT_NODE
	* constant (11). nodeType is a numeric value resolved from the node's
	* internal slot, identical across realms for the same kind of node.
	*
	* @param value object to check
	* @return true if value is a DocumentFragment-shaped node from any realm
	*/
	const _isDocumentFragment = function _isDocumentFragment(value) {
		if (!getNodeType || typeof value !== "object" || value === null) return false;
		try {
			return getNodeType(value) === NODE_TYPE.documentFragment;
		} catch (_) {
			return false;
		}
	};
	/**
	* Checks whether the given object is a DOM node, including nodes that
	* originate from a different window/realm (e.g. an iframe's
	* contentDocument). The previous `value instanceof Node` check was
	* realm-bound: nodes from a different window failed it, causing
	* sanitize() to silently stringify them and reset IN_PLACE to false,
	* returning the original node unsanitized. See GHSA-4w3q-35jp-p934.
	*
	* @param value object to check whether it's a DOM node
	* @return true if value is a DOM node from any realm
	*/
	const _isNode = function _isNode(value) {
		if (!getNodeType || typeof value !== "object" || value === null) return false;
		try {
			return typeof getNodeType(value) === "number";
		} catch (_) {
			return false;
		}
	};
	function _executeHooks(hooks, currentNode, data) {
		if (hooks.length === 0) return;
		arrayForEach(hooks, (hook) => {
			hook.call(DOMPurify, currentNode, data, CONFIG);
		});
	}
	/**
	* Structural-threat checks that condemn a node regardless of the
	* allowlists: mXSS via namespace confusion, risky CSS construction,
	* processing instructions, markup-bearing comments. Pure predicate;
	* the caller removes. Check order is load-bearing.
	*
	* @param currentNode the node to inspect
	* @param tagName the node's transformCaseFunc'd tag name
	* @return true if the node must be removed
	*/
	const _isUnsafeNode = function _isUnsafeNode(currentNode, tagName) {
		if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
		if (SAFE_FOR_XML && currentNode.namespaceURI === HTML_NAMESPACE && tagName === "style" && _isNode(currentNode.firstElementChild)) return true;
		if (currentNode.nodeType === NODE_TYPE.processingInstruction) return true;
		if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
		return false;
	};
	/**
	* Handle a node whose tag is forbidden or not allowlisted: keep
	* allowed custom elements (false return exits _sanitizeElements
	* early - the namespace and fallback-tag removal checks are
	* intentionally skipped for kept custom elements), else hoist
	* content per KEEP_CONTENT and remove.
	*
	* A kept custom element is the ONLY case in which this function
	* returns false, so the caller uses that return value to run the
	* afterSanitizeElements hook on the kept element and keep the
	* element-hook lifecycle consistent with normal allowlisted
	* elements (GHSA-c2j3-45gr-mqc4).
	*
	* @param currentNode the disallowed node
	* @param tagName the node's transformCaseFunc'd tag name
	* @return true if the node was removed, false if kept
	*/
	const _sanitizeDisallowedNode = function _sanitizeDisallowedNode(currentNode, tagName) {
		if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
			if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
			if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
		}
		if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
			const parentNode = getParentNode(currentNode);
			const childNodes = getChildNodes(currentNode);
			if (childNodes && parentNode) {
				const childCount = childNodes.length;
				for (let i = childCount - 1; i >= 0; --i) {
					const hoisted = IN_PLACE ? childNodes[i] : cloneNode(childNodes[i], true);
					parentNode.insertBefore(hoisted, getNextSibling(currentNode));
				}
			}
		}
		_forceRemove(currentNode);
		return true;
	};
	/**
	* _sanitizeElements
	*
	* @protect nodeName
	* @protect textContent
	* @protect removeChild
	* @param currentNode to check for permission to exist
	* @return true if node was killed, false if left alive
	*/
	const _sanitizeElements = function _sanitizeElements(currentNode, root) {
		_executeHooks(hooks.beforeSanitizeElements, currentNode, null);
		if (currentNode !== root && getParentNode(currentNode) === null) return true;
		if (_isClobbered(currentNode)) {
			_forceRemove(currentNode);
			return true;
		}
		const tagName = transformCaseFunc(getNodeName ? getNodeName(currentNode) : currentNode.nodeName);
		_executeHooks(hooks.uponSanitizeElement, currentNode, {
			tagName,
			allowedTags: ALLOWED_TAGS
		});
		if (currentNode !== root && getParentNode(currentNode) === null) return true;
		if (_isUnsafeNode(currentNode, tagName)) {
			_forceRemove(currentNode);
			return true;
		}
		if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
			const removed = _sanitizeDisallowedNode(currentNode, tagName);
			if (removed === false) _executeHooks(hooks.afterSanitizeElements, currentNode, null);
			return removed;
		}
		if ((getNodeType ? getNodeType(currentNode) : currentNode.nodeType) === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
			_forceRemove(currentNode);
			return true;
		}
		if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
			_forceRemove(currentNode);
			return true;
		}
		if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
			const content = _stripTemplateExpressions(currentNode.textContent);
			if (currentNode.textContent !== content) {
				arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
				currentNode.textContent = content;
			}
		}
		_executeHooks(hooks.afterSanitizeElements, currentNode, null);
		return false;
	};
	/**
	* _isValidAttribute
	*
	* @param lcTag Lowercase tag name of containing element.
	* @param lcName Lowercase attribute name.
	* @param value Attribute value.
	* @return Returns true if `value` is valid, otherwise false.
	*/
	const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
		if (FORBID_ATTR[lcName]) return false;
		if (SAFE_FOR_XML && lcName === "patchsrc") return false;
		if (SAFE_FOR_XML && lcName === "for" && lcTag !== "label" && lcTag !== "output") return false;
		if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
		const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
		if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName));
		else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName));
		else if (!nameIsPermitted) if (_isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)));
		else return false;
		else if (URI_SAFE_ATTRIBUTES[lcName]);
		else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, "")));
		else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]);
		else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, "")));
		else if (value) return false;
		return true;
	};
	const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]);
	/**
	* _isBasicCustomElement
	* checks if at least one dash is included in tagName, and it's not the first char
	* for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
	*
	* @param tagName name of the tag of the node to sanitize
	* @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
	*/
	const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
		return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
	};
	/**
	* Wrap an attribute value in the matching Trusted Types object when
	* the active policy requires it. Namespaced attributes pass through
	* unchanged (no TT support yet, see
	* https://bugs.chromium.org/p/chromium/issues/detail?id=1305293).
	*
	* @param lcTag lowercase tag name of the containing element
	* @param lcName lowercase attribute name
	* @param namespaceURI the attribute's namespace, if any
	* @param value the attribute value to wrap
	* @return the value, wrapped when Trusted Types demand it
	*/
	const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value) {
		if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
			case "TrustedHTML": return _createTrustedHTML(value);
			case "TrustedScriptURL": return _createTrustedScriptURL(value);
		}
		return value;
	};
	/**
	* Write a modified attribute value back onto the element. On
	* success, re-probe for clobbering introduced by the new value and
	* remove the element when found; otherwise pop the removal entry
	* recorded by the earlier _removeAttribute (long-standing pairing
	* with the SANITIZE_NAMED_PROPS path - do not "fix" casually). On
	* failure, remove the attribute instead.
	*
	* @param currentNode the element carrying the attribute
	* @param name the attribute name as present on the element
	* @param namespaceURI the attribute's namespace, if any
	* @param value the new attribute value
	*/
	const _setAttributeValue = function _setAttributeValue(currentNode, name, namespaceURI, value) {
		try {
			if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
			else currentNode.setAttribute(name, value);
			if (_isClobbered(currentNode)) _forceRemove(currentNode);
			else arrayPop(DOMPurify.removed);
		} catch (_) {
			_removeAttribute(name, currentNode);
		}
	};
	/**
	* _sanitizeAttributes
	*
	* @protect attributes
	* @protect nodeName
	* @protect removeAttribute
	* @protect setAttribute
	*
	* @param currentNode to sanitize
	*/
	const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
		_executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
		const attributes = currentNode.attributes;
		if (!attributes || _isClobbered(currentNode)) return;
		const hookEvent = {
			attrName: "",
			attrValue: "",
			keepAttr: true,
			allowedAttributes: ALLOWED_ATTR,
			forceKeepAttr: void 0
		};
		let l = attributes.length;
		const lcTag = transformCaseFunc(currentNode.nodeName);
		while (l--) {
			const attr = attributes[l];
			const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
			const lcName = transformCaseFunc(name);
			const initValue = attrValue;
			let value = name === "value" ? initValue : stringTrim(initValue);
			hookEvent.attrName = lcName;
			hookEvent.attrValue = value;
			hookEvent.keepAttr = true;
			hookEvent.forceKeepAttr = void 0;
			_executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
			value = hookEvent.attrValue;
			if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
				_removeAttribute(name, currentNode);
				value = SANITIZE_NAMED_PROPS_PREFIX + value;
			}
			if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
				_removeAttribute(name, currentNode);
				continue;
			}
			if (lcName === "attributename" && stringMatch(value, "href")) {
				_removeAttribute(name, currentNode);
				continue;
			}
			if (hookEvent.forceKeepAttr) continue;
			if (!hookEvent.keepAttr) {
				_removeAttribute(name, currentNode);
				continue;
			}
			if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
				_removeAttribute(name, currentNode);
				continue;
			}
			if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
			if (!_isValidAttribute(lcTag, lcName, value)) {
				_removeAttribute(name, currentNode);
				continue;
			}
			value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
			if (value !== initValue) _setAttributeValue(currentNode, name, namespaceURI, value);
		}
		_executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
	};
	/**
	* _sanitizeShadowDOM
	*
	* @param fragment to iterate over recursively
	*/
	const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
		let shadowNode = null;
		const shadowIterator = _createNodeIterator(fragment);
		_executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
		while (shadowNode = shadowIterator.nextNode()) {
			_executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
			_sanitizeElements(shadowNode, fragment);
			_sanitizeAttributes(shadowNode);
			if (_isDocumentFragment(shadowNode.content)) _sanitizeShadowDOM2(shadowNode.content);
			if ((getNodeType ? getNodeType(shadowNode) : shadowNode.nodeType) === NODE_TYPE.element) {
				const innerSr = getShadowRoot(shadowNode);
				if (_isDocumentFragment(innerSr)) {
					_sanitizeAttachedShadowRoots(innerSr);
					_sanitizeShadowDOM2(innerSr);
				}
			}
		}
		_executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
	};
	/**
	* _sanitizeAttachedShadowRoots
	*
	* Walks `root` and feeds every attached shadow root we encounter into
	* the existing _sanitizeShadowDOM pipeline. The default node iterator
	* does not descend into shadow trees, so nodes inside an attached
	* shadow root would otherwise be skipped entirely.
	*
	* Two real input paths put attached shadow roots in front of us:
	*   1. IN_PLACE on a DOM node that already has shadow roots attached.
	*   2. DOM-node input where importNode(dirty, true) deep-clones the
	*      shadow root because it was created with `clonable: true`.
	*
	* This pass runs once, up front, so the main iteration loop (and the
	* existing _sanitizeShadowDOM template-content recursion) stay
	* untouched — string-input paths are not affected.
	*
	* @param root the subtree root to walk for attached shadow roots
	*/
	const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots(root) {
		const stack = [{
			node: root,
			shadow: null
		}];
		while (stack.length > 0) {
			const item = stack.pop();
			if (item.shadow) {
				_sanitizeShadowDOM2(item.shadow);
				continue;
			}
			const node = item.node;
			const isElement = (getNodeType ? getNodeType(node) : node.nodeType) === NODE_TYPE.element;
			const childNodes = getChildNodes(node);
			if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
				node: childNodes[i],
				shadow: null
			});
			if (isElement) {
				const rootName = getNodeName ? getNodeName(node) : null;
				if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
					const content = node.content;
					if (_isDocumentFragment(content)) stack.push({
						node: content,
						shadow: null
					});
				}
			}
			if (isElement) {
				const sr = getShadowRoot(node);
				if (_isDocumentFragment(sr)) stack.push({
					node: null,
					shadow: sr
				}, {
					node: sr,
					shadow: null
				});
			}
		}
	};
	DOMPurify.sanitize = function(dirty) {
		let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		let body = null;
		let importedNode = null;
		let currentNode = null;
		let returnNode = null;
		IS_EMPTY_INPUT = !dirty;
		if (IS_EMPTY_INPUT) dirty = "<!-->";
		if (typeof dirty !== "string" && !_isNode(dirty)) {
			dirty = stringifyValue(dirty);
			if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
		}
		if (!DOMPurify.isSupported) return dirty;
		if (SET_CONFIG) {
			ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
			ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
		} else _parseConfig(cfg);
		if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) ALLOWED_TAGS = clone(ALLOWED_TAGS);
		if (hooks.uponSanitizeAttribute.length > 0) ALLOWED_ATTR = clone(ALLOWED_ATTR);
		DOMPurify.removed = [];
		const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
		if (inPlace) {
			_neutralizePatchLinkage(dirty);
			const nn = getNodeName ? getNodeName(dirty) : dirty.nodeName;
			if (typeof nn === "string") {
				const tagName = transformCaseFunc(nn);
				if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
					_neutralizeRoot(dirty);
					throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
				}
			}
			if (_isClobbered(dirty)) {
				_neutralizeRoot(dirty);
				throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
			}
			try {
				_sanitizeAttachedShadowRoots(dirty);
			} catch (error) {
				_neutralizeRoot(dirty);
				throw error;
			}
		} else if (_isNode(dirty)) {
			body = _initDocument("<!---->");
			importedNode = body.ownerDocument.importNode(dirty, true);
			if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
			else if (importedNode.nodeName === "HTML") body = importedNode;
			else body.appendChild(importedNode);
			_sanitizeAttachedShadowRoots(importedNode);
		} else {
			if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
			body = _initDocument(dirty);
			if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
		}
		if (body && FORCE_BODY) _forceRemove(body.firstChild);
		const walkRoot = inPlace ? dirty : body;
		const nodeIterator = _createNodeIterator(walkRoot);
		try {
			while (currentNode = nodeIterator.nextNode()) {
				_sanitizeElements(currentNode, walkRoot);
				_sanitizeAttributes(currentNode);
				if (_isDocumentFragment(currentNode.content)) _sanitizeShadowDOM2(currentNode.content);
			}
		} catch (error) {
			if (inPlace) {
				_neutralizeRoot(dirty);
				arrayForEach(DOMPurify.removed, (entry) => {
					if (entry.element) _neutralizeSubtree(entry.element);
				});
			}
			throw error;
		}
		if (inPlace) {
			arrayForEach(DOMPurify.removed, (entry) => {
				if (entry.element) _neutralizeSubtree(entry.element);
			});
			if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
			return dirty;
		}
		if (RETURN_DOM) {
			if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
			if (RETURN_DOM_FRAGMENT) {
				returnNode = createDocumentFragment.call(body.ownerDocument);
				while (body.firstChild) returnNode.appendChild(body.firstChild);
			} else returnNode = body;
			if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
			return returnNode;
		}
		let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
		if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
		if (SAFE_FOR_TEMPLATES) serializedHTML = _stripTemplateExpressions(serializedHTML);
		return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
	};
	DOMPurify.setConfig = function() {
		_parseConfig(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {});
		SET_CONFIG = true;
		SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
		SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
	};
	DOMPurify.clearConfig = function() {
		CONFIG = null;
		SET_CONFIG = false;
		SET_CONFIG_ALLOWED_TAGS = null;
		SET_CONFIG_ALLOWED_ATTR = null;
		trustedTypesPolicy = defaultTrustedTypesPolicy;
		emptyHTML = "";
	};
	DOMPurify.isValidAttribute = function(tag, attr, value) {
		if (!CONFIG) _parseConfig({});
		return _isValidAttribute(transformCaseFunc(tag), transformCaseFunc(attr), value);
	};
	DOMPurify.addHook = function(entryPoint, hookFunction) {
		if (typeof hookFunction !== "function") return;
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		arrayPush(hooks[entryPoint], hookFunction);
	};
	DOMPurify.removeHook = function(entryPoint, hookFunction) {
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		if (hookFunction !== void 0) {
			const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
			return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
		}
		return arrayPop(hooks[entryPoint]);
	};
	DOMPurify.removeHooks = function(entryPoint) {
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		hooks[entryPoint] = [];
	};
	DOMPurify.removeAllHooks = function() {
		hooks = _createHooksMap();
	};
	return DOMPurify;
}
var purify = createDOMPurify();
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/core.js
var require_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function deepFreeze(obj) {
		if (obj instanceof Map) obj.clear = obj.delete = obj.set = function() {
			throw new Error("map is read-only");
		};
		else if (obj instanceof Set) obj.add = obj.clear = obj.delete = function() {
			throw new Error("set is read-only");
		};
		Object.freeze(obj);
		Object.getOwnPropertyNames(obj).forEach((name) => {
			const prop = obj[name];
			const type = typeof prop;
			if ((type === "object" || type === "function") && !Object.isFrozen(prop)) deepFreeze(prop);
		});
		return obj;
	}
	/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */
	/** @typedef {import('highlight.js').CompiledMode} CompiledMode */
	/** @implements CallbackResponse */
	var Response = class {
		/**
		* @param {CompiledMode} mode
		*/
		constructor(mode) {
			if (mode.data === void 0) mode.data = {};
			this.data = mode.data;
			this.isMatchIgnored = false;
		}
		ignoreMatch() {
			this.isMatchIgnored = true;
		}
	};
	/**
	* @param {string} value
	* @returns {string}
	*/
	function escapeHTML(value) {
		return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	}
	/**
	* performs a shallow merge of multiple objects into one
	*
	* @template T
	* @param {T} original
	* @param {Record<string,any>[]} objects
	* @returns {T} a single new object
	*/
	function inherit$1(original, ...objects) {
		/** @type Record<string,any> */
		const result = Object.create(null);
		for (const key in original) result[key] = original[key];
		objects.forEach(function(obj) {
			for (const key in obj) result[key] = obj[key];
		});
		return result;
	}
	/**
	* @typedef {object} Renderer
	* @property {(text: string) => void} addText
	* @property {(node: Node) => void} openNode
	* @property {(node: Node) => void} closeNode
	* @property {() => string} value
	*/
	/** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */
	/** @typedef {{walk: (r: Renderer) => void}} Tree */
	/** */
	var SPAN_CLOSE = "</span>";
	/**
	* Determines if a node needs to be wrapped in <span>
	*
	* @param {Node} node */
	var emitsWrappingTags = (node) => {
		return !!node.scope;
	};
	/**
	*
	* @param {string} name
	* @param {{prefix:string}} options
	*/
	var scopeToCSSClass = (name, { prefix }) => {
		if (name.startsWith("language:")) return name.replace("language:", "language-");
		if (name.includes(".")) {
			const pieces = name.split(".");
			return [`${prefix}${pieces.shift()}`, ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)].join(" ");
		}
		return `${prefix}${name}`;
	};
	/** @type {Renderer} */
	var HTMLRenderer = class {
		/**
		* Creates a new HTMLRenderer
		*
		* @param {Tree} parseTree - the parse tree (must support `walk` API)
		* @param {{classPrefix: string}} options
		*/
		constructor(parseTree, options) {
			this.buffer = "";
			this.classPrefix = options.classPrefix;
			parseTree.walk(this);
		}
		/**
		* Adds texts to the output stream
		*
		* @param {string} text */
		addText(text) {
			this.buffer += escapeHTML(text);
		}
		/**
		* Adds a node open to the output stream (if needed)
		*
		* @param {Node} node */
		openNode(node) {
			if (!emitsWrappingTags(node)) return;
			const className = scopeToCSSClass(node.scope, { prefix: this.classPrefix });
			this.span(className);
		}
		/**
		* Adds a node close to the output stream (if needed)
		*
		* @param {Node} node */
		closeNode(node) {
			if (!emitsWrappingTags(node)) return;
			this.buffer += SPAN_CLOSE;
		}
		/**
		* returns the accumulated buffer
		*/
		value() {
			return this.buffer;
		}
		/**
		* Builds a span element
		*
		* @param {string} className */
		span(className) {
			this.buffer += `<span class="${className}">`;
		}
	};
	/** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */
	/** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */
	/** @typedef {import('highlight.js').Emitter} Emitter */
	/**  */
	/** @returns {DataNode} */
	var newNode = (opts = {}) => {
		/** @type DataNode */
		const result = { children: [] };
		Object.assign(result, opts);
		return result;
	};
	var TokenTree = class TokenTree {
		constructor() {
			/** @type DataNode */
			this.rootNode = newNode();
			this.stack = [this.rootNode];
		}
		get top() {
			return this.stack[this.stack.length - 1];
		}
		get root() {
			return this.rootNode;
		}
		/** @param {Node} node */
		add(node) {
			this.top.children.push(node);
		}
		/** @param {string} scope */
		openNode(scope) {
			/** @type Node */
			const node = newNode({ scope });
			this.add(node);
			this.stack.push(node);
		}
		closeNode() {
			if (this.stack.length > 1) return this.stack.pop();
		}
		closeAllNodes() {
			while (this.closeNode());
		}
		toJSON() {
			return JSON.stringify(this.rootNode, null, 4);
		}
		/**
		* @typedef { import("./html_renderer").Renderer } Renderer
		* @param {Renderer} builder
		*/
		walk(builder) {
			return this.constructor._walk(builder, this.rootNode);
		}
		/**
		* @param {Renderer} builder
		* @param {Node} node
		*/
		static _walk(builder, node) {
			if (typeof node === "string") builder.addText(node);
			else if (node.children) {
				builder.openNode(node);
				node.children.forEach((child) => this._walk(builder, child));
				builder.closeNode(node);
			}
			return builder;
		}
		/**
		* @param {Node} node
		*/
		static _collapse(node) {
			if (typeof node === "string") return;
			if (!node.children) return;
			if (node.children.every((el) => typeof el === "string")) node.children = [node.children.join("")];
			else node.children.forEach((child) => {
				TokenTree._collapse(child);
			});
		}
	};
	/**
	Currently this is all private API, but this is the minimal API necessary
	that an Emitter must implement to fully support the parser.
	
	Minimal interface:
	
	- addText(text)
	- __addSublanguage(emitter, subLanguageName)
	- startScope(scope)
	- endScope()
	- finalize()
	- toHTML()
	
	*/
	/**
	* @implements {Emitter}
	*/
	var TokenTreeEmitter = class extends TokenTree {
		/**
		* @param {*} options
		*/
		constructor(options) {
			super();
			this.options = options;
		}
		/**
		* @param {string} text
		*/
		addText(text) {
			if (text === "") return;
			this.add(text);
		}
		/** @param {string} scope */
		startScope(scope) {
			this.openNode(scope);
		}
		endScope() {
			this.closeNode();
		}
		/**
		* @param {Emitter & {root: DataNode}} emitter
		* @param {string} name
		*/
		__addSublanguage(emitter, name) {
			/** @type DataNode */
			const node = emitter.root;
			if (name) node.scope = `language:${name}`;
			this.add(node);
		}
		toHTML() {
			return new HTMLRenderer(this, this.options).value();
		}
		finalize() {
			this.closeAllNodes();
			return true;
		}
	};
	/**
	* @param {string} value
	* @returns {RegExp}
	* */
	/**
	* @param {RegExp | string } re
	* @returns {string}
	*/
	function source(re) {
		if (!re) return null;
		if (typeof re === "string") return re;
		return re.source;
	}
	/**
	* @param {RegExp | string } re
	* @returns {string}
	*/
	function lookahead(re) {
		return concat("(?=", re, ")");
	}
	/**
	* @param {RegExp | string } re
	* @returns {string}
	*/
	function anyNumberOfTimes(re) {
		return concat("(?:", re, ")*");
	}
	/**
	* @param {RegExp | string } re
	* @returns {string}
	*/
	function optional(re) {
		return concat("(?:", re, ")?");
	}
	/**
	* @param {...(RegExp | string) } args
	* @returns {string}
	*/
	function concat(...args) {
		return args.map((x) => source(x)).join("");
	}
	/**
	* @param { Array<string | RegExp | Object> } args
	* @returns {object}
	*/
	function stripOptionsFromArgs(args) {
		const opts = args[args.length - 1];
		if (typeof opts === "object" && opts.constructor === Object) {
			args.splice(args.length - 1, 1);
			return opts;
		} else return {};
	}
	/** @typedef { {capture?: boolean} } RegexEitherOptions */
	/**
	* Any of the passed expresssions may match
	*
	* Creates a huge this | this | that | that match
	* @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
	* @returns {string}
	*/
	function either(...args) {
		return "(" + (stripOptionsFromArgs(args).capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
	}
	/**
	* @param {RegExp | string} re
	* @returns {number}
	*/
	function countMatchGroups(re) {
		return new RegExp(re.toString() + "|").exec("").length - 1;
	}
	/**
	* Does lexeme start with a regular expression match at the beginning
	* @param {RegExp} re
	* @param {string} lexeme
	*/
	function startsWith(re, lexeme) {
		const match = re && re.exec(lexeme);
		return match && match.index === 0;
	}
	var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
	/**
	* @param {(string | RegExp)[]} regexps
	* @param {{joinWith: string}} opts
	* @returns {string}
	*/
	function _rewriteBackreferences(regexps, { joinWith }) {
		let numCaptures = 0;
		return regexps.map((regex) => {
			numCaptures += 1;
			const offset = numCaptures;
			let re = source(regex);
			let out = "";
			while (re.length > 0) {
				const match = BACKREF_RE.exec(re);
				if (!match) {
					out += re;
					break;
				}
				out += re.substring(0, match.index);
				re = re.substring(match.index + match[0].length);
				if (match[0][0] === "\\" && match[1]) out += "\\" + String(Number(match[1]) + offset);
				else {
					out += match[0];
					if (match[0] === "(") numCaptures++;
				}
			}
			return out;
		}).map((re) => `(${re})`).join(joinWith);
	}
	/** @typedef {import('highlight.js').Mode} Mode */
	/** @typedef {import('highlight.js').ModeCallback} ModeCallback */
	var MATCH_NOTHING_RE = /\b\B/;
	var IDENT_RE = "[a-zA-Z]\\w*";
	var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
	var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
	var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
	var BINARY_NUMBER_RE = "\\b(0b[01]+)";
	var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
	/**
	* @param { Partial<Mode> & {binary?: string | RegExp} } opts
	*/
	var SHEBANG = (opts = {}) => {
		const beginShebang = /^#![ ]*\//;
		if (opts.binary) opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
		return inherit$1({
			scope: "meta",
			begin: beginShebang,
			end: /$/,
			relevance: 0,
			/** @type {ModeCallback} */
			"on:begin": (m, resp) => {
				if (m.index !== 0) resp.ignoreMatch();
			}
		}, opts);
	};
	var BACKSLASH_ESCAPE = {
		begin: "\\\\[\\s\\S]",
		relevance: 0
	};
	var APOS_STRING_MODE = {
		scope: "string",
		begin: "'",
		end: "'",
		illegal: "\\n",
		contains: [BACKSLASH_ESCAPE]
	};
	var QUOTE_STRING_MODE = {
		scope: "string",
		begin: "\"",
		end: "\"",
		illegal: "\\n",
		contains: [BACKSLASH_ESCAPE]
	};
	var PHRASAL_WORDS_MODE = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ };
	/**
	* Creates a comment mode
	*
	* @param {string | RegExp} begin
	* @param {string | RegExp} end
	* @param {Mode | {}} [modeOptions]
	* @returns {Partial<Mode>}
	*/
	var COMMENT = function(begin, end, modeOptions = {}) {
		const mode = inherit$1({
			scope: "comment",
			begin,
			end,
			contains: []
		}, modeOptions);
		mode.contains.push({
			scope: "doctag",
			begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: true,
			relevance: 0
		});
		const ENGLISH_WORD = either("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
		mode.contains.push({ begin: concat(/[ ]+/, "(", ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, "){3}") });
		return mode;
	};
	var C_LINE_COMMENT_MODE = COMMENT("//", "$");
	var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
	var HASH_COMMENT_MODE = COMMENT("#", "$");
	var NUMBER_MODE = {
		scope: "number",
		begin: NUMBER_RE,
		relevance: 0
	};
	var C_NUMBER_MODE = {
		scope: "number",
		begin: C_NUMBER_RE,
		relevance: 0
	};
	var BINARY_NUMBER_MODE = {
		scope: "number",
		begin: BINARY_NUMBER_RE,
		relevance: 0
	};
	var REGEXP_MODE = {
		scope: "regexp",
		begin: /\/(?=[^/\n]*\/)/,
		end: /\/[gimuy]*/,
		contains: [BACKSLASH_ESCAPE, {
			begin: /\[/,
			end: /\]/,
			relevance: 0,
			contains: [BACKSLASH_ESCAPE]
		}]
	};
	var TITLE_MODE = {
		scope: "title",
		begin: IDENT_RE,
		relevance: 0
	};
	var UNDERSCORE_TITLE_MODE = {
		scope: "title",
		begin: UNDERSCORE_IDENT_RE,
		relevance: 0
	};
	var METHOD_GUARD = {
		begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
		relevance: 0
	};
	/**
	* Adds end same as begin mechanics to a mode
	*
	* Your mode must include at least a single () match group as that first match
	* group is what is used for comparison
	* @param {Partial<Mode>} mode
	*/
	var END_SAME_AS_BEGIN = function(mode) {
		return Object.assign(mode, {
			/** @type {ModeCallback} */
			"on:begin": (m, resp) => {
				resp.data._beginMatch = m[1];
			},
			/** @type {ModeCallback} */
			"on:end": (m, resp) => {
				if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
			}
		});
	};
	var MODES = /* @__PURE__ */ Object.freeze({
		__proto__: null,
		APOS_STRING_MODE,
		BACKSLASH_ESCAPE,
		BINARY_NUMBER_MODE,
		BINARY_NUMBER_RE,
		COMMENT,
		C_BLOCK_COMMENT_MODE,
		C_LINE_COMMENT_MODE,
		C_NUMBER_MODE,
		C_NUMBER_RE,
		END_SAME_AS_BEGIN,
		HASH_COMMENT_MODE,
		IDENT_RE,
		MATCH_NOTHING_RE,
		METHOD_GUARD,
		NUMBER_MODE,
		NUMBER_RE,
		PHRASAL_WORDS_MODE,
		QUOTE_STRING_MODE,
		REGEXP_MODE,
		RE_STARTERS_RE,
		SHEBANG,
		TITLE_MODE,
		UNDERSCORE_IDENT_RE,
		UNDERSCORE_TITLE_MODE
	});
	/**
	@typedef {import('highlight.js').CallbackResponse} CallbackResponse
	@typedef {import('highlight.js').CompilerExt} CompilerExt
	*/
	/**
	* Skip a match if it has a preceding dot
	*
	* This is used for `beginKeywords` to prevent matching expressions such as
	* `bob.keyword.do()`. The mode compiler automatically wires this up as a
	* special _internal_ 'on:begin' callback for modes with `beginKeywords`
	* @param {RegExpMatchArray} match
	* @param {CallbackResponse} response
	*/
	function skipIfHasPrecedingDot(match, response) {
		if (match.input[match.index - 1] === ".") response.ignoreMatch();
	}
	/**
	*
	* @type {CompilerExt}
	*/
	function scopeClassName(mode, _parent) {
		if (mode.className !== void 0) {
			mode.scope = mode.className;
			delete mode.className;
		}
	}
	/**
	* `beginKeywords` syntactic sugar
	* @type {CompilerExt}
	*/
	function beginKeywords(mode, parent) {
		if (!parent) return;
		if (!mode.beginKeywords) return;
		mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
		mode.__beforeBegin = skipIfHasPrecedingDot;
		mode.keywords = mode.keywords || mode.beginKeywords;
		delete mode.beginKeywords;
		if (mode.relevance === void 0) mode.relevance = 0;
	}
	/**
	* Allow `illegal` to contain an array of illegal values
	* @type {CompilerExt}
	*/
	function compileIllegal(mode, _parent) {
		if (!Array.isArray(mode.illegal)) return;
		mode.illegal = either(...mode.illegal);
	}
	/**
	* `match` to match a single expression for readability
	* @type {CompilerExt}
	*/
	function compileMatch(mode, _parent) {
		if (!mode.match) return;
		if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
		mode.begin = mode.match;
		delete mode.match;
	}
	/**
	* provides the default 1 relevance to all modes
	* @type {CompilerExt}
	*/
	function compileRelevance(mode, _parent) {
		if (mode.relevance === void 0) mode.relevance = 1;
	}
	var beforeMatchExt = (mode, parent) => {
		if (!mode.beforeMatch) return;
		if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
		const originalMode = Object.assign({}, mode);
		Object.keys(mode).forEach((key) => {
			delete mode[key];
		});
		mode.keywords = originalMode.keywords;
		mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
		mode.starts = {
			relevance: 0,
			contains: [Object.assign(originalMode, { endsParent: true })]
		};
		mode.relevance = 0;
		delete originalMode.beforeMatch;
	};
	var COMMON_KEYWORDS = [
		"of",
		"and",
		"for",
		"in",
		"not",
		"or",
		"if",
		"then",
		"parent",
		"list",
		"value"
	];
	var DEFAULT_KEYWORD_SCOPE = "keyword";
	/**
	* Given raw keywords from a language definition, compile them.
	*
	* @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
	* @param {boolean} caseInsensitive
	*/
	function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
		/** @type {import("highlight.js/private").KeywordDict} */
		const compiledKeywords = Object.create(null);
		if (typeof rawKeywords === "string") compileList(scopeName, rawKeywords.split(" "));
		else if (Array.isArray(rawKeywords)) compileList(scopeName, rawKeywords);
		else Object.keys(rawKeywords).forEach(function(scopeName) {
			Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName));
		});
		return compiledKeywords;
		/**
		* Compiles an individual list of keywords
		*
		* Ex: "for if when while|5"
		*
		* @param {string} scopeName
		* @param {Array<string>} keywordList
		*/
		function compileList(scopeName, keywordList) {
			if (caseInsensitive) keywordList = keywordList.map((x) => x.toLowerCase());
			keywordList.forEach(function(keyword) {
				const pair = keyword.split("|");
				compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];
			});
		}
	}
	/**
	* Returns the proper score for a given keyword
	*
	* Also takes into account comment keywords, which will be scored 0 UNLESS
	* another score has been manually assigned.
	* @param {string} keyword
	* @param {string} [providedScore]
	*/
	function scoreForKeyword(keyword, providedScore) {
		if (providedScore) return Number(providedScore);
		return commonKeyword(keyword) ? 0 : 1;
	}
	/**
	* Determines if a given keyword is common or not
	*
	* @param {string} keyword */
	function commonKeyword(keyword) {
		return COMMON_KEYWORDS.includes(keyword.toLowerCase());
	}
	/**
	* @type {Record<string, boolean>}
	*/
	var seenDeprecations = {};
	/**
	* @param {string} message
	*/
	var error = (message) => {
		console.error(message);
	};
	/**
	* @param {string} message
	* @param {any} args
	*/
	var warn = (message, ...args) => {
		console.log(`WARN: ${message}`, ...args);
	};
	/**
	* @param {string} version
	* @param {string} message
	*/
	var deprecated = (version, message) => {
		if (seenDeprecations[`${version}/${message}`]) return;
		console.log(`Deprecated as of ${version}. ${message}`);
		seenDeprecations[`${version}/${message}`] = true;
	};
	/**
	@typedef {import('highlight.js').CompiledMode} CompiledMode
	*/
	var MultiClassError = /* @__PURE__ */ new Error();
	/**
	* Renumbers labeled scope names to account for additional inner match
	* groups that otherwise would break everything.
	*
	* Lets say we 3 match scopes:
	*
	*   { 1 => ..., 2 => ..., 3 => ... }
	*
	* So what we need is a clean match like this:
	*
	*   (a)(b)(c) => [ "a", "b", "c" ]
	*
	* But this falls apart with inner match groups:
	*
	* (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
	*
	* Our scopes are now "out of alignment" and we're repeating `b` 3 times.
	* What needs to happen is the numbers are remapped:
	*
	*   { 1 => ..., 2 => ..., 5 => ... }
	*
	* We also need to know that the ONLY groups that should be output
	* are 1, 2, and 5.  This function handles this behavior.
	*
	* @param {CompiledMode} mode
	* @param {Array<RegExp | string>} regexes
	* @param {{key: "beginScope"|"endScope"}} opts
	*/
	function remapScopeNames(mode, regexes, { key }) {
		let offset = 0;
		const scopeNames = mode[key];
		/** @type Record<number,boolean> */
		const emit = {};
		/** @type Record<number,string> */
		const positions = {};
		for (let i = 1; i <= regexes.length; i++) {
			positions[i + offset] = scopeNames[i];
			emit[i + offset] = true;
			offset += countMatchGroups(regexes[i - 1]);
		}
		mode[key] = positions;
		mode[key]._emit = emit;
		mode[key]._multi = true;
	}
	/**
	* @param {CompiledMode} mode
	*/
	function beginMultiClass(mode) {
		if (!Array.isArray(mode.begin)) return;
		if (mode.skip || mode.excludeBegin || mode.returnBegin) {
			error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
			throw MultiClassError;
		}
		if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
			error("beginScope must be object");
			throw MultiClassError;
		}
		remapScopeNames(mode, mode.begin, { key: "beginScope" });
		mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
	}
	/**
	* @param {CompiledMode} mode
	*/
	function endMultiClass(mode) {
		if (!Array.isArray(mode.end)) return;
		if (mode.skip || mode.excludeEnd || mode.returnEnd) {
			error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
			throw MultiClassError;
		}
		if (typeof mode.endScope !== "object" || mode.endScope === null) {
			error("endScope must be object");
			throw MultiClassError;
		}
		remapScopeNames(mode, mode.end, { key: "endScope" });
		mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
	}
	/**
	* this exists only to allow `scope: {}` to be used beside `match:`
	* Otherwise `beginScope` would necessary and that would look weird
	
	{
	match: [ /def/, /\w+/ ]
	scope: { 1: "keyword" , 2: "title" }
	}
	
	* @param {CompiledMode} mode
	*/
	function scopeSugar(mode) {
		if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
			mode.beginScope = mode.scope;
			delete mode.scope;
		}
	}
	/**
	* @param {CompiledMode} mode
	*/
	function MultiClass(mode) {
		scopeSugar(mode);
		if (typeof mode.beginScope === "string") mode.beginScope = { _wrap: mode.beginScope };
		if (typeof mode.endScope === "string") mode.endScope = { _wrap: mode.endScope };
		beginMultiClass(mode);
		endMultiClass(mode);
	}
	/**
	@typedef {import('highlight.js').Mode} Mode
	@typedef {import('highlight.js').CompiledMode} CompiledMode
	@typedef {import('highlight.js').Language} Language
	@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
	@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
	*/
	/**
	* Compiles a language definition result
	*
	* Given the raw result of a language definition (Language), compiles this so
	* that it is ready for highlighting code.
	* @param {Language} language
	* @returns {CompiledLanguage}
	*/
	function compileLanguage(language) {
		/**
		* Builds a regex with the case sensitivity of the current language
		*
		* @param {RegExp | string} value
		* @param {boolean} [global]
		*/
		function langRe(value, global) {
			return new RegExp(source(value), "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : ""));
		}
		/**
		Stores multiple regular expressions and allows you to quickly search for
		them all in a string simultaneously - returning the first match.  It does
		this by creating a huge (a|b|c) regex - each individual item wrapped with ()
		and joined by `|` - using match groups to track position.  When a match is
		found checking which position in the array has content allows us to figure
		out which of the original regexes / match groups triggered the match.
		
		The match object itself (the result of `Regex.exec`) is returned but also
		enhanced by merging in any meta-data that was registered with the regex.
		This is how we keep track of which mode matched, and what type of rule
		(`illegal`, `begin`, end, etc).
		*/
		class MultiRegex {
			constructor() {
				this.matchIndexes = {};
				this.regexes = [];
				this.matchAt = 1;
				this.position = 0;
			}
			addRule(re, opts) {
				opts.position = this.position++;
				this.matchIndexes[this.matchAt] = opts;
				this.regexes.push([opts, re]);
				this.matchAt += countMatchGroups(re) + 1;
			}
			compile() {
				if (this.regexes.length === 0) this.exec = () => null;
				const terminators = this.regexes.map((el) => el[1]);
				this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
				this.lastIndex = 0;
			}
			/** @param {string} s */
			exec(s) {
				this.matcherRe.lastIndex = this.lastIndex;
				const match = this.matcherRe.exec(s);
				if (!match) return null;
				const i = match.findIndex((el, i) => i > 0 && el !== void 0);
				const matchData = this.matchIndexes[i];
				match.splice(0, i);
				return Object.assign(match, matchData);
			}
		}
		class ResumableMultiRegex {
			constructor() {
				this.rules = [];
				this.multiRegexes = [];
				this.count = 0;
				this.lastIndex = 0;
				this.regexIndex = 0;
			}
			getMatcher(index) {
				if (this.multiRegexes[index]) return this.multiRegexes[index];
				const matcher = new MultiRegex();
				this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
				matcher.compile();
				this.multiRegexes[index] = matcher;
				return matcher;
			}
			resumingScanAtSamePosition() {
				return this.regexIndex !== 0;
			}
			considerAll() {
				this.regexIndex = 0;
			}
			addRule(re, opts) {
				this.rules.push([re, opts]);
				if (opts.type === "begin") this.count++;
			}
			/** @param {string} s */
			exec(s) {
				const m = this.getMatcher(this.regexIndex);
				m.lastIndex = this.lastIndex;
				let result = m.exec(s);
				if (this.resumingScanAtSamePosition()) if (result && result.index === this.lastIndex);
				else {
					const m2 = this.getMatcher(0);
					m2.lastIndex = this.lastIndex + 1;
					result = m2.exec(s);
				}
				if (result) {
					this.regexIndex += result.position + 1;
					if (this.regexIndex === this.count) this.considerAll();
				}
				return result;
			}
		}
		/**
		* Given a mode, builds a huge ResumableMultiRegex that can be used to walk
		* the content and find matches.
		*
		* @param {CompiledMode} mode
		* @returns {ResumableMultiRegex}
		*/
		function buildModeRegex(mode) {
			const mm = new ResumableMultiRegex();
			mode.contains.forEach((term) => mm.addRule(term.begin, {
				rule: term,
				type: "begin"
			}));
			if (mode.terminatorEnd) mm.addRule(mode.terminatorEnd, { type: "end" });
			if (mode.illegal) mm.addRule(mode.illegal, { type: "illegal" });
			return mm;
		}
		/** skip vs abort vs ignore
		*
		* @skip   - The mode is still entered and exited normally (and contains rules apply),
		*           but all content is held and added to the parent buffer rather than being
		*           output when the mode ends.  Mostly used with `sublanguage` to build up
		*           a single large buffer than can be parsed by sublanguage.
		*
		*             - The mode begin ands ends normally.
		*             - Content matched is added to the parent mode buffer.
		*             - The parser cursor is moved forward normally.
		*
		* @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
		*           never matched) but DOES NOT continue to match subsequent `contains`
		*           modes.  Abort is bad/suboptimal because it can result in modes
		*           farther down not getting applied because an earlier rule eats the
		*           content but then aborts.
		*
		*             - The mode does not begin.
		*             - Content matched by `begin` is added to the mode buffer.
		*             - The parser cursor is moved forward accordingly.
		*
		* @ignore - Ignores the mode (as if it never matched) and continues to match any
		*           subsequent `contains` modes.  Ignore isn't technically possible with
		*           the current parser implementation.
		*
		*             - The mode does not begin.
		*             - Content matched by `begin` is ignored.
		*             - The parser cursor is not moved forward.
		*/
		/**
		* Compiles an individual mode
		*
		* This can raise an error if the mode contains certain detectable known logic
		* issues.
		* @param {Mode} mode
		* @param {CompiledMode | null} [parent]
		* @returns {CompiledMode | never}
		*/
		function compileMode(mode, parent) {
			const cmode = mode;
			if (mode.isCompiled) return cmode;
			[
				scopeClassName,
				compileMatch,
				MultiClass,
				beforeMatchExt
			].forEach((ext) => ext(mode, parent));
			language.compilerExtensions.forEach((ext) => ext(mode, parent));
			mode.__beforeBegin = null;
			[
				beginKeywords,
				compileIllegal,
				compileRelevance
			].forEach((ext) => ext(mode, parent));
			mode.isCompiled = true;
			let keywordPattern = null;
			if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
				mode.keywords = Object.assign({}, mode.keywords);
				keywordPattern = mode.keywords.$pattern;
				delete mode.keywords.$pattern;
			}
			keywordPattern = keywordPattern || /\w+/;
			if (mode.keywords) mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
			cmode.keywordPatternRe = langRe(keywordPattern, true);
			if (parent) {
				if (!mode.begin) mode.begin = /\B|\b/;
				cmode.beginRe = langRe(cmode.begin);
				if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
				if (mode.end) cmode.endRe = langRe(cmode.end);
				cmode.terminatorEnd = source(cmode.end) || "";
				if (mode.endsWithParent && parent.terminatorEnd) cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
			}
			if (mode.illegal) cmode.illegalRe = langRe(mode.illegal);
			if (!mode.contains) mode.contains = [];
			mode.contains = [].concat(...mode.contains.map(function(c) {
				return expandOrCloneMode(c === "self" ? mode : c);
			}));
			mode.contains.forEach(function(c) {
				compileMode(c, cmode);
			});
			if (mode.starts) compileMode(mode.starts, parent);
			cmode.matcher = buildModeRegex(cmode);
			return cmode;
		}
		if (!language.compilerExtensions) language.compilerExtensions = [];
		if (language.contains && language.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
		language.classNameAliases = inherit$1(language.classNameAliases || {});
		return compileMode(language);
	}
	/**
	* Determines if a mode has a dependency on it's parent or not
	*
	* If a mode does have a parent dependency then often we need to clone it if
	* it's used in multiple places so that each copy points to the correct parent,
	* where-as modes without a parent can often safely be re-used at the bottom of
	* a mode chain.
	*
	* @param {Mode | null} mode
	* @returns {boolean} - is there a dependency on the parent?
	* */
	function dependencyOnParent(mode) {
		if (!mode) return false;
		return mode.endsWithParent || dependencyOnParent(mode.starts);
	}
	/**
	* Expands a mode or clones it if necessary
	*
	* This is necessary for modes with parental dependenceis (see notes on
	* `dependencyOnParent`) and for nodes that have `variants` - which must then be
	* exploded into their own individual modes at compile time.
	*
	* @param {Mode} mode
	* @returns {Mode | Mode[]}
	* */
	function expandOrCloneMode(mode) {
		if (mode.variants && !mode.cachedVariants) mode.cachedVariants = mode.variants.map(function(variant) {
			return inherit$1(mode, { variants: null }, variant);
		});
		if (mode.cachedVariants) return mode.cachedVariants;
		if (dependencyOnParent(mode)) return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
		if (Object.isFrozen(mode)) return inherit$1(mode);
		return mode;
	}
	var version = "11.11.1";
	var HTMLInjectionError = class extends Error {
		constructor(reason, html) {
			super(reason);
			this.name = "HTMLInjectionError";
			this.html = html;
		}
	};
	/**
	@typedef {import('highlight.js').Mode} Mode
	@typedef {import('highlight.js').CompiledMode} CompiledMode
	@typedef {import('highlight.js').CompiledScope} CompiledScope
	@typedef {import('highlight.js').Language} Language
	@typedef {import('highlight.js').HLJSApi} HLJSApi
	@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
	@typedef {import('highlight.js').PluginEvent} PluginEvent
	@typedef {import('highlight.js').HLJSOptions} HLJSOptions
	@typedef {import('highlight.js').LanguageFn} LanguageFn
	@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
	@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
	@typedef {import('highlight.js/private').MatchType} MatchType
	@typedef {import('highlight.js/private').KeywordData} KeywordData
	@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
	@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
	@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
	@typedef {import('highlight.js').HighlightOptions} HighlightOptions
	@typedef {import('highlight.js').HighlightResult} HighlightResult
	*/
	var escape = escapeHTML;
	var inherit = inherit$1;
	var NO_MATCH = Symbol("nomatch");
	var MAX_KEYWORD_HITS = 7;
	/**
	* @param {any} hljs - object that is extended (legacy)
	* @returns {HLJSApi}
	*/
	var HLJS = function(hljs) {
		/** @type {Record<string, Language>} */
		const languages = Object.create(null);
		/** @type {Record<string, string>} */
		const aliases = Object.create(null);
		/** @type {HLJSPlugin[]} */
		const plugins = [];
		let SAFE_MODE = true;
		const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
		/** @type {Language} */
		const PLAINTEXT_LANGUAGE = {
			disableAutodetect: true,
			name: "Plain text",
			contains: []
		};
		/** @type HLJSOptions */
		let options = {
			ignoreUnescapedHTML: false,
			throwUnescapedHTML: false,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: "hljs-",
			cssSelector: "pre code",
			languages: null,
			__emitter: TokenTreeEmitter
		};
		/**
		* Tests a language name to see if highlighting should be skipped
		* @param {string} languageName
		*/
		function shouldNotHighlight(languageName) {
			return options.noHighlightRe.test(languageName);
		}
		/**
		* @param {HighlightedHTMLElement} block - the HTML element to determine language for
		*/
		function blockLanguage(block) {
			let classes = block.className + " ";
			classes += block.parentNode ? block.parentNode.className : "";
			const match = options.languageDetectRe.exec(classes);
			if (match) {
				const language = getLanguage(match[1]);
				if (!language) {
					warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
					warn("Falling back to no-highlight mode for this block.", block);
				}
				return language ? match[1] : "no-highlight";
			}
			return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
		}
		/**
		* Core highlighting function.
		*
		* OLD API
		* highlight(lang, code, ignoreIllegals, continuation)
		*
		* NEW API
		* highlight(code, {lang, ignoreIllegals})
		*
		* @param {string} codeOrLanguageName - the language to use for highlighting
		* @param {string | HighlightOptions} optionsOrCode - the code to highlight
		* @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
		*
		* @returns {HighlightResult} Result - an object that represents the result
		* @property {string} language - the language name
		* @property {number} relevance - the relevance score
		* @property {string} value - the highlighted HTML code
		* @property {string} code - the original raw code
		* @property {CompiledMode} top - top of the current mode stack
		* @property {boolean} illegal - indicates whether any illegal matches were found
		*/
		function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
			let code = "";
			let languageName = "";
			if (typeof optionsOrCode === "object") {
				code = codeOrLanguageName;
				ignoreIllegals = optionsOrCode.ignoreIllegals;
				languageName = optionsOrCode.language;
			} else {
				deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
				deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
				languageName = codeOrLanguageName;
				code = optionsOrCode;
			}
			if (ignoreIllegals === void 0) ignoreIllegals = true;
			/** @type {BeforeHighlightContext} */
			const context = {
				code,
				language: languageName
			};
			fire("before:highlight", context);
			const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
			result.code = context.code;
			fire("after:highlight", result);
			return result;
		}
		/**
		* private highlight that's used internally and does not fire callbacks
		*
		* @param {string} languageName - the language to use for highlighting
		* @param {string} codeToHighlight - the code to highlight
		* @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
		* @param {CompiledMode?} [continuation] - current continuation mode, if any
		* @returns {HighlightResult} - result of the highlight operation
		*/
		function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
			const keywordHits = Object.create(null);
			/**
			* Return keyword data if a match is a keyword
			* @param {CompiledMode} mode - current mode
			* @param {string} matchText - the textual match
			* @returns {KeywordData | false}
			*/
			function keywordData(mode, matchText) {
				return mode.keywords[matchText];
			}
			function processKeywords() {
				if (!top.keywords) {
					emitter.addText(modeBuffer);
					return;
				}
				let lastIndex = 0;
				top.keywordPatternRe.lastIndex = 0;
				let match = top.keywordPatternRe.exec(modeBuffer);
				let buf = "";
				while (match) {
					buf += modeBuffer.substring(lastIndex, match.index);
					const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
					const data = keywordData(top, word);
					if (data) {
						const [kind, keywordRelevance] = data;
						emitter.addText(buf);
						buf = "";
						keywordHits[word] = (keywordHits[word] || 0) + 1;
						if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
						if (kind.startsWith("_")) buf += match[0];
						else {
							const cssClass = language.classNameAliases[kind] || kind;
							emitKeyword(match[0], cssClass);
						}
					} else buf += match[0];
					lastIndex = top.keywordPatternRe.lastIndex;
					match = top.keywordPatternRe.exec(modeBuffer);
				}
				buf += modeBuffer.substring(lastIndex);
				emitter.addText(buf);
			}
			function processSubLanguage() {
				if (modeBuffer === "") return;
				/** @type HighlightResult */
				let result = null;
				if (typeof top.subLanguage === "string") {
					if (!languages[top.subLanguage]) {
						emitter.addText(modeBuffer);
						return;
					}
					result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
					continuations[top.subLanguage] = result._top;
				} else result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
				if (top.relevance > 0) relevance += result.relevance;
				emitter.__addSublanguage(result._emitter, result.language);
			}
			function processBuffer() {
				if (top.subLanguage != null) processSubLanguage();
				else processKeywords();
				modeBuffer = "";
			}
			/**
			* @param {string} text
			* @param {string} scope
			*/
			function emitKeyword(keyword, scope) {
				if (keyword === "") return;
				emitter.startScope(scope);
				emitter.addText(keyword);
				emitter.endScope();
			}
			/**
			* @param {CompiledScope} scope
			* @param {RegExpMatchArray} match
			*/
			function emitMultiClass(scope, match) {
				let i = 1;
				const max = match.length - 1;
				while (i <= max) {
					if (!scope._emit[i]) {
						i++;
						continue;
					}
					const klass = language.classNameAliases[scope[i]] || scope[i];
					const text = match[i];
					if (klass) emitKeyword(text, klass);
					else {
						modeBuffer = text;
						processKeywords();
						modeBuffer = "";
					}
					i++;
				}
			}
			/**
			* @param {CompiledMode} mode - new mode to start
			* @param {RegExpMatchArray} match
			*/
			function startNewMode(mode, match) {
				if (mode.scope && typeof mode.scope === "string") emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
				if (mode.beginScope) {
					if (mode.beginScope._wrap) {
						emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
						modeBuffer = "";
					} else if (mode.beginScope._multi) {
						emitMultiClass(mode.beginScope, match);
						modeBuffer = "";
					}
				}
				top = Object.create(mode, { parent: { value: top } });
				return top;
			}
			/**
			* @param {CompiledMode } mode - the mode to potentially end
			* @param {RegExpMatchArray} match - the latest match
			* @param {string} matchPlusRemainder - match plus remainder of content
			* @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
			*/
			function endOfMode(mode, match, matchPlusRemainder) {
				let matched = startsWith(mode.endRe, matchPlusRemainder);
				if (matched) {
					if (mode["on:end"]) {
						const resp = new Response(mode);
						mode["on:end"](match, resp);
						if (resp.isMatchIgnored) matched = false;
					}
					if (matched) {
						while (mode.endsParent && mode.parent) mode = mode.parent;
						return mode;
					}
				}
				if (mode.endsWithParent) return endOfMode(mode.parent, match, matchPlusRemainder);
			}
			/**
			* Handle matching but then ignoring a sequence of text
			*
			* @param {string} lexeme - string containing full match text
			*/
			function doIgnore(lexeme) {
				if (top.matcher.regexIndex === 0) {
					modeBuffer += lexeme[0];
					return 1;
				} else {
					resumeScanAtSamePosition = true;
					return 0;
				}
			}
			/**
			* Handle the start of a new potential mode match
			*
			* @param {EnhancedMatch} match - the current match
			* @returns {number} how far to advance the parse cursor
			*/
			function doBeginMatch(match) {
				const lexeme = match[0];
				const newMode = match.rule;
				const resp = new Response(newMode);
				const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
				for (const cb of beforeCallbacks) {
					if (!cb) continue;
					cb(match, resp);
					if (resp.isMatchIgnored) return doIgnore(lexeme);
				}
				if (newMode.skip) modeBuffer += lexeme;
				else {
					if (newMode.excludeBegin) modeBuffer += lexeme;
					processBuffer();
					if (!newMode.returnBegin && !newMode.excludeBegin) modeBuffer = lexeme;
				}
				startNewMode(newMode, match);
				return newMode.returnBegin ? 0 : lexeme.length;
			}
			/**
			* Handle the potential end of mode
			*
			* @param {RegExpMatchArray} match - the current match
			*/
			function doEndMatch(match) {
				const lexeme = match[0];
				const matchPlusRemainder = codeToHighlight.substring(match.index);
				const endMode = endOfMode(top, match, matchPlusRemainder);
				if (!endMode) return NO_MATCH;
				const origin = top;
				if (top.endScope && top.endScope._wrap) {
					processBuffer();
					emitKeyword(lexeme, top.endScope._wrap);
				} else if (top.endScope && top.endScope._multi) {
					processBuffer();
					emitMultiClass(top.endScope, match);
				} else if (origin.skip) modeBuffer += lexeme;
				else {
					if (!(origin.returnEnd || origin.excludeEnd)) modeBuffer += lexeme;
					processBuffer();
					if (origin.excludeEnd) modeBuffer = lexeme;
				}
				do {
					if (top.scope) emitter.closeNode();
					if (!top.skip && !top.subLanguage) relevance += top.relevance;
					top = top.parent;
				} while (top !== endMode.parent);
				if (endMode.starts) startNewMode(endMode.starts, match);
				return origin.returnEnd ? 0 : lexeme.length;
			}
			function processContinuations() {
				const list = [];
				for (let current = top; current !== language; current = current.parent) if (current.scope) list.unshift(current.scope);
				list.forEach((item) => emitter.openNode(item));
			}
			/** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
			let lastMatch = {};
			/**
			*  Process an individual match
			*
			* @param {string} textBeforeMatch - text preceding the match (since the last match)
			* @param {EnhancedMatch} [match] - the match itself
			*/
			function processLexeme(textBeforeMatch, match) {
				const lexeme = match && match[0];
				modeBuffer += textBeforeMatch;
				if (lexeme == null) {
					processBuffer();
					return 0;
				}
				if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
					modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
					if (!SAFE_MODE) {
						/** @type {AnnotatedError} */
						const err = /* @__PURE__ */ new Error(`0 width match regex (${languageName})`);
						err.languageName = languageName;
						err.badRule = lastMatch.rule;
						throw err;
					}
					return 1;
				}
				lastMatch = match;
				if (match.type === "begin") return doBeginMatch(match);
				else if (match.type === "illegal" && !ignoreIllegals) {
					/** @type {AnnotatedError} */
					const err = /* @__PURE__ */ new Error("Illegal lexeme \"" + lexeme + "\" for mode \"" + (top.scope || "<unnamed>") + "\"");
					err.mode = top;
					throw err;
				} else if (match.type === "end") {
					const processed = doEndMatch(match);
					if (processed !== NO_MATCH) return processed;
				}
				if (match.type === "illegal" && lexeme === "") {
					modeBuffer += "\n";
					return 1;
				}
				if (iterations > 1e5 && iterations > match.index * 3) throw /* @__PURE__ */ new Error("potential infinite loop, way more iterations than matches");
				modeBuffer += lexeme;
				return lexeme.length;
			}
			const language = getLanguage(languageName);
			if (!language) {
				error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
				throw new Error("Unknown language: \"" + languageName + "\"");
			}
			const md = compileLanguage(language);
			let result = "";
			/** @type {CompiledMode} */
			let top = continuation || md;
			/** @type Record<string,CompiledMode> */
			const continuations = {};
			const emitter = new options.__emitter(options);
			processContinuations();
			let modeBuffer = "";
			let relevance = 0;
			let index = 0;
			let iterations = 0;
			let resumeScanAtSamePosition = false;
			try {
				if (!language.__emitTokens) {
					top.matcher.considerAll();
					for (;;) {
						iterations++;
						if (resumeScanAtSamePosition) resumeScanAtSamePosition = false;
						else top.matcher.considerAll();
						top.matcher.lastIndex = index;
						const match = top.matcher.exec(codeToHighlight);
						if (!match) break;
						const processedCount = processLexeme(codeToHighlight.substring(index, match.index), match);
						index = match.index + processedCount;
					}
					processLexeme(codeToHighlight.substring(index));
				} else language.__emitTokens(codeToHighlight, emitter);
				emitter.finalize();
				result = emitter.toHTML();
				return {
					language: languageName,
					value: result,
					relevance,
					illegal: false,
					_emitter: emitter,
					_top: top
				};
			} catch (err) {
				if (err.message && err.message.includes("Illegal")) return {
					language: languageName,
					value: escape(codeToHighlight),
					illegal: true,
					relevance: 0,
					_illegalBy: {
						message: err.message,
						index,
						context: codeToHighlight.slice(index - 100, index + 100),
						mode: err.mode,
						resultSoFar: result
					},
					_emitter: emitter
				};
				else if (SAFE_MODE) return {
					language: languageName,
					value: escape(codeToHighlight),
					illegal: false,
					relevance: 0,
					errorRaised: err,
					_emitter: emitter,
					_top: top
				};
				else throw err;
			}
		}
		/**
		* returns a valid highlight result, without actually doing any actual work,
		* auto highlight starts with this and it's possible for small snippets that
		* auto-detection may not find a better match
		* @param {string} code
		* @returns {HighlightResult}
		*/
		function justTextHighlightResult(code) {
			const result = {
				value: escape(code),
				illegal: false,
				relevance: 0,
				_top: PLAINTEXT_LANGUAGE,
				_emitter: new options.__emitter(options)
			};
			result._emitter.addText(code);
			return result;
		}
		/**
		Highlighting with language detection. Accepts a string with the code to
		highlight. Returns an object with the following properties:
		
		- language (detected language)
		- relevance (int)
		- value (an HTML string with highlighting markup)
		- secondBest (object with the same structure for second-best heuristically
		detected language, may be absent)
		
		@param {string} code
		@param {Array<string>} [languageSubset]
		@returns {AutoHighlightResult}
		*/
		function highlightAuto(code, languageSubset) {
			languageSubset = languageSubset || options.languages || Object.keys(languages);
			const plaintext = justTextHighlightResult(code);
			const results = languageSubset.filter(getLanguage).filter(autoDetection).map((name) => _highlight(name, code, false));
			results.unshift(plaintext);
			const [best, secondBest] = results.sort((a, b) => {
				if (a.relevance !== b.relevance) return b.relevance - a.relevance;
				if (a.language && b.language) {
					if (getLanguage(a.language).supersetOf === b.language) return 1;
					else if (getLanguage(b.language).supersetOf === a.language) return -1;
				}
				return 0;
			});
			/** @type {AutoHighlightResult} */
			const result = best;
			result.secondBest = secondBest;
			return result;
		}
		/**
		* Builds new class name for block given the language name
		*
		* @param {HTMLElement} element
		* @param {string} [currentLang]
		* @param {string} [resultLang]
		*/
		function updateClassName(element, currentLang, resultLang) {
			const language = currentLang && aliases[currentLang] || resultLang;
			element.classList.add("hljs");
			element.classList.add(`language-${language}`);
		}
		/**
		* Applies highlighting to a DOM node containing code.
		*
		* @param {HighlightedHTMLElement} element - the HTML element to highlight
		*/
		function highlightElement(element) {
			/** @type HTMLElement */
			let node = null;
			const language = blockLanguage(element);
			if (shouldNotHighlight(language)) return;
			fire("before:highlightElement", {
				el: element,
				language
			});
			if (element.dataset.highlighted) {
				console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
				return;
			}
			if (element.children.length > 0) {
				if (!options.ignoreUnescapedHTML) {
					console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
					console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
					console.warn("The element with unescaped HTML:");
					console.warn(element);
				}
				if (options.throwUnescapedHTML) throw new HTMLInjectionError("One of your code blocks includes unescaped HTML.", element.innerHTML);
			}
			node = element;
			const text = node.textContent;
			const result = language ? highlight(text, {
				language,
				ignoreIllegals: true
			}) : highlightAuto(text);
			element.innerHTML = result.value;
			element.dataset.highlighted = "yes";
			updateClassName(element, language, result.language);
			element.result = {
				language: result.language,
				re: result.relevance,
				relevance: result.relevance
			};
			if (result.secondBest) element.secondBest = {
				language: result.secondBest.language,
				relevance: result.secondBest.relevance
			};
			fire("after:highlightElement", {
				el: element,
				result,
				text
			});
		}
		/**
		* Updates highlight.js global options with the passed options
		*
		* @param {Partial<HLJSOptions>} userOptions
		*/
		function configure(userOptions) {
			options = inherit(options, userOptions);
		}
		const initHighlighting = () => {
			highlightAll();
			deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
		};
		function initHighlightingOnLoad() {
			highlightAll();
			deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
		}
		let wantsHighlight = false;
		/**
		* auto-highlights all pre>code elements on the page
		*/
		function highlightAll() {
			function boot() {
				highlightAll();
			}
			if (document.readyState === "loading") {
				if (!wantsHighlight) window.addEventListener("DOMContentLoaded", boot, false);
				wantsHighlight = true;
				return;
			}
			document.querySelectorAll(options.cssSelector).forEach(highlightElement);
		}
		/**
		* Register a language grammar module
		*
		* @param {string} languageName
		* @param {LanguageFn} languageDefinition
		*/
		function registerLanguage(languageName, languageDefinition) {
			let lang = null;
			try {
				lang = languageDefinition(hljs);
			} catch (error$1) {
				error("Language definition for '{}' could not be registered.".replace("{}", languageName));
				if (!SAFE_MODE) throw error$1;
				else error(error$1);
				lang = PLAINTEXT_LANGUAGE;
			}
			if (!lang.name) lang.name = languageName;
			languages[languageName] = lang;
			lang.rawDefinition = languageDefinition.bind(null, hljs);
			if (lang.aliases) registerAliases(lang.aliases, { languageName });
		}
		/**
		* Remove a language grammar module
		*
		* @param {string} languageName
		*/
		function unregisterLanguage(languageName) {
			delete languages[languageName];
			for (const alias of Object.keys(aliases)) if (aliases[alias] === languageName) delete aliases[alias];
		}
		/**
		* @returns {string[]} List of language internal names
		*/
		function listLanguages() {
			return Object.keys(languages);
		}
		/**
		* @param {string} name - name of the language to retrieve
		* @returns {Language | undefined}
		*/
		function getLanguage(name) {
			name = (name || "").toLowerCase();
			return languages[name] || languages[aliases[name]];
		}
		/**
		*
		* @param {string|string[]} aliasList - single alias or list of aliases
		* @param {{languageName: string}} opts
		*/
		function registerAliases(aliasList, { languageName }) {
			if (typeof aliasList === "string") aliasList = [aliasList];
			aliasList.forEach((alias) => {
				aliases[alias.toLowerCase()] = languageName;
			});
		}
		/**
		* Determines if a given language has auto-detection enabled
		* @param {string} name - name of the language
		*/
		function autoDetection(name) {
			const lang = getLanguage(name);
			return lang && !lang.disableAutodetect;
		}
		/**
		* Upgrades the old highlightBlock plugins to the new
		* highlightElement API
		* @param {HLJSPlugin} plugin
		*/
		function upgradePluginAPI(plugin) {
			if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) plugin["before:highlightElement"] = (data) => {
				plugin["before:highlightBlock"](Object.assign({ block: data.el }, data));
			};
			if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) plugin["after:highlightElement"] = (data) => {
				plugin["after:highlightBlock"](Object.assign({ block: data.el }, data));
			};
		}
		/**
		* @param {HLJSPlugin} plugin
		*/
		function addPlugin(plugin) {
			upgradePluginAPI(plugin);
			plugins.push(plugin);
		}
		/**
		* @param {HLJSPlugin} plugin
		*/
		function removePlugin(plugin) {
			const index = plugins.indexOf(plugin);
			if (index !== -1) plugins.splice(index, 1);
		}
		/**
		*
		* @param {PluginEvent} event
		* @param {any} args
		*/
		function fire(event, args) {
			const cb = event;
			plugins.forEach(function(plugin) {
				if (plugin[cb]) plugin[cb](args);
			});
		}
		/**
		* DEPRECATED
		* @param {HighlightedHTMLElement} el
		*/
		function deprecateHighlightBlock(el) {
			deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
			deprecated("10.7.0", "Please use highlightElement now.");
			return highlightElement(el);
		}
		Object.assign(hljs, {
			highlight,
			highlightAuto,
			highlightAll,
			highlightElement,
			highlightBlock: deprecateHighlightBlock,
			configure,
			initHighlighting,
			initHighlightingOnLoad,
			registerLanguage,
			unregisterLanguage,
			listLanguages,
			getLanguage,
			registerAliases,
			autoDetection,
			inherit,
			addPlugin,
			removePlugin
		});
		hljs.debugMode = function() {
			SAFE_MODE = false;
		};
		hljs.safeMode = function() {
			SAFE_MODE = true;
		};
		hljs.versionString = version;
		hljs.regex = {
			concat,
			lookahead,
			either,
			optional,
			anyNumberOfTimes
		};
		for (const key in MODES) if (typeof MODES[key] === "object") deepFreeze(MODES[key]);
		Object.assign(hljs, MODES);
		return hljs;
	};
	var highlight = HLJS({});
	highlight.newInstance = () => HLJS({});
	module.exports = highlight;
	highlight.HighlightJS = highlight;
	highlight.default = highlight;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/xml.js
var require_xml = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function xml(hljs) {
		const regex = hljs.regex;
		const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
		const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
		const XML_ENTITIES = {
			className: "symbol",
			begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
		};
		const XML_META_KEYWORDS = {
			begin: /\s/,
			contains: [{
				className: "keyword",
				begin: /#?[a-z_][a-z1-9_-]+/,
				illegal: /\n/
			}]
		};
		const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
			begin: /\(/,
			end: /\)/
		});
		const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
		const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
		const TAG_INTERNALS = {
			endsWithParent: true,
			illegal: /</,
			relevance: 0,
			contains: [{
				className: "attr",
				begin: XML_IDENT_RE,
				relevance: 0
			}, {
				begin: /=\s*/,
				relevance: 0,
				contains: [{
					className: "string",
					endsParent: true,
					variants: [
						{
							begin: /"/,
							end: /"/,
							contains: [XML_ENTITIES]
						},
						{
							begin: /'/,
							end: /'/,
							contains: [XML_ENTITIES]
						},
						{ begin: /[^\s"'=<>`]+/ }
					]
				}]
			}]
		};
		return {
			name: "HTML, XML",
			aliases: [
				"html",
				"xhtml",
				"rss",
				"atom",
				"xjb",
				"xsd",
				"xsl",
				"plist",
				"wsf",
				"svg"
			],
			case_insensitive: true,
			unicodeRegex: true,
			contains: [
				{
					className: "meta",
					begin: /<![a-z]/,
					end: />/,
					relevance: 10,
					contains: [
						XML_META_KEYWORDS,
						QUOTE_META_STRING_MODE,
						APOS_META_STRING_MODE,
						XML_META_PAR_KEYWORDS,
						{
							begin: /\[/,
							end: /\]/,
							contains: [{
								className: "meta",
								begin: /<![a-z]/,
								end: />/,
								contains: [
									XML_META_KEYWORDS,
									XML_META_PAR_KEYWORDS,
									QUOTE_META_STRING_MODE,
									APOS_META_STRING_MODE
								]
							}]
						}
					]
				},
				hljs.COMMENT(/<!--/, /-->/, { relevance: 10 }),
				{
					begin: /<!\[CDATA\[/,
					end: /\]\]>/,
					relevance: 10
				},
				XML_ENTITIES,
				{
					className: "meta",
					end: /\?>/,
					variants: [{
						begin: /<\?xml/,
						relevance: 10,
						contains: [QUOTE_META_STRING_MODE]
					}, { begin: /<\?[a-z][a-z0-9]+/ }]
				},
				{
					className: "tag",
					begin: /<style(?=\s|>)/,
					end: />/,
					keywords: { name: "style" },
					contains: [TAG_INTERNALS],
					starts: {
						end: /<\/style>/,
						returnEnd: true,
						subLanguage: ["css", "xml"]
					}
				},
				{
					className: "tag",
					begin: /<script(?=\s|>)/,
					end: />/,
					keywords: { name: "script" },
					contains: [TAG_INTERNALS],
					starts: {
						end: /<\/script>/,
						returnEnd: true,
						subLanguage: [
							"javascript",
							"handlebars",
							"xml"
						]
					}
				},
				{
					className: "tag",
					begin: /<>|<\/>/
				},
				{
					className: "tag",
					begin: regex.concat(/</, regex.lookahead(regex.concat(TAG_NAME_RE, regex.either(/\/>/, />/, /\s/)))),
					end: /\/?>/,
					contains: [{
						className: "name",
						begin: TAG_NAME_RE,
						relevance: 0,
						starts: TAG_INTERNALS
					}]
				},
				{
					className: "tag",
					begin: regex.concat(/<\//, regex.lookahead(regex.concat(TAG_NAME_RE, />/))),
					contains: [{
						className: "name",
						begin: TAG_NAME_RE,
						relevance: 0
					}, {
						begin: />/,
						relevance: 0,
						endsParent: true
					}]
				}
			]
		};
	}
	module.exports = xml;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/bash.js
var require_bash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function bash(hljs) {
		const regex = hljs.regex;
		const VAR = {};
		const BRACED_VAR = {
			begin: /\$\{/,
			end: /\}/,
			contains: ["self", {
				begin: /:-/,
				contains: [VAR]
			}]
		};
		Object.assign(VAR, {
			className: "variable",
			variants: [{ begin: regex.concat(/\$[\w\d#@][\w\d_]*/, `(?![\\w\\d])(?![$])`) }, BRACED_VAR]
		});
		const SUBST = {
			className: "subst",
			begin: /\$\(/,
			end: /\)/,
			contains: [hljs.BACKSLASH_ESCAPE]
		};
		const COMMENT = hljs.inherit(hljs.COMMENT(), {
			match: [/(^|\s)/, /#.*$/],
			scope: { 2: "comment" }
		});
		const HERE_DOC = {
			begin: /<<-?\s*(?=\w+)/,
			starts: { contains: [hljs.END_SAME_AS_BEGIN({
				begin: /(\w+)/,
				end: /(\w+)/,
				className: "string"
			})] }
		};
		const QUOTE_STRING = {
			className: "string",
			begin: /"/,
			end: /"/,
			contains: [
				hljs.BACKSLASH_ESCAPE,
				VAR,
				SUBST
			]
		};
		SUBST.contains.push(QUOTE_STRING);
		const ESCAPED_QUOTE = { match: /\\"/ };
		const APOS_STRING = {
			className: "string",
			begin: /'/,
			end: /'/
		};
		const ESCAPED_APOS = { match: /\\'/ };
		const ARITHMETIC = {
			begin: /\$?\(\(/,
			end: /\)\)/,
			contains: [
				{
					begin: /\d+#[0-9a-f]+/,
					className: "number"
				},
				hljs.NUMBER_MODE,
				VAR
			]
		};
		const KNOWN_SHEBANG = hljs.SHEBANG({
			binary: `(${[
				"fish",
				"bash",
				"zsh",
				"sh",
				"csh",
				"ksh",
				"tcsh",
				"dash",
				"scsh"
			].join("|")})`,
			relevance: 10
		});
		const FUNCTION = {
			className: "function",
			begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
			returnBegin: true,
			contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
			relevance: 0
		};
		const KEYWORDS = [
			"if",
			"then",
			"else",
			"elif",
			"fi",
			"time",
			"for",
			"while",
			"until",
			"in",
			"do",
			"done",
			"case",
			"esac",
			"coproc",
			"function",
			"select"
		];
		const LITERALS = ["true", "false"];
		const PATH_MODE = { match: /(\/[a-z._-]+)+/ };
		const SHELL_BUILT_INS = [
			"break",
			"cd",
			"continue",
			"eval",
			"exec",
			"exit",
			"export",
			"getopts",
			"hash",
			"pwd",
			"readonly",
			"return",
			"shift",
			"test",
			"times",
			"trap",
			"umask",
			"unset"
		];
		const BASH_BUILT_INS = [
			"alias",
			"bind",
			"builtin",
			"caller",
			"command",
			"declare",
			"echo",
			"enable",
			"help",
			"let",
			"local",
			"logout",
			"mapfile",
			"printf",
			"read",
			"readarray",
			"source",
			"sudo",
			"type",
			"typeset",
			"ulimit",
			"unalias"
		];
		const ZSH_BUILT_INS = [
			"autoload",
			"bg",
			"bindkey",
			"bye",
			"cap",
			"chdir",
			"clone",
			"comparguments",
			"compcall",
			"compctl",
			"compdescribe",
			"compfiles",
			"compgroups",
			"compquote",
			"comptags",
			"comptry",
			"compvalues",
			"dirs",
			"disable",
			"disown",
			"echotc",
			"echoti",
			"emulate",
			"fc",
			"fg",
			"float",
			"functions",
			"getcap",
			"getln",
			"history",
			"integer",
			"jobs",
			"kill",
			"limit",
			"log",
			"noglob",
			"popd",
			"print",
			"pushd",
			"pushln",
			"rehash",
			"sched",
			"setcap",
			"setopt",
			"stat",
			"suspend",
			"ttyctl",
			"unfunction",
			"unhash",
			"unlimit",
			"unsetopt",
			"vared",
			"wait",
			"whence",
			"where",
			"which",
			"zcompile",
			"zformat",
			"zftp",
			"zle",
			"zmodload",
			"zparseopts",
			"zprof",
			"zpty",
			"zregexparse",
			"zsocket",
			"zstyle",
			"ztcp"
		];
		const GNU_CORE_UTILS = [
			"chcon",
			"chgrp",
			"chown",
			"chmod",
			"cp",
			"dd",
			"df",
			"dir",
			"dircolors",
			"ln",
			"ls",
			"mkdir",
			"mkfifo",
			"mknod",
			"mktemp",
			"mv",
			"realpath",
			"rm",
			"rmdir",
			"shred",
			"sync",
			"touch",
			"truncate",
			"vdir",
			"b2sum",
			"base32",
			"base64",
			"cat",
			"cksum",
			"comm",
			"csplit",
			"cut",
			"expand",
			"fmt",
			"fold",
			"head",
			"join",
			"md5sum",
			"nl",
			"numfmt",
			"od",
			"paste",
			"ptx",
			"pr",
			"sha1sum",
			"sha224sum",
			"sha256sum",
			"sha384sum",
			"sha512sum",
			"shuf",
			"sort",
			"split",
			"sum",
			"tac",
			"tail",
			"tr",
			"tsort",
			"unexpand",
			"uniq",
			"wc",
			"arch",
			"basename",
			"chroot",
			"date",
			"dirname",
			"du",
			"echo",
			"env",
			"expr",
			"factor",
			"groups",
			"hostid",
			"id",
			"link",
			"logname",
			"nice",
			"nohup",
			"nproc",
			"pathchk",
			"pinky",
			"printenv",
			"printf",
			"pwd",
			"readlink",
			"runcon",
			"seq",
			"sleep",
			"stat",
			"stdbuf",
			"stty",
			"tee",
			"test",
			"timeout",
			"tty",
			"uname",
			"unlink",
			"uptime",
			"users",
			"who",
			"whoami",
			"yes"
		];
		return {
			name: "Bash",
			aliases: ["sh", "zsh"],
			keywords: {
				$pattern: /\b[a-z][a-z0-9._-]+\b/,
				keyword: KEYWORDS,
				literal: LITERALS,
				built_in: [
					...SHELL_BUILT_INS,
					...BASH_BUILT_INS,
					"set",
					"shopt",
					...ZSH_BUILT_INS,
					...GNU_CORE_UTILS
				]
			},
			contains: [
				KNOWN_SHEBANG,
				hljs.SHEBANG(),
				FUNCTION,
				ARITHMETIC,
				COMMENT,
				HERE_DOC,
				PATH_MODE,
				QUOTE_STRING,
				ESCAPED_QUOTE,
				APOS_STRING,
				ESCAPED_APOS,
				VAR
			]
		};
	}
	module.exports = bash;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/c.js
var require_c = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function c(hljs) {
		const regex = hljs.regex;
		const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
		const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
		const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
		const FUNCTION_TYPE_RE = "(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional("<[^<>]+>") + ")";
		const TYPES = {
			className: "type",
			variants: [{ begin: "\\b[a-z\\d_]*_t\\b" }, { match: /\batomic_[a-z]{3,6}\b/ }]
		};
		const STRINGS = {
			className: "string",
			variants: [
				{
					begin: "(u8?|U|L)?\"",
					end: "\"",
					illegal: "\\n",
					contains: [hljs.BACKSLASH_ESCAPE]
				},
				{
					begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
					end: "'",
					illegal: "."
				},
				hljs.END_SAME_AS_BEGIN({
					begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
					end: /\)([^()\\ ]{0,16})"/
				})
			]
		};
		const NUMBERS = {
			className: "number",
			variants: [
				{ match: /\b(0b[01']+)/ },
				{ match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
				{ match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
				{ match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
			],
			relevance: 0
		};
		const PREPROCESSOR = {
			className: "meta",
			begin: /#\s*[a-z]+\b/,
			end: /$/,
			keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
			contains: [
				{
					begin: /\\\n/,
					relevance: 0
				},
				hljs.inherit(STRINGS, { className: "string" }),
				{
					className: "string",
					begin: /<.*?>/
				},
				C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE
			]
		};
		const TITLE_MODE = {
			className: "title",
			begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
			relevance: 0
		};
		const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
		const KEYWORDS = {
			keyword: [
				"asm",
				"auto",
				"break",
				"case",
				"continue",
				"default",
				"do",
				"else",
				"enum",
				"extern",
				"for",
				"fortran",
				"goto",
				"if",
				"inline",
				"register",
				"restrict",
				"return",
				"sizeof",
				"typeof",
				"typeof_unqual",
				"struct",
				"switch",
				"typedef",
				"union",
				"volatile",
				"while",
				"_Alignas",
				"_Alignof",
				"_Atomic",
				"_Generic",
				"_Noreturn",
				"_Static_assert",
				"_Thread_local",
				"alignas",
				"alignof",
				"noreturn",
				"static_assert",
				"thread_local",
				"_Pragma"
			],
			type: [
				"float",
				"double",
				"signed",
				"unsigned",
				"int",
				"short",
				"long",
				"char",
				"void",
				"_Bool",
				"_BitInt",
				"_Complex",
				"_Imaginary",
				"_Decimal32",
				"_Decimal64",
				"_Decimal96",
				"_Decimal128",
				"_Decimal64x",
				"_Decimal128x",
				"_Float16",
				"_Float32",
				"_Float64",
				"_Float128",
				"_Float32x",
				"_Float64x",
				"_Float128x",
				"const",
				"static",
				"constexpr",
				"complex",
				"bool",
				"imaginary"
			],
			literal: "true false NULL",
			built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
		};
		const EXPRESSION_CONTAINS = [
			PREPROCESSOR,
			TYPES,
			C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE,
			NUMBERS,
			STRINGS
		];
		const EXPRESSION_CONTEXT = {
			variants: [
				{
					begin: /=/,
					end: /;/
				},
				{
					begin: /\(/,
					end: /\)/
				},
				{
					beginKeywords: "new throw return else",
					end: /;/
				}
			],
			keywords: KEYWORDS,
			contains: EXPRESSION_CONTAINS.concat([{
				begin: /\(/,
				end: /\)/,
				keywords: KEYWORDS,
				contains: EXPRESSION_CONTAINS.concat(["self"]),
				relevance: 0
			}]),
			relevance: 0
		};
		const FUNCTION_DECLARATION = {
			begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
			returnBegin: true,
			end: /[{;=]/,
			excludeEnd: true,
			keywords: KEYWORDS,
			illegal: /[^\w\s\*&:<>.]/,
			contains: [
				{
					begin: DECLTYPE_AUTO_RE,
					keywords: KEYWORDS,
					relevance: 0
				},
				{
					begin: FUNCTION_TITLE,
					returnBegin: true,
					contains: [hljs.inherit(TITLE_MODE, { className: "title.function" })],
					relevance: 0
				},
				{
					relevance: 0,
					match: /,/
				},
				{
					className: "params",
					begin: /\(/,
					end: /\)/,
					keywords: KEYWORDS,
					relevance: 0,
					contains: [
						C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE,
						STRINGS,
						NUMBERS,
						TYPES,
						{
							begin: /\(/,
							end: /\)/,
							keywords: KEYWORDS,
							relevance: 0,
							contains: [
								"self",
								C_LINE_COMMENT_MODE,
								hljs.C_BLOCK_COMMENT_MODE,
								STRINGS,
								NUMBERS,
								TYPES
							]
						}
					]
				},
				TYPES,
				C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				PREPROCESSOR
			]
		};
		return {
			name: "C",
			aliases: ["h"],
			keywords: KEYWORDS,
			disableAutodetect: true,
			illegal: "</",
			contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, EXPRESSION_CONTAINS, [
				PREPROCESSOR,
				{
					begin: hljs.IDENT_RE + "::",
					keywords: KEYWORDS
				},
				{
					className: "class",
					beginKeywords: "enum class struct union",
					end: /[{;:<>=]/,
					contains: [{ beginKeywords: "final class struct" }, hljs.TITLE_MODE]
				}
			]),
			exports: {
				preprocessor: PREPROCESSOR,
				strings: STRINGS,
				keywords: KEYWORDS
			}
		};
	}
	module.exports = c;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/cpp.js
var require_cpp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function cpp(hljs) {
		const regex = hljs.regex;
		const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] });
		const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
		const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
		const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional("<[^<>]+>") + ")";
		const CPP_PRIMITIVE_TYPES = {
			className: "type",
			begin: "\\b[a-z\\d_]*_t\\b"
		};
		const STRINGS = {
			className: "string",
			variants: [
				{
					begin: "(u8?|U|L)?\"",
					end: "\"",
					illegal: "\\n",
					contains: [hljs.BACKSLASH_ESCAPE]
				},
				{
					begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
					end: "'",
					illegal: "."
				},
				hljs.END_SAME_AS_BEGIN({
					begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
					end: /\)([^()\\ ]{0,16})"/
				})
			]
		};
		const NUMBERS = {
			className: "number",
			variants: [{ begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)" }, { begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)" }],
			relevance: 0
		};
		const PREPROCESSOR = {
			className: "meta",
			begin: /#\s*[a-z]+\b/,
			end: /$/,
			keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
			contains: [
				{
					begin: /\\\n/,
					relevance: 0
				},
				hljs.inherit(STRINGS, { className: "string" }),
				{
					className: "string",
					begin: /<.*?>/
				},
				C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE
			]
		};
		const TITLE_MODE = {
			className: "title",
			begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
			relevance: 0
		};
		const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
		const RESERVED_KEYWORDS = [
			"alignas",
			"alignof",
			"and",
			"and_eq",
			"asm",
			"atomic_cancel",
			"atomic_commit",
			"atomic_noexcept",
			"auto",
			"bitand",
			"bitor",
			"break",
			"case",
			"catch",
			"class",
			"co_await",
			"co_return",
			"co_yield",
			"compl",
			"concept",
			"const_cast|10",
			"consteval",
			"constexpr",
			"constinit",
			"continue",
			"decltype",
			"default",
			"delete",
			"do",
			"dynamic_cast|10",
			"else",
			"enum",
			"explicit",
			"export",
			"extern",
			"false",
			"final",
			"for",
			"friend",
			"goto",
			"if",
			"import",
			"inline",
			"module",
			"mutable",
			"namespace",
			"new",
			"noexcept",
			"not",
			"not_eq",
			"nullptr",
			"operator",
			"or",
			"or_eq",
			"override",
			"private",
			"protected",
			"public",
			"reflexpr",
			"register",
			"reinterpret_cast|10",
			"requires",
			"return",
			"sizeof",
			"static_assert",
			"static_cast|10",
			"struct",
			"switch",
			"synchronized",
			"template",
			"this",
			"thread_local",
			"throw",
			"transaction_safe",
			"transaction_safe_dynamic",
			"true",
			"try",
			"typedef",
			"typeid",
			"typename",
			"union",
			"using",
			"virtual",
			"volatile",
			"while",
			"xor",
			"xor_eq"
		];
		const RESERVED_TYPES = [
			"bool",
			"char",
			"char16_t",
			"char32_t",
			"char8_t",
			"double",
			"float",
			"int",
			"long",
			"short",
			"void",
			"wchar_t",
			"unsigned",
			"signed",
			"const",
			"static"
		];
		const TYPE_HINTS = [
			"any",
			"auto_ptr",
			"barrier",
			"binary_semaphore",
			"bitset",
			"complex",
			"condition_variable",
			"condition_variable_any",
			"counting_semaphore",
			"deque",
			"false_type",
			"flat_map",
			"flat_set",
			"future",
			"imaginary",
			"initializer_list",
			"istringstream",
			"jthread",
			"latch",
			"lock_guard",
			"multimap",
			"multiset",
			"mutex",
			"optional",
			"ostringstream",
			"packaged_task",
			"pair",
			"promise",
			"priority_queue",
			"queue",
			"recursive_mutex",
			"recursive_timed_mutex",
			"scoped_lock",
			"set",
			"shared_future",
			"shared_lock",
			"shared_mutex",
			"shared_timed_mutex",
			"shared_ptr",
			"stack",
			"string_view",
			"stringstream",
			"timed_mutex",
			"thread",
			"true_type",
			"tuple",
			"unique_lock",
			"unique_ptr",
			"unordered_map",
			"unordered_multimap",
			"unordered_multiset",
			"unordered_set",
			"variant",
			"vector",
			"weak_ptr",
			"wstring",
			"wstring_view"
		];
		const FUNCTION_HINTS = [
			"abort",
			"abs",
			"acos",
			"apply",
			"as_const",
			"asin",
			"atan",
			"atan2",
			"calloc",
			"ceil",
			"cerr",
			"cin",
			"clog",
			"cos",
			"cosh",
			"cout",
			"declval",
			"endl",
			"exchange",
			"exit",
			"exp",
			"fabs",
			"floor",
			"fmod",
			"forward",
			"fprintf",
			"fputs",
			"free",
			"frexp",
			"fscanf",
			"future",
			"invoke",
			"isalnum",
			"isalpha",
			"iscntrl",
			"isdigit",
			"isgraph",
			"islower",
			"isprint",
			"ispunct",
			"isspace",
			"isupper",
			"isxdigit",
			"labs",
			"launder",
			"ldexp",
			"log",
			"log10",
			"make_pair",
			"make_shared",
			"make_shared_for_overwrite",
			"make_tuple",
			"make_unique",
			"malloc",
			"memchr",
			"memcmp",
			"memcpy",
			"memset",
			"modf",
			"move",
			"pow",
			"printf",
			"putchar",
			"puts",
			"realloc",
			"scanf",
			"sin",
			"sinh",
			"snprintf",
			"sprintf",
			"sqrt",
			"sscanf",
			"std",
			"stderr",
			"stdin",
			"stdout",
			"strcat",
			"strchr",
			"strcmp",
			"strcpy",
			"strcspn",
			"strlen",
			"strncat",
			"strncmp",
			"strncpy",
			"strpbrk",
			"strrchr",
			"strspn",
			"strstr",
			"swap",
			"tan",
			"tanh",
			"terminate",
			"to_underlying",
			"tolower",
			"toupper",
			"vfprintf",
			"visit",
			"vprintf",
			"vsprintf"
		];
		const CPP_KEYWORDS = {
			type: RESERVED_TYPES,
			keyword: RESERVED_KEYWORDS,
			literal: [
				"NULL",
				"false",
				"nullopt",
				"nullptr",
				"true"
			],
			built_in: ["_Pragma"],
			_type_hints: TYPE_HINTS
		};
		const FUNCTION_DISPATCH = {
			className: "function.dispatch",
			relevance: 0,
			keywords: { _hint: FUNCTION_HINTS },
			begin: regex.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, hljs.IDENT_RE, regex.lookahead(/(<[^<>]+>|)\s*\(/))
		};
		const EXPRESSION_CONTAINS = [
			FUNCTION_DISPATCH,
			PREPROCESSOR,
			CPP_PRIMITIVE_TYPES,
			C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE,
			NUMBERS,
			STRINGS
		];
		const EXPRESSION_CONTEXT = {
			variants: [
				{
					begin: /=/,
					end: /;/
				},
				{
					begin: /\(/,
					end: /\)/
				},
				{
					beginKeywords: "new throw return else",
					end: /;/
				}
			],
			keywords: CPP_KEYWORDS,
			contains: EXPRESSION_CONTAINS.concat([{
				begin: /\(/,
				end: /\)/,
				keywords: CPP_KEYWORDS,
				contains: EXPRESSION_CONTAINS.concat(["self"]),
				relevance: 0
			}]),
			relevance: 0
		};
		const FUNCTION_DECLARATION = {
			className: "function",
			begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
			returnBegin: true,
			end: /[{;=]/,
			excludeEnd: true,
			keywords: CPP_KEYWORDS,
			illegal: /[^\w\s\*&:<>.]/,
			contains: [
				{
					begin: DECLTYPE_AUTO_RE,
					keywords: CPP_KEYWORDS,
					relevance: 0
				},
				{
					begin: FUNCTION_TITLE,
					returnBegin: true,
					contains: [TITLE_MODE],
					relevance: 0
				},
				{
					begin: /::/,
					relevance: 0
				},
				{
					begin: /:/,
					endsWithParent: true,
					contains: [STRINGS, NUMBERS]
				},
				{
					relevance: 0,
					match: /,/
				},
				{
					className: "params",
					begin: /\(/,
					end: /\)/,
					keywords: CPP_KEYWORDS,
					relevance: 0,
					contains: [
						C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE,
						STRINGS,
						NUMBERS,
						CPP_PRIMITIVE_TYPES,
						{
							begin: /\(/,
							end: /\)/,
							keywords: CPP_KEYWORDS,
							relevance: 0,
							contains: [
								"self",
								C_LINE_COMMENT_MODE,
								hljs.C_BLOCK_COMMENT_MODE,
								STRINGS,
								NUMBERS,
								CPP_PRIMITIVE_TYPES
							]
						}
					]
				},
				CPP_PRIMITIVE_TYPES,
				C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				PREPROCESSOR
			]
		};
		return {
			name: "C++",
			aliases: [
				"cc",
				"c++",
				"h++",
				"hpp",
				"hh",
				"hxx",
				"cxx"
			],
			keywords: CPP_KEYWORDS,
			illegal: "</",
			classNameAliases: { "function.dispatch": "built_in" },
			contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, FUNCTION_DISPATCH, EXPRESSION_CONTAINS, [
				PREPROCESSOR,
				{
					begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
					end: ">",
					keywords: CPP_KEYWORDS,
					contains: ["self", CPP_PRIMITIVE_TYPES]
				},
				{
					begin: hljs.IDENT_RE + "::",
					keywords: CPP_KEYWORDS
				},
				{
					match: [
						/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
						/\s+/,
						/\w+/
					],
					className: {
						1: "keyword",
						3: "title.class"
					}
				}
			])
		};
	}
	module.exports = cpp;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/csharp.js
var require_csharp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function csharp(hljs) {
		const BUILT_IN_KEYWORDS = [
			"bool",
			"byte",
			"char",
			"decimal",
			"delegate",
			"double",
			"dynamic",
			"enum",
			"float",
			"int",
			"long",
			"nint",
			"nuint",
			"object",
			"sbyte",
			"short",
			"string",
			"ulong",
			"uint",
			"ushort"
		];
		const FUNCTION_MODIFIERS = [
			"public",
			"private",
			"protected",
			"static",
			"internal",
			"protected",
			"abstract",
			"async",
			"extern",
			"override",
			"unsafe",
			"virtual",
			"new",
			"sealed",
			"partial"
		];
		const KEYWORDS = {
			keyword: [
				"abstract",
				"as",
				"base",
				"break",
				"case",
				"catch",
				"class",
				"const",
				"continue",
				"do",
				"else",
				"event",
				"explicit",
				"extern",
				"finally",
				"fixed",
				"for",
				"foreach",
				"goto",
				"if",
				"implicit",
				"in",
				"interface",
				"internal",
				"is",
				"lock",
				"namespace",
				"new",
				"operator",
				"out",
				"override",
				"params",
				"private",
				"protected",
				"public",
				"readonly",
				"record",
				"ref",
				"return",
				"scoped",
				"sealed",
				"sizeof",
				"stackalloc",
				"static",
				"struct",
				"switch",
				"this",
				"throw",
				"try",
				"typeof",
				"unchecked",
				"unsafe",
				"using",
				"virtual",
				"void",
				"volatile",
				"while"
			].concat([
				"add",
				"alias",
				"and",
				"ascending",
				"args",
				"async",
				"await",
				"by",
				"descending",
				"dynamic",
				"equals",
				"file",
				"from",
				"get",
				"global",
				"group",
				"init",
				"into",
				"join",
				"let",
				"nameof",
				"not",
				"notnull",
				"on",
				"or",
				"orderby",
				"partial",
				"record",
				"remove",
				"required",
				"scoped",
				"select",
				"set",
				"unmanaged",
				"value|0",
				"var",
				"when",
				"where",
				"with",
				"yield"
			]),
			built_in: BUILT_IN_KEYWORDS,
			literal: [
				"default",
				"false",
				"null",
				"true"
			]
		};
		const TITLE_MODE = hljs.inherit(hljs.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" });
		const NUMBERS = {
			className: "number",
			variants: [
				{ begin: "\\b(0b[01']+)" },
				{ begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
				{ begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
			],
			relevance: 0
		};
		const RAW_STRING = {
			className: "string",
			begin: /"""("*)(?!")(.|\n)*?"""\1/,
			relevance: 1
		};
		const VERBATIM_STRING = {
			className: "string",
			begin: "@\"",
			end: "\"",
			contains: [{ begin: "\"\"" }]
		};
		const VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, { illegal: /\n/ });
		const SUBST = {
			className: "subst",
			begin: /\{/,
			end: /\}/,
			keywords: KEYWORDS
		};
		const SUBST_NO_LF = hljs.inherit(SUBST, { illegal: /\n/ });
		const INTERPOLATED_STRING = {
			className: "string",
			begin: /\$"/,
			end: "\"",
			illegal: /\n/,
			contains: [
				{ begin: /\{\{/ },
				{ begin: /\}\}/ },
				hljs.BACKSLASH_ESCAPE,
				SUBST_NO_LF
			]
		};
		const INTERPOLATED_VERBATIM_STRING = {
			className: "string",
			begin: /\$@"/,
			end: "\"",
			contains: [
				{ begin: /\{\{/ },
				{ begin: /\}\}/ },
				{ begin: "\"\"" },
				SUBST
			]
		};
		const INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
			illegal: /\n/,
			contains: [
				{ begin: /\{\{/ },
				{ begin: /\}\}/ },
				{ begin: "\"\"" },
				SUBST_NO_LF
			]
		});
		SUBST.contains = [
			INTERPOLATED_VERBATIM_STRING,
			INTERPOLATED_STRING,
			VERBATIM_STRING,
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE,
			NUMBERS,
			hljs.C_BLOCK_COMMENT_MODE
		];
		SUBST_NO_LF.contains = [
			INTERPOLATED_VERBATIM_STRING_NO_LF,
			INTERPOLATED_STRING,
			VERBATIM_STRING_NO_LF,
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE,
			NUMBERS,
			hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
		];
		const STRING = { variants: [
			RAW_STRING,
			INTERPOLATED_VERBATIM_STRING,
			INTERPOLATED_STRING,
			VERBATIM_STRING,
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE
		] };
		const GENERIC_MODIFIER = {
			begin: "<",
			end: ">",
			contains: [{ beginKeywords: "in out" }, TITLE_MODE]
		};
		const TYPE_IDENT_RE = hljs.IDENT_RE + "(<" + hljs.IDENT_RE + "(\\s*,\\s*" + hljs.IDENT_RE + ")*>)?(\\[\\])?";
		const AT_IDENTIFIER = {
			begin: "@" + hljs.IDENT_RE,
			relevance: 0
		};
		return {
			name: "C#",
			aliases: ["cs", "c#"],
			keywords: KEYWORDS,
			illegal: /::/,
			contains: [
				hljs.COMMENT("///", "$", {
					returnBegin: true,
					contains: [{
						className: "doctag",
						variants: [
							{
								begin: "///",
								relevance: 0
							},
							{ begin: "<!--|-->" },
							{
								begin: "</?",
								end: ">"
							}
						]
					}]
				}),
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				{
					className: "meta",
					begin: "#",
					end: "$",
					keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
				},
				STRING,
				NUMBERS,
				{
					beginKeywords: "class interface",
					relevance: 0,
					end: /[{;=]/,
					illegal: /[^\s:,]/,
					contains: [
						{ beginKeywords: "where class" },
						TITLE_MODE,
						GENERIC_MODIFIER,
						hljs.C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE
					]
				},
				{
					beginKeywords: "namespace",
					relevance: 0,
					end: /[{;=]/,
					illegal: /[^\s:]/,
					contains: [
						TITLE_MODE,
						hljs.C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE
					]
				},
				{
					beginKeywords: "record",
					relevance: 0,
					end: /[{;=]/,
					illegal: /[^\s:]/,
					contains: [
						TITLE_MODE,
						GENERIC_MODIFIER,
						hljs.C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE
					]
				},
				{
					className: "meta",
					begin: "^\\s*\\[(?=[\\w])",
					excludeBegin: true,
					end: "\\]",
					excludeEnd: true,
					contains: [{
						className: "string",
						begin: /"/,
						end: /"/
					}]
				},
				{
					beginKeywords: "new return throw await else",
					relevance: 0
				},
				{
					className: "function",
					begin: "(" + TYPE_IDENT_RE + "\\s+)+" + hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
					returnBegin: true,
					end: /\s*[{;=]/,
					excludeEnd: true,
					keywords: KEYWORDS,
					contains: [
						{
							beginKeywords: FUNCTION_MODIFIERS.join(" "),
							relevance: 0
						},
						{
							begin: hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
							returnBegin: true,
							contains: [hljs.TITLE_MODE, GENERIC_MODIFIER],
							relevance: 0
						},
						{ match: /\(\)/ },
						{
							className: "params",
							begin: /\(/,
							end: /\)/,
							excludeBegin: true,
							excludeEnd: true,
							keywords: KEYWORDS,
							relevance: 0,
							contains: [
								STRING,
								NUMBERS,
								hljs.C_BLOCK_COMMENT_MODE
							]
						},
						hljs.C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE
					]
				},
				AT_IDENTIFIER
			]
		};
	}
	module.exports = csharp;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/css.js
var require_css = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MODES = (hljs) => {
		return {
			IMPORTANT: {
				scope: "meta",
				begin: "!important"
			},
			BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
			HEXCOLOR: {
				scope: "number",
				begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
			},
			FUNCTION_DISPATCH: {
				className: "built_in",
				begin: /[\w-]+(?=\()/
			},
			ATTRIBUTE_SELECTOR_MODE: {
				scope: "selector-attr",
				begin: /\[/,
				end: /\]/,
				illegal: "$",
				contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
			},
			CSS_NUMBER_MODE: {
				scope: "number",
				begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
				relevance: 0
			},
			CSS_VARIABLE: {
				className: "attr",
				begin: /--[A-Za-z_][A-Za-z0-9_-]*/
			}
		};
	};
	var HTML_TAGS = [
		"a",
		"abbr",
		"address",
		"article",
		"aside",
		"audio",
		"b",
		"blockquote",
		"body",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"dd",
		"del",
		"details",
		"dfn",
		"div",
		"dl",
		"dt",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"header",
		"hgroup",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"mark",
		"menu",
		"nav",
		"object",
		"ol",
		"optgroup",
		"option",
		"p",
		"picture",
		"q",
		"quote",
		"samp",
		"section",
		"select",
		"source",
		"span",
		"strong",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"ul",
		"var",
		"video"
	];
	var SVG_TAGS = [
		"defs",
		"g",
		"marker",
		"mask",
		"pattern",
		"svg",
		"switch",
		"symbol",
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feFlood",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMorphology",
		"feOffset",
		"feSpecularLighting",
		"feTile",
		"feTurbulence",
		"linearGradient",
		"radialGradient",
		"stop",
		"circle",
		"ellipse",
		"image",
		"line",
		"path",
		"polygon",
		"polyline",
		"rect",
		"text",
		"use",
		"textPath",
		"tspan",
		"foreignObject",
		"clipPath"
	];
	var TAGS = [...HTML_TAGS, ...SVG_TAGS];
	var MEDIA_FEATURES = [
		"any-hover",
		"any-pointer",
		"aspect-ratio",
		"color",
		"color-gamut",
		"color-index",
		"device-aspect-ratio",
		"device-height",
		"device-width",
		"display-mode",
		"forced-colors",
		"grid",
		"height",
		"hover",
		"inverted-colors",
		"monochrome",
		"orientation",
		"overflow-block",
		"overflow-inline",
		"pointer",
		"prefers-color-scheme",
		"prefers-contrast",
		"prefers-reduced-motion",
		"prefers-reduced-transparency",
		"resolution",
		"scan",
		"scripting",
		"update",
		"width",
		"min-width",
		"max-width",
		"min-height",
		"max-height"
	].sort().reverse();
	var PSEUDO_CLASSES = [
		"active",
		"any-link",
		"blank",
		"checked",
		"current",
		"default",
		"defined",
		"dir",
		"disabled",
		"drop",
		"empty",
		"enabled",
		"first",
		"first-child",
		"first-of-type",
		"fullscreen",
		"future",
		"focus",
		"focus-visible",
		"focus-within",
		"has",
		"host",
		"host-context",
		"hover",
		"indeterminate",
		"in-range",
		"invalid",
		"is",
		"lang",
		"last-child",
		"last-of-type",
		"left",
		"link",
		"local-link",
		"not",
		"nth-child",
		"nth-col",
		"nth-last-child",
		"nth-last-col",
		"nth-last-of-type",
		"nth-of-type",
		"only-child",
		"only-of-type",
		"optional",
		"out-of-range",
		"past",
		"placeholder-shown",
		"read-only",
		"read-write",
		"required",
		"right",
		"root",
		"scope",
		"target",
		"target-within",
		"user-invalid",
		"valid",
		"visited",
		"where"
	].sort().reverse();
	var PSEUDO_ELEMENTS = [
		"after",
		"backdrop",
		"before",
		"cue",
		"cue-region",
		"first-letter",
		"first-line",
		"grammar-error",
		"marker",
		"part",
		"placeholder",
		"selection",
		"slotted",
		"spelling-error"
	].sort().reverse();
	var ATTRIBUTES = [
		"accent-color",
		"align-content",
		"align-items",
		"align-self",
		"alignment-baseline",
		"all",
		"anchor-name",
		"animation",
		"animation-composition",
		"animation-delay",
		"animation-direction",
		"animation-duration",
		"animation-fill-mode",
		"animation-iteration-count",
		"animation-name",
		"animation-play-state",
		"animation-range",
		"animation-range-end",
		"animation-range-start",
		"animation-timeline",
		"animation-timing-function",
		"appearance",
		"aspect-ratio",
		"backdrop-filter",
		"backface-visibility",
		"background",
		"background-attachment",
		"background-blend-mode",
		"background-clip",
		"background-color",
		"background-image",
		"background-origin",
		"background-position",
		"background-position-x",
		"background-position-y",
		"background-repeat",
		"background-size",
		"baseline-shift",
		"block-size",
		"border",
		"border-block",
		"border-block-color",
		"border-block-end",
		"border-block-end-color",
		"border-block-end-style",
		"border-block-end-width",
		"border-block-start",
		"border-block-start-color",
		"border-block-start-style",
		"border-block-start-width",
		"border-block-style",
		"border-block-width",
		"border-bottom",
		"border-bottom-color",
		"border-bottom-left-radius",
		"border-bottom-right-radius",
		"border-bottom-style",
		"border-bottom-width",
		"border-collapse",
		"border-color",
		"border-end-end-radius",
		"border-end-start-radius",
		"border-image",
		"border-image-outset",
		"border-image-repeat",
		"border-image-slice",
		"border-image-source",
		"border-image-width",
		"border-inline",
		"border-inline-color",
		"border-inline-end",
		"border-inline-end-color",
		"border-inline-end-style",
		"border-inline-end-width",
		"border-inline-start",
		"border-inline-start-color",
		"border-inline-start-style",
		"border-inline-start-width",
		"border-inline-style",
		"border-inline-width",
		"border-left",
		"border-left-color",
		"border-left-style",
		"border-left-width",
		"border-radius",
		"border-right",
		"border-right-color",
		"border-right-style",
		"border-right-width",
		"border-spacing",
		"border-start-end-radius",
		"border-start-start-radius",
		"border-style",
		"border-top",
		"border-top-color",
		"border-top-left-radius",
		"border-top-right-radius",
		"border-top-style",
		"border-top-width",
		"border-width",
		"bottom",
		"box-align",
		"box-decoration-break",
		"box-direction",
		"box-flex",
		"box-flex-group",
		"box-lines",
		"box-ordinal-group",
		"box-orient",
		"box-pack",
		"box-shadow",
		"box-sizing",
		"break-after",
		"break-before",
		"break-inside",
		"caption-side",
		"caret-color",
		"clear",
		"clip",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"color-scheme",
		"column-count",
		"column-fill",
		"column-gap",
		"column-rule",
		"column-rule-color",
		"column-rule-style",
		"column-rule-width",
		"column-span",
		"column-width",
		"columns",
		"contain",
		"contain-intrinsic-block-size",
		"contain-intrinsic-height",
		"contain-intrinsic-inline-size",
		"contain-intrinsic-size",
		"contain-intrinsic-width",
		"container",
		"container-name",
		"container-type",
		"content",
		"content-visibility",
		"counter-increment",
		"counter-reset",
		"counter-set",
		"cue",
		"cue-after",
		"cue-before",
		"cursor",
		"cx",
		"cy",
		"direction",
		"display",
		"dominant-baseline",
		"empty-cells",
		"enable-background",
		"field-sizing",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"flex",
		"flex-basis",
		"flex-direction",
		"flex-flow",
		"flex-grow",
		"flex-shrink",
		"flex-wrap",
		"float",
		"flood-color",
		"flood-opacity",
		"flow",
		"font",
		"font-display",
		"font-family",
		"font-feature-settings",
		"font-kerning",
		"font-language-override",
		"font-optical-sizing",
		"font-palette",
		"font-size",
		"font-size-adjust",
		"font-smooth",
		"font-smoothing",
		"font-stretch",
		"font-style",
		"font-synthesis",
		"font-synthesis-position",
		"font-synthesis-small-caps",
		"font-synthesis-style",
		"font-synthesis-weight",
		"font-variant",
		"font-variant-alternates",
		"font-variant-caps",
		"font-variant-east-asian",
		"font-variant-emoji",
		"font-variant-ligatures",
		"font-variant-numeric",
		"font-variant-position",
		"font-variation-settings",
		"font-weight",
		"forced-color-adjust",
		"gap",
		"glyph-orientation-horizontal",
		"glyph-orientation-vertical",
		"grid",
		"grid-area",
		"grid-auto-columns",
		"grid-auto-flow",
		"grid-auto-rows",
		"grid-column",
		"grid-column-end",
		"grid-column-start",
		"grid-gap",
		"grid-row",
		"grid-row-end",
		"grid-row-start",
		"grid-template",
		"grid-template-areas",
		"grid-template-columns",
		"grid-template-rows",
		"hanging-punctuation",
		"height",
		"hyphenate-character",
		"hyphenate-limit-chars",
		"hyphens",
		"icon",
		"image-orientation",
		"image-rendering",
		"image-resolution",
		"ime-mode",
		"initial-letter",
		"initial-letter-align",
		"inline-size",
		"inset",
		"inset-area",
		"inset-block",
		"inset-block-end",
		"inset-block-start",
		"inset-inline",
		"inset-inline-end",
		"inset-inline-start",
		"isolation",
		"justify-content",
		"justify-items",
		"justify-self",
		"kerning",
		"left",
		"letter-spacing",
		"lighting-color",
		"line-break",
		"line-height",
		"line-height-step",
		"list-style",
		"list-style-image",
		"list-style-position",
		"list-style-type",
		"margin",
		"margin-block",
		"margin-block-end",
		"margin-block-start",
		"margin-bottom",
		"margin-inline",
		"margin-inline-end",
		"margin-inline-start",
		"margin-left",
		"margin-right",
		"margin-top",
		"margin-trim",
		"marker",
		"marker-end",
		"marker-mid",
		"marker-start",
		"marks",
		"mask",
		"mask-border",
		"mask-border-mode",
		"mask-border-outset",
		"mask-border-repeat",
		"mask-border-slice",
		"mask-border-source",
		"mask-border-width",
		"mask-clip",
		"mask-composite",
		"mask-image",
		"mask-mode",
		"mask-origin",
		"mask-position",
		"mask-repeat",
		"mask-size",
		"mask-type",
		"masonry-auto-flow",
		"math-depth",
		"math-shift",
		"math-style",
		"max-block-size",
		"max-height",
		"max-inline-size",
		"max-width",
		"min-block-size",
		"min-height",
		"min-inline-size",
		"min-width",
		"mix-blend-mode",
		"nav-down",
		"nav-index",
		"nav-left",
		"nav-right",
		"nav-up",
		"none",
		"normal",
		"object-fit",
		"object-position",
		"offset",
		"offset-anchor",
		"offset-distance",
		"offset-path",
		"offset-position",
		"offset-rotate",
		"opacity",
		"order",
		"orphans",
		"outline",
		"outline-color",
		"outline-offset",
		"outline-style",
		"outline-width",
		"overflow",
		"overflow-anchor",
		"overflow-block",
		"overflow-clip-margin",
		"overflow-inline",
		"overflow-wrap",
		"overflow-x",
		"overflow-y",
		"overlay",
		"overscroll-behavior",
		"overscroll-behavior-block",
		"overscroll-behavior-inline",
		"overscroll-behavior-x",
		"overscroll-behavior-y",
		"padding",
		"padding-block",
		"padding-block-end",
		"padding-block-start",
		"padding-bottom",
		"padding-inline",
		"padding-inline-end",
		"padding-inline-start",
		"padding-left",
		"padding-right",
		"padding-top",
		"page",
		"page-break-after",
		"page-break-before",
		"page-break-inside",
		"paint-order",
		"pause",
		"pause-after",
		"pause-before",
		"perspective",
		"perspective-origin",
		"place-content",
		"place-items",
		"place-self",
		"pointer-events",
		"position",
		"position-anchor",
		"position-visibility",
		"print-color-adjust",
		"quotes",
		"r",
		"resize",
		"rest",
		"rest-after",
		"rest-before",
		"right",
		"rotate",
		"row-gap",
		"ruby-align",
		"ruby-position",
		"scale",
		"scroll-behavior",
		"scroll-margin",
		"scroll-margin-block",
		"scroll-margin-block-end",
		"scroll-margin-block-start",
		"scroll-margin-bottom",
		"scroll-margin-inline",
		"scroll-margin-inline-end",
		"scroll-margin-inline-start",
		"scroll-margin-left",
		"scroll-margin-right",
		"scroll-margin-top",
		"scroll-padding",
		"scroll-padding-block",
		"scroll-padding-block-end",
		"scroll-padding-block-start",
		"scroll-padding-bottom",
		"scroll-padding-inline",
		"scroll-padding-inline-end",
		"scroll-padding-inline-start",
		"scroll-padding-left",
		"scroll-padding-right",
		"scroll-padding-top",
		"scroll-snap-align",
		"scroll-snap-stop",
		"scroll-snap-type",
		"scroll-timeline",
		"scroll-timeline-axis",
		"scroll-timeline-name",
		"scrollbar-color",
		"scrollbar-gutter",
		"scrollbar-width",
		"shape-image-threshold",
		"shape-margin",
		"shape-outside",
		"shape-rendering",
		"speak",
		"speak-as",
		"src",
		"stop-color",
		"stop-opacity",
		"stroke",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke-width",
		"tab-size",
		"table-layout",
		"text-align",
		"text-align-all",
		"text-align-last",
		"text-anchor",
		"text-combine-upright",
		"text-decoration",
		"text-decoration-color",
		"text-decoration-line",
		"text-decoration-skip",
		"text-decoration-skip-ink",
		"text-decoration-style",
		"text-decoration-thickness",
		"text-emphasis",
		"text-emphasis-color",
		"text-emphasis-position",
		"text-emphasis-style",
		"text-indent",
		"text-justify",
		"text-orientation",
		"text-overflow",
		"text-rendering",
		"text-shadow",
		"text-size-adjust",
		"text-transform",
		"text-underline-offset",
		"text-underline-position",
		"text-wrap",
		"text-wrap-mode",
		"text-wrap-style",
		"timeline-scope",
		"top",
		"touch-action",
		"transform",
		"transform-box",
		"transform-origin",
		"transform-style",
		"transition",
		"transition-behavior",
		"transition-delay",
		"transition-duration",
		"transition-property",
		"transition-timing-function",
		"translate",
		"unicode-bidi",
		"user-modify",
		"user-select",
		"vector-effect",
		"vertical-align",
		"view-timeline",
		"view-timeline-axis",
		"view-timeline-inset",
		"view-timeline-name",
		"view-transition-name",
		"visibility",
		"voice-balance",
		"voice-duration",
		"voice-family",
		"voice-pitch",
		"voice-range",
		"voice-rate",
		"voice-stress",
		"voice-volume",
		"white-space",
		"white-space-collapse",
		"widows",
		"width",
		"will-change",
		"word-break",
		"word-spacing",
		"word-wrap",
		"writing-mode",
		"x",
		"y",
		"z-index",
		"zoom"
	].sort().reverse();
	/** @type LanguageFn */
	function css(hljs) {
		const regex = hljs.regex;
		const modes = MODES(hljs);
		const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
		const AT_MODIFIERS = "and or not only";
		const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
		const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
		const STRINGS = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE];
		return {
			name: "CSS",
			case_insensitive: true,
			illegal: /[=|'\$]/,
			keywords: { keyframePosition: "from to" },
			classNameAliases: { keyframePosition: "selector-tag" },
			contains: [
				modes.BLOCK_COMMENT,
				VENDOR_PREFIX,
				modes.CSS_NUMBER_MODE,
				{
					className: "selector-id",
					begin: /#[A-Za-z0-9_-]+/,
					relevance: 0
				},
				{
					className: "selector-class",
					begin: "\\." + IDENT_RE,
					relevance: 0
				},
				modes.ATTRIBUTE_SELECTOR_MODE,
				{
					className: "selector-pseudo",
					variants: [{ begin: ":(" + PSEUDO_CLASSES.join("|") + ")" }, { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }]
				},
				modes.CSS_VARIABLE,
				{
					className: "attribute",
					begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
				},
				{
					begin: /:/,
					end: /[;}{]/,
					contains: [
						modes.BLOCK_COMMENT,
						modes.HEXCOLOR,
						modes.IMPORTANT,
						modes.CSS_NUMBER_MODE,
						...STRINGS,
						{
							begin: /(url|data-uri)\(/,
							end: /\)/,
							relevance: 0,
							keywords: { built_in: "url data-uri" },
							contains: [...STRINGS, {
								className: "string",
								begin: /[^)]/,
								endsWithParent: true,
								excludeEnd: true
							}]
						},
						modes.FUNCTION_DISPATCH
					]
				},
				{
					begin: regex.lookahead(/@/),
					end: "[{;]",
					relevance: 0,
					illegal: /:/,
					contains: [{
						className: "keyword",
						begin: AT_PROPERTY_RE
					}, {
						begin: /\s/,
						endsWithParent: true,
						excludeEnd: true,
						relevance: 0,
						keywords: {
							$pattern: /[a-z-]+/,
							keyword: AT_MODIFIERS,
							attribute: MEDIA_FEATURES.join(" ")
						},
						contains: [
							{
								begin: /[a-z-]+(?=:)/,
								className: "attribute"
							},
							...STRINGS,
							modes.CSS_NUMBER_MODE
						]
					}]
				},
				{
					className: "selector-tag",
					begin: "\\b(" + TAGS.join("|") + ")\\b"
				}
			]
		};
	}
	module.exports = css;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/markdown.js
var require_markdown = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function markdown(hljs) {
		const regex = hljs.regex;
		const INLINE_HTML = {
			begin: /<\/?[A-Za-z_]/,
			end: ">",
			subLanguage: "xml",
			relevance: 0
		};
		const HORIZONTAL_RULE = {
			begin: "^[-\\*]{3,}",
			end: "$"
		};
		const CODE = {
			className: "code",
			variants: [
				{ begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
				{ begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
				{
					begin: "```",
					end: "```+[ ]*$"
				},
				{
					begin: "~~~",
					end: "~~~+[ ]*$"
				},
				{ begin: "`.+?`" },
				{
					begin: "(?=^( {4}|\\t))",
					contains: [{
						begin: "^( {4}|\\t)",
						end: "(\\n)$"
					}],
					relevance: 0
				}
			]
		};
		const LIST = {
			className: "bullet",
			begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
			end: "\\s+",
			excludeEnd: true
		};
		const LINK_REFERENCE = {
			begin: /^\[[^\n]+\]:/,
			returnBegin: true,
			contains: [{
				className: "symbol",
				begin: /\[/,
				end: /\]/,
				excludeBegin: true,
				excludeEnd: true
			}, {
				className: "link",
				begin: /:\s*/,
				end: /$/,
				excludeBegin: true
			}]
		};
		const LINK = {
			variants: [
				{
					begin: /\[.+?\]\[.*?\]/,
					relevance: 0
				},
				{
					begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
					relevance: 2
				},
				{
					begin: regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
					relevance: 2
				},
				{
					begin: /\[.+?\]\([./?&#].*?\)/,
					relevance: 1
				},
				{
					begin: /\[.*?\]\(.*?\)/,
					relevance: 0
				}
			],
			returnBegin: true,
			contains: [
				{ match: /\[(?=\])/ },
				{
					className: "string",
					relevance: 0,
					begin: "\\[",
					end: "\\]",
					excludeBegin: true,
					returnEnd: true
				},
				{
					className: "link",
					relevance: 0,
					begin: "\\]\\(",
					end: "\\)",
					excludeBegin: true,
					excludeEnd: true
				},
				{
					className: "symbol",
					relevance: 0,
					begin: "\\]\\[",
					end: "\\]",
					excludeBegin: true,
					excludeEnd: true
				}
			]
		};
		const BOLD = {
			className: "strong",
			contains: [],
			variants: [{
				begin: /_{2}(?!\s)/,
				end: /_{2}/
			}, {
				begin: /\*{2}(?!\s)/,
				end: /\*{2}/
			}]
		};
		const ITALIC = {
			className: "emphasis",
			contains: [],
			variants: [{
				begin: /\*(?![*\s])/,
				end: /\*/
			}, {
				begin: /_(?![_\s])/,
				end: /_/,
				relevance: 0
			}]
		};
		const BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, { contains: [] });
		const ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, { contains: [] });
		BOLD.contains.push(ITALIC_WITHOUT_BOLD);
		ITALIC.contains.push(BOLD_WITHOUT_ITALIC);
		let CONTAINABLE = [INLINE_HTML, LINK];
		[
			BOLD,
			ITALIC,
			BOLD_WITHOUT_ITALIC,
			ITALIC_WITHOUT_BOLD
		].forEach((m) => {
			m.contains = m.contains.concat(CONTAINABLE);
		});
		CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);
		return {
			name: "Markdown",
			aliases: [
				"md",
				"mkdown",
				"mkd"
			],
			contains: [
				{
					className: "section",
					variants: [{
						begin: "^#{1,6}",
						end: "$",
						contains: CONTAINABLE
					}, {
						begin: "(?=^.+?\\n[=-]{2,}$)",
						contains: [{ begin: "^[=-]*$" }, {
							begin: "^",
							end: "\\n",
							contains: CONTAINABLE
						}]
					}]
				},
				INLINE_HTML,
				LIST,
				BOLD,
				ITALIC,
				{
					className: "quote",
					begin: "^>\\s+",
					contains: CONTAINABLE,
					end: "$"
				},
				CODE,
				HORIZONTAL_RULE,
				LINK,
				LINK_REFERENCE,
				{
					scope: "literal",
					match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
				}
			]
		};
	}
	module.exports = markdown;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/diff.js
var require_diff = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function diff(hljs) {
		const regex = hljs.regex;
		return {
			name: "Diff",
			aliases: ["patch"],
			contains: [
				{
					className: "meta",
					relevance: 10,
					match: regex.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
				},
				{
					className: "comment",
					variants: [{
						begin: regex.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
						end: /$/
					}, { match: /^\*{15}$/ }]
				},
				{
					className: "addition",
					begin: /^\+/,
					end: /$/
				},
				{
					className: "deletion",
					begin: /^-/,
					end: /$/
				},
				{
					className: "addition",
					begin: /^!/,
					end: /$/
				}
			]
		};
	}
	module.exports = diff;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/ruby.js
var require_ruby = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function ruby(hljs) {
		const regex = hljs.regex;
		const RUBY_METHOD_RE = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)";
		const CLASS_NAME_RE = regex.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/);
		const CLASS_NAME_WITH_NAMESPACE_RE = regex.concat(CLASS_NAME_RE, /(::\w+)*/);
		const RUBY_KEYWORDS = {
			"variable.constant": [
				"__FILE__",
				"__LINE__",
				"__ENCODING__"
			],
			"variable.language": ["self", "super"],
			keyword: [
				"alias",
				"and",
				"begin",
				"BEGIN",
				"break",
				"case",
				"class",
				"defined",
				"do",
				"else",
				"elsif",
				"end",
				"END",
				"ensure",
				"for",
				"if",
				"in",
				"module",
				"next",
				"not",
				"or",
				"redo",
				"require",
				"rescue",
				"retry",
				"return",
				"then",
				"undef",
				"unless",
				"until",
				"when",
				"while",
				"yield",
				...[
					"include",
					"extend",
					"prepend",
					"public",
					"private",
					"protected",
					"raise",
					"throw"
				]
			],
			built_in: [
				"proc",
				"lambda",
				"attr_accessor",
				"attr_reader",
				"attr_writer",
				"define_method",
				"private_constant",
				"module_function"
			],
			literal: [
				"true",
				"false",
				"nil"
			]
		};
		const YARDOCTAG = {
			className: "doctag",
			begin: "@[A-Za-z]+"
		};
		const IRB_OBJECT = {
			begin: "#<",
			end: ">"
		};
		const COMMENT_MODES = [
			hljs.COMMENT("#", "$", { contains: [YARDOCTAG] }),
			hljs.COMMENT("^=begin", "^=end", {
				contains: [YARDOCTAG],
				relevance: 10
			}),
			hljs.COMMENT("^__END__", hljs.MATCH_NOTHING_RE)
		];
		const SUBST = {
			className: "subst",
			begin: /#\{/,
			end: /\}/,
			keywords: RUBY_KEYWORDS
		};
		const STRING = {
			className: "string",
			contains: [hljs.BACKSLASH_ESCAPE, SUBST],
			variants: [
				{
					begin: /'/,
					end: /'/
				},
				{
					begin: /"/,
					end: /"/
				},
				{
					begin: /`/,
					end: /`/
				},
				{
					begin: /%[qQwWx]?\(/,
					end: /\)/
				},
				{
					begin: /%[qQwWx]?\[/,
					end: /\]/
				},
				{
					begin: /%[qQwWx]?\{/,
					end: /\}/
				},
				{
					begin: /%[qQwWx]?</,
					end: />/
				},
				{
					begin: /%[qQwWx]?\//,
					end: /\//
				},
				{
					begin: /%[qQwWx]?%/,
					end: /%/
				},
				{
					begin: /%[qQwWx]?-/,
					end: /-/
				},
				{
					begin: /%[qQwWx]?\|/,
					end: /\|/
				},
				{ begin: /\B\?(\\\d{1,3})/ },
				{ begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
				{ begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
				{ begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
				{ begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
				{ begin: /\B\?\\?\S/ },
				{
					begin: regex.concat(/<<[-~]?'?/, regex.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
					contains: [hljs.END_SAME_AS_BEGIN({
						begin: /(\w+)/,
						end: /(\w+)/,
						contains: [hljs.BACKSLASH_ESCAPE, SUBST]
					})]
				}
			]
		};
		const decimal = "[1-9](_?[0-9])*|0";
		const digits = "[0-9](_?[0-9])*";
		const NUMBER = {
			className: "number",
			relevance: 0,
			variants: [
				{ begin: `\\b(${decimal})(\\.(${digits}))?([eE][+-]?(${digits})|r)?i?\\b` },
				{ begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
				{ begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
				{ begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
				{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
				{ begin: "\\b0(_?[0-7])+r?i?\\b" }
			]
		};
		const PARAMS = { variants: [{ match: /\(\)/ }, {
			className: "params",
			begin: /\(/,
			end: /(?=\))/,
			excludeBegin: true,
			endsParent: true,
			keywords: RUBY_KEYWORDS
		}] };
		const RUBY_DEFAULT_CONTAINS = [
			STRING,
			{
				variants: [{ match: [
					/class\s+/,
					CLASS_NAME_WITH_NAMESPACE_RE,
					/\s+<\s+/,
					CLASS_NAME_WITH_NAMESPACE_RE
				] }, { match: [/\b(class|module)\s+/, CLASS_NAME_WITH_NAMESPACE_RE] }],
				scope: {
					2: "title.class",
					4: "title.class.inherited"
				},
				keywords: RUBY_KEYWORDS
			},
			{
				match: [/(include|extend)\s+/, CLASS_NAME_WITH_NAMESPACE_RE],
				scope: { 2: "title.class" },
				keywords: RUBY_KEYWORDS
			},
			{
				relevance: 0,
				match: [CLASS_NAME_WITH_NAMESPACE_RE, /\.new[. (]/],
				scope: { 1: "title.class" }
			},
			{
				relevance: 0,
				match: /\b[A-Z][A-Z_0-9]+\b/,
				className: "variable.constant"
			},
			{
				relevance: 0,
				match: CLASS_NAME_RE,
				scope: "title.class"
			},
			{
				match: [
					/def/,
					/\s+/,
					RUBY_METHOD_RE
				],
				scope: {
					1: "keyword",
					3: "title.function"
				},
				contains: [PARAMS]
			},
			{ begin: hljs.IDENT_RE + "::" },
			{
				className: "symbol",
				begin: hljs.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
				relevance: 0
			},
			{
				className: "symbol",
				begin: ":(?!\\s)",
				contains: [STRING, { begin: RUBY_METHOD_RE }],
				relevance: 0
			},
			NUMBER,
			{
				className: "variable",
				begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
			},
			{
				className: "params",
				begin: /\|(?!=)/,
				end: /\|/,
				excludeBegin: true,
				excludeEnd: true,
				relevance: 0,
				keywords: RUBY_KEYWORDS
			},
			{
				begin: "(" + hljs.RE_STARTERS_RE + "|unless)\\s*",
				keywords: "unless",
				contains: [{
					className: "regexp",
					contains: [hljs.BACKSLASH_ESCAPE, SUBST],
					illegal: /\n/,
					variants: [
						{
							begin: "/",
							end: "/[a-z]*"
						},
						{
							begin: /%r\{/,
							end: /\}[a-z]*/
						},
						{
							begin: "%r\\(",
							end: "\\)[a-z]*"
						},
						{
							begin: "%r!",
							end: "![a-z]*"
						},
						{
							begin: "%r\\[",
							end: "\\][a-z]*"
						}
					]
				}].concat(IRB_OBJECT, COMMENT_MODES),
				relevance: 0
			}
		].concat(IRB_OBJECT, COMMENT_MODES);
		SUBST.contains = RUBY_DEFAULT_CONTAINS;
		PARAMS.contains = RUBY_DEFAULT_CONTAINS;
		const IRB_DEFAULT = [{
			begin: /^\s*=>/,
			starts: {
				end: "$",
				contains: RUBY_DEFAULT_CONTAINS
			}
		}, {
			className: "meta.prompt",
			begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
			starts: {
				end: "$",
				keywords: RUBY_KEYWORDS,
				contains: RUBY_DEFAULT_CONTAINS
			}
		}];
		COMMENT_MODES.unshift(IRB_OBJECT);
		return {
			name: "Ruby",
			aliases: [
				"rb",
				"gemspec",
				"podspec",
				"thor",
				"irb"
			],
			keywords: RUBY_KEYWORDS,
			illegal: /\/\*/,
			contains: [hljs.SHEBANG({ binary: "ruby" })].concat(IRB_DEFAULT).concat(COMMENT_MODES).concat(RUBY_DEFAULT_CONTAINS)
		};
	}
	module.exports = ruby;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/go.js
var require_go = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function go(hljs) {
		const KEYWORDS = {
			keyword: [
				"break",
				"case",
				"chan",
				"const",
				"continue",
				"default",
				"defer",
				"else",
				"fallthrough",
				"for",
				"func",
				"go",
				"goto",
				"if",
				"import",
				"interface",
				"map",
				"package",
				"range",
				"return",
				"select",
				"struct",
				"switch",
				"type",
				"var"
			],
			type: [
				"bool",
				"byte",
				"complex64",
				"complex128",
				"error",
				"float32",
				"float64",
				"int8",
				"int16",
				"int32",
				"int64",
				"string",
				"uint8",
				"uint16",
				"uint32",
				"uint64",
				"int",
				"uint",
				"uintptr",
				"rune"
			],
			literal: [
				"true",
				"false",
				"iota",
				"nil"
			],
			built_in: [
				"append",
				"cap",
				"close",
				"complex",
				"copy",
				"imag",
				"len",
				"make",
				"new",
				"panic",
				"print",
				"println",
				"real",
				"recover",
				"delete"
			]
		};
		return {
			name: "Go",
			aliases: ["golang"],
			keywords: KEYWORDS,
			illegal: "</",
			contains: [
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				{
					className: "string",
					variants: [
						hljs.QUOTE_STRING_MODE,
						hljs.APOS_STRING_MODE,
						{
							begin: "`",
							end: "`"
						}
					]
				},
				{
					className: "number",
					variants: [
						{
							match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
							relevance: 0
						},
						{
							match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
							relevance: 0
						},
						{
							match: /-?\b0[oO](_?[0-7])*i?/,
							relevance: 0
						},
						{
							match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
							relevance: 0
						},
						{
							match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
							relevance: 0
						}
					]
				},
				{ begin: /:=/ },
				{
					className: "function",
					beginKeywords: "func",
					end: "\\s*(\\{|$)",
					excludeEnd: true,
					contains: [hljs.TITLE_MODE, {
						className: "params",
						begin: /\(/,
						end: /\)/,
						endsParent: true,
						keywords: KEYWORDS,
						illegal: /["']/
					}]
				}
			]
		};
	}
	module.exports = go;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/graphql.js
var require_graphql = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function graphql(hljs) {
		const regex = hljs.regex;
		return {
			name: "GraphQL",
			aliases: ["gql"],
			case_insensitive: true,
			disableAutodetect: false,
			keywords: {
				keyword: [
					"query",
					"mutation",
					"subscription",
					"type",
					"input",
					"schema",
					"directive",
					"interface",
					"union",
					"scalar",
					"fragment",
					"enum",
					"on"
				],
				literal: [
					"true",
					"false",
					"null"
				]
			},
			contains: [
				hljs.HASH_COMMENT_MODE,
				hljs.QUOTE_STRING_MODE,
				hljs.NUMBER_MODE,
				{
					scope: "punctuation",
					match: /[.]{3}/,
					relevance: 0
				},
				{
					scope: "punctuation",
					begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
					relevance: 0
				},
				{
					scope: "variable",
					begin: /\$/,
					end: /\W/,
					excludeEnd: true,
					relevance: 0
				},
				{
					scope: "meta",
					match: /@\w+/,
					excludeEnd: true
				},
				{
					scope: "symbol",
					begin: regex.concat(/[_A-Za-z][_0-9A-Za-z]*/, regex.lookahead(/\s*:/)),
					relevance: 0
				}
			],
			illegal: [/[;<']/, /BEGIN/]
		};
	}
	module.exports = graphql;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/ini.js
var require_ini = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function ini(hljs) {
		const regex = hljs.regex;
		const NUMBERS = {
			className: "number",
			relevance: 0,
			variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: hljs.NUMBER_RE }]
		};
		const COMMENTS = hljs.COMMENT();
		COMMENTS.variants = [{
			begin: /;/,
			end: /$/
		}, {
			begin: /#/,
			end: /$/
		}];
		const VARIABLES = {
			className: "variable",
			variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }]
		};
		const LITERALS = {
			className: "literal",
			begin: /\bon|off|true|false|yes|no\b/
		};
		const STRINGS = {
			className: "string",
			contains: [hljs.BACKSLASH_ESCAPE],
			variants: [
				{
					begin: "'''",
					end: "'''",
					relevance: 10
				},
				{
					begin: "\"\"\"",
					end: "\"\"\"",
					relevance: 10
				},
				{
					begin: "\"",
					end: "\""
				},
				{
					begin: "'",
					end: "'"
				}
			]
		};
		const ARRAY = {
			begin: /\[/,
			end: /\]/,
			contains: [
				COMMENTS,
				LITERALS,
				VARIABLES,
				STRINGS,
				NUMBERS,
				"self"
			],
			relevance: 0
		};
		const ANY_KEY = regex.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
		return {
			name: "TOML, also INI",
			aliases: ["toml"],
			case_insensitive: true,
			illegal: /\S/,
			contains: [
				COMMENTS,
				{
					className: "section",
					begin: /\[+/,
					end: /\]+/
				},
				{
					begin: regex.concat(ANY_KEY, "(\\s*\\.\\s*", ANY_KEY, ")*", regex.lookahead(/\s*=\s*[^#\s]/)),
					className: "attr",
					starts: {
						end: /$/,
						contains: [
							COMMENTS,
							ARRAY,
							LITERALS,
							VARIABLES,
							STRINGS,
							NUMBERS
						]
					}
				}
			]
		};
	}
	module.exports = ini;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/java.js
var require_java = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var decimalDigits = "[0-9](_*[0-9])*";
	var frac = `\\.(${decimalDigits})`;
	var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
	var NUMERIC = {
		className: "number",
		variants: [
			{ begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
			{ begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
			{ begin: `(${frac})[fFdD]?\\b` },
			{ begin: `\\b(${decimalDigits})[fFdD]\\b` },
			{ begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
			{ begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
			{ begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
			{ begin: "\\b0(_*[0-7])*[lL]?\\b" },
			{ begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
		],
		relevance: 0
	};
	/**
	* Allows recursive regex expressions to a given depth
	*
	* ie: recurRegex("(abc~~~)", /~~~/g, 2) becomes:
	* (abc(abc(abc)))
	*
	* @param {string} re
	* @param {RegExp} substitution (should be a g mode regex)
	* @param {number} depth
	* @returns {string}``
	*/
	function recurRegex(re, substitution, depth) {
		if (depth === -1) return "";
		return re.replace(substitution, (_) => {
			return recurRegex(re, substitution, depth - 1);
		});
	}
	/** @type LanguageFn */
	function java(hljs) {
		const regex = hljs.regex;
		const JAVA_IDENT_RE = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*";
		const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex("(?:<" + JAVA_IDENT_RE + "~~~(?:\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*~~~)*>)?", /~~~/g, 2);
		const KEYWORDS = {
			keyword: [
				"synchronized",
				"abstract",
				"private",
				"var",
				"static",
				"if",
				"const ",
				"for",
				"while",
				"strictfp",
				"finally",
				"protected",
				"import",
				"native",
				"final",
				"void",
				"enum",
				"else",
				"break",
				"transient",
				"catch",
				"instanceof",
				"volatile",
				"case",
				"assert",
				"package",
				"default",
				"public",
				"try",
				"switch",
				"continue",
				"throws",
				"protected",
				"public",
				"private",
				"module",
				"requires",
				"exports",
				"do",
				"sealed",
				"yield",
				"permits",
				"goto",
				"when"
			],
			literal: [
				"false",
				"true",
				"null"
			],
			type: [
				"char",
				"boolean",
				"long",
				"float",
				"int",
				"byte",
				"short",
				"double"
			],
			built_in: ["super", "this"]
		};
		const ANNOTATION = {
			className: "meta",
			begin: "@" + JAVA_IDENT_RE,
			contains: [{
				begin: /\(/,
				end: /\)/,
				contains: ["self"]
			}]
		};
		const PARAMS = {
			className: "params",
			begin: /\(/,
			end: /\)/,
			keywords: KEYWORDS,
			relevance: 0,
			contains: [hljs.C_BLOCK_COMMENT_MODE],
			endsParent: true
		};
		return {
			name: "Java",
			aliases: ["jsp"],
			keywords: KEYWORDS,
			illegal: /<\/|#/,
			contains: [
				hljs.COMMENT("/\\*\\*", "\\*/", {
					relevance: 0,
					contains: [{
						begin: /\w+@/,
						relevance: 0
					}, {
						className: "doctag",
						begin: "@[A-Za-z]+"
					}]
				}),
				{
					begin: /import java\.[a-z]+\./,
					keywords: "import",
					relevance: 2
				},
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				{
					begin: /"""/,
					end: /"""/,
					className: "string",
					contains: [hljs.BACKSLASH_ESCAPE]
				},
				hljs.APOS_STRING_MODE,
				hljs.QUOTE_STRING_MODE,
				{
					match: [
						/\b(?:class|interface|enum|extends|implements|new)/,
						/\s+/,
						JAVA_IDENT_RE
					],
					className: {
						1: "keyword",
						3: "title.class"
					}
				},
				{
					match: /non-sealed/,
					scope: "keyword"
				},
				{
					begin: [
						regex.concat(/(?!else)/, JAVA_IDENT_RE),
						/\s+/,
						JAVA_IDENT_RE,
						/\s+/,
						/=(?!=)/
					],
					className: {
						1: "type",
						3: "variable",
						5: "operator"
					}
				},
				{
					begin: [
						/record/,
						/\s+/,
						JAVA_IDENT_RE
					],
					className: {
						1: "keyword",
						3: "title.class"
					},
					contains: [
						PARAMS,
						hljs.C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE
					]
				},
				{
					beginKeywords: "new throw return else",
					relevance: 0
				},
				{
					begin: [
						"(?:" + GENERIC_IDENT_RE + "\\s+)",
						hljs.UNDERSCORE_IDENT_RE,
						/\s*(?=\()/
					],
					className: { 2: "title.function" },
					keywords: KEYWORDS,
					contains: [
						{
							className: "params",
							begin: /\(/,
							end: /\)/,
							keywords: KEYWORDS,
							relevance: 0,
							contains: [
								ANNOTATION,
								hljs.APOS_STRING_MODE,
								hljs.QUOTE_STRING_MODE,
								NUMERIC,
								hljs.C_BLOCK_COMMENT_MODE
							]
						},
						hljs.C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE
					]
				},
				NUMERIC,
				ANNOTATION
			]
		};
	}
	module.exports = java;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/javascript.js
var require_javascript = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
	var KEYWORDS = [
		"as",
		"in",
		"of",
		"if",
		"for",
		"while",
		"finally",
		"var",
		"new",
		"function",
		"do",
		"return",
		"void",
		"else",
		"break",
		"catch",
		"instanceof",
		"with",
		"throw",
		"case",
		"default",
		"try",
		"switch",
		"continue",
		"typeof",
		"delete",
		"let",
		"yield",
		"const",
		"class",
		"debugger",
		"async",
		"await",
		"static",
		"import",
		"from",
		"export",
		"extends",
		"using"
	];
	var LITERALS = [
		"true",
		"false",
		"null",
		"undefined",
		"NaN",
		"Infinity"
	];
	var TYPES = [
		"Object",
		"Function",
		"Boolean",
		"Symbol",
		"Math",
		"Date",
		"Number",
		"BigInt",
		"String",
		"RegExp",
		"Array",
		"Float32Array",
		"Float64Array",
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Int32Array",
		"Uint16Array",
		"Uint32Array",
		"BigInt64Array",
		"BigUint64Array",
		"Set",
		"Map",
		"WeakSet",
		"WeakMap",
		"ArrayBuffer",
		"SharedArrayBuffer",
		"Atomics",
		"DataView",
		"JSON",
		"Promise",
		"Generator",
		"GeneratorFunction",
		"AsyncFunction",
		"Reflect",
		"Proxy",
		"Intl",
		"WebAssembly"
	];
	var ERROR_TYPES = [
		"Error",
		"EvalError",
		"InternalError",
		"RangeError",
		"ReferenceError",
		"SyntaxError",
		"TypeError",
		"URIError"
	];
	var BUILT_IN_GLOBALS = [
		"setInterval",
		"setTimeout",
		"clearInterval",
		"clearTimeout",
		"require",
		"exports",
		"eval",
		"isFinite",
		"isNaN",
		"parseFloat",
		"parseInt",
		"decodeURI",
		"decodeURIComponent",
		"encodeURI",
		"encodeURIComponent",
		"escape",
		"unescape"
	];
	var BUILT_IN_VARIABLES = [
		"arguments",
		"this",
		"super",
		"console",
		"window",
		"document",
		"localStorage",
		"sessionStorage",
		"module",
		"global"
	];
	var BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
	/** @type LanguageFn */
	function javascript(hljs) {
		const regex = hljs.regex;
		/**
		* Takes a string like "<Booger" and checks to see
		* if we can find a matching "</Booger" later in the
		* content.
		* @param {RegExpMatchArray} match
		* @param {{after:number}} param1
		*/
		const hasClosingTag = (match, { after }) => {
			const tag = "</" + match[0].slice(1);
			return match.input.indexOf(tag, after) !== -1;
		};
		const IDENT_RE$1 = IDENT_RE;
		const FRAGMENT = {
			begin: "<>",
			end: "</>"
		};
		const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
		const XML_TAG = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			/**
			* @param {RegExpMatchArray} match
			* @param {CallbackResponse} response
			*/
			isTrulyOpeningTag: (match, response) => {
				const afterMatchIndex = match[0].length + match.index;
				const nextChar = match.input[afterMatchIndex];
				if (nextChar === "<" || nextChar === ",") {
					response.ignoreMatch();
					return;
				}
				if (nextChar === ">") {
					if (!hasClosingTag(match, { after: afterMatchIndex })) response.ignoreMatch();
				}
				let m;
				const afterMatch = match.input.substring(afterMatchIndex);
				if (m = afterMatch.match(/^\s*=/)) {
					response.ignoreMatch();
					return;
				}
				if (m = afterMatch.match(/^\s+extends\s+/)) {
					if (m.index === 0) {
						response.ignoreMatch();
						return;
					}
				}
			}
		};
		const KEYWORDS$1 = {
			$pattern: IDENT_RE,
			keyword: KEYWORDS,
			literal: LITERALS,
			built_in: BUILT_INS,
			"variable.language": BUILT_IN_VARIABLES
		};
		const decimalDigits = "[0-9](_?[0-9])*";
		const frac = `\\.(${decimalDigits})`;
		const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
		const NUMBER = {
			className: "number",
			variants: [
				{ begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
				{ begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
				{ begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
				{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
				{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
				{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
				{ begin: "\\b0[0-7]+n?\\b" }
			],
			relevance: 0
		};
		const SUBST = {
			className: "subst",
			begin: "\\$\\{",
			end: "\\}",
			keywords: KEYWORDS$1,
			contains: []
		};
		const HTML_TEMPLATE = {
			begin: ".?html`",
			end: "",
			starts: {
				end: "`",
				returnEnd: false,
				contains: [hljs.BACKSLASH_ESCAPE, SUBST],
				subLanguage: "xml"
			}
		};
		const CSS_TEMPLATE = {
			begin: ".?css`",
			end: "",
			starts: {
				end: "`",
				returnEnd: false,
				contains: [hljs.BACKSLASH_ESCAPE, SUBST],
				subLanguage: "css"
			}
		};
		const GRAPHQL_TEMPLATE = {
			begin: ".?gql`",
			end: "",
			starts: {
				end: "`",
				returnEnd: false,
				contains: [hljs.BACKSLASH_ESCAPE, SUBST],
				subLanguage: "graphql"
			}
		};
		const TEMPLATE_STRING = {
			className: "string",
			begin: "`",
			end: "`",
			contains: [hljs.BACKSLASH_ESCAPE, SUBST]
		};
		const COMMENT = {
			className: "comment",
			variants: [
				hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
					relevance: 0,
					contains: [{
						begin: "(?=@[A-Za-z]+)",
						relevance: 0,
						contains: [
							{
								className: "doctag",
								begin: "@[A-Za-z]+"
							},
							{
								className: "type",
								begin: "\\{",
								end: "\\}",
								excludeEnd: true,
								excludeBegin: true,
								relevance: 0
							},
							{
								className: "variable",
								begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
								endsParent: true,
								relevance: 0
							},
							{
								begin: /(?=[^\n])\s/,
								relevance: 0
							}
						]
					}]
				}),
				hljs.C_BLOCK_COMMENT_MODE,
				hljs.C_LINE_COMMENT_MODE
			]
		};
		const SUBST_INTERNALS = [
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE,
			HTML_TEMPLATE,
			CSS_TEMPLATE,
			GRAPHQL_TEMPLATE,
			TEMPLATE_STRING,
			{ match: /\$\d+/ },
			NUMBER
		];
		SUBST.contains = SUBST_INTERNALS.concat({
			begin: /\{/,
			end: /\}/,
			keywords: KEYWORDS$1,
			contains: ["self"].concat(SUBST_INTERNALS)
		});
		const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
		const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([{
			begin: /(\s*)\(/,
			end: /\)/,
			keywords: KEYWORDS$1,
			contains: ["self"].concat(SUBST_AND_COMMENTS)
		}]);
		const PARAMS = {
			className: "params",
			begin: /(\s*)\(/,
			end: /\)/,
			excludeBegin: true,
			excludeEnd: true,
			keywords: KEYWORDS$1,
			contains: PARAMS_CONTAINS
		};
		const CLASS_OR_EXTENDS = { variants: [{
			match: [
				/class/,
				/\s+/,
				IDENT_RE$1,
				/\s+/,
				/extends/,
				/\s+/,
				regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
			],
			scope: {
				1: "keyword",
				3: "title.class",
				5: "keyword",
				7: "title.class.inherited"
			}
		}, {
			match: [
				/class/,
				/\s+/,
				IDENT_RE$1
			],
			scope: {
				1: "keyword",
				3: "title.class"
			}
		}] };
		const CLASS_REFERENCE = {
			relevance: 0,
			match: regex.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
			className: "title.class",
			keywords: { _: [...TYPES, ...ERROR_TYPES] }
		};
		const USE_STRICT = {
			label: "use_strict",
			className: "meta",
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/
		};
		const FUNCTION_DEFINITION = {
			variants: [{ match: [
				/function/,
				/\s+/,
				IDENT_RE$1,
				/(?=\s*\()/
			] }, { match: [/function/, /\s*(?=\()/] }],
			className: {
				1: "keyword",
				3: "title.function"
			},
			label: "func.def",
			contains: [PARAMS],
			illegal: /%/
		};
		const UPPER_CASE_CONSTANT = {
			relevance: 0,
			match: /\b[A-Z][A-Z_0-9]+\b/,
			className: "variable.constant"
		};
		function noneOf(list) {
			return regex.concat("(?!", list.join("|"), ")");
		}
		const FUNCTION_CALL = {
			match: regex.concat(/\b/, noneOf([
				...BUILT_IN_GLOBALS,
				"super",
				"import"
			].map((x) => `${x}\\s*\\(`)), IDENT_RE$1, regex.lookahead(/\s*\(/)),
			className: "title.function",
			relevance: 0
		};
		const PROPERTY_ACCESS = {
			begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
			end: IDENT_RE$1,
			excludeBegin: true,
			keywords: "prototype",
			className: "property",
			relevance: 0
		};
		const GETTER_OR_SETTER = {
			match: [
				/get|set/,
				/\s+/,
				IDENT_RE$1,
				/(?=\()/
			],
			className: {
				1: "keyword",
				3: "title.function"
			},
			contains: [{ begin: /\(\)/ }, PARAMS]
		};
		const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
		const FUNCTION_VARIABLE = {
			match: [
				/const|var|let/,
				/\s+/,
				IDENT_RE$1,
				/\s*/,
				/=\s*/,
				/(async\s*)?/,
				regex.lookahead(FUNC_LEAD_IN_RE)
			],
			keywords: "async",
			className: {
				1: "keyword",
				3: "title.function"
			},
			contains: [PARAMS]
		};
		return {
			name: "JavaScript",
			aliases: [
				"js",
				"jsx",
				"mjs",
				"cjs"
			],
			keywords: KEYWORDS$1,
			exports: {
				PARAMS_CONTAINS,
				CLASS_REFERENCE
			},
			illegal: /#(?![$_A-z])/,
			contains: [
				hljs.SHEBANG({
					label: "shebang",
					binary: "node",
					relevance: 5
				}),
				USE_STRICT,
				hljs.APOS_STRING_MODE,
				hljs.QUOTE_STRING_MODE,
				HTML_TEMPLATE,
				CSS_TEMPLATE,
				GRAPHQL_TEMPLATE,
				TEMPLATE_STRING,
				COMMENT,
				{ match: /\$\d+/ },
				NUMBER,
				CLASS_REFERENCE,
				{
					scope: "attr",
					match: IDENT_RE$1 + regex.lookahead(":"),
					relevance: 0
				},
				FUNCTION_VARIABLE,
				{
					begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
					keywords: "return throw case",
					relevance: 0,
					contains: [
						COMMENT,
						hljs.REGEXP_MODE,
						{
							className: "function",
							begin: FUNC_LEAD_IN_RE,
							returnBegin: true,
							end: "\\s*=>",
							contains: [{
								className: "params",
								variants: [
									{
										begin: hljs.UNDERSCORE_IDENT_RE,
										relevance: 0
									},
									{
										className: null,
										begin: /\(\s*\)/,
										skip: true
									},
									{
										begin: /(\s*)\(/,
										end: /\)/,
										excludeBegin: true,
										excludeEnd: true,
										keywords: KEYWORDS$1,
										contains: PARAMS_CONTAINS
									}
								]
							}]
						},
						{
							begin: /,/,
							relevance: 0
						},
						{
							match: /\s+/,
							relevance: 0
						},
						{
							variants: [
								{
									begin: FRAGMENT.begin,
									end: FRAGMENT.end
								},
								{ match: XML_SELF_CLOSING },
								{
									begin: XML_TAG.begin,
									"on:begin": XML_TAG.isTrulyOpeningTag,
									end: XML_TAG.end
								}
							],
							subLanguage: "xml",
							contains: [{
								begin: XML_TAG.begin,
								end: XML_TAG.end,
								skip: true,
								contains: ["self"]
							}]
						}
					]
				},
				FUNCTION_DEFINITION,
				{ beginKeywords: "while if switch catch for" },
				{
					begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
					returnBegin: true,
					label: "func.def",
					contains: [PARAMS, hljs.inherit(hljs.TITLE_MODE, {
						begin: IDENT_RE$1,
						className: "title.function"
					})]
				},
				{
					match: /\.\.\./,
					relevance: 0
				},
				PROPERTY_ACCESS,
				{
					match: "\\$" + IDENT_RE$1,
					relevance: 0
				},
				{
					match: [/\bconstructor(?=\s*\()/],
					className: { 1: "title.function" },
					contains: [PARAMS]
				},
				FUNCTION_CALL,
				UPPER_CASE_CONSTANT,
				CLASS_OR_EXTENDS,
				GETTER_OR_SETTER,
				{ match: /\$[(.]/ }
			]
		};
	}
	module.exports = javascript;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/json.js
var require_json = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function json(hljs) {
		const ATTRIBUTE = {
			className: "attr",
			begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
			relevance: 1.01
		};
		const PUNCTUATION = {
			match: /[{}[\],:]/,
			className: "punctuation",
			relevance: 0
		};
		const LITERALS = [
			"true",
			"false",
			"null"
		];
		const LITERALS_MODE = {
			scope: "literal",
			beginKeywords: LITERALS.join(" ")
		};
		return {
			name: "JSON",
			aliases: ["jsonc"],
			keywords: { literal: LITERALS },
			contains: [
				ATTRIBUTE,
				PUNCTUATION,
				hljs.QUOTE_STRING_MODE,
				LITERALS_MODE,
				hljs.C_NUMBER_MODE,
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE
			],
			illegal: "\\S"
		};
	}
	module.exports = json;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/kotlin.js
var require_kotlin = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var decimalDigits = "[0-9](_*[0-9])*";
	var frac = `\\.(${decimalDigits})`;
	var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
	var NUMERIC = {
		className: "number",
		variants: [
			{ begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
			{ begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
			{ begin: `(${frac})[fFdD]?\\b` },
			{ begin: `\\b(${decimalDigits})[fFdD]\\b` },
			{ begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
			{ begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
			{ begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
			{ begin: "\\b0(_*[0-7])*[lL]?\\b" },
			{ begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
		],
		relevance: 0
	};
	function kotlin(hljs) {
		const KEYWORDS = {
			keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
			built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
			literal: "true false null"
		};
		const KEYWORDS_WITH_LABEL = {
			className: "keyword",
			begin: /\b(break|continue|return|this)\b/,
			starts: { contains: [{
				className: "symbol",
				begin: /@\w+/
			}] }
		};
		const LABEL = {
			className: "symbol",
			begin: hljs.UNDERSCORE_IDENT_RE + "@"
		};
		const SUBST = {
			className: "subst",
			begin: /\$\{/,
			end: /\}/,
			contains: [hljs.C_NUMBER_MODE]
		};
		const VARIABLE = {
			className: "variable",
			begin: "\\$" + hljs.UNDERSCORE_IDENT_RE
		};
		const STRING = {
			className: "string",
			variants: [
				{
					begin: "\"\"\"",
					end: "\"\"\"(?=[^\"])",
					contains: [VARIABLE, SUBST]
				},
				{
					begin: "'",
					end: "'",
					illegal: /\n/,
					contains: [hljs.BACKSLASH_ESCAPE]
				},
				{
					begin: "\"",
					end: "\"",
					illegal: /\n/,
					contains: [
						hljs.BACKSLASH_ESCAPE,
						VARIABLE,
						SUBST
					]
				}
			]
		};
		SUBST.contains.push(STRING);
		const ANNOTATION_USE_SITE = {
			className: "meta",
			begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + hljs.UNDERSCORE_IDENT_RE + ")?"
		};
		const ANNOTATION = {
			className: "meta",
			begin: "@" + hljs.UNDERSCORE_IDENT_RE,
			contains: [{
				begin: /\(/,
				end: /\)/,
				contains: [hljs.inherit(STRING, { className: "string" }), "self"]
			}]
		};
		const KOTLIN_NUMBER_MODE = NUMERIC;
		const KOTLIN_NESTED_COMMENT = hljs.COMMENT("/\\*", "\\*/", { contains: [hljs.C_BLOCK_COMMENT_MODE] });
		const KOTLIN_PAREN_TYPE = { variants: [{
			className: "type",
			begin: hljs.UNDERSCORE_IDENT_RE
		}, {
			begin: /\(/,
			end: /\)/,
			contains: []
		}] };
		const KOTLIN_PAREN_TYPE2 = KOTLIN_PAREN_TYPE;
		KOTLIN_PAREN_TYPE2.variants[1].contains = [KOTLIN_PAREN_TYPE];
		KOTLIN_PAREN_TYPE.variants[1].contains = [KOTLIN_PAREN_TYPE2];
		return {
			name: "Kotlin",
			aliases: ["kt", "kts"],
			keywords: KEYWORDS,
			contains: [
				hljs.COMMENT("/\\*\\*", "\\*/", {
					relevance: 0,
					contains: [{
						className: "doctag",
						begin: "@[A-Za-z]+"
					}]
				}),
				hljs.C_LINE_COMMENT_MODE,
				KOTLIN_NESTED_COMMENT,
				KEYWORDS_WITH_LABEL,
				LABEL,
				ANNOTATION_USE_SITE,
				ANNOTATION,
				{
					className: "function",
					beginKeywords: "fun",
					end: "[(]|$",
					returnBegin: true,
					excludeEnd: true,
					keywords: KEYWORDS,
					relevance: 5,
					contains: [
						{
							begin: hljs.UNDERSCORE_IDENT_RE + "\\s*\\(",
							returnBegin: true,
							relevance: 0,
							contains: [hljs.UNDERSCORE_TITLE_MODE]
						},
						{
							className: "type",
							begin: /</,
							end: />/,
							keywords: "reified",
							relevance: 0
						},
						{
							className: "params",
							begin: /\(/,
							end: /\)/,
							endsParent: true,
							keywords: KEYWORDS,
							relevance: 0,
							contains: [
								{
									begin: /:/,
									end: /[=,\/]/,
									endsWithParent: true,
									contains: [
										KOTLIN_PAREN_TYPE,
										hljs.C_LINE_COMMENT_MODE,
										KOTLIN_NESTED_COMMENT
									],
									relevance: 0
								},
								hljs.C_LINE_COMMENT_MODE,
								KOTLIN_NESTED_COMMENT,
								ANNOTATION_USE_SITE,
								ANNOTATION,
								STRING,
								hljs.C_NUMBER_MODE
							]
						},
						KOTLIN_NESTED_COMMENT
					]
				},
				{
					begin: [
						/class|interface|trait/,
						/\s+/,
						hljs.UNDERSCORE_IDENT_RE
					],
					beginScope: { 3: "title.class" },
					keywords: "class interface trait",
					end: /[:\{(]|$/,
					excludeEnd: true,
					illegal: "extends implements",
					contains: [
						{ beginKeywords: "public protected internal private constructor" },
						hljs.UNDERSCORE_TITLE_MODE,
						{
							className: "type",
							begin: /</,
							end: />/,
							excludeBegin: true,
							excludeEnd: true,
							relevance: 0
						},
						{
							className: "type",
							begin: /[,:]\s*/,
							end: /[<\(,){\s]|$/,
							excludeBegin: true,
							returnEnd: true
						},
						ANNOTATION_USE_SITE,
						ANNOTATION
					]
				},
				STRING,
				{
					className: "meta",
					begin: "^#!/usr/bin/env",
					end: "$",
					illegal: "\n"
				},
				KOTLIN_NUMBER_MODE
			]
		};
	}
	module.exports = kotlin;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/less.js
var require_less = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MODES = (hljs) => {
		return {
			IMPORTANT: {
				scope: "meta",
				begin: "!important"
			},
			BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
			HEXCOLOR: {
				scope: "number",
				begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
			},
			FUNCTION_DISPATCH: {
				className: "built_in",
				begin: /[\w-]+(?=\()/
			},
			ATTRIBUTE_SELECTOR_MODE: {
				scope: "selector-attr",
				begin: /\[/,
				end: /\]/,
				illegal: "$",
				contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
			},
			CSS_NUMBER_MODE: {
				scope: "number",
				begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
				relevance: 0
			},
			CSS_VARIABLE: {
				className: "attr",
				begin: /--[A-Za-z_][A-Za-z0-9_-]*/
			}
		};
	};
	var HTML_TAGS = [
		"a",
		"abbr",
		"address",
		"article",
		"aside",
		"audio",
		"b",
		"blockquote",
		"body",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"dd",
		"del",
		"details",
		"dfn",
		"div",
		"dl",
		"dt",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"header",
		"hgroup",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"mark",
		"menu",
		"nav",
		"object",
		"ol",
		"optgroup",
		"option",
		"p",
		"picture",
		"q",
		"quote",
		"samp",
		"section",
		"select",
		"source",
		"span",
		"strong",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"ul",
		"var",
		"video"
	];
	var SVG_TAGS = [
		"defs",
		"g",
		"marker",
		"mask",
		"pattern",
		"svg",
		"switch",
		"symbol",
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feFlood",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMorphology",
		"feOffset",
		"feSpecularLighting",
		"feTile",
		"feTurbulence",
		"linearGradient",
		"radialGradient",
		"stop",
		"circle",
		"ellipse",
		"image",
		"line",
		"path",
		"polygon",
		"polyline",
		"rect",
		"text",
		"use",
		"textPath",
		"tspan",
		"foreignObject",
		"clipPath"
	];
	var TAGS = [...HTML_TAGS, ...SVG_TAGS];
	var MEDIA_FEATURES = [
		"any-hover",
		"any-pointer",
		"aspect-ratio",
		"color",
		"color-gamut",
		"color-index",
		"device-aspect-ratio",
		"device-height",
		"device-width",
		"display-mode",
		"forced-colors",
		"grid",
		"height",
		"hover",
		"inverted-colors",
		"monochrome",
		"orientation",
		"overflow-block",
		"overflow-inline",
		"pointer",
		"prefers-color-scheme",
		"prefers-contrast",
		"prefers-reduced-motion",
		"prefers-reduced-transparency",
		"resolution",
		"scan",
		"scripting",
		"update",
		"width",
		"min-width",
		"max-width",
		"min-height",
		"max-height"
	].sort().reverse();
	var PSEUDO_CLASSES = [
		"active",
		"any-link",
		"blank",
		"checked",
		"current",
		"default",
		"defined",
		"dir",
		"disabled",
		"drop",
		"empty",
		"enabled",
		"first",
		"first-child",
		"first-of-type",
		"fullscreen",
		"future",
		"focus",
		"focus-visible",
		"focus-within",
		"has",
		"host",
		"host-context",
		"hover",
		"indeterminate",
		"in-range",
		"invalid",
		"is",
		"lang",
		"last-child",
		"last-of-type",
		"left",
		"link",
		"local-link",
		"not",
		"nth-child",
		"nth-col",
		"nth-last-child",
		"nth-last-col",
		"nth-last-of-type",
		"nth-of-type",
		"only-child",
		"only-of-type",
		"optional",
		"out-of-range",
		"past",
		"placeholder-shown",
		"read-only",
		"read-write",
		"required",
		"right",
		"root",
		"scope",
		"target",
		"target-within",
		"user-invalid",
		"valid",
		"visited",
		"where"
	].sort().reverse();
	var PSEUDO_ELEMENTS = [
		"after",
		"backdrop",
		"before",
		"cue",
		"cue-region",
		"first-letter",
		"first-line",
		"grammar-error",
		"marker",
		"part",
		"placeholder",
		"selection",
		"slotted",
		"spelling-error"
	].sort().reverse();
	var ATTRIBUTES = [
		"accent-color",
		"align-content",
		"align-items",
		"align-self",
		"alignment-baseline",
		"all",
		"anchor-name",
		"animation",
		"animation-composition",
		"animation-delay",
		"animation-direction",
		"animation-duration",
		"animation-fill-mode",
		"animation-iteration-count",
		"animation-name",
		"animation-play-state",
		"animation-range",
		"animation-range-end",
		"animation-range-start",
		"animation-timeline",
		"animation-timing-function",
		"appearance",
		"aspect-ratio",
		"backdrop-filter",
		"backface-visibility",
		"background",
		"background-attachment",
		"background-blend-mode",
		"background-clip",
		"background-color",
		"background-image",
		"background-origin",
		"background-position",
		"background-position-x",
		"background-position-y",
		"background-repeat",
		"background-size",
		"baseline-shift",
		"block-size",
		"border",
		"border-block",
		"border-block-color",
		"border-block-end",
		"border-block-end-color",
		"border-block-end-style",
		"border-block-end-width",
		"border-block-start",
		"border-block-start-color",
		"border-block-start-style",
		"border-block-start-width",
		"border-block-style",
		"border-block-width",
		"border-bottom",
		"border-bottom-color",
		"border-bottom-left-radius",
		"border-bottom-right-radius",
		"border-bottom-style",
		"border-bottom-width",
		"border-collapse",
		"border-color",
		"border-end-end-radius",
		"border-end-start-radius",
		"border-image",
		"border-image-outset",
		"border-image-repeat",
		"border-image-slice",
		"border-image-source",
		"border-image-width",
		"border-inline",
		"border-inline-color",
		"border-inline-end",
		"border-inline-end-color",
		"border-inline-end-style",
		"border-inline-end-width",
		"border-inline-start",
		"border-inline-start-color",
		"border-inline-start-style",
		"border-inline-start-width",
		"border-inline-style",
		"border-inline-width",
		"border-left",
		"border-left-color",
		"border-left-style",
		"border-left-width",
		"border-radius",
		"border-right",
		"border-right-color",
		"border-right-style",
		"border-right-width",
		"border-spacing",
		"border-start-end-radius",
		"border-start-start-radius",
		"border-style",
		"border-top",
		"border-top-color",
		"border-top-left-radius",
		"border-top-right-radius",
		"border-top-style",
		"border-top-width",
		"border-width",
		"bottom",
		"box-align",
		"box-decoration-break",
		"box-direction",
		"box-flex",
		"box-flex-group",
		"box-lines",
		"box-ordinal-group",
		"box-orient",
		"box-pack",
		"box-shadow",
		"box-sizing",
		"break-after",
		"break-before",
		"break-inside",
		"caption-side",
		"caret-color",
		"clear",
		"clip",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"color-scheme",
		"column-count",
		"column-fill",
		"column-gap",
		"column-rule",
		"column-rule-color",
		"column-rule-style",
		"column-rule-width",
		"column-span",
		"column-width",
		"columns",
		"contain",
		"contain-intrinsic-block-size",
		"contain-intrinsic-height",
		"contain-intrinsic-inline-size",
		"contain-intrinsic-size",
		"contain-intrinsic-width",
		"container",
		"container-name",
		"container-type",
		"content",
		"content-visibility",
		"counter-increment",
		"counter-reset",
		"counter-set",
		"cue",
		"cue-after",
		"cue-before",
		"cursor",
		"cx",
		"cy",
		"direction",
		"display",
		"dominant-baseline",
		"empty-cells",
		"enable-background",
		"field-sizing",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"flex",
		"flex-basis",
		"flex-direction",
		"flex-flow",
		"flex-grow",
		"flex-shrink",
		"flex-wrap",
		"float",
		"flood-color",
		"flood-opacity",
		"flow",
		"font",
		"font-display",
		"font-family",
		"font-feature-settings",
		"font-kerning",
		"font-language-override",
		"font-optical-sizing",
		"font-palette",
		"font-size",
		"font-size-adjust",
		"font-smooth",
		"font-smoothing",
		"font-stretch",
		"font-style",
		"font-synthesis",
		"font-synthesis-position",
		"font-synthesis-small-caps",
		"font-synthesis-style",
		"font-synthesis-weight",
		"font-variant",
		"font-variant-alternates",
		"font-variant-caps",
		"font-variant-east-asian",
		"font-variant-emoji",
		"font-variant-ligatures",
		"font-variant-numeric",
		"font-variant-position",
		"font-variation-settings",
		"font-weight",
		"forced-color-adjust",
		"gap",
		"glyph-orientation-horizontal",
		"glyph-orientation-vertical",
		"grid",
		"grid-area",
		"grid-auto-columns",
		"grid-auto-flow",
		"grid-auto-rows",
		"grid-column",
		"grid-column-end",
		"grid-column-start",
		"grid-gap",
		"grid-row",
		"grid-row-end",
		"grid-row-start",
		"grid-template",
		"grid-template-areas",
		"grid-template-columns",
		"grid-template-rows",
		"hanging-punctuation",
		"height",
		"hyphenate-character",
		"hyphenate-limit-chars",
		"hyphens",
		"icon",
		"image-orientation",
		"image-rendering",
		"image-resolution",
		"ime-mode",
		"initial-letter",
		"initial-letter-align",
		"inline-size",
		"inset",
		"inset-area",
		"inset-block",
		"inset-block-end",
		"inset-block-start",
		"inset-inline",
		"inset-inline-end",
		"inset-inline-start",
		"isolation",
		"justify-content",
		"justify-items",
		"justify-self",
		"kerning",
		"left",
		"letter-spacing",
		"lighting-color",
		"line-break",
		"line-height",
		"line-height-step",
		"list-style",
		"list-style-image",
		"list-style-position",
		"list-style-type",
		"margin",
		"margin-block",
		"margin-block-end",
		"margin-block-start",
		"margin-bottom",
		"margin-inline",
		"margin-inline-end",
		"margin-inline-start",
		"margin-left",
		"margin-right",
		"margin-top",
		"margin-trim",
		"marker",
		"marker-end",
		"marker-mid",
		"marker-start",
		"marks",
		"mask",
		"mask-border",
		"mask-border-mode",
		"mask-border-outset",
		"mask-border-repeat",
		"mask-border-slice",
		"mask-border-source",
		"mask-border-width",
		"mask-clip",
		"mask-composite",
		"mask-image",
		"mask-mode",
		"mask-origin",
		"mask-position",
		"mask-repeat",
		"mask-size",
		"mask-type",
		"masonry-auto-flow",
		"math-depth",
		"math-shift",
		"math-style",
		"max-block-size",
		"max-height",
		"max-inline-size",
		"max-width",
		"min-block-size",
		"min-height",
		"min-inline-size",
		"min-width",
		"mix-blend-mode",
		"nav-down",
		"nav-index",
		"nav-left",
		"nav-right",
		"nav-up",
		"none",
		"normal",
		"object-fit",
		"object-position",
		"offset",
		"offset-anchor",
		"offset-distance",
		"offset-path",
		"offset-position",
		"offset-rotate",
		"opacity",
		"order",
		"orphans",
		"outline",
		"outline-color",
		"outline-offset",
		"outline-style",
		"outline-width",
		"overflow",
		"overflow-anchor",
		"overflow-block",
		"overflow-clip-margin",
		"overflow-inline",
		"overflow-wrap",
		"overflow-x",
		"overflow-y",
		"overlay",
		"overscroll-behavior",
		"overscroll-behavior-block",
		"overscroll-behavior-inline",
		"overscroll-behavior-x",
		"overscroll-behavior-y",
		"padding",
		"padding-block",
		"padding-block-end",
		"padding-block-start",
		"padding-bottom",
		"padding-inline",
		"padding-inline-end",
		"padding-inline-start",
		"padding-left",
		"padding-right",
		"padding-top",
		"page",
		"page-break-after",
		"page-break-before",
		"page-break-inside",
		"paint-order",
		"pause",
		"pause-after",
		"pause-before",
		"perspective",
		"perspective-origin",
		"place-content",
		"place-items",
		"place-self",
		"pointer-events",
		"position",
		"position-anchor",
		"position-visibility",
		"print-color-adjust",
		"quotes",
		"r",
		"resize",
		"rest",
		"rest-after",
		"rest-before",
		"right",
		"rotate",
		"row-gap",
		"ruby-align",
		"ruby-position",
		"scale",
		"scroll-behavior",
		"scroll-margin",
		"scroll-margin-block",
		"scroll-margin-block-end",
		"scroll-margin-block-start",
		"scroll-margin-bottom",
		"scroll-margin-inline",
		"scroll-margin-inline-end",
		"scroll-margin-inline-start",
		"scroll-margin-left",
		"scroll-margin-right",
		"scroll-margin-top",
		"scroll-padding",
		"scroll-padding-block",
		"scroll-padding-block-end",
		"scroll-padding-block-start",
		"scroll-padding-bottom",
		"scroll-padding-inline",
		"scroll-padding-inline-end",
		"scroll-padding-inline-start",
		"scroll-padding-left",
		"scroll-padding-right",
		"scroll-padding-top",
		"scroll-snap-align",
		"scroll-snap-stop",
		"scroll-snap-type",
		"scroll-timeline",
		"scroll-timeline-axis",
		"scroll-timeline-name",
		"scrollbar-color",
		"scrollbar-gutter",
		"scrollbar-width",
		"shape-image-threshold",
		"shape-margin",
		"shape-outside",
		"shape-rendering",
		"speak",
		"speak-as",
		"src",
		"stop-color",
		"stop-opacity",
		"stroke",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke-width",
		"tab-size",
		"table-layout",
		"text-align",
		"text-align-all",
		"text-align-last",
		"text-anchor",
		"text-combine-upright",
		"text-decoration",
		"text-decoration-color",
		"text-decoration-line",
		"text-decoration-skip",
		"text-decoration-skip-ink",
		"text-decoration-style",
		"text-decoration-thickness",
		"text-emphasis",
		"text-emphasis-color",
		"text-emphasis-position",
		"text-emphasis-style",
		"text-indent",
		"text-justify",
		"text-orientation",
		"text-overflow",
		"text-rendering",
		"text-shadow",
		"text-size-adjust",
		"text-transform",
		"text-underline-offset",
		"text-underline-position",
		"text-wrap",
		"text-wrap-mode",
		"text-wrap-style",
		"timeline-scope",
		"top",
		"touch-action",
		"transform",
		"transform-box",
		"transform-origin",
		"transform-style",
		"transition",
		"transition-behavior",
		"transition-delay",
		"transition-duration",
		"transition-property",
		"transition-timing-function",
		"translate",
		"unicode-bidi",
		"user-modify",
		"user-select",
		"vector-effect",
		"vertical-align",
		"view-timeline",
		"view-timeline-axis",
		"view-timeline-inset",
		"view-timeline-name",
		"view-transition-name",
		"visibility",
		"voice-balance",
		"voice-duration",
		"voice-family",
		"voice-pitch",
		"voice-range",
		"voice-rate",
		"voice-stress",
		"voice-volume",
		"white-space",
		"white-space-collapse",
		"widows",
		"width",
		"will-change",
		"word-break",
		"word-spacing",
		"word-wrap",
		"writing-mode",
		"x",
		"y",
		"z-index",
		"zoom"
	].sort().reverse();
	var PSEUDO_SELECTORS = PSEUDO_CLASSES.concat(PSEUDO_ELEMENTS).sort().reverse();
	/** @type LanguageFn */
	function less(hljs) {
		const modes = MODES(hljs);
		const PSEUDO_SELECTORS$1 = PSEUDO_SELECTORS;
		const AT_MODIFIERS = "and or not only";
		const IDENT_RE = "[\\w-]+";
		const INTERP_IDENT_RE = "(" + IDENT_RE + "|@\\{[\\w-]+\\})";
		const RULES = [];
		const VALUE_MODES = [];
		const STRING_MODE = function(c) {
			return {
				className: "string",
				begin: "~?" + c + ".*?" + c
			};
		};
		const IDENT_MODE = function(name, begin, relevance) {
			return {
				className: name,
				begin,
				relevance
			};
		};
		const AT_KEYWORDS = {
			$pattern: /[a-z-]+/,
			keyword: AT_MODIFIERS,
			attribute: MEDIA_FEATURES.join(" ")
		};
		const PARENS_MODE = {
			begin: "\\(",
			end: "\\)",
			contains: VALUE_MODES,
			keywords: AT_KEYWORDS,
			relevance: 0
		};
		VALUE_MODES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING_MODE("'"), STRING_MODE("\""), modes.CSS_NUMBER_MODE, {
			begin: "(url|data-uri)\\(",
			starts: {
				className: "string",
				end: "[\\)\\n]",
				excludeEnd: true
			}
		}, modes.HEXCOLOR, PARENS_MODE, IDENT_MODE("variable", "@@?" + IDENT_RE, 10), IDENT_MODE("variable", "@\\{" + IDENT_RE + "\\}"), IDENT_MODE("built_in", "~?`[^`]*?`"), {
			className: "attribute",
			begin: IDENT_RE + "\\s*:",
			end: ":",
			returnBegin: true,
			excludeEnd: true
		}, modes.IMPORTANT, { beginKeywords: "and not" }, modes.FUNCTION_DISPATCH);
		const VALUE_WITH_RULESETS = VALUE_MODES.concat({
			begin: /\{/,
			end: /\}/,
			contains: RULES
		});
		const MIXIN_GUARD_MODE = {
			beginKeywords: "when",
			endsWithParent: true,
			contains: [{ beginKeywords: "and not" }].concat(VALUE_MODES)
		};
		const RULE_MODE = {
			begin: INTERP_IDENT_RE + "\\s*:",
			returnBegin: true,
			end: /[;}]/,
			relevance: 0,
			contains: [
				{ begin: /-(webkit|moz|ms|o)-/ },
				modes.CSS_VARIABLE,
				{
					className: "attribute",
					begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b",
					end: /(?=:)/,
					starts: {
						endsWithParent: true,
						illegal: "[<=$]",
						relevance: 0,
						contains: VALUE_MODES
					}
				}
			]
		};
		const AT_RULE_MODE = {
			className: "keyword",
			begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
			starts: {
				end: "[;{}]",
				keywords: AT_KEYWORDS,
				returnEnd: true,
				contains: VALUE_MODES,
				relevance: 0
			}
		};
		const VAR_RULE_MODE = {
			className: "variable",
			variants: [{
				begin: "@" + IDENT_RE + "\\s*:",
				relevance: 15
			}, { begin: "@" + IDENT_RE }],
			starts: {
				end: "[;}]",
				returnEnd: true,
				contains: VALUE_WITH_RULESETS
			}
		};
		const SELECTOR_MODE = {
			variants: [{
				begin: "[\\.#:&\\[>]",
				end: "[;{}]"
			}, {
				begin: INTERP_IDENT_RE,
				end: /\{/
			}],
			returnBegin: true,
			returnEnd: true,
			illegal: "[<='$\"]",
			relevance: 0,
			contains: [
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				MIXIN_GUARD_MODE,
				IDENT_MODE("keyword", "all\\b"),
				IDENT_MODE("variable", "@\\{" + IDENT_RE + "\\}"),
				{
					begin: "\\b(" + TAGS.join("|") + ")\\b",
					className: "selector-tag"
				},
				modes.CSS_NUMBER_MODE,
				IDENT_MODE("selector-tag", INTERP_IDENT_RE, 0),
				IDENT_MODE("selector-id", "#" + INTERP_IDENT_RE),
				IDENT_MODE("selector-class", "\\." + INTERP_IDENT_RE, 0),
				IDENT_MODE("selector-tag", "&", 0),
				modes.ATTRIBUTE_SELECTOR_MODE,
				{
					className: "selector-pseudo",
					begin: ":(" + PSEUDO_CLASSES.join("|") + ")"
				},
				{
					className: "selector-pseudo",
					begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")"
				},
				{
					begin: /\(/,
					end: /\)/,
					relevance: 0,
					contains: VALUE_WITH_RULESETS
				},
				{ begin: "!important" },
				modes.FUNCTION_DISPATCH
			]
		};
		const PSEUDO_SELECTOR_MODE = {
			begin: `[\\w-]+:(:)?(${PSEUDO_SELECTORS$1.join("|")})`,
			returnBegin: true,
			contains: [SELECTOR_MODE]
		};
		RULES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, AT_RULE_MODE, VAR_RULE_MODE, PSEUDO_SELECTOR_MODE, RULE_MODE, SELECTOR_MODE, MIXIN_GUARD_MODE, modes.FUNCTION_DISPATCH);
		return {
			name: "Less",
			case_insensitive: true,
			illegal: "[=>'/<($\"]",
			contains: RULES
		};
	}
	module.exports = less;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/lua.js
var require_lua = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function lua(hljs) {
		const OPENING_LONG_BRACKET = "\\[=*\\[";
		const CLOSING_LONG_BRACKET = "\\]=*\\]";
		const LONG_BRACKETS = {
			begin: OPENING_LONG_BRACKET,
			end: CLOSING_LONG_BRACKET,
			contains: ["self"]
		};
		const COMMENTS = [hljs.COMMENT("--(?!" + OPENING_LONG_BRACKET + ")", "$"), hljs.COMMENT("--" + OPENING_LONG_BRACKET, CLOSING_LONG_BRACKET, {
			contains: [LONG_BRACKETS],
			relevance: 10
		})];
		return {
			name: "Lua",
			aliases: ["pluto"],
			keywords: {
				$pattern: hljs.UNDERSCORE_IDENT_RE,
				literal: "true false nil",
				keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
				built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
			},
			contains: COMMENTS.concat([
				{
					className: "function",
					beginKeywords: "function",
					end: "\\)",
					contains: [hljs.inherit(hljs.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }), {
						className: "params",
						begin: "\\(",
						endsWithParent: true,
						contains: COMMENTS
					}].concat(COMMENTS)
				},
				hljs.C_NUMBER_MODE,
				hljs.APOS_STRING_MODE,
				hljs.QUOTE_STRING_MODE,
				{
					className: "string",
					begin: OPENING_LONG_BRACKET,
					end: CLOSING_LONG_BRACKET,
					contains: [LONG_BRACKETS],
					relevance: 5
				}
			])
		};
	}
	module.exports = lua;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/makefile.js
var require_makefile = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function makefile(hljs) {
		const VARIABLE = {
			className: "variable",
			variants: [{
				begin: "\\$\\(" + hljs.UNDERSCORE_IDENT_RE + "\\)",
				contains: [hljs.BACKSLASH_ESCAPE]
			}, { begin: /\$[@%<?\^\+\*]/ }]
		};
		const QUOTE_STRING = {
			className: "string",
			begin: /"/,
			end: /"/,
			contains: [hljs.BACKSLASH_ESCAPE, VARIABLE]
		};
		const FUNC = {
			className: "variable",
			begin: /\$\([\w-]+\s/,
			end: /\)/,
			keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
			contains: [VARIABLE, QUOTE_STRING]
		};
		const ASSIGNMENT = { begin: "^" + hljs.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" };
		const META = {
			className: "meta",
			begin: /^\.PHONY:/,
			end: /$/,
			keywords: {
				$pattern: /[\.\w]+/,
				keyword: ".PHONY"
			}
		};
		const TARGET = {
			className: "section",
			begin: /^[^\s]+:/,
			end: /$/,
			contains: [VARIABLE]
		};
		return {
			name: "Makefile",
			aliases: [
				"mk",
				"mak",
				"make"
			],
			keywords: {
				$pattern: /[\w-]+/,
				keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
			},
			contains: [
				hljs.HASH_COMMENT_MODE,
				VARIABLE,
				QUOTE_STRING,
				FUNC,
				ASSIGNMENT,
				META,
				TARGET
			]
		};
	}
	module.exports = makefile;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/perl.js
var require_perl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function perl(hljs) {
		const regex = hljs.regex;
		const KEYWORDS = [
			"abs",
			"accept",
			"alarm",
			"and",
			"atan2",
			"bind",
			"binmode",
			"bless",
			"break",
			"caller",
			"chdir",
			"chmod",
			"chomp",
			"chop",
			"chown",
			"chr",
			"chroot",
			"class",
			"close",
			"closedir",
			"connect",
			"continue",
			"cos",
			"crypt",
			"dbmclose",
			"dbmopen",
			"defined",
			"delete",
			"die",
			"do",
			"dump",
			"each",
			"else",
			"elsif",
			"endgrent",
			"endhostent",
			"endnetent",
			"endprotoent",
			"endpwent",
			"endservent",
			"eof",
			"eval",
			"exec",
			"exists",
			"exit",
			"exp",
			"fcntl",
			"field",
			"fileno",
			"flock",
			"for",
			"foreach",
			"fork",
			"format",
			"formline",
			"getc",
			"getgrent",
			"getgrgid",
			"getgrnam",
			"gethostbyaddr",
			"gethostbyname",
			"gethostent",
			"getlogin",
			"getnetbyaddr",
			"getnetbyname",
			"getnetent",
			"getpeername",
			"getpgrp",
			"getpriority",
			"getprotobyname",
			"getprotobynumber",
			"getprotoent",
			"getpwent",
			"getpwnam",
			"getpwuid",
			"getservbyname",
			"getservbyport",
			"getservent",
			"getsockname",
			"getsockopt",
			"given",
			"glob",
			"gmtime",
			"goto",
			"grep",
			"gt",
			"hex",
			"if",
			"index",
			"int",
			"ioctl",
			"join",
			"keys",
			"kill",
			"last",
			"lc",
			"lcfirst",
			"length",
			"link",
			"listen",
			"local",
			"localtime",
			"log",
			"lstat",
			"lt",
			"ma",
			"map",
			"method",
			"mkdir",
			"msgctl",
			"msgget",
			"msgrcv",
			"msgsnd",
			"my",
			"ne",
			"next",
			"no",
			"not",
			"oct",
			"open",
			"opendir",
			"or",
			"ord",
			"our",
			"pack",
			"package",
			"pipe",
			"pop",
			"pos",
			"print",
			"printf",
			"prototype",
			"push",
			"q|0",
			"qq",
			"quotemeta",
			"qw",
			"qx",
			"rand",
			"read",
			"readdir",
			"readline",
			"readlink",
			"readpipe",
			"recv",
			"redo",
			"ref",
			"rename",
			"require",
			"reset",
			"return",
			"reverse",
			"rewinddir",
			"rindex",
			"rmdir",
			"say",
			"scalar",
			"seek",
			"seekdir",
			"select",
			"semctl",
			"semget",
			"semop",
			"send",
			"setgrent",
			"sethostent",
			"setnetent",
			"setpgrp",
			"setpriority",
			"setprotoent",
			"setpwent",
			"setservent",
			"setsockopt",
			"shift",
			"shmctl",
			"shmget",
			"shmread",
			"shmwrite",
			"shutdown",
			"sin",
			"sleep",
			"socket",
			"socketpair",
			"sort",
			"splice",
			"split",
			"sprintf",
			"sqrt",
			"srand",
			"stat",
			"state",
			"study",
			"sub",
			"substr",
			"symlink",
			"syscall",
			"sysopen",
			"sysread",
			"sysseek",
			"system",
			"syswrite",
			"tell",
			"telldir",
			"tie",
			"tied",
			"time",
			"times",
			"tr",
			"truncate",
			"uc",
			"ucfirst",
			"umask",
			"undef",
			"unless",
			"unlink",
			"unpack",
			"unshift",
			"untie",
			"until",
			"use",
			"utime",
			"values",
			"vec",
			"wait",
			"waitpid",
			"wantarray",
			"warn",
			"when",
			"while",
			"write",
			"x|0",
			"xor",
			"y|0"
		];
		const REGEX_MODIFIERS = /[dualxmsipngr]{0,12}/;
		const PERL_KEYWORDS = {
			$pattern: /[\w.]+/,
			keyword: KEYWORDS.join(" ")
		};
		const SUBST = {
			className: "subst",
			begin: "[$@]\\{",
			end: "\\}",
			keywords: PERL_KEYWORDS
		};
		const METHOD = {
			begin: /->\{/,
			end: /\}/
		};
		const ATTR = {
			scope: "attr",
			match: /\s+:\s*\w+(\s*\(.*?\))?/
		};
		const VAR = {
			scope: "variable",
			variants: [
				{ begin: /\$\d/ },
				{ begin: regex.concat(/[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, `(?![A-Za-z])(?![@$%])`) },
				{
					begin: /[$%@](?!")[^\s\w{=]|\$=/,
					relevance: 0
				}
			],
			contains: [ATTR]
		};
		const NUMBER = {
			className: "number",
			variants: [
				{ match: /0?\.[0-9][0-9_]+\b/ },
				{ match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
				{ match: /\b0[0-7][0-7_]*\b/ },
				{ match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
				{ match: /\b0b[0-1][0-1_]*\b/ }
			],
			relevance: 0
		};
		const STRING_CONTAINS = [
			hljs.BACKSLASH_ESCAPE,
			SUBST,
			VAR
		];
		const REGEX_DELIMS = [
			/!/,
			/\//,
			/\|/,
			/\?/,
			/'/,
			/"/,
			/#/
		];
		/**
		* @param {string|RegExp} prefix
		* @param {string|RegExp} open
		* @param {string|RegExp} close
		*/
		const PAIRED_DOUBLE_RE = (prefix, open, close = "\\1") => {
			const middle = close === "\\1" ? close : regex.concat(close, open);
			return regex.concat(regex.concat("(?:", prefix, ")"), open, /(?:\\.|[^\\\/])*?/, middle, /(?:\\.|[^\\\/])*?/, close, REGEX_MODIFIERS);
		};
		/**
		* @param {string|RegExp} prefix
		* @param {string|RegExp} open
		* @param {string|RegExp} close
		*/
		const PAIRED_RE = (prefix, open, close) => {
			return regex.concat(regex.concat("(?:", prefix, ")"), open, /(?:\\.|[^\\\/])*?/, close, REGEX_MODIFIERS);
		};
		const PERL_DEFAULT_CONTAINS = [
			VAR,
			hljs.HASH_COMMENT_MODE,
			hljs.COMMENT(/^=\w/, /=cut/, { endsWithParent: true }),
			METHOD,
			{
				className: "string",
				contains: STRING_CONTAINS,
				variants: [
					{
						begin: "q[qwxr]?\\s*\\(",
						end: "\\)",
						relevance: 5
					},
					{
						begin: "q[qwxr]?\\s*\\[",
						end: "\\]",
						relevance: 5
					},
					{
						begin: "q[qwxr]?\\s*\\{",
						end: "\\}",
						relevance: 5
					},
					{
						begin: "q[qwxr]?\\s*\\|",
						end: "\\|",
						relevance: 5
					},
					{
						begin: "q[qwxr]?\\s*<",
						end: ">",
						relevance: 5
					},
					{
						begin: "qw\\s+q",
						end: "q",
						relevance: 5
					},
					{
						begin: "'",
						end: "'",
						contains: [hljs.BACKSLASH_ESCAPE]
					},
					{
						begin: "\"",
						end: "\""
					},
					{
						begin: "`",
						end: "`",
						contains: [hljs.BACKSLASH_ESCAPE]
					},
					{
						begin: /\{\w+\}/,
						relevance: 0
					},
					{
						begin: "-?\\w+\\s*=>",
						relevance: 0
					}
				]
			},
			NUMBER,
			{
				begin: "(\\/\\/|" + hljs.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
				keywords: "split return print reverse grep",
				relevance: 0,
				contains: [
					hljs.HASH_COMMENT_MODE,
					{
						className: "regexp",
						variants: [
							{ begin: PAIRED_DOUBLE_RE("s|tr|y", regex.either(...REGEX_DELIMS, { capture: true })) },
							{ begin: PAIRED_DOUBLE_RE("s|tr|y", "\\(", "\\)") },
							{ begin: PAIRED_DOUBLE_RE("s|tr|y", "\\[", "\\]") },
							{ begin: PAIRED_DOUBLE_RE("s|tr|y", "\\{", "\\}") }
						],
						relevance: 2
					},
					{
						className: "regexp",
						variants: [
							{
								begin: /(m|qr)\/\//,
								relevance: 0
							},
							{ begin: PAIRED_RE("(?:m|qr)?", /\//, /\//) },
							{ begin: PAIRED_RE("m|qr", regex.either(...REGEX_DELIMS, { capture: true }), /\1/) },
							{ begin: PAIRED_RE("m|qr", /\(/, /\)/) },
							{ begin: PAIRED_RE("m|qr", /\[/, /\]/) },
							{ begin: PAIRED_RE("m|qr", /\{/, /\}/) }
						]
					}
				]
			},
			{
				className: "function",
				beginKeywords: "sub method",
				end: "(\\s*\\(.*?\\))?[;{]",
				excludeEnd: true,
				relevance: 5,
				contains: [hljs.TITLE_MODE, ATTR]
			},
			{
				className: "class",
				beginKeywords: "class",
				end: "[;{]",
				excludeEnd: true,
				relevance: 5,
				contains: [
					hljs.TITLE_MODE,
					ATTR,
					NUMBER
				]
			},
			{
				begin: "-\\w\\b",
				relevance: 0
			},
			{
				begin: "^__DATA__$",
				end: "^__END__$",
				subLanguage: "mojolicious",
				contains: [{
					begin: "^@@.*",
					end: "$",
					className: "comment"
				}]
			}
		];
		SUBST.contains = PERL_DEFAULT_CONTAINS;
		METHOD.contains = PERL_DEFAULT_CONTAINS;
		return {
			name: "Perl",
			aliases: ["pl", "pm"],
			keywords: PERL_KEYWORDS,
			contains: PERL_DEFAULT_CONTAINS
		};
	}
	module.exports = perl;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/objectivec.js
var require_objectivec = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function objectivec(hljs) {
		const API_CLASS = {
			className: "built_in",
			begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
		};
		const IDENTIFIER_RE = /[a-zA-Z@][a-zA-Z0-9_]*/;
		const KEYWORDS = {
			"variable.language": ["this", "super"],
			$pattern: IDENTIFIER_RE,
			keyword: [
				"while",
				"export",
				"sizeof",
				"typedef",
				"const",
				"struct",
				"for",
				"union",
				"volatile",
				"static",
				"mutable",
				"if",
				"do",
				"return",
				"goto",
				"enum",
				"else",
				"break",
				"extern",
				"asm",
				"case",
				"default",
				"register",
				"explicit",
				"typename",
				"switch",
				"continue",
				"inline",
				"readonly",
				"assign",
				"readwrite",
				"self",
				"@synchronized",
				"id",
				"typeof",
				"nonatomic",
				"IBOutlet",
				"IBAction",
				"strong",
				"weak",
				"copy",
				"in",
				"out",
				"inout",
				"bycopy",
				"byref",
				"oneway",
				"__strong",
				"__weak",
				"__block",
				"__autoreleasing",
				"@private",
				"@protected",
				"@public",
				"@try",
				"@property",
				"@end",
				"@throw",
				"@catch",
				"@finally",
				"@autoreleasepool",
				"@synthesize",
				"@dynamic",
				"@selector",
				"@optional",
				"@required",
				"@encode",
				"@package",
				"@import",
				"@defs",
				"@compatibility_alias",
				"__bridge",
				"__bridge_transfer",
				"__bridge_retained",
				"__bridge_retain",
				"__covariant",
				"__contravariant",
				"__kindof",
				"_Nonnull",
				"_Nullable",
				"_Null_unspecified",
				"__FUNCTION__",
				"__PRETTY_FUNCTION__",
				"__attribute__",
				"getter",
				"setter",
				"retain",
				"unsafe_unretained",
				"nonnull",
				"nullable",
				"null_unspecified",
				"null_resettable",
				"class",
				"instancetype",
				"NS_DESIGNATED_INITIALIZER",
				"NS_UNAVAILABLE",
				"NS_REQUIRES_SUPER",
				"NS_RETURNS_INNER_POINTER",
				"NS_INLINE",
				"NS_AVAILABLE",
				"NS_DEPRECATED",
				"NS_ENUM",
				"NS_OPTIONS",
				"NS_SWIFT_UNAVAILABLE",
				"NS_ASSUME_NONNULL_BEGIN",
				"NS_ASSUME_NONNULL_END",
				"NS_REFINED_FOR_SWIFT",
				"NS_SWIFT_NAME",
				"NS_SWIFT_NOTHROW",
				"NS_DURING",
				"NS_HANDLER",
				"NS_ENDHANDLER",
				"NS_VALUERETURN",
				"NS_VOIDRETURN"
			],
			literal: [
				"false",
				"true",
				"FALSE",
				"TRUE",
				"nil",
				"YES",
				"NO",
				"NULL"
			],
			built_in: [
				"dispatch_once_t",
				"dispatch_queue_t",
				"dispatch_sync",
				"dispatch_async",
				"dispatch_once"
			],
			type: [
				"int",
				"float",
				"char",
				"unsigned",
				"signed",
				"short",
				"long",
				"double",
				"wchar_t",
				"unichar",
				"void",
				"bool",
				"BOOL",
				"id|0",
				"_Bool"
			]
		};
		const CLASS_KEYWORDS = {
			$pattern: IDENTIFIER_RE,
			keyword: [
				"@interface",
				"@class",
				"@protocol",
				"@implementation"
			]
		};
		return {
			name: "Objective-C",
			aliases: [
				"mm",
				"objc",
				"obj-c",
				"obj-c++",
				"objective-c++"
			],
			keywords: KEYWORDS,
			illegal: "</",
			contains: [
				API_CLASS,
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				hljs.C_NUMBER_MODE,
				hljs.QUOTE_STRING_MODE,
				hljs.APOS_STRING_MODE,
				{
					className: "string",
					variants: [{
						begin: "@\"",
						end: "\"",
						illegal: "\\n",
						contains: [hljs.BACKSLASH_ESCAPE]
					}]
				},
				{
					className: "meta",
					begin: /#\s*[a-z]+\b/,
					end: /$/,
					keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
					contains: [
						{
							begin: /\\\n/,
							relevance: 0
						},
						hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" }),
						{
							className: "string",
							begin: /<.*?>/,
							end: /$/,
							illegal: "\\n"
						},
						hljs.C_LINE_COMMENT_MODE,
						hljs.C_BLOCK_COMMENT_MODE
					]
				},
				{
					className: "class",
					begin: "(" + CLASS_KEYWORDS.keyword.join("|") + ")\\b",
					end: /(\{|$)/,
					excludeEnd: true,
					keywords: CLASS_KEYWORDS,
					contains: [hljs.UNDERSCORE_TITLE_MODE]
				},
				{
					begin: "\\." + hljs.UNDERSCORE_IDENT_RE,
					relevance: 0
				}
			]
		};
	}
	module.exports = objectivec;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/php.js
var require_php = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* @param {HLJSApi} hljs
	* @returns {LanguageDetail}
	* */
	function php(hljs) {
		const regex = hljs.regex;
		const NOT_PERL_ETC = /(?![A-Za-z0-9])(?![$])/;
		const IDENT_RE = regex.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, NOT_PERL_ETC);
		const PASCAL_CASE_CLASS_NAME_RE = regex.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, NOT_PERL_ETC);
		const UPCASE_NAME_RE = regex.concat(/[A-Z]+/, NOT_PERL_ETC);
		const VARIABLE = {
			scope: "variable",
			match: "\\$+" + IDENT_RE
		};
		const PREPROCESSOR = {
			scope: "meta",
			variants: [
				{
					begin: /<\?php/,
					relevance: 10
				},
				{ begin: /<\?=/ },
				{
					begin: /<\?/,
					relevance: .1
				},
				{ begin: /\?>/ }
			]
		};
		const SUBST = {
			scope: "subst",
			variants: [{ begin: /\$\w+/ }, {
				begin: /\{\$/,
				end: /\}/
			}]
		};
		const SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null });
		const DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
			illegal: null,
			contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST)
		});
		const HEREDOC = {
			begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
			end: /[ \t]*(\w+)\b/,
			contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
			"on:begin": (m, resp) => {
				resp.data._beginMatch = m[1] || m[2];
			},
			"on:end": (m, resp) => {
				if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
			}
		};
		const NOWDOC = hljs.END_SAME_AS_BEGIN({
			begin: /<<<[ \t]*'(\w+)'\n/,
			end: /[ \t]*(\w+)\b/
		});
		const WHITESPACE = "[ 	\n]";
		const STRING = {
			scope: "string",
			variants: [
				DOUBLE_QUOTED,
				SINGLE_QUOTED,
				HEREDOC,
				NOWDOC
			]
		};
		const NUMBER = {
			scope: "number",
			variants: [
				{ begin: `\\b0[bB][01]+(?:_[01]+)*\\b` },
				{ begin: `\\b0[oO][0-7]+(?:_[0-7]+)*\\b` },
				{ begin: `\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b` },
				{ begin: `(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?` }
			],
			relevance: 0
		};
		const LITERALS = [
			"false",
			"null",
			"true"
		];
		const KWS = [
			"__CLASS__",
			"__DIR__",
			"__FILE__",
			"__FUNCTION__",
			"__COMPILER_HALT_OFFSET__",
			"__LINE__",
			"__METHOD__",
			"__NAMESPACE__",
			"__TRAIT__",
			"die",
			"echo",
			"exit",
			"include",
			"include_once",
			"print",
			"require",
			"require_once",
			"array",
			"abstract",
			"and",
			"as",
			"binary",
			"bool",
			"boolean",
			"break",
			"callable",
			"case",
			"catch",
			"class",
			"clone",
			"const",
			"continue",
			"declare",
			"default",
			"do",
			"double",
			"else",
			"elseif",
			"empty",
			"enddeclare",
			"endfor",
			"endforeach",
			"endif",
			"endswitch",
			"endwhile",
			"enum",
			"eval",
			"extends",
			"final",
			"finally",
			"float",
			"for",
			"foreach",
			"from",
			"global",
			"goto",
			"if",
			"implements",
			"instanceof",
			"insteadof",
			"int",
			"integer",
			"interface",
			"isset",
			"iterable",
			"list",
			"match|0",
			"mixed",
			"new",
			"never",
			"object",
			"or",
			"private",
			"protected",
			"public",
			"readonly",
			"real",
			"return",
			"string",
			"switch",
			"throw",
			"trait",
			"try",
			"unset",
			"use",
			"var",
			"void",
			"while",
			"xor",
			"yield"
		];
		const BUILT_INS = [
			"Error|0",
			"AppendIterator",
			"ArgumentCountError",
			"ArithmeticError",
			"ArrayIterator",
			"ArrayObject",
			"AssertionError",
			"BadFunctionCallException",
			"BadMethodCallException",
			"CachingIterator",
			"CallbackFilterIterator",
			"CompileError",
			"Countable",
			"DirectoryIterator",
			"DivisionByZeroError",
			"DomainException",
			"EmptyIterator",
			"ErrorException",
			"Exception",
			"FilesystemIterator",
			"FilterIterator",
			"GlobIterator",
			"InfiniteIterator",
			"InvalidArgumentException",
			"IteratorIterator",
			"LengthException",
			"LimitIterator",
			"LogicException",
			"MultipleIterator",
			"NoRewindIterator",
			"OutOfBoundsException",
			"OutOfRangeException",
			"OuterIterator",
			"OverflowException",
			"ParentIterator",
			"ParseError",
			"RangeException",
			"RecursiveArrayIterator",
			"RecursiveCachingIterator",
			"RecursiveCallbackFilterIterator",
			"RecursiveDirectoryIterator",
			"RecursiveFilterIterator",
			"RecursiveIterator",
			"RecursiveIteratorIterator",
			"RecursiveRegexIterator",
			"RecursiveTreeIterator",
			"RegexIterator",
			"RuntimeException",
			"SeekableIterator",
			"SplDoublyLinkedList",
			"SplFileInfo",
			"SplFileObject",
			"SplFixedArray",
			"SplHeap",
			"SplMaxHeap",
			"SplMinHeap",
			"SplObjectStorage",
			"SplObserver",
			"SplPriorityQueue",
			"SplQueue",
			"SplStack",
			"SplSubject",
			"SplTempFileObject",
			"TypeError",
			"UnderflowException",
			"UnexpectedValueException",
			"UnhandledMatchError",
			"ArrayAccess",
			"BackedEnum",
			"Closure",
			"Fiber",
			"Generator",
			"Iterator",
			"IteratorAggregate",
			"Serializable",
			"Stringable",
			"Throwable",
			"Traversable",
			"UnitEnum",
			"WeakReference",
			"WeakMap",
			"Directory",
			"__PHP_Incomplete_Class",
			"parent",
			"php_user_filter",
			"self",
			"static",
			"stdClass"
		];
		/** Dual-case keywords
		*
		* ["then","FILE"] =>
		*     ["then", "THEN", "FILE", "file"]
		*
		* @param {string[]} items */
		const dualCase = (items) => {
			/** @type string[] */
			const result = [];
			items.forEach((item) => {
				result.push(item);
				if (item.toLowerCase() === item) result.push(item.toUpperCase());
				else result.push(item.toLowerCase());
			});
			return result;
		};
		const KEYWORDS = {
			keyword: KWS,
			literal: dualCase(LITERALS),
			built_in: BUILT_INS
		};
		/**
		* @param {string[]} items */
		const normalizeKeywords = (items) => {
			return items.map((item) => {
				return item.replace(/\|\d+$/, "");
			});
		};
		const CONSTRUCTOR_CALL = { variants: [{
			match: [
				/new/,
				regex.concat(WHITESPACE, "+"),
				regex.concat("(?!", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
				PASCAL_CASE_CLASS_NAME_RE
			],
			scope: {
				1: "keyword",
				4: "title.class"
			}
		}] };
		const CONSTANT_REFERENCE = regex.concat(IDENT_RE, "\\b(?!\\()");
		const LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON = { variants: [
			{
				match: [regex.concat(/::/, regex.lookahead(/(?!class\b)/)), CONSTANT_REFERENCE],
				scope: { 2: "variable.constant" }
			},
			{
				match: [/::/, /class/],
				scope: { 2: "variable.language" }
			},
			{
				match: [
					PASCAL_CASE_CLASS_NAME_RE,
					regex.concat(/::/, regex.lookahead(/(?!class\b)/)),
					CONSTANT_REFERENCE
				],
				scope: {
					1: "title.class",
					3: "variable.constant"
				}
			},
			{
				match: [PASCAL_CASE_CLASS_NAME_RE, regex.concat("::", regex.lookahead(/(?!class\b)/))],
				scope: { 1: "title.class" }
			},
			{
				match: [
					PASCAL_CASE_CLASS_NAME_RE,
					/::/,
					/class/
				],
				scope: {
					1: "title.class",
					3: "variable.language"
				}
			}
		] };
		const NAMED_ARGUMENT = {
			scope: "attr",
			match: regex.concat(IDENT_RE, regex.lookahead(":"), regex.lookahead(/(?!::)/))
		};
		const PARAMS_MODE = {
			relevance: 0,
			begin: /\(/,
			end: /\)/,
			keywords: KEYWORDS,
			contains: [
				NAMED_ARGUMENT,
				VARIABLE,
				LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
				hljs.C_BLOCK_COMMENT_MODE,
				STRING,
				NUMBER,
				CONSTRUCTOR_CALL
			]
		};
		const FUNCTION_INVOKE = {
			relevance: 0,
			match: [
				/\b/,
				regex.concat("(?!fn\\b|function\\b|", normalizeKeywords(KWS).join("\\b|"), "|", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
				IDENT_RE,
				regex.concat(WHITESPACE, "*"),
				regex.lookahead(/(?=\()/)
			],
			scope: { 3: "title.function.invoke" },
			contains: [PARAMS_MODE]
		};
		PARAMS_MODE.contains.push(FUNCTION_INVOKE);
		const ATTRIBUTE_CONTAINS = [
			NAMED_ARGUMENT,
			LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
			hljs.C_BLOCK_COMMENT_MODE,
			STRING,
			NUMBER,
			CONSTRUCTOR_CALL
		];
		const ATTRIBUTES = {
			begin: regex.concat(/#\[\s*\\?/, regex.either(PASCAL_CASE_CLASS_NAME_RE, UPCASE_NAME_RE)),
			beginScope: "meta",
			end: /]/,
			endScope: "meta",
			keywords: {
				literal: LITERALS,
				keyword: ["new", "array"]
			},
			contains: [
				{
					begin: /\[/,
					end: /]/,
					keywords: {
						literal: LITERALS,
						keyword: ["new", "array"]
					},
					contains: ["self", ...ATTRIBUTE_CONTAINS]
				},
				...ATTRIBUTE_CONTAINS,
				{
					scope: "meta",
					variants: [{ match: PASCAL_CASE_CLASS_NAME_RE }, { match: UPCASE_NAME_RE }]
				}
			]
		};
		return {
			case_insensitive: false,
			keywords: KEYWORDS,
			contains: [
				ATTRIBUTES,
				hljs.HASH_COMMENT_MODE,
				hljs.COMMENT("//", "$"),
				hljs.COMMENT("/\\*", "\\*/", { contains: [{
					scope: "doctag",
					match: "@[A-Za-z]+"
				}] }),
				{
					match: /__halt_compiler\(\);/,
					keywords: "__halt_compiler",
					starts: {
						scope: "comment",
						end: hljs.MATCH_NOTHING_RE,
						contains: [{
							match: /\?>/,
							scope: "meta",
							endsParent: true
						}]
					}
				},
				PREPROCESSOR,
				{
					scope: "variable.language",
					match: /\$this\b/
				},
				VARIABLE,
				FUNCTION_INVOKE,
				LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
				{
					match: [
						/const/,
						/\s/,
						IDENT_RE
					],
					scope: {
						1: "keyword",
						3: "variable.constant"
					}
				},
				CONSTRUCTOR_CALL,
				{
					scope: "function",
					relevance: 0,
					beginKeywords: "fn function",
					end: /[;{]/,
					excludeEnd: true,
					illegal: "[$%\\[]",
					contains: [
						{ beginKeywords: "use" },
						hljs.UNDERSCORE_TITLE_MODE,
						{
							begin: "=>",
							endsParent: true
						},
						{
							scope: "params",
							begin: "\\(",
							end: "\\)",
							excludeBegin: true,
							excludeEnd: true,
							keywords: KEYWORDS,
							contains: [
								"self",
								ATTRIBUTES,
								VARIABLE,
								LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
								hljs.C_BLOCK_COMMENT_MODE,
								STRING,
								NUMBER
							]
						}
					]
				},
				{
					scope: "class",
					variants: [{
						beginKeywords: "enum",
						illegal: /[($"]/
					}, {
						beginKeywords: "class interface trait",
						illegal: /[:($"]/
					}],
					relevance: 0,
					end: /\{/,
					excludeEnd: true,
					contains: [{ beginKeywords: "extends implements" }, hljs.UNDERSCORE_TITLE_MODE]
				},
				{
					beginKeywords: "namespace",
					relevance: 0,
					end: ";",
					illegal: /[.']/,
					contains: [hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
				},
				{
					beginKeywords: "use",
					relevance: 0,
					end: ";",
					contains: [{
						match: /\b(as|const|function)\b/,
						scope: "keyword"
					}, hljs.UNDERSCORE_TITLE_MODE]
				},
				STRING,
				NUMBER
			]
		};
	}
	module.exports = php;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/php-template.js
var require_php_template = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function phpTemplate(hljs) {
		return {
			name: "PHP template",
			subLanguage: "xml",
			contains: [{
				begin: /<\?(php|=)?/,
				end: /\?>/,
				subLanguage: "php",
				contains: [
					{
						begin: "/\\*",
						end: "\\*/",
						skip: true
					},
					{
						begin: "b\"",
						end: "\"",
						skip: true
					},
					{
						begin: "b'",
						end: "'",
						skip: true
					},
					hljs.inherit(hljs.APOS_STRING_MODE, {
						illegal: null,
						className: null,
						contains: null,
						skip: true
					}),
					hljs.inherit(hljs.QUOTE_STRING_MODE, {
						illegal: null,
						className: null,
						contains: null,
						skip: true
					})
				]
			}]
		};
	}
	module.exports = phpTemplate;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/plaintext.js
var require_plaintext = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function plaintext(hljs) {
		return {
			name: "Plain text",
			aliases: ["text", "txt"],
			disableAutodetect: true
		};
	}
	module.exports = plaintext;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/python.js
var require_python = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function python(hljs) {
		const regex = hljs.regex;
		const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
		const RESERVED_WORDS = [
			"and",
			"as",
			"assert",
			"async",
			"await",
			"break",
			"case",
			"class",
			"continue",
			"def",
			"del",
			"elif",
			"else",
			"except",
			"finally",
			"for",
			"from",
			"global",
			"if",
			"import",
			"in",
			"is",
			"lambda",
			"match",
			"nonlocal|10",
			"not",
			"or",
			"pass",
			"raise",
			"return",
			"try",
			"while",
			"with",
			"yield"
		];
		const KEYWORDS = {
			$pattern: /[A-Za-z]\w+|__\w+__/,
			keyword: RESERVED_WORDS,
			built_in: [
				"__import__",
				"abs",
				"all",
				"any",
				"ascii",
				"bin",
				"bool",
				"breakpoint",
				"bytearray",
				"bytes",
				"callable",
				"chr",
				"classmethod",
				"compile",
				"complex",
				"delattr",
				"dict",
				"dir",
				"divmod",
				"enumerate",
				"eval",
				"exec",
				"filter",
				"float",
				"format",
				"frozenset",
				"getattr",
				"globals",
				"hasattr",
				"hash",
				"help",
				"hex",
				"id",
				"input",
				"int",
				"isinstance",
				"issubclass",
				"iter",
				"len",
				"list",
				"locals",
				"map",
				"max",
				"memoryview",
				"min",
				"next",
				"object",
				"oct",
				"open",
				"ord",
				"pow",
				"print",
				"property",
				"range",
				"repr",
				"reversed",
				"round",
				"set",
				"setattr",
				"slice",
				"sorted",
				"staticmethod",
				"str",
				"sum",
				"super",
				"tuple",
				"type",
				"vars",
				"zip"
			],
			literal: [
				"__debug__",
				"Ellipsis",
				"False",
				"None",
				"NotImplemented",
				"True"
			],
			type: [
				"Any",
				"Callable",
				"Coroutine",
				"Dict",
				"List",
				"Literal",
				"Generic",
				"Optional",
				"Sequence",
				"Set",
				"Tuple",
				"Type",
				"Union"
			]
		};
		const PROMPT = {
			className: "meta",
			begin: /^(>>>|\.\.\.) /
		};
		const SUBST = {
			className: "subst",
			begin: /\{/,
			end: /\}/,
			keywords: KEYWORDS,
			illegal: /#/
		};
		const LITERAL_BRACKET = {
			begin: /\{\{/,
			relevance: 0
		};
		const STRING = {
			className: "string",
			contains: [hljs.BACKSLASH_ESCAPE],
			variants: [
				{
					begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
					end: /'''/,
					contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
					relevance: 10
				},
				{
					begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
					end: /"""/,
					contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
					relevance: 10
				},
				{
					begin: /([fF][rR]|[rR][fF]|[fF])'''/,
					end: /'''/,
					contains: [
						hljs.BACKSLASH_ESCAPE,
						PROMPT,
						LITERAL_BRACKET,
						SUBST
					]
				},
				{
					begin: /([fF][rR]|[rR][fF]|[fF])"""/,
					end: /"""/,
					contains: [
						hljs.BACKSLASH_ESCAPE,
						PROMPT,
						LITERAL_BRACKET,
						SUBST
					]
				},
				{
					begin: /([uU]|[rR])'/,
					end: /'/,
					relevance: 10
				},
				{
					begin: /([uU]|[rR])"/,
					end: /"/,
					relevance: 10
				},
				{
					begin: /([bB]|[bB][rR]|[rR][bB])'/,
					end: /'/
				},
				{
					begin: /([bB]|[bB][rR]|[rR][bB])"/,
					end: /"/
				},
				{
					begin: /([fF][rR]|[rR][fF]|[fF])'/,
					end: /'/,
					contains: [
						hljs.BACKSLASH_ESCAPE,
						LITERAL_BRACKET,
						SUBST
					]
				},
				{
					begin: /([fF][rR]|[rR][fF]|[fF])"/,
					end: /"/,
					contains: [
						hljs.BACKSLASH_ESCAPE,
						LITERAL_BRACKET,
						SUBST
					]
				},
				hljs.APOS_STRING_MODE,
				hljs.QUOTE_STRING_MODE
			]
		};
		const digitpart = "[0-9](_?[0-9])*";
		const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
		const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
		const NUMBER = {
			className: "number",
			relevance: 0,
			variants: [
				{ begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})` },
				{ begin: `(${pointfloat})[jJ]?` },
				{ begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})` },
				{ begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})` },
				{ begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})` },
				{ begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})` },
				{ begin: `\\b(${digitpart})[jJ](?=${lookahead})` }
			]
		};
		const COMMENT_TYPE = {
			className: "comment",
			begin: regex.lookahead(/# type:/),
			end: /$/,
			keywords: KEYWORDS,
			contains: [{ begin: /# type:/ }, {
				begin: /#/,
				end: /\b\B/,
				endsWithParent: true
			}]
		};
		const PARAMS = {
			className: "params",
			variants: [{
				className: "",
				begin: /\(\s*\)/,
				skip: true
			}, {
				begin: /\(/,
				end: /\)/,
				excludeBegin: true,
				excludeEnd: true,
				keywords: KEYWORDS,
				contains: [
					"self",
					PROMPT,
					NUMBER,
					STRING,
					hljs.HASH_COMMENT_MODE
				]
			}]
		};
		SUBST.contains = [
			STRING,
			NUMBER,
			PROMPT
		];
		return {
			name: "Python",
			aliases: [
				"py",
				"gyp",
				"ipython"
			],
			unicodeRegex: true,
			keywords: KEYWORDS,
			illegal: /(<\/|\?)|=>/,
			contains: [
				PROMPT,
				NUMBER,
				{
					scope: "variable.language",
					match: /\bself\b/
				},
				{
					beginKeywords: "if",
					relevance: 0
				},
				{
					match: /\bor\b/,
					scope: "keyword"
				},
				STRING,
				COMMENT_TYPE,
				hljs.HASH_COMMENT_MODE,
				{
					match: [
						/\bdef/,
						/\s+/,
						IDENT_RE
					],
					scope: {
						1: "keyword",
						3: "title.function"
					},
					contains: [PARAMS]
				},
				{
					variants: [{ match: [
						/\bclass/,
						/\s+/,
						IDENT_RE,
						/\s*/,
						/\(\s*/,
						IDENT_RE,
						/\s*\)/
					] }, { match: [
						/\bclass/,
						/\s+/,
						IDENT_RE
					] }],
					scope: {
						1: "keyword",
						3: "title.class",
						6: "title.class.inherited"
					}
				},
				{
					className: "meta",
					begin: /^[\t ]*@/,
					end: /(?=#)|$/,
					contains: [
						NUMBER,
						PARAMS,
						STRING
					]
				}
			]
		};
	}
	module.exports = python;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/python-repl.js
var require_python_repl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function pythonRepl(hljs) {
		return {
			aliases: ["pycon"],
			contains: [{
				className: "meta.prompt",
				starts: {
					end: / |$/,
					starts: {
						end: "$",
						subLanguage: "python"
					}
				},
				variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }]
			}]
		};
	}
	module.exports = pythonRepl;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/r.js
var require_r = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function r(hljs) {
		const regex = hljs.regex;
		const IDENT_RE = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
		const NUMBER_TYPES_RE = regex.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/);
		const OPERATORS_RE = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/;
		const PUNCTUATION_RE = regex.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
		return {
			name: "R",
			keywords: {
				$pattern: IDENT_RE,
				keyword: "function if in break next repeat else for while",
				literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
				built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
			},
			contains: [
				hljs.COMMENT(/#'/, /$/, { contains: [
					{
						scope: "doctag",
						match: /@examples/,
						starts: {
							end: regex.lookahead(regex.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
							endsParent: true
						}
					},
					{
						scope: "doctag",
						begin: "@param",
						end: /$/,
						contains: [{
							scope: "variable",
							variants: [{ match: IDENT_RE }, { match: /`(?:\\.|[^`\\])+`/ }],
							endsParent: true
						}]
					},
					{
						scope: "doctag",
						match: /@[a-zA-Z]+/
					},
					{
						scope: "keyword",
						match: /\\[a-zA-Z]+/
					}
				] }),
				hljs.HASH_COMMENT_MODE,
				{
					scope: "string",
					contains: [hljs.BACKSLASH_ESCAPE],
					variants: [
						hljs.END_SAME_AS_BEGIN({
							begin: /[rR]"(-*)\(/,
							end: /\)(-*)"/
						}),
						hljs.END_SAME_AS_BEGIN({
							begin: /[rR]"(-*)\{/,
							end: /\}(-*)"/
						}),
						hljs.END_SAME_AS_BEGIN({
							begin: /[rR]"(-*)\[/,
							end: /\](-*)"/
						}),
						hljs.END_SAME_AS_BEGIN({
							begin: /[rR]'(-*)\(/,
							end: /\)(-*)'/
						}),
						hljs.END_SAME_AS_BEGIN({
							begin: /[rR]'(-*)\{/,
							end: /\}(-*)'/
						}),
						hljs.END_SAME_AS_BEGIN({
							begin: /[rR]'(-*)\[/,
							end: /\](-*)'/
						}),
						{
							begin: "\"",
							end: "\"",
							relevance: 0
						},
						{
							begin: "'",
							end: "'",
							relevance: 0
						}
					]
				},
				{
					relevance: 0,
					variants: [
						{
							scope: {
								1: "operator",
								2: "number"
							},
							match: [OPERATORS_RE, NUMBER_TYPES_RE]
						},
						{
							scope: {
								1: "operator",
								2: "number"
							},
							match: [/%[^%]*%/, NUMBER_TYPES_RE]
						},
						{
							scope: {
								1: "punctuation",
								2: "number"
							},
							match: [PUNCTUATION_RE, NUMBER_TYPES_RE]
						},
						{
							scope: { 2: "number" },
							match: [/[^a-zA-Z0-9._]|^/, NUMBER_TYPES_RE]
						}
					]
				},
				{
					scope: { 3: "operator" },
					match: [
						IDENT_RE,
						/\s+/,
						/<-/,
						/\s+/
					]
				},
				{
					scope: "operator",
					relevance: 0,
					variants: [{ match: OPERATORS_RE }, { match: /%[^%]*%/ }]
				},
				{
					scope: "punctuation",
					relevance: 0,
					match: PUNCTUATION_RE
				},
				{
					begin: "`",
					end: "`",
					contains: [{ begin: /\\./ }]
				}
			]
		};
	}
	module.exports = r;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/rust.js
var require_rust = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function rust(hljs) {
		const regex = hljs.regex;
		const RAW_IDENTIFIER = /(r#)?/;
		const UNDERSCORE_IDENT_RE = regex.concat(RAW_IDENTIFIER, hljs.UNDERSCORE_IDENT_RE);
		const IDENT_RE = regex.concat(RAW_IDENTIFIER, hljs.IDENT_RE);
		const FUNCTION_INVOKE = {
			className: "title.function.invoke",
			relevance: 0,
			begin: regex.concat(/\b/, /(?!let|for|while|if|else|match\b)/, IDENT_RE, regex.lookahead(/\s*\(/))
		};
		const NUMBER_SUFFIX = "([ui](8|16|32|64|128|size)|f(32|64))?";
		const KEYWORDS = [
			"abstract",
			"as",
			"async",
			"await",
			"become",
			"box",
			"break",
			"const",
			"continue",
			"crate",
			"do",
			"dyn",
			"else",
			"enum",
			"extern",
			"false",
			"final",
			"fn",
			"for",
			"if",
			"impl",
			"in",
			"let",
			"loop",
			"macro",
			"match",
			"mod",
			"move",
			"mut",
			"override",
			"priv",
			"pub",
			"ref",
			"return",
			"self",
			"Self",
			"static",
			"struct",
			"super",
			"trait",
			"true",
			"try",
			"type",
			"typeof",
			"union",
			"unsafe",
			"unsized",
			"use",
			"virtual",
			"where",
			"while",
			"yield"
		];
		const LITERALS = [
			"true",
			"false",
			"Some",
			"None",
			"Ok",
			"Err"
		];
		const BUILTINS = [
			"drop ",
			"Copy",
			"Send",
			"Sized",
			"Sync",
			"Drop",
			"Fn",
			"FnMut",
			"FnOnce",
			"ToOwned",
			"Clone",
			"Debug",
			"PartialEq",
			"PartialOrd",
			"Eq",
			"Ord",
			"AsRef",
			"AsMut",
			"Into",
			"From",
			"Default",
			"Iterator",
			"Extend",
			"IntoIterator",
			"DoubleEndedIterator",
			"ExactSizeIterator",
			"SliceConcatExt",
			"ToString",
			"assert!",
			"assert_eq!",
			"bitflags!",
			"bytes!",
			"cfg!",
			"col!",
			"concat!",
			"concat_idents!",
			"debug_assert!",
			"debug_assert_eq!",
			"env!",
			"eprintln!",
			"panic!",
			"file!",
			"format!",
			"format_args!",
			"include_bytes!",
			"include_str!",
			"line!",
			"local_data_key!",
			"module_path!",
			"option_env!",
			"print!",
			"println!",
			"select!",
			"stringify!",
			"try!",
			"unimplemented!",
			"unreachable!",
			"vec!",
			"write!",
			"writeln!",
			"macro_rules!",
			"assert_ne!",
			"debug_assert_ne!"
		];
		const TYPES = [
			"i8",
			"i16",
			"i32",
			"i64",
			"i128",
			"isize",
			"u8",
			"u16",
			"u32",
			"u64",
			"u128",
			"usize",
			"f32",
			"f64",
			"str",
			"char",
			"bool",
			"Box",
			"Option",
			"Result",
			"String",
			"Vec"
		];
		return {
			name: "Rust",
			aliases: ["rs"],
			keywords: {
				$pattern: hljs.IDENT_RE + "!?",
				type: TYPES,
				keyword: KEYWORDS,
				literal: LITERALS,
				built_in: BUILTINS
			},
			illegal: "</",
			contains: [
				hljs.C_LINE_COMMENT_MODE,
				hljs.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
				hljs.inherit(hljs.QUOTE_STRING_MODE, {
					begin: /b?"/,
					illegal: null
				}),
				{
					className: "symbol",
					begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
				},
				{
					scope: "string",
					variants: [{ begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ }, {
						begin: /b?'/,
						end: /'/,
						contains: [{
							scope: "char.escape",
							match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
						}]
					}]
				},
				{
					className: "number",
					variants: [
						{ begin: "\\b0b([01_]+)" + NUMBER_SUFFIX },
						{ begin: "\\b0o([0-7_]+)" + NUMBER_SUFFIX },
						{ begin: "\\b0x([A-Fa-f0-9_]+)" + NUMBER_SUFFIX },
						{ begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + NUMBER_SUFFIX }
					],
					relevance: 0
				},
				{
					begin: [
						/fn/,
						/\s+/,
						UNDERSCORE_IDENT_RE
					],
					className: {
						1: "keyword",
						3: "title.function"
					}
				},
				{
					className: "meta",
					begin: "#!?\\[",
					end: "\\]",
					contains: [{
						className: "string",
						begin: /"/,
						end: /"/,
						contains: [hljs.BACKSLASH_ESCAPE]
					}]
				},
				{
					begin: [
						/let/,
						/\s+/,
						/(?:mut\s+)?/,
						UNDERSCORE_IDENT_RE
					],
					className: {
						1: "keyword",
						3: "keyword",
						4: "variable"
					}
				},
				{
					begin: [
						/for/,
						/\s+/,
						UNDERSCORE_IDENT_RE,
						/\s+/,
						/in/
					],
					className: {
						1: "keyword",
						3: "variable",
						5: "keyword"
					}
				},
				{
					begin: [
						/type/,
						/\s+/,
						UNDERSCORE_IDENT_RE
					],
					className: {
						1: "keyword",
						3: "title.class"
					}
				},
				{
					begin: [
						/(?:trait|enum|struct|union|impl|for)/,
						/\s+/,
						UNDERSCORE_IDENT_RE
					],
					className: {
						1: "keyword",
						3: "title.class"
					}
				},
				{
					begin: hljs.IDENT_RE + "::",
					keywords: {
						keyword: "Self",
						built_in: BUILTINS,
						type: TYPES
					}
				},
				{
					className: "punctuation",
					begin: "->"
				},
				FUNCTION_INVOKE
			]
		};
	}
	module.exports = rust;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/scss.js
var require_scss = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MODES = (hljs) => {
		return {
			IMPORTANT: {
				scope: "meta",
				begin: "!important"
			},
			BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
			HEXCOLOR: {
				scope: "number",
				begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
			},
			FUNCTION_DISPATCH: {
				className: "built_in",
				begin: /[\w-]+(?=\()/
			},
			ATTRIBUTE_SELECTOR_MODE: {
				scope: "selector-attr",
				begin: /\[/,
				end: /\]/,
				illegal: "$",
				contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
			},
			CSS_NUMBER_MODE: {
				scope: "number",
				begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
				relevance: 0
			},
			CSS_VARIABLE: {
				className: "attr",
				begin: /--[A-Za-z_][A-Za-z0-9_-]*/
			}
		};
	};
	var HTML_TAGS = [
		"a",
		"abbr",
		"address",
		"article",
		"aside",
		"audio",
		"b",
		"blockquote",
		"body",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"dd",
		"del",
		"details",
		"dfn",
		"div",
		"dl",
		"dt",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"header",
		"hgroup",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"mark",
		"menu",
		"nav",
		"object",
		"ol",
		"optgroup",
		"option",
		"p",
		"picture",
		"q",
		"quote",
		"samp",
		"section",
		"select",
		"source",
		"span",
		"strong",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"ul",
		"var",
		"video"
	];
	var SVG_TAGS = [
		"defs",
		"g",
		"marker",
		"mask",
		"pattern",
		"svg",
		"switch",
		"symbol",
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feFlood",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMorphology",
		"feOffset",
		"feSpecularLighting",
		"feTile",
		"feTurbulence",
		"linearGradient",
		"radialGradient",
		"stop",
		"circle",
		"ellipse",
		"image",
		"line",
		"path",
		"polygon",
		"polyline",
		"rect",
		"text",
		"use",
		"textPath",
		"tspan",
		"foreignObject",
		"clipPath"
	];
	var TAGS = [...HTML_TAGS, ...SVG_TAGS];
	var MEDIA_FEATURES = [
		"any-hover",
		"any-pointer",
		"aspect-ratio",
		"color",
		"color-gamut",
		"color-index",
		"device-aspect-ratio",
		"device-height",
		"device-width",
		"display-mode",
		"forced-colors",
		"grid",
		"height",
		"hover",
		"inverted-colors",
		"monochrome",
		"orientation",
		"overflow-block",
		"overflow-inline",
		"pointer",
		"prefers-color-scheme",
		"prefers-contrast",
		"prefers-reduced-motion",
		"prefers-reduced-transparency",
		"resolution",
		"scan",
		"scripting",
		"update",
		"width",
		"min-width",
		"max-width",
		"min-height",
		"max-height"
	].sort().reverse();
	var PSEUDO_CLASSES = [
		"active",
		"any-link",
		"blank",
		"checked",
		"current",
		"default",
		"defined",
		"dir",
		"disabled",
		"drop",
		"empty",
		"enabled",
		"first",
		"first-child",
		"first-of-type",
		"fullscreen",
		"future",
		"focus",
		"focus-visible",
		"focus-within",
		"has",
		"host",
		"host-context",
		"hover",
		"indeterminate",
		"in-range",
		"invalid",
		"is",
		"lang",
		"last-child",
		"last-of-type",
		"left",
		"link",
		"local-link",
		"not",
		"nth-child",
		"nth-col",
		"nth-last-child",
		"nth-last-col",
		"nth-last-of-type",
		"nth-of-type",
		"only-child",
		"only-of-type",
		"optional",
		"out-of-range",
		"past",
		"placeholder-shown",
		"read-only",
		"read-write",
		"required",
		"right",
		"root",
		"scope",
		"target",
		"target-within",
		"user-invalid",
		"valid",
		"visited",
		"where"
	].sort().reverse();
	var PSEUDO_ELEMENTS = [
		"after",
		"backdrop",
		"before",
		"cue",
		"cue-region",
		"first-letter",
		"first-line",
		"grammar-error",
		"marker",
		"part",
		"placeholder",
		"selection",
		"slotted",
		"spelling-error"
	].sort().reverse();
	var ATTRIBUTES = [
		"accent-color",
		"align-content",
		"align-items",
		"align-self",
		"alignment-baseline",
		"all",
		"anchor-name",
		"animation",
		"animation-composition",
		"animation-delay",
		"animation-direction",
		"animation-duration",
		"animation-fill-mode",
		"animation-iteration-count",
		"animation-name",
		"animation-play-state",
		"animation-range",
		"animation-range-end",
		"animation-range-start",
		"animation-timeline",
		"animation-timing-function",
		"appearance",
		"aspect-ratio",
		"backdrop-filter",
		"backface-visibility",
		"background",
		"background-attachment",
		"background-blend-mode",
		"background-clip",
		"background-color",
		"background-image",
		"background-origin",
		"background-position",
		"background-position-x",
		"background-position-y",
		"background-repeat",
		"background-size",
		"baseline-shift",
		"block-size",
		"border",
		"border-block",
		"border-block-color",
		"border-block-end",
		"border-block-end-color",
		"border-block-end-style",
		"border-block-end-width",
		"border-block-start",
		"border-block-start-color",
		"border-block-start-style",
		"border-block-start-width",
		"border-block-style",
		"border-block-width",
		"border-bottom",
		"border-bottom-color",
		"border-bottom-left-radius",
		"border-bottom-right-radius",
		"border-bottom-style",
		"border-bottom-width",
		"border-collapse",
		"border-color",
		"border-end-end-radius",
		"border-end-start-radius",
		"border-image",
		"border-image-outset",
		"border-image-repeat",
		"border-image-slice",
		"border-image-source",
		"border-image-width",
		"border-inline",
		"border-inline-color",
		"border-inline-end",
		"border-inline-end-color",
		"border-inline-end-style",
		"border-inline-end-width",
		"border-inline-start",
		"border-inline-start-color",
		"border-inline-start-style",
		"border-inline-start-width",
		"border-inline-style",
		"border-inline-width",
		"border-left",
		"border-left-color",
		"border-left-style",
		"border-left-width",
		"border-radius",
		"border-right",
		"border-right-color",
		"border-right-style",
		"border-right-width",
		"border-spacing",
		"border-start-end-radius",
		"border-start-start-radius",
		"border-style",
		"border-top",
		"border-top-color",
		"border-top-left-radius",
		"border-top-right-radius",
		"border-top-style",
		"border-top-width",
		"border-width",
		"bottom",
		"box-align",
		"box-decoration-break",
		"box-direction",
		"box-flex",
		"box-flex-group",
		"box-lines",
		"box-ordinal-group",
		"box-orient",
		"box-pack",
		"box-shadow",
		"box-sizing",
		"break-after",
		"break-before",
		"break-inside",
		"caption-side",
		"caret-color",
		"clear",
		"clip",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"color-scheme",
		"column-count",
		"column-fill",
		"column-gap",
		"column-rule",
		"column-rule-color",
		"column-rule-style",
		"column-rule-width",
		"column-span",
		"column-width",
		"columns",
		"contain",
		"contain-intrinsic-block-size",
		"contain-intrinsic-height",
		"contain-intrinsic-inline-size",
		"contain-intrinsic-size",
		"contain-intrinsic-width",
		"container",
		"container-name",
		"container-type",
		"content",
		"content-visibility",
		"counter-increment",
		"counter-reset",
		"counter-set",
		"cue",
		"cue-after",
		"cue-before",
		"cursor",
		"cx",
		"cy",
		"direction",
		"display",
		"dominant-baseline",
		"empty-cells",
		"enable-background",
		"field-sizing",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"flex",
		"flex-basis",
		"flex-direction",
		"flex-flow",
		"flex-grow",
		"flex-shrink",
		"flex-wrap",
		"float",
		"flood-color",
		"flood-opacity",
		"flow",
		"font",
		"font-display",
		"font-family",
		"font-feature-settings",
		"font-kerning",
		"font-language-override",
		"font-optical-sizing",
		"font-palette",
		"font-size",
		"font-size-adjust",
		"font-smooth",
		"font-smoothing",
		"font-stretch",
		"font-style",
		"font-synthesis",
		"font-synthesis-position",
		"font-synthesis-small-caps",
		"font-synthesis-style",
		"font-synthesis-weight",
		"font-variant",
		"font-variant-alternates",
		"font-variant-caps",
		"font-variant-east-asian",
		"font-variant-emoji",
		"font-variant-ligatures",
		"font-variant-numeric",
		"font-variant-position",
		"font-variation-settings",
		"font-weight",
		"forced-color-adjust",
		"gap",
		"glyph-orientation-horizontal",
		"glyph-orientation-vertical",
		"grid",
		"grid-area",
		"grid-auto-columns",
		"grid-auto-flow",
		"grid-auto-rows",
		"grid-column",
		"grid-column-end",
		"grid-column-start",
		"grid-gap",
		"grid-row",
		"grid-row-end",
		"grid-row-start",
		"grid-template",
		"grid-template-areas",
		"grid-template-columns",
		"grid-template-rows",
		"hanging-punctuation",
		"height",
		"hyphenate-character",
		"hyphenate-limit-chars",
		"hyphens",
		"icon",
		"image-orientation",
		"image-rendering",
		"image-resolution",
		"ime-mode",
		"initial-letter",
		"initial-letter-align",
		"inline-size",
		"inset",
		"inset-area",
		"inset-block",
		"inset-block-end",
		"inset-block-start",
		"inset-inline",
		"inset-inline-end",
		"inset-inline-start",
		"isolation",
		"justify-content",
		"justify-items",
		"justify-self",
		"kerning",
		"left",
		"letter-spacing",
		"lighting-color",
		"line-break",
		"line-height",
		"line-height-step",
		"list-style",
		"list-style-image",
		"list-style-position",
		"list-style-type",
		"margin",
		"margin-block",
		"margin-block-end",
		"margin-block-start",
		"margin-bottom",
		"margin-inline",
		"margin-inline-end",
		"margin-inline-start",
		"margin-left",
		"margin-right",
		"margin-top",
		"margin-trim",
		"marker",
		"marker-end",
		"marker-mid",
		"marker-start",
		"marks",
		"mask",
		"mask-border",
		"mask-border-mode",
		"mask-border-outset",
		"mask-border-repeat",
		"mask-border-slice",
		"mask-border-source",
		"mask-border-width",
		"mask-clip",
		"mask-composite",
		"mask-image",
		"mask-mode",
		"mask-origin",
		"mask-position",
		"mask-repeat",
		"mask-size",
		"mask-type",
		"masonry-auto-flow",
		"math-depth",
		"math-shift",
		"math-style",
		"max-block-size",
		"max-height",
		"max-inline-size",
		"max-width",
		"min-block-size",
		"min-height",
		"min-inline-size",
		"min-width",
		"mix-blend-mode",
		"nav-down",
		"nav-index",
		"nav-left",
		"nav-right",
		"nav-up",
		"none",
		"normal",
		"object-fit",
		"object-position",
		"offset",
		"offset-anchor",
		"offset-distance",
		"offset-path",
		"offset-position",
		"offset-rotate",
		"opacity",
		"order",
		"orphans",
		"outline",
		"outline-color",
		"outline-offset",
		"outline-style",
		"outline-width",
		"overflow",
		"overflow-anchor",
		"overflow-block",
		"overflow-clip-margin",
		"overflow-inline",
		"overflow-wrap",
		"overflow-x",
		"overflow-y",
		"overlay",
		"overscroll-behavior",
		"overscroll-behavior-block",
		"overscroll-behavior-inline",
		"overscroll-behavior-x",
		"overscroll-behavior-y",
		"padding",
		"padding-block",
		"padding-block-end",
		"padding-block-start",
		"padding-bottom",
		"padding-inline",
		"padding-inline-end",
		"padding-inline-start",
		"padding-left",
		"padding-right",
		"padding-top",
		"page",
		"page-break-after",
		"page-break-before",
		"page-break-inside",
		"paint-order",
		"pause",
		"pause-after",
		"pause-before",
		"perspective",
		"perspective-origin",
		"place-content",
		"place-items",
		"place-self",
		"pointer-events",
		"position",
		"position-anchor",
		"position-visibility",
		"print-color-adjust",
		"quotes",
		"r",
		"resize",
		"rest",
		"rest-after",
		"rest-before",
		"right",
		"rotate",
		"row-gap",
		"ruby-align",
		"ruby-position",
		"scale",
		"scroll-behavior",
		"scroll-margin",
		"scroll-margin-block",
		"scroll-margin-block-end",
		"scroll-margin-block-start",
		"scroll-margin-bottom",
		"scroll-margin-inline",
		"scroll-margin-inline-end",
		"scroll-margin-inline-start",
		"scroll-margin-left",
		"scroll-margin-right",
		"scroll-margin-top",
		"scroll-padding",
		"scroll-padding-block",
		"scroll-padding-block-end",
		"scroll-padding-block-start",
		"scroll-padding-bottom",
		"scroll-padding-inline",
		"scroll-padding-inline-end",
		"scroll-padding-inline-start",
		"scroll-padding-left",
		"scroll-padding-right",
		"scroll-padding-top",
		"scroll-snap-align",
		"scroll-snap-stop",
		"scroll-snap-type",
		"scroll-timeline",
		"scroll-timeline-axis",
		"scroll-timeline-name",
		"scrollbar-color",
		"scrollbar-gutter",
		"scrollbar-width",
		"shape-image-threshold",
		"shape-margin",
		"shape-outside",
		"shape-rendering",
		"speak",
		"speak-as",
		"src",
		"stop-color",
		"stop-opacity",
		"stroke",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke-width",
		"tab-size",
		"table-layout",
		"text-align",
		"text-align-all",
		"text-align-last",
		"text-anchor",
		"text-combine-upright",
		"text-decoration",
		"text-decoration-color",
		"text-decoration-line",
		"text-decoration-skip",
		"text-decoration-skip-ink",
		"text-decoration-style",
		"text-decoration-thickness",
		"text-emphasis",
		"text-emphasis-color",
		"text-emphasis-position",
		"text-emphasis-style",
		"text-indent",
		"text-justify",
		"text-orientation",
		"text-overflow",
		"text-rendering",
		"text-shadow",
		"text-size-adjust",
		"text-transform",
		"text-underline-offset",
		"text-underline-position",
		"text-wrap",
		"text-wrap-mode",
		"text-wrap-style",
		"timeline-scope",
		"top",
		"touch-action",
		"transform",
		"transform-box",
		"transform-origin",
		"transform-style",
		"transition",
		"transition-behavior",
		"transition-delay",
		"transition-duration",
		"transition-property",
		"transition-timing-function",
		"translate",
		"unicode-bidi",
		"user-modify",
		"user-select",
		"vector-effect",
		"vertical-align",
		"view-timeline",
		"view-timeline-axis",
		"view-timeline-inset",
		"view-timeline-name",
		"view-transition-name",
		"visibility",
		"voice-balance",
		"voice-duration",
		"voice-family",
		"voice-pitch",
		"voice-range",
		"voice-rate",
		"voice-stress",
		"voice-volume",
		"white-space",
		"white-space-collapse",
		"widows",
		"width",
		"will-change",
		"word-break",
		"word-spacing",
		"word-wrap",
		"writing-mode",
		"x",
		"y",
		"z-index",
		"zoom"
	].sort().reverse();
	/** @type LanguageFn */
	function scss(hljs) {
		const modes = MODES(hljs);
		const PSEUDO_ELEMENTS$1 = PSEUDO_ELEMENTS;
		const PSEUDO_CLASSES$1 = PSEUDO_CLASSES;
		const AT_IDENTIFIER = "@[a-z-]+";
		const AT_MODIFIERS = "and or not only";
		const VARIABLE = {
			className: "variable",
			begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
			relevance: 0
		};
		return {
			name: "SCSS",
			case_insensitive: true,
			illegal: "[=/|']",
			contains: [
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				modes.CSS_NUMBER_MODE,
				{
					className: "selector-id",
					begin: "#[A-Za-z0-9_-]+",
					relevance: 0
				},
				{
					className: "selector-class",
					begin: "\\.[A-Za-z0-9_-]+",
					relevance: 0
				},
				modes.ATTRIBUTE_SELECTOR_MODE,
				{
					className: "selector-tag",
					begin: "\\b(" + TAGS.join("|") + ")\\b",
					relevance: 0
				},
				{
					className: "selector-pseudo",
					begin: ":(" + PSEUDO_CLASSES$1.join("|") + ")"
				},
				{
					className: "selector-pseudo",
					begin: ":(:)?(" + PSEUDO_ELEMENTS$1.join("|") + ")"
				},
				VARIABLE,
				{
					begin: /\(/,
					end: /\)/,
					contains: [modes.CSS_NUMBER_MODE]
				},
				modes.CSS_VARIABLE,
				{
					className: "attribute",
					begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
				},
				{ begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
				{
					begin: /:/,
					end: /[;}{]/,
					relevance: 0,
					contains: [
						modes.BLOCK_COMMENT,
						VARIABLE,
						modes.HEXCOLOR,
						modes.CSS_NUMBER_MODE,
						hljs.QUOTE_STRING_MODE,
						hljs.APOS_STRING_MODE,
						modes.IMPORTANT,
						modes.FUNCTION_DISPATCH
					]
				},
				{
					begin: "@(page|font-face)",
					keywords: {
						$pattern: AT_IDENTIFIER,
						keyword: "@page @font-face"
					}
				},
				{
					begin: "@",
					end: "[{;]",
					returnBegin: true,
					keywords: {
						$pattern: /[a-z-]+/,
						keyword: AT_MODIFIERS,
						attribute: MEDIA_FEATURES.join(" ")
					},
					contains: [
						{
							begin: AT_IDENTIFIER,
							className: "keyword"
						},
						{
							begin: /[a-z-]+(?=:)/,
							className: "attribute"
						},
						VARIABLE,
						hljs.QUOTE_STRING_MODE,
						hljs.APOS_STRING_MODE,
						modes.HEXCOLOR,
						modes.CSS_NUMBER_MODE
					]
				},
				modes.FUNCTION_DISPATCH
			]
		};
	}
	module.exports = scss;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/shell.js
var require_shell = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function shell(hljs) {
		return {
			name: "Shell Session",
			aliases: ["console", "shellsession"],
			contains: [{
				className: "meta.prompt",
				begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
				starts: {
					end: /[^\\](?=\s*$)/,
					subLanguage: "bash"
				}
			}]
		};
	}
	module.exports = shell;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/sql.js
var require_sql = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function sql(hljs) {
		const regex = hljs.regex;
		const COMMENT_MODE = hljs.COMMENT("--", "$");
		const STRING = {
			scope: "string",
			variants: [{
				begin: /'/,
				end: /'/,
				contains: [{ match: /''/ }]
			}]
		};
		const QUOTED_IDENTIFIER = {
			begin: /"/,
			end: /"/,
			contains: [{ match: /""/ }]
		};
		const LITERALS = [
			"true",
			"false",
			"unknown"
		];
		const MULTI_WORD_TYPES = [
			"double precision",
			"large object",
			"with timezone",
			"without timezone"
		];
		const TYPES = [
			"bigint",
			"binary",
			"blob",
			"boolean",
			"char",
			"character",
			"clob",
			"date",
			"dec",
			"decfloat",
			"decimal",
			"float",
			"int",
			"integer",
			"interval",
			"nchar",
			"nclob",
			"national",
			"numeric",
			"real",
			"row",
			"smallint",
			"time",
			"timestamp",
			"varchar",
			"varying",
			"varbinary"
		];
		const NON_RESERVED_WORDS = [
			"add",
			"asc",
			"collation",
			"desc",
			"final",
			"first",
			"last",
			"view"
		];
		const RESERVED_WORDS = [
			"abs",
			"acos",
			"all",
			"allocate",
			"alter",
			"and",
			"any",
			"are",
			"array",
			"array_agg",
			"array_max_cardinality",
			"as",
			"asensitive",
			"asin",
			"asymmetric",
			"at",
			"atan",
			"atomic",
			"authorization",
			"avg",
			"begin",
			"begin_frame",
			"begin_partition",
			"between",
			"bigint",
			"binary",
			"blob",
			"boolean",
			"both",
			"by",
			"call",
			"called",
			"cardinality",
			"cascaded",
			"case",
			"cast",
			"ceil",
			"ceiling",
			"char",
			"char_length",
			"character",
			"character_length",
			"check",
			"classifier",
			"clob",
			"close",
			"coalesce",
			"collate",
			"collect",
			"column",
			"commit",
			"condition",
			"connect",
			"constraint",
			"contains",
			"convert",
			"copy",
			"corr",
			"corresponding",
			"cos",
			"cosh",
			"count",
			"covar_pop",
			"covar_samp",
			"create",
			"cross",
			"cube",
			"cume_dist",
			"current",
			"current_catalog",
			"current_date",
			"current_default_transform_group",
			"current_path",
			"current_role",
			"current_row",
			"current_schema",
			"current_time",
			"current_timestamp",
			"current_path",
			"current_role",
			"current_transform_group_for_type",
			"current_user",
			"cursor",
			"cycle",
			"date",
			"day",
			"deallocate",
			"dec",
			"decimal",
			"decfloat",
			"declare",
			"default",
			"define",
			"delete",
			"dense_rank",
			"deref",
			"describe",
			"deterministic",
			"disconnect",
			"distinct",
			"double",
			"drop",
			"dynamic",
			"each",
			"element",
			"else",
			"empty",
			"end",
			"end_frame",
			"end_partition",
			"end-exec",
			"equals",
			"escape",
			"every",
			"except",
			"exec",
			"execute",
			"exists",
			"exp",
			"external",
			"extract",
			"false",
			"fetch",
			"filter",
			"first_value",
			"float",
			"floor",
			"for",
			"foreign",
			"frame_row",
			"free",
			"from",
			"full",
			"function",
			"fusion",
			"get",
			"global",
			"grant",
			"group",
			"grouping",
			"groups",
			"having",
			"hold",
			"hour",
			"identity",
			"in",
			"indicator",
			"initial",
			"inner",
			"inout",
			"insensitive",
			"insert",
			"int",
			"integer",
			"intersect",
			"intersection",
			"interval",
			"into",
			"is",
			"join",
			"json_array",
			"json_arrayagg",
			"json_exists",
			"json_object",
			"json_objectagg",
			"json_query",
			"json_table",
			"json_table_primitive",
			"json_value",
			"lag",
			"language",
			"large",
			"last_value",
			"lateral",
			"lead",
			"leading",
			"left",
			"like",
			"like_regex",
			"listagg",
			"ln",
			"local",
			"localtime",
			"localtimestamp",
			"log",
			"log10",
			"lower",
			"match",
			"match_number",
			"match_recognize",
			"matches",
			"max",
			"member",
			"merge",
			"method",
			"min",
			"minute",
			"mod",
			"modifies",
			"module",
			"month",
			"multiset",
			"national",
			"natural",
			"nchar",
			"nclob",
			"new",
			"no",
			"none",
			"normalize",
			"not",
			"nth_value",
			"ntile",
			"null",
			"nullif",
			"numeric",
			"octet_length",
			"occurrences_regex",
			"of",
			"offset",
			"old",
			"omit",
			"on",
			"one",
			"only",
			"open",
			"or",
			"order",
			"out",
			"outer",
			"over",
			"overlaps",
			"overlay",
			"parameter",
			"partition",
			"pattern",
			"per",
			"percent",
			"percent_rank",
			"percentile_cont",
			"percentile_disc",
			"period",
			"portion",
			"position",
			"position_regex",
			"power",
			"precedes",
			"precision",
			"prepare",
			"primary",
			"procedure",
			"ptf",
			"range",
			"rank",
			"reads",
			"real",
			"recursive",
			"ref",
			"references",
			"referencing",
			"regr_avgx",
			"regr_avgy",
			"regr_count",
			"regr_intercept",
			"regr_r2",
			"regr_slope",
			"regr_sxx",
			"regr_sxy",
			"regr_syy",
			"release",
			"result",
			"return",
			"returns",
			"revoke",
			"right",
			"rollback",
			"rollup",
			"row",
			"row_number",
			"rows",
			"running",
			"savepoint",
			"scope",
			"scroll",
			"search",
			"second",
			"seek",
			"select",
			"sensitive",
			"session_user",
			"set",
			"show",
			"similar",
			"sin",
			"sinh",
			"skip",
			"smallint",
			"some",
			"specific",
			"specifictype",
			"sql",
			"sqlexception",
			"sqlstate",
			"sqlwarning",
			"sqrt",
			"start",
			"static",
			"stddev_pop",
			"stddev_samp",
			"submultiset",
			"subset",
			"substring",
			"substring_regex",
			"succeeds",
			"sum",
			"symmetric",
			"system",
			"system_time",
			"system_user",
			"table",
			"tablesample",
			"tan",
			"tanh",
			"then",
			"time",
			"timestamp",
			"timezone_hour",
			"timezone_minute",
			"to",
			"trailing",
			"translate",
			"translate_regex",
			"translation",
			"treat",
			"trigger",
			"trim",
			"trim_array",
			"true",
			"truncate",
			"uescape",
			"union",
			"unique",
			"unknown",
			"unnest",
			"update",
			"upper",
			"user",
			"using",
			"value",
			"values",
			"value_of",
			"var_pop",
			"var_samp",
			"varbinary",
			"varchar",
			"varying",
			"versioning",
			"when",
			"whenever",
			"where",
			"width_bucket",
			"window",
			"with",
			"within",
			"without",
			"year"
		];
		const RESERVED_FUNCTIONS = [
			"abs",
			"acos",
			"array_agg",
			"asin",
			"atan",
			"avg",
			"cast",
			"ceil",
			"ceiling",
			"coalesce",
			"corr",
			"cos",
			"cosh",
			"count",
			"covar_pop",
			"covar_samp",
			"cume_dist",
			"dense_rank",
			"deref",
			"element",
			"exp",
			"extract",
			"first_value",
			"floor",
			"json_array",
			"json_arrayagg",
			"json_exists",
			"json_object",
			"json_objectagg",
			"json_query",
			"json_table",
			"json_table_primitive",
			"json_value",
			"lag",
			"last_value",
			"lead",
			"listagg",
			"ln",
			"log",
			"log10",
			"lower",
			"max",
			"min",
			"mod",
			"nth_value",
			"ntile",
			"nullif",
			"percent_rank",
			"percentile_cont",
			"percentile_disc",
			"position",
			"position_regex",
			"power",
			"rank",
			"regr_avgx",
			"regr_avgy",
			"regr_count",
			"regr_intercept",
			"regr_r2",
			"regr_slope",
			"regr_sxx",
			"regr_sxy",
			"regr_syy",
			"row_number",
			"sin",
			"sinh",
			"sqrt",
			"stddev_pop",
			"stddev_samp",
			"substring",
			"substring_regex",
			"sum",
			"tan",
			"tanh",
			"translate",
			"translate_regex",
			"treat",
			"trim",
			"trim_array",
			"unnest",
			"upper",
			"value_of",
			"var_pop",
			"var_samp",
			"width_bucket"
		];
		const POSSIBLE_WITHOUT_PARENS = [
			"current_catalog",
			"current_date",
			"current_default_transform_group",
			"current_path",
			"current_role",
			"current_schema",
			"current_transform_group_for_type",
			"current_user",
			"session_user",
			"system_time",
			"system_user",
			"current_time",
			"localtime",
			"current_timestamp",
			"localtimestamp"
		];
		const COMBOS = [
			"create table",
			"insert into",
			"primary key",
			"foreign key",
			"not null",
			"alter table",
			"add constraint",
			"grouping sets",
			"on overflow",
			"character set",
			"respect nulls",
			"ignore nulls",
			"nulls first",
			"nulls last",
			"depth first",
			"breadth first"
		];
		const FUNCTIONS = RESERVED_FUNCTIONS;
		const KEYWORDS = [...RESERVED_WORDS, ...NON_RESERVED_WORDS].filter((keyword) => {
			return !RESERVED_FUNCTIONS.includes(keyword);
		});
		const VARIABLE = {
			scope: "variable",
			match: /@[a-z0-9][a-z0-9_]*/
		};
		const OPERATOR = {
			scope: "operator",
			match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
			relevance: 0
		};
		const FUNCTION_CALL = {
			match: regex.concat(/\b/, regex.either(...FUNCTIONS), /\s*\(/),
			relevance: 0,
			keywords: { built_in: FUNCTIONS }
		};
		function kws_to_regex(list) {
			return regex.concat(/\b/, regex.either(...list.map((kw) => {
				return kw.replace(/\s+/, "\\s+");
			})), /\b/);
		}
		const MULTI_WORD_KEYWORDS = {
			scope: "keyword",
			match: kws_to_regex(COMBOS),
			relevance: 0
		};
		function reduceRelevancy(list, { exceptions, when } = {}) {
			const qualifyFn = when;
			exceptions = exceptions || [];
			return list.map((item) => {
				if (item.match(/\|\d+$/) || exceptions.includes(item)) return item;
				else if (qualifyFn(item)) return `${item}|0`;
				else return item;
			});
		}
		return {
			name: "SQL",
			case_insensitive: true,
			illegal: /[{}]|<\//,
			keywords: {
				$pattern: /\b[\w\.]+/,
				keyword: reduceRelevancy(KEYWORDS, { when: (x) => x.length < 3 }),
				literal: LITERALS,
				type: TYPES,
				built_in: POSSIBLE_WITHOUT_PARENS
			},
			contains: [
				{
					scope: "type",
					match: kws_to_regex(MULTI_WORD_TYPES)
				},
				MULTI_WORD_KEYWORDS,
				FUNCTION_CALL,
				VARIABLE,
				STRING,
				QUOTED_IDENTIFIER,
				hljs.C_NUMBER_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				COMMENT_MODE,
				OPERATOR
			]
		};
	}
	module.exports = sql;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/swift.js
var require_swift = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* @param {string} value
	* @returns {RegExp}
	* */
	/**
	* @param {RegExp | string } re
	* @returns {string}
	*/
	function source(re) {
		if (!re) return null;
		if (typeof re === "string") return re;
		return re.source;
	}
	/**
	* @param {RegExp | string } re
	* @returns {string}
	*/
	function lookahead(re) {
		return concat("(?=", re, ")");
	}
	/**
	* @param {...(RegExp | string) } args
	* @returns {string}
	*/
	function concat(...args) {
		return args.map((x) => source(x)).join("");
	}
	/**
	* @param { Array<string | RegExp | Object> } args
	* @returns {object}
	*/
	function stripOptionsFromArgs(args) {
		const opts = args[args.length - 1];
		if (typeof opts === "object" && opts.constructor === Object) {
			args.splice(args.length - 1, 1);
			return opts;
		} else return {};
	}
	/** @typedef { {capture?: boolean} } RegexEitherOptions */
	/**
	* Any of the passed expresssions may match
	*
	* Creates a huge this | this | that | that match
	* @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
	* @returns {string}
	*/
	function either(...args) {
		return "(" + (stripOptionsFromArgs(args).capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
	}
	var keywordWrapper = (keyword) => concat(/\b/, keyword, /\w$/.test(keyword) ? /\b/ : /\B/);
	var dotKeywords = ["Protocol", "Type"].map(keywordWrapper);
	var optionalDotKeywords = ["init", "self"].map(keywordWrapper);
	var keywordTypes = ["Any", "Self"];
	var keywords = [
		"actor",
		"any",
		"associatedtype",
		"async",
		"await",
		/as\?/,
		/as!/,
		"as",
		"borrowing",
		"break",
		"case",
		"catch",
		"class",
		"consume",
		"consuming",
		"continue",
		"convenience",
		"copy",
		"default",
		"defer",
		"deinit",
		"didSet",
		"distributed",
		"do",
		"dynamic",
		"each",
		"else",
		"enum",
		"extension",
		"fallthrough",
		/fileprivate\(set\)/,
		"fileprivate",
		"final",
		"for",
		"func",
		"get",
		"guard",
		"if",
		"import",
		"indirect",
		"infix",
		/init\?/,
		/init!/,
		"inout",
		/internal\(set\)/,
		"internal",
		"in",
		"is",
		"isolated",
		"nonisolated",
		"lazy",
		"let",
		"macro",
		"mutating",
		"nonmutating",
		/open\(set\)/,
		"open",
		"operator",
		"optional",
		"override",
		"package",
		"postfix",
		"precedencegroup",
		"prefix",
		/private\(set\)/,
		"private",
		"protocol",
		/public\(set\)/,
		"public",
		"repeat",
		"required",
		"rethrows",
		"return",
		"set",
		"some",
		"static",
		"struct",
		"subscript",
		"super",
		"switch",
		"throws",
		"throw",
		/try\?/,
		/try!/,
		"try",
		"typealias",
		/unowned\(safe\)/,
		/unowned\(unsafe\)/,
		"unowned",
		"var",
		"weak",
		"where",
		"while",
		"willSet"
	];
	var literals = [
		"false",
		"nil",
		"true"
	];
	var precedencegroupKeywords = [
		"assignment",
		"associativity",
		"higherThan",
		"left",
		"lowerThan",
		"none",
		"right"
	];
	var numberSignKeywords = [
		"#colorLiteral",
		"#column",
		"#dsohandle",
		"#else",
		"#elseif",
		"#endif",
		"#error",
		"#file",
		"#fileID",
		"#fileLiteral",
		"#filePath",
		"#function",
		"#if",
		"#imageLiteral",
		"#keyPath",
		"#line",
		"#selector",
		"#sourceLocation",
		"#warning"
	];
	var builtIns = [
		"abs",
		"all",
		"any",
		"assert",
		"assertionFailure",
		"debugPrint",
		"dump",
		"fatalError",
		"getVaList",
		"isKnownUniquelyReferenced",
		"max",
		"min",
		"numericCast",
		"pointwiseMax",
		"pointwiseMin",
		"precondition",
		"preconditionFailure",
		"print",
		"readLine",
		"repeatElement",
		"sequence",
		"stride",
		"swap",
		"swift_unboxFromSwiftValueWithType",
		"transcode",
		"type",
		"unsafeBitCast",
		"unsafeDowncast",
		"withExtendedLifetime",
		"withUnsafeMutablePointer",
		"withUnsafePointer",
		"withVaList",
		"withoutActuallyEscaping",
		"zip"
	];
	var operatorHead = either(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/);
	var operatorCharacter = either(operatorHead, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/);
	var operator = concat(operatorHead, operatorCharacter, "*");
	var identifierHead = either(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/);
	var identifierCharacter = either(identifierHead, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/);
	var identifier = concat(identifierHead, identifierCharacter, "*");
	var typeIdentifier = concat(/[A-Z]/, identifierCharacter, "*");
	var keywordAttributes = [
		"attached",
		"autoclosure",
		concat(/convention\(/, either("swift", "block", "c"), /\)/),
		"discardableResult",
		"dynamicCallable",
		"dynamicMemberLookup",
		"escaping",
		"freestanding",
		"frozen",
		"GKInspectable",
		"IBAction",
		"IBDesignable",
		"IBInspectable",
		"IBOutlet",
		"IBSegueAction",
		"inlinable",
		"main",
		"nonobjc",
		"NSApplicationMain",
		"NSCopying",
		"NSManaged",
		concat(/objc\(/, identifier, /\)/),
		"objc",
		"objcMembers",
		"propertyWrapper",
		"requires_stored_property_inits",
		"resultBuilder",
		"Sendable",
		"testable",
		"UIApplicationMain",
		"unchecked",
		"unknown",
		"usableFromInline",
		"warn_unqualified_access"
	];
	var availabilityKeywords = [
		"iOS",
		"iOSApplicationExtension",
		"macOS",
		"macOSApplicationExtension",
		"macCatalyst",
		"macCatalystApplicationExtension",
		"watchOS",
		"watchOSApplicationExtension",
		"tvOS",
		"tvOSApplicationExtension",
		"swift"
	];
	/** @type LanguageFn */
	function swift(hljs) {
		const WHITESPACE = {
			match: /\s+/,
			relevance: 0
		};
		const BLOCK_COMMENT = hljs.COMMENT("/\\*", "\\*/", { contains: ["self"] });
		const COMMENTS = [hljs.C_LINE_COMMENT_MODE, BLOCK_COMMENT];
		const DOT_KEYWORD = {
			match: [/\./, either(...dotKeywords, ...optionalDotKeywords)],
			className: { 2: "keyword" }
		};
		const KEYWORD_GUARD = {
			match: concat(/\./, either(...keywords)),
			relevance: 0
		};
		const PLAIN_KEYWORDS = keywords.filter((kw) => typeof kw === "string").concat(["_|0"]);
		const KEYWORD = { variants: [{
			className: "keyword",
			match: either(...keywords.filter((kw) => typeof kw !== "string").concat(keywordTypes).map(keywordWrapper), ...optionalDotKeywords)
		}] };
		const KEYWORDS = {
			$pattern: either(/\b\w+/, /#\w+/),
			keyword: PLAIN_KEYWORDS.concat(numberSignKeywords),
			literal: literals
		};
		const KEYWORD_MODES = [
			DOT_KEYWORD,
			KEYWORD_GUARD,
			KEYWORD
		];
		const BUILT_INS = [{
			match: concat(/\./, either(...builtIns)),
			relevance: 0
		}, {
			className: "built_in",
			match: concat(/\b/, either(...builtIns), /(?=\()/)
		}];
		const OPERATOR_GUARD = {
			match: /->/,
			relevance: 0
		};
		const OPERATORS = [OPERATOR_GUARD, {
			className: "operator",
			relevance: 0,
			variants: [{ match: operator }, { match: `\\.(\\.|${operatorCharacter})+` }]
		}];
		const decimalDigits = "([0-9]_*)+";
		const hexDigits = "([0-9a-fA-F]_*)+";
		const NUMBER = {
			className: "number",
			relevance: 0,
			variants: [
				{ match: `\\b(${decimalDigits})(\\.(${decimalDigits}))?([eE][+-]?(${decimalDigits}))?\\b` },
				{ match: `\\b0x(${hexDigits})(\\.(${hexDigits}))?([pP][+-]?(${decimalDigits}))?\\b` },
				{ match: /\b0o([0-7]_*)+\b/ },
				{ match: /\b0b([01]_*)+\b/ }
			]
		};
		const ESCAPED_CHARACTER = (rawDelimiter = "") => ({
			className: "subst",
			variants: [{ match: concat(/\\/, rawDelimiter, /[0\\tnr"']/) }, { match: concat(/\\/, rawDelimiter, /u\{[0-9a-fA-F]{1,8}\}/) }]
		});
		const ESCAPED_NEWLINE = (rawDelimiter = "") => ({
			className: "subst",
			match: concat(/\\/, rawDelimiter, /[\t ]*(?:[\r\n]|\r\n)/)
		});
		const INTERPOLATION = (rawDelimiter = "") => ({
			className: "subst",
			label: "interpol",
			begin: concat(/\\/, rawDelimiter, /\(/),
			end: /\)/
		});
		const MULTILINE_STRING = (rawDelimiter = "") => ({
			begin: concat(rawDelimiter, /"""/),
			end: concat(/"""/, rawDelimiter),
			contains: [
				ESCAPED_CHARACTER(rawDelimiter),
				ESCAPED_NEWLINE(rawDelimiter),
				INTERPOLATION(rawDelimiter)
			]
		});
		const SINGLE_LINE_STRING = (rawDelimiter = "") => ({
			begin: concat(rawDelimiter, /"/),
			end: concat(/"/, rawDelimiter),
			contains: [ESCAPED_CHARACTER(rawDelimiter), INTERPOLATION(rawDelimiter)]
		});
		const STRING = {
			className: "string",
			variants: [
				MULTILINE_STRING(),
				MULTILINE_STRING("#"),
				MULTILINE_STRING("##"),
				MULTILINE_STRING("###"),
				SINGLE_LINE_STRING(),
				SINGLE_LINE_STRING("#"),
				SINGLE_LINE_STRING("##"),
				SINGLE_LINE_STRING("###")
			]
		};
		const REGEXP_CONTENTS = [hljs.BACKSLASH_ESCAPE, {
			begin: /\[/,
			end: /\]/,
			relevance: 0,
			contains: [hljs.BACKSLASH_ESCAPE]
		}];
		const BARE_REGEXP_LITERAL = {
			begin: /\/[^\s](?=[^/\n]*\/)/,
			end: /\//,
			contains: REGEXP_CONTENTS
		};
		const EXTENDED_REGEXP_LITERAL = (rawDelimiter) => {
			const begin = concat(rawDelimiter, /\//);
			const end = concat(/\//, rawDelimiter);
			return {
				begin,
				end,
				contains: [...REGEXP_CONTENTS, {
					scope: "comment",
					begin: `#(?!.*${end})`,
					end: /$/
				}]
			};
		};
		const REGEXP = {
			scope: "regexp",
			variants: [
				EXTENDED_REGEXP_LITERAL("###"),
				EXTENDED_REGEXP_LITERAL("##"),
				EXTENDED_REGEXP_LITERAL("#"),
				BARE_REGEXP_LITERAL
			]
		};
		const QUOTED_IDENTIFIER = { match: concat(/`/, identifier, /`/) };
		const IDENTIFIERS = [
			QUOTED_IDENTIFIER,
			{
				className: "variable",
				match: /\$\d+/
			},
			{
				className: "variable",
				match: `\\$${identifierCharacter}+`
			}
		];
		const ATTRIBUTES = [
			{
				match: /(@|#(un)?)available/,
				scope: "keyword",
				starts: { contains: [{
					begin: /\(/,
					end: /\)/,
					keywords: availabilityKeywords,
					contains: [
						...OPERATORS,
						NUMBER,
						STRING
					]
				}] }
			},
			{
				scope: "keyword",
				match: concat(/@/, either(...keywordAttributes), lookahead(either(/\(/, /\s+/)))
			},
			{
				scope: "meta",
				match: concat(/@/, identifier)
			}
		];
		const TYPE = {
			match: lookahead(/\b[A-Z]/),
			relevance: 0,
			contains: [
				{
					className: "type",
					match: concat(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, identifierCharacter, "+")
				},
				{
					className: "type",
					match: typeIdentifier,
					relevance: 0
				},
				{
					match: /[?!]+/,
					relevance: 0
				},
				{
					match: /\.\.\./,
					relevance: 0
				},
				{
					match: concat(/\s+&\s+/, lookahead(typeIdentifier)),
					relevance: 0
				}
			]
		};
		const GENERIC_ARGUMENTS = {
			begin: /</,
			end: />/,
			keywords: KEYWORDS,
			contains: [
				...COMMENTS,
				...KEYWORD_MODES,
				...ATTRIBUTES,
				OPERATOR_GUARD,
				TYPE
			]
		};
		TYPE.contains.push(GENERIC_ARGUMENTS);
		const TUPLE = {
			begin: /\(/,
			end: /\)/,
			relevance: 0,
			keywords: KEYWORDS,
			contains: [
				"self",
				{
					match: concat(identifier, /\s*:/),
					keywords: "_|0",
					relevance: 0
				},
				...COMMENTS,
				REGEXP,
				...KEYWORD_MODES,
				...BUILT_INS,
				...OPERATORS,
				NUMBER,
				STRING,
				...IDENTIFIERS,
				...ATTRIBUTES,
				TYPE
			]
		};
		const GENERIC_PARAMETERS = {
			begin: /</,
			end: />/,
			keywords: "repeat each",
			contains: [...COMMENTS, TYPE]
		};
		const FUNCTION_PARAMETERS = {
			begin: /\(/,
			end: /\)/,
			keywords: KEYWORDS,
			contains: [
				{
					begin: either(lookahead(concat(identifier, /\s*:/)), lookahead(concat(identifier, /\s+/, identifier, /\s*:/))),
					end: /:/,
					relevance: 0,
					contains: [{
						className: "keyword",
						match: /\b_\b/
					}, {
						className: "params",
						match: identifier
					}]
				},
				...COMMENTS,
				...KEYWORD_MODES,
				...OPERATORS,
				NUMBER,
				STRING,
				...ATTRIBUTES,
				TYPE,
				TUPLE
			],
			endsParent: true,
			illegal: /["']/
		};
		const FUNCTION_OR_MACRO = {
			match: [
				/(func|macro)/,
				/\s+/,
				either(QUOTED_IDENTIFIER.match, identifier, operator)
			],
			className: {
				1: "keyword",
				3: "title.function"
			},
			contains: [
				GENERIC_PARAMETERS,
				FUNCTION_PARAMETERS,
				WHITESPACE
			],
			illegal: [/\[/, /%/]
		};
		const INIT_SUBSCRIPT = {
			match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
			className: { 1: "keyword" },
			contains: [
				GENERIC_PARAMETERS,
				FUNCTION_PARAMETERS,
				WHITESPACE
			],
			illegal: /\[|%/
		};
		const OPERATOR_DECLARATION = {
			match: [
				/operator/,
				/\s+/,
				operator
			],
			className: {
				1: "keyword",
				3: "title"
			}
		};
		const PRECEDENCEGROUP = {
			begin: [
				/precedencegroup/,
				/\s+/,
				typeIdentifier
			],
			className: {
				1: "keyword",
				3: "title"
			},
			contains: [TYPE],
			keywords: [...precedencegroupKeywords, ...literals],
			end: /}/
		};
		const CLASS_FUNC_DECLARATION = {
			match: [
				/class\b/,
				/\s+/,
				/func\b/,
				/\s+/,
				/\b[A-Za-z_][A-Za-z0-9_]*\b/
			],
			scope: {
				1: "keyword",
				3: "keyword",
				5: "title.function"
			}
		};
		const CLASS_VAR_DECLARATION = {
			match: [
				/class\b/,
				/\s+/,
				/var\b/
			],
			scope: {
				1: "keyword",
				3: "keyword"
			}
		};
		const TYPE_DECLARATION = {
			begin: [
				/(struct|protocol|class|extension|enum|actor)/,
				/\s+/,
				identifier,
				/\s*/
			],
			beginScope: {
				1: "keyword",
				3: "title.class"
			},
			keywords: KEYWORDS,
			contains: [
				GENERIC_PARAMETERS,
				...KEYWORD_MODES,
				{
					begin: /:/,
					end: /\{/,
					keywords: KEYWORDS,
					contains: [{
						scope: "title.class.inherited",
						match: typeIdentifier
					}, ...KEYWORD_MODES],
					relevance: 0
				}
			]
		};
		for (const variant of STRING.variants) {
			const interpolation = variant.contains.find((mode) => mode.label === "interpol");
			interpolation.keywords = KEYWORDS;
			const submodes = [
				...KEYWORD_MODES,
				...BUILT_INS,
				...OPERATORS,
				NUMBER,
				STRING,
				...IDENTIFIERS
			];
			interpolation.contains = [...submodes, {
				begin: /\(/,
				end: /\)/,
				contains: ["self", ...submodes]
			}];
		}
		return {
			name: "Swift",
			keywords: KEYWORDS,
			contains: [
				...COMMENTS,
				FUNCTION_OR_MACRO,
				INIT_SUBSCRIPT,
				CLASS_FUNC_DECLARATION,
				CLASS_VAR_DECLARATION,
				TYPE_DECLARATION,
				OPERATOR_DECLARATION,
				PRECEDENCEGROUP,
				{
					beginKeywords: "import",
					end: /$/,
					contains: [...COMMENTS],
					relevance: 0
				},
				REGEXP,
				...KEYWORD_MODES,
				...BUILT_INS,
				...OPERATORS,
				NUMBER,
				STRING,
				...IDENTIFIERS,
				...ATTRIBUTES,
				TYPE,
				TUPLE
			]
		};
	}
	module.exports = swift;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/yaml.js
var require_yaml = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function yaml(hljs) {
		const LITERALS = "true false yes no null";
		const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";
		const KEY = {
			className: "attr",
			variants: [
				{ begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
				{ begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/ },
				{ begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/ }
			]
		};
		const TEMPLATE_VARIABLES = {
			className: "template-variable",
			variants: [{
				begin: /\{\{/,
				end: /\}\}/
			}, {
				begin: /%\{/,
				end: /\}/
			}]
		};
		const SINGLE_QUOTE_STRING = {
			className: "string",
			relevance: 0,
			begin: /'/,
			end: /'/,
			contains: [{
				match: /''/,
				scope: "char.escape",
				relevance: 0
			}]
		};
		const STRING = {
			className: "string",
			relevance: 0,
			variants: [{
				begin: /"/,
				end: /"/
			}, { begin: /\S+/ }],
			contains: [hljs.BACKSLASH_ESCAPE, TEMPLATE_VARIABLES]
		};
		const CONTAINER_STRING = hljs.inherit(STRING, { variants: [
			{
				begin: /'/,
				end: /'/,
				contains: [{
					begin: /''/,
					relevance: 0
				}]
			},
			{
				begin: /"/,
				end: /"/
			},
			{ begin: /[^\s,{}[\]]+/ }
		] });
		const TIMESTAMP = {
			className: "number",
			begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
		};
		const VALUE_CONTAINER = {
			end: ",",
			endsWithParent: true,
			excludeEnd: true,
			keywords: LITERALS,
			relevance: 0
		};
		const OBJECT = {
			begin: /\{/,
			end: /\}/,
			contains: [VALUE_CONTAINER],
			illegal: "\\n",
			relevance: 0
		};
		const ARRAY = {
			begin: "\\[",
			end: "\\]",
			contains: [VALUE_CONTAINER],
			illegal: "\\n",
			relevance: 0
		};
		const MODES = [
			KEY,
			{
				className: "meta",
				begin: "^---\\s*$",
				relevance: 10
			},
			{
				className: "string",
				begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
			},
			{
				begin: "<%[%=-]?",
				end: "[%-]?%>",
				subLanguage: "ruby",
				excludeBegin: true,
				excludeEnd: true,
				relevance: 0
			},
			{
				className: "type",
				begin: "!\\w+!" + URI_CHARACTERS
			},
			{
				className: "type",
				begin: "!<" + URI_CHARACTERS + ">"
			},
			{
				className: "type",
				begin: "!" + URI_CHARACTERS
			},
			{
				className: "type",
				begin: "!!" + URI_CHARACTERS
			},
			{
				className: "meta",
				begin: "&" + hljs.UNDERSCORE_IDENT_RE + "$"
			},
			{
				className: "meta",
				begin: "\\*" + hljs.UNDERSCORE_IDENT_RE + "$"
			},
			{
				className: "bullet",
				begin: "-(?=[ ]|$)",
				relevance: 0
			},
			hljs.HASH_COMMENT_MODE,
			{
				beginKeywords: LITERALS,
				keywords: { literal: LITERALS }
			},
			TIMESTAMP,
			{
				className: "number",
				begin: hljs.C_NUMBER_RE + "\\b",
				relevance: 0
			},
			OBJECT,
			ARRAY,
			SINGLE_QUOTE_STRING,
			STRING
		];
		const VALUE_MODES = [...MODES];
		VALUE_MODES.pop();
		VALUE_MODES.push(CONTAINER_STRING);
		VALUE_CONTAINER.contains = VALUE_MODES;
		return {
			name: "YAML",
			case_insensitive: true,
			aliases: ["yml"],
			contains: MODES
		};
	}
	module.exports = yaml;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/typescript.js
var require_typescript = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
	var KEYWORDS = [
		"as",
		"in",
		"of",
		"if",
		"for",
		"while",
		"finally",
		"var",
		"new",
		"function",
		"do",
		"return",
		"void",
		"else",
		"break",
		"catch",
		"instanceof",
		"with",
		"throw",
		"case",
		"default",
		"try",
		"switch",
		"continue",
		"typeof",
		"delete",
		"let",
		"yield",
		"const",
		"class",
		"debugger",
		"async",
		"await",
		"static",
		"import",
		"from",
		"export",
		"extends",
		"using"
	];
	var LITERALS = [
		"true",
		"false",
		"null",
		"undefined",
		"NaN",
		"Infinity"
	];
	var TYPES = [
		"Object",
		"Function",
		"Boolean",
		"Symbol",
		"Math",
		"Date",
		"Number",
		"BigInt",
		"String",
		"RegExp",
		"Array",
		"Float32Array",
		"Float64Array",
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Int32Array",
		"Uint16Array",
		"Uint32Array",
		"BigInt64Array",
		"BigUint64Array",
		"Set",
		"Map",
		"WeakSet",
		"WeakMap",
		"ArrayBuffer",
		"SharedArrayBuffer",
		"Atomics",
		"DataView",
		"JSON",
		"Promise",
		"Generator",
		"GeneratorFunction",
		"AsyncFunction",
		"Reflect",
		"Proxy",
		"Intl",
		"WebAssembly"
	];
	var ERROR_TYPES = [
		"Error",
		"EvalError",
		"InternalError",
		"RangeError",
		"ReferenceError",
		"SyntaxError",
		"TypeError",
		"URIError"
	];
	var BUILT_IN_GLOBALS = [
		"setInterval",
		"setTimeout",
		"clearInterval",
		"clearTimeout",
		"require",
		"exports",
		"eval",
		"isFinite",
		"isNaN",
		"parseFloat",
		"parseInt",
		"decodeURI",
		"decodeURIComponent",
		"encodeURI",
		"encodeURIComponent",
		"escape",
		"unescape"
	];
	var BUILT_IN_VARIABLES = [
		"arguments",
		"this",
		"super",
		"console",
		"window",
		"document",
		"localStorage",
		"sessionStorage",
		"module",
		"global"
	];
	var BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
	/** @type LanguageFn */
	function javascript(hljs) {
		const regex = hljs.regex;
		/**
		* Takes a string like "<Booger" and checks to see
		* if we can find a matching "</Booger" later in the
		* content.
		* @param {RegExpMatchArray} match
		* @param {{after:number}} param1
		*/
		const hasClosingTag = (match, { after }) => {
			const tag = "</" + match[0].slice(1);
			return match.input.indexOf(tag, after) !== -1;
		};
		const IDENT_RE$1 = IDENT_RE;
		const FRAGMENT = {
			begin: "<>",
			end: "</>"
		};
		const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
		const XML_TAG = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			/**
			* @param {RegExpMatchArray} match
			* @param {CallbackResponse} response
			*/
			isTrulyOpeningTag: (match, response) => {
				const afterMatchIndex = match[0].length + match.index;
				const nextChar = match.input[afterMatchIndex];
				if (nextChar === "<" || nextChar === ",") {
					response.ignoreMatch();
					return;
				}
				if (nextChar === ">") {
					if (!hasClosingTag(match, { after: afterMatchIndex })) response.ignoreMatch();
				}
				let m;
				const afterMatch = match.input.substring(afterMatchIndex);
				if (m = afterMatch.match(/^\s*=/)) {
					response.ignoreMatch();
					return;
				}
				if (m = afterMatch.match(/^\s+extends\s+/)) {
					if (m.index === 0) {
						response.ignoreMatch();
						return;
					}
				}
			}
		};
		const KEYWORDS$1 = {
			$pattern: IDENT_RE,
			keyword: KEYWORDS,
			literal: LITERALS,
			built_in: BUILT_INS,
			"variable.language": BUILT_IN_VARIABLES
		};
		const decimalDigits = "[0-9](_?[0-9])*";
		const frac = `\\.(${decimalDigits})`;
		const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
		const NUMBER = {
			className: "number",
			variants: [
				{ begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
				{ begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
				{ begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
				{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
				{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
				{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
				{ begin: "\\b0[0-7]+n?\\b" }
			],
			relevance: 0
		};
		const SUBST = {
			className: "subst",
			begin: "\\$\\{",
			end: "\\}",
			keywords: KEYWORDS$1,
			contains: []
		};
		const HTML_TEMPLATE = {
			begin: ".?html`",
			end: "",
			starts: {
				end: "`",
				returnEnd: false,
				contains: [hljs.BACKSLASH_ESCAPE, SUBST],
				subLanguage: "xml"
			}
		};
		const CSS_TEMPLATE = {
			begin: ".?css`",
			end: "",
			starts: {
				end: "`",
				returnEnd: false,
				contains: [hljs.BACKSLASH_ESCAPE, SUBST],
				subLanguage: "css"
			}
		};
		const GRAPHQL_TEMPLATE = {
			begin: ".?gql`",
			end: "",
			starts: {
				end: "`",
				returnEnd: false,
				contains: [hljs.BACKSLASH_ESCAPE, SUBST],
				subLanguage: "graphql"
			}
		};
		const TEMPLATE_STRING = {
			className: "string",
			begin: "`",
			end: "`",
			contains: [hljs.BACKSLASH_ESCAPE, SUBST]
		};
		const COMMENT = {
			className: "comment",
			variants: [
				hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
					relevance: 0,
					contains: [{
						begin: "(?=@[A-Za-z]+)",
						relevance: 0,
						contains: [
							{
								className: "doctag",
								begin: "@[A-Za-z]+"
							},
							{
								className: "type",
								begin: "\\{",
								end: "\\}",
								excludeEnd: true,
								excludeBegin: true,
								relevance: 0
							},
							{
								className: "variable",
								begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
								endsParent: true,
								relevance: 0
							},
							{
								begin: /(?=[^\n])\s/,
								relevance: 0
							}
						]
					}]
				}),
				hljs.C_BLOCK_COMMENT_MODE,
				hljs.C_LINE_COMMENT_MODE
			]
		};
		const SUBST_INTERNALS = [
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE,
			HTML_TEMPLATE,
			CSS_TEMPLATE,
			GRAPHQL_TEMPLATE,
			TEMPLATE_STRING,
			{ match: /\$\d+/ },
			NUMBER
		];
		SUBST.contains = SUBST_INTERNALS.concat({
			begin: /\{/,
			end: /\}/,
			keywords: KEYWORDS$1,
			contains: ["self"].concat(SUBST_INTERNALS)
		});
		const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
		const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([{
			begin: /(\s*)\(/,
			end: /\)/,
			keywords: KEYWORDS$1,
			contains: ["self"].concat(SUBST_AND_COMMENTS)
		}]);
		const PARAMS = {
			className: "params",
			begin: /(\s*)\(/,
			end: /\)/,
			excludeBegin: true,
			excludeEnd: true,
			keywords: KEYWORDS$1,
			contains: PARAMS_CONTAINS
		};
		const CLASS_OR_EXTENDS = { variants: [{
			match: [
				/class/,
				/\s+/,
				IDENT_RE$1,
				/\s+/,
				/extends/,
				/\s+/,
				regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
			],
			scope: {
				1: "keyword",
				3: "title.class",
				5: "keyword",
				7: "title.class.inherited"
			}
		}, {
			match: [
				/class/,
				/\s+/,
				IDENT_RE$1
			],
			scope: {
				1: "keyword",
				3: "title.class"
			}
		}] };
		const CLASS_REFERENCE = {
			relevance: 0,
			match: regex.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
			className: "title.class",
			keywords: { _: [...TYPES, ...ERROR_TYPES] }
		};
		const USE_STRICT = {
			label: "use_strict",
			className: "meta",
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/
		};
		const FUNCTION_DEFINITION = {
			variants: [{ match: [
				/function/,
				/\s+/,
				IDENT_RE$1,
				/(?=\s*\()/
			] }, { match: [/function/, /\s*(?=\()/] }],
			className: {
				1: "keyword",
				3: "title.function"
			},
			label: "func.def",
			contains: [PARAMS],
			illegal: /%/
		};
		const UPPER_CASE_CONSTANT = {
			relevance: 0,
			match: /\b[A-Z][A-Z_0-9]+\b/,
			className: "variable.constant"
		};
		function noneOf(list) {
			return regex.concat("(?!", list.join("|"), ")");
		}
		const FUNCTION_CALL = {
			match: regex.concat(/\b/, noneOf([
				...BUILT_IN_GLOBALS,
				"super",
				"import"
			].map((x) => `${x}\\s*\\(`)), IDENT_RE$1, regex.lookahead(/\s*\(/)),
			className: "title.function",
			relevance: 0
		};
		const PROPERTY_ACCESS = {
			begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
			end: IDENT_RE$1,
			excludeBegin: true,
			keywords: "prototype",
			className: "property",
			relevance: 0
		};
		const GETTER_OR_SETTER = {
			match: [
				/get|set/,
				/\s+/,
				IDENT_RE$1,
				/(?=\()/
			],
			className: {
				1: "keyword",
				3: "title.function"
			},
			contains: [{ begin: /\(\)/ }, PARAMS]
		};
		const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
		const FUNCTION_VARIABLE = {
			match: [
				/const|var|let/,
				/\s+/,
				IDENT_RE$1,
				/\s*/,
				/=\s*/,
				/(async\s*)?/,
				regex.lookahead(FUNC_LEAD_IN_RE)
			],
			keywords: "async",
			className: {
				1: "keyword",
				3: "title.function"
			},
			contains: [PARAMS]
		};
		return {
			name: "JavaScript",
			aliases: [
				"js",
				"jsx",
				"mjs",
				"cjs"
			],
			keywords: KEYWORDS$1,
			exports: {
				PARAMS_CONTAINS,
				CLASS_REFERENCE
			},
			illegal: /#(?![$_A-z])/,
			contains: [
				hljs.SHEBANG({
					label: "shebang",
					binary: "node",
					relevance: 5
				}),
				USE_STRICT,
				hljs.APOS_STRING_MODE,
				hljs.QUOTE_STRING_MODE,
				HTML_TEMPLATE,
				CSS_TEMPLATE,
				GRAPHQL_TEMPLATE,
				TEMPLATE_STRING,
				COMMENT,
				{ match: /\$\d+/ },
				NUMBER,
				CLASS_REFERENCE,
				{
					scope: "attr",
					match: IDENT_RE$1 + regex.lookahead(":"),
					relevance: 0
				},
				FUNCTION_VARIABLE,
				{
					begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
					keywords: "return throw case",
					relevance: 0,
					contains: [
						COMMENT,
						hljs.REGEXP_MODE,
						{
							className: "function",
							begin: FUNC_LEAD_IN_RE,
							returnBegin: true,
							end: "\\s*=>",
							contains: [{
								className: "params",
								variants: [
									{
										begin: hljs.UNDERSCORE_IDENT_RE,
										relevance: 0
									},
									{
										className: null,
										begin: /\(\s*\)/,
										skip: true
									},
									{
										begin: /(\s*)\(/,
										end: /\)/,
										excludeBegin: true,
										excludeEnd: true,
										keywords: KEYWORDS$1,
										contains: PARAMS_CONTAINS
									}
								]
							}]
						},
						{
							begin: /,/,
							relevance: 0
						},
						{
							match: /\s+/,
							relevance: 0
						},
						{
							variants: [
								{
									begin: FRAGMENT.begin,
									end: FRAGMENT.end
								},
								{ match: XML_SELF_CLOSING },
								{
									begin: XML_TAG.begin,
									"on:begin": XML_TAG.isTrulyOpeningTag,
									end: XML_TAG.end
								}
							],
							subLanguage: "xml",
							contains: [{
								begin: XML_TAG.begin,
								end: XML_TAG.end,
								skip: true,
								contains: ["self"]
							}]
						}
					]
				},
				FUNCTION_DEFINITION,
				{ beginKeywords: "while if switch catch for" },
				{
					begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
					returnBegin: true,
					label: "func.def",
					contains: [PARAMS, hljs.inherit(hljs.TITLE_MODE, {
						begin: IDENT_RE$1,
						className: "title.function"
					})]
				},
				{
					match: /\.\.\./,
					relevance: 0
				},
				PROPERTY_ACCESS,
				{
					match: "\\$" + IDENT_RE$1,
					relevance: 0
				},
				{
					match: [/\bconstructor(?=\s*\()/],
					className: { 1: "title.function" },
					contains: [PARAMS]
				},
				FUNCTION_CALL,
				UPPER_CASE_CONSTANT,
				CLASS_OR_EXTENDS,
				GETTER_OR_SETTER,
				{ match: /\$[(.]/ }
			]
		};
	}
	/** @type LanguageFn */
	function typescript(hljs) {
		const regex = hljs.regex;
		const tsLanguage = javascript(hljs);
		const IDENT_RE$1 = IDENT_RE;
		const TYPES = [
			"any",
			"void",
			"number",
			"boolean",
			"string",
			"object",
			"never",
			"symbol",
			"bigint",
			"unknown"
		];
		const NAMESPACE = {
			begin: [
				/namespace/,
				/\s+/,
				hljs.IDENT_RE
			],
			beginScope: {
				1: "keyword",
				3: "title.class"
			}
		};
		const INTERFACE = {
			beginKeywords: "interface",
			end: /\{/,
			excludeEnd: true,
			keywords: {
				keyword: "interface extends",
				built_in: TYPES
			},
			contains: [tsLanguage.exports.CLASS_REFERENCE]
		};
		const USE_STRICT = {
			className: "meta",
			relevance: 10,
			begin: /^\s*['"]use strict['"]/
		};
		const KEYWORDS$1 = {
			$pattern: IDENT_RE,
			keyword: KEYWORDS.concat([
				"type",
				"interface",
				"public",
				"private",
				"protected",
				"implements",
				"declare",
				"abstract",
				"readonly",
				"enum",
				"override",
				"satisfies"
			]),
			literal: LITERALS,
			built_in: BUILT_INS.concat(TYPES),
			"variable.language": BUILT_IN_VARIABLES
		};
		const DECORATOR = {
			className: "meta",
			begin: "@" + IDENT_RE$1
		};
		const swapMode = (mode, label, replacement) => {
			const indx = mode.contains.findIndex((m) => m.label === label);
			if (indx === -1) throw new Error("can not find mode to replace");
			mode.contains.splice(indx, 1, replacement);
		};
		Object.assign(tsLanguage.keywords, KEYWORDS$1);
		tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
		const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c) => c.scope === "attr");
		const OPTIONAL_KEY_OR_ARGUMENT = Object.assign({}, ATTRIBUTE_HIGHLIGHT, { match: regex.concat(IDENT_RE$1, regex.lookahead(/\s*\?:/)) });
		tsLanguage.exports.PARAMS_CONTAINS.push([
			tsLanguage.exports.CLASS_REFERENCE,
			ATTRIBUTE_HIGHLIGHT,
			OPTIONAL_KEY_OR_ARGUMENT
		]);
		tsLanguage.contains = tsLanguage.contains.concat([
			DECORATOR,
			NAMESPACE,
			INTERFACE,
			OPTIONAL_KEY_OR_ARGUMENT
		]);
		swapMode(tsLanguage, "shebang", hljs.SHEBANG());
		swapMode(tsLanguage, "use_strict", USE_STRICT);
		const functionDeclaration = tsLanguage.contains.find((m) => m.label === "func.def");
		functionDeclaration.relevance = 0;
		Object.assign(tsLanguage, {
			name: "TypeScript",
			aliases: [
				"ts",
				"tsx",
				"mts",
				"cts"
			]
		});
		return tsLanguage;
	}
	module.exports = typescript;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/vbnet.js
var require_vbnet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function vbnet(hljs) {
		const regex = hljs.regex;
		/**
		* Character Literal
		* Either a single character ("a"C) or an escaped double quote (""""C).
		*/
		const CHARACTER = {
			className: "string",
			begin: /"(""|[^/n])"C\b/
		};
		const STRING = {
			className: "string",
			begin: /"/,
			end: /"/,
			illegal: /\n/,
			contains: [{ begin: /""/ }]
		};
		/** Date Literals consist of a date, a time, or both separated by whitespace, surrounded by # */
		const MM_DD_YYYY = /\d{1,2}\/\d{1,2}\/\d{4}/;
		const YYYY_MM_DD = /\d{4}-\d{1,2}-\d{1,2}/;
		const TIME_12H = /(\d|1[012])(:\d+){0,2} *(AM|PM)/;
		const TIME_24H = /\d{1,2}(:\d{1,2}){1,2}/;
		const DATE = {
			className: "literal",
			variants: [
				{ begin: regex.concat(/# */, regex.either(YYYY_MM_DD, MM_DD_YYYY), / *#/) },
				{ begin: regex.concat(/# */, TIME_24H, / *#/) },
				{ begin: regex.concat(/# */, TIME_12H, / *#/) },
				{ begin: regex.concat(/# */, regex.either(YYYY_MM_DD, MM_DD_YYYY), / +/, regex.either(TIME_12H, TIME_24H), / *#/) }
			]
		};
		const NUMBER = {
			className: "number",
			relevance: 0,
			variants: [
				{ begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/ },
				{ begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
				{ begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
				{ begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
				{ begin: /&B[01_]+((U?[SIL])|[%&])?/ }
			]
		};
		const LABEL = {
			className: "label",
			begin: /^\w+:/
		};
		const DOC_COMMENT = hljs.COMMENT(/'''/, /$/, { contains: [{
			className: "doctag",
			begin: /<\/?/,
			end: />/
		}] });
		const COMMENT = hljs.COMMENT(null, /$/, { variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }] });
		return {
			name: "Visual Basic .NET",
			aliases: ["vb"],
			case_insensitive: true,
			classNameAliases: { label: "symbol" },
			keywords: {
				keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
				built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
				type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
				literal: "true false nothing"
			},
			illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
			contains: [
				CHARACTER,
				STRING,
				DATE,
				NUMBER,
				LABEL,
				DOC_COMMENT,
				COMMENT,
				{
					className: "meta",
					begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
					end: /$/,
					keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
					contains: [COMMENT]
				}
			]
		};
	}
	module.exports = vbnet;
}));
//#endregion
//#region node_modules/.pnpm/highlight.js@11.11.1/node_modules/highlight.js/lib/languages/wasm.js
var require_wasm = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** @type LanguageFn */
	function wasm(hljs) {
		hljs.regex;
		const BLOCK_COMMENT = hljs.COMMENT(/\(;/, /;\)/);
		BLOCK_COMMENT.contains.push("self");
		return {
			name: "WebAssembly",
			keywords: {
				$pattern: /[\w.]+/,
				keyword: [
					"anyfunc",
					"block",
					"br",
					"br_if",
					"br_table",
					"call",
					"call_indirect",
					"data",
					"drop",
					"elem",
					"else",
					"end",
					"export",
					"func",
					"global.get",
					"global.set",
					"local.get",
					"local.set",
					"local.tee",
					"get_global",
					"get_local",
					"global",
					"if",
					"import",
					"local",
					"loop",
					"memory",
					"memory.grow",
					"memory.size",
					"module",
					"mut",
					"nop",
					"offset",
					"param",
					"result",
					"return",
					"select",
					"set_global",
					"set_local",
					"start",
					"table",
					"tee_local",
					"then",
					"type",
					"unreachable"
				]
			},
			contains: [
				hljs.COMMENT(/;;/, /$/),
				BLOCK_COMMENT,
				{
					match: [
						/(?:offset|align)/,
						/\s*/,
						/=/
					],
					className: {
						1: "keyword",
						3: "operator"
					}
				},
				{
					className: "variable",
					begin: /\$[\w_]+/
				},
				{
					match: /(\((?!;)|\))+/,
					className: "punctuation",
					relevance: 0
				},
				{
					begin: [
						/(?:func|call|call_indirect)/,
						/\s+/,
						/\$[^\s)]+/
					],
					className: {
						1: "keyword",
						3: "title.function"
					}
				},
				hljs.QUOTE_STRING_MODE,
				{
					match: /(i32|i64|f32|f64)(?!\.)/,
					className: "type"
				},
				{
					className: "keyword",
					match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
				},
				{
					className: "number",
					relevance: 0,
					match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
				}
			]
		};
	}
	module.exports = wasm;
}));
var common_default = (/* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hljs = require_core();
	hljs.registerLanguage("xml", require_xml());
	hljs.registerLanguage("bash", require_bash());
	hljs.registerLanguage("c", require_c());
	hljs.registerLanguage("cpp", require_cpp());
	hljs.registerLanguage("csharp", require_csharp());
	hljs.registerLanguage("css", require_css());
	hljs.registerLanguage("markdown", require_markdown());
	hljs.registerLanguage("diff", require_diff());
	hljs.registerLanguage("ruby", require_ruby());
	hljs.registerLanguage("go", require_go());
	hljs.registerLanguage("graphql", require_graphql());
	hljs.registerLanguage("ini", require_ini());
	hljs.registerLanguage("java", require_java());
	hljs.registerLanguage("javascript", require_javascript());
	hljs.registerLanguage("json", require_json());
	hljs.registerLanguage("kotlin", require_kotlin());
	hljs.registerLanguage("less", require_less());
	hljs.registerLanguage("lua", require_lua());
	hljs.registerLanguage("makefile", require_makefile());
	hljs.registerLanguage("perl", require_perl());
	hljs.registerLanguage("objectivec", require_objectivec());
	hljs.registerLanguage("php", require_php());
	hljs.registerLanguage("php-template", require_php_template());
	hljs.registerLanguage("plaintext", require_plaintext());
	hljs.registerLanguage("python", require_python());
	hljs.registerLanguage("python-repl", require_python_repl());
	hljs.registerLanguage("r", require_r());
	hljs.registerLanguage("rust", require_rust());
	hljs.registerLanguage("scss", require_scss());
	hljs.registerLanguage("shell", require_shell());
	hljs.registerLanguage("sql", require_sql());
	hljs.registerLanguage("swift", require_swift());
	hljs.registerLanguage("yaml", require_yaml());
	hljs.registerLanguage("typescript", require_typescript());
	hljs.registerLanguage("vbnet", require_vbnet());
	hljs.registerLanguage("wasm", require_wasm());
	hljs.HighlightJS = hljs;
	hljs.default = hljs;
	module.exports = hljs;
})))())).default;
//#endregion
//#region node_modules/.pnpm/marked@18.0.7/node_modules/marked/lib/marked.esm.js
/**
* marked v18.0.7 - a markdown parser
* Copyright (c) 2018-2026, MarkedJS. (MIT License)
* Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
* https://github.com/markedjs/marked
*/
/**
* DO NOT EDIT THIS FILE
* The code in this file is generated from files in ./src/
*/
function z() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var T = z();
function N(l) {
	T = l;
}
var _ = { exec: () => null };
function E(l) {
	let e = [];
	return (t) => {
		let n = Math.max(0, Math.min(3, t - 1)), s = e[n];
		return s || (s = l(n), e[n] = s), s;
	};
}
function d(l, e = "") {
	let t = typeof l == "string" ? l : l.source, n = {
		replace: (s, r) => {
			let i = typeof r == "string" ? r : r.source;
			return i = i.replace(m.caret, "$1"), t = t.replace(s, i), n;
		},
		getRegex: () => new RegExp(t, e)
	};
	return n;
}
var Te = ((l = "") => {
	try {
		return !!new RegExp("(?<=1)(?<!1)" + l);
	} catch {
		return !1;
	}
})(), m = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (l) => new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: E((l) => new RegExp(`^ {0,${l}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
	hrRegex: E((l) => new RegExp(`^ {0,${l}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),
	fencesBeginRegex: E((l) => new RegExp(`^ {0,${l}}(?:\`\`\`|~~~)`)),
	headingBeginRegex: E((l) => new RegExp(`^ {0,${l}}#`)),
	htmlBeginRegex: E((l) => new RegExp(`^ {0,${l}}<(?:[a-z].*>|!--)`, "i")),
	blockquoteBeginRegex: E((l) => new RegExp(`^ {0,${l}}>`))
}, Oe = /^(?:[ \t]*(?:\n|$))+/, we = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ye = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, B = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Pe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, j = / {0,3}(?:[*+-]|\d{1,9}[.)])/, oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ae = d(oe).replace(/bull/g, j).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Se = d(oe).replace(/bull/g, j).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), F = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/, $e = /^[^\n]+/, U = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Le = d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", U).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), _e = d(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, j).getRegex(), H = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", K = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Me = d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", K).replace("tag", H).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), le = (l) => d(F).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", l).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex(), ze = le(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/), Ee = le(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/), W = {
	blockquote: d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ee).getRegex(),
	code: we,
	def: Le,
	fences: ye,
	heading: Pe,
	hr: B,
	html: Me,
	lheading: ae,
	list: _e,
	newline: Oe,
	paragraph: ze,
	table: _,
	text: $e
}, se = d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex(), Ae = {
	...W,
	lheading: Se,
	table: se,
	paragraph: d(F).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", se).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", H).getRegex()
}, Ie = {
	...W,
	html: d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", K).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: _,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: d(F).replace("hr", B).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ae).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Be = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, qe = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ue = /^( {2,}|\\)\n(?!\s*$)/, De = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, C = /[\p{P}\p{S}]/u, Z = /[\s\p{P}\p{S}]/u, X = /[^\s\p{P}\p{S}]/u, ve = d(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Z).getRegex(), pe = /(?!~)[\p{P}\p{S}]/u, He = /(?!~)[\s\p{P}\p{S}]/u, Ze = /(?:[^\s\p{P}\p{S}]|~)/u, Ge = d(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Te ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ce = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Ne = d(ce, "u").replace(/punct/g, C).getRegex(), Qe = d(ce, "u").replace(/punct/g, pe).getRegex(), he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", je = d(he, "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, Z).replace(/punct/g, C).getRegex(), Fe = d(he, "gu").replace(/notPunctSpace/g, Ze).replace(/punctSpace/g, He).replace(/punct/g, pe).getRegex(), Ue = d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, Z).replace(/punct/g, C).getRegex(), Ke = d(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, C).getRegex(), Xe = d("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, Z).replace(/punct/g, C).getRegex(), Je = d(/\\(punct)/, "gu").replace(/punct/g, C).getRegex(), Ve = d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ye = d(K).replace("(?:-->|$)", "-->").getRegex(), et = d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ye).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), v = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, tt = d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", v).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ke = d(/^!?\[(label)\]\[(ref)\]/).replace("label", v).replace("ref", U).getRegex(), de = d(/^!?\[(ref)\](?:\[\])?/).replace("ref", U).getRegex(), nt = d("reflink|nolink(?!\\()", "g").replace("reflink", ke).replace("nolink", de).getRegex(), ie = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, J = {
	_backpedal: _,
	anyPunctuation: Je,
	autolink: Ve,
	blockSkip: Ge,
	br: ue,
	code: qe,
	del: _,
	delLDelim: _,
	delRDelim: _,
	emStrongLDelim: Ne,
	emStrongRDelimAst: je,
	emStrongRDelimUnd: Ue,
	escape: Be,
	link: tt,
	nolink: de,
	punctuation: ve,
	reflink: ke,
	reflinkSearch: nt,
	tag: et,
	text: De,
	url: _
}, rt = {
	...J,
	link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", v).getRegex(),
	reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", v).getRegex()
}, Q = {
	...J,
	emStrongRDelimAst: Fe,
	emStrongLDelim: Qe,
	delLDelim: Ke,
	delRDelim: Xe,
	url: d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ie).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: d(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ie).getRegex()
}, st = {
	...Q,
	br: d(ue).replace("{2,}", "*").getRegex(),
	text: d(Q.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, q = {
	normal: W,
	gfm: Ae,
	pedantic: Ie
}, A = {
	normal: J,
	gfm: Q,
	breaks: st,
	pedantic: rt
};
var it = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, ge = (l) => it[l];
function O(l, e) {
	if (e) {
		if (m.escapeTest.test(l)) return l.replace(m.escapeReplace, ge);
	} else if (m.escapeTestNoEncode.test(l)) return l.replace(m.escapeReplaceNoEncode, ge);
	return l;
}
function V(l) {
	try {
		l = encodeURI(l).replace(m.percentDecode, "%");
	} catch {
		return null;
	}
	return l;
}
function Y(l, e) {
	let n = l.replace(m.findPipe, (r, i, o) => {
		let u = !1, a = i;
		for (; --a >= 0 && o[a] === "\\";) u = !u;
		return u ? "|" : " |";
	}).split(m.splitPipe), s = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
	else for (; n.length < e;) n.push("");
	for (; s < n.length; s++) n[s] = n[s].trim().replace(m.slashPipe, "|");
	return n;
}
function $(l, e, t) {
	let n = l.length;
	if (n === 0) return "";
	let s = 0;
	for (; s < n;) {
		let r = l.charAt(n - s - 1);
		if (r === e && !t) s++;
		else if (r !== e && t) s++;
		else break;
	}
	return l.slice(0, n - s);
}
function ee(l) {
	let e = l.split(`
`), t = e.length - 1;
	for (; t >= 0 && m.blankLine.test(e[t]);) t--;
	return e.length - t <= 2 ? l : e.slice(0, t + 1).join(`
`);
}
function fe(l, e) {
	if (l.indexOf(e[1]) === -1) return -1;
	let t = 0;
	for (let n = 0; n < l.length; n++) if (l[n] === "\\") n++;
	else if (l[n] === e[0]) t++;
	else if (l[n] === e[1] && (t--, t < 0)) return n;
	return t > 0 ? -2 : -1;
}
function me(l, e = 0) {
	let t = e, n = "";
	for (let s of l) if (s === "	") {
		let r = 4 - t % 4;
		n += " ".repeat(r), t += r;
	} else n += s, t++;
	return n;
}
function xe(l, e, t, n, s) {
	let r = e.href, i = e.title || null, o = l[1].replace(s.other.outputLinkReplace, "$1");
	n.state.inLink = !0;
	let u = {
		type: l[0].charAt(0) === "!" ? "image" : "link",
		raw: t,
		href: r,
		title: i,
		text: o,
		tokens: n.inlineTokens(o)
	};
	return n.state.inLink = !1, u;
}
function ot(l, e, t) {
	let n = l.match(t.other.indentCodeCompensation);
	if (n === null) return e;
	let s = n[1];
	return e.split(`
`).map((r) => {
		let i = r.match(t.other.beginningSpace);
		if (i === null) return r;
		let [o] = i;
		return o.length >= s.length ? r.slice(s.length) : r;
	}).join(`
`);
}
var w = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || T;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let n = this.options.pedantic ? t[0] : ee(t[0]);
			return {
				type: "code",
				raw: n,
				codeBlockStyle: "indented",
				text: n.replace(this.rules.other.codeRemoveIndent, "")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let n = t[0], s = ot(n, t[3] || "", this.rules);
			return {
				type: "code",
				raw: n,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: s
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let n = t[2].trim();
			if (this.rules.other.endingHash.test(n)) {
				let s = $(n, "#");
				(this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (n = s.trim());
			}
			return {
				type: "heading",
				raw: $(t[0], `
`),
				depth: t[1].length,
				text: n,
				tokens: this.lexer.inline(n)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: $(t[0], `
`)
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let n = $(t[0], `
`).split(`
`), s = "", r = "", i = [];
			for (; n.length > 0;) {
				let o = !1, u = [], a;
				for (a = 0; a < n.length; a++) if (this.rules.other.blockquoteStart.test(n[a])) u.push(n[a]), o = !0;
				else if (!o) u.push(n[a]);
				else break;
				n = n.slice(a);
				let p = u.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
				s = s ? `${s}
${p}` : p, r = r ? `${r}
${c}` : c;
				let h = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = h, n.length === 0) break;
				let k = i.at(-1);
				if (k?.type === "code") break;
				if (k?.type === "blockquote") {
					let R = k, f = R.raw + `
` + n.join(`
`), S = this.blockquote(f);
					i[i.length - 1] = S, s = s.substring(0, s.length - R.raw.length) + S.raw, r = r.substring(0, r.length - R.text.length) + S.text;
					break;
				} else if (k?.type === "list") {
					let R = k, f = R.raw + `
` + n.join(`
`), S = this.list(f);
					i[i.length - 1] = S, s = s.substring(0, s.length - k.raw.length) + S.raw, r = r.substring(0, r.length - R.raw.length) + S.raw, n = f.substring(i.at(-1).raw.length).split(`
`);
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: s,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = t[1].trim(), s = n.length > 1, r = {
				type: "list",
				raw: "",
				ordered: s,
				start: s ? +n.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
			let i = this.rules.other.listItemRegex(n), o = !1;
			for (; e;) {
				let a = !1, p = "", c = "";
				if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
				p = t[0], e = e.substring(p.length);
				let h = me(t[2].split(`
`, 1)[0], t[1].length), k = e.split(`
`, 1)[0], R = !h.trim(), f = 0;
				if (this.options.pedantic ? (f = 2, c = h.trimStart()) : R ? f = t[1].length + 1 : (f = h.search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, c = h.slice(f), f += t[1].length), R && this.rules.other.blankLine.test(k) && (p += k + `
`, e = e.substring(k.length + 1), a = !0), !a) {
					let S = this.rules.other.nextBulletRegex(f), te = this.rules.other.hrRegex(f), ne = this.rules.other.fencesBeginRegex(f), re = this.rules.other.headingBeginRegex(f), be = this.rules.other.htmlBeginRegex(f), Re = this.rules.other.blockquoteBeginRegex(f);
					for (; e;) {
						let G = e.split(`
`, 1)[0], I;
						if (k = G, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), I = k) : I = k.replace(this.rules.other.tabCharGlobal, "    "), ne.test(k) || re.test(k) || be.test(k) || Re.test(k) || S.test(k) || te.test(k)) break;
						if (I.search(this.rules.other.nonSpaceChar) >= f || !k.trim()) c += `
` + I.slice(f);
						else {
							if (R || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ne.test(h) || re.test(h) || te.test(h)) break;
							c += `
` + k;
						}
						R = !k.trim(), p += G + `
`, e = e.substring(G.length + 1), h = I.slice(f);
					}
				}
				r.loose || (o ? r.loose = !0 : this.rules.other.doubleBlankLine.test(p) && (o = !0)), r.items.push({
					type: "list_item",
					raw: p,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(c),
					loose: !1,
					text: c,
					tokens: []
				}), r.raw += p;
			}
			let u = r.items.at(-1);
			if (u) u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
			else return;
			r.raw = r.raw.trimEnd();
			for (let a of r.items) {
				this.lexer.state.top = !1, a.tokens = this.lexer.blockTokens(a.text, []);
				let p = a.tokens[0];
				if (a.task && (p?.type === "text" || p?.type === "paragraph")) {
					a.text = a.text.replace(this.rules.other.listReplaceTask, ""), p.raw = p.raw.replace(this.rules.other.listReplaceTask, ""), p.text = p.text.replace(this.rules.other.listReplaceTask, "");
					for (let h = this.lexer.inlineQueue.length - 1; h >= 0; h--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)) {
						this.lexer.inlineQueue[h].src = this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask, "");
						break;
					}
					let c = this.rules.other.listTaskCheckbox.exec(a.raw);
					if (c) {
						let h = {
							type: "checkbox",
							raw: c[0] + " ",
							checked: c[0] !== "[ ]"
						};
						a.checked = h.checked, r.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = h.raw + a.tokens[0].raw, a.tokens[0].text = h.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(h)) : a.tokens.unshift({
							type: "paragraph",
							raw: h.raw,
							text: h.raw,
							tokens: [h]
						}) : a.tokens.unshift(h);
					}
				} else a.task && (a.task = !1);
				if (!r.loose) {
					let c = a.tokens.filter((k) => k.type === "space");
					r.loose = c.length > 0 && c.some((k) => this.rules.other.anyLine.test(k.raw));
				}
			}
			if (r.loose) for (let a of r.items) {
				a.loose = !0;
				for (let p of a.tokens) p.type === "text" && (p.type = "paragraph");
			}
			return r;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) {
			let n = ee(t[0]);
			return {
				type: "html",
				block: !0,
				raw: n,
				pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
				text: n
			};
		}
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: n,
				raw: $(t[0], `
`),
				href: s,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = Y(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = {
			type: "table",
			raw: $(t[0], `
`),
			header: [],
			align: [],
			rows: []
		};
		if (n.length === s.length) {
			for (let o of s) this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
			for (let o = 0; o < n.length; o++) i.header.push({
				text: n[o],
				tokens: this.lexer.inline(n[o]),
				header: !0,
				align: i.align[o]
			});
			for (let o of r) i.rows.push(Y(o, i.header.length).map((u, a) => ({
				text: u,
				tokens: this.lexer.inline(u),
				header: !1,
				align: i.align[a]
			})));
			return i;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) {
			let n = t[1].trim();
			return {
				type: "heading",
				raw: $(t[0], `
`),
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: n,
				tokens: this.lexer.inline(n)
			};
		}
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: n,
				tokens: this.lexer.inline(n)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let n = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
				if (!this.rules.other.endAngleBracket.test(n)) return;
				let i = $(n.slice(0, -1), "\\");
				if ((n.length - i.length) % 2 === 0) return;
			} else {
				let i = fe(t[2], "()");
				if (i === -2) return;
				if (i > -1) {
					let u = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
					t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, u).trim(), t[3] = "";
				}
			}
			let s = t[2], r = "";
			if (this.options.pedantic) {
				let i = this.rules.other.pedanticHrefTitle.exec(s);
				i && (s = i[1], r = i[3]);
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? s = s.slice(1) : s = s.slice(1, -1)), xe(t, {
				href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
				title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let r = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!r) {
				let i = n[0].charAt(0);
				return {
					type: "text",
					raw: i,
					text: i
				};
			}
			return xe(n, r, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let s = this.rules.inline.emStrongLDelim.exec(e);
		if (!s || !s[1] && !s[2] && !s[3] && !s[4] || s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
		if (!(s[1] || s[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
			let i = [...s[0]].length - 1, o, u, a = i, p = 0, c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = c.exec(t)) !== null;) {
				if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o) continue;
				if (u = [...o].length, s[3] || s[4]) {
					a += u;
					continue;
				} else if ((s[5] || s[6]) && i % 3 && !((i + u) % 3)) {
					p += u;
					continue;
				}
				if (a -= u, a > 0) continue;
				u = Math.min(u, u + a + p);
				let h = [...s[0]][0].length, k = e.slice(0, i + s.index + h + u);
				if (Math.min(i, u) % 2) {
					let f = k.slice(1, -1);
					return {
						type: "em",
						raw: k,
						text: f,
						tokens: this.lexer.inlineTokens(f)
					};
				}
				let R = k.slice(2, -2);
				return {
					type: "strong",
					raw: k,
					text: R,
					tokens: this.lexer.inlineTokens(R)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
			return s && r && (n = n.substring(1, n.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: n
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e, t, n = "") {
		let s = this.rules.inline.delLDelim.exec(e);
		if (!s) return;
		if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
			let i = [...s[0]].length - 1, o, u, a = i, p = this.rules.inline.delRDelim;
			for (p.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = p.exec(t)) !== null;) {
				if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o || (u = [...o].length, u !== i)) continue;
				if (s[3] || s[4]) {
					a += u;
					continue;
				}
				if (a -= u, a > 0) continue;
				u = Math.min(u, u + a);
				let c = [...s[0]][0].length, h = e.slice(0, i + s.index + c + u), k = h.slice(i, -i);
				return {
					type: "del",
					raw: h,
					text: k,
					tokens: this.lexer.inlineTokens(k)
				};
			}
		}
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let n, s;
			return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), {
				type: "link",
				raw: t[0],
				text: n,
				href: s,
				tokens: [{
					type: "text",
					raw: n,
					text: n
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let n, s;
			if (t[2] === "@") n = t[0], s = "mailto:" + n;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: n,
				href: s,
				tokens: [{
					type: "text",
					raw: n,
					text: n
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let n = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: t[0],
				escaped: n
			};
		}
	}
};
var x = class l {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new w(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: m,
			block: q.normal,
			inline: A.normal
		};
		this.options.pedantic ? (t.block = q.pedantic, t.inline = A.pedantic) : this.options.gfm && (t.block = q.gfm, this.options.breaks ? t.inline = A.breaks : t.inline = A.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: q,
			inline: A
		};
	}
	static lex(e, t) {
		return new l(t).lex(e);
	}
	static lexInline(e, t) {
		return new l(t).inlineTokens(e);
	}
	lex(e) {
		e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
		for (let t = 0; t < this.inlineQueue.length; t++) {
			let n = this.inlineQueue[t];
			this.inlineTokens(n.src, n.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, ""));
		let s = Infinity;
		for (; e;) {
			if (e.length < s) s = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			let r;
			if (this.options.extensions?.block?.some((o) => (r = o.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.space(e)) {
				e = e.substring(r.raw.length);
				let o = t.at(-1);
				r.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(r);
				continue;
			}
			if (r = this.tokenizer.code(e)) {
				e = e.substring(r.raw.length);
				let o = t.at(-1);
				o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.at(-1).src = o.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.fences(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.heading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.hr(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.blockquote(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.list(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.html(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.def(e)) {
				e = e.substring(r.raw.length);
				let o = t.at(-1);
				o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
					href: r.href,
					title: r.title
				}, t.push(r));
				continue;
			}
			if (r = this.tokenizer.table(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.lheading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startBlock) {
				let o = Infinity, u = e.slice(1), a;
				this.options.extensions.startBlock.forEach((p) => {
					a = p.call({ lexer: this }, u), typeof a == "number" && a >= 0 && (o = Math.min(o, a));
				}), o < Infinity && o >= 0 && (i = e.substring(0, o + 1));
			}
			if (this.state.top && (r = this.tokenizer.paragraph(i))) {
				let o = t.at(-1);
				n && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				continue;
			}
			if (r = this.tokenizer.text(e)) {
				e = e.substring(r.raw.length);
				let o = t.at(-1);
				o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + r.raw, o.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r);
				continue;
			}
			if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	inlineTokens(e, t = []) {
		this.tokenizer.lexer = this;
		let n = e;
		if (this.tokens.links) {
			let o = Object.keys(this.tokens.links);
			o.length > 0 && (n = n.replace(this.tokenizer.rules.inline.reflinkSearch, (u) => o.includes(u.slice(u.lastIndexOf("[") + 1, -1)) ? "[" + "a".repeat(u.length - 2) + "]" : u));
		}
		n = n.replace(this.tokenizer.rules.inline.anyPunctuation, "++"), n = n.replace(this.tokenizer.rules.inline.blockSkip, (o, u, a) => {
			let p = a ? a.length : 0;
			return o.slice(0, p) + "[" + "a".repeat(o.length - p - 2) + "]";
		}), n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let s = !1, r = "", i = Infinity;
		for (; e;) {
			if (e.length < i) i = e.length;
			else {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
			s || (r = ""), s = !1;
			let o;
			if (this.options.extensions?.inline?.some((a) => (o = a.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1)) continue;
			if (o = this.tokenizer.escape(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.tag(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.link(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(o.raw.length);
				let a = t.at(-1);
				o.type === "text" && a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t.push(o);
				continue;
			}
			if (o = this.tokenizer.emStrong(e, n, r)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.codespan(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.br(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.del(e, n, r)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (o = this.tokenizer.autolink(e)) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			if (!this.state.inLink && (o = this.tokenizer.url(e))) {
				e = e.substring(o.raw.length), t.push(o);
				continue;
			}
			let u = e;
			if (this.options.extensions?.startInline) {
				let a = Infinity, p = e.slice(1), c;
				this.options.extensions.startInline.forEach((h) => {
					c = h.call({ lexer: this }, p), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
				}), a < Infinity && a >= 0 && (u = e.substring(0, a + 1));
			}
			if (o = this.tokenizer.inlineText(u)) {
				e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (r = o.raw.slice(-1)), s = !0;
				let a = t.at(-1);
				a?.type === "text" ? (a.raw += o.raw, a.text += o.text) : t.push(o);
				continue;
			}
			if (e) {
				this.infiniteLoopError(e.charCodeAt(0));
				break;
			}
		}
		return t;
	}
	infiniteLoopError(e) {
		let t = "Infinite loop on byte: " + e;
		if (this.options.silent) console.error(t);
		else throw new Error(t);
	}
};
var y = class {
	options;
	parser;
	constructor(e) {
		this.options = e || T;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let s = (t || "").match(m.notSpaceStart)?.[0], r = e.replace(m.endingNewline, "") + `
`;
		return s ? "<pre><code class=\"language-" + O(s) + "\">" + (n ? r : O(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : O(r, !0)) + `</code></pre>
`;
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return `<hr>
`;
	}
	list(e) {
		let t = e.ordered, n = e.start, s = "";
		for (let o = 0; o < e.items.length; o++) {
			let u = e.items[o];
			s += this.listitem(u);
		}
		let r = t ? "ol" : "ul", i = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + r + i + `>
` + s + "</" + r + `>
`;
	}
	listitem(e) {
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
		t += this.tablerow({ text: n });
		let s = "";
		for (let r = 0; r < e.rows.length; r++) {
			let i = e.rows[r];
			n = "";
			for (let o = 0; o < i.length; o++) n += this.tablecell(i[o]);
			s += this.tablerow({ text: n });
		}
		return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${O(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let s = this.parser.parseInline(n), r = V(e);
		if (r === null) return s;
		e = r;
		let i = "<a href=\"" + e + "\"";
		return t && (i += " title=\"" + O(t) + "\""), i += ">" + s + "</a>", i;
	}
	image({ href: e, title: t, text: n, tokens: s }) {
		s && (n = this.parser.parseInline(s, this.parser.textRenderer));
		let r = V(e);
		if (r === null) return O(n);
		e = r;
		let i = `<img src="${e}" alt="${O(n)}"`;
		return t && (i += ` title="${O(t)}"`), i += ">", i;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : O(e.text);
	}
};
var L = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
	checkbox({ raw: e }) {
		return e;
	}
};
var b = class l {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || T, this.options.renderer = this.options.renderer || new y(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L();
	}
	static parse(e, t) {
		return new l(t).parse(e);
	}
	static parseInline(e, t) {
		return new l(t).parseInline(e);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let s = e[n];
			if (this.options.extensions?.renderers?.[s.type]) {
				let i = s, o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (o !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(i.type)) {
					t += o || "";
					continue;
				}
			}
			let r = s;
			switch (r.type) {
				case "space":
					t += this.renderer.space(r);
					break;
				case "hr":
					t += this.renderer.hr(r);
					break;
				case "heading":
					t += this.renderer.heading(r);
					break;
				case "code":
					t += this.renderer.code(r);
					break;
				case "table":
					t += this.renderer.table(r);
					break;
				case "blockquote":
					t += this.renderer.blockquote(r);
					break;
				case "list":
					t += this.renderer.list(r);
					break;
				case "checkbox":
					t += this.renderer.checkbox(r);
					break;
				case "html":
					t += this.renderer.html(r);
					break;
				case "def":
					t += this.renderer.def(r);
					break;
				case "paragraph":
					t += this.renderer.paragraph(r);
					break;
				case "text":
					t += this.renderer.text(r);
					break;
				default: {
					let i = "Token with \"" + r.type + "\" type was not found.";
					if (this.options.silent) return console.error(i), "";
					throw new Error(i);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
		let n = "";
		for (let s = 0; s < e.length; s++) {
			let r = e[s];
			if (this.options.extensions?.renderers?.[r.type]) {
				let o = this.options.extensions.renderers[r.type].call({ parser: this }, r);
				if (o !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(r.type)) {
					n += o || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "escape":
					n += t.text(i);
					break;
				case "html":
					n += t.html(i);
					break;
				case "link":
					n += t.link(i);
					break;
				case "image":
					n += t.image(i);
					break;
				case "checkbox":
					n += t.checkbox(i);
					break;
				case "strong":
					n += t.strong(i);
					break;
				case "em":
					n += t.em(i);
					break;
				case "codespan":
					n += t.codespan(i);
					break;
				case "br":
					n += t.br(i);
					break;
				case "del":
					n += t.del(i);
					break;
				case "text":
					n += t.text(i);
					break;
				default: {
					let o = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(o), "";
					throw new Error(o);
				}
			}
		}
		return n;
	}
};
var P = class {
	options;
	block;
	constructor(e) {
		this.options = e || T;
	}
	static passThroughHooks = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer(e = this.block) {
		return e ? x.lex : x.lexInline;
	}
	provideParser(e = this.block) {
		return e ? b.parse : b.parseInline;
	}
};
var D = class {
	defaults = z();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = b;
	Renderer = y;
	TextRenderer = L;
	Lexer = x;
	Tokenizer = w;
	Hooks = P;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let s of e) switch (n = n.concat(t.call(this, s)), s.type) {
			case "table": {
				let r = s;
				for (let i of r.header) n = n.concat(this.walkTokens(i.tokens, t));
				for (let i of r.rows) for (let o of i) n = n.concat(this.walkTokens(o.tokens, t));
				break;
			}
			case "list": {
				let r = s;
				n = n.concat(this.walkTokens(r.items, t));
				break;
			}
			default: {
				let r = s;
				this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((i) => {
					let o = r[i].flat(Infinity);
					n = n.concat(this.walkTokens(o, t));
				}) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((n) => {
			let s = { ...n };
			if (s.async = this.defaults.async || s.async || !1, n.extensions && (n.extensions.forEach((r) => {
				if (!r.name) throw new Error("extension name required");
				if ("renderer" in r) {
					let i = t.renderers[r.name];
					i ? t.renderers[r.name] = function(...o) {
						let u = r.renderer.apply(this, o);
						return u === !1 && (u = i.apply(this, o)), u;
					} : t.renderers[r.name] = r.renderer;
				}
				if ("tokenizer" in r) {
					if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
					let i = t[r.level];
					i ? i.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
				}
				"childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
			}), s.extensions = t), n.renderer) {
				let r = this.defaults.renderer || new y(this.defaults);
				for (let i in n.renderer) {
					if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
					if (["options", "parser"].includes(i)) continue;
					let o = i, u = n.renderer[o], a = r[o];
					r[o] = (...p) => {
						let c = u.apply(r, p);
						return c === !1 && (c = a.apply(r, p)), c || "";
					};
				}
				s.renderer = r;
			}
			if (n.tokenizer) {
				let r = this.defaults.tokenizer || new w(this.defaults);
				for (let i in n.tokenizer) {
					if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(i)) continue;
					let o = i, u = n.tokenizer[o], a = r[o];
					r[o] = (...p) => {
						let c = u.apply(r, p);
						return c === !1 && (c = a.apply(r, p)), c;
					};
				}
				s.tokenizer = r;
			}
			if (n.hooks) {
				let r = this.defaults.hooks || new P();
				for (let i in n.hooks) {
					if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
					if (["options", "block"].includes(i)) continue;
					let o = i, u = n.hooks[o], a = r[o];
					P.passThroughHooks.has(i) ? r[o] = (p) => {
						if (this.defaults.async && P.passThroughHooksRespectAsync.has(i)) return (async () => {
							let h = await u.call(r, p);
							return a.call(r, h);
						})();
						let c = u.call(r, p);
						return a.call(r, c);
					} : r[o] = (...p) => {
						if (this.defaults.async) return (async () => {
							let h = await u.apply(r, p);
							return h === !1 && (h = await a.apply(r, p)), h;
						})();
						let c = u.apply(r, p);
						return c === !1 && (c = a.apply(r, p)), c;
					};
				}
				s.hooks = r;
			}
			if (n.walkTokens) {
				let r = this.defaults.walkTokens, i = n.walkTokens;
				s.walkTokens = function(o) {
					let u = [];
					return u.push(i.call(this, o)), r && (u = u.concat(r.call(this, o))), u;
				};
			}
			this.defaults = {
				...this.defaults,
				...s
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return x.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return b.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (n, s) => {
			let r = { ...s }, i = {
				...this.defaults,
				...r
			}, o = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return o(/* @__PURE__ */ new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof n > "u" || n === null) return o(/* @__PURE__ */ new Error("marked(): input parameter is undefined or null"));
			if (typeof n != "string") return o(/* @__PURE__ */ new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let u = i.hooks ? await i.hooks.preprocess(n) : n, p = await (i.hooks ? await i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(u, i), c = i.hooks ? await i.hooks.processAllTokens(p) : p;
				i.walkTokens && await Promise.all(this.walkTokens(c, i.walkTokens));
				let k = await (i.hooks ? await i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(c, i);
				return i.hooks ? await i.hooks.postprocess(k) : k;
			})().catch(o);
			try {
				i.hooks && (n = i.hooks.preprocess(n));
				let a = (i.hooks ? i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, i);
				i.hooks && (a = i.hooks.processAllTokens(a)), i.walkTokens && this.walkTokens(a, i.walkTokens);
				let c = (i.hooks ? i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(a, i);
				return i.hooks && (c = i.hooks.postprocess(c)), c;
			} catch (u) {
				return o(u);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
				let s = "<p>An error occurred:</p><pre>" + O(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(s) : s;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
};
var M = new D();
function g(l, e) {
	return M.parse(l, e);
}
g.options = g.setOptions = function(l) {
	return M.setOptions(l), g.defaults = M.defaults, N(g.defaults), g;
};
g.getDefaults = z;
g.defaults = T;
g.use = function(...l) {
	return M.use(...l), g.defaults = M.defaults, N(g.defaults), g;
};
g.walkTokens = function(l, e) {
	return M.walkTokens(l, e);
};
g.parseInline = M.parseInline;
g.Parser = b;
g.parser = b.parse;
g.Renderer = y;
g.TextRenderer = L;
g.Lexer = x;
g.lexer = x.lex;
g.Tokenizer = w;
g.Hooks = P;
g.parse = g;
g.options;
g.setOptions;
g.use;
g.walkTokens;
g.parseInline;
b.parse;
x.lex;
//#endregion
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var ACCEPTED_EXTENSIONS = [".txt", ".md"];
function isAcceptedFile(file) {
	const name = file.name.toLowerCase();
	return ACCEPTED_EXTENSIONS.some((extension) => name.endsWith(extension));
}
function renderMarkdown(markdown) {
	const renderer = new y();
	renderer.code = ({ text, lang }) => {
		const requestedLanguage = lang?.trim().split(/\s+/)[0] ?? "";
		const safeLanguage = /^[a-z0-9_+-]+$/i.test(requestedLanguage) ? requestedLanguage : "";
		const highlighted = safeLanguage && common_default.getLanguage(safeLanguage) ? common_default.highlight(text, { language: safeLanguage }).value : common_default.highlightAuto(text).value;
		return `<pre><code class="hljs${safeLanguage ? ` language-${safeLanguage}` : ""}">${highlighted}</code></pre>`;
	};
	const parsed = g.parse(markdown, {
		async: false,
		gfm: true,
		renderer
	});
	const sanitized = purify.sanitize(parsed, {
		FORBID_TAGS: [
			"style",
			"script",
			"iframe",
			"object",
			"embed",
			"form",
			"img",
			"video",
			"audio",
			"source",
			"track"
		],
		USE_PROFILES: { html: true }
	});
	const template = document.createElement("template");
	template.innerHTML = sanitized;
	template.content.querySelectorAll("a").forEach((link) => {
		link.target = "_blank";
		link.rel = "noopener noreferrer";
	});
	return template.innerHTML;
}
function Home() {
	const inputRef = (0, import_react.useRef)(null);
	const [documentHtml, setDocumentHtml] = (0, import_react.useState)("");
	const [filename, setFilename] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const hasDocument = Boolean(filename);
	async function openFile(file) {
		setError("");
		if (!file) return;
		if (!isAcceptedFile(file)) {
			setError("Please choose a .txt or .md file.");
			return;
		}
		try {
			setDocumentHtml(renderMarkdown(await file.text()));
			setFilename(file.name);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} catch {
			setError("This file could not be read. Please try another one.");
		} finally {
			if (inputRef.current) inputRef.current.value = "";
		}
	}
	function handleFileChange(event) {
		openFile(event.target.files?.[0]);
	}
	async function chooseFile() {
		const picker = window.showOpenFilePicker;
		if (!picker) {
			inputRef.current?.click();
			return;
		}
		try {
			const [handle] = await picker({
				multiple: false,
				startIn: "downloads",
				types: [{
					description: "Markdown and text files",
					accept: {
						"text/plain": [".txt"],
						"text/markdown": [".md"]
					}
				}]
			});
			await openFile(await handle?.getFile());
		} catch (pickerError) {
			if (pickerError instanceof DOMException && pickerError.name === "AbortError") return;
			inputRef.current?.click();
		}
	}
	function handleDrop(event) {
		event.preventDefault();
		setIsDragging(false);
		openFile(event.dataTransfer.files?.[0]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: hasDocument ? "app app--reading" : "app",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref: inputRef,
			className: "visually-hidden",
			id: "file-upload",
			type: "file",
			accept: ".txt,.md,text/plain,text/markdown",
			onChange: handleFileChange
		}), hasDocument ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "reader-header",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reader-header__brand",
					children: "Clean TXT Viewer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "reader-header__filename",
					id: "document-filename",
					children: filename
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "upload-again",
					type: "button",
					onClick: () => void chooseFile(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "↑"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "upload-again__label",
						children: "Upload another file"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "reader-shell",
			"aria-labelledby": "document-filename",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "markdown-body",
				dangerouslySetInnerHTML: { __html: documentHtml }
			})
		})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "welcome",
			"aria-labelledby": "site-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "welcome__brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "site-title",
						children: "Clean TXT Viewer"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "welcome__intro",
					children: "A calm, private place to read your Markdown files."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `dropzone${isDragging ? " dropzone--active" : ""}`,
					onDragEnter: (event) => {
						event.preventDefault();
						setIsDragging(true);
					},
					onDragOver: (event) => event.preventDefault(),
					onDragLeave: (event) => {
						if (!event.currentTarget.contains(event.relatedTarget)) setIsDragging(false);
					},
					onDrop: handleDrop,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "upload-illustration",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "upload-illustration__arrow",
								children: "↑"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dropzone__title",
							children: "Drop your file here"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dropzone__or",
							children: "or"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "choose-button",
							type: "button",
							onClick: () => void chooseFile(),
							children: "Choose a file"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dropzone__hint",
							children: "Supports .txt and .md files"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "error-message",
					role: "alert",
					"aria-live": "polite",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "privacy-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "privacy-note__icon",
						"aria-hidden": "true",
						children: "✓"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Your file stays private" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Everything is processed locally in your browser." })] })]
				})
			]
		})]
	});
}
//#endregion
export { Home as default };
