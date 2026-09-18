import CustomButton from "@/app/components/ui/CustomButton"
import { useRouter } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/Colors"
import Logo from "./components/ui/Logo"


const Index = () => {

    const router = useRouter()

    const getStartedHandler = () => {
        router.push("/get-started")
    }
    const loginHandler = () => {
        return 
    }

    return (
            <View style={styles.container}>
                <Logo style={styles.logo} />
               <Text style={styles.brandInfo}>Find trusted professionals for the services you need, whenever you need them.</Text>
                <CustomButton  onPress={getStartedHandler}>Get Started</CustomButton>
                <View style={styles.loginContainer}>
                  <Text>Already have an account?</Text>
                  <CustomButton buttonContainer={styles.login} buttonText={styles.loginText} onPress={loginHandler}> Sign In</CustomButton>
                </View>
            </View>
           
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background
    },
    brandInfo: {
                textAlign: "center",

    },
    logo: {
        height: 300,
        width: 300
    },
     loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    login: {
      backgroundColor: "transparent",
      paddingHorizontal: 0
    },
   
    loginText: {
        color: Colors.primaryLight,
        textDecorationLine: "underline",
    }
 
})