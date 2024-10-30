import {Navigator} from "expo-router";
import {StatusBar} from "expo-status-bar";
import Slot = Navigator.Slot;

export default function GamesLayout() {
    return (
        <>
            <Slot/>
            <StatusBar backgroundColor="#161622" style="light" />
        </>
    );
}

