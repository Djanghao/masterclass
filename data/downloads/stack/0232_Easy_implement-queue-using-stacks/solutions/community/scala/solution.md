# Not effective but easy to understand Scala solution

**Author:** GeneralLee200
**Votes:** 1
**Link:** [https://leetcode.com/problems/implement-queue-using-stacks/solutions/2050301/](https://leetcode.com/problems/implement-queue-using-stacks/solutions/2050301/)

---

```
class MyQueue() {

  var mainStack = new scala.collection.mutable.Stack[Int]()
  var bufStack = new scala.collection.mutable.Stack[Int]() // Used only to push new element

  def push(x: Int): Unit = {
    for (_ <- 0 until mainStack.length) {
      bufStack.push(mainStack.pop())
    }
    
    mainStack.push(x)

    for (_ <- 0 until bufStack.length) {
      mainStack.push(bufStack.pop())
    }

  }

  def pop(): Int = mainStack.pop()

  def peek(): Int = mainStack.top

  def empty(): Boolean = mainStack.isEmpty

}
```