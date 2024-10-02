import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
                <p>Copyright © {date} - All right reserved by <span className='text-secondary'>Mozammel Hosen</span></p>
            </div>
        </footer>
    );
};

export default Footer;