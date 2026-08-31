# Go Solution(with stacking defer)

**Author:** 0xedb
**Votes:** 3
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/915629/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/915629/)

---

```go
func printLinkedListInReverse(head ImmutableListNode) {
    for head != nil {
        defer head.printValue()
        head = head.getNext()
    }
}
```