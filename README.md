# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TL;DR

To get it installed and launched:

* Download or Clone the Repository
* install all dependencies with `npm install`
* start the server with `npm start`
* After starting the server hit the URL:http://localhost:3000/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## How it works

App consist of three routes.\


'/': where initial select box with two buttons available.\
On Selecting of any store, by default 'sub' category products and price will be displayed in the table.\
On click of category button (sub/non sub), respective product and price will be displayed in the table.\
Each cell in the table is editable.\
Functionality of submit and reset button is not available.\

'/video': on load of this web page, a video will be displayed with the respective product name\
and price.\

'Error404': If user try to hit any url other then ('/' & '/video'), a error page with\ 
the redirect link to home page will be render.

## EndPoints

There are three Rest API end points available in endPoint.js file : 
1. To get all the store: 'getAllRestaurants'.\
2. To get product price per category and per store: 'getProductsPerCategory'.\
3. To get the price details on video page for category2: 'priceUrl'.\
To make rest api call ,fetch function has been used. 

## Error Handling

If any error occurred while making request , The standard error  message will be displayed\
on browser console.\

## FrontEnd UI

This project was build with [Semantic UI](https://react.semantic-ui.com/).
This is the UI Framework to build interactive user interfaces by using React functinality.Installation instructions are provided in the Usage section of [Semantic UI](https://react.semantic-ui.com/).
