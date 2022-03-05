import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

const styleContainer = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    nav_style: {
        width: '100%',
    },
    btn_register_style: {
        alignSelf: 'center',
        marginTop: width * 0.02,
    },
})

export default styleContainer;