import { FaTrash } from 'react-icons/fa';
import { task } from '../../../../store/store';

export default function AllTaskItem({
  difficult,
  text,
  tag,
  data,
  id,
  active,
}) {
  const deleteTask = task((state) => state.deleteTask);
  const setActive = task((state) => state.setActiveTask);
  const activeTasks = () => {
    if (active) {
      return (
        <div id={id} className="absolute bg-blackOp z-10 w-full h-full"></div>
      );
    }
  };
  return (
    <div
      id={id}
      className="grid w-auto grid-cols-8 bg-gray rounded-full px-4 py-2 relative overflow-auto  transition-colors hover:bg-grayWhite cursor-pointer"
      onClick={(e) => {
        setActive(e.target.id);
      }}
    >
      {activeTasks()}
      <div
        id={id}
        className={'w-6 rounded-xl h-10 absolute ' + difficult}
      ></div>
      <div></div>
      <p id={id} className="col-span-4">
        {text}
      </p>
      <div id={id} className="col-span-1 flex justify-center items-center">
        <div
          id={id}
          className="bg-purpleOp rounded-full px-3 text-purpleWhite text-sm"
        >
          {tag}
        </div>
      </div>
      <div id={id} className="col-span-1 text-center">
        {data}
      </div>
      <button
        id={id}
        className="col-span-1 text-red flex justify-end items-center"
      >
        <FaTrash
          className="z-10"
          id={id}
          onClick={(e) => deleteTask(e.target.nearestViewportElement.id)}
        />
      </button>
    </div>
  );
}
