import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native'
const data = require('../../assets/data/products.json')
import ProductList from './ProductList'
 
/**
 * ProductContainer Component
 * 
 * @returns 
 */
const ProductContainer = () => {
 
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        setProducts(data);
 
        return () => {
            setProducts([])
        }
    }, [])
 
    return (
        <View>
            <Text>Product Container</Text>
            <View style={{ marginTop: 100 }}>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={({ item }) => <ProductList
                        key={item.id}
                        item={item} />}
                        keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}
 
export default ProductContainer;