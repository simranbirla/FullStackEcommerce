import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export type TProductCard =
    {
        "id": number,
        "name": string,
        "description": string,
        "image": string,
        "price": number
    }

function ProductCard({ id, name, description, image, price }: TProductCard) {
    return (
        <Card className="p-5 rounded-lg max-w-[360px] flex-1">
            <Image
                source={{
                    uri: image
                }}
                className="mb-6 h-[240px] w-full rounded-md "
                alt={name}
                resizeMode="contain"
            />
            <Text
                className="text-sm font-normal mb-2 text-typography-700"
            >
                {name}
            </Text>
            <VStack className="mb-6">
                <Heading size="md" className="mb-4">
                    {price}
                </Heading>
                <Text size="sm">
                    {description}
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
    );
}

export default ProductCard