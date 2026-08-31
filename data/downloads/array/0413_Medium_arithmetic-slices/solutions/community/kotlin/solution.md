# Kotlin beginner friendly

**Author:** skulagin
**Votes:** 1
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/4522507/](https://leetcode.com/problems/arithmetic-slices/solutions/4522507/)

---

# Approach
- If the array has less than 3 elements, it's not possible to have an arithmetic slice
- Initialize variables to store the result and the current length of the arithmetic slice
- Iterate through the array starting from the third element (index 2)
- Calculate the differences between the current and previous elements and previous two elements
- Check if the current difference is equal to the previous difference (indicating an arithmetic slice). 
- If it is we increment the length of the current arithmetic slice. And add the current length to the result (represents the number of new slices ending at the current element).
- Otherwise reset the length to 0

# Complexity
- Time complexity: $$O(N)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun numberOfArithmeticSlices(nums: IntArray): Int {
        if (nums.size < 3) return 0
        var result = 0
        var length = 0
        for (i in 2..nums.lastIndex) {
            val diff = nums[i] - nums[i - 1]
            val prevDiff = nums[i - 1] - nums[i - 2]
            if (diff == prevDiff) {
                length++
                result += length
            } else length = 0
        }
        return result
    }
}
```