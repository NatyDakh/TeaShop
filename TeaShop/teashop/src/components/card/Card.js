import React from "react";
import rect from "../../image/Rectangle.svg";
import './style.css'


// eslint-disable-next-line no-undef
    class Card extends React.Component {
        constructor() {
            super();

            this.state = {  }

            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState({bgColor: '#A4B07E',  color: '#FFFAF4'});
        }

        render() {
            let styles = {};
            if (this.state.bgColor) {
                styles.backgroundColor = this.state.bgColor;
                styles.color = this.state.color;
            }
            return (
                <div className="card">
                    <img src={rect} alt=""/>
                    <p className="name">1</p>
                    <p className="cost">234</p>
                    <a href="#" className="look">Cмотреть</a>
                    <a className = "little_bottom" style ={styles} onClick={ this.handleClick}>Корзина</a>
                </div>
            );
        }
    }

export default  Card;