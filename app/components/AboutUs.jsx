import React from 'react'

function AboutUs() {
  return (
    <div>
      <div className=" h-60 bg-[url('https://pemenerji.com.tr/wp-content/uploads/2021/02/frontech_slide4-1000x350-1.jpg')] bg-fixed bg-cover mt-14 ">
      <div className=" opacity-80 flex items-center justify-around  bg-amber-800 h-full -z-50">
          <div className=" w-[720px] text-center text-white ">
            PEM Enerji Sanayi ve Ticaret Limited Şirketi 2007 yılında başlamış
            olduğu faaliyetlerine tecrübeli yönetim kadrosunun rehberliğinde,
            2013 yılında Enerji departmanını ayırarak, enerji kalitesi,
            verimliliği, sürekliliği ve alternatif enerji kaynakları konularında
            danışmanlık vererek ve çözümler üreterek devam etmektedir. Böylece
            analizler ve ihtiyaç duyulan ürünlerin tasarlanması konularında
            alanını genişletmiştir.
          </div>
          <a
            href="https://pemenerji.com.tr/giris/"
            className=" opacity-100 bg-opacity-100 z-50"
          >
            <button className=" font-semibold text-base text-white bg-sky-900 py-2.5 px-12 text-center opacity-100 z-50 bg-opacity-100 ">
              Hakkımızda
            </button>
          </a>
        </div>
        </div>
    </div>
  )
}

export default AboutUs
