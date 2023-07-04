import "./App.css";
import "./index.css"
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <div className="basis-[16%] h-[100vh] border sticky top-0 left-0">
        <Sidebar />
      </div>
      
      <div className="basis-[84%] border">
        
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
