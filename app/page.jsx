// pages/index.js
import Header from '@/components/header';

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        {/* Header Section */}
      <Header/>

        {/* Main Section */}
        <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to NextFolio</h2>
          <p className="text-gray-600 max-w-md mb-6">
            Build and deploy fast, scalable, and modern websites with Next.js and Tailwind CSS.
          </p>
          <a
            href="#get-started" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Get Started
          </a>
        </main>

        {/* Footer Section */}
        <footer className="w-full bg-gray-800 text-white py-4">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} NextFolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
