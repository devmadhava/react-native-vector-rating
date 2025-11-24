# react-native-vector-rating

A lightweight, flexible, and high‑performance rating component for **React Native** that works with **any icon library** — Lucide, Expo Vector Icons, custom SVG icons, or your own JSX icons.

Zero dependencies. No MaskedView. No SVG requirement. Just clean, fast rendering using a View‑based clipping technique.

---

## ✨ Features

* ⭐ **Use ANY icon** (`<Icon />` JSX element)
* 🎨 **Custom colors** (`color`, `emptyColor`)
* 🎛️ **Controlled + Uncontrolled** modes
* 🎚️ **Partial ratings supported** (e.g., 3.4 → partially filled)
* 🧩 **Gap/spacing** between icons
* 🔢 **Custom count** (e.g., 4‑star or 10‑star systems)
* 📦 **Minimal bundle size**
* 📱 Works with **React Native 0.77+** and Expo

---

## 📦 Installation

```bash
npm install react-native-vector-rating
# or
yarn add react-native-vector-rating
```

No extra peer dependencies. No linking needed.

---

## 🚀 Usage

## Preview
![Screenshot](https://raw.githubusercontent.com/devmadhava/react-native-vector-rating/refs/heads/main/example/screenshot.png)

### Basic Example

```tsx
import { Rating } from "react-native-vector-rating";
import { Star } from "lucide-react-native";

export default function MyComponent() {
  return (
    <Rating
      icon={<Star />}
      defaultValue={3.5}
      size={30}
    />
  );
}
```

---

## 🎛️ Props

| Prop           | Type                   | Default       | Description                  |
| -------------- | ---------------------- | ------------- | ---------------------------- |
| `value`        | `number`               | —             | Controlled rating value      |
| `defaultValue` | `number`               | `3.5`         | Initial value (uncontrolled) |
| `icon`         | `JSX.Element`          | Fallback Star | Icon element to render       |
| `size`         | `number`               | `20`          | Icon size (width & height)   |
| `gap`          | `number`               | `0`           | Space between icons          |
| `count`        | `number`               | `5`           | Total number of icons        |
| `color`        | `string`               | `undefined`   | Active icon color override   |
| `emptyColor`   | `string`               | `"gray"`      | Inactive icon color          |
| `disabled`     | `boolean`              | `false`       | Disables user interaction    |
| `onChange`     | `(value:number)=>void` | —             | Callback when rating changes |

---

## 🔄 Controlled Example

```tsx
const [rating, setRating] = useState(2);

<Rating
  value={rating}
  onChange={setRating}
  icon={<Star />}
  size={40}
/>;
```

---

## 🎨 Uncontrolled Example

```tsx
<Rating
  defaultValue={4}
  icon={<Star color="purple" />}
  color="gold"
  size={35}
/>;
```

---

## ⭐ Examples with Popular Icon Libraries

### Expo Vector Icons

```tsx
import { AntDesign } from "@expo/vector-icons";

<Rating
  icon={<AntDesign name="star" />}
  size={30}
/>;
```

### Lucide Icons

```tsx
import { MoonStar } from "lucide-react-native";

<Rating
  icon={<MoonStar />}
  size={35}
  color="blue"
  gap={2}
/>;
```

### Custom Styled Icons

```tsx
import { Award } from "lucide-react-native";

<Rating
  icon={<Award color="black" fill="#ff4500" />}
  size={45}
  count={6}
/>;
```

---

## 🧠 How It Works

This component renders:

* A row of **empty icons**
* A row of **filled icons** positioned above it
* A clipping container (`overflow: hidden`) that exposes only the portion matching the rating value

This avoids MaskedView, clipPath, or platform‑specific APIs.

Fast, stable, cross‑platform.

---

## 🛡️ Input Sanitization

Ratings are sanitized to:

* Always be a number
* Always be between `0` and `count`
* Never be `NaN`, `null`, or invalid

This ensures bulletproof stability.

---

## 🪄 Advanced Example Showcase

```tsx
<Rating size={25} icon={<AntDesign name="star" />} />
<Rating size={30} color="gold" icon={<Star />} />
<Rating size={35} color="skyblue" gap={2} icon={<Ionicons name="happy" />} />
<Rating size={40} color="blue" gap={2} count={4} icon={<MoonStar />} />
<Rating size={45} color="red" gap={2} count={4} emptyColor="black" icon={<MaterialCommunityIcons name="heart" />} />
<Rating size={50} gap={2} count={6} icon={<Award color="black" fill="#ff4500" />} />
<Rating size={55} gap={2} count={4} emptyColor="black" icon={<FontAwesome name="thumbs-up" color="red" />} onChange={(v) => console.log(v)} />
```

---

## 📄 License

MIT © devMadhava
