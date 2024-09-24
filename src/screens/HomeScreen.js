import React, { Fragment } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../components/styles';



const products = [
  { id: 1, name: 'Frankincense' },
  { id: 2, name: 'Myrrh' },
  { id: 3, name: 'Rose Essential Oil' },
];

export default function HomeScreen({ navigation }) {
  return (
    <Fragment>

    <View style={styles.container}>
      <Text style={styles.title}>Awafi Mill</Text>
      <Text style={styles.title} onPress={()=>navigation.navigate('login')}>Log in </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}
            style={styles.productItem}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
    </Fragment>
  );
}
