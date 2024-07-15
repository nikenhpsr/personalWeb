"use client";
import React, { useState, useEffect } from "react";

interface MediaItem {
  type: "image" | "video";
  url: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  media: MediaItem[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMediaIndex(
        (prevIndex) => (prevIndex + 1) % project.media.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [project.media.length]);

  const currentMedia = project.media[currentMediaIndex];

  return (
    <div className="project-card">
      <div className="media">
        {currentMedia && currentMedia.type === "image" ? (
          <img src={currentMedia.url} alt={`Image of ${project.title}`} />
        ) : currentMedia ? (
          <video
            src={currentMedia.url}
            autoPlay
            loop
            muted
            aria-label={`Video of ${project.title}`}
          />
        ) : null}
      </div>
      <div className="description">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: "project1",
      title: "Project 1",
      description: "A description of Project 1",
      media: [
        { type: "image", url: "https://example.com/image1.jpg" },
        { type: "video", url: "https://example.com/video1.mp4" },
      ],
    },
    {
      id: "project2",
      title: "Project 2",
      description: "A description of Project 2",
      media: [
        { type: "image", url: "https://example.com/image1.jpg" },
        { type: "video", url: "https://example.com/video1.mp4" },
      ],
    },
    // other projects...
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="w-1/2 my-4">
          <h1>Projects</h1>
          <div className="projects-container">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
