# Ruby - BFS

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/1294786/](https://leetcode.com/problems/out-of-boundary-paths/solutions/1294786/)

---

`paths[i, j]` - count of ways for the ball to get to positiion `(i, j)` after current number of moves.

```ruby
def find_paths(m, n, max_move, start_row, start_column)
  m1 = m - 1; n1 = n - 1
  paths = { [start_row, start_column] => 1 }
  out = 0
  max_move.times do
    tmp = Hash.new(0)
    paths.each do |(i, j), c|
      i == 0  ? out += c : tmp[[i - 1, j]] += c
      i == m1 ? out += c : tmp[[i + 1, j]] += c
      j == 0  ? out += c : tmp[[i, j - 1]] += c
      j == n1 ? out += c : tmp[[i, j + 1]] += c
    end
    paths = tmp
  end
  out % 1000000007
end
```

Time complexity: `O(maxMove * m * n)`
Space complexity: `O(m * n)`