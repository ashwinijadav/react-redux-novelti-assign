import axios from 'axios';

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};

export default fetchCountries;
