# Hyperiondev - Express React app

### Web project Tracker

To keep a log of projects built, allowing creation of new projects, updates to existing projects and removal of projects.
A JSON file holding the data is updated via fetch api calls from the react app, via an express server.

## Below are the api calls created for handling the fetch requests

### API usage and sample requests

api allows for adding, reading, updating and deleting of file data.
Please note all type of data required for each.

The following requests work via REST Client VS Code extension. However they should work equally well using Postman.

#### The included file http.rest can be used for testing with VS Code - REST Client extension

## Start up the server

Once files are on local system, download all required dependencies via npm install in terminal.
To run the server type "npm run devStart"
this will run the server with nodemon

## api requests

server runs on localhost port 3000

### Request file for testing server (via REST Client extension (or POSTMAN))

GET http://localhost:3000/api

This will result in the WebProject file being sent to client

### Request specific file from id

Specific get request for object with id = value sent

GET http://localhost:3000/1 // where 1 is the item id

### Add item to the file

Put request to add item to file (sending json) api expects json data

PUT http://localhost:3000/api/{"id":3, "title":"Developer Portfolio", "description": "Showcase of developers work", "URL": "www.supernice.dev"}

Data sent should be a complete json object with id key value pair.

## Request item deletion

Delete request with item id sent in request

DELETE http://localhost:3000/api/4 // where 4 is item id

## Request update of item already in file

Edit item request patch req (expects json data)
NB- this request requires a json object to be sent with corresponding id to the one to be updated. All data for this object in file array will be updated with the object sent.

PATCH http://localhost:3000/api/{"id":3, "title":"Developer Portfolio site", "description": "Showcase of developers work", "URL": "www.superamazing.dev"} // updates item with id:3
