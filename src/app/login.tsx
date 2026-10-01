import { useNavigation, useRouter } from "expo-router"
import { useLayoutEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import Logo from "./components/ui/Logo"




export default function Login(){

    const navigation = useNavigation()

    const router = useRouter()
    
    const logoHandler = () => {
        router.back()
    }
    

     useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft : () => <Logo onPress={logoHandler} style={styles.logo}>ServiceHub</Logo>,
            headerBackVisible: false,
            headerTitle: ""
        })
     }
     , [navigation])


    return (
        <View>
             <Text>This is the login page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     logo: {
        height: 50,
        width: 50
    },
})