# Scala solution

**Author:** acamillo
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-circular-queue/solutions/1459307/](https://leetcode.com/problems/design-circular-queue/solutions/1459307/)

---

```
class MyCircularQueue(capacity: Int) {

    val entries = Array.ofDim[Int](capacity)
    var size = 0
    var tail = 0
    var head = 0

    def enQueue(value: Int): Boolean = 
      if (isFull) false
      else {
        entries(tail) = value
        tail = (1 + tail) % capacity
        size += 1
        true
      }

    def deQueue(): Boolean = 
      if (isEmpty()) false
      else {
        head = (1 + head) % capacity
        size -= 1
        true
      }

    def Front(): Int = if (size == 0) -1 else entries(head)
    def Rear(): Int = if (isEmpty) -1 else entries(backOne(tail))
    def isEmpty(): Boolean =  size == 0
    def isFull(): Boolean =  size == capacity

    private def backOne(value: Int) = if (value == 0) capacity - 1 else (value - 1)
}
```