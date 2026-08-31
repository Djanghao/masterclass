# Solution

**Author:** Tejasvi1412
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/6042274/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/6042274/)

---

# Intuition


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
where n is the number of nodes in the linked list. This is because the algorithm traverses the linked list in a single pass, checking pairs of nodes (the current node and the next node) and counting wins for even and odd indexed nodes. Since each node is processed once, the time complexity is linear.

- Space complexity: O(1)
as the algorithm uses a constant amount of extra space regardless of the input size. It only utilizes a few integer variables to keep track of the counts of wins for even and odd indexed nodes, and no additional data structures are used that would scale with the input size.

# Code
```java []
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
    public String gameResult(ListNode head) {
        int evenCountWins = 0;
        int oddCountWins = 0;

        ListNode evenNode = head;

        while(evenNode != null && evenNode.next!=null){
            if(evenNode.val > evenNode.next.val)
                evenCountWins++;
            else
                oddCountWins++;

            evenNode = evenNode.next.next;
        }

        return (evenCountWins > oddCountWins) ? "Even" : (oddCountWins > evenCountWins)?"Odd":"Tie";
    }
}
```