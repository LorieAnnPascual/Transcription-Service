import React from 'react';
import { useCart } from 'react-use-cart';
import '../components/styles/AddCart.css';

const AddCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        // updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();
    
      if (isEmpty) {
          return <p className="toCart">Your cart is empty</p>;
      }


    return (
        <div>
            <div className="toCart">
                <h5>Cart: ({totalUniqueItems}) Total Items: ({totalItems})</h5> 
                <div>
                    <table className="table table-striped container-sm toCart">
                        <thead className="text-center">
                            <th>Ordered Item</th>
                        </thead>
                        {items.map(item => 
                            (
                                <tr key={item.id} className="text-center">
                                    <td>
                                        <ul>
                                            <li>
                                                <p>Title: {item.title}</p>
                                                <p>Artist: {item.artist}</p>
                                                <p>Category: {item.category}</p>
                                                <p>Price: P{item.price}</p>
                                            </li>
                                        </ul>    
                                    </td>
                                    <td>
                                        {/* <button 
                                            className="btn btn-default"
                                            onClick = {() => updateItemQuantity(item.id, item.quantity + 1)}
                                        >
                                            <i class="bi bi-plus-circle"></i>
                                        </button>
                                        {item.quantity}
                                        <button 
                                            className="btn btn-default"
                                            onClick = {() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >
                                            <i class="bi bi-dash-circle"></i>
                                        </button>    */}
                                    </td>
                                    <td className="actions">
                                        <button 
                                        className="btn btn-default"
                                        onClick = {() => removeItem(item.id)}
                                        >
                                        <i class="bi bi-trash toCart"></i>
                                        </button>
                                    </td>
                                </tr>         
                            ))}
                    </table>
                </div>
                <div className="container-sm d-flex justify-content-end toCart">
                    <h2>Total Price: P{cartTotal}</h2>
                </div>
                <div className="d-flex justify-content-evenly">
                    <button
                    className="btn btn-danger"
                    onClick = {() => emptyCart()}
                    >
                        Empty Cart
                    </button>
                    <button
                    className="btn btn-warning"
                    >
                        Checkout
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default AddCart