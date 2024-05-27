import { Route, Routes } from 'react-router-dom';
import LogIn from './components/Sign/LogIn/LogIn';
import SignUp from './components/Sign/SignUp/SIgnUp';

function App() {
  return (
    <div className="bg-main text-white h-screen font-fontMain">
      <div className="container mx-auto h-screen flex justify-center items-center">
        <Routes>
          <Route path="log-in" element={<LogIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
