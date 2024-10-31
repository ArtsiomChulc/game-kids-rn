import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function FindAnimalsLayout() {
    return (
        <>
            <StatusBar backgroundColor="#161622" style="light" />
            <Stack>
                <Stack.Screen name={'animals'} options={{
                    headerTitle: 'Найди животное',
                    headerTintColor: '#161622',
                    headerStyle: {
                        backgroundColor: '#f5f5f5',
                    },
                }}/>
            </Stack>
        </>
    );
}

