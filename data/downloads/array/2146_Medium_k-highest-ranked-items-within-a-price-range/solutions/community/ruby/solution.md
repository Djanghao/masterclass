# 1742 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/3279921/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/3279921/)

---

```ruby
def highest_ranked_k_items g, p, s, k
    pl, ph, q = p.first, p.last, []
    rz, r = 0, Hash.new { _1[_2] = [] }
    si, sj = *s
    mask = (1 << 20) - 1
    q << ((si << 20) | sj)
    p = g[si][sj]
    g[si][sj] = 0
    if pl <= p && p <= ph
        return [s] if k == 1
        r[p] << q.last
        rz += 1
    end
    m, n = g.size, g[0].size
    c, d = 0, [[-1, 0], [1, 0], [0, -1], [0, 1]]
    while rz < k && !q.empty? && c += 1
        q.size.times do
            i, j = (x = q.shift) >> 20, x & mask
            d.each do | (y, x) |
                y += i; x += j
                if 0 <= y && y < m && 0 <= x && x < n &&
                   (p = g[y][x]) > 0
                    g[y][x] = 0
                    q << (yx = (y << 20) | x)
                    if pl <= p && p <= ph
                        r[(c << 20) | p] << yx
                        rz += 1
                    end
                end
            end
        end
    end
    return [] if r.empty?
    r = r.sort_by(&:first)
    while rz - (z = r.last.last.size) >= k
        r.pop; rz -= z
    end
    v = r.last.last.sort!
    v.pop while (rz -= 1) >= k
    r.flat_map do | (_, v) |
        v.sort!.map! { [_1 >> 20, _1 & mask] }
    end
end
```