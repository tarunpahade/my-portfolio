// pages/hire-developer-for-startup.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hire Top Developer for Your Startup | Tarun Pahade",
    template: "%s | Tarun Pahade - Startup Developer"
  },
  description: "Looking to hire a developer for your startup? Tarun Pahade offers full-stack expertise, from web to mobile app development. Perfect for startups in Aurangabad and beyond.",
  openGraph: {
    title: "Hire Top Developer for Your Startup - Tarun Pahade",
    description: "Boost your startup with expert development services. Tarun Pahade offers full-stack development tailored for startups.",
    url: "https://my-portfolio-tarunpahade.vercel.app/blogs/hire-developer-for-startup",
    siteName: "Tarun Pahade - Portfolio",
    // images: [
    //   {
    //     url: "https://my-portfolio-tarunpahade.vercel.app/og-image-startup-developer.png",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en-IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Hire Top Developer for Your Startup | Tarun Pahade",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
export function HireDeveloperForStartup  ()  {
  return (
    <div className="p-20  mx-auto px-52 py-8 bg-white w-screen">
      <Head>
        <title>Hire a Top Developer for Your Startup | Tarun Pahade</title>
        <meta name="description" content="Looking to hire a developer for your startup? Tarun Pahade offers full-stack expertise, from web to mobile app development. Perfect for startups in Aurangabad and beyond." />
      </Head>

      <h1 className="text-4xl font-bold mb-6">Hire a Top Developer for Your Startup</h1>

      <div className="prose lg:prose-xl">
        <p>
          Are you a startup founder looking to hire a skilled developer? Tarun Pahade is your ideal candidate, offering a blend of technical expertise and startup-oriented mindset.
        </p>

        <h2>Why Tarun is the Perfect Developer for Your Startup</h2>
        <ul>
          <li>Full-stack capabilities: From frontend to backend, Tarun has you covered</li>
          <li>Experience with modern tech stacks: MERN, React Native, Next.js, and more</li>
          <li>Startup experience: Worked on innovative projects like Finstep and BabyCloud</li>
          <li>Rapid prototyping skills: Quickly turn ideas into functional MVPs</li>
          <li>Continuous learner: Always up-to-date with the latest technologies</li>
        </ul>

        <h2>Relevant Projects for Startups</h2>

        <div className="my-8">
          <h3>Restaurant SaaS</h3>
          <Image 
            src="https://media.licdn.com/dms/image/D4D22AQEf2F6Q1U1Nkw/feedshare-shrink_2048_1536/0/1710760724762?e=1714003200&v=beta&t=a9tOh_iYG9L8rzvy_n2Xv3rtp2dbluLkgIIV47k16M0"
            alt="Restaurant SaaS Screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <p>
            A SaaS solution for restaurants, demonstrating Tarun's ability to create scalable business applications.
          </p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript, WhatsApp API</p>
          <Link href="https://admin-app-ufy2.onrender.com/dashboard/" className="text-blue-600 hover:underline">
            View Project
          </Link>
        </div>

        <div className="my-8">
          <h3>Finstep</h3>
          <Image 
            src="https://projectimagestorage1.s3.ap-south-1.amazonaws.com/images/Screenshot+2024-03-20+141906.png"
            alt="Finstep Screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <p>
            A neobank application targeting teenagers, showcasing Tarun's ability to develop fintech solutions for specific market segments.
          </p>
          <p><strong>Technologies:</strong> React Native, Expo, TypeScript, Express, Node.js, MongoDB</p>
          <Link href="https://github.com/tarunpahade/Frontend_Finstep" className="text-blue-600 hover:underline">
            View Repository
          </Link>
        </div>

        {/* Add more relevant projects here */}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Hire Tarun for Your Startup</h2>
        <p>Ready to take your startup to the next level? Get in touch with Tarun today!</p>
        <ul className="list-disc list-inside">
          <li>Email: tarunpahade55@gmail.com</li>
          <li>Phone: 8484917439</li>
          <li>LinkedIn: <Link href="https://www.linkedin.com/in/tarun-pahade-38b350236/" className="text-blue-600 hover:underline">Tarun Pahade</Link></li>
        </ul>
      </div>
    </div>
  );
};
