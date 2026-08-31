# Easy

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/802080/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/802080/)

---

```
    fun deleteNodes(head: ListNode?, m: Int, n: Int): ListNode? {
        var M = head
        var N = head
        while (N != null) {
            for (i in 1..m + n) {
                if (i < m) M = M?.next
                N = N?.next
            }
            M?.next = N
            M = N
        }
        return head
    }
```