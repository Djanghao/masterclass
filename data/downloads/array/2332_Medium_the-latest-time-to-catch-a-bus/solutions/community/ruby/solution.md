# [Ruby] 247 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/3020636/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/3020636/)

---

```ruby
def latest_time_catch_the_bus b, p, c
    [b, p].each(&:sort!)
    d = b.map do | d |
        t, r = 0, []
        while t < c && (x = p[0]) && x <= d
            r << p.shift
            t += 1
        end
        r
    end
    d.each_with_index.reverse_each do | x, i |
        t = b[i]
        return t if x.size < c && x.last != t
        r = x.first - 1
        for j in 1...x.size
            r = x[j] - 1 if (x[j] - x[j - 1]) > 1
        end
        return r if i < 1 || r > x.first || r != d[i - 1].last
    end
end
```