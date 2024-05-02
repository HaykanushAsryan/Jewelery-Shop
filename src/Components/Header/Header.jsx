import React, { useState } from "react";
import { MenuArr } from "../Navigation/navigation";
import { Link, useLocation } from "react-router-dom";
import style from './Header.module.css'
import Languages from "../Menu/Language";



const Header = () => {
    let location = useLocation()
   
    return (
        <div className={style.container}>
            <Link to={"/"} className={style.brand_name}>Composet</Link>
            <ul className={style.header}>
                {
                    MenuArr.map(({ name, id, path, icon, active }) => {

                        return (
                            <li className={style.li} key={id}>
                                <Link className={style.list} to={path} >
                                    <p style={{ textDecoration: "underline", textDecorationColor: location.pathname === path ? "blue" : "" }}><img src={icon} alt="" srcset="" />{name}</p>
                                </Link>
                            </li>
                        )
                    })
                }
                <select name="" id="" className={style.select}>

                    {
                        Languages.map(({ language }) => {
                            return (
                                <option value="" style={{ outline: "none", border: "transparent", borderColor: "#2A2C33", scrollBehavior: " smooth" }}>{language}</option>
                            )
                        })
                    }
                </select>

            </ul>
        </div>
    )
}

export default Header