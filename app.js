const express = require('express');
const app = express();
const registers= [
  { id: 1, firstName: "sofareti", secondName: "maiga", thirdName: "kubwela" },
  { id: 2,firstName:"Etanga",secondName:"Mashauri",thirdName:"Etanga"},
  { id:3,firstName:"Deonatus0",secondName:"Beda",thirdName:"Mwilanga" },
];
const port=process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('<h1>Welcome Back to Node Tutorial</>');
});
app.get('/api/registers', (req, res) => {
    res.send(registers);
});
app.get('/api/registers/:id', (req, res) => {
    const register = registers.find(C => C.id == parseInt(req.params.id));
    if(!register)res.status(404).send("<h1>The Id you are loking are not associated with any data</h1>");
    res.send(register);

});
app.listen(port, (req, res) => {
    console.log('The Application is running through port: '+port);
});
