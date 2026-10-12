import { Ionicons } from "@expo/vector-icons"
import type { ComponentProps } from "react"
import { Pressable } from "react-native"


interface propsType {
    name: ComponentProps<typeof Ionicons>["name"],
    size: number,
    color: string,
    onPress? : () => void

}

const CustomIcon: React.FC<propsType> = ({name , size, color, onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    )

}

export default CustomIcon