# C# Solution for Remove Nodes From Linked List Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5118603/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5118603/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to reverse the linked list, then iterate through it to identify and remove nodes with values less than the maximum value encountered so far, and finally reverse the modified linked list back to its original order.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Reverse the linked list to simplify the process of identifying and removing nodes with smaller values.
2.	Traverse the reversed linked list, keeping track of the maximum value encountered so far.
3.	Delete nodes with values less than the maximum value by adjusting pointers.
4.	Reverse the modified linked list back to its original order.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Reversing the linked list in the ReverseList function requires traversing all nodes once, resulting in a time complexity of O(n), where n is the number of nodes in the linked list.
\u2022	Iterating through the reversed linked list to remove nodes also requires traversing all nodes once, resulting in a time complexity of O(n).
\u2022	Therefore, the overall time complexity is O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	The space complexity is O(1) because the algorithm uses only a constant amount of extra space, regardless of the size of the input linked list. No additional data structures are used, and the modifications are made in place.
\u2022	Therefore, the overall space complexity is O(1).

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
    public ListNode RemoveNodes(ListNode head) {
        head = ReverseList(head);
        int maximum = 0;
        ListNode prev = null;
        ListNode current = head;
        
        while (current != null) {
            maximum = Math.Max(maximum, current.val);
            if (current.val < maximum) {
                ListNode deleted = current;
                current = current.next;
                if (prev != null) {
                    prev.next = current;
                }
                deleted.next = null;
            } else {
                prev = current;
                current = current.next;
            }
        }
        
        return ReverseList(head);
    }
    private ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        ListNode nextTemp = null;
        
        while (current != null) {
            nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        
        return prev;
    }
}
```