import './App.css';
import { useState } from 'react';
import classnames from 'classnames';
import { getGenerationsData } from './api/api';

// TODO everything in 1 file first, divide later

// https://github.com/edvinpontuslarsson/hbg-works-kodtest/blob/ASP.NET_version/web/src/components/ApplicationForm.js
// https://github.com/edvinpontuslarsson/hbg-works-kodtest/blob/ASP.NET_version/web/src/components/CompanySection.js

function App() {
  const [birthYear, setBirthYear] = useState(0);
  // TODO implement error handling
  const [invalidBirthYear, setInvalidBirthYear] = useState(false);

  const generationsData = getGenerationsData();

  // TODO see here form validation & err msgs
  // context too much here
  // https://www.freecodecamp.org/news/how-to-validate-forms-in-react/

  // TODO move this into jsx for below input and use state
  const userGeneration = generationsData.generations.find(
    //       1991        1981           1991        1996
    (gen) => birthYear > gen.minYear && birthYear < gen.maxYear
  );

  return (
    <div className="App">
      <h1>Generation Finder</h1>
      <p>
        Please input your year of birth to see which generation you belong to.
      </p>
      <div>
        <input
          type="number"
          value={birthYear}
          onChange={(event) => {
            setBirthYear(event.target.value);
          }}
          // TODO if this doesn't work, see usage on line 89 here:
          // https://github.com/edvinpontuslarsson/hbg-works-kodtest/blob/ASP.NET_version/web/src/components/CompanySection.js
          className={classnames({
            'error-border': invalidBirthYear,
          })}
        />
      </div>
    </div>
  );
}

export default App;
