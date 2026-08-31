# Beats 99.06%

**Author:** nikborzunov
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/5634302/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/5634302/)

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
function search(nums: number[], target: number): boolean {
    const { length } = nums;
    let left = 0;
    let right = length -1;

    while (left < right) {
        const mid = Math.floor((right - left)/2)+left;

        if (nums[left] === target) {
            return true;
        }
        if (nums[right] === target) {
            return true;
        }
        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] === nums[right]) {
            right = right -1;
        } else if (nums[mid] > nums[right]) {
            left = mid +1;
        } else {
            right = mid;
        };
    };

    const start = left;
    left = 0;
    right = length -1;

    if (target <= nums[right] && target >= nums[start]) {
        left = start;
    } else {
        right = start -1;
    }

    while (left <= right) {
        const mid = Math.floor((right-left)/2)+left;

        if (target === nums[mid]) {
            return true;
        }
        if (target > nums[mid]) {
            left = mid +1; 
        }
        if (target < nums[mid]) {
            right = mid -1;
        }
    };

    return false;
};
```