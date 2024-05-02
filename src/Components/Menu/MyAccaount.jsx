import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from './myaccaount.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getBelts, getCharms, getMyAccaount, getNecklace, getPendants } from "./myAccaountSlice";



const MyAccaount = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [gender, setGender] = useState()
    const [collection, setCollection] = useState()
    const [material, setMaterial] = useState()
    const [finish, setFinish] = useState()
    const [category, setCategory] = useState()
    const dispatch = useDispatch()
    const [arr, setArr] = useState([])
    const [selected, setSelected] = useState()
    console.log(arr, "arr");
    useEffect(() => {

        dispatch(getBelts())
        dispatch(getMyAccaount())
        dispatch(getNecklace())
        dispatch(getPendants())
        dispatch(getCharms())

        setSearchParams({
            for: gender || searchParams.get("for"),
            collection: collection || searchParams.get("collection"),
            material: material || searchParams.get("material"),
            finish: finish || searchParams.get("finish"),
            category: category || searchParams.get("category")
        })
    }, [gender, collection, material, finish, category])

    const accaount = useSelector(state => state.accaount.accaount)
    const belts = useSelector(state => state.belts.belts)
    const necklace = useSelector(state => state.necklace.necklace)
    const pendants = useSelector(state => state.pendants.pendants)
    const charms = useSelector(state => state.charm.charms)

    return (
        <>
            <div className={style.accaunt}>
                <section className={style.menu_bar}>
                    <ul className={style.menu} >
                        <li style={{ color: "#3485FF", listStyle: "none", fontSize: "16px", fontFamily: "Montserrat", cursor: "pointer" }}>For?</li>
                        <li style={{ color: searchParams.get("for") === "woman" ? "#3485FF" : "white" }} onClick={(() => {
                            // setSearchParams({ for: "woman" })
                            setGender("woman")
                        })}>Woman</li>
                        <li style={{ color: searchParams.get("for") === "man" ? "#3485FF" : "white" }} onClick={() => {
                            setGender("man")
                        }}>Man</li>
                        <li style={{ color: searchParams.get("for") === "kids" ? "#3485FF" : "white" }} onClick={() => {
                            setGender("kids")
                        }}>Kids</li>
                        <li style={{ color: searchParams.get("for") === "animals" ? "#3485FF" : "white" }} onClick={() => {
                            setGender("animals")
                        }}>Animals</li>
                    </ul>
                    <hr style={{ width: "100%", color: "#8282828C", border: "0.5px solid #8282828C" }} />

                    <ul className={style.menu}>
                        <li style={{ color: "#3485FF", listStyle: "none", fontSize: "16px", fontFamily: "Montserrat", cursor: "pointer" }}>Collection</li>
                        <li style={{ color: searchParams.get("collection") === "symbols" ? "#3485FF" : "white" }} onClick={(() => {
                            setCollection("symbols")
                        })}>Symbol</li>
                        <li style={{ color: searchParams.get("collection") === "all symbols" ? "#3485FF" : "white" }} onClick={(() => {
                            setCollection("all symbols")
                        })}>All Symbols</li>
                        <li style={{ color: searchParams.get("collection") === "heart" ? "#3485FF" : "white" }} onClick={(() => {
                            setCollection("heart")
                        })}
                        >Heart</li>
                        <li style={{ color: searchParams.get("collection") === "moon+star" ? "#3485FF" : "white" }} onClick={(() => {
                            setCollection("moon+star")

                        })}
                        >Moon+Star</li>
                        <li style={{ color: searchParams.get("collection") === "feather" ? "#3485FF" : "white" }} onClick={() => {
                            setCollection("feather")
                        }}
                        >Feather</li>
                        <li style={{ color: searchParams.get("collection") === "letter" ? "#3485FF" : "white" }} onClick={() => {
                            setCollection("letter")
                        }}
                        >Letter</li>
                    </ul>
                    <hr style={{ width: "100%", color: "#8282828C", border: "0.5px solid #8282828C" }} />

                    <ul className={style.menu}>
                        <li style={{ color: "#3485FF", listStyle: "none", fontSize: "16px", fontFamily: "Montserrat", cursor: "pointer" }}>Material</li>
                        <li style={{ color: searchParams.get("material") === "leather bracelet" ? "#3485FF" : "white" }} onClick={() => {
                            setMaterial("leather bracelet")
                        }}>Leather bracelet</li>
                        <li style={{ color: searchParams.get("material") === "charm bracelet" ? "#3485FF" : "white" }} onClick={() => {
                            setMaterial("charm bracelet")
                        }}>Charm bracelet</li>
                        <li style={{ color: searchParams.get("material") === "silicone bracelet" ? "#3485FF" : "white" }} onClick={() => {
                            setMaterial("silicone bracelet")

                        }}>Silicone bracelet</li>
                        <li style={{ color: searchParams.get("material") === "chain bracelet" ? "#3485FF" : "white" }} onClick={() => {
                            setMaterial("chain bracelet")
                        }}>Chain bracelet</li>
                    </ul>
                    <hr style={{ width: "100%", color: "#8282828C", border: "0.5px solid #8282828C" }} />

                    <ul className={style.menu}>
                        <li style={{ color: "#3485FF", listStyle: "none", fontSize: "16px", fontFamily: "Montserrat", cursor: "pointer" }}>Finish</li>
                        <li style={{ color: searchParams.get("finish") === "silver" ? "#3485FF" : "white" }} onClick={() => {
                            setFinish("silver")
                        }}>Silver</li>
                        <li style={{ color: searchParams.get("finish") === "gold" ? "#3485FF" : "white" }} onClick={() => {
                            setFinish("gold")
                        }}>Gold</li>
                        <li style={{ color: searchParams.get("finish") === "rose gold" ? "#3485FF" : "white" }} onClick={() => {
                            setFinish("rose gold")
                        }}
                        >Rose Gold</li>
                        <li style={{ color: searchParams.get("finish") === "two tone" ? "#3485FF" : "white" }} onClick={() => {
                            setFinish("two tone")
                        }}>Two Tone</li>
                        <li style={{ color: searchParams.get("finish") === "mixed metal" ? "#3485FF" : "white" }} onClick={() => {
                            setFinish("mixed metal")
                        }}>Mixed Metal</li>
                        <li style={{ color: searchParams.get("finish") === "midnight silver" ? "#3485FF" : "white" }} onClick={() => {
                            setFinish("midnight silver")
                        }}>Midnight Silver</li>
                    </ul>
                </section>
                <section className={style.category}>

                    <div className={style.select_category}>
                        <div className={style.box} onClick={() => {
                            setCategory("collection")
                            setArr(accaount)
                        }} >
                            <img src="https://i.postimg.cc/fRNp0RXq/ph1.png" alt="" />
                            <p style={{ color: searchParams.get("category") === "collection" ? "#3485FF" : "white", cursor: "pointer" }}>Collection</p>

                        </div>

                        <div className={style.box} onClick={() => {
                            setCategory("bracelet")

                        }}>
                            <img src="https://i.postimg.cc/MT9f1Hv7/ph2.png" alt="" />
                            <p style={{ color: searchParams.get("category") === "bracelet" ? "#3485FF" : "white", cursor: "pointer" }}
                                onClick={() => {
                                    setArr(belts)
                                }}>Bracelet Belts</p>
                        </div>


                        <div className={style.box} onClick={() => {
                            setCategory("necklace")
                            setArr(necklace)
                        }}>
                            <img src="https://i.postimg.cc/FKDHBqNm/ph3.png" alt="" />
                            <p style={{ color: searchParams.get("category") === "necklace" ? "#3485FF" : "white", cursor: "pointer" }}>Necklace</p>
                        </div>

                        <div className={style.box} onClick={() => {
                            setCategory("pendant")
                            setArr(pendants)
                        }}>
                            <img src="https://i.postimg.cc/wj9t4DLX/ph4.png" alt="" />
                            <p style={{ color: searchParams.get("category") === "pendant" ? "#3485FF" : "white", cursor: "pointer" }}>Pendant</p>
                        </div>

                        <div style={{ marginTop: "-10px" }} className={style.box} onClick={() => {
                            setCategory("charms")
                            setArr(charms)
                        }}>
                            <img src="https://i.postimg.cc/4dpsTSTm/ph5.png" alt="" />
                            <p style={{ marginTop: "-10px", color: searchParams.get("category") === "charms" ? "#3485FF" : "white", cursor: "pointer" }}>Charms</p>
                        </div>
                    </div>

                    <div className={style.openCategory}>

                        {
                            arr?.map(({ id, name, img, price, custom }) => {
                                return (
                                    <div key={id} style={{ width: "181px", height: "230px", margin: "10px", position: "relative", background: selected === id ? "#202226" : null }} onClick={() => {
                                        setSelected(id)
                                    }}>
                                        <div style={{ width: "180px", height: "140px", background: "white", }}>
                                            <img src={img} alt="" style={{ width: "64px", height: "94px", position: "absolute", top: "22px", left: "55px" }} />
                                            <img src="https://i.postimg.cc/Cx3bP7Py/Group-2.png" alt="" srcset="" style={{ position: "absolute", left: "160px", top: "5px", cursor: "pointer" }} />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "75px", color: "white", fontSize: "14px" }}>
                                            <p>Custom</p>
                                            <p>{name}   {price}.00$</p>
                                            <a href="#" style={{ color: "#3485FF" }}>Add to bag</a>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </section>


            </div>
            <footer style={{ color: "#A4A4A4", fontSize: "16px", background: "#2C2F36", textAlign: "center" }}>© 2020 Composet . All rights reserved.</footer>
        </>
    )
}
export default MyAccaount