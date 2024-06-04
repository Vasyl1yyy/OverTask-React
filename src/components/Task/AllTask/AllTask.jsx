import AllTaskItem from './AllTaskItem/AllTaskItem';

export default function AllTask() {
  return (
    <div className="bg-gray border-grayWhite border-2 rounded-3xl gap-4 py-8 px-8 transition-colors  hover:border-purple col-span-4 h-min">
      <div className="bg-main rounded-3xl p-5 flex flex-col gap-3">
        <div className="grid text-sm font-bold text-purpleWhite grid-cols-8 mx-4">
          <p className="col-span-1">Hard</p>
          <p className="col-span-4">Text</p>
          <p className="col-span-1 text-center">Tag</p>
          <p className="col-span-1 text-center">Data</p>
          <div></div>
        </div>
        <AllTaskItem hard="bg-red" text="hello" tag="dev" data="today" />
        <AllTaskItem hard="bg-green" text="world" tag="dev" data="tomorrow" />
      </div>
    </div>
  );
}
