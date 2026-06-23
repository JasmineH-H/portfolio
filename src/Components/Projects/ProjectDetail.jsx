import { projects } from "./projectData";
import "./ProjectDetail.css";

const ProjectDetail = ({ slug, onBack }) => {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-detail">
        <button className="back-link" onClick={onBack} type="button">
          Back to projects
        </button>
        <h1>Project not found</h1>
        <p>The project you are looking for is not available yet.</p>
      </main>
    );
  }

  return (
    <main className="project-detail">
      <button className="back-link" onClick={onBack} type="button">
        Back to projects
      </button>

      <section className="project-detail-hero">
        <p className="project-area">{project.area}</p>
        <h1>{project.title}</h1>
        <p>{project.introduction}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.repository && (
          <a
            className="project-detail-link"
            href={project.repository}
            rel="noreferrer"
            target="_blank"
          >
            View GitHub Repository
          </a>
        )}
      </section>

      <section className="project-detail-section">
        <h2>Tech Stack</h2>
        <div className="tech-stack-list">
          {project.techStack.map((group) => (
            <article className="tech-stack-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tech-stack-tools">
                {group.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {project.architectureImage && (
        <section className="project-detail-section">
          <h2>System Architecture</h2>
          <div className="project-architecture project-architecture-compact">
            <img
              src={project.architectureImage}
              alt={project.architectureAlt}
            />
          </div>
        </section>
      )}

      {project.networkArchitectureImage && (
        <section className="project-detail-section">
          <h2>Network Architecture & Security Design</h2>
          <div className="project-architecture project-architecture-light">
            <img
              src={project.networkArchitectureImage}
              alt={project.networkArchitectureAlt}
            />
          </div>
        </section>
      )}

      {project.analysis && (
        <section className="project-detail-section">
          <h2>{project.analysis.title}</h2>
          <p className="section-intro">{project.analysis.summary}</p>

          {project.analysis.showcase && (
            <div className="analysis-showcase">
              <h3>{project.analysis.showcase.title}</h3>
              <div className="analysis-showcase-grid">
                {project.analysis.showcase.figures.map((figure) => (
                  <figure key={figure.caption}>
                    <img src={figure.image} alt={figure.caption} />
                    <figcaption>{figure.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="analysis-subsection">
            <h3>{project.analysis.resultsTitle}</h3>
            <div className="analysis-metrics">
              {project.analysis.metrics.map((metric) => (
                <article className="analysis-metric" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.note}</p>
                </article>
              ))}
            </div>

            <div className="analysis-table-wrap">
              <table className="analysis-table">
                <thead>
                  <tr>
                    {project.analysis.table.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {project.analysis.table.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, cellIndex) => (
                        <td
                          data-label={project.analysis.table.columns[cellIndex]}
                          key={`${row[0]}-${project.analysis.table.columns[cellIndex]}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {project.analysis.figures && (
            <div className="analysis-subsection">
              <h3>{project.analysis.figuresTitle}</h3>
              {project.analysis.figuresSummary && (
                <p className="analysis-summary">{project.analysis.figuresSummary}</p>
              )}
              <div className="analysis-figures">
                {project.analysis.figures.map((figure) => (
                  <figure className={figure.size === "wide" ? "figure-wide" : ""} key={figure.caption}>
                    <img src={figure.image} alt={figure.caption} />
                    <figcaption>{figure.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {project.functions?.length > 0 && (
        <section className="project-detail-section">
          <h2>How It Works</h2>
          <div className="function-list">
            {project.functions.map((item) => (
              <article className="function-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.steps && (
                  <div className="function-timeline">
                    {item.steps.map((step, index) => (
                      <article
                        className={`timeline-step ${
                          step.layout === "stacked" ||
                          item.timelineLayout === "stacked" ||
                          project.timelineLayout === "stacked"
                            ? "timeline-step-stacked"
                            : ""
                        }`}
                        key={step.title}
                      >
                        <div className="timeline-copy">
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <h4>{step.title}</h4>
                          <p>{step.text}</p>
                          {step.notebook && (
                            <a
                              className="timeline-source-link"
                              href={step.notebook.url}
                              rel="noreferrer"
                              target="_blank"
                            >
                              Source notebook: {step.notebook.name}
                            </a>
                          )}
                        </div>
                        {step.images ? (
                          <div
                            className={`timeline-figures ${
                              step.imagesLayout === "vertical"
                                ? "timeline-figures-vertical"
                                : ""
                            }`}
                          >
                            {step.images.map((image) => (
                              <figure
                                className={
                                  image.size === "compact"
                                    ? "timeline-figure-compact"
                                    : ""
                                }
                                key={image.imageAlt}
                              >
                                <img src={image.image} alt={image.imageAlt} />
                                {image.caption && <figcaption>{image.caption}</figcaption>}
                              </figure>
                            ))}
                          </div>
                        ) : step.image ? (
                          <figure className={step.imageSize === "compact" ? "timeline-figure-compact" : ""}>
                            <img src={step.image} alt={step.imageAlt} />
                          </figure>
                        ) : null}
                      </article>
                    ))}
                  </div>
                )}
                {item.media && (
                  <div className="function-media-grid">
                    {item.media.map((media) => (
                      <figure
                        className={media.size === "wide" ? "media-wide" : ""}
                        key={media.caption}
                      >
                        <img src={media.image} alt={media.caption} />
                      </figure>
                    ))}
                  </div>
                )}
                {item.gif && (
                  <div className="function-video">
                    {/* <img controls playsInline preload="metadata">
                      <source src={item.video.src} type="video/quicktime" />
                      Your browser does not support this video.
                    </img> */}
                    <figure className="function-gif">
                      <img src={item.gif.src} />
                    </figure>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProjectDetail;
