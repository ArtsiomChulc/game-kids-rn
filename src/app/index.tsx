import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import '../../global.css';

export default function Index() {
  return (
    <View className='flex-1 bg-cyan-800 items-center justify-center'>
      <Text className='text-6xl text-white'>Open up App.tsx to start working on your app!</Text>
      <Text className='text-2xl color-black'>Open up App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

