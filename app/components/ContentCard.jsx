import React from 'react'
import Image from "next/image";

function ContentCard({img,title}) {
    return (
        <div className="p-2.5 mx-2.5 w-full bg-orange-500 flex items-center justify-center flex-col shadow-lg shadow-slate-400 ">
            <Image src={img} width={100} height={100} />
            <div className=" text-white mb-5 text-lg font-semibold">
               {title}
            </div>
        </div>
    )
}

export default ContentCard
