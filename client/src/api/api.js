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
      title: 'Generation Z',
      minYear: 1997,
      maxYear: 2012,
      famousExamples: ['MrBeast', 'Greta Thunberg'],
    },
    {
      title: 'Millenials (Generation Y)',
      minYear: 1981,
      maxYear: 1996,
      famousExamples: ['Taylor Swift', 'Mark Zuckerberg'],
    },
    {
      title: 'Generation X',
      minYear: 1965,
      maxYear: 1980,
      famousExamples: ['Jennifer Lopez', 'Elon Musk'],
    },
    {
      title: 'Baby Boomers (or just Boomers)',
      minYear: 1946,
      maxYear: 1964,
      famousExamples: ['Arnold Schwarzenegger,', 'Oprah Winfrey'],
    },
    {
      title: 'The Silent Generation',
      minYear: 1928,
      maxYear: 1945,
      famousExamples: ['Jane Fonda', 'Morgan Freeman'],
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
