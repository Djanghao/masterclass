# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/3682553/](https://leetcode.com/problems/super-washing-machines/solutions/3682553/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findMinMoves(machines: Array[Int]): Int = {
      val total = machines.sum
      if (total % machines.length != 0) -1
      else {
        val avg = total / machines.length
        machines.foldLeft((0, 0)) { case ((cnt, max), load) =>
          (cnt + load - avg, math.max(math.max(max, math.abs(cnt)), load - avg))
        }._2
      }
    }
}
```