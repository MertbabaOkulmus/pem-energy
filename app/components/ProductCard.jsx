import React from 'react'
import Image from 'next/image'


function ProductCard({text, img}) {
  return (
    
       <div className=" mx-2.5  bg-white flex items-center  flex-col shadow-lg shadow-slate-500 w-1/5 h-72">
            <div className="text-orange-400 text-lg font-semibold text-center bg-blue-950 w-full h-16 flex items-center justify-center">
              <a href="https://pemenerji.com.tr/solar-sarj-kontrol-cihazlari/">
                {text} 
              </a>
            </div>
            <a href="https://pemenerji.com.tr/solar-sarj-kontrol-cihazlari/">
              <Image src={img} width={300} height={300} />
            </a>
          </div>
    
  )
}

export default ProductCard
