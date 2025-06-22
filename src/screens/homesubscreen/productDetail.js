

import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import globle_Style from '../../css/globle_Style';
import FlashOne from '../../../assets/images/flash_img_one.svg'
import FlashTwo from '../../../assets/images/flash_img_two.svg'
import FlashThree from '../../../assets/images/flash_img_three.svg'
import Flashfour from '../../../assets/images/flash_img_four.svg'
import Rating from '../../../assets/images/rating.svg'
import Delete from '../../../assets/images/delete.svg'
import BackArrow from '../../../assets/images/back_arrow.svg'
import SearchHd from '../../../assets/images/Search_hd.svg'
import Menu from '../../../assets/images/menu.svg'
import ProductImg from '../../../assets/images/product_img.svg'
import Like from '../../../assets/images/like.svg'

const ProductDetails = () => {


    return (
        <ScrollView style={globle_Style.container}>
            <View style={globle_Style.fav_prodt}>
                <View style={globle_Style.header_sec}>
                    <View style={globle_Style.header_con}>
                        <View style={globle_Style.header_itm_lft}>
                            <View style={globle_Style.header_back_btn}>
                                <BackArrow />
                            </View>
                            <Text style={globle_Style.header_txt}>Nike Air Max 270 Rea...</Text>
                        </View>
                        <View style={globle_Style.header_itm_rgt}>
                            <SearchHd style={{ marginRight: 16 }} />
                            <Menu />
                        </View>

                    </View>
                </View>
                <View style={globle_Style.product_bannr}>
                    <ProductImg />
                </View>
                <View style={globle_Style.prodct_con}>
                    <View style={globle_Style.prodct_hd}>
                        <Text style={globle_Style.prodct_hd_txt}>Nike Air Zoom Pegasus 36 Miami</Text>
                        <Like/>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}


export default ProductDetails;
