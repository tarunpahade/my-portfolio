import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";


export type Project = {
  /** File path relative to `contentDirPath` */
  _id: number
  published?: boolean | undefined
  title: string
  description: string
  tech?: string
  url?: string | undefined
  repository?: string | undefined
  imgUrl?: string | undefined
slug: string,
date?:string
}
//

export const allProjects2: Project[] = [
  {
    _id: 1,
    title: 'Educator AI',
    description: `A platform for students to learn coding by doing and with in built ai  assistant . A AI leetcode`,
    tech: 'Next js  , tailwins , Shad cn  , MongoDB ',
    imgUrl: 'https://projectimagestorage1.s3.ap-south-1.amazonaws.com/images/Screenshot+2024-03-21+091902.png',
    repository: 'https://github.com/tarunpahade/assignment-autochecker/',
    slug:'student-lms',
    date:'Jul 17, 2023',
    url:'https://educator-ai.vercel.app/'
  },
 
  {
    _id: 2,
    title: 'Finstep',
    description: 'I was building Frontend a Neobank for age group 14-18 years. ',
    tech: 'React Native , Expo , Typescript , Express Node js MongoDB',
    imgUrl: 'https://projectimagestorage1.s3.ap-south-1.amazonaws.com/images/Screenshot+2024-03-20+141906.png',
    repository: 'https://github.com/tarunpahade/Frontend_Finstep',
    slug:'finstep',
    date:'Jul 17, 2023'
  },
  {
    _id: 3,
    title: 'Restraunt SaaS ',
    description: 'A restraunt SAAS integra',
    tech: 'HTML CSS JS whatsapp Api',
    imgUrl: 'https://media.licdn.com/dms/image/D4D22AQEf2F6Q1U1Nkw/feedshare-shrink_2048_1536/0/1710760724762?e=1714003200&v=beta&t=a9tOh_iYG9L8rzvy_n2Xv3rtp2dbluLkgIIV47k16M0',
    repository: 'https://github.com/tarunpahade/admin-app',
    url: 'https://admin-app-ufy2.onrender.com/dashboard/',
    slug:'saas-app',
    date:"Feb 3, 2023"
  },
  
  {
    _id: 4,
    title: 'Fitness App',
    description: 'A fitness application for beggniers in the gym . Not Published on playstore yet',
    tech: 'React Native , Typescript , Express Node js MongoDB',
    imgUrl: 'https://projectimagestorage1.s3.ap-south-1.amazonaws.com/images/Screenshot+2024-03-20+141916.png',
    repository: 'https://github.com/tarunpahade/fitness-app-v2',
    url: 'https://expo.dev/accounts/tarun.pahade/projects/fitness-app-2',
    slug:'fitness-app-2',
    date:"Dec 17 2023"

  },
  {
    _id: 4,
    title: "Movie-app",
    description: "A movie app built with React and The Movie DB API You can see and search for top and trending movies",
    tech: "React, Vite,  JavaScript",
    repository: "https://github.com/tarunpahade/react-movie-app",
    slug: "react-movie-app",
    date: "2023-03-15",
    url:'https://vite-movie-app-gilt.vercel.app/',
    imgUrl:'https://media.licdn.com/dms/image/D4D22AQGFAMs8pxoz3A/feedshare-shrink_800/0/1710757999295?e=1714003200&v=beta&t=7FQRoQxuqq76VS08KgV3zWfM52TZWJLzyQjOfYOyZGQ'
  },
  {
    _id: 4,
    title: "Agency Site",
    description: "A movie app built with React and The Movie DB API. You can query through all top and trending movies",
    tech: "React, Vite,  JavaScript",
    repository: "https://github.com/tarunpahade/react-movie-app",
    slug: "agency-site",
    date: "Oct 23, 2023",
    url:'https://agency-website-pink.vercel.app/',
    imgUrl:'https://media.licdn.com/dms/image/D4D22AQFkHVoXSSZaDA/feedshare-shrink_800/0/1710757834846?e=1714003200&v=beta&t=duf3eu9_sYQvGcsgACHAj6Tfv6rSnE7QOglvEZfaz58'
  },
  {
    _id: 5,
    title: "Insurance Site",
    description: "A Insurance site built using wix studios",
    tech: "Wix Studio",
    slug: "insurance-site",
    date: "Nov 23, 2023",
    url:'https://tarunpahade.wixstudio.io/insuranceexamplesite',
    imgUrl:'https://media.licdn.com/dms/image/D4D22AQEbqw4NNfVmXQ/feedshare-shrink_800/0/1710757757315?e=1714003200&v=beta&t=73Rh46vLzovFG8nuLI2pLCkX-fjUuguclh8ay9q69OI'
  },
  {
    _id: 6,
    title: "Construction Site",
    description: "A construction site  built using wix studios",
    tech: "Wix Studio",
    slug: "construction-site",
    date: "Oct 23, 2023",
    url:'https://tarunpahade.wixstudio.io/construction',
  },
  
  {
    _id: 7,
    title: "Simon Game",
    description: "A memory gaminng website ",
    tech: "Html Css Js",
    slug: "memory-game",
    date: "Sept 23, 2023",
    url:'https://memory-game-cflm.onrender.com/',
    imgUrl:'https://media.licdn.com/dms/image/D5622AQHY97O1Qou1SA/feedshare-shrink_800/0/1684429094801?e=1714003200&v=beta&t=FhNiGRqhiommu57d-IvZD9DGsx-UVrI0Io3q_hMLSXo'
  },
  
  {
    _id: 7,
    title: "Spotify Clone",
    description: "A Mobile responsive clone of Spotify ",
    tech: "Html Css Js",
    slug: "spotify",
    date: "feb 23, 2022",
    url:'https://spotify-htvz.onrender.com/',
    imgUrl:'https://media.licdn.com/dms/image/D5622AQFLoBnYuLS4Sg/feedshare-shrink_800/0/1682276689191?e=1714003200&v=beta&t=qqrK42dkoDqPSHQS9ya7CFD2zt291oVvnhxt7T0RCUY'
  },
  
  
]


export const revalidate = 60;
export default async function ProjectsPage() {
  const featured = allProjects2.find((project) => project.slug === "student-lms")!;
  const top2 = allProjects2.find((project) => project.slug === "finstep")!;
  const top3 = allProjects2.find((project) => project.slug === "saas-app")!;
  
  const sorted = allProjects2
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    // .sort(
    //   (a, b) =>
    //     new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
    //     new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    // );
    console.log(sorted,'this is sorted');
    
  const views = allProjects.reduce<Record<string, number>>((acc, project) => {
    acc[project.slug] = Math.floor(Math.random() * 1000); // Random view count for demo
    return acc;
  }, {});


  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
