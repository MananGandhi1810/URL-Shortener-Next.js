"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { groq } from "next-sanity";
import client from "@/utils/sanity";


export default function Go({ params }) {
  const { slug } = params;
  const router = useRouter();

  useEffect(() => {
    async function getRoute() {
      console.log("hello");
      try {
        const query = groq`*[_type == "redirects" && route == "${slug}"]{redirectUrl}`;
        const redirects = await client.fetch(query);

        const route = redirects[0].redirectUrl;
        console.log(route);
        router.push(route);
      } catch (error) {
        console.log(slug);
        
        router.push("https://naitiklodha.tech");
        return <h1 className="font-bold text-center">Invalid slug redirecting you to portfolio</h1>;
      }
    }

    getRoute();
  }, []);

}
