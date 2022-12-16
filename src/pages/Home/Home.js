import React from 'react';
import AddPost from '../AddPost/AddPost';
import AllPost from '../AllPost/AllPost';
import AddComment from '../Shared/AddComment/AddComment';


const Home = () => {
    return (
        <div>
            <AddPost></AddPost>
            <AllPost></AllPost>
        </div>

    );
};

export default Home;