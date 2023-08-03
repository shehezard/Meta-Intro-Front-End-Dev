import React from 'react';

import promotion from '../assets/promotion.png';
import shakshuka from '../assets/shakshuka.jpeg';
import bakedcodlemongarlic from '../assets/bakedcodlemongarlic.jpeg';
import falafelbowls from '../assets/falafelbowls.jpeg';
import founders from '../assets/founders.jpeg';

const HomePage = () => {
    return (
        <>
            <section className="promotion">
                <img src={promotion} alt="Promotion: Get a free lemon with every order over $10!" />
            </section>
            <section className="info">
                <article className="card">
                    <img src={shakshuka} alt="Shakshuka" />
                    <div className="description">
                        <h4><b>Shakshuka</b></h4>
                        <p>A classic North African dish hailing from Tunisia, shakshuka is simple sunny side up eggs
                            braised in a chunky tomato sauce with bell peppers and onions.</p>
                    </div>
                </article>
                <article className="card">
                    <img src={bakedcodlemongarlic} alt="Green Goddess Chicken Thighs" />
                    <div className="description">
                        <h4><b>Baked Lemon Garlic Cod</b></h4>
                        <p>This baked fish recipe has been a fan favorite for a long time! It's ready in just over 15
                            minutes and it's all about the garlic and lemon sauce. Made in a skillet, the secret is in the
                            white fish fillet.</p>
                    </div>
                </article>
                <article className="card">
                    <img src={falafelbowls} alt="Falafel Bowls" />
                    <div className="description">
                        <h4><b>Falafel Bowls</b></h4>
                        <p>The perfect Mediterranean twist, made the traditional way. With your favorite hummus dip and a
                            salad. And to jazz it up even more, some pickles and olives too!</p>
                    </div>
                </article>
            </section>
            <section className="about" id="about">
                <img src={founders} alt="Little Lemon family members" />
                <div className="description">
                    <h2>About Us</h2>
                    <p>Little Lemon is not just a restaurant; it is a culinary destination that captures the essence of
                        Mediterranean cuisine with a contemporary touch. As a cherished family-owned establishment, we take
                        pride in our heritage and the authentic flavors we bring to every plate.</p>
                    <p>Situated in the vibrant heart of downtown Toronto, our restaurant has become a beloved fixture in the
                        community for over two decades. With each passing year, we have garnered a loyal following of food
                        enthusiasts who appreciate our commitment to quality, innovation, and exceptional service.</p>
                    <p>Little Lemon is more than just a restaurant; it's a celebration of the Mediterranean spirit and a
                        testament to the power of food to bring people together. Join us on a culinary journey that will
                        awaken your senses and leave you with lasting memories. We look forward to welcoming you to our
                        family and sharing the flavors of the Mediterranean with you</p>
                </div>
            </section>
            <section className="contact" id="contact">
                <div className="address">
                    <h2>Contact Us</h2>
                    <p>Little Lemon</p>
                    <p>123 Lemon Street</p>
                    <p>Toronto, ON M1M 1M1</p>
                    <p>416-123-4567</p>
                </div>
                <div className="hours">
                    <h2>Hours</h2>
                    <p>Monday - Friday: 11am - 10pm</p>
                    <p>Saturday - Sunday: 12pm - 10pm</p>
                </div>
            </section>
        </>
    );
};

export default HomePage;