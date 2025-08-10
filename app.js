const heading = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
       [React.createElement("h1",{id:"parent"},"i'm h1"),React.createElement("h2",{id:"parent"},"i'm h2")]
    ),React.createElement("div",{id:"child"},
       [React.createElement("h1",{id:"parent"},"i'm h1"),React.createElement("h2",{id:"parent"},"i'm h2")]
    )]
);


console.log("hi");
console.log("hi");
console.log("hi");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
