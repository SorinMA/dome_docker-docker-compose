import React, {useState, useContext, useEffect} from "react"
import {imgCSS, containerCSS, topLeft, topRight} from "./CSS/photoCSS"
import {FavAndCartContext} from "../context/cartAndLikeContext"

function Photo(props) {
    let {cart, like, clickLike, clickCart} = useContext(FavAndCartContext)
    const {url} = props.data
    let [hover, setHover] = useState(false)
    let [inLike, setInLike] = useState(like.indexOf(url) === -1 ? false : true)
    let [inCart, setInCart] = useState(cart.indexOf(url) === -1 ? false : true)
    console.log("img")

    useEffect(() => {
        clickCart(url, inCart)
    }, [inCart, clickCart, url])

    useEffect(() => {
        clickLike(url, inLike)
    }, [inLike, clickLike, url])

    return (
        <div 
            style={containerCSS} 
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
        >
            <img src={url} alt={url} style={imgCSS}/>
            {hover ? 
                <div>
                    <div style={topLeft}>
                        <button 
                            style={{backgroundColor: inLike ? "red" : "white"}}
                            onClick={() => setInLike(oldLike => !oldLike)}
                        >
                            Like
                        </button>
                    </div>
                    <div style={topRight}>
                        <button
                            style={{backgroundColor: inCart ? "red" : "white"}}
                            onClick={() => setInCart(oldCart => !oldCart)}
                        >
                            Shop
                        </button>
                    </div>
                </div>
                 : <div> </div>
            }
        </div>
    )
}

export default React.memo(Photo)