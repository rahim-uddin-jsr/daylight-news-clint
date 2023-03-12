import React, { useEffect, useState } from 'react';

const LeftSIdeNav = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <h2>{category[0]?.name}</h2>
        </div>
    );
};

export default LeftSIdeNav;