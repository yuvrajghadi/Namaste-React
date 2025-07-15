// const heading = React.createElement("h1", { id: "heading" }, "hello React");


const parent = React.createElement("div", { id: "parent" },
    [ React.createElement("div", { id: "child" },
         [React.createElement("h1", {}, "i'am h1"),
         React.createElement("h2", {}, "i'am h2"),]),
         React.createElement("div", { id: "child2" },
         [React.createElement("h1", {}, "i'am h1"),
         React.createElement("h2", {}, "i'am h2"),])])

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);