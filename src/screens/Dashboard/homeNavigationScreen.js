

import React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Dashboard/HomeScreen';
import FlashSale from '../homesubscreen/flashScreen';
import FavoriteProduct from '../homesubscreen/favoriteProduct';
import ProductDetails from '../homesubscreen/productDetail';


const Stack = createNativeStackNavigator()


const Home = () => {


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
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
                <Stack.Screen name='Super Flash Sale' component={FlashSale}options={{headerShown:false}} />
                <Stack.Screen name='Favorite Product' component={FavoriteProduct}  />
                <Stack.Screen name='Product Details' component={ProductDetails} options={{headerShown:false}} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
}


export default Home;
