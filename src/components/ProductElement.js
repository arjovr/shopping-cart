import { useState } from "react"
import { InputInc } from "./InputInc"

function ProductElement(props) {
    const [quantity, setQuantity] = useState(0)

    const addToCart = () => {
        console.log(quantity, props.product.id)
        props.addToCart(quantity, props.product.id)
    }

    return (
        <div>
            <span>{props.product.title} (U$D {props.product.price})</span>
            <span><InputInc setValue={setQuantity} /></span>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export { ProductElement }