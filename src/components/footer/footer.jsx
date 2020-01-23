import React from 'react';
import './footer.css';

class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
            icon : [
               
                    {
                        id :1,
                        logo : <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.25 6.875V4.375C6.25 3.685 6.81 3.125 7.5 3.125H8.75V0H6.25C4.17875 0 2.5 1.67875 2.5 3.75V6.875H0V10H2.5V20H6.25V10H8.75L10 6.875H6.25Z" fill="#90A4AE"/>
                            </svg>,
                        nama : "facebook"
                    },
                    {
                        id : 2,
                        logo : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z" fill="#90A4AE"/>
                            <path d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z" fill="#90A4AE"/>
                            <path d="M15.375 5.29124C15.7429 5.29124 16.0412 4.99295 16.0412 4.62499C16.0412 4.25703 15.7429 3.95874 15.375 3.95874C15.007 3.95874 14.7087 4.25703 14.7087 4.62499C14.7087 4.99295 15.007 5.29124 15.375 5.29124Z" fill="#90A4AE"/>
                            </svg>,
                        nama : "instagram"
                    },
                    {
                        id :3,
                        logo :<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5879 2.19117C19.3575 1.33435 18.6819 0.658937 17.8252 0.428223C16.2602 0 9.99977 0 9.99977 0C9.99977 0 3.73963 0 2.17456 0.411988C1.33435 0.642457 0.642335 1.33448 0.411866 2.19117C0 3.75611 0 7.0016 0 7.0016C0 7.0016 0 10.2634 0.411866 11.812C0.642579 12.6687 1.31787 13.3441 2.17469 13.5749C3.75611 14.0032 10 14.0032 10 14.0032C10 14.0032 16.2602 14.0032 17.8252 13.5912C18.682 13.3606 19.3575 12.6852 19.5882 11.8285C19.9999 10.2634 19.9999 7.01808 19.9999 7.01808C19.9999 7.01808 20.0164 3.75611 19.5879 2.19117ZM8.00661 9.9999V4.0033L13.2124 7.0016L8.00661 9.9999Z" fill="#90A4AE"/>
                            </svg>,
                        nama : "youtube"
                    }
                
                ]
        };
    }
    render () {
        const icon = this.state.icon;
        return(
            
            <div className="container">
                <div className="footer-item">
                    <div className="footer-left">
                    
                        <img src="https://cekstok.com/static/images/Logo.png" alt="cekstok"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum ante sapien, sit amet accumsan leo dictum at. Morbi a quam maximus, efficitur massa non, litricies mauris. Mauris litricies facilisis feugiat. Duis porta lacus feugiat justo mattis, a feugiat urna tempor. Phasellus ut aliquet risus. Mauris id varius mi.</p>
                        <div className="icon">
                            {icon.map(data => (
                                <div key={data.id}>{data.logo}</div>
                            ))}
                        </div>
                    </div>
                    <div className="footer-midle">
                        <h4>FAQs</h4>
                        <div className="faqs">
                            <ul>
                                <li>
                                    <a href="!">Lorem ipsum dolor sit amet?</a>
                                </li>
                                <li>
                                    <a href="!">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</a>
                                </li>
                                <li>
                                    <a href="!">Lorem ipsum?</a>
                                </li>
                                <li>
                                    <a href="!">Lorem ipsum dolor sit amet, consectetur?</a>
                                </li>
                                <li>
                                    <a href="!">Lorem ipsum dolor?</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right">
                    <h4>Blog Post</h4>
                        <div className="blog-post">
                            <ul>
                                <li>
                                    <a href="!">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                </li>
                                <li>
                                    <a href="!">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                </li>
                                <li>
                                    <a href="!">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                </li>
                                <li>
                                    <a href="!">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                </li>
                                <li>
                                    <a href="!">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-line"></hr>
                <p className="copy">copyright 2020 Cekstok</p>
            </div>
        );
    }
}

export default Footer;