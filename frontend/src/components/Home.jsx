import { useEffect, useState } from "react"
import { fetchAllProducts } from "../../sanity/services/productServices"
import ProductCard from "./ProductCard"

export default function Home({ setAmount, setCart, cart }) {

    const [products, setProducts] = useState(null)

    const getAllProducts = async () => {
        const data = await fetchAllProducts()
        setProducts(data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    console.log(products)

    return (
        <>
            <main>
                <h2>Velkommen til LegoDudes</h2>
                {/* spørsmålstegnet for å kun rendre når det kommer data */}
                {products?.map((product, index) => <ProductCard key={index} productInfo={product} setAmount={setAmount} setCart={setCart} cart={cart} />)}
            </main>
        </>
    )
}