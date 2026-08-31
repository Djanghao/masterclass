# Ruby solution: make flatten, rotate, convert into two dimensional array.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/834715/](https://leetcode.com/problems/shift-2d-grid/solutions/834715/)

---

##### Leetcode: 1260. Shift 2D Grid.


Flatten an array, rotate flat array by the language tools, save appropriate elements of a rotated flat array into two dimensional array for return.


Ruby code:
```Ruby
# Leetcode: 1260. Shift 2D Grid.
# https://leetcode.com/problems/shift-2d-grid/
# Runtime: 84 ms, faster than 33.33% of Ruby online submissions for Shift 2D Grid.
# Memory Usage: 10.2 MB, less than 85.71% of Ruby online submissions for Shift 2D Grid.
# @param {Integer[][]} grid
# @param {Integer} k
# @return {Integer[][]}
def shift_grid(grid, k)
    m = grid.size
    n = grid[0].size
    grid.flatten.rotate(-k).each_with_index do |value,i|
        grid[i/n][i - (i/n)*n] = value
    end
    grid
end
```