"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortByVal = getSortByVal;
exports.getUpdatedHandles = getUpdatedHandles;
exports.getSliderDomain = getSliderDomain;
exports.isNotValidTouch = isNotValidTouch;
exports.getTouchPosition = getTouchPosition;
exports.getHandles = getHandles;
exports.prfx = void 0;

var _warning = _interopRequireDefault(require("warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var prfx = 'react-uxcustom-slider:';
exports.prfx = prfx;

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
  var index = handles.findIndex(function (v) {
    return v.key === updateKey;
  });

  if (index !== -1) {
    var _handles$index = handles[index],
        key = _handles$index.key,
        val = _handles$index.val;

    if (val === updateValue) {
      return handles;
    }

    return [].concat(_toConsumableArray(handles.slice(0, index)), [{
      key: key,
      val: updateValue
    }], _toConsumableArray(handles.slice(index + 1))).sort(getSortByVal(reversed));
  }

  return handles;
}

function getSliderDomain(slider, vertical) {
  if (!slider) {
    return [0, 0];
  }

  var s = slider.getBoundingClientRect();
  var d0 = vertical ? s.top : s.left;
  var d1 = vertical ? s.bottom : s.right;
  return [d0, d1];
}

function isNotValidTouch(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type,
      touches = _ref.touches;
  return !touches || touches.length > 1 || type.toLowerCase() === 'touchend' && touches.length > 0;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandles() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var reversed = arguments.length > 1 ? arguments[1] : undefined;
  var valueToStep = arguments.length > 2 ? arguments[2] : undefined;
  var warn = arguments.length > 3 ? arguments[3] : undefined;
  var changes = 0;
  var handles = values.map(function (x) {
    var val = valueToStep.getValue(x);

    if (x !== val) {
      changes += 1;
      (0, _warning["default"])(!warn, "".concat(prfx, " Invalid value encountered. Changing ").concat(x, " to ").concat(val, "."));
    }

    return val;
  }).map(function (val, i) {
    return {
      key: "$$-".concat(i),
      val: val
    };
  }).sort(getSortByVal(reversed));
  return {
    handles: handles,
    changes: changes
  };
}