import {Image, ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';


type Props = {
    src: ImageSourcePropType
    cardTitle?: string
}

export default function CardScreen({src, cardTitle}: Props) {
    return (
        <TouchableOpacity className='w-[260px] h-[260px] overflow-hidden rounded-[20px]'>
            <View className='w-full h-full] relative'>
                <Image
                    source={src}
                    resizeMode={'cover'}
                    className='w-full h-full object-cover rounded-[20px]'
                />
                <Text className='font-bold text-fuchsia-950 text-4xl z-10 p-3 absolute flex items-center justify-center'>
                    {cardTitle}
                </Text>
            </View>
        </TouchableOpacity>
    );
};