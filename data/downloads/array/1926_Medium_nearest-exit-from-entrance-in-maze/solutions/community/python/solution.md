# [Python] Easy DFS MEMOIZATION & BFS

**Author:** aatmsaat
**Votes:** 32
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/1329638/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/1329638/)

---

# **Nearest Exit from Entrance in Maze**
## DFS Idea
* We search from entrance cell for the nearest boundary cell in all four directions and after getting the distance from all direction, it returns *minimum* of them.
* Function `reached` checks if currect cell is boundary and not the entrance cell
* Here `@lru_cache(None)` is used for top-down memoization approach

**Complexity**
* Time Complexity :- `O(m*n)`
* Space Complexity :- `O(m*n)` because of  `@lru_cache(None)`

```
class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        x, y = entrance
        m, n, infi = len(maze), len(maze[0]), int(1e5)
        reached = lambda p, q: (not p==x or not q==y) and (p==0 or q==0 or p==m-1 or q==n-1)
        @lru_cache(None)
        def dfs(i, j):
            if i<0 or j<0 or i==m or j==n or maze[i][j]=='+':
                return infi
            if reached(i, j):
                return 0
            maze[i][j] = '+'
            ans = 1+min(dfs(i+1, j), dfs(i-1, j), dfs(i, j+1), dfs(i, j-1))
            maze[i][j] = '.'
            return ans
        ans = dfs(x, y)
        return -1 if ans>=infi else ans
```
*why DFS with dp sometimes give WA explained in the end*.

## BFS Idea
* We search from entrance cell for the nearest boundary cell in all four directions level by level i.e. 0, 1.... until we get boundary
* Function `reached` checks if currect cell is boundary and not the entrance cell

**Complexity**
* Time Complexity :- `O(m*n)`
* Space Complexity :- `O(m*n)`

```
class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        x, y = entrance
        m, n, infi = len(maze), len(maze[0]), int(1e5)
        reached = lambda p, q: (not p==x or not q==y) and (p==0 or q==0 or p==m-1 or q==n-1)
        q, ans = deque(), 0
        q.append((x, y, ans))
        directions = [1, 0, -1, 0, 1]
        while q:
            row, col, ans = q.popleft()
            for i in range(4):
                r, c = row+directions[i], col+directions [i+1]
                if r<0 or c<0 or r==m or c==n or maze[r][c]=='+':
                    continue
                if reached(r, c):
                    return ans+1
                maze[r][c] = '+'
                q.append((r, c, ans+1))
        return -1
```

**Why DFS with Memoization sometimes gives WA**:-.

For **DFS without memoization** all test case will give correct answer as it search every path but may give **TLE**, and for **DFS with dp** it totally depends on luck , what you search first.
For better understanding let's take example:-

**e** denotes Entrance
```
++++
.e.+
.+.+
...+
++++
```
`Condition -> 1+min((i, j+1), .............)`
After operations it will look like
```
++++
7e1+
6+2+
543+
++++
```
`ans = 1+min(7, 7, infinite, infinite)`
instead of 
`ans = 1+min(7, 1, infinite, infinite)`

[Note] => *This example is just for intuition. For real example please see https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/4115*

**Conclusion**:-
* DFS without memoization works fine but gives TLE
* DFS with memoization may give correct but not necessary
* BFS searches level wise and gives result as soon as finds exit which is best for this problem

*Please upvote if you like the solution and comment if have queries*