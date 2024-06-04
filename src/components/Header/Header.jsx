import { Link, NavLink } from 'react-router-dom';
import { sign } from '../../store/store';

const SignNull = () => {
  return (
    <>
      <Link
        className="text-white bg-purple rounded-full px-3 py-1.5"
        to="/sign-up"
      >
        Sign up
      </Link>
      <Link className=" text-purpleWhite" to="/log-in">
        Log in
      </Link>
    </>
  );
};

const SignUser = ({ user }) => {
  return <p>{user}</p>;
};

function Header() {
  const account = sign((state) => state.account);

  const accountUser = (a) => {
    if (a !== null) {
      return <SignUser user={a.username} />;
    } else {
      return <SignNull />;
    }
  };
  return (
    <div className="px-10 py-2 grid grid-cols-5 bg-gray rounded-full transition-colors border-grayWhite hover:border-purple border-2 mb-12">
      <div className="text-lg font-extrabold text-purpleWhite">Logo</div>
      <ul className="flex items-center mx-auto gap-6 font-bold text-sm col-span-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/task">Task</NavLink>
        </li>
        <li>
          <NavLink to="/habit">Habit</NavLink>
        </li>
        <li>
          <NavLink to="/stats">Stats</NavLink>
        </li>
      </ul>
      <div className="flex text-sm font-bold gap-3 justify-end items-center">
        {accountUser(account)}
      </div>
    </div>
  );
}

export default Header;
