# Python 3 | BFS, DFS, Math | Explanation

**Author:** idontknoooo
**Votes:** 160
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/947138/](https://leetcode.com/problems/minimum-knight-moves/solutions/947138/)

---

All solutions below are based on **symmetry**, meaning `(x, y)`, `(-x, y)`, `(x, -y)`, `(-x, -y)` will have the same results.
### Approach \\#1 - One-direction BFS with pruning
- Use pruning to remove unnecessary location
	-  `-1 <= a+dx <= x+2 and -1 <= b+dy <= y+2:`
- Time Complexity: `O(|x|*|y|)`
```
class Solution:
    def minKnightMoves(self, x: int, y: int) -> int:
        q = collections.deque([(0, 0, 0)])
        x, y, visited = abs(x), abs(y), set([(0,0)])
        while q:
            a, b, step = q.popleft()
            if (a, b) == (x,y): return step
            for dx, dy in [(1,2),(2,1),(1,-2),(2,-1),(-1,2),(-2,1)]:  # no need to have (-1, -2) and (-2, -1) since it only goes 1 direction
                if (a+dx, b+dy) not in visited and -1 <= a+dx <= x+2 and -1 <= b+dy <= y+2:
                    visited.add((a+dx, b+dy))
                    q.append((a+dx, b+dy, step+1))
        return -1 
```
### Approach \\#2 - Two-direction BFS with pruning
- Start BFS from both origin & target coordinates
- Use pruning to remove unnecessary location
	-  `-1 <= a+dx <= x+2 and -1 <= b+dy <= y+2:`
- Time Complexity: `O(|x|*|y|)`, ideally half time costs of **approach \\#1**
```
class Solution:
    def minKnightMoves(self, x: int, y: int) -> int:
        x, y = abs(x), abs(y)
        qo = collections.deque([(0, 0, 0)])
        qt = collections.deque([(x, y, 0)])
        do, dt = {(0,0): 0}, {(x,y): 0}
        while True:
            ox, oy, ostep = qo.popleft()
            if (ox, oy) in dt: return ostep + dt[(ox, oy)]
            tx, ty, tstep = qt.popleft()
            if (tx, ty) in do: return tstep + do[(tx, ty)]
            for dx, dy in [(1,2),(2,1),(1,-2),(2,-1),(-1,2),(-2,1),(-1,-2),(-2,-1)]:
                if (ox+dx, oy+dy) not in do and -1 <= ox+dx <= x+2 and -1 <= oy+dy <= y+2:
                    qo.append((ox+dx, oy+dy, ostep+1))
                    do[(ox+dx,oy+dy)] = ostep+1
                if (tx+dx, ty+dy) not in dt and -1 <= tx+dx <= x+2 and -1 <= ty+dy <= y+2:
                    qt.append((tx+dx, ty+dy, tstep+1))
                    dt[(tx+dx,ty+dy)] = tstep+1
        return -1
```
### Approach \\#3 - DFS + Math + Memoization
- Try to move from target to origin as fast as possible
- When reaching to certain point, handle the special situation and return the result
- Time Complexity: `O(|x|*|y|)`
```
class Solution:
    def minKnightMoves(self, x: int, y: int) -> int:
        @lru_cache(None) 
        def dp(x,y):
            if x + y == 0: return 0
            elif x + y == 2: return 2
            return min(dp(abs(x-1),abs(y-2)), dp(abs(x-2),abs(y-1))) + 1
        return dp(abs(x),abs(y))
```
### Approach \\#4 - Math
- Pretty much the same idea as previous
- With Math induction, you will find a pattern with division, which can replace previous DFS process
- Time Complexity: `O(1)`
```
class Solution:
    def minKnightMoves(self, x: int, y: int) -> int:
        x, y = abs(x), abs(y)
        if (x < y): x, y = y, x
        if (x == 1 and y == 0): return 3        
        if (x == 2 and y == 2): return 4        
        delta = x - y
        if (y > delta): return delta - 2 * int((delta - y) // 3);
        else: return delta - 2 * int((delta - y) // 4);
```