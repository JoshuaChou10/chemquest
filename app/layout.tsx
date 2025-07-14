import type { Metadata } from "next";
import "./globals.css";
import GemCounter from "./components/GemCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ChemQuest - Chemistry Learning App",
  description: "Interactive chemistry learning with concepts and quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="bg-white shadow-lg border-b-2 border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img src="/brook-logo.png" alt="Brook Logo" className="h-8 w-8 mr-2" />
                  <h1 className="text-2xl font-bold text-blue-600">ChemQuest</h1>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/atom-structure" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Atom Structure
                </Link>
                <Link href="/elements" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Elements
                </Link>
                <Link href="/diagrams" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Diagrams
                </Link>
                <Link href="/ionic-bonds" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Ionic Bonds
                </Link>
                <Link href="/covalent-bonds" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Covalent Bonds
                </Link>
                <Link href="/equations" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Equations
                </Link>
                <Link href="/reactions" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Reactions
                </Link>
                <GemCounter />
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
