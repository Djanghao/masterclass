# 655 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5017791/](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5017791/)

---

```ruby
M = 1e5.to_i
V = M * 10

def minimum_time n, e, da
    r, d = [-1] * n, [M] * n
    r[0] = d[0] = 0
    g = Array.new(n) { [] }
    for x, y, l in e
        next if x == y
        g[x] << [y, l]
        g[y] << [x, l]
    end
    t = [nil] * n + [*n.times]
    for i in (1...n).reverse_each
        t[i], y = t[i * 2], t[i * 2 + 1]
        t[i] = y if d[t[i]] > d[y]
    end
    while (x = d[i = t[1]]) < V
        r[i] = x if x < da[i]
        d[j = i] = V
        j += n
        while (j /= 2) > 0
            t[j], y = t[j * 2], t[j * 2 + 1]
            t[j] = y if d[t[j]] > d[y]
        end
        next if r[i] < 0
        for j, l in g[i]
            next if d[j] == V || x + l >= d[j]
            d[j] = x + l
            j += n
            while (j /= 2) > 0
                t[j], y = t[j * 2], t[j * 2 + 1]
                t[j] = y if d[t[j]] > d[y]
            end
        end
    end
    r
end
```