import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Read from "./Components/Read";
import Create from "./Components/Create";
import Update from "./Components/Update";

function App() {

  return (
    <div className="main">
  <h1>hello world</h1>
 <BrowserRouter>
 <Routes>
  <Route path="/read" element={<Read/>}/>
  <Route path="/create" element={<Create/>}/>
  <Route path="/update" element={<Update/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;

 <div class="area">
<ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div> 