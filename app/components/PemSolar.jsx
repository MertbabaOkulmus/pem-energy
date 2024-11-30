import React from 'react'


function PemSolar() {
  return (
    <div className=" flex items-center justify-evenly h-60 bg-cover text-center bg-[url('https://pemenerji.com.tr/wp-content/uploads/2021/02/bg-pheader-team-2.jpg')]">
      <div>
        <div className=" text-5xl font-semibold mb-10 text-white ">
          Pem Solar Akademi
        </div>
        <div className=" text-orange-400">
          Eğitim Programları | Web Arşivi | Teknik İpuçlar
        </div>
      </div>
      <a
        href="https://pemenerji.com.tr/pem-solar-akademi/"
        className=" py-2 px-11 bg-orange-400"
      >
        <button className=" font-medium text-base text-white text-center ">
          Daha Fazla Oku
        </button>
      </a>
    </div>
  )
}

export default PemSolar
