# Backtracking and Recursion Ruby solution

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4601652/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4601652/)

---

# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def minimum_moves(grid)
    extras = []
    zeroes = []
    # collect information regarding zeroes and cells > 1
    (0...grid.length).each do |i|
        (0...grid[0].length).each do |j|
            if grid[i][j] > 1
                extras << [i, j]
            elsif grid[i][j] == 0
                zeroes << [i, j]
            end
        end
    end
    solve(grid, extras, zeroes, 0)
end

def solve(grid, extras, zeroes, current_index)
    return 0 if current_index == zeroes.size # means all zeroes have been updated with 1

    curr_zero_x = zeroes[current_index][0]
    curr_zero_y = zeroes[current_index][1]
    result = 1000000 # so that on performing addition operation below for result, it doesn't overflow. If Integer.max, adding anything to it will exceed the value and will return incorrct value, in turn result value will be incorrect
    (0...extras.size).each do |i|
        curr_x = extras[i][0]
        curr_y = extras[i][1]

        if grid[curr_x][curr_y] > 1
            # do
            grid[curr_x][curr_y] -= 1
            grid[curr_zero_x][curr_zero_y] += 1
            # grid[curr_zero_x][curr_zero_y] = 1

            # cost of bringing stone from one cell to another
            result = [result, (curr_zero_x - curr_x).abs + (curr_zero_y - curr_y).abs + solve(grid, extras, zeroes, current_index + 1)].min

            # undo
            grid[curr_x][curr_y] += 1
            grid[curr_zero_x][curr_zero_y] -= 1
            # grid[curr_zero_x][curr_zero_y] = 0
        end
    end
    result
end
```