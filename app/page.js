import Map from "./components/Map.jsx";
import ContentCardList from "./components/ContentCardList.jsx";
import ProductCardList from "./components/ProductCardList.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Logo from "./components/Logo.jsx";
import PemSolar from "./components/PemSolar.jsx";
import News from "./components/News.jsx";
import LetsPlanTogether from "./components/LetsPlanTogether.jsx";
import MainSlider from "./components/MainSlider.jsx";
export default function Home() {
  return (
    <div>
      <MainSlider />
      <div className="flex items-center justify-center mt-12 mx-24 ">
        <ContentCardList />
      </div>

      <div className="mb-14">
        <div className=" text-blue-900 font-sans text-2xl font-bold flex items-center justify-center my-14">
          ÜRÜNLERİMİZ
        </div>
        <ProductCardList />
      </div>
      <AboutUs />
      <div className=" flex items-center p-2 my-8 justify-evenly mx-4">
        <Logo />
      </div>
      <PemSolar />
      <div className=" mx-36 flex items-baseline">
        <News />
        <LetsPlanTogether />
      </div>

      <div className=" py-28">
        <Map />
      </div>
      <div>
        <div className=" text-3xl font-semibold text-white pt-5 pb-4 pl-8 bg-slate-500 w-1/2">
          Hakkımızda & İletişim
        </div>
      </div>
      <div>
        <div className=" text-gray-400">
          PEM Enerji Sanayi ve Ticaret Limited Şirketi 2007 yılında başlamış
          olduğu faaliyetlerine tecrübeli yönetim kadrosunun rehberliğinde, 2013
          yılında Enerji departmanını ayırarak, enerji kalitesi, verimliliği,
          sürekliliği ve alternatif enerji kaynakları konularında...{" "}
        </div>
      </div>
    </div>
  );
}
