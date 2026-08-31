# Concise Python solution good for follow-up, time O(n), space O(1)

**Author:** cmc
**Votes:** 135
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/96946/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/96946/)

---

store the length of previous and current consecutive 1's (separated by the last 0) as `pre` and `curr` , respectively. <br>

Whenever we get a new number, update these two variables accordingly. The consecutive length would be `pre  + 1 + curr`, where the `1` is a zero that got flipped to 1. (note that `pre` is initialized to `-1`, meaning that we haven't seen any 0 yet)

```
class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        # previous and current length of consecutive 1 
        pre, curr, maxlen = -1, 0, 0
        for n in nums:
            if n == 0:
                pre, curr = curr, 0
            else:
                curr += 1
            maxlen = max(maxlen, pre + 1 + curr )
        
        return maxlen
```