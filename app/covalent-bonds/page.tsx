import Link from 'next/link';

export default function CovalentBonds() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">🔗 Covalent Bonds</h1>
        <p className="text-xl text-white">Understanding covalent bonding and electron sharing</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are Covalent Bonds?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Covalent bonds form when two or more atoms share electrons to achieve a stable electron 
            configuration. This type of bonding typically occurs between nonmetals and results in 
            the formation of molecules.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-blue-800">
              <strong>Main Idea:</strong> Covalent bonds involve sharing of electrons between atoms, creating molecules.
            </p>
          </div>
        </section>

        {/* How Covalent Bonds Form */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How Covalent Bonds Form</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Step 1: Electron Sharing</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Atoms share valence electrons</li>
                <li>• Both atoms benefit from sharing</li>
                <li>• Achieve stable electron configuration</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Step 2: Molecular Formation</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• Shared electrons create bonds</li>
                <li>• Atoms are held together</li>
                <li>• Form discrete molecules</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Step 3: Stability</h3>
              <ul className="text-purple-700 space-y-2">
                <li>• Octet rule is satisfied</li>
                <li>• Lower energy state achieved</li>
                <li>• Molecule is stable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example: Hydrogen Molecule */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Example: Hydrogen Molecule (H₂)</h2>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">Hydrogen Atoms</h3>
                <ul className="text-cyan-700 space-y-2">
                  <li>• Each H has 1 valence electron</li>
                  <li>• Need 2 electrons for stability</li>
                  <li>• Share electrons to form H₂</li>
                  <li>• Achieve helium configuration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Covalent Bond</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Single covalent bond</li>
                  <li>• 2 shared electrons</li>
                  <li>• Both atoms share equally</li>
                  <li>• Nonpolar covalent bond</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-2xl font-mono text-gray-800">
                H : H or H—H
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Two hydrogen atoms share their electrons to form a stable hydrogen molecule.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Covalent Bonds */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Covalent Bonds</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Single Bonds</h3>
              <p className="text-yellow-700 text-sm mb-3">
                One pair of electrons is shared between two atoms.
              </p>
              <div className="text-center">
                <div className="text-2xl font-mono">H—H</div>
                <div className="text-sm text-yellow-600">H₂ (hydrogen)</div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Double Bonds</h3>
              <p className="text-orange-700 text-sm mb-3">
                Two pairs of electrons are shared between two atoms.
              </p>
              <div className="text-center">
                <div className="text-2xl font-mono">O=O</div>
                <div className="text-sm text-orange-600">O₂ (oxygen)</div>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Triple Bonds</h3>
              <p className="text-red-700 text-sm mb-3">
                Three pairs of electrons are shared between two atoms.
              </p>
              <div className="text-center">
                <div className="text-2xl font-mono">N≡N</div>
                <div className="text-sm text-red-600">N₂ (nitrogen)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Polar vs Nonpolar Covalent Bonds */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Polar vs Nonpolar Covalent Bonds</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Nonpolar Covalent</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Equal sharing of electrons</li>
                <li>• Same or similar electronegativity</li>
                <li>• No charge separation</li>
                <li>• Examples: H₂, O₂, N₂</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Polar Covalent</h3>
              <ul className="text-purple-700 space-y-2">
                <li>• Unequal sharing of electrons</li>
                <li>• Different electronegativities</li>
                <li>• Partial charge separation</li>
                <li>• Examples: H₂O, HCl, NH₃</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Example: Water (H₂O)</h3>
            <div className="text-center">
              <div className="text-2xl font-mono text-gray-800 mb-2">
                H—O—H
              </div>
              <p className="text-blue-700 text-sm">
                Oxygen is more electronegative than hydrogen, so it attracts electrons more strongly, 
                creating a polar molecule with partial negative charge on oxygen and partial positive 
                charges on hydrogens.
              </p>
            </div>
          </div>
        </section>

        {/* Properties of Covalent Compounds */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Properties of Covalent Compounds</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Lower Melting Points</h3>
              <p className="text-pink-700 text-sm">
                Weaker intermolecular forces result in lower melting points compared to ionic compounds.
              </p>
              <p className="text-pink-600 text-xs mt-2">Example: H₂O melts at 0°C</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Poor Electrical Conductivity</h3>
              <p className="text-indigo-700 text-sm">
                No free ions or electrons to carry electrical current.
              </p>
              <p className="text-indigo-600 text-xs mt-2">Exception: Some conduct when dissolved</p>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-800 mb-3">Variable Solubility</h3>
              <p className="text-cyan-700 text-sm">
                Solubility depends on polarity. &quot;Like dissolves like.&quot;
              </p>
              <p className="text-cyan-600 text-xs mt-2">Polar dissolves polar, nonpolar dissolves nonpolar</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Molecular Structure</h3>
              <p className="text-yellow-700 text-sm">
                Form discrete molecules rather than crystal lattices.
              </p>
              <p className="text-yellow-600 text-xs mt-2">Definite molecular formulas</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Soft Solids/Liquids/Gases</h3>
              <p className="text-green-700 text-sm">
                Many are gases or liquids at room temperature.
              </p>
              <p className="text-green-600 text-xs mt-2">Weak intermolecular forces</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Covalent Network</h3>
              <p className="text-orange-700 text-sm">
                Some form giant covalent networks (diamond, graphite).
              </p>
              <p className="text-orange-600 text-xs mt-2">Very high melting points</p>
            </div>
          </div>
        </section>

        {/* Multiple Bonds and Bond Strength */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Multiple Bonds and Bond Strength</h2>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Bond Strength Increases with Multiple Bonds:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-mono text-red-800 mb-2">C—C</div>
                <div className="text-sm text-red-700">Single Bond</div>
                <div className="text-xs text-red-600">347 kJ/mol</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono text-orange-800 mb-2">C=C</div>
                <div className="text-sm text-orange-700">Double Bond</div>
                <div className="text-xs text-orange-600">614 kJ/mol</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono text-yellow-800 mb-2">C≡C</div>
                <div className="text-sm text-yellow-700">Triple Bond</div>
                <div className="text-xs text-yellow-600">839 kJ/mol</div>
              </div>
            </div>
          </div>
        </section>

        {/* Coordinate Covalent Bonds */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Coordinate Covalent Bonds</h2>
          <p className="text-gray-700 mb-4">
            A coordinate covalent bond (dative bond) forms when one atom provides both electrons 
            for the shared pair. This commonly occurs in Lewis acid-base reactions.
          </p>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Example: Ammonium Ion (NH₄⁺)</h3>
            <div className="text-center">
              <div className="text-2xl font-mono text-gray-800 mb-2">
                H—N—H
              </div>
              <p className="text-purple-700 text-sm">
                When NH₃ reacts with H⁺, the nitrogen atom donates its lone pair to form a 
                coordinate covalent bond with the hydrogen ion.
              </p>
            </div>
          </div>
        </section>

        {/* Lazy Read */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lazy Read</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Covalent bonds form through electron sharing between nonmetals</li>
              <li>• Single, double, and triple bonds involve 1, 2, or 3 shared electron pairs</li>
              <li>• Nonpolar bonds have equal sharing, polar bonds have unequal sharing</li>
              <li>• Covalent compounds have lower melting points than ionic compounds</li>
              <li>• They are poor electrical conductors and form discrete molecules</li>
              <li>• Multiple bonds are stronger than single bonds</li>
              <li>• Coordinate covalent bonds involve one atom donating both electrons</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link 
          href="/ionic-bonds/quiz"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          ← Back to Ionic Bonds Quiz
        </Link>
        <Link 
          href="/covalent-bonds/quiz"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Quiz →
        </Link>
      </div>
    </div>
  );
} 