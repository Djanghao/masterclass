# [C++ / Go] Dynamic Programming - O(nk) time / O(n) space solution

**Author:** mikazuki4712
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4855599/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4855599/)

---

# Intuition
- We can consider two cases for each element when selecting the `j-th` subarray:
    - Add it to `j-th` subarray.
    - Reset the `j-th` subarray with new start is current element, skip all elements between the previous subarray end and the current element.

# Approach
- Init vector `dp` size `n + 1` filled with `0`.
- When selecting `j-th` subarray, 
    - `dp[i]` represents the maximum strength that can be achieved by selecting `j - 1` disjoint subarrays from the first `i` elements.
    - `tmp[i]` represents the maximum strength that can be achieved by selecting `j` disjoint subarrays and `j-th` subarray ends at `i-th` element.
- Consider `i-th` element:
    - If `tmp[i - 1] > dp[i - 1]` mean the strength of current subarray is better than skip that subarray, so add to it.
    - If `tmp[i - 1] < dp[i - 1]` mean it is better to skip that subarray and start `j-th` subarray here.
- After calculating all `tmp[i]`, update `dp[i] = max(tmp[0..i])` because `dp[i]` doesn't require the subarray to end at `i-th` element.

# Code
```C++ []
class Solution {
public:
    long long maximumStrength(vector<int>& nums, int k) {
        int n = nums.size();
        vector<long long> dp(n + 1, 0);

        for (int j = 0; j < k; j++) {
            long long mul = (j % 2 == 1) ? -(k - j) : (k - j);

            vector<long long> tmp(n + 1);
            tmp[0] = LLONG_MIN / 2;
            for (int i = 1; i <= n; i++)
                tmp[i] = max(tmp[i - 1], dp[i - 1]) + nums[i - 1] * mul;

            dp = tmp;

            for (int i = 1; i <= n; i++)
                dp[i] = max(dp[i], dp[i - 1]);
        }

        return dp[n];
    }
};
```
```Go []
func maximumStrength(nums []int, k int) int64 {
    n := len(nums)
	dp := make([]int64, n + 1)

	for j := 0; j < k; j++ {
		mul := int64(k - j)
		if j % 2 == 1 {
			mul = -mul
		}

		tmp := make([]int64, n + 1)
		tmp[0] = math.MinInt64 / 2

		for i := 1; i <= n; i++ {
			tmp[i] = max(tmp[i - 1], dp[i - 1]) + int64(nums[i - 1]) * mul
		}

		copy(dp, tmp)

		for i := 1; i <= n; i++ {
			dp[i] = max(dp[i], dp[i - 1])
		}
	}

	return dp[n]
}

func max(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}
```

# Complexity
- Time complexity: $O(nk)$
- Space complexity: $O(n)$