import React from 'react';
import { Link } from 'react-router-dom';

import { useBookingFormContext } from "../context/BookingFormContext";
import { useStyleContext } from "../context/StyleContext";

import placeholder from '../assets/placeholder.png';

import "./HomePage.css";

const HomePage = () => {
    const { toggleBookingForm } = useBookingFormContext();
    const {
        classSectionTitle,
        classLeadText,
        classHighlightText,
        classSectionCategories,
        classCardTitle,
        classParagraphText
    } = useStyleContext();

    return (
        <section>
            <section className="hero">
                <div className="description">
                    <h1 className={classSectionTitle}>Little Lemon</h1>
                    <p className={classSectionCategories}>Chicago</p>
                    <p className={classParagraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button onClick={toggleBookingForm}>Reserve a table</button>
                </div>
                <img src={placeholder} alt="Restaurant" />
            </section>

            <section className="higlights">
                <h1 className={classSectionTitle}>Specials</h1>
                <Link to="/menu"><button>Online Menu</button></Link>
                <div className="cards">
                    <article className="card">
                        <img src={placeholder} alt="Shakshuka" />
                        <div className="description">
                            <h3 className={classCardTitle}>Shakshuka</h3>
                            <p className={`price ${classSectionCategories}`}>$12.99</p>
                            <p className={classLeadText}>A classic North African dish hailing from Tunisia, shakshuka is simple sunny side up eggs
                                braised in a chunky tomato sauce with bell peppers and onions.</p>
                        </div>
                        <a href="#" className={classSectionCategories}>Order a delivery</a>
                    </article>
                    <article className="card">
                        <img src={placeholder} alt="Green Goddess Chicken Thighs" />
                        <div className="description">
                            <h3 className={classCardTitle}>Lemon Garlic Cod</h3>
                            <p className={`price ${classSectionCategories}`}>$12.99</p>
                            <p className={classLeadText}>This baked fish recipe has been a fan favorite for a long time! It's ready in just over 15
                                minutes and it's all about the garlic and lemon sauce. Made in a skillet, the secret is in the
                                white fish fillet.</p>
                        </div>
                        <a href="#" className={classSectionCategories}>Order a delivery</a>
                    </article>
                    <article className="card">
                        <img src={placeholder} alt="Falafel Bowls" />
                        <div className="description">
                            <h3 className={classCardTitle}>Falafel Bowls</h3>
                            <p className={`price ${classSectionCategories}`}>$12.99</p>
                            <p className={classLeadText}>The perfect Mediterranean twist, made the traditional way. With your favorite hummus dip and a
                                salad. And to jazz it up even more, some pickles and olives too!</p>
                        </div>
                        <a href="#" className={classSectionCategories}>Order a delivery</a>
                    </article>
                </div>
            </section>
            <section className="testimonials">
                <h1 className={classSectionTitle}>Testimonials</h1>
                <div className="cards">
                    <article className="card">
                        <p className="rating">5 Stars</p>
                        <div className="user">
                            <img src={placeholder} />
                            <p>John Wick</p>
                        </div>
                        <p className="review">"Lorem ipsum dolor sit amet."</p>
                    </article>
                    <article className="card">
                        <p className="rating">5 Stars</p>
                        <div className="user">
                            <img src={placeholder} />
                            <p>John Wick</p>
                        </div>
                        <p className="review">"Lorem ipsum dolor sit amet."</p>
                    </article>
                    <article className="card">
                        <p className="rating">5 Stars</p>
                        <div className="user">
                            <img src={placeholder} />
                            <p>John Wick</p>
                        </div>
                        <p className="review">"Lorem ipsum dolor sit amet."</p>
                    </article>
                    <article className="card">
                        <p className="rating">5 Stars</p>
                        <div className="user">
                            <img src={placeholder} />
                            <p>John Wick</p>
                        </div>
                        <p className="review">"Lorem ipsum dolor sit amet."</p>
                    </article>
                </div>
            </section>
            <section className="about" id="about">
                <div className="description">
                    <h2 className={classSectionTitle}>Little Lemon</h2>
                    <p>Chicago</p>
                    <p>Little Lemon is not just a restaurant; it is a culinary destination that captures the essence of
                        Mediterranean cuisine with a contemporary touch. As a cherished family-owned establishment, we take
                        pride in our heritage and the authentic flavors we bring to every plate.</p>
                </div>
                <img src={placeholder} />
            </section>
        </section>
    );
};

export default HomePage;