
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

import Bg from "../../public/Bg.png"
import { GiKnifeFork } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

interface menuType{
    _id: string,
    slug: { current: string },
    mainImage: string,
    title: string,
}

const menuData = async () => {
    const response =await client.fetch(`*[_type == "menu"]{
      _id,
      slug,
      mainImage,
      title,
    }`);
    return response;
}

  
export default async function Hero () {

    const data = await menuData()

    // console.log(data)
    return(
        <>
        <div className="w-full h-auto bg-white bg-cover bg-center border-none">
            <div className="relative w-full h-auto">
            <Image src={Bg} className="w-full h-auto" alt="BackgroundImage"/>
            <div className="flex flex-col items-center gap-5 md:gap-16 w-full h-auto absolute top-[9%] lg:top-[20%]">
            <h1 className="text-2xl md:text-5xl lg:text-8xl text-white text-center font-bold cursor-pointer">Mexican Grilled<br className="hidden md:block"/>Corn Recipe</h1>
                <div className="flex items-center gap-8 md:gap-20 text-sm md:text-base lg:text-xl">
                    <div className="flex gap-2 items-center cursor-pointer">
                        <GiKnifeFork className="fill-[#FE4A51] w-5 h-5 md:w-8 md:h-8"/>
                        <p className="text-white">4 Servicing</p>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <FaRegClock className="fill-[#FE4A51] w-5 h-5 md:w-8 md:h-8"/>
                        <p className="text-white">40 Minutes</p>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <FiUser className="text-[#FE4A51] w-5 h-5 md:w-8 md:h-8"/>
                        <p className="text-white">Luice Fonci</p>
                    </div>
                </div>

                <button className="bg-red-600 text-white text-sm md:text-base font-bold p-2 md:p-5">View Reciept</button>
            </div>

                <div className=" md:-mt-24 lg:-mt-48  flex justify-between items-center px-4 md:px-16 lg:px-32">
                    {data.map((menu:menuType) => (
                        <div key={menu.slug.current}>
                            {/* {console.log(menu.mainImage)} */}
                            <Link href={`/post/${menu.slug.current}`}><Image width={384} height={400} src={urlFor(menu.mainImage).url()} alt={menu.title}/></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

// export default Hero

 {/* <div className="-mt-48 flex justify-between items-center px-32">
                    <Image className="h-96 w-[400px] cursor-pointer" src={food1} alt="food"/>
                    <Image className="h-96 w-[400px] cursor-pointer" src={food2} alt="food"/>
                    <Image className="h-96 w-[400px] cursor-pointer" src={food3} alt="food"/>
                    <Image className="h-96 w-[400px] cursor-pointer" src={food4} alt="food"/>
                </div> */}