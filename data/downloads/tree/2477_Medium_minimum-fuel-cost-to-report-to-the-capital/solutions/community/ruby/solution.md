# [Ruby] 2 solutions

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3004721/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3004721/)

---

```ruby
def minimum_fuel_cost a, s
    h = Array.new a.size + 1 do [] end
    a.each { | (x, y) | h[x] << y; h[y] << x }
    r = 0
    l = -> n, p do
        c = h[n].reduce(1) { _2 == p ? (next _1) : _1 + l.(_2, n) }
        r += (c + s - 1) / s
        c
    end
    h[0].each { l.(_1, 0) }
    r
end
```
```ruby
def minimum_fuel_cost a, s
    h = Array.new a.size + 1 do [] end
    a.each { | (x, y) | h[x] << y; h[y] << x }
    l = -> n, p do
        r, c, f = 0, 0, 0
        h[n].each do
            next if _1 == p
            r, c, f = l.(_1, n).zip([r, c, f]).map(&:sum)
            (c -= 1; f -= s) if f >= s
        end
        f > 0 ? f -= 1 : (c += 1; f += s - 1)
        [r + c, c, f]
    end
    h[0].sum { l.(_1, 0).first }
end
```