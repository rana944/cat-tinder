import { Dimensions, StyleSheet } from "react-native";
import fonts from "../../theme/fonts";

const width = Dimensions.get('window').width * 0.85;
const height = Dimensions.get('window').height * 0.6;

export default StyleSheet.create({
    content: {
        alignItems: 'center',
    },
    card: {
        width,
        height,
        backgroundColor: 'tomato',
    },
    label: {
        fontSize: 22,
        color: '#fff',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignItems: 'center',
    },
    bottomCard: {
        width: width * 0.9,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        bottom: 0,
    },
    name: {
        fontFamily: fonts.bold,
        fontSize: 16,
        marginLeft: 10,
    }
})