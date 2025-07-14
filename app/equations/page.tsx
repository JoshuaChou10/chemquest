import Link from 'next/link';

export default function Equations() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">⚖️ Equations</h1>
        <p className="text-xl text-white">Mastering chemical equations and balancing</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are Chemical Equations?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chemical equations are symbolic representations of chemical reactions. They show the 
            reactants (starting materials) and products (ending materials) involved in a reaction, 
            along with their relative amounts.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-blue-800">
              <strong>Main Idea:</strong> Chemical equations must be balanced to show the conservation of mass and atoms.
            </p>
          </div>
        </section>

        {/* Parts of a Chemical Equation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Parts of a Chemical Equation</h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <div className="text-center mb-6">
              <div className="text-2xl font-mono text-gray-800">
                Reactants → Products
              </div>
              <div className="text-sm text-gray-600 mt-2">General form of a chemical equation</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Reactants</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Starting materials</li>
                  <li>• Left side of the arrow</li>
                  <li>• Substances that react</li>
                  <li>• Separated by + signs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Products</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Ending materials</li>
                  <li>• Right side of the arrow</li>
                  <li>• Substances formed</li>
                  <li>• Separated by + signs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Example Equation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Example: Hydrogen + Oxygen → Water</h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="text-3xl font-mono text-gray-800">
                H₂ + O₂ → H₂O
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-purple-100 p-4 rounded">
                <div className="font-semibold text-purple-800">H₂</div>
                <div className="text-sm text-purple-600">Hydrogen gas</div>
              </div>
              <div className="bg-pink-100 p-4 rounded">
                <div className="font-semibold text-pink-800">O₂</div>
                <div className="text-sm text-pink-600">Oxygen gas</div>
              </div>
              <div className="bg-blue-100 p-4 rounded">
                <div className="font-semibold text-blue-800">H₂O</div>
                <div className="text-sm text-blue-600">Water</div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> This equation is not balanced yet. We need to add coefficients to balance it.
              </p>
            </div>
          </div>
        </section>

        {/* Balancing Chemical Equations */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Balancing Chemical Equations</h2>
          <p className="text-gray-700 mb-4">
            Balancing equations ensures that the same number of each type of atom appears on both 
            sides of the equation, following the Law of Conservation of Mass.
          </p>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Steps to Balance Equations:</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-yellow-800 mb-2">Step 1: Write the Unbalanced Equation</h4>
                <div className="text-center font-mono text-lg">H₂ + O₂ → H₂O</div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-orange-800 mb-2">Step 2: Count Atoms on Each Side</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Reactants:</strong>
                    <div>H: 2 atoms</div>
                    <div>O: 2 atoms</div>
                  </div>
                  <div>
                    <strong>Products:</strong>
                    <div>H: 2 atoms</div>
                    <div>O: 1 atom</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-yellow-800 mb-2">Step 3: Add Coefficients to Balance</h4>
                <div className="text-center font-mono text-lg">2H₂ + O₂ → 2H₂O</div>
                <div className="text-center text-sm text-gray-600 mt-2">
                  Now we have 4 H atoms and 2 O atoms on both sides!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Chemical Reactions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Chemical Reactions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Synthesis (Combination)</h3>
              <p className="text-red-700 text-sm mb-3">
                Two or more substances combine to form a single product.
              </p>
              <div className="text-center font-mono text-sm">
                A + B → AB
              </div>
              <div className="text-center text-xs text-red-600 mt-2">
                Example: 2H₂ + O₂ → 2H₂O
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Decomposition</h3>
              <p className="text-blue-700 text-sm mb-3">
                A single compound breaks down into two or more simpler substances.
              </p>
              <div className="text-center font-mono text-sm">
                AB → A + B
              </div>
              <div className="text-center text-xs text-blue-600 mt-2">
                Example: 2H₂O₂ → 2H₂O + O₂
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Single Replacement</h3>
              <p className="text-green-700 text-sm mb-3">
                One element replaces another in a compound.
              </p>
              <div className="text-center font-mono text-sm">
                A + BC → AC + B
              </div>
              <div className="text-center text-xs text-green-600 mt-2">
                Example: Fe + CuSO₄ → FeSO₄ + Cu
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Double Replacement</h3>
              <p className="text-purple-700 text-sm mb-3">
                Two compounds exchange ions to form new compounds.
              </p>
              <div className="text-center font-mono text-sm">
                AB + CD → AD + CB
              </div>
              <div className="text-center text-xs text-purple-600 mt-2">
                Example: AgNO₃ + NaCl → AgCl + NaNO₃
              </div>
            </div>
          </div>
        </section>

        {/* State Symbols */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">State Symbols</h2>
          <p className="text-gray-700 mb-4">
            State symbols indicate the physical state of each substance in the reaction.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-mono text-gray-800">(s)</div>
              <div className="text-sm text-gray-600">Solid</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-mono text-blue-800">(l)</div>
              <div className="text-sm text-blue-600">Liquid</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-mono text-green-800">(g)</div>
              <div className="text-sm text-green-600">Gas</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-mono text-purple-800">(aq)</div>
              <div className="text-sm text-purple-600">Aqueous (dissolved in water)</div>
            </div>
          </div>
          
          <div className="mt-6 bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">Example with State Symbols:</h3>
            <div className="text-center font-mono text-lg">
              2H₂(g) + O₂(g) → 2H₂O(l)
            </div>
            <p className="text-center text-sm text-indigo-700 mt-2">
              Hydrogen gas and oxygen gas react to form liquid water.
            </p>
          </div>
        </section>

        {/* Coefficients and Subscripts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Coefficients vs Subscripts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Coefficients</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Numbers in front of formulas</li>
                <li>• Apply to entire molecule</li>
                <li>• Can be changed to balance</li>
                <li>• Example: 2H₂O means 2 water molecules</li>
              </ul>
              <div className="mt-4 text-center font-mono text-lg">
                2H₂O = 4 H atoms + 2 O atoms
              </div>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Subscripts</h3>
              <ul className="text-pink-700 space-y-2">
                <li>• Numbers after element symbols</li>
                <li>• Part of the chemical formula</li>
                <li>• Cannot be changed</li>
                <li>• Example: H₂O means 2 H atoms per molecule</li>
              </ul>
              <div className="mt-4 text-center font-mono text-lg">
                H₂O = 2 H atoms + 1 O atom
              </div>
            </div>
          </div>
        </section>

        {/* Practice Examples */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Practice Examples</h2>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Example 1: Carbon + Oxygen → Carbon Dioxide</h3>
              <div className="text-center font-mono text-lg mb-2">
                C + O₂ → CO₂
              </div>
              <p className="text-green-700 text-sm text-center">
                This equation is already balanced! 1 C and 2 O atoms on both sides.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Example 2: Nitrogen + Hydrogen → Ammonia</h3>
              <div className="text-center font-mono text-lg mb-2">
                N₂ + H₂ → NH₃
              </div>
              <div className="text-center font-mono text-lg">
                N₂ + 3H₂ → 2NH₃
              </div>
              <p className="text-blue-700 text-sm text-center mt-2">
                Balanced: 2 N atoms and 6 H atoms on both sides.
              </p>
            </div>
          </div>
        </section>

        {/* Lazy Read */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lazy Read</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Chemical equations show reactants → products</li>
              <li>• Equations must be balanced (same atoms on both sides)</li>
              <li>• Coefficients multiply entire molecules, subscripts are part of formulas</li>
              <li>• State symbols show physical states: (s), (l), (g), (aq)</li>
              <li>• Four main reaction types: synthesis, decomposition, single replacement, double replacement</li>
              <li>• Balancing follows the Law of Conservation of Mass</li>
              <li>• Start with elements that appear in only one reactant and one product</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link 
          href="/covalent-bonds/quiz"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          ← Back to Covalent Bonds Quiz
        </Link>
        <Link 
          href="/equations/quiz"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Quiz →
        </Link>
      </div>
    </div>
  );
} 