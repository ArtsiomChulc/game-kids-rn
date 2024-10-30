import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function GamesLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="games"
                    options={{headerShown: false,}}
                />
            </Stack>
            <StatusBar backgroundColor="#161622" style="light" />
        </>
    );
}

