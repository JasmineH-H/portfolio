import "./Resume.css";

const resumeProjects = [
  {
    title: "StarLeap - Gamified E-Learning Platform",
    role: "Full-Stack Developer",
    bullets: [
      "Collaborated with a cross-functional team of 4 developers to build a gamified e-learning platform for lessons, quizzes, and progress tracking.",
      "Developed frontend and backend features with React, Node.js, MongoDB, and REST APIs across 10+ application views.",
      "Built responsive interfaces with Tailwind CSS and implemented routing and state management with React Router and Context API.",
    ],
  },
  {
    title: "Cloud DevSecOps Automation Dashboard",
    role: "Full-Stack Cloud Platform",
    bullets: [
      "Designed and deployed a cloud-native security platform using AWS, Terraform, Docker, ECS Fargate, S3, DynamoDB, VPC, and ALB resources.",
      "Built GitHub Actions CI/CD pipelines to trigger security scanning workflows on every code push.",
      "Developed React dashboard features and backend integrations to visualize scan results, risk scores, and operational insights.",
    ],
  },
  {
    title: "Noise-Robust Voice Activity Detection",
    role: "Machine Learning, Deep Learning",
    bullets: [
      "Built an end-to-end Python voice activity detection system to classify speech and non-speech segments across 100+ hours of audio data.",
      "Processed and augmented LibriSpeech and MUSAN audio across 5+ SNR levels to improve model robustness.",
      "Evaluated Logistic Regression, MLP, and CRNN models using F1 score, false alarm rate, and miss rate metrics.",
    ],
  },
  {
    title: "Homepage Design for MilkLady Soap Co.",
    role: "Client-Facing Product and Design Project",
    bullets: [
      "Led client meetings and in-store research sessions to gather requirements and translate brand goals into actionable design priorities.",
      "Managed iterative Agile-style feedback cycles, documented revisions, and delivered polished prototypes and design documentation.",
    ],
  },
  {
    title: "SFU Beedie Web Analytics Project",
    role: "Web Analytics, Experimentation",
    bullets: [
      "Led stakeholder discussions with SEO leadership to define campaign objectives and translate business goals into measurable KPIs.",
      "Designed A/B testing initiatives and analyzed CTR, sessions, engagement, and conversion trends using GA4.",
    ],
  },
];

function Resume() {
  return (
    <main className="resume-page">
      <section className="resume-card">
        <div className="resume-header">
          <div>
            <p className="resume-kicker">Resume</p>
            <h1>Jiaying Huang</h1>
            <p>
              Master of Science in Computer Science student with experience across full-stack development, UX/UI design, cloud systems, analytics, and client-facing project work.
            </p>
          </div>
          <div className="resume-contact">
            <a href="mailto:huang.jiayin@northeastern.edu">huang.jiayin@northeastern.edu</a>
            <a href="https://jsmnh-portfolio.netlify.app" target="_blank" rel="noreferrer">
              jsmnh-portfolio.netlify.app
            </a>
            <a href="https://github.com/JasmineH-H" target="_blank" rel="noreferrer">
              github.com/JasmineH-H
            </a>
            <span>Vancouver, BC</span>
          </div>
        </div>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <div>
              <strong>Northeastern University</strong>
              <p>Master of Science, Computer Science</p>
            </div>
            <span>2024.09 - Present</span>
          </div>
          <div className="resume-item">
            <div>
              <strong>Simon Fraser University</strong>
              <p>Bachelor of Science, Interactive Arts and Technology, joint major with Business</p>
              <p className="resume-muted">Undergraduate Open Scholarship, Standard Broadcasting Corporation Limited Scholarship, President's Honor Roll</p>
            </div>
            <span>2019.01 - 2023.06</span>
          </div>
        </section>

        <section className="resume-section">
          <h2>Project Experience</h2>
          <div className="resume-project-list">
            {resumeProjects.map((project) => (
              <article className="resume-project" key={project.title}>
                <div className="resume-project-heading">
                  <strong>{project.title}</strong>
                  <span>{project.role}</span>
                </div>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Tech Stack</h2>
          <p className="resume-muted">
            React, Node.js, MongoDB, REST APIs, AWS, Terraform, Docker, GitHub Actions, Python, Figma, WordPress, GA4, Meta Ads Manager, A/B testing, analytics, stakeholder research, cross-functional collaboration.
          </p>
        </section>
      </section>
    </main>
  );
}

export default Resume;
