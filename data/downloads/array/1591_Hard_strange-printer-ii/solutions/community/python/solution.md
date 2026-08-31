# 🖍️⿻ Topological Sort | Python

**Author:** hailyngx
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/4229352/](https://leetcode.com/problems/strange-printer-ii/solutions/4229352/)

---

# Intuition
The problem can be visualized as a dependency graph where each color depends on which colors should be printed before it. To do this, we'll create a graph representing the dependencies between colors.

# Approach
* For each color c, find the minimum and maximum rows and columns where this color appears. This forms the rectangle where this color needs to be printed.
* If any other color x (except color c) appears within this rectangle, it means color c should be printed after color x. Hence, there is a directed edge from color c to color x in our graph.
* Once we build the graph, we need to check for any cycles using a topological sort. If there are any cycles, it's not possible to print the targetGrid.
* If there are no cycles, it's possible to print the targetGrid.

# Complexity
- Time complexity: O(m*n)
- Space complexity: O(m*n)

# Code
```
class Solution(object):
    def isPrintable(self, targetGrid):
        """
        :type targetGrid: List[List[int]]
        :rtype: bool
        """
        # extract unique colors in the grid
        colors = set()
        for row in targetGrid:
            for color in row:
                colors.add(color)

        row = len(targetGrid)
        col = len(targetGrid[0])

        # set initial boundaries for each color
        boundaries = {color: [float('inf'), float('inf'), float('-inf'), float('-inf')] for color in colors}

        # update boundaries for each color
        for i in range(row):
            for j in range(col):
                color = targetGrid[i][j]
                boundaries[color][0] = min(boundaries[color][0], i)
                boundaries[color][1] = min(boundaries[color][1], j)
                boundaries[color][2] = max(boundaries[color][2], i)
                boundaries[color][3] = max(boundaries[color][3], j)

        # build a dependency graph to see which color should be colored before which color
        graph = defaultdict(set)
        for color, (up, left, down, right) in boundaries.items():
            seen = set()
            for i in range(up, down + 1):
                for j in range(left, right + 1):
                    # if a different color is seen within the boundaries of this color, it means that this color should be colored after that different color i.e. 4 should be colored before 3 in the second example
                    if targetGrid[i][j] != color and targetGrid[i][j] not in seen:
                        graph[color].add(targetGrid[i][j])
                        seen.add(targetGrid[i][j])

        def dfs(color, visited, graph):
            # there's a cyle
            if visited[color] == 1:
                return False
            # skip
            if visited[color] == 2:
                return True
            visited[color] = 1
            for dep in graph[color]:
                if not dfs(dep, visited, graph):
                    return False
            visited[color] = 2
            return True
        
        # perform dfs on each color to check for cycles
        visited = {color: 0 for color in colors}
        for color in colors:
            if visited[color] == 0 and not dfs(color, visited, graph):
                return False
        
        # If no cycles, return True (printable), otherwise False.
        return True



        
```