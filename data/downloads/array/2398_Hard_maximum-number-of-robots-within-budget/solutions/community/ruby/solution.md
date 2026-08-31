# [Ruby] Monotonic Queue

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/3035461/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/3035461/)

---

```ruby
def maximum_robots c, r, t
    i, z, s, m = 0, c.size, 0, []
    for j in 0...z
        m.pop while m.last&.< c[j]
        m << c[j]
        s += r[j]
        if m.first + s * (j - i + 1) > t
            m.shift if m.first == c[i]
            s -= r[i]
            i += 1
        end
    end
    z - i
end
```