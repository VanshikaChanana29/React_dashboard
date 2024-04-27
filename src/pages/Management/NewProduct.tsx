import React, { ChangeEvent, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
// import { ChangeEvent } from 'react';

const NewProduct = () => {

  const [name , setName] = useState<string>("");
  const [prize , setprize] = useState<number>();
  const [stock , setStock] = useState<number>();
  const [photo , setPhoto] = useState<string>(""); 

  const changeImageHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        const file:File |undefined = e.target.files?.[0]; 
        const reader : FileReader = new FileReader(); 
        if(file){
          reader.readAsDataURL(file); 
          reader.onloadend= ()=>{
            if(typeof reader.result === "string") setPhoto(reader.result); 
          }
        }
  }

  return (
    <div className="adminContainer">
    {/* sidebar */}
       <AdminSidebar/>
       <main className='product-management'>
           <article>
            <form action="">
              <h2>New Product</h2>
              <div>
                <label htmlFor="">Name</label>
                <input required type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />

              </div>
              <div>
                <label htmlFor="">Prize</label>
                <input required type="number" placeholder='Prize' value={prize} onChange={(e)=>setprize(Number(e.target.value))} />

              </div>
              <div>
                <label htmlFor="">Stock</label>
                <input required type="number" placeholder='Stock' value={stock} onChange={(e)=>setStock(Number(e.target.value))} />

              </div>
              <div>
              <label>Photo</label>
              <input required type="file" onChange={changeImageHandler} />
            </div>

            {photo && <img src={photo} alt="New Image" />}
                <button type='submit'>Create</button>
            </form>
           </article>
       </main>
    {/* main */}
  </div>
  )
}

export default NewProduct