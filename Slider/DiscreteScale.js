"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

var DiscreteScale = function DiscreteScale() {
  var _this = this;

  _classCallCheck(this, DiscreteScale);

  _defineProperty(this, "setDomain", function (val) {
    _this.domain = val.slice();
    return _this;
  });

  _defineProperty(this, "setRange", function (val) {
    _this.range = val.slice();
    return _this;
  });

  _defineProperty(this, "setStep", function (val) {
    _this.step = val;
    return _this;
  });

  _defineProperty(this, "getValue", function (x) {
    var _this$domain = _slicedToArray(_this.domain, 2),
        d0 = _this$domain[0],
        d1 = _this$domain[1],
        _this$range = _slicedToArray(_this.range, 2),
        r0 = _this$range[0],
        r1 = _this$range[1],
        step = _this.step;

    var p = (clamp(x, d0, d1) - d0) / (d1 - d0);
    var valueToRound = p * (r1 - r0) / step;
    var b = step * Math.round(valueToRound * 100) / 100 + r0;
    return clamp(b, r0 < r1 ? r0 : r1, r1 > r0 ? r1 : r0);
  });

  this.step = 1;
  this.domain = [0, 1];
  this.range = [0, 1];
};

var _default = DiscreteScale;
exports["default"] = _default;