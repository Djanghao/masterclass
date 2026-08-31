# scala solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4139899/](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4139899/)

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
```
object Solution {
  def numOfArrays(n: Int, m: Int, k: Int): Int = {
    val mod = 1000000007
    val mem = scala.collection.mutable.Map.empty[(Int, Int, Int), Long]

    def dfs(a: Int, b: Int, c: Int): Long = mem.getOrElseUpdate((a, b, c),{
      if(a == 0) {
        if(b == 0) 1L else 0L
      } else {
        val res = (dfs(a - 1, b, c) * c) % mod
        (c + 1 to m).foldLeft(res)((acc, d) => {
          (acc + dfs(a - 1, b - 1, d)) % mod
        })
      }
    })

    dfs(n, k, 0).toInt
  }

}
```