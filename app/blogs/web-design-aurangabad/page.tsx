// pages/web-development-aurangabad.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Professional Web Design Services in Aurangabad | Tarun Pahade",
    template: "%s | Tarun Pahade - Web Designer"
  },
  description: "Looking for expert web design in Aurangabad? Tarun Pahade offers modern, responsive, and user-friendly web design services tailored to your business needs.",
  openGraph: {
    title: "Professional Web Design Services in Aurangabad - Tarun Pahade",
    description: "Transform your online presence with stunning web designs. Tarun Pahade specializes in creating modern, responsive websites in Aurangabad.",
    url: "https://my-portfolio-tarunpahade.vercel.app/blogs/web-design-aurangabad",
    siteName: "Tarun Pahade - Portfolio",
    // images: [
    //   {
    //     url: "https://my-portfolio-tarunpahade.vercel.app/og-image-web-design.png",
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
//   twitter: {
//     title: "Professional Web Design Services in Aurangabad | Tarun Pahade",
//     card: "summary_large_image",
//   },
  icons: {
    shortcut: "/favicon.png",
  },
};
export function WebDevelopmentAurangabad  ()  {
  return (
    <div className="p-20  mx-auto px-52 py-8 bg-white w-screen">
      <Head>
        <title>Expert Web Development Services in Aurangabad | Tarun Pahade</title>
        <meta name="description" content="Need professional web development in Aurangabad? Tarun Pahade offers full-stack web development services using cutting-edge technologies like React, Next.js, and MERN stack." />
      </Head>

      <h1 className="text-4xl font-bold mb-6">Expert Web Development Services in Aurangabad</h1>

      <div className="prose lg:prose-xl">
        <p>
          Looking for top-tier web development services in Aurangabad? Tarun Pahade is your go-to expert for creating powerful, scalable, and feature-rich web applications using the latest technologies and best practices.
        </p>

        <h2>Why Choose Tarun for Your Web Development Projects?</h2>
        <ul>
          <li>Full-stack expertise: Frontend, backend, and everything in between</li>
          <li>Proficiency in modern web technologies: React, Next.js, Node.js, and more</li>
          <li>Experience with database design and management</li>
          <li>Focus on performance optimization and scalability</li>
          <li>Commitment to clean, maintainable code</li>
          <li>Agile development approach for faster time-to-market</li>
        </ul>

        <h2>Featured Web Development Projects</h2>

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
            An advanced platform for students to learn coding with an integrated AI assistant. This project showcases complex web application development with AI integration.
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
            A comprehensive SaaS solution for restaurants, demonstrating the ability to create scalable, industry-specific web applications.
          </p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript, WhatsApp API</p>
          <Link href="https://admin-app-ufy2.onrender.com/dashboard/" className="text-blue-600 hover:underline">
            View Project
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Web Development Services Offered</h2>
        <ul className="list-disc list-inside">
          <li>Custom web application development</li>
          <li>E-commerce website development</li>
          <li>Content Management System (CMS) development</li>
          <li>API development and integration</li>
          <li>Progressive Web App (PWA) development</li>
          <li>Database design and optimization</li>
          <li>Web hosting and deployment</li>
          <li>Website maintenance and support</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Get Professional Web Development in Aurangabad</h2>
        <p>Ready to bring your web project to life? Contact Tarun today for a consultation!</p>
        <ul className="list-disc list-inside">
          <li>Email: tarunpahade55@gmail.com</li>
          <li>Phone: 8484917439</li>
          <li>Location: Aurangabad, Maharashtra</li>
          <li>GitHub: <Link href="https://github.com/tarunpahade" className="text-blue-600 hover:underline">tarunpahade</Link></li>
          <li>LinkedIn: <Link href="https://www.linkedin.com/in/tarun-pahade-38b350236/" className="text-blue-600 hover:underline">Tarun Pahade</Link></li>
        </ul>
      </div>
    </div>
  );
};
