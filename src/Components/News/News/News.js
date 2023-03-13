import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    return (
        <div>
            <h2>News {news.title}</h2>
        </div>
    );
};

export default News;