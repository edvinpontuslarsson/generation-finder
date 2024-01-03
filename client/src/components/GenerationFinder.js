import { useState } from 'react';
import classnames from 'classnames';
import { getGenerationsData } from '../api/api';
import { getThumbnailData } from '../api/wiki';
import { backupSvgUrl } from '../utils/utils';

function GenerationFinder() {
  const [birthYear, setBirthYear] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [userGeneration, setUserGeneration] = useState(null);
  const [displayInput, setDisplayInput] = useState(true);

  const [thumbnailCollection, setThumbnailCollection] = useState({});
  const [thumbnailLoading, setThumbnailLoading] = useState(true);

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

      // fetches thumbnail after setting the user generation
      const thumbnailPromises = foundGeneration.famousExamples.map(
        (celebrity) =>
          getThumbnailData(celebrity.name)
            .then((data) => ({
              [celebrity.name]: data,
            }))
            .catch(() => ({
              [celebrity.name]: { imageUrl: backupSvgUrl },
            }))
      );

      const thumbnailArray = await Promise.all(thumbnailPromises);
      const thumbnailData = thumbnailArray.reduce(
        (accumulator, current) => ({
          ...accumulator,
          ...current,
        }),
        {}
      );

      setThumbnailCollection(thumbnailData);
    } else {
      setInvalidInput(true);
    }
  };

  return (
    <>
      {displayInput && (
        <>
          <h1>Generation Finder</h1>
          <p>
            Please input your year of birth to see which generation you belong
            to.
          </p>
          <div>
            <input
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
              <label className="error-label">
                Please enter a 4 digit number between{' '}
                {generationsData.lowestMinYear} and{' '}
                {generationsData.highestMaxYear}
              </label>
            )}
          </div>

          <button onClick={handleUserGenerationLogic}>Find out!</button>
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
              <div className="celebrity-list">
                {userGeneration.famousExamples.map((celebrityObject) => (
                  <div
                    className="celebrity-card"
                    key={celebrityObject.name.replace(/\s/g, '')}
                  >
                    {thumbnailCollection[celebrityObject.name] && (
                      <img
                        src={thumbnailCollection[celebrityObject.name].imageUrl}
                        alt={celebrityObject.name}
                        onLoad={() => setThumbnailLoading(false)}
                        style={{ display: thumbnailLoading ? 'none' : 'block' }}
                      />
                    )}
                    <a
                      href={celebrityObject.wikiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {celebrityObject.name}
                    </a>
                    <div>Born in {celebrityObject.birthYear}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          <button
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
