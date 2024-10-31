import {ActivityIndicator, ScrollView, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";


export default function LoadEffect() {
    return (
        <SafeAreaView className='bg-primary h-full w-full'>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View className='flex-1 w-full h-full items-center justify-center'>
                    <ActivityIndicator size="large"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};