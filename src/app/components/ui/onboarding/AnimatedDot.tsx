import { useEffect } from "react"
import { StyleSheet } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"
import Colors from "../../../../../constants/Colors"

interface propsType{
    active: boolean
}

export default function AnimatedDot({active} : propsType){

    const width = useSharedValue<number>(active ? 24 : 8) 

    useEffect(() => {
        width.value = withTiming(active ? 24 : 8, {
            duration : 100
        })

    }, [width, active])


    const animatedStyle = useAnimatedStyle(() => ({
        width : withSpring(width.value, {
            mass: 1,
            damping : 10, 
            stiffness: 100
        }

        )
    }))

    return(
        <Animated.View style={[styles.dot, animatedStyle]}>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        backgroundColor: Colors.primary,
        borderRadius : 8
    }
})