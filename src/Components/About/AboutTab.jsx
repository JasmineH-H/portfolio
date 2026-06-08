import "./AboutTab.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const skillGroups = {
  me: ["Creative problem solving", "Clear communication", "Growth mindset"],
  developer: ["React", "Node.js", "Backend APIs", "Databases", "DevOps"],
  designer: ["User research", "Wireframing", "Figma", "Design systems", "Usability testing"],
  marketing: ["Content strategy", "Meta Ads", "Campaign testing", "Analytics", "Performance tracking"],
};

function AboutTab() {
  return (
    <div className="tab-container">
      <div className="about-intro">
        <p className="about-kicker">Design-minded developer</p>
        <h2>I build thoughtful interfaces with design clarity and front-end precision.</h2>
      </div>

      <Tabs
        defaultActiveKey="me"
        id="justify-tab-example"
        className="custom-tabs mb-3"
        justify
      >
        <Tab eventKey="me" title="Jasmine">
          <div className="about-panel">
            <div className="about-panel-copy">
              <p className="panel-label">Who I am</p>
              <h3>Curious, practical, and drawn to the details that make products feel good.</h3>
              <p>
                I enjoy working at the intersection of technology, design, and people. Whether I am building an interface, shaping a user flow, or reviewing campaign results, I care about clarity and small decisions that make the final experience stronger.
              </p>
              <p>
                Outside of work, snowboarding and outdoor activities have shaped the way I approach challenges: stay adaptable, keep learning, and move forward with patience.
              </p>
            </div>
            <div className="skill-chip-list">
              {skillGroups.me.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </Tab>

        <Tab eventKey="developer" title="Software Engineer">
          <div className="about-panel">
            <div className="about-panel-copy">
              <p className="panel-label">What I build</p>
              <h3>Full-stack applications with thoughtful interfaces and reliable systems.</h3>
              <p>
                I build across the stack, from responsive front-end interfaces to backend APIs and application logic. I like creating systems that are clear for users and maintainable for the team behind them.
              </p>
              <p>
                My engineering process focuses on clean architecture, reusable components, dependable data flow, and practical DevOps practices that help projects run smoothly from development to deployment.
              </p>
            </div>
            <div className="skill-chip-list">
              {skillGroups.developer.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="designer" title="UX / UI Designer">
          <div className="about-panel">
            <div className="about-panel-copy">
              <p className="panel-label">How I design</p>
              <h3>User-centered layouts that balance visual polish with real usability.</h3>
              <p>
                I start by understanding what users need, then shape clear flows, information hierarchy, and interface patterns around those goals. I care about designs that feel natural, calm, and purposeful.
              </p>
              <p>
                Because I also code, I design with implementation in mind. That helps me create systems that are attractive, realistic, and easier to hand off.
              </p>
            </div>
            <div className="skill-chip-list">
              {skillGroups.designer.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="marketing" title="Digital Marketing">
          <div className="about-panel">
            <div className="about-panel-copy">
              <p className="panel-label">How I optimize</p>
              <h3>Creative campaigns guided by audience behavior and measurable results.</h3>
              <p>
                I approach marketing with a mix of creativity and analytics. I enjoy building campaign ideas, testing messages, reading the data, and turning insights into better content and stronger performance.
              </p>
              <p>
                This background helps me think beyond the interface. I consider how people discover a product, what motivates them to act, and how digital experiences support business goals.
              </p>
            </div>
            <div className="skill-chip-list">
              {skillGroups.marketing.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default AboutTab;
