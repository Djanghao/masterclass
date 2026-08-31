# My accepted java code. used recursion.

**Author:** whoji
**Votes:** 816
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/11030/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/11030/)

---

    public class Solution {
        public ListNode swapPairs(ListNode head) {
            if ((head == null)||(head.next == null))
                return head;
            ListNode n = head.next;
            head.next = swapPairs(head.next.next);
            n.next = head;
            return n;
        }
    }