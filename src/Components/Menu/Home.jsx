import React, { useEffect, useState } from "react";
import style from './Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getProducts, postWishlist, updateWishlistCollection, updateWishlistCharms, GetBag, PostBag, PatchBag, PatchCollection, PatchCharms, PostBagBelt, GetBagBelt, editBagBelt } from "./homeSlice";
import { getCharms } from "./charmSlice";
import { GetColors } from "./colorSlice";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';

const Home = () => {
   

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCharms())
        dispatch(GetColors())
        dispatch(GetBag())

    }, [])
    const products = useSelector(state => state.home.products)
    const charms = useSelector(state => state.charms.charms)
    const colors = useSelector(state => state.colors.colors)
    // const basket = useSelector(state => state.bag.bag)
    const [isChosen, setIsChosen] = useState(null)
    const [colorChosen, setColorChosen] = useState(null)
    const [selectedItem, setSelectedItem] = useState([])
    const [selectedColor, setSelectedColor] = useState()

    const [toBag, setToBag] = useState([])
    let arr
    let sum = 0
    let totalSum = 0

    return (
        <div className={style.home}>
            <section className={style.section}>
                <div className={style.product_line}>
                    {
                        products?.map(({ id, img, name, custom, price, wishlist, bag, count }) => {


                            return (
                                <div className={style.product} style={{ background: isChosen === id ? "#202226" : "" }} key={id} onClick={() => {
                                    setIsChosen(id)
                                }}>
                                    <div className={style.product_img} >
                                        <img className={style.wishlist} src={wishlist ? "Images/white_heart.png" : "Images/heart.png"} alt=""
                                            onClick={() => {

                                                dispatch(postWishlist({
                                                    id: id,
                                                    img: img,
                                                    name: name,
                                                    price: price,
                                                    custom: custom,
                                                    wishlist: !wishlist

                                                }))
                                                dispatch(updateWishlistCollection({
                                                    wishlist: !wishlist,
                                                    id: id,
                                                    img: img,
                                                    name: name,
                                                    price: price,
                                                    custom: custom,

                                                })).then(() => {
                                                    dispatch(getProducts()) //?
                                                })
                                            }}
                                        />
                                        <img src={img} alt="RIP" onClick={() => {
                                            if (toBag.length >= 0 && toBag.length < 14) {
                                                setToBag([...toBag, {
                                                    id, img, name, custom, price, wishlist, bag, count
                                                }])
                                            }

                                            if (setSelectedItem.length >= 0 && setSelectedItem.length < 14) {
                                                setSelectedItem([...selectedItem, {
                                                    id, img, name, custom, price, wishlist, bag, count
                                                }])
                                            }
                                        }} />
                                        <div className={style.circle}>
                                            <img src="Images/circle.png" alt="" />
                                            <img src="Images/selected_circle.png" alt="" />
                                            <img src="Images/half_full.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={style.product_info}>
                                        <p style={{ color: "#FFFFFF" }}>{custom}</p>
                                        <span style={{ color: "#FFFFFF" }} >{name}  {price}.00$</span>
                                    </div>
                                    <div style={{ textDecoration: "underline", color: "#B0B0B0", textAlign: "left", fontSize: "12px", left: "100px", marginLeft: "100px" }}>See More</div>
                                    <div style={{ textDecoration: "underline", marginLeft: "-117px", marginTop: "-41px", fontSize: "12px", cursor: "pointer", color: bag ? "blue" : "#B0B0B0" }}
                                        onClick={() => {


                                            setTimeout(() => {

                                                dispatch(PatchCollection({
                                                    id: id,
                                                    // bag: bag,
                                                    count: count + 1
                                                }))
                                                    .then(() => {
                                                        dispatch(getProducts())
                                                    })
                                            }, 300);

                                            setTimeout(() => {

                                                dispatch(PostBag({
                                                    id: id,
                                                    img: img,
                                                    name: name,
                                                    price: price,
                                                    custom: custom,
                                                    bag: bag,
                                                    count: count
                                                })).then(() => {
                                                    dispatch(GetBag())
                                                })

                                            }, 100);

                                            setTimeout(() => {

                                                dispatch(PatchBag({
                                                    id: id,
                                                    count: count + 1
                                                }))
                                                    .then(() => {
                                                        dispatch(GetBag())
                                                    })
                                            }, 200);

                                        }}
                                    >Add to Bag</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.product_line}>
                    {
                        charms?.map(({ id, img, name, custom, price, wishlist, count, bag }) => {

                            return (
                                <div className={style.product} style={{ background: isChosen === id ? "#202226" : "" }} key={id} onClick={() => {
                                    setIsChosen(id)
                                }}>
                                    <div className={style.product_img} >
                                        <img className={style.wishlist} src={wishlist ? "Images/white_heart.png" : "Images/heart.png"} alt=""
                                            onClick={() => {

                                                dispatch(postWishlist({
                                                    id: id,
                                                    img: img,
                                                    name: name,
                                                    price: price,
                                                    custom: custom,
                                                    wishlist: !wishlist
                                                }))

                                                dispatch(updateWishlistCharms({
                                                    wishlist: !wishlist,
                                                    id: id,
                                                    img: img,
                                                    name: name,
                                                    price: price,
                                                    custom: custom,

                                                })).then(() => {
                                                    dispatch(getCharms())
                                                })

                                            }}
                                        />
                                        <img src={img} alt="RIP" onClick={() => {
                                            if (toBag.length >= 0 && toBag.length < 14) {
                                                setToBag([...toBag, {
                                                    id, img, name, custom, price, wishlist, bag, count
                                                }])
                                            }

                                            if (setSelectedItem.length >= 0 && setSelectedItem.length < 14) {
                                                setSelectedItem([...selectedItem, {
                                                    id, img, name, custom, price, wishlist, bag, count
                                                }])
                                            }
                                        }} />
                                        <div className={style.circle}>
                                            <img src="Images/circle.png" alt="" />
                                            <img src="Images/selected_circle.png" alt="" />
                                            <img src="Images/half_full.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={style.product_info}>
                                        <p style={{ color: "#FFFFFF" }}>{custom}</p>
                                        <span style={{ color: "#FFFFFF" }} >{name}  {price}.00$</span>
                                    </div>
                                
                                    <div style={{ textDecoration: "underline", color: "#B0B0B0", textAlign: "left", fontSize: "12px", left: "100px", marginLeft: "100px" }}>See More</div>
                                    <div style={{ textDecoration: "underline", color: "#B0B0B0", marginLeft: "-117px", marginTop: "-41px", fontSize: "12px", cursor: "pointer" }}
                                        onClick={() => {

                                            setTimeout(() => {

                                                dispatch(PatchCharms({
                                                    id: id,
                                                    count: count + 1
                                                })).then(() => {
                                                    dispatch(getCharms())
                                                })
                                            }, 300);

                                            setTimeout(() => {
                                                dispatch(PostBag({
                                                    id: id,
                                                    img: img,
                                                    name: name,
                                                    price: price,
                                                    custom: custom,
                                                    // bag: bag,
                                                    count: count
                                                })).then(() => {
                                                    dispatch(GetBag())
                                                })
                                            }, 100);

                                            setTimeout(() => {
                                                dispatch(PatchBag({
                                                    id: id,
                                                    count: count + 1
                                                }))
                                                    .then(() => {
                                                        dispatch(GetBag())
                                                    })
                                            }, 200);


                                        }}
                                    >Add to Bag</div>

                                </div>
                            )
                        })
                    }
                </div>

            </section>

            <section className={style.color_section}>
                {
                    colors?.map(({ id, img, name, color, price }) => {
                        
                        return (
                            <div className={style.color} style={{ background: colorChosen === id ? "#202226" : "" }} onClick={() => {
                                setColorChosen(id)
                                setSelectedColor(color)
                                
                                // dispatch(PostBagBelt({
                                   
                                //     color:color
                                // }))
                                // .then(()=>{
                                //     dispatch(GetBagBelt())
                                // })

                            }} >
                                <img style={{ width: "52px", height: "54px" }} src={img} alt="" />
                                <p>{name}</p>
                                <p>{price},00$</p>
                            </div>
                        )

                    })
                }
            </section>

            <section className={style.belt_section}>
                <div className={style.belt}>
                    <div className={style.refresh} onClick={() => {
                        setSelectedItem([])
                        setSelectedColor("")
                    }}><ReplayIcon /></div>
                    <div>

                        <div className={style.attach} style={{ backgroundColor: selectedColor }}>

                            {
                                selectedItem?.map(({ id, name, img, price, custom }) => {
                                    sum += price
                                    return (
                                        <img src={img} alt="RIP" className={style.attached_item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <p style={{ color: "white" }}>Belt</p>
                    <p style={{ color: "white", marginLeft: "920px", marginTop: "-18px" }}>Belt price:${sum}.00$ </p>
                </div>

                <div className={style.box}>

                    {/* 
                    {
                        // id !== elementi indexin (hushum)

                        toBag.map(({ img, id, price }) => {
                            totalSum += price

                            return (
                                <div className={style.baged}>
                                    <div onClick={() => {
                                        setToBag(toBag.filter(el => el.id !== id))
                                    }}>
                                        <CloseIcon className={style.close_icon} />
                                    </div>

                                    <img style={{ width: "50px", height: "56px" }} src={img} alt="" srcset="" />
                                    <p style={{ color: "#FFFFFF", fontSize: "14px", fontFamily: "Montserrat", margin: "10px" }}>{price}.00$</p>
                                </div>
                            )

                        })

                    } */}

                    {/* {

                        array.map((el, index) => {
                            return (
                                <div className={style.baged}>
                                    <CloseIcon className={style.close_icon} />

                                    {
                                        toBag.map(({ img }) => {
                                            return (
                                                <img src={img} alt="" />
                                            )
                                        })
                                    }
                                </div>
                            )


                        })

                    } */}
                    {
                        toBag?.map(({ id, img, name, custom, price, wishlist, bag, count }) => {

                            totalSum += price
                            return (
                                <div className={style.baged}>
                                    <div onClick={() => {
                                        setToBag(toBag.filter((el, index) => el.id === index
                                        ))
                                    }}>
                                        <CloseIcon className={style.close_icon} />
                                    </div>
                                    <img style={{ width: "50px", height: "56px" }} src={img} alt="" />
                                    <p style={{ color: "#FFFFFF", fontSize: "14px", fontFamily: "Montserrat", margin: "10px" }}>{price}.00$</p>
                                </div>
                            )
                        })
                    }
                    {
                        arr = [...Array(13 - toBag.length)]?.map((_, index) => {

                            return (
                                <div className={style.baged} >

                                </div>
                            )
                        })
                    }

                    <span style={{ fontSize: "18px", color: "#FFFFFF", position: "absolute", marginTop: "175px", marginLeft: "900px" }}>Total Price {totalSum},00$</span>
                </div>
                <p style={{ color: "#3485FF", fontSize: "12px", marginLeft: "970px", cursor: "pointer" }}
                    onClick={() => {
                        selectedItem?.map(({ id, img, name, custom, price, bag, count }) => {

                            dispatch(PostBagBelt(
                                {
                                    id: id,
                                    img: img,
                                    name: name,
                                    price: price,
                                    custom: custom,
                                    bag: bag,
                                    count: 1

                                }
                            )).then(() => {
                               dispatch(GetBagBelt())
                            })
                    
                        })
                    }}

                >Add to bag</p>
            </section>
            <footer style={{ color: "#A4A4A4", fontSize: "16px", }}>© 2020 Composet . All rights reserved.</footer>
        </div>

    )
}
export default Home