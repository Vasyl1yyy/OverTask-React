import { Route, Routes } from 'react-router-dom';
import LogIn from './components/Sign/LogIn/LogIn';
import SignUp from './components/Sign/SignUp/SIgnUp';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div className="bg-main text-white h-screen font-fontMain">
      <div className="container mx-auto h-screen pt-2">
        <Header />
        <div className="flex justify-center item-center">
          <Routes>
            <Route path="task" element={<Tasks />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
