import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		domains: ['media.licdn.com', 'projectimagestorage1.s3.ap-south-1.amazonaws.com', 'unkey.dev'],
	  },
	  
};

export default withContentlayer(nextConfig);
