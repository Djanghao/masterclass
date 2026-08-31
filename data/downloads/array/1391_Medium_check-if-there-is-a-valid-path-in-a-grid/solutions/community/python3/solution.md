# [Python] SUPER EASY Idea: just walk the maze based on the rule

**Author:** sjtuluo
**Votes:** 11
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/547633/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/547633/)

---

0 means going right, 1 means upwards, 2 means downwards, 3 means going left. 

At cell with type 1, you can either enter it with right direction and leave it keeping the same direction, or enter it with left and leave for the left cell. So the rule for cell '1' is `{0: 0, 3: 3}`, and we can do the same transition rule for the other types.

Then we can start walking in the maze. The initial position is (0, 0), and the initial direction can have two cases. If we walk outside of the maze, walk to a visited position or reach a pixel which does not permit the current direction, we exit the loop and return `False`.

Runtime: 1460 ms, faster than 87.50% of Python3 online submissions for Check if There is a Valid Path in a Grid.
Memory Usage: 27.6 MB, less than 100.00% of Python3 online submissions for Check if There is a Valid Path in a Grid.

```
    def hasValidPath(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        
        # dict for transition rule
        rules = {
            1: {0: 0, 3: 3},
            2: {1: 1, 2: 2},
            3: {0: 2, 1: 3},
            4: {1: 0, 3: 2},
            5: {0: 1, 2: 3},
            6: {2: 0, 3: 1},
        }
        
        # dict for update rule
        moves = {
            0: (0, 1),
            1: (-1, 0),
            2: (1, 0),
            3: (0, -1),
        }
        
        x, y = (0, 0)
        k = grid[0][0]
        d = list(rules[k].keys())
        d1, d2 = d[0], d[1]
        
        def walkMaze(x, y, d):
            visited = set([(x, y)])
            while True:
                if x < 0 or x >= m or y < 0 or y >= n:
                    return False
                
                k = grid[x][y]
                if d not in rules[k]:
                    return False
                
                if (x, y) == (m - 1, n - 1):
                    return True
                
                d = rules[k][d]
                x, y = (x + moves[d][0], y + moves[d][1])
                if (x, y) in visited: # there is a loop
                    return False
                visited.add((x, y))
        
        return walkMaze(x, y, d1) or walkMaze(x, y, d2)

```