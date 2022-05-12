const getBtn = document.getElementById('get-btn');

// const express = require("express")
// const app = express()
const axios = require("axios")



const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
        });
};

getBtn.addEventListener('click', getData);

