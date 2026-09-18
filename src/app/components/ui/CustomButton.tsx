import { ReactNode } from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import Colors from "../../../../constants/Colors"

interface PropsType {
    onPress: () => void
    buttonContainer?: {}
    buttonText? : {}
    children: ReactNode
}

const CustomButton: React.FC<PropsType> = ({ children, onPress, buttonContainer, buttonText }) => {
    return (
        <Pressable style={[styles.buttonContainer, buttonContainer]} onPress={onPress}>
            <Text style={[styles.buttonText, buttonText]}>{children}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer : {
         backgroundColor: Colors.primary,
         borderRadius : 8,
         padding: 10,
         paddingHorizontal: 20

    },
    buttonText: {
        color: Colors.textWhite
    }

})