import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Location.module.css';


const Location = () => {

  return(
    <FormControl className={styles.formControl} id='location-picker'>
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
    </FormControl>
  )

}

export default Location;