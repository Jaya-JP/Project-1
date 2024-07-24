import React from "react";
import RouterCom from "./components/RouterCom";
import StoreProvider from "./context/Store";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
   return (
      <>
      <div className="app">
         <a href="#navbar">
            <span className="uparr"> &uarr; </span>
         </a>
         <ToastContainer />
         <StoreProvider>
            <RouterCom />  
         </StoreProvider>
         <Footer />
      </div>
         </>
   );
};

export default App;
