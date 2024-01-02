import { useState } from 'react';
import classnames from 'classnames';
import { getGenerationsData } from '../api/api';

function GenerationFinder() {
  const [birthYear, setBirthYear] = useState(null);
  const [invalidInput, setInvalidInput] = useState(false);
  const [userGeneration, setUserGeneration] = useState(null);
  const [displayInput, setDisplayInput] = useState(true);

  const generationsData = getGenerationsData();

  return (
    <>
      <h1>Generation Finder</h1>
      {displayInput && (
        <>
          <p>
            Please input your year of birth to see which generation you belong
            to.
          </p>
          <div>
            <input
              autoFocus
              type="number"
              value={birthYear}
              placeholder='Birth year'
              onChange={(event) => {
                setBirthYear(event.target.value);
              }}
              className={`birth-year-input ${classnames({
                'error-border': invalidInput,
              })}`}
            />
            {invalidInput && (
              <label className="error-label">
                Please enter a 4 digit number between{' '}
                {generationsData.lowestMinYear} and{' '}
                {generationsData.highestMaxYear}
              </label>
            )}
          </div>

          <button
            onClick={() => {
              const foundGeneration = generationsData.generations.find(
                // e.g.
                //       1991         1981           1991         1996
                (gen) => birthYear >= gen.minYear && birthYear <= gen.maxYear
              );

              if (foundGeneration) {
                setUserGeneration(foundGeneration);

                setInvalidInput(false);
                setDisplayInput(false);
              } else {
                setInvalidInput(true);
              }
            }}
          >
            Find out!
          </button>
        </>
      )}

      {!displayInput && (
        <>
          <h2>You belong to {userGeneration.title}</h2>
          <p>
            Born between {userGeneration.minYear} and {userGeneration.maxYear}
          </p>
          {userGeneration.famousExamples && (
            <>
              <h3>Famous examples:</h3>
              <ul>
                {userGeneration.famousExamples.map((ex) => (
                  <li>{ex}</li>
                ))}
              </ul>
            </>
          )}
          <button
            onClick={() => {
              setBirthYear(null);
              setUserGeneration(null);

              setDisplayInput(true);
            }}
          >
            Try again with a different birthyear!
          </button>
        </>
      )}
    </>
  );
}

export default GenerationFinder;
