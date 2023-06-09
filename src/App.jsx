import "./App.css";
import Layer1 from "./components/Layer1";
import Layer3 from "./components/Layer3";
import { DataProvider } from "./context/context";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <DataProvider>
        <main>
          <h1>Hi this is a context </h1>
          <Routes>
            <Route path="/" element={<Layer1 />} />
            <Route path="/layer3" element={<Layer3 />} />
          </Routes>
        </main>
      </DataProvider>
    </>
  );
}

export default App;
