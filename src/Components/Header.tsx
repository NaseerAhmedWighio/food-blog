import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export default function Header(){
    return(
        <>
        <main className="w-full h-24 bg-white py-10 px-4 md:px-16 lg:px-32 flex justify-between items-center">
            <Link href="/"><h1 className="text-3xl font-bold text-[#FE4A51] cursor-pointer">FO<span className="text-[#2D2D2D]">OD</span></h1></Link>
            <ol className="hidden md:flex justify-center gap-10 text-xl font-medium text-[#2D2D2D]">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ol>
            <div className="relative flex items-center">
                <IoSearch className="absolute left-4 w-7 h-7 fill-[#FE4A51]"/>
            <input type="text" className="w-52 h-14 py-6 px-2 pl-14 rounded-full outline-none own text-slate-500" placeholder="Hi enter to search" />
            </div>
        </main>
        </>
    )
}