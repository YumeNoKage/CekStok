import React from 'react';
import './fitur.css';

function Card (props) {
    return <> 
        <div className="cardItem">
            <img src={props.image} alt={props.title}></img>
            <div className="descri">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    </>
}

class Fitur extends React.Component{
    render(){
        return(
            <>  
                <div className="fitur">
                    <h2>Cara Kerja</h2>
                    <div className="cardList">
                        <Card image="https://image.flaticon.com/icons/svg/1819/1819042.svg" title="Daftar" desc="menjadi seller" />
                        <img src="https://image.flaticon.com/icons/svg/482/482615.svg" className="right-arrow" alt="right-arrow"></img>
                        <Card image="https://image.flaticon.com/icons/svg/1818/1818913.svg" title="Pilih Produk" desc="yang ingin kamu jual" />
                        <img src="https://image.flaticon.com/icons/svg/482/482615.svg" className="right-arrow" alt="right-arrow"></img>
                        <Card image="https://image.flaticon.com/icons/svg/1818/1818983.svg" title="Pilih Tampilan" desc="toko onlinemu" />
                        <img src="https://image.flaticon.com/icons/svg/482/482615.svg" className="right-arrow" alt="right-arrow"></img>
                        <Card image="https://image.flaticon.com/icons/svg/1819/1819042.svg" title="Yeay!" desc="kamu punya totko online baru" />
                    </div>
                </div>
                <hr className="line"/>
            </>
        );
    }
}

export default Fitur;