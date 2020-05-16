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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
            nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
            felis nec erat   
            
          </Typography>     
        </Grid>
    </main>  
  )

}


export default MainContent;



