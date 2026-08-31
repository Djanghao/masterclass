# Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3652755/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3652755/)

---

# Intuition
This is similar to Longest Increasing Path in a Matrix and can be solved with memoization.

# Approach
1. Create class variables for dirs, mod, grid, m, n, and memo.  (Memo must be an array here -- an object is too slow.)
2. Find the max path from each starting point with a helper function and add them together.
3. Return the total mod 10**9+7

Helper function:
1. Return stored value if it's already been checked.
2. Start each path at 1.  Check if their are paths in each direction (direction keeps you inside the grid and the the value is increasing): if so, add it to total.
3. Memoize total, use mod for space, and return.

# Complexity
- Time complexity:
$$O(n)$$, where *n* is the total number of cells.  ($$O(m * n)$$ if you prefer.)

- Space complexity:
$$O(n)$$ or $$O(m * n)$$ (same as time).

# Code
```
@dirs = [[1,0],[0,1],[-1,0],[0,-1]]
@mod = 1000000007

def count_paths(grid)
    @grid = grid
    @m,@n = grid.length, grid[0].length
    @memo = Array.new(@m) { Array.new(@n,nil) }

    total = 0
    (0...@m).each do |i|
        (0...@n).each do |j|
            total += max_path(i,j)
        end
    end

    total % @mod
end

def max_path(i,j)
    return @memo[i][j] if @memo[i][j]

    total = 1
    @dirs.each do |dir|
        a,b = dir
        x,y = a+i,b+j
        if (0...@m).cover?(x) && (0...@n).cover?(y) && @grid[x][y] > @grid[i][j]
            total += max_path(x,y)
        end
    end

    @memo[i][j] = total % @mod
end
```