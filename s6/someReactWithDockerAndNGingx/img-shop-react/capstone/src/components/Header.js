import React from "react"
import {Link} from "react-router-dom"

function Header(props) {
    return (
        <>
            <Link to="/">Photos</Link>
            <Link to="/cart">Cart</Link>
        </>
    )
}

export default Header