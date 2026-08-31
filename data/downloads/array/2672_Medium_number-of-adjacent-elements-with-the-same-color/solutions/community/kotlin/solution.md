# Kotlin O(n)

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3497938/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3497938/)

---

# Approach
We keep track of color of adjecent neighbours as go through `queries` and make changes. We check color for `i - 1` and `i + 1` both **before** and **after** each change and update our count of number of adjecent elements of color variable `count` and set `res[i]` to `count`

Time complexity is $$O(q)$$ where $$q$$ is the size of queries, and space complexity is $$O(n)$$

# Code
```
class Solution {
    fun colorTheArray(n: Int, queries: Array<IntArray>): IntArray {
        val nums = IntArray(n)

        val res = IntArray(queries.size)
        var count = 0
        for ((i, q) in queries.withIndex()) {
            val (e, c) = q
            
            if (e > 0 && nums[e] != 0 && nums[e - 1] == nums[e]) count--
            if (e < n - 1 && nums[e] != 0 && nums[e + 1] == nums[e]) count--

            nums[e] = c

            if (e > 0 && nums[e] != 0 && nums[e - 1] == nums[e]) count++
            if (e < n - 1 && nums[e] != 0 && nums[e + 1] == nums[e]) count++

            res[i] = count
        }

        return res
    }
}
```