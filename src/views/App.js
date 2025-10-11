import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListToDo from "./Todos/ListToDo";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListUser from "./Users/ListUser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailUser from "./Users/DetailUser";
/*
2 components: class component/ function component (function, arrow)

*/
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Nav />
          <img src={logo} className="App-logo" alt="logo" />
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/todo" element={<ListToDo/>} />
              <Route path="/about" element={<MyComponent/>} />
              <Route path="/user" exact element={<ListUser/>} />
              <Route path="/user/:id" element={<DetailUser/>} />
            </Routes>
          

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </header>
      </div>
    </Router>
  );
}

export default App;
