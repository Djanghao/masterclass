# Python Backtracking - Pruning is 🔑

**Author:** sinemetu1
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/1009964/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/solutions/1009964/)

---

Kept on getting TLE during the competition. :P Also tried a greedy approach that won't work. The concept I was thinking about was distributing the work as evenly as possible.

A simple backtracking approach passes the tests:

```
class Solution:
    
    def dfs(self, pos: int, jobs: List[int], workers: List[int]) -> int:
        if pos >= len(jobs):
            return max(workers)
        
        mn = float("inf")
        # we keep track of visited here to skip workers
        # with the same current value of assigned work
		# this is an important step in pruning the number
		# of workers to explore
        visited = set()
        for widx in range(len(workers)):
            
            if workers[widx] in visited:
                continue
            visited.add(workers[widx])
            
            # try this worker
            workers[widx] += jobs[pos]
            
            if max(workers) < mn:
                # if it's better than our previous proceed
                res = self.dfs(pos+1, jobs, workers)
                mn = min(mn, res)
            
            # backtrack
            workers[widx] -= jobs[pos]
        
        return mn
        
    
    def minimumTimeRequired(self, jobs: List[int], k: int) -> int:
	    # sorting the jobs means that highest value jobs are assigned first
		# and more computations can be skipped by pruning
        jobs.sort(reverse=True)
        return self.dfs(0, jobs, [0] * k)
```