# Kotlin simplest implementation

**Author:** krnets
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-circular-queue/solutions/2623703/](https://leetcode.com/problems/design-circular-queue/solutions/2623703/)

---

```kotlin
class MyCircularQueue(k: Int) {
    private var queue = IntArray(k)
    private var head = 0
    private var tail = -1
    private var size = 0

    fun enQueue(value: Int): Boolean {
        if (isFull()) return false

        tail = (tail + 1) % queue.size
        queue[tail] = value
        size++

        return true
    }

    fun deQueue(): Boolean {
        if (isEmpty()) return false

        head = (head + 1) % queue.size
        size--

        return true
    }

    fun Front(): Int = if (isEmpty()) -1 else queue[head]

    fun Rear(): Int = if (isEmpty()) -1 else queue[tail]

    fun isEmpty(): Boolean = size == 0

    fun isFull(): Boolean = size == queue.size
}
```