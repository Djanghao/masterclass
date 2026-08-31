# Beats 100%

**Author:** Durvesh___patil
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/5522196/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/5522196/)

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
function kConcatenationMaxSum(arr: number[], k: number): number {
    const MOD = 10**9 + 7;

    // Kadane's algorithm to find the maximum subarray sum for a single array
    function kadane(arr: number[]): number {
        let maxSoFar = 0;
        let maxEndingHere = 0;
        for (const num of arr) {
            maxEndingHere = Math.max(0, maxEndingHere + num);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    // Compute single_max, prefix_sum, suffix_sum, and total_sum
    const single_max = kadane(arr);
    const total_sum = arr.reduce((acc, curr) => acc + curr, 0);

    let prefix_sum = 0;
    let temp_sum = 0;
    for (const num of arr) {
        temp_sum += num;
        prefix_sum = Math.max(prefix_sum, temp_sum);
    }

    let suffix_sum = 0;
    temp_sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp_sum += arr[i];
        suffix_sum = Math.max(suffix_sum, temp_sum);
    }

    if (k == 1) {
        return single_max % MOD;
    } else {
        let maxSum = Math.max(single_max, prefix_sum + suffix_sum);
        if (total_sum > 0) {
            maxSum = Math.max(maxSum, prefix_sum + suffix_sum + (k - 2) * total_sum);
        }
        return maxSum % MOD;
    }
    
};
```