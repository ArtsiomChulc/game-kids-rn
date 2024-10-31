import {Slot} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function GamesLayout() {
    return (
        <>
            <Slot/>
            <StatusBar backgroundColor="#161622" style="light" />
        </>
    );
}

