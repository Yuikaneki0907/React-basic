import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./Example/MyComponent";
import ListToDo from "./Todos/ListToDo";

import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
/*
2 components: class component/ function component (function, arrow)

*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyComponent/> */}
        <ListToDo />

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
  );
}

export default App;
