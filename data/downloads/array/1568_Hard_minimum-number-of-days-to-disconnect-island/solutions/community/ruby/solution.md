# Ruby || DFS

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5621411/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5621411/)

---


# Code
```ruby
class Grid
    include Enumerable

    attr_reader :grid, :h, :w, :hr, :wr

    def initialize(grid)
        @grid, @h, @w = grid, grid.size, grid.first.size
        @hr, @wr = (0...h), (0...w)
    end

    def each
        grid.each_with_index {|row, ridx|
            row.each_with_index {|cell, cidx| yield(cell, ridx, cidx) }
        }
    end

    def dfs(r, c, cell = nil)
        return false if @vis.dig(r, c) || (cell || grid.dig(r, c)) != 1
        @vis[r][c] = true
        dfs(r + 1, c) if r + 1 < h
        dfs(r - 1, c) if r > 0
        dfs(r, c + 1) if c + 1 < w
        dfs(r, c - 1) if c > 0
        true
    end

    def count_islands
        @vis = Array.new(h) { Array.new(w, false) }
        count {|cell, ridx, cidx| dfs(ridx, cidx, cell) }
    end

    def solve
        return 0 unless count_islands == 1
        each {|cell, ridx, cidx|
            if cell == 1 then
                @grid[ridx][cidx] = 0
                return 1 unless count_islands == 1
                @grid[ridx][cidx] = 1
            end
        }
        2
    end
end

def min_days(grid) = Grid.new(grid).solve
```