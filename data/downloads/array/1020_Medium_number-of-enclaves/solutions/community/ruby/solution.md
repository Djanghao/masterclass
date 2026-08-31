# RUBY Recursive DFS beats 100% Explained

**Author:** jolswlf
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3361561/](https://leetcode.com/problems/number-of-enclaves/solutions/3361561/)

---

# Explanation 
Refer to my solution for [1254. Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/solutions/3358555/ruby-recursive-dfs-beats-100-explained/?envType=study-plan&id=graph-i&orderBy=most_votes) for a complete explanation. The only difference is that in this one we keep a counter `@land` to keep track of the tiles instead of the islands. 


# Code
```
def num_enclaves(grid)
    islands = 0
    @len_i = grid.length
    @len_j = grid[0].length 
    @map = grid
    @set_i = Set.new
    @set_j = Set.new
    @land = 0
    for i in 1...@len_i - 1 do 
        for j in 1...@len_j - 1 do
            if @map[i][j] == 1
                dfs(i, j)
                islands += @land if @set_i.disjoint?([0, @len_i - 1]) && @set_j.disjoint?([0, @len_j - 1])
                @set_i.clear()
                @set_j.clear()
                @land = 0
            end
        end

    end
    islands
end

def dfs(i, j)
    return if i < 0 || i >= @len_i || j < 0 || j >= @len_j
    return unless @map[i][j] == 1
    @set_i << i
    @set_j << j
    @map[i][j] = 0
    @land += 1
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
end
```