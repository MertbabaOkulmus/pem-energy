import React from 'react'

function News() {
  return (
    <div className=" w-1/2">
      <div className=" text-2xl font-semibold mt-32 pb-3">Haberler</div>
      <div className=" bg-gray-200 pt-6 pr-11 pb-5 pl-8 h-72">
        <a href="https://pemenerji.com.tr/ucretsiz-optimizerler-ile-daha-fazla-deger-yaratin-30-haziran-2024-tarihine-kadar-uzatildi/">
          <div className=" leading-10 text-3xl font-medium text-gray-800 hover:text-black ">
            Ücretsiz Optimizerler ile Daha Fazla Değer Yaratın 30 Haziran
            2024 tarihine kadar uzatıldı
          </div>
          <div className=" text-base font-medium mt-4 mb-8">
            Devamını Oku
          </div>
          <hr />
          <div className=" text-sm font-semibold text-gray-400 ">
            24/06/2024
          </div>
        </a>
      </div>
    </div>
  )
}

export default News
