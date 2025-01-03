import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { CreateAccount } from "./pages/CreateAccount";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";




//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<CreateAccount />} path="/createaccount" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Profile />} path="/profile/user" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
