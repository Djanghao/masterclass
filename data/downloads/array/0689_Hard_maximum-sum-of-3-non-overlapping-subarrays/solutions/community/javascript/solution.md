# 💥JS | Runtime beats 96.97%, Memory beats 93.94% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/5733714/](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/5733714/)

---

# Intuition
This intuition ensures that we efficiently find the maximum sum of three non-overlapping subarrays by leveraging precomputed sums and dynamic programming.

# Approach
Compute Subarray Sums:

Use a sliding window to compute the sum of every subarray of length k and store these sums in an array.

Dynamic Programming Arrays:

Use two dynamic programming arrays to keep track of the maximum sums and their starting indices for subarrays ending before or at a certain index:

left_max[i]: Maximum sum of a subarray ending at or before index i with length k.
right_max[i]: Maximum sum of a subarray starting at or after index i with length k.

Compute Results:

Iterate through possible middle subarrays and compute the maximum possible sum of three non-overlapping subarrays by combining the best subarrays from left_max and right_max.

Return the Indices:

Construct the result based on the indices of the maximum sum subarrays.
# Complexity
- Time complexity:
O(n), where n is the length of the input array. Each step (computing sums, updating dynamic programming arrays, and finding the optimal combination) is done in linear time.

- Space complexity:
O(n) for storing the sum and dynamic programming arrays.

# Code
```javascript []
const maxSumOfThreeSubarrays = (nums, k) => {
    const n = nums.length;
    const sum = new Array(n - k + 1).fill(0);

    // Compute the sum of all subarrays of length k
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    sum[0] = currentSum;
    for (let i = 1; i < sum.length; i++) {
        currentSum += nums[i + k - 1] - nums[i - 1];
        sum[i] = currentSum;
    }

    // Compute the best left subarray sums
    const left_max = new Array(sum.length).fill(0);
    let maxIndex = 0;
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] > sum[maxIndex]) maxIndex = i;
        left_max[i] = maxIndex;
    }

    // Compute the best right subarray sums
    const right_max = new Array(sum.length).fill(0);
    maxIndex = sum.length - 1;
    for (let i = sum.length - 1; i >= 0; i--) {
        if (sum[i] >= sum[maxIndex]) maxIndex = i;
        right_max[i] = maxIndex;
    }

    // Find the best combination of three non-overlapping subarrays
    let result = [];
    let maxSum = 0;
    for (let i = k; i <= sum.length - k; i++) {
        const leftIndex = left_max[i - k];
        const rightIndex = right_max[i + k];
        const totalSum = sum[leftIndex] + sum[i] + sum[rightIndex];
        if (totalSum > maxSum) {
            maxSum = totalSum;
            result = [leftIndex, i, rightIndex];
        }
    }

    return result;
};

```