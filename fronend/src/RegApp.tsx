import Navbar from "./components/Navbar";
import Reghead from "./components/Reghead";
import Regisalt from "./components/Regisalt";
import Regform from "./components/Regform";
import Regbenefits from "./components/Regbenefits";
import Footer from "./components/Footer";

function RegApp(){
  return <div>
    <Navbar />
    <Reghead />
    <Regisalt />
    <Regform />
    <Regbenefits />
    <Footer />
  </div>;
}

export default RegApp;