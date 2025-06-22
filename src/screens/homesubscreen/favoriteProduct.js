

import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import globle_Style from '../../css/globle_Style';
import FlashOne from '../../../assets/images/flash_img_one.svg'
import FlashTwo from '../../../assets/images/flash_img_two.svg'
import FlashThree from '../../../assets/images/flash_img_three.svg'
import Flashfour from '../../../assets/images/flash_img_four.svg'
import Rating from '../../../assets/images/rating.svg'
import Delete from '../../../assets/images/delete.svg'
import { useNavigation } from '@react-navigation/native';

const FavoriteProduct = () => {

const navigation= useNavigation()
    return (
        <ScrollView style={globle_Style.container}>
            
            <View style={globle_Style.fav_prodt}>
                <View style={globle_Style.view_itm}>
                    <View style={globle_Style.flash_sal}>
                        <View style={[globle_Style.flash_sal_lst, globle_Style.view_itm_lst]}>
                            <TouchableWithoutFeedback>
                                <View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
                                    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Product Details')}>
                                    <View style={globle_Style.flas_img}>
                                        <FlashOne />
                                    </View>
                                    </TouchableWithoutFeedback>
                                    <View style={globle_Style.flash_sal_itm_txt}>
                                        <Text style={globle_Style.flash_name} numberOfLines={2} ellipsizeMode='tails'>Nike Air Max 270 React ENG</Text>
                                        <View style={globle_Style.rating_img}>
                                            <Rating />
                                        </View>
                                        <Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
                                        <View style={globle_Style.flash_off_rate_sec}>
                                            <View style={globle_Style.fav_rate}>
                                                <Text style={globle_Style.flash_offrate}>$534,33</Text>
                                                <Text style={globle_Style.flash_off}>24% Off</Text>
                                            </View>
                                            <Delete />
                                        </View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
                                <View style={globle_Style.flas_img}>
                                    <FlashTwo />
                                </View>
                                <View style={globle_Style.flash_sal_itm_txt}>
                                    <Text style={globle_Style.flash_name} numberOfLines={2} ellipsizeMode='heads'>FS - QUILTED{'\n'}MAXI CROS...</Text>
                                    <View style={globle_Style.rating_img}>
                                        <Rating />
                                    </View>
                                    <Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
                                    <View style={globle_Style.flash_off_rate_sec}>
                                        <View style={globle_Style.fav_rate}>
                                            <Text style={globle_Style.flash_offrate}>$534,33</Text>
                                            <Text style={globle_Style.flash_off}>24% Off</Text>
                                        </View>
                                        <Delete />
                                    </View>

                                </View>
                            </View>
                            <View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
                                <View style={globle_Style.flas_img}>
                                    <FlashThree />
                                </View>
                                <View style={globle_Style.flash_sal_itm_txt}>
                                    <Text style={globle_Style.flash_name} numberOfLines={2} ellipsizeMode='heads'>MS - Nike Air {'\n'}Max 270 React...</Text>
                                    <View style={globle_Style.rating_img}>
                                        <Rating />
                                    </View>
                                    <Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
                                    <View style={globle_Style.flash_off_rate_sec}>
                                        <View style={globle_Style.fav_rate}>
                                            <Text style={globle_Style.flash_offrate}>$534,33</Text>
                                            <Text style={globle_Style.flash_off}>24% Off</Text>
                                        </View>
                                        <Delete />
                                    </View>
                                </View>
                            </View>
                            <View style={[globle_Style.flash_sal_itm, globle_Style.view_itm_itm]}>
                                <View style={globle_Style.flas_img}>
                                    <Flashfour />
                                </View>
                                <View style={globle_Style.flash_sal_itm_txt}>
                                    <Text style={globle_Style.flash_name} numberOfLines={2} ellipsizeMode='heads'>FS - Nike Air{'\n'}Max  270 React...</Text>
                                    <View style={globle_Style.rating_img}>
                                        <Rating />
                                    </View>
                                    <Text style={[globle_Style.flash_name, globle_Style.flash_rate]}>$299,43</Text>
                                    <View style={globle_Style.flash_off_rate_sec}>
                                        <View style={globle_Style.fav_rate}>
                                            <Text style={globle_Style.flash_offrate}>$534,33</Text>
                                            <Text style={globle_Style.flash_off}>24% Off</Text>
                                        </View>
                                        <Delete />
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


export default FavoriteProduct;
