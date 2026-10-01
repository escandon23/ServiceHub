import { useNavigation, useRouter } from "expo-router"
import { useLayoutEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/Colors"
import CustomButton from "./components/ui/CustomButton"
import Logo from "./components/ui/Logo"


const GetStarted1 = () => {

    const navigation = useNavigation()

    const router = useRouter()

    const logoHandler = () => {
        router.back()
    }


    const skipHandler = () => {
        return
    }

    const nextHandler = () => {
        return
    }

     useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft : () => <Logo onPress={logoHandler} style={styles.logo}>ServiceHub</Logo>,
            headerRight:
             () =>  <CustomButton buttonText={styles.skipText} buttonContainer={styles.skipContainer} onPress={skipHandler}>Skip</CustomButton>,
            headerBackVisible: false,
            headerTitle: ""
        })
    }, [navigation])

 
   

    return(
        <View>
            <Text>Discover Nearby Services</Text>
            <Text>Find Vetted local artisans, cleaners, plumbers, 
                and technicians ready to assist within miutes right in your neighbourhood.
            </Text>
            <CustomButton buttonContainer={styles.nextContainer} onPress={nextHandler}>Next</CustomButton>
        </View>
    )
}

export default GetStarted1


const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50
    },
 
    skipContainer: {
        backgroundColor: "transparent",
        padding: 0,
        paddingHorizontal: 0

    },
    skipText: {
        color: Colors.primaryDark
    },
    nextContainer: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    
    }
})