import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    nav_style: {
        width: '100%',
        // height:'100%',
    },
    text_home_style: {
        marginTop: width * 0.135,
        alignSelf: 'center'
    },
    reward_home_style: {
        alignSelf: 'center',
        marginTop: width * 0.011,
    },
    btn_home_style: {
        alignSelf: 'center',
        marginTop: width * 0.27,
    },
});

export default styles