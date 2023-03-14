import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { title, category_id, details, image_url, author, total_view, rating } = news
    return (
        <div>
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
                        <Card.Text>{details}</Card.Text>}
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <Link className='text-end mb-2 me-2' to={`/category/${category_id}`}>
                    <Button>Show all from this category</Button>
                </Link>
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
        </div>
    );
};

export default News;