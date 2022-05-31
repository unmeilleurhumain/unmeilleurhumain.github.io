import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Development",
    icon: "code",
    link: "/courses/Development/home.md",
  },
  {
    text: "Linux",
    icon: "linux",
    link: "/courses/Linux/home.md",
  },
  {
    text: "Monitoring",
    icon: "operate",
    link: "/courses/Monitoring/home.md",
  },
  {
    text: "Git",
    icon: "git",
    link: "/courses/Git/home.md",
  },
  {
    text: "Docker",
    icon: "workingDirectory",
    link: "/courses/Docker/home.md",
  },
  {
    text: "Kubernetes",
    icon: "module",
    link: "/courses/Kubernetes/home.md",
  },
  {
    text: "Others",
    icon: "study",
    link: "/courses/Others/home.md",
  },
  {
    text: "Theme Docs",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/",
  },
]);
