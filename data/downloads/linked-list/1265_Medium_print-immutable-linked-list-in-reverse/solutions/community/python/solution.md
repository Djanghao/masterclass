# Python Easy Recursive Way

**Author:** simplexity
**Votes:** 9
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/1240132/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/1240132/)

---

```
class Solution:
    def printLinkedListInReverse(self, head: 'ImmutableListNode') -> None:
        if head is not None:
            self.printLinkedListInReverse(head.getNext())
            head.printValue()
```