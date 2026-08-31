# Python || Easy Clean Solution.

**Author:** dilmurat-aliev
**Votes:** 5
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/3971467/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/3971467/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def deleteDuplicatesUnsorted(self, head: ListNode) -> ListNode:
        cnt = defaultdict(int)
        tmp = head
        while tmp:
            cnt[tmp.val] += 1
            tmp = tmp.next
        
        res = None
        while head:
            if cnt.get(head.val) == 1:
                if not res:
                    res = tmp = head
                else:
                    tmp.next = head
                    tmp = tmp.next
            head = head.next
        if tmp:
            tmp.next = None
        return res
```
![catty.png](./images/0.png)
