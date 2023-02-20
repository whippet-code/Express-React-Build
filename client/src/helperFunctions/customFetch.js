// Custom fetch call putting all of the post/put/delete methods into one reusable helper function

// params - method to use, data to pass (not required for delete/get)
function customFetch(method, data) {
  let url = "http://localhost:5000";
  // switch depending upon method
  switch (method) {
    // Call to add a new project
    case "PUT":
      // convert input to send to json-string
      //JSON.stringify(data);
      // create call url for PUT req
      url = `${url}/api/${data}`;
      console.log("PUT call to " + url);
      fetch(url, { method: "PUT" }).then(() =>
        console.log("Project added to collection")
      );
      return;
    // Call to edit project
    case "PATCH":
      // convert input to send to json-string
      JSON.stringify(data);
      // create call url for PATCH req
      url = `${url}/api/${data}`;
      console.log("PATCH call to " + url);
      // fetch(url, { method: "PATCH" }).then(() =>
      //   console.log("Project updated")
      // );
      return;
    // Call to delete a project
    case "DELETE":
      //code delete call here
      console.log("DELETE call to " + url + "/api/" + data);
      url += `/api/${data}`;
      fetch(url, { method: "DELETE" }).then(() =>
        console.log("Project Removed")
      );
      return;
    default:
      //Should never reach this code, but just in case.
      console.error("Problem in custom fetch call, check method type.");
      break;
  }
}

export default customFetch;
