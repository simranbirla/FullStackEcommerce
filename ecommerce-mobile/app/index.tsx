import { StyleSheet, View, FlatList, Platform, useWindowDimensions, ActivityIndicator, } from 'react-native';

import ProductCard from '@/components/ProductCard';
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';
import { getProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';
import { Text } from '@/components/ui/text';



export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });


  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Error while fetching the products</Text>
  }

  return (
    <View className='flex-1'>
      <FlatList
        key={numColumns}
        data={data}
        numColumns={numColumns}
        contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
        columnWrapperClassName="gap-2"
        renderItem={({ item }) => <ProductCard {...item} />}
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
