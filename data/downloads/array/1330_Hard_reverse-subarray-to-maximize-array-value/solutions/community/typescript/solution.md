# 💥 TypeScript | Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5806118/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5806118/)

---

# Intuition
I have to maximize the sum of the differences between adjacent elements by reversing a part of the array. Reversing a subarray can change the differences between adjacent pairs, so my goal is to find the best possible place to reverse that gives the biggest boost to the overall sum.


# Approach
First, I calculate the current sum of absolute differences between each pair in the array. Then, I find the best subarray to reverse by comparing how the first and last elements of the array could interact with other elements to give the biggest improvement. I also track extreme values (min and max of adjacent pairs) to compute the best possible gain from reversing the subarray. Finally, I add this improvement to the original sum to get the maximum possible value.


# Complexity
- Time complexity:
O(n) because I only loop through the array once to calculate the sum and find the best subarray to reverse.


- Space complexity:
O(1) because I only use a few extra variables, so the memory usage doesn't depend on the size of the array.


# Code
```typescript []
/**
 * Function to calculate the maximum possible value of an array after reversing a subarray.
 * Optimized for performance.
 * @param nums - The input array of integers
 * @returns The maximum possible value of the array
 */
function maxValueAfterReverse(nums: number[]): number {
    const { abs, max, min } = Math; // Destructuring Math functions for easier use
    const n = nums.length;

    let sum = 0;    // Initial sum of absolute differences
    let bestGain = 0; // Best gain from reversing a subarray

    // Variables to track the extreme min and max for certain conditions
    let minVal = Number.MAX_SAFE_INTEGER;
    let maxVal = Number.MIN_SAFE_INTEGER;

    // Step 1: Calculate the base sum of absolute differences
    for (let i = 0; i < n - 1; ++i) {
        const diff = abs(nums[i] - nums[i + 1]);
        sum += diff;

        // Step 2: Try to maximize the potential gain
        // Compare adjacent pairs to determine if reversing them gives any gain
        bestGain = max(bestGain, abs(nums[0] - nums[i + 1]) - diff);
        bestGain = max(bestGain, abs(nums[n - 1] - nums[i]) - diff);

        // Track the minimum and maximum of adjacent values
        minVal = min(minVal, max(nums[i], nums[i + 1]));
        maxVal = max(maxVal, min(nums[i], nums[i + 1]));
    }

    // Step 3: Calculate the best possible improvement by reversing a subarray
    const maxPossibleGain = max(bestGain, (maxVal - minVal) * 2);

    // Step 4: Return the final result: base sum + the best possible gain
    return sum + maxPossibleGain;
}

```