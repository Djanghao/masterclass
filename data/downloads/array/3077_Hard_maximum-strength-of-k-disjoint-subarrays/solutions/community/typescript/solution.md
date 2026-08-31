# MaxStrengthSubarrays

**Author:** RuslanTsykaliak
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4878818/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4878818/)

---

# Code
```
function maximumStrength(nums: number[], k: number): number {
    // Length of the input array
    const n = nums.length;
    // Constant for negative infinity
    const NEGATIVE_INFINITY = -Infinity;
    // Large negative number for initialization
    const LARGE_NEGATIVE_NUMBER = -Math.pow(10, 15);
    // Initialize a 3D dynamic programming array
    const dp: number[][][] = new Array(n).fill(0).map(() => new Array(2).fill(0).map(() => new Array(k+1).fill(NEGATIVE_INFINITY)))

    // Helper function to calculate the maximum strength
    function helper(i: number, remainingSubarrays: number, isPreviousSubarrayEmpty: number): number {
        // Base case: if no subarrays are remaining, return 0
        if(remainingSubarrays === 0) {
            return 0;
        }
        // If we have reached the end of the array
        if(i === n) {
            // If there is one subarray remaining and the previous subarray is empty, return 0
            if(remainingSubarrays === 1 && isPreviousSubarrayEmpty === 1) {
                return 0;
            }
            // Otherwise, return a large negative number
            return LARGE_NEGATIVE_NUMBER;
        }
        // If the current state has already been computed, return it
        if(dp[i][isPreviousSubarrayEmpty][remainingSubarrays] != NEGATIVE_INFINITY) {
            return dp[i][isPreviousSubarrayEmpty][remainingSubarrays];
        }
        // Calculate the bit for the current subarray
        const bit = remainingSubarrays % 2 === 0 ? -1 : 1;

        // Calculate the maximum strength if we include the current number in the subarray
        const res1 = Math.max(helper(i+1, remainingSubarrays-1, 0), helper(i+1, remainingSubarrays, 1))  + nums[i] * bit * remainingSubarrays;

        // Calculate the maximum strength if we exclude the current number from the subarray
        const res2 = (isPreviousSubarrayEmpty === 0)  ? helper(i+1, remainingSubarrays, 0) : NEGATIVE_INFINITY;
        // Calculate the maximum of the two results
        const res = Math.max(res1, res2);
        // Store the result in the dynamic programming array
        dp[i][isPreviousSubarrayEmpty][remainingSubarrays] = res;
        // Return the result
        return res;
    }

    // Call the helper function with the initial state
    return helper(0, k, 0);
};

```