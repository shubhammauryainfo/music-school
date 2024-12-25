// pages/index.js
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
export default function HomePage() {
  return (
    <>
      <Header />
      <section className="relative bg-blue-100">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12 lg:py-20">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Welcome to <span className="text-yellow-500">K.L. English School</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              A place where young minds are nurtured to become the leaders of tomorrow. Discover our engaging curriculum, skilled faculty, and supportive environment.
            </p>
            <div className="space-x-4">
              <a
                href="#about"
                className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
              >
                Learn More
              </a>
              <a
                href="#admissions"
                className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition"
              >
                Admissions
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/hero.png"
              alt="K.L. English School"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 opacity-50 rounded-full mix-blend-multiply filter blur-xl lg:w-96 lg:h-96"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 opacity-50 rounded-full mix-blend-multiply filter blur-xl lg:w-96 lg:h-96"></div>
      </section>

      {/* About section */}
      <section id="about" className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              At <span className="text-yellow-500 font-semibold">K.L. English School</span>,
              we are committed to shaping young minds with a blend of academic excellence and holistic development.
              Our mission is to inspire a love for learning and build the leaders of tomorrow.
            </p>
          </div>

          {/* About Content */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
            {/* Image Section */}
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <img
                src="/about-us.jpg"
                alt="About K.L. English School"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To create a nurturing environment where students thrive academically, emotionally,
                  and socially, equipping them with the skills to excel in life.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  Our Approach
                </h3>
                <p className="text-gray-700">
                  We believe in a holistic education system that combines innovative teaching
                  methods, experienced faculty, and a supportive community to ensure every student’s success.
                </p>
              </div>
            </div>
          </div>

          {/* Aim and Facilities */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Aim */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Our Aim
              </h3>
              <p className="text-gray-700">
                To empower students with knowledge, discipline, and values, enabling them to
                contribute positively to society and become responsible global citizens.
              </p>
            </div>

            {/* Facilities */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Facilities
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Modern classrooms with digital learning tools.</li>
                <li>Well-equipped library and science labs.</li>
                <li>Spacious playground and sports facilities.</li>
                <li>Dedicated art, music, and dance rooms.</li>
                <li>Safe and secure school transport system.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
