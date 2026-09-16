import CustomButton from "@/app/components/ui/CustomButton"
import { useRouter } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"



const Index = () => {

      const router = useRouter()



    const getStartedHandler = () => {
        router.push("/get-started")
    }


    return (
        <SafeAreaView>
            <Text>Welcome Screen</Text>
             <CustomButton onPress={getStartedHandler}>Get Started</CustomButton>
        </SafeAreaView>
    )
}

export default Index