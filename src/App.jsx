// import Game from "./component/pages/Game/Game";
// import About from "./component/pages/About/About";
// import Contact from "./component/pages/Contact/Contact";
// import Home from "./component/pages/Home/Home";
import Router from "./component/features/Router/Router";
import { useState } from "react";
function App() {
  const [pageCom, setPageCom] = useState("home");
  // const [toggle, setToggle] = useState(0);
  // const [page, setPage] = useState("home");
  // const Router = () => {
  //   switch (toggle) {
  //     case 1:
  //       return <Home />;
  //     case 2:
  //       return <About />;
  //     case 3:
  //       return <Contact />;
  //     default:
  //       console.log("Invalid value for toggle");
  //   }
  // };
  // const PageRouter = () => {
  //   switch (page) {
  //     case "home":
  //       return <Home />;
  //     case "about":
  //       return <About />;
  //     case "contact":
  //       return <Contact />;
  //     default:
  //       console.log("Invalid value for page");
  //   }
  // };
  return (
    <div className="App">
      {/* <Game /> */}
      {/* <Router />
      <button onClick={() => setToggle(1)}>Home</button>
      <button onClick={() => setToggle(2)}>About</button>
      <button onClick={() => setToggle(3)}>Contact</button> */}
      {/* <PageRouter />
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("contact")}>Contact</button> */}
      {/* <button onClick={() => setPageCom(1)}>1</button>
      <button onClick={() => setPageCom(2)}>2</button>
      <button onClick={() => setPageCom(3)}>3</button> */}
      <button onClick={() => setPageCom("home")}>home</button>
      <button onClick={() => setPageCom("about")}>about</button>
      <button onClick={() => setPageCom("contact")}>contact</button>
      <Router page={pageCom} />
    </div>
  );
}

export default App;
