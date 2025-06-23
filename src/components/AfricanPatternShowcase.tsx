import React from 'react';

const AfricanPatternShowcase: React.FC = () => {
  const patterns = [
    { id: 1, name: 'Kente', class: 'african-pattern-1' },
    { id: 2, name: 'Bogolan', class: 'african-pattern-2' },
    { id: 3, name: 'Adinkra', class: 'african-pattern-3' },
    { id: 4, name: 'Géométrique', class: 'african-pattern-4' },
    { id: 5, name: 'Tissé', class: 'african-pattern-5' },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-pattern-1">
            Motifs Africains
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Inspirés des tissus traditionnels africains, ces motifs ajoutent une touche culturelle à votre expérience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patterns.map((pattern) => (
            <div 
              key={pattern.id}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`h-48 ${pattern.class} flex items-center justify-center`}>
                <span className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg font-medium">
                  {pattern.name}
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Motif {pattern.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Inspiré des motifs traditionnels africains, ce design apporte une touche culturelle moderne.
                </p>
                <button className="btn-african px-4 py-2 rounded-lg font-medium">
                  Voir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-pattern-2">
              Typographie Élégante
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Notre choix de polices modernes et lisibles s'inspire de l'élégance des caractères traditionnels africains.
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Space Grotesk</h4>
              <p className="text-4xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                Aa Bb Cc
              </p>
              <p className="text-lg" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                Utilisé pour les titres et les éléments importants.
              </p>
            </div>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Appel à l'Action
            </h3>
            <p className="mb-6 opacity-90">
              Nos boutons sont conçus pour attirer l'attention tout en conservant une esthétique africaine moderne.
            </p>
            <div className="space-x-4">
              <button className="btn-african px-6 py-3 rounded-lg font-medium border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Commencer
              </button>
              <button className="px-6 py-3 rounded-lg font-medium bg-white text-primary-600 hover:bg-opacity-90 transition">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricanPatternShowcase;
