import { useState } from 'react';
import { task } from '../../../../store/store';
import { IoIosAdd } from 'react-icons/io';
import AddTaskInputTag from './AddTaskInputTag/AddTaskInputTag';

export default function AddTaskItem() {
  const [input, setInput] = useState('');
  const addTask = task((state) => state.addTask);
  const [place, setPlace] = useState('Enter your task');
  const [difficult, setDifficiult] = useState('easy');
  const [model, setModel] = useState(false);
  const addTag = task((state) => state.setTag);

  const difficultAdd = () => {
    if (difficult == 'easy') {
      return (
        <div className="bg-green rounded-full p-2.5 transition hover:scale-125"></div>
      );
    }
    if (difficult == 'normal') {
      return (
        <div className="bg-yellow rounded-full p-2.5 transition hover:scale-125"></div>
      );
    }
    if (difficult == 'hard') {
      return (
        <div className="bg-red rounded-full p-2.5 transition hover:scale-125"></div>
      );
    }
  };

  const btnAddTask = () => {
    if (input.length > 2) {
      addTag();
      addTask(difficult, input, 'today');
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
        className="bg-main text-white w-full  text-base px-4 py-2  rounded-l-full outline-0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={40}
        placeholder={place}
        onKeyDown={(e) => e.key == 'Enter' && btnAddTask()}
      />
      <button onClick={() => setModel(!model)} className="bg-main p-2 relative">
        {difficultAdd()}
        {model && (
          <div className="p-2 absolute top-12 border-2 border-grayWhite transition hover:border-purple left-0 z-50 bg-main rounded-xl">
            <button
              className="bg-green rounded-full p-2.5 transition hover:scale-125"
              onClick={() => setDifficiult('easy')}
            ></button>
            <button
              className="bg-yellow rounded-full p-2.5 transition hover:scale-125"
              onClick={() => setDifficiult('normal')}
            ></button>
            <button
              className="bg-red rounded-full p-2.5 transition hover:scale-125"
              onClick={() => setDifficiult('hard')}
            ></button>
          </div>
        )}
      </button>
      <AddTaskInputTag />
      <button
        className="font-bold bg-purple pl-3 pr-4 rounded-r-full"
        onClick={btnAddTask}
      >
        <IoIosAdd className="text-white text-3xl" />
      </button>
    </div>
  );
}
