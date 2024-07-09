// pages/startup-hire-fullstack-dev-aurangabad.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hire Top Fullstack Developer for Your Startup in Aurangabad | Tarun Pahade",
    template: "%s | Tarun Pahade - Fullstack Developer for Startups"
  },
  description: "Startups in Aurangabad: Hire Tarun Pahade, an experienced fullstack developer with expertise in MERN stack, React Native, and modern web technologies. Boost your startup's tech capabilities!",
  openGraph: {
    title: "Hire Top Fullstack Developer for Startups in Aurangabad - Tarun Pahade",
    description: "Elevate your startup with expert fullstack development. Tarun Pahade offers comprehensive tech solutions for startups in Aurangabad.",
    url: "https://my-portfolio-tarunpahade.vercel.app/blogs/startup-hire-fullstack-dev-aurangabad",
    siteName: "Tarun Pahade - Portfolio",
    // images: [
    //   {
    //     url: "https://my-portfolio-tarunpahade.vercel.app/og-image-fullstack-developer-startup.png",
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
    title: "Hire Top Fullstack Developer for Startups in Aurangabad | Tarun Pahade",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const StartupHireFullstackDevAurangabad = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Hire Top Fullstack Developer for Your Startup in Aurangabad | Tarun Pahade</title>
        <meta name="description" content="Startups in Aurangabad: Hire Tarun Pahade, an experienced fullstack developer with expertise in MERN stack, React Native, and modern web technologies. Boost your startup's tech capabilities!" />
      </Head>

      <h1 className="text-4xl font-bold mb-6">Hire a Top Fullstack Developer for Your Startup in Aurangabad</h1>

      <div className="prose lg:prose-xl">
        <p>
          Are you a startup in Aurangabad looking to hire a skilled fullstack developer? Tarun Pahade offers comprehensive development expertise to help your startup thrive in the digital landscape.
        </p>

        <h2>Why Hire Tarun for Your Startup?</h2>
        <ul>
          <li>Fullstack proficiency: From frontend to backend, database to deployment</li>
          <li>Startup-oriented mindset: Understanding of lean development and MVP creation</li>
          <li>Diverse tech stack: MERN, React Native, Next.js, TypeScript, and more</li>
          <li>Rapid prototyping skills: Quickly turn ideas into functional products</li>
          <li>Local to Aurangabad: Easy communication and collaboration</li>
        </ul>

        <h2>Relevant Projects for Startups</h2>

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
            An innovative platform for students to learn coding with an AI assistant. This project demonstrates Tarun's ability to create complex, AI-integrated web applications.
          </p>
          <p><strong>Technologies:</strong> Next.js, Tailwind CSS, Shad cn, MongoDB</p>
          <Link href="https://educator-ai.vercel.app/" className="text-blue-600 hover:underline">
            View Project
          </Link>
        </div>

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
            A SaaS solution for restaurants, showcasing Tarun's ability to create scalable business applications with integration capabilities.
          </p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript, WhatsApp API</p>
          <Link href="https://admin-app-ufy2.onrender.com/dashboard/" className="text-blue-600 hover:underline">
            View Project
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Fullstack Development Services for Startups</h2>
        <ul className="list-disc list-inside">
          <li>Web application development</li>
          <li>Mobile app development (iOS and Android)</li>
          <li>API development and integration</li>
          <li>Database design and management</li>
          <li>Cloud deployment and DevOps</li>
          <li>UI/UX design implementation</li>
          <li>Performance optimization and scaling</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Hire Tarun for Your Startup in Aurangabad</h2>
        <p>Ready to accelerate your startup's growth with top-notch fullstack development? Contact Tarun today!</p>
        <ul className="list-disc list-inside">
          <li>Email: tarunpahade55@gmail.com</li>
          <li>Phone: 8484917439</li>
          <li>Location: Aurangabad, Maharashtra</li>
          <li>LinkedIn: <Link href="https://www.linkedin.com/in/tarun-pahade-38b350236/" className="text-blue-600 hover:underline">Tarun Pahade</Link></li>
          <li>GitHub: <Link href="https://github.com/tarunpahade" className="text-blue-600 hover:underline">tarunpahade</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default StartupHireFullstackDevAurangabad;