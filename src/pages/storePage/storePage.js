import "./storePage.css"
import { useState } from "react";

function fakeAlert(){
    alert("This is a demonstation website, there is nothing to buy.")
}

export function StorePage(){
    const [currentCart, setCurrentCart] = useState(0);
    
    return<>
        <button id="cart-button"  onClick={()=>fakeAlert()}>🛒 {currentCart}</button>

        <h1 id="top-spacer-supporter" className="abt-title">Our Store</h1>
        <div className="store-container">
            <div className="store-item-container">
            <div className="store-item">
                <img className="team-icons" src="/storePage/green_tea.png" alt="" />
                <h3 className="title-app">Green Tea</h3>
                <h3 className="store-item-price"> $10</h3>
                <button className="addToCartBtn" onClick={()=>setCurrentCart(currentCart + 1)}>Add to Cart</button>
            </div>
            <div className="store-item">
                <img className="team-icons" src="/storePage/sage.png" alt="" />
                <h3 className="title-app">Dried Sage</h3>
                <h3 className="store-item-price"> $5</h3>
                <button className="addToCartBtn" onClick={()=>setCurrentCart(currentCart + 1)}>Add to Cart</button>
            </div>
            <div className="store-item">
                <img className="team-icons" src="/storePage/tea_pot.png" alt="" />
                <h3 className="title-app">Heiwa Tea Pot</h3>
                <h3 className="store-item-price"> $34</h3>
                <button className="addToCartBtn" onClick={()=>setCurrentCart(currentCart + 1)}>Add to Cart</button>
            </div>
            <div className="store-item">
                <img className="team-icons" src="/storePage/incense_holder.png" alt="" />
                <h3 className="title-app">Incense Holder</h3>
                <h3 className="store-item-price"> $12</h3>
                <button className="addToCartBtn" onClick={()=>setCurrentCart(currentCart + 1)}>Add to Cart</button>
            </div>
            <div className="store-item">
                <img className="team-icons" src="/storePage/incense.png" alt="" />
                <h3 className="title-app">Incense</h3>
                <h3 className="store-item-price"> $15</h3>
                <button className="addToCartBtn" onClick={()=>setCurrentCart(currentCart + 1)}>Add to Cart</button>
            </div>
            <div className="store-item">
                <img className="team-icons" src="/storePage/pillow.png" alt="" />
                <h3 className="title-app">Heiwa Pillow</h3>
                <h3 className="store-item-price"> $23</h3>
                <button className="addToCartBtn" onClick={()=>setCurrentCart(currentCart + 1)}>Add to Cart</button>
            </div>
            </div>
        </div>
    </>
}
