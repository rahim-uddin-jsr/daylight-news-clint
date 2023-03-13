import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar, FaStreetView } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news
    return (
        <div className='mb-3 px-5'>
            <Card >
                <Card.Header className=" d-flex align-items-center justify-content-between" >
                    <div className='d-flex align-items-center'>
                        <Image roundedCircle style={{ height: '62px' }} src={author.img} ></Image >
                        <div className='ms-2' >
                            <p className='mb-0'>{author?.name}</p>
                            <p className='mb-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div className="">
                        <FaBookmark className='me-2' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    {
                        details.length > 250 ? <Card.Text>{details.slice(0, 250)} <Link to={`/news/${_id}`}>Read More</Link>
                        </Card.Text>
                            : <Card.Text>{details}</Card.Text>}
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className=" d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning me-2' />
                        <span>{rating?.number}</span></div>
                    <div className='d-flex align-items-center'>
                        <FaEye className='me-2' />
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default NewsSummeryCard;