# Kotlin TreeSet solution

**Author:** agent-10
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5384990/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5384990/)

---

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun minRectanglesToCoverPoints(points: Array<IntArray>, w: Int): Int {
        val ts = TreeSet(points.map { it[0] })
        var ans = 0
        var curr = ts.firstOrNull()
        while (curr != null) {
            ans++
            curr = ts.higher(curr + w)
        }
        return ans
    }
}
```