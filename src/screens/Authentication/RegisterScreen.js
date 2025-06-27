import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native';
import globle_Style from '../../css/globle_Style';
import { useNavigation } from '@react-navigation/native';

import { firestore } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';




const RegisterScreen = () => {


	const navigation = useNavigation()

	const [fullName, setFullName] = useState(false);
	const [email, setEmail] = useState(false)
	const [password, setPassword] = useState(false)
	const [confirmPassword, setConfirmPassword] = useState(false)


	// handle registration api  
	const RegisterUser = async () => {
		// 1. Check if fields are empty
		if (!fullName || !email || !password || !confirmPassword) {
			Alert.alert('Validation Error', 'All fields are required.');
			return;
		}

		// 2. Check if email is valid (basic regex)
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			Alert.alert('Invalid Email', 'Please enter a valid email address.');
			return;
		}

		// 3. Check password length
		if (password.length < 6) {
			Alert.alert('Weak Password', 'Password must be at least 6 characters.');
			return;
		}

		// 4. Check if password matches confirm password
		if (password !== confirmPassword) {
			Alert.alert('Password Mismatch', 'Passwords do not match.');
			return;
		}
		try {
			await addDoc(collection(firestore, 'RegisterUser'), {
				fullname: fullName,
				email: email,
				password: password,
				confirmPassword: confirmPassword
			});

			Alert.alert(
				'Success',
				'User created successfully',
				[
					{
						text: 'Cancel',
						onPress: () => console.log('User canceled'),
						style: 'cancel'
					},
					{
						text: 'OK',
						onPress: () => {
							console.log('OK Pressed');
							navigation.navigate('DashBoard');
						}
					}
				],
				{ cancelable: false }
			);
		} catch (error) {
			console.error('Error creating user:', error);
		}
	};



	return (
		<ScrollView style={globle_Style.container}>
			<View style={globle_Style.login_sec}>
				<View style={globle_Style.login_con}>
					<View style={globle_Style.logos_itm}>
						<Image source={require('../../../assets/images/logo2.png')} style={{ marginBottom: 16 }} />
						<Text style={globle_Style.logos_hd}>Let’s Get Started</Text>
						<Text style={globle_Style.logos_para}>Create an new account</Text>
					</View>
					<View style={globle_Style.frm_sec}>
						<View style={[globle_Style.frm_con, (fullName.length > 0) ? globle_Style.frm_con_active : globle_Style.frm_con]}>
							<Image source={(fullName.length > 0) ? require('../../../assets/images/active_User.png') : require('../../../assets/images/non_act_User.png')} style={{ marginLeft: 16 }} />
							<TextInput style={[globle_Style.gbl_input, (fullName.length > 0) ? globle_Style.gbl_act_input : globle_Style.gbl_input]} placeholder='FullName'
								onChangeText={setFullName}>{fullName}</TextInput>
						</View>
						<View style={[globle_Style.frm_con, (email.length > 0) ? globle_Style.frm_con_active : globle_Style.frm_con]}>

							<Image source={(email.length > 0) ? require('../../../assets/images/active_mail.png') : require('../../../assets/images/non_act_mail.png')} style={{ marginLeft: 16 }} />

							<TextInput style={[globle_Style.gbl_input, (email.length > 0) ? globle_Style.gbl_act_input : globle_Style.gbl_input]} placeholder='Your Email'
								onChangeText={setEmail} >{email}</TextInput>
						</View>
						<View style={[globle_Style.frm_con, (password.length > 0) ? globle_Style.frm_con_active : globle_Style.frm_con]}>
							<Image source={(password.length > 0) ? require('../../../assets/images/active_Password.png') : require('../../../assets/images/nonact_Password.png')} style={{ marginLeft: 16 }} />
							<TextInput style={[globle_Style.gbl_input, (password.length > 0) ? globle_Style.gbl_act_input : globle_Style.gbl_input]} placeholder='Password'
								onChangeText={setPassword}secureTextEntry>{password}</TextInput>
						</View>
						<View style={[globle_Style.frm_con, (confirmPassword.length > 0) ? globle_Style.frm_con_active : globle_Style.frm_con]}>
							<Image source={(confirmPassword.length > 0) ? require('../../../assets/images/active_Password.png') : require('../../../assets/images/nonact_Password.png')} style={{ marginLeft: 16 }} />
							<TextInput style={[globle_Style.gbl_input, (password.length > 0) ? globle_Style.gbl_act_input : globle_Style.gbl_input]} placeholder='confirm Password'
								onChangeText={setConfirmPassword} secureTextEntry>{confirmPassword}</TextInput>
						</View>
						<TouchableOpacity onPress={RegisterUser}>
							<View style={globle_Style.globle_btn}>
								<Text style={globle_Style.gbl_btn}>Sign Up</Text>
							</View>
						</TouchableOpacity>
						<View style={globle_Style.forgt_regis_sec}>
							<Text style={globle_Style.regis}>have a account?  <Text style={globle_Style.regis_txt} onPress={()=>navigation.navigate('LoginScreen')}>Sign In</Text></Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
export default RegisterScreen;
