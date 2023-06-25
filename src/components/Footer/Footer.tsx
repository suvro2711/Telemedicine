import './Footer.css';
import LogoLink from '../common/LogoLink/LogoLink';

const Footer = () => {
    return (
        <section className="Footer">
            <div className='FooterTop'>
                <div>
                    <LogoLink />
                </div>
                <div className='List'>
                    <div>
                        <p>Telehealth</p>
                        <p>Online prescription refill</p>
                        <p>In-person doctor visit</p>
                    </div>
                    <div>
                        <p>ED consult</p>
                        <p>Mental health consult</p>
                    </div>
                    <div>
                        <p>UTI consult</p>
                        <p>Urgent care consult</p>
                    </div>
                </div>
            </div>
            <div className='FooterBottom'>
                <div>
                    <p>© 2023 Publix. All Rights Reserved.</p>
                </div>
                <div>
                    <p>Privacy Policy <span>|</span> Disclaimer <span>|</span> Terms of Service</p>
                </div>
            </div>
        </section>
    )
}
export default Footer