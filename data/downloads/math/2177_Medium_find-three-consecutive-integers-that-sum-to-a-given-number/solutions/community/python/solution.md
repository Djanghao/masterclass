# Easy Solution in Python

**Author:** Lalithkiran
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/3289056/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/3289056/)

---

# Code
```
class Solution(object):
    def sumOfThree(self, num):
        """
        :type num: int
        :rtype: List[int]
        """
        val=num//3
        while val>=0 and 3*val==num:
            return [val-1,val,val+1]
        return []

```