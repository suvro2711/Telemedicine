import './PublixVsOthers.css';
const PublixVsOthers = () => {
    return (
        <section className="PublixVsOthers">
            <div className="PublixVsOthersLeft">
                <h2 className="title1">Publix vs. Others</h2>
                <p className="subtitle">
                    Don’t wait weeks for an appointment. Our doctors, therapists, and specialists can help you with the flu, infections, anxiety, stress, skin conditions, and provide advice on serious medical conditions. No matter what you're facing, we’re available from wherever you are by phone, video, or app.
                </p>
            </div>
            <div className="PublixVsOthersRight">
                <div className='boxleft'>
                    <div className='box1'>
                        <div className='content'>
                            <div className='contentHead'>
                                <p>Publix</p>
                            </div>
                            <div className='contentBody'>
                                <p className='h15'>Visit Fee</p>
                                <p className='h15'>Rating</p>
                                <p className='h30'>Type of Consultation</p>
                                <p className='h15'>Weekends & Nights</p>
                                <p className='h15'>Refundable?</p>
                                <p className='h15'>MD Cost</p>
                            </div>
                        </div>
                    </div>
                    <div className='box2 mr20'>
                        <div className='content'>
                            <div className='contentHead'>
                                <p>Publix</p>
                            </div>
                            <div className='contentBody'>
                                <p className='bold h15'>$40</p>
                                <p className='bold h15'>
                                    <img className='star' src={'/star-11.svg'} alt="Star" />4.9
                                </p>
                                <p className='h30'>Online form submission, <br />takes mins</p>
                                <p className='h15'>Open</p>
                                <p className='h15'><img className='icons' src={'/vector-5727.svg'} alt="Vector" /></p>
                                <p className='h15'>Up to 87% discount</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='boxright'>
                    <div className='box3'>
                        <div className='content'>
                            <div className='contentHead'>
                                <p>Others</p>
                            </div>
                            <div className='contentBody'>
                                <p className='bold h15'>$80 - $250</p>
                                <p className='bold h15'>
                                    <img className='star' src={'/star-11.svg'} alt="Star" />3.5
                                </p>
                                <p className='h30'>Appointment needed, <br /> takes hours</p>
                                <p className='h15'>Unreliable</p>
                                <p className='h15'><img className='icons' src={'/vector-5727.svg'} alt="Vector1" /></p>
                                <p className='h15'>Full Price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PublixVsOthers