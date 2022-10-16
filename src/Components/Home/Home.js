import React, {useContext} from 'react';
import   { AuthContext } from '../Contexts/Context';

const Home = () => {

    const {user} = useContext(AuthContext)
    
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;