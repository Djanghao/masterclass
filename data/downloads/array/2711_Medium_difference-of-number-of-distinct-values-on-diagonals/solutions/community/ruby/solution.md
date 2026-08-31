# O(m * n)

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3570637/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3570637/)

---

```ruby
def difference_of_distinct_values g
    m, n = g.size, g.last.size
    r = Array.new(m) { [nil] * n }
    p = Proc.new do | y, x |
        s, k = Set[], [m - y, n - x].min
        i, j = y + k, x + k
        while (i -= 1; j -= 1) >= x
            r[i][j] = s.size
            s << g[i][j]
        end
        s = Set[g[y][x]]
        while (y += 1) < m && (x += 1) < n
            r[y][x] = (r[y][x] - s.size).abs
            s << g[y][x]
        end
    end
    n.times { p.(0, _1) }
    m.pred.times { p.(_1.succ, 0) }
    r
end
```