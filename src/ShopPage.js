import { ProductElement } from "./components/ProductElement"
import { NavigationBar } from "./NavigationBar"


function productFactory(id, title, price) {
    return {
        id,
        title,
        price,
    }
}


const products = [
    productFactory(1, 'ryzen 3 3200G', 150),
    productFactory(2, 'ryzen 3 3400G', 190),
    productFactory(3, 'ryzen 5 3600', 220),
    productFactory(4, 'ryzen 7 3700X', 320),
    productFactory(5, 'ryzen 7 5700X', 360),
]

class Cart {
    constructor() {
        return this
    }

    add = (id, quantity) => {
        let val = 0
        if (this[id]) {
            val = this[id]
        }
        this[id] = val + quantity
    }
}

const cart = new Cart()

const addToCart = (quantity, id) => {
    cart.add(id, quantity)
    console.log(cart)
}

function ShopPage() {
    return (
        <div>
            <NavigationBar />
            <div>hola desde shop page</div>
            {products.map((product) => {
                return <ProductElement key={product.id} product={product} addToCart={addToCart} />
            })}
        </div>
    )
}

export { ShopPage }
