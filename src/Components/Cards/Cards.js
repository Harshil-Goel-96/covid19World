import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

class Cards extends React.Component {
    
render(){
    const {data} = this.props;
    //Necessary to handle this using if else otherwise will get undefind error
    if(!data.confirmed){
        return <h1>Loading Data, Please Wait...........</h1>;
    }
    else{
return(
    <div className={styles.container}>
        <Grid container spacing={2} justify="center" >
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>Confirmed</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={data.confirmed.value} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">No of confirmed COVID19 cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={data.recovered.value} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">No of recoveries from COVID19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={data.deaths.value} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">No of deaths from COVID 19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>

);

}
}
}

export default Cards;