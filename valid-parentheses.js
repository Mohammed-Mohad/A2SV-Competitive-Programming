/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const Stack =[];
    var arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "{") {
        Stack.push("}");
      } else if (arr[i] == "(") {
        Stack.push(")");
      } else if (arr[i] == "[") {
        Stack.push("]");
      }
      else if (Stack.length==0 || Stack.pop()!= arr[i]){
          return false;
      };
    }
    for (let j = arr.length-1; j>0 ;j--) {
      if (arr[j] == Stack[Stack.length-1]) {
        Stack.pop();
      } 
      
    }
    if (Stack.length==0 ) return true;
    else return false;
    
    };