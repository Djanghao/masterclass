# Binary search explained to a 5-year old

**Author:** number42
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-average-subarray-ii/solutions/3831489/](https://leetcode.com/problems/maximum-average-subarray-ii/solutions/3831489/)

---

We will not talk about the brute force appracoh, since that's obvious, and results in TLE anyway.
# Approach
We use binary search to find the maximum average for which there exists a subarray of length no less than `k`. The lower range of the binary search is the minimum value in the array, since there can't be an average smaller than it. Similarly, the upper range is the maximum value in the array.

At each iteration, we take the median average `mid` between the range `lo` and `hi`, and try to find a subarray of length no less than `k` that has an average no less than the `mid`. If such a subarray exists, we move the lower boundary to `mid`, because we want to try and find subarrays with larger averages. On the other hand, if no such subarray exists, then we know that the value `mid` is too high, and we need to search for a smaller value.

# Complexity
- Time complexity:
Binary search takes `O(log m)` time, where `m` is the difference between the maximum and the minimum values in the array. At each iteration, we go over the input array, which may take `O(n)` time. Thus, overall time complexity is `O(m log n)`.

- Space complexity:
O(1).

# Code
```
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float: 
            def has_subarray(val: float) -> bool:
                """
                Returns true if there exists a subarray of nums
                of length no less than k and average no less
                than 'val'. Returns false otherwise.

                :param val: minimum average that a subarray
                of minimum length k must have
                """

                # Since we need to compute the averages for subarrays
                # of varying sizes and compare with 'val', we introduce
                # a trick to make the comparison easier.
                # [a_1 + a_2 + ... + a_j] / j >= val
                # => [a_1 + a_2 + ... + a_j] - (j * val) >= 0
                # => [(a_1 - val) + (a_2 - val) + ... + (a_j - val)] >= 0
                curr_sum = 0.0
                # Check the subarray nums[:k]
                for i in range(k):
                    curr_sum += nums[i] - val
                if curr_sum >= 0:
                    return True

                prev_sum_min = math.inf
                prev_sum = 0.0

                # For a subarray ending at index i >= k,
                # the starting position is anywhere in the closed range [0, i-k].
                # The averages corresponding to each of these starting
                # positions is obtained by subtracting the average
                # until the starting position.
                # i.e. avg(nums[j:i+1]) = avg(nums[:i+1]) - avg(nums[:j]).
                # Clearly, the term on the left is maximum when the
                # second term on the right is minimum.
                # The second term is zero when the starting position is zero.
                for i in range(k, len(nums)):
                    curr_sum += nums[i] - val
                    prev_sum += nums[i - k] - val
                    prev_sum_min = min(prev_sum_min, prev_sum)
                    # curr_sum >= 0 is for the subarray nums[:i+1]
                    # (curr_sum - prev_sum_min) >= 0 is for the subarray
                    # that starts after the index where prev_sum attained
                    # the minimum value.
                    if curr_sum >= 0 or (curr_sum - prev_sum_min) >= 0:
                        return True
                return False

            lo = math.inf
            hi = -math.inf
            for n in nums:
                lo = min(lo, n)
                hi = max(hi, n)
            error = 1e-5
            while (hi - lo) > error:
                # Be careful not to do integer division here, else infinite loop!
                mid = lo + (hi - lo) / 2
                if has_subarray(mid):
                    lo = mid
                else:
                    hi = mid
            return lo
```