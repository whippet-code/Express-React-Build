// Custom fetch call putting all of the get/post/put/delete methods into one reusable helper function

// params - method to use, data to pass (not required for delete/get)
function customFetch(method, data) {
  let url = "http://localhost:5000";
  // switch depending upon method
  switch (method) {
    case "GET":
      //code get call here
      console.log("GET call to " + url);
      return;
    case "PUT":
      //code put call here
      console.log("PUT call to " + url + "/api");
      return;
    case "POST":
      //code post call here
      console.log("POST call to " + url + "/api/" + data);
      return;
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
