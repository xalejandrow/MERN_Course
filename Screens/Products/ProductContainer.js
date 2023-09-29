import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Container, Header, Icon, Item, Input, Text, NativeBaseProvider } from 'native-base';

import ProductList from './ProductList'

const data = require('../../assets/data/products.json')
 
/**
 * ProductContainer Component
 * 
 * @returns 
 */
const ProductContainer = () => {
 
    const [products, setProducts] = useState([]);
    const [productsFilter, setProductsFiltered] = useState([]);
 
    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data)

        return () => {
            setProducts([])
        }
    }, [])
 
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name='ios-search'/>
                    <Input 
                        placeholder='Search'
                        // onFocus={}
                        // onChangeText={}
                    />
                </Item>

            </Header>
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
        </Container>
    )
}
 
export default ProductContainer;