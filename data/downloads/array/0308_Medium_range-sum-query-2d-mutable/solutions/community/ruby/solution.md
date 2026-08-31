# 89 ms, BIT 2D with O(n) init

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/4159114/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/4159114/)

---

```ruby
class NumMatrix

    def initialize m
        @m = m
        @y = y = m.size
        @x = x = m.first.size
        g = Array.new(y) { m[_1].clone }
        p = 0
        g.first.map! { p += _1 }
        for i in 1...y
            t, r, p = g[i - 1], g[i], 0
            x.times { r[_1] = t[_1] + (p += r[_1]) }
        end
        for i in (0...y).reverse_each
            i1 = (i & (i + 1)) - 1
            for j in (0...x).reverse_each
                j1 = (j & (j + 1)) - 1
                g[i][j] += g[i1][j1] if i1 >= 0 && j1 >= 0
                g[i][j] -= g[i][j1] if j1 >= 0
                g[i][j] -= g[i1][j] if i1 >= 0
            end
        end
        @g = g
    end

    def update r, c, v
        d = v - @m[r][c]
        @m[r][c] = v
        i, g, y, x = r, @g, @y, @x
        while i < y
            j = c
            r = g[i]
            while j < x
                r[j] += d
                j |= j + 1
            end
            i |= i + 1
        end
    end

    def sum_region r1, c1, r2, c2
        pref(r2, c2) -
        pref(r1 - 1, c2) -
        pref(r2, c1 - 1) +
        pref(r1 - 1, c1 - 1)
    end

    private

    def pref r, c
        return 0 if r < 0 || c < 0
        s, i, g = 0, r, @g
        until i < 0
            j = c
            r = g[i]
            until j < 0
                s += r[j]
                j = (j & (j + 1)) - 1
            end
            i = (i & (i + 1)) - 1
        end
        s
    end

end
```