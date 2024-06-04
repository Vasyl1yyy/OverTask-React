import AllTask from './AllTask/AllTask';
import TaskSettings from './TaskSettings/TaskSettings';

export default function Task() {
  return (
    <div className="grid grid-cols-5 gap-8 item-start">
      <TaskSettings />
      <AllTask />
    </div>
  );
}
