"use client"

import Body from "./components/body";

// import { sanityFetch } from "@/sanity/lib/fetch";




// type Product={
//   _id:number
//   name:string
//   description:string
//   price:number
//   imageUrl : string

//   }

export default async function Home() {
  
  //  const products : Product []= await sanityFetch({query : allProuducts})
  
  return (
  //  <div className="flex justify-center items-center flex-col sm:flex-row flex-wrap gap-4 ">
  //      {products.map((prod)=>(
  //         <div key={prod._id} className=" flex justify-center flex-col items-center w-80 h-80 shadow-md rounded transition-transform transform hover:-translate-y-2">
  //           <Image src={prod.imageUrl} width={60} height={40} alt="pic"/>
  //           <h1 className="font-extrabold">{prod.name}</h1>
  //           {/* <p className="font-semibold">{prod.description}</p> */}
  //           <h4 className="font-bold">{prod.price}</h4>
  //           <button
  //       className="mt-2 bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
  //     >
  //       Add to Cart
  //     </button>
  //         </div>))}
         

  //  </div>


  <Body/>
  );
}
