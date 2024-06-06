import { FaTrash } from 'react-icons/fa';
import { task } from '../../../../store/store';

export default function AllTaskItem({ hard, text, tag, data, id }) {
  const deleteTask = task((state) => state.deleteTask);
  return (
    <div
      id={id}
      className="grid w-auto grid-cols-8 bg-gray rounded-full px-4 py-2 relative overflow-auto  transition-colors hover:bg-grayWhite cursor-pointer"
    >
      <div className={'w-6 rounded-xl h-10 absolute ' + hard}></div>
      <div></div>
      <p className="col-span-4">{text}</p>
      <div className="col-span-1 text-green text-center">{tag}</div>
      <div className="col-span-1 text-center">{data}</div>
      <button className="col-span-1 text-red flex justify-end items-center">
        <FaTrash
          className="z-10"
          id={id}
          onClick={(e) => deleteTask(e.target.nearestViewportElement.id)}
        />
      </button>
    </div>
  );
}
