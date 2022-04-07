// Create an array here
var myArray = [2, 4, 0, 8, 10];
// End of creating an array
// Create function below this line
function myArrayFunction(myItems) {
    var myItems = myArray;
    myItems[2] = 6;
    return myItems;
}
console.log(myArrayFunction(myArray));
// End of creating function
module.exports = myArrayFunction;