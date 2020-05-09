import React,{useState, useEffect} from 'react';
import {FormControl, NativeSelect} from '@material-ui/core';
import {fetchCountries} from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries,setFetchedCountries] = useState([]);

    const fetchAPI = async () => {

        setFetchedCountries(await fetchCountries());
    }

    useEffect(() => {

        fetchAPI();
        

    },[]);

    //console.log(fetchedCountries);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    fetchedCountries.map((item,index) => {
                        return (
                            <option key={index} value={item}>{item}</option>

                        );
                    })
                }
            </NativeSelect>
        </FormControl>
        
        );

}

export default CountryPicker;