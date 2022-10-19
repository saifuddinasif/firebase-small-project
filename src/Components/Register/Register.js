import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';

const Register = () => {


  const {createUser, SignInWithGoogle} =useContext(AuthContext)

  console.log('first', createUser)
    const handleSubmit  =   (e) => {

        e.preventDefault();
    
        const form = e.target;
    
       const email =form.email.value;

       const name =form.name.value;
    
       const password = form.password.value;
    
 
    
      createUser(email,password)
      .then(result => {

        const user = result.user;
        form.reset();

  
      })
      .catch((error => {
        console.error(error);
      }))
    
    }

    const handleGoogleSignIn  = ()=> {
       
      SignInWithGoogle()
      .then((result) => {

        const user = result.user;


      } )
      .catch(error =>console.error(error))

    }
    
        return (
            <div>
           <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register  now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">

          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name"  name ="name" placeholder="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email"      name ="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"  name="password" placeholder="password" className="input input-bordered"  required />
              <label className="label">
                <Link to='/login' className="label-text-alt link link-hover text-2xl text-green-500">Already Have A Account </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>

              <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
            </div>
        );
};

export default Register;