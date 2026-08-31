# General Array Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/4193832/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/4193832/)

---


# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def max_sum(grid)
    
    max = 0
    x = 0
    while x + 3 < grid[0].size + 1
        y = 0
        while (y + 3) < grid.size + 1
            potential_answer = grid[y][x..x+2].sum + grid[y+1][x+1] + grid[y+2][x..x+2].sum    
            if potential_answer > max
                max = potential_answer
            end
            y += 1
        end

        x += 1
    end

    max
end

```