# RUBY Recursive DFS beats 100% Explained

**Author:** jolswlf
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/3358555/](https://leetcode.com/problems/number-of-closed-islands/solutions/3358555/)

---

# Intuition
Run a dfs for every island and only count it if it doesn't touch any edges.

# Approach
Traverse the array like normal and once you find land run a dfs. Turn the 0s to 1s and add the coordinates to two sets to keep track of visited tiles. Once the dfs is over if our sets don't contain "0" (top and left borders of the map) or `grid.length`  / `grid[0].length ` (right and bottom borders) we can add 1 to the island counter. 

# Complexity
- Time complexity:
$$O(nm)$$

- Space complexity:
$$O(nm)$$ (Worst case)

# Code
```
def closed_island(grid)
    islands = 0
    @len_i = grid.length
    @len_j = grid[0].length 
    @map = grid
    @set_i = Set.new
    @set_j = Set.new
    for i in 1...@len_i - 1 do 
        for j in 1...@len_j - 1 do
            if @map[i][j] == 0
                dfs(i, j)
                islands += 1 if @set_i.disjoint?([0, @len_i - 1]) && @set_j.disjoint?([0, @len_j - 1])
                @set_i.clear()
                @set_j.clear()
            end
        end

    end
    islands
end

def dfs(i, j)
    return if i < 0 || i >= @len_i || j < 0 || j >= @len_j
    return unless @map[i][j] == 0
    @set_i << i
    @set_j << j
    @map[i][j] = 1
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
end
```