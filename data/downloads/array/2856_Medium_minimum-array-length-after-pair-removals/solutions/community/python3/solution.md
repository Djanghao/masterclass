# O(log n) time O(1) space easy solution | Python 4 lines | Greedy & Binary search

**Author:** zzjjbb
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052319/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052319/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Find the count of the most common item. If it's more than a half, some of this number cannot be cancelled out. Otherwise, there is only 0 or 1 item left when `len(nums)` is even or odd.

Notice that if a number appears more than a half times, it must appear at the middle of the sequence: `nums[len(nums) // 2]`. Since `nums` is already sorted, use binary search to find the left and right boundary of this number.

# Complexity
- Time complexity:
$$O(\\mathrm{log}\\ n)$$
- Space complexity:
$$O(1)$$
# Code
```
class Solution:
    def minLengthAfterRemovals(self, nums: List[int]) -> int:
        n = len(nums)
        i = nums[n // 2]
        cnt = bisect_right(nums, i) - bisect_left(nums, i)
        return max(n % 2, 2 * cnt - n)
```