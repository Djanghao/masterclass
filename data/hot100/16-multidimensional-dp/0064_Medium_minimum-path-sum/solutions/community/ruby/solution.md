# Ruby: dynamic programming with O(n) space

**Author:** lacrosse
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/2907354/](https://leetcode.com/problems/minimum-path-sum/solutions/2907354/)

---

```ruby
def \u221E = Float::INFINITY
def min(a, b) = a < b ? a : b

def min_path_sum(grid)  
  acc = [0] + [\u221E] * (grid[0].size - 1)

  grid.each { |row|
    left = \u221E
    acc.map!.with_index { |n, i| left = row[i] + min(left, n) }
  }

  acc.last
end
```

# Time complexity

$$\\mathcal{O}(m * n)$$

# Space complexity

$$\\mathcal{O}(n)$$