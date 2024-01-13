import { useState } from 'react';
import classnames from 'classnames';
import { getGenerationsData } from '../api/api';

function GenerationFinder() {
  const [birthYear, setBirthYear] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [userGeneration, setUserGeneration] = useState(null);
  const [displayInput, setDisplayInput] = useState(true);

  const generationsData = getGenerationsData();

  const handleUserGenerationLogic = async () => {
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
  };

  return (
    <>
      {displayInput && (
        <>
          <h1 id="generation-finder-top-heading">Generation Finder</h1>
          <p id="generation-finder-start-description">
            Please input your year of birth to see which generation you belong
            to.
          </p>
          <div>
            <input
              id="birth-year-input"
              autoFocus
              type="number"
              value={birthYear}
              placeholder="Birth year"
              onChange={(event) => {
                setBirthYear(event.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleUserGenerationLogic();
                }
              }}
              className={`birth-year-input ${classnames({
                'error-border': invalidInput,
              })}`}
            />
            {invalidInput && (
              <label id="birth-year-error-label" className="error-label">
                Please enter a 4 digit number between{' '}
                {generationsData.lowestMinYear} and{' '}
                {generationsData.highestMaxYear}
              </label>
            )}
          </div>

          <button
            id="generation-finder-find-out-button"
            onClick={handleUserGenerationLogic}
          >
            Find out!
          </button>
        </>
      )}

      {!displayInput && (
        <>
          <h2 id='found-generation-heading'>You belong to {userGeneration.title}</h2>
          <p id='found-generation-description'>
            Born between {userGeneration.minYear} and {userGeneration.maxYear}
          </p>
          {userGeneration.famousExamples && (
            <>
              <h3 id='celebrity-list-heading'>Famous examples:</h3>
              <div id='celebrity-list' className="celebrity-list">
                {userGeneration.famousExamples.map((celebrityObject) => (
                  <div
                    className="celebrity-card"
                    key={celebrityObject.name.replace(/\s/g, '')}
                    id={`celebrity-card-${celebrityObject.name.replace(/\s/g, '')}`}
                  >
                    <img
                      src={celebrityObject.image}
                      alt={celebrityObject.name}
                      style={{ display: 'block' }}
                      id={`celebrity-image-${celebrityObject.name.replace(/\s/g, '')}`}
                    />
                    <a
                      href={celebrityObject.wikiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`celebrity-link-${celebrityObject.name.replace(/\s/g, '')}`}
                    >
                      {celebrityObject.name}
                    </a>
                    <div id={`celebrity-birth-year-${celebrityObject.name.replace(/\s/g, '')}`}>Born in {celebrityObject.birthYear}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          <button
            id='found-generation-try-again-button'
            onClick={() => {
              setBirthYear('');
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
