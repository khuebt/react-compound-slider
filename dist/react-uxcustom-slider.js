(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(global = global || self, factory(global.ReactUxcustomSlider = {}, global.React));
}(this, (function (exports, React) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	function _defineProperty(obj, key, value) {
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

	var defineProperty = _defineProperty;

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	var warning = function() {};

	{
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	var warning_1 = warning;

	var reactIs_production_min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
	60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
	exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
	exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
	exports.isSuspense=function(a){return t(a)===p};
	});

	unwrapExports(reactIs_production_min);
	var reactIs_production_min_1 = reactIs_production_min.typeOf;
	var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
	var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
	var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
	var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
	var reactIs_production_min_6 = reactIs_production_min.Element;
	var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
	var reactIs_production_min_8 = reactIs_production_min.Fragment;
	var reactIs_production_min_9 = reactIs_production_min.Lazy;
	var reactIs_production_min_10 = reactIs_production_min.Memo;
	var reactIs_production_min_11 = reactIs_production_min.Portal;
	var reactIs_production_min_12 = reactIs_production_min.Profiler;
	var reactIs_production_min_13 = reactIs_production_min.StrictMode;
	var reactIs_production_min_14 = reactIs_production_min.Suspense;
	var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
	var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
	var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
	var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
	var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
	var reactIs_production_min_20 = reactIs_production_min.isElement;
	var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
	var reactIs_production_min_22 = reactIs_production_min.isFragment;
	var reactIs_production_min_23 = reactIs_production_min.isLazy;
	var reactIs_production_min_24 = reactIs_production_min.isMemo;
	var reactIs_production_min_25 = reactIs_production_min.isPortal;
	var reactIs_production_min_26 = reactIs_production_min.isProfiler;
	var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
	var reactIs_production_min_28 = reactIs_production_min.isSuspense;

	var reactIs_development = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;

	var hasWarnedAboutDeprecatedIsAsyncMode = false;

	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}
	});

	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development;
	}
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	{
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  {
	    loggedTypeFailures = {};
	  }
	};

	var checkPropTypes_1 = checkPropTypes;

	var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning$1 = function() {};

	{
	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if ( typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$1(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!reactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      {
	        if (arguments.length > 1) {
	          printWarning$1(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has$1(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$1(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var ReactIs = reactIs;

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
	}
	});

	const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

	class Rail extends React.Component {
	  constructor(...args) {
	    super(...args);

	    defineProperty(this, "getRailProps", (props = {}) => {
	      const {
	        emitMouse,
	        emitTouch
	      } = this.props;
	      return { ...props,
	        onMouseDown: callAll(props.onMouseDown, emitMouse),
	        onTouchStart: callAll(props.onTouchStart, emitTouch)
	      };
	    });
	  }

	  render() {
	    const {
	      getRailProps,
	      props: {
	        getEventData,
	        activeHandleID,
	        children
	      }
	    } = this;
	    const renderedChildren = children({
	      getEventData,
	      activeHandleID,
	      getRailProps
	    });
	    return renderedChildren && React__default.Children.only(renderedChildren);
	  }

	}

	Rail.propTypes =  {
	  /** @ignore */
	  getEventData: propTypes.func,

	  /** @ignore */
	  activeHandleID: propTypes.string,

	  /** @ignore */
	  emitMouse: propTypes.func,

	  /** @ignore */
	  emitTouch: propTypes.func,

	  /**
	   * A function to render the rail. Note: `getEventData` can be called with an event and get the value and percent at that location (used for tooltips etc). `activeHandleID` will be a string or null.  Function signature: `({ getEventData, activeHandleID, getRailProps }): element`
	   */
	  children: propTypes.func.isRequired
	} ;

	class Ticks extends React.Component {
	  render() {
	    const {
	      children,
	      values,
	      scale,
	      count,
	      getEventData,
	      activeHandleID
	    } = this.props;
	    const ticks = (values ? values : scale.getTicks(count)).map(value => {
	      return {
	        id: `$$-${value}`,
	        value,
	        percent: scale.getValue(value)
	      };
	    });
	    const renderedChildren = children({
	      getEventData,
	      activeHandleID,
	      ticks
	    });
	    return renderedChildren && React__default.Children.only(renderedChildren);
	  }

	}

	Ticks.propTypes =  {
	  /** @ignore */
	  scale: propTypes.object,

	  /**
	   * Approximate number of ticks you want to render.
	   * If you supply your own ticks using the values prop this prop has no effect.
	   */
	  count: propTypes.number,

	  /**
	   * The values prop should be an array of unique numbers.
	   * Use this prop if you want to specify your own tick values instead of ticks generated by the slider.
	   * The numbers should be valid numbers in the domain and correspond to the step value.
	   * Invalid values will be coerced to the closet matching value in the domain.
	   */
	  values: propTypes.array,

	  /** @ignore */
	  getEventData: propTypes.func,

	  /** @ignore */
	  activeHandleID: propTypes.string,

	  /** @ignore */
	  emitMouse: propTypes.func,

	  /** @ignore */
	  emitTouch: propTypes.func,

	  /**
	   * A function to render the ticks.
	   * The function receives an object with an array of ticks. Note: `getEventData` can be called with an event and get the value and percent at that location (used for tooltips etc). `activeHandleID` will be a string or null.  Function signature:
	   * `({ getEventData, activeHandleID, ticks  }): element`
	   */
	  children: propTypes.func.isRequired
	} ;
	Ticks.defaultProps = {
	  count: 10
	};

	class Tracks extends React.Component {
	  constructor(...args) {
	    super(...args);

	    defineProperty(this, "getTrackProps", (props = {}) => {
	      const {
	        emitMouse,
	        emitTouch
	      } = this.props;
	      return { ...props,
	        onMouseDown: callAll(props.onMouseDown, emitMouse),
	        onTouchStart: callAll(props.onTouchStart, emitTouch)
	      };
	    });
	  }

	  render() {
	    const {
	      getTrackProps,
	      props: {
	        children,
	        left,
	        right,
	        scale,
	        handles,
	        getEventData,
	        activeHandleID
	      }
	    } = this;
	    const domain = scale.getDomain();
	    const tracks = [];

	    for (let i = 0; i < handles.length + 1; i++) {
	      let source = handles[i - 1];
	      let target = handles[i];

	      if (i === 0 && left === true) {
	        source = {
	          id: '$',
	          value: domain[0],
	          percent: 0
	        };
	      } else if (i === handles.length && right === true) {
	        target = {
	          id: '$',
	          value: domain[1],
	          percent: 100
	        };
	      }

	      if (source && target) {
	        tracks.push({
	          id: `${source.id}-${target.id}`,
	          source,
	          target
	        });
	      }
	    }

	    const renderedChildren = children({
	      getEventData,
	      activeHandleID,
	      tracks,
	      getTrackProps
	    });
	    return renderedChildren && React__default.Children.only(renderedChildren);
	  }

	}

	Tracks.propTypes =  {
	  /**
	   * Boolean value to control whether the left most track is included in the tracks array.
	   */
	  left: propTypes.bool,

	  /**
	   * Boolean value to control whether the right most track is included in the tracks array.
	   */
	  right: propTypes.bool,

	  /** @ignore */
	  getEventData: propTypes.func,

	  /** @ignore */
	  activeHandleID: propTypes.string,

	  /** @ignore */
	  scale: propTypes.object,

	  /** @ignore */
	  handles: propTypes.array,

	  /** @ignore */
	  emitMouse: propTypes.func,

	  /** @ignore */
	  emitTouch: propTypes.func,

	  /**
	   * A function to render the tracks. The function receives an object with an array of tracks. Note: `getEventData` can be called with an event and get the value and percent at that location (used for tooltips etc). `activeHandleID` will be a string or null.  Function signature:  `({ getEventData, activeHandleID, tracks, getTrackProps }): element`
	   */
	  children: propTypes.func.isRequired
	} ;
	Tracks.defaultProps = {
	  left: true,
	  right: true
	};

	class Handles extends React.Component {
	  constructor(...args) {
	    super(...args);

	    defineProperty(this, "autofocus", e => {
	      e.target.focus();
	    });

	    defineProperty(this, "getHandleProps", (id, props = {}) => {
	      const {
	        emitKeyboard,
	        emitMouse,
	        emitTouch
	      } = this.props;
	      return { ...props,
	        onKeyDown: callAll(props.onKeyDown, e => emitKeyboard(e, id)),
	        onMouseDown: callAll(props.onMouseDown, this.autofocus, e => emitMouse(e, id)),
	        onTouchStart: callAll(props.onTouchStart, e => emitTouch(e, id))
	      };
	    });
	  }

	  render() {
	    const {
	      getHandleProps,
	      props: {
	        activeHandleID,
	        children,
	        handles
	      }
	    } = this;
	    const renderedChildren = children({
	      handles,
	      activeHandleID,
	      getHandleProps
	    });
	    return renderedChildren && React__default.Children.only(renderedChildren);
	  }

	}

	Handles.propTypes =  {
	  /** @ignore */
	  activeHandleID: propTypes.string,

	  /** @ignore */
	  handles: propTypes.array,

	  /** @ignore */
	  emitKeyboard: propTypes.func,

	  /** @ignore */
	  emitMouse: propTypes.func,

	  /** @ignore */
	  emitTouch: propTypes.func,

	  /**
	   * A function to render the handles.
	   * The function receives an object with an array of handles and functions to get handle props
	   * `({ handles, getHandleProps }): element`
	   */
	  children: propTypes.func.isRequired
	} ;

	const prfx = 'react-uxcustom-slider:';
	function getSortByVal(reversed) {
	  return function sortByVal(a, b) {
	    if (a.val > b.val) {
	      return reversed ? -1 : 1;
	    }

	    if (b.val > a.val) {
	      return reversed ? 1 : -1;
	    }

	    return 0;
	  };
	}
	function getUpdatedHandles(handles, updateKey, updateValue, reversed) {
	  const index = handles.findIndex(v => v.key === updateKey);

	  if (index !== -1) {
	    const {
	      key,
	      val
	    } = handles[index];

	    if (val === updateValue) {
	      return handles;
	    }

	    return [...handles.slice(0, index), {
	      key,
	      val: updateValue
	    }, ...handles.slice(index + 1)].sort(getSortByVal(reversed));
	  }

	  return handles;
	}
	function getSliderDomain(slider, vertical) {
	  if (!slider) {
	    return [0, 0];
	  }

	  const s = slider.getBoundingClientRect();
	  const d0 = vertical ? s.top : s.left;
	  const d1 = vertical ? s.bottom : s.right;
	  return [d0, d1];
	}
	function isNotValidTouch({
	  type = '',
	  touches
	}) {
	  return !touches || touches.length > 1 || type.toLowerCase() === 'touchend' && touches.length > 0;
	}
	function getTouchPosition(vertical, e) {
	  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
	}
	function getHandles(values = [], reversed, valueToStep, warn) {
	  let changes = 0;
	  const handles = values.map(x => {
	    const val = valueToStep.getValue(x);

	    if (x !== val) {
	      changes += 1;
	      warning_1(!warn, `${prfx} Invalid value encountered. Changing ${x} to ${val}.`);
	    }

	    return val;
	  }).map((val, i) => ({
	    key: `$$-${i}`,
	    val
	  })).sort(getSortByVal(reversed));
	  return {
	    handles,
	    changes
	  };
	}

	/* eslint complexity: "off", max-statements: "off", max-depth: "off" */

	function mode1(curr, next) {
	  return next;
	} // prevent duplicate values and crossing

	function mode2(curr, next) {
	  for (let i = 0; i < curr.length; i++) {
	    if (curr[i].key !== next[i].key) {
	      return curr;
	    }

	    if (next[i + 1] && next[i].val === next[i + 1].val) {
	      return curr;
	    }
	  }

	  return next;
	} // pushable mode

	function mode3(curr, next, step, reversed, getValue) {
	  let indexForMovingHandle = -1;
	  let handleMoveIsPositive = true;

	  for (let i = 0; i < curr.length; i++) {
	    const c = curr[i];
	    const n = next[i]; // make sure keys are in same order if not return curr

	    if (!n || n.key !== c.key) {
	      return curr;
	    } else if (n.val !== c.val) {
	      indexForMovingHandle = i;
	      handleMoveIsPositive = n.val - c.val > 0;
	    }
	  } // nothing has changed (shouldn't happen but just in case).


	  if (indexForMovingHandle === -1) {
	    return curr;
	  } else {
	    const increment = handleMoveIsPositive ? step : -step;

	    for (let i = 0; i < next.length; i++) {
	      const n0 = next[i];
	      const n1 = next[i + 1];

	      if (n1 && n0.val === n1.val) {
	        if (i === indexForMovingHandle) {
	          const newStep = n1.val + increment;

	          if (getValue(newStep) === newStep) {
	            const clone = getUpdatedHandles(next, n1.key, n1.val + increment, reversed);
	            const check = mode3(next, clone, step, reversed, getValue);

	            if (check === next) {
	              return curr;
	            } else {
	              return check;
	            }
	          } else {
	            return curr;
	          }
	        } else {
	          const newStep = n0.val + increment;

	          if (getValue(newStep) === newStep) {
	            const clone = getUpdatedHandles(next, n0.key, n0.val + increment, reversed);
	            const check = mode3(next, clone, step, reversed, getValue);

	            if (check === next) {
	              return curr;
	            } else {
	              return check;
	            }
	          } else {
	            return curr;
	          }
	        }
	      }
	    }
	  }

	  return next;
	}

	function ascending(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	function bisector(compare) {
	  if (compare.length === 1) compare = ascendingComparator(compare);
	  return {
	    left: function(a, x, lo, hi) {
	      if (lo == null) lo = 0;
	      if (hi == null) hi = a.length;
	      while (lo < hi) {
	        var mid = lo + hi >>> 1;
	        if (compare(a[mid], x) < 0) lo = mid + 1;
	        else hi = mid;
	      }
	      return lo;
	    },
	    right: function(a, x, lo, hi) {
	      if (lo == null) lo = 0;
	      if (hi == null) hi = a.length;
	      while (lo < hi) {
	        var mid = lo + hi >>> 1;
	        if (compare(a[mid], x) > 0) hi = mid;
	        else lo = mid + 1;
	      }
	      return lo;
	    }
	  };
	}

	function ascendingComparator(f) {
	  return function(d, x) {
	    return ascending(f(d), x);
	  };
	}

	var ascendingBisect = bisector(ascending);

	var e10 = Math.sqrt(50),
	    e5 = Math.sqrt(10),
	    e2 = Math.sqrt(2);

	function ticks(start, stop, count) {
	  var reverse,
	      i = -1,
	      n,
	      ticks,
	      step;

	  stop = +stop, start = +start, count = +count;
	  if (start === stop && count > 0) return [start];
	  if (reverse = stop < start) n = start, start = stop, stop = n;
	  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

	  if (step > 0) {
	    start = Math.ceil(start / step);
	    stop = Math.floor(stop / step);
	    ticks = new Array(n = Math.ceil(stop - start + 1));
	    while (++i < n) ticks[i] = (start + i) * step;
	  } else {
	    start = Math.floor(start * step);
	    stop = Math.ceil(stop * step);
	    ticks = new Array(n = Math.ceil(start - stop + 1));
	    while (++i < n) ticks[i] = (start - i) / step;
	  }

	  if (reverse) ticks.reverse();

	  return ticks;
	}

	function tickIncrement(start, stop, count) {
	  var step = (stop - start) / Math.max(0, count),
	      power = Math.floor(Math.log(step) / Math.LN10),
	      error = step / Math.pow(10, power);
	  return power >= 0
	      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
	      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
	}

	class LinearScale {
	  constructor() {
	    this.domain = [0, 1];
	    this.range = [0, 1];
	    this.interpolator = null;
	  }

	  createInterpolator(domain, range) {
	    let d0 = domain[0];
	    const d1 = domain[1];
	    let r0 = range[0];
	    const r1 = range[1];

	    if (d1 < d0) {
	      d0 = this.deinterpolateValue(d1, d0);
	      r0 = this.interpolateValue(r1, r0);
	    } else {
	      d0 = this.deinterpolateValue(d0, d1);
	      r0 = this.interpolateValue(r0, r1);
	    }

	    return x => r0(d0(x));
	  }

	  interpolateValue(a, b) {
	    return a = +a, b -= a, function i(t) {
	      return a + b * t;
	    };
	  }

	  deinterpolateValue(a, b) {
	    return (b -= a = +a) ? x => (x - a) / b : () => b; // eslint-disable-line
	  }

	  rescale() {
	    this.interpolator = null;
	    return this;
	  }

	  getValue(x) {
	    const {
	      domain,
	      range
	    } = this;
	    return (this.interpolator || (this.interpolator = this.createInterpolator(domain, range)))(+x);
	  }

	  setDomain(val) {
	    this.domain = val.map(d => +d);
	    this.rescale();
	    return this;
	  }

	  getDomain() {
	    return this.domain;
	  }

	  setRange(val) {
	    this.range = val.map(d => +d);
	    return this;
	  }

	  getTicks(count) {
	    const d = this.domain;
	    return ticks(d[0], d[d.length - 1], count ? count : 10);
	  }

	}

	function clamp(value, min, max) {
	  return Math.min(Math.max(value, min), max);
	}

	class DiscreteScale {
	  constructor() {
	    defineProperty(this, "setDomain", val => {
	      this.domain = val.slice();
	      return this;
	    });

	    defineProperty(this, "setRange", val => {
	      this.range = val.slice();
	      return this;
	    });

	    defineProperty(this, "setStep", val => {
	      this.step = val;
	      return this;
	    });

	    defineProperty(this, "getValue", x => {
	      const {
	        domain: [d0, d1],
	        range: [r0, r1],
	        step
	      } = this;
	      const p = (clamp(x, d0, d1) - d0) / (d1 - d0);
	      const valueToRound = p * (r1 - r0) / step;
	      const b = step * Math.round(valueToRound * 100) / 100 + r0;
	      return clamp(b, r0 < r1 ? r0 : r1, r1 > r0 ? r1 : r0);
	    });

	    this.step = 1;
	    this.domain = [0, 1];
	    this.range = [0, 1];
	  }

	}

	const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

	const noop = () => {};

	const compare = b => (m, d, i) => m && b[i] === d;

	const equal = (a, b) => {
	  return a === b || a.length === b.length && a.reduce(compare(b), true);
	};

	const getNextValue = (curr, step, domain, reversed) => {
	  const newVal = reversed ? curr - step : curr + step;
	  return reversed ? Math.max(domain[0], newVal) : Math.min(domain[1], newVal);
	};

	const getPrevValue = (curr, step, domain, reversed) => {
	  const newVal = reversed ? curr + step : curr - step;
	  return reversed ? Math.min(domain[1], newVal) : Math.max(domain[0], newVal);
	};

	class Slider extends React.PureComponent {
	  constructor(...args) {
	    super(...args);

	    defineProperty(this, "state", {
	      step: null,
	      values: null,
	      domain: null,
	      handles: [],
	      reversed: null,
	      activeHandleID: null,
	      valueToPerc: null,
	      valueToStep: null,
	      pixelToStep: null
	    });

	    defineProperty(this, "slider", React__default.createRef());

	    defineProperty(this, "onKeyDown", (e, handleID) => {
	      let validUpKeys = ['ArrowRight', 'ArrowUp'];
	      let validDownKeys = ['ArrowDown', 'ArrowLeft'];
	      const {
	        state: {
	          handles
	        },
	        props: {
	          step,
	          reversed,
	          vertical,
	          domain
	        }
	      } = this;
	      const key = e.key || e.keyCode;

	      if (!validUpKeys.concat(validDownKeys).includes(key)) {
	        return;
	      }

	      if (vertical) {
	        [validUpKeys, validDownKeys] = [validDownKeys, validUpKeys];
	      }

	      e.stopPropagation && e.stopPropagation();
	      e.preventDefault && e.preventDefault();
	      const found = handles.find(value => {
	        return value.key === handleID;
	      });

	      if (!found) {
	        return;
	      }

	      const currVal = found.val;
	      let newVal = currVal;

	      if (validUpKeys.includes(key)) {
	        newVal = getNextValue(currVal, step, domain, reversed);
	      } else if (validDownKeys.includes(key)) {
	        newVal = getPrevValue(currVal, step, domain, reversed);
	      }

	      const nextHandles = handles.map(v => v.key === handleID ? {
	        key: v.key,
	        val: newVal
	      } : v);
	      this.submitUpdate(nextHandles, true);
	    });

	    defineProperty(this, "onMouseDown", (e, handleID) => {
	      this.onStart(e, handleID, false);
	    });

	    defineProperty(this, "onTouchStart", (e, handleID) => {
	      if (isNotValidTouch(e)) {
	        return;
	      }

	      this.onStart(e, handleID, true);
	    });

	    defineProperty(this, "getEventData", (e, isTouch) => {
	      const {
	        state: {
	          pixelToStep,
	          valueToPerc
	        },
	        props: {
	          vertical
	        }
	      } = this; // double check the dimensions of the slider

	      pixelToStep.setDomain(getSliderDomain(this.slider.current, vertical));
	      let value;

	      if (isTouch) {
	        value = pixelToStep.getValue(getTouchPosition(vertical, e));
	      } else {
	        value = pixelToStep.getValue(vertical ? e.clientY : e.pageX);
	      }

	      return {
	        value,
	        percent: valueToPerc.getValue(value)
	      };
	    });

	    defineProperty(this, "onMouseMove", e => {
	      const {
	        state: {
	          handles: curr,
	          pixelToStep,
	          activeHandleID
	        },
	        props: {
	          vertical,
	          reversed
	        }
	      } = this; // double check the dimensions of the slider

	      pixelToStep.setDomain(getSliderDomain(this.slider.current, vertical)); // find the closest value (aka step) to the event location

	      const updateValue = pixelToStep.getValue(vertical ? e.clientY : e.pageX); // generate a "candidate" set of values - a suggestion of what to do

	      const nextHandles = getUpdatedHandles(curr, activeHandleID, updateValue, reversed); // submit the candidate values

	      this.submitUpdate(nextHandles);
	    });

	    defineProperty(this, "onTouchMove", e => {
	      const {
	        state: {
	          handles: curr,
	          pixelToStep,
	          activeHandleID
	        },
	        props: {
	          vertical,
	          reversed
	        }
	      } = this;

	      if (isNotValidTouch(e)) {
	        return;
	      } // double check the dimensions of the slider


	      pixelToStep.setDomain(getSliderDomain(this.slider.current, vertical)); // find the closest value (aka step) to the event location

	      const updateValue = pixelToStep.getValue(getTouchPosition(vertical, e)); // generate a "candidate" set of values - a suggestion of what to do

	      const nextHandles = getUpdatedHandles(curr, activeHandleID, updateValue, reversed); // submit the candidate values

	      this.submitUpdate(nextHandles);
	    });

	    defineProperty(this, "onMouseUp", () => {
	      const {
	        state: {
	          handles,
	          activeHandleID
	        },
	        props: {
	          onChange,
	          onSlideEnd
	        }
	      } = this;
	      onChange(handles.map(d => d.val));
	      onSlideEnd(handles.map(d => d.val), {
	        activeHandleID
	      });
	      this.setState({
	        activeHandleID: null
	      });

	      if (isBrowser) {
	        document.removeEventListener('mousemove', this.onMouseMove);
	        document.removeEventListener('mouseup', this.onMouseUp);
	      }
	    });

	    defineProperty(this, "onTouchEnd", () => {
	      const {
	        state: {
	          handles,
	          activeHandleID
	        },
	        props: {
	          onChange,
	          onSlideEnd
	        }
	      } = this;
	      onChange(handles.map(d => d.val));
	      onSlideEnd(handles.map(d => d.val), {
	        activeHandleID
	      });
	      this.setState({
	        activeHandleID: null
	      });

	      if (isBrowser) {
	        document.removeEventListener('touchmove', this.onTouchMove);
	        document.removeEventListener('touchend', this.onTouchEnd);
	      }
	    });
	  }

	  static getDerivedStateFromProps(nextProps, prevState) {
	    const {
	      step,
	      values,
	      domain,
	      reversed,
	      onUpdate,
	      onChange,
	      warnOnChanges
	    } = nextProps;
	    let valueToPerc = prevState.valueToPerc;
	    let valueToStep = prevState.valueToStep;
	    let pixelToStep = prevState.pixelToStep;
	    const nextState = {};

	    if (!valueToPerc || !valueToStep || !pixelToStep) {
	      valueToPerc = new LinearScale();
	      valueToStep = new DiscreteScale();
	      pixelToStep = new DiscreteScale();
	      nextState.valueToPerc = valueToPerc;
	      nextState.valueToStep = valueToStep;
	      nextState.pixelToStep = pixelToStep;
	    }

	    if (prevState.step === null || prevState.domain === null || prevState.reversed === null || step !== prevState.step || domain[0] !== prevState.domain[0] || domain[1] !== prevState.domain[1] || reversed !== prevState.reversed) {
	      const [min, max] = domain;
	      valueToStep.setStep(step).setRange([min, max]).setDomain([min, max]);

	      if (reversed === true) {
	        valueToPerc.setDomain([min, max]).setRange([100, 0]);
	        pixelToStep.setStep(step).setRange([max, min]);
	      } else {
	        valueToPerc.setDomain([min, max]).setRange([0, 100]);
	        pixelToStep.setStep(step).setRange([min, max]);
	      }

	      warning_1(max > min, `${prfx} Max must be greater than min (even if reversed). Max is ${max}. Min is ${min}.`);
	      const {
	        handles,
	        changes
	      } = getHandles(values || prevState.values, reversed, valueToStep, warnOnChanges);

	      if (changes || values === undefined || values === prevState.values) {
	        onUpdate(handles.map(d => d.val));
	        onChange(handles.map(d => d.val));
	      }

	      nextState.step = step;
	      nextState.values = values;
	      nextState.domain = domain;
	      nextState.handles = handles;
	      nextState.reversed = reversed;
	    } else if (!equal(values, prevState.values)) {
	      const {
	        handles,
	        changes
	      } = getHandles(values, reversed, valueToStep, warnOnChanges);

	      if (changes) {
	        onUpdate(handles.map(d => d.val));
	        onChange(handles.map(d => d.val));
	      }

	      nextState.values = values;
	      nextState.handles = handles;
	    }

	    if (Object.keys(nextState).length) {
	      return nextState;
	    }

	    return null;
	  }

	  componentDidMount() {
	    const {
	      pixelToStep
	    } = this.state;
	    const {
	      vertical
	    } = this.props;
	    pixelToStep.setDomain(getSliderDomain(this.slider.current, vertical));
	  }

	  componentWillUnmount() {
	    this.removeListeners();
	  }

	  removeListeners() {
	    if (isBrowser) {
	      document.removeEventListener('mousemove', this.onMouseMove);
	      document.removeEventListener('mouseup', this.onMouseUp);
	      document.removeEventListener('touchmove', this.onTouchMove);
	      document.removeEventListener('touchend', this.onTouchEnd);
	    }
	  }

	  onStart(e, handleID, isTouch) {
	    const {
	      state: {
	        handles
	      },
	      props: {
	        onSlideStart
	      }
	    } = this;

	    if (!isTouch) {
	      e.preventDefault && e.preventDefault();
	    }

	    e.stopPropagation && e.stopPropagation();
	    const found = handles.find(value => {
	      return value.key === handleID;
	    });

	    if (found) {
	      this.setState({
	        activeHandleID: handleID
	      });
	      onSlideStart(handles.map(d => d.val), {
	        activeHandleID: handleID
	      });
	      isTouch ? this.addTouchEvents() : this.addMouseEvents();
	    } else {
	      this.setState({
	        activeHandleID: null
	      });
	      this.handleRailAndTrackClicks(e, isTouch);
	    }
	  }

	  handleRailAndTrackClicks(e, isTouch) {
	    const {
	      state: {
	        handles: curr,
	        pixelToStep
	      },
	      props: {
	        vertical,
	        reversed
	      }
	    } = this;
	    const {
	      slider
	    } = this; // double check the dimensions of the slider

	    pixelToStep.setDomain(getSliderDomain(slider.current, vertical)); // find the closest value (aka step) to the event location

	    let updateValue;

	    if (isTouch) {
	      updateValue = pixelToStep.getValue(getTouchPosition(vertical, e));
	    } else {
	      updateValue = pixelToStep.getValue(vertical ? e.clientY : e.pageX);
	    } // find the closest handle key


	    let updateKey = null;
	    let minDiff = Infinity;

	    for (let i = 0; i < curr.length; i++) {
	      const {
	        key,
	        val
	      } = curr[i];
	      const diff = Math.abs(val - updateValue);

	      if (diff < minDiff) {
	        updateKey = key;
	        minDiff = diff;
	      }
	    } // generate a "candidate" set of values - a suggestion of what to do


	    const nextHandles = getUpdatedHandles(curr, updateKey, updateValue, reversed); // submit the candidate values

	    this.setState({
	      activeHandleID: updateKey
	    }, () => {
	      this.submitUpdate(nextHandles, true);
	      isTouch ? this.addTouchEvents() : this.addMouseEvents();
	    });
	  }

	  addMouseEvents() {
	    if (isBrowser) {
	      document.addEventListener('mousemove', this.onMouseMove);
	      document.addEventListener('mouseup', this.onMouseUp);
	    }
	  }

	  addTouchEvents() {
	    if (isBrowser) {
	      document.addEventListener('touchmove', this.onTouchMove);
	      document.addEventListener('touchend', this.onTouchEnd);
	    }
	  }

	  submitUpdate(next, callOnChange) {
	    const {
	      mode,
	      step,
	      onUpdate,
	      onChange,
	      reversed
	    } = this.props;
	    const {
	      getValue
	    } = this.state.valueToStep;
	    this.setState(({
	      handles: curr
	    }) => {
	      let handles; // given the current handles and a candidate set, decide what to do

	      if (typeof mode === 'function') {
	        handles = mode(curr, next, step, reversed, getValue);
	        warning_1(Array.isArray(handles), 'Custom mode function did not return an array.');
	      } else {
	        switch (mode) {
	          case 1:
	            handles = mode1(curr, next);
	            break;

	          case 2:
	            handles = mode2(curr, next);
	            break;

	          case 3:
	            handles = mode3(curr, next, step, reversed, getValue);
	            break;

	          default:
	            handles = next;
	            warning_1(false, `${prfx} Invalid mode value.`);
	        }
	      }

	      onUpdate(handles.map(d => d.val));

	      if (callOnChange) {
	        onChange(handles.map(d => d.val));
	      }

	      return {
	        handles
	      };
	    });
	  }

	  render() {
	    const {
	      state: {
	        handles,
	        valueToPerc,
	        activeHandleID
	      },
	      props: {
	        className,
	        rootStyle,
	        rootProps,
	        component: Comp,
	        disabled,
	        flatten
	      }
	    } = this;
	    const mappedHandles = handles.map(({
	      key,
	      val
	    }) => {
	      return {
	        id: key,
	        value: val,
	        percent: valueToPerc.getValue(val)
	      };
	    });
	    const children = React__default.Children.map(this.props.children, child => {
	      if (child && (child.type.name === Rail.name || child.type.name === Ticks.name || child.type.name === Tracks.name || child.type.name === Handles.name)) {
	        return React__default.cloneElement(child, {
	          scale: valueToPerc,
	          handles: mappedHandles,
	          activeHandleID,
	          getEventData: this.getEventData,
	          emitKeyboard: disabled ? noop : this.onKeyDown,
	          emitMouse: disabled ? noop : this.onMouseDown,
	          emitTouch: disabled ? noop : this.onTouchStart
	        });
	      }

	      return child;
	    });
	    return flatten ? React__default.createElement(React.Fragment, null, React__default.createElement(Comp, _extends_1({}, rootProps, {
	      style: rootStyle,
	      className: className,
	      ref: this.slider
	    })), children) : React__default.createElement(Comp, _extends_1({}, rootProps, {
	      style: rootStyle,
	      className: className,
	      ref: this.slider
	    }), children);
	  }

	}

	Slider.propTypes =  {
	  /**
	   * String component used for slider root. Defaults to 'div'.
	   */
	  component: propTypes.string,

	  /**
	   * An object with any inline styles you want applied to the root element.
	   */
	  rootStyle: propTypes.object,

	  /**
	   * An object with any props you want applied to the root element.
	   */
	  rootProps: propTypes.object,

	  /**
	   * CSS class name applied to the root element of the slider.
	   */
	  className: propTypes.string,

	  /**
	   * Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100].
	   * It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.
	   */
	  domain: propTypes.array,

	  /**
	   * An array of numbers. You can supply one for a value slider, two for a range slider or more to create n-handled sliders.
	   * The values should correspond to valid step values in the domain.
	   * The numbers will be forced into the domain if they are two small or large.
	   */
	  values: propTypes.array,

	  /**
	   * The step value for the slider.
	   */
	  step: propTypes.number,

	  /**
	   * The interaction mode. Value of 1 will allow handles to cross each other.
	   * Value of 2 will keep the sliders from crossing and separated by a step.
	   * Value of 3 will make the handles pushable and keep them a step apart.
	   * ADVANCED: You can also supply a function that will be passed the current values and the incoming update.
	   * Your function should return what the state should be set as.
	   */
	  mode: propTypes.oneOfType([propTypes.number, propTypes.func]),

	  /**
	   * Set to true if the slider is displayed vertically to tell the slider to use the height to calculate positions.
	   */
	  vertical: propTypes.bool,

	  /**
	   * Reverse the display of slider values.
	   */
	  reversed: propTypes.bool,

	  /**
	   * Function triggered when the value of the slider has changed. This will recieve changes at the end of a slide as well as changes from clicks on rails and tracks. Receives values.
	   */
	  onChange: propTypes.func,

	  /**
	   * Function called with the values at each update (caution: high-volume updates when dragging). Receives values.
	   */
	  onUpdate: propTypes.func,

	  /**
	   * Function triggered with ontouchstart or onmousedown on a handle. Receives values.
	   */
	  onSlideStart: propTypes.func,

	  /**
	   * Function triggered on ontouchend or onmouseup on a handle. Receives values.
	   */
	  onSlideEnd: propTypes.func,

	  /**
	   * Ignore all mouse, touch and keyboard events.
	   */
	  disabled: propTypes.bool,

	  /**
	   * Render slider children as siblings. This is primarily for SVG sliders. See the SVG example.
	   */
	  flatten: propTypes.bool,

	  /**
	   * When true, the slider will warn if values are changed to fit domain and step values.  Defaults to false.
	   */
	  warnOnChanges: propTypes.bool,

	  /**
	   * Component children to render.
	   */
	  children: propTypes.any
	} ;
	Slider.defaultProps = {
	  mode: 1,
	  step: 0.1,
	  domain: [0, 100],
	  component: 'div',
	  rootProps: {},
	  rootStyle: {},
	  vertical: false,
	  reversed: false,
	  onChange: noop,
	  onUpdate: noop,
	  onSlideStart: noop,
	  onSlideEnd: noop,
	  disabled: false,
	  flatten: false,
	  warnOnChanges: false
	};

	Slider.Rail = Rail;
	Slider.Ticks = Ticks;
	Slider.Tracks = Tracks;
	Slider.Handles = Handles;

	exports.Handles = Handles;
	exports.Rail = Rail;
	exports.Slider = Slider;
	exports.Ticks = Ticks;
	exports.Tracks = Tracks;
	exports.default = Slider;
	exports.mode1 = mode1;
	exports.mode2 = mode2;
	exports.mode3 = mode3;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
