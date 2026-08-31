# ruby 100% both

**Author:** petertwalker
**Votes:** 0
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5614701/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5614701/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def num_magic_squares_inside(grid)
    # iterate through each possible 3x3
    # flatten.uniq && row.sum == 15 col.sum == 15 diagnols.sum == 15
    return 0 if grid.size < 3 || grid[0].size < 3
    count = 0
    for x in 0..grid.size-3 do
        for y in 0..grid[0].size-3 do
            sub_grid = [[grid[x][y], grid[x][y+1], grid[x][y+2]],
                        [grid[x+1][y], grid[x+1][y+1], grid[x+1][y+2]],
                        [grid[x+2][y], grid[x+2][y+1], grid[x+2][y+2]]]
            count += 1 if num_magic_square(sub_grid)
        end
    end
    count
end

def num_magic_square(sub_grid)
    return false if sub_grid.flatten.uniq.count != 9
    return false if sub_grid.flatten.max > 9
    for row in sub_grid do
        return false if row.sum != 15
    end
    for row in sub_grid.transpose do
        return false if row.sum != 15
    end
    sub_grid[0][0] + sub_grid[2][2] == sub_grid[0][2] + sub_grid[2][0]
end
```