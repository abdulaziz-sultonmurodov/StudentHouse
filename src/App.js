import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ForOwners from "./pages/ForOwners";
import ForStaff from "./pages/ForStaff";
import ForStudents from "./pages/ForStudents";
import HomePage from "./pages/HomePage";
import HousesPage from "./pages/HousesPage";
import LoginOwner from "./pages/LoginOwner";
import SignupLandlord from "./pages/SignupLandlord";
import Universities from "./pages/Universities";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={HomePage} exact />
      <Route path="/houses" component={HousesPage} />
      <Route path="/about" component={About} />
      <Route path="/signup-owner" component={SignupLandlord} />
      <Route path="/login-owner" component={LoginOwner} />
      <Route path="/for-students" component={ForStudents} />
      <Route path="/for-owners" component={ForOwners} />
      <Route path="/for-staff" component={ForStaff} />
      <Route path="/universities" component={Universities} />
      <Footer />
    </Router>
  );
}

export default App;
