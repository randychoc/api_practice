# API_Practice

## Build With
- NodeJS
- Express
- MongoDB

## Development
1. Clone the repository and change directory.
```
git clone https://github.com/randychoc/api_practice.git
cd api_practice
```

2. Install npm dependencies
```
npm install
```
3. Remember to have MongoDB installed
- Download [MongoDB Community Server](https://www.mongodb.com/try/download/community)

4. Run the app locally
```
npm start
```

**How Did I Develop It:**
---
1) nodejs and express
    - `npm i express -S`
2) nodemon, Controllers and Routes
    - `npm i nodemon -D`
    - folders: controllers and routes
3) mongodb, mongoose y Models
    - `npm i mongoose -S`
    - It's necessary to have MongoDB installed on your computer (mongod)
    - db: api_practice
    - folder: models
4) get, body-parser or express, post, Postman
    - `npm i body-parser -S`
    - Since Express 4.16.0 we can use `express.urlencoded({extended: true})` and `express.json()` instead of `bodyParser.urlencoded({extended: true})` and `bodyParser.json()`
    - Noted: Is not necessary to install Body-Parser. 
    - Use of the Postman Tool for requests. [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
5) put, delete
    - 

<!-- ## Live URL -->
<!-- [react](https://reactjs.org/) -->
<!-- ## How Did I Develop It -->