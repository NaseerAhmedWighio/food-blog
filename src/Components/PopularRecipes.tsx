import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

import profilepic from "../../public/profilepic.jpg"
import { FaRegClock } from "react-icons/fa6"
import { GiKnifeFork } from "react-icons/gi"
import { RiVercelLine } from "react-icons/ri";
import { FiUser, FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi"
import Link from "next/link"


interface postType {
    _id: string,
    title: string,
    cooker: string,
    time: number,
    servicing: string,
    mainImage: string,
    slug: {current:string},
}

interface recType {
    _id: string,
    mainImage: string,
    slug: {current:string},
    title: string,
}



export default async function PopularRecipes() {
    const Posts = async () => {
        const response = await client.fetch(`*[_type=="post"][0...4]
            {
            _id,
            title,
            cooker,
            time,
            servicing,
            mainImage,
            slug,
            }
            `)
        return response
    }
    
    const Recommended = async () => {
        const response = await client.fetch(`*[_type=="recommended"][0...5]
            {
            _id,
            mainImage,
            slug,
            title
            }
            `)
        return response
    }

    const data = await Posts()
    const recData = await Recommended()
    // console.log(recData)

    return (
        <>
            <main className="w-full h-auto bg-white px-4 md:px-16 lg:px-[105px] py-10">
                <div className="w-full flex flex-col lg:flex-row justify-between gap-10 items-start">
                    <div className="w-full space-y-5">
                        <h1 className="text-black text-2xl md:text-4xl lg:text-5xl">Most Popular Recipes</h1>
                        <div className="h-[3px] w-full bg-[#2D2D2D]" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {data?.map((post: postType) => (
                                <div key={post.slug.current}>
                                    <Link href={`/post/${post.slug.current}`}><div className="relative w-full h-auto">
                                        {post.mainImage && (
                                            <Image width={500} height={300} src={urlFor(post.mainImage).url()} alt={post.title} />)}
                                        <div className="flex flex-col items-center gap-8 w-full h-auto absolute bottom-5">
                                            <h1 className="text-lg md:text-xl lg:text-2xl text-white text-center font-bold cursor-pointer">{post.title}</h1>
                                            <div className="flex items-center gap-10 text-lg">
                                                <div className="flex gap-2 items-center cursor-pointer">
                                                    <GiKnifeFork className="text-[#FE4A51] w-5 h-5" />
                                                    <p className="text-md md:text-lg text-white">{post.servicing}</p>
                                                </div>
                                                <div className="flex gap-2 items-center cursor-pointer">
                                                    <FaRegClock className="text-[#FE4A51] w-5 h-5" />
                                                    <p className="text-md md:text-lg text-white">{post.time}</p>
                                                </div>
                                                <div className="flex gap-2 items-center cursor-pointer">
                                                    <FiUser className="text-[#FE4A51] w-5 h-5" />
                                                    <p className="text-md md:text-lg text-white">{post.cooker}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#DEDADA] w-full h-auto py-6 px-6 lg:px-14 grid grid-cols-1 gap-10 md:flex justify-between items-center">
                            {recData?.map((item: recType) => (
                                <div className="flex flex-col items-center text-lg font-semibold text-center text-[#2D2D2D]" key={item.slug.current}>
                                    <Link href={`/post/${item.slug.current}`} ><Image className="h-64 w-64 md:w-32 md:h-32 rounded-full"
                                        width={120}
                                        height={120}
                                        src={urlFor(item.mainImage).url()}
                                        alt={item.title} />
                                    <p className="text-[22px] md:text-[16px] mt-5 md:mt-2">{item.title}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-[35%] mt-[11px] space-y-3 lg:space-y-5">
                        <h1 className="text-[#2D2D2D] font-semibold text-xl md:text-2xl">Author</h1>
                        <div className=" md:mb-0 h-[3px] w-full bg-[#2D2D2D]" />
                        <div className="flex flex-col items-center justify-center space-y-5">
                            <div className="relative h-96 w-96 rounded-full">
                                <Image className="rounded-full w-full h-full" src={profilepic} alt="Profile" />
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#2D2D2D] font-semibold whitespace-nowrap">Naseer Ahmed Wighio</h1>
                            <p className="text-center text-lg text-[#2D2D2D]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem libero provident blanditiis! Cum veritatis consequuntur voluptatibus minus animi impedit quas. Reprehenderit cum neque minus accusantium illum corrupti commodi, eveniet qui?</p>
                        </div>
                        <h2 className="md:pt-10 text-[#2D2D2D] font-semibold text-xl md:text-2xl">Subscribe & Follow</h2>
                        <div className="h-[2px] w-full bg-[#2D2D2D]" />
                        <div className="grid grid-cols-2 gap-3">
                            <Link href="https://www.facebook.com/naseer.ahmed.3993">
                            <div className="flex justify-center items-center gap-3 hover:bg-[#FE4A51] bg-[#DEDADA] h-16 w-full px-8 py-4 cursor-pointer group">
                            <div><FiFacebook className="scale-125 md:scale-150 group-hover:text-[#DEDADA] text-[#FE4A51]" /></div>
                                <p  className="group-hover:text-[#DEDADA] text-[#2D2D2D] text-[14px] md:text-[16px] whitespace-nowrap">Follow me on</p>
                            </div></Link>
                            <Link href="https://www.linkedin.com/in/naseer-ahmed-wighio-a20453285/">
                            <div className="flex justify-center items-center gap-3 hover:bg-[#FE4A51] bg-[#DEDADA] h-16 w-full px-8 py-4 cursor-pointer group">
                            <div><FiLinkedin className="scale-125 md:scale-150  group-hover:text-[#DEDADA] text-[#FE4A51]" /></div>
                                <p className="group-hover:text-[#DEDADA] text-[#2D2D2D] text-[14px] md:text-[16px] whitespace-nowrap">Follow me on</p>
                            </div></Link>
                            <Link href="https://github.com/NaseerAhmedWighio">
                            <div className="flex justify-center items-center gap-3 hover:bg-[#FE4A51] bg-[#DEDADA] h-16 w-full px-8 py-4 cursor-pointer group">
                            <div><FiGithub className="scale-125 md:scale-150  group-hover:text-[#DEDADA] text-[#FE4A51]" /></div>
                                <p className="group-hover:text-[#DEDADA] text-[#2D2D2D] text-[14px] md:text-[16px] whitespace-nowrap">Follow me on</p>
                            </div></Link>
                            <Link href="https://vercel.com/naseerahmedwighios-projects">
                            <div className="flex justify-center items-center gap-3 hover:bg-[#FE4A51] bg-[#DEDADA] h-16 w-full px-8 py-4 cursor-pointer group">
                                <div><RiVercelLine className="scale-125 md:scale-150  group-hover:text-[#DEDADA] text-[#FE4A51]" /></div>
                                <p className="group-hover:text-[#DEDADA] text-[#2D2D2D] text-[14px] md:text-[16px] whitespace-nowrap">Follow me on</p>
                            </div></Link>
                        </div>
                        <div className="w-full bg-[#DEDADA] h-auto p-5 lg:p-9 space-y-16 lg:space-y-28">
                            <div className="flex justify-center">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#2D2D2D] text-center font-medium">Get Latest Update</h1>
                            </div>
                            <div className="space-y-5 lg:space-y-10">
                                <input className="w-full h-16 text-base md:text-lg bg-white hover:bg-slate-50 text-[#2D2D2D] outline-none font-medium text-center px-5" type="text" placeholder="Your email address" />
                                <button className="w-full h-16 font-medium text-lg md:text-xl text-center text-white hover:text-[#FE4A51] hover:border-2 border-[#FE4A51] hover:bg-[#DEDADA] bg-[#FE4A51]">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}