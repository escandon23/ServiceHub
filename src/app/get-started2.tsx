import VerifiedPreview from "@/assets/VerifiedPreview.svg"
import { useNavigation, useRouter } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Colors from "../../constants/Colors"
import CustomButton from "./components/ui/CustomButton"
import CustomIcon from "./components/ui/CustomIcon"
import OnboardingDots from "./components/ui/onboarding/OnboardingDots"


const GetStarted2 = () => {

    const navigation = useNavigation()

    const router = useRouter()

    const nextHandler = () => {
        return
    }
    const skipHandler = () => {
        return
    }
    

    return (
        <>
            <View style={styles.background}>
                <VerifiedPreview height="100%" width="100%"/>
            </View>
            <SafeAreaView style={styles.screen}> 
                <View>
                    <CustomButton buttonContainer={styles.buttonContainer} buttonText={styles.buttonText} onPress={skipHandler}>Skip</CustomButton> 
                </View>
                <View style={styles.container}>
                     <Text style={styles.title}>Choose Vetted and Rated Professionsals</Text>
                     <Text style={styles.subheading}>Browse authentic customer ratings, real before and after work portfolios, transparent fixed pricing , and verified background credentials</Text>
                <View style={styles.onboarding}>
                    <OnboardingDots  currentIndex={1}/>
                    <CustomIcon onPress={nextHandler} name="arrow-forward-circle" size={36} color={Colors.primaryDark}/>
                </View>

                </View>
               

            </SafeAreaView>
            
       
        </>
    )
}

export default GetStarted2

const styles = StyleSheet.create({

    background: {
        position: "absolute",
        top: 0,
        left:0,
        right: 0,
        bottom: 200
    },
    screen: {
        flex: 1,
    },
     logo: {
        height: 50,
        width: 50
    },
    buttonContainer: {
        backgroundColor: "transparent",
        alignSelf: "flex-end"
    },
    buttonText: {
        color: Colors.primaryDark
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 50,
    },
     title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 40
    },
      subheading: {
        textAlign: "center",
        fontSize: 14
    },
    onboarding: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 50
    }
})