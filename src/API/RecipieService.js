import axios from 'axios';

export default class RecipieService {
    static async getAll() {

            const response = await axios.get('http://127.0.0.1:8000/api/recipies/all/')
            console.log('response', response)
            return response;

    }


}