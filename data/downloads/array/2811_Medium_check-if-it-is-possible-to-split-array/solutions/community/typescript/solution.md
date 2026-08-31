# TypeScript ||  Dynamic Programming || Memoization || Divide and Conquer || Prefix Sum

**Author:** YouSam84
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3878748/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3878748/)

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
function canSplitArray(nums: number[], m: number): boolean {
    if (nums.length === 1 || nums.length === 2)
        return true;

    const dp: boolean[][] = new Array(nums.length);

    for (let i = 0; i < dp.length; i++)
        dp[i] = [];

    function split(start: number, end: number, array_sum: number): boolean {
        if (start === end)
            return true;

        if (dp[start][end] !== undefined)
            return dp[start][end];

        const array_size = end - start + 1;
        let prefixSum = 0;

        for (let i = start; i < end; i++) {
            prefixSum += nums[i];

            const array_one_size = i - start + 1;
            const array_two_size = array_size - array_one_size;
            const array_one_sum = prefixSum;
            const array_two_sum = array_sum - prefixSum;

            if (((array_one_size == 1) || array_one_sum >= m) &&
                (array_two_size === 1 || array_two_sum >= m) &&
                split(start, i, array_one_sum) &&
                split(i + 1, end, array_two_sum)) {
                return dp[start][end] = true;
            }
        }

        return dp[start][end] = false;
    }

    return split(0, nums.length - 1, nums.reduce((c, e) => c + e, 0));
}
```