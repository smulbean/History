import { Routes, Route} from "react-router-dom";
import "./App.css";
import {Navbar} from "./components/Navbar"
import {About, Grandma, Grandpa, Home} from "./components/Pages/index"

const App = () => {
 return (
  <div className = "App"> 
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/grandma" element={<Grandma />}/>
      <Route path="/grandpa" element={<Grandpa />}/>
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