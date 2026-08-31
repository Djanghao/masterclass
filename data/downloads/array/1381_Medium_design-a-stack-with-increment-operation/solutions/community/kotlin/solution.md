# O(1) Kotlin Solution

**Author:** ganesh2shiv
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/3283049/](https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/3283049/)

---

```
class CustomStack(val maxSize: Int) {

    val inc = IntArray(maxSize)
    val stack = ArrayList<Int>(maxSize)

    fun push(x: Int) {
        if (stack.size < maxSize) {
            stack.add(x)
        }
    }

    fun pop(): Int {
        val i = stack.size - 1
        if (i < 0) return -1
        if (i > 0) inc[i-1] += inc[i]
        val last = stack.last() + inc[i]
        stack.removeAt(stack.size-1)
        inc[i] = 0
        return last
    }

    fun increment(k: Int, value: Int) {
        val i = minOf(k, stack.size) - 1
        if (i >= 0) inc[i] += value
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,`val`)
 */
```