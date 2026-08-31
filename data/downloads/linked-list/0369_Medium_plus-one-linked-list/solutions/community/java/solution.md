# Iterative Two-Pointers with dummy node Java O(n) time, O(1) space

**Author:** concept_drift
**Votes:** 188
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/84125/](https://leetcode.com/problems/plus-one-linked-list/solutions/84125/)

---

    public class Solution {
        public ListNode plusOne(ListNode head) {
            ListNode dummy = new ListNode(0);
            dummy.next = head;
            ListNode i = dummy;
            ListNode j = dummy;
            
            while (j.next != null) {
                j = j.next;
                if (j.val != 9) {
                    i = j;
                }
            }
            
            if (j.val != 9) {
                j.val++;
            } else {
                i.val++;
                i = i.next;
                while (i != null) {
                    i.val = 0;
                    i = i.next;
                }
            }
            
            if (dummy.val == 0) {
                return dummy.next;
            }
            
            return dummy;
        }
    }

- i stands for the most significant digit that is going to be incremented if there exists a carry
- dummy node can handle cases such as "9->9>-9" automatically