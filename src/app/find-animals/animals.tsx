import {View, Text, ScrollView} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";


export default function Animals() {
    return (
        <SafeAreaView className='bg-primary h-full w-full'>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View className='justify-center items-center gap-6 p-2'>
                    <Text className='text-center text-4xl text-white'>
                        FindAnimals
                    </Text>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </SafeAreaView>
    );
};