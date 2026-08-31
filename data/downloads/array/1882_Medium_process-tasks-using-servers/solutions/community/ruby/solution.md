# Ruby Standard Library needs Heap

**Author:** shhavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/1239935/](https://leetcode.com/problems/process-tasks-using-servers/solutions/1239935/)

---

# Ruby
Tried to emulate priority queue or heap using sorted Array.
This solution gives TLE due tue complexity of `Array#insert`

```ruby
def assign_tasks(servers, tasks)
  n = servers.size
  pq = servers.zip(0...n).sort! 
  servers = []
  time = 0
  tasks.map.with_index do |dur, start_time|
    time = [time, start_time].max
    while servers.any? && servers[0][0] <= time
      _, w, i = servers.shift
      pq.insert((pq.bsearch_index { |wt, j| w < wt || (w == wt && i < j) } || pq.size), [w, i])
    end
    if pq.empty?
      time = servers[0][0]
      while servers.any? && servers[0][0] == time
        _, w, i = servers.shift
        pq.insert((pq.bsearch_index { |wt, j| w < wt || (w == wt && i < j) } || pq.size), [w, i])
      end
    end
    w, i = pq.shift
    atime = time + dur
    servers.insert((servers.bsearch_index { |t, _, _| atime <= t } || servers.size), [atime, w, i])
    i
  end
end
```

# Python

Converted to Python using `heapq`  gives working solution:

```python
class Solution:
    def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
        pq = [[weight, i] for i, weight in enumerate(servers)]
        heapq.heapify(pq)
        servers = []
        time = 0
        res = []
        for start_time, dur in enumerate(tasks):
            time = max(time, start_time)
            while len(servers) > 0 and servers[0][0] <= time:
              t, w, i = heapq.heappop(servers)
              heapq.heappush(pq, [w, i])

            if len(pq) == 0:
              time = servers[0][0]
              while len(servers) > 0 and servers[0][0] <= time:
                t, w, i = heapq.heappop(servers)
                heapq.heappush(pq, [w, i])

            w, i = heapq.heappop(pq)
            heapq.heappush(servers, [time + dur, w, i])
            res.append(i)

        return res
```