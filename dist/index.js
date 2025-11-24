"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Rating: () => Rating
});
module.exports = __toCommonJS(index_exports);

// src/Rating.tsx
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var StarSVG = ({ size = 50, color = "gold" }) => {
  const starSize = size;
  const half = starSize / 2;
  const angles = [0, 72, 144, 216, 288];
  return /* @__PURE__ */ import_react.default.createElement(
    import_react_native.View,
    {
      style: {
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center"
      }
    },
    angles.map((angle, i) => /* @__PURE__ */ import_react.default.createElement(
      import_react_native.View,
      {
        key: i,
        style: {
          position: "absolute",
          width: 0,
          height: 0,
          borderLeftWidth: half / 2,
          borderRightWidth: half / 2,
          borderBottomWidth: half,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: color,
          top: size / 2 - half,
          left: size / 2 - half / 2,
          transform: [{ rotate: `${angle}deg` }],
          transformOrigin: "bottom"
        }
      }
    ))
  );
};
var sanitize = (v, count) => {
  const num = Number(v);
  return Math.min(count, Math.max(0, isNaN(num) ? 0 : num));
};
function Rating({
  value,
  defaultValue = 3.5,
  icon: RatingIcon = /* @__PURE__ */ import_react.default.createElement(StarSVG, null),
  size = 20,
  gap = 0,
  count = 5,
  color,
  emptyColor = "gray",
  disabled = false,
  onChange
}) {
  const isControlled = value !== void 0;
  const [internalValue, setInternalValue] = (0, import_react.useState)(
    () => sanitize(defaultValue, count)
  );
  const rating = isControlled ? sanitize(value, count) : internalValue;
  const stars = (0, import_react.useMemo)(
    () => [...Array(count)].map((_, i) => ({
      // i: i,
      marginRight: i === count - 1 ? 0 : gap
    })),
    [count, gap]
  );
  const totalWidth = size * count + gap * (count - 1);
  const activeWidth = size * rating + gap * Math.floor(rating);
  const handlePress = (i) => {
    if (disabled) return;
    const newRating = i + 1;
    if (!isControlled) {
      setInternalValue(newRating);
    }
    if (onChange) {
      onChange(newRating);
    }
  };
  const baseProps = (0, import_react.useMemo)(
    () => {
      var _a;
      return (_a = RatingIcon.props) != null ? _a : {};
    },
    [RatingIcon]
  );
  const EmptyIconMemo = (0, import_react.useMemo)(() => {
    return import_react.default.cloneElement(RatingIcon, __spreadProps(__spreadValues({}, baseProps), {
      size,
      width: size,
      height: size,
      color: emptyColor,
      fill: emptyColor,
      stroke: emptyColor
    }));
  }, [size, emptyColor, RatingIcon]);
  const ActiveIconMemo = (0, import_react.useMemo)(() => {
    if (color != null) {
      return import_react.default.cloneElement(RatingIcon, __spreadProps(__spreadValues({}, baseProps), {
        size,
        width: size,
        height: size,
        color,
        fill: color,
        stroke: color
      }));
    }
    return import_react.default.cloneElement(RatingIcon, __spreadProps(__spreadValues({}, baseProps), {
      size,
      width: size,
      height: size
    }));
  }, [size, color, RatingIcon]);
  return (
    // Container
    /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { style: { width: totalWidth, height: size } }, /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { style: { flexDirection: "row" } }, stars.map(({ marginRight }, i) => /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { key: i, style: { marginRight } }, EmptyIconMemo))), /* @__PURE__ */ import_react.default.createElement(
      import_react_native.View,
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          width: activeWidth,
          height: size
        }
      },
      /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { style: { flexDirection: "row" } }, stars.map(({ marginRight }, i) => /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { key: i, style: { marginRight } }, ActiveIconMemo)))
    ), /* @__PURE__ */ import_react.default.createElement(
      import_react_native.View,
      {
        style: {
          position: "absolute",
          height: size,
          flexDirection: "row"
        }
      },
      stars.map(({ marginRight }, i) => /* @__PURE__ */ import_react.default.createElement(
        import_react_native.Pressable,
        {
          disabled,
          key: i,
          onPress: () => handlePress(i),
          style: { width: size, height: size, marginRight }
        }
      ))
    ))
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Rating
});
//# sourceMappingURL=index.js.map