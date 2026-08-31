# Magnus Carlsen

**Author:** jstowester
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/4836617/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/4836617/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Moving from the knight's perspective

# Approach
<!-- Describe your approach to solving the problem. -->
Tracking current position, move around the board with valid moves until the next sequential number is found and move to that position.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} grid
# @return {Boolean}
def check_valid_grid(grid)
    return false if grid[0][0] != 0

    current_position = [0,0]
    n = grid.length

    (0..n**2-2).each do |i|
       move = next_position(grid, current_position, i, n)
       return false if move.empty?
       current_position = move  
    end

    return true
end

def next_position(grid, current_position, i, n)
    x = current_position[0]
    y = current_position[1]
    move = []
    moves = [
        [x+1, y+2],
        [x+2, y+1],
        [x+2, y-1],
        [x+1, y-2],
        [x-1, y-2],
        [x-2, y-1],
        [x-2, y+1],
        [x-1, y+2],
    ]
    moves.each do |position|
        j = position[0]
        k = position[1]
        if j >= 0 && j < n && k >= 0 && k < n
            move = position if grid[k][j] == i+1
        end
    end

    move
end
```