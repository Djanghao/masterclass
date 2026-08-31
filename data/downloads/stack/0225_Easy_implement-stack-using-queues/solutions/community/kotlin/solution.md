# Kotlin | easy-solution

**Author:** BrijGwala
**Votes:** 4
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/2011082/](https://leetcode.com/problems/implement-stack-using-queues/solutions/2011082/)

---

```
class MyStack() {
    val first: Queue<Int>
    val second: Queue<Int>

    init {
        first = ArrayDeque<Int>()
        second = ArrayDeque<Int>()
    }

    fun push(x: Int) {
        while (first.isNotEmpty()) second.add(first.poll())
        first.add(x)
        while (second.isNotEmpty()) first.add(second.poll())
    }

    fun pop(): Int {
        return first.poll()
    }

    fun top(): Int {
        return first.peek()
    }

    fun empty(): Boolean {
        return first.isEmpty()
    }
}
```