# not move next when negtive

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/5339184/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/5339184/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode SortLinkedList(ListNode head) {
        var current = head;
        while(current != null && current.next != null){
            var next = current.next;
            if (next.val >= 0){
                current = next;
            }else {
                current.next = next.next;
                next.next = head;
                head = next;
            }
        }
        return head;
    }
}
```