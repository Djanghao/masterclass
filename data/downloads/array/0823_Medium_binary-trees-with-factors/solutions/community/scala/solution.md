# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-trees-with-factors/solutions/4209786/](https://leetcode.com/problems/binary-trees-with-factors/solutions/4209786/)

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
    def numFactoredBinaryTrees(arr: Array[Int]): Int = {
      val mod = 1000000007
      val sorted = arr.sorted
      val map = scala.collection.mutable.Map[Int, Long]()
      var res: Long = 0
      for (i <- arr.indices) {
        map.put(sorted(i), 1)
        for (j <- 0 until i)
          if (sorted(i) % sorted(j) == 0 && map.contains(sorted(i) / sorted(j)))
            map.put(sorted(i), (map(sorted(i)) + map(sorted(j)) * map(sorted(i) / sorted(j))) % mod)
        res = (res + map(sorted(i))) % mod
      }
      res.toInt
    }
}
```