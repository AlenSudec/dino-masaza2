import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../main";
import { ServicesPage } from "../services";
import { ContactPage } from "../contact";
import { AboutPage } from "../about";
import { BlogPage, SingleBlogPage } from "../blog";
import { Header, Footer } from "./global-components";

let router = createBrowserRouter([
    {
        path: "/",
        Component() {
            return (
                <LayoutWrapper>
                    <MainPage />
                </LayoutWrapper>
            )
        }
    },
    {
        path: '/services',
        Component() {
            return (
                <LayoutWrapper>
                    <ServicesPage />
                </LayoutWrapper>
            )
        }
    },
    {
        path: "/contact",
        Component() {
            return (
                <LayoutWrapper>
                    <ContactPage />
                </LayoutWrapper>
            )
        }
    },
    {
        path: "/about",
        Component() {
            return (
                <LayoutWrapper>
                    <AboutPage />
                </LayoutWrapper>
            )
        }

    },
    {
        path: "/blog",
        Component() {
            return (
                <LayoutWrapper>
                    <BlogPage />
                </LayoutWrapper>
            )
        }
    },
    {
        path: "/single-blog-post",
        Component() {
            return (
                <LayoutWrapper>
                    <SingleBlogPage />
                </LayoutWrapper>
            )
        }
    }
])

export function MainLayout() {
    return (
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    )
}

function LayoutWrapper({ children }) {
    return <div className="site-wrap">
        <Header />
            {children}
        <Footer />
    </div>
}