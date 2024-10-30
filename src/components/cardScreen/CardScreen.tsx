import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';


type Props = {
    src: ImageSourcePropType
}

export default function CardScreen({src}: Props) {
    return (
        <TouchableOpacity className='w-[260px] h-[260px] overflow-hidden rounded-[20px]'>
            <Image
                source={src}
                resizeMode={'cover'}
                className='w-full h-full object-cover rounded-[20px]'
            />
        </TouchableOpacity>
    );
};