# Kotlin solution using stack

**Author:** darkInvite
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/4560314/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/4560314/)

---

# Intuition
Stack to reverse order

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * class ImmutableListNode {
 *     fun getNext(): ImmutableListNode? {} // return the next node.
 *     fun printValue() {} // print the value of this node.
 * };
 */

class Solution {
	fun printLinkedListInReverse(head:ImmutableListNode?) {
        val stack = Stack<ImmutableListNode>()
        var node = head
        while(node != null) {
            stack.push(node)
            node = node.getNext()
        }

        while(stack.isNotEmpty()) {
            val node = stack.pop()
            node.printValue()
        }
    }
}
```