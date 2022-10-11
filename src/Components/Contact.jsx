import React from 'react';
import classes from "../Styles/contact.module.css";
import contactImg from '../media/contact-image.jpg';
import { HashLink as Link } from "react-router-hash-link";
import {SiLinkedin} from "react-icons/si";
import {AiOutlineGithub} from "react-icons/ai";
import Navbar from "./Navbar";

function Contact() {
    return (
       <div>
         <Navbar/>
        <section className={classes.section}>
            
            <div className={classes.section__contact}> 
                <div className={classes.section__contact__img}>
                    <img src={contactImg}alt=""/>
                </div>               
                <div className={classes.section__contact__info}>
                <h1 className={classes.section__contact__info__title}>hello</h1>
                <p className={classes.section__contact__info__details}>
                        my name is Vongai Olivia Machingura <br/>
                        and I am currently spening most of my time <br/>
                        coding<br/>
                    
                        you can reach me on: <br/>
                        tel: <Link to="tel:+27659559772">+27 81 419 3222</Link> <br/>
                        email: <Link to="mailto:machinguravongai@gmail.com">machinguravongai@gmail.com</Link>
                    </p>

                    <div className={classes.section__contact__info__socials}>
                        <p className={classes.section__contact__info__details}>share:</p>
                        <Link className={classes.section__contact__info__icons} to="https://www.linkedin.com/in/vongai-olivia-machingura-aa2293100/"><SiLinkedin/></Link>
                        <Link className={classes.section__contact__info__icons} to="https://github.com/livvyvi3"><AiOutlineGithub/></Link>
                    </div>
                </div>
                </div>
        </section>
       </div>
    );
};

export default Contact

