import React from "react";
import Gmail from '../icons/gmail.svg'; 
import Phone from '../icons/phone-solid.svg'
import Git from '../icons/github.svg'
import LinkedIn from '../icons/linkedin-in.svg'
import Telegram from '../icons/telegram.svg'
import WhatsApp from '../icons/whatsapp.svg'
import Instagram from '../icons/instagram.svg'
import Facebook from '../icons/facebook.svg'
import '../styles/Contact.scss'

export default () =>  {
    return <div className="contact">
        <h1>Contact Me!</h1>
        <div className="contact__wrapper">
            <ul>
                <li><a href="mailto:i.fedorova4321@gmail.com"><img src={Gmail} alt="gmail icon" /><p>i.fedorova4321@gmail.com</p></a></li>
                <li><a href="tel:+380995691633"><img src={Phone} alt="phone icon" /><p>+380 99 569 16 33</p></a></li>
                <li><a href="https://github.com/xxzxncuzx-me" target="_blank"><img src={Git} alt="github icon" /><p>xxzxncuzx_me</p></a></li>
                <li><a href="https://www.linkedin.com/in/iryna-fedorova-075978272" target="_blank"><img src={LinkedIn} alt="linkedin icon" /><p>xxzxncuzx_me</p></a></li>
            </ul>
            <ul>
                <li><a href="https://t.me/xxzxncuzx_me" target="_blank"><img src={Telegram} alt="telegram icon" /><p>xxzxncuzx_me</p></a></li>
                <li><a href="" target="_blank"><img src={WhatsApp} alt="whatsapp icon" /><p>xxzxncuzx_me</p></a></li>
                <li><a href="https://www.instagram.com/xxzxncuzx_me/" target="_blank"><img src={Instagram} alt="instagram icon" /><p>xxzxncuzx_me</p></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100042738470027" target="_blank"><img src={Facebook} alt="facebook icon" /><p>xxzxncuzx_me</p></a></li>
            </ul>
        </div>
    </div>
}