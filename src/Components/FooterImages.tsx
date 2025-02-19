import Image from "next/image"
import footer1 from "../../public/footer/footer1.png"
import footer2 from "../../public/footer/footer2.png"
import footer3 from "../../public/footer/footer3.png"
import footer4 from "../../public/footer/footer4.png"
import footer5 from "../../public/footer/footer5.png"

import { FiLinkedin } from "react-icons/fi"

export default function Images (){
    return(
        <main className="relative flex justify-center items-center w-full h-auto">
        <div className="flex justify-center">
            <Image className="w-[20%] h-auto" src={footer1} alt="Footer-ads"/>
            <Image className="w-[20%] h-auto" src={footer2} alt="Footer-ads"/>
            <Image className="w-[20%] h-auto" src={footer3} alt="Footer-ads"/>
            <Image className="w-[20%] h-auto" src={footer4} alt="Footer-ads"/>
            <Image className="w-[20%] h-auto" src={footer5} alt="Footer-ads"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 absolute w-28 h-28 md:w-44 md:h-44 lg:w-60 lg:h-60 rounded-full bg-[#FE4A51] opacity-60">
            <h6 className="text:lg md:text-xl lg:text-2xl text-white">Follow Me</h6>
            <h5 className="flex items-center gap-2 text-lg md:text-3xl lg:text-4xl text-white"><FiLinkedin className="w-5 h-5 md:w-7 md:h-7 mb-1 md:mb-0"/>LinkedIn</h5>
        </div>
        </main>
    )
}