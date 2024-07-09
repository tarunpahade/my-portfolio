// pages/mobile-app-developer-aurangabad.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Expert Mobile App Developer in Aurangabad | Tarun Pahade",
    template: "%s | Tarun Pahade - Mobile App Developer"
  },
  description: "Looking for a skilled mobile app developer in Aurangabad? Tarun Pahade offers expertise in React Native and cross-platform app development. Bring your app ideas to life!",
  openGraph: {
    title: "Expert Mobile App Developer in Aurangabad - Tarun Pahade",
    description: "Transform your ideas into powerful mobile apps. Tarun Pahade specializes in React Native and cross-platform development in Aurangabad.",
    url: "https://my-portfolio-tarunpahade.vercel.app/blogs/mobile-app-developer-aurangabad",
    siteName: "Tarun Pahade - Portfolio",
    // images: [
    //   {
    //     url: "https://my-portfolio-tarunpahade.vercel.app/og-image-mobile-app-developer.png",
    //     width: 1200,
    //     height: 630,
    //   },
    //],
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
//   twitter: {
//     title: "Expert Mobile App Developer in Aurangabad | Tarun Pahade",
//     card: "summary_large_image",
//   },
  icons: {
    shortcut: "/favicon.png",
  },
};
export function MobileAppDeveloperAurangabad  ()  {
  return (
    <div className="p-20  mx-auto px-52 py-8 bg-white w-screen">
      <Head>
        <title>Expert Mobile App Developer in Aurangabad | Tarun Pahade</title>
        <meta name="description" content="Looking for a skilled mobile app developer in Aurangabad? Tarun Pahade offers expertise in React Native and cross-platform app development. Bring your app ideas to life!" />
      </Head>

      <h1 className="text-4xl font-bold mb-6">Mobile App Developer in Aurangabad: Tarun Pahade</h1>

      <div className="prose lg:prose-xl">
        <p>
          Are you searching for a talented mobile app developer in Aurangabad? Look no further than Tarun Pahade, an experienced developer specializing in creating high-performance, user-friendly mobile applications for both iOS and Android platforms.
        </p>

        <h2>Why Choose Tarun for Your Mobile App Development?</h2>
        <ul>
          <li>Expertise in React Native for cross-platform development</li>
          <li>Strong understanding of mobile UI/UX principles</li>
          <li>Experience with integrating backend services and APIs</li>
          <li>Commitment to creating performant and scalable applications</li>
          <li>Local to Aurangabad, offering easy communication and collaboration</li>
        </ul>

        <h2>Featured Mobile App Projects</h2>

        <div className="my-8">
          <h3>Finstep - Neobank for Teenagers</h3>
          <Image 
            src="https://projectimagestorage1.s3.ap-south-1.amazonaws.com/images/Screenshot+2024-03-20+141906.png"
            alt="Finstep App Screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <p>
            A cutting-edge neobank application targeting the 14-18 age group. This project showcases Tarun's ability to create fintech solutions with a focus on user experience and security.
          </p>
          <p><strong>Technologies:</strong> React Native, Expo, TypeScript, Express, Node.js, MongoDB</p>
          <Link href="https://github.com/tarunpahade/Frontend_Finstep" className="text-blue-600 hover:underline">
            View Repository
          </Link>
        </div>

        <div className="my-8">
          <h3>Ignite - Fitness Application</h3>
          <Image 
            src="https://projectimagestorage1.s3.ap-south-1.amazonaws.com/images/Screenshot+2024-03-20+141916.png"
            alt="Ignite Fitness App Screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <p>
            A comprehensive fitness application for beginners, featuring workout playlists, exercise tracking, and progress monitoring. This app demonstrates Tarun's ability to create feature-rich mobile applications with a focus on user engagement.
          </p>
          <p><strong>Technologies:</strong> React Native, TypeScript, Express, Node.js, MongoDB</p>
          <Link href="https://expo.dev/accounts/tarun.pahade/projects/fitness-app-2" className="text-blue-600 hover:underline">
            View Project
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Mobile App Development Services</h2>
        <ul className="list-disc list-inside">
          <li>Cross-platform app development (iOS and Android)</li>
          <li>Native app development</li>
          <li>UI/UX design for mobile apps</li>
          <li>App performance optimization</li>
          <li>Integration with backend services and APIs</li>
          <li>App maintenance and support</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Contact Tarun for Your Mobile App Project</h2>
        <p>Ready to bring your mobile app idea to life? Get in touch with Tarun today!</p>
        <ul className="list-disc list-inside">
          <li>Email: tarunpahade55@gmail.com</li>
          <li>Phone: 8484917439</li>
          <li>Location: Aurangabad, Maharashtra</li>
          <li>LinkedIn: <Link href="https://www.linkedin.com/in/tarun-pahade-38b350236/" className="text-blue-600 hover:underline">Tarun Pahade</Link></li>
        </ul>
      </div>
    </div>
  );
};
