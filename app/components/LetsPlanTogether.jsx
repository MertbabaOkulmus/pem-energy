import React from 'react'
import Image from 'next/image'
import map from '../assets/map.png'
function LetsPlanTogether() {
  return (
      <div className="w-1/2 px-8 ">
          <div className=" text-2xl font-semibold mt-32 pb-3 px-8">
            {" "}
            Beraber Planlayalım{" "}
          </div>
          <div className=" border border-gray-300 border-b-8 p-7 hover:border-b-black hover:shadow-2xl hover:scale-105">
            <div className=" pb-6">
              <Image src={map} width={50} height={50} />
            </div>
            <a href="https://pemenerji.com.tr/roadshow/">
              <div className=" text-3xl text-gray-800 font-medium mb-4">
                {" "}
                Roadshow
              </div>
            </a>
            <div className=" mb-12">
              Let's plan our presentation and travel program together.
            </div>
            <a href="https://pemenerji.com.tr/roadshow/">
              <div className=" text-slate-600 font-semibold">Contact</div>
            </a>
          </div>
        </div>
  )
}

export default LetsPlanTogether
