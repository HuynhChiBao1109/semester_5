import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./page/Contact";
import { Header } from "./components/Header";
import TopNews from "./page/TopNews";
import { Home } from "./page/Home";
import SignIn from "./page/SignIn";
import NewDetails from "./page/NewDetails";
import { Dashboard } from "./page/Dashboard";
import AddNews from "./components/AddNews";
import UpdateNews from "./components/UpdateNews";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/add" element={<AddNews />}></Route>
            <Route path="/update/:id" element={<UpdateNews />}></Route>
            <Route path="/details/:id" element={<NewDetails />}></Route>
            <Route path="topnews" element={<TopNews />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="signin" element={<SignIn />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
