import axios from 'axios';

export default {
    getRandomEmployees: async function() {
        return  await axios.get('https://randomuser.me/api/?results=50&nat=us&seed=potato')
    },

    
}
//when working try altering what is fetched
// ?results=30,inc=gender,name,nat,dob,picture,email,location