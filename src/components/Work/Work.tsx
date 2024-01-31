import { Link } from "react-router-dom";
import { projects } from "../../projects.json";

export const Work = () => {
  return (
    <main className="h-screen items-center grid">
      <header className="font-semibold text-xl text-right mr-24 font-mono">
        <Link to={"/"}>Home</Link>
      </header>
      <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] m-auto container gap-8">
        {projects.map((project) => (
          <Link
            to={`https://matiasc5.github.io/${project.title}/`}
            target="_blank"
            rel="noreferrer"
          >
            <article
              key={project.id}
              className="flex flex-col items-center  w-96 h-96 "
            >
              <h2 className="text-xl font-semibold font-mono">
                {" "}
                {project.title}
              </h2>

              <img src={project.image} alt={project.title} />
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
};
