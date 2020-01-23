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
                        <svg width="616" height="569" viewBox="0 0 616 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M558.895 238.207C590.311 305.58 515.539 406.938 391.887 464.598C268.235 522.257 142.527 514.384 111.111 447.012C106.033 436.122 103.734 424.343 103.966 412.006C104.38 390.044 97.066 368.663 83.667 351.266C78.1726 344.132 73.3225 336.341 69.2393 327.936C36.4977 260.541 65.6247 178.705 133.686 146.969C184.798 123.135 243.173 134.015 282.155 169.931C303.563 189.655 333.165 198.113 361.549 191.419C454.002 169.615 534.613 186.135 558.895 238.207Z" fill="url(#paint0_linear)"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="-537.001" y1="803.7" x2="605.999" y2="193.7" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0023" stop-color="#007FFF" stop-opacity="0.07"/>
                                    <stop offset="0.992" stop-color="#FFC599" stop-opacity="0.7"/>
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>
            </>
        );
    }
}

export default Jumbo;