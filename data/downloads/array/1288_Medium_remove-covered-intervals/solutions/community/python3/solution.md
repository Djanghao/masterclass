# ✔️ [Python3] SORTING 👀, Explained

**Author:** artod
**Votes:** 52
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/1784520/](https://leetcode.com/problems/remove-covered-intervals/solutions/1784520/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

As for almost all problems related to intervals, we have to sort them first by the starting position. The next problem is how to define whether an interval is covered? After the sorting, we know that the start of every subsequent interval is greater or equal to all previous interval starts but we can't say the same about ends. 
First of all, we don't need to remember the end positions of all previous intervals, and only keep track of the longest interval seen before. If the end of the current interval lies in the range of some long previous interval that means it is covered. Second of all, we need to handle an edge case when the starts of some intervals are the same and the trick with the longest interval won't work. For example, there are might be a case like this `[[1,2],[1,4],[3,4]]`:
```
__
____
   ____
```
For that we can make sure that in case of a tie, the sorting function puts a longer interval in the first place:
```
____
__
   ____
```

*For reference: https://www.programiz.com/python-programming/methods/built-in/sorted*

Time: **O(Nlog(N))** - sorting
Space: **O(N)** - sorting

Runtime: 100 ms, faster than **78.70%** of Python3 online submissions for Remove Covered Intervals.
Memory Usage: 14.5 MB, less than **86.23%** of Python3 online submissions for Remove Covered Intervals.

```
class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        res, longest = len(intervals), 0
        srtd = sorted(intervals, key = lambda i: (i[0], -i[1]))
        
        for _, end in srtd:
            if end <= longest:
                res -= 1
            else:
                longest = end
                
        return res
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**