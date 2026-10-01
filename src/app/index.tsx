import CustomButton from "@/app/components/ui/CustomButton";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Logo from "./components/ui/Logo";


const Index = () => {

    const router = useRouter()

    const getStartedHandler = () => {
        router.push("/get-started1")
    }
    const loginHandler = () => {
        router.push("/login")
    }

    return (
            <View style={styles.container}>
                <Logo style={styles.logo} />
               <LottieView source={require("@/assets/images/Thinking.json")} loop autoPlay style={{ width: 300, height: 300 }} />
                <CustomButton  onPress={getStartedHandler}> Get Started</CustomButton>
                <View style={styles.loginContainer}>
                  <Text>Already have an account?</Text>
                  <CustomButton  buttonContainer={styles.login} buttonText={styles.loginText} onPress={loginHandler}> Sign In </CustomButton>
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
        backgroundColor: "white"
    },
    brandInfo: {
       textAlign: "center",
    },
    logo: {
        height: 100,
        width: 100
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
        color: Colors.primary,
        textDecorationLine: "underline",
    }
 
})