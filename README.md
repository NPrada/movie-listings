# movie-lisings
Simple react app to view the now playing movies.
Uses the Movie Data DB API

## How to run the project
 - clone the repo
 - `npm i`
 - `npm start`


## Overall Structure
I have 3 main react components within the app, a nav bar, a component that contains the movies list, and a component for each movie card

## App secrets
I added my api keys in a secrets file normally I would not have this file. Normally I would turn those into environment variables and add put them on the server where the app is hosted. I did this to make it simple to run the project.

## Images
The thumbnails use images at lower resolution than the ones in full scren to help with load times.
All of the images I used have alt text set on them to help screenreaders.