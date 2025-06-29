


import React from 'react';
import { View, Text, TouchableOpacity,Alert } from 'react-native';
import globle_Style from '../../css/globle_Style';
import AccountProfile from '../../../assets/images/accountProfile.svg'
import AccountOrder from '../../../assets/images/AccountOrder.svg'
import AccountPayment from '../../../assets/images/AccountPayment.svg'
import AccountAddress from '../../../assets/images/AccountAddress.svg'
import RightArrow from '../../../assets/images/right_arrow.svg'
import Logout from '../../../assets/images/logout.svg'
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth'




const AccountScreen = () => {

  const navigation = useNavigation()



  // const HandleLogout = () => {
  //  Alert.alert(
  //   'Logout',
  //   'Are you sure you want to logout?',
  //   [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Logout cancelled'),
  //       style: 'cancel',
  //     },
  //     {
  //       text: 'Yes',
  //       onPress: () => {
  //         // Navigate to login screen or sign out
  //         navigation.replace('LoginScreen');
  //       },
  //     },
  //   ],
  //   { cancelable: false }
  // );
  // };

const handleLogout = () => {
  Alert.alert(
    'Confirm Logout',
    'Are you sure you want to log out from the app?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            // Firebase logout
            await auth().signOut();

            // Navigate to login and clear back stack
            navigation.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            });
          } catch (error) {
            console.error('Logout failed:', error);
            Alert.alert('Logout Failed', 'Something went wrong. Please try again.');
          }
        },
      },
    ],
    { cancelable: true }
  );
};



  return (
    <View style={globle_Style.container}>
      <View style={globle_Style.account_sec}>
        <View style={globle_Style.account_con}>
          <TouchableOpacity onPress={() => navigation.navigate('profileScreen')}>
            <View style={globle_Style.account_lst}>
              <View style={globle_Style.account_lft}>
                <AccountProfile style={{ marginRight: 16 }} />
                <Text style={globle_Style.prof_txt}>Profile</Text>
              </View>
              <View style={globle_Style.accont_rgt}>
                <RightArrow />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPressOut={() => navigation.navigate('orderScreen')}>
            <View style={globle_Style.account_lst}>
              <View style={globle_Style.account_lft}>
                <AccountOrder style={{ marginRight: 16 }} />
                <Text style={globle_Style.prof_txt}>Order</Text>
              </View>
              <View style={globle_Style.accont_rgt}>
                <RightArrow />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('addressScreen')}>
            <View style={globle_Style.account_lst}>
              <View style={globle_Style.account_lft}>
                <AccountAddress style={{ marginRight: 16 }} />
                <Text style={globle_Style.prof_txt}>Address</Text>
              </View>
              <View style={globle_Style.accont_rgt}>
                <RightArrow />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={globle_Style.account_lst}>
              <View style={globle_Style.account_lft}>
                <AccountPayment style={{ marginRight: 16 }} />
                <Text style={globle_Style.prof_txt}>Payment</Text>
              </View>
              <View style={globle_Style.accont_rgt}>
                <RightArrow />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <View style={globle_Style.account_lst}>
              <View style={globle_Style.account_lft}>
                <Logout style={{ marginRight: 16 }} />
                <Text style={globle_Style.prof_txt}>Logout</Text>
              </View>
              <View style={globle_Style.accont_rgt}>
                <RightArrow />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


export default AccountScreen;
