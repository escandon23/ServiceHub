import { type ReactNode } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import Colors from "../../../../constants/Colors"

interface PropType {
    style? : {},
    children? : ReactNode,
    onPress? : () => void

}

const Logo: React.FC<PropType> = ({style, children, onPress}) => {
    return (
        <View>
            <Pressable style={styles.container} onPress={onPress}>
                <Image style={style} source={require("@/assets/images/logo.png")} />
                <Text style={styles.text}>{children}</Text>
            </Pressable>
         </View>

       
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        marginVertical: 15
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.primaryDark
    }
})