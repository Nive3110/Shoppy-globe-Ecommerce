import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>

      <p className="text-xl font-semibold mb-2">
        Page Not Found
      </p>

      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-400"
      >
        Go Back Home
      </Link>
    </div>
  );
}
