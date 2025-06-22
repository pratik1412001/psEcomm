

import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import globle_Style from '../../css/globle_Style';
import Banner from '../../../assets/images/banner.svg'
import FlashOne from '../../../assets/images/flash_img_one.svg'
import FlashTwo from '../../../assets/images/flash_img_two.svg'
import FlashThree from '../../../assets/images/flash_img_three.svg'
import Flashfour from '../../../assets/images/flash_img_four.svg'
import Rating from '../../../assets/images/rating.svg'
import BackArrow from '../../../assets/images/back_arrow.svg'
import SearchHd from '../../../assets/images/Search_hd.svg'
import { useNavigation } from '@react-navigation/native';

const FlashSale = () => {

    const navigation = useNavigation()

    return (
        <ScrollView style={globle_Style.container}>
            <View style={globle_Style.flash_sec}>
                <View style={globle_Style.header_sec}>
                    <View style={globle_Style.header_con}>
                        <View style={globle_Style.header_itm_lft}>
                            <View style={globle_Style.header_back_btn}>
                                <BackArrow />
                            </View>
                            <Text style={globle_Style.header_txt}>Super Flash Sale</Text>
                        </View>
                        <View style={globle_Style.header_itm_rgt}>
                            <SearchHd />
                        </View> 
                    </View>
                </View>
                <View style={globle_Style.banner_sec}>
                    <Banner />
                </View>
                <View style={globle_Style.view_itm}>
                    <View style={globle_Style.flash_sal}>
                        <View style={[globle_Style.flash_sal_lst, globle_Style.view_itm_lst]}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Favorite Product')}>
                                <View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
                                    <View style={globle_Style.flas_img}>
                                        <FlashOne />
                                    </View>
                                    <View style={globle_Style.flash_sal_itm_txt}>
                                        <Text style={globle_Style.flash_name}>Nike Air Max 270 React ENG</Text>
                                        <View style={globle_Style.rating_img}>
                                            <Rating />
                                        </View>
                                        <Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
                                        <View style={globle_Style.flash_off_rate_sec}>
                                            <Text style={globle_Style.flash_offrate}>$534,33</Text>
                                            <Text style={globle_Style.flash_off}>24% Off</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
                                <View style={globle_Style.flas_img}>
                                    <FlashOne />
                                </View>
                                <View style={globle_Style.flash_sal_itm_txt}>
                                    <Text style={globle_Style.flash_name} >FS - QUILTED MAXI CROS...</Text>
                                    <View style={globle_Style.rating_img}>
                                        <Rating />
                                    </View>
                                    <Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
                                    <View style={globle_Style.flash_off_rate_sec}>
                                        <Text style={globle_Style.flash_offrate}>$534,33</Text>
                                        <Text style={globle_Style.flash_off}>24% Off</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
                                <View style={globle_Style.flas_img}>
                                    <FlashOne />
                                </View>
                                <View style={globle_Style.flash_sal_itm_txt}>
                                    <Text style={globle_Style.flash_name} >FS - QUILTED MAXI CROS...</Text>
                                    <View style={globle_Style.rating_img}>
                                        <Rating />
                                    </View>
                                    <Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
                                    <View style={globle_Style.flash_off_rate_sec}>
                                        <Text style={globle_Style.flash_offrate}>$534,33</Text>
                                        <Text style={globle_Style.flash_off}>24% Off</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
                                <View style={globle_Style.flas_img}>
                                    <FlashOne />
                                </View>
                                <View style={globle_Style.flash_sal_itm_txt}>
                                    <Text style={globle_Style.flash_name} numberOfLines={2} ellipsizeMode='tails'>FS - QUILTED MAXI CROS...</Text>
                                    <View style={globle_Style.rating_img}>
                                        <Rating />
                                    </View>
                                    <Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
                                    <View style={globle_Style.flash_off_rate_sec}>
                                        <Text style={globle_Style.flash_offrate}>$534,33</Text>
                                        <Text style={globle_Style.flash_off}>24% Off</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}


export default FlashSale;
