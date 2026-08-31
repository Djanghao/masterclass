# Scala dfs solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/3596005/](https://leetcode.com/problems/number-of-provinces/solutions/3596005/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findCircleNum(isConnected: Array[Array[Int]]): Int = {
      val n = isConnected.length
      val visited = Array.fill(n)(false)

      def dfs(city: Int): Unit = {
        visited(city) = true
        for (i <- 0 until n) if (isConnected(city)(i) == 1 && !visited(i)) dfs(i)
      }

      var count = 0
      for (i <- 0 until n) 
        if (!visited(i)) {
          dfs(i)
          count += 1
        }
      count
    }
}
```