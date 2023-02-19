const express = require("express");
const cors = require("cors");
// needed to interact with files / file system
const fs = require("fs");
const myApi = express();

myApi.use(cors());

// port set up
const port = process.env.port || 5000;

// function to "load" local json file for accesss / sending etc. Using fs.readFile
// added error handling if file not present
function getData() {
  try {
    const data = fs.readFileSync("./WebProject.JSON", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
}

// function to addItem to data file
function addItem(itemToAdd) {
  // read file
  const data = getData();
  // push new item to data array
  data.push(itemToAdd);
  // replace file with new version
  fs.writeFileSync("./WebProject.JSON", JSON.stringify(data));
  return;
}

// function to delete item from data file
function delItem(itemId) {
  // read file
  const dataFile = getData();
  // find item in data, if not found return unfound
  const isFound = dataFile.find((item) => itemId == item.id);
  // if found delete using splice
  if (isFound) {
    // find index of this item
    const index = dataFile.indexOf(isFound);
    // splice this index from data file array
    dataFile.splice(index, 1);

    // update file
    fs.writeFileSync("./WebProject.JSON", JSON.stringify(dataFile));
    return true;
  }
  // if not found return false for later handling
  return false;
}

// function to editItem in data file
// accepts item data param
function editItem(editedItem) {
  // read file
  const dataFile = getData();
  // find item via id (confirm in array)
  const isFound = dataFile.find((item) => editedItem.id == item.id);
  // if found edit it
  if (isFound) {
    // "overwrite" itme in arr. Find index, splice and add new version
    const index = dataFile.indexOf(isFound);
    dataFile.splice(index, 1, editedItem);

    //update file
    fs.writeFileSync("./WebProject.JSON", JSON.stringify(dataFile));
    return true;
  }
  // if not found in file return false to handler
  return false;
}

// Handle simple get request. Confirm working
myApi.get("/", (req, res) => {
  res.json("All good here!");
  console.log("Happy happy");
});

// Handle request to ./api - display JSON file data
myApi.get("/api", (req, res) => {
  const data = getData();
  res.json(data);
});

// handle request to get specific data
myApi.get("/:id", (req, res) => {
  const dataFile = getData();
  res.json(
    dataFile.find((item) => {
      return req.params.id == item.id; // seach dataFile for object with id: sent in request param
    })
  );
});

// Handle PUT request to add json data to existing file
myApi.put("/api/:newItem", (req, res) => {
  //take sent data from req, parse back to js object
  const newItem = JSON.parse(req.params.newItem);
  // call addItem func with newItem object to add it
  addItem(newItem);

  // confirm action to client
  res.send("File updated");
});

// Handle Delete request. Sending item id in request
myApi.delete("/api/:itemId", (req, res) => {
  const itemId = req.params.itemId;

  const result = delItem(itemId);

  // confirm action done (dependant upon return from delItem func (true/false))
  result
    ? res.send("Item removed, file updated")
    : res.send("Item not found, no changes made");
});

// Handle edit request via patch
// req has new version of object we wish to edit (would be done via frontend code to take data input by user and create complete object to send.)
myApi.patch("/api/:editedItem", (req, res) => {
  const item = JSON.parse(req.params.editedItem);
  const result = editItem(item);

  // confirm result of request
  result
    ? res.send("File updated")
    : res.send("Error in update, no changes made");
});

// Fire up the server
myApi.listen(port, console.log("Listening started"));
