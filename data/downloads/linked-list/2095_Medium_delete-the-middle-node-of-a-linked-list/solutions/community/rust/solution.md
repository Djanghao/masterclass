# Simplest solution ever with Explanation (Beats 99.17%)

**Author:** user5545De
**Votes:** 5
**Link:** [https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/4683645/](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/4683645/)

---

# Approach
The simplest way to solve this problem is to :
1. locate the middle of the list using the tortoise & hare algorithm such that the slow will always point to the required middle node 
2. at each point just keep track of the node previous to slow
3. Now, you simply need to set few pointers which can be done in 2 lines
4. VOILA!!

# Complexity
- Time complexity: O(N)

- Space complexity: O(1)

**PLEASE DO CONSIDER AN UPVOTE IF YOU LIKED & UNDERSTOOD THE SOLUTION/APPROACH :)**

# Code
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteMiddle(ListNode head) {
        if(head.next == null)
            return null;
        else if(head.next.next == null) {
            head.next = null;
            return head;
        }
        ListNode slow = head, fast = head, prev = null;
        while(fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
        slow.next = null;
        return head;
    }
}
```