# Ruby | BFS with sets

**Author:** codingstar1
**Votes:** 1
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2838638/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2838638/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
BFS is the best way for such problems.
# Approach
<!-- Describe your approach to solving the problem. -->
First of all let's find exits and put them all to a set `exits`.
We'll implement BFS with a help of queue.
Will add a new cell to the queue unless it wasn't seen already and if it fits the borders of maze and isn't a wall-cell.
Increment a variable `steps` on each iteration and return it if a current cell is included in `exits`.
Return `-1` if queue is empty and we still haven't reached any exit.
# Code
```ruby
require 'set'
def nearest_exit(maze, entrance)
    m, n = maze.length, maze[0].length
    exits = Set.new
    [0, m - 1].each do |row|
        n.times do |col|
            exits << [row, col] if maze[row][col] == ?.
        end
    end
    [0, n - 1].each do |col|
        (1..m - 2).each do |row|
            exits << [row, col] if maze[row][col] == ?.
        end
    end
    exits.delete(entrance)
    seen = Set[entrance]
    steps = 0
    queue = [entrance]
    until queue.empty?
        steps += 1
        queue.length.times do
            (i, j) = *queue.shift
            [[1, 0], [-1, 0], [0, 1], [0, -1]].each do |(a,b)|
                ii, jj = i + a, j + b
                cell = [ii, jj]
                next unless seen.add?(cell) && ii.between?(0, m - 1) && jj.between?(0, n - 1) && maze[ii][jj] == ?.
                return steps if exits === cell
                queue << cell
            end
        end
    end
    -1
end
```
<hr>

# Tests:
```ruby
require 'test/unit'
class Test_nearest_exit < Test::Unit::TestCase
    def test_
        assert_equal 1, nearest_exit(maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2])
        assert_equal 2, nearest_exit(maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0])
        assert_equal -1, nearest_exit(maze = [[".","+"]], entrance = [0,0])
    end
end
```