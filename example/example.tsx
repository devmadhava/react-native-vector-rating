import {
    AntDesign,
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Award, MoonStar, SquareStar, Star } from "lucide-react-native";

import { useState } from "react";
import { View } from "react-native";
import { Rating } from "react-native-vector-rating";

export default function Index() {
    const [controlledValue, setControlledValue] = useState(2);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={{ gap: 25, alignItems: "center" }}>
                {/* 1. Fallback Rating (built-in star view) */}
                <Rating />

                {/* 2. Expo Icon (simple use) */}
                <Rating size={25} icon={<AntDesign name="star" />} />

                {/* 3. Lucide Icon (color + size) */}
                <Rating size={30} color="gold" icon={<Star />} />

                {/* 4. Expo Icon (custom gap + color) */}
                <Rating
                    size={35}
                    gap={2}
                    color="skyblue"
                    icon={<Ionicons name="happy" />}
                />

                {/* 5. Lucide Icon (4-count rating) */}
                <Rating
                    size={40}
                    gap={2}
                    color="blue"
                    count={4}
                    icon={<MoonStar />}
                />

                {/* 6. Expo Icon (custom empty color) */}
                <Rating
                    size={45}
                    gap={2}
                    count={4}
                    color="red"
                    emptyColor="black"
                    icon={<MaterialCommunityIcons name="heart" />}
                />

                {/* 7. Lucide Icon (custom styled icon = stroke + fill) */}
                <Rating
                    size={50}
                    gap={2}
                    count={6}
                    icon={<Award color="black" fill="#ff4500" />}
                />

                {/* 8. Expo Icon (uncontrolled onChange) */}
                <Rating
                    size={55}
                    gap={2}
                    count={4}
                    emptyColor="black"
                    icon={<FontAwesome name="thumbs-up" color="red" />}
                    onChange={(v) => console.log("Uncontrolled:", v)}
                />

                {/* 9. Fully Controlled Rating */}
                <Rating
                    size={60}
                    gap={2}
                    count={3}
                    emptyColor="black"
                    icon={<SquareStar stroke="gold" />}
                    value={controlledValue}
                    onChange={(v) => {
                        console.log("Controlled:", v);
                        setControlledValue(v);
                    }}
                />
            </View>
        </View>
    );
}