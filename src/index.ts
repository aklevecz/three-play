import "./styles/css/index.css";
import "./styles/css/animations.css";
import three from "./three";
export function main() {
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
