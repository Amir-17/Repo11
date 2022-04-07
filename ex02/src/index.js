// Only change code below this line
var myStr = "Paragon is the best!";
function useMethods(str) {
    var myReverse = [...str];
    
    return {
        myReverse,
        countCharacters
    };
};
useMethods(myStr);
// Only change code above this line
module.exports = useMethods;