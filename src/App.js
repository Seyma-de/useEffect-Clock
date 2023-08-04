import LifeCycleMethods from "./components/1-LifeCycleMethods";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Clock from "./components/2-Clock";
import People from "./components/3-People";
function App() {
  const [goster, setGoster] = useState(true);

  return (
    <div>
      <div className="containerr text-center mt-4">
        <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
          GOSTER{" "}
        </button>

        {/* {goster && <LifeCycleMethods/>} */}
        {goster && <Clock />}
      </div>

      {/* <People/> */}
    </div>
  );
}

export default App;
