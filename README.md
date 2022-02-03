# moviesApp
# 3pc Coding Challenge React

## Prerequisites

**You’ll need to have Node >= 8.9 on your local development machine**.<br>
If needed install NodeJS from their [website](https://nodejs.org/en/).

Run `npm i` in the root of the project to install the needed packages.

## Start Coding

You can run the following commands:

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br />
You will see the build errors and lint warnings in the console.

## Your Challenge

Create an app to search and find films.

The app consists of **two pages**:

- The **search** consists of an input field and a list of the films found. The films should be sorted by **popularity**.
- The **film page** shows details of the selected film.

You can orient yourself on the given design, expand it or even change it.
The design of the detail page is up to you.

If the detail page is reloaded, it should be loaded correctly.

## Requirements

Use the [The Movie Space API](https://api.themoviedb.org/3/discover/movie?with_keywords=9882&&with_genres=18&&api_key=process.env.REACT_APP_API_KEY) for your requests to show a list of the films.


Use the [The Movie Details API](https://api.themoviedb.org/3/movie/{Movie_ID}?api_key=process.env.REACT_APP_API_KEY) for show details for each movie. 
ex. (https://api.themoviedb.org/3/movie/157336?api_key=process.env.REACT_APP_API_KEY)

In `.env.local` is some helpful stuff:

REACT_APP_MOVIE_DB_API=https://api.themoviedb.org/3
REACT_APP_API_KEY=f9b47a06d4fc5c436ca2806b587f72cb
REACT_APP_IMAGE_BASE_PATH=https://image.tmdb.org/t/p

- you have to attach the `API Key` to every request.
- the `path to your API`.
- the `path to movie images`. You can read how to use it [here](https://developers.themoviedb.org/3/getting-started/images).

You can use all values ​​via `process.env.{KEY}`, e.g. you can use the `API Key` with `process.env.REACT_APP_API_KEY`.