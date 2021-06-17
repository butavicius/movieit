# MOVIE IT!
## What is this?
This is an [React Native](https://reactnative.dev/) application made with [Expo](https://docs.expo.io) toolchain as an assignment task for React Seals Academy full stack developer course.

## What does it do?
With MOVIE IT you can:

 - Get lists of movies by various categories and genres.
 - Get cool information such as user rating, who's the director, short overview etc.
 - Watch a trailer.
 - **PRO TIP:** Tap and hold a movie poster image while browsing to see user rating and title without leaving home screen.

## How does it work?
The app uses [The Movie DB](https://www.themoviedb.org/) API to get all the information about movies. Trailer previews are just embeded YouTube videos in [WebView component](https://docs.expo.io/versions/latest/sdk/webview/) of the App.

## How to install locally?
 1. Clone this repository:
 ```console
git clone https://github.com/simonboot/movieit.git
cd movieit 
 ```

2. Get [The Movie  DB](https://www.themoviedb.org/) API Read Access Token and put it in `./app/apiToken.js` file. See `./app/apiToken.sample.js` for inspiration.

3. Install dependencies and launch [Expo](https://docs.expo.io) server:
```console
npm install
npm start
```
