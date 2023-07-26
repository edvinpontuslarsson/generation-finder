// https://github.com/edvinpontuslarsson/adaptable-health-forms/blob/main/client/public/custom/js/bookings.js

/**
 * @returns 
 */
function getGenerationsData() {
  const currentYear = 'TODO'; // date.currentYear

  const generations = [
    {
      minYear: 1901,
    },
    {
      maxYear: currentYear,
    },
  ];

  const endIndex = generations.length - 1;

  return {
    globalMinYear: generations[0].minYear,
    globalMaxYear: generations[endIndex].maxYear,
    generations,
  };
}

export { getGenerationsData };
