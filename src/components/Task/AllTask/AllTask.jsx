import { useState } from 'react';
import AllTaskItem from './AllTaskItem/AllTaskItem';
import { task } from '../../../store/store';

export default function AllTask() {
  const [input, setInput] = useState('');
  const tasks = task((state) => state.tasks);
  const tasksItem = tasks.map((e) => (
    <AllTaskItem hard={e.hard} text={e.text} tag={e.tag} data={e.data} />
  ));
  const addTask = task((state) => state.addTask);
  return (
    <div className="bg-gray border-grayWhite border-2 rounded-3xl gap-4 py-8 px-8 transition-colors  hover:border-purple col-span-4 h-min">
      <div className="w-full text-center mb-5 flex">
        <input
          type="text"
          className="bg-main text-white w-full  text-base px-4 py-2  rounded-l-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="font-bold bg-purple pl-3 pr-4 rounded-r-full"
          onClick={() => {
            addTask('bg-green', input, 'dev', 'today');
            setInput('');
          }}
        >
          Add
        </button>
      </div>
      <div className="bg-main rounded-3xl p-5 flex flex-col gap-3">
        <div className="grid text-sm font-bold text-purpleWhite grid-cols-8 mx-4">
          <p className="col-span-1">Hard</p>
          <p className="col-span-4">Text</p>
          <p className="col-span-1 text-center">Tag</p>
          <p className="col-span-1 text-center">Data</p>
          <div></div>
        </div>
        {tasksItem}
        {/* <AllTaskItem hard="bg-red" text="hello" tag="dev" data="today" />
        <AllTaskItem hard="bg-green" text="world" tag="dev" data="tomorrow" /> */}
      </div>
    </div>
  );
}
