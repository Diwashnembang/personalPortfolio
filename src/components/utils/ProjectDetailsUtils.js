import weatherProject from "../../assets/image/weatherProject.png";

const projectDetails = (projects) => {
  if (!Array.isArray(projects)) return alert("project must be an array");

  return projects.map((project) => ({
    img: project.img,
    details: project.details,
    link: project.link,
    title: project.title,
  }));
};

const projects = [
  {
    img: weatherProject,
    title: "Weather Project",
    link: "https://diwashnembang.github.io/weather-app/",
    details: "This webapp forcaste weather.",
  },
];
console.log(projects);
const ProjectDetailsUtils = projectDetails(projects);

export default ProjectDetailsUtils;
