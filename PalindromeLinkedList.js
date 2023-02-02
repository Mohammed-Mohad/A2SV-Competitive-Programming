/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    slow = head;
    fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    prev = null;
    current = slow;
    while (current) {
        let next = current.next;
        current.next = prev
        prev = current;
        current = next;
    }
    while (prev) {
        if (head.val != prev.val) return false;
        head = head.next
        prev = prev.next

    }
    return true;
}
