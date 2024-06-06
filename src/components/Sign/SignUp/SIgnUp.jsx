import { Link, useNavigate } from 'react-router-dom';
import { sign } from '../../../store/store';
import { useState } from 'react';

function SignUp() {
  const addUsers = sign((state) => state.addUsers);

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="mt-20 px-8 py-6 bg-gray rounded-3xl min-w-60 w-80">
        <h2 className="text-xl text-purpleWhite font-extrabold text-center mb-5">
          Sign up
        </h2>
        <div className="mb-3">
          <p className="text-xs opacity-50 ml-3">Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-full text-sm bg-main py-2 px-3 w-full"
          />
        </div>
        <div className="mb-3">
          <p className="text-xs opacity-50 ml-3">Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full text-sm bg-main py-2 px-3 w-full"
          />
        </div>
        <div className="mb-5">
          <p className="text-xs opacity-50 ml-3">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full text-sm bg-main py-2 px-3 w-full"
          />
        </div>
        <button
          onClick={() => {
            addUsers(username, email, password);
            navigate('/');
          }}
          className="text-sm font-bold bg-purple text-center rounded-full w-full py-2 mb-3"
        >
          Sign up
        </button>
        <div className="flex justify-center items-center opacity-50 transition delay-200 hover:opacity-100">
          <p className="text-xs mr-1">Do not have account?</p>
          <Link to="/log-in" className="text-sm text-purpleWhite">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
