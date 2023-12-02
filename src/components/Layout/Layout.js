import React, { Suspense, useState } from 'react'
import Wrapper from "../HOC/Wrapper"
import Header from "../Header/Header"
import ButtonLoading from "../UI/Loading/ButtonLoading"
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"


function Layout() {
    // switch between light or dark mode
    const [isDark, setIsDark] = useState(
        localStorage.getItem("isDark") == null
            ? false
            : localStorage.getItem("isDark") == "true"
                ? true
                : false
    )

    const darkModeHandler = () => {
        localStorage.setItem("isDark", !isDark)
        setIsDark(!isDark)
    }
    return (
        <Suspense fallback={<ButtonLoading />}>
            <div className={`app ${isDark ? "theme-dark" : "theme-light"}`}>
                <span className="background_colors"></span>
                <main className={`main`}>
                    <Header isDark={isDark} darkModeHandler={darkModeHandler} />
                    <div id="viewport">
                        <div id="navbar_container">
                            <Navbar />
                        </div>
                        <Wrapper>
                            <Outlet />
                        </Wrapper>
                    </div>
                </main>
            </div>
        </Suspense>
    )
}

export default Layout

