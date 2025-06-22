
import React from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback, } from 'react-native';
import globle_Style from '../../css/globle_Style';


const ChangeEmailScreen = () => {


    return (
        <View style={globle_Style.container}>
            <View style={globle_Style.chang_email}>
                <Text style={globle_Style.chang_emailtxt}>Change Email</Text>
                <View style={globle_Style.chang_emailitm}>
                    <Image source={require('../../../assets/images/non_act_mail.png')} style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Enter a new email"
                        placeholderTextColor="#9098B1" // light gray placeholder
                        style={globle_Style.changemail_input}
                    />
                </View>
                <Text style={globle_Style.chang_paratxt}>We Will Send verification to your New Email</Text>
            </View>
           <View style={globle_Style.glo_btnpad}>
             <TouchableWithoutFeedback>
                <View style={globle_Style.globle_btn}>
                    <Text style={globle_Style.gbl_btn}>Change Email</Text>
                </View>
            </TouchableWithoutFeedback>
           </View>
        </View>
    );
}


export default ChangeEmailScreen;
