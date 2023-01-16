/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    stack = [];
    for(let i=0; i<tokens.length;i++){
        if(tokens[i]=="+" ||tokens[i]=="/" ||tokens[i]=="*" ||tokens[i]=="-" ){
            a = stack.pop();
            b = stack.pop();
            if(tokens[i]=="+"){
                sum = a + b
                stack.push(sum);
                
            }
           else if(tokens[i]=="-"){
                diff= b - a
                stack.push(diff)
                
            }
            else if(tokens[i]=="*"){
                mult = a * b
                stack.push(mult)
              
            }
          else if(tokens[i]=="/"){
               div = Math.trunc(b / a)
               stack.push(div)
              
            }
        }
        else{
            stack.push(+tokens[i]);
        }
    } 
  return stack[0]
  };