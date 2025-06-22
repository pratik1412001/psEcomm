

import React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './profileScreen';
import PaymentScreen from './paymentScreen';
import OrderScreen from './orderScreen';
import AddressScreen from './addressScreen';
import AccountScreen from '../Dashboard/AccountScreen';
import ChangeEmailScreen from './changeEmailScreen';
import ChangePhoneScreen from './changePhoneNumber';
import ChangeDateScreen from './changeDateScreen';
import ChangeGenderScreen from './changeGenderScreen';
import EditAddressScreen from '../addressScreen/editAddressScreen';



const Stack = createNativeStackNavigator()


const AccountNavigationScreen = () => {


    return (
        // <NavigationContainer  independent={true}>
            <Stack.Navigator screenOptions={{
                headerTitleStyle:{
                    fontSize:16,
                    color:'#223263',
                    fontFamily:'Poppins-Bold',
                    fontWeight:'700'
                }
            }}>
                <Stack.Screen name='accountScreen' component={AccountScreen} options={{
                    headerTitle:'Account', 
                    headerTitleAlign:'center'
                }}/>
                <Stack.Screen name='profileScreen' component={ProfileScreen} options={{
                     headerTitle:'Profile', 
                    headerTitleAlign:'center'
                }}/>
                <Stack.Screen name='paymentScreen' component={PaymentScreen}/>
                <Stack.Screen name='orderScreen' component={OrderScreen}/>
                <Stack.Screen name='addressScreen' component={AddressScreen} options={{
                     headerTitle:'Address', 
                    headerTitleAlign:'center'
                }}/>
                {/* <Stack.Screen name='changeEmail' component={ChangeEmailScreen}/>
                <Stack.Screen name='changePhone' component={ChangePhoneScreen}/>
                <Stack.Screen name='changeDate' component={ChangeDateScreen}/>
                <Stack.Screen name='changeGender' component={ChangeGenderScreen}/> */}
                <Stack.Screen name='editAddressScreen' component={EditAddressScreen} options={{
                     headerTitle:'Edit Address', 
                    headerTitleAlign:'center'
                }}/>
            </Stack.Navigator>
        // </NavigationContainer>
    );
}


export default AccountNavigationScreen;
