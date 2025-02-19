"use client";

interface PostType {
  _id: string,
  title: string,
  cooker: string,
  time: string,
  servicing: string,
  mainImage: string,
  slug: { current: string };
  body: string,
  publishedAt: string,
  author: string,
  categories: string,
}



import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function GetData() {
  const { slug } = useParams<{ slug: string }>(); // Get slug dynamically
  const [data, setData] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      try {
        setLoading(true);

        const query = `*[_type in ["post", "menu", "recommended"] && slug.current == $slug]{
          _id,
          "slug": slug.current,
          title,
          cooker,
          time,
          servicing,
          body,
          mainImage,
          publishedAt,
        }`;

        const response = await client.fetch(query, { slug });

        setData(response?.length > 0 ? response[0] : null);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-slate-100 py-64 text-center text-4xl text-[#FE4A51] font-bold">
        Loading<span className="text-[#2D2D2D]">...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-slate-100 py-64 flex justify-center items-center text-[#FE4A51] text-4xl font-bold">
        Connect your<span className="text-[#2D2D2D]">&nbsp;internet first</span>
      </div>
    );
  }

  return (
    <main className="w-full h-full bg-slate-100 lg:p-10 p-8 md:p-20 lg:px-32 space-y-10">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-7 md:gap-14 lg:gap-20">
        {/* Left Column: Image */}
        <div className="w-full lg:w-[65%] h-auto">
          {data.mainImage && (
            <Image
              src={urlFor(data.mainImage).url()} 
              alt={data.title}
              width={700}
              height={100}
              className=" object-cover w-full h-auto rounded-md shadow-lg"
            />
          )}
        </div>

        {/* Right Column: Content */}
        <div className="w-full h-auto flex flex-col justify-between pt-10 space-y-3">
          <h1 className="text-blue-950 text-3xl md:text-5xl lg:text-7xl text-center lg:text-left font-bold mb-6">{data.title}</h1>
          <hr className="lg:hidden "/>
          <div className="grid grid-cols-2 gap-8 text-[18px]">
            <p className="text-gray-700">
              <strong>Cooker:</strong><br className="md:hidden"/> {data.cooker}
            </p>
            <p className="text-gray-700">
              <strong>Time:</strong> <br className="md:hidden"/> {data.time} minutes
            </p>
            <p className="text-gray-700">
              <strong>Servings:</strong> <br className="md:hidden"/> {data.servicing}
            </p>
            <p className="text-gray-700">
              <strong>Published At:</strong><br className="md:hidden"/> {data.publishedAt.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
      <hr className="lg:hidden "/>
      <div className="text-md md:text-lg text-rose-950 mb-4">
        <p>{data.body}</p>
      </div>
    </main>
  );
}

