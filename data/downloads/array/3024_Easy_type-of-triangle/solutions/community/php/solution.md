# Fastest solution I found

**Author:** pozitronik
**Votes:** 0
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/5538987/](https://leetcode.com/problems/type-of-triangle/solutions/5538987/)

---

# Approach
First, check the edge case for equilateral triangles because this check is costless and cuts off sorting. This is the primary and sole optimization for otherwise straightforward code. Honestly, I can't say why this solution is the fastest, but it is even faster than direct comparisons.

- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return String
     */
    function triangleType($nums) {
        if ($nums[0] === $nums[1] && $nums[1] === $nums[2]) {
            return "equilateral";
        }

        sort($nums);

        if ($nums[0] + $nums[1] <= $nums[2]) {
            return "none";
        }

        if ($nums[0] === $nums[1] || $nums[1] === $nums[2] || $nums[0] === $nums[2]) {
            return "isosceles";
        }

        return "scalene";
    
    }
}
```