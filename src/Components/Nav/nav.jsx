import React from "react";
import { Route, Routes } from "react-router-dom";
import { MenuArr } from "../Navigation/navigation";

const Nav = () => {
    return (
        <Routes>
            {
                MenuArr.map(({ id, path, element }) => {
             
                    return (
                        <Route key={id} path={path} element={element}/>
                    )
                })
            }
        </Routes>
    )
}

export default Nav