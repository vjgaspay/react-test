
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import About from "./components/pages/About";
import AboutPerson from "./components/pages/AboutPerson";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NavBar from "./components/NavBar";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";

import { Register as Register2 } from "trivut-templates";

import { WebsiteProvider } from "./hooks/context/WebsiteContext";

function App() {

    return (
        <WebsiteProvider>
            <div className="app">
                <BrowserRouter>
                    <Header title="Node.js + Express.js + PostgreSQL + React.js" developer="Trivut DevJedis">
                        <NavBar />
                    </Header>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:id" element={<AboutPerson />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login/*" element={<Login />} />

                        <Route path="/profile" element={<Profile />} />

                        <Route path="/contact" element={<Navigate to="/" />} />

                        <Route path="/register2" element={<Register2 appCode="DAAS" />} />

                        <Route path="*" element={<><h3>404: not found</h3></>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            
            </div>
        </WebsiteProvider>
        
    );

    
}

export default App;
