// app/art/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects_mdx";

export default async function ArtPage() {
  const all = await getAllProjects();
  const artProjects = all.filter((p) => p.category === "art");

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Art</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artProjects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="group">
              {(project.image) && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="object-cover rounded-md group-hover:opacity-90"
                />
              )}
              <h2 className="mt-4 text-xl font-medium">{project.title}</h2>
              <p className="italic text-gray-600">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
