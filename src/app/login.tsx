import { useNavigation, useRouter } from "expo-router"
import { Button, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Colors from "../../constants/Colors"




export default function Login(){

    const navigation = useNavigation()

    const router = useRouter()

    
    const registerHandler = () => {
        return
    }


    return (
        <SafeAreaView style={styles.background}>
             <Text>This is the login page</Text>
             <Button onPress={registerHandler} title="Register" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     background: {
        flex: 1,
        backgroundColor: Colors.background

    },
})