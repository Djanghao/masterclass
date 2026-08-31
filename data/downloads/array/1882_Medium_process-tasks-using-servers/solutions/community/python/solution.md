# [Python] Two Min-heaps O(n + mlogn)

**Author:** Pony1999
**Votes:** 22
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/1239862/](https://leetcode.com/problems/process-tasks-using-servers/solutions/1239862/)

---

Use one heap to keep track of servers available and another heap to keep track of the tasks that are still in progress.
```
class Solution:
    def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
        servers_available = [(w, i) for i,w in enumerate(servers)]
        heapify(servers_available)
        tasks_in_progress = []
        res = []
        time = 0
        for j,task in enumerate(tasks):
            time = max(time, j)
            if not servers_available:
                time = tasks_in_progress[0][0]
            while tasks_in_progress and tasks_in_progress[0][0] <= time:
                heappush(servers_available, heappop(tasks_in_progress)[1])
            res.append(servers_available[0][1])
            heappush(tasks_in_progress, (time + task, heappop(servers_available)))
        return res
```
Run-time analysis:
`heapify` takes `O(n)` time. The loop iterates `m` times and both heaps have sizes no more than `n`. Thus, the overall run-time is `O(n + mlogn)`.