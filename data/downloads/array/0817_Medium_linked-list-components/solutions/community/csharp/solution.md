# c# : Easy Solution

**Author:** rahul89798
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/4601307/](https://leetcode.com/problems/linked-list-components/solutions/4601307/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

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
    public int NumComponents(ListNode head, int[] nums) {
        var components = 0;

        while(head != null) {
            if(nums.Contains(head.val)) {
                components++;
                while(head != null && nums.Contains(head.val))
                    head = head.next;
            }
            else {
                head = head.next;
            }
        }

        return components;
    }
}
```