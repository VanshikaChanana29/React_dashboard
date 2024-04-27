import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { OrderType , OrderItemType } from '../../types';
import { Link } from "react-router-dom";

const transactionManagement = () => {
  const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsaasdas",
    quantity: 4,
    prize: 2000,
  },
];


  const [order , setorder] = useState<OrderType>({name: "Abhishek Singh",
  address: "77 Black Street",
  city: "Neyword",
  state: "Nevada",
  country: "India",
  pincode: 2434341,
  status: "Processing",
  subtotal: 4000,
  discount: 1200,
  shippedCharges: 0,
  tax: 200,
  total: 4000 + 200 + 0 - 1200,
  orderItems,
  _id: "asdnasjdhbn",}); 

  const {
    name,
    address,
    city,
    country,
    state,
    pincode,
    subtotal,
    shippedCharges,
    tax,
    discount,
    total,
    status,
  } = order;
  

  const updateHandler = () => {
    setorder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "shipped" : "delivered",
    }));
  };

  return (
    <div className="adminContainer">
 
       <AdminSidebar/>
       <main className='product-management'>
           <section style={{
            padding : "5rem"
           }}>
            <h2>Order Items</h2>
            
               {order.orderItems.map((i) => (
                <ProductCard
                  name={i.name}
                  photo={i.photo}
                  _id={i._id}
                  quantity={i.quantity}
                  prize={i.prize}
                />
              ))}
            
           </section>
           <article className='shipping-info-card'>
            <h1>Order Info</h1>
            <h5>User Info</h5>
            <p>Name : {name}</p>
            <p>Address : {`${address} , ${city} , ${state} , ${country} , ${pincode}`}</p>
            <h5>Amount Info</h5>
            <p>Subtotal : {subtotal}</p>
            <p>Shipping Charges : {shippedCharges}</p>
            <p>Tax : {tax}</p>
            <p>discount : {discount}</p>
            <p>total : {total}</p>


            <h5>Status Info</h5>
            <p>status : 
            <span
              className={
                status === "delivered"
                  ? "purple"
                  : status === "shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
            </p>
            <button onClick={updateHandler}>Process Status</button>
           </article>
       </main>

  </div>
  )
}

const ProductCard = ({ name, photo, prize, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${prize} X {quantity} = ${prize * quantity}
    </span>
  </div>
);


export default transactionManagement