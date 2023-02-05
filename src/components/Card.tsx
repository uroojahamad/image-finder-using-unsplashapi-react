import React from 'react';
import '../css/contactcard.css';

type CardProps = {
    imageUrl: string
    name: string
    phoneNumber: string
    email: string
}

const Card = ({imageUrl, name, phoneNumber, email}: CardProps): JSX.Element => {
    return (
        <div className="contact-card">
            <img src={imageUrl} alt={name}/>
            <h2>{name}</h2>
            <div className="info-group">
                <img src={require("../images/phone-icon.png")} alt="phone-icon"/>
                <p>{phoneNumber}</p>
            </div>
            <div className="info-group">
                <img src={require("../images/mail-icon.png")} alt="mail-icon" />
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;