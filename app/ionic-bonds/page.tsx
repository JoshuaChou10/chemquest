import Link from 'next/link';

export default function IonicBonds() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">⚡ Ionic Bonds</h1>
        <p className="text-xl text-white">Understanding ionic bonding and electron transfer</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are Ionic Bonds?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ionic bonds form when one atom transfers electrons to another atom, creating oppositely 
            charged ions that are attracted to each other by electrostatic forces. This type of 
            bonding typically occurs between metals and nonmetals.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-blue-800">
              <strong>Main Idea:</strong> Ionic bonds involve complete transfer of electrons from one atom to another, creating ions.
            </p>
          </div>
        </section>

        {/* How Ionic Bonds Form */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How Ionic Bonds Form</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Step 1: Electron Transfer</h3>
              <ul className="text-red-700 space-y-2">
                <li>• Metal atom loses electron(s)</li>
                <li>• Nonmetal atom gains electron(s)</li>
                <li>• Creates positive and negative ions</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Step 2: Ion Formation</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• Cation: positively charged ion</li>
                <li>• Anion: negatively charged ion</li>
                <li>• Ions have stable electron configurations</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Step 3: Electrostatic Attraction</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Opposite charges attract</li>
                <li>• Forms ionic compound</li>
                <li>• Strong electrostatic forces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example: Sodium Chloride */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Example: Sodium Chloride (NaCl)</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Sodium (Na)</h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Group 1 alkali metal</li>
                  <li>• Has 1 valence electron</li>
                  <li>• Loses 1 electron to become Na⁺</li>
                  <li>• Achieves noble gas configuration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Chlorine (Cl)</h3>
                <ul className="text-orange-700 space-y-2">
                  <li>• Group 17 halogen</li>
                  <li>• Has 7 valence electrons</li>
                  <li>• Gains 1 electron to become Cl⁻</li>
                  <li>• Achieves noble gas configuration</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-2xl font-mono text-gray-800">
                Na⁺ + Cl⁻ → NaCl
              </div>
              <p className="mt-2 text-sm text-gray-600">
                The electrostatic attraction between Na⁺ and Cl⁻ forms the ionic compound NaCl (table salt).
              </p>
            </div>
          </div>
        </section>

        {/* Properties of Ionic Compounds */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Properties of Ionic Compounds</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">High Melting Points</h3>
              <p className="text-purple-700 text-sm">
                Strong electrostatic forces require high temperatures to break the ionic bonds.
              </p>
              <p className="text-purple-600 text-xs mt-2">Example: NaCl melts at 801°C</p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Electrical Conductivity</h3>
              <p className="text-pink-700 text-sm">
                Conduct electricity when dissolved in water or melted (ions are free to move).
              </p>
              <p className="text-pink-600 text-xs mt-2">Solid state: poor conductor</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Solubility in Water</h3>
              <p className="text-indigo-700 text-sm">
                Most ionic compounds are soluble in water due to water&apos;s polar nature.
              </p>
              <p className="text-indigo-600 text-xs mt-2">Water molecules surround ions</p>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-800 mb-3">Brittle Solids</h3>
              <p className="text-cyan-700 text-sm">
                Ionic compounds are hard but brittle due to the arrangement of ions.
              </p>
              <p className="text-cyan-600 text-xs mt-2">Crystal lattice structure</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Crystal Structure</h3>
              <p className="text-green-700 text-sm">
                Ions arrange in regular, repeating patterns called crystal lattices.
              </p>
              <p className="text-green-600 text-xs mt-2">Ordered arrangement</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">High Boiling Points</h3>
              <p className="text-yellow-700 text-sm">
                Strong ionic bonds require high temperatures to vaporize the compound.
              </p>
              <p className="text-yellow-600 text-xs mt-2">Example: NaCl boils at 1413°C</p>
            </div>
          </div>
        </section>

        {/* Ionic Bonding Patterns */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ionic Bonding Patterns</h2>
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Group 1 + Group 17</h3>
              <p className="text-red-700 mb-3">
                Alkali metals (Group 1) react with halogens (Group 17) to form 1:1 ionic compounds.
              </p>
              <div className="grid md:grid-cols-4 gap-2 text-sm">
                <div className="text-center p-2 bg-red-100 rounded">LiF</div>
                <div className="text-center p-2 bg-red-100 rounded">NaCl</div>
                <div className="text-center p-2 bg-red-100 rounded">KBr</div>
                <div className="text-center p-2 bg-red-100 rounded">CsI</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Group 2 + Group 16</h3>
              <p className="text-blue-700 mb-3">
                Alkaline earth metals (Group 2) react with chalcogens (Group 16) to form 1:1 ionic compounds.
              </p>
              <div className="grid md:grid-cols-4 gap-2 text-sm">
                <div className="text-center p-2 bg-blue-100 rounded">MgO</div>
                <div className="text-center p-2 bg-blue-100 rounded">CaS</div>
                <div className="text-center p-2 bg-blue-100 rounded">SrSe</div>
                <div className="text-center p-2 bg-blue-100 rounded">BaTe</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Polyatomic Ions</h3>
              <p className="text-green-700 mb-3">
                Some ionic compounds contain polyatomic ions (groups of atoms with a charge).
              </p>
              <div className="grid md:grid-cols-3 gap-2 text-sm">
                <div className="text-center p-2 bg-green-100 rounded">NaNO₃ (sodium nitrate)</div>
                <div className="text-center p-2 bg-green-100 rounded">CaCO₃ (calcium carbonate)</div>
                <div className="text-center p-2 bg-green-100 rounded">K₂SO₄ (potassium sulfate)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lattice Energy */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lattice Energy</h2>
          <p className="text-gray-700 mb-4">
            Lattice energy is the energy released when gaseous ions combine to form an ionic solid. 
            It&apos;s a measure of the strength of ionic bonds.
          </p>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Factors Affecting Lattice Energy:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-800 mb-2">Ion Charge</h4>
                <ul className="text-indigo-700 space-y-1">
                  <li>• Higher charges = stronger attraction</li>
                  <li>• Mg²⁺O²⁻ stronger than Na⁺Cl⁻</li>
                  <li>• Charge affects lattice energy significantly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Ion Size</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Smaller ions = stronger attraction</li>
                  <li>• Closer ions have stronger forces</li>
                  <li>• Size inversely affects lattice energy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ionic vs Covalent */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ionic vs Covalent Bonding</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Ionic Bonds</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Complete electron transfer</li>
                <li>• Metal + nonmetal</li>
                <li>• High melting/boiling points</li>
                <li>• Conduct electricity when dissolved</li>
                <li>• Form crystal lattices</li>
                <li>• Example: NaCl, MgO</li>
              </ul>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-800 mb-3">Covalent Bonds</h3>
              <ul className="text-cyan-700 space-y-2">
                <li>• Electron sharing</li>
                <li>• Nonmetal + nonmetal</li>
                <li>• Lower melting/boiling points</li>
                <li>• Poor electrical conductors</li>
                <li>• Form discrete molecules</li>
                <li>• Example: H₂O, CO₂</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lazy Read */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lazy Read</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Ionic bonds form through complete electron transfer</li>
              <li>• Metals lose electrons to become cations (+)</li>
              <li>• Nonmetals gain electrons to become anions (-)</li>
              <li>• Electrostatic attraction holds ions together</li>
              <li>• Ionic compounds have high melting/boiling points</li>
              <li>• They conduct electricity when dissolved or melted</li>
              <li>• Most are soluble in water and form crystal structures</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link 
          href="/diagrams/quiz"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          ← Back to Diagrams Quiz
        </Link>
        <Link 
          href="/ionic-bonds/quiz"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Quiz →
        </Link>
      </div>
    </div>
  );
} 