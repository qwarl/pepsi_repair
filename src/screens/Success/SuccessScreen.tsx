import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    BackHandler,
    ScrollView,
    StatusBar,
    Dimensions
} from 'react-native';
// import { SIGN_IN_SUCCESS, CONTENT_SUCCESS, BACKGROUND_SUCCESS } from '../../constants/images'
import images from '../../constants/images'
import styles from './styles'
const { width, height } = Dimensions.get('window');

interface subNavigation {
	navigate: (where: string, params?: string) => void;
}

interface typeProps {
	navigation: subNavigation;
}


const handleNavigation = (myEvent: subNavigation) => {
	myEvent.navigate("Home");
}
const SuccessScreen = (prop: typeProps) => {
    const { navigation } = prop
    return (
        <ImageBackground source={images.bg} style={styles.container}>
            {/* <ScrollView style={{flex:1}}> */}
            <StatusBar translucent backgroundColor="transparent" />
            <Image source={images.nav} style={styles.nav_style} />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={images.BACKGROUND_SUCCESS} style={{ resizeMode: 'cover', width: "100%", height: "100%" }} />
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={images.SIGN_IN_SUCCESS} style={{ resizeMode: 'contain',marginTop:width*0.07 }} />
                    <Image source={images.CONTENT_SUCCESS} style={{ width: '100%', height: '80%', resizeMode: 'contain' }} />
                <TouchableOpacity onPress={() => handleNavigation(navigation)}>
                    <Image source={images.btn_success} style={styles.btn_register_style} />
                </TouchableOpacity>
                </View>
            </View>
            {/* </ScrollView> */}
        </ImageBackground>
    )
}

export default SuccessScreen;