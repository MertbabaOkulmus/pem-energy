"use client";
import pemlogo from "./pemlogo.png";
import Image from "next/image";
import "./globals.css";
import email from "./email.png";
import phone from "./phone.png";
import search from "./search.png";


import React, { useEffect, useState } from "react";
import { Input } from "postcss";

export default function RootLayout({ children }) {
  const [layoutList, setLayoutList] = useState([]);
  useEffect(() => {
    setLayoutList([
      "Anasayfa","Hakkımızda","Haberler","Çözümler","Ürünler","Servis & Destek","İletişim","Türkçe"
    ]);
  }, []);
  return (
    <html lang="en">
      <body>
        <div className=" bg-black">
          <div className="text-white flex justify-between items-center px-4 mx-6 py-8">
            <div>
              <a href="http://localhost:3000/">
                <Image height={80} width={300} src={pemlogo} />
              </a>
              <br></br>
            </div>

            <div className="flex items-center">
              <div className="flex items-center">
                <Image
                  height={30}
                  width={40}
                  src={phone}
                  className=" pr-2 py-2"
                />
                <div>
                  <a href="tel:+90 216 576 66 60">+90 216 576 66 60</a>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <Image height={30} width={40} src={email} className=" pr-2" />
                  <div>
                    <a href="mailto:satis@pemenerji.com.tr">
                      satis@pemenerji.com.tr
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  items-end bg-black pr-2 mb-0 justify-center">
              <input className=" border-white bg-black"/>
              <Image
                height={25}
                width={25}
                src={search}
                className=" relative right-8"
                alt="search"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around bg-orange-500 py-4">
          {layoutList.map((aybuke, index) => (
            <>
              <div className=" text-white hover:text-black text-base font-semibold">
                {aybuke}
              </div>
              {layoutList.length-1!==index && (<div className="border-r-2"></div>)}
             
            </>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
