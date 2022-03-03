import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddToCartButton=({id,setItems})=>{
  return <button onClick={()=>setItems((items)=>{
     const clickedItems=[...items];
     clickedItems.forEach((el)=>{
        if(el.id===id){
            el.qty=1;
        }
     })
     return clickedItems;
  })}>ADD TO CART</button>
}

const UpdateCartButton=({id,setItems,qty})=>{
      const updateQty=(id,newQty)=>{
          setItems((items)=>{
           const clickedItems=[...items];
           clickedItems.forEach((el)=>{
                if(el.id===id){
                    el.qty=newQty;
                }
           })
           return clickedItems;
          })
      }   
      
    return <span>
        <button onClick={()=>updateQty(id,qty+1)}>+</button>
        <span>*{qty}</span>
        <button onClick={()=>updateQty(id,qty-1)}>-</button>
    </span>
}
const Product=({item,setItems,inCart})=>{
    return <div>
        <li>{item.itemName} || Price : &#8377;{item.price}</li>
        {
            item.qty===0 && !inCart?
            <AddToCartButton id={item.id} setItems={setItems}/>:
            <UpdateCartButton id={item.id} setItems={setItems} qty={item.qty}/>
        }
    </div>
}

const  Products=({items,setItems})=>{
    return <div>
        <h3>Product List</h3>
        <ul>
            {
                items.map((el)=>{
                    return <Product key={el.id} item={el} setItems={setItems} inCart={false}/>
                })
            }
        </ul>
    </div>
}

const Cart=({items,setItems})=>{

    const calcTotalPrice=(items)=>{
      let sum=0;
      items.forEach((el)=>{
         if(el.qty>1){
             sum+=el.qty*el.price;
         }
      })
      return sum;
    }
  return <div>
      <h2>Cart</h2>
      <ul>
          {
              items.map((el)=>{
                if(el.qty>0){
                    return <Product key={el.id} item={el} setItems={setItems} inCart={false}/>
                }
                  
              })
          }
      </ul>
       <h2>Total price:&#8377;{calcTotalPrice(items)}</h2>
  </div>
}
const App13=()=>{

    const [cartItems, setCartItems] = useState([

        {
            id: uuidv4(),
            itemName: "mobile",
            price: 2000,
            qty: 0
        },
        {
            id: uuidv4(),
            itemName: "Laptop",
            price: 4000,
            qty: 0
        },
        {
            id: uuidv4(),
            itemName: "Desktop",
            price: 5000,
            qty: 0
        },
        {
            id: uuidv4(),
            itemName: "charger",
            price: 200,
            qty: 0
        }

    ])

    return <div>
        <h2>CART APP</h2>
        <Products items={cartItems} setItems={setCartItems}/>
        <Cart items={cartItems} setItems={setCartItems}/>
    </div>
    
   
}

export default App13;