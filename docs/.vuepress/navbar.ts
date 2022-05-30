import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Courses",
    icon: "blog",
    prefix: "/courses",
    children: [
      {
        link: "/Development/home.md",
        text: "Development",
        icon: "code",
      },
      {
        link: "/Linux/home.md",
        text: "Linux",
        icon: "linux",
      },
      {
        link: "/Docker/home.md",
        text: "Docker",
        icon: "workingDirectory",
      },
      {
        link: "/Git/home.md",
        text: "Git",
        icon: "git",
      },
      {
        link: "/Kubernetes/home.md",
        text: "Kubernetes",
        icon: "module",
      },
      {
        link: "/Others/home.md",
        text: "Others",
        icon: "study",
      },
      {
        link: "/Un-Meilleur-Humain/home.md",
        text: "Un-Meilleur-Humain",
        icon: "like",
      }
    ]
  },
  {
    text: "Theme Docs",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/",
  },
]);
