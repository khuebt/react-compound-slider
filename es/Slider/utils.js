import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import warning from 'warning';
export var prfx = 'react-uxcustom-slider:';
export function getSortByVal(reversed) {
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
export function getUpdatedHandles(handles, updateKey, updateValue, reversed) {
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
export function getSliderDomain(slider, vertical) {
  if (!slider) {
    return [0, 0];
  }

  var s = slider.getBoundingClientRect();
  var d0 = vertical ? s.top : s.left;
  var d1 = vertical ? s.bottom : s.right;
  return [d0, d1];
}
export function isNotValidTouch(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type,
      touches = _ref.touches;
  return !touches || touches.length > 1 || type.toLowerCase() === 'touchend' && touches.length > 0;
}
export function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
export function getHandles() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var reversed = arguments.length > 1 ? arguments[1] : undefined;
  var valueToStep = arguments.length > 2 ? arguments[2] : undefined;
  var warn = arguments.length > 3 ? arguments[3] : undefined;
  var changes = 0;
  var handles = values.map(function (x) {
    var val = valueToStep.getValue(x);

    if (x !== val) {
      changes += 1;
      warning(!warn, "".concat(prfx, " Invalid value encountered. Changing ").concat(x, " to ").concat(val, "."));
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