import { AntDesign, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Award, MoonStar, SquareStar, Star } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";
import { Rating } from "react-native-vector-rating";

export default function Index() {
    const [controlledRating, setControlledRating] = useState(1.5);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={{gap: 25, alignItems: 'center'}}>

                {/* Fall Back Rating (Made Using View) */}
                <Rating />

                {/* Expo Icon - With Size */}
                <Rating size={25} icon={<AntDesign name="star" />} />

                {/* Lucide Icon - With Size and Color */}
                <Rating size={30} color="gold" icon={<Star />} />

                {/* Expo Icon - With Size, Color and Gap*/}
                <Rating size={35} color="skyblue" gap={2} icon={<Ionicons name="happy" />} />

                {/* Lucide Icon - With Size, Color, Gap and Count */}
                <Rating size={40} color="blue" gap={2} count={4} icon={<MoonStar />} />

                {/* Expo Icon - With Size, Color, Gap, Count and Empty Color */}
                <Rating
                    size={45}
                    color="red"
                    gap={2}
                    count={4}
                    emptyColor="black"
                    icon={<MaterialCommunityIcons name="heart"/>}
                />

                {/* Lucide Icon - With Size, Gap, Count, Empty Color and Icon Styling */}
                <Rating
                    size={50}
                    gap={2}
                    count={6}
                    icon={<Award color={"black"} fill={"#ff4500"} />}
                />

                {/* Expo Icon - With Size, Gap, Count, Empty Color, Icon Styling, defaultValue and onChange */}
                <Rating
                    size={55}
                    gap={2}
                    count={4}
                    emptyColor="black"
                    icon={<FontAwesome name="thumbs-up" color={"red"} />}
                    defaultValue={2.7}
                    onChange={(v) => {
                        console.log("Logging New Ratings from Uncontrolled Component: ", v);
                    }}
                />

                {/* Lucide Icon - Controlled - With Size, Gap, Count, Empty Color, Icon Styling and onChange */}
                <Rating
                    size={60}
                    gap={2}
                    count={3}
                    emptyColor="black"
                    icon={<SquareStar stroke={"gold"} />}
                    value={controlledRating}
                    onChange={(v) => {
                        console.log("Logging New Ratings from Controlled Component: ", v);
                        setControlledRating(v);
                    }}
                />

                {/* Expo Icon - Disabled - With Size, Gap, Count, Empty Color and Icon Styling */}
                <Rating
                    size={65}
                    gap={2}
                    count={3}
                    value={1.2}
                    emptyColor="black"
                    icon={<Foundation name="sheriff-badge" color={"red"} />}
                    disabled={true}
                />
            </View>
        </View>
    );
}