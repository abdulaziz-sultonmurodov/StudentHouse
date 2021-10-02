import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ForOwners from "./pages/ForOwners";
import ForStaff from "./pages/ForStaff";
import ForStudents from "./pages/ForStudents";
import Help from "./pages/Help";
import HomePage from "./pages/HomePage";
import HousePage from "./pages/HousePage";
import HousesPage from "./pages/HousesPage";
import LoginOwner from "./pages/LoginOwner";
import Post from "./pages/Post";
import SignupLandlord from "./pages/SignupLandlord";
import TermsAndConditions from "./pages/TermsAndConditions";
import Universities from "./pages/Universities";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={HomePage} exact />
      <Route path="/houses" component={HousesPage} />
      <Route path="/house" component={HousePage} exact />
      <Route path="/about" component={About} />
      <Route path="/signup-owner" component={SignupLandlord} />
      <Route path="/login-owner" component={LoginOwner} />
      <Route path="/for-students" component={ForStudents} />
      <Route path="/for-owners" component={ForOwners} />
      <Route path="/for-staff" component={ForStaff} />
      <Route path="/universities" component={Universities} />
      <Route path="/help" component={Help} />
      <Route path="/terms-conditions" component={TermsAndConditions} />
      <Route path="/post" component={Post} />
      <Footer />
    </Router>
  );
}

export default App;
