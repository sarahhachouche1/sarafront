import axios from 'axios'

export const BASE_URL = 'http://chatapi1-dev.eba-9dntcerg.us-east-1.elasticbeanstalk.com/chat';

export const ENDPOINTS = {
    
    Participants: 'Participants',
    question:'Questions',
    getAnswers : 'Questions/GetAnswers'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}