// {
// flag,
// capital,
// countryName,
// languages = [],
// population,
// }
import { useRef } from 'react';
import styles from './CountryInfo.module.css';
import { useLocation } from 'react-router-dom';
import { GoBackBtn } from '..';
export const CountryInfo = ({
  country: { flag, capital, countryName, languages = [], population },
}) => {
  const location = useLocation();
  const back = useRef(location.state || '/');
  return (
    <div className={styles.wrapper}>
      <GoBackBtn back={back} />
      <div className={styles.flag}>
        <img className={styles.img} src={flag} alt={countryName} />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{capital}</span>
        </h3>

        <h1 className={styles.title}>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </h1>

        <p className={styles.details}>
          Population: <span className={styles.accent}>{population}</span>
        </p>

        <p className={styles.details}>
          Languages:{' '}
          <span className={styles.accent}>{languages.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};