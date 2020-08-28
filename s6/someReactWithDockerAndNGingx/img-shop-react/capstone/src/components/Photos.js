import React, { useContext } from "react"
import {PhotoContext} from "../context/photosContext"
import Photo from "./Photo"

function Photos(props) {
    const {photos} = useContext(PhotoContext)
    const photosJSX = (Array.from(photos)).map((data,i) => <Photo key={i} data={data} />)
    return (
        <>
            {photosJSX}
        </>
    )
}

export default React.memo(Photos)