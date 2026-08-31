# 63 lines

**Author:** 0x81
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/3924731/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/3924731/)

---

```ruby
def maximum_safeness_factor g
    n, q, c = g.size, [], 0
    return 0 if n == 1
    for i in 0...n
        for j in 0...n
            g[i][j] = g[i][j] == 0 ? 1000 :
                (q << (i << 9) + j; 0)
        end
    end
    until q.empty?
        c += 1
        q.size.times do
            k = q.shift
            i, j = k >> 9, k & 511
            if (y = i - 1) >= 0 && g[y][j] > c
                g[y][j] = c
                q << (y << 9) + j
            end
            if (y = i + 1) < n && g[y][j] > c
                g[y][j] = c
                q << (y << 9) + j
            end
            if (x = j - 1) >= 0 && g[i][x] > c
                g[i][x] = c
                q << (i << 9) + x
            end
            if (x = j + 1) < n && g[i][x] > c
                g[i][x] = c
                q << (i << 9) + x
            end
        end
    end
    r, t = 0, n.pred
    (0..[g[0][0], g[t][t]].min).bsearch do | m |
        f, v = false, Array.new(n) { [false] * n }
        v[0][0] = true
        (q = [0]).each do | k |
            i, j = k >> 9, k & 511
            if (y = i - 1) >= 0 && g[y][j] >= m && !v[y][j]
                break f = !f if y == t && j == t
                v[y][j] = true
                q << (y << 9) + j
            end
            if (y = i + 1) < n && g[y][j] >= m && !v[y][j]
                break f = !f if y == t && j == t
                v[y][j] = true
                q << (y << 9) + j
            end
            if (x = j - 1) >= 0 && g[i][x] >= m && !v[i][x]
                break f = !f if i == t && x == t
                v[i][x] = true
                q << (i << 9) + x
            end
            if (x = j + 1) < n && g[i][x] >= m && !v[i][x]
                break f = !f if i == t && x == t
                v[i][x] = true
                q << (i << 9) + x
            end
        end
        f ? (r = m; 1) : -1
    end
    r
end
```