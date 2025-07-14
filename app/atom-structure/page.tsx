import Link from 'next/link';

export default function AtomStructure() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">⚛️ Atom Structure</h1>
        <p className="text-xl text-white">Understanding the fundamental building blocks of matter</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is an Atom?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Atoms are the building blocks of all matter in the universe. Everything you see is made of them.
            The computer you are using right now, the chair you are sitting on, the air you are breathing, even you are made of atoms.
            Atoms have a nucleus containing protons and neutrons, surrounded by electrons 
            in energy levels or shells.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-blue-800">
              <strong>Main Idea:</strong> Atoms are the building blocks of all matter in the universe.
            </p>
          </div>
        </section>

        {/* Atomic Components */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Atomic Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Protons</h3>
              <ul className="text-red-700 space-y-2">
                <li>• Positive charge (+1)</li>
                <li>• Located in the nucleus</li>
                <li>• Mass ≈ 1 atomic mass unit</li>
                <li>• Determines the element</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Neutrons</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• No charge (neutral)</li>
                <li>• Located in the nucleus</li>
                <li>• Mass ≈ 1 atomic mass unit</li>
                <li>• Contributes to mass</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Electrons</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• Negative charge (-1)</li>
                <li>• Orbit around nucleus</li>
                <li>• Very small mass</li>
                <li>• Determine bonding</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Atomic Structure Diagram */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Atom Structure</h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg text-center">
            <img 
              src="/atom-structure.png" 
              alt="Atomic Structure Diagram" 
              className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
              style={{ maxHeight: '400px' }}
            />
            <p className="mt-4 text-gray-600">Atomic structure showing nucleus and electron shells. (In reality, atoms are 3d, but teachers like to simplify it.)</p>
          </div>
        </section>

        {/* Energy Levels */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Energy Levels (Electron Shells)</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Electrons are arranged in energy levels around the nucleus. Each level can hold a specific 
              number of electrons:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Shell 1 (K-shell)</h4>
                <p className="text-green-700">Maximum 2 electrons</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Shell 2 (L-shell)</h4>
                <p className="text-green-700">Maximum 8 electrons</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Shell 3 (M-shell)</h4>
                <p className="text-green-700">Maximum 18 electrons</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Shell 4 (N-shell)</h4>
                <p className="text-green-700">Maximum 32 electrons</p>
              </div>
            </div>
          </div>
        </section>

        {/* Atomic Number and Mass */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Atomic Number and Mass</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Atomic Number (Z)</h3>
              <p className="text-yellow-700 mb-3">
                The number of protons in the nucleus. This determines the element's identity.
              </p>
              <div className="bg-yellow-100 p-3 rounded">
                <p className="text-yellow-800 font-semibold">Example: Carbon has 6 protons, so Z = 6</p>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Mass Number (A)</h3>
              <p className="text-orange-700 mb-3">
                The sum of protons and neutrons in the nucleus.
              </p>
              <div className="bg-orange-100 p-3 rounded">
                <p className="text-orange-800 font-semibold">Example: Carbon-12 has 6 protons + 6 neutrons = 12</p>
              </div>
            </div>
          </div>
        </section>

        {/* Isotopes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Isotopes</h2>
          <p className="text-gray-700 mb-4">
            Isotopes are atoms of the same element with different numbers of neutrons. 
            They have the same atomic number but different mass numbers.
          </p>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h4 className="font-semibold text-indigo-800 mb-3">Carbon Isotopes Example:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bold text-indigo-800">Carbon-12</div>
                <div className="text-sm text-indigo-600">6 protons + 6 neutrons</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-indigo-800">Carbon-13</div>
                <div className="text-sm text-indigo-600">6 protons + 7 neutrons</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-indigo-800">Carbon-14</div>
                <div className="text-sm text-indigo-600">6 protons + 8 neutrons</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lazy Read */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lazy Read</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Atoms are the smallest units of matter that retain element properties</li>
              <li>• The nucleus contains protons (positive) and neutrons (neutral)</li>
              <li>• Electrons (negative) orbit the nucleus in energy levels</li>
              <li>• Atomic number = number of protons (determines the element)</li>
              <li>• Mass number = protons + neutrons</li>
              <li>• Isotopes have the same protons but different neutrons</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link 
          href="/"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          ← Back to Home
        </Link>
        <Link 
          href="/atom-structure/quiz"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Quiz →
        </Link>
      </div>
    </div>
  );
} 