import React, {useState} from "react"
import {imgCSS, containerCSS, topLeft, topRight} from "./CSS/photoCSS"

function PhotoCart(props) {
    let [hover, setHover] = useState(false)
    const {src, clickCart} = props

    return (
        <div
            style={containerCSS} 
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
        >
            <img src={src} alt={src} style={imgCSS}/>
            {hover ? 
                <div>
                    <div style={topLeft}>
                        <button 
                            style={{backgroundColor: "#f44336"}}
                            onClick={() => {
                                clickCart(src, false)
                            }}
                        >
                            Trash
                        </button>
                    </div>
                </div> : <div></div>
            }
            <div style={topRight}>
                <span style={{backgroundColor: "#ff9800"}}>
                    0.99$
                </span>
            </div>
        </div>
    )
}

export default PhotoCart