


import React from 'react';
import { View, Text, Image,FlatList } from 'react-native';
import globle_Style from '../../css/globle_Style';
import Love from '../../../assets/images/love.svg'
import Delete from '../../../assets/images/delete.svg'
import Minus from '../../../assets/images/minus.svg'
import Plus from '../../../assets/images/Plus.svg'

const cartItems = [
  {
    id: '1',
    name: 'Nike Air Zoom Pegasus 36 Miami',
    price: '$299,43',
    quantity: 1,
    image: require('../../../assets/images/cart.png'),
  },
   {
    id: '2',
    name: 'Nike Air Zoom Pegasus 36 Miami',
    price: '$299,43',
    quantity: 1,
    image: require('../../../assets/images/cart.png'),
  },
  // Add more items as needed
];
const CartItem = ({ item }) => (
  <View style={globle_Style.cart_itm}>
    <View style={globle_Style.cart_itmlft}>
      <Image source={item.image} style={{ width: 61, height: 29 }} />
    </View>
    <View style={globle_Style.cart_itmrgt}>
      <View style={globle_Style.prod_name}>
        <View>
          <Text
            style={[globle_Style.address_nametxt, { width: 180 }]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.name}
          </Text>
        </View>
        <View style={globle_Style.prod_icon}>
          <View style={{ marginRight: 8 }}>
            <Love />
          </View>
          <View>
            <Delete />
          </View>
        </View>
      </View>
      <View style={globle_Style.itmadd_more}>
        <Text style={[globle_Style.flash_name, { color: '#40BFFF' }]}>{item.price}</Text>
        <View style={globle_Style.itm_addcon}>
          <View style={globle_Style.itm_addsub}>
            <Minus />
          </View>
          <View style={globle_Style.itm_addsubnum}>
            <Text style={globle_Style.itm_addsubnumtxt}>{item.quantity}</Text>
          </View>
          <View style={globle_Style.itm_addsub}>
            <Plus />
          </View>
        </View>
      </View>
    </View>
  </View>
);


const CartScreen = () => {


  return (
    <View style={globle_Style.container}>
      <View style={globle_Style.cart_sec}>
        <Text style={globle_Style.cart_sechd}>Your Cart</Text>
        <View style={globle_Style.cart_con}>
          <View style={globle_Style.cart_lst}>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CartItem item={item} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
}


export default CartScreen;
