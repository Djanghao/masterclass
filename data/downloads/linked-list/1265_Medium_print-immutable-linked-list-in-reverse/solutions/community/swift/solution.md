# Swift

**Author:** prashant1207-
**Votes:** 4
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/622257/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/622257/)

---

```
class Solution {
    func printLinkedListInReverse(_ head: ImmutableListNode?) {
        guard let head = head else {
            return
        }
        
        printLinkedListInReverse(head.getNext())
        head.printValue()
    }
}
```