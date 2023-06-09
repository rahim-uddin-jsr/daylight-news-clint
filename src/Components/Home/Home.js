import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>Daily News Home {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummeryCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default Home;