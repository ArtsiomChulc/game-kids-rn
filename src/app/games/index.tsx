import {ScrollView, View} from 'react-native';
import {CardScreen} from "../../components";
import {images} from "../../constants";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";


export default function Index() {
    return (
        <SafeAreaView className='bg-primary h-full w-full'>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View
                    className='justify-center items-center gap-6 p-2'>
                    <CardScreen src={images.animalsScreen}/>
                    <CardScreen src={images.animalsScreen}/>
                    <CardScreen src={images.animalsScreen}/>
                    <CardScreen src={images.animalsScreen}/>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </SafeAreaView>
    );
};