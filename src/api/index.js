import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changableurl = url;
    if (country) {
        changableurl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableurl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((item) => ({
            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            date: item.reportDate
        }));
        //console.log(modifiedData)
        return modifiedData;
    } catch (error) {
        console.log("Error = " + error);

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        const countryNames = countries.map((item) => item.name);
        //console.log(countryNames);
        return countryNames;
    }
    catch (error) {

    }
}



