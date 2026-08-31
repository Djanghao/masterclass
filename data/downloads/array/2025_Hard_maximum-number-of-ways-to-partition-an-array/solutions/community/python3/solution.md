# [Python3] Counter of (Left - Right) at Each Pivot

**Author:** FanchenBao
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/2801817/](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/2801817/)

---

```python
class Solution:
    def waysToPartition(self, nums: List[int], k: int) -> int:
        """This is a good problem. It's not difficult, but is quite complex.

        The idea is that once we change a position at i, for all the pivots at
        1...i, the sum of the left half stay the same whereas the sum of
        the right half changes by delta = k - nums[i]. Similarly, for all the
        pivots at i + 1...n - 1, the left half changes by delta, whereas the
        right half stay the same.

        We can pre-compute all the differences at each pivot position and make
        that into a diffs = [d1, d2, .... , dn-1]

        Then after a change at i, if we want the pivots at 1...i to form a good
        partition, we must have left - (right + delta) = 0 => delta = left - right
        In other words, the number of good partitions is the count of d1, d2, ...
        di that are equal to delta. Similarly, if we want the pivots at i + 1...
        n - 1 to form a good partition, we must have left + delta - right = 0
        => left - right = -delta. In other words, the number of good partitions
        is the count of di+1, ...., dn-1 that are equal to -delta.

        Based on this, we progressively build a left sum and right sum to
        compute the diffs array. And then progressively build a left counter
        and right counter to compute the number of matches to delta and -delta.

        The difficulty is in the implementation, especially with the indices.

        O(N), 7339 ms, faster than 32.20%
        """
        N = len(nums)
        diffs = []
        sl, sr = 0, sum(nums)
        for i in range(N - 1):
            sl += nums[i]
            sr -= nums[i]
            diffs.append(sl - sr)
        diffs.append(math.inf)  # to prevent error in the counter arithemtic
        
        cl, cr = Counter(), Counter(diffs)
        res = cl[0] + cr[0]
        for i in range(N):
            d = k - nums[i]
            res = max(res, cl[d] + cr[-d])
            cl[diffs[i]] += 1
            cr[diffs[i]] -= 1
        return res
```