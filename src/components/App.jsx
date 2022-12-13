import { Home } from "./Home/Home.jsx";
import { AboutUs } from "./About us/AboutUs.jsx";
import { Hammenu } from "./Ham-Menu/Hammenu.jsx";
import './App.scss';


export const App = () => {





  return (

    <>
      <div className="page">

        <Hammenu/>
        <Home />


        <div className="body">
          <AboutUs/>

        </div>


      </div>
    </>
  )
};
