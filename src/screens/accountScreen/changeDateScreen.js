
import React from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback, } from 'react-native';
import globle_Style from '../../css/globle_Style';
import DateNonActive from '../../../assets/images/datenon-act.svg'


const ChangeDateScreen = () => {


    return (
        <View style={globle_Style.container}>
            <View style={globle_Style.chang_email}>
                <Text style={globle_Style.chang_emailtxt}>Your Birhday</Text>
                <View style={globle_Style.chang_emailitm}>
                    
                    <TextInput
                        placeholder="12/12/2020"
                        placeholderTextColor="#9098B1" // light gray placeholder
                        style={globle_Style.changemail_input}
                    />
                    <DateNonActive/>
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


export default ChangeDateScreen;
