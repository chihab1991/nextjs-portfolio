import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    return {
        rules: [
            {
                userAgent: "*",
                allow:"/",
            }
        ]
        , sitemap: "https://nextjs-portfolio-wheat-three.vercel.app/sitemap.xml"
    }
}