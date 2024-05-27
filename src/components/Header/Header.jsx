import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="mx-3 px-10 py-2 flex justify-between items-center bg-gray rounded-full transition-colors border-grayWhite hover:border-purple border-2 mb-12">
      <div className="text-lg font-extrabold text-purpleWhite">Logo</div>
      <ul className="flex items-center gap-6 font-bold text-sm">
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
      <div className="flex text-sm font-bold gap-3 justify-center items-center">
        <Link
          className="text-white bg-purple rounded-full px-3 py-1.5"
          to="/sign-up"
        >
          Sign up
        </Link>
        <Link className=" text-purpleWhite" to="/log-in">
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Header;
