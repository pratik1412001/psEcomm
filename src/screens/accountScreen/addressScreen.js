
import React from 'react';
import { View, Text, TouchableWithoutFeedback, ScrollView,FlatList } from 'react-native';
import globle_Style from '../../css/globle_Style';
import DeleteIcon from '../../../assets/images/delete.svg'
import { useNavigation } from '@react-navigation/native';

const AddressScreen = () => {
 const navigation = useNavigation()
 
  const addressData = [
    {
      id: '1',
      name: 'Priscekila',
      info: '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States dfsdf',
      phone: '+99 1234567890',
    },
      {
      id: '2',
      name: 'Priscekila',
      info: '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
      phone: '+99 1234567890',
    },
      {
      id: '3',
      name: 'Priscekila',
      info: '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
      phone: '+99 1234567890',
    },
      {
      id: '4',
      name: 'Priscekila',
      info: '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
      phone: '+99 1234567890',
    },
    // You can add more items here
  ];


  const AddressItem = ({ item }) => (
    <View style={globle_Style.address_itm}>
      <Text style={globle_Style.address_nametxt}>{item.name}</Text>
      <Text style={globle_Style.address_infotxt}>{item.info}</Text>
      <Text style={globle_Style.address_phonumrtxt}>{item.phone}</Text>
      <View style={globle_Style.address_editbtn}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('editAddressScreen')}>
          <View style={globle_Style.editbtn_lft}>
          <Text style={globle_Style.editbtn_lfttxt}>Edit</Text>
        </View>
        </TouchableWithoutFeedback>
        <View style={globle_Style.deletbtn_rgt}>
          <DeleteIcon />
        </View>
      </View>
    </View>
  );


  return (
    // <ScrollView>
      <View style={globle_Style.container}>
      <ScrollView>
          <View style={globle_Style.address_sec}>
          <View style={globle_Style.address_con}>
            <FlatList
              data={addressData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <AddressItem item={item} />}
            />
          </View>

        </View>
      </ScrollView>
        <View style={globle_Style.glo_btnpad}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate()}>
            <View style={globle_Style.globle_btn}>
              <Text style={globle_Style.gbl_btn}>Add Address</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    // </ScrollView>
  );
}


export default AddressScreen;
