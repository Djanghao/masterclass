# Short O(N) Ruby solution

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/5228243/](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/5228243/)

---

# Intuition
If we need to find the maximum sum of all groups of size k in a subarray A[0..i], we can do that by using a sliding window and dp.

```
accumulated_sum += nums[i]
dp[i] = accumulated_sum > dp[i - 1] ? accumulated_sum : dp[i - 1]
accumulated_sum -= nums[i - k]
```

To find the maximum sum of two groups of size k that don't overlap, we should check all possible combinations. That is:
- maximum of group 1, A[0, N-k] + maximum of group 2, A[N-k, N]
- maximum of group 1, A[0, N-k-1] + maximum of group 2, A[N-k-1, N]
...
- maximum of group 1, A[0, k] + maximum of group 2, A[k + 1, N]

If we have the maximum of all groups of size k in A[k + 1, i], then we have the maximum of all possible groups 2. So for each group 1 that we can form, we apply:
```
dp2[i] = accumulated_sum + dp[i + k] > dp2[i - 1] ? accumulated_sum + dp[i + k] : dp2[i - 1]
```

We can apply that same logic for N groups that we might want to form. As we only want 3 groups, that same logic is applied 3 times to find the answer.

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}

SUM = Struct.new(:val, :indexes)
EMPTY_SUM = SUM.new(0, [])
def max_sum_of_three_subarrays(nums, k)
    dp = find_maximum_pairs(nums, -k, k)
    dp = find_maximum_pairs(nums, -2 * k, k, dp)
    find_maximum_pairs(nums, -2 * k, k, dp)[0].indexes
end

def find_maximum_pairs(nums, from, k, prev = [])
    accumulated_sum = nums[from + 1..from + k - 1].sum
    dp = Array.new(nums.length)

    (nums.length + from).downto(0).each do |i|
        accumulated_sum += nums[i]
        previous_result = (prev[i + k] || EMPTY_SUM)
        total = previous_result.val + accumulated_sum
        dp[i] = (dp[i + 1] || EMPTY_SUM).val > total ? dp[i + 1] : SUM.new(total, [i] + previous_result.indexes)
        accumulated_sum -= nums[i + k - 1]
    end

    dp
end
```