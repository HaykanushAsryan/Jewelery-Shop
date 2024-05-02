import React, { useEffect } from "react";
import style from "./bag.module.css"
import { useDispatch, useSelector } from "react-redux";
import { GetBag, GetBagBelt, PatchBag, PatchCollection, deleteBag, deleteBagBelt, editBagBelt, getProducts } from "./homeSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";

const Bag = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetBag())
        dispatch(GetBagBelt())
    }, [])
    const basket = useSelector(state => state.bag.bag)
    const belt_bag = useSelector(state => state.bagBelt.bagBelt)
    console.log(belt_bag, "belt_bag");
    return (
        <div className={style.basket}>
          
            <section className={style.basket_section}>
                {
                    basket?.length > 0 && basket.map(({ id, img, name, price, custom, bag, count }) => {
                        console.log(count);
                    
                        return (
                            <div className={style.bag_item} key={id}>
                                <div style={{ width: "30%", display: "flex", justifyContent: "space-between" }} >

                                    <DeleteOutlineIcon className={style.bin} onClick={() => {
                                        setTimeout(() => {

                                            dispatch(PatchCollection({
                                                id: id,
                                                bag: bag,
                                                count: count
                                            }))
                                            dispatch(deleteBag(id))
                                                .then(() => {
                                                    dispatch(GetBag())
                                                })
                                        }, 100);



                                    }} />
                                    <img src={img} alt="RIP" style={{ width: "30px", height: "43px" }} />
                                    <span style={{ fontSize: "16px", color: "white", fontFamily: "Montserrat" }}>Custom Name<br />
                                        Bracelet</span>
                                </div>
                                <div className={style.circle}>
                                    <img src="Images/circle.png" alt="" />
                                    <img src="Images/selected_circle.png" alt="" />
                                    <img src="Images/half_full.png" alt="" />
                                </div>
                                <div>
                                    <button className={style.button} onClick={() => {
                                        setTimeout(() => {

                                            dispatch(PatchCollection({
                                                id: id,
                                                count: count++
                                            })).then(() => {
                                                dispatch(getProducts())
                                            })
                                        }, 100);

                                        setTimeout(() => {
                                            dispatch(PatchBag({
                                                id: id,
                                                count: count
                                            })).then(() => {
                                                dispatch(GetBag())
                                            })

                                        }, 200);
                                    }}>+</button>
                                    <span style={{ fontSize: "18px", color: "white" }}>{count}</span>
                                    <button onClick={() => {
                                        if (count > 0 && count !== 0) {

                                            setTimeout(() => {
                                                dispatch(PatchCollection({
                                                    id: id,
                                                    count: count--
                                                })).then(() => {
                                                    dispatch(getProducts())
                                                })
                                            }, 100);


                                            setTimeout(() => {
                                                dispatch(PatchBag({
                                                    id: id,
                                                    count: count
                                                })).then(() => {
                                                    dispatch(GetBag())
                                                })

                                            }, 200);
                                        }

                                    }} className={style.button}>-</button>
                                </div>
                                <span style={{ color: "white", fontSize: "14px", fontFamily: "Montserrat" }}>{price}.00$</span>
                                <span style={{ color: "white", fontSize: "18px", fontFamily: "Montserrat", fontWeight: "bold" }}>{count * price}.00$</span>
                            </div>
                        )
                        // }

                    })
                }
            </section>
            <section className={style.belt_bag}>
                {
                    belt_bag.map(({ id, img, name, custom, price, bag, count }) => {
                        return (
                            <div className={style.belt_basket}>
                                <div style={{ width: "30%", display: "flex", justifyContent: "space-between" }} >

                                    <DeleteOutlineIcon className={style.bin} onClick={() => {

                                        dispatch(deleteBagBelt(id))
                                            .then(() => {
                                                dispatch(GetBagBelt())
                                            })

                                    }} />
                                    <img src={img} alt="RIP" style={{ width: "30px", height: "43px" }} />
                                    <span style={{ fontSize: "16px", color: "white", fontFamily: "Montserrat" }}>Custom Name<br />
                                        Bracelet</span>
                                </div>
                                <div className={style.circle}>
                                    <img src="Images/circle.png" alt="" />
                                    <img src="Images/selected_circle.png" alt="" />
                                    <img src="Images/half_full.png" alt="" />
                                </div>
                                <div>
                                    <button className={style.button} onClick={() => {

                                        dispatch(editBagBelt({
                                            id: id,
                                            count: count + 1
                                        }))
                                            .then(() => {
                                                dispatch(GetBagBelt())

                                            })

                                    }}>+</button>
                                    <span style={{ fontSize: "18px", color: "white" }}>{count}</span>
                                    <button onClick={() => {
                                        if (count > 0 && count !== 0) {

                                            dispatch(editBagBelt({
                                                id: id,
                                                count: count - 1
                                            }))
                                                .then(() => {
                                                    dispatch(GetBagBelt())

                                                })
                                        }

                                    }} className={style.button}>-</button>
                                </div>
                                <span style={{ color: "white", fontSize: "14px", fontFamily: "Montserrat" }}>{price}.00$</span>
                                <span style={{ color: "white", fontSize: "18px", fontFamily: "Montserrat", fontWeight: "bold" }}>{count * price}.00$</span>

                            </div>
                        )
                    })
                }
            </section >
        </div >
    )
}
export default Bag