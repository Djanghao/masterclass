# [Python] Clean & Simple, no bitmask

**Author:** yo1995
**Votes:** 63
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1431960/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1431960/)

---

The full problem is NP-hard: https://en.wikipedia.org/wiki/Bin_packing_problem

To get the exact result, we have to recurse with some smart memorization techniques.

I still find it challenging to use bitmask, so here is the dfs version.

Comparing to the default dfs which gets TLE, the trick here is to loop through the sessions, rather than the tasks themselves.

```python
class Solution:
    def minSessions(self, tasks: List[int], sessionTime: int) -> int:
        n = len(tasks)
        tasks.sort(reverse=True)
        sessions = []
        result = [n]
        
        def dfs(index):
            if len(sessions) > result[0]:
                return
            if index == n:
                result[0] = len(sessions)
                return
            for i in range(len(sessions)):
                if sessions[i] + tasks[index] <= sessionTime:
                    sessions[i] += tasks[index]
                    dfs(index + 1)
                    sessions[i] -= tasks[index]
            sessions.append(tasks[index])
            dfs(index + 1)
            sessions.pop()
        
        dfs(0)
        return result[0]
```