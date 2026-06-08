import { useMemo, useState } from "react";
import text_decor from "../../assets/title_decor.png";
import { PROJECT_TAGS, projects } from "./projectData";
import "./Projects.css";

const Projects = ({ onOpenProject }) => {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={text_decor} alt="text decor" />
      </div>

      <div className="project-filters" aria-label="Project filters">
        {PROJECT_TAGS.map((tag) => (
          <button
            className={`project-filter ${activeTag === tag ? "active" : ""}`}
            key={tag}
            onClick={() => setActiveTag(tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.slug}>
            <div>
              <p className="project-area">{project.area}</p>
              <div className="project-card-title-row">
                <h2>{project.title}</h2>
                {project.repository && (
                  <a
                    aria-label={`Open ${project.title} GitHub repository`}
                    className="project-repo-icon"
                    href={project.repository}
                    rel="noreferrer"
                    target="_blank"
                    title="GitHub repository"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <path d="M12 .5C5.65.5.75 5.6.75 12.1c0 5.1 3.25 9.45 7.76 10.96.57.11.78-.25.78-.56v-2.17c-3.16.7-3.82-1.37-3.82-1.37-.52-1.34-1.27-1.7-1.27-1.7-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.21 1.76 1.21 1.02 1.79 2.68 1.27 3.34.97.1-.76.4-1.27.72-1.56-2.52-.29-5.17-1.29-5.17-5.75 0-1.27.44-2.31 1.17-3.12-.12-.29-.51-1.48.11-3.08 0 0 .96-.31 3.13 1.19.91-.26 1.88-.38 2.85-.39.97.01 1.94.13 2.85.39 2.17-1.5 3.12-1.19 3.12-1.19.62 1.6.23 2.79.11 3.08.73.81 1.17 1.85 1.17 3.12 0 4.47-2.66 5.46-5.19 5.75.41.36.77 1.06.77 2.14v3.18c0 .31.21.67.79.56 4.51-1.51 7.75-5.86 7.75-10.96C23.25 5.6 18.35.5 12 .5Z" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="project-summary">{project.summary}</p>
            </div>

            <div className="project-card-footer">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button
                className="project-link"
                onClick={() => onOpenProject(project.slug)}
                type="button"
              >
                View details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
