module.exports = function(){
  var greetedNames = [];

  var greet = function (req, res){
  console.log(req.params.username);
   res.send("Hello, " + req.params.username);
   var userName = req.params.username;
   greetedNames.push(userName);

 };

  var greeted = function(req, res){
      res.send(greetedNames);

  };

  var counter = function(req, res){
    // res.send("amount");
    res.send(greetedNames.length);

  };
  return {
    greet,
    greeted,
    counter
  }
}
