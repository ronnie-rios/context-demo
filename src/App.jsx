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
          <h1>Hi this is a context demo </h1>
          <p>each component is nested within another component, with layer 4 being the most nested. This is used to illustrate that with context, we can change the global state no matter where we are in the component tree.</p>
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
