import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

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

export default DiscreteScale;