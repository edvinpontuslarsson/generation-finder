// https://github.com/edvinpontuslarsson/adaptable-health-forms/blob/main/client/public/custom/js/bookings.js

function getGenerationsData() {
  const currentYear = 9999; // date.currentYear

  // TODO sort
  const generations = [
    {
      title: 'Generation Alpha',
      minYear: 2013,
      maxYear: currentYear,
      famousExamples: false,
    },
    {
      title: 'The Greatest Generation',
      minYear: 1901,
      maxYear: 1927,
      famousExamples: ['Greta Garbo', 'Alan Watts'],
    },
  ];

  const lowestMinYear = generations[0].minYear;
  const endIndex = generations.length - 1;
  const highestMaxYear = generations[endIndex].maxYear;

  return {
    lowestMinYear,
    highestMaxYear,
    generations,
  };
}

export { getGenerationsData };
