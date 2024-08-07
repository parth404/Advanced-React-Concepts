const UtilityCssDemo = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-gray-900">Tailwind CSS Demo</h1>
        <p className="text-gray-700 mt-2">
          This is a paragraph styled with Tailwind CSS utility classes.
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default UtilityCssDemo;