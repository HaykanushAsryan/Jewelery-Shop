import React from "react"
import { useDispatch, useSelector } from "react-redux"
import style from "./wishlist.module.css"
import { useEffect, useState } from "react"
import { GetWishlist } from "./wishlistSlice"
import Pagination from '@mui/material/Pagination';
import { GetBag, PatchBag, PatchCharms, PatchCollection, PostBag, getProducts, updateWishlistCharms, updateWishlistCollection } from "./homeSlice";
import { getCharms } from "./charmSlice";
// import { Box, Button, Modal, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const Wishlist = () => {



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetWishlist())
        dispatch(getProducts())
        dispatch(getCharms())
    }, [])
    const wishlist = useSelector(state => state.wishlisht.wishlist)
    const collection = useSelector(state => state.home.products)
    const charms = useSelector(state => state.charms.charms)

    // console.log(wishlist, "wishlist");
    const [isChosen, setIsChosen] = useState(null)

    return (
        <div className={style.wishlist}>
            <div className={style.category}>
                <img style={{ width: "16px", height: "20px" }} src="Images/list.png" alt="" />
                <span style={{ fontSize: "16px", color: "white" }}>Catgory</span>
                <img style={{ width: "8px", height: "4px", color: "#D0D0D0" }} src="Images/arrow_down.png" alt="" />
            </div>

            <section className={style.main_wishlist}>
                <div className={style.wished_list}>
                    {
                        collection.map(({ id, img, name, price, custom, info, wishlist, count }) => {
                            if (wishlist) {


                                // wishlist?.map(({ id, img, name, price, custom, info, wishlist }) => {
                                // console.log(wishlist, "wishlist");

                                return (
                                    <div key={id} className={style.wished} style={{ background: isChosen === id ? "#202226" : "" }} onClick={() => {
                                        setIsChosen(id)
                                    }}>
                                        <div className={style.product_img}>
                                            <img className={style.wish_heart} src={wishlist ? "Images/white_heart.png" : 'Images/heart.png'}
                                                onClick={() => {

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
                                                alt="" />
                                            <img src={img} alt="" />
                                            <div className={style.circle}>
                                                <img src="Images/circle.png" alt="" />
                                                <img src="Images/selected_circle.png" alt="" />
                                                <img src="Images/half_full.png" alt="" />
                                            </div>
                                        </div>

                                        <div>
                                            <p style={{ color: "#FFFFFF" }}>{custom}</p>
                                            <p style={{ color: "#FFFFFF" }}>{name}   {price}.00$</p>
                                            <div>
                                                <div key={id}>
                                                    <Button onClick={handleOpen}>See more</Button>
                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                    >
                                                        <Box sx={style}  style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            width: 660,
                                                            height: 400,
                                                            bgcolor: 'background.paper',
                                                            border: '2px solid #000',
                                                            boxShadow: 24,
                                                            p: 4,
                                                            background: "#2F333A",
                                                        }}>
                                                            <Typography style={{ textAlign: "right", cursor: "pointer" }} id="modal-modal-title" variant="h6" component="h2">
                                                                
                                                            </Typography>
                                                            <Typography id="modal-modal-description" key={id} sx={{ mt: 2 }}>
                                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                                                    <div style={{ width: "45%", height: "90%", baorder: '1px solid black' }}>
                                                                        <div style={{ width: "300px", height: "250px", baorder: '1px solid black', background: " #FFFFFF4D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                            <img style={{ width: "150px", height: "150px" }} src={img} alt="" />
                                                                        </div>
                                                                        <div style={{ width: "200px", display: "flex", justifyContent: "space-between" }}>
                                                                            <div style={{ background: "#3B4048", width: "50px", height: "50px", border: "3px solid #43464D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                <img style={{ width: "30px", height: "33px" }} src={img} alt="" />
                                                                            </div>
                                                                            <div style={{ background: "#3B4048", width: "50px", height: "50px", border: "3px solid #43464D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                <img style={{ width: "30px", height: "33px" }} src={img} alt="" />
                                                                            </div>
                                                                            <div style={{ background: "#3B4048", width: "50px", height: "50px", border: "3px solid #43464D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                <img style={{ width: "30px", height: "33px" }} src={img} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ width: "45%", height: "90%", baorder: '1px solid black' }}>
                                                                        <p style={{ color: "#E6E6E6" }}>Cusrom</p>
                                                                        <p style={{ color: "#E6E6E6" }}>Name Bracelet</p>
                                                                        <p style={{ color: "#E6E6E6" }}>{price}.00$</p>
                                                                        <p style={{ fontSize: "14px", color: "#E6E6E6" }}>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non iaculis non non. Tristique vel tellus urna blandit sed gravida posuere tellus diam. Venenatis nunc enim ac condimentum facilisis rutrum rhoncus sagittis sed. Adipiscing odio lectus purus in id id. Lorem enim molestie commodo fusce dolor cras.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Typography>
                                                        </Box>
                                                    </Modal>
                                                </div>
                                                {/* <p style={{ textDecoration: "underline", color: "#B0B0B0", textAlign: "left", fontSize: "12px", left: "100px", marginLeft: "100px", cursor: "pointer" }}
                                                   
                                                >See More</p> */}
                                                <p style={{ textDecoration: "underline", color: "#B0B0B0", textAlign: "right", fontSize: "12px", left: "100px", marginLeft: "100px", cursor: "pointer" }}
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
                                                >Add To Bag</p>
                                            </div>

                                        </div>
                                    </div>
                                )

                            }

                        })
                        // })
                    }
                    {
                        charms.map(({ id, img, name, price, custom, info, wishlist, count }) => {
                            if (wishlist) {

                                return (
                                    <div key={id} className={style.wished} style={{ background: isChosen === id ? "#202226" : "" }} onClick={() => {
                                        setIsChosen(id)
                                    }}>
                                        <div className={style.product_img}>
                                            <img className={style.wish_heart} src={wishlist ? "Images/white_heart.png" : 'Images/heart.png'}
                                                onClick={() => {
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
                                                alt="" />
                                            <img src={img} alt="" />
                                            <div className={style.circle}>
                                                <img src="Images/circle.png" alt="" />
                                                <img src="Images/selected_circle.png" alt="" />
                                                <img src="Images/half_full.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <p style={{ color: "#FFFFFF" }}>{custom}</p>
                                            <p style={{ color: "#FFFFFF" }}>{name}   {price}.00$</p>

                                            <div>
                                                <Button onClick={handleOpen}>Open modal</Button>
                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style} style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            width: 660,
                                                            height: 400,
                                                            bgcolor: 'background.paper',
                                                            border: '2px solid #000',
                                                            boxShadow: 24,
                                                            p: 4,
                                                            background: "#2F333A",
                                                        }}>
                                                        <Typography style={{textAlign:"right"}} id="modal-modal-title" variant="h6" component="h2">
                                                          X
                                                        </Typography>
                                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                                                    <div style={{ width: "45%", height: "90%", baorder: '1px solid black' }}>
                                                                        <div style={{ width: "300px", height: "250px", baorder: '1px solid black', background: " #FFFFFF4D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                            <img style={{ width: "150px", height: "150px" }} src={img} alt="" />
                                                                        </div>
                                                                        <div style={{ width: "200px", display: "flex", justifyContent: "space-between" }}>
                                                                            <div style={{ background: "#3B4048", width: "50px", height: "50px", border: "3px solid #43464D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                <img style={{ width: "30px", height: "33px" }} src={img} alt="" />
                                                                            </div>
                                                                            <div style={{ background: "#3B4048", width: "50px", height: "50px", border: "3px solid #43464D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                <img style={{ width: "30px", height: "33px" }} src={img} alt="" />
                                                                            </div>
                                                                            <div style={{ background: "#3B4048", width: "50px", height: "50px", border: "3px solid #43464D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                                                <img style={{ width: "30px", height: "33px" }} src={img} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ width: "45%", height: "90%", baorder: '1px solid black' }}>
                                                                        <p style={{ color: "#E6E6E6" }}>Cusrom</p>
                                                                        <p style={{ color: "#E6E6E6" }}>Name Bracelet</p>
                                                                        <p style={{ color: "#E6E6E6" }}>{price}.00$</p>
                                                                        <p style={{ fontSize: "14px", color: "#E6E6E6" }}>
                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non iaculis non non. Tristique vel tellus urna blandit sed gravida posuere tellus diam. Venenatis nunc enim ac condimentum facilisis rutrum rhoncus sagittis sed. Adipiscing odio lectus purus in id id. Lorem enim molestie commodo fusce dolor cras.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                        </Typography>
                                                    </Box>
                                                </Modal>
                                            </div>

                                            {/* <p style={{ textDecoration: "underline", color: "#B0B0B0", textAlign: "left", fontSize: "12px", left: "100px", marginLeft: "100px", cursor: "pointer" }}>See More</p> */}

                                            <p style={{ textDecoration: "underline", color: "#B0B0B0", textAlign: "right", fontSize: "12px", left: "100px", marginLeft: "100px", cursor: "pointer" }}
                                                onClick={() => {

                                                    setTimeout(() => {

                                                        dispatch(PatchCharms({
                                                            id: id,
                                                            // bag: bag,    
                                                            count: count + 1
                                                        }))
                                                            .then(() => {
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
                                            >Add To Bag</p>

                                        </div>
                                    </div>
                                )

                            }

                        })
                        // })
                    }

                </div>
            </section>
            <section className={style.paginattion}>
                <Pagination count={10} variant="outlined" color="primary" shape="rounded" />
            </section>

        </div>
    )

}
export default Wishlist