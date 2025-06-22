
// import React from 'react';
// import { View, Text, Image, TextInput, TouchableWithoutFeedback, } from 'react-native';
// import globle_Style from '../../css/globle_Style';
// import DateNonActive from '../../../assets/images/datenon-act.svg'


// const ChangeGenderScreen = () => {


//     return (
//         <View style={globle_Style.container}>
//             <View style={globle_Style.chang_email}>
//                 <Text style={globle_Style.chang_emailtxt}>Choose Gender</Text>
//                 <View style={globle_Style.chang_emailitm}>

//                     <Text style={globle_Style.changemail_input}>Male</Text>
//                     <DateNonActive/>
//                 </View>

//             </View>
//            <View style={globle_Style.glo_btnpad}>
//              <TouchableWithoutFeedback>
//                 <View style={globle_Style.globle_btn}>
//                     <Text style={globle_Style.gbl_btn}>Save</Text>
//                 </View>
//             </TouchableWithoutFeedback>
//            </View>
//         </View>
//     );
// }


// export default ChangeGenderScreen;


import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import globle_Style from '../../css/globle_Style';

import DownArrow from '../../../assets/images/downArrow.svg'
const GENDER_OPTIONS = ['Male', 'Female', 'Other'];

const ChangeGenderScreen = () => {
    const [selected, setSelected] = useState(null); // No default selected
    const [showOptions, setShowOptions] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setShowOptions(false);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={globle_Style.option}
            onPress={() => handleSelect(item)}
        >
            <Text
                style={[
                    globle_Style.optionText,
                    selected === item && globle_Style.selectedOption,
                ]}
            >
                {item}
            </Text>
        </TouchableOpacity>
    );
    const isPlaceholder = !selected;
    return (
        <View style={globle_Style.container}>
            {/* Selected Dropdown */}
            <View style={globle_Style.chang_email}>
                <Text style={globle_Style.chang_emailtxt}>Choose Gender</Text>
                <TouchableOpacity
                    style={globle_Style.dropdown}
                    onPress={() => setShowOptions(!showOptions)}
                >
                    <Text
                        style={[
                            globle_Style.selectedText,
                            isPlaceholder ? globle_Style.placeholderText : globle_Style.afterSelectText,
                        ]}
                    >
                        {isPlaceholder ? 'Select a gender' : selected}
                    </Text>
                    <DownArrow />
                </TouchableOpacity>

                {/* Dropdown Options */}
                {showOptions && (
                    <View style={globle_Style.dropdownList}>
                        <FlatList
                            data={GENDER_OPTIONS}
                            renderItem={renderItem}
                            keyExtractor={(item) => item}
                        />
                    </View>
                )}
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
};



export default ChangeGenderScreen;
