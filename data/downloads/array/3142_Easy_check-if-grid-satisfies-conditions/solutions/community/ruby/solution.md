# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5289442/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5289442/)

---


# Code
```
# @param {Integer[][]} grid
# @return {Boolean}
def satisfies_conditions(grid)
    i = 0
    while i < grid.size
        j = 0
        while j < grid[0].size
            if grid[i][j + 1] and grid[i][j] == grid[i][j + 1]
                return false
            end

            if grid[i+1] and grid[i][j] != grid[i+1][j]
                return false
            end

            j += 1
        end
        i += 1
    end
    
    true
end
```