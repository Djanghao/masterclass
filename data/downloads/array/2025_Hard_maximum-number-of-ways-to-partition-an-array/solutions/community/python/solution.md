# Short Python solution -- Compute prefix sums: O(n)

**Author:** kcsquared
**Votes:** 20
**Link:** [https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/1499026/](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/1499026/)

---

**Explanation**

* For each pivot `p`, `1 <= p <= n-1`, we can test whether it is a valid partition point by checking whether `sum(nums[:p]) == sum(nums[p:])`, which can be determined in constant time after computing prefix sums.

* If a pivot `p` is not valid, we compute `gap[p] = sum(nums[p:]) - sum(nums[:p])`. This `gap[p]` is how much we need to add to an element strictly before index `p`, or subtract from an element at or after index `p`, in order to make `p` a valid pivot.
* Now, for each element `nums[i]`, find the number of valid pivots in the new array after changing `nums[i]` to `k`, or in other words, adding `k-nums[i]` at index `i`. 
* This value, for a fixed `i`, is the count of indices `j` with `j > i` that satisfy `gap[j] == k - nums[i]`, 
plus the number of indices `j` with `1 <= j <= i` such that `-gap[j] == k - nums[i]`. 
* Use two dictionaries (for earlier gap counts and later gap counts) plus a prefix sum array, and update the dictionaries as we traverse.


**Complexity**

Time complexity: `O(n)`, Space complexity `O(n)`

**Python**

```
class Solution:
    def waysToPartition(self, nums: List[int], k: int) -> int:
        prefix_sums = list(accumulate(nums))
        total_sum = prefix_sums[-1]
        best = 0
        if total_sum % 2 == 0:
            best = prefix_sums[:-1].count(total_sum // 2)  # If no change

        after_counts = Counter(total_sum - 2 * prefix_sum
                               for prefix_sum in prefix_sums[:-1])
        before_counts = Counter()

        best = max(best, after_counts[k - nums[0]])  # If we change first num

        for prefix, x in zip(prefix_sums, nums[1:]):
            gap = total_sum - 2 * prefix
            after_counts[gap] -= 1
            before_counts[gap] += 1

            best = max(best, after_counts[k - x] + before_counts[x - k])

        return best
```

Edit: Thanks to user @zeck008 for pointing out a swapped pair of inequality signs in the original explanation.