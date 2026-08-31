# 1-line 91-character solution :-)

**Author:** zheka1980
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4505761/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4505761/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun minOperations(nums: IntArray): Int {
        return nums.groupBy{it}.map{it.value.size}.sumOf{when{it==1 -> return -1 else -> (it+2)/3}}
    }
}
```