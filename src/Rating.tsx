import React, { useMemo, useState } from "react";
import { Pressable, View } from "react-native";

export type RatingProps = {
    value?: number;
    defaultValue?: number;
    icon?: any;
    size?: number;
    gap?: number;
    count?: number;
    color?: string;
    emptyColor?: string;
    disabled?: boolean;
    onChange?: (value: number) => void;
};

type StarSVGProps = {
    size?: number;
    color?: string;
};

const StarSVG = ({ size = 50, color = "gold" }: StarSVGProps) => {
    const starSize = size;
    const half = starSize / 2;
    const angles = [0, 72, 144, 216, 288];

    return (
        <View
            style={{
                width: size,
                height: size,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {angles.map((angle, i) => (
                <View
                    key={i}
                    style={{
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
                        transformOrigin: "bottom",
                    }}
                />
            ))}
        </View>
    );
};

// Sanitize to make sure value is a number for value
// Helper used for both controlled + uncontrolled
export const sanitize = (v: any, count: number) => {
    const num = Number(v);
    if (isNaN(num)) return 0;
    if (num < 0) return 0;
    if (num > count) return count;
    return num;
};

export function Rating({
    value,
    defaultValue = 3.5,
    icon: RatingIcon = <StarSVG />,
    size = 20,
    gap = 0,
    count = 5,
    color,
    emptyColor = "gray",
    disabled = false,
    onChange,
}: RatingProps) {
    const isControlled = value !== undefined;
    // const [internalValue, setInternalValue] = useState(defaultValue);
    const [internalValue, setInternalValue] = useState(() =>
        sanitize(defaultValue, count)
    );
    const rating = isControlled ? sanitize(value, count) : internalValue;
    // const rawRating = isControlled ? value! : internalValue;
    // const rating = Math.max(0, Math.min(count, rawRating));

    // Calculating Margin only once and key too - the props for all icons
    const stars = useMemo(
        () =>
            [...Array(count)].map((_, i) => ({
                // i: i,
                marginRight: i === count - 1 ? 0 : gap,
            })),
        [count, gap]
    );

    // Calculating Width
    const totalWidth = size * count + gap * (count - 1);
    const activeWidth = size * rating + gap * Math.floor(rating);

    // Handle Press
    const handlePress = (i: number) => {
        if (disabled) return;

        const newRating = i + 1;
        if (!isControlled) {
            setInternalValue(newRating);
        }

        if (onChange) {
            onChange(newRating);
        }
    };

    // Type Check Solution
    // const baseProps = (RatingIcon.props ?? {}) as Record<string, any>;
    const baseProps = useMemo(
        () => (RatingIcon.props ?? {}) as Record<string, any>,
        [RatingIcon]
    );

    // Clone icon with new color + size
    const EmptyIconMemo = useMemo(() => {
        return React.cloneElement(RatingIcon, {
            ...baseProps,
            size,
            width: size,
            height: size,
            color: emptyColor,
            fill: emptyColor,
            stroke: emptyColor,
        });
    }, [size, emptyColor, RatingIcon]);

    // Active icon with color if given else uses provided color
    // const ActiveIconMemo = useMemo(() => {
    //     const useUserColor = color == null;

    //     return React.cloneElement(RatingIcon, {
    //         ...baseProps,
    //         size,
    //         width: size,
    //         height: size,

    //         ...(useUserColor
    //             ? {
    //                   color: baseProps.color,
    //                   fill: baseProps.fill,
    //                   stroke: baseProps.stroke,
    //               }
    //             : {
    //                   color,
    //                   fill: color,
    //                   stroke: color,
    //               }),
    //     });
    // }, [size, color, RatingIcon]);
    const ActiveIconMemo = useMemo(() => {
        // If Rating.color is given, override icon color
        if (color != null) {
            return React.cloneElement(RatingIcon, {
                ...baseProps,
                size,
                width: size,
                height: size,

                color,
                fill: color,
                stroke: color,
            });
        }

        // ELSE: use icon exactly as user defined it
        return React.cloneElement(RatingIcon, {
            ...baseProps,
            size,
            width: size,
            height: size,
        });
    }, [size, color, RatingIcon]);

    return (
        // Container
        <View style={{ width: totalWidth, height: size }}>
            {/* Gray Icons */}
            <View style={{ flexDirection: "row" }}>
                {stars.map(({ marginRight }, i) => (
                    <View key={i} style={{ marginRight }}>
                        {EmptyIconMemo}
                    </View>
                ))}
            </View>

            {/* Active Icons */}
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    width: activeWidth,
                    height: size,
                }}
            >
                <View style={{ flexDirection: "row" }}>
                    {stars.map(({ marginRight }, i) => (
                        <View key={i} style={{ marginRight }}>
                            {ActiveIconMemo}
                        </View>
                    ))}
                </View>
            </View>

            {/* Pressable Area - More stable than pointer events none and using pressable in gray icon :( */}
            <View
                style={{
                    position: "absolute",
                    height: size,
                    flexDirection: "row",
                }}
            >
                {stars.map(({ marginRight }, i) => (
                    <Pressable
                        key={i}
                        onPress={() => handlePress(i)}
                        style={{ width: size, height: size, marginRight }}
                    />
                ))}
            </View>
        </View>
    );
}
