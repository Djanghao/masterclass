# [python] binary search + greedy with deque O(nlogn)

**Author:** hkwu6013
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/1588356/](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/1588356/)

---

Use binary search with greedy check. Each check can be done in O(n) using a deque. Within a check, we iterate through the workers from the weakiest to the strongest. Each worker needs to take a task. 
There are two cases:
1. The worker can take the easiest task available: we assign it to the worker.
2. The worker cannot even take the easiest task: we give a pill to him and let him take the hardest doable task.

The deque will hold from the easiest unassigned task to the toughest that can be done by the current worker with a pill. If the easiest task can be handled by the weakiest worker, we assign it to the worker and do a popleft, other wise, we use one pill and pop from the right.
```
class Solution:
    def maxTaskAssign(self, tasks: List[int], workers: List[int], pills: int, strength: int) -> int:
        # workers sorted in reverse order, tasks sorted in normal order
        def can_assign(n):
            task_i = 0
            task_temp = deque()
            n_pills = pills
            for i in range(n-1,-1,-1):
                while task_i < n and tasks[task_i] <= workers[i]+strength:
                    task_temp.append(tasks[task_i])
                    task_i += 1
                
                if len(task_temp) == 0:
                    return False
                if workers[i] >= task_temp[0]:
                    task_temp.popleft()
                elif n_pills > 0:
                    task_temp.pop()
                    n_pills -= 1
                else:
                    return False
            return True
        
        tasks.sort()
        workers.sort(reverse = True)
        
        l = 0
        r = min(len(tasks), len(workers))
        res = -1
        while l <= r:
            m = (l+r)//2
            if can_assign(m):
                res = m
                l = m+1
            else:
                r = m-1
        return res
```