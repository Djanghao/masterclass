# C# Solution for Add Two Numbers II Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3776004/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3776004/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to perform the addition of two numbers represented as linked lists by reversing the input lists, adding the corresponding digits, and then reversing the result back to the original order.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Reverse both input linked lists using the ReverseLinkedList function.
1. Initialize a dummy head node and a current node to build the resulting linked list.
1. Iterate through the reversed linked lists and add the corresponding digits along with any carry from the previous addition. Update the carry and insert the sum digit into the new linked list.
1. After iterating through both linked lists, check if there is any remaining carry. If so, add it as a new node to the result.
1. Reverse the resulting linked list using the ReverseLinkedList function to restore the original order.
1. Return the reversed linked list, which represents the sum of the two numbers.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(max(N, M)), where N and M are the lengths of the input linked lists. We iterate through the lists once to reverse them and once to perform the addition.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is O(1) since we are modifying the input lists in place and using a constant amount of additional space for variables.

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
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        ListNode reversedL1 = ReverseLinkedList(l1);
        ListNode reversedL2 = ReverseLinkedList(l2);
        
        ListNode dummyHead = new ListNode(0);
        ListNode curr = dummyHead;
        int carry = 0;
        
        while (reversedL1 != null || reversedL2 != null || carry != 0) {
            int sum = carry;
            if (reversedL1 != null) {
                sum += reversedL1.val;
                reversedL1 = reversedL1.next;
            }
            if (reversedL2 != null) {
                sum += reversedL2.val;
                reversedL2 = reversedL2.next;
            }
            
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            carry = sum / 10;
        }
        
        return ReverseLinkedList(dummyHead.next);
    }

     private ListNode ReverseLinkedList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
}
```