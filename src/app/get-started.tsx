import { useNavigation, useRouter } from "expo-router"
import { useLayoutEffect } from "react"
import { StyleSheet, Text } from "react-native"
import Logo from "./components/ui/Logo"


const GetStarted = () => {

    const navigation = useNavigation()

    const router = useRouter()

     useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft : () => <Logo onPress={logoHandler} style={styles.logo}>ServiceHub</Logo>,
            headerRight: () => <Text>Skip</Text>,
            headerBackVisible: false,
            headerTitle: "",
            animation: "none"
        })
    }, [navigation])

    const logoHandler = () => {
        router.back()
    }

   

    return(
        <></>
    )
}

export default GetStarted


const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50
    }
})