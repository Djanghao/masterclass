# JS implementation of two pass

**Author:** legarmor
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/4632192/](https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/4632192/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
JS version of https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/1398483/python-3-prefix-array-two-pass-quick-sort-explanation


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var binarySearchableNumbers = function(nums) {
    let count = 0

    prefix = new Array(nums.length).fill(false)
    prefixMax = nums[0]
    suffixMin = nums[nums.length -1]

    for (let i = 0; i < nums.length; i++) {
        prefix[i] = prefixMax <= nums[i]
        prefixMax = Math.max(prefixMax, nums[i])
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        prefix[i] = prefix[i] && suffixMin >= nums[i]
        if (prefix[i]) count += 1

        suffixMin = Math.min(suffixMin, nums[i])
    }
    
    return count
};
```