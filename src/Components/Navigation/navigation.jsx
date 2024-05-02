import React from "react";
import Home from "../Menu/Home";
import Wishlist from "../Menu/Wishlist";
import Bag from "../Menu/Bag";
import Languages from "../Menu/Language";
import MyAccaount from "../Menu/MyAccaount";


export const MenuArr = [
    { id: Math.random(), name: "Home", path: "/", icon: null, element: <Home />, active: true },
    { id: Math.random(), name: "Wishlist", path: "/wishlist", icon: "./Images/heart.png", element: <Wishlist />, active: true },
    { id: Math.random(), name: "Bag", path: "/bag", icon: "./Images/bag.png", element: <Bag />, active: true },
    { id: Math.random(), name: "", path: "/languages", icon: null, element: <Languages />, active: true },
    { id: Math.random(), name: "My Accaount", path: "/bag/accaount:id", icon: null, element: <MyAccaount/>, active: true },
]