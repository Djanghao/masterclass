# Optimally Finding Maximum Sum of Three Non-Overlapping Subarrays in JavaScript

**Author:** crazyycoder805
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/5081813/](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/5081813/)

---

# Intuition
To find the maximum sum of three non-overlapping subarrays of length k, we can use dynamic programming to efficiently compute the sums of all possible subarrays. By iterating through the array and keeping track of the maximum sums for each possible combination, we can determine the optimal solution.
# Approach
Initialize arrays to store the cumulative sums of the input array and to keep track of the starting indices of the maximum sum subarrays.
Compute the cumulative sum of the input array.
Iterate through the array to find the maximum sum subarray for each possible starting index.
Compute the total sum for each combination of three non-overlapping subarrays and keep track of the maximum sum and corresponding indices.
Return the indices of the three non-overlapping subarrays with the maximum sum.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```
var maxSumOfThreeSubarrays = function(nums, k) {
    let n = nums.length;
    let sum = Array(n + 1).fill(0);
    let left = Array(n).fill(0);
    let right = Array(n).fill(0);
    let bestLeft = Array(n).fill(0);
    let bestRight = Array(n).fill(0);
    let maxSum = 0;
    let result = [];

    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }

    let total = sum[k] - sum[0];
    for (let i = k; i < n; i++) {
        if (sum[i + 1] - sum[i + 1 - k] > total) {
            total = sum[i + 1] - sum[i + 1 - k];
            left[i] = i + 1 - k;
        } else {
            left[i] = left[i - 1];
        }
    }

    total = sum[n] - sum[n - k];
    right[n - k] = n - k;
    for (let i = n - k - 1; i >= 0; i--) {
        if (sum[i + k] - sum[i] >= total) {
            total = sum[i + k] - sum[i];
            right[i] = i;
        } else {
            right[i] = right[i + 1];
        }
    }

    for (let i = k; i <= n - 2 * k; i++) {
        total = sum[i + k] - sum[i];
        if (total + sum[left[i - 1] + k] - sum[left[i - 1]] + sum[right[i + k] + k] - sum[right[i + k]] > maxSum) {
            maxSum = total + sum[left[i - 1] + k] - sum[left[i - 1]] + sum[right[i + k] + k] - sum[right[i + k]];
            result = [left[i - 1], i, right[i + k]];
        }
    }

    return result;
};

```