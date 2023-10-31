import { Link } from "react-router-dom";
import { projects } from "../../projects.json";

export const Work = () => {
  return (
    <main className="h-screen items-center grid">
      <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] m-auto container">
        {projects.map((project) => (
          <Link
            to={`https://matiasc5.github.io/${project.title}/`}
            target="_blank"
            rel="noreferrer"
          >
            <article key={project.id}>
              <h2 className="text-xl font-semibold"> {project.title}</h2>

              <img
                src={project.image}
                width={300}
                height={300}
                alt={project.title}
              />
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
};
