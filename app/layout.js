import pemlogo from "./pemlogo.png";
import Image from "next/image";
import "./globals.css";
import email from "./email.png";
import phone from "./phone.png";
import search from "./search.png";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div className=" bg-black">
          <div className="text-white flex justify-between items-center px-4 mx-6 py-8">
            <div>
            <a href="http://localhost:3000/"><Image height={80} width={300} src={pemlogo} /></a><br></br>
            </div>

            <div className=" float">
              <div className="flex items-center" >
                <Image  height={30} width={40}  src={phone} className=" pr-2 py-2"  />
              <div>
                <a href="tel:+90 216 576 66 60">+90 216 576 66 60</a>
              </div>
              </div>

              <div>
                <div className="flex items-center">
                <Image height={30} width={40} src={email} className=" pr-2" />
                  <div>
                  <a href="mailto:satis@pemenerji.com.tr">satis@pemenerji.com.tr</a>
                  </div>
                  
                </div>
              </div>
            </div>

 
  <div className="flex  items-end bg-black pr-2 mb-0 " >
              <Image height={30} width={40}  src={search} className="bg-white" alt="search"  />
            </div>
            </div>
           
            </div>
     
        

        {children}
      </body>
    </html>
  );
}
