// const heading = React.createElement("h1", {id : "heading"}, "Namaste React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is a h1 tag")
  ), React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "this is a h1 tag")
  )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




