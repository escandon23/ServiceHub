import { type ReactNode } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

interface PropType {
    style? : {}
    children? : ReactNode,
    onPress? : () => void

}

const Logo: React.FC<PropType> = ({style, children, onPress}) => {
    return (
        <View>
            <Pressable style={styles.container} onPress={onPress}>
                <Image style={style} source={require("@/assets/images/logo.png")} />
                <Text>{children}</Text>
            </Pressable>
         </View>

       
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    }
})