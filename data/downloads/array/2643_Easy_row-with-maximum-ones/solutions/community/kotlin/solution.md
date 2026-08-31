# simple

**Author:** aaeer
**Votes:** 0
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/4349313/](https://leetcode.com/problems/row-with-maximum-ones/solutions/4349313/)

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
class Solution {
    fun rowAndMaximumOnes(mat: Array<IntArray>): IntArray {
        var count = 0
        var res = intArrayOf(0,0)
        for (i in 0 until mat.size) {
            count = 0
            for (j in 0 until mat[0].size) {
                if (mat[i][j] == 1) {
                    count ++
                }
            }
            if (count > res[1]) {
                res[0] = i
                res[1] = count
            }
        }
        return res
    }
}
```