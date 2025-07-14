import Link from 'next/link';

export default function Home() {
  const sections = [
    {
      title: "Atom Structure",
      description: "Learn about what makes up everything",
      href: "/atom-structure",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Elements",
      description: "Explore the periodic table and element properties",
      href: "/elements",
      icon: "🧪",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Diagrams",
      description: "Understand chemical diagrams and what we use to represent atoms",
      href: "/diagrams",
      icon: "📊",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Ionic Bonds",
      description: "Study ionic bonding and electron transfer",
      href: "/ionic-bonds",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Covalent Bonds",
      description: "Learn about covalent bonding and electron sharing",
      href: "/covalent-bonds",
      icon: "🔗",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Equations",
      description: "Learn about chemical equations and balancing",
      href: "/equations",
      icon: "⚖️",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Reactions",
      description: "Explore chemical reactions and how they work",
      href: "/reactions",
      icon: "🔥",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-600">
          Welcome to <span className="text-blue-600">ChemQuest</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master chemistry through interactive learning modules. Each section includes 
          comprehensive explanations followed by quizzes to test your understanding.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/atom-structure"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Learning
          </Link>
        </div>
      </div>

      {/* Course Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Overview</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Link 
              key={section.href}
              href={section.href}
              className="group block"
            >
              <div className={`bg-gradient-to-r ${section.color} p-6 rounded-lg text-white transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className="text-blue-100">{section.description}</p>
                <div className="mt-4 text-sm opacity-80">
                  {index + 1} of {sections.length}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-4">
            <div className="text-4xl">📚</div>
            <h3 className="text-xl font-semibold text-gray-800">Cool Chemistry Content</h3>
            <p className="text-gray-600">Detailed explanations with images and examples for each chemistry concept.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl">🧠</div>
            <h3 className="text-xl font-semibold text-gray-800">Interactive Quizzes</h3>
            <p className="text-gray-600">Test what you learned with quizzes after each section and earn gems (see your gems in the top right corner)!</p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl">📈</div>
            <h3 className="text-xl font-semibold text-gray-800">Progress Tracking</h3>
            <p className="text-gray-600">See your progress and earn gems to track how well you know your chemistry!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
