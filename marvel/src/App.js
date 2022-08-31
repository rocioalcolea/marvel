import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function App() {
  const exampleApi = useFetch(
    "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=a13706b6a95da3d6e4a10019d495a3d5&hash=b4ba9442c4cf314e8075db66961cf4cf"
  );

  console.log(exampleApi);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
