Hi, you need to run the front-end and back-end server seperately. I've used the mature approach for building this application. Below are the instructions to run the front-end & back-end server.

Note: There is no back-end actually. But I've run JSON API that is acting like back-end (Advance approach)

### please run the command `npm install` for installing node_modules

### please run the command `npm run server` for running back-end server
Runs the app in the development mode.\
json-sever is used for api. server listen on PORT 5000
[http://localhost:5000](http://localhost:5000)


### please run command `npm start` for running front-end server
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### please run the command `npm run test` for test cases

## ------------------------------------------------------------------------------------------------

## Techniques I've used for building the Application:
- for API setup, I have used the JSON server
- I have used the functional components
- I have used Redux for State Managment
- For getting API, I have used Redux middleware that is `Redux thunk` with `axios`
- For making the UI, I have used `Material UI` that is React UI library
- Also, I have used Styled components
- For writing test cases, I have used `Jest`


## How we can more improve this Application
- First of all, I have used the latest concepts for building this Application.
- But if we still want to improve the application, then we need to imrpove the User experience usng the following techniques:
  -> also put login & signup option for user
  -> So if user will buy the product after signing up (login), then we can store the user's Cart information
  -> We can use Local Storage for storing the products information that user added into his Cart. 