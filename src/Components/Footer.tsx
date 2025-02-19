export default function Footer() {
    return (
        <>
        <main className="w-full h-auto bg-white">
            <div className="place-items-stretch grid grid-cols-1 md:grid-cols-2 lg:flex justify-between px-4 md:px-16 lg:px-[105px] py-8 lg:py-10 gap-10">
                <div className="flex flex-col w-auto lg:w-1/4 pr-0 lg:pr-10 text-[#2D2D2D] gap-3 text-center md:text-left">
                    <h2 className="text-2xl font-semibold">About</h2>
                    <p className="text-[15px]">Lorem ipsum dolor sit amet, in quas. Quo voluptate asperiores porro incidunt necessitatibus!</p>
                </div>
                <div className="flex flex-col w-auto lg:w-1/4 gap-3 text-[#2D2D2D] items-center md:items-start">
                    <h2 className="text-2xl font-semibold">Archives</h2>
                    <ol className="space-y-1 flex flex-col items-center md:items-start text-[15px]">
                        <a className="flex items-center gap-2 " href=""><div className="w-2 h-2 rounded-full bg-red-500" /><li className="text-[#2D2D2D]">Jan 2019</li></a>
                        <a className="flex items-center gap-2" href=""><div className="w-2 h-2 rounded-full bg-red-500" /><li className="text-[#2D2D2D]">Jan 2018</li></a>
                        <a className="flex items-center gap-2" href=""><div className="w-2 h-2 rounded-full bg-red-500" /><li className="text-[#2D2D2D]">Jan 2017-14</li></a>
                    </ol>
                </div>
                <div className="flex flex-col w-auto lg:w-1/4 gap-3 text-[#2D2D2D] items-center md:items-start">
                    <h2 className="text-2xl font-semibold">Recipes</h2>
                    <ol className="space-y-1 flex flex-col items-center md:items-start text-[15px]">
                        <a className="flex items-center gap-2" href=""><div className="w-2 h-2 rounded-full bg-red-500" /><li className="text-[#2D2D2D]">Browse Recipes</li></a>
                        <a className="flex items-center gap-2" href=""><div className="w-2 h-2 rounded-full bg-red-500" /><li className="text-[#2D2D2D]">Recipe Page</li></a>
                        <a className="flex items-center gap-2" href=""><div className="w-2 h-2 rounded-full bg-red-500" /><li className="text-[#2D2D2D]">Submit Recipe</li></a>
                    </ol>
                </div>
                <div className="flex flex-col w-auto lg:w-1/4 gap-3 text-[#2D2D2D] text-center md:text-left">
                    <h2 className="text-2xl font-semibold">Newsletter</h2>
                    <ol className="space-y-2 text-center md:text-left">
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet porro officiis laborum accusamus? Odio consequuntu</p>
                        <div className="flex">
                            <input className="w-96 h-14 text-base md:text-lg hover:bg-slate-200 bg-[#DEDADA] p-4 outline-none" type="email" placeholder="Your email address" />
                            <button className="hover:text-[#FE4A51] text-base md:text-lg hover:border-2 border-[#FE4A51] hover:bg-[#DEDADA] bg-[#FE4A51] w-36 h-14 text-white">Subscribe</button>
                        </div>
                    </ol>
                </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center px-4 md:px-16 lg:px-[105px] py-2 bg-[#2D2D2D]">
                <p className="text-white text-lg font-medium flex items-start md:items-center gap-1 md:gap-2 text-center"><span className="text-xl md:text-2xl lg:text-3xl">&copy;</span> Copyright 2025 by Naseer Ahmed Wighio. All Right Reserved</p>
            </div>
            </main>
        </>
    )
}