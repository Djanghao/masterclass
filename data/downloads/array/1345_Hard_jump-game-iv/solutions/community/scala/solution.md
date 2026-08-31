# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3263556/](https://leetcode.com/problems/jump-game-iv/solutions/3263556/)

---

# Approach
Follows the official java editorial solution. This questions is BFS and level traversal
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minJumps(arr: Array[Int]): Int = {
        
        import scala.collection.mutable.{Map, ListBuffer, Set, Queue}

        val map = Map[Int, ListBuffer[Int]]()
        val visited = Set[Int]()

        for((number, indices) <- arr.zipWithIndex) map.getOrElseUpdate(number, new ListBuffer[Int]) += indices
        
        val queue = Queue[Int](0)
        var jumps = 0
        val lastIndex = arr.length - 1


        while(queue.nonEmpty) {

            val size = queue.length

            for(_ <- 0 until size) {
                
                val node = queue.dequeue

                if(node == lastIndex) return jumps

                for {
                    child <- map(arr(node))
                    if !visited.contains(child)
                } {
                    visited += child
                    queue.enqueue(child)
                }

                map(arr(node)).clear

                val previous = node - 1
                val next = node + 1

                if(previous >= 0 && !visited.contains(previous)) {
                    visited += previous
                    queue.enqueue(previous)
                }

                if(next >= 0 && !visited.contains(next)) {
                    visited += next
                    queue.enqueue(next)
                }

            }

            jumps += 1

        }

        jumps
    }
}
```