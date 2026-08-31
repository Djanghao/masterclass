# meeting rooms with additional interval processing

**Author:** sekirofly
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/4611370/](https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/4611370/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
meeting rooms(leetcode 253) are intervals with start time closed and end time open. This question is similar but needs addtional processing. After all intervals processed into [start, end), other principles are all the same.

Except the first intervals are both closed on left and right sides, other intervals are left open and right closed. We need to process it to start closed and end open. 

Note start is always less than end while left could be larger than right.
# Code
```
class Solution:
    def maxIntersectionCount(self, y: List[int]) -> int:
        """
        [1, 2, -1, 1] could be divided into 3 intervals
        
        [1, 2] => [1, 2.5)
        (2, -1] => [-1, 2)
        (-1, 1] => [-0.5, 1.5)
        """
        y_cnt = defaultdict(int)
        for i, (left, right) in enumerate(zip(y, y[1:])):
            if i == 0:
                start = min(left, right)
                end = max(left, right)
                end += 0.5
            else:
                if left > right:
                    start = right
                    end = left
                else:
                    start = left + 0.5
                    end = right + 0.5

            y_cnt[start] += 1
            y_cnt[end] -= 1

        preSum = 0
        res = 0
        for key in sorted(y_cnt.keys()):
            preSum += y_cnt[key]
            res = max(res, preSum)

        return res


```