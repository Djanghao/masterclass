# Simple Explanation for Optimized Knapsack

**Author:** dayoadeyemi
**Votes:** 32
**Link:** [https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4168713/](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4168713/)

---

PLEASE UPVOTE!
![crying.jpg](./images/0.jpeg)

# Intuition

Knapsack DP - Count all the multisets with sum `k` (`dp[k]`) for all `k <= r`, then the answer is just `sum(dp[l:r+1])`. The challenge is in optimizing the knapsack so that it can be solved without TLE.

# Approach
The code for the "Unoptimized" Knapsack DP is:
```
class Solution:
    def countSubMultisets(self, nums: List[int], l: int, r: int) -> int:
        dp = [1] + [0] * r
        counts = collections.Counter(nums)
        for a, c in collections.Counter(nums).items():
            for k in range(r, -1, -1):
                dp[k] = sum(dp[k - a*m] for m in range(c+1) if k >= a*m)
        return sum(dp[l:r+1]) % (10 ** 9 + 7)
```

We note that we can optimize out the lowest level loop by precomputing the "strided" sums.
```
            ...
            strided_sums = dp[:]
            for i in range(a, r + 1):
                strided_sums[i] += stride_sums[i - a]
            ...
```
Then we can replace the sums with the precomputed values:

i.e replace
```python3
sum(dp[k - a*m] for m in range(c+1) if k >= a*m)
```

with
```python3
if k >= a * c + a:
    stride_sums[k] - stride_sums[k - a * c - a]
else:
    stride_sums[k]
```

Note that we also have to be careful here to handle `0` correctly, we just remove all zeros from the counts and multiply the final answer by `counts[0] + 1`.

# Complexity
- Time complexity:
$$O(n \\sqrt n)$$ as the number of unique elements is a most $$O(\\sqrt n)$$ - as the sum of k unique elements is $$O(\\sum_k k ) = O(k (k + 1) /2) = O(k ^2)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution:
    def countSubMultisets(self, nums: List[int], l: int, r: int) -> int:
        dp = [1] + [0] * r
        counts = collections.Counter(nums)
        zeros = counts.pop(0, 0) + 1
        for a, c in counts.items():
            stride_sums = dp[:]
            for i in range(a, r + 1):
                stride_sums[i] += stride_sums[i - a]
            for k in range(r, 0, -1):
                dp[k] = stride_sums[k] - stride_sums[k - a * c - a] if k >= a * c + a else stride_sums[k]

        return zeros * sum(dp[l:r+1]) % (10 ** 9 + 7)
```