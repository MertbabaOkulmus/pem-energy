import React from 'react'
import solarchargers from "../assets/solarchargers.png";
import abaxobs from "../assets/abaxobs.png";
import OBSeries from "../assets/OBSeries.png";
import KTLangle from "../assets/KTLangle.png";
import hua from "../assets/hua.png";
import Image from 'next/image';
import ProductCard from './ProductCard';
function ProductCardList() {
  return (
  
    <div>
    
      <div className="flex items-center justify-center mx-24 ">
         <ProductCard text="Solar Şarj Kontrol Cihazları" img={solarchargers}/>

          <div className=" mx-2.5  bg-white flex items-center  flex-col shadow-lg shadow-slate-400 w-1/5 h-72">
            <div className="text-orange-400 text-lg font-semibold bg-blue-950 w-full h-16 flex items-center justify-center">
              <a href="https://pemenerji.com.tr/en/battery-inverters/">
                Akülü İnverterler 
              </a>
            </div>
            <a href="https://pemenerji.com.tr/akulu-inverterler/">
              <Image src={abaxobs} width={300} height={300} />
            </a>
          </div>

          <div className=" mx-2.5  bg-white flex items-center flex-col shadow-lg shadow-slate-400 w-1/5 h-72">
            <div className="text-orange-400 text-lg font-semibold bg-blue-950 w-full h-16 flex items-center justify-center">
              <a href="https://pemenerji.com.tr/en/hybrid-inverters/">
                Hibrit İnverterler
              </a>
            </div>
            <a href="https://pemenerji.com.tr/hibrid-inverterler/">
              <Image src={OBSeries} width={300} height={300} />
            </a>
          </div>

          <div className=" mx-2.5  bg-white flex items-center flex-col shadow-lg shadow-slate-400 w-1/5 h-72">
            <div className="text-orange-400 text-lg font-semibold bg-blue-950 w-full h-16 flex items-center justify-center">
              <a href="https://pemenerji.com.tr/en/residental-systems/">
                Evsel Sistemler
              </a>
            </div>
            <a href="https://pemenerji.com.tr/evsel-sistemler/">
              <Image src={KTLangle} width={300} height={300} />
            </a>
          </div>

          <div className=" mx-2.5 bg-white flex items-center flex-col shadow-lg shadow-slate-400 w-1/5 h-72 ">
            <div className=" text-orange-400 text-lg font-semibold text-center bg-blue-950 w-full h-16 flex items-center justify-center">
              <a href="https://pemenerji.com.tr/en/utility-commercial-system/">
                Şebeke Bağlantılı & Ticari Çatı Sistemler
              </a>
            </div>
            <a href="https://pemenerji.com.tr/sebeke-baglantili-ticari-cati-sistemleri/">
              <Image src={hua} width={300} height={300} />
            </a>
          </div>
        </div>
    </div>
  )
}

export default ProductCardList
