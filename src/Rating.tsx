// import MaskedView from "@react-native-masked-view/masked-view";
// import React, { useEffect, useState } from "react";
// import { Pressable, View } from "react-native";
import React, { useMemo, useState } from "react";
import { Pressable, View } from "react-native";
import Svg, { Path } from "react-native-svg";

// type RatingProps = {
//     ratings?: number;
//     count?: number;
//     size?: number;
//     gap?: number;
//     disabled?: boolean;
//     // icon?: React.ComponentType<any>;
//     icon?: any;
//     iconName?: string;
//     color?: string;
//     backgroundColor?: string;
//     onChange?: (value: number) => void;
//     value?: number,
//     defaultValue?: number;
//     emptyColor?: string;
// };

// export type RatingProps = {
//     value?: number;
//     defaultValue?: number;
//     icon?: any;
//     iconName?: string;
//     size?: number;
//     gap?: number;
//     count?: number;
//     color?: string;
//     emptyColor?: string;
//     disabled?: boolean;
//     onChange?: (value: number) => void;
// };

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

const StarSVG = ({ size = 20, color = "gold" }: StarSVGProps) => (
    <Svg width={size} height={size} viewBox="0 0 100 100">
        <Path
            fill={color}
            d="m50 10 11 25h37L68 57l11 34-29-21-29 21 11-34L2 35h37z"
        />
    </Svg>
);

// export default function Rating({
//     ratings = 3.5,
//     size = 20,
//     gap = 0,
//     count = 5,
//     disabled = false,
//     icon: RatingIcon,
//     iconName,
//     color = "gold",
//     backgroundColor = "gray",
//     onChange,
// }: RatingProps) {
//     const [userRating, setUserRating] = useState(ratings);

//     const IconElem = (props: any) =>
//         iconName ? (
//             <RatingIcon name={iconName} {...props} />
//         ) : (
//             <RatingIcon {...props} />
//         );

//     useEffect(() => setUserRating(ratings), [ratings]);

//     const handlePress = (index: number) => {
//         if (disabled) return;
//         const value = index + 1;
//         setUserRating(value);
//         onChange?.(value);
//     };

//     const stars = [...Array(count)].map((_, i) => ({
//         key: i,
//         marginRight: i === count - 1 ? 0 : gap,
//     }));

//     const filledWidth = size * userRating + gap * Math.floor(userRating);

//     const totalWidth = size * count + gap * (count - 1);

//     return (
//         <View style={{ width: totalWidth, height: size }}>
//             {/* Empty base row (with touch) */}
//             <View style={{ flexDirection: "row" }}>
//                 {stars.map(({ key, marginRight }) => (
//                     <View key={key} style={{ marginRight }}>
//                         <IconElem size={size} color={backgroundColor} />
//                     </View>
//                 ))}
//             </View>

//             {/* Filled overlay row */}
//             <View
//                 style={{
//                     position: "absolute",
//                     overflow: "hidden",
//                     width: filledWidth,
//                     height: size,
//                     flexDirection: "row",
//                 }}
//             >
//                 {stars.map(({ key, marginRight }) => (
//                     <View key={key} style={{ marginRight }}>
//                         <IconElem size={size} color={color} />
//                     </View>
//                 ))}
//             </View>

//             {/* Press overlay */}
//             <View
//                 style={{
//                     position: "absolute",
//                     flexDirection: "row",
//                     height: size,
//                 }}
//             >
//                 {stars.map(({ key, marginRight }) => (
//                     <Pressable
//                         key={key}
//                         style={{
//                             width: size,
//                             marginRight,
//                             height: size,
//                         }}
//                         onPress={() => handlePress(key)}
//                     />
//                 ))}
//             </View>
//         </View>
//     );
// }

// export function Ratingsed({
//     icon: RatingIcon = StarSVG,
//     iconName,
//     size = 20,
//     gap = 0,
//     count = 5,
//     color = "gold",
//     backgroundColor = "gray",
//     defaultValue = 3.4,
//     disabled = false,
//     onChange,
// }: RatingProps) {
//     const [userRating, setUserRating] = useState(defaultValue);

//     const IconElement = (props: any) =>
//         iconName ? (
//             <RatingIcon name={iconName} {...props} />
//         ) : (
//             <RatingIcon {...props} />
//         );

//     // Height and Width
//     const filledWidth = size * userRating + gap * Math.floor(userRating);
//     const totalWidth = size * count + gap * (count - 1);

//     const handlePress = (index: number) => {
//         if (disabled) return;
//         const value = index + 1;
//         setUserRating(value);

//         if (onChange) {
//             onChange(value);
//         }
//     };

//     // Actual Element
//     return (
//         <View style={{ width: totalWidth, height: size }}>
//             <View style={{ flexDirection: "row" }}>
//                 {[...Array(count)].map((_, i) => {
//                     const isLastElement = i === count - 1;
//                     return (
//                         <Pressable
//                             onPress={() => handlePress(i)}
//                             key={i}
//                             style={{ marginRight: isLastElement ? 0 : gap }}
//                         >
//                             <IconElement size={size} color={backgroundColor} />
//                         </Pressable>
//                     );
//                 })}
//             </View>

