import React, {useState} from "react"

const FavAndCartContext = React.createContext()

function ProviderFavAndCartContext(props) {
    let [like, setLike] = useState([])
    let [cart, setCart] = useState([])
    
    const clickLike = (url, inLike) => {
        let newLike = like.slice()
        const index = like.indexOf(url)

        if (inLike) { // if it's clicked like on a photo
            if (index === -1) { // if the photo isn't liked yet
                newLike.push(url) // add it to favorites
                setLike(newLike)
            }
        } else {
            if (index !== -1) { // if the photo exist in fav.
                newLike.splice(index, 1) // then remove it
                setLike(newLike)
            } 
        }
    }

    const clickCart = (url, inCart) => {
        let newCart = cart.slice()
        const index = cart.indexOf(url)

        if (inCart) { // if it's clicked add to cart
            if (index === -1) { // if the photo isn't in cart yet
                newCart.push(url) // add it
                setCart(newCart)
            }
        } else 
            if (index !== -1) { // if exist in cart
                newCart.splice(index, 1) // remove it
                setCart(newCart)
            }    
    }

    const checkout = () => {
        /**
         * Checkout simulation: simulate data sending to an external api with response estimated at 2 sec
         */
        setTimeout(() => {
            console.log("loading")
            setCart([]) // free the cart
            alert("Done")
    
        }, 2000)
    }

    return (
        <FavAndCartContext.Provider 
            value={{like: like,
                    cart: cart,
                    clickLike:clickLike,
                    clickCart:clickCart,
                    checkout: checkout
                }}
        >
            {props.children}
        </FavAndCartContext.Provider>
    )
}

export {FavAndCartContext, ProviderFavAndCartContext}