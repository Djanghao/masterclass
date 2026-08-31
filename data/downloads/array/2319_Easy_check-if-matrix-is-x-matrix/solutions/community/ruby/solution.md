# Ruby solution

**Author:** raviiitb
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2220172/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2220172/)

---

```
def check_x_matrix(grid)
    size = grid.size
    size.times do |i|
        if grid[i][i] == 0 || grid[i][size - 1 -i] == 0
            return false
        else
            grid[i][i] = nil
            grid[i][size - 1 -i] = nil
        end
    end
    grid.flatten.compact.all?(0) ? true : false
end
```