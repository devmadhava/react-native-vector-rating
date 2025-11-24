var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/Rating.tsx
import React, { useMemo, useState } from "react";
import { Pressable, View } from "react-native";
var StarSVG = ({ size = 50, color = "gold" }) => {
  const starSize = size;
  const half = starSize / 2;
  const angles = [0, 72, 144, 216, 288];
  return /* @__PURE__ */ React.createElement(
    View,
    {
      style: {
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center"
      }
    },
    angles.map((angle, i) => /* @__PURE__ */ React.createElement(
      View,
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
function Rating({
  value,
  defaultValue = 3.5,
  icon: RatingIcon = /* @__PURE__ */ React.createElement(StarSVG, null),
  size = 20,
  gap = 0,
  count = 5,
  color,
  emptyColor = "gray",
  disabled = false,
  onChange
}) {
  const isControlled = value !== void 0;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const rating = isControlled ? value : internalValue;
  const stars = useMemo(
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
  const baseProps = useMemo(
    () => {
      var _a;
      return (_a = RatingIcon.props) != null ? _a : {};
    },
    [RatingIcon]
  );
  const EmptyIconMemo = useMemo(() => {
    return React.cloneElement(RatingIcon, __spreadProps(__spreadValues({}, baseProps), {
      size,
      width: size,
      height: size,
      color: emptyColor,
      fill: emptyColor,
      stroke: emptyColor
    }));
  }, [size, emptyColor, RatingIcon]);
  const ActiveIconMemo = useMemo(() => {
    if (color != null) {
      return React.cloneElement(RatingIcon, __spreadProps(__spreadValues({}, baseProps), {
        size,
        width: size,
        height: size,
        color,
        fill: color,
        stroke: color
      }));
    }
    return React.cloneElement(RatingIcon, __spreadProps(__spreadValues({}, baseProps), {
      size,
      width: size,
      height: size
    }));
  }, [size, color, RatingIcon]);
  return (
    // Container
    /* @__PURE__ */ React.createElement(View, { style: { width: totalWidth, height: size } }, /* @__PURE__ */ React.createElement(View, { style: { flexDirection: "row" } }, stars.map(({ marginRight }, i) => /* @__PURE__ */ React.createElement(View, { key: i, style: { marginRight } }, EmptyIconMemo))), /* @__PURE__ */ React.createElement(
      View,
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
      /* @__PURE__ */ React.createElement(View, { style: { flexDirection: "row" } }, stars.map(({ marginRight }, i) => /* @__PURE__ */ React.createElement(View, { key: i, style: { marginRight } }, ActiveIconMemo)))
    ), /* @__PURE__ */ React.createElement(
      View,
      {
        style: {
          position: "absolute",
          height: size,
          flexDirection: "row"
        }
      },
      stars.map(({ marginRight }, i) => /* @__PURE__ */ React.createElement(
        Pressable,
        {
          key: i,
          onPress: () => handlePress(i),
          style: { width: size, height: size, marginRight }
        }
      ))
    ))
  );
}
export {
  Rating
};
//# sourceMappingURL=index.mjs.map