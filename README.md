# MyReads Project - Frontend Web Developer Nanodegree

The original repository provided by Udacity can be found [at the following link](https://github.com/udacity/reactnd-project-myreads-starter). Udacity provided the HTML and CSS code, but left the implementaiton of React open for students to complete. 

## What is MyReads?

MyReads is a simple book-tracking application. Users have three bookshelves - Currently Reading, Want to Read, and Read. Books can be placed on any of these shelves, or removed entirely. To do so, click on the green icon next to any book and choose one of the options from the drop down list. THe book moves to the specified shelf automatically without requiring the user to reload their page. 

To search for books, select the green plus icon in the bottom right of the screen. This takes users to the search page. Here you can search for books to add to one of the bookshelves. 

**Note:** It is not possible to search for *every* possible search time and receive results. Whitelisted search terms are specifically set up in the SEARCH_TERMS.md file. As such, only searching on one of the terms in this file will yield results. 

## Dependencies

To run the webite, users must:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* `react-router-dom` is used in the project for routing between pages.
* The project came with `booksAPI` file which is the backend API being used to fetch books. 
