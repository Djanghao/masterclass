# Easy solution in just three lines .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5081309/](https://leetcode.com/problems/freedom-trail/solutions/5081309/)

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
    def findRotateSteps(ring: String, key: String): Int = {
        var dp=Array.fill[(Int,Int)](1)(0,0)//Pair Array To Have Tuples Like Binding Array[(Int,Int)](1)(0,0), The elements inside array under subarray is 0 .
        for(i <- key) dp = (for((_, j) <- ring.zipWithIndex.filter(_._1 == i)) yield (dp.map(t => t._1 + math.abs(j - t._2).min(ring.length - math.abs(j - t._2)) + 1).min, j)).toArray
        dp.minBy(_._1)._1
    }
}
```