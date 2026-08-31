# Java 0ms beats 100%

**Author:** rocky144
**Votes:** 6
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/893286/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/893286/)

---

```
class Solution {
    public void printLinkedListInReverse(ImmutableListNode head) {
        if (head==null) return;
        printLinkedListInReverse(head.getNext());
        head.printValue();
    }
}
```