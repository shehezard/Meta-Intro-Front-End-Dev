import React from 'react';

import './MenuPage.css';

const MenuPage = () => {
    return (
        <>
            <section className="menu" id="menu">
                <article className="description">
                    <h2>Menu</h2>
                    <p>Our menu is inspired by the Mediterranean diet, and features a variety of dishes from the region.
                        We are proud to offer a wide selection of vegetarian and vegan options, as well as gluten-free
                        options.</p>
                </article>
                <article className="list">
                    <div className="item">
                        <h4 className="label">Shakshuka</h4>
                        <b>$10</b>
                        <p className="ingredients">
                            Eggs, tomato sauce, bell peppers and onions
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Baked Lemon Garlic Cod</h4>
                        <b>$15</b>
                        <p className="ingredients">
                            Cod, garlic, lemon, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Falafel Bowls</h4>
                        <b>$12</b>
                        <p className="ingredients">
                            Falafel, hummus, salad, pickles, olives
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Green Goddess Chicken Thighs</h4>
                        <b>$15</b>
                        <p className="ingredients">
                            Chicken thighs, garlic, lemon, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Greek Lamb Kleftiko</h4>
                        <b>$20</b>
                        <p className="ingredients">
                            Lamb, garlic, lemon, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Turmeric Lemon Chicken Soup</h4>
                        <b>$10</b>
                        <p className="ingredients">
                            Chicken, turmeric, lemon, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Greek-Style Roasted Branzino</h4>
                        <b>$20</b>
                        <p className="ingredients">
                            Branzino, garlic, lemon, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Moroccan Chicken</h4>
                        <b>$15</b>
                        <p className="ingredients">
                            Chicken, garlic, lemon, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Döner Kebab</h4>
                        <b>$10</b>
                        <p className="ingredients">
                            Beef, garlic, lemon, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Mediterranean Cucumber and Tomato Salad</h4>
                        <b>$5</b>
                        <p className="ingredients">
                            Cucumber, tomato, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Tabouli</h4>
                        <b>$5</b>
                        <p className="ingredients">
                            Parsley, tomato, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Burrata with Tomato, Basil and Prosciutto</h4>
                        <b>$10</b>
                        <p className="ingredients">
                            Burrata, tomato, basil, prosciutto
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Whipped Feta Dip</h4>
                        <b>$5</b>
                        <p className="ingredients">
                            Feta, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Orange Cardamom Olive Oil Cake</h4>
                        <b>$5</b>
                        <p className="ingredients">
                            Orange, cardamom, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Pizzicati</h4>
                        <b>$5</b>
                        <p className="ingredients">
                            Almond, orange, olive oil
                        </p>
                    </div>
                    <div className="item">
                        <h4 className="label">Baklava</h4>
                        <b>$5</b>
                        <p className="ingredients">
                            Phyllo, pistachio, honey
                        </p>
                    </div>
                </article>
            </section>
        </>
    );
};

export default MenuPage;