import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'




const Charts = ({data,country}) => {

const [dailyData, setDailyData] = useState([]);

const fetchdata = async () => {
      
      
    const newdata = await fetchDailyData();
    //console.log(newdata);
    setDailyData(newdata);
    
}

useEffect(() => {
    
    fetchdata();
    
    
},[]);
//console.log(dailyData)



const lineChart = (

    dailyData.length?<Line data={{
    

        labels : dailyData.map(({date}) => date),
    
        datasets : [
            {
                label:'Infected',
                data : dailyData.map(({confirmed}) => confirmed),
                fill : true,
                borderColor: '#1976D2',
                
                  
            },
            {
                label:'Deaths',
                data : dailyData.map(({deaths}) => deaths),
                fill:true,
                borderColor: '#F44336',  
            }
        ]
    }} 
    
    

    />:null);

    const barChart = (

        (data.confirmed)?(<Bar data={{
        labels:['Infected','Recovered','Deaths'],
        datasets:[
            {
                label:'People',
                data:[data.confirmed.value,data.recovered.value,data.deaths.value],
                backgroundColor:['rgba(0, 4, 255, 0.6)','rgba(0, 255, 55, 0.6)','rgba(255, 0, 0, 0.6)'],
                borderColor:['blue','green','red']
            }
        ]
    }} 
    
    options={{
        legend:{display:false,position:"right"},
        title:{text:`Current Scenario in ${country}`,display:true}
    }}
    
    
    />):null);
    
    


    return(
        <div className={styles.container}>
           {(country)?barChart:lineChart}
        </div>
        );


}

export default Charts;