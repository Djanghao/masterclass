# Scala - dfs with stack, 100% faster

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/5180189/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/5180189/)

---

```
object Solution {
  def minScore(n: Int, roads: Array[Array[Int]]): Int = {
    val adj = roads.flatMap {
      case Array(a, b, c) => List(a -> (b, c), b -> (a, c))
    }.groupMap(_._1)(_._2)


    var ans = Int.MaxValue
    val vis = Array.fill(n + 1)(false)
      
    val stack = collection.mutable.Stack[(Int, Int)]()
    stack.push((1, 0))
  
  

    def dfs(node: Int, minCost: Int): Unit = {
      while (stack.nonEmpty) {
        val (currNode, currCost) = stack.pop()
        vis(currNode) = true

        for ((next, cost) <- adj(currNode)) {
          ans = ans min cost

          if (!vis(next) ) { 
            stack.push((next, cost))
          }
        }
      }
    }

    dfs(1, 0) 
    ans
  }
}


```