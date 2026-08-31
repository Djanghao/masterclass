# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/5681141/](https://leetcode.com/problems/largest-subarray-length-k/solutions/5681141/)

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
```java []
public int[] largestSubarray(int[] nums, int k) {
    // Initialize the starting index of the largest subarray
    int startIndex = 0;

    // Iterate over possible starting indices of subarrays of length k
    for (int i = 1; i <= nums.length - k; i++) {
        // Compare the current subarray with the largest subarray so far
        for (int j = 0; j < k; j++) {
            if (nums[i + j] > nums[startIndex + j]) {
                startIndex = i;
                break;
            } else if (nums[i + j] < nums[startIndex + j]) {
                break;
            }
        }
    }

    // Extract the subarray of length k starting from startIndex
    int[] result = new int[k];
    for (int i = 0; i < k; i++) {
        result[i] = nums[startIndex + i];
    }

    return result;
}
```
```javascript []
var largestSubarray = function(nums, k) {
    const n = nums.length;
    let startIndex = 0;
    
    // Iterate over the array to find the starting index of the largest subarray
    for (let i = 1; i <= n - k; i++) {
        // Compare the current largest subarray with the new subarray starting at index i
        for (let j = 0; j < k; j++) {
            if (nums[startIndex + j] < nums[i + j]) {
                startIndex = i;
                break;
            } else if (nums[startIndex + j] > nums[i + j]) {
                break;
            }
        }
    }
    
    // Slice the array to return the largest subarray
    return nums.slice(startIndex, startIndex + k);
};
```
```typescript []
function largestSubarray(nums: number[], k: number): number[] {
    const n = nums.length;
    let startIndex = 0;

    // Iterate to find the subarray that starts at the largest value
    for (let i = 1; i <= n - k; i++) {
        for (let j = 0; j < k; j++) {
            if (nums[startIndex + j] < nums[i + j]) {
                startIndex = i;
                break;
            } else if (nums[startIndex + j] > nums[i + j]) {
                break;
            }
        }
    }

    // Return the subarray of length k starting from startIndex
    return nums.slice(startIndex, startIndex + k);
};
```