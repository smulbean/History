import { Routes, Route} from "react-router-dom";
import "./App.css";
import {Navbar} from "./components/Navbar"
import {About, Grandma, Grandpa, Home} from "./components/Pages/index"

const App = () => {
 return (
  <div className = "App"> 
    <Navbar />
    <Routes>
      <Route path="/History/" element={<Home />}/>
      <Route path="/History/about" element={<About />}/>
      <Route path="/History/grandma" element={<Grandma />}/>
      <Route path="/History/grandpa" element={<Grandpa />}/>
    </Routes>
    <html>

<body>
  <footer class="footer">
    <p>&copy;2024 Grace Yin | All Rights Reserved</p>
  </footer>
</body>

</html>
  </div>
 );
};

export default App;