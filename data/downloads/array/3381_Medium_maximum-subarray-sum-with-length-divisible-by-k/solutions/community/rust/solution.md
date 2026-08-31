# 🔥 Modified Kadane’s Algorithm || <5ms in Rust & Go

**Author:** rutsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6140868/](https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6140868/)

---

# \uD83D\uDE80 Intuition

This problem extends the classic <ins>maximum subarray sum</ins> algorithm to subarrays whose lengths are divisible by $k$. To satisfy the problem's conditions, we iterate over all offsets in the semiinterval $[0,k)$ and step by $k$ to explore valid subarrays.

# \uD83D\uDD0D Approach

1. <ins>Precompute prefix sums</ins> to allow efficient subarray sum calculations.
2. <ins>Iterate over offsets</ins> in the semiinterval $[0,k)$ to ensure all valid subarray positions are covered.
3. <ins>Use a modified Kadane\u2019s algorithm</ins>, resetting the starting index whenever the sum becomes negative, to find the maximum subarray sum for each offset.

# Complexity
- __\u23F1\uFE0F Time Complexity__
    - <ins>Prefix Sum Calculation</ins>: $O(n)$.
    - __Main Loop__:
        - <ins>Outer loop</ins> runs $O(k)$, iterating over offsets.
        - <ins>Inner loop</ins> processes subarrays with step $k$, leading to $O(n/k)$ iterations per offset.
    - __Total complexity:__ $O(n + k \xD7 n/k)=O(n)$.

- __\uD83D\uDCBE Space Complexity__
    - $O(n)$: To store the prefix sums array.

# Code
```rust []
impl Solution {
    pub fn max_subarray_sum(nums: Vec<i32>, k: i32) -> i64 {
        let n = nums.len();
        let k = k as usize;

        // Compute prefix sums
        let mut prefix_sums = vec![0i64; n + 1];
        for i in 0..n {
            prefix_sums[i + 1] = prefix_sums[i] + nums[i] as i64;
        }

        let mut best = i64::MIN;

        // Iterate over each offset
        for offset in 0..k {
            let mut start = offset;
            for end in (offset + k..=n).step_by(k) {
                // Calculate the subarray sum
                let subarray_sum = prefix_sums[end] - prefix_sums[start];
                // Update the best result
                best = best.max(subarray_sum);
                // Reset start if the current sum is negative
                if subarray_sum < 0 {
                    start = end;
                }
            }
        }

        best
    }
}
```
``` Go []
import "math"

func maxSubarraySum(nums []int, k int) int64 {
    n := len(nums)
    // Compute prefix sums
    prefixSums := make([]int64, n+1)
    for i := 0; i < n; i++ {
        prefixSums[i+1] = prefixSums[i] + int64(nums[i])
    }

    var best int64 = math.MinInt64 // Initialize with a very small value

    // Iterate over each offset
    for offset := 0; offset < k; offset++ {
        start := offset
        for end := offset + k; end <= n; end += k {
            // Calculate the subarray sum
            subarraySum := prefixSums[end] - prefixSums[start]
            // Update the best result
            best = max(best, subarraySum)
            // Reset start if the current sum is negative
            if subarraySum < 0 {
                start = end
            }
        }
    }

    return best
}
```