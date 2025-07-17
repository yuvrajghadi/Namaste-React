import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h1", { id: "heading" }, "Namaste React");


const Title=() => (
  <div>
    <h1 id="heading">Component Composition🚀</h1>
  </div>
)

// component composition
const Headingcomponent=() => (
  <div>
    {Title()}
    <Title/>
  <Title></Title>
    <h1 id="heading">Namaste React using JSX🚀</h1>
  </div>
)



const jsxHeaading = <h1 id="heading">Namaste React using JSX🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent />);
