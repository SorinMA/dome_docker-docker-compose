import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import {BrowserRouter as Router} from "react-router-dom"
import {ProviderContext} from "./context/photosContext"
import {ProviderFavAndCartContext} from "./context/cartAndLikeContext"

/**
 * Router is used for the meniu (photos and cart)
 * ProviderContext is used for grabing the photos form an open source url and render prop the App (making the App component the provider for photos)
 * ProviderFavAndCartContext is the comp that make App the provider for Like and add to Cart infos
 */

ReactDOM.render(
                <ProviderFavAndCartContext>
                    <ProviderContext>
                        <Router>
                            <App />
                        </Router>
                    </ProviderContext>
                </ProviderFavAndCartContext>, document.getElementById("root"))