import './OurPatientsLoveUs.css';
// import Star from '/star-11.svg';
// import img1 from '../../Assests/OurPatientsLoveUs/img1.svg';
// import img2 from '../../Assests/OurPatientsLoveUs/img2.svg';
// import img3 from '../../Assests/OurPatientsLoveUs/img3.svg';

const OurPatientsLoveUs = () => {
    return (
        <section className="OurPatientsLoveUs">
            <h2 className="title">Our Patients Love Us</h2>
            <div className='carouselDiv'>
                <div className='carouselItems'>
                    <div className='c_item'>
                        <p className='head'><img className='star' src={'/star-11.svg'} alt="Star" />5.0</p>
                        <p className='body'>"I had a UTI consult through this platform, and I couldn't be happier with the experience. The doctor was very knowledgeable and took the time to address my concerns."</p>
                        <p className='footer'><img className='user' src={'/ellipse-126@2x.png'} alt="user1" />Jenna R.</p>
                    </div>
                    <div className='c_item'>
                        <p className='head'><img className='star' src={'/star-11.svg'} alt="Star" />5.0</p>
                        <p className='body'>“As someone without insurance, knowing the upfront cost made it possible for me to afford my doctor's appointment. I didn't have to worry about receiving a massive bill later on."</p>
                        <p className='footer'><img className='user' src={'/ellipse-127@2x.png'} alt="user2" />Alex F.</p>
                    </div>
                    <div className='c_item'>
                        <p className='head'><img className='star' src={'/star-11.svg'} alt="Star" />5.0</p>
                        <p className='body'>“My experience with this platform exceeded all expectations. I found the perfect doctor for my needs, booked an appointment within minutes, and received exceptional care."</p>
                        <p className='footer'><img className='user' src={'/ellipse-128@2x.png'} alt="user3" />Michelle W.</p>
                    </div>
                </div>
                <div className='scroll'>
                    <div className='scrollItem'></div>
                    <div className='scrollItem'></div>
                    <div className='scrollItem'></div>
                    <div className='scrollItem'></div>
                    <div className='scrollItem'></div>
                    <div className='scrollItem vh'> a</div>
                </div>
            </div>
        </section>
    )
}

export default OurPatientsLoveUs