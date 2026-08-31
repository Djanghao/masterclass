# [Kotlin/Python] Using 2 stacks: stPush and stPop - O(1) each operations - Clean & Concise

**Author:** hiepit
**Votes:** 33
**Link:** [https://leetcode.com/problems/implement-queue-using-stacks/solutions/1455090/](https://leetcode.com/problems/implement-queue-using-stacks/solutions/1455090/)

---

**Python**
```python
class MyQueue:

    def __init__(self):
        self.stPush = []
        self.stPop = []

    def push(self, x: int) -> None:
        self.stPush.append(x)
        
    def pop(self) -> int:
        self.peek()
        return self.stPop.pop()

    def peek(self) -> int:
        if len(self.stPop) == 0:
            while self.stPush:
                self.stPop.append(self.stPush.pop())
        return self.stPop[-1]

    def empty(self) -> bool:
        return len(self.stPop) + len(self.stPush) == 0
```

**Kotlin**
```kotlin
class MyQueue() {
    val pushStack = Stack<Int>()
    val popStack = Stack<Int>()

    fun push(x: Int) {
        pushStack.push(x)
    }

    fun pop(): Int {
        peek()
        return popStack.pop()
    }

    fun peek(): Int {
        if (popStack.isEmpty()) {
            while (!pushStack.isEmpty()) {
                popStack.add(pushStack.pop())
            }
        }
        return popStack.peek()
    }

    fun empty(): Boolean {
        return pushStack.isEmpty() && popStack.isEmpty()
    }
}
```
**Complexity**
- Time: `O(1)` in Amortized in each operation
- Space: `O(N)`