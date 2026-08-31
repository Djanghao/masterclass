# Simple Solution

**Author:** csivaprakash
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412738/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412738/)

---

# Approach
Take the reference of the head node into currentNode and traverse the currentNode untill its next node be null. 

If the next node value is not a zero then the next node value can add to the currentNode's value and change the currentNode next reference to the next node's next reference. 

If the next node value is a zero then we move to the next node.
 
If the next node value is 0 and it is the last node. Make the currentNode's next to be a null.

www.instagram.com/sivaprakashktm

# Code
```

public class Solution {
    public ListNode MergeNodes(ListNode head) {
        ListNode currentNode = head;

        while (currentNode != null && currentNode.next != null) {
            if (currentNode.next.val != 0) {
                currentNode.val += currentNode.next.val;
                currentNode.next = currentNode.next.next;
            }
            else {
                currentNode = currentNode.next;
            }

            if (currentNode.next != null && currentNode.next.val == 0 && currentNode.next.next == null) {
                currentNode.next = null;
            }
        }
        return head;
    }
}
```