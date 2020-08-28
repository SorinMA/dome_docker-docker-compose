import React, {useContext, useState} from "react"
import PhotoCart from "./PhotoCart"
import Total from "./Total"
import {FavAndCartContext} from "../context/cartAndLikeContext"

function Cart(props) {
    const {cart, clickCart, checkout} = useContext(FavAndCartContext)
    const [loading, setLoading] = useState("Checkout")
    const images = (Array.from(cart)).map((data, i) => <PhotoCart 
                                                            src={data} 
                                                            key={i} 
                                                            clickCart={clickCart}/>)
    const nrOfItems = cart.length
    return (
        <>
            <Total nrOfItems={nrOfItems}/>
            {nrOfItems > 0 ?
                <button 
                    onClick={() => {
                        setLoading("Loading..")
                        checkout()
                    }} 
                    disabled={loading === "Loading.." ? true : false}
                >
                    {loading}
                </button> : <div></div>
            }
            {images}
        </>
    )
}

export default Cart