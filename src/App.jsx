import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import ProjectDetail from "./Components/Projects/ProjectDetail";

const getRoute = (pathname) => {
  const [, page, slug] = pathname.split("/");

  return {
    page: page || "home",
    projectSlug: page === "projects" ? slug : "",
  };
};

function App() {
  const [route, setRoute] = useState(() => getRoute(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getRoute(window.location.pathname));
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const updateRoute = (path) => {
    window.history.pushState(null, "", path);
    setRoute(getRoute(path));
  };

  const navigateToProjects = () => {
    updateRoute("/projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openProject = (slug) => {
    updateRoute(`/projects/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (route.projectSlug) {
    return (
      <div>
        <Navbar />
        <ProjectDetail slug={route.projectSlug} onBack={navigateToProjects} />
      </div>
    );
  }

  if (route.page === "projects") {
    return (
      <div>
        <Navbar />
        <Projects onOpenProject={openProject} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero onNavigateProjects={navigateToProjects} />
      <About />
    </div>
  );
}

export default App;
