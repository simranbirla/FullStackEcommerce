import { StyleSheet, View, FlatList, } from 'react-native';

import products from '../assets/products.json'
import ProductCard from '@/components/ProductCard';
import { Button, ButtonText } from '@/components/ui/button';



export default function HomeScreen() {
  return (
    <View>
      <Button action="positive">
        <ButtonText>Hello</ButtonText>
      </Button>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
