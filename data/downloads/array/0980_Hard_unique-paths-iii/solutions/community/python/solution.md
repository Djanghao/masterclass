# Python Backtracking: Easy-to-understand with Explanation

**Author:** zayne-siew
**Votes:** 100
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/1535158/](https://leetcode.com/problems/unique-paths-iii/solutions/1535158/)

---

### Introduction

The goal is to travel through the ```grid``` from the starting point (```grid[x][y] == 1```) to the ending point (```grid[x][y] == 2```) while visiting every non-obstacle coordinate (```grid[x][y] == 0```). We can split the problem up into 3 parts:

1. How do we know where to start and where to end?
2. How do we know if we've visited every non-obstacle coordinate?
3. At each coordinate ```(x, y)```, how do we tell where we can move to next?

---

### Part 1: Finding our starting and ending points

Yes, admittedly this is very trivial, but its the first thing I want to settle before we move on to tackle the more difficult logic. The reason this part is even needed in the first place is because the starting and ending points can be anywhere in the given grid, unlike most other grid-traversing problems where the starting and ending positions are fixed.

The simplest of implementations to find the starting and ending points would be:

```python
def uniquePathsIII(self, grid: List[List[int]]) -> int:
	start = end = None
	for i in range(len(grid)):
		for j in range(len(grid[0])):
			if grid[i][j] == 1:
				start = (i, j)
			elif grid[i][j] == 2:
				end = (i, j)
	pass  # main logic here
```

This is the most brute-force solution with O(mn) time complexity, but it does the job. We could optimise it further of course:

- Break after ```start``` and ```end``` are found (i.e. not ```None```)
- Flattening the ```grid``` and using basic math to determine the positions of ```start``` and ```end```

For now, let's leave it as it is. (We'll come back to it in Part 2)

---

### Part 2: Keeping track of the success condition

When we finally reach the ending point, we need to know if the path we took was valid. Given the criteria that determine the validity of a path, we have the following implications:

1. **We need to know the positions of all non-obstacle coordinates before we traverse the grid.**

Otherwise, we won't be able to tell if we've visited all of them. This also implies that we cannot determine the positions dynamically; if we try to check for all adjacent non-obstacle coordinates at every ```(x, y)```, we will end up having to check ```grid``` again once we reach the end to determine path validity.

This means we need some kind of data structure to store the non-obstacle coordinates. Then, at each coordinate ```(x, y)```, we can check if the adjacent coordinates are non-obstacles, and update the data structure accordingly. This helps us when we get to the ending point, since we can check for some property of the data structure (size, most likely) to immediately determine if the path is valid.

2. **We need to keep track of the 'visited status' of each non-obstacle coordinate at all times.**

Otherwise, we may end up crossing our paths, or miss one non-obstacle coordinate out in our traversion. Since each non-obstacle coordinate only needs to be visited once, the data structure storing these non-obstacle coordinates double up as an array of 'flags': their presence in the data structure can serve to indicate whether or not they have been visited (depending on implementation).

In consideration of these 2 implications, my implementation is to use a set as the data structure. Before traversion, we can store all non-obstacle coordinates into the set. Then, during traversion, we can check if a coordinate is non-obstacle by checking if it is present in the set, and remove each coordinate when we visit it.

The advantage of this implementation is twofold:

