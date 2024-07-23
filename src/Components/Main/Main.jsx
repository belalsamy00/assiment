import React, { useState } from 'react';
import Cards from '../Cards/Cards.jsx';
function Main(props) {
    const [product,settproduct] = useState([
        {
            id : '1',
            Name : 'iphone xs',
            Price : '15000',
            Cat : 'Mobile Phone',
            Count : 12,
            Sold : true,
        },
        {
            id : '2',
            Name : 'iphone 11',
            Price : '20000',
            Cat : 'Mobile Phone',
            Count : 12,
            Sold : false,
        },
        {
            id : '3',
            Name : 'iphone 11 pro',
            Price : '25000',
            Cat : 'Mobile Phone',
            Count : 12,
            Sold : false,
        },
        {
            id : '4',
            Name : 'iphone 12',
            Price : '30000',
            Cat : 'Mobile Phone',
            Count : 12,
            Sold : false,
        },
    ])
    function deleteCard(id) {
        let NewProduct = structuredClone(product)
        let filterProduct = NewProduct.filter((item)=>{ return item.id != id})
        settproduct(filterProduct)
    }
    function CountInc(index) {
        let NewProduct = structuredClone(product)
        NewProduct[index].Count++
        settproduct(NewProduct)
    }
    function CountDec(index) {
        let NewProduct = structuredClone(product)
        if (product[index].Count) {
            
            NewProduct[index].Count--
            settproduct(NewProduct)
        }
    }
    return (
        <div className='flex w-100 justify-around'>
            {product.map( (Oneproduct,index) => {return <Cards key={index} index={index} data={Oneproduct} deleteOne={deleteCard} CountDe ={CountDec} CountIn={CountInc}/>})}
        </div>
    );
}

export default Main;