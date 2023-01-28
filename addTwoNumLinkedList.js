/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
var addTwoNumbers = function(l1, l2) {
    let s1=" ";
    // let s2="";
    while(l1 && l2){
        s1.concat(l1.val);
        l1=l1.next;
    }
    console.log(s1);
};