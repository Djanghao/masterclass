# Python fast, intuitive with detailed explanation

**Author:** pranav_udupa
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/3982369/](https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/3982369/)

---

# Intuition
If you haven't looked ar Number of distinct islands 1, do that first. There are four fundamental ideas.

1. Find the shape of the island.
2. Find 4 possible reflections for this shape.
3. Find 4 possible rotations for this shape.
4. Choose one of these 4 rotations + 4 reflections as a representative for this shape and use it as a key to our hashmap for this island.

# Approach
## 1. Find the shape of the island.
Simple DFS, always start at top left. Same as Number of distinct islands 1.

## 2. Find 4 possible reflections for this shape.
For each point (x, y) in the original shape, it has 4 corresponding reflection points.

- (x, y)
- (-x, y)
- (x, -y)
- (-x, y)

Find all these, sort them and add to our list of reflections.

## 3. Find 4 possible rotations for this shape.
For each point (x, y) in the original shape, it has 4 corresponding rotated points.

- (y, x)
- (y, -x)
- (-y, x)
- (-y, -x)

Find all these, sort them and add to our list of rotations.

## 4. Choose one of these 4 rotations + 4 reflections as a representative for this shape and use it as a key to our hashmap for this island.

We can choose the smallest shape as our representative for the 8 reflections and rotations, and use it as the key to our hashmap.

# Complexity
- ## Time complexity:
$$O(m * n + d * k * logk)$$ or $$O(m*n*log(m*n))$$ where 
`m, n = height/width of the grid`
`d = Number of islands`
`k = number of cells in the biggest island`

dfs = $$(O(m * n))$$
cannonical = $$O(k * logk)$$
Main loop = $$O(m * n + d * k * logk)$$

But since $$(d * k)$$ is bounded by $$(m * n)$$, can be simplified to

$$O(m * n + m * n * log(m * n))$$
= $$O(m*n*log(m*n))$$




- ## Space complexity:
$$O(m\xD7n)$$ where
`m, n = height/width of the grid`

It's easy to see why this should be at most,
$$O(m\xD7n\xD7k)$$ where
`k = number of cells in the biggest island`

But, since each cell is only stored a constant number of times (8 total transformations), so amortizing O(k), would be constant.

# Code
```python
class Solution:
    def numDistinctIslands2(self, grid: List[List[int]]) -> int:
        def dfs(x, y, coords):
            if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[0]) or grid[x][y] == 0:
                return
            grid[x][y] = 0
            coords.append((x, y))
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                dfs(x + dx, y + dy, coords)

        def canonical(coords):
            shapes = []
            for i, j in [(1, 1), (1, -1), (-1, 1), (-1, -1)]:
                # Reflection
                shape = sorted([(x * i, y * j) for x, y in coords])
                shape = [(x - shape[0][0], y - shape[0][1]) for x, y in shape]
                shapes.append(shape)

                # Rotations
                shape = sorted([(y * i, x * j) for x, y in coords])
                shape = [(x - shape[0][0], y - shape[0][1]) for x, y in shape]
                shapes.append(shape)
                
            return min(shapes)

        distinct_islands = set()
        for x in range(len(grid)):
            for y in range(len(grid[0])):
                if grid[x][y] == 1:
                    coords = []
                    dfs(x, y, coords)
                    distinct_islands.add(tuple(canonical(coords)))

        return len(distinct_islands)
```