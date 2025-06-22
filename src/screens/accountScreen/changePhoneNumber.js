
import React from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback, } from 'react-native';
import globle_Style from '../../css/globle_Style';


const ChangePhoneScreen = () => {


    return (
        <View style={globle_Style.container}>
            <View style={globle_Style.chang_email}>
                <Text style={globle_Style.chang_emailtxt}>Phone Number</Text>
                <View style={globle_Style.chang_emailitm}>
                    <Image source={require('../../../assets/images/non_act_mail.png')} style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="(307) 555-0133"
                        placeholderTextColor="#9098B1" // light gray placeholder
                        style={globle_Style.changemail_input}
                    />
                </View>
               
            </View>
           <View style={globle_Style.glo_btnpad}>
             <TouchableWithoutFeedback>
                <View style={globle_Style.globle_btn}>
                    <Text style={globle_Style.gbl_btn}>Save</Text>
                </View>
            </TouchableWithoutFeedback>
           </View>
        </View>
    );
}


export default ChangePhoneScreen;
