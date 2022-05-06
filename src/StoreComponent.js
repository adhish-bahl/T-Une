import React from 'react';
import "./StoreComponent.css";

function StoreComponent({id, item, link, desc, rate, price, img}) {

    const rating =  rate;
    const rating1 = "⭐";
    const rating2 = "⭐⭐";
    const rating3 = "⭐⭐⭐";
    const rating4 = "⭐⭐⭐⭐";
    const rating5 = "⭐⭐⭐⭐⭐";
    // console.log(rating);

    return (
        
            <div className='storeContainer'>
                <div className="storeUpper">
                    <div className="storeLeft">
                        {/* <img src="https://m.media-amazon.com/images/I/31W4g5yl6-L._AC_UL480_FMwebp_QL65_.jpg" alt="ProductPicture" className='productImg' /> */}
                        <img src={img} alt="ProductPicture" className='productImg' />
                    </div>
                    <div className="storeRight">
                        <a target="_blank" href={link}>
                            <p className="storeHeading">
                                {item}
                            </p>
                        </a>
                        <p className="storeContent">
                            <p className="productDetails">{desc}</p>
                            <p className="price">Rs. {price}</p>
                            <p className="smallHeading"><small>T-Une Rating</small></p>
                            {/* <p className="rating">for(var i = 0; i < 5; i++) {⭐}</p> */}
                            {/* <p className="rating">while(i<rate) {⭐}</p> */}
                            <p className="rating">
                                {rating == 0 ? "" : ""}
                                {rating == 1 ? rating1 : ""}
                                {rating == 2 ? rating2 : ""}
                                {rating == 3 ? rating3 : ""}
                                {rating == 4 ? rating4 : ""}
                                {rating == 5 ? rating5 : ""}
                            </p>
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default StoreComponent;
