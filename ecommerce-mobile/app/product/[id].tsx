import React from 'react'
import { Text } from '@/components/ui/text'
import { Stack, useLocalSearchParams } from 'expo-router'
import { VStack } from '@/components/ui/vstack'
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { useQuery } from '@tanstack/react-query'
import { fetchProductsById } from '@/api/products'
import { ActivityIndicator } from 'react-native'



const details = () => {
    const { id } = useLocalSearchParams()
    const { data: product, isLoading, error } = useQuery({
        queryKey: ['products', 'id'],
        queryFn: () => fetchProductsById(Number(id))
    })



    if (isLoading) {
        return <ActivityIndicator />
    }

    if (error) {
        return <Text>Product not found</Text>
    }

    return (
        <Card className="p-5 rounded-lg mx-auto max-w-[560px] w-full my-5 lg:max-w-[80%] flex-1">
            <Stack.Screen options={{ title: product.name, headerTitleAlign: "center" }} />
            <Image
                source={{
                    uri: product.image
                }}
                className="mb-6 h-[240px] w-full rounded-md "
                alt={product.name}
                resizeMode="contain"
            />
            <Text
                className="text-sm font-normal mb-2 text-typography-700"
            >
                {product.name}
            </Text>
            <VStack className="mb-6">
                <Heading size="md" className="mb-4">
                    {product.price}
                </Heading>
                <Text size="sm">
                    {product.description}
                </Text>
            </VStack>
            <Box
                className="flex-col sm:flex-row"
            >
                <Button
                    className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
                >
                    <ButtonText size="sm">Add to cart</ButtonText>
                </Button>
                <Button
                    variant="outline"
                    className="px-4 py-2 border-outline-300 sm:flex-1"
                >
                    <ButtonText
                        size="sm"
                        className="text-typography-600"
                    >
                        Wishlist
                    </ButtonText>
                </Button>
            </Box>
        </Card>
    )
}

export default details