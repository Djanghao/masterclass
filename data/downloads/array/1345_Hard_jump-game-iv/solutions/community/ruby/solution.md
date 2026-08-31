# 291 ms

**Author:** 0x81
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3257872/](https://leetcode.com/problems/jump-game-iv/solutions/3257872/)

---

```ruby
def min_jumps a
    return 0 if (t = a.size - 1) < 1
    g = a.each_index.group_by { a[_1] }
    s, q, v = 0, [0], [false] * t
    v[0] = true
    loop do
        (s += 1; q.size).times do
            i = q.shift
            c = (g[a[i]] || []) << i + 1
            g.delete a[i]
            c << i - 1 if i > 0
            c.each do | x |
                return s if x == t
                next if v[x]
                v[x] = true
                q << x
            end
        end
    end
end
```