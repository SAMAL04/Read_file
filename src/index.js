const fs = require("fs");
fs.readFile("/sandbox/mytxt.txt",
function(err,data)
{
if(!err)
{
 console.log(data.toString());
}
else{
  console.error(err);

  return;
}
});

fs.readFile("/sandbox/mytxt.txt","utf-8",
function(err,data)
{
  if(!err)
  {
   console.log(data.toString());
  }
  else{
    console.error(err);
  
    return;
  }

});
