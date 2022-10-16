import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../Contexts/Context';

const Header = () => {


    const   handleSignOut = () => {
          logout()

          .then(() => {})
          .catch(error => console.log(error))
        

    }
 
    const {user, logout} =useContext(AuthContext)

    console.log('context',user);
    return (
        <div>
                    <div className="navbar bg-primary text-neutral-content">
                    <Link className="btn btn-ghost normal-case text-xl" to='/'> Awesome Auth </Link>

                        <Link className="btn btn-ghost normal-case text-xl" to='/'> Home</Link>

                      <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>

                      <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                   

                      {user?.email && <span>Welcome  {user.email}</span>}

                      <button onClick={handleSignOut} className="btn btn-accent">Sign Out</button>

                     
            </div>
         
       


        </div>
    );
};

export default Header;