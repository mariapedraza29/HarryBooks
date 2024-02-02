import React, { useState } from "react";
import { Item } from "../Item/Item";
import './ItemList.css'

export const ItemList = () => {
const [products, setProducts] = useState([])


const url = 'https://localhost:7102/';
fetch (url+"api/Book/Listar").then((e)=>{
  return e.json()
}).then((data)=>{
  setProducts(data.response)
})

  return (
    <div className="items-list">
      {products.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};
