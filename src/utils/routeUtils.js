import { productCards } from '../constants/products';

/**
 * Get dynamic product cards content based on current route
 * @param {string} currentPath - Current route path
 * @returns {Array} - Product cards with route-specific content
 */
export function getDynamicProductCards(currentPath) {
  return productCards.map(card => {
    // Check if this card has route-specific content for the current path
    if (card.routeSpecificContent && card.routeSpecificContent[currentPath]) {
      return {
        ...card,
        ...card.routeSpecificContent[currentPath]
      };
    }
    return card;
  });
}

/**
 * Get a specific product card with route-specific content
 * @param {string} cardTitle - Title of the card to find
 * @param {string} currentPath - Current route path
 * @returns {Object|null} - Product card with route-specific content or null
 */
export function getDynamicProductCard(cardTitle, currentPath) {
  const card = productCards.find(card => card.title === cardTitle);
  
  if (!card) return null;
  
  // Check if this card has route-specific content for the current path
  if (card.routeSpecificContent && card.routeSpecificContent[currentPath]) {
    return {
      ...card,
      ...card.routeSpecificContent[currentPath]
    };
  }
  
  return card;
}
