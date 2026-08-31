# 774 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3550341/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3550341/)

---

```ruby
def range_add_queries n, q
    g = Array.new n do [0] * n end
    q.each do | r1, c1, r2, c2 |
        g[r1][c1] += 1
        r2v, c2v = (r2 += 1) < n, (c2 += 1) < n
        g[r1][c2] -= 1 if c2v
        g[r2][c1] -= 1 if r2v
        g[r2][c2] += 1 if c2v && r2v
    end
    s = 0; g.first.map! { s += _1 }
    for i in 1...n
        p, r, t = 0, g[i], g[i.pred]
        n.times { r[_1] = (p += r[_1]) + t[_1] }
    end
    g
end
```
"Branchless" queries:
```ruby
def range_add_queries n, q
    g = Array.new(n.succ) { [0] * n.succ }
    q.each do | r1, c1, r2, c2 |
        (t = g[r1])[c1] += 1; t[c2 += 1] -= 1
        (b = g[r2 + 1])[c1] -= 1; b[c2] += 1
    end
    g.pop; g.each(&:pop)
    s = 0; g.first.map! { s += _1 }
    for i in 1...n
        p, r, t = 0, g[i], g[i.pred]
        n.times { r[_1] = (p += r[_1]) + t[_1] }
    end
    g
end
```