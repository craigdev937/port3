import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";

export const Page = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
        </React.Fragment>
    </BrowserRouter>
);



