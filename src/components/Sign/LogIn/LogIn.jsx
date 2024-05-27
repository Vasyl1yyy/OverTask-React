import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className="px-8 py-6 bg-gray rounded-3xl min-w-60 w-80">
      <h2 className="text-xl text-purpleWhite font-extrabold text-center mb-5">
        Log in
      </h2>
      <div className="mb-3">
        <p className="text-xs opacity-50 ml-3">Username</p>
        <input
          type="text"
          className="rounded-full text-sm bg-main py-2 px-3 w-full"
        />
      </div>
      <div className="mb-5">
        <p className="text-xs opacity-50 ml-3">Password</p>
        <input
          type="password"
          className="rounded-full text-sm bg-main py-2 px-3 w-full"
        />
      </div>
      <button className="text-sm font-bold bg-purple text-center rounded-full w-full py-2 mb-3">
        Log in
      </button>
      <div className="flex justify-center items-center opacity-50 transition delay-200 hover:opacity-100">
        <p className="text-xs mr-1">Do not have account?</p>
        <Link to="/sign-up" className="text-sm text-purpleWhite">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
