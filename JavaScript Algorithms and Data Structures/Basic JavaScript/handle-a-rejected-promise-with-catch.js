const makeServerRequest = new Promise((resolve, reject) => {

  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received").catch(error => {
    console.log(error)
  });
  }
});

makeServerRequest.then(result => {
  console.log(result);
});