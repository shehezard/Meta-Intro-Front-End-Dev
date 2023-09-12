import React from 'react';
import { Link } from 'react-router-dom';

import { useBookingFormContext } from "../context/BookingFormContext";
import { useStyleContext } from "../context/StyleContext";

import placeholder from '../assets/placeholder.png';
import chefplate from '../assets/images/restauranfood.jpg';
import shakshuka from '../assets/images/shakshuka.jpeg';
import greengoddess from '../assets/images/greengoddess.jpeg';
import falafel from '../assets/images/falafelbowls.jpeg';

import courier from '../assets/images/delivery-courier.png';

import johnwick from '../assets/images/john-wick.jpg'
import simoncowell from '../assets/images/simon-cowell.jpg'
import iandooley from '../assets/images/ian-dooley.jpg'
import mahatmagandhi from '../assets/images/mahatma-gandhi.jpg'

import founders from '../assets/images/founders.jpg'

import "./HomePage.css";

const HomePage = () => {
    const { toggleBookingForm } = useBookingFormContext();
    const {
        classSectionTitle,
        classLeadText,
        classHeroText,
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
                    <p className={classHeroText}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <button onClick={toggleBookingForm}>Reserve a Table</button>
                <img src={chefplate} alt="Restaurant" />
            </section>

            <section className="higlights">
                <h1 className={classSectionTitle}>This weeks specials!</h1>
                <Link to="/menu"><button>Online Menu</button></Link>
                <div className="cards">
                    <article className="card">
                        <img src={shakshuka} alt="Shakshuka" />
                        <div className="description">
                            <h3 className={classCardTitle}>Shakshuka</h3>
                            <p className={`price ${classHighlightText}`}>$12.99</p>
                            <p className={classLeadText}>A classic North African dish hailing from Tunisia, shakshuka is simple sunny side up eggs
                                braised in a chunky tomato sauce with bell peppers and onions.</p>
                        </div>
                        <a href="#" className={classSectionCategories}>Order a delivery <img src={courier} alt="Delivery courier" /></a>
                    </article>
                    <article className="card">
                        <img src={greengoddess} alt="Green Goddess Chicken Thighs" />
                        <div className="description">
                            <h3 className={classCardTitle}>Lemon Garlic Cod</h3>
                            <p className={`price ${classHighlightText}`}>$5.99</p>
                            <p className={classLeadText}>This baked fish recipe has been a fan favorite for a long time! It's ready in just over 15
                                minutes and it's all about the garlic and lemon sauce. Made in a skillet, the secret is in the
                                white fish fillet.</p>
                        </div>
                        <a href="#" className={classSectionCategories}>Order a delivery <img src={courier} alt="Delivery courier" /></a>
                    </article>
                    <article className="card">
                        <img src={falafel} alt="Falafel Bowls" />
                        <div className="description">
                            <h3 className={classCardTitle}>Falafel Bowls</h3>
                            <p className={`price ${classHighlightText}`}>$5.00</p>
                            <p className={classLeadText}>The perfect Mediterranean twist, made the traditional way. With your favorite hummus dip and a
                                salad. And to jazz it up even more, some pickles and olives too!</p>
                        </div>
                        <a href="#" className={classSectionCategories}>Order a delivery <img src={courier} alt="Delivery courier" /></a>
                    </article>
                </div>
            </section>
            <section className="testimonials">
                <h1 className={classSectionTitle}>Testimonials</h1>
                <div className="cards">
                    <article className="card">
                        <p className={`rating ${classHighlightText}`}>5 Stars</p>
                        <div className="user">
                            <img src={johnwick} />
                            <p className={classHighlightText}>John Wick</p>
                        </div>
                        <p className="review">"Yeah."</p>
                    </article>
                    <article className="card">
                        <p className={`rating ${classHighlightText}`}>2 Stars</p>
                        <div className="user">
                            <img src={simoncowell} />
                            <p className={classHighlightText}>Simon Cowell</p>
                        </div>
                        <p className="review">"There was no live music. I cannot eat without live music!"</p>
                    </article>
                    <article className="card">
                        <p className={`rating ${classHighlightText}`}>5 Stars</p>
                        <div className="user">
                            <img src={iandooley} />
                            <p className={classHighlightText}>Ian Dooley</p>
                        </div>
                        <p className="review">"I just went for lunch and walked in on John Wick and Simon Cowell. Amazing experience."</p>
                    </article>
                    <article className="card">
                        <p className={`rating ${classHighlightText}`}>1 Star</p>
                        <div className="user">
                            <img src={mahatmagandhi} />
                            <p className={classHighlightText}>Gandhi</p>
                        </div>
                        <p className="review">"Who are these fools in the restaurant. All I wanted was some aloo paratha!"</p>
                    </article>
                </div>
            </section>
            <section className="about" id="about">
                <div className="description">
                    <h2 className={classSectionTitle}>Little Lemon</h2>
                    <p className={classSectionCategories}>Chicago</p>
                    <p className={classLeadText}>Mario and Adrian, childhood friends with a shared passion for food, founded Little Lemon Restaurant.
                        Mario's heritage-inspired recipes merge seamlessly with Adrian's global culinary expertise. Together,
                        they craft unforgettable dishes that blend tradition and innovation, creating an extraordinary dining experience for all.</p>
                </div>
                <img src={founders} />

            </section>
        </section>
    );
};

export default HomePage;