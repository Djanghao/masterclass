# ✔️ [Python3] MERGING, Explained

**Author:** artod
**Votes:** 1257
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/1826693/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/1826693/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

For simplicity, we create a dummy node to which we attach nodes from lists. We iterate over lists using two-pointers and build up a resulting list so that values are monotonically increased.

Time: **O(n)**
Space: **O(1)**

```
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        cur = dummy = ListNode()
        while list1 and list2:               
            if list1.val < list2.val:
                cur.next = list1
                list1, cur = list1.next, list1
            else:
                cur.next = list2
                list2, cur = list2.next, list2
                
        if list1 or list2:
            cur.next = list1 if list1 else list2
            
        return dummy.next
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**