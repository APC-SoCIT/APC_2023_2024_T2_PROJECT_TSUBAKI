import Navbar from "./components/Navbar";
import Landpad from "./components/Landpad";
import Landpadmsg from "./components/Landpadmsg";
import Contguide from "./components/Contguide";
import Servprov from "./components/Servprov";
import Inqserve from "./components/Inqserve";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App(){
  return <div>
    <Navbar />
    <Landpad />
    <Landpadmsg />
    <Contguide />
    <Servprov />
    <Inqserve />
    <SignUp />
    <Footer />
  </div>;
}

export default App;