- **The functions we need from the set data structure can all be done in O(1) average time complexity**. You can read more about the time complexities [here](https://wiki.python.org/moin/TimeComplexity). The operations we are particularly interested in are ```x in s```, insertion, and deletion (from dict). Hence, apart from the O(mn) auxiliary space, there is no considerable overhead to take into consideration.
- **We can find all non-obstacle coordinates while finding the starting and ending points simultaneously**. In comparison with potentially faster methods like flattening ```grid```, the brute-force algorithm that we used earlier (see Part 1) is much better for finding multiple coordinates, since we have no idea how many non-obstacle coordinates there are or where to look for them.

```python
def uniquePathsIII(self, grid: List[List[int]]) -> int:
	start = end = None
	visit = set()  # non-obstacle coordinates to visit for path to be valid
	for i in range(len(grid)):
		for j in range(len(grid[0])):
			if grid[i][j] == 1:
				start = (i, j)
			elif grid[i][j] == 2:
				end = (i, j)
				visit.add(end)  # of course, we need to visit the end coordinate too!
			elif grid[i][j] == 0:
				visit.add((i, j))  # non-obstacle coordinate; add to visit
	pass  # main logic here
```

**EDIT:** I missed this myself, but there is a way to utilise O(1) auxiliary space after all. Simply 1) having a counter to keep track of how many non-obstacle coordinates we have left to visit while 2) modifying `grid` in-place once we visit these coordinates to denote 'visited' status is good enough. Credit to [@pedro](https://leetcode.com/pedro/) for spotting this improvement. You can view the edited implementation below.

---

### Part 3: Moving through the grid

Obviously, we don't actually know if a particular adjacent non-obstacle coordinate will be good or not (i.e. part of the valid path, if any) until we actually try to traverse through the coordinate. This is where backtracking comes in: We can just move to any adjacent non-obstacle coordinate, and if it (eventually) leads to a dead end or an invalid path, we can 'return' (backtrack) to the current coordinate and try again with a different non-obstacle coordinate.

There are a few considerations:

- A given coordinate can be the diverging point for multiple valid paths. In other words, for a given coordinate ```(x, y)```, any combination of the adjacent coordinates ```(x-1, y)```, ```(x+1, y)```, ```(x, y-1)```, ```(x, y+1)``` can lead to valid paths (if those coordinates are non-obstacles). This means that **even if we do find a valid path, we still need to 'return' back to the current coordinate and try again for all possible adjacent coordinates**.
- Upon 'returning' to a given coordinate, we need to likewise 'un-visit' the coordinate we came from. This means that **we need to add the coordinate back into the set before we try a different path**.
- The success condition in all of this backtracking is when we reach the ending point with no more coordinates to visit (i.e. the set is empty). We then need to **relay this information back to previous coordinates to consolidate all possible paths, all the way until we backtrack back to the starting point**.

---

### Implementation

Original Answer (using set):

```python
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
		# first, prepare the starting and ending points
		# simultaneously, record all the non-obstacle coordinates
        start = end = None
        visit = set()
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 0:
                    visit.add((i, j))
                elif grid[i][j] == 1:
                    start = (i, j)
                elif grid[i][j] == 2:
                    end = (i, j)
                    visit.add((i, j))
        
        def backtrack(x, y, visit):
            if (x, y) == end:
				# implement success condition: valid only if there are no more coordinates to visit
                return len(visit) == 0
            result = 0  # assume no valid paths by default
			
			# we need to try every possible path from this coordinate
            if (x-1, y) in visit:
				# the coordinate directly above this one is non-obstacle, try that path
                visit.remove((x-1, y))  # first, note down the 'visited status' of the coordinate
                result += backtrack(x-1, y, visit)  # then, DFS to find all valid paths from that coordinate
                visit.add((x-1, y))  # last, reset the 'visited status' of the coordinate
            if (x+1, y) in visit:
				# the coordinate directly below this one is non-obstacle, try that path
                visit.remove((x+1, y))
                result += backtrack(x+1, y, visit)
                visit.add((x+1, y))
            if (x, y-1) in visit:
				# the coordinate directly to the left of this one is non-obstacle, try that path
                visit.remove((x, y-1))
                result += backtrack(x, y-1, visit)
                visit.add((x, y-1))
            if (x, y+1) in visit:
				# the coordinate directly to the right of this one is non-obstacle, try that path
                visit.remove((x, y+1))
                result += backtrack(x, y+1, visit)
                visit.add((x, y+1))
            return result
        
        return backtrack(start[0], start[1], visit)  # we start from the starting point, backtrack all the way back, and consolidate the result
```

**EDIT:** Optimised answer (based on comments):

```python
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        
        # iterate through the grid to get relevant info
        start = None  # to store starting point
        count = 0  # to count number of squares to walk over
        for i in range(m):
            for j in range(n):
                count += grid[i][j] == 0
                if not start and grid[i][j] == 1:
                    start = (i, j)
        
        def backtrack(i: int, j: int) -> int:
            """
            Backtracking algo to find all valid paths from (i, j).
            :param i: Index of row (where top = 0) of coordinate.
            :param j: Index of column (where left = 0) of coordinate.
            :returns: Total number of valid paths from (i, j).
            """
            nonlocal count
            result = 0
            for x, y in ((i-1, j), (i+1, j), (i, j-1), (i, j+1)):
                # border check
                if 0 <= x < m and 0 <= y < n:
                    if grid[x][y] == 0:
                        # traverse down this path
                        grid[x][y] = -1
                        count -= 1
                        result += backtrack(x, y)
                        # backtrack and reset
                        grid[x][y] = 0
                        count += 1
                    elif grid[x][y] == 2:
                        # check if all squares have been walked over
                        result += count == 0
            return result
        
        # perform DFS + backtracking to find valid paths
        return backtrack(start[0], start[1])
```

Based on my submission results, there seems to be a slight improvement in both runtime and memory usage.

---

### Final Result

![image](./images/0.png)

Please upvote if this has helped you! Appreciate any comments as well :)
