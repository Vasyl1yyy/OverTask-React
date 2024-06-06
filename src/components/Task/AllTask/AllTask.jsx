import AllTaskItem from './AllTaskItem/AllTaskItem';
import { task } from '../../../store/store';
import AddTaskItem from './AddTaskItem/AddTaskItem';
import { IoIosAdd } from 'react-icons/io';
import ModelAddTask from './ModelAddTask/ModelAddTask';

export default function AllTask() {
  const tasks = task((state) => state.tasks);
  const setModel = task((state) => state.setModelAddTask);

  const tasksItem = tasks.map((e) => (
    <AllTaskItem
      id={e.id}
      hard={e.hard}
      text={e.text}
      tag={e.tag}
      data={e.data}
    />
  ));

  return (
    <div className="bg-gray border-grayWhite border-2 rounded-3xl gap-4 py-8 px-8 transition-colors  hover:border-purple col-span-4 h-min">
      <ModelAddTask />
      <AddTaskItem />
      <div className="bg-main rounded-3xl p-5 flex flex-col gap-3">
        <div className="grid text-sm font-bold text-purpleWhite grid-cols-8 mx-4">
          <p className="col-span-1">Hard</p>
          <p className="col-span-4">Text</p>
          <p className="col-span-1 text-center">Tag</p>
          <p className="col-span-1 text-center">Data</p>
          <div></div>
        </div>
        {tasks.length == 0 ? (
          <bottom
            onClick={() => setModel()}
            className="bg-gray text-grayWhite text-7xl rounded-xl flex flex-col justify-center items-center py-4 cursor-pointer transition-colors hover:bg-grayWhite hover:text-white"
          >
            <IoIosAdd />
            <p className="text-sm font-bold">click on me to add a task</p>
          </bottom>
        ) : (
          tasksItem
        )}
      </div>
    </div>
  );
}
