# [Python Binary Search + Monotonic Queue] Template

**Author:** surface09
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/1886392/](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/1886392/)

---

```
from collections import deque
class Solution:
    def maxTaskAssign(self, tasks: List[int], workers: List[int], pills: int, strength: int) -> int:
        
        tasks.sort()
        workers.sort()
        
        def can_finish(mid, pills):
            
            n = len(workers)
            
            i = 0
            
            # record the mid valid tasks
            queue = deque()
            
            for j in range(n - mid, n):
                
                w = workers[j]
                
                # put m tasks into the queue
                while i < mid and tasks[i] <= w + strength:
                    queue.append(tasks[i])
                    i += 1
                
                # Now we have found the eligible at most m tasks that workers[j] can finish
                # and have put these tasks into the queue
                
                
                # below are to find the most smallest strength task that workers[j] can finish
                
                # First check, if no tasks were added, this means workers[j] can finish nothing
                if not queue:
                    return False
                
                # Case 1: if workers[j] can finish task queue[0] without eating pills,
                # then this is what we want, that is, the powerful worker finish the smallest task.
                if queue[0] <= w:
                    queue.popleft()
                
                # Case 2: if workers[j] needs to eat pills to finish
                # Once he needs to eat pill, we choose the hardest task for him
                # since the left tasks for the others workers will be easy to finish.
                else:
                    # need to eat pills
                    if pills == 0:
                        return False
                    
                    pills -= 1
                    queue.pop()
                
                # after this loop, it means for the workers[j], 
                # he can finish the one task that is <= his strength + strength of pills
            
            return True
        
        
        # standard Binary Search
        left = 0
        right = min(len(tasks), len(workers))
        
        while left + 1 < right:
            
            mid = left + (right - left) // 2
            
            # this guessing mid number is eligible, 
            # we can guess larger since we need maximum tasks number
            if can_finish(mid, pills):
                left = mid
                
            else:
                right = mid - 1
        
        if can_finish(right, pills):
            return right
        else:
            return left
```