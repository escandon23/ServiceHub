import { Stack } from "expo-router";

export default function Layout() {
   
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
            <Stack.Screen name="get-started1"/>
            <Stack.Screen name="get-started2"/>
            <Stack.Screen name="get-started3"/>
            <Stack.Screen name="login"/>
        </Stack>
    );
}
