import './App.css';
import { useState } from 'react';
import classnames from 'classnames';
import { getGenerationsData } from './api/api';

// TODO everything in 1 file first, divide later

// https://github.com/edvinpontuslarsson/hbg-works-kodtest/blob/ASP.NET_version/web/src/components/ApplicationForm.js
// https://github.com/edvinpontuslarsson/hbg-works-kodtest/blob/ASP.NET_version/web/src/components/CompanySection.js

function App() {
  const [birthYear, setBirthYear] = useState(0);
  const [invalidInput, setInvalidInput] = useState(false);
  const [userGeneration, setUserGeneration] = useState(null);
  const [displayInput, setDisplayInput] = useState(true);

  const generationsData = getGenerationsData();

  // TODO see here form validation & err msgs
  // context too much here
  // https://www.freecodecamp.org/news/how-to-validate-forms-in-react/

  // TODO add button, yeah, that's fine actually, permanently

  return (
    <div className="App">
      <h1>Generation Finder</h1>
      {displayInput && (
        <>
          <p>
            Please input your year of birth to see which generation you belong
            to.
          </p>
          <div>
            <input
              type="number"
              value={birthYear}
              onChange={(event) => {
                setBirthYear(event.target.value);
              }}
              className={classnames({
                'error-border': invalidInput,
              })}
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
                //       1991         1981           1991        1996
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
            Submit
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
              setBirthYear(0);
              setUserGeneration(null);

              setDisplayInput(true);
            }}
          >
            Try again with a different birthyear!
          </button>
        </>
      )}
    </div>
  );
}

export default App;
