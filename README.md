# Random-Phone-Number-Generator
Random-Phone-Number-Generator

## Hosted Frontend Applictation
* https://random-generator-web-app.herokuapp.com/

## API 
* https://ten-digit-phone-no-generator.herokuapp.com/phone-numbers/all-files


## Technologies Used

#### Backend
* NodeJS
* Express
* Postgres
* Babel
* Chai 
* Mocha
* Supertest

#### Frontend
* React


## Installation
1.  Git clone this repository `https://github.com/Balogundell/Random-Phone-Number-Generator.git`
2.  Change your directory `Random-Phone-Number-Generator`
3.  Install all dependencies `npm install`
4.  Start the app `npm run start`
5.  Navigate to `localhost:3000` on postman to test the endpoints
6.  Run server test with `npm run test`

## Endpoints
* [POST] /api/phone-numbers/ - To generate phone numbers.
* [GET] /api/phone-number/all-files - Get all phone-number files generated.
* [GET] /api/phone-number/all-files/:file - To get all the phone numbers in a file.
