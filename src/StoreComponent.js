import React from 'react';
import "./StoreComponent.css";

function StoreComponent() {
    return (
    <div className='storeContainer'>
        <div className="storeUpper">
            <div className="storeLeft">
                <img src="https://m.media-amazon.com/images/I/31W4g5yl6-L._AC_UL480_FMwebp_QL65_.jpg" alt="ProductPicture" className='productImg' />
            </div>
            <div className="storeRight">
                <p className="storeHeading">
                    Product Heading
                </p>
                <p className="storeContent">
                    <p className="price">Rs. 100</p>
                    <p className="smallHeading"><small>T-Une Rating</small></p>
                    <p className="rating">⭐⭐⭐⭐</p>
                </p>
            </div>
        </div>
    </div>);
}

export default StoreComponent;
