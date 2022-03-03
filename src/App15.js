import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddToCart = ({ item, setItems, id }) => {
    const handleClick = () => {
        setItems((items) => {
            const newItems = [...items];
            newItems.forEach((el) => {
                if (el.id === id) {
                    el.qty = 1;
                }

            })
            return newItems;
        })
    }
    return <button onClick={() => handleClick()}>ADD TO CART</button>
}
const UpdateCart = ({ item, setItems, id }) => {
    const inc = () => {
        setItems((items) => {
            const newItems = [...items]  
            newItems.forEach((el) => {
                if (el.id === id) {
                    el.qty += 1;
                }
            })
            return newItems;
        })
    }
    const dec = () => {
        setItems((items) => {
            const newItems = [...items ] 
            newItems.forEach((el) => {
                if (el.id === id) {
                    el.qty -= 1;
                }
            })
            return newItems;
        })
    }
    return <span>
        <button onClick={() => {
            inc(item.qty + 1)
        }}>+</button>
        {item.qty}
        <button onClick={() => {
            dec(item.qty - 1)
        }}>-</button>
    </span>
}
const Item = ({ item, setItems }) => {
    return <>
       {item.stock?<div><li>{item.name}||Price: &#8377;{item.price}</li>
        {item.qty > 0 ? <UpdateCart item={item} id={item.id} setItems={setItems} /> : <AddToCart item={item} id={item.id} setItems={setItems} />}
    </div>:<div style={{color:"red"}}><li>{item.name}||Price: &#8377;{item.price}</li>
        Out of stock
    </div>}
    </>
}

const Product = ({ items, setItems }) => {
    return <>
    <h2>PRODUCT</h2>
    <ul>
        {
            items.map((item) => {
                return <Item key={item.id} item={item} setItems={setItems} />
            })
        }
    </ul>
    </>
}

const Cart = ({items,setItems}) => {

    let sum=0;
    const totalPrice=()=>{
        items.forEach((el)=>{
            if(el.qty>0){
                sum+=el.qty*el.price;
            }
        })
        return sum;
    }
    return <div>
        <h2>CART</h2>
       <ul>
       {
            items.map((item) => {
                
                if(item.qty>0){
                    
                    return <Item key={item.id} item={item} setItems={setItems} />
                }
                
            })
        }

      </ul>

      <h2>Total Price:{totalPrice()}</h2>
        
    </div>
}

const App15 = () => {

    const [items, setItems] = useState([
        { id: uuidv4(), name: "Apple", price: 10, qty: 0, stock: true },
        { id: uuidv4(), name: "Mango", price: 20, qty: 0, stock: true },
        { id: uuidv4(), name: "Banana", price: 30, qty: 0, stock: true },
        { id: uuidv4(), name: "Pineapple", price: 40, qty: 0, stock: false }])

    return <div>
        <Product items={items} setItems={setItems} />
        <Cart items={items} setItems={setItems} />
    </div>
}

export default App15;