import React, { useState } from 'react'
import { Button, NavItem } from 'react-bootstrap'


const products=[
    {id:1,name:"laptop",brand:"dell",price:28000,qty:1},
    {id:2,name:"laptop",brand:"redmi",price:42000,qty:1},
    {id:3,name:"laptop",brand:"lenova",price:34000,qty:1},
    {id:4,name:"laptop",brand:"asus",price:25000,qty:1},
    {id:5,name:"laptop",brand:"apple",price:86000,qty:1},

]

const Keys = () => {
    
    const[items,setitem]=useState(products)
    const changeqty = (id)=>{
        var newprice=products.map((item)=>
        {
            if (item.id === id){
                return item.price
            }
        })
        const newitem=items.map((item)=>
            item.id ===id? {...item,qty:item.qty+1 , price:(item.qty+1)*parseInt(newprice)}:item)
            setitem(newitem)
    }
  return (
    <div>
        {items.map((product)=>{
            return(
                <div className='container bg-success text-center p-5 mb-2'> 
                    <h1>{product.name}</h1>
                    <p>{product.brand}</p>
                    <p>{product.price}</p>
                    <p>{product.qty}</p>
                    <Button onClick={()=>changeqty(product.id)}>+</Button>
                </div>
            )
        }
        )}
    </div>
  )
}

export default Keys