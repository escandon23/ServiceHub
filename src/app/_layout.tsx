import { Stack, useRouter } from "expo-router";

export default function Layout() {
    const route = useRouter()
   
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
            <Stack.Screen name="get-started"/>
        </Stack>
    );
}
