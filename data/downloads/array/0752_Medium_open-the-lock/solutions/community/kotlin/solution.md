# Kotlin BFS, readable (data class + extensions)

**Author:** dzmtr
**Votes:** 4
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/1539134/](https://leetcode.com/problems/open-the-lock/solutions/1539134/)

---

Data class to represent lock code:
```
private data class LockCode(val first: Int, val second: Int, val third: Int, val forth: Int) {
    override fun toString(): String {
        return "$first$second$third$forth"
    }
}
```
Each lock we can change by 1, increasing till 9 or decreasing to 0:
```
fun Int.next(): Int = if (this == 9) 0 else (this + 1)
fun Int.prev(): Int = if (this == 0) 9 else (this - 1)
```

To generate all possile single lock changes we need: 
(increment each by 1) + (decrement each by 1) => total 8 variants
```
private fun LockCode.generateNextLevel(): List<LockCode> =
        listOf(
                copy(first = first.next()),
                copy(second = second.next()),
                copy(third = third.next()),
                copy(forth = forth.next()),
                copy(first = first.prev()),
                copy(second = second.prev()),
                copy(third = third.prev()),
                copy(forth = forth.prev())
        )
```
And finally the solution is simple BFS with level counter, where we skip deadends and already seen codes:
```
fun openLock(deadends: Array<String>, target: String): Int {
    var count = 0
    val notValid = deadends.toSet()

    val queue: Queue<LockCode> = LinkedList()
    queue.offer(LockCode(0, 0, 0, 0))

    val used = mutableSetOf<LockCode>()

    while (queue.isNotEmpty()) {
        repeat(queue.size) {
            val newCode = queue.poll()
            if (newCode.toString() == target) {
                return count
            }
            if (newCode.toString() !in notValid) {
                val next = newCode.generateNextLevel()
                next.forEach { code ->
                    if (code.toString() == target) {
                        return count + 1
                    }

                    if (code.toString() !in notValid && used.add(code)) {
                        queue.add(code)
                    }
                }
            }
        }
        count++
    }

    return -1
}
```