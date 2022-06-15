import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
      </div>

      <main>Content</main>
    </BrowserRouter>
  );
}

export default App;
