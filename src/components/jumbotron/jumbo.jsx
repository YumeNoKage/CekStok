import React from 'react';
import './jumbo.css';

class Jumbo extends React.Component{
    render(){
        return (
            <>
                <div className="jumboItem">
                    <div className="title">
                        <h1>Pilih barang untuk toko onlinemu dengan mudah.</h1>
                        <p>Kami membantu kamu memilih produk, menambah ke toko <br/>onlinemu, dan mengirim langsung ke pembelimu. <strong>Tanpa perlu siapkan stok, tanpa resiko.</strong> <br/> Daftar sekarang, dapatkan toko onlinemu!</p>
                        <div className="btn-banner">
                            <button type="submit">DAPATKAN TOKO ONLINEMU SEKARANG</button>
                        </div>
                    </div>
                    <div className="banner">
                        <img src="https://image.flaticon.com/icons/svg/1819/1819042.svg" alt="Banner"></img>
                    </div>
                </div>
            </>
        );
    }
}

export default Jumbo;