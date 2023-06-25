import React from 'react';
import  './ConnectWith.css';

const ConnectWith = () => {
    return (
        <section className="ConnectWith">
            <h2 className="title">Connect With the Type of Provider You Need</h2>
            <div className='ConnectWithDiv'>
                <div className='Cards'>
                    <div className='CardItem'>
                        <img src={'/diseaseIconGreen/layer-14.svg'} alt="Card1"/>
                        <p className='head'>Urgent Care</p>
                        <p className='content'>Treatment for allergies, ear infections, UTIs, sinus infections and more.</p>
                        <p className='footer'>Starting at $19</p>
                        <button>Book now</button>
                    </div>
                    <div className='CardItem'>
                        <img src={'/diseaseIconGreen/group-181.svg'} alt="Card3"/>
                        <p className='head'>Dermatology</p>
                        <p className='content'>Assess and treat rashes, acne, early signs of aging, suspicious moles and more.</p>
                        <p className='footer'>Starting at $34</p>
                        <button>Book now</button>
                    </div>
                    <div className='CardItem'>
                        <img src={'/diseaseIconGreen/group-232.svg'} alt="Card3"/>
                        <p className='head'>Women’s Health</p>
                        <p className='content'>Get help for common women’s health concerns, including UTIs, yeast infections, birth control refills, IUD consults and STI screening.</p>
                        <p className='footer'>Starting at $50</p>
                        <button>Book now</button>
                    </div>
                    <div className='CardItem'>
                        <img src={'/diseaseIconGreen/group-234.svg'} alt="Card4"/>
                        <p className='head'>Men’s Health</p>
                        <p className='content'>Talk to a doctor about erectile dysfunction, hair loss, STI screening, nutritional counseling and other common men’s health concerns.</p>
                        <p className='footer'>Starting at $50</p>
                        <button>Book now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConnectWith