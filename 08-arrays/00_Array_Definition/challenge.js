module.exports.newArray = function(pen,notebook,mouse,ruler) {   
  return [pen,notebook,mouse,ruler];
};
module.exports.firstAndLast = function(hat) {
  var lastIndex = hat.length - 1;
  return [hat[0],hat[lastIndex]]; 
};