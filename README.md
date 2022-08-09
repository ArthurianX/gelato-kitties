# Gelato Coding Challenge

https://user-images.githubusercontent.com/2720451/183600331-4051debb-36ff-49a7-b05c-c42f40fb8288.mp4

## Packages and their purpose

I've added extra packages to the project for quality of life and better/faster development:

-   prettier (code formatting)
-   lint-staged (runs code formatting every commit)
-   sass (to use scss files, much better)
-   ChakraUI (React UI Component library)

I wanted to wrap the cryptokitties API in a GraphQL wrapper and consume it like that for the demo, but as time is of the essence, I'll simply use fetch and some logic.

### Some notes:

-   Responsiveness: is mainly handled by Chakra UI (their grid, instead of writing flex poetry), I had to convince the tab to horizontally scroll, which isn't really nice to look at, but for the purpose of this demo it works
-   TypeScript: Added basic interfaces and types to components, no need for something more in the scope of this project
-   Categorization: you'll see I extracted some static taxonomy, as the v2 API didn't have clear documentation to do something more dynamic
-   Pagination: Pretty basic again, your run of the mill page state and the functional component to drive it
-   Light / Dark: Handled beautifully (and saved in localStorage) by ChakraUI, doing this from scratch with media queries and React is not worth it given the library

### ChakraUI

Something I just started to play with, I found it two weeks ago and I'm using to create my bio site [arthur.kovacs.is](https://arthur.kovacs.is)
<img width="1919" alt="image" src="https://user-images.githubusercontent.com/2720451/183603147-2710708e-0567-4f92-a0bf-6d441e3bbef6.png">

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
