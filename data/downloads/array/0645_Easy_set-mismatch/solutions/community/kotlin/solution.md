# Kotlin Math solution with explanatory comments | O(1) space

**Author:** naXa777
**Votes:** 2
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/4608982/](https://leetcode.com/problems/set-mismatch/solutions/4608982/)

---

# Intuition

Thanks NeetCodeIO for the idea!

https://youtu.be/d-ulaeRBA64

# Approach

Do the math.

 - $$D - M = x$$
 - $$D^2 - M^2 = y$$,
    where $$D$$ = Duplicated, $$M$$ = Missing.

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code

```kt
infix fun Int.`**`(exponent: Int): Int = toDouble().pow(exponent).toInt()

class Solution {
    fun findErrorNums(nums: IntArray): IntArray {
        // The math solution is based on a system of equations:
        // {
        //   D - M = x,
        //   D^2 - M^2 = y
        // }

        var x = 0
        var y = 0
        for (i in 0 until nums.size) {
            x += nums[i] - i - 1
            y += (nums[i] `**` 2) - ((i + 1) `**` 2)
        }

        // Given that we know x and y now,
        // we are able to solve the system of equations to find D (duplicate) and M (missing):

        // 1st.
        // D = x + M
        
        // 2nd.
        // (x + M)^2 - M^2 = y
        //      ->
        // x^2 + M^2 + 2Mx - M^2 = y
        //      ->
        // 2Mx = (y - x^2)
        //      ->
        // M = (y - x^2) / 2x

        val missing = (y - (x `**` 2)) / (2 * x)
        val duplicate = x + missing
        return intArrayOf(duplicate, missing)
    }
}
```

# Screenshot

![image.png](./images/0.png)

