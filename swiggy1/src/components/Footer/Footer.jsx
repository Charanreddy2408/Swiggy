import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
        <div className="Footer">
            <div className="applink">
                <h1>For better experience, download the Swiggy app now</h1>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Get it on Google Play" />
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="Download on the App Store" />
                </div>
            </div>
            <div className="footerlink">
                <div className="rights">
                    <div className="swiggy">
                        <img src="https://imgs.search.brave.com/UW_MAEHggRei_6UZq1wcSjCLkXUEklEa9Cj1wXYOGZo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vcHBv/c2l0ZWhxLmNvbS9z/dGF0aWMvZjExYTk0/MDNiYTYzYTU3NjZj/MGQzZmNlOTc1MGFj/YTQvOGQyODcvMV9s/b2dvX3N3aWdneV9k/MzI5NTAxMDMzLnBu/Zw" alt="Swiggy Logo" />
                        <h1>Swiggy</h1>
                    </div>
                    <div className="copyrights">
                        <p>© 2024 Bundl Technologies Pvt. Ltd</p>
                    </div>
                </div>
                <div className="company">
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Team</p>
                    <p>Swiggy One</p>
                    <p>Swiggy Instamart</p>
                    <p>Swiggy Genie</p>
                </div>
                <div className="contactus">
                    <h2>Contact us</h2>
                    <p>Help & Support</p>
                    <p>Partner with us</p>
                    <p>Ride with us</p>
                </div>
                <div className="legal">
                    <h2>Legal</h2>
                    <p>Terms & Conditions</p>
                    <p>Cookie Policy</p>
                    <p>Privacy Policy</p>
                    <p>Investor Relations</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
