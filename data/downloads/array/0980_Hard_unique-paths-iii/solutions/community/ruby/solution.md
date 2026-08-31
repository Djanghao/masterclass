# Ruby | Explained. DFS. Beats 100% time and space.

**Author:** codingstar1
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/2976603/](https://leetcode.com/problems/unique-paths-iii/solutions/2976603/)

---

# Approach
Classic DFS. Mark obstacles and visited squares with a help of an array `visited`. Count number of `steps`. If this number is equal to maximum number, then increment result by 1. If you have stepped into finish square before maximum number of steps, return.
<!-- Describe your approach to solving the problem. -->

# Code
```ruby
DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]].each
def unique_paths_iii(grid)
    m, n = grid.size, grid[0].size
    res = 0
    obs = 0
    start_i = start_j = 0
    finish_i = finish_j = 0
    visited = Array.new(m) { Array.new(n) }
    m.times do |i|
        n.times do |j|
            case grid[i][j]
            when 1
                start_i = i
                start_j = j
            when 2
                finish_i = i
                finish_j = j
            when -1
                visited[i][j] = true
                obs += 1
            end
        end
    end
    non_obs = n * m - obs
    steps = 0
    maxi = m - 1
    maxj = n - 1
    dfs = -> i, j, steps do
        return unless i.between?(0, maxi) && j.between?(0,maxj) && !visited[i][j]
        steps += 1
        if steps == non_obs
            return res += 1
        elsif i == finish_i && j == finish_j
            return
        end
        visited[i][j] = true
        DIRECTIONS.each do |(a, b)|
            dfs.(i + a, j + b, steps)
        end
        visited[i][j] = nil
    end

    dfs.(start_i, start_j, 0)
    res
end
```
<hr>

# Tests:
```ruby
require 'test/unit'
class Test_unique_paths_iii < Test::Unit::TestCase
    def test_
        assert_equal 2, unique_paths_iii([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])
        assert_equal 4, unique_paths_iii([[1,0,0,0],[0,0,0,0],[0,0,0,2]])
        assert_equal 0, unique_paths_iii([[0,1],[2,0]])
    end
end
```