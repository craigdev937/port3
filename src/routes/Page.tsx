import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Skills } from "../components/Skills";
import { Portfolio } from "../components/Portfolio";
import { Details } from "../components/Details";

export const Page = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/project/:id" element={<Details />} />
            </Routes>
            <Footer />
        </React.Fragment>
    </BrowserRouter>
);



