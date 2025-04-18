// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/content/projects-loader";
import { MDXProject } from "@/types/mdx";

export default async function HomePage() {
  const projects = await getAllProjects();
   // Filter + sort featured projects by `featuredOrder`
   const featuredProjects = projects
   .filter((p) => p.isFeatured)
   .sort((a, b) => {
     const orderA = a.featuredOrder ?? 999;
     const orderB = b.featuredOrder ?? 999;
     return orderA - orderB;
   });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Aaron Demby Jones</h1>
      <p className="text-xl mb-12">
      Artist. Improviser. Builder of strange systems.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>
      {/* Use Tailwind grid classes for a responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <div key={project.slug} className="flex flex-col">
            {project.image && (
              <Link href={`/${project.cluster}/${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400} // adjust as needed
                  height={400} // adjust as needed
                  className="object-cover cursor-pointer rounded-md"
                />
              </Link>
            )}
            <Link href={`/${project.cluster}/${project.slug}`}>
              <h3 className="text-xl font-medium hover:underline cursor-pointer mt-4">
                {project.title}
              </h3>
            </Link>
            <p className="italic text-gray-600 mt-2">{project.summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
