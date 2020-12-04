import "./styles/css/index.css";
import three from "./three";
function main() {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
}
main();
three();
// if (module.hot) {
//   module.hot.accept("./three.ts", function () {
//     three();
//   });
// }
