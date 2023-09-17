import React from 'react';

import { useStyleContext } from "../context/StyleContext";

import './MenuPage.css';

const MenuPage = () => {
    const {
        classSectionTitle,
        classHeroText,
        classHighlightText,
        classCardTitle,
    } = useStyleContext();

    return (
        <section className="menu" id="menu">
            <article className="description">
                <h1 className={classSectionTitle}>Menu</h1>
                <p className={classHeroText}>Our menu is inspired by the Mediterranean diet, and features a variety of dishes from the region.
                    We are proud to offer a wide selection of vegetarian and vegan options, as well as gluten-free
                    options.</p>
            </article>
            <article className="list">
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Shakshuka</h4>
                    <p className={`price ${classHighlightText}`}>$10</p>
                    <p className="ingredients">
                        Eggs, tomato sauce, bell peppers and onions
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Baked Lemon Garlic Cod</h4>
                    <p className={`price ${classHighlightText}`}>$15</p>
                    <p className="ingredients">
                        Cod, garlic, lemon, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Falafel Bowls</h4>
                    <p className={`price ${classHighlightText}`}>$12</p>
                    <p className="ingredients">
                        Falafel, hummus, salad, pickles, olives
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Green Chicken Thighs</h4>
                    <p className={`price ${classHighlightText}`}>$15</p>
                    <p className="ingredients">
                        Chicken thighs, garlic, lemon, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Greek Lamb Kleftiko</h4>
                    <p className={`price ${classHighlightText}`}>$20</p>
                    <p className="ingredients">
                        Lamb, garlic, lemon, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Lemon Chicken Soup</h4>
                    <p className={`price ${classHighlightText}`}>$10</p>
                    <p className="ingredients">
                        Chicken, turmeric, lemon, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Greek Roasted Branzino</h4>
                    <p className={`price ${classHighlightText}`}>$20</p>
                    <p className="ingredients">
                        Branzino, garlic, lemon, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Moroccan Chicken</h4>
                    <p className={`price ${classHighlightText}`}>$15</p>
                    <p className="ingredients">
                        Chicken, garlic, lemon, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Döner Kebab</h4>
                    <p className={`price ${classHighlightText}`}>$10</p>
                    <p className="ingredients">
                        Beef, garlic, lemon, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Cucumber Tomato Salad</h4>
                    <p className={`price ${classHighlightText}`}>$5</p>
                    <p className="ingredients">
                        Cucumber, tomato, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Tabouli</h4>
                    <p className={`price ${classHighlightText}`}>$5</p>
                    <p className="ingredients">
                        Parsley, tomato, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Burrata</h4>
                    <p className={`price ${classHighlightText}`}>$10</p>
                    <p className="ingredients">
                        Burrata, tomato, basil, prosciutto
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Whipped Feta Dip</h4>
                    <p className={`price ${classHighlightText}`}>$5</p>
                    <p className="ingredients">
                        Feta, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Orange Cardamom Cake</h4>
                    <p className={`price ${classHighlightText}`}>$5</p>
                    <p className="ingredients">
                        Orange, cardamom, olive oil
                    </p>
                </div>
                <div className="item">
                    <h4 className={`label ${classCardTitle}`}>Pizzicati</h4>
                    <p className={`price ${classHighlightText}`}>$5</p>
                    <p className="ingredients">
                        Almond, orange, olive oil
                    </p>
                </div>
            </article>
        </section>
    );
};

export default MenuPage;