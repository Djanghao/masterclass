# BFS

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/3296699/](https://leetcode.com/problems/bulb-switcher-ii/solutions/3296699/)

---

```ruby
def flip_lights n, p
    s = Set[[1] * n]
    p.times do
        t = Set.new
        s.each do | x |
            a, b, c, d = *4.times.map { x.clone }
            for i in 0...n
                a[i] ^= 1
                i.odd? ? b[i] ^= 1 : c[i] ^= 1
                d[i] ^= 1 if i % 3 == 0
            end
            t += Set[a, b, c, d]
        end
        s == t ? (break) : s = t
    end
    s.size
end
```