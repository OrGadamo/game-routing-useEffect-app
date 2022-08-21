import "./Router.css";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

// function Router({ page }) {
//   switch (page) {
//     case 1:
//       return <Home />;
//     case 2:
//       return <About />;
//     case 3:
//       return <Contact />;
//     default:
//       console.log("Invalid page ");
//   }
// }
function Router({ page }) {
  switch (page) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    default:
      console.log("Invalid page ");
  }
}
export default Router;
