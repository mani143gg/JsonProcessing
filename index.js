
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening
const fs = require('fs');
const jsonFix = require('json-fixer')

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
  
     

  // Testing data scrape
  var result = fs.readFileSync('mani.json', 'utf8');
  var myarr = result.split('{"payload":');
  const changed = jsonFix(result);
  res.send(changed);
    // res.end();
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
}); 