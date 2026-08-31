# Kotlin O(n) Monotonically Decreasing Stack

**Author:** jschnall
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/2152673/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/2152673/)

---

I used a monotonically decreasing stack. Rather than doing an additional pass of the list to first get it's size, I decided to use a mutableList, and add 0's to start as each linkedList node is encountered. Depending on how memory is allocated, this could be less efficient than simply making 2 passes, but I'd have to test.

```
fun nextLargerNodes(head: ListNode?): IntArray {
    val result = mutableListOf<Int>()
    val stack = Stack<Pair<Int, Int>>() // (num, index) monotonic decreasing by num

    var ptr = head
    while (ptr != null) {
        while (stack.isNotEmpty() && stack.peek().first < ptr.`val`) {
            val index = stack.pop().second
            result[index] = ptr.`val`
        }
        stack.push(Pair(ptr.`val`, result.size))
        result.add(0)
        ptr = ptr.next
    }

    return result.toIntArray()
}
```