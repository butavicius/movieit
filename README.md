# MOVIE IT! :movie_camera:

## What is this?

This is a [React Native](https://reactnative.dev/) application made with [Expo](https://docs.expo.io) toolchain as an assignment task for React Seals Academy full stack developer course.

Warning: This is my first React app and I only had 3 days to do it, so there is a lot of room for improvement. Do not consider it to be an example of any sort. [See what I mean here...](TODO.md)

### Platforms

- :heavy_check_mark: **Android** - Tested, runs OK
- :heavy_multiplication_x: **iOS** - Did not test. Who knows?
- :heavy_multiplication_x: **Web** - Does not work. Build fails due to `lottie-react-native` and `react-native-progress-circle` deps. 

## What does it do?

With MOVIE IT you can:

- Get lists of movies by various categories and genres.
- Get cool information such as user rating, who's the director, short overview etc.
- Watch a trailer.
- :boom:**PRO TIP:**:boom: Tap and hold a movie poster image while browsing to see user rating and title without leaving home screen.

## How does it work?

The app uses [The Movie DB](https://www.themoviedb.org/) API to get all the information about movies. Trailer previews are just embeded YouTube videos in [WebView component](https://docs.expo.io/versions/latest/sdk/webview/) of the App.

## How to run?

1. Install Expo App from [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US) or [App Store](https://apps.apple.com/us/app/expo-go/id982107779).
2. Go to this [Expo Project page](https://expo.io/@simonboot/movieit?release-channel=staging).

## How to install locally?

1.  Clone this repository:

```console
git clone https://github.com/simonboot/movieit.git
cd movieit
```

2. Get [The Movie DB](https://www.themoviedb.org/) API Read Access Token and put it in `./app/apiToken.js` file. See [sample file](/app/api/apiToken.sample.js) for inspiration.

3. Install dependencies and launch [Expo](https://docs.expo.io) server:

```console
npm install
npm start
```

4. Follow instructions on screen.
