import React, { useEffect, useState } from 'react';

const ScrollColorChange = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateBackgroundColor = () => {
    // Définir les valeurs RGB de la couleur de fond initiale et finale
    const initialColor = [255, 255, 255]; // Blanc
    const finalColor = [0, 0, 0]; // Noir

    // Déterminer la hauteur totale de la page
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculer la position de défilement relative sur la page
    const scrollPercentage = scrollPosition / totalHeight;

    // Calculer les valeurs RGB interpolées en fonction de la position de défilement
    const interpolatedColor = initialColor.map((channel, index) =>
      Math.round(channel + (finalColor[index] - channel) * scrollPercentage)
    );

    // Retourner la couleur au format CSS
    return `rgb(${interpolatedColor.join(',')})`;
  };

  return (
    <div
      className="scroll-color-change"
      style={{ backgroundColor: calculateBackgroundColor() }}
    >
      {/* Contenu de votre site */}
    </div>
  );
};

export default ScrollColorChange;
