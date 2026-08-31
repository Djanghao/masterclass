# Dart solution

**Author:** jhfsa1
**Votes:** 0
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/4967876/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/4967876/)

---

# Intuition
Find the one before kth node by iterate over the nodes.
Find the one before kth node from end by continue iterating from finding kth start.
Swap the value of next nodes.

# Approach
iterate from 1 to k and save in `start` variable the head.next.
save the start pointer to another var.
continue looping until null and start another var `end` until the last node.
swapping `start.next.val` with `end.next.val`.

# Complexity
- Time complexity:
O(n) -  n number of nodes.

- Space complexity:
O(1)


# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? swapNodes(ListNode? head, int k) {
    final result = ListNode(0);
    result.next = head;
    ListNode? start = result;
    ListNode? end = result;
    for (int i = 1; i < k; i++) {      
      start = start?.next;
    }
    ListNode? temp = null;
    temp = start?.next;
    while (temp != null) {
      temp = temp.next;
      if (temp != null) {
        end = end?.next;
      }
    }
    int t = start!.next!.val;
    start.next!.val = end!.next!.val;
    end.next!.val = t;
    return result.next;
  }
}
```