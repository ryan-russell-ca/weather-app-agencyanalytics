# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Build and Deploy to GCP

```bash
$ docker build --tag=weather-app-dependencies -f ./Dockerfile.app-dependencies .

$ docker build --tag=weather-app-builder -f ./Dockerfile.app-builder .

$ docker build --tag=weather-server-dependencies -f ./Dockerfile.server-dependencies .

$ docker build --tag=weather-server-builder -f ./Dockerfile.server-builder .

$ docker build \
    --tag=gcr.io/agencyanalytics/weather-app:latest  \
    --build-arg  WEATHER_SECRET=4e9010b5521fb984330040d06d8a8cdd  \
    --build-arg  HOST_ORIGIN=http://weather.ryanrussell.ca  -f  ./Dockerfile  .

$ docker push gcr.io/agencyanalytics/weather-app:latest

$ gcloud run deploy agencyanalytics --image gcr.io/agencyanalytics/weather-app:latest
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
