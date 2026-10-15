import type { ReactNode } from "react"
import { Pressable, StyleSheet } from "react-native"



interface propsType {
    children? : ReactNode,
    iconContainer?: {},
    onPress? : () => void

}
const CustomIcon: React.FC<propsType> = ({onPress, children, iconContainer}) => {
    return (
        <Pressable onPress={onPress} style={[styles.iconContainer, iconContainer]}>
           {children}
        </Pressable>
    )
}
export default CustomIcon

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection:"row",
        justifyContent: "center",
        alignItems:"center",
        gap: 10
    }
})