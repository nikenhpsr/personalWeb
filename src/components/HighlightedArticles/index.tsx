import React from "react";

const HighlightedArticles = () => {
  const articles = [
    {
      title: "Understanding React Hooks",
      summary:
        "A deep dive into the world of React Hooks and how they can revolutionize your component development.",
      link: "https://example.com/article/react-hooks",
      tags: ["React", "Hooks", "JavaScript"],
      publishedDate: "2021-04-12",
    },
    {
      title: "Advanced CSS Techniques",
      summary:
        "Explore advanced CSS techniques for creating visually stunning web pages.",
      link: "https://example.com/article/advanced-css",
      tags: ["CSS", "Design", "Web"],
      publishedDate: "2021-06-05",
    },
    {
      title: "Efficient Database Management",
      summary:
        "Learn about efficient database management strategies to optimize your application's performance.",
      link: "https://example.com/article/database-management",
      tags: ["Database", "Performance", "Management"],
      publishedDate: "2021-08-23",
    },
  ];

  return (
    <section className="my-8 flex flex-col items-start justify-center mx-auto w-10/12">
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      <div className="flex flex-col space-y-4 w-full">
        {articles.slice(0, 3).map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="list border p-4 rounded-lg hover:bg-slate-200 hover:text-white dark:hover:bg-gray-700 hover:translate-x-4"
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
    </section>
  );
};

export default HighlightedArticles;
