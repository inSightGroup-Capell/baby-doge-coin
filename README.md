# Babydoge Coin Tracker

This repo is for monitoring the current price and ammount of babydoge coins in a wallet. It is meant to be shown in a public office space.

## Overview

The project is a react app with a interagted datapipline fetching the data on a periodically lvl. To change the layout you have to change the react components looking like html. The backend fetching happens in the .jsx component. Here you will find the urls and variables.

## Project setup

After cloning the repository onto your machine via git you need to make sure to install `npm`. This repo uses the version `8.1.*`. Next you want to install all necessary dependencies. If you are in the rigth folder just run:

`npm install`

After this step you need to add enviorment variables like the token for the API. Create a file in the `src/` folder `.env` with the following content:

```
REACT_APP_API_TOKEN=*******************
```

Now your project is set up!

## Build the app

Run `npm start` to start the app on your machine.

Run `npm run deploy` to deploy the app on the web.

## Changes

So if you want to change something first set up the project, then change the variables, then deploy the app again and push your changes to GitHub.
