import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-14 px-4 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to Avyukt Core Technology 👋
        </h1>

        <p className="text-gray-700 text-lg md:text-xl mb-6">
          We build next-gen software solutions, custom eCommerce platforms,
          and high-performance online stores 🚀.
        </p>

        <Link
          to="/solutions"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Explore Our Solutions 🔍
        </Link>
      </div>
    </section>
  );
};

export default Home;
