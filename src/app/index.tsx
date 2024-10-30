import {StatusBar} from 'expo-status-bar';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";
import '../../global.css';

export default function App() {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View className='flex-1 items-centers justify-center'>
                    <TouchableOpacity>
                        <Link href={'games'}>
                            Go to games
                        </Link>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
}

