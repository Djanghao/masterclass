# [EXPLAINED] Runtime Beats 94.74%, Memory Beats 89.47%

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/5671550/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/5671550/)

---

# Intuition
Dynamic programming is used to build up solutions for smaller subarrays and use them to solve the problem for larger subarrays. By storing intermediate results, we avoid redundant calculations and efficiently determine if the array can be partitioned into valid subarrays.
# Approach
Initialize: dp[0] is true.

Update: Set dp[i] based on valid pairs or triplets ending at index i.

Return: dp[n-1] indicates if the array can be partitioned.

# Complexity
- Time complexity:
O(n): The solution iterates through the nums array once, where n is the length of the array. Each index is processed in constant time.

- Space complexity:
O(n): The dp array requires space proportional to the length of nums to store intermediate results.

# Code
```typescript []
function validPartition(nums: number[]): boolean {
    const n = nums.length;
    if (n < 2) return false; // There's no valid partition for arrays with less than 2 elements

    // Initialize the dp array
    const dp: boolean[] = new Array(n).fill(false);

    // Base cases
    if (nums[0] === nums[1]) dp[1] = true; // For a valid subarray [nums[0], nums[1]]
    if (n > 2 && (nums[0] === nums[1] && nums[1] === nums[2] || (nums[0] + 1 === nums[1] && nums[1] + 1 === nums[2]))) dp[2] = true;

    // Fill the dp array
    for (let i = 2; i < n; i++) {
        if (nums[i] === nums[i - 1] && dp[i - 2]) dp[i] = true; // Check for a valid subarray of length 2
        if (nums[i] === nums[i - 1] && nums[i - 1] === nums[i - 2] && dp[i - 3]) dp[i] = true; // Check for a valid subarray of length 3 (all elements equal)
        if (i > 1 && nums[i] === nums[i - 1] + 1 && nums[i - 1] === nums[i - 2] + 1 && dp[i - 3]) dp[i] = true; // Check for a valid subarray of length 3 (consecutive increasing)
    }

    return dp[n - 1];
}

// Example usage
const nums1 = [4, 4, 4, 5, 6];
console.log(validPartition(nums1)); // Output: true

const nums2 = [1, 1, 1, 2];
console.log(validPartition(nums2)); // Output: false

```