import Navbar from "./components/Navbar";
import Bookinghead from "./components/Bookinghead";
import Bookingform from "./components/Bookingform";
import Footer from "./components/Footer";

function BookApp(){
  return <div>
    <Navbar />
    <Bookinghead />
    <Bookingform />
    <Footer />
  </div>;
}

export default BookApp;