import TaskSettingsItem from './itemTaskSettings/itemTaskSettings';

export default function TaskSettings() {
  return (
    <div className="flex flex-col bg-gray border-grayWhite border-2 rounded-3xl gap-4 py-5 px-6 transition-colors  hover:border-purple h-min">
      <TaskSettingsItem text="Add Task" />
      <TaskSettingsItem text="Date" />
      <TaskSettingsItem text="Tag" />
      <TaskSettingsItem text="Hard" />
      <TaskSettingsItem text="Settings" />
    </div>
  );
}
