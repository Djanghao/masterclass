# [Python3] Two Heaps || 1334ms || beats 98%

**Author:** yourick
**Votes:** 15
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/3565769/](https://leetcode.com/problems/process-tasks-using-servers/solutions/3565769/)

---

```python3 []
class Solution:
    def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
        res, unavailable = [], []
        available = [(weight, id) for id, weight in enumerate(servers)]
        heapify(available)

        for time, task in enumerate(tasks):
            while unavailable and unavailable[0][0] == time:
                _, weight, id = heappop(unavailable)
                heappush(available, (weight, id))

            if len(available) > 0:
                weight, id = heappop(available)
                heappush(unavailable, (time + task, weight, id))
                res.append(id)
            else:
                finishTime, weight, id = heappop(unavailable)
                heappush(unavailable, (finishTime + task, weight, id))
                res.append(id)

        return res
```
```python3 []
class Solution:
    def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
        res, unavailable, time = [], [], 0
        available = [(weight, id) for id, weight in enumerate(servers)]
        heapify(available)

        for task in tasks:
            while unavailable and unavailable[0][0] == time:
                _, weight, id = heappop(unavailable)
                heappush(available, (weight, id))

            if len(available) > 0:
                weight, id = heappop(available)
                heappush(unavailable, (time + task, weight, id))
                res.append(id)
            else:
                finishTime, weight, id = heappop(unavailable)
                heappush(unavailable, (finishTime + task, weight, id))
                res.append(id)
            time +=1

        return res
```
![Screenshot 2024-01-16 at 23.15.26.png](./images/0.png)
