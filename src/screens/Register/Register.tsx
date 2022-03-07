import { View, Text, ImageBackground, Image, TouchableOpacity, ProgressViewIOSComponent, Dimensions, TextInput, Button, ScrollView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import images from '../../constants/images'
import styles from './style';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker'
import { AGENCY } from '../../models/pepsico';
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import dataCity from '../../constants/get_api';
// import { DATA_CITY } from '../../constants/get_api';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

interface responseChild {
    uri: string,
    fileName?: string
}

interface subNavigation {
    navigate: (where: string, params?: string) => void;
}

interface typeProps {
    navigation: subNavigation;
}


const handleNavigation = (myEvent: subNavigation) => {
    myEvent.navigate("Success");
}
const Register = (prop: typeProps) => {
    const [image1, setImage1] = useState<responseChild | null>(null);
    const [image2, setImage2] = useState<responseChild | null>(null);
    const [image3, setImage3] = useState<responseChild | null>(null);

    const selectImage1 = () => {
        const options: any = {
            maxWidth: 2000,
            maxHeight: 2000,
            mediaType: "photo"
        };
        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User tapped custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage1(source);
            }
        });
    };
    const selectImage2 = () => {
        const options: any = {
            maxWidth: 2000,
            maxHeight: 2000,
            mediaType: "photo"
        };

        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User tapped custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage2(source);
            }
        });
    };

    const selectImage3 = () => {
        const options: any = {
            maxWidth: 2000,
            maxHeight: 2000,
            mediaType: "photo"
        };
        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User tapped custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage3(source);
            }
        });
    };

    const [selectedProvince, setSelectedProvince] = useState();
    const [dataProvince, setDataProvince] = useState<any[]>([])

    const [selectedProvince1, setSelectedProvince1] = useState(Number(''));
    const [dataProvince1, setDataProvince1] = useState<any[]>([])

    const [selectedDistrict, setSelectedDistrict] = useState();
    const [dataDistrict, setDataDistrict] = useState(null);

    const [selectedDistrict1, setSelectedDistrict1] = useState(Number(''));
    const [dataDistrict1, setDataDistrict1] = useState(null);

    const [openAgency, setOpenAgency] = useState(false);
    const [agencyValue, setAgencyValue] = useState<string | null>(null);
    const [agency, setAgency] = useState(AGENCY);

    useEffect(() => {
        //get all province from this api
        axios.get(`https://provinces.open-api.vn/api/?p==1`).then((res) => {
            // console.log('hihi', res["data"]);
            console.log('hihi');
            setDataProvince(res["data"]);
            // console.log('dc chua v', setDataProvince(res["data"]));

        });
    }, []);

    useEffect(() => {
        //get all districts from the province you choice
        axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`).then((res) => {
            console.log('hoho');

            setDataDistrict(res["data"]?.districts);
        });
    }, [selectedProvince]);

    const Item = (props: any) => {
        return (
            <View style={{ padding: 5 }} key={props.item}>
                <TouchableOpacity onPress={() => {
                    props.handleSetOpen(false);
                    props.handleSetValue(props.value)
                }}>
                    <Text style={{ color: "#00355A", fontSize: 14 }}>
                        {props.item.value}
                    </Text>
                    <Text style={{ color: "#5499AB", }}>
                        {props.item.address}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateTime, setDateTime] = useState('Chọn thời gian')
    const showDatePicker = () => {

        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {

        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        console.warn("A date has been picked: ", date);
        console.log('ngafy', date);
        setDateTime(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes());
        hideDatePicker();
    };

    const { navigation } = prop
    return (

        <ImageBackground source={images.bg} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image source={images.nav} style={styles.nav_style} />
            <ScrollView>
                <Image source={images.text_register} style={styles.text_register_style} />
                <View style={styles.input_area_view_style}>
                    <View style={styles.contain_content_style}>
                        <Text style={styles.blue_text_style}>THÔNG TIN MUA HÀNG</Text>
                        <View>
                            <View style={styles.contain_style}>
                                <View style={styles.province_input_style}>
                                    <Text style={styles.white_text_style}>Tỉnh / Thành Phố</Text>
                                    <View
                                        style={{
                                            backgroundColor: 'white',
                                            elevation: 1,
                                            borderWidth: 0.8,
                                            width: width / 2.3,
                                            borderRadius: 5,
                                        }}
                                    >
                                        <Picker
                                            selectedValue={selectedProvince}
                                            style={{
                                                fontSize: 18,
                                                color: 'grey',
                                                fontWeight: "bold",
                                                // backgroundColor: 'orange',
                                                borderRadius: 10,
                                            }}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedProvince(itemValue)
                                            }}
                                        >
                                            {/* {
                                                selectedProvince == "default" && (
                                                    <Picker.Item
                                                        value="default"
                                                        label="Choose Your Province"
                                                    />
                                                )
                                            } */}
                                            {dataProvince &&
                                                dataProvince.map((province: any) => (
                                                    <Picker.Item
                                                        key={province.code}
                                                        value={selectedProvince}
                                                        label={province.name}
                                                        value={province.code}
                                                    />
                                                ))}
                                        </Picker>
                                    </View>
                                </View>

                                <View style={styles.district_input_style}>
                                    <Text style={styles.white_text_style}>Quận / huyện</Text>
                                    <View
                                        style={{
                                            backgroundColor: 'white',
                                            elevation: 1,
                                            borderWidth: 0.8,
                                            width: width / 2.3,
                                            borderRadius: 5,
                                            // borderColor: 'orange',
                                        }}
                                    >
                                        <Picker
                                            selectedValue={selectedDistrict}
                                            style={{
                                                //height: 100,
                                                // width: 200,
                                                fontSize: 18,
                                                color: 'grey',
                                                fontWeight: "bold",
                                                // backgroundColor: 'orange',
                                            }}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedDistrict(itemValue)
                                            }}
                                        >
                                            {/* <Picker.Item
                value="default"
                label="Your Districts"
            /> */}
                                            {dataDistrict &&
                                                dataDistrict.map((district: any) => (
                                                    <Picker.Item
                                                        key={district.code}
                                                        value={selectedDistrict}
                                                        label={district.name}
                                                        value={district.code}
                                                    />
                                                ))}
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.white_text_style}>Đại lý</Text>
                                <DropDownPicker
                                    open={openAgency}
                                    value={agencyValue}
                                    items={agency}
                                    setOpen={setOpenAgency}
                                    setValue={setAgencyValue}
                                    setItems={setAgency}
                                    listMode="SCROLLVIEW"
                                    style={styles.inputCity}
                                    containerStyle={{
                                        width: "100%",
                                        borderRadius: 5
                                    }}
                                    placeholder="Chọn đại lý"
                                    selectedItemContainerStyle={{
                                        backgroundColor: "#84E5FF",

                                    }}
                                    listItemLabelStyle={{
                                        color: "#00355A"
                                    }}
                                    selectedItemLabelStyle={{
                                        color: "#00355A"
                                    }}
                                    dropDownContainerStyle={{
                                        marginTop: 4,
                                        borderRadius: 5,
                                    }}
                                    onSelectItem={(item) => {
                                        console.log(item);
                                    }}
                                    renderListItem={(props) => <Item {...props} handleSetOpen={(payload: boolean) => setOpenAgency(payload)} handleSetValue={(payload: string | null) => setAgencyValue(payload)} />}
                                // zIndex={100}
                                />
                            </View>
                            <Text style={{ alignSelf: 'center', color: '#429ACE' }}>________________________________________________</Text>
                            <Text style={styles.blue_text_style}>THÔNG TIN NGƯỜI THAM GIA</Text>
                            <View>
                                <View style={styles.contain_style}>
                                    <View style={styles.province_input_style}>
                                        <Text style={styles.white_text_style}>Họ tên</Text>
                                        <TextInput style={styles.input_style} placeholder='Nhập họ tên' placeholderTextColor='#5499AB' />
                                    </View>

                                    <View style={styles.district_input_style}>
                                        <Text style={styles.white_text_style}>Số điện thoại</Text>
                                        <TextInput style={styles.input_style} placeholder='Nhập số điện thoại' placeholderTextColor='#5499AB' />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.contain_info_party}>
                                <Text style={styles.blue_text_style}>THÔNG TIN TIỆC</Text>
                                <View style={styles.contain_style}>
                                    <View style={styles.province_input_style}>
                                        <Text style={styles.white_text_style}>Tỉnh / Thành Phố</Text>

                                        <View
                                            style={{
                                                backgroundColor: 'white',
                                                elevation: 1,
                                                borderWidth: 0.8,
                                                width: width / 2.3,
                                                borderRadius: 5,
                                            }}
                                        >
                                            <Picker
                                                selectedValue={selectedProvince}
                                                style={{
                                                    fontSize: 18,
                                                    color: 'grey',
                                                    fontWeight: "bold",
                                                    // backgroundColor: 'orange',
                                                    borderRadius: 10,
                                                }}
                                                onValueChange={(itemValue, itemIndex) => {
                                                    setSelectedProvince(itemValue)
                                                }}
                                            >
                                                {/* {
                                                selectedProvince == "default" && (
                                                    <Picker.Item
                                                        value="default"
                                                        label="Choose Your Province"
                                                    />
                                                )
                                            } */}
                                                {dataProvince &&
                                                    dataProvince.map((province: any) => (
                                                        <Picker.Item
                                                            key={province.code}
                                                            value={selectedProvince}
                                                            label={province.name}
                                                            value={province.code}
                                                        />
                                                    ))}
                                            </Picker>
                                        </View>
                                    </View>

                                    <View style={styles.district_input_style}>
                                        <Text style={styles.white_text_style}>Quận / huyện</Text>
                                        <View
                                            style={{
                                                backgroundColor: 'white',
                                                elevation: 1,
                                                borderWidth: 0.8,
                                                // borderColor: 'orange',
                                                width: width / 2.3,
                                                borderRadius: 5,
                                            }}
                                        >
                                            <Picker
                                                selectedValue={selectedDistrict}
                                                style={{
                                                    //height: 100,
                                                    // width: 200,
                                                    fontSize: 18,
                                                    color: 'grey',
                                                    fontWeight: "bold",
                                                    // backgroundColor: 'orange',
                                                }}
                                                onValueChange={(itemValue, itemIndex) => {
                                                    setSelectedDistrict(itemValue)
                                                }}
                                            >
                                                {/* <Picker.Item
                value="default"
                label="Your Districts"
            /> */}
                                                {dataDistrict &&
                                                    dataDistrict.map((district: any) => (
                                                        <Picker.Item
                                                            key={district.code}
                                                            value={selectedDistrict}
                                                            label={district.name}
                                                            value={district.code}
                                                        />
                                                    ))}
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.white_text_style}>Số nhà, tên đường</Text>
                                <TextInput style={styles.input_party_style} placeholder='Nhập số nhà, tên đường' placeholderTextColor='#5499AB' />
                                <Text style={styles.white_text_style}>Thời gian tiệc</Text>
                                <View>
                                    <View >
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={showDatePicker}>
                                            <Text style={[styles.inputField, { flex: 1 }]}>{dateTime}</Text>
                                            <Image source={images.DATE_ICON} style={styles.iconStyle} />
                                        </TouchableOpacity>
                                    </View>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="datetime"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.blue_text_style}>HÌNH ẢNH</Text>
                                <View>
                                    <Text style={styles.white_text_style}>Hình thiệp cưới</Text>
                                    <View style={styles.view_style}>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', position: 'relative' }} onPress={selectImage1}>
                                            <Image style={{ position: "absolute", left: 10, top: 8, zIndex: 100 }} source={images.IMAGE_ICON} />
                                            <View style={styles.straightLine}></View>
                                            <TextInput value={image1?.fileName} editable={false} placeholder="Đính kèm hình" style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.white_text_style}>Hình hóa đơn bán hàng</Text>
                                    <View style={styles.view_style}>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', position: 'relative' }} onPress={selectImage2}>

                                            <View>
                                                <Image style={{ position: "absolute", left: 10, top: 8, zIndex: 100 }} source={images.IMAGE_ICON} />
                                                <View style={styles.straightLine}></View>

                                                <TextInput style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} value={image2?.fileName} editable={false} placeholder="Đính kèm hình" />

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.white_text_style}>Hình khối sản phẩm</Text>
                                    <View style={styles.view_style}>
                                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', position: 'relative' }} onPress={selectImage3}>

                                            <Image style={{ position: "absolute", left: 10, top: 8, zIndex: 100 }} source={images.IMAGE_ICON} />
                                            <View style={styles.straightLine}></View>
                                            <TextInput style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} value={image3?.fileName} editable={false} placeholder="Đính kèm hình" />

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                <TouchableOpacity onPress={() => handleNavigation(navigation)}>
                    <Image source={images.btn_register} style={styles.btn_register_style} />
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>


    )
}

export default Register