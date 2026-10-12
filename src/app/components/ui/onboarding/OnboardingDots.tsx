import { StyleSheet, View } from "react-native"
import AnimatedDot from "./AnimatedDot"



interface propsType {
    currentIndex : number
}


const OnboardingDots:React.FC<propsType> = ({currentIndex}) => {

     return (
        <View style={styles.container}>

        { Array.from({length : 3}).map((_, index) => {
           return <View key={index}><AnimatedDot active={currentIndex == index}/></View>
        })}

        </View>

     )  
} 

export default OnboardingDots


const styles = StyleSheet.create({
    container:{
        flexDirection : "row",
        justifyContent: "center",
        marginVertical: 10,
        gap: 10
    }
})