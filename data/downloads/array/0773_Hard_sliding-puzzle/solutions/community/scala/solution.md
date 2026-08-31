# BFS solution in scala

**Author:** maciejwadowski
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/6082998/](https://leetcode.com/problems/sliding-puzzle/solutions/6082998/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    val validBoard = "123450"

    def swappableElements(idx: Int): List[Int] = {
        if (idx == 0) List(1,3)
        else if (idx == 1) List(0,2,4)
        else if (idx == 2) List(1,5)
        else if (idx == 3) List(0,4)
        else if (idx == 4) List(1,3,5)
        else List(2,4)
    }

    import scala.collection.immutable.Queue
    def slidingPuzzle(board: Array[Array[Int]]): Int = {
        @scala.annotation.tailrec
        def bfs(todo: Queue[(Int,String)], checked: Set[String], min: Int): Int = {
            if (todo.isEmpty) min
            else if (checked.contains(todo.head._2)) bfs(todo.tail, checked, min)
            else if (todo.head._2 == validBoard) 
                bfs(todo.tail, checked + todo.head._2, if (todo.head._1 < min) todo.head._1 else min)
            else {
                val input = todo.head._2
                val idx = input.indexOf('0')
                val toSwap = swappableElements(idx)
                val newChars = toSwap.map(x => {
                    val arr = input.toArray
                    val element = arr(x)
                    arr(idx) = element
                    arr(x) = '0'
                    (todo.head._1+1,arr.mkString)
                })
                bfs(todo.tail.enqueueAll(newChars), checked + input, min)
            }
        }
        val mappedBoard = board.map(_.mkString).mkString
        val result = bfs(Queue((0,mappedBoard)), Set(), Int.MaxValue)
        if (result == Int.MaxValue) -1 else result
    }
}
```