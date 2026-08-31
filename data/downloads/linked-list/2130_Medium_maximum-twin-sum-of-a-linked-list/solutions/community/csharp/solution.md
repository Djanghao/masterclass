# C# Two Pointers + Stack 100%

**Author:** LIYINXUE
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3532449/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3532449/)

---

# Approach
Use slow and fast pointers to find the mid point, while adding the first half into a stack.
Then calculate the sum of the next element in the second half and the top element in stack. 

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

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
    public int PairSum(ListNode head) {
        ListNode l1 = head, l2 = head;
        Stack<int> s1 = new();
        while (l2 != null) {
            s1.Push(l1.val);
            l1 = l1.next;
            l2 = l2.next.next;
        }
        int max = 0;
        while (s1.Count > 0) {
            max = Math.Max(max, s1.Pop() + l1.val);
            l1 = l1.next;
        }
        return max;
    }
}
```