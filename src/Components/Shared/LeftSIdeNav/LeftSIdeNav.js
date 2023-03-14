import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const LeftSIdeNav = () => {
    const [categories, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
            .catch(error => {
                toast.error(error.message)
            })
    }, [])
    return (
        <div >
            <h5> All Categories {categories?.length}</h5>
            <div>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSIdeNav;