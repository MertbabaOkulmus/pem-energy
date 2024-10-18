import Image from "next/image";
import temizenerji from "./temizenerji.png";
import kaliteliurun from "./kaliteliurun.png";
import akilliteknoloji from "./akilliteknoloji.png";
import uatecrube from "./uatecrube.png";
import enerjiPaneli from "./enerjiPaneli.jpg";
import solarchargers from "./solarchargers.png";
import abaxobs from "./abaxobs.png";
import OBSeries from "./OBSeries.png";
import KTLangle from "./KTLangle.png";
import hua from "./hua.png";
import huaweı from "./huaweı.png";
import abax from "./abax.png";
import noks from "./noks.png";
import map from "./map.png";

export default function Home() {
  return (
    <div>
      <Image src={enerjiPaneli} className=" w-full h-[500px]" />

      <div className="flex items-center justify-center mt-12 mx-24 ">
        <div className="p-2.5 mx-2.5 w-full bg-orange-500 flex items-center justify-center flex-col shadow-lg shadow-slate-400 ">
          <Image src={temizenerji} width={100} height={100} />
          <div className=" text-white mb-5 text-lg font-semibold">
            {" "}
            Temiz Enerji{" "}
          </div>
        </div>
        <div className=" p-2.5 mx-2.5 w-full bg-orange-500 flex items-center justify-center flex-col shadow-lg shadow-slate-400">
          <Image src={kaliteliurun} width={100} height={100} />

          <div className="text-white mb-5 text-lg font-semibold">
            Enerji Verimliliği{" "}
          </div>
        </div>
        <div className="p-2.5 mx-2.5 w-full bg-orange-500 flex items-center justify-center flex-col shadow-lg shadow-slate-400">
          <Image src={akilliteknoloji} width={100} height={100} />
          <div className="text-white mb-5 text-lg font-semibold">
            Akıllı Teknoloji{" "}
          </div>
        </div>
        <div className="p-2.5 mx-2.5 w-full  bg-orange-500 flex items-center justify-center flex-col shadow-lg shadow-slate-400">
          <Image src={uatecrube} width={100} height={100} />
          <div className="text-white mb-5 text-lg font-semibold">
            Uluslararası Tecrübe{" "}
          </div>
        </div>
      </div>

      <div className="mb-14">
        <div className=" text-blue-900 font-sans text-2xl font-bold flex items-center justify-center my-14">
          ÜRÜNLERİMİZ
        </div>
        <div className="flex items-center justify-center mx-24 ">
          <div className=" mx-2.5  bg-white flex items-center  flex-col shadow-lg shadow-slate-500 w-1/5 h-72">
            <div className="text-orange-400 text-lg font-semibold text-center bg-blue-950 w-full h-16 flex items-center justify-center">
              <a href="https://pemenerji.com.tr/solar-sarj-kontrol-cihazlari/">
                Solar Şarj Kontrol Cihazları
              </a>
            </div>
            <a href="https://pemenerji.com.tr/solar-sarj-kontrol-cihazlari/">
              <Image src={solarchargers} width={300} height={300} />
            </a>
          </div>

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

      <div className=" flex justify-around items-center h-60 bg-yellow-700 bg-opacity-10 bg-[url('https://pemenerji.com.tr/wp-content/uploads/2021/02/frontech_slide4-1000x350-1.jpg')] bg-fixed bg-cover mt-14 ">
        <div className=" w-[720px] text-center text-white">
          PEM Enerji Sanayi ve Ticaret Limited Şirketi 2007 yılında başlamış
          olduğu faaliyetlerine tecrübeli yönetim kadrosunun rehberliğinde, 2013
          yılında Enerji departmanını ayırarak, enerji kalitesi, verimliliği,
          sürekliliği ve alternatif enerji kaynakları konularında danışmanlık
          vererek ve çözümler üreterek devam etmektedir. Böylece analizler ve
          ihtiyaç duyulan ürünlerin tasarlanması konularında alanını
          genişletmiştir.
        </div>
        <a href="https://pemenerji.com.tr/giris/">
          <button className=" font-semibold text-base text-white bg-sky-900 py-2.5 px-12 text-center">
            Hakkımızda
          </button>
        </a>
      </div>

      <div className=" flex items-center p-2 mt-7 mb-7 justify-center mx-4">
        <Image src={huaweı} width={251} height={51} />
        <Image src={abax} width={251} height={51} />
        <Image src={noks} width={251} height={51} />
      </div>

      <div className=" h-60 bg-cover mb-28 mt-9 flex justify-around bg-[url('https://pemenerji.com.tr/wp-content/uploads/2021/02/bg-pheader-team-2.jpg')]">
        <div className=" text-4xl font-semibold text-white mt-9 ">
          Pem Solar Akademi
        </div>
        <div className=" text-orange-400">
          Eğitim Programları | Web Arşivi | Teknik İpuçlar
        </div>
        <a href="https://pemenerji.com.tr/pem-solar-akademi/">
          <button className=" font-semibold text-base bg-orange-400 text-white text-center">
            Daha Fazla Oku
          </button>
        </a>
      </div>

      <div className=" flex items-center justify-between pb-3 mx-72">
        <div className=" text-2xl font-semibold">Haberler</div>
        <div className=" text-2xl font-semibold">Beraber Planlayalım</div>
      </div>

      <div className=" flex pb-28">
        <div>
          <a href="https://pemenerji.com.tr/ucretsiz-optimizerler-ile-daha-fazla-deger-yaratin-30-haziran-2024-tarihine-kadar-uzatildi/">
            <div className=" leading-10 text-2xl font-medium text-neutral-700 hover:text-black">
              Ücretsiz Optimizerler ile Daha Fazla Değer Yaratın 30 Haziran 2024
              tarihine kadar uzatıldı
            </div>
            <div className=" text-sm font-medium">Devamını Oku</div>
            <hr />
            <div>24/06/2024</div>
          </a>
        </div>

        <div>
          <div>
            <Image src={map} width={60} height={60} />
          </div>
          <div className=" text-neutral-700 hover:text-black font-medium text-xl">
            Roadshow
          </div>
          <div>Let's plan our presentation and travel program together.</div>
          <div className="text-neutral-700 hover:text-black">Contact</div>
        </div>
      </div>

      <div className=" p-28">
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48152.69528633698!2d29.01271007818618!3d41.035243200158526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac826d524c9f1%3A0xc14f7612337b7f38!2zw5xza8O8ZGFyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1519733547760"
            width="1200"
            height="250"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </p>
      </div>

      <div className=" flex items-center">
        <div>
          <div>Hakkımızda & İletişim</div>
          <div>PEM Enerji Sanayi ve Ticaret Limited Şirketi 2007 yılında başlamış olduğu faaliyetlerine tecrübeli yönetim kadrosunun rehberliğinde, 2013 yılında Enerji departmanını ayırarak, enerji kalitesi, verimliliği, sürekliliği ve alternatif enerji kaynakları konularında...</div>
          <div>Devamını Oku</div>
          <div>mail</div>
          <div>numara</div>
          <div>konum</div>

        </div>

        <div>
          <div>Bize Ulaşın</div>
          <div>telefon</div>
          <div>isim</div>
          <div>eposta</div>
          <div>gönder</div>
        </div>
      </div>
    </div>
  );
}
