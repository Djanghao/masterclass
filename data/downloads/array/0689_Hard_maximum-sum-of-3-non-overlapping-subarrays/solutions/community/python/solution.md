# Python top down DP in various forms

**Author:** jordan34
**Votes:** 25
**Link:** [https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/849710/](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/849710/)

---

If you're like me, you probably didn't easily understand the problem, or understand the greedy window solutions. A more intuitive approach is outlined below. Maybe this is one you might actually be able to remember in an interview.

**Brute force**
This will TLE but it helps to see the brute force and how it might play out.

One thing you'll notice, if you do the brute force, is how many overlapping sub problems there are. This is a good place to start, because it can lead into the intuition for how DP might work. You try every index, and every non overlapping kth window offset from that window, and then every kth window offset from the offset window. You literally try every solution.

Time complexity: n ^ 3
space: O(1) (we store almost nothing)

```python
        maxS = float('-inf')
        res = []

		# e1, e2, e3 are ending indices of first, second and third intervals.
        for e1 in range(k-1, N - 2*k):
            s1 = e1 - k + 1
            for e2 in range(e1+k, N - k):
                s2 = e2 - k + 1
                for e3 in range(e2+k, N):
                    s3 = e3 - k + 1
                    tsum = dp[e1] + dp[e2] + dp[e3] 
                    if tsum > maxS:
                        maxS = tsum
                        res = [s1, s2, s3]
        return res
```

**Top Down Without Memo**

The idea here is similar, but implemented in a recursive top down approach. Note that this will also TLE, but gives use a better understanding of how caching might be implemented to save overlapping sub problems.

Time complexity: 2 ^ n
Space: O(n)

```python
    def maxSumOfThreeSubarraysCustom(self, nums: List[int], k: int) -> List[int]:
        res = self.window_sum(nums, k, 0, 0)
        return res[1]

    def window_sum(self, nums, k, idx, used):
        # we can only have 3 windows at a time
        if used == 3:
            return 0, []

        # are we going to overflow over our nums array?
        if idx - (used * k) > (len(nums)):
            return 0, []

        take_curr_sum, take_curr_indices = self.window_sum(nums, k, idx + k, used + 1)
        take_curr_sum += sum(nums[idx:idx + k])

        skip_curr_sum, skip_curr_indices = self.window_sum(nums, k, idx + 1, used)

        if take_curr_sum >= skip_curr_sum:
            return take_curr_sum, ([idx] + take_curr_indices)
        else:
            return skip_curr_sum, skip_curr_indices
```


**Top down with Memo**

It's very slow, but with the memo solution this is close to a true O(n) sol. Note that this can be sped up using a prefix sum array, which will allow us to look up the sums of any interval between indices.

Time: O(n ^ 2) due to the `sum(nums[idx:idx + k])` could be O(n) using prefix sum.
Space: O(n)

```python
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        memo = {}
        res = self.window_sum(nums, k, 0, 0, memo)
        return res[1]

    def window_sum(self, nums, k, idx, used, memo):
        # we can only have 3 windows at a time
        if used == 3:
            return 0, []

        # are we going to overflow over our nums array?
        if idx - (used * k) > (len(nums)):
            return 0, []

        if (idx, used) in memo:
            return memo[(idx, used)]

        take_curr_sum, take_curr_indices = self.window_sum(nums, k, idx + k, used + 1, memo)
        take_curr_sum += sum(nums[idx:idx + k])

        skip_curr_sum, skip_curr_indices = self.window_sum(nums, k, idx + 1, used, memo)

        if take_curr_sum >= skip_curr_sum:
            memo[(idx, used)] = (take_curr_sum, ([idx] + take_curr_indices))
            return memo[(idx, used)]
        else:
            memo[(idx, used)] = (skip_curr_sum, skip_curr_indices)
            return memo[(idx, used)]
```
