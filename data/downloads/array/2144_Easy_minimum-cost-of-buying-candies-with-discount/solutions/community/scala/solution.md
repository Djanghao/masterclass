# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4263859/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4263859/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minimumCost(cost: Array[Int]): Int = {
      val sortedCost = cost.sorted
      val n = sortedCost.length
      (0 until n).filter(_ % 3 != n % 3).map(sortedCost(_)).sum
    }
}
```