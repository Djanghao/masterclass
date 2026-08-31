# Ruby | Beats 90.00% | 57ms

**Author:** mrabets
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4120427/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4120427/)

---

# Code
```
# @param {Integer[][]} moves
# @return {String}
def tictactoe(moves)
    grid = Array.new(3) { Array.new(3) }

    moves.each_with_index do |move, i|
        grid[move[0]][move[1]] = i.even? ? true : false
    end

    for i in (0...grid.size)
        return tic_or_tac(grid[i][0]) if won?(grid[i][0], grid[i][1], grid[i][2])
        return tic_or_tac(grid[0][i]) if won?(grid[0][i], grid[1][i], grid[2][i])
    end

    return tic_or_tac(grid[0][0]) if won?(grid[0][0], grid[1][1], grid[2][2])
    return tic_or_tac(grid[0][2]) if won?(grid[0][2], grid[1][1], grid[2][0])

    moves.size == 9 ? "Draw" : "Pending"
end

def won?(a, b, c)
    return false if a.nil?

    a == b && b == c
end

def tic_or_tac(n)
    n == false ? "B" : "A"
end
```