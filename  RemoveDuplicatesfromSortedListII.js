/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0);
     dummy.next = head;
     prev = dummy;
     curr = head;
     while(curr){
         while(curr.next && curr.val== curr.next.val){
             curr= curr.next;
         }
         if(prev.next==curr){
             prev = prev.next
         }
         else prev.next = curr.next
         curr=curr.next;
     }
     return dummy.next;
 };
 