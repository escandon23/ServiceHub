import AppleIcon from "@/assets/images/apple-icon.svg"
import GoogleIcon from "@/assets/images/google-icon.svg"
import { useRouter } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Colors from "../../constants/Colors"
import { thisYear } from "../../utils/date"
import CustomButton from "./components/ui/CustomButton"
import CustomIcon from "./components/ui/CustomIcon"
import Logo from "./components/ui/Logo"




export default function Login(){

    const [password, setPassword] = useState("")

    const presentYear = thisYear()


    const router = useRouter()

    const handleChange = (enteredText : string) => {
        setPassword(enteredText)
    }

    const googleLogin = () => {
        return;
    }

    const appleLogin = () => {
        return;
    }
    const forgotPassword = () => {
        return
    }

    const logoHandler = () => {
        router.push("/")
    }

     const loginHandler= () => {
        router.push("/login")
    }
    const signupHandler = () => {
        router.push("/signup")
    }


    return (
        <SafeAreaView style={styles.background}>
            <View>
                <View style={styles.logoContainer}><Logo onPress={logoHandler} style={styles.logo}/><Text style={styles.logoText}>Welcome Back</Text></View>
                <View style={styles.inputContainer}>
                    <Text>email or username</Text>
                    <TextInput style={styles.input} keyboardType="email-address" placeholder="enter email address"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Password</Text>
                    <TextInput placeholder="enter password" onChangeText={handleChange} style={styles.input} value={password} autoCorrect={false} autoCapitalize="none" />
                </View>
            
                <CustomButton buttonText={styles.signUpText} buttonContainer={styles.signUpContainer} onPress={loginHandler}>Login</CustomButton>

                <CustomButton buttonContainer={styles.forgotPassword} buttonText={styles.forgotPasswordText} onPress={forgotPassword}>Forgot Password?</CustomButton>
                <CustomIcon iconContainer={styles.signUpContainer}><GoogleIcon height={20} width={20}/><Text> Continue with Apple</Text></CustomIcon>
                <CustomIcon iconContainer={styles.signUpContainer}><AppleIcon height={20} width={20}/><Text>Continue With Google</Text></CustomIcon>
                <View style={styles.signUpContainer2}><Text>Don't have an account?</Text><CustomButton buttonContainer={styles.signupButton} buttonText={styles.signupText} onPress={signupHandler}>Sign Up </CustomButton></View>

                <Text style={styles.footer}>ServiceHub &copy; {presentYear}</Text>
            </View>

           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     background: {
        flex: 1,
        padding: 20,
        paddingVertical: 100

    },
  
    logoContainer: {
        alignItems: "center",
        marginBottom: 50
    },
    logo: {
        height: 50,
        width: 50,
    },
    logoText: {
        fontSize: 24,
        fontStyle: "italic"
    },
    inputContainer: {
        flexDirection: "column",
        gap: 10
    },
    input: {
    
        borderWidth: 0.2,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10
    },
    forgotPassword : {
        backgroundColor: "transparent",
    },
    forgotPasswordText: {
        color: Colors.primary,
        textAlign: "center"
    },
    signUpContainer: {
         backgroundColor: Colors.successLight,
        borderRadius: 8,
        padding: 10,
        borderWidth: 0.5,
        marginBottom: 10,

    },
    signUpText: {
        color: Colors.textDark,
        textAlign: "center",
      
    },
    signUpContainer2: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"

    },
    signupButton: {
        backgroundColor: "transparent"
    },
    signupText: {
        color: Colors.primary
    },
    footer: {
        marginVertical: 100,
        textAlign: "center"
    }
})