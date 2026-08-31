# Easy to understand with explanation beats 100%

**Author:** user5545De
**Votes:** 4
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/4651494/](https://leetcode.com/problems/odd-even-linked-list/solutions/4651494/)

---

# Approach
The entire problem is divided into the following scenarios:
- If the list contains 0,1 or 2 nodes, then no need to do any change
- From 3rd node onwards, which is obviously at an odd position, define 4 pointers
    - ```odd``` to create the list of odd position nodes
    - ```even``` to create the list of even position nodes
    - ```evenStart``` to mark the start of list of even position nodes
    - ```curr``` to traverse all nodes in the list
- Instead of using a variable for counting the current position of integer type (which uses more space), I used a boolean type and switched its value for each node which the ```curr``` pointer traversed as its obvious that if the current position is odd then the next will be even.
- At the end, ensure to make the connections properly before returning the result
    - ```odd.next = evenStart``` makes the end of the odd position nodes list point to the start of even position nodes list
    - ```even.next = null``` makes the end of even position nodes list point to null or the end of LL **or else it will form a cycle**.

**PLEASE DO PERFORM A DRY RUN TO UNDERSTAND THESE OPERATIONS IN-PLACE.**


# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

**PLEASE DO CONSIDER AN UPVOTE IF YOU LIKED AND UNDERSTOOD THE SOLUTION :)**

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
    public ListNode oddEvenList(ListNode head) {
        if(head == null || head.next == null || head.next.next == null)
            return head;
        ListNode odd = head, even = head.next, evenStart = even, curr = head.next.next;
        boolean flag = true;
        while(curr != null) {
            if(flag) {
                odd.next = curr;
                odd = curr;
            }
            else {
                even.next = curr;
                even = curr;
            }
            curr = curr.next;
            flag = !flag;
        }
        odd.next = evenStart;
        even.next = null;
        return head;
    }
}
```