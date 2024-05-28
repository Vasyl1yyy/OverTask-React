import { task } from '../../store/store';
import Task from './Task/Task';

export default function Tasks() {
  const tasks = task((state) => state.tasks);
  const elementTasks = tasks.map((e) => <Task id={e.id} text={e.text} />);
  const inputText = task((state) => state.textTask);
  const addInputText = task((state) => state.addTextTask);
  const addTask = task((state) => state.addTask);

  return (
    <div>
      <div>
        <input
          className="text-main"
          type="text"
          value={inputText}
          onChange={(e) => addInputText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>{elementTasks}</div>
    </div>
  );
}
