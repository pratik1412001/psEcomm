import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableWithoutFeedback, ImageBackground, FlatList } from 'react-native';
import globle_Style from '../../css/globle_Style';

import Search from '../../../assets/images/Search.svg'
import Like from '../../../assets/images/like.svg'
import Notify from '../../../assets/images/notify.svg'
import RedAlert from '../../../assets/images/red_alert.svg'
import Banner from '../../../assets/images/banner.svg'
import Shirt from '../../../assets/images/shirt.svg'
import Dress from '../../../assets/images/dress.svg'
import Manbag from '../../../assets/images/manbag.svg'
import Womanbag from '../../../assets/images/womanbag.svg'
import FlashOne from '../../../assets/images/flash_img_one.svg'
import FlashTwo from '../../../assets/images/flash_img_two.svg'
import FlashThree from '../../../assets/images/flash_img_three.svg'
import Flashfour from '../../../assets/images/flash_img_four.svg'
import RecommProd from '../../../assets/images/recomm_prod.svg'
import Rating from '../../../assets/images/rating.svg'
import { useNavigation } from '@react-navigation/native';
// import RecommProd from '../../../assets/images/re.png'



const HomeScreen = () => {


	const navigation = useNavigation()

	const Flashdata = [
		{
			id: '1',
			name: 'FS - Nike Air',
			price: '$299,43',
			originalPrice: '$534,33',
			discount: '24% Off',
		},
		{
			id: '2',
			name: 'FS - Adidas',
			price: '$249,99',
			originalPrice: '$499,99',
			discount: '50% Off',
		},
		{
			id: '3',
			name: 'FS - Adidas',
			price: '$249,99',
			originalPrice: '$499,99',
			discount: '50% Off',
		},
		// Add more items as needed
	];
	const Megadata = [
		{
			id: '1',
			name: 'FS - Nike Air',
			price: '$299,43',
			originalPrice: '$534,33',
			discount: '24% Off',
		},
		{
			id: '2',
			name: 'FS - Adidas',
			price: '$249,99',
			originalPrice: '$499,99',
			discount: '50% Off',
		},
		{
			id: '3',
			name: 'FS - Adidas',
			price: '$249,99',
			originalPrice: '$499,99',
			discount: '50% Off',
		},
		// Add more items as needed
	];

	const FlashItem = ({ item }) => (

		<View style={globle_Style.flash_sal_lst}>
			<View style={globle_Style.flash_sal_itm}>
				<View style={globle_Style.flas_img}>
					<FlashOne />
				</View>
				<View style={globle_Style.flash_sal_itm_txt}>
					<Text style={globle_Style.flash_name} numberOfLines={3} ellipsizeMode='tails'>{item.name}</Text>
					<Text style={[globle_Style.flash_name, globle_Style.flash_rate]}> {item.price}</Text>
					<View style={globle_Style.flash_off_rate_sec}>
						<Text style={globle_Style.flash_offrate}>{item.originalPrice}</Text>
						<Text style={globle_Style.flash_off}>{item.discount}</Text>
					</View>
				</View>
			</View>
		</View>
	);

	const SaleItem = ({ item }) => (
		<View style={[globle_Style.flash_sal_lst, globle_Style.view_itm_lst]}>
			<View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
				<View style={globle_Style.flas_img}>
					<FlashOne />
				</View>
				<View style={globle_Style.flash_sal_itm_txt}>
					<Text style={globle_Style.flash_name} numberOfLines={2} ellipsizeMode='tails'>FS - Nike Air{'\n'}Max  270 React...</Text>
					<View style={globle_Style.rating_img}>
						<Rating />
					</View>
					<Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
					<View style={globle_Style.flash_off_rate_sec}>
						<Text style={globle_Style.flash_offrate}>$534,33</Text>
						<Text style={globle_Style.flash_off}>25% Off</Text>
					</View>
				</View>
			</View>

		</View>
	);

	return (
		<ScrollView style={globle_Style.container}>
			<View style={globle_Style.home_sec}>
				<View style={globle_Style.home_con}>
					<View style={globle_Style.home_srch}>
						<TouchableWithoutFeedback>
							<View style={globle_Style.srch_itm}>
								<Search style={globle_Style.srch_icn} />
								<TextInput style={globle_Style.srch_txt} placeholder='Search Product'></TextInput>
							</View>
						</TouchableWithoutFeedback>
						<View style={globle_Style.lik_notif}>
							<Like />
							<View style={globle_Style.notify}>
								<Notify />
								<RedAlert style={globle_Style.red_alert} />
							</View>
						</View>
					</View>
					<View style={globle_Style.banner_sec}>
						<Banner />
					</View>
					<View style={globle_Style.catg_sec}>
						<View style={globle_Style.catg_hd}>
							<Text style={globle_Style.catg_hd_txt}>Category</Text>
							<Text style={[globle_Style.catg_hd_txt, globle_Style.catghd_rgt_txt,]}>More Category</Text>
						</View>
						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<View style={globle_Style.catg_con}>
								<View style={globle_Style.catg_lst}>
									<View style={globle_Style.catg_itm}>
										<Shirt />
									</View>
									<Text style={globle_Style.catg_itm_txt}>Man Shirt</Text>
								</View>
								<View style={globle_Style.catg_lst}>
									<View style={globle_Style.catg_itm}>
										<Dress />
									</View>
									<Text style={globle_Style.catg_itm_txt}>Dress</Text>
								</View>
								<View style={globle_Style.catg_lst}>
									<View style={globle_Style.catg_itm}>
										<Manbag />
									</View>
									<Text style={globle_Style.catg_itm_txt}>Work Equipment</Text>
								</View>
								<View style={globle_Style.catg_lst}>
									<View style={globle_Style.catg_itm}>
										<Womanbag />
									</View>
									<Text style={globle_Style.catg_itm_txt}>Woman Bag</Text>
								</View>
								<View style={globle_Style.catg_lst}>
									<View style={globle_Style.catg_itm}>
										<Shirt />
									</View>
									<Text style={globle_Style.catg_itm_txt}>Man Shoes</Text>
								</View>
							</View>

						</ScrollView>
					</View>
					<View style={globle_Style.catg_sec}>
						<View style={globle_Style.catg_hd}>
							<Text style={globle_Style.catg_hd_txt}>Flash Sale</Text>
							<TouchableWithoutFeedback onPress={() => navigation.navigate('Super Flash Sale')}>
								<Text style={[globle_Style.catg_hd_txt, globle_Style.catghd_rgt_txt,]}>See More</Text>
							</TouchableWithoutFeedback>
						</View>

						<View style={globle_Style.flash_sal}>
							<FlatList
								data={Flashdata}
								renderItem={FlashItem}
								keyExtractor={item => item.id}
								showsHorizontalScrollIndicator={false}
								horizontal
							/>
						</View>

					</View>
					<View style={globle_Style.recom_prod}>
						{/* <ImageBackground source={require('../../../assets/images/re.png')}/> */}
						<View >
							<RecommProd />
						</View>
						<View style={globle_Style.recom_prod_con}>
							<Text style={globle_Style.recom_prod_txt}>Recomended Product</Text>
							<Text style={globle_Style.recom_prod_para}>We recommend the best for you</Text>
						</View>
					</View>

					<View style={globle_Style.catg_sec}>
						<View style={globle_Style.catg_hd}>
							<Text style={globle_Style.catg_hd_txt}>Mega Sale</Text>
							<TouchableWithoutFeedback onPress={() => navigation.navigate('Super Flash Sale')}>
								<Text style={[globle_Style.catg_hd_txt, globle_Style.catghd_rgt_txt,]}>See More</Text>
							</TouchableWithoutFeedback>
						</View>

						<View style={globle_Style.flash_sal}>
							<FlatList
								data={Megadata}
								renderItem={SaleItem}
								keyExtractor={item => item.id}
								showsHorizontalScrollIndicator={false}
								horizontal
							/>
						</View>

					</View>
				</View>
			</View>
		</ScrollView>
	);
}


export default HomeScreen;
