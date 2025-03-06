const API_URL = process.env.EXPO_PUBLIC_API_URL

export const getProducts = async () => {
    const res = await fetch(`${API_URL}/products`)
    const data = await res.json()

    if (!res.ok) {
        throw new Error('Error caugh')
    }
    return data
}