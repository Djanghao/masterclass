# Python3 BFS with comments

**Author:** brushT
**Votes:** 19
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/1329173/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/1329173/)

---

Idea: use BFS to return shortest path. Since we start BFS from the entrance and iterate level by level, one of our chosen paths will be the minimum (if it exists)
```
def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        dirs = [(0,1),(0,-1),(1,0),(-1,0)]
        entrance = (entrance[0],entrance[1])
        q = deque([entrance])
        visited = set()
        visited.add(entrance)
        step = 0
        while q:
            stepLength = len(q)
            for i in range(stepLength): # here, we can use length of the deque to iterate through level by level
                node = q.popleft()
                if node[0] == 0 or node[0] == len(maze) -1 or node[1] == 0 or node[1] == len(maze[0]) -1 :
                    if maze[node[0]][node[1]] == '.' and (node[0],node[1]) != entrance:
                        return step
                for d in dirs:
                    newD = (node[0] + d[0], node[1] + d[1])
                    if newD not in visited and 0<=newD[0]<len(maze) and 0<=newD[1]<len(maze[0]) and maze[newD[0]][newD[1]] == '.': # only add valid nodes to the queue!
                        visited.add(newD) # mark it as visited, so we don't loop forever
                        q.append(newD)
            step += 1 # after we finish with a level, increment step by one
        return -1

```