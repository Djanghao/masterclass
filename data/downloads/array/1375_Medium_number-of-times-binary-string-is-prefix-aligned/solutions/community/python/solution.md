# [Python] Greedy Method, O(N) Time And O(1) Space

**Author:** caesarjuly
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/532602/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/532602/)

---

The key point is updating the current max value while traversing, once we meet i + 1 == cur_max, then it means all the lights are blue.
```
class Solution(object):
    def numTimesAllBlue(self, light):
        """
        :type light: List[int]
        :rtype: int
        """
        rst = 0
        cur_max = 0
        for i, l in enumerate(light):
            cur_max = max(cur_max, l)
            # everytime meet max, increase rst
            if i + 1 == cur_max:
                rst += 1
        return rst
```