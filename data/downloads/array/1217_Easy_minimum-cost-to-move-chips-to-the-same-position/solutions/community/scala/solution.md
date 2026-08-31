# Easy Optimal Scala Solutions .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/5291912/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/5291912/)

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
    def minCostToMoveChips(position: Array[Int]): Int = {
        val even =position.count(_%2==0)
        Math.min(even,position.length-even)
    }
}
```