//             {/* Filled / Active */}
//             <View
//                 pointerEvents="none"
//                 style={{
//                     position: "absolute",
//                     overflow: "hidden",
//                     width: filledWidth,
//                     height: size,
//                     flexDirection: "row",
//                 }}
//             >
//                 {[...Array(count)].map((_, i) => {
//                     const isLastElement = i === count - 1;
//                     return (
//                         <View
//                             pointerEvents="none"
//                             key={i}
//                             style={{ marginRight: isLastElement ? 0 : gap }}
//                         >
//                             <IconElement size={size} color={color} />
//                         </View>
//                     );
//                 })}
//             </View>
//         </View>
//     );
// }

// ----------------------------------------------------------

// Actual USed Versions
// export function Rating({
//     value,
//     defaultValue = 3.5,
//     icon : RatingIcon = StarSVG,
//     iconName,
//     size = 20,
//     gap = 0,
//     count = 5,
//     color = 'gold',
//     emptyColor = 'gray',
//     disabled = false,
//     onChange
// } : RatingProps) {
//     const isControlled = value !== undefined;
//     const [internalValue, setInternalValue] = useState(defaultValue);
//     const rating = isControlled ? value! : internalValue;

//     // Icon Element that we will be drawn - Expo Icons require iconName :(
//     const IconElement = ({...props}) => iconName ? (
//         <RatingIcon {...props} name={iconName}/>
//     ) : (
//         <RatingIcon {...props}/>
//     );

//     // Calculating Margin only once and key too - the props for all icons
//     const stars = useMemo(() => (
//         [...Array(count)].map((_, i) => ({
//             // i: i,
//             marginRight: i === count - 1 ? 0 : gap
//         }))
//     ), [count, gap]);

//     // Calculating Width
//     const totalWidth = size * count + gap * (count - 1);
//     const activeWidth = size * rating + gap * Math.floor(rating);

//     // Handle Press
//     const handlePress = (i: number) => {
//         if (disabled) return;

//         const newRating = i + 1;
//         if (!isControlled) {
//             setInternalValue(newRating);
//         }

//         if (onChange) {
//             onChange(newRating);
//         }
//     };

//     return (
//         // Container
//         <View style={{width: totalWidth, height: size}}>
//             {/* Gray Icons */}
//             <View style={{flexDirection: 'row'}}>
//                 {stars.map(({marginRight}, i) => (
//                     <Pressable onPress={() => handlePress(i)} key={i} style={{marginRight}}>
//                         <IconElement size={size} color={emptyColor} />
//                     </Pressable>
//                 ))}
//             </View>

//             {/* Active Icons */}
//             <View
//                 pointerEvents="none"
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     overflow: 'hidden',
//                     width: activeWidth,
//                     height: size,
//                 }}
//             >
//                 <View style={{flexDirection: 'row'}}>
//                     {stars.map(({marginRight}, i) => (
//                         <View key={i} style={{marginRight}}>
//                             <IconElement size={size} color={color} />
//                         </View>
//                     ))}
//                 </View>
//             </View>
//         </View>
//     )
// }


// Component
// export function Rating({
//     value,
//     defaultValue = 3.5,
//     icon: RatingIcon = StarSVG,
//     iconName,
//     size = 20,
//     gap = 0,
//     count = 5,
//     color = "gold",
//     emptyColor = "gray",
//     disabled = false,
//     onChange,
// }: RatingProps) {
//     const isControlled = value !== undefined;
//     const [internalValue, setInternalValue] = useState(defaultValue);
//     const rating = isControlled ? value! : internalValue;

//     // Icon Element that we will be drawn - Expo Icons require iconName :(
//     const IconElement = ({ ...props }) =>
//         iconName ? (
//             <RatingIcon {...props} name={iconName} />
//         ) : (
//             <RatingIcon {...props} />
//         );

//     // Calculating Margin only once and key too - the props for all icons
//     const stars = useMemo(
//         () =>
//             [...Array(count)].map((_, i) => ({
//                 // i: i,
//                 marginRight: i === count - 1 ? 0 : gap,
//             })),
//         [count, gap]
//     );

//     // Calculating Width
//     const totalWidth = size * count + gap * (count - 1);
//     const activeWidth = size * rating + gap * Math.floor(rating);

//     // Handle Press
//     const handlePress = (i: number) => {
//         if (disabled) return;

//         const newRating = i + 1;
//         if (!isControlled) {
//             setInternalValue(newRating);
//         }

//         if (onChange) {
//             onChange(newRating);
//         }
//     };

//     return (
//         // Container
//         <View style={{ width: totalWidth, height: size }}>
//             {/* Gray Icons */}
//             <View style={{ flexDirection: "row" }}>
//                 {stars.map(({ marginRight }, i) => (
//                     <View key={i} style={{ marginRight }}>
//                         <IconElement size={size} color={emptyColor} />
//                     </View>
//                 ))}
//             </View>

