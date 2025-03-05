import { Text } from 'react-native';

const ProductCard = ({ item }) => {

    return <Text style={{ color: "white" }}>{item.name}</Text>
}

export default ProductCard