# [Scala] - straightforward solution

**Author:** myeyeswereclosed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4345659/](https://leetcode.com/problems/find-champion-i/solutions/4345659/)

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
    def findChampion(grid: Array[Array[Int]]): Int = {
        grid.zipWithIndex.maxBy(_._1.count(_ == 1))._2
    }
}
```