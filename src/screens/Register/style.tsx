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
    },
    text_home_style: {
        marginTop: width * 0.135,
        alignSelf: 'center'
    },
    reward_home_style: {
        alignSelf: 'center',
        marginTop: width * 0.011,
    },
    btn_register_style: {
        alignSelf: 'center',
        marginTop: width * 0.27,
    },
    text_register_style: {
        alignSelf: 'center',
        marginTop: width * 0.065,
    },
    input_area_view_style: {
        backgroundColor: '#004F9D',
        marginLeft: width * 0.032,
        marginRight: width * 0.032,
        marginTop: height * 0.03
    },
    blue_text_style: {
        // fontFamily: 'Myriad Pro',
        color: '#84E5FF',
        fontWeight: 'bold',
        lineHeight: 19.2,
        fontSize: 16,
        fontStyle: 'normal',
        marginTop: width * 0.035,

    },
    province_input_style: {
        // marginTop: height * 0.02,

    },
    white_text_style: {
        // fontFamily: 'Myriad Pro',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 17,
        color: '#FFFFFF',
        marginTop: height * 0.02,

    },
    district_input_style: {
        // marginTop: height * 0.02,

    },
    contain_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputCity: {
        borderColor: '#00355A',
        borderWidth: 1,
        borderRadius: 4,
        // fontFamily: 'Myriad Pro',
        color: '#00355A',
        marginTop: height * 0.01,

    },
    contain_content_style: {
        justifyContent: 'center',
        marginLeft: width * 0.035,
        marginRight: width * 0.035,
        // alignItems: 'center',
    },
    input_style: {
        // fontFamily: 'Myriad Pro',
        fontSize: 12,
        lineHeight: 14,
        // textAlign: 'center',
        color: '#5499AB',
        backgroundColor: '#FFFFFF',
        width: width / 2.3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00355A',
        // marginLeft:width*0.01
        // text
        // placeHolderColor: 'red',
        paddingLeft: width * 0.01,
    },
    infor_style: {

    },
    contain_info_party: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#48a1d3',
        backgroundColor: '#0d5ea7'
    },
    input_party_style: {
        // fontFamily: 'Myriad Pro',
        fontSize: 12,
        lineHeight: 14,
        color: '#5499AB',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00355A',
        paddingLeft: width * 0.01,
    },
    text_view: {
        color: '#5499AB',
        fontSize: 12,
        // fontFamily: 'Myriad Pro',

    },
    view_style: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        paddingLeft: width * 0.01,
        lineHeight: 14,
        height:width*0.1,
        justifyContent:'center'
    },

});

export default styles