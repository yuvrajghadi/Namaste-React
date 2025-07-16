import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "This is React"),
    React.createElement("h2", { key: "h2-1" }, "By Yuvraj"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "4567"),
    React.createElement("h2", { key: "h2-2" }, "I'm h2"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
