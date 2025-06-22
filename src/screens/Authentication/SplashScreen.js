import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import globle_Style from '../../css/globle_Style';

const SplashScreen = ({ navigation }) => {


  useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace('LoginScreen');
      }, 3000);

      return () => clearTimeout(timer);
  }, [navigation]);


  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
      const zoomIn = Animated.timing(scaleAnim, {
          toValue: 2,
          duration: 3000,
          useNativeDriver: true,
      });

      const zoomOut = Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
      });

      Animated.loop(
          Animated.sequence([zoomIn])
      ).start();
  }, [scaleAnim]);

  return (
      <View style={globle_Style.Splash_sec}>
         <Animated.Image source={require('../../../assets/images/logo.png')}
         style={[globle_Style.Image, { transform: [{ scale: scaleAnim }] }]}
         />
      </View>
  );
};


export default SplashScreen;