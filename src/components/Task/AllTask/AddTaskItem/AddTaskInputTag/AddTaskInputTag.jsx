import { FaAngleDown } from 'react-icons/fa6';
import { task } from '../../../../../store/store';
import { useState } from 'react';

export default function AddTaskInputTag() {
  const input = task((state) => state.inputTag);
  const setInput = task((state) => state.setInputTag);
  const tags = task((state) => state.tag);
  const use = task((state) => state.useTag);

  const setTags = tags.map((e) => (
    <p
      onClick={(e) => use(e.target.innerText)}
      className=" transition-colors hover:bg-grayWhite rounded-xl cursor-pointer"
    >
      {e}
    </p>
  ));

  const [model, setModel] = useState(false);
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        className="h-full bg-purple px-2 w-40 placeholder-white placeholder:opacity-50 placeholder:text-sm outline-0"
        placeholder="Add tag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => setModel(!model)}
        className="bg-purple h-full px-2 cursor-pointer border-r-2 border-main"
      >
        <FaAngleDown />
      </button>
      {model && (
        <div
          onClick={() => setModel(!model)}
          className=" absolute top-14 bg-gray p-4 w-full rounded-xl border-2 border-grayWhite transition-colors hover:border-purple z-20 gap-2 flex flex-col"
        >
          {setTags}
        </div>
      )}
    </div>
  );
}
