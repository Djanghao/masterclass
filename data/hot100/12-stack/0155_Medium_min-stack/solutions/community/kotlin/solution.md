# Kotlin Single Stack using LinkedList

**Author:** mustafaberkaymutlu
**Votes:** 7
**Link:** [https://leetcode.com/problems/min-stack/solutions/2474936/](https://leetcode.com/problems/min-stack/solutions/2474936/)

---

```
data class Node(
    val value: Int,
    val min: Int,
    var next: Node? = null
)

class MinStack {
    
    var top: Node? = null

    fun push(`val`: Int) {
        val min: Int = top?.min?.let { if (`val` < it) `val` else it } ?: `val`
        val node = Node(`val`, min)
        node.next = top
        top = node    
    }

    fun pop() {
        top = top?.next
    }

    fun top(): Int {
        return top?.value ?: throw IllegalStateException("Stack is empty.")
    }

    fun getMin(): Int {
        return top?.min ?: throw IllegalStateException("Stack is empty.")
    }
}
```