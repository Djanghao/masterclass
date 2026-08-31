# Simple math solution JS || O(n) || O(1)

**Author:** dhnbroken
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4960749/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4960749/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Declare a variable to count the consecutive number
- If nums[i] !== nums[i - 1], increase the consecutive by 1
- Else set consecutive = 1
- Count will be increased by consecutive for each loop

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function (nums) {
    let count = nums.length,
        continues = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            count += continues;
            continues++;
        } else {
            continues = 1;
        }
    }

    return count;
};
```