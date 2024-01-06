import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../main";
import { ServicesPage } from "../services";
import { ContactPage } from "../contact";
import { AboutPage } from "../about";
import { Header, Footer } from "./global-components";
import { SingleServicePage } from "../service-info";
import { Hero } from "../shared";

export function MainLayout() {
    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Routes>
                    <Route path="/" element={<MainPage isAdmin={false} />} />
                    <Route path="/admin" element={<MainPage isAdmin={true} />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/:abrv" element={<SingleServicePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />

                    <Route path="*" element={<Hero start="Route " words={["not found", "404"]} isError />} />
                </Routes>
            </LayoutWrapper>
        </BrowserRouter>
    )
}

function LayoutWrapper({ children }) {
    return <div className="site-wrap">
        <Header />
        {children}
        <Footer />
    </div>
}


