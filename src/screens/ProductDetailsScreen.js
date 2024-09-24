import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../components/styles';

export default function ProductDetailsScreen({ route }) {
  const { productId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <Text>Product ID: {productId}</Text>
    </View>
  );
}
