# scala greedy solution (sort + fold)

**Author:** mohamedabden21
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5241656/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5241656/)

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
    val minValue = -Math.pow(10, 9) - 1 // max value of w is 10^9
    def minRectanglesToCoverPoints(points: Array[Array[Int]], w: Int): Int = {
        points
            .map(_.head)
            .sorted
            .foldLeft((this.minValue, 0)) {
                case ((x1, count), x2) => {
                    if x2 - x1 <= w then (x1, count)
                    else (x2, count + 1)
                }
            }
            ._2
    }
}
```