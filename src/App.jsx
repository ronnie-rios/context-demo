import "./App.css";
import Footer from "./components/Footer";
import Layer1 from "./components/Layer1";
import Layer3 from "./components/Layer3";
import { DataProvider } from "./context/context";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <DataProvider>
        <main>
          <h1>Hi, this a React Context demo.</h1>
         
          <Routes>
            <Route path="/" element={<Layer1 />} />
            <Route path="/layer3" element={<Layer3 />} />
          </Routes>
          <Footer />
        </main>
      </DataProvider>
    </>
  );
}

export default App;
