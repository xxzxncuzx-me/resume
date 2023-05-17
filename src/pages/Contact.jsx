import React from "react";
import texts from '../utils/texts.js'
import './Contact.scss'

export default () =>  {
    return <div className="contact">
        <h1>{texts.contacts.caption}</h1>
        <div className="contact__wrapper">
            <ul>
            {texts.contacts.list1.map(c => {
                return <li key={c.url}>
                    <a href={c.url} target="_blank">
                        <img src={c.img} />
                        <p>{c.caption}</p>
                    </a>
                </li>
            })}
            </ul>
            <ul>
            {texts.contacts.list2.map(c => {
                return <li key={c.url}>
                    <a href={c.url} target="_blank">
                        <img src={c.img} />
                        <p>{c.caption}</p>
                    </a>
                </li>
            })}
            </ul>
        </div>
    </div>
}