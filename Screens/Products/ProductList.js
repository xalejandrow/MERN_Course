import React from 'react';
import {TouchableOpacity,View,Dimensions} from 'react-native';
import ProductCard from './ProductCard'
var {width}=Dimensions.get('window');
const ProductList=(props)=>{
    const {item}=props;
    return(
        <TouchableOpacity 
            style = { {width : '50%'}}
            onPress={() =>
                props.navigation.navigate("Product Detail", { item: item })
            }
            >
            <View style={{width:width/2,backgroundColor:'#EBEBEB'
                }}>
                    <ProductCard {...item}/>
            </View>
 
        </TouchableOpacity>
    )
 
}
export default ProductList;


// import React from 'react';
// import { TouchableOpacity, View, Dimensions, Touchable } from 'react-native'
// import ProductCard from './ProductCard'
 
// let { width } = Dimensions.get('window');
 
 
// const ProductList = (props) => {
//     const { item } = props;
//     return (
//         <TouchableOpacity style={{ width: '50%' }}>
//             <View style={{
//                 width: width / 2,
//                 backgroundColor: 'gainsboro'
//             }}>
//                 <ProductCard {...item} />
//             </View>
//         </TouchableOpacity>
//     )
// }
 
// export default ProductList;