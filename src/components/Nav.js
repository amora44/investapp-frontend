import { Link, useLocation } from 'react-router-dom';
import { loginWithGoogle, logout } from '../firebase';
import '../Css/nav.css';

const Nav = (props) => {
  const location = useLocation();

  return (
    <nav className='nav'>
      <ul>
        {props.user ? (
          <>
            <Link id='home' to="/stocks">
              <button>Home</button>
            </Link>
          <Link id='myinvestment' to={"/userStocks/" + props.user.uid}>
          <button>My Investments</button>
            </Link>
            {(!props.user.photoURL) &&
            <li id='welcome'>Welcome, {props.user.displayName}</li>
            }
            {(props.user.photoURL) &&
            <>
            <li id='welcome'>Welcome, {props.user.displayName.split(' ', 1)}</li>
              <li>
              <img src={props.user.photoURL} alt={props.user.displayName} />
            </li>
            </>
            }
            <li>
              <Link to='/'>
                <button onClick={logout}>Logout</button>
              </Link>
            </li>
          </>
        ) : (
          <>
            {(() => {
              if (location.pathname !== '/signin' && location.pathname !== '/signup') {
                return (
                  <>
                    <ul>
                    <Link to='/signin'>
                      <button>Sign in</button>
                    </Link>
                    <Link to='/signup'>
                      <button>Sign up</button>
                    </Link>
                    <Link to='/stocks'>
                      <button onClick={loginWithGoogle}>Login with Google</button>
                    </Link>
                      </ul>
                  </>
                );
              }
            })()}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
