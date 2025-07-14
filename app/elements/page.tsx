import Link from 'next/link';

export default function Elements() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">🧪 Elements</h1>
        <p className="text-xl text-white">Exploring the periodic table and element properties</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are Elements?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Elements are pure substances that cannot be broken down into simpler substances by chemical means. 
            Each element is made up of atoms with the same number of protons. There are currently 118 known 
            elements, organized in the periodic table.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-blue-800">
              <strong>Main Idea:</strong> Each element has a unique atomic number (number of protons) that defines its identity.
            </p>
          </div>
        </section>

        {/* Periodic Table Overview */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Periodic Table</h2>
          <p className="text-gray-700 mb-4">
            The periodic table is a systematic arrangement of elements based on their atomic number and 
            chemical properties. It was developed by Dmitri Mendeleev in 1869.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Periodic Table Organization:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Periods (Rows)</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Horizontal rows</li>
                  <li>• Elements in same period have same number of electron shells</li>
                  <li>• 7 periods total</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Groups (Columns)</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Vertical columns</li>
                  <li>• Elements in same group have similar properties</li>
                  <li>• 18 groups total</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://www.rsc.org/periodic-table" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                <span className="mr-2"></span>
                Interactive Periodic Table
              </a>
            </div>
          </div>
        </section>

        {/* Element Categories */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Element Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Metals</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Good conductors of heat and electricity</li>
                <li>• Malleable and ductile</li>
                <li>• Shiny appearance</li>
                <li>• Left side of periodic table</li>
                <li>• Examples: Iron, Copper, Gold</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Nonmetals</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Poor conductors of heat and electricity</li>
                <li>• Brittle when solid</li>
                <li>• Dull appearance</li>
                <li>• Right side of periodic table</li>
                <li>• Examples: Carbon, Oxygen, Nitrogen</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Metalloids</h3>
              <ul className="text-purple-700 space-y-2">
                <li>• Properties between metals and nonmetals</li>
                <li>• Semi-conductors</li>
                <li>• Staircase line on periodic table</li>
                <li>• Examples: Silicon, Boron, Arsenic</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Important Element Groups */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Element Groups</h2>
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Group 1: Alkali Metals</h3>
              <p className="text-red-700 mb-3">
                Highly reactive metals that readily lose their outer electron. They react vigorously with water.
              </p>
              <div className="grid md:grid-cols-5 gap-2 text-sm">
                <div className="text-center p-2 bg-red-100 rounded">H</div>
                <div className="text-center p-2 bg-red-100 rounded">Li</div>
                <div className="text-center p-2 bg-red-100 rounded">Na</div>
                <div className="text-center p-2 bg-red-100 rounded">K</div>
                <div className="text-center p-2 bg-red-100 rounded">Rb</div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Group 17: Halogens</h3>
              <p className="text-orange-700 mb-3">
                Highly reactive nonmetals that readily gain an electron. They form salts with metals.
              </p>
              <div className="grid md:grid-cols-5 gap-2 text-sm">
                <div className="text-center p-2 bg-orange-100 rounded">F</div>
                <div className="text-center p-2 bg-orange-100 rounded">Cl</div>
                <div className="text-center p-2 bg-orange-100 rounded">Br</div>
                <div className="text-center p-2 bg-orange-100 rounded">I</div>
                <div className="text-center p-2 bg-orange-100 rounded">At</div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Group 18: Noble Gases</h3>
              <p className="text-blue-700 mb-3">
                Inert gases that rarely react with other elements due to their stable electron configuration.
              </p>
              <div className="grid md:grid-cols-6 gap-2 text-sm">
                <div className="text-center p-2 bg-blue-100 rounded">He</div>
                <div className="text-center p-2 bg-blue-100 rounded">Ne</div>
                <div className="text-center p-2 bg-blue-100 rounded">Ar</div>
                <div className="text-center p-2 bg-blue-100 rounded">Kr</div>
                <div className="text-center p-2 bg-blue-100 rounded">Xe</div>
                <div className="text-center p-2 bg-blue-100 rounded">Rn</div>
              </div>
            </div>
          </div>
        </section>

        {/* Element Properties */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Element Properties</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Physical Properties</h3>
              <ul className="text-indigo-700 space-y-2">
                <li>• Melting point</li>
                <li>• Boiling point</li>
                <li>• Density</li>
                <li>• Color</li>
                <li>• State at room temperature</li>
                <li>• Conductivity</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Chemical Properties</h3>
              <ul className="text-pink-700 space-y-2">
                <li>• Reactivity</li>
                <li>• Oxidation states</li>
                <li>• Bonding behavior</li>
                <li>• Electronegativity</li>
                <li>• Ionization energy</li>
                <li>• Electron affinity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Element Information */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Reading Element Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-600 mb-3">Element Box Information:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Symbol:</span>
                    <span className="text-black">Chemical symbol (Fe)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Name:</span>
                    <span className="text-black">Full element name (Iron)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Atomic Number:</span>
                    <span className="text-black">Number of protons (26)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Atomic Mass:</span>
                    <span className="text-black">Mass of an atom (55.85)</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Fe</div>
                  <div className="text-sm text-gray-600">Iron</div>
                  <div className="text-xs text-gray-500">26</div>
                  <div className="text-xs text-gray-500">55.85</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trends in Periodic Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Periodic Trends</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Atomic Size</h4>
              <p className="text-yellow-700">Increases down a group, decreases across a period</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Ionization Energy</h4>
              <p className="text-green-700">Decreases down a group, increases across a period</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Electronegativity</h4>
              <p className="text-blue-700">Decreases down a group, increases across a period</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Reactivity</h4>
              <p className="text-purple-700">Metals: increases down and left; Nonmetals: increases up and right</p>
            </div>
          </div>
        </section>

        {/* Lazy Read */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lazy Read</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Elements are pure substances with unique atomic numbers</li>
              <li>• The periodic table organizes elements by properties and atomic number</li>
              <li>• Elements are classified as metals, nonmetals, or metalloids</li>
              <li>• Groups have similar properties, periods show trends</li>
              <li>• Element properties follow predictable trends across the table</li>
              <li>• Each element box shows symbol, name, atomic number, and mass</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link 
          href="/atom-structure/quiz"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          ← Back to Atom Structure Quiz
        </Link>
        <Link 
          href="/elements/quiz"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Quiz →
        </Link>
      </div>
    </div>
  );
} 