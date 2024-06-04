export default function itemTaskSettings({ text }) {
  return (
    <button className="bg-main text-purpleWhite text-base font-bold rounded-full py-2 transition-colors hover:text-white hover:bg-grayWhite">
      {text}
    </button>
  );
}
