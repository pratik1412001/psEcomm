import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView, TextInput, 
} from 'react-native';
import globle_Style from '../../css/globle_Style';
import NonActMail from '../../../assets/images/nonact_message.svg'
import ActiveMail from '../../../assets/images/active_message.svg'
import NonActPassword from '../../../assets/images/non_act_password.svg'
import ActivePassword from '../../../assets/images/activepassword.svg'
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {

	const navigation = useNavigation()

	const [email, setEmail] = useState(false);
	const [password, setPassword] = useState(false)

	// error status here 

	const [emailError , setEmailError] = useState()
	const [passwordError , setPasswordError] = useState()




	return (
		<ScrollView style={globle_Style.container}>
			<View style={globle_Style.login_sec}>
				<View style={globle_Style.login_con}>
					<View style={globle_Style.logos_itm}>
						<Image source={require('../../../assets/images/logo2.png')} style={{ marginBottom: 16 }} />
						<Text style={globle_Style.logos_hd}>Welcome to E-com</Text>
						<Text style={globle_Style.logos_para}>Sign in to continue</Text>
					</View>
					<View style={globle_Style.frm_sec}>
						<View style={[globle_Style.frm_con, (email.length > 0) ? globle_Style.frm_con_active : globle_Style.frm_con]}>

							<Image source={(email.length > 0) ? require('../../../assets/images/active_mail.png') : require('../../../assets/images/non_act_mail.png')} style={{ marginLeft: 16 }} />
							{/* <Image source={(email.length > 0) ? <ActiveMail/>: <NonActMail/>} style={{ marginLeft: 16 }} /> */}


							<TextInput style={[globle_Style.gbl_input, (email.length > 0) ? globle_Style.gbl_act_input : globle_Style.gbl_input]} placeholder='Email'
								onChangeText={setEmail} >{email}</TextInput>
						</View>
						<View style={[globle_Style.frm_con, (password.length > 0) ? globle_Style.frm_con_active : globle_Style.frm_con]}>
							<Image source={(password.length > 0) ? require('../../../assets/images/active_Password.png') : require('../../../assets/images/nonact_Password.png')} style={{ marginLeft: 16 }} />
							{/* <Image source={(password.length > 0) ? <ActivePassword/> : <NonActPassword/>} style={{ marginLeft: 16 }} /> */}
							<TextInput style={[globle_Style.gbl_input, (password.length > 0) ? globle_Style.gbl_act_input : globle_Style.gbl_input]} placeholder='Password'
								onChangeText={setPassword}>{password}</TextInput>
						</View>
						<TouchableWithoutFeedback onPress={() => navigation.navigate('RegisterScreen')}>
							<View style={globle_Style.globle_btn}>
								<Text style={globle_Style.gbl_btn}>Sign In</Text>
							</View>
						</TouchableWithoutFeedback>
						<View style={globle_Style.other_or}>
							<Text style={globle_Style.or_txt}>OR</Text>
						</View>
						<View style={globle_Style.social_sec}>
							<View style={globle_Style.social_con}>
								<Image source={require('../../../assets/images/social_img.png')} style={{ marginLeft: 16 }} />
								<Text style={globle_Style.social_txt}>Login with Google</Text>
							</View>
							<View style={globle_Style.social_con}>
								<Image source={require('../../../assets/images/social_img2.png')} style={{ marginLeft: 16 }} />
								<Text style={globle_Style.social_txt}>Login with Google</Text>
							</View>
						</View>
						<View style={globle_Style.forgt_regis_sec}>
							<Text style={globle_Style.forget}>Forgot Password?</Text>
							<Text style={globle_Style.regis}>Don’t have a account? <Text style={globle_Style.regis_txt}>Register</Text></Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}


export default LoginScreen;
