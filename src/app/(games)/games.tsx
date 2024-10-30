import {ScrollView, View} from 'react-native';
import {CardScreen} from "../../components";
import {images} from "../../constants";


export default function Games() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View className='w-full h-full flex-1 justify-center items-center gap-6 p-2'>
                <CardScreen src={images.animalsScreen}/>
                <CardScreen src={images.animalsScreen}/>
                <CardScreen src={images.animalsScreen}/>
                <CardScreen src={images.animalsScreen}/>
            </View>
        </ScrollView>
    );
};