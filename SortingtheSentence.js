/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const arr= s.split(" ")
    const sortedSentence=[]
    for(var i=0; i<arr.length; i++){
        const index = arr[i].slice(-1)-1;
        sortedSentence[index] = arr[i].slice(0,-1); 
    }
    return sortedSentence.join(" ");
};
