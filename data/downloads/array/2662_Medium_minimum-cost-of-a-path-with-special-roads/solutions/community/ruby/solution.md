# 138 ms, O(V * V)

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/5147497/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/5147497/)

---

```ruby
D = Proc.new { (_1 - _3).abs + (_2 - _4).abs }
M = 1e6.to_i
V = M * 10

def minimum_cost s, t, e
    return 0 if s == t
    e.select! { D[*_1[0..-2]] > _1.last }
    sx, sy = s
    tx, ty = t
    return D[sx, sy, tx, ty] if e.empty?
    h = {}
    h[s] = c = 0
    for v in e
        k = (v[0] << 20) | v[1]
        v << (h[k] ||= (c += 1))
        k = (v[2] << 20) | v[3]
        v << (h[k] ||= (c += 1))
    end
    h[t] ||= (c += 1)
    g = Array.new(c.next) { [] }
    g[0] << [c, D[sx, sy, tx, ty]]
    d = [M] * c.next
    d[0] = 0
    e.size.times do
        v = e.shift
        g[0] << [v[-2], D[sx, sy, v[0], v[1]]]
        g[v[-2]] << [v[-1], v[4]]
        rx, ry, gv = v[2], v[3], g[v[-1]]
        for u in e
            gv << [u[-2], D[rx, ry, u[0], u[1]]]
        end
        gv << [c, D[rx, ry, tx, ty]]
        e << v
    end
    loop do
        m = d.min
        break if m == d.last
        i = d.index m
        d[i] = V
        for j, c in g[i]
            next if d[j] == V || m + c >= d[j]
            d[j] = m + c
        end
    end
    d.last
end
```