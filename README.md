# Project goals

The goal of this project is to give you practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

# Natural Language Processing.

NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve.

Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called MeaningCloud has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

The following steps were done to install and run the project:

`cd` into the new folder and run:

- `npm install`
-Install all the plugins and loaders needed for the project.
-The package.json file must include all the plugins in the dependencies and devDependencies section.

'npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin'

As these versions are not the latest versions, make sure to install them with:
-'npm i --legacy-peer-deps'

## Setting up the API

Getting ready to use the MeaningCloud API:

### Step 1: Signup for an API key

First, you will need to go [here](https://www.meaningcloud.com/developer/apis). Signing up will get you an API key.

### Step 2: Install the SDK

For MeaningCloud we donot need to install any SDK.

### Step 3: Environment Variables

Next we need to declare our API keys:

But there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package `npm install dotenv`. This will allow us to use environment variables we set in a new file
- [ ] Create a new `.env` file in the root of your project
- [ ] Go to your .gitignore file and add `.env` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:

```

API_KEY=**************************
```

- [ ] Add this code to the very top of your server/index.js file:

```
const dotenv = require('dotenv');
dotenv.config();
```

- [ ] Reference variables you created in the .env file by putting `process.env` in front of it, an example might look like this:

```
console.log(`Your API key is ${process.env.API_KEY}`);
```

...Not that you would want to do that. This means that our updated API credential settings will look like this:

// set MeaningCloud API credentials

 -'${process.env.API_KEY}&lang=auto&${reqType}=${req.body.input}'

#### Step 4: 
-'npm run build-dev' to build the project in development mode
-'npm run build-prod' to build the project in production mode
-'npm run start' to start the Server
- go to 'http://localhost:8080/' to run the Application
- The application should run successfully and the results should be displayed in the Results section.

##### Step 5 : Unit Testing using Jest Framework

Jest is a framework for testing JavaScript projects. We are interested in the unit-testing of our project. The Jest framework provides us the ability to create, and run unit tests. In general, unit testing means to test the functionality of each unit/component of a project. But, in our case, we will write tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input. Let's learn to add Jest to your project to handle unit-testing.

-install Jest by using npm install --save-dev jest
-You have to ensure that all your custom functions in src/client/js directory can handle error responses if the user input does not match API requirements. You will write tests in <function_name>.test.js or <function_name>.spec.js file, to be present in a __test__ folder. For each functionality, consider writing a separate test file. The __test__ folder should be present in the project directory.

In each test file, the general flow of the test block should be:

Import the js file to test
Define the input for the function. Note that, to keep it simple, we will not validate the input being provided to the test cases.
Define the expected output
Check if the function produces the expected output

-Configure an npm script named "test" in package.json to run your tests from the command line:
"scripts": {
    "test": "jest"
}

-Run the npm run test command.

##### Step 6 : Usage of Service Worker to provide support to the application if the server is shutdown

Add the Workbox webpack plugin and adjust the webpack.config.js file:

-'npm install workbox-webpack-plugin --save-dev'
- Change the webpack.config file by adding the output module as:
' output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },'
    
 - Change both the webpack.dev.js and webpack.prod.js
 - Register the Service Worker by adding code in 'index.html'
 -Now to test it. Stop your server and refresh your page. If your browser supports Service Workers then you should still be looking at your application. However, it has been served up by your Service Worker and not by the server.

