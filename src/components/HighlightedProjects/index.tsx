const HighlightedProjects = () => {
  const projects = [
    {
      name: "Project One",
      description:
        "An innovative solution to problem X, utilizing technology Y.",
      link: "https://example.com/project-one",
    },
    {
      name: "Project Two",
      description:
        "A web application designed to simplify Z process for users.",
      link: "https://example.com/project-two",
    },
    {
      name: "Project Three",
      description: "A mobile app that helps users achieve A by leveraging B.",
      link: "https://example.com/project-three",
    },
  ];

  return (
    <section className="mt-8 mb-4 text-center flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold mb-4">Highlighted Projects</h2>
      <div className="flex flex-col space-y-4 w-1/2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="list border p-4 rounded-lg hover:translate-x-4 hover:bg-slate-200 dark:hover:bg-gray-700"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="my-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightedProjects;
