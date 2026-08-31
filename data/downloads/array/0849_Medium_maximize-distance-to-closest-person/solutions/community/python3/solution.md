# ✔️ [Python3] 5 LINES ( ˘ ³˘)ノ°ﾟº❍｡, Explained

**Author:** artod
**Votes:** 27
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/1692774/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/1692774/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

This problem is easy to solve, if notice that the max distance to the closest person can be calculated as numbers of empty spaces devided by two and rounded to ceil: `ceil(dist/2)`. For example: `[1, 0, 0, 0, 1]` => number of zeros between ones is `3` => max distance to the closest person, if sit in between is equal to `ceil(3/2) = 2`. Also, we need to care about edge cases when there are lots of free seats at the start or at the end. In this case the formula is different: `[0, 0, 0, 1]` => number of zeros is 3 => max distance is 3, that is we don't need to divide by two.

Time: **O(n)** - for the scan
Space: **O(1)** - nothing stored

Runtime: 132 ms, faster than **78.54%** of Python3 online submissions for Maximize Distance to Closest Person.
Memory Usage: 14.5 MB, less than **92.48%** of Python3 online submissions for Maximize Distance to Closest Person.

```
    def maxDistToClosest(self, seats: List[int]) -> int:
        res, dist = 0, seats.index(1)
        
        for seat in seats:
            if seat: 
                res, dist = max(res, math.ceil(dist/2)), 0
            else: 
                dist += 1
                
        return max(res, dist)
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**