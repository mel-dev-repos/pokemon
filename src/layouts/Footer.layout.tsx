export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white min-h-[30vh]">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Section 1</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#">Link 1</a></li>
              <li className="mb-2"><a href="#">Link 2</a></li>
              <li className="mb-2"><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Section 2</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#">Link 1</a></li>
              <li className="mb-2"><a href="#">Link 2</a></li>
              <li className="mb-2"><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Section 3</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#">Link 1</a></li>
              <li className="mb-2"><a href="#">Link 2</a></li>
              <li className="mb-2"><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Section 4</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#">Link 1</a></li>
              <li className="mb-2"><a href="#">Link 2</a></li>
              <li className="mb-2"><a href="#">Link 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};