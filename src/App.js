import React from 'react';
import Cards from './Components/Cards/Cards.js';
import CountryPicker from './Components/CountryPicker/CountryPicker.js';
import Charts from './Components/Charts/Charts.js';
import styles from './App.module.css';
import { fetchData } from './api/index.js';
import covid19 from './images/image.png';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data : {},
      country:''
    };
 }
    
  
  async componentDidMount(){
    //console.log("checking");
    //fetching card data from api
    const fetchedData = await fetchData();
    this.setState({data : fetchedData});
  }

  handleCountryChange = async (country) => {
    
    const fetch = await fetchData(country);
    this.setState({data: fetch,country : country});
    //console.log(fetch);
  }

  
  render() {
    const {data,country} = this.state;
    return (
      <div className={styles.AppContainer}>
        <img src={covid19} alt="" className={styles.image} />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    );
  }
}
export default App;
