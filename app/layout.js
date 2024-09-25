
import pemlogo from "./pemlogo.png"
import Image from "next/image";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" bg-black text-red-500">
          <Image height={80} width={300} src={pemlogo}/>
          ddd
        </div>
        {children}
      </body>
    </html>
  );
}
