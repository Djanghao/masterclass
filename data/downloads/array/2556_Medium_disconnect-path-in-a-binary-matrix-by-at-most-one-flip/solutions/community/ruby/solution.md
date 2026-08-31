# Ruby - DP

**Author:** roman-dubrovsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/5623881/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/5623881/)

---

# Approach
The goal of this solution is to find the tight cell. This is a cell which visit every uniq path from start to finish point (except these points). For getting these value we can multiply number of pathes from start point to current and number of pathes from current point to the finish. For calculating these values we can use a simple dynamic programming.

## Algorithm ##

1) Make a dp table which counts number of uniq pathes from cell [0, 0]. For cell [i, j] this value:

```ruby
paths1[i][j] = paths1[i - 1][j] + paths1[i][j - 1]
```

2) Make a dp table which counts number of uniq pathes to cell [m - 1, n - 1]. For cell [i, j] this value:

```ruby
paths2[i][j] = paths2[i + 1][j] + paths2[i][j + 1]
```

3) Via previous calculation we know numbers of uniq pathes which visit every cell. This value is equal `paths1[i][j] * paths2[i][j]`. So for finding result of task we need to find a cell that every uniq path visits.

So if we find the cell where

```
paths1[i][j] * paths2[i][j] == number_of_uniq_paths
``` 

we find the cell which disconnect the matrix. The number of uniq paht we can find in the finish cell for every dp matrix: `paths1[m - 1][n - 1]` or `paths2[0][0]`


# Complexity
- Time complexity:
 **O(m*n)**

# Code
```
class CheckIfMatrixDisconnected
    attr_reader :grid, :m, :n, :paths1, :paths2

    def initialize(grid)
        @grid = grid
        @m = grid.length
        @n = grid.first.length

        @paths1 = initialize_dp_store
        @paths2 = initialize_dp_store
    end

    def call
        # paths from 0,0 to m-1, n-1
        grid.each.with_index do |row, i|
            row.each.with_index do |value, j|
                next if value.zero?
                if i == 0 && j == 0
                    paths1[i][j] = 1
                else  
                    paths = []
                    paths << paths1[i-1][j] if i > 0
                    paths << paths1[i][j-1] if j > 0
                    paths1[i][j] = paths.sum
                end
            end
        end

        # paths from m-1, n-1 to 0,0
        grid.reverse_each.with_index do |row, di|
            row.reverse_each.with_index do |value, dj|
                next if value.zero?

                i = m - 1 - di
                j = n - 1 - dj

                if di == 0 && dj == 0
                    paths2[i][j] = 1
                else  

                    paths = []
                    paths << paths2[i+1][j] if di > 0
                    paths << paths2[i][j+1] if dj > 0
                    paths2[i][j] = paths.sum
                end
            end
        end

        # find tight place
        target = paths2[0][0]

        m.times do |i|
            n.times do |j|
                next if i == 0 && j == 0
                next if i == m - 1 && j == n - 1

                if paths1[i][j] * paths2[i][j] == target
                    return true
                end
            end
        end

        false
    end

    private

    def initialize_dp_store
        Array.new(m) do
            Array.new(n) { 0 }
        end
    end
end


def is_possible_to_cut_path(grid)
    CheckIfMatrixDisconnected.new(grid).call
end
```