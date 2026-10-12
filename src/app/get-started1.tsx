import LocationPreview from "@/assets/LocationPreview.svg"
import { useRouter } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Colors from "../../constants/Colors"
import CustomButton from "./components/ui/CustomButton"
import CustomIcon from "./components/ui/CustomIcon"
import OnboardingDots from "./components/ui/onboarding/OnboardingDots"


const GetStarted1 = () => {
        
    const router = useRouter()

    const nextHandler = () => {
        router.replace("/get-started2")
    }

    const skipHandler = () => {
        return
    }

    return(
        <>
            <View pointerEvents="none" style={styles.background}>
                <LocationPreview width="100%" height="100%" />
            </View>
            <SafeAreaView style={styles.screen}>
                <View>
                    <CustomButton buttonContainer={styles.buttonContainer} buttonText={styles.buttonText} onPress={skipHandler}>Skip</CustomButton> 
                </View>

                <View style={styles.container}>
                    <View>
                        <View>
                            <Text style={styles.title}>Discover Nearby Services</Text>
                            <Text style={styles.subheading}>Find Vetted local artisans, cleaners, plumbers, and technicians ready to assist within miutes right in your neighbourhood.</Text>
                        </View>
                        <View style={styles.onboarding}>
                            <OnboardingDots currentIndex={0}/>
                            <CustomIcon onPress={nextHandler} name="arrow-forward-circle" size={36} color={Colors.primaryDark}/>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
          
        </>

        
    )
}

export default GetStarted1


const styles = StyleSheet.create({
 
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right:0,
        bottom:200,
      
    },
    screen: {
        flex: 1,
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