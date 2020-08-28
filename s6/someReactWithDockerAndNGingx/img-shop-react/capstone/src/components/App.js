import React from "react"
import Header from "./Header"
import Photos from "./Photos"
import Cart from "./Cart"
import {Switch, Route} from "react-router-dom"

function App(props) { // the main app
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/"><Photos /></Route>
                <Route  path="/cart"><Cart /></Route>
            </Switch>
        </>
    )
}

export default App