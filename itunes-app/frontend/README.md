iTunes Media Search API 

This is a simple fullstack iTunes media search application using React and Express.
This app interfaces with the iTunes Search API
(https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1) and allows users to search for their desired content within the iTunes Store. Users can also add the media they have searched to their 'favorites', which allows users to be able to store items they want to come back to at a later time and after many different searches.


Table of Contents:

Usage
Installation
Testing
Security Measures
Deployment


Usage:

To use this app simply open it into the browser using the link below in the 'Deployment' section. 
In the Search input the user can enter a name of an artist, film, author, etc. 
In the Media input, the user can select which media type they would like to search, or can default to searching 'All'.
The user can then simply click the 'Select' button and the results will show below. It is limited to 25 items, intedned for users to not be overwhelmed by too many items.
Below every search result is an 'Add Favorite' button that can be clicked to add to a favorites list.
The user can scroll down to the bottom of the Search Results to access their list of Favorites.

Installation:

To install and run this app on your local machine, please follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal window in the root directory of the project.
3. Run npm install to install the necessary dependencies including node modules.
4. Access the backend server by running cd backend in the terminal.
5. Start the backend server by running npm start in the root directory of the project.
6. Open another terminal window in the client directory of the project.
7. Run npm install to install the necessary dependencies.
8. Access the frontend server by running cd frontend in the terminal.
9. Start the frontend server by running npm start in the client directory of the project.
10. Open your web browser and navigate to http://localhost:3000 to view the app.

Testing:

To test this app on your local machine, please follow these steps:

1. Follow the installation instructions above.
2. Open a terminal window in the client directory of the project.
3. Run npm test to run the tests for the frontend of the app.
4. Open another terminal window in the root directory of the project.
5. Run npm test to run the tests for the backend of the app.

Security Measures:

To ensure the security of the application, the Helmet middleware has been included. The Helmet middleware is easy to use and can be added to an Express application with a single line of code. By using Helmet, it enables setting the HTTP headers for the application to recommended secure values, which helps to prevent security vulnerabilities that could be exploited by attackers. Overall, the use of Helmet provides an additional layer of security to the application and helps to ensure that user data is kept safe.
(Source: https://blog.logrocket.com/using-helmet-node-js-secure-application/)

Deployment:

** Note to reviewer: After a mentor call with Chad, since Heroku is no longer free to use, he said any Heroku-related deployment tasks are no longer required. Therefore at this time I do not have the app deployed as I am still trying to find a way to deploy this application, and when I can I will put the link, but with so little time in this bootcamp left and without a different means of allowing us to deploy it, I have no choice but to leave it out. 
