import { useState } from 'react';
import { task } from '../../../../store/store';

export default function ModelAddTask() {
  const model = task((state) => state.modelAddTask);
  const setModel = task((state) => state.setModelAddTask);
  const [inputBlockText, setInputBlockText] = useState('');
  const addTask = task((state) => state.addTask);

  const btnAddTask = () => {
    if (inputBlockText.length > 2) {
      addTask('bg-green', inputBlockText, 'dev', 'today');
    }
    setInputBlockText('');
    setModel();
  };

  return (
    <>
      {model && (
        <div
          className="close w-screen flex justify-center items-center h-screen bg-blackOp absolute top-0 left-0 "
          onClick={(e) => e.target.classList[0] == 'close' && setModel()}
        >
          <div className="bg-gray py-7 px-6 rounded-3xl  border-grayWhite border-2 flex flex-col w-5/12 transition-colors hover:border-purple">
            <input
              type="text"
              className="bg-main rounded-full text-base py-2 px-4 mb-5"
              value={inputBlockText}
              onChange={(e) => setInputBlockText(e.target.value)}
              onKeyDown={(e) => e.key == 'Enter' && btnAddTask()}
            />
            <button
              className="bg-purple text-White w-min mx-auto font-bold text-base py-2 px-5 rounded-full"
              onClick={btnAddTask}
            >
              add
            </button>
          </div>
        </div>
      )}
    </>
  );
}
