# Scala

**Author:** kamikumakun
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-stack/solutions/2856790/](https://leetcode.com/problems/min-stack/solutions/2856790/)

---

```
class MinStack() {
    
    import scala.collection.mutable.Stack
    
    val stack = Stack[(Int, Int)]()
    
    def push(`val`: Int) {
        
        val minElement = if(stack.nonEmpty && stack.top._2 < `val`) stack.top._2 else `val`
        val newElement = (`val`, minElement)
        
        stack.push(newElement)
    }

    def pop() = stack.pop

    def top(): Int = {
        if(stack.nonEmpty) stack.top._1
        else throw new NoSuchElementException("Stack is empty")
    }

    def getMin(): Int = {
        if(stack.nonEmpty) stack.top._2
        else throw new NoSuchElementException("Stack is empty")
    }
	
}
```