import Link from 'next/link';

export default function Reactions() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">🔥 Reactions</h1>
        <p className="text-xl text-white">Exploring chemical reactions and their mechanisms</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What are Chemical Reactions?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chemical reactions are processes where substances (reactants) are transformed into 
            different substances (products) through the breaking and forming of chemical bonds. 
            These reactions involve changes in energy and often produce observable effects.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p className="text-blue-800">
              <strong>Main Idea:</strong> Chemical reactions involve the rearrangement of atoms to form new substances with different properties.
            </p>
          </div>
        </section>

        {/* Evidence of Chemical Reactions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Evidence of Chemical Reactions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Color Change</h3>
              <p className="text-red-700 text-sm">
                The appearance of a new color or disappearance of an existing color.
              </p>
              <p className="text-red-600 text-xs mt-2">Example: Blue litmus turns red in acid</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Gas Formation</h3>
              <p className="text-orange-700 text-sm">
                Bubbles or fizzing indicate gas production.
              </p>
              <p className="text-orange-600 text-xs mt-2">Example: Baking soda + vinegar</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Temperature Change</h3>
              <p className="text-yellow-700 text-sm">
                Reaction mixture gets hotter (exothermic) or colder (endothermic).
              </p>
              <p className="text-yellow-600 text-xs mt-2">Example: Burning wood releases heat</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Precipitate Formation</h3>
              <p className="text-green-700 text-sm">
                Solid particles form in a liquid solution.
              </p>
              <p className="text-green-600 text-xs mt-2">Example: Cloudy solution forms</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Odor Change</h3>
              <p className="text-blue-700 text-sm">
                New smell appears or existing smell disappears.
              </p>
              <p className="text-blue-600 text-xs mt-2">Example: Food cooking</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Light Emission</h3>
              <p className="text-purple-700 text-sm">
                Glow or light is produced during the reaction.
              </p>
              <p className="text-purple-600 text-xs mt-2">Example: Glow sticks</p>
            </div>
          </div>
        </section>

        {/* Energy Changes in Reactions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Energy Changes in Reactions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Exothermic Reactions</h3>
              <ul className="text-red-700 space-y-2">
                <li>• Release energy to surroundings</li>
                <li>• Feel hot or warm</li>
                <li>• Energy is a product</li>
                <li>• Examples: Combustion, neutralization</li>
              </ul>
              <div className="mt-4 text-gray-600 text-center font-mono text-sm">
                Reactants → Products + Energy
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Endothermic Reactions</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• Absorb energy from surroundings</li>
                <li>• Feel cold or cool</li>
                <li>• Energy is a reactant</li>
                <li>• Examples: Photosynthesis, melting ice</li>
              </ul>
              <div className="mt-4 text-gray-600 text-center font-mono text-sm">
                Reactants + Energy → Products
              </div>
            </div>
          </div>
        </section>

        {/* Reaction Rates */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Reaction Rates</h2>
          <p className="text-gray-700 mb-4">
            Reaction rate is how fast a reaction occurs. Several factors affect the speed of chemical reactions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🌡️</div>
              <h4 className="font-semibold text-yellow-800 mb-2">Temperature</h4>
              <p className="text-yellow-700 text-sm">Higher temperature = faster reaction</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🧪</div>
              <h4 className="font-semibold text-green-800 mb-2">Concentration</h4>
              <p className="text-green-700 text-sm">Higher concentration = faster reaction</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🔬</div>
              <h4 className="font-semibold text-blue-800 mb-2">Catalyst</h4>
              <p className="text-blue-700 text-sm">Speeds up reaction without being consumed</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📏</div>
              <h4 className="font-semibold text-purple-800 mb-2">Surface Area</h4>
              <p className="text-purple-700 text-sm">More surface area = faster reaction</p>
            </div>
          </div>
        </section>

        {/* Common Types of Reactions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Reactions</h2>
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Combustion Reactions</h3>
              <p className="text-red-700 mb-3">
                A substance reacts with oxygen to produce heat and light. Usually involves hydrocarbons.
              </p>
              <div className="text-center font-mono text-sm">
                Fuel + O₂ → CO₂ + H₂O + Energy
              </div>
              <div className="text-center text-xs text-red-600 mt-2">
                Example: CH₄ + 2O₂ → CO₂ + 2H₂O (burning methane)
              </div>
            </div>
            
            
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Double Displacement Reactions</h3>
              <p className="text-purple-700 mb-3">
                Two compounds exchange ions to form two new compounds. Often produces a precipitate, gas, or water.
              </p>
              <div className="text-center text-gray-600  font-mono text-sm">
                AB + CD → AD + CB
              </div>
              <div className="text-center text-xs text-purple-600 mt-2">
                Example: AgNO₃ + NaCl → AgCl↓ + NaNO₃
              </div>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Single Displacement Reactions</h3>
              <p className="text-indigo-700 mb-3">
                One element replaces another element in a compound. More reactive element displaces less reactive one.
              </p>
              <div className="text-center text-gray-600  font-mono text-sm">
                A + BC → AC + B
              </div>
              <div className="text-center text-xs text-indigo-600 mt-2">
                Example: Fe + CuSO₄ → FeSO₄ + Cu
              </div>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Synthesis Reactions</h3>
              <p className="text-pink-700 mb-3">
                Two or more simple substances combine to form a more complex compound.
              </p>
              <div className="text-center text-gray-600 font-mono text-sm">
                A + B → AB
              </div>
              <div className="text-center text-xs text-pink-600 mt-2">
                Example: 2H₂ + O₂ → 2H₂O
              </div>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Decomposition Reactions</h3>
              <p className="text-teal-700 mb-3">
                A complex compound breaks down into simpler substances. 
              </p>
              <div className="text-center text-gray-600 font-mono text-sm">
                AB → A + B
              </div>
              <div className="text-center text-xs text-teal-600 mt-2">
                Example: 2H₂O₂ → 2H₂O + O₂
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Acid-Base Reactions (Neutralization)</h3>
              <p className="text-blue-700 mb-3">
                An acid reacts with a base to form a salt and water.
              </p>
              <div className="text-center text-gray-600 font-mono text-sm">
                Acid + Base → Salt + Water
              </div>
              <div className="text-center text-xs text-blue-600 mt-2">
                Example: HCl + NaOH → NaCl + H₂O
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Oxidation-Reduction (Redox)</h3>
              <p className="text-green-700 mb-3">
                Reactions involving the transfer of electrons between substances.
              </p>
              <div className="text-center text-gray-600 font-mono text-sm">
                Oxidation: Loss of electrons
              </div>
              <div className="text-center text-gray-600 font-mono text-sm">
                Reduction: Gain of electrons
              </div>
              <div className="text-center text-xs text-green-600 mt-2">
                Example: 2Na + Cl₂ → 2NaCl (sodium loses electrons, chlorine gains electrons)
              </div>
            </div>
        </section>

        {/* Catalysts and Enzymes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Catalysts and Enzymes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Catalysts</h3>
              <ul className="text-indigo-700 space-y-2">
                <li>• Speed up chemical reactions</li>
                <li>• Not consumed in the reaction</li>
                <li>• Lower activation energy</li>
                <li>• Can be recovered unchanged</li>
                <li>• Examples: Platinum in catalytic converters</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Enzymes</h3>
              <ul className="text-pink-700 space-y-2">
                <li>• Biological catalysts</li>
                <li>• Made of proteins</li>
                <li>• Highly specific for substrates</li>
                <li>• Work best at specific pH and temperature</li>
                <li>• Examples: Amylase (digests starch)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reversible vs Irreversible Reactions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Reversible vs Irreversible Reactions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Reversible Reactions</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Can go both directions</li>
                <li>• Use double arrows (⇌)</li>
                <li>• Reach equilibrium</li>
                <li>• Products can form reactants</li>
                <li>• Example: N₂ + 3H₂ ⇌ 2NH₃</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Irreversible Reactions</h3>
              <ul className="text-orange-700 space-y-2">
                <li>• Go only in one direction</li>
                <li>• Use single arrow (→)</li>
                <li>• Go to completion</li>
                <li>• Products cannot form reactants</li>
                <li>• Example: Combustion reactions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real-World Applications */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Cooking</h3>
              <p className="text-green-700 text-sm">
                Maillard reaction (browning), caramelization, protein denaturation.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Medicine</h3>
              <p className="text-blue-700 text-sm">
                Drug metabolism, enzyme reactions, acid-base balance in body.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Industry</h3>
              <p className="text-purple-700 text-sm">
                Haber process (ammonia), contact process (sulfuric acid), polymerization.
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Environment</h3>
              <p className="text-red-700 text-sm">
                Photosynthesis, respiration, acid rain formation, ozone depletion.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Energy</h3>
              <p className="text-yellow-700 text-sm">
                Combustion engines, batteries, fuel cells, nuclear reactions.
              </p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">Daily Life</h3>
              <p className="text-pink-700 text-sm">
                Rusting, digestion, cleaning products, photography.
              </p>
            </div>
          </div>
        </section>

        {/* Lazy Read */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lazy Read</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• Chemical reactions transform reactants into products</li>
              <li>• Evidence includes color change, gas formation, temperature change, precipitate</li>
              <li>• Exothermic reactions release energy, endothermic reactions absorb energy</li>
              <li>• Reaction rate depends on temperature, concentration, catalysts, surface area</li>
              <li>• Common types: combustion, acid-base, redox, double displacement, single displacement, synthesis, decomposition</li>
              <li>• Catalysts speed up reactions without being consumed</li>
              <li>• Reversible reactions can go both directions, irreversible go to completion</li>
              <li>• Chemical reactions are essential in everyday life and industry</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link 
          href="/equations/quiz"
          className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          ← Back to Equations Quiz
        </Link>
        <Link 
          href="/reactions/quiz"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Take Quiz →
        </Link>
      </div>
    </div>
  );
} 