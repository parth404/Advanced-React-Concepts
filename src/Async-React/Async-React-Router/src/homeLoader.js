import {defer} from "react-router-dom";
import {wait} from "./wait";
// import {Home} from "./Home";

export function homeLoader() {
    return defer({ dataPromise: wait("Loaded", 1000) });
  }

