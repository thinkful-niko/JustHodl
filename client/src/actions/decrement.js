//import axios from 'axios';
// import * as io from 'socket.io-client'; 
// var socket = io('http://localhost:3000'); 
import {API_BASE_URL} from '../config';


export const decrementEntry = (entry) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken);
    console.log(entry);
    return fetch(`${API_BASE_URL}/decrement`, {
        method: 'UPDATE',
        body: JSON.stringify(entry-1),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response);
//         // socket.emit('add entry', entries);

      })
}