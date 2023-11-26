import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../main";
import { Header } from "../services";
import { ContactPage } from "../contact";
import { AboutPage } from "../about";
import { BlogPage, SingleBlogPage } from "../blog";

let router = createBrowserRouter([
    {
        path: "/",
        Component() {
            return (
                <MainPage />
            )
        }
    },
    {
        path: '/services',
        Component() {
            return (
                <Header />
            )
        }
    },
    {
        path: "/contact",
        Component() {
            return (
                <ContactPage />
            )
        }
    },
    {
        path: "/about",
        Component() {
            return <AboutPage />
        }

    },
    {
        path: "/blog",
        Component() {
            return <BlogPage />
        }
    },
    {
        path: "/single-blog-post",
        Component() {
            return <SingleBlogPage />
        }
    }
])

export function MainLayout(){
    return (
        <div className="site-wrap">
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </div>
    )
}