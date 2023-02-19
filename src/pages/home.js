import footer from "../component/footer";
import header from "../component/header";
import Nav from "../component/nav";
import aboutPage from "./about";
import contactPage from "./contact";
import postsPage from "./posts";
import projectsPage from "./projects";

const homePage = () => {
  return /*html*/ `
  ${header()}
  ${Nav()}
  
  ${aboutPage()}
  ${postsPage()}
  ${projectsPage()}
  ${contactPage()}
  ${footer()}
  `;
};
export default homePage;
