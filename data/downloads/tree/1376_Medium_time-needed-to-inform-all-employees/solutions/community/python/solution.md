# [Python] Straightforward BFS, O(N) Solution

**Author:** caesarjuly
**Votes:** 21
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/532615/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/532615/)

---

```
from collections import deque, defaultdict

class Solution(object):
    def numOfMinutes(self, n, headID, manager, informTime):
        """
        :type n: int
        :type headID: int
        :type manager: List[int]
        :type informTime: List[int]
        :rtype: int
        """
        if n <= 1:
            return 0
        rst = 0
        childs = defaultdict(list)
        for idx, parent in enumerate(manager):
            childs[parent].append(idx)

        q = deque([(headID, informTime[headID])])
        while q:
            cur_id, cur_time = q.popleft()
            # calculate max
            rst = max(rst, cur_time)
            for child in childs[cur_id]:
                q.append((child, cur_time + informTime[child]))
        return rst
```