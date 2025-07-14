import Link from 'next/link';

export default function Diagrams() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">📊 Diagrams</h1>
        <p className="text-xl text-white">Understanding chemical diagrams and representations</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Chemical Diagrams</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chemical diagrams are visual representations that help us understand the structure, 
            bonding, and behavior of molecules and compounds. They provide a way to visualize 
            what we cannot see with our eyes.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-blue-800">
              <strong>Main Idea:</strong> Diagrams help us visualize molecular structures and understand chemical bonding.
            </p>
          </div>
        </section>

        {/* Lewis Dot Structures */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lewis Dot Structures</h2>
          <p className="text-gray-700 mb-4">
            Lewis dot structures show the valence electrons of atoms and how they are shared or transferred 
            in chemical bonding. They help predict molecular geometry and bonding patterns.
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Rules for Drawing Lewis Structures:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">1. Count Valence Electrons</h4>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Add up all valence electrons</li>
                  <li>• For ions, add or subtract electrons</li>
                  <li>• Example: H₂O = 2(1) + 6 = 8 electrons</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800 mb-2">2. Arrange Atoms</h4>
                <ul className="text-pink-700 space-y-1 text-sm">
                  <li>• Central atom usually has lowest electronegativity</li>
                  <li>• Hydrogen is never central</li>
                  <li>• Connect atoms with single bonds</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">3. Distribute Electrons</h4>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Complete octets for all atoms</li>
                  <li>• Hydrogen needs only 2 electrons</li>
                  <li>• Use lone pairs if needed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800 mb-2">4. Check Formal Charges</h4>
                <ul className="text-pink-700 space-y-1 text-sm">
                  <li>• Minimize formal charges</li>
                  <li>• Negative charge on most electronegative atom</li>
                  <li>• Verify total charge matches ion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example Lewis Structure */}
          <div className="mt-6 bg-white border-2 border-purple-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-4">Example: Fluorine (F2)</h4>
            <div className="text-center">
              {/* <div className="inline-block text-2xl font-mono mb-4">
                <div className="mb-2">H : O : H</div>
                <div className="text-sm text-gray-600">or</div>
                <div className="mt-2">H—O—H</div>
              </div>
               */}
              {/* Lewis Dot Diagram Image */}
              <div className="mb-4">
                <img 
                  src="/lewis.png" 
                  alt="Lewis Dot Structure Example" 
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                  style={{ maxHeight: '300px' }}
                />
              </div>
              
              <p className="text-sm text-gray-600">
                Fluorine has 7 valence electrons, its symbol is F.
              </p>
            </div>
          </div>
        </section>

        {/* Molecular Geometry */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Molecular Geometry</h2>
          <p className="text-gray-700 mb-4">
            Molecular geometry describes the three-dimensional arrangement of atoms in a molecule. 
            It&apos;s determined by the number of electron groups around the central atom.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Linear</h3>
              <div className="text-center mb-3">
                <div className="text-3xl">— A —</div>
              </div>
              <p className="text-green-700 text-sm">2 electron groups, 180° bond angle</p>
              <p className="text-green-600 text-xs mt-2">Example: CO₂, BeCl₂</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Trigonal Planar</h3>
              <div className="text-center mb-3">
                <div className="text-3xl">Y</div>
                <div className="text-3xl">— A —</div>
                <div className="text-3xl">Y</div>
              </div>
              <p className="text-blue-700 text-sm">3 electron groups, 120° bond angles</p>
              <p className="text-blue-600 text-xs mt-2">Example: BF₃, SO₃</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Tetrahedral</h3>
              <div className="text-center mb-3">
                <div className="text-2xl">Y</div>
                <div className="text-2xl">— A — Y</div>
                <div className="text-2xl">Y</div>
              </div>
              <p className="text-purple-700 text-sm">4 electron groups, 109.5° bond angles</p>
              <p className="text-purple-600 text-xs mt-2">Example: CH₄, NH₄⁺</p>
            </div>
          </div>
        </section>

        {/* Ball and Stick Models */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ball and Stick Models</h2>
          <p className="text-gray-700 mb-4">
            Ball and stick models represent atoms as spheres and bonds as sticks. They show the 
            three-dimensional structure and spatial arrangement of atoms in molecules.
          </p>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Model Components:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Balls (Atoms)</h4>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Different colors for different elements</li>
                  <li>• Size may represent atomic radius</li>
                  <li>• Position shows spatial arrangement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Sticks (Bonds)</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Single bonds: single sticks</li>
                  <li>• Double bonds: double sticks</li>
                  <li>• Triple bonds: triple sticks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bohr-Rutherford Models */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Bohr-Rutherford Models</h2>
          <p className="text-gray-700 mb-4">
            Bohr-Rutherford models show the nucleus and electron shells of atoms. They help visualize 
            how electrons are arranged in energy levels and how atoms interact during bonding.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Model Components:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Nucleus</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Contains protons and neutrons</li>
                  <li>• Located at the center</li>
                  <li>• Carries positive charge</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Electron Shells</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Concentric circles around nucleus</li>
                  <li>• Each shell holds specific number of electrons</li>
                  <li>• Outermost shell determines reactivity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bohr-Rutherford Diagram */}
          <div className="mt-6 bg-white border-2 border-green-200 p-6 rounded-lg text-center">
            <h4 className="font-semibold text-gray-800 mb-4">Bohr-Rutherford Model Example</h4>
            <img 
              src="/bohr.png" 
              alt="Bohr-Rutherford Model" 
              className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              style={{ maxHeight: '400px' }}
            />
            <p className="mt-4 text-sm text-gray-600">
              Shows the nucleus and electron shells with electrons in their energy levels
            </p>
          </div>
        </section>

        {/* Space-Filling Models */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Space-Filling Models</h2>
          <p className="text-gray-700 mb-4">
            Space-filling models show atoms as spheres that touch each other, representing the 
            actual size and shape of molecules. They give a more realistic view of molecular volume.
          </p>
          
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">Characteristics:</h3>
            <ul className="text-indigo-700 space-y-2">
              <li>• Atoms are represented as spheres with van der Waals radii</li>
              <li>• Spheres overlap to show covalent bonds</li>
              <li>• Shows the actual space occupied by the molecule</li>
              <li>• Useful for understanding molecular interactions</li>
            </ul>
          </div>
        </section>

        {/* Electron Dot Diagrams */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Electron Dot Diagrams</h2>
          <p className="text-gray-700 mb-4">
            Electron dot diagrams show the valence electrons of individual atoms and how they 
            interact to form bonds. They&apos;re simpler than Lewis structures and focus on electron sharing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Ionic Bonding</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-mono">
                  Na⁺ [Cl]⁻
                </div>
              </div>
              <p className="text-pink-700 text-sm">
                Sodium loses an electron to chlorine, forming ions with opposite charges.
              </p>
            </div>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-800 mb-3">Covalent Bonding</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-mono">
                  H : H
                </div>
              </div>
              <p className="text-cyan-700 text-sm">
                Hydrogen atoms share electrons to form a covalent bond.
              </p>
            </div>
          </div>
        </section>

        {/* Structural Formulas */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Structural Formulas</h2>
          <p className="text-gray-700 mb-4">
            Structural formulas show the arrangement of atoms and bonds in molecules. They can be 
            condensed, expanded, or skeletal depending on the level of detail needed.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Condensed Formula</h4>
              <p className="text-gray-700 text-sm">CH₃CH₂OH (ethanol)</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Expanded Formula</h4>
              <p className="text-gray-700 text-sm">H—C—C—O—H (shows all bonds)</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Skeletal Formula</h4>
              <p className="text-gray-700 text-sm">Lines represent carbon-carbon bonds, vertices are carbon atoms</p>
            </div>
          </div>
        </section>

        {/* Lazy Read */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lazy Read</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Lewis structures show valence electrons and bonding patterns</li>
              <li>• Molecular geometry depends on electron groups around central atom</li>
              <li>• Ball and stick models show 3D structure with bonds as sticks</li>
              <li>• Bohr-Rutherford models show nucleus and electron shells</li>
              <li>• Space-filling models show actual molecular volume</li>
              <li>• Electron dot diagrams focus on electron sharing</li>
              <li>• Structural formulas show atom arrangement in different detail levels</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link 
          href="/elements/quiz"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          ← Back to Elements Quiz
        </Link>
        <Link 
          href="/diagrams/quiz"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Quiz →
        </Link>
      </div>
    </div>
  );
} 