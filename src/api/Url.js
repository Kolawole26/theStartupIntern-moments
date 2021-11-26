import axios from 'axios';

export default axios.create({
    baseURL: 'https://eventful-moments.herokuapp.com/api/v1'
});