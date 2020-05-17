import React, {useState,  useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { fetchData } from '../api';
import styles from './MainContent.css';



const MainContent = () => {
  const[fetchedData, setFetchedData] = useState({});


useEffect ( () => {

  const fetchAPI = async () => {
      setFetchedData(await fetchData());
  }

  fetchAPI();
},[setFetchedData]);
  
console.log(fetchedData);


  return (
      <main className={styles.container}>  
        <Grid container spacing={4} justify="center">
          <Typography color="textSecondary" paragraph >    
          <p>API Data:</p>     
           {Object.keys(fetchedData).map(
              (item, i) => ( <div key={i}>  { fetchedData[item].id} { fetchedData[item].first_name  } { fetchedData[item].last_name  } { fetchedData[item].email}</div> )
          )} 
            
          </Typography>     
        </Grid>
    </main>  
  )

}


export default MainContent;
