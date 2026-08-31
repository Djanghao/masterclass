# [Python] count numbers from the smallest value; Explained

**Author:** wangw1025
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6179344/](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6179344/)

---

Each number has a range of values to replace from `[n - k, n + k]`. We sort the nums, and count the number of available slots for each value starting fromt the smallest one.

See the details in below:

```
class Solution:
    def maxDistinctElements(self, nums: List[int], k: int) -> int:
        # group the distinct numbers
        nc = collections.Counter(nums)
        
        ans, prev_e = 0, float('-inf')
        # we start check the distinct number count from the smallest one
        for n in sorted(nc.keys()):
            # for each value, we can have a range of values to place it: [n - k, n + k]
            s, e = n - k, n + k
            if prev_e >= e:
                # we cannot find any available slot in this range for the number n
                # the numbers in the previous range has already took all the slots
                continue
            else:
                # adjust the start based on the previous range
                start = max(prev_e + 1, s)
                ans += min(nc[n], e - start + 1)
                # update the previous range end
                prev_e = min(start + nc[n] - 1, e)
        
        return ans
```