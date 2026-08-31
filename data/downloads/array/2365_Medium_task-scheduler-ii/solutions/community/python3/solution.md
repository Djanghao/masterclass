# Python || Easily Understood ✅ || Faster Than 98% || Simple || O(n)

**Author:** wingskh
**Votes:** 22
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/2388526/](https://leetcode.com/problems/task-scheduler-ii/solutions/2388526/)

---

```
import math
class Solution:
    def taskSchedulerII(self, tasks: List[int], space: int) -> int:
        count_dict = {}
        total_days = 0
        for task in tasks:
            if task not in count_dict:
                count_dict[task] = -math.inf
            total_days = max(total_days + 1, count_dict[task] + space + 1)
            count_dict[task] = total_days
        return total_days
```
**Time complexity**: O(n)
**Space complexity**: O(n)