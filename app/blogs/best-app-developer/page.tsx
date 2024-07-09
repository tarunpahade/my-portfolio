

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Best App Developer in Aurangabad | Tarun Pahade",
    template: "%s | Tarun Pahade - App Developer"
  },
  description: "Discover why Tarun Pahade is the best app developer in Aurangabad. Expertise in MERN stack, React Native, and cutting-edge web technologies.",
  openGraph: {
    title: "Best App Developer in Aurangabad - Tarun Pahade",
    description: "Looking for the top app developer in Aurangabad? Tarun Pahade offers expert app development services with a focus on modern technologies.",
    url: "https://my-portfolio-tarunpahade.vercel.app/blogs/best-app-developer",
    siteName: "Tarun Pahade - Portfolio",
    images: [
      {
        url: "https://my-portfolio-tarunpahade.vercel.app/og-image-app-developer.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "website",
  }
  ,
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
    title: "Best App Developer in Aurangabad | Tarun Pahade",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
export default function BestAppDeveloper () {
  return (
    <div className="p-20  mx-auto px-52 py-8 bg-white w-screen">
      <Head>
        <title>Tarun Pahade: Best App Developer in Aurangabad | Full Stack Expert</title>
        <meta name="description" content="Discover why Tarun Pahade is the best app developer in Aurangabad. Expertise in MERN stack, React Native, and cutting-edge web technologies." />
      </Head>

      <h1 className="text-4xl font-bold mb-6">Best App Developer in Aurangabad: Tarun Pahade</h1>

      <div className="prose lg:prose-xl">
        <p>
          Are you looking for the best app developer in Aurangabad? Look no further than Tarun Pahade, a full-stack developer with expertise in MERN stack, React Native, and cutting-edge web technologies.
        </p>

        <h2>Why Choose Tarun for Your App Development Needs?</h2>
        <ul>
          <li>Extensive experience with modern web and mobile technologies</li>
          <li>Proven track record of successful projects</li>
          <li>Strong problem-solving skills and attention to detail</li>
          <li>Commitment to creating user-friendly and performant applications</li>
        </ul>

        <h2>Featured Projects</h2>

        <div className="my-8">
          <h3>Educator AI</h3>
          <Image 
            src="https://projectimagestorage1.s3.ap-south-1.amazonaws.com/images/Screenshot+2024-03-21+091902.png"
            alt="Educator AI Screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <p>
            A cutting-edge platform for students to learn coding through hands-on experience, featuring an built-in AI assistant. Think of it as an AI-powered LeetCode, designed to make learning programming more interactive and engaging.
          </p>
          <p><strong>Technologies:</strong> Next.js, Tailwind CSS, Shad cn, MongoDB</p>
          <Link href="https://educator-ai.vercel.app/" className="text-blue-600 hover:underline">
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
            Developed the frontend for a neobank targeting the 14-18 age group. This project showcases Tarun's ability to create user-friendly financial applications for a specific demographic.
          </p>
          <p><strong>Technologies:</strong> React Native, Expo, TypeScript, Express, Node.js, MongoDB</p>
          <Link href="https://github.com/tarunpahade/Frontend_Finstep" className="text-blue-600 hover:underline">
            View Repository
          </Link>
        </div>

        {/* Add more projects here */}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Contact Tarun Pahade</h2>
        <p>Ready to bring your app idea to life? Get in touch with Tarun today!</p>
        <ul className="list-disc list-inside">
          <li>Email: tarunpahade55@gmail.com</li>
          <li>Phone: 8484917439</li>
          <li>Location: Aurangabad, Maharashtra</li>
        </ul>
      </div>
    </div>
  );
};
