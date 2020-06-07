import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Location.module.css';
import { fetchCountries } from '../../api/index.js'


const Location = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await fetchCountries();
      setFetchedCountries(countries)
    }

    loadCountries();
  }, [setFetchedCountries]);

  const formatData = () => {
    if (fetchedCountries.constructor === Array) {
      return fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)
    }
  }

  return(
    <FormControl className={styles.formControl} id='location-picker'>
      <NativeSelect defaultValue='' id='location-options' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value='global'>Global</option>
        {formatData()}
      </NativeSelect>
    </FormControl>
  )

}

export default Location;