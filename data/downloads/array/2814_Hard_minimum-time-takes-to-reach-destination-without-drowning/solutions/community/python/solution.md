# [Python] This is not hard (and stop using Djikstra)

**Author:** NotTheSwimmer
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3890130/](https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/3890130/)

---

This really doesn't seem like a hard problem because there is no backtracking involved. The problem itself actually guides you to the solution by making you think about "flooding." The flooding is easy to implement, and after you do, you can easily apply the same flooding concept to the starting positions as well. This is one of those "leetcode hards" that I could actually imagine being asked in an interview and knocking it out of the park, as opposed to a lot of others that I literally spend days thinking about and doing a ton of math.

No brain teasers here, just classic programming.

P.S. Stop using Djikstra to solve this. This graph is not weighted. Djikstra on an unweighted graph is just a complicated breadth first search.

# My first solution

```python
START, DESTI, EMPTY, STONE, FLOOD = "SD.X*"

class Solution:
    def minimumSeconds(self, land: List[List[str]]) -> int:
        n = len(land)
        m = len(land[0]) if land else 0
        positions = {key: set() for key in (START, DESTI, EMPTY, STONE, FLOOD)}
        for i in range(n):
            for j in range(m):
                positions[land[i][j]].add((i, j))
        
        time = 0
        while True:
            time += 1
            flooding = set()
            for i, j in positions[FLOOD]:
                for pos in (i+1, j), (i, j+1), (i-1, j), (i, j-1):
                    if pos in positions[EMPTY]:
                        flooding.add(pos)
            positions[FLOOD] = flooding
            positions[EMPTY] -= flooding
            starting = set()
            for i, j in positions[START]:
                for pos in (i+1, j), (i, j+1), (i-1, j), (i, j-1):
                    if pos in positions[DESTI]:
                        return time
                    elif pos in positions[EMPTY]:
                        starting.add(pos)
            if not starting:
                return -1
            positions[EMPTY] -= starting
            positions[START] = starting
```

# Two queues implementation
```python
START, DESTI, EMPTY, STONE, FLOOD = "SD.X*"

class Solution:
    def minimumSeconds(self, land: List[List[str]]) -> int:
        n = len(land)
        m = len(land[0]) if land else 0

        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        
        flood_queue, start_queue = deque(), deque()
        
        for i in range(n):
            for j in range(m):
                if land[i][j] == START:
                    start_queue.append((i, j))
                elif land[i][j] == FLOOD:
                    flood_queue.append((i, j))
        
        time = 0
        
        while start_queue:
            time += 1
            
            for _ in range(len(flood_queue)):
                i, j = flood_queue.popleft()
                for dx, dy in directions:
                    x, y = i + dx, j + dy
                    if 0 <= x < n and 0 <= y < m and land[x][y] == EMPTY:
                        land[x][y] = FLOOD
                        flood_queue.append((x, y))

            for _ in range(len(start_queue)):
                i, j = start_queue.popleft()
                for dx, dy in directions:
                    x, y = i + dx, j + dy
                    if 0 <= x < n and 0 <= y < m:
                        if land[x][y] == DESTI:
                            return time
                        elif land[x][y] == EMPTY:
                            land[x][y] = START
                            start_queue.append((x, y))
            
        return -1
```