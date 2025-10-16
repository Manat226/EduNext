"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-md fixed top-0 w-full z-10">
        <h1 className="text-2xl font-bold text-blue-700">EduNext</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/courses" className="hover:text-blue-600">Courses</Link></li>
          <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-40">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-800">
            Empower Your Learning Journey with <span className="text-blue-500">EduNext</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Access high-quality courses, track your progress, and boost your knowledge with the next generation of online learning.
          </p>
          <div className="flex space-x-4">
            <Link href="/courses" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
              Explore Courses
            </Link>
            <Link href="/signup" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg shadow">
              Get Started
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/hero-education.svg"
            alt="EduNext Hero Image"
            width={450}
            height={450}
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 md:px-20">
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-800">
          Why Choose EduNext?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Image src="/learn.svg" alt="Learn Icon" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-blue-700">Interactive Learning</h4>
            <p className="text-gray-600">Engage with videos, quizzes, and assignments for a complete learning experience.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Image src="/progress.svg" alt="Progress Icon" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-blue-700">Track Progress</h4>
            <p className="text-gray-600">Stay motivated by tracking your performance and completion rates.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Image src="/certificate.svg" alt="Certificate Icon" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-blue-700">Earn Certificates</h4>
            <p className="text-gray-600">Get rewarded with certificates upon completing your favorite courses.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-blue-700 text-white mt-10">
        <p>© {new Date().getFullYear()} EduNext. All rights reserved.</p>
      </footer>
    </main>
  );
}
