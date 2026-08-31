# DFS

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/4173134/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/4173134/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(mn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(mn)
# Code
```
# @param {Character[][]} grid
# @return {Boolean}
def contains_cycle(grid)
    c = CycleDetector.new(grid)
    if c.cycle_found
        return true
    end

    return false
end

class CycleDetector
    attr_accessor :visited, :cycle_found

    def initialize(grid)
        @visited = {}
        @grid = grid
        @cycle_found = false
        detect
    end

    def detect
        @grid.each_with_index do |row, y|
            row.each_with_index do |col, x|
                if @cycle_found
                    return
                end

                starting_point = [y, x]

                if @visited[starting_point]
                    next
                end

                dfs starting_point, starting_point, nil
            end
        end
    end

    def dfs starting_point, current_point, prev_point, moves_made = 1

        if moves_made > 1
            if ( @visited[[current_point[0], current_point[1]]] || (starting_point == current_point) ) and moves_made > 3
                @cycle_found = true
                return false
            end

            @visited[[current_point[0], current_point[1]]] = true
        end


        if @cycle_found 
            return false
        end

        moves = next_valid_moves current_point, prev_point, @grid

        moves.each do |m|
            res = dfs starting_point, m, current_point, moves_made + 1
            if res == false
                return
            end
        end
    end
end

def next_valid_moves current_point, prev_point, grid
    # go down 
    moves = []
    if current_point[0] < grid.size - 1
        down = [ current_point[0] + 1, current_point[1] ]
        if down != prev_point and grid[down[0]] and grid[down[0]][down[1]] == grid[current_point[0]][current_point[1]]
            moves << down
        end
    end

    if current_point[0] > 0
        up = [ current_point[0] - 1, current_point[1] ]
        if up != prev_point and grid[up[0]] and grid[up[0]][up[1]]  == grid[current_point[0]][current_point[1]]
            moves << up
        end
    end

    if current_point[1] > 0
        left = [ current_point[0], current_point[1] - 1 ]
        if left != prev_point and grid[left[0]] and grid[left[0]][left[1]] == grid[current_point[0]][current_point[1]]
            moves << left
        end
    end

    if current_point[1] < grid[0].size - 1
        right = [ current_point[0], current_point[1] + 1] 
        if right != prev_point and grid[right[0]] and grid[right[0]][right[1]] == grid[current_point[0]][current_point[1]]
            moves << right 
        end
    end

    moves
end
```