# Writing Kotlin in a Elegent fashion

**Author:** darkhorse007d
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4356284/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4356284/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
I used sumBy to directly calculate the sum of the values without the need for an external variable.
I replaced the loop body with a lambda expression, making the code more concise.
I removed unnecessary variables and used it to represent the loop variable.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
    fun minTimeToVisitAllPoints(points: Array<IntArray>): Int {
        return (1 until points.size).sumBy{
            maxOf(
                abs(points[it][0] - points[it-1][0]) ,
                abs(points[it][1] - points[it-1][1])
            )
        }
    }
}
```