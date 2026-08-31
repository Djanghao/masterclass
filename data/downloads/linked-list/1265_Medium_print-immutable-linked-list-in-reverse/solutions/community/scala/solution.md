# Simple recursive Scala solution. Runtime: 530 ms. Memory: 53.3 MB

**Author:** rowan_k
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/3016376/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/3016376/)

---



# Code
```
/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * class ImmutableListNode{
 *     def printValue(): Unit = {} // print the value of this node.
 *     def getNext(): ImmutableListNode = {} // return the next node.
 * };
 */

object Solution {
    def printLinkedListInReverse(head: ImmutableListNode): Unit = {
        if(head == null) return
        printLinkedListInReverse(head.getNext)
        head.printValue
    }
}
```