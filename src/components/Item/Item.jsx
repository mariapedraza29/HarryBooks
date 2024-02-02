import React, { useContext } from "react";
import './Item.css'
import { CartContext } from "../../contexts/ShoppingCartContext";

export const Item = ({ title:name, price,quantity:quanty, idBook:id, imageBook:imgUrl }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item-box">
      <div className= 'item-name'>{name}</div>
      <img src={imgUrl} width="180" height="250" />
      <div className="item-price">${price}</div>
      <div className="item-price">{quanty-quantityPerItem}</div>
      <div className="buttons">
        {quantityPerItem === 0 ? (
          <button className="item-add-button" onClick={() => addToCart()}>
            Add
          </button>
          ) : (
            <button className="item-plus-button" onClick={() => addToCart()}>
              +
            </button>
          )}
          {quantityPerItem > 0 && (
              <div className="item-quantity">{quantityPerItem}</div>
          )}
          {quantityPerItem > 0 && (
            <button className="item-minus-button" onClick={() => removeItem(id)}>
              -
            </button>
          )}
      </div>
      
    </div>
  );
};
