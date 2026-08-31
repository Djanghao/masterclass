# Easy C# solution

**Author:** Daniil-Kienko
**Votes:** 6
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/3533733/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/3533733/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
public ListNode DeleteDuplicates(ListNode head) {
        var dummyHead = new ListNode(0, head);
        var prev = dummyHead;
        
        while (prev != null)
        {
            // Found value that has duplicates
            if (prev.next != null && prev.next.next != null && prev.next.val == prev.next.next.val)
            {
                var duplicateValue = prev.next.val;
                while (prev.next != null && prev.next.val == duplicateValue) prev.next = prev.next.next;
            }
            else prev = prev.next;
        }

        return dummyHead.next;
    }
```