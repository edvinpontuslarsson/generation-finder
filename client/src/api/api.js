function getGenerationsData() {
  const generations = [
    {
      title: 'Generation Alpha',
      minYear: 2013,
      maxYear: 2024,
      famousExamples: false,
    },
    {
      title: 'Generation Z',
      minYear: 1997,
      maxYear: 2012,
      famousExamples: [
        {
          name: 'MrBeast',
          birthYear: '1998',
          wikiLink: 'https://en.wikipedia.org/wiki/MrBeast',
        },
        {
          name: 'Greta Thunberg',
          birthYear: '2003',
          wikiLink: 'https://en.wikipedia.org/wiki/Greta_Thunberg',
        }
      ]
    },
    {
      title: 'Millenials (Generation Y)',
      minYear: 1981,
      maxYear: 1996,
      famousExamples: [
        {
          name: 'Taylor Swift',
          birthYear: '1989',
          wikiLink: 'https://en.wikipedia.org/wiki/Taylor_Swift',
        },
        {
          name: 'Mark Zuckerberg',
          birthYear: '1984',
          wikiLink: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg',
        }
      ]
    },
    {
      title: 'Generation X',
      minYear: 1965,
      maxYear: 1980,
      famousExamples: [
        {
          name: 'Jennifer Lopez',
          birthYear: '1969',
          wikiLink: 'https://en.wikipedia.org/wiki/Jennifer_Lopez',
        },
        {
          name: 'Elon Musk',
          birthYear: '1971',
          wikiLink: 'https://en.wikipedia.org/wiki/Elon_Musk',
        }
      ]
    },
    {
      title: 'Baby Boomers (sometimes shortened to boomers)',
      minYear: 1946,
      maxYear: 1964,
      famousExamples: [
        {
          name: 'Arnold Schwarzenegger',
          birthYear: '1947',
          wikiLink: 'https://en.wikipedia.org/wiki/Arnold_Schwarzenegger',
        },
        {
          name: 'Oprah Winfrey',
          birthYear: '1954',
          wikiLink: 'https://en.wikipedia.org/wiki/Oprah_Winfrey',
        }
      ]
    },
    {
      title: 'The Silent Generation',
      minYear: 1928,
      maxYear: 1945,
      famousExamples: [
        {
          name: 'Jane Fonda',
          birthYear: '1937',
          wikiLink: 'https://en.wikipedia.org/wiki/Jane_Fonda',
        },
        {
          name: 'Morgan Freeman',
          birthYear: '1937',
          wikiLink: 'https://en.wikipedia.org/wiki/Morgan_Freeman',
        }
      ]
    },
    {
      title: 'The Greatest Generation',
      minYear: 1901,
      maxYear: 1927,
      famousExamples: [
        {
          name: 'Greta Garbo',
          birthYear: '1905',
          wikiLink: 'https://en.wikipedia.org/wiki/Greta_Garbo',
        },
        {
          name: 'Alan Watts',
          birthYear: '1915',
          wikiLink: 'https://en.wikipedia.org/wiki/Alan_Watts',
        }
      ]
    },
  ].sort((a, b) => a.minYear - b.minYear);

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
