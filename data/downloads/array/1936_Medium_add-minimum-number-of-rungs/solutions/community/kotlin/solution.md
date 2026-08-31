# Kotlin simple solution (easy to understand)

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/5152805/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/5152805/)

---

![Screenshot 2024-05-13 212912.png](./images/0.png)


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun addRungs(rungs: IntArray, dist: Int): Int {
        var currentHight = 0
        var count = 0
        for (height in rungs) {
            val diffHight = height - currentHight
            if (diffHight > dist) {
                count += (diffHight - 1) / dist
            }
            currentHight = height
        }
        return count
    }
}
```