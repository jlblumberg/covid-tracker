import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Location.module.css';
import { fetchCountries } from '../../api/index.js'


const Location = () => {

  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await fetchCountries();
      setFetchedCountries(countries)
    }

    loadCountries();
  }, [setFetchedCountries]);

  return(
    <FormControl className={styles.formControl} id='location-picker'>
      <NativeSelect id='location-options'>
        <option value='global'>Global</option>
        {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )

}

export default Location;