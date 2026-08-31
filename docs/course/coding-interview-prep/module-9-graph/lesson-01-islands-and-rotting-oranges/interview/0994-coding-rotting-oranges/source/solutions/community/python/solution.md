# Python BFS: Easy-to-understand with Explanation

**Author:** zayne-siew
**Votes:** 76
**Link:** [https://leetcode.com/problems/rotting-oranges/solutions/1546489/](https://leetcode.com/problems/rotting-oranges/solutions/1546489/)

---

### Preamble

I've posted a solution about a similar problem before: [#980 Uinque Paths III](https://leetcode.com/problems/unique-paths-iii/). In my opinion, the solution to this problem follows a similar train of thought, albeit using a different recursive method (BFS instead of DFS). You can read my post for problem #980 [here](https://leetcode.com/problems/unique-paths-iii/discuss/1535158/Python-Backtracking:-Easy-to-understand-with-Explanation) to understand the thought process better before continuing with this post.

---

### Introduction

The goal is to traverse from every rotting orange (`grid[x][y] == 2`) through every fresh orange (`grid[x][y] == 1`) until all fresh oranges have been visited once (i.e. all fresh oranges have rotten) or no more traversion is possible (i.e. no adjacent fresh oranges are found).

Since, for each passing minute, all adjacent fresh oranges become rotten, we need to recursively check for the coordinates of rotting oranges after each iteration. More specifically, we only need to keep track of the oranges that have rotten in that iteration, since 1) that particular coordinate has never been reached before and thus needs to be checked for adjacent oranges; and 2) all previous coordinates have been checked previously and need not be checked again. For this purpose, we can implement a queue:

```python
from collections import deque
queue = deque()
# populate with coordinates of rotten oranges
for _ in range(len(queue)):
	x, y = queue.popleft()  # remove coordinate to check for adjacent fresh oranges
	# check for fresh oranges...
	queue.append((i, j))  # add new rotten orange coordinate
```

We also need to keep track of all fresh oranges, since this is our success condition. Fresh oranges are: 1) to be visited, otherwise we should return `-1` if the orange stays fresh, and 2) visited only once, since upon visiting it becomes rotten. To perform `(x, y) in lst` checks and the deletion of `(x, y)` in O(1) time, we can utilise a set:

```python
visit = set()
# populate with coordinates of fresh oranges
while visit:
	# check if adjacent coordinates are rotten oranges...
	visit.remove((x, y))  # remove new rotten orange
```

This leaves us with the initial population of the data structures, and the actual BFS. We can thus derive the following implementation:

1. Loop through `grid` and find the fresh and rotten oranges.
2. While there are fresh and rotten oranges to loop through, determine if any fresh oranges will become rotten in that iteration. Repeat for as many iterations as needed (BFS style).
3. Return the number of iterations, checking if there are fresh oranges remaining.

---

### Code

```python
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        visit, curr = set(), deque()
		# find all fresh and rotten oranges
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    visit.add((i, j))
                elif grid[i][j] == 2:
                    curr.append((i, j))
        result = 0
        while visit and curr:
			# BFS iteration
            for _ in range(len(curr)):
                i, j = curr.popleft()  # obtain recent rotten orange
                for coord in ((i-1, j), (i+1, j), (i, j-1), (i, j+1)):
                    if coord in visit:  # check if adjacent orange is fresh
                        visit.remove(coord)
                        curr.append(coord)
            result += 1
		# check if fresh oranges remain and return accordingly
        return -1 if visit else result
```

---

### Final Result

![image](./images/0.png)

Please upvote if this has helped you! Appreciate any comments as well :)