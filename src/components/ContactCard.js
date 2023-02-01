import React, { useState, useEffect } from 'react';
import Card from './Cards';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ContactCard = () => {

    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSeacrhText] = useState('');

    const fecthDataFromAPI =async () => {
       const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchText === '' ? 'husky' : searchText}&client_id=JHqEB7c-97RWsnUQWyOQIpF04Cr0KVJmHP5oN4n5xRs`)
        setCardData(response?.data?.results)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true);
        fecthDataFromAPI();
    }, [])

    const search = () =>{
        fecthDataFromAPI();
    }
    console.log(cardData);
    return (
        <>
            <div className='contact-card-searchbox'>
                <div className='heading'>
                    <h1>IMAGE ENGINE</h1>
                </div>
                <div className='searchbox'>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search Image"
                            aria-label="Search Image"
                            aria-describedby="search"
                            value={searchText}
                            onChange={(e) => setSeacrhText(e.target.value)}
                            />
                        <Button variant="outline-secondary" id="button-addon2" onClick={search}>
                            🔍
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className='contact-card-container'>
                {
                    cardData.map((data) => {
                        return <Card
                            key={data.id}
                            imageUrl={data.urls.thumb}
                            name={data.user.name}
                            phoneNumber="(212) 555-1234"
                            email={`${data.user.username}@xyz.abc`}
                        />
                    })
                }
            </div>
        </>
    )
}

export default ContactCard;