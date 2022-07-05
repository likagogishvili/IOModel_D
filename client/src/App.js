import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./Data/Data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Data />} />
          <Route path=":lang" element={<Data />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
