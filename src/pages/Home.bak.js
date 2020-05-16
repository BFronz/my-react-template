import React  from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import { fetchData } from '../api';
import classes from './Home.css';



class Home extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
        // console.log(fetchedData);
    }


    render() {
       const { data } = this.state;

        return (
            <div className={classes.root}>
                <TopMenu  />
                <SideMenu />
                <MainContent  data={data} />
                <Footer />
            </div>
        );

    }

}

export default Home;