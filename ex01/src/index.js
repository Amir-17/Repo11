// Create an array here
var myArra = [2, 4, 0, 8, 10];
// End of creating an array
// Create function below this line
function myArrayFunction(myItems) {
    myItems[2] = 6;
    return myItems;
}
console.log(myArrayFunction(myArra));
// End of creating function
module.exports = myArrayFunction;