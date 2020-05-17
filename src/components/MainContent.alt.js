import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from './MainContent.css';


class DataComponent extends React.Component {
  state = {
      loading: true,
      data: null
  }

  async componentDidMount () {
      const url = 'https://reqres.in/api/users';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data: data.data, loading: false })
      console.log(data);
  }

  render() {

      const userData = this.state.data;

      return (
      <div>
          {this.state.loading ? (
          <div>loading</div>
           ) : (
            <main className={styles.container}>  
            <Grid container spacing={4} justify="center">
                <Typography color="textSecondary" paragraph >
                <p>API Data:</p>    
                {Object.keys(userData).map(
                    (item, i) => ( <div key={i}> { userData[item].id}  {userData[item].first_name  } { userData[item].last_name  } { userData[item].email}  </div> )
                 )}   
              </Typography>     
            </Grid>
        </main>  
           )}
      </div>
      );
  }

}

export default DataComponent;