//             {/* Active Icons */}
//             <View
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     overflow: "hidden",
//                     width: activeWidth,
//                     height: size,
//                 }}
//             >
//                 <View style={{ flexDirection: "row" }}>
//                     {stars.map(({ marginRight }, i) => (
//                         <View key={i} style={{ marginRight }}>
//                             <IconElement size={size} color={color} />
//                         </View>
//                     ))}
//                 </View>
//             </View>

//             {/* Pressable Area - More stable than pointer events none and using pressable in gray icon :( */}
//             <View
//                 style={{
//                     position: "absolute",
//                     height: size,
//                     flexDirection: "row",
//                 }}
//             >
//                 {stars.map(({ marginRight }, i) => (
//                     <Pressable
//                         key={i}
//                         onPress={() => handlePress(i)}
//                         style={{ width: size, height: size, marginRight }}
//                     />
//                 ))}
//             </View>
//         </View>
//     );
// }

// Instance Rating
// Like Tamagui
// export function Rating({
//     value,
//     defaultValue = 3.5,
//     icon: RatingIcon = <StarSVG />,
//     size = 20,
//     gap = 0,
//     count = 5,
//     color = "gold",
//     emptyColor = "gray",
//     disabled = false,
//     onChange,
// }: RatingProps) {
//     const isControlled = value !== undefined;
//     const [internalValue, setInternalValue] = useState(defaultValue);
//     const rating = isControlled ? value! : internalValue;

//     // Calculating Margin only once and key too - the props for all icons
//     const stars = useMemo(
//         () =>
//             [...Array(count)].map((_, i) => ({
//                 // i: i,
//                 marginRight: i === count - 1 ? 0 : gap,
//             })),
//         [count, gap]
//     );

//     // Calculating Width
//     const totalWidth = size * count + gap * (count - 1);
//     const activeWidth = size * rating + gap * Math.floor(rating);

//     // Handle Press
//     const handlePress = (i: number) => {
//         if (disabled) return;

//         const newRating = i + 1;
//         if (!isControlled) {
//             setInternalValue(newRating);
//         }

//         if (onChange) {
//             onChange(newRating);
//         }
//     };

//     // Clone icon with new color + size
//     const renderEmptyIcon = () => {
//         return React.cloneElement(RatingIcon, {
//             // Keep ALL user props:
//             ...RatingIcon.props,

//             // Overriding size for layout
//             size,
//             width: size,
//             height: size,

//             // Overriding colors to gray
//             color: emptyColor,
//             fill: emptyColor,
//             stroke: emptyColor,
//         });
//     };

//     const renderActiveIcon = () => {
//         return React.cloneElement(RatingIcon, {
//             // Keep ALL user props:
//             ...RatingIcon.props,

//             // Overriding size for layout
//             size,
//             width: size,
//             height: size,
//         });
//     };

//     return (
//         // Container
//         <View style={{ width: totalWidth, height: size }}>
//             {/* Gray Icons */}
//             <View style={{ flexDirection: "row" }}>
//                 {stars.map(({ marginRight }, i) => (
//                     <View key={i} style={{ marginRight }}>
//                         {renderEmptyIcon()}
//                     </View>
//                 ))}
//             </View>

//             {/* Active Icons */}
//             <View
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     overflow: "hidden",
//                     width: activeWidth,
//                     height: size,
//                 }}
//             >
//                 <View style={{ flexDirection: "row" }}>
//                     {stars.map(({ marginRight }, i) => (
//                         <View key={i} style={{ marginRight }}>
//                             {renderActiveIcon()}
//                         </View>
//                     ))}
//                 </View>
//             </View>

//             {/* Pressable Area - More stable than pointer events none and using pressable in gray icon :( */}
//             <View
//                 style={{
//                     position: "absolute",
//                     height: size,
//                     flexDirection: "row",
//                 }}
//             >
//                 {stars.map(({ marginRight }, i) => (
//                     <Pressable
//                         key={i}
//                         onPress={() => handlePress(i)}
//                         style={{ width: size, height: size, marginRight }}
//                     />
//                 ))}
//             </View>
//         </View>
//     );
// }

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
    const [internalValue, setInternalValue] = useState(defaultValue);
    const rating = isControlled ? value! : internalValue;

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

    // Clone icon with new color + size
    const EmptyIconMemo = useMemo(() => {
        return React.cloneElement(RatingIcon, {
            ...RatingIcon.props,
            size,
            width: size,
            height: size,
            color: emptyColor,
            fill: emptyColor,
            stroke: emptyColor,
        });
    }, [size, emptyColor, RatingIcon]);

    // Active icon with color if given else uses provided color
    const ActiveIconMemo = useMemo(() => {
        const useUserColor = color === null || color === undefined;

        return React.cloneElement(RatingIcon, {
            ...RatingIcon.props,
            size,
            width: size,
            height: size,

            ...(useUserColor
                ? {
                      color: RatingIcon.props.color,
                      fill: RatingIcon.props.fill,
                      stroke: RatingIcon.props.stroke,
                  }
                : {
                      color,
                      fill: color,
                      stroke: color,
                  }),
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
