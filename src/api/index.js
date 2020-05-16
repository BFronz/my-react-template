import axios from 'axios';

const url = 'https://reqres.in/api/users';


export const fetchData = async () => {

    try {

        // only need user data
        const { data: {data} } = await axios.get(url); 
   
    
        return data;
    
    } catch (error) {
    
        console.log(error);

    }
    
}