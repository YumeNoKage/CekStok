import React from 'react';
import './seller.css';

function Sell (props) {
    return <>
        <div className="seller-item">
            <p>{props.content} <strong>{props.strong}</strong> <br/>{props.content2}</p>
            <img src={props.image} alt={props.title}></img>
        </div>
    </>
}

function Seller (){
    return <>
        <h2>Bagaimana Cara Berjualan</h2>
        <div className="seller-content">
            <Sell content="Dengan menggunakan" strong="toko online" content2="yang kamu dapat" image="https://image.flaticon.com/icons/svg/1819/1819042.svg" title="toko online" />
            <hr/>
            <Sell content="Dengan menggunakan" strong="marketplace" image="https://image.flaticon.com/icons/svg/1818/1818983.svg" title="toko online" />
        </div>
    </>
}

export default Seller;