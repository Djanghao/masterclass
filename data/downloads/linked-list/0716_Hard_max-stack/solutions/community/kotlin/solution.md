# PriorityQueue and ArrayDeque - Better time and space complexity than 100% of other Kotlin solutions

**Author:** seanjfarrell
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-stack/solutions/1929409/](https://leetcode.com/problems/max-stack/solutions/1929409/)

---

This may be higher level than some interviewers are looking for, but `PriorityQueue` and `ArrayDeque` can do a lot of the heavy lifting for us. You can have `PriorityQueue` sort from largest to smallest by using `compareBy { 0 - it }` during initialization. `ArrayDeque` is a bit trickier. I named it `stack`, but due to the implementation, I am always inserting and removing from the front. This is because when you call `ArrayDeque.remove(element)`, it will remove the *first* instance from the front.

```
class MaxStack() {
    
    val que = PriorityQueue<Int>( compareBy { 0 - it } )
    val stack = ArrayDeque<Int>()

    fun push(x: Int) {
        stack.addFirst(x)
        que.add(x)
    }

    fun pop(): Int {
        val output = stack.removeFirst()
        que.remove(output)
        return output
    }

    fun top(): Int {
        return stack.first()
    }

    fun peekMax(): Int {
        return que.peek()
    }

    fun popMax(): Int {
        val output = que.remove()
        stack.remove(output)
        return output
    }

}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
```