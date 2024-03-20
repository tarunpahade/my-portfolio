import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Header } from "./header";
import { ReportView } from "./view";
import { allProjects2 } from "../page";
import Image from "next/image";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};


export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project:any = allProjects2.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const views = 0

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <div className="mdx"><p className="leading-7 p-0 ">
          
          <div className="h-[350px] p-5 m-5" style={{ position: 'relative', width: '100%', height: '350px' }}>
            <Image
              layout="fill"
              objectFit="contain" // Adjusts the image size to cover the container        
              className="rounded-md border m-0 w-full h-[150px] border-zinc-200" alt="" src={project.imgUrl!} />
          </div>
          </p>
          <p className="leading-7  mx-6">{project.description}.</p></div></article>
    </div>
  );
}
