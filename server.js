// Import Express
const express = require('express');
const app = express();
const port = 8000;

//Faker Import
// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);

//Create User
const createUser = () => {
    const user = {
        password: faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.datatype.uuid
    }
    return user
}
const newUser = createUser();

//Create Company
const createCompany = () => {
    const company = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return company
}
const newCompany = createCompany()
// Routes

app.get('/api/users/new', (req, res)=>{
    res.json(newUser)
})

app.get('/api/company/new', (req, res)=>{
    res.json(newCompany)
})

app.get('/api/user/company', (req,res)=>{
    const newUserAndCompany = {...newUser, ...newCompany}
    res.json(newUserAndCompany)
})

// Listener (need this)
app.listen(port, ()=> console.log(`Listening on port: ${port}`))