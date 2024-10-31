import {StatusBar} from 'expo-status-bar';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";
import {useEffect, useState} from "react";
import LoadEffect from "../components/loadEffect/LoadEffect";
import '../../global.css';

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [loading]);

    if(loading) {
        return <LoadEffect />
    }

    return (
        <SafeAreaView className='bg-primary h-full w-full'>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View className='flex-1 items-centers justify-center p-5'>

                    <Link href={'games'} className='w-full bg-secondary items-center rounded-xl' asChild>
                        <Pressable style={{paddingHorizontal: 20, paddingVertical: 15}}>
                            <Text className='text-3xl font-medium'>
                                Перейти к играм
                            </Text>
                        </Pressable>
                    </Link>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light"/>
        </SafeAreaView>
    );
}

