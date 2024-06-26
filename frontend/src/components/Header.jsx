import { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
export default function Header({ amount, cart, setCart }) {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    // <Link> blir til en <a></a> i html strukturen på nettsidens inspect</Link>
    return (
        <header>
            <Link to={"/"}><img id="logo" src="/website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" /></Link>
            <button id="carttoggle" onClick={handleClick}>
                <span id="cartcount">{amount}</span>
                <img id="carticon" src="/website_images/legocart.svg" alt="Din handlevogn" />
            </button>
            <Cart toggle={toggle} cart={cart} setCart={setCart} />
        </header>
    )
}

