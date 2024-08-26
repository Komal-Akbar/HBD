import { FaRocket, FaPaw, FaInfoCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white p-6">
      <header className="text-center">
        <h1 className="mt-10 font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-wide drop-shadow-lg animate-bounce">
          Cool Next.js PWA
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-100 tracking-wider animate-pulse">
          Making your web experience progressive and powerful!
        </p>
      </header>

      <main className="mt-16 flex flex-col items-center gap-8">
        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center">
          <div className="bg-white bg-opacity-10 border border-gray-300 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center">
            <FaRocket className="mx-auto text-4xl mb-4 text-yellow-300" />
            <h2 className="text-2xl font-bold mb-2">Introduction</h2>
            <p className="text-gray-200 text-sm sm:text-base">
              Learn about how we build modern, blazing-fast PWAs with Next.js.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 border border-gray-300 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center">
            <FaPaw className="mx-auto text-4xl mb-4 text-pink-300" />
            <h2 className="text-2xl font-bold mb-2">PWA Benefits</h2>
            <p className="text-gray-200 text-sm sm:text-base">
              Discover the advantages of Progressive Web Applications.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 border border-gray-300 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center">
            <FaInfoCircle className="mx-auto text-4xl mb-4 text-blue-300" />
            <h2 className="text-2xl font-bold mb-2">How It Works</h2>
            <p className="text-gray-200 text-sm sm:text-base">
              Understand the key principles and technology behind PWAs.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8 rounded-lg shadow-xl w-full max-w-3xl text-center mt-12">
          <h3 className="text-3xl font-extrabold mb-4">Why Choose PWAs?</h3>
          <p className="text-gray-100 text-base sm:text-lg">
            PWAs combine the best of the web and mobile apps. They offer fast performance, offline capabilities, and are installable on any device, providing a seamless user experience.
          </p>
        </div>
      </main>
    </div>
  );
}
