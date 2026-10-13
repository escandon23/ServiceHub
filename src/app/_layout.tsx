import { Stack } from "expo-router";


export default function Layout() {
   

    return (

        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false,
                animation: "none",
            }} />
            <Stack.Screen name="get-started1" options={{
                headerShown: false,
                animation: "none",
            }}/>
            <Stack.Screen name="get-started2" options={{
                headerShown: false,
                animation: "none"

            }}/>
            <Stack.Screen name="get-started3" options={{
                headerShown: false,
                animation: "none"

            }}/>
            <Stack.Screen name="login" options={{
                 headerShown: false,
                animation: "none",
            }}/>
           
        </Stack>


    );
}
