import { useState } from 'react';
import { task } from '../../../../store/store';
import { IoIosAdd } from 'react-icons/io';

export default function AddTaskItem() {
  const [input, setInput] = useState('');
  const addTask = task((state) => state.addTask);
  const [place, setPlace] = useState('Enter your task');

  const btnAddTask = () => {
    if (input.length > 2) {
      addTask('bg-green', input, 'dev', 'today');
      setPlace('Enter your task');
    } else {
      setPlace('The task must be more than 2 characters');
    }
    setInput('');
  };
  return (
    <div className="w-full text-center mb-5 flex">
      <input
        type="text"
        className="bg-main text-white w-full  text-base px-4 py-2  rounded-l-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={40}
        placeholder={place}
        onKeyDown={(e) => e.key == 'Enter' && btnAddTask()}
      />
      <button
        className="font-bold bg-purple pl-3 pr-4 rounded-r-full"
        onClick={btnAddTask}
      >
        <IoIosAdd className="text-white text-3xl" />
      </button>
    </div>
  );
}
