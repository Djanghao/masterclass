# Design circular deque. >:S

**Author:** Tran_Nhat_Gia_Huy_Codes
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5842538/](https://leetcode.com/problems/design-circular-deque/solutions/5842538/)

---

# Intuition
The problem requires implementing a circular deque with constant time insertions and deletions at both ends. The main challenge is to handle wrapping around at the boundaries of the deque, as well as efficiently managing insertions and deletions.

# Approach
We use a fixed-size array to represent the deque, and maintain two pointers, `front` and `rear`, to keep track of the current positions for insertion and deletion at both ends. The circular nature of the deque is achieved by updating the `front` and `rear` pointers modulo the capacity of the array. By using simple arithmetic, we can ensure that all operations (insert, delete, get front/rear) are done in constant time. The `size` variable helps in keeping track of the number of elements, and allows us to check if the deque is full or empty.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(k)$$

# Code
```scala []
class MyCircularDeque(_k: Int) {

    private val deque = new Array[Int](_k)
    private var front = 0
    private var rear = 0
    private var size = 0
    private val capacity = _k

    def insertFront(value: Int): Boolean = {
        if (isFull()) return false
        front = (front - 1 + capacity) % capacity
        deque(front) = value
        size += 1
        true
    }

    def insertLast(value: Int): Boolean = {
        if (isFull()) return false
        deque(rear) = value
        rear = (rear + 1) % capacity
        size += 1
        true
    }

    def deleteFront(): Boolean = {
        if (isEmpty()) return false
        front = (front + 1) % capacity
        size -= 1
        true
    }

    def deleteLast(): Boolean = {
        if (isEmpty()) return false
        rear = (rear - 1 + capacity) % capacity
        size -= 1
        true
    }

    def getFront(): Int = {
        if (isEmpty()) -1 else deque(front)
    }

    def getRear(): Int = {
        if (isEmpty()) -1 else deque((rear - 1 + capacity) % capacity)
    }

    def isEmpty(): Boolean = {
        size == 0
    }

    def isFull(): Boolean = {
        size == capacity
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * val obj = new MyCircularDeque(k)
 * val param_1 = obj.insertFront(value)
 * val param_2 = obj.insertLast(value)
 * val param_3 = obj.deleteFront()
 * val param_4 = obj.deleteLast()
 * val param_5 = obj.getFront()
 * val param_6 = obj.getRear()
 * val param_7 = obj.isEmpty()
 * val param_8 = obj.isFull()
 */
```