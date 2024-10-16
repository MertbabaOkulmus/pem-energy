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

      <div>
        <div className=" text-blue-900 font-sans text-2xl font-bold flex items-center justify-center">
        ÜRÜNLERİMİZ
        </div>
        <div className="flex items-center justify-center mt-12 mx-24 ">
        <div className="p-2.5 mx-2.5  bg-white flex items-center justify-center flex-col shadow-lg shadow-slate-500">
        <a href="https://pemenerji.com.tr/solar-sarj-kontrol-cihazlari/">
          <Image src={solarchargers} width={100} height={100} />
          </a>
          <div className="text-orange-600 text-lg font-semibold">
            Solar Şarj Kontrol Cihazları
          </div>
        </div>

        <div className="p-2.5 mx-2.5  bg-white flex items-center justify-center flex-col shadow-lg shadow-slate-400">
          <a href="https://pemenerji.com.tr/akulu-inverterler/">
          <Image src={abaxobs} width={100} height={100} />
          </a>
          <div className="text-orange-600 text-lg font-semibold">
            Akülü İnverterler
          </div>
        </div>

        <div className="p-2.5 mx-2.5  bg-white flex items-center justify-center flex-col shadow-lg shadow-slate-400">
          <a href="https://pemenerji.com.tr/hibrid-inverterler/">
          <Image src={OBSeries} width={100} height={100} />
          </a>
          <div className="text-orange-600 text-lg font-semibold">
            Hibrit İnverterler
          </div>
        </div>

        <div className="p-2.5 mx-2.5  bg-white flex items-center justify-center flex-col shadow-lg shadow-slate-400">
          <a href="https://pemenerji.com.tr/evsel-sistemler/">
          <Image src={KTLangle} width={100} height={100} />
          </a>
          <div className="text-orange-600 text-lg font-semibold">
            Evsel Sistemler
          </div>
        </div>

        <div className="p-2.5 mx-2.5 bg-white flex items-center justify-center flex-col shadow-lg shadow-slate-400">
          <a href="https://pemenerji.com.tr/sebeke-baglantili-ticari-cati-sistemleri/">
          <Image src={hua} width={100} height={100} />
          </a>
          <div className=" text-orange-600 text-lg font-semibold">
            Şebeke Bağlantılı & Ticari Çatı Sistemleri
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
