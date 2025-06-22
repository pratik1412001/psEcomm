
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import globle_Style from '../../css/globle_Style';

const orders = [
  {
    id: 'LQNSU346JK',
    orderDate: 'August 1, 2017',
    status: 'Shipping',
    items: '2 Items purchased',
    price: '$299,43',
  },
  {
    id: 'SDG1345KJD',
    orderDate: 'August 1, 2017',
    status: 'Shipping',
    items: '1 Items purchased',
    price: '$299,43',
  },
  // You can add more orders here
];



const OrderItem = ({ item }) => (
  <View style={globle_Style.orerdetail_con}>
    <Text style={globle_Style.address_nametxt}>{item.id}</Text>
    <Text style={globle_Style.oder_date}>Order at E-comm : {item.orderDate}</Text>
    <View style={globle_Style.oder_status}>
      <View style={globle_Style.oder_statinfo}>
        <Text style={globle_Style.oder_date}>Order Status</Text>
        <Text style={globle_Style.status_info}>{item.status}</Text>
      </View>
      <View style={globle_Style.oder_statinfo}>
        <Text style={globle_Style.oder_date}>Items</Text>
        <Text style={globle_Style.status_info}>{item.items}</Text>
      </View>
      <View style={globle_Style.oder_statinfo}>
        <Text style={globle_Style.oder_date}>Price</Text>
        <Text style={[globle_Style.flash_name, { color: '#40BFFF' }]}>{item.price}</Text>
      </View>
    </View>
  </View>
);


const OrderScreen = () => {

  return (
    <View style={globle_Style.container}>
      <View style={globle_Style.orerdetail_sec}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={OrderItem}
        />
      </View>
    </View>
  );
}


export default OrderScreen;
