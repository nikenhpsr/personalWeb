import React, { useState } from "react";

const ListOfArticles = () => {
  const articles = [
    {
      title: "Exploring the New Features of ES2021",
      summary:
        "A comprehensive look at the latest features introduced in ES2021 and how they can improve your JavaScript coding experience.",
      link: "https://example.com/article/es2021-features",
      tags: ["JavaScript", "ES2021", "Programming"],
      publishedDate: "2023-01-10",
    },
    {
      title: "Understanding React 18 Concurrent Features",
      summary:
        "Dive into React 18's concurrent features to build faster and more responsive applications.",
      link: "https://example.com/article/react-18-concurrent",
      tags: ["React", "Web Development", "Concurrent Mode"],
      publishedDate: "2023-02-15",
    },
    {
      title: "The Rise of TypeScript in 2023",
      summary:
        "Exploring why TypeScript has become the go-to language for modern web development in 2023.",
      link: "https://example.com/article/typescript-2023",
      tags: ["TypeScript", "Web Development", "Programming Languages"],
      publishedDate: "2023-03-22",
    },
    {
      title: "Next.js vs. Gatsby: Choosing the Right Framework",
      summary:
        "A comparison of Next.js and Gatsby to help you choose the right framework for your next web project.",
      link: "https://example.com/article/nextjs-vs-gatsby",
      tags: ["Next.js", "Gatsby", "Web Development"],
      publishedDate: "2023-04-05",
    },
    {
      title: "Building Microservices with Node.js",
      summary:
        "Learn how to build scalable and maintainable microservices using Node.js.",
      link: "https://example.com/article/nodejs-microservices",
      tags: ["Node.js", "Microservices", "Backend Development"],
      publishedDate: "2023-05-10",
    },
    {
      title: "Introduction to Docker for Developers",
      summary:
        "Get started with Docker and learn how it can simplify the development and deployment process.",
      link: "https://example.com/article/docker-introduction",
      tags: ["Docker", "DevOps", "Containerization"],
      publishedDate: "2023-06-17",
    },
    {
      title: "Mastering CSS Grid Layout",
      summary:
        "A guide to mastering CSS Grid Layout to build complex web layouts easily.",
      link: "https://example.com/article/css-grid",
      tags: ["CSS", "Web Design", "Frontend Development"],
      publishedDate: "2023-07-21",
    },
    {
      title: "Effective Debugging Techniques in JavaScript",
      summary:
        "Improve your debugging skills with these effective techniques for JavaScript development.",
      link: "https://example.com/article/debugging-javascript",
      tags: ["JavaScript", "Debugging", "Web Development"],
      publishedDate: "2023-08-30",
    },
    {
      title: "The Future of AI in Web Development",
      summary:
        "Explore how AI is shaping the future of web development and what it means for developers.",
      link: "https://example.com/article/ai-web-development",
      tags: ["AI", "Web Development", "Future Trends"],
      publishedDate: "2023-09-15",
    },
    {
      title: "Optimizing Performance in React Applications",
      summary:
        "Learn how to optimize the performance of your React applications for a better user experience.",
      link: "https://example.com/article/react-performance",
      tags: ["React", "Performance Optimization", "Web Development"],
      publishedDate: "2023-10-05",
    },
    {
      title: "Getting Started with GraphQL",
      summary:
        "An introduction to GraphQL and how it can be used to build more efficient APIs.",
      link: "https://example.com/article/graphql-introduction",
      tags: ["GraphQL", "API Development", "Web Development"],
      publishedDate: "2023-11-12",
    },
    {
      title: "Building Accessible Web Applications",
      summary:
        "A guide to building web applications that are accessible to everyone, including people with disabilities.",
      link: "https://example.com/article/web-accessibility",
      tags: ["Accessibility", "Web Development", "UI/UX Design"],
      publishedDate: "2023-12-20",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 10;
  const totalPages = Math.ceil(articles.length / limitPerPage);

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * limitPerPage;
  const selectedArticles = articles.slice(
    startIndex,
    startIndex + limitPerPage
  );

  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      <div className="flex flex-col space-y-4 w-1/2">
        {selectedArticles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="list border p-4 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-700 hover:translate-x-4"
          >
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="mt-2">{article.summary}</p>
            <p className="text-xs my-2">Published on {article.publishedDate}</p>
            <div className="mt-4">
              {article.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <div className="flex mt-4 gap-6">
        <button
          className="hover:text-slate-400"
          onClick={handlePreviousClick}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="hover:text-slate-400"
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ListOfArticles;
