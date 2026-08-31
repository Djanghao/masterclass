# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5077215/](https://leetcode.com/problems/minimum-falling-path-sum-ii/solutions/5077215/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def min_falling_path_sum(grid)
    dp = Array.new(grid.length) { Array.new(4, 0) }
    get_two_smallest(grid, dp, 0)
    (1...grid.length).each do |i|
        get_two_smallest2(grid, dp, i)
    end
    return dp[grid.length-1][1]
end

def get_two_smallest(grid, dp, row)
    dp[row][1] = 100
    dp[row][3] = 100
    (0...grid.length).each do |i|
        if grid[row][i] < dp[row][1]
            dp[row][2] = dp[row][0]
            dp[row][3] = dp[row][1]
            dp[row][0] = i
            dp[row][1] = grid[row][i]
        elsif grid[row][i] < dp[row][3]
            dp[row][2] = i
            dp[row][3] = grid[row][i]
        end
    end
end

def get_two_smallest2(grid, dp, row)
    dp[row][1] = Float::INFINITY
    dp[row][3] = Float::INFINITY
    (0...grid.length).each do |i|
        current = grid[row][i]
        if i != dp[row-1][0]
            current += dp[row-1][1]
        else
            current += dp[row-1][3]
        end
        if current < dp[row][1]
            dp[row][2] = dp[row][0]
            dp[row][3] = dp[row][1]
            dp[row][0] = i
            dp[row][1] = current
        elsif current < dp[row][3]
            dp[row][2] = i
            dp[row][3] = current
        end
    end
end
```