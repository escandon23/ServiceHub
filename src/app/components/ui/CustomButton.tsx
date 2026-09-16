import { ReactNode } from "react"
import { Pressable, Text } from "react-native"

interface Props {
    onPress: () => void
    children: ReactNode
}

const CustomButton: React.FC<Props> = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Text>{children}</Text>
        </Pressable>
    )
}

export default CustomButton