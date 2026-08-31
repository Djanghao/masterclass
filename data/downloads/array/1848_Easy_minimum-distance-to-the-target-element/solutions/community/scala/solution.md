# best solution and easy to understand

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/5759624/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/5759624/)

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
```scala []
object Solution {
    def getMinDistance(nums: Array[Int], target: Int, start: Int): Int = {
        var max= Double.PositiveInfinity
        for (i <- 0 until nums.length)
        {
         if (nums(i) == target){
           if (Math.abs(i - start)< max){
            max= Math.abs(i - start)
           }
         }
        }
        return max.toInt
    }
}
```