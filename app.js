// Moduliai
// const sayHi = require('./modules/some')
//
// sayHi()

// IS-EMAIL
// const checkEmail = require('is-email')
//
// console.log(checkEmail("asdasd@gmail.com"))


//SOME_ANIMALS
// const Animals = require('some-animals');
// const animal = new Animals();
//
// const dog = async () => {
//     let img = await animal.dog();
//     console.log(img)
// }
//
// dog();


// using npm package "axios" (for data fetching), create a module which will get you random user from
// "https://jsonplaceholder.typicode.com/users"// when you have you user check if his email is valid with npm package "is-email"

// when you have user with valid email, change users name to other random name using npm package "node-random-name"

// add "pet" key to user object and append it with random animal photo from "some-animals" npm package

const axios = require("axios");
const isEmail = require("is-email");
const nodeRandomName = require("node-random-name");
const Animals = require("some-animals");

const URI = "https://jsonplaceholder.typicode.com/users";

axios.get(URI)
    .then(async function (response) {
        const randomUser = response.data[Math.floor(Math.random() * response.data.length)];
        const validEmail = isEmail(randomUser.email);
        console.log("Email: " + randomUser.email + " (" + (validEmail ? "":"in") + "valid)");
        if (validEmail) {
            console.log("Previous name: " + randomUser.name);
            randomUser.name = nodeRandomName();
            console.log("New name: " + randomUser.name);
        }
        randomUser.pet = await generateRandomAnimal();
        console.log(randomUser);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

async function generateRandomAnimal() {
    const animal = new Animals();
    const rngAnimal = animal.methods[Math.floor(Math.random() * animal.methods.length)];
    console.log("random animal to generate " + rngAnimal);
    let pet;
    switch (rngAnimal) {
        case "bird":
            pet = await animal.bird(); break;
        case "bunny":
            pet = await animal.bunny(); break;
        case "cat":
            pet = await animal.cat(); break;
        case "dog":
            pet = await animal.dog(); break;
        case "fox":
            pet = await animal.fox(); break;
        case "koala":
            pet = await animal.koala(); break;
        case "panda":
            pet = await animal.panda(); break;
        case "shiba":
            pet = await animal.shiba(); break;
        default: return;
    }
    console.log(pet);
    return pet;
}


// const express = require("express")
// const app = express()
//
// app.listen(3000)