# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5598473/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5598473/)

---


# Code
```

class NeighborSum
    attr_accessor :grid

=begin
    :type grid: Integer[][]
=end
    def initialize(grid)
        @grid = grid
    end


=begin
    :type value: Integer
    :rtype: Integer
=end
    def adjacent_sum(value)
        total = 0
        y, x = find_y_and_x value

        if y > 0
            total += @grid[y-1][x]
        end

        if y + 1 < @grid.size 
            total += @grid[y+1][x]
        end

         if x > 0
            total += @grid[y][x-1]
        end

        if x + 1 < @grid[0].size 
            total += @grid[y][x+1]
        end

        total
    end


=begin
    :type value: Integer
    :rtype: Integer
=end
    def diagonal_sum(value)
        total = 0
        y, x = find_y_and_x value

        if y > 0 and x > 0
            total += @grid[y-1][x-1]
        end

        if y > 0 and x + 1 < @grid[0].size 
            total += @grid[y-1][x+1]
        end

        if y + 1 < @grid.size and x > 0
            total += @grid[y+1][x - 1]
        end

        if y + 1 < @grid.size and x + 1 < @grid[0].size 
            total += @grid[y+1][x+1]
        end

        total
    end

    def find_y_and_x value
        y = 0
        x = 0
        i = @grid[y][x]
        while i != value
            if @grid[y][x + 1] == nil
                y += 1
                x = 0
            else
                x += 1
            end

            i = @grid[y][x]
        end

        [y, x]
    end


end

def neighborSum 
  NeighborSum 
end 





# Your neighborSum object will be instantiated and called as such:
# obj = neighborSum.new(grid)
# param_1 = obj.adjacent_sum(value)
# param_2 = obj.diagonal_sum(value)
```