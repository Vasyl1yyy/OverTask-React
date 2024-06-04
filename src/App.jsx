import { Route, Routes } from 'react-router-dom';
import LogIn from './components/Sign/LogIn/LogIn';
import SignUp from './components/Sign/SignUp/SIgnUp';
import Header from './components/Header/Header';
import Task from './components/Task/Task';
import Home from './components/Home/Home';
import Habit from './components/Habit/Habit';
import Stats from './components/Stats/stats';

function App() {
  return (
    <div className="bg-main text-white h-screen font-fontMain">
      <div className="container mx-auto h-screen pt-2 px-3">
        <Header />
        <div>
          <Routes>
            <Route path="task" element={<Task />} />
            <Route path="/" element={<Home />} />
            <Route path="habit" element={<Habit />} />
            <Route path="stats" element={<Stats />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
