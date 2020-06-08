### Covid-19 Tracker

[![Netlify Status](https://api.netlify.com/api/v1/badges/f4880046-11b5-4b4e-b33b-3951d6e7be0f/deploy-status)](https://app.netlify.com/sites/covid-19-data-viz/deploys)

[Outline](#Outline) | [Installation Instructions](#Installation_Instructions) | [Tech stack](#Tech_stack) | [Example use](#Example_use) | [Future work](#Future_work)

## <a name="Outline">Outline</a>

A React app which uses a public [Covid-19 API](https://covid19.mathdro.id/api) to track relevant stats and visualise important data. You can view the live site [here](https://covid-19-data-viz.netlify.app/).

## <a name="Installation_Instructions">Installation Instructions</a>

### Prerequisite setup:
- Clone this repo to your local machine and cd into it
- Run `npm install` to get the necessary dependencies

### Running the site

Development:
- Run the server with command `npm start`
- Visit `http://localhost:3000` to use the site

Production:
- View the live site [here](https://covid-19-data-viz.netlify.app/)

### Testing
- All tests can be run with command `npm test`

## <a name="Tech_stack">Tech stack</a>

Front-end:
- JavaScript
- React (bootstrapped with Create React App)
- HTML & CSS
- Material UI

Testing:
- Jest, Enzyme

Data:
- https://covid19.mathdro.id/api

## <a name="Example_use">Example use</a>

See examples of the site below. One can view global data taken daily, or country-specific data taken cumulatively. 

![Global](https://i.imgur.com/7PPyKoJ.png)

![Country specific](https://i.imgur.com/yfRu3bp.png)

## <a name="Future_work">Future work</a>

On a revisit of the project, I would like to add an about page, and some more data visualization options, such as a multi-country comparison.