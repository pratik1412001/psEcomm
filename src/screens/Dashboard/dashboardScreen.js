


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {View,Text,StyleSheet,Image} from 'react-native';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import OfferScreen from './OfferScreen';
import AccountScreen from './AccountScreen';
import NonactHome from '../../../assets/images/nonact_home.png';
import ActiveHome from '../../../assets/images/active_home.png';
import ActiveExplore from '../../../assets/images/active_explore.png';
import NonactExplore from '../../../assets/images/nonact_explore.png';
import ActiveCart from '../../../assets/images/active_cart.png';
import NonactCart from '../../../assets/images/nonact_cart.png';
import ActiveOffer from '../../../assets/images/active_offer.png';
import NonactOffer from '../../../assets/images/nonact_offer.png';
import ActiveAccount from '../../../assets/images/active_account.png';
import NonactAccount from '../../../assets/images/nonact_account.png';
import ExploreScreen from './ExploreScreen';
import Home from './homeNavigationScreen';
import AccountNavigationScreen from '../accountScreen/accountNavigationScreen';




const Tab = createBottomTabNavigator()



const Dashboard = () => {


  return (
  // <NavigationContainer independent={true}>
    <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconSource = focused ? ActiveHome: NonactHome;
            } else if (route.name === 'Explore') {
              iconSource = focused ?ActiveExplore :NonactExplore ;
            }else if (route.name === 'Cart') {
              iconSource = focused ?ActiveCart :NonactCart ;
            }else if (route.name === 'Offer') {
              iconSource = focused ?ActiveOffer :NonactOffer ;
            } else if (route.name === 'Account') {
              iconSource = focused ?ActiveAccount :NonactAccount ;
            }

            
            return (
              <View style={styles.iconContainer}>
                <Image
                  source={iconSource}
                  style={[styles.icon, { tintColor: color, width: size, height: size }]}
                />
              </View>
            );
          },
          
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '400',
            fontFamily:'Poppins-Regular',
          },
          tabBarActiveTintColor: '#40BFFF',
          tabBarInactiveTintColor: '#9098B1',
          headerShown:false,
          tabBarStyle: {
            borderTopWidth: 0,  
            elevation: 0, 
                 
          },
        })}>
        <Tab.Screen name='Home' component={Home}  />
        <Tab.Screen name='Explore' component={ExploreScreen} />
        <Tab.Screen name='Cart' component={CartScreen} />
        <Tab.Screen name='Offer' component={OfferScreen} />
        <Tab.Screen name='Account' component={AccountNavigationScreen} />
        
    </Tab.Navigator>
  // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 19,
    marginBottom: 12
  },
  icon: {
    resizeMode: 'contain', // Make sure the icon resizes correctly
  },
});
export default Dashboard;
