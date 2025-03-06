import { Text } from 'react-native';

export type TProductCard = {
    item: {
        "id": number
        "name": string
        "description": string
        "image": string,
        "price": number
    }
}

const ProductCard = ({ item }: TProductCard) => {

    return <Text style={{ color: "white" }}>{item.name}</Text>
}

export default ProductCard