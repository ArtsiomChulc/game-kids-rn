import {Image, ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';
import {Href, Link} from "expo-router";


type Props = {
    src: ImageSourcePropType
    cardTitle?: string
    path?: Href<string | object>
}

export default function CardScreen({src, cardTitle, path}: Props) {
    return (
        <Link href={path ? path : ''} asChild>
            <TouchableOpacity
                className='w-[260px] h-[260px] overflow-hidden rounded-[20px]'>
                <View className='w-full h-full] relative'>
                    <Image
                        source={src}
                        resizeMode={'cover'}
                        className='w-full h-full object-cover rounded-[20px]'
                    />
                    {cardTitle && (
                        <View className='absolute z-10 flex rounded-xl bg-white/20 p-3'>
                            <Text className='font-bold text-fuchsia-950 text-4xl p-3'>
                                {cardTitle}
                            </Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </Link>
    );
};