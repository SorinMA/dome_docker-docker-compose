import React from "react"

function Total(props) {
    console.log(props)
    const {nrOfItems} = props
    const total = nrOfItems * 0.99
    return (
        <>
            Total: {`${(Math.round(total * 100) / 100).toFixed(2)} $`}
        </>
    )
}

export default Total