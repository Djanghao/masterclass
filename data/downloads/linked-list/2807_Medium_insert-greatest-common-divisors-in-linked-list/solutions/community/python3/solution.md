# Python 3   ||   4 lines,  iteration   ||   T/S: 94%  /  67%

**Author:** Spaulding_
**Votes:** 30
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/3868906/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/3868906/)

---

```
class Solution:
    def insertGreatestCommonDivisors(self, head: ListNode) -> ListNode:

        node = head
        
        while node.next:
           node.next, node = ListNode(gcd(node.val, node.next.val
                                         ), node.next), node.next
        return head
```
[https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/submissions/1291825816/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/submissions/1291825816/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ count of nodes in the linked list.