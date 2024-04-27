export type OrderItemType = {
    name : string , 
    photo : string , 
    prize : number , 
    quantity : number , 
    _id : string 


}; 
export type OrderType = {
    name : string , 
    address : string , 
    city : string , 
    country : string, 
    state : string, 
    pincode : number , 
    status : "Processing" | "shipped" | "delivered",
    subtotal : number , 
    discount : number , 
    shippedCharges : number , 
    tax : number, 
    total : number , 
    orderItems : OrderItemType[], 

    _id : string 


}; 