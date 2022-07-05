import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./Data/Data";